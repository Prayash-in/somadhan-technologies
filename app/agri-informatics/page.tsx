import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ArrowLink from "@/components/ArrowLink";
import { ViewTransition } from "react";
import { SatelliteGlyph, LeafGlyph, DropGlyph, ChainGlyph } from "@/components/glyphs";

export const metadata = {
  title: "Agri-Informatics",
  description:
    "AI-powered Agri-Informatics — crop intelligence, disease and pest detection, weather and climate advisory, soil and water intelligence, GIS and remote sensing, and agri value chain intelligence.",
};

const capabilities = [
  {
    title: "Crop Intelligence",
    body: "AI-driven insights for crop monitoring, growth and productivity.",
    Icon: LeafGlyph,
    tile: "bg-accent-soft text-accent-deep",
  },
  {
    title: "Disease & Pest Detection",
    body: "Intelligent identification and analysis of crop diseases and pest threats.",
    Icon: SatelliteGlyph,
    tile: "bg-gold-soft text-gold-deep",
  },
  {
    title: "Weather & Climate Advisory",
    body: "Data-driven insights to support climate-aware agricultural decisions.",
    Icon: DropGlyph,
    tile: "bg-sky-soft text-sky-deep",
  },
  {
    title: "Soil & Water Intelligence",
    body: "Using data and technology to improve soil and water management.",
    Icon: DropGlyph,
    tile: "bg-terra-soft text-terra-deep",
  },
  {
    title: "GIS & Remote Sensing",
    body: "Geospatial intelligence and remote sensing for agricultural monitoring and planning.",
    Icon: SatelliteGlyph,
    tile: "bg-accent-soft text-accent-deep",
  },
  {
    title: "Agri Value Chain Intelligence",
    body: "Data-driven insights across agricultural production, markets and value chains.",
    Icon: ChainGlyph,
    tile: "bg-gold-soft text-gold-deep",
  },
];

const approach = [
  "Sense — collect field, sensor and satellite data.",
  "Understand — turn data into crop and soil intelligence.",
  "Predict — anticipate risks, pests, weather and yield.",
  "Advise — deliver clear, actionable guidance in local language.",
];

export default function AgriInformaticsPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Agri-Informatics"
        title={
          <>
            AI-Powered{" "}
            <em className="text-gradient animate-shimmer">Agri-Informatics</em>
          </>
        }
        description="Transforming agricultural data and intelligence into actionable insights for a sustainable and productive future."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Our Special Focus"
          title={
            <>
              What we build for{" "}
              <em className="text-gradient animate-shimmer">agriculture.</em>
            </>
          }
          description="From individual fields to entire value chains, our solutions connect data to decisions."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ title, body, Icon, tile }, i) => (
            <Reveal key={title} delay={i * 0.05} className="h-full">
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-paper p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tile} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-medium">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-cream/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="How we work"
              title={
                <>
                  Sense. Understand.{" "}
                  <em className="text-gradient animate-shimmer">
                    Predict. Advise.
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
                  {approach.map((item) => (
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
                Explore Agri-Informatics
              </h3>
              <p className="mt-2 max-w-md text-sm text-paper/70">
                Transforming agricultural data and intelligence into actionable
                insights for a sustainable and productive future.
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