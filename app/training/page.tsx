import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ArrowLink from "@/components/ArrowLink";
import { ViewTransition } from "react";
import { SatelliteGlyph, LeafGlyph, DropGlyph, ChainGlyph } from "@/components/glyphs";

export const metadata = {
  title: "Training & Internship",
  description:
    "Industry-oriented training, internships and skill development programs for future-ready technology talent.",
};

const tracks = [
  {
    title: "Applied Machine Learning",
    body: "From data preparation to deployed models — build systems that solve real problems, not just notebooks.",
    Icon: SatelliteGlyph,
    tile: "bg-accent-soft text-accent-deep",
  },
  {
    title: "AI for Agriculture",
    body: "Crop intelligence, remote sensing and agri-analytics — learn the field context that makes models useful.",
    Icon: LeafGlyph,
    tile: "bg-gold-soft text-gold-deep",
  },
  {
    title: "Language & Voice AI",
    body: "Speech, translation and regional language AI — technology that works for every language and speaker.",
    Icon: DropGlyph,
    tile: "bg-sky-soft text-sky-deep",
  },
  {
    title: "Data & GIS Engineering",
    body: "Data pipelines, geospatial analysis and dashboarding — the backbone of every intelligent system.",
    Icon: ChainGlyph,
    tile: "bg-terra-soft text-terra-deep",
  },
];

const steps = [
  "Apply — tell us what you want to build and why.",
  "Learn — structured modules with mentors and real datasets.",
  "Build — work on a live project with our team.",
  "Ship — present, deploy and join our network.",
];

export default function TrainingPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Training & Internship"
        title={
          <>
            Learn. Build.{" "}
            <em className="text-gradient animate-shimmer">Innovate.</em>
          </>
        }
        description="Industry-oriented training, internships and skill development programs for future-ready technology talent."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Programs"
          title={
            <>
              Learn by{" "}
              <em className="text-gradient animate-shimmer">building.</em>
            </>
          }
          description="Four tracks, one philosophy — skills that survive contact with the real world."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tracks.map(({ title, body, Icon, tile }, i) => (
            <Reveal key={title} delay={i * 0.06} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${tile} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-cream/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="How it works"
              title={
                <>
                  From application to{" "}
                  <em className="text-gradient animate-shimmer">
                    real project.
                  </em>
                </>
              }
            />
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-paper p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent to-moss"
                />
                <ul className="space-y-5">
                  {steps.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-forest px-8 py-10 sm:flex-row sm:items-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40 [mask-image:radial-gradient(60%_100%_at_0%_50%,black,transparent)]"
            />
            <div className="relative">
              <h3 className="font-display text-2xl font-medium text-paper">
                Ready to build with us?
              </h3>
              <p className="mt-2 max-w-md text-sm text-paper/70">
                Applications for our next cohort are open. Limited seats per
                track.
              </p>
            </div>
            <ArrowLink
              href="/contact"
              className="relative text-paper hover:text-gold"
            >
              Explore Programs
            </ArrowLink>
          </div>
        </Reveal>
      </section>
    </ViewTransition>
  );
}