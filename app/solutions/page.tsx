import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import { ViewTransition } from "react";
import { tones } from "@/components/tone";
import { SolutionGlyph } from "@/components/glyphs";
import { solutions } from "@/content/solutions";

export const metadata = {
  title: "AI Solutions",
  description:
    "AI application development, intelligent automation, generative AI, chatbots, analytics and custom AI systems — built for people, agriculture, government and institutions.",
};

export default function SolutionsPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="AI Solutions"
        title="Intelligent AI. Real-World Impact."
        description="AI application development, intelligent automation, generative AI, chatbots, analytics and custom AI systems — applied with depth in agriculture, language and governance."
      />

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="space-y-20 sm:space-y-28">
          {solutions.map((solution, i) => {
            const tone = tones[solution.tone];
            return (
              <section
                key={solution.id}
                id={solution.id}
                className="scroll-mt-28"
              >
                <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tone.tile} shadow-lg`}
                      >
                        <SolutionGlyph id={solution.id} className="h-7 w-7" />
                      </div>
                      <p className={`font-display text-sm italic ${tone.text}`}>
                        {solution.index}
                      </p>
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                      {solution.title}
                    </h2>
                    <p className={`mt-2 font-display italic ${tone.text}`}>
                      {solution.tagline}
                    </p>
                    <p className="mt-6 text-base leading-relaxed text-ink-soft">
                      {solution.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-wider ${tone.chip}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Reveal>

                  <div className="space-y-8">
                    <Reveal delay={0.1}>
                      <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-8">
                        <div
                          aria-hidden="true"
                          className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${tone.topBar}`}
                        />
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                          Our approach
                        </h3>
                        <ul className="mt-5 space-y-4">
                          {solution.approach.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                            >
                              <span
                                aria-hidden="true"
                                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone.bullet}`}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                    <Reveal delay={0.18}>
                      <div className="relative overflow-hidden rounded-2xl border border-line bg-cream p-8">
                        <div
                          aria-hidden="true"
                          className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${tone.topBar} opacity-70`}
                        />
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                          What it delivers
                        </h3>
                        <ul className="mt-5 space-y-4">
                          {solution.outcomes.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-relaxed text-ink"
                            >
                              <span
                                aria-hidden="true"
                                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone.bullet}`}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </div>

                {i < solutions.length - 1 ? (
                  <div className="mt-20 border-t border-line sm:mt-28" />
                ) : null}
              </section>
            );
          })}
        </div>

        <Reveal className="mt-24">
          <div
            id="multilingual-ai"
            className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-white p-8 sm:p-12"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky to-accent"
            />
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-sky to-sky-deep text-white shadow-lg">
                    <span
                      aria-hidden="true"
                      className="h-6 w-6"
                      style={{
                        display: "inline-block",
                        background:
                          "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%221.6%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M4 6h9M8.5 3.5v2.5%22/><path d=%22M6.5 6c0 4 2.5 6.5 6.5 7.5%22/><path d=%22M10 9.5C9 12 7.5 13.5 5 14.5%22/><rect x=%2213%22 y=%2212%22 width=%228%22 height=%228%22 rx=%222%22/></svg>')",
                      }}
                    />
                  </div>
                  <p className="font-display text-sm italic text-sky">
                    AI that speaks your language
                  </p>
                </div>
                <h2 className="mt-6 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                  Inclusive. Multilingual. Accessible.
                </h2>
                <p className="mt-2 font-display italic text-sky">
                  AI that understands, communicates and serves users across
                  languages.
                </p>
                <p className="mt-6 text-base leading-relaxed text-ink-soft">
                  We build AI applications that reduce language barriers and
                  bring intelligent technology closer to every user.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky"
                  />
                  Multilingual AI — applications that work across languages.
                </div>
                <div className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky"
                  />
                  Voice AI &amp; Assistants — speech-enabled services in
                  regional languages.
                </div>
                <div className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky"
                  />
                  Translation &amp; Language AI — content and services in the
                  language of the user.
                </div>
                <div className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky"
                  />
                  Regional Language Applications — built for real speakers, not
                  benchmarks.
                </div>
                <ArrowLink href="/contact" className="inline-block">
                  Learn More
                </ArrowLink>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-forest px-8 py-10 sm:flex-row sm:items-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40 [mask-image:radial-gradient(60%_100%_at_0%_50%,black,transparent)]"
            />
            <div
              aria-hidden="true"
              className="animate-drift-a pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,122,79,0.4),transparent_70%)] "
            />
            <div className="relative">
              <h3 className="font-display text-2xl font-medium text-paper">
                Partner with us
              </h3>
              <p className="mt-2 max-w-md text-sm text-paper/70">
                Tell us about the challenge you want to solve — from generative
                AI and automation to analytics and custom systems.
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
      </div>
    </ViewTransition>
  );
}