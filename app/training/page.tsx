import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ArrowLink from "@/components/ArrowLink";
import { ViewTransition } from "react";
import Link from "next/link";
import {
  SatelliteGlyph,
  LeafGlyph,
  DropGlyph,
  ChainGlyph,
} from "@/components/glyphs";

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

      {/* Featured Program — Image 1 theme */}
      <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <div className="flex items-center justify-between gap-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span
                aria-hidden="true"
                className="h-px w-6 bg-linear-to-r from-accent to-moss"
              />
              Featured Program
            </p>
            <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              New
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Link
            href="/training/agentic-ai-bootcamp"
            className="group relative mt-6 flex flex-col overflow-hidden rounded-[1.25rem] border border-[#2a1a5a] bg-[#150a33] shadow-xl shadow-[#150a33]/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#150a33]/40 lg:flex-row"
          >
            {/* Image 1 theme — grid + gradients */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 80% at 75% 20%, rgba(124, 58, 237, 0.32), transparent 60%), radial-gradient(45% 60% at 20% 85%, rgba(14, 165, 233, 0.12), transparent 60%)",
              }}
            />

            {/* left: content — kept exactly as earlier, only theme changed */}
            <div className="relative flex flex-1 flex-col p-7 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff556e]" />
                  7-Day Bootcamp
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#1a1033]">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0aa06a] text-white">
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M2.5 6.5l2 2 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Beginner
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                  Certificate Included
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                7-Days Agentic AI Bootcamp
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Your first step into Generative &amp; Agentic AI — foundations, prompting, tools &amp; a real team prototype
                in 7 days.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  Beginner-Friendly
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  Hands-on
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  Build an Agent
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#ff556e] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition group-hover:bg-[#ff425d] group-hover:shadow-xl">
                  View Program
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
                <span className="text-xs text-white/55">
                  Next cohort: <span className="font-semibold text-white">Coming soon</span> · Limited seats
                </span>
              </div>
            </div>

            {/* right: stats — kept exactly as earlier, only theme changed */}
            <div className="relative flex w-full flex-col justify-between border-t border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-8 lg:w-[340px] lg:shrink-0 lg:border-l lg:border-t-0">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_70%)]"
              />

              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">
                  What you&apos;ll do
                </p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-white/85">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff556e]" />
                    Learn AI → LLMs → Agents
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff556e]" />
                    Hands-on with prompting &amp; tools
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff556e]" />
                    Build a real prototype
                  </li>
                </ul>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                  <div className="flex flex-col items-center">
                    <p className="flex h-7 items-end font-display text-xl font-semibold leading-none text-white">7</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/50">Days</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="flex h-7 items-end font-display text-[13px] font-semibold leading-none text-white">Beginner</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-white/50">Level</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="flex h-7 items-end font-display text-xl font-semibold leading-none text-white">1</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/50">Project</p>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex -space-x-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#150a33] bg-white text-[10px] font-bold text-[#150a33]">
                    ST
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#150a33] bg-[#ff556e] text-[10px] font-bold text-white">
                    AI
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#150a33] bg-white/90 text-[10px] font-bold text-[#150a33]">
                    AG
                  </span>
                </div>
                <p className="text-xs leading-snug text-white/60">
                  Mentors from <span className="font-medium text-white">Somadhan</span> &amp; industry
                </p>
              </div>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.14}>
          <Link
            href="/training/ai-tools-bootcamp"
            className="group relative mt-6 flex flex-col overflow-hidden rounded-[1.25rem] border border-[#2a1a5a] bg-[#150a33] shadow-xl shadow-[#150a33]/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#150a33]/40 lg:flex-row"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 80% at 75% 20%, rgba(14, 165, 233, 0.28), transparent 60%), radial-gradient(45% 60% at 20% 85%, rgba(124, 58, 237, 0.18), transparent 60%)",
              }}
            />

            <div className="relative flex flex-1 flex-col p-7 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#06b6d4]" />
                  7-Day Bootcamp
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#1a1033]">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0aa06a] text-white">
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M2.5 6.5l2 2 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Beginner
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                  Certificate Included
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                7-Day AI Tools Bootcamp
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Build your personal AI toolkit — prompting, research, writing, design, coding, data &amp; automation in 7 hands-on days.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  Multiple Tools
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  Productivity
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  Workflows
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#06b6d4] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition group-hover:bg-[#0891b2] group-hover:shadow-xl">
                  View Program
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
                <span className="text-xs text-white/55">
                  Next cohort: <span className="font-semibold text-white">Coming soon</span> · Limited seats
                </span>
              </div>
            </div>

            <div className="relative flex w-full flex-col justify-between border-t border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-8 lg:w-[340px] lg:shrink-0 lg:border-l lg:border-t-0">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.22),transparent_70%)]"
              />

              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">What you&apos;ll do</p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-white/85">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#06b6d4]" />
                    Explore 12+ AI tool categories
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#06b6d4]" />
                    Chain tools into workflows
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#06b6d4]" />
                    Build a showcase project
                  </li>
                </ul>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                  <div className="flex flex-col items-center">
                    <p className="flex h-7 items-end font-display text-xl font-semibold leading-none text-white">7</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/50">Days</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="flex h-7 items-end font-display text-[13px] font-semibold leading-none text-white">Beginner</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-white/50">Level</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="flex h-7 items-end font-display text-xl font-semibold leading-none text-white">1</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/50">Project</p>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex -space-x-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#150a33] bg-white text-[10px] font-bold text-[#150a33]">ST</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#150a33] bg-[#06b6d4] text-[10px] font-bold text-white">AT</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#150a33] bg-white/90 text-[10px] font-bold text-[#150a33]">AI</span>
                </div>
                <p className="text-xs leading-snug text-white/60">
                  Mentors from <span className="font-medium text-white">Somadhan</span> &amp; industry
                </p>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

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
        <Reveal delay={0.2} className="mt-6 flex flex-wrap items-center justify-center gap-4 text-center">
          <Link
            href="/training/agentic-ai-bootcamp"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-deep"
          >
            Explore Agentic AI Bootcamp <span aria-hidden="true">&rarr;</span>
          </Link>
          <span className="text-ink-soft/30">·</span>
          <Link
            href="/training/ai-tools-bootcamp"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-deep"
          >
            Explore AI Tools Bootcamp <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>
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
