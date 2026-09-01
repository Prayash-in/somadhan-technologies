import Link from "next/link";
import EnrollmentForm from "@/components/EnrollmentForm";
import EnrollButton from "@/components/EnrollButton";
import { getCourseById } from "@/lib/courses";

export const metadata = {
  title: "7-Days Agentic AI Bootcamp",
  description:
    "Master agentic design patterns — reflection, tool use, planning & multi-agent workflows. Build autonomous AI agents that reason, act and collaborate in just 7 days.",
};

// Data
const whatYouLearn = [
  "Understand the evolution from AI → Generative AI → LLMs → AI Agents.",
  "Learn what makes a system agentic and how agents differ from conventional AI applications.",
  "Understand the basic Observe → Think → Plan → Act → Evaluate agent loop.",
  "Learn the fundamentals of prompting, context and structured AI outputs.",
  "Explore how AI connects with tools, APIs, data and external services.",
  "Get hands-on exposure to RAG, memory and agent workflows.",
  "Learn how to approach AI problems with an engineering mindset.",
  "Convert real-world problems into AI-powered solutions.",
  "Build and demonstrate a working Agentic AI project.",
];

const fourPatterns = [
  {
    title: "Reflection",
    body: "AI critiques its own work and iterates to improve quality — like code review, but automated.",
  },
  {
    title: "Tool Use",
    body: "Connect AI to databases, APIs, and external services so it can actually perform actions, not just generate text.",
  },
  {
    title: "Planning",
    body: "Break complex tasks into executable steps that AI can follow and adapt when things don't go as expected.",
  },
  {
    title: "Multi-Agent",
    body: "Coordinate multiple specialized AI systems to handle different parts of a complex workflow.",
  },
];

const whoIsFor = [
  "Students beginning their AI journey who want to understand what lies beyond traditional AI and chatbots.",
  "Curious learners and aspiring AI builders who want to explore how modern AI systems can reason, use tools and accomplish tasks.",
  "Beginner programmers looking to connect their programming knowledge with real-world AI applications.",
  "Students interested in building with AI rather than simply using AI tools.",
  "Future developers, innovators and entrepreneurs who want early exposure to the technologies shaping the next generation of software.",
];

const courseOutline = [
  {
    title: "DAY 1 — AI BEYOND CHATGPT",
    subtitle: "Understanding the AI landscape",
    explore: [
      "AI in everyday life",
      "Traditional AI vs Generative AI",
      "LLMs and AI assistants",
      "Chatbots vs Agents",
      "What makes AI agentic?",
      "Real-world applications",
    ],
    assignmentLabel: "Assignment",
    assignment: "AI Problem Hunter — Identify a meaningful problem around you and propose how an AI-powered system could help solve it.",
  },
  {
    title: "DAY 2 — INSIDE GENERATIVE AI",
    subtitle: "LLMs, Prompts & Context",
    explore: [
      "What is an LLM?",
      "Tokens and context",
      "Training vs inference",
      "How AI generates responses",
      "Prompt engineering",
      "Structured outputs",
      "Hallucinations and limitations",
    ],
    assignmentLabel: "Assignment",
    assignment:
      "Prompt Engineering Challenge — Design and test prompts for a useful AI assistant and compare different approaches.",
  },
  {
    title: "DAY 3 — THINKING IN AGENTS",
    subtitle: "From answering questions to accomplishing tasks",
    explore: [
      "Agent vs chatbot vs workflow",
      "Goals and task decomposition",
      "Planning and reasoning",
      "Tool use",
      "Memory",
      "Feedback and evaluation",
      "Human-in-the-loop",
    ],
    assignmentLabel: "Assignment",
    assignment:
      "Design an Agent — Define the agent's goal, steps, tools, inputs and outputs for a real-world problem.",
  },
  {
    title: "DAY 4 — BUILD YOUR FIRST AGENT",
    subtitle: "From concept to working system",
    explore: [
      "Basic agent architecture",
      "LLM + instructions + tools",
      "Tool calling",
      "APIs and functions",
      "External capabilities",
      "Basic Python integration",
      "Testing and debugging",
    ],
    assignmentLabel: "Assignment",
    assignment:
      "Build Your First Agent — Create a simple agent that completes a multi-step task using at least one external capability.",
  },
  {
    title: "DAY 5 — ENGINEERING AGENTIC SYSTEMS",
    subtitle: "Building systems, not just prompts",
    explore: [
      "Agent architecture",
      "Workflows",
      "Context management",
      "Memory",
      "RAG fundamentals",
      "Knowledge bases",
      "APIs and JSON",
      "Error handling",
      "Reliability",
      "Cost and latency",
      "Responsible AI",
    ],
    assignmentLabel: "Assignment",
    assignment:
      "Build a Knowledge-Aware Assistant — Create a small AI system that uses a knowledge source to answer questions more reliably.",
  },
  {
    title: "DAY 6 — BUILD DAY",
    subtitle: "From problem to prototype",
    explore: [
      "Identify a genuine problem",
      "Define users and outcomes",
      "Design the agent workflow",
      "Connect tools / knowledge",
      "Build and test",
      "Iterate using feedback",
    ],
    assignmentLabel: "Major Project",
    assignment: "Build an Agentic AI solution for a real-world problem in teams.",
  },
  {
    title: "DAY 7 — DEMO DAY",
    subtitle: "Build. Test. Present.",
    explore: ["Problem", "User", "Agent", "Architecture", "Demo", "Impact", "Future scope"],
    assignmentLabel: "Final Deliverable",
    assignment: "Present a working prototype and explain how it solves a meaningful problem.",
  },
];

const faqs = [
  {
    q: "Who is this bootcamp for?",
    a: "This bootcamp is designed for students and early-stage learners beginning their AI journey who want to understand and experiment with Generative AI and Agentic AI.",
  },
  {
    q: "Do I need prior AI/ML knowledge?",
    a: "No. The bootcamp begins with the fundamentals and gradually moves toward building a simple agentic system.",
  },
  {
    q: "Do I need programming experience?",
    a: "Basic programming knowledge can be helpful, but advanced programming or AI/ML expertise is not required.",
  },
  {
    q: "Is this just a prompting course?",
    a: "No. Prompting is only one component. You'll also explore agents, workflows, tools, APIs, knowledge, RAG and basic AI engineering.",
  },
  {
    q: "Will I actually build an AI agent?",
    a: "Yes. You'll progressively move from understanding the concept to designing and building a working agent.",
  },
  {
    q: "Are there assignments?",
    a: "Yes. Each learning day includes a practical assignment wherever it adds value. These activities progressively prepare you for the major project.",
  },
  {
    q: "What is the major project?",
    a: "Teams identify a real-world problem and develop a functional Agentic AI prototype addressing it. The emphasis is on usefulness, testing and clear engineering decisions.",
  },
  {
    q: "Will I learn LangChain, CrewAI or other frameworks?",
    a: "Frameworks may be introduced where useful, but the focus is on understanding how agentic systems work rather than simply learning a particular framework.",
  },
  {
    q: "What can I expect after seven days?",
    a: "You won't become an AI expert in seven days. You'll leave with a foundation, practical experience, a project and a clearer direction for what to learn next.",
  },
  {
    q: "What if I am completely new to AI?",
    a: "That's okay. You don't need to know everything before you start. You just need to be curious enough to explore and willing to build.",
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

export default function AgenticBootcampPage() {
  return (
    <div className="bg-paper">
      {/* ---------- Hero (DeepLearning.AI style, Somadhan branded) ---------- */}
      <section className="relative overflow-hidden bg-[#150a33]">
        {/* decorative gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 75% 20%, rgba(124, 58, 237, 0.35), transparent 60%), radial-gradient(45% 60% at 20% 80%, rgba(45, 122, 79, 0.22), transparent 60%)",
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
          {/* left */}
          <div className="min-w-0">
            {/* breadcrumb */}
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
                <li className="text-white/90">Agentic AI</li>
              </ol>
            </nav>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                Bootcamp
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-ink">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-white">
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2.5 6.5l2 2 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Beginner
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 8v4l2.5 1.5" />
                </svg>
                7 Days · 14+ Hours
              </span>
            </div>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
              7-Days Agentic AI
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
              <EnrollButton variant="hero" label="Enroll Now — ₹299" />
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

          {/* right: video / cover */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0820] shadow-2xl shadow-black/40">
              {/* placeholder cover with agentic network visual */}
              <div
                className="relative aspect-[16/10] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "radial-gradient(60% 80% at 50% 50%, rgba(124,58,237,0.55), transparent 70%), linear-gradient(180deg, #1e0f4a 0%, #0c0820 100%)",
                }}
              >
                {/* network dots */}
                <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-48 w-64">
                    <svg viewBox="0 0 200 140" className="h-full w-full" fill="none">
                      <circle cx="100" cy="70" r="28" fill="white" fillOpacity="0.95" />
                      <circle cx="100" cy="70" r="10" fill="#ff4d6a" />
                      <circle cx="28" cy="28" r="14" fill="white" fillOpacity="0.92" />
                      <circle cx="28" cy="28" r="5" fill="#7c3aed" />
                      <circle cx="172" cy="28" r="14" fill="white" fillOpacity="0.92" />
                      <circle cx="172" cy="28" r="5" fill="#06b6d4" />
                      <circle cx="28" cy="112" r="14" fill="white" fillOpacity="0.92" />
                      <circle cx="28" cy="112" r="5" fill="#f59e0b" />
                      <circle cx="172" cy="112" r="14" fill="white" fillOpacity="0.92" />
                      <circle cx="172" cy="112" r="5" fill="#22c55e" />
                      <path d="M40 36 L88 62 M112 62 L160 36 M40 104 L88 78 M112 78 L160 104" stroke="white" strokeOpacity="0.5" strokeWidth="1.4" strokeDasharray="4 4" />
                    </svg>
                  </div>
                </div>

                {/* play button */}
                <button
                  type="button"
                  aria-label="Play preview"
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff4d6a] text-white shadow-lg shadow-black/30 transition hover:scale-105 hover:bg-[#ff3d5a]"
                >
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor">
                    <path d="M8 5.2l10 6.3-10 6.3z" />
                  </svg>
                </button>

                {/* top inset label */}
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-ink backdrop-blur">
                  Preview · 2:14
                </div>
              </div>

              <div className="border-t border-white/10 bg-[#150a33] px-5 py-4">
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight text-white">Agentic AI</p>
                  <p className="text-xs text-white/60">With Somadhan AI Team</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ---------- Body ---------- */}
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:grid lg:grid-cols-[1.65fr_0.9fr] lg:gap-10 lg:py-12">
        {/* left column */}
        <div className="min-w-0 space-y-10">
          {/* What you'll learn */}
          <section className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold tracking-tight">WHAT YOU&apos;LL LEARN</h2>
            <p className="mt-1.5 font-display text-base font-medium italic text-accent">Build the foundation. Explore the technology. Start creating.</p>
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
            <p className="mt-1.5 font-display text-base font-medium italic text-accent">Don&apos;t Just Use AI. Learn How to Build With It.</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Generative AI has changed how we interact with software. The next step is building systems that can go beyond
              generating an answer — systems that can understand a goal, break it into steps, use tools and take action.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              This bootcamp gives you a structured starting point for understanding that shift. Instead of overwhelming you
              with advanced mathematics or complex frameworks, the focus is on understanding, experimenting and building.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-ink">AI Foundations:</span>{" "}
                  <span className="text-ink-soft">Build a clear mental model of modern AI instead of learning isolated tools.</span>
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-ink">Learn by Doing:</span>{" "}
                  <span className="text-ink-soft">Use guided activities and assignments to turn concepts into practical experience.</span>
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-ink">Think Like a Builder:</span>{" "}
                  <span className="text-ink-soft">Identify problems, design workflows and decide where AI actually makes sense.</span>
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-ink">Explore Modern AI:</span>{" "}
                  <span className="text-ink-soft">Get hands-on exposure to LLMs, tools, APIs, RAG and agentic workflows.</span>
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-ink">Real-World Problems:</span>{" "}
                  <span className="text-ink-soft">
                    Work with use cases inspired by education, campus life, agriculture, business, productivity and community
                    needs.
                  </span>
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-ink">Build Something Real:</span>{" "}
                  <span className="text-ink-soft">
                    Apply what you learn to a major team project and turn an idea into a working prototype.
                  </span>
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-accent/15 bg-accent-soft/40 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-deep">THE OBJECTIVE</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink">
                The goal isn&apos;t to make you an AI expert in seven days. It&apos;s to give you the foundation and confidence to
                begin.
              </p>
            </div>
          </section>

          {/* Instructor */}
          <section className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold tracking-tight">Instructor</h2>
            <div className="mt-5 flex gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-base font-semibold">Somadhan AI Team</h3>
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent-deep">
                    Lead Mentors
                  </span>
                </div>
                <p className="text-xs text-ink-soft">Somadhan Technologies · Applied AI &amp; Agentic Systems</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Mentors from Somadhan&apos;s Applied Machine Learning, Agri-Informatics and Multilingual AI teams — building
                  production agents for agriculture, government and citizen services at scale.
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
            <p className="mt-1.5 font-display text-base font-medium italic text-accent">Start your AI journey with the right foundation.</p>
            <ul className="mt-5 space-y-3.5">
              {whoIsFor.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <BlueDot />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-accent/15 bg-accent-soft/40 px-4 py-3.5">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-deep">
                NO ADVANCED AI/ML BACKGROUND REQUIRED
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink">Curiosity and willingness to build are enough to get started.</p>
            </div>
          </section>

          {/* Course Outline */}
          <section id="course-outline" className="rounded-2xl border border-line bg-white p-6 sm:p-8 scroll-mt-28">
            <h2 className="font-display text-lg font-semibold tracking-tight">Course Outline</h2>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
              AGENTIC AI • 7 DAYS • HANDS-ON LEARNING
            </p>

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
                        <span
                          key={item}
                          className="rounded-full border border-line bg-white px-3.5 py-1.5 text-xs leading-relaxed text-ink-soft shadow-sm"
                        >
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
            <EnrollmentForm course={getCourseById("agentic-ai-bootcamp")!} />
          </section>

          {/* Reviews */}
          {/* Learner reviews — hidden for now */}
          {false && (
            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold tracking-tight">Learner reviews from other Somadhan AI courses</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-cream/30 p-5">
                  <p className="text-sm font-semibold text-ink">Selami A.</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    &ldquo;What I loved about the course was the comprehensive coverage of essential AI topics, guided by the expertise of the mentors.
                    The course provided a clear roadmap for…&rdquo;
                  </p>
                  <button type="button" className="mt-3 text-xs font-medium text-accent hover:text-accent-deep">
                    View More
                  </button>
                </div>
                <div className="rounded-xl border border-line bg-cream/30 p-5">
                  <p className="text-sm font-semibold text-ink">Chris C.</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    &ldquo;Simple enough to make it easy to grasp complex topic, inspiring speaker and a &lsquo;lifelong learning&rsquo; approach.&rdquo;
                  </p>
                </div>
              </div>
            </section>
          )}

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
            {/* info card */}
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  7-DAY AGENTIC AI BOOTCAMP
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold leading-tight">Your First Step Into Agentic AI</h3>

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
                        <path d="M9 5H7a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                        <path d="M9 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        <path d="M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Daily Practical Assignments
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="12" r="8" />
                        <path d="M2 12h20M12 2a15 15 0 010 20A15 15 0 0112 2z" />
                        <path d="M8 12c1.2-2 3.5-3.2 4-5.2.5 2 2.8 3.2 4 5.2-1.2 2-3.5 3.2-4 5.2-.5-2-2.8-3.2-4-5.2z" />
                      </svg>
                    </span>
                    Real-World AI Use Cases
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ede8ff] text-[#7c3aed]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="5" y="7" width="14" height="10" rx="2" />
                        <circle cx="9" cy="12" r="1.2" fill="currentColor" stroke="none" />
                        <circle cx="15" cy="12" r="1.2" fill="currentColor" stroke="none" />
                        <path d="M9 15c1 1 2 1.5 3 1.5s2-.5 3-1.5" strokeLinecap="round" />
                        <path d="M12 7V5M8 17l-1.5 2M16 17l1.5 2" strokeLinecap="round" />
                      </svg>
                    </span>
                    Build Your First AI Agent
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
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
                        <path d="M9.5 8l1.2 1.8L13 9l-1.6 2.4L12 13l-1.5-1.6z" fill="currentColor" stroke="none" />
                      </svg>
                    </span>
                    Certificate of Completion
                  </li>
                  <li className="flex items-center gap-2.5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="7" width="18" height="12" rx="1.5" />
                        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                        <path d="M7 11h10M7 15h6" strokeLinecap="round" />
                      </svg>
                    </span>
                    Project Portfolio Recognition
                  </li>
                </ul>

                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="text-sm text-ink-soft line-through decoration-ink-soft/40">₹599</span>
                  <span className="font-display text-2xl font-semibold text-ink">₹299</span>
                  <span className="rounded-full bg-[#ff4d6a]/10 px-2 py-0.5 text-[11px] font-semibold text-[#ff4d6a]">50% OFF</span>
                </div>
                <p className="mt-1 text-center text-xs text-ink-soft">Inclusive · One-time · 50% off MRP ₹599</p>

                <EnrollButton variant="sidebar" label="Enroll Now — ₹299" />

                <p className="mt-3 text-center text-xs font-medium text-ink-soft">Secure payment via Razorpay · <span className="line-through decoration-ink-soft/40">₹599</span> ₹299</p>
              </div>

              <div className="border-t border-line bg-cream/50 px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Need help?</p>
                <Link href="/contact" className="mt-1 inline-flex text-sm font-medium text-accent hover:text-accent-deep">
                  Contact us &rarr;
                </Link>
              </div>
            </div>

            {/* Why Learn With Us */}
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
                  Focus on understanding, not just frameworks
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Build something you can showcase
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb bottom spacer */}
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <Link href="/training" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-deep">
          <span aria-hidden="true">&larr;</span> Back to Training &amp; Internship
        </Link>
      </div>
    </div>
  );
}
