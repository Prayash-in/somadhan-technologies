import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import { getCourseById } from "@/lib/courses";
import { createRazorpayOrder, isRazorpayConfigured } from "@/lib/razorpay";

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
    const enrollmentId = (body?.enrollmentId || body?.enrollment_id || body?.id || "") as string;
    const email = (body?.email || "") as string;

    if (!enrollmentId && !email) {
      return NextResponse.json({ success: false, message: "enrollmentId or email is required" }, { status: 400 });
    }

    const supabase = getSupabaseServerClient();
    let enrollment: Record<string, unknown> | null = null;

    if (enrollmentId) {
      const { data, error } = await supabase.from("enrollments").select("*").eq("id", enrollmentId).maybeSingle();
      if (error) return NextResponse.json({ success: false, message: FRIENDLY_GENERIC }, { status: 500 });
      enrollment = data;
    } else if (email) {
      const courseId = (body?.courseId || body?.course_id || "") as string;
      if (!courseId) return NextResponse.json({ success: false, message: "courseId required with email" }, { status: 400 });
      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .eq("email", email.toLowerCase().trim())
        .eq("course_id", courseId)
        .eq("payment_status", "PENDING")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error) return NextResponse.json({ success: false, message: FRIENDLY_GENERIC }, { status: 500 });
      enrollment = data;
    }

    if (!enrollment) {
      return NextResponse.json({ success: false, message: "Pending enrollment not found" }, { status: 404 });
    }

    if ((enrollment as { payment_status: string }).payment_status === "PAID") {
      return NextResponse.json({ success: false, message: "Enrollment already paid" }, { status: 400 });
    }

    const course = getCourseById((enrollment as { course_id: string }).course_id);
    if (!course) {
      return NextResponse.json({ success: false, message: "Course not found" }, { status: 400 });
    }

    // If existing order exists and is recent (e.g., within 15 min), reuse it instead of creating new
    // But spec allows retry with existing pending enrollment; we'll create a new order for reliability
    const amountPaise = course.pricePaise;

    let orderId: string;
    try {
      const receipt = `retry_${(enrollment as { id: string }).id.slice(0, 8)}_${Date.now().toString().slice(-6)}`;
      const order = await createRazorpayOrder({
        amountPaise,
        currency: "INR",
        receipt,
        notes: {
          enrollment_id: (enrollment as { id: string }).id,
          course_id: course.id,
          email: (enrollment as { email: string }).email,
          retry: "true",
        },
      });
      orderId = order.id;
    } catch (e) {
      console.error("retry order create error:", e);
      return NextResponse.json({ success: false, message: FRIENDLY_GENERIC }, { status: 502 });
    }

    // Update enrollment with new order id (keep PENDING)
    const { error: updErr } = await supabase
      .from("enrollments")
      .update({ razorpay_order_id: orderId })
      .eq("id", (enrollment as { id: string }).id);

    if (updErr) {
      console.error("retry update error:", updErr);
      return NextResponse.json({ success: false, message: FRIENDLY_GENERIC }, { status: 500 });
    }

    const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";

    return NextResponse.json({
      success: true,
      enrollmentId: (enrollment as { id: string }).id,
      orderId,
      amount: amountPaise,
      currency: "INR",
      courseName: course.name,
      courseId: course.id,
      keyId,
    });
  } catch (err) {
    console.error("POST /api/payments/retry error:", err);
    return NextResponse.json({ success: false, message: FRIENDLY_GENERIC }, { status: 500 });
  }
}
