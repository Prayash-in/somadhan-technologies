import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ArrowLink from "@/components/ArrowLink";
import { ViewTransition } from "react";
import { SatelliteGlyph, LeafGlyph, DropGlyph } from "@/components/glyphs";

export const metadata = {
  title: "Projects",
  description:
    "Real projects, real impact - featuring Krishiva AI, our ongoing flagship agricultural intelligence platform (“Ask Agriculture. Get an Action.”), alongside AI, agriculture, multilingual technology and research projects developed by Somadhan Technologies.",
};

const contextFactors = [
  "Crop",
  "Symptoms",
  "Location",
  "Season",
  "Weather",
  "Field Conditions",
];

const projects = [
  {
    title: "Crop Intelligence System",
    tag: "Agriculture",
    body: "Problem — farmers lack early warning of crop stress across large areas. Technology — AI, GIS and satellite remote sensing. Impact — early detection supports timely action to protect yields.",
    Icon: LeafGlyph,
    tile: "bg-accent-soft text-accent-deep",
  },
  {
    title: "Multilingual Voice Assistant",
    tag: "Multilingual Technology",
    body: "Problem — language barriers keep many users from digital services. Technology — NLP, speech recognition and voice AI. Impact — services reach people in the language they speak.",
    Icon: DropGlyph,
    tile: "bg-sky-soft text-sky-deep",
  },
  {
    title: "Climate & Weather Advisory Pipeline",
    tag: "AI",
    body: "Problem — weather variability disrupts sowing, irrigation and harvest decisions. Technology — machine learning and climate data. Impact — climate-aware decisions for growers and institutions.",
    Icon: SatelliteGlyph,
    tile: "bg-gold-soft text-gold-deep",
  },

];

export default function ProjectsPage() {
  return (
    <ViewTransition name="page">
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Our work"
          title={
            <>
              Real projects.{" "}
              <em className="text-gradient animate-shimmer">Real impact.</em>
            </>
          }
        />
        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-2xl bg-forest px-8 py-10 sm:px-12 sm:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40 [mask-image:radial-gradient(70%_80%_at_20%_0%,black,transparent)]"
            />
            <div
              aria-hidden="true"
              className="animate-drift-a pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(74,157,106,0.35),transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="animate-drift-b pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,120,31,0.22),transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -right-16 rotate-12 text-moss/25"
            >
              <LeafGlyph className="h-64 w-64" />
            </div>

            <div className="relative max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  <LeafGlyph className="h-3.5 w-3.5" />
                  Flagship Project
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-paper/80">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-moss"
                  />
                  Ongoing
                </span>
              </div>

              <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                Krishiva AI
              </h3>
              <p className="mt-3 font-display text-lg italic text-moss sm:text-xl">
                &ldquo;Ask Agriculture. Get an Action.&rdquo;
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white sm:text-base">
                Developed under Somadhan Technologies, Krishiva AI is an
                agricultural intelligence platform that helps farmers turn
                complex and scattered agricultural information into simple,
                localized and actionable decisions. Built specifically around
                agricultural contexts - not as a general-purpose chatbot - a
                farmer describes a crop problem, symptoms or farming situation
                in natural language, and the system responds with concise,
                relevant guidance powered by curated agricultural knowledge,
                retrieval-based AI and contextual information.
              </p>

              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/50">
                Understands context, wherever relevant
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {contextFactors.map((factor) => (
                  <span
                    key={factor}
                    className="rounded-full border border-paper/20 bg-paper/5 px-3 py-1 text-xs font-medium text-paper/85"
                  >
                    {factor}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-paper/15 pt-5 text-sm text-paper/60">
                Curated agricultural knowledge &middot; Retrieval-based AI
                &middot; Localized, actionable answers
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map(({ title, tag, body, Icon, tile }, i) => (
            <Reveal key={title} delay={i * 0.05} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-8 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5">
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${tile} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-line bg-cream px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-ink-soft">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-forest px-8 py-10 sm:flex-row sm:items-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40 [mask-image:radial-gradient(60%_100%_at_0%_50%,black,transparent)]"
            />
            <div className="relative">
              <h3 className="font-display text-2xl font-medium text-paper">
                Have a project in mind?
              </h3>
              <p className="mt-2 max-w-md text-sm text-paper/70">
                Tell us about the problem — we will help scope the path from
                idea to deployed system.
              </p>
            </div>
            <ArrowLink
              href="/contact"
              className="relative text-paper hover:text-gold"
            >
              Start a project
            </ArrowLink>
          </div>
        </Reveal>
      </section>
    </ViewTransition>
  );
}