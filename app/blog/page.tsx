import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { ViewTransition } from "react";
import { tones } from "@/components/tone";
import { posts } from "@/content/posts";

export const metadata = {
  title: "Insights",
  description:
    "Essays and field notes from the Somadhan research bench — on AI, agriculture and the science that connects them.",
};

const tagTones: Record<string, keyof typeof tones> = {
  Approach: "green",
  Research: "sky",
  "Field Notes": "gold",
};

export default function BlogPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Insights"
        title="Notes from the research bench."
        description="Essays and field notes on the ideas behind our work — and the field realities that shape them."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const tone = tones[tagTones[post.tag] ?? "green"];
            return (
              <Reveal key={post.slug} delay={i * 0.05} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper p-8 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-ink/10 sm:p-10"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${tone.topBar} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
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
                  <h2 className="mt-5 font-display text-xl font-medium leading-snug transition-colors group-hover:text-accent sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-line pt-5 text-xs uppercase tracking-[0.14em] text-ink-soft">
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
      </section>
    </ViewTransition>
  );
}