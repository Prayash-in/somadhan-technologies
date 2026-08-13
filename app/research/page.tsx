import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import { ViewTransition } from "react";
import { tones } from "@/components/tone";
import { publications, researchSteps } from "@/content/research";

export const metadata = {
  title: "Research",
  description:
    "The research program behind Somadhan Technologies — field protocols, peer-reviewed work and benchmarks.",
};

const stepTones = ["green", "gold", "sky", "terra"] as const;

const statusTones: Record<string, keyof typeof tones> = {
  "Peer-reviewed": "green",
  "Preprint": "sky",
  "In review": "gold",
};

export default function ResearchPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Research"
        title="Our work has to survive the field and the review board."
        description="Everything we ship starts in a research program that is measured, challenged and published — because in agriculture, untested ideas cost harvests."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-lg font-display text-2xl font-medium tracking-tight sm:text-3xl">
              How we do research
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft">
              Five steps, repeated every season, with feedback at every
              boundary. The loop is the product.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {researchSteps.map((step, i) => {
              const tone = tones[stepTones[i % stepTones.length]];
              return (
                <Reveal key={step.number} delay={i * 0.05} className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden bg-paper p-6 transition-colors hover:bg-white">
                    <div
                      aria-hidden="true"
                      className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${tone.topBar} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full font-display text-xs font-medium ${tone.soft}`}
                    >
                      {step.number}
                    </span>
                    <h3 className="mt-4 font-display text-base font-medium leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Publications &amp; preprints
          </h2>
          <p className="text-sm text-ink-soft">
            Selected outputs from the research program.
          </p>
        </div>

        <div className="mt-12 divide-y divide-line rounded-2xl border border-line bg-white shadow-sm shadow-ink/5">
          {publications.map((pub, i) => {
            const tone = tones[statusTones[pub.status] ?? "green"];
            return (
              <Reveal key={pub.title} delay={i * 0.04}>
                <div className="grid gap-4 px-8 py-7 sm:grid-cols-[1fr_auto] sm:gap-10">
                  <div>
                    <h3 className="font-display text-lg font-medium leading-snug sm:text-xl">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft">
                      {pub.authors} &middot; {pub.venue} &middot; {pub.year}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-wider text-ink-soft"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className={`h-fit w-fit rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${tone.chip}`}
                  >
                    {pub.status}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12">
          <p className="text-sm text-ink-soft">
            Full texts and datasets are shared with partners and on request.
            For collaboration or access:{" "}
            <a
              href="mailto:research@somadhan.tech"
              className="font-medium text-accent hover:text-accent-deep"
            >
              research@somadhan.tech
            </a>
          </p>
        </Reveal>

        <Reveal className="mt-24">
          <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-forest px-8 py-12 sm:flex-row sm:items-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40 [mask-image:radial-gradient(60%_100%_at_100%_50%,black,transparent)]"
            />
            <div
              aria-hidden="true"
              className="animate-drift-b pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,120,31,0.3),transparent_70%)] blur-3xl"
            />
            <div className="relative">
              <h3 className="font-display text-2xl font-medium text-paper">
                Partner on a study
              </h3>
              <p className="mt-2 max-w-md text-sm text-paper/70">
                Field trials, dataset collaborations and joint publications are
                open to universities, institutes and agri-businesses.
              </p>
            </div>
            <ArrowLink href="/contact" className="relative text-paper hover:text-gold">
              Get in touch
            </ArrowLink>
          </div>
        </Reveal>
      </section>
    </ViewTransition>
  );
}