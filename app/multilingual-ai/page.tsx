import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import SectionHeading from "@/components/SectionHeading";
import { ViewTransition } from "react";
import {
  LanguageGlyph,
  VoiceGlyph,
  TranslateGlyph,
  NetworkGlyph,
} from "@/components/glyphs";
import {
  multilingualFeatures,
  multilingualApproach,
  multilingualOutcomes,
} from "@/content/multilingual";

export const metadata = {
  title: "Multilingual AI",
  description:
    "Inclusive, multilingual and accessible AI — chatbots, voice assistants, translation and regional language applications that speak the user's language.",
};

const featureIcons = {
  chat: LanguageGlyph,
  voice: VoiceGlyph,
  translate: TranslateGlyph,
  network: NetworkGlyph,
} as const;

export default function MultilingualAIPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Multilingual AI"
        title={
          <>
            AI That{" "}
            <em className="text-gradient animate-shimmer">
              Speaks Your Language
            </em>
          </>
        }
        description="Inclusive, multilingual and accessible AI — applications that understand, communicate and serve every user in the language they speak."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="What we build"
          title={
            <>
              Inclusive. Multilingual.{" "}
              <em className="text-gradient animate-shimmer">Accessible.</em>
            </>
          }
          description="We build AI applications that break language barriers and bring technology closer to every user."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {multilingualFeatures.map(({ title, body, icon }) => {
            const Icon = featureIcons[icon];
            return (
              <Reveal key={title} className="h-full">
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-paper p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5 sm:p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky to-sky-deep text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-cream/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="How we build it"
              title={
                <>
                  Language at the{" "}
                  <em className="text-gradient animate-shimmer">core.</em>
                </>
              }
            />
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="relative overflow-hidden rounded-2xl border border-line bg-paper p-8">
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky to-accent" />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                    Our approach
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {multilingualApproach.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-8">
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky to-accent opacity-70" />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                    What it delivers
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {multilingualOutcomes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-ink"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <Reveal>
          <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-forest px-8 py-10 sm:flex-row sm:items-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40 [mask-image:radial-gradient(60%_100%_at_0%_50%,black,transparent)]"
            />
            <div className="relative">
              <h3 className="font-display text-2xl font-medium text-paper">
                Partner with us
              </h3>
              <p className="mt-2 max-w-md text-sm text-paper/70">
                Tell us about the language you serve — and the experience you
                want every user to have.
              </p>
            </div>
            <ArrowLink
              href="/contact"
              className="relative text-paper hover:text-gold"
            >
              Partner With Us
            </ArrowLink>
          </div>
        </Reveal>
      </section>
    </ViewTransition>
  );
}