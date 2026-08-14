import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { tones } from "@/components/tone";
import { getPost, posts } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const tagTones: Record<string, keyof typeof tones> = {
    Approach: "green",
    Research: "sky",
    "Field Notes": "gold",
  };
  const tagTone = tones[tagTones[post.tag] ?? "green"];

  return (
    <ViewTransition name="page">
      <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-deep"
      >
        <span aria-hidden="true">&larr;</span> All articles
      </Link>

      <header className="mt-10">
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-ink-soft">
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.14em] ${tagTone.chip}`}
          >
            {post.tag}
          </span>
          <span>{post.date}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-6 font-display text-3xl font-medium leading-[1.15] tracking-tight text-balance sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
          {post.excerpt}
        </p>
      </header>

      <div className="mt-12 border-t border-line pt-10">
        {post.content.map((section, i) => (
          <section key={i} className="mb-10">
            {section.heading ? (
              <h2 className="mb-4 font-display text-xl font-medium sm:text-2xl">
                {section.heading}
              </h2>
            ) : null}
            {section.body.map((paragraph, j) => (
              <p
                key={j}
                className="mb-5 text-base leading-[1.85] text-ink/90"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>

      <footer className="relative mt-14 overflow-hidden rounded-2xl bg-forest p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-field-grid-light opacity-40"
        />
        <div className="relative">
          <p className="text-sm font-medium text-paper">
            Written by the Somadhan Research Team
          </p>
          <p className="mt-2 text-sm leading-relaxed text-paper/70">
            Somadhan Technologies builds intelligent, multilingual and
            accessible technology solutions for people, agriculture,
            government and institutions.
          </p>
        </div>
      </footer>
      </article>
    </ViewTransition>
  );
}
