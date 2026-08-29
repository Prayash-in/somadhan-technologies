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
      // If unique constraint violation on razorpay_payment_id
      if (updateError.code === "23505") {
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
