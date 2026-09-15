import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ViewTransition } from "react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund & Cancellation Policy for Somadhan Technologies — terms for bootcamps, training programs, internships, AI products and custom AI solutions. Last updated 07/09/2026.",
};

const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "general-principles", label: "2. General Principles" },
  { id: "bootcamps", label: "3. Bootcamps, Training & Internships" },
  { id: "ai-products", label: "4. AI Products" },
  { id: "custom-solutions", label: "5. Custom AI Solutions" },
  { id: "defective", label: "6. Defective or Undelivered Services" },
  { id: "taxes", label: "7. Taxes" },
  { id: "grievance", label: "8. Grievance Redressal" },
  { id: "changes", label: "9. Changes to this Policy" },
  { id: "governing-law", label: "10. Governing Law" },
  { id: "contact", label: "11. Contact Us" },
];

export default function RefundPolicyPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Refund & <em className="text-gradient animate-shimmer">Cancellation</em> Policy
          </>
        }
        description="How refunds and cancellations work across our bootcamps, training programs, internships, AI products and custom AI solutions."
      />

      {/* Last updated banner */}
      <div className="border-b border-line bg-cream/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
            Somadhan Technologies &middot; Last Updated: <span className="text-ink">07/09/2026</span>
          </p>
          <p className="text-xs leading-relaxed text-ink-soft">
            Read with our{" "}
            <Link href="/about" className="font-medium text-accent underline underline-offset-4 hover:text-accent-deep">
              Terms
            </Link>{" "}
            &amp; Privacy Policy. Project-specific MSA/SOW prevails on conflict.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-12 xl:gap-16">
          {/* TOC — desktop sticky */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">On this page</p>
              <nav className="mt-4 space-y-1">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block rounded-lg px-3 py-2 text-sm leading-snug text-ink-soft transition-colors hover:bg-cream hover:text-ink"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 rounded-xl bg-accent-soft p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">Need a refund?</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Email <a href="mailto:director@somadhantechnologies.in" className="font-medium text-accent underline underline-offset-4">director@somadhantechnologies.in</a> with program name, enrollment date & reason.
                </p>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0">
            {/* Mobile TOC */}
            <div className="mb-8 lg:hidden">
              <div className="rounded-2xl border border-line bg-cream/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">On this page</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-accent/30 hover:text-accent"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <article className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-ink-soft prose-strong:text-ink prose-li:text-ink-soft prose-li:leading-relaxed prose-a:text-accent prose-a:underline-offset-4 hover:prose-a:text-accent-deep">
              {/* 1 */}
              <Reveal>
                <section id="introduction" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-sm font-semibold text-accent-deep">1</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Introduction</h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                    <p>
                      This Refund &amp; Cancellation Policy (&ldquo;Policy&rdquo;) explains the terms on which <strong>Somadhan Technologies</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) issues refunds and handles cancellations across our bootcamps, training programs and internships (&ldquo;Programs&rdquo;), our AI products, and our custom AI solutions and consultancy engagements (&ldquo;Custom Solutions&rdquo;).
                    </p>
                    <p>
                      This Policy should be read together with our Terms and Conditions and Privacy Policy, and, for Custom Solutions, alongside the specific Master Service Agreement (MSA) and Statement of Work (SOW) governing that engagement. In the event of a conflict between this Policy and a specific written project agreement, the project agreement shall prevail with respect to that engagement.
                    </p>
                    <p>
                      This Policy is framed in accordance with the <em>Consumer Protection Act, 2019</em>, the <em>Consumer Protection (E-Commerce) Rules, 2020</em> (to the extent applicable to our website and Program enrollments), applicable Reserve Bank of India (RBI) guidelines on payment aggregators and refund processing timelines, and the <em>Indian Contract Act, 1872</em>, insofar as it governs our commercial agreements with Clients.
                    </p>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 2 */}
              <Reveal delay={0.05}>
                <section id="general-principles" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-soft text-sm font-semibold text-gold-deep">2</span>
                    <h2 className="m-0 text-xl sm:text-2xl">General Principles</h2>
                  </div>
                  <ul className="mt-5 list-disc space-y-3 pl-5 text-sm sm:text-[15px]">
                    <li>We do not charge cancellation fees on a cancellation initiated by us that we would not equally bear ourselves, in line with the Consumer Protection (E-Commerce) Rules, 2020.</li>
                    <li>
                      Refunds, where approved, are processed to the <strong>original mode of payment only</strong>, in accordance with RBI guidelines and the processing timelines of our payment partner, <strong>Razorpay</strong>.
                    </li>
                    <li>All fees are quoted <strong>exclusive of applicable taxes</strong> (including GST) unless expressly stated otherwise. Any refund issued will correspondingly adjust the tax component as permitted under applicable GST rules.</li>
                    <li>This Policy, along with our return, refund and cancellation terms, is published and made available to you prior to purchase or engagement, as required under the Consumer Protection (E-Commerce) Rules, 2020.</li>
                  </ul>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 3 */}
              <Reveal delay={0.06}>
                <section id="bootcamps" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-soft text-sm font-semibold text-sky-deep">3</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Bootcamps, Training Programs &amp; Internships</h2>
                  </div>

                  <div className="mt-6 rounded-2xl border border-line bg-cream/40 p-6 sm:p-7">
                    <h3 id="bootcamps-31" className="m-0 text-base font-semibold text-ink">
                      3.1 Cancellation by You
                    </h3>
                    <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                      <li>
                        <strong>Full refund:</strong> If you cancel your enrollment at least <strong>10 days before the Program start date</strong>, you are entitled to a full refund of fees paid, excluding any registration or processing fee.
                      </li>
                      <li>
                        <strong>No refund after commencement:</strong> Once a Program has commenced, no refund will be issued, regardless of your subsequent participation, attendance, or withdrawal.
                      </li>
                      <li>
                        <strong>Non-refundable registration fee:</strong> Any registration or processing fee charged at the time of enrollment is non-refundable under all circumstances.
                      </li>
                    </ul>

                    <h3 className="mt-8 m-0 text-base font-semibold text-ink">3.2 Cancellation or Rescheduling by Us</h3>
                    <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                      If we cancel or reschedule a Program, you will be offered, at your choice, a <strong>full refund</strong> of fees paid or the option to <strong>transfer to a future cohort at no additional cost</strong>. No cancellation charge will be deducted from you in these circumstances, consistent with the principle in Section 2 above.
                    </p>

                    <h3 className="mt-8 m-0 text-base font-semibold text-ink">3.3 Removal for Cause</h3>
                    <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                      Where a participant is removed from a Program for conduct that is abusive, fraudulent, or in violation of our Code of Conduct or Terms and Conditions, <strong>no refund will be issued</strong> for the removal.
                    </p>

                    <h3 className="mt-8 m-0 text-base font-semibold text-ink">3.4 How to Request a Refund</h3>
                    <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                      Refund requests must be submitted in writing to{" "}
                      <a href="mailto:director@somadhantechnologies.in" className="font-medium">
                        director@somadhantechnologies.in
                      </a>
                      , stating the Program name, enrollment date, and reason for the request.
                    </p>
                    <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                      <li>We will acknowledge receipt of your request within <strong>48 hours</strong>.</li>
                      <li>Eligible refunds will be approved or declined, with reasons, within <strong>7 business days</strong> of acknowledgment.</li>
                      <li>
                        Approved refunds will be processed to the original mode of payment within <strong>7–10 business days</strong> of approval, subject to the further processing timelines of Razorpay and your bank or card issuer.
                      </li>
                    </ul>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 4 */}
              <Reveal delay={0.07}>
                <section id="ai-products" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-terra-soft text-sm font-semibold text-terra-deep">4</span>
                    <h2 className="m-0 text-xl sm:text-2xl">AI Products (Self-Serve / Subscription-Based Access)</h2>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed sm:text-[15px]">
                    Where any of our AI products are offered on a paid, self-serve, or subscription basis, the following applies unless a specific product page or order confirmation states otherwise:
                  </p>
                  <ul className="mt-5 list-disc space-y-3 pl-5 text-sm sm:text-[15px]">
                    <li>Subscription fees already billed for a current billing cycle are <strong>non-refundable once access has been granted</strong>, except where required under Section 6 (Defective, Deficient or Undelivered Services) below.</li>
                    <li>You may cancel a recurring subscription at any time to prevent future billing; cancellation will take effect from the next billing cycle and does not entitle you to a pro-rated refund of the current cycle.</li>
                    <li>Free trials, where offered, convert to paid access only upon your affirmative action, and no charge will be made without such explicit consent, in accordance with the Consumer Protection (E-Commerce) Rules, 2020.</li>
                  </ul>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 5 */}
              <Reveal delay={0.08}>
                <section id="custom-solutions" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-sm font-semibold text-accent-deep">5</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Custom AI Solutions &amp; Consultancy Engagements</h2>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed sm:text-[15px]">
                    Custom Solutions are bespoke, project-based engagements and are not governed by the fixed refund schedule applicable to Programs. Instead:
                  </p>
                  <ul className="mt-5 list-disc space-y-3 pl-5 text-sm sm:text-[15px]">
                    <li>Payment terms, milestones, and any project-specific cancellation or refund terms are set out in the <strong>MSA</strong> and the relevant <strong>SOW</strong> executed for that engagement.</li>
                    <li>Where an engagement is terminated after work has commenced, fees for work already performed, deliverables already provided, and any non-recoverable third-party or infrastructure costs incurred on your behalf up to the date of termination are <strong>non-refundable</strong>.</li>
                    <li>Any advance or milestone payment made for work not yet performed as of the date of termination will be assessed in good faith and refunded on a pro-rata basis, except where the MSA or SOW specifies otherwise.</li>
                    <li>Where we are unable to commence or continue an engagement due to a cause attributable solely to us, any unearned advance payment will be refunded in full within the timeline specified in the MSA, or within <strong>15 business days</strong> of written confirmation where the MSA is silent.</li>
                  </ul>
                  <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                    <p className="m-0 text-sm leading-relaxed text-amber-900">
                      Where this Section conflicts with a specific MSA or SOW, the specific project agreement will prevail.
                    </p>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 6 */}
              <Reveal delay={0.09}>
                <section id="defective" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-soft text-sm font-semibold text-gold-deep">6</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Defective, Deficient or Undelivered Services</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    Consistent with the <em>Consumer Protection Act, 2019</em> and the <em>Consumer Protection (E-Commerce) Rules, 2020</em>, we will not refuse a refund where a paid Service is materially defective, deficient, or was not delivered as described, provided the issue is not attributable to factors disclosed in our Terms and Conditions (such as the inherent limitations of AI-generated outputs described in Section 7.2 of our Terms) or to force majeure.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed sm:text-[15px]">
                    Where such a claim is raised, we will investigate in good faith and, where upheld, issue a full or partial refund as appropriate to the extent of the deficiency, or offer to remedy the deficiency at your option.
                  </p>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 7 */}
              <Reveal delay={0.10}>
                <section id="taxes" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-soft text-sm font-semibold text-sky-deep">7</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Taxes</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    Where a refund is approved, we will refund the fee actually received net of any tax component already remitted to the relevant tax authority, or adjust the tax component in accordance with applicable GST rules, as the case may be. Any bank charges, payment gateway fees, or currency conversion charges that are non-recoverable from Razorpay or the relevant payment network may be deducted from the refunded amount, where applicable.
                  </p>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 8 */}
              <Reveal delay={0.11}>
                <section id="grievance" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-terra-soft text-sm font-semibold text-terra-deep">8</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Grievance Redressal</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    Any complaint regarding a declined refund, delayed processing, or dissatisfaction with the outcome of a refund request may be escalated to our <strong>Grievance Officer</strong>:
                  </p>
                  <div className="mt-6 rounded-2xl border border-line bg-paper p-6 sm:p-7">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Name</p>
                        <p className="mt-1.5 m-0 text-sm font-medium text-ink">Hirakjyoti Sarma</p>
                      </div>
                      <div>
                        <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Designation</p>
                        <p className="mt-1.5 m-0 text-sm font-medium text-ink">Head, Operations and Administration</p>
                      </div>
                      <div>
                        <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Email</p>
                        <a href="mailto:hirak@somadhantechnologies.in" className="mt-1.5 inline-block text-sm font-medium">
                          hirak@somadhantechnologies.in
                        </a>
                      </div>
                      <div>
                        <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Address</p>
                        <p className="mt-1.5 m-0 text-sm leading-relaxed text-ink-soft">Somadhan Technologies, Guwahati, Assam, India</p>
                      </div>
                    </div>
                    <p className="mt-6 text-sm leading-relaxed">
                      We will acknowledge a grievance within <strong>48 hours</strong> and aim to resolve it within <strong>one month</strong>, in line with the timelines prescribed under the Consumer Protection (E-Commerce) Rules, 2020. If you remain unsatisfied with our resolution, you may approach the National Consumer Helpline (1800-11-4000 / 14404), the e-Daakhil / National Consumer Commission portal, or the appropriate Consumer Disputes Redressal Commission, or proceed as set out in the Governing Law &amp; Dispute Resolution section of our Terms and Conditions.
                    </p>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 9 */}
              <Reveal delay={0.12}>
                <section id="changes" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-sm font-semibold text-accent-deep">9</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Changes to this Policy</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    We may update this Policy from time to time to reflect changes in our practices, Services, or applicable law. Any changes will be posted on this page with a revised &ldquo;Last Updated&rdquo; date. Refund requests will be assessed under the version of this Policy in effect on the date of the relevant purchase or engagement, unless a subsequent version is more favourable to you and we elect to apply it.
                  </p>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 10 */}
              <Reveal delay={0.13}>
                <section id="governing-law" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-soft text-sm font-semibold text-gold-deep">10</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Governing Law</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    This Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with this Policy shall be subject to the dispute resolution mechanism and exclusive jurisdiction of the courts in <strong>Guwahati, Assam</strong>, as set out in our Terms and Conditions.
                  </p>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 11 */}
              <Reveal delay={0.14}>
                <section id="contact" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-soft text-sm font-semibold text-sky-deep">11</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Contact Us</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">For any questions about this Policy or to initiate a refund request, please contact us at:</p>
                  <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-line bg-cream/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                            <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v7A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-7Z" />
                            <path d="m5 7 7 6 7-6" />
                          </svg>
                        </span>
                        <a href="mailto:director@somadhantechnologies.in" className="font-medium">
                          director@somadhantechnologies.in
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-ink-soft">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-soft text-gold-deep">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                            <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>
                        </span>
                        Somadhan Technologies, Guwahati, Assam, India
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/90"
                    >
                      Contact Us
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </section>
              </Reveal>

              {/* Bottom note */}
              <Reveal delay={0.15}>
                <div className="mt-12 rounded-2xl bg-forest px-6 py-8 sm:px-8">
                  <p className="m-0 text-sm leading-relaxed text-paper/70">
                    This page was last updated on <span className="font-medium text-paper">07/09/2026</span>. If you need a copy of the Policy as it stood on your date of purchase, email us and we will provide it.
                  </p>
                </div>
              </Reveal>
            </article>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}
