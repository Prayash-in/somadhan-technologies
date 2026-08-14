import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ArrowLink from "@/components/ArrowLink";
import { ViewTransition } from "react";
import { SatelliteGlyph, LeafGlyph, DropGlyph, ChainGlyph } from "@/components/glyphs";

export const metadata = {
  title: "Projects",
  description:
    "Real projects, real impact — AI, agriculture, government, multilingual technology and research projects developed by Somadhan Technologies for institutions, departments, businesses and communities.",
};

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
  {
    title: "Government Service Automation",
    tag: "Government",
    body: "Problem — manual document workflows delay citizen services. Technology — document AI and workflow automation. Impact — faster, more accessible public services.",
    Icon: ChainGlyph,
    tile: "bg-terra-soft text-terra-deep",
  },
];

export default function ProjectsPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Projects"
        title="From prototype to practice."
        description="Real projects. Real impact. Solutions developed for institutions, departments, businesses and communities."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Our work"
          title={
            <>
              Real projects.{" "}
              <span className="text-accent">Real impact.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
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