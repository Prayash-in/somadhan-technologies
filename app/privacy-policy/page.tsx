import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ViewTransition } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Somadhan Technologies — how we collect, use, store, share and protect personal information across our website, training programs, AI solutions and research. Last updated 02/09/2026.",
};

const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Your Information" },
  { id: "how-we-share", label: "4. How We Share Your Information" },
  { id: "data-retention", label: "5. Data Retention" },
  { id: "your-rights", label: "6. Your Rights" },
  { id: "student-data", label: "7. Student / Educational Data" },
  { id: "research-data", label: "8. Research and Project Data" },
  { id: "security", label: "9. Security" },
  { id: "grievance", label: "10. Grievance Officer / Contact Us" },
  { id: "changes", label: "11. Changes to this Policy" },
  { id: "governing-law", label: "12. Governing Law" },
];

export default function PrivacyPolicyPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy <em className="text-gradient animate-shimmer">Policy</em>
          </>
        }
        description="How we collect, use, store, share, and protect personal information across our website, educational programs, AI solutions, and research activities."
      />

      {/* Last updated banner */}
      <div className="border-b border-line bg-cream/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
            Somadhan Technologies &middot; Last Updated: <span className="text-ink">02/09/2026</span>
          </p>
          <p className="text-xs leading-relaxed text-ink-soft">
            Read with our{" "}
            <Link href="/refund-policy" className="font-medium text-accent underline underline-offset-4 hover:text-accent-deep">
              Refund Policy
            </Link>{" "}
            &amp; Terms and Conditions. Project-specific MSA/SOW prevails on conflict.
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
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">Privacy questions?</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Email <a href="mailto:hirak.somadhantechnologies@gmail.com" className="font-medium text-accent underline underline-offset-4">hirak.somadhantechnologies@gmail.com</a> (Grievance Officer) or <a href="mailto:director@somadhantechnologies.in" className="font-medium text-accent underline underline-offset-4">director@somadhantechnologies.in</a>.
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
                      We, <strong>Somadhan Technologies</strong>, are committed to protecting the privacy of individuals who interact with us. Words like &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo; etc. refer strictly to Somadhan Technologies. This Privacy Policy explains how we collect, use, store, share, and protect personal information when you use our website, educational programs, AI solutions, research activities, or any other services offered by us.
                    </p>
                    <p>This Policy applies to:</p>
                    <ul className="list-disc space-y-2.5 pl-5">
                      <li>Visitors of our website (somadhantechnologies.in)</li>
                      <li>Students and participants of our training programs, bootcamps, and internships</li>
                      <li>Clients and partners using our AI solutions and consultancy services</li>
                      <li>Individuals whose data is collected during research and field activities (including agricultural data)</li>
                    </ul>
                    <p>
                      By using our services or providing us with your information, you agree to the practices described in this Privacy Policy. The use of this Website is also governed by the separately provided Terms and Conditions, which should be read alongside and in conjunction with this Privacy Policy.
                    </p>
                    <p>
                      We collect, store and process personal data in accordance with the <em>Digital Personal Data Protection Act, 2023</em> and other applicable Indian laws.
                    </p>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 2 */}
              <Reveal delay={0.05}>
                <section id="information-we-collect" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-soft text-sm font-semibold text-gold-deep">2</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Information We Collect</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    We collect different types of information depending on how you interact with us. The information we collect falls into the following categories:
                  </p>

                  <div className="mt-6 space-y-6">
                    <div className="rounded-2xl border border-line bg-cream/40 p-6 sm:p-7">
                      <h3 className="m-0 text-base font-semibold text-ink">2.1 Information You Provide to Us</h3>
                      <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li><strong>Account and Registration Information:</strong> Name, email address, phone number, educational background, and other details you provide when registering for our website, bootcamps, training programs, internships, or creating an account.</li>
                        <li><strong>Payment Information:</strong> Payment details (such as billing name, address, and transaction information) when you make payments for our courses or services. Payment processing is handled by our third-party payment partner, Razorpay. We do not store your full card or bank account details.</li>
                        <li><strong>Learning and Program Data:</strong> Information related to your participation in our educational programs, including progress, assignment submissions, project work, attendance, feedback, and interaction with mentors.</li>
                        <li><strong>Communication Data:</strong> Any information you share when you contact us via email, contact forms, or other communication channels.</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-line bg-cream/40 p-6 sm:p-7">
                      <h3 className="m-0 text-base font-semibold text-ink">2.2 Information Related to Our AI Products and Custom Solutions</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        When you use our AI products or when we build custom AI solutions for clients and organizations, we may collect:
                      </p>
                      <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Queries, inputs, and interactions you submit to the AI systems</li>
                        <li>Feedback and usage data related to the product</li>
                        <li>Client-provided data required for developing and deploying custom solutions (such as institutional records, crop data, or other project-specific information)</li>
                        <li>Data necessary to train, improve, or operate the AI models, subject to the terms of the relevant project or agreement</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-line bg-cream/40 p-6 sm:p-7">
                      <h3 className="m-0 text-base font-semibold text-ink">2.3 Agricultural, Research, and Field Data</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        In connection with our Agri-Informatics work, research activities, and products such as Krishiva AI, we may collect:
                      </p>
                      <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Images, open source research papers, climate data, soil data, and other field data</li>
                        <li>Location data related to farms or field sites (where relevant)</li>
                        <li>Data shared by farmers, research partners, universities, or agri-businesses</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-line bg-cream/40 p-6 sm:p-7">
                      <h3 className="m-0 text-base font-semibold text-ink">2.4 Information Collected Automatically</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        When you visit our website or use our platforms, we may automatically collect certain technical information, including:
                      </p>
                      <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Device information</li>
                        <li>Pages visited and time spent</li>
                        <li>Referring website</li>
                        <li>Network information</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-line bg-cream/40 p-6 sm:p-7">
                      <h3 className="m-0 text-base font-semibold text-ink">2.5 Information from Third Parties</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        We may receive limited information about you from third parties in connection with our two main service areas:
                      </p>
                      <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>
                          <strong>A: Bootcamps, Training Programs and Internships</strong> — When you make a payment for our educational programs, our payment partner Razorpay processes the transaction and shares with us necessary information such as your name, email address, phone number, payment status, transaction ID, and amount paid.
                        </li>
                        <li>We do not receive or store your full card number, CVV, UPI PIN, or bank account details. Sensitive payment information remains with Razorpay.</li>
                        <li>
                          <strong>B: AI Solutions and Custom Project Work</strong> — When we work with clients and organizations on AI solutions or custom projects (including products like Krishiva AI and future projects), we may receive project-related data and information shared by the client or partner as required to deliver the work. This is governed by the specific agreement or contract for that project.
                        </li>
                      </ul>
                      <p className="mt-4 text-sm leading-relaxed sm:text-[15px]">
                        However, you are solely responsible for maintaining the strict confidentiality of your Personal User Information. Somadhan Technologies shall not be liable for any loss, damage, or harm arising from the theft, disclosure, misuse, or unauthorized use of your Personal User Information when such information is under your control or has been disclosed by you to any other person or entity.
                      </p>
                    </div>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 3 */}
              <Reveal delay={0.06}>
                <section id="how-we-use" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-soft text-sm font-semibold text-sky-deep">3</span>
                    <h2 className="m-0 text-xl sm:text-2xl">How We Use Your Information</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    We use the information we collect for the following purposes:
                  </p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">3.1 To Provide and Manage Our Services</h3>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Create and manage your account</li>
                        <li>Deliver access to our website, bootcamps, training programs, internships, and AI products (including Krishiva AI and future products)</li>
                        <li>Process payments and issue invoices or receipts</li>
                        <li>Provide customer support and respond to your queries</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">3.2 For Educational Programs</h3>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Track your learning progress, assignments, and project submissions</li>
                        <li>Issue certificates and manage cohort access</li>
                        <li>Facilitate mentorship and feedback</li>
                        <li>Improve the quality of our training programs</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">3.3 For AI Products and Custom Solutions</h3>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Operate and improve our AI products (such as Krishiva AI)</li>
                        <li>Develop, train, test, and deploy custom AI solutions for clients and partners</li>
                        <li>Process inputs and queries submitted to our AI systems</li>
                        <li>Fulfil project requirements as agreed with clients and organizations</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">3.4 For Research and Agri-Informatics</h3>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Conduct applied research in agriculture, climate advisory, and related areas</li>
                        <li>Train and improve AI models using field and research data</li>
                        <li>Publish research findings, datasets, and benchmarks (in anonymized or aggregated form where appropriate)</li>
                        <li>Collaborate with universities, research institutions, and agri-businesses</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">3.5 For Communication</h3>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Send important service-related notifications (e.g., program updates, payment confirmations, schedule changes)</li>
                        <li>Respond to your inquiries and support requests</li>
                        <li>Send information about new programs or services (only if you have opted in)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">3.6 For Security, Legal and Operational Purposes</h3>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Detect, prevent, and address fraud, security issues, or technical problems</li>
                        <li>Comply with applicable laws and legal obligations</li>
                        <li>Enforce our Terms of Service and other agreements</li>
                        <li>Maintain internal records and improve our operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed sm:text-[15px]">
                    We only use your personal information for the purposes described above or for purposes that are compatible with them. If we need to use your information for any other purpose, we will seek your consent where required.
                  </p>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 4 */}
              <Reveal delay={0.07}>
                <section id="how-we-share" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-terra-soft text-sm font-semibold text-terra-deep">4</span>
                    <h2 className="m-0 text-xl sm:text-2xl">How We Share Your Information</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    We do not sell your personal information. We only share your information in the limited situations described below, and only as necessary for the purposes outlined in this Privacy Policy.
                  </p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">4.1 Service Providers</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        We share information with trusted third-party service providers who help us operate our services. These include:
                      </p>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li><strong>Payment Processors:</strong> We use Razorpay to process payments for our bootcamps, training programs, and internships. Razorpay receives the information necessary to complete the transaction (such as name, email, phone number, and payment details). Sensitive payment credentials (full card numbers, CVV, UPI PIN, etc.) are handled by Razorpay and are not stored by us.</li>
                        <li><strong>Cloud and Technology Providers:</strong> We use cloud hosting and technology service providers to store data, host our website, learning platforms, and AI products. These providers process data only on our instructions and under appropriate data protection agreements.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">4.2 Legal and Regulatory Requirements</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        We may disclose your information if required to do so by law, regulation, legal process, or governmental request, or if we believe in good faith that such disclosure is necessary to:
                      </p>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Comply with applicable laws</li>
                        <li>Protect our rights, property, or safety</li>
                        <li>Protect the rights, property, or safety of our users or the public</li>
                        <li>Detect, prevent, or address fraud or security issues</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">4.3 Anonymized and Aggregated Data</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        We may share anonymized or aggregated data (data that cannot reasonably be used to identify you) with research partners, in publications, or for improving our AI models and services.
                      </p>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        We require all third parties with whom we share personal information to maintain its confidentiality and security, use it only for the purposes authorized by us, and refrain from any unauthorized access, disclosure, misuse, sale, or other improper use of such information.
                      </p>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">4.4 International Data Transfers</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        Some of our service providers, including cloud hosting and AI infrastructure providers, may store or process data outside India. Where this occurs, we ensure such transfers comply with the Digital Personal Data Protection Act, 2023, and are made only to countries not restricted by the Central Government. We require our processors to maintain appropriate safeguards for any data transferred internationally.
                      </p>
                    </div>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 5 */}
              <Reveal delay={0.08}>
                <section id="data-retention" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-sm font-semibold text-accent-deep">5</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Data Retention</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    We retain your personal information only for as long as it is necessary to fulfil the purposes for which it was collected, or as required by applicable law.
                  </p>

                  <div className="mt-6 rounded-2xl border border-line bg-cream/40 p-6 sm:p-7">
                    <h3 className="m-0 text-base font-semibold text-ink">5.1 General Retention Periods</h3>
                    <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                      <li><strong>Account and Registration Data:</strong> Retained for as long as your account remains active. If you request deletion of your account, we will delete or anonymize your personal data within a reasonable period, unless we are required to retain it for legal or legitimate business purposes.</li>
                      <li><strong>Payment and Transaction Data:</strong> Retained as required under applicable tax, accounting, and financial regulations (typically for a minimum of 8 years in India).</li>
                      <li><strong>Learning and Program Data (bootcamps, training, internships):</strong> Retained for the duration of the program and for a reasonable period afterwards to issue certificates, handle support requests, and maintain records. We may retain anonymized or aggregated learning data for improving our programs.</li>
                      <li><strong>AI Product and Custom Project Data:</strong> Retained as needed to deliver the service or project, and thereafter according to the terms of the relevant agreement with the client or user. Project-specific data provided by clients is handled as per the contract.</li>
                    </ul>

                    <h3 className="mt-8 m-0 text-base font-semibold text-ink">5.2 Research and Agricultural Data</h3>
                    <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                      Field data, images, sensor readings, and other research data are retained for as long as necessary for research, model training, validation, and publication purposes. Wherever possible, such data is anonymized or aggregated. Personal identifiers linked to research data are removed or minimized as early as practicable.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                      Where field and research data is used to build derivative knowledge bases or models, such derived outputs are addressed separately in our Terms and Conditions.
                    </p>

                    <h3 className="mt-8 m-0 text-base font-semibold text-ink">5.3 Legal and Compliance Retention</h3>
                    <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                      We may retain certain information for longer periods if required to:
                    </p>
                    <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                      <li>Comply with legal, regulatory, or accounting obligations</li>
                      <li>Resolve disputes</li>
                      <li>Enforce our agreements</li>
                      <li>Protect against fraud or security threats</li>
                    </ul>
                    <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                      When personal information is no longer required, we will securely delete or anonymize it.
                    </p>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 6 */}
              <Reveal delay={0.09}>
                <section id="your-rights" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-soft text-sm font-semibold text-gold-deep">6</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Your Rights</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    Under the Digital Personal Data Protection Act, 2023, you (as a Data Principal) have the following rights:
                  </p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">6.1 Right to Access Information</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">You have the right to obtain from us:</p>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>A summary of the personal data we are processing about you</li>
                        <li>A summary of the processing activities undertaken with respect to such data</li>
                        <li>The identities of other Data Fiduciaries and Data Processors with whom your personal data has been shared (along with a description of the data shared), subject to applicable exceptions under the Act</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">6.2 Right to Correction and Erasure</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">You have the right to request:</p>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Correction of inaccurate or misleading personal data</li>
                        <li>Completion of incomplete personal data</li>
                        <li>Updating of your personal data</li>
                        <li>Erasure of your personal data when it is no longer necessary for the purpose for which it was collected, or when you withdraw consent (where consent was the basis of processing), subject to exceptions under applicable law</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">6.3 Right to Withdraw Consent</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        Where we process your personal data on the basis of consent, you have the right to withdraw your consent at any time. Withdrawal of consent will not affect the lawfulness of processing carried out before such withdrawal.
                      </p>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">6.4 Right to Grievance Redressal</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        You have the right to readily available means of grievance redressal in respect of any act or omission by us regarding the processing of your personal data or the exercise of your rights under the Act.
                      </p>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">6.5 Right to Nominate</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        You have the right to nominate any other individual who shall, in the event of your death or incapacity, exercise your rights under the Digital Personal Data Protection Act, 2023.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-line bg-paper p-6 sm:p-7">
                    <p className="m-0 text-base font-semibold text-ink">How to Exercise Your Rights</p>
                    <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                      To exercise any of the above rights, please write to us at:{" "}
                      <a href="mailto:director@somadhantechnologies.in" className="font-medium">
                        director@somadhantechnologies.in
                      </a>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                      We may require you to verify your identity before processing your request. We will respond to your request within the timelines prescribed under the Digital Personal Data Protection Act, 2023 and the Rules made thereunder.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                      Please note that these rights are subject to the conditions, limitations, and exceptions provided under the Act.
                    </p>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 7 */}
              <Reveal delay={0.10}>
                <section id="student-data" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-soft text-sm font-semibold text-sky-deep">7</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Student / Educational Data</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    This section applies to personal data collected in connection with our educational offerings, including bootcamps, training programs, internships, and related learning activities.
                  </p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">7.1 What We Collect</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">When you register for or participate in our educational programs, we may collect:</p>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Name, email address, phone number, and other registration details</li>
                        <li>Educational background and professional information (if provided)</li>
                        <li>Learning progress, assignment submissions, project work, attendance, and feedback</li>
                        <li>Payment-related information (processed through Razorpay)</li>
                        <li>Communications with mentors or our team</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">7.2 How We Use Educational Data</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">We use this data to:</p>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Provide access to the program and learning materials</li>
                        <li>Track progress and issue certificates</li>
                        <li>Facilitate mentorship and feedback</li>
                        <li>Improve the quality of our training programs</li>
                        <li>Communicate important program-related information</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">7.3 Ownership of Student Projects</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        Unless otherwise agreed in writing, the code, projects, and intellectual property created by students during our bootcamps or training programs generally belong to the student. However, if a project is developed using Somadhan&rsquo;s proprietary datasets, tools, or pre-existing intellectual property, additional terms may apply.
                      </p>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">7.4 Retention of Educational Data</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        We retain educational data for as long as necessary to deliver the program, issue certificates, and handle support or administrative requirements. After that, we may retain anonymized or aggregated data for improving our programs.
                      </p>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">7.5 Minors</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        Our website, AI products, and services are not directed at or intended for individuals under 18 years of age, except where explicitly stated (such as in our educational programs, governed by Section 7.5). We do not knowingly collect personal data from minors outside these contexts. If we become aware that we have inadvertently collected such data, we will take steps to delete it, unless retention is permitted with verifiable parental or guardian consent under the Digital Personal Data Protection Act, 2023.
                      </p>
                    </div>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 8 */}
              <Reveal delay={0.11}>
                <section id="research-data" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-terra-soft text-sm font-semibold text-terra-deep">8</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Research and Project Data</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    This section covers data we collect or use while doing research, building AI products, or working on projects for clients.
                  </p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">8.1 Nature of Data</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">This may include:</p>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Data shared by clients or partners for a project</li>
                        <li>Field data, images, sensor readings, or other domain-specific information</li>
                        <li>Any other data required to develop, test, or deliver our solutions</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">8.2 How We Handle It</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">We handle this data carefully. Wherever possible:</p>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>We remove personal identifiers</li>
                        <li>We anonymize or aggregate the data before using it for research or training AI models</li>
                        <li>We take consent when personal data is involved</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">8.3 How We Use It</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">We use this data to:</p>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Build and improve our AI products (including Krishiva AI and future products)</li>
                        <li>Deliver custom solutions for clients</li>
                        <li>Carry out research and testing</li>
                        <li>Share findings or datasets in anonymized form when appropriate</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">8.4 Sharing</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        We may share such data with research partners, universities, or clients when needed for a project. Personal data is shared only when necessary and with proper safeguards.
                      </p>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">8.5 Retention</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        We keep research and project data only as long as needed for the work or as required by law. We remove personal identifiers as early as reasonably possible.
                      </p>
                    </div>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 9 */}
              <Reveal delay={0.12}>
                <section id="security" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-sm font-semibold text-accent-deep">9</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Security</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    We take reasonable steps to protect the personal data we collect and process.
                  </p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">9.1 Measures We Take</h3>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Access to personal data is limited to team members who need it to do their work</li>
                        <li>We use appropriate technical safeguards (such as secure hosting and access controls) to protect data from unauthorized access, loss, or misuse</li>
                        <li>Payment information is handled through Razorpay, which follows its own industry-standard security practices — we do not store sensitive card or bank details ourselves</li>
                        <li>We review and update our practices as our systems and services grow</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">9.2 No Guarantee of Absolute Security</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        No method of storage or transmission over the internet is 100% secure. While we work to protect your information, we cannot guarantee absolute security.
                      </p>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">9.3 What You Can Do</h3>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                        <li>Keep your account credentials confidential</li>
                        <li>Notify us promptly if you suspect any unauthorized access to your account</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="m-0 text-base font-semibold text-ink">9.4 In Case of a Data Breach</h3>
                      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                        If a data breach occurs that affects your personal data, we will take appropriate steps to address it and notify affected individuals and relevant authorities as required under applicable Indian law.
                      </p>
                    </div>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 10 */}
              <Reveal delay={0.13}>
                <section id="grievance" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-soft text-sm font-semibold text-gold-deep">10</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Grievance Officer / Contact Us</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    In accordance with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000, we have designated a Grievance Officer to address any concerns or complaints regarding the processing of your personal data.
                  </p>
                  <div className="mt-6 rounded-2xl border border-line bg-paper p-6 sm:p-7">
                    <p className="m-0 text-base font-semibold text-ink">10.1 Grievance Officer Details</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
                        <a href="mailto:hirak.somadhantechnologies@gmail.com" className="mt-1.5 inline-block text-sm font-medium">
                          hirak.somadhantechnologies@gmail.com
                        </a>
                      </div>
                      <div>
                        <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Address</p>
                        <p className="mt-1.5 m-0 text-sm leading-relaxed text-ink-soft">Somadhan Technologies, Guwahati, Assam, India</p>
                      </div>
                    </div>
                    <p className="mt-6 text-base font-semibold text-ink">10.2 How It Works</p>
                    <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm sm:text-[15px]">
                      <li>If you have any questions, concerns, or complaints about how we handle your personal data, you can reach out to our Grievance Officer at the contact details above.</li>
                      <li>We will acknowledge your complaint and aim to resolve it within the timeline prescribed under applicable Indian law.</li>
                      <li>If you&rsquo;re not satisfied with our response, you may have the right to escalate your grievance to the relevant authority under the Digital Personal Data Protection Act, 2023.</li>
                    </ul>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 11 */}
              <Reveal delay={0.14}>
                <section id="changes" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-soft text-sm font-semibold text-sky-deep">11</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Changes to this Policy</h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable laws.
                    </p>
                    <ul className="list-disc space-y-2.5 pl-5">
                      <li>Any changes will be posted on this page with a revised &ldquo;Last Updated&rdquo; date.</li>
                      <li>If we make significant changes that materially affect how we handle your personal data, we will take reasonable steps to notify you (for example, through the website or via email, where applicable).</li>
                      <li>We encourage you to review this Policy periodically to stay informed about how we protect your information.</li>
                    </ul>
                    <p>
                      Your continued use of our website, products, or services after any changes to this Policy will constitute your acceptance of the updated terms.
                    </p>
                  </div>
                </section>
              </Reveal>

              <hr className="my-10 border-line" />

              {/* 12 */}
              <Reveal delay={0.15}>
                <section id="governing-law" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-terra-soft text-sm font-semibold text-terra-deep">12</span>
                    <h2 className="m-0 text-xl sm:text-2xl">Governing Law</h2>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed sm:text-[15px]">
                    This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts in <strong>Guwahati, Assam</strong>.
                  </p>
                </section>
              </Reveal>

              {/* Bottom note */}
              <Reveal delay={0.16}>
                <div className="mt-12 rounded-2xl bg-forest px-6 py-8 sm:px-8">
                  <p className="m-0 text-sm leading-relaxed text-paper/70">
                    This page was last updated on <span className="font-medium text-paper">02/09/2026</span>. For any questions about this Policy, contact us at{" "}
                    <a href="mailto:director@somadhantechnologies.in" className="font-medium text-paper underline underline-offset-4">
                      director@somadhantechnologies.in
                    </a>{" "}
                    or reach our Grievance Officer at{" "}
                    <a href="mailto:hirak.somadhantechnologies@gmail.com" className="font-medium text-paper underline underline-offset-4">
                      hirak.somadhantechnologies@gmail.com
                    </a>
                    .
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper/90"
                    >
                      Contact Us
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </article>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}
