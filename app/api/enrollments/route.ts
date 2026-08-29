import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import { getCourseById } from "@/lib/courses";
import { validateEnrollmentInput } from "@/lib/validation";
import { createRazorpayOrder, isRazorpayConfigured } from "@/lib/razorpay";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FRIENDLY_NOT_CONFIGURED = "Enrollment and payment will be available soon";
const FRIENDLY_GENERIC = "Something went wrong. Please try again later.";

export async function GET() {
  // Used by frontend to decide whether to show payment form or friendly message.
  // Never exposes secrets, only boolean.
  return NextResponse.json({ razorpayConfigured: isRazorpayConfigured() });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const { valid, errors, sanitized } = validateEnrollmentInput(body);
    if (!valid || !sanitized) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const course = getCourseById(sanitized.courseId);
    if (!course) {
      return NextResponse.json(
        { success: false, errors: [{ field: "courseId", message: "Invalid course selected" }] },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();

    // Optional: try to fetch course price from DB if courses table exists (authoritative check)
    // Fallback to registry if DB not available
    let amountPaise = course.pricePaise;
    let courseName = course.name;
    try {
      const { data: dbCourse } = await supabase
        .from("courses")
        .select("price_paise, name")
        .eq("id", course.id)
        .eq("is_active", true)
        .maybeSingle();
      if (dbCourse) {
        amountPaise = dbCourse.price_paise;
        courseName = dbCourse.name;
      }
    } catch {
      // ignore, use registry
    }

    // Idempotency: if same email+course has a PENDING enrollment within last 15 mins, reuse it
    const fifteenMinsAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();
    const { data: existing } = await supabase
      .from("enrollments")
      .select("id, razorpay_order_id, amount, currency, payment_status, created_at")
      .eq("email", sanitized.email)
      .eq("course_id", course.id)
      .eq("payment_status", "PENDING")
      .gte("created_at", fifteenMinsAgo)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existing && existing.razorpay_order_id) {
      // Reuse existing pending enrollment
      const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
      return NextResponse.json({
        success: true,
        reused: true,
        enrollmentId: existing.id,
        orderId: existing.razorpay_order_id,
        amount: existing.amount,
        currency: existing.currency || "INR",
        courseName,
        courseId: course.id,
        keyId,
      });
    }

    // Create enrollment with PENDING status
    const { data: enrollment, error: insertError } = await supabase
      .from("enrollments")
      .insert({
        name: sanitized.name,
        email: sanitized.email,
        phone: sanitized.phone,
        institution: sanitized.institution,
        city: sanitized.city,
        course_id: course.id,
        course_name: courseName,
        amount: amountPaise,
        currency: "INR",
        payment_status: "PENDING",
      })
      .select("id")
      .single();

    if (insertError || !enrollment) {
      console.error("enrollments insert error:", insertError);
      return NextResponse.json({ success: false, message: FRIENDLY_GENERIC }, { status: 500 });
    }

    // If Razorpay is not configured, do not start payment flow — friendly message only.
    if (!isRazorpayConfigured()) {
      console.warn("Razorpay not configured — enrollment saved but payment withheld:", enrollment.id);
      return NextResponse.json(
        {
          success: false,
          message: FRIENDLY_NOT_CONFIGURED,
          enrollmentId: enrollment.id,
          razorpayConfigured: false,
        },
        { status: 503 }
      );
    }

    // Create Razorpay Order — backend is source of truth for amount
    let orderId: string;
    try {
      const receipt = `enr_${enrollment.id.slice(0, 8)}_${Date.now().toString().slice(-6)}`;
      const order = await createRazorpayOrder({
        amountPaise,
        currency: "INR",
        receipt,
        notes: {
          enrollment_id: enrollment.id,
          course_id: course.id,
          email: sanitized.email,
        },
      });
      orderId = order.id;
    } catch (rzpError: unknown) {
      console.error("Razorpay order error:", rzpError);
      // Never expose technical Razorpay details to client in production.
      return NextResponse.json(
        { success: false, message: FRIENDLY_GENERIC, enrollmentId: enrollment.id },
        { status: 502 }
      );
    }

    // Save order id
    const { error: updateError } = await supabase
      .from("enrollments")
      .update({ razorpay_order_id: orderId })
      .eq("id", enrollment.id);

    if (updateError) {
      console.error("Failed to save razorpay_order_id:", updateError);
      // Still return order so payment can proceed; webhook/verify can still succeed
    }

    const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";

    return NextResponse.json({
      success: true,
      enrollmentId: enrollment.id,
      orderId,
      amount: amountPaise,
      currency: "INR",
      courseName,
      courseId: course.id,
      keyId,
    });
  } catch (err) {
    console.error("POST /api/enrollments error:", err);
    return NextResponse.json({ success: false, message: FRIENDLY_GENERIC }, { status: 500 });
  }
}
