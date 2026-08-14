import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ArrowLink from "@/components/ArrowLink";
import { ViewTransition } from "react";
import { SatelliteGlyph, LeafGlyph, DropGlyph, ChainGlyph } from "@/components/glyphs";

export const metadata = {
  title: "About Us",
  description:
    "Somadhan Technologies is an AI technology and innovation organization building intelligent, accessible and practical solutions for real-world challenges.",
};

const pillars = [
  {
    title: "Research First",
    body: "Every solution starts as a question, is tested against real data and earns its place in the field before it ships.",
    Icon: SatelliteGlyph,
    tile: "bg-accent-soft text-accent-deep",
  },
  {
    title: "Domain Grounded",
    body: "We design with domain experts and validate in real conditions — farms, offices and communities — not in isolation.",
    Icon: LeafGlyph,
    tile: "bg-gold-soft text-gold-deep",
  },
  {
    title: "Inclusive by Default",
    body: "Language, accessibility and reach are design constraints, not afterthoughts. Technology must work for everyone.",
    Icon: DropGlyph,
    tile: "bg-sky-soft text-sky-deep",
  },
  {
    title: "Outcomes over Announcements",
    body: "We measure success by adoption and impact, not by press releases. If it doesn't work in the real world, it isn't done.",
    Icon: ChainGlyph,
    tile: "bg-terra-soft text-terra-deep",
  },
];

export default function AboutPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="About Us"
        title="Building Technology for Real-World Impact"
        description="Somadhan Technologies is an AI technology and innovation organization focused on building intelligent, accessible and practical solutions for real-world challenges."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <SectionHeading
            eyebrow="Who we are"
            title={
              <>
                Where AI meets{" "}
                <span className="text-accent">human impact.</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              Somadhan Technologies is an AI technology and innovation
              organization focused on building intelligent, accessible and
              practical solutions for real-world challenges.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              Our work brings together artificial intelligence, data,
              agriculture, language technologies and digital systems to create
              solutions that are useful, inclusive and impactful.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              We believe technology should not only be powerful — it should
              also be accessible, understandable and relevant to the people and
              communities it serves.
            </p>
            <p className="mt-6 font-display text-base font-medium tracking-wide text-accent sm:text-lg">
              AI &times; Data &times; Agriculture &times; Language &times;
              Governance &times; Human Impact
            </p>
            <div className="mt-10">
              <Link
                href="/team"
                className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-moss px-6 py-3 text-sm font-medium text-white shadow-md shadow-accent/25 transition-all hover:shadow-lg hover:shadow-accent/30"
              >
                Meet the Team
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-cream/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            align="center"
            eyebrow="What guides us"
            title="Four pillars behind everything we build."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ title, body, Icon, tile }, i) => (
              <Reveal key={title} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${tile}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-medium">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-forest px-8 py-12 sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40 [mask-image:radial-gradient(60%_100%_at_100%_50%,black,transparent)]"
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-medium text-paper">
                Let&apos;s Build Inclusive AI Together
              </h2>
              <p className="mt-3 max-w-lg text-sm text-paper/70">
                Join us in creating intelligent solutions that empower people,
                strengthen institutions and transform communities.
              </p>
              <div className="mt-8">
                <ArrowLink href="/contact" className="text-paper hover:text-gold">
                  Contact Us
                </ArrowLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </ViewTransition>
  );
}