"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState } from "react";

function FailedContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const enrollmentId = searchParams.get("enrollmentId");
  const reason = searchParams.get("reason") || "Payment was not completed.";
  const [retryStatus, setRetryStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleRetry() {
    if (!enrollmentId) {
      router.push("/training/agentic-ai-bootcamp");
      return;
    }
    setRetryStatus("loading");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/payments/retry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enrollmentId }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        setErrorMsg(data?.message || "Retry failed. Please try again.");
        setRetryStatus("error");
        return;
      }
      const keyId: string = data.keyId;
      const orderId: string = data.orderId;
      const amount: number = data.amount;
      const courseName: string = data.courseName || "Course";
      if (!keyId || !window.Razorpay) {
        // Load script if needed
        const loaded = await new Promise<boolean>((resolve) => {
          if (window.Razorpay) return resolve(true);
          const s = document.createElement("script");
          s.src = "https://checkout.razorpay.com/v1/checkout.js";
          s.onload = () => resolve(true);
          s.onerror = () => resolve(false);
          document.body.appendChild(s);
        });
        if (!loaded || !window.Razorpay) {
          setErrorMsg("Failed to load payment gateway.");
          setRetryStatus("error");
          return;
        }
      }
      const options: Record<string, unknown> = {
        key: keyId || data.keyId,
        amount,
        currency: "INR",
        name: "Somadhan Technologies",
        description: courseName,
        order_id: orderId,
        theme: { color: "#2d7a4f" },
        handler: async function (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) {
          const vr = await fetch("/api/payments/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const vData = await vr.json().catch(() => ({}));
          if (vr.ok && vData?.success) {
            router.push(`/enrollment/success?enrollmentId=${encodeURIComponent(enrollmentId)}`);
          } else {
            setErrorMsg(vData?.message || "Verification failed");
            setRetryStatus("error");
          }
        },
        modal: { ondismiss: () => setRetryStatus("idle") },
      };
      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();
      setRetryStatus("idle");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setRetryStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
        <div className="bg-cream px-8 py-8 text-center sm:px-10 sm:py-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-terra-soft ring-1 ring-terra/15">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terra text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          <h1 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">Payment Not Completed</h1>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
            Your registration has been saved, but your payment was not completed.
          </p>
          <p className="mt-2 text-xs text-ink-soft/70">{reason}</p>
          {enrollmentId ? (
            <p className="mt-3 font-mono text-xs text-ink-soft/60">Enrollment ID: {enrollmentId}</p>
          ) : null}
        </div>

        <div className="px-6 py-8 sm:px-10">
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
            You can try the payment again — no need to fill the form twice. We&apos;ve kept your registration safe.
          </div>

          {errorMsg ? (
            <div className="mt-4 rounded-xl border border-terra/20 bg-terra-soft px-4 py-3 text-sm text-terra-deep" role="alert">
              {errorMsg}
            </div>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {enrollmentId ? (
              <button
                type="button"
                onClick={handleRetry}
                disabled={retryStatus === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-accent-deep disabled:opacity-60"
              >
                {retryStatus === "loading" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Starting Payment…
                  </>
                ) : (
                  "Try Payment Again"
                )}
              </button>
            ) : null}
            <Link
              href="/training/agentic-ai-bootcamp"
              className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent"
            >
              Back to Course
            </Link>
          </div>

          <p className="mt-6 text-center text-xs leading-relaxed text-ink-soft/60">
            Need help? Contact us at <a href="mailto:director@somadhantechnologies.in" className="font-medium text-accent hover:text-accent-deep">director@somadhantechnologies.in</a> or <Link href="/contact" className="font-medium text-accent hover:text-accent-deep">use our contact form</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EnrollmentFailedPage() {
  return (
    <div className="bg-paper">
      <Suspense fallback={<div className="mx-auto max-w-3xl px-5 py-16 text-center text-sm text-ink-soft">Loading…</div>}>
        <FailedContent />
      </Suspense>
    </div>
  );
}

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void; on: (ev: string, cb: () => void) => void };
  }
}
