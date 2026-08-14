import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ArrowLink from "@/components/ArrowLink";
import { ViewTransition } from "react";
import { BuildingGlyph, ChainGlyph, LeafGlyph, SatelliteGlyph } from "@/components/glyphs";

export const metadata = {
  title: "Government Solutions",
  description:
    "Inclusive AI for government — citizen service platforms, AI-enabled dashboards, document and workflow automation and departmental solutions for accessible and efficient governance.",
};

const services = [
  {
    title: "Citizen Service Platforms",
    body: "Digital front doors for public services, built to be simple, accessible and inclusive — in the languages people actually speak.",
    Icon: BuildingGlyph,
    tile: "bg-accent-soft text-accent-deep",
  },
  {
    title: "AI-enabled Dashboards",
    body: "Decision dashboards that turn departmental data into clear, timely insight for planning, monitoring and evaluation.",
    Icon: SatelliteGlyph,
    tile: "bg-sky-soft text-sky-deep",
  },
  {
    title: "Document & Workflow Automation",
    body: "Intelligent document processing and workflow automation that reduce backlogs and free staff for higher-value work.",
    Icon: ChainGlyph,
    tile: "bg-gold-soft text-gold-deep",
  },
  {
    title: "Departmental Solutions",
    body: "Purpose-built applications for agriculture, health and rural development departments — designed with domain experts.",
    Icon: LeafGlyph,
    tile: "bg-terra-soft text-terra-deep",
  },
];

const principles = [
  "Accessible to every citizen, regardless of language or digital literacy.",
  "Transparent by design — citizens and departments can see how decisions are made.",
  "Secure and trustworthy data handling, aligned with governance standards.",
  "Measured by outcomes — faster services, better decisions, real adoption.",
];

export default function GovernmentPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Government Solutions"
        title="Smarter public services for a better tomorrow."
        description="AI-enabled, data-driven and citizen-centric solutions for accessible and efficient governance."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Inclusive AI for Government"
          title={
            <>
              Solutions built for{" "}
              <span className="text-accent">public service.</span>
            </>
          }
          description="Technology that makes government work better for the people it serves."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map(({ title, body, Icon, tile }, i) => (
            <Reveal key={title} delay={i * 0.05} className="h-full">
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-paper p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tile} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
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
              eyebrow="How we deliver"
              title="Built on a few non-negotiables."
            />
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-paper p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent to-moss"
                />
                <ul className="space-y-5">
                  {principles.map((item) => (
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
                Smarter public services start here
              </h3>
              <p className="mt-2 max-w-md text-sm text-paper/70">
                AI-enabled, data-driven and citizen-centric solutions for
                accessible and efficient governance.
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