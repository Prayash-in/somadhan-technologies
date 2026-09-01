/**
 * Central course registry — single source of truth for course pricing.
 * Backend MUST validate course_id against this registry and never trust frontend price.
 * Also synced to Supabase `courses` table via migration seed.
 */

export type Course = {
  id: string;
  slug: string;
  name: string;
  description: string;
  pricePaise: number; // integer in paise (smallest currency unit) — actual charge
  priceDisplay: string; // e.g. "₹299"
  compareAtPricePaise?: number; // original MRP for strikethrough, if discounted
  compareAtPriceDisplay?: string; // e.g. "₹599"
  currency: "INR";
  duration: string;
  level: string;
  isActive: boolean;
};

export const COURSES: Course[] = [
  {
    id: "agentic-ai-bootcamp",
    slug: "agentic-ai-bootcamp",
    name: "7-Days Agentic AI Bootcamp",
    description:
      "Your first step into Generative & Agentic AI — foundations, prompting, tools & a real team prototype in 7 days.",
    pricePaise: 29900,
    priceDisplay: "₹299",
    compareAtPricePaise: 59900,
    compareAtPriceDisplay: "₹599",
    currency: "INR",
    duration: "7 Days · 14+ Hours",
    level: "Beginner",
    isActive: true,
  },
  {
    id: "ai-tools-bootcamp",
    slug: "ai-tools-bootcamp",
    name: "7-Day AI Tools Bootcamp",
    description:
      "Build your personal AI toolkit — master prompting, research, writing, design, coding, data & automation in 7 hands-on days.",
    pricePaise: 29900,
    priceDisplay: "₹299",
    compareAtPricePaise: 59900,
    compareAtPriceDisplay: "₹599",
    currency: "INR",
    duration: "7 Days · 14+ Hours",
    level: "Beginner",
    isActive: true,
  },
];

export function getCourseById(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id && c.isActive);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug && c.isActive);
}

export function formatPaise(paise: number): string {
  return `₹${(paise / 100).toLocaleString("en-IN")}`;
}
