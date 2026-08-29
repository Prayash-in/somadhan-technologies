import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import { isRazorpayWebhookConfigured, verifyWebhookSignature } from "@/lib/razorpay";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (!isRazorpayWebhookConfigured()) {
    return NextResponse.json({ success: false, message: "Enrollment and payment will be available soon" }, { status: 503 });
  }
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature") || "";

    if (!signature) {
      return NextResponse.json({ success: false, message: "Missing webhook signature" }, { status: 400 });
    }

    let isValid = false;
    try {
      isValid = verifyWebhookSignature(rawBody, signature);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "config error";
      console.error("webhook verify config error:", msg);
      return NextResponse.json({ success: false, message: "Enrollment and payment will be available soon" }, { status: 503 });
    }

    if (!isValid) {
      console.warn("Invalid webhook signature");
      return NextResponse.json({ success: false, message: "Invalid webhook signature" }, { status: 400 });
    }

    const payload = JSON.parse(rawBody);
    const event: string = payload?.event || "";

    // Only process successful payment events
    const relevantEvents = new Set([
      "payment.captured",
      "payment.authorized",
      "order.paid",
    ]);

    if (!relevantEvents.has(event)) {
      // Acknowledge but ignore other events
      return NextResponse.json({ success: true, message: `Ignored event ${event}` });
    }

    const supabase = getSupabaseServerClient();

    // Payload structure for payment.captured:
    // payload.payload.payment.entity => { id: pay_..., order_id: order_..., status: captured, ... }
    // For order.paid: payload.payload.order.entity, payload.payload.payment.entity
    let orderId: string | null = null;
    let paymentId: string | null = null;

    if (event === "order.paid") {
      paymentId = payload?.payload?.payment?.entity?.id || null;
      orderId = payload?.payload?.payment?.entity?.order_id || payload?.payload?.order?.entity?.id || null;
    } else {
      paymentId = payload?.payload?.payment?.entity?.id || null;
      orderId = payload?.payload?.payment?.entity?.order_id || null;
    }

    if (!orderId || !paymentId) {
      console.warn("Webhook missing order/payment id:", { event, orderId, paymentId });
      return NextResponse.json({ success: true, message: "No order/payment id in payload" });
    }

    // Idempotent: check if already PAID
    const { data: enrollment, error: findError } = await supabase
      .from("enrollments")
      .select("id, payment_status, razorpay_payment_id")
      .eq("razorpay_order_id", orderId)
      .maybeSingle();

    if (findError) {
      console.error("webhook find error:", findError);
      return NextResponse.json({ success: false, message: "Something went wrong. Please try again later." }, { status: 500 });
    }

    if (!enrollment) {
      console.warn("Webhook: enrollment not found for order", orderId);
      // Still return 200 to prevent Razorpay retries for unknown orders
      return NextResponse.json({ success: true, message: "Enrollment not found, ignored" });
    }

    if (enrollment.payment_status === "PAID") {
      // Already verified — idempotent success
      return NextResponse.json({ success: true, message: "Already paid" });
    }

    // Check duplicate payment_id
    const { data: dup } = await supabase
      .from("enrollments")
      .select("id")
      .eq("razorpay_payment_id", paymentId)
      .maybeSingle();
    if (dup && dup.id !== enrollment.id) {
      console.warn("Webhook duplicate payment_id:", paymentId);
      return NextResponse.json({ success: true, message: "Duplicate payment, ignored" });
    }

    // Mark as PAID — do not overwrite if already PAID (idempotent)
    const { error: updErr } = await supabase
      .from("enrollments")
      .update({
        payment_status: "PAID",
        razorpay_payment_id: paymentId,
      })
      .eq("id", enrollment.id)
      .eq("payment_status", "PENDING");

    if (updErr) {
      console.error("webhook update error:", updErr);
      if (updErr.code === "23505") {
        return NextResponse.json({ success: true, message: "Duplicate payment_id constraint, ignored" });
      }
      return NextResponse.json({ success: false, message: "Something went wrong. Please try again later." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Webhook processed, enrollment marked PAID" });
  } catch (err) {
    console.error("POST /api/webhooks/razorpay error:", err);
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again later." }, { status: 500 });
  }
}

// Razorpay requires 200 for webhook health check — also support GET for verification
export async function GET() {
  return NextResponse.json({ status: "ok", endpoint: "/api/webhooks/razorpay", method: "POST required" });
}
