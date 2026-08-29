"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Course } from "@/lib/courses";

const FRIENDLY_NOT_CONFIGURED = "Enrollment and payment will be available soon";

type FieldErrors = Record<string, string>;

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:bg-cream/60 disabled:cursor-not-allowed";
const labelClasses = "text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft";
const errorClasses = "text-xs text-terra";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void; on: (ev: string, cb: () => void) => void };
  }
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);
    if (document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
      // already loading
      const check = setInterval(() => {
        if (window.Razorpay) {
          clearInterval(check);
          resolve(true);
        }
      }, 100);
      setTimeout(() => {
        clearInterval(check);
        resolve(!!window.Razorpay);
      }, 5000);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function EnrollmentForm({ course }: { course: Course }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    city: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "opening" | "verifying">("idle");
  const [enrollmentId, setEnrollmentId] = useState<string | null>(null);
  const [retryOrderId, setRetryOrderId] = useState<string | null>(null);
  const [razorpayConfigured, setRazorpayConfigured] = useState<boolean | null>(null);

  const isBusy = status !== "idle";
  const isPaymentDisabled = razorpayConfigured === false;

  useEffect(() => {
    let cancelled = false;
    fetch("/api/enrollments", { method: "GET" })
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setRazorpayConfigured(Boolean(data?.razorpayConfigured));
      })
      .catch(() => {
        if (!cancelled) setRazorpayConfigured(true); // assume configured if check fails; server will still gate payment
      });
    return () => {
      cancelled = true;
    };
  }, []);

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((p) => ({ ...p, [field]: e.target.value }));
      setFieldErrors((p) => {
        const n = { ...p };
        delete n[field];
        return n;
      });
    };
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Prevent payment flow if Razorpay not configured — friendly UX, no technical error
    if (isPaymentDisabled) {
      setGlobalError(FRIENDLY_NOT_CONFIGURED);
      return;
    }
    setGlobalError(null);
    setFieldErrors({});

    // client-side required validation
    const errs: FieldErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = "Full name must be at least 2 characters";
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email.trim())) errs.email = "Enter a valid email";
    if (!/^[0-9+\-\s()]{8,20}$/.test(form.phone.trim())) errs.phone = "Enter a valid WhatsApp number";
    if (!form.institution.trim() || form.institution.trim().length < 2) errs.institution = "Required — school / college / organization";
    if (!form.city.trim() || form.city.trim().length < 2) errs.city = "City is required";
    if (Object.keys(errs).length) {
      setFieldErrors(errs);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          institution: form.institution.trim(),
          city: form.city.trim(),
          courseId: course.id,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        // Handle not-configured gracefully — no technical details, friendly message only
        if (res.status === 503 || data?.razorpayConfigured === false) {
          setRazorpayConfigured(false);
          setGlobalError(FRIENDLY_NOT_CONFIGURED);
          setStatus("idle");
          return;
        }
        if (data?.errors && Array.isArray(data.errors)) {
          const fe: FieldErrors = {};
          for (const er of data.errors as { field: string; message: string }[]) {
            if (er.field !== "_") fe[er.field === "courseId" ? "city" : er.field] = er.message;
          }
          if (Object.keys(fe).length) setFieldErrors(fe);
          setGlobalError(data?.message || "Please fix the form errors and try again.");
        } else {
          // Generic friendly fallback — never expose internal error text
          setGlobalError(data?.message || FRIENDLY_NOT_CONFIGURED);
        }
        setStatus("idle");
        return;
      }

      const orderId: string = data.orderId;
      const keyId: string = data.keyId;
      const amount: number = data.amount;
      const eid: string = data.enrollmentId;
      setEnrollmentId(eid);
      setRetryOrderId(orderId);

      if (!keyId) {
        setRazorpayConfigured(false);
        setGlobalError(FRIENDLY_NOT_CONFIGURED);
        setStatus("idle");
        return;
      }

      setStatus("opening");
      const loaded = await loadRazorpayScript();
      if (!loaded || !window.Razorpay) {
        setGlobalError("Enrollment and payment will be available soon");
        setStatus("idle");
        return;
      }

      const options: Record<string, unknown> = {
        key: keyId,
        amount,
        currency: "INR",
        name: "Somadhan Technologies",
        description: course.name,
        order_id: orderId,
        prefill: {
          name: form.name.trim(),
          email: form.email.trim(),
          contact: form.phone.trim(),
        },
        notes: {
          enrollment_id: eid,
          course_id: course.id,
        },
        theme: { color: "#2d7a4f" },
        modal: {
          ondismiss: function () {
            setStatus("idle");
            // Keep enrollment — allow retry
            // Optionally navigate to failed page with retry
          },
        },
        handler: async function (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) {
          setStatus("verifying");
          try {
            const verifyRes = await fetch("/api/payments/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const vData = await verifyRes.json().catch(() => ({}));
            if (verifyRes.ok && vData?.success) {
              router.push(`/enrollment/success?enrollmentId=${encodeURIComponent(eid)}&course=${encodeURIComponent(course.id)}`);
            } else {
              router.push(`/enrollment/failed?enrollmentId=${encodeURIComponent(eid)}&reason=${encodeURIComponent(vData?.message || "Verification failed")}`);
            }
          } catch {
            router.push(`/enrollment/failed?enrollmentId=${encodeURIComponent(eid)}&reason=Verification%20error`);
          }
        },
      };

      const rzp = new window.Razorpay!(options);
      // Handle payment.failed event if available
      try {
        rzp.on("payment.failed", function () {
          setStatus("idle");
          router.push(`/enrollment/failed?enrollmentId=${encodeURIComponent(eid)}&reason=Payment%20failed`);
        });
      } catch {
        // ignore
      }
      rzp.open();
      // after open, keep opening state until handler or dismiss
      setTimeout(() => setStatus("idle"), 1000);
    } catch (err) {
      console.error(err);
      setGlobalError("Network error. Please check your connection and try again.");
      setStatus("idle");
    }
  }

  async function handleRetry() {
    const eid = enrollmentId;
    if (!eid) return;
    setGlobalError(null);
    setStatus("submitting");
    try {
      const res = await fetch("/api/payments/retry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enrollmentId: eid }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        if (res.status === 503) {
          setRazorpayConfigured(false);
          setGlobalError(FRIENDLY_NOT_CONFIGURED);
        } else {
          setGlobalError(data?.message || "Enrollment and payment will be available soon");
        }
        setStatus("idle");
        return;
      }
      const orderId: string = data.orderId;
      const keyId: string = data.keyId;
      const amount: number = data.amount;
      setRetryOrderId(orderId);
      const loaded = await loadRazorpayScript();
      if (!loaded || !window.Razorpay) {
        setGlobalError("Enrollment and payment will be available soon");
        setStatus("idle");
        return;
      }
      setStatus("opening");
      const options: Record<string, unknown> = {
        key: keyId,
        amount,
        currency: "INR",
        name: "Somadhan Technologies",
        description: course.name,
        order_id: orderId,
        prefill: { name: form.name.trim(), email: form.email.trim(), contact: form.phone.trim() },
        theme: { color: "#2d7a4f" },
        handler: async function (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) {
          setStatus("verifying");
          const vr = await fetch("/api/payments/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const vData = await vr.json().catch(() => ({}));
          if (vr.ok && vData?.success) {
            router.push(`/enrollment/success?enrollmentId=${encodeURIComponent(eid)}&course=${encodeURIComponent(course.id)}`);
          } else {
            router.push(`/enrollment/failed?enrollmentId=${encodeURIComponent(eid)}&reason=${encodeURIComponent(vData?.message || "Verification failed")}`);
          }
        },
        modal: { ondismiss: () => setStatus("idle") },
      };
      const rzp = new window.Razorpay!(options);
      rzp.open();
      setTimeout(() => setStatus("idle"), 1000);
    } catch {
      setGlobalError("Network error on retry.");
      setStatus("idle");
    }
  }

  return (
    <div className="rounded-2xl border border-line bg-white shadow-sm">
      <div className="border-b border-line px-6 py-5 sm:px-8">
        <h3 className="font-display text-lg font-semibold tracking-tight">Registration Form</h3>
        <p className="mt-1 text-sm text-ink-soft">Fill in your details to enroll — payment happens securely via Razorpay.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="px-6 py-6 sm:px-8 sm:py-8">
        {isPaymentDisabled ? (
          <div
            className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900"
            role="status"
            aria-live="polite"
          >
            <p className="font-medium">Enrollment and payment will be available soon</p>
            <p className="mt-1 text-xs leading-relaxed">
              We’re setting up secure payments. Please check back shortly or contact us at{" "}
              <a href="mailto:director@somadhantechnologies.in" className="font-medium underline">
                director@somadhantechnologies.in
              </a>
              .
            </p>
          </div>
        ) : null}
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="enroll-name" className={labelClasses}>
              Full Name <span className="text-terra">*</span>
            </label>
            <input
              id="enroll-name"
              name="name"
              autoComplete="name"
              placeholder="Your full name"
              value={form.name}
              onChange={update("name")}
              disabled={isBusy}
              className={`${inputClasses} ${fieldErrors.name ? "border-terra focus:border-terra focus:ring-terra/15" : ""}`}
            />
            {fieldErrors.name ? <p className={errorClasses}>{fieldErrors.name}</p> : null}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="enroll-email" className={labelClasses}>
              Email Address <span className="text-terra">*</span>
            </label>
            <input
              id="enroll-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={update("email")}
              disabled={isBusy}
              className={`${inputClasses} ${fieldErrors.email ? "border-terra focus:border-terra focus:ring-terra/15" : ""}`}
            />
            {fieldErrors.email ? <p className={errorClasses}>{fieldErrors.email}</p> : null}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="enroll-phone" className={labelClasses}>
              WhatsApp Number <span className="text-terra">*</span>
            </label>
            <input
              id="enroll-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={update("phone")}
              disabled={isBusy}
              className={`${inputClasses} ${fieldErrors.phone ? "border-terra focus:border-terra focus:ring-terra/15" : ""}`}
            />
            {fieldErrors.phone ? <p className={errorClasses}>{fieldErrors.phone}</p> : null}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="enroll-institution" className={labelClasses}>
              College / School / Organization <span className="text-terra">*</span>
            </label>
            <input
              id="enroll-institution"
              name="institution"
              placeholder="Your institution"
              value={form.institution}
              onChange={update("institution")}
              disabled={isBusy}
              className={`${inputClasses} ${fieldErrors.institution ? "border-terra focus:border-terra focus:ring-terra/15" : ""}`}
            />
            {fieldErrors.institution ? <p className={errorClasses}>{fieldErrors.institution}</p> : null}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="enroll-city" className={labelClasses}>
              City <span className="text-terra">*</span>
            </label>
            <input
              id="enroll-city"
              name="city"
              placeholder="Your city"
              value={form.city}
              onChange={update("city")}
              disabled={isBusy}
              className={`${inputClasses} ${fieldErrors.city ? "border-terra focus:border-terra focus:ring-terra/15" : ""}`}
            />
            {fieldErrors.city ? <p className={errorClasses}>{fieldErrors.city}</p> : null}
          </div>
        </div>

        {/* Course summary */}
        <div className="mt-7 rounded-xl border border-accent/15 bg-accent-soft/40 p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Selected Course</p>
              <p className="mt-1 font-display text-base font-semibold leading-tight text-ink">{course.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">{course.description}</p>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <p className="text-xs uppercase tracking-[0.12em] text-ink-soft">Price</p>
              <div className="flex items-baseline gap-2 sm:justify-end">
                {course.compareAtPriceDisplay ? (
                  <span className="text-sm font-medium text-ink-soft line-through decoration-ink-soft/40">
                    {course.compareAtPriceDisplay}
                  </span>
                ) : null}
                <span className="font-display text-2xl font-semibold text-ink">{course.priceDisplay}</span>
              </div>
              {course.compareAtPriceDisplay ? (
                <p className="mt-1 inline-flex rounded-full bg-[#ff4d6a]/10 px-2 py-0.5 text-[11px] font-semibold text-[#ff4d6a]">
                  50% OFF · Limited time
                </p>
              ) : null}
              <p className="text-xs text-ink-soft">Inclusive · One-time</p>
            </div>
          </div>
        </div>

        {globalError ? (
          <div className="mt-6 rounded-xl border border-terra/20 bg-terra-soft px-4 py-3 text-sm leading-relaxed text-terra-deep" role="alert" aria-live="polite">
            {globalError}
          </div>
        ) : null}

        <div className="mt-8 flex flex-col gap-3">
          <button
            type="submit"
            disabled={isBusy || isPaymentDisabled}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-accent to-moss px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30 hover:from-accent-deep hover:to-accent disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPaymentDisabled ? (
              <>Enrollment and payment will be available soon</>
            ) : status === "submitting" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
                Creating Enrollment…
              </>
            ) : status === "opening" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
                Opening Payment…
              </>
            ) : status === "verifying" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
                Verifying Payment…
              </>
            ) : (
              <>Proceed to Payment — {course.priceDisplay}</>
            )}
          </button>

          {enrollmentId && retryOrderId ? (
            <button
              type="button"
              onClick={handleRetry}
              disabled={isBusy}
              className="inline-flex w-full items-center justify-center rounded-full border border-line bg-cream px-7 py-3 text-sm font-medium text-ink transition hover:bg-white hover:border-accent/30 disabled:opacity-60"
            >
              Try Payment Again
            </button>
          ) : null}

          <p className="text-center text-xs leading-relaxed text-ink-soft/70">
            Secure payment by Razorpay · UPI / Cards / NetBanking · No payment info stored on our servers
          </p>
        </div>
      </form>
    </div>
  );
}
