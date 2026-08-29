import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase";
import { getCourseById } from "@/lib/courses";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{ enrollmentId?: string; course?: string }>;
};

export default async function EnrollmentSuccessPage({ searchParams }: Props) {
  const { enrollmentId, course: courseId } = await searchParams;

  let enrollment: {
    id: string;
    name: string;
    email: string;
    course_name: string;
    course_id: string;
    amount: number;
    payment_status: string;
    razorpay_payment_id: string | null;
  } | null = null;

  if (enrollmentId) {
    try {
      const supabase = getSupabaseServerClient();
      const { data } = await supabase
        .from("enrollments")
        .select("id, name, email, course_name, course_id, amount, payment_status, razorpay_payment_id")
        .eq("id", enrollmentId)
        .maybeSingle();
      if (data) enrollment = data as unknown as typeof enrollment;
    } catch {
      // ignore
    }
  }

  const course = courseId ? getCourseById(courseId) : enrollment ? getCourseById((enrollment as { course_id: string }).course_id) : null;
  const displayName = (enrollment as { name: string } | null)?.name || "there";
  const courseName = (enrollment as { course_name: string } | null)?.course_name || course?.name || "your selected course";
  const paymentId = (enrollment as { razorpay_payment_id: string | null } | null)?.razorpay_payment_id;

  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
          <div className="bg-linear-to-r from-accent to-moss px-8 py-8 text-center sm:px-10 sm:py-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <h1 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">🎉 Enrollment Successful!</h1>
            <p className="mt-2 text-sm text-white/80">Thank you, {displayName}!</p>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <div className="rounded-xl border border-accent/15 bg-accent-soft/40 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">You have successfully enrolled in</p>
              <p className="mt-1 font-display text-lg font-semibold text-ink">{courseName}</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-accent ring-1 ring-accent/15">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Payment Status: PAID
              </div>
              {paymentId ? (
                <p className="mt-2 text-xs text-ink-soft">
                  Payment ID: <span className="font-mono font-medium text-ink">{paymentId}</span>
                </p>
              ) : null}
              {(enrollment as unknown as { amount: number } | null)?.amount ? (
                <p className="mt-1 text-xs text-ink-soft">
                  Amount: <span className="font-medium text-ink">₹{((enrollment as unknown as { amount: number }).amount / 100).toLocaleString("en-IN")}</span>
                </p>
              ) : null}
            </div>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-ink-soft">
              <p>
                Our team will contact you through your registered <span className="font-medium text-ink">email address</span> or{" "}
                <span className="font-medium text-ink">WhatsApp number</span> with details about joining the course.
              </p>
              <p>
                The course will initially be conducted through <span className="font-medium text-ink">Google Classroom</span> and{" "}
                <span className="font-medium text-ink">Google Meet</span>. You&apos;ll receive classroom invite and meet links before the cohort starts.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/training/agentic-ai-bootcamp"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-accent-deep"
              >
                Back to Course
              </Link>
              <Link
                href="/training"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent"
              >
                Explore Training
              </Link>
            </div>

            {enrollmentId ? (
              <p className="mt-6 text-center text-xs text-ink-soft/70">
                Enrollment ID: <span className="font-mono">{enrollmentId}</span> · Keep this for support queries
              </p>
            ) : null}
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-ink-soft/60">
          Questions? Write to us at <a href="mailto:director@somadhantechnologies.in" className="font-medium text-accent hover:text-accent-deep">director@somadhantechnologies.in</a>
        </p>
      </div>
    </div>
  );
}
