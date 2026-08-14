import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ViewTransition } from "react";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata = {
  title: "Contact",
  description:
    "Contact Somadhan Technologies — partnerships, projects, research collaborations, training and careers.",
};

const channels = [
  {
    label: "Email",
    value: "director@somadhantechnologies.in",
    href: "mailto:director@somadhantechnologies.in",
  },
];

export default function ContactPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s Build Inclusive AI Together."
        description="Partnerships, projects, research collaborations and training — tell us what you want to build."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  Direct channels
                </h2>
                <ul className="mt-5 divide-y divide-line border-y border-line">
                  {channels.map((channel) => (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        className="group flex items-center justify-between gap-4 py-4"
                      >
                        <span className="text-sm text-ink-soft">
                          {channel.label}
                        </span>
                        <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                          {channel.value}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="relative overflow-hidden rounded-2xl bg-forest p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40"
                />
                <div
                  aria-hidden="true"
                  className="animate-drift-a pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,122,79,0.45),transparent_70%)] blur-2xl"
                />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    News &amp; Updates
                  </p>
                  <h3 className="mt-4 font-display text-xl font-medium leading-snug text-paper">
                    Research, projects and inclusive AI — updates worth
                    reading.
                  </h3>
                  <div className="mt-6">
                    <NewsletterForm />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-paper p-8">
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky to-accent opacity-70`}
                />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  Office
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  Somadhan Technologies
                  <br />
                  Guwahati, Assam, India
                </p>
                <p className="mt-4 text-xs text-ink-soft/70">
                  Reaching the Summit of Inclusive AI.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </ViewTransition>
  );
}
