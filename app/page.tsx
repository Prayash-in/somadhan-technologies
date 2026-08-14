import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ArrowLink from "@/components/ArrowLink";
import Marquee from "@/components/Marquee";
import LeafMark from "@/components/LeafMark";
import { tones } from "@/components/tone";
import {
  SatelliteGlyph,
  LeafGlyph,
  DropGlyph,
  ChainGlyph,
  BuildingGlyph,
} from "@/components/glyphs";
import { publications } from "@/content/research";
import { posts } from "@/content/posts";

const aboutPoints = [
  {
    index: "01",
    title: "Inclusive AI",
    body: "Technology should work for everyone — regardless of language, literacy or background. Inclusion is a design constraint, not an afterthought.",
  },
  {
    index: "02",
    title: "Practical by Design",
    body: "We build solutions for real-world problems and measure them by adoption and outcomes — not by announcements.",
  },
  {
    index: "03",
    title: "Research-Driven",
    body: "Applied research and field validation power everything we build, from AI systems to public services.",
  },
];

const services = [
  {
    index: "01",
    title: "AI Solutions",
    href: "/solutions",
    description:
      "AI application development, intelligent automation, generative AI, chatbots, analytics and custom AI systems.",
    tags: ["Generative AI", "Automation", "Analytics"],
    tone: "green" as const,
    Icon: SatelliteGlyph,
  },
  {
    index: "02",
    title: "Research & Innovation",
    href: "/research",
    description:
      "Research that powers our solutions — from applied AI research to publications and field-validated innovations.",
    tags: ["Applied Research", "Publications", "Innovation"],
    tone: "gold" as const,
    Icon: LeafGlyph,
  },
  {
    index: "03",
    title: "Government Solutions",
    href: "/government",
    description:
      "Digital and AI-enabled solutions for departments, institutions and public services.",
    tags: ["Citizen Services", "Dashboards", "Automation"],
    tone: "terra" as const,
    Icon: BuildingGlyph,
  },
  {
    index: "04",
    title: "Training & Internship",
    href: "/training",
    description:
      "Industry-oriented training, internships and skill development programs for future-ready technology talent.",
    tags: ["AI Training", "Internships", "Skills"],
    tone: "green" as const,
    Icon: ChainGlyph,
  },
];

const agriTiles = [
  { label: "Crop Intelligence", Icon: LeafGlyph },
  { label: "Disease & Pest Detection", Icon: SatelliteGlyph },
  { label: "Weather & Climate Advisory", Icon: DropGlyph },
  { label: "Soil & Water Intelligence", Icon: DropGlyph },
  { label: "GIS & Remote Sensing", Icon: SatelliteGlyph },
  { label: "Value Chain Intelligence", Icon: ChainGlyph },
];

const statusTones: Record<string, keyof typeof tones> = {
  "Peer-reviewed": "green",
  "Preprint": "sky",
  "In review": "gold",
};

const tagTones: Record<string, keyof typeof tones> = {
  Approach: "green",
  Research: "sky",
  "Field Notes": "gold",
};

export default function Home() {
  return (
    <ViewTransition name="page">
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(45,122,79,0.09),transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-field-grid opacity-60 [mask-image:radial-gradient(65%_60%_at_50%_15%,black,transparent)]"
        />
        <div
          aria-hidden="true"
          className="animate-drift-a pointer-events-none absolute -top-32 -left-32 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(74,157,106,0.22),transparent_70%)] "
        />
        <div
          aria-hidden="true"
          className="animate-drift-b pointer-events-none absolute top-10 -right-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,120,31,0.16),transparent_70%)] "
        />
        <div
          aria-hidden="true"
          className="animate-drift-b pointer-events-none absolute -bottom-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(31,111,158,0.14),transparent_70%)] "
        />
        <div
          aria-hidden="true"
          className="animate-spin-slow pointer-events-none absolute -top-64 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full opacity-70 "
          style={{
            background:
              "conic-gradient(from 0deg, rgba(45,122,79,0.14), rgba(168,120,31,0.09), rgba(31,111,158,0.10), rgba(180,85,45,0.09), rgba(45,122,79,0.14))",
          }}
        />
        <div
          aria-hidden="true"
          className="animate-float pointer-events-none absolute left-[6%] top-24 hidden text-accent/25 sm:block"
          style={{ animationDelay: "0.4s", animationDuration: "7s" }}
        >
          <LeafMark className="h-14 w-14 -rotate-12 sm:h-20 sm:w-20" />
        </div>
        <div
          aria-hidden="true"
          className="animate-float pointer-events-none absolute right-[8%] top-40 hidden text-gold/30 sm:block"
          style={{ animationDelay: "1.6s", animationDuration: "8s" }}
        >
          <LeafMark className="h-10 w-10 rotate-45 sm:h-14 sm:w-14" />
        </div>
        <div
          aria-hidden="true"
          className="animate-float pointer-events-none absolute left-[14%] bottom-24 hidden text-sky/25 lg:block"
          style={{ animationDelay: "2.4s", animationDuration: "9s" }}
        >
          <LeafMark className="h-12 w-12 rotate-90 sm:h-16 sm:w-16" />
        </div>
        <div
          aria-hidden="true"
          className="animate-float pointer-events-none absolute right-[18%] bottom-32 hidden text-terra/25 lg:block"
          style={{ animationDelay: "3.2s", animationDuration: "7.5s" }}
        >
          <LeafMark className="h-11 w-11 -rotate-45 sm:h-14 sm:w-14" />
        </div>
        <div
          aria-hidden="true"
          className="animate-float pointer-events-none absolute left-[3%] top-1/2 hidden text-accent/20 lg:block"
          style={{ animationDelay: "4.1s", animationDuration: "8.5s" }}
        >
          <LeafMark className="h-16 w-16 rotate-45" />
        </div>
        <div
          aria-hidden="true"
          className="animate-float pointer-events-none absolute right-[4%] top-[62%] hidden text-gold/20 md:block"
          style={{ animationDelay: "5s", animationDuration: "9.5s" }}
        >
          <LeafMark className="h-12 w-12 -rotate-90" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-24 pt-20 text-center sm:px-8 sm:pt-28">
          <Reveal>
            <Image
              src="/logo.png"
              alt="Somadhan Technologies"
              width={535}
              height={466}
              className="mx-auto h-36 w-auto sm:h-48"
              priority
            />
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-8 max-w-3xl font-display text-4xl font-medium leading-[1.12] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Reaching the{" "}
              <em className="text-gradient animate-shimmer">Summit</em> of
              Inclusive AI
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Building intelligent, multilingual and accessible technology
              solutions for people, agriculture, government and institutions.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/solutions"
                className="rounded-full bg-linear-to-r from-accent to-moss px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/35 hover:from-accent-deep hover:to-accent"
              >
                Explore Solutions
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-line bg-white/60 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Partner With Us
              </Link>
            </div>
          </Reveal>
          </div>
      </section>

      <Marquee />

      <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="About Us"
            title={
              <>
                Intelligent technology for{" "}
                <em className="text-gradient">real-world impact.</em>
              </>
            }
            description="Somadhan Technologies is an AI technology and innovation organization focused on building intelligent, accessible and practical solutions for real-world challenges — bringing together AI, data, agriculture, language technologies and digital systems."
          />
          <div className="space-y-6">
            {aboutPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="group flex gap-5 rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-ink/5 sm:p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-accent to-moss font-display text-sm font-medium text-white shadow-md shadow-accent/25 transition-transform duration-300 group-hover:scale-105">
                    {point.index}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                      {point.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <ArrowLink href="/about">More about us</ArrowLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="focus" className="border-y border-line bg-cream/60">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="What We Do"
              title="Intelligent Solutions. Real Impact."
              description="AI, language, agriculture, government and training — intelligent technology designed for real-world problems."
            />
            <Reveal delay={0.15}>
              <ArrowLink href="/solutions" className="shrink-0">
                Explore Solutions
              </ArrowLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => {
              const tone = tones[service.tone];
              const Icon = service.Icon;
              return (
                <Reveal key={service.title} delay={i * 0.06} className="h-full">
                  <Link
                    href={service.href}
                    className="group relative flex h-full flex-col rounded-2xl border border-line bg-paper p-8 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-ink/10 sm:p-10"
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${tone.topBar} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${tone.tile} shadow-md transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-display text-sm italic text-ink-soft/60">
                        {service.index}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {service.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-wider ${tone.chip}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                      Read More
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="agri-focus" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Our Current Focus"
                title={
                  <>
                    AI-Powered{" "}
                    <span className="text-accent">Agri-Informatics.</span>
                  </>
                }
                description="Transforming agricultural data and intelligence into actionable insights for a sustainable and productive future."
              />
              <Reveal delay={0.1}>
                <p className="mt-8 font-display text-lg italic text-accent">
                  Sense. Understand. Predict. Advise.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <ArrowLink
                  href="/agri-informatics"
                  className="mt-8 inline-block"
                >
                  Explore Agri-Informatics
                </ArrowLink>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="h-full">
              <div className="relative h-full overflow-hidden rounded-3xl bg-forest p-8 sm:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40 [mask-image:radial-gradient(80%_80%_at_50%_30%,black,transparent)]"
                />
                <div
                  aria-hidden="true"
                  className="animate-drift-a pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(74,157,106,0.4),transparent_70%)]"
                />
                <div
                  aria-hidden="true"
                  className="animate-drift-b pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,120,31,0.3),transparent_70%)]"
                />
                <div
                  aria-hidden="true"
                  className="animate-float pointer-events-none absolute right-8 top-8 text-moss/50"
                  style={{ animationDelay: "0.6s", animationDuration: "7s" }}
                >
                  <LeafMark className="h-16 w-16 rotate-12" />
                </div>
                <div
                  aria-hidden="true"
                  className="animate-float pointer-events-none absolute bottom-10 left-6 text-gold/40"
                  style={{ animationDelay: "2s", animationDuration: "8.5s" }}
                >
                  <LeafMark className="h-12 w-12 -rotate-45" />
                </div>
                <div
                  aria-hidden="true"
                  className="animate-float pointer-events-none absolute right-4 bottom-24 text-sky/40"
                  style={{ animationDelay: "3.2s", animationDuration: "9s" }}
                >
                  <LeafMark className="h-9 w-9 rotate-90" />
                </div>
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-accent to-moss text-white shadow-lg shadow-accent/30">
                    <LeafGlyph className="h-8 w-8" />
                  </div>
                  <p className="mt-6 font-display text-2xl font-medium text-paper">
                    Data to field. Field to decision.
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/70">
                    From individual fields to entire value chains — our
                    solutions connect agricultural data to real decisions.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {agriTiles.map(({ label, Icon }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 rounded-xl border border-paper/15 bg-paper/10 p-3.5"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-moss" />
                        <span className="text-xs font-medium leading-snug text-paper">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Research & Innovation"
            title="Driving Innovation. Delivering Impact."
            description="Research that powers our solutions — from applied AI research to publications and field-validated innovations."
          />
          <Reveal delay={0.15}>
            <ArrowLink href="/research" className="shrink-0">
              Explore Research
            </ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-line rounded-2xl border border-line bg-white shadow-sm shadow-ink/5">
          {publications.slice(0, 3).map((pub, i) => {
            const tone = tones[statusTones[pub.status] ?? "green"];
            return (
              <Reveal key={pub.title} delay={i * 0.05}>
                <Link
                  href="/research"
                  className="group grid gap-4 px-8 py-7 transition-colors hover:bg-cream/50 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
                >
                  <div>
                    <h3 className="font-display text-lg font-medium leading-snug transition-colors group-hover:text-accent sm:text-xl">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft">
                      {pub.venue} &middot; {pub.year}
                    </p>
                  </div>
                  <span
                    className={`h-fit w-fit rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] ${tone.chip}`}
                  >
                    {pub.status}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="insights" className="border-t border-line bg-cream/60">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="News & Updates"
              title="Notes from the research bench."
              description="Essays and field notes on the ideas behind our work — and the realities that shape them."
            />
            <Reveal delay={0.15}>
              <ArrowLink href="/blog" className="shrink-0">
                All articles
              </ArrowLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.map((post, i) => {
              const tone = tones[tagTones[post.tag] ?? "green"];
              return (
                <Reveal key={post.slug} delay={i * 0.06} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group relative flex h-full flex-col rounded-2xl border border-line bg-paper p-8 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-ink/10"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${tone.chip}`}
                      >
                        {post.tag}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-medium leading-snug transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-xs uppercase tracking-[0.14em] text-ink-soft">
                      <span>{post.readTime}</span>
                      <span className="font-semibold text-accent">
                        Read <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-forest px-8 py-16 text-center sm:px-16 sm:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40 [mask-image:radial-gradient(70%_80%_at_50%_0%,black,transparent)]"
            />
            <div
              aria-hidden="true"
              className="animate-drift-a pointer-events-none absolute -top-28 left-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,122,79,0.45),transparent_70%)] "
            />
            <div
              aria-hidden="true"
              className="animate-drift-b pointer-events-none absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,120,31,0.28),transparent_70%)] "
            />
            <div
              aria-hidden="true"
              className="animate-spin-slow pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(74,157,106,0.5) 70deg, transparent 140deg, transparent 220deg, rgba(168,120,31,0.45) 290deg, transparent 360deg)",
              }}
            />
            <div
              aria-hidden="true"
              className="animate-float pointer-events-none absolute left-10 top-10 hidden text-moss/40 md:block"
              style={{ animationDelay: "0.8s", animationDuration: "7.5s" }}
            >
              <LeafMark className="h-14 w-14 -rotate-12" />
            </div>
            <div
              aria-hidden="true"
              className="animate-float pointer-events-none absolute bottom-10 right-10 hidden text-gold/35 md:block"
              style={{ animationDelay: "2.2s", animationDuration: "8.5s" }}
            >
              <LeafMark className="h-11 w-11 rotate-45" />
            </div>
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Partner with us
              </p>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-paper text-balance sm:text-5xl">
                Let&apos;s Build Inclusive AI Together
              </h2>
              <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-paper/70 sm:text-base">
                Join us in creating intelligent solutions that empower people,
                strengthen institutions and transform communities.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-linear-to-r from-accent to-moss px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-all hover:shadow-xl hover:from-accent-deep hover:to-accent"
                >
                  Partner With Us
                </Link>
                <a
                  href="mailto:director@somadhantechnologies.in"
                  className="rounded-full border border-paper/25 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper/60 hover:bg-paper/5"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </ViewTransition>
  );
}