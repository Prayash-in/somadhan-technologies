import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import { validateVerifyInput } from "@/lib/validation";
import { isRazorpayConfigured, verifyPaymentSignature } from "@/lib/razorpay";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FRIENDLY_GENERIC = "Something went wrong. Please try again later.";
const FRIENDLY_NOT_CONFIGURED = "Enrollment and payment will be available soon";

export async function POST(req: NextRequest) {
  if (!isRazorpayConfigured()) {
    return NextResponse.json({ success: false, message: FRIENDLY_NOT_CONFIGURED }, { status: 503 });
  }
  try {
    const body = await req.json().catch(() => null);
    const { valid, errors, sanitized } = validateVerifyInput(body);
    if (!valid || !sanitized) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = sanitized;

    const supabase = getSupabaseServerClient();

    // Find enrollment by order_id
    const { data: enrollment, error: findError } = await supabase
      .from("enrollments")
      .select("*")
      .eq("razorpay_order_id", razorpay_order_id)
      .maybeSingle();

    if (findError) {
      console.error("verify find error:", findError);
      return NextResponse.json({ success: false, message: FRIENDLY_GENERIC }, { status: 500 });
    }
    if (!enrollment) {
      return NextResponse.json({ success: false, message: "Enrollment not found for this order" }, { status: 404 });
    }

    // Idempotent: if already PAID
    if (enrollment.payment_status === "PAID") {
      // If same payment_id, return success; if different, we keep original PAID and warn
      if (enrollment.razorpay_payment_id === razorpay_payment_id) {
        return NextResponse.json({
          success: true,
          message: "Payment already verified",
          enrollmentId: enrollment.id,
          payment_status: "PAID",
        });
      }
      // Already PAID with different payment_id — prevent overwrite
      return NextResponse.json({
        success: true,
        message: "Enrollment already marked as paid",
        enrollmentId: enrollment.id,
        payment_status: "PAID",
      });
    }

    // Verify signature server-side — NEVER trust frontend
    let isValid = false;
    try {
      isValid = verifyPaymentSignature({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
    } catch (e) {
      console.error("signature verification config error:", e);
      return NextResponse.json({ success: false, message: FRIENDLY_NOT_CONFIGURED }, { status: 503 });
    }

    if (!isValid) {
      console.warn("Invalid payment signature for order:", razorpay_order_id);
      return NextResponse.json({ success: false, message: "Payment signature verification failed" }, { status: 400 });
    }

    // Prevent duplicate payment_id across enrollments
    const { data: duplicate } = await supabase
      .from("enrollments")
      .select("id")
      .eq("razorpay_payment_id", razorpay_payment_id)
      .maybeSingle();
    if (duplicate && duplicate.id !== enrollment.id) {
      console.warn("Duplicate payment_id detected:", razorpay_payment_id);
      return NextResponse.json({ success: false, message: "This payment has already been processed" }, { status: 409 });
    }

    // Single-payment rule: signature is valid, but another PAID enrollment already
    // exists for this email+course (e.g. double submit). Keep the original PAID
    // and report the duplicate for manual refund review — do not create a 2nd PAID.
    const { data: otherPaid } = await supabase
      .from("enrollments")
      .select("id")
      .eq("email", (enrollment.email as string).toLowerCase().trim())
      .eq("course_id", enrollment.course_id as string)
      .eq("payment_status", "PAID")
      .neq("id", enrollment.id as string)
      .limit(1)
      .maybeSingle();

    if (otherPaid) {
      console.warn("Duplicate PAID attempt blocked for email+course:", {
        enrollmentId: enrollment.id,
        keptEnrollmentId: (otherPaid as { id: string }).id,
        paymentId: razorpay_payment_id,
      });
      return NextResponse.json(
        {
          success: false,
          alreadyPaid: true,
          message: "This email is already enrolled in this course. Each email can only pay once per course.",
          enrollmentId: (otherPaid as { id: string }).id,
        },
        { status: 409 }
      );
    }

    // Update to PAID
    const { error: updateError, data: updated } = await supabase
      .from("enrollments")
      .update({
        payment_status: "PAID",
        razorpay_payment_id,
        razorpay_signature,
      })
      .eq("id", enrollment.id)
      .eq("payment_status", "PENDING") // optimistic concurrency — only if still pending
      .select("id, payment_status")
      .maybeSingle();

    if (updateError) {
      console.error("update to PAID error:", updateError);
      // Unique violations: razorpay_payment_id reuse OR single-PAID-per-email+course race
      if (updateError.code === "23505") {
        if ((updateError.message || "").includes("uq_enrollments_paid_email_course")) {
          return NextResponse.json(
            {
              success: false,
              alreadyPaid: true,
              message: "This email is already enrolled in this course. Each email can only pay once per course.",
              enrollmentId: enrollment.id,
            },
            { status: 409 }
          );
        }
        return NextResponse.json({ success: false, message: "This payment has already been processed" }, { status: 409 });
      }
      return NextResponse.json({ success: false, message: FRIENDLY_GENERIC }, { status: 500 });
    }

    // If no row updated, it was already changed (race)
    if (!updated) {
      const { data: refreshed } = await supabase
        .from("enrollments")
        .select("payment_status, razorpay_payment_id")
        .eq("id", enrollment.id)
        .single();
      if (refreshed?.payment_status === "PAID") {
        return NextResponse.json({
          success: true,
          message: "Payment already verified",
          enrollmentId: enrollment.id,
          payment_status: "PAID",
        });
      }
      return NextResponse.json({ success: false, message: "Failed to verify payment (concurrent update)" }, { status: 409 });
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      enrollmentId: enrollment.id,
      payment_status: "PAID",
    });
  } catch (err) {
    console.error("POST /api/payments/verify error:", err);
    return NextResponse.json({ success: false, message: FRIENDLY_GENERIC }, { status: 500 });
  }
}
