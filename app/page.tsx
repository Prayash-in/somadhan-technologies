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
  ChainGlyph,
  LanguageGlyph,
  VoiceGlyph,
  TranslateGlyph,
  NetworkGlyph,
  UniversityGlyph,
  ResearchGlyph,
  IndustryGlyph,
  CommunityGlyph,
} from "@/components/glyphs";
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

const inclusiveAIFeatures = [
  { label: "Multilingual Chatbots", Icon: LanguageGlyph },
  { label: "Voice AI & Assistants", Icon: VoiceGlyph },
  { label: "Translation & Language AI", Icon: TranslateGlyph },
  { label: "Regional Language Applications", Icon: NetworkGlyph },
];

const partnerCategories = [
  { title: "Universities & Institutions", Icon: UniversityGlyph, tone: "gold" as const },
  { title: "Research Organisations", Icon: ResearchGlyph, tone: "terra" as const },
  { title: "Industry Partners", Icon: IndustryGlyph, tone: "green" as const },
  { title: "Agri & FPO Networks", Icon: LeafGlyph, tone: "gold" as const },
  { title: "NGOs & Communities", Icon: CommunityGlyph, tone: "sky" as const },
];

const services = [
  {
    index: "01",
    title: "AI Solutions",
    href: "/multilingual-ai",
    description:
      "AI application development, intelligent automation, generative AI, chatbots, analytics and custom AI systems.",
    tags: ["Generative AI", "Automation", "Analytics"],
    tone: "green" as const,
    Icon: SatelliteGlyph,
  },
  {
    index: "02",
    title: "Multilingual AI",
    href: "/multilingual-ai",
    description:
      "Voice, translation and language AI that removes barriers — technology that works in the language of every user.",
    tags: ["Voice AI", "Translation", "Accessibility"],
    tone: "sky" as const,
    Icon: LanguageGlyph,
  },
  {
    index: "03",
    title: "Agri Informatics",
    href: "/agri-informatics",
    description:
      "AI-powered informatics for agriculture — remote sensing, crop intelligence, climate advisory and value-chain analytics.",
    tags: ["Remote Sensing", "Climate Advisory", "Crop Intelligence"],
    tone: "gold" as const,
    Icon: LeafGlyph,
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

const tagTones: Record<string, keyof typeof tones> = {
  Approach: "green",
  Research: "sky",
  "Field Notes": "gold",
  Perspectives: "terra",
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
          <Reveal delay={0.12}>
            <h1 className="mt-8 max-w-3xl font-display text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Somadhan Technologies
            </h1>
            <p className="mx-auto mt-5 max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight text-balance text-ink sm:text-3xl lg:text-4xl">
              Reaching the Summit of{" "}
              <em className="text-gradient animate-shimmer">Inclusive AI</em>
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Building intelligent, multilingual and accessible technology
              solutions for people, agriculture and institutions.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/multilingual-ai"
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
                <em className="text-gradient animate-shimmer">
                  real-world impact.
                </em>
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
              title={
                <>
                  Intelligent Solutions.{" "}
                  <em className="text-gradient animate-shimmer">
                    Real Impact.
                  </em>
                </>
              }
              description="AI, language, agriculture and training — intelligent technology designed for real-world problems."
            />
            <Reveal delay={0.15}>
              <ArrowLink href="/multilingual-ai" className="shrink-0">
                Explore Solutions
              </ArrowLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section
        id="agri-focus"
        className="relative overflow-hidden border-b border-line"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: "url(/agri_info.png)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-r from-forest/80 via-forest/35 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-forest/55 via-transparent to-forest/30"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                <span
                  aria-hidden="true"
                  className="h-px w-6 bg-linear-to-r from-moss to-gold"
                />
                Our Special Focus
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-paper sm:text-5xl lg:text-[3.4rem]">
                AI-Powered{" "}
                <em className="text-gradient animate-shimmer">
                  Agri-Informatics
                </em>
              </h2>
              <p className="mt-4 font-display text-lg italic text-moss sm:text-xl">
                Sense. Understand. Predict. Advise.
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-paper/85 sm:text-lg">
                Transforming agricultural data and intelligence into actionable
                insights for a more sustainable and productive future.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                href="/agri-informatics"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-moss px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/45"
              >
                Explore Agri-Informatics
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="solutions" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="What We Build"
              align="center"
              title={
                <>
                  Intelligence that works for{" "}
                  <em className="text-gradient animate-shimmer">everyone.</em>
                </>
              }
              description="Inclusive AI in every language. Technology that people actually use."
            />
          </div>

          <div className="mt-14 flex justify-center">
            <Reveal className="w-full max-w-2xl">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.125rem] border border-line bg-[linear-gradient(160deg,#f7f3fd_0%,#efe8fb_100%)] p-8 shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6b5bd0]/10 sm:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[#e3d9fa]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 rotate-6 text-[#6b5bd0] opacity-[0.07]"
                >
                  <LanguageGlyph className="h-64 w-64" />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 top-24 -rotate-12 text-[#6b5bd0] opacity-[0.05]"
                >
                  <TranslateGlyph className="h-24 w-24" />
                </div>

                <div className="relative flex flex-1 flex-col">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6b5bd0]">
                    AI That Speaks Your Language
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-[1.2] tracking-tight text-ink sm:text-[1.75rem]">
                    Inclusive. Multilingual. Accessible.
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                    We build AI applications that break language barriers and
                    bring technology closer to every user.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5">
                    {inclusiveAIFeatures.map(({ label, Icon }) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/70 text-[#6b5bd0] shadow-sm shadow-ink/5 ring-1 ring-line/70 transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-medium leading-snug text-ink">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/multilingual-ai"
                    className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-[#6b5bd0] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#6b5bd0]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5b4cc0] hover:shadow-md hover:shadow-[#6b5bd0]/30"
                  >
                    Learn More
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="partners" className="overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Our Partners"
              align="center"
              title={
                <>
                  Trusted by{" "}
                  <em className="text-gradient animate-shimmer">
                    partners who matter.
                  </em>
                </>
              }
              description="From universities to grassroots communities — inclusive technology is built together, with everyone."
            />
          </div>
        </div>

        <div className="relative mt-14 pb-24 sm:pb-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-32"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-32"
          />
          <div className="flex w-max animate-marquee [animation-direction:reverse]">
            {[false, true].map((hidden, h) => (
              <ul
                key={h}
                aria-hidden={hidden || undefined}
                className="flex shrink-0 items-center gap-4 pr-4"
              >
                {partnerCategories.map(({ title, Icon, tone }) => (
                  <li
                    key={title}
                    className="flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-paper px-7 py-4 shadow-sm shadow-ink/5"
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tones[tone].tile} shadow-md shadow-accent/25`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="whitespace-nowrap font-display text-base font-medium">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="border-t border-line bg-cream/60">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title={
                <>
                  Ideas, notes &amp;{" "}
                  <em className="text-gradient animate-shimmer">
                    field insights.
                  </em>
                </>
              }
              description="Essays, field notes and fresh perspectives on the ideas behind our work — and the realities that shape them."
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
                Let&apos;s Build{" "}
                <em className="text-gradient animate-shimmer">Inclusive AI</em>{" "}
                Together
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