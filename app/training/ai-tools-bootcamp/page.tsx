import Link from "next/link";
import EnrollmentForm from "@/components/EnrollmentForm";
import EnrollButton from "@/components/EnrollButton";
import { getCourseById } from "@/lib/courses";

export const metadata = {
  title: "7-Day AI Tools Bootcamp",
  description:
    "Build your personal AI toolkit — AI assistants, prompting, research, writing, design, coding, data & automation in 7 hands-on days.",
};

// Data
const whatYouLearn = [
  "AI assistants and conversational AI",
  "Prompt engineering",
  "AI-powered research and study tools",
  "Document and PDF analysis",
  "AI writing and presentation tools",
  "AI image, video, voice and audio tools",
  "AI coding assistants",
  "AI data analysis tools",
  "Productivity and automation tools",
  "AI workflows and tool chaining",
  "Tool selection and evaluation",
  "Responsible and privacy-aware AI usage",
];

const whyEnrollPoints = [
  {
    label: "Discover",
    body: "Understand what different categories of AI tools can do.",
  },
  {
    label: "Choose",
    body: "Select the right tool for the right task.",
  },
  {
    label: "Prompt",
    body: "Give AI better instructions, context and constraints.",
  },
  {
    label: "Create",
    body: "Generate content, visuals, presentations, code and more.",
  },
  {
    label: "Analyze",
    body: "Use AI to understand documents, data and information.",
  },
  {
    label: "Combine",
    body: "Connect multiple AI tools into practical workflows.",
  },
  {
    label: "Apply",
    body: "Use AI to solve real-world problems.",
  },
];

const whoIsFor = [
  "Students beginning their journey with Artificial Intelligence.",
  "Learners who want to use AI beyond basic chatbots.",
  "Students who want to improve productivity using modern AI tools.",
  "Aspiring developers, designers, creators and entrepreneurs.",
  "Students interested in AI for academics, projects and careers.",
  "Anyone curious about how AI is changing the way people work and create.",
];

const courseOutline = [
  {
    title: "DAY 1 — THE AI TOOL ECOSYSTEM",
    subtitle: "Understand the landscape and build your personal AI toolkit",
    explore: [
      "What is an AI tool?",
      "Categories of AI tools",
      "Conversational AI",
      "Choosing the right tool",
      "Building a toolkit",
      "Privacy & responsible use",
    ],
  },
  {
    title: "DAY 2 — AI FOR STUDY & RESEARCH",
    subtitle: "Turn AI into a learning and research assistant",
    explore: [
      "AI for study",
      "Research assistants",
      "Summarization",
      "PDF & document analysis",
      "Citations & notes",
      "Study workflows",
    ],
  },
  {
    title: "DAY 3 — AI FOR WRITING, DESIGN & CREATIVITY",
    subtitle: "Turn ideas into content and creative assets",
    explore: [
      "AI writing tools",
      "Presentations",
      "Image generation",
      "Video & voice tools",
      "Audio & avatars",
      "Creative workflows",
    ],
  },
  {
    title: "DAY 4 — AI FOR CODING & TECHNICAL WORK",
    subtitle: "Build and debug faster with AI assistance",
    explore: [
      "Coding assistants",
      "Code generation",
      "Debugging with AI",
      "Documentation",
      "Technical writing",
      "Developer workflows",
    ],
  },
  {
    title: "DAY 5 — AI FOR DATA, PRODUCTIVITY & AUTOMATION",
    subtitle: "Use AI to analyse information and automate repetitive work",
    explore: [
      "Data analysis tools",
      "Spreadsheets & insights",
      "Productivity suites",
      "Automation",
      "Tool chaining",
      "Evaluation criteria",
    ],
  },
  {
    title: "DAY 6 — BUILD YOUR AI WORKFLOW",
    subtitle: "Combine tools to solve a genuine problem",
    explore: [
      "Identify a problem",
      "Select tools",
      "Chain tools",
      "Build workflow",
      "Test & iterate",
      "Team collaboration",
    ],
  },
  {
    title: "DAY 7 — AI CHALLENGE & SHOWCASE",
    subtitle: "Build, solve and present a practical AI-powered solution",
    explore: ["Problem", "Toolkit", "Workflow", "Demo", "Impact", "Portfolio", "Next steps"],
  },
];

const faqs = [
  {
    q: "Who is this bootcamp for?",
    a: "Anyone beginning their AI journey who wants practical exposure to modern AI tools for learning, creativity, coding, productivity and real-world problem solving.",
  },
  {
    q: "Do I need prior AI knowledge?",
    a: "No. The course starts from the basics and gradually introduces more advanced workflows.",
  },
  {
    q: "Do I need programming knowledge?",
    a: "No. Programming is useful for some activities, but several modules are accessible without programming.",
  },
  {
    q: "Will we learn only one AI tool?",
    a: "No. The bootcamp explores multiple categories of AI tools and focuses on how to choose and combine them.",
  },
  {
    q: "Will I get to use the tools myself?",
    a: "Yes. The course is designed around hands-on exploration rather than demonstrations alone.",
  },
  {
    q: "Are there assignments?",
    a: "Yes. Each day includes a practical assignment or challenge designed around a useful task or real-world situation.",
  },
  {
    q: "Will I build a project?",
    a: "Yes. The final part involves building an AI-powered solution to a genuine problem.",
  },
  {
    q: "Will the exact tools taught change over time?",
    a: "AI tools evolve rapidly. The bootcamp focuses on transferable skills: discovering, evaluating, choosing and combining tools.",
  },
  {
    q: "Is this an AI/ML programming course?",
    a: "Not primarily. It is an AI tools and practical application bootcamp, with technical exposure where it adds value.",
  },
  {
    q: "What will I have after seven days?",
    a: "You'll have practical experience across multiple AI tool categories, completed assignments, portfolio-ready outputs and a major project.",
  },
];

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8.5" className="fill-accent" />
      <path d="M6.5 10.2l2.4 2.4 4.6-5.1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlueDot() {
  return <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky" aria-hidden="true" />;
}

export default function AIToolsBootcampPage() {
  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#150a33]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 75% 20%, rgba(14, 165, 233, 0.28), transparent 60%), radial-gradient(45% 60% at 20% 85%, rgba(124, 58, 237, 0.18), transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-10">
          <div className="min-w-0">
            <nav aria-label="Breadcrumb" className="text-xs text-white/60">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/training" className="hover:text-white">
                    All Courses
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">
                  /
                </li>
                <li>
                  <Link href="/training" className="hover:text-white">
                    Course
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">
                  /
                </li>
                <li className="text-white/90">AI Tools</li>
              </ol>
            </nav>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#06b6d4]" />
                7-DAY BOOTCAMP
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

            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
              7-Day AI Tools
              <span className="block font-display text-4xl font-light italic text-white/85 sm:text-5xl">
                Bootcamp
              </span>
            </h1>

            <div className="mt-4 space-y-1 text-sm text-white/80">
              <p>
                Instructor: <span className="font-medium text-white">Somadhan AI Team</span>
              </p>
              <p className="font-display text-lg font-medium italic text-white">Somadhan Technologies</p>
              <p className="inline-flex items-center gap-1.5 text-xs text-white/70">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/15">
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 8l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Earn a certificate with completion
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-white/60 line-through decoration-white/40">₹599</span>
              <span className="font-display text-xl font-semibold text-white">₹299</span>
              <span className="rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-semibold tracking-wider text-white">50% OFF</span>
              <span className="text-xs text-white/60">Inclusive</span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <EnrollButton
                variant="hero"
                label="Enroll Now — ₹299"
                className="inline-flex items-center justify-center rounded-full bg-[#06b6d4] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#0891b2]"
              />
              <a
                href="#course-outline"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                View Details
              </a>
            </div>

            <p className="mt-3 text-xs text-white/50">
              Next cohort: Coming soon · Limited seats · Live + recorded
            </p>
          </div>

          {/* right: video — restored with Image 1 theme */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0820] shadow-2xl shadow-black/40">
              <div
                className="relative aspect-[16/10] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "radial-gradient(60% 80% at 50% 50%, rgba(14,165,233,0.45), transparent 70%), linear-gradient(180deg, #1e0f4a 0%, #0c0820 100%)",
                }}
              >
                <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-48 w-64">
                    <svg viewBox="0 0 200 140" className="h-full w-full" fill="none">
                      <rect x="62" y="30" width="76" height="56" rx="10" fill="white" fillOpacity="0.95" />
                      <rect x="76" y="42" width="48" height="6" rx="3" fill="#7c3aed" fillOpacity="0.2" />
                      <rect x="76" y="52" width="36" height="4" rx="2" fill="#06b6d4" fillOpacity="0.25" />
                      <rect x="76" y="60" width="28" height="4" rx="2" fill="#f59e0b" fillOpacity="0.25" />
                      <circle cx="36" cy="54" r="18" fill="white" fillOpacity="0.92" />
                      <path d="M30 54l4 4 8-8" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="164" cy="54" r="18" fill="white" fillOpacity="0.92" />
                      <text x="164" y="59" textAnchor="middle" fontSize="11" fill="#22c55e" fontWeight="700">
                        ✦
                      </text>
                      <rect x="48" y="98" width="104" height="14" rx="7" fill="white" fillOpacity="0.9" />
                      <circle cx="60" cy="105" r="3" fill="#06b6d4" />
                      <circle cx="68" cy="105" r="3" fill="#22c55e" />
                      <circle cx="76" cy="105" r="3" fill="#7c3aed" />
                      <path d="M92 101h32M92 109h24" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
                    </svg>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Play preview"
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#06b6d4] text-white shadow-lg shadow-black/30 transition hover:scale-105 hover:bg-[#0891b2]"
                >
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor">
                    <path d="M8 5.2l10 6.3-10 6.3z" />
                  </svg>
                </button>
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-ink backdrop-blur">
                  Preview · 2:14
                </div>
              </div>

              <div className="border-t border-white/10 bg-[#150a33] px-5 py-4">
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight text-white">AI Tools</p>
                  <p className="text-xs text-white/60">With Somadhan AI Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:grid lg:grid-cols-[1.65fr_0.9fr] lg:gap-10 lg:py-12">
        <div className="min-w-0 space-y-10">
          {/* What you'll learn */}
          <section className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold tracking-tight">WHAT YOU&apos;LL LEARN</h2>
            <p className="mt-1.5 font-display text-base font-medium italic text-accent">Build your personal AI toolkit — explore, choose, create and combine.</p>
            <ul className="mt-5 space-y-3.5">
              {whatYouLearn.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why Enroll */}
          <section className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold tracking-tight">WHY ENROLL?</h2>
            <p className="mt-1.5 font-display text-base font-medium italic text-accent">Don&apos;t Just Use AI. Learn to Work With AI.</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              AI tools are rapidly becoming part of everyday academic and professional workflows. This bootcamp helps learners build a personal AI toolkit and use it intelligently.
            </p>
            <ul className="mt-6 space-y-3">
              {whyEnrollPoints.map((p) => (
                <li key={p.label} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-ink">{p.label}:</span> <span className="text-ink-soft">{p.body}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-accent/15 bg-accent-soft/40 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-deep">THE OBJECTIVE</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink">
                By the end of seven days you&apos;ll know how to discover, evaluate, prompt and chain AI tools — and ship a working workflow you can showcase.
              </p>
            </div>
          </section>

          {/* Instructor */}
          <section className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold tracking-tight">Instructor</h2>
            <div className="mt-5 flex gap-4">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-cream ring-1 ring-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.pravatar.cc/150?img=16" alt="Instructor" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-base font-semibold">Somadhan AI Team</h3>
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent-deep">Lead Mentors</span>
                </div>
                <p className="text-xs text-ink-soft">Somadhan Technologies · AI Tools & Productivity</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Mentors from Somadhan&apos;s Applied AI and Training teams — helping students and teams turn AI tools into everyday workflows.
                </p>
                <div className="mt-3 flex gap-2">
                  <a href="#" aria-label="LinkedIn" className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-ink-soft hover:text-accent">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" aria-label="X" className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-ink-soft hover:text-accent">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Link" className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-ink-soft hover:text-accent">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Who this course is for */}
          <section className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold tracking-tight">WHO THIS COURSE IS FOR</h2>
            <p className="mt-1.5 font-display text-base font-medium italic text-accent">Curiosity + a laptop + willingness to experiment are enough.</p>
            <ul className="mt-5 space-y-3.5">
              {whoIsFor.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <BlueDot />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-accent/15 bg-accent-soft/40 px-4 py-3.5">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-deep">NO ADVANCED BACKGROUND REQUIRED</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">Curiosity + a laptop + willingness to experiment are enough to get started.</p>
            </div>
          </section>

          {/* Course Outline */}
          <section id="course-outline" className="rounded-2xl border border-line bg-white p-6 sm:p-8 scroll-mt-28">
            <h2 className="font-display text-lg font-semibold tracking-tight">Course Outline</h2>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">AI TOOLS • 7 DAYS • HANDS-ON LEARNING</p>
            <div className="mt-6 divide-y divide-line overflow-hidden rounded-xl border border-line">
              {courseOutline.map((mod) => (
                <details key={mod.title} className="group bg-white open:bg-cream/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-cream/60 [&::-webkit-details-marker]:hidden">
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-ink group-open:text-accent">{mod.title}</h3>
                      <p className="mt-0.5 text-xs font-medium text-ink-soft">{mod.subtitle}</p>
                    </div>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink-soft transition group-open:rotate-180 group-open:border-accent group-open:text-accent">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="border-t border-line bg-cream/30 px-5 pb-6 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Explore</p>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {mod.explore.map((item) => (
                        <span key={item} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-xs leading-relaxed text-ink-soft shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Enrollment — hidden until Enroll Now is clicked */}
          <section id="enroll-form-section" className="hidden scroll-mt-28">
            <EnrollmentForm course={getCourseById("ai-tools-bootcamp")!} />
          </section>

          {/* FAQ */}
          <section className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6 divide-y divide-line overflow-hidden rounded-xl border border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-ink hover:bg-cream/40 [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-ink-soft transition group-open:rotate-180">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="border-t border-line px-5 py-4">
                    <p className="text-sm leading-relaxed text-ink-soft">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* right sidebar */}
        <div className="mt-10 lg:mt-0">
          <div className="sticky top-24 space-y-6">
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">7-DAY AI TOOLS BOOTCAMP</p>
                <h3 className="mt-1.5 font-display text-lg font-semibold leading-tight">Build Your Personal AI Toolkit</h3>

                <ul className="mt-4 space-y-2.5 text-sm">
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <path d="M12 3l1.6 3.4L17 8l-3.4 1.6L12 13l-1.6-3.4L7 8l3.4-1.6z" strokeLinejoin="round" />
                        <path d="M5 15l1 1.2L7.2 17l-1.2 1L5 19l-1-1-1.2-1L4 15.9z" />
                        <path d="M17 14l1 1 1.4.7L18 16.8 17 18l-1-1.2L14.6 16l1.4-.9z" />
                      </svg>
                    </span>
                    Beginner Friendly
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M8 2v4M16 2v4M3 10h18" />
                        <path d="M9 14l1.2 1.8L13 13" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    7 Days · Hands-on Learning
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sky">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M12 3l1 2 1 3 1 2H9l1-2 1-3z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    </span>
                    Multiple AI Tool Categories
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M9 5H7a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                        <path d="M9 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        <path d="M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Daily Practical Assignments
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 8v4l2.5 1.5" />
                      </svg>
                    </span>
                    Real-World AI Challenges
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="4" y="8" width="16" height="8" rx="2" />
                        <path d="M8 12h8M12 8v8" />
                      </svg>
                    </span>
                    AI Productivity & Automation
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sky">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M8 9h8M8 13h5M10 17h4" />
                        <rect x="4" y="6" width="16" height="12" rx="2" />
                      </svg>
                    </span>
                    AI-Assisted Coding
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ede8ff] text-[#7c3aed]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="9" cy="8" r="2.5" />
                        <path d="M4.5 18a4.5 4.5 0 019 0" />
                        <circle cx="16" cy="9" r="2" />
                        <path d="M15 18a3.5 3.5 0 017 0" />
                      </svg>
                    </span>
                    Major Team Project
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="8" r="5" />
                        <path d="M8.5 13l-1 6 4.5-2 4.5 2-1-6" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Certificate of Completion
                  </li>
                </ul>

                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="text-sm text-ink-soft line-through decoration-ink-soft/40">₹599</span>
                  <span className="font-display text-2xl font-semibold text-ink">₹299</span>
                  <span className="rounded-full bg-[#ff4d6a]/10 px-2 py-0.5 text-[11px] font-semibold text-[#ff4d6a]">50% OFF</span>
                </div>
                <p className="mt-1 text-center text-xs text-ink-soft">Inclusive · One-time · 50% off MRP ₹599</p>

                <EnrollButton
                  variant="sidebar"
                  label="Enroll Now — ₹299"
                  className="mt-6 flex w-full items-center justify-center rounded-full bg-[#06b6d4] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#0891b2]"
                />
                <p className="mt-3 text-center text-xs font-medium text-ink-soft">
                  Secure payment via Razorpay · <span className="line-through decoration-ink-soft/40">₹599</span> ₹299
                </p>
              </div>

              <div className="border-t border-line bg-cream/50 px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Need help?</p>
                <Link href="/contact" className="mt-1 inline-flex text-sm font-medium text-accent hover:text-accent-deep">
                  Contact us &rarr;
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Why Learn With Us?</p>
              <ul className="mt-3 space-y-2.5 text-xs leading-relaxed text-ink">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Learn by building, not just watching
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Beginner-first approach to modern AI
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Real-world problems and use cases
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Hands-on assignments throughout the journey
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Guided project development
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Focus on understanding rather than tool memorisation
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Build outputs you can showcase
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <Link href="/training" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-deep">
          <span aria-hidden="true">&larr;</span> Back to Training &amp; Internship
        </Link>
      </div>
    </div>
  );
}
