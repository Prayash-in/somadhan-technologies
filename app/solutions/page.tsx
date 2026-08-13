import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import { ViewTransition } from "react";
import { tones } from "@/components/tone";
import { SolutionGlyph } from "@/components/glyphs";
import { solutions } from "@/content/solutions";

export const metadata = {
  title: "Solutions",
  description:
    "Precision agriculture, crop intelligence, climate resilience and value-chain analytics — AI solutions for agriculture, validated in the field.",
};

export default function SolutionsPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Solutions"
        title="Built in the lab. Proven in the field."
        description="Four research verticals, one standard: every solution must earn its place in the farm calendar before it reaches the field."
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
          <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-forest px-8 py-10 sm:flex-row sm:items-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40 [mask-image:radial-gradient(60%_100%_at_0%_50%,black,transparent)]"
            />
            <div
              aria-hidden="true"
              className="animate-drift-a pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,122,79,0.4),transparent_70%)] blur-3xl"
            />
            <div className="relative">
              <h3 className="font-display text-2xl font-medium text-paper">
                Want to pilot with us?
              </h3>
              <p className="mt-2 max-w-md text-sm text-paper/70">
                We work with growers, agri-businesses and research institutions
                to take a solution from prototype to field scale.
              </p>
            </div>
            <ArrowLink
              href="/contact"
              className="relative text-paper hover:text-gold"
            >
              Start a pilot
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </ViewTransition>
  );
}