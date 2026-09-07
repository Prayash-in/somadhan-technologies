"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const BANNER_KEY = "bootcamp-banner-dismissed";
const MODAL_KEY = "bootcamp-promo-dismissed";
const MODAL_EXPIRY_MS = 24 * 60 * 60 * 1000; // 1 day

export default function BootcampPromo() {
  const pathname = usePathname();
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Don't show promo on its own page to avoid self-promotion loop
  const isBootcampPage = pathname?.startsWith("/training/agentic-ai-bootcamp");

  useEffect(() => {
    setMounted(true);
    if (isBootcampPage) return;

    const bannerDismissed = localStorage.getItem(BANNER_KEY);
    if (!bannerDismissed) setShowBanner(true);

    const dismissedAt = localStorage.getItem(MODAL_KEY);
    if (dismissedAt) {
      const elapsed = Date.now() - Number(dismissedAt);
      if (elapsed < MODAL_EXPIRY_MS) return;
    }
    const timer = setTimeout(() => setShowModal(true), 1200);
    return () => clearTimeout(timer);
  }, [isBootcampPage]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") dismissModal(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [showModal]);

  const dismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem(BANNER_KEY, "1");
  };

  const dismissModal = (persist = true) => {
    setShowModal(false);
    if (persist) localStorage.setItem(MODAL_KEY, String(Date.now()));
  };

  if (!mounted || isBootcampPage) return null;

  return (
    <>
      {/* Top Announcement Banner */}
      {showBanner && (
        <div className="relative z-[60] border-b border-white/10 bg-[#150a33] text-white">
          {/* subtle grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 100% at 20% 50%, rgba(124,58,237,0.35), transparent 60%), radial-gradient(40% 80% at 90% 50%, rgba(45,122,79,0.25), transparent 60%)",
            }}
          />
          <div className="relative mx-auto flex max-w-6xl items-center justify-center gap-3 px-10 py-2.5 text-center sm:px-8">
            <span className="hidden shrink-0 rounded-full bg-[#ff4d6a] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white sm:inline-flex">
              New
            </span>
            <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-medium leading-none sm:text-sm">
              <span className="font-semibold">7-Days Agentic AI Bootcamp</span>
              <span className="hidden text-white/40 sm:inline">—</span>
              <span className="text-white/80">Build your first AI agent in 7 days</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-white/50 line-through">₹599</span>
                <span className="font-bold text-white">₹299</span>
                <span className="rounded-full bg-white px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-[#ff4d6a]">50% OFF</span>
              </span>
            </p>
            <Link
              href="/training/agentic-ai-bootcamp"
              onClick={() => dismissModal(false)}
              className="hidden shrink-0 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-sm transition hover:bg-cream sm:inline-flex"
            >
              Enroll Now →
            </Link>
            {/* Mobile CTA */}
            <Link
              href="/training/agentic-ai-bootcamp"
              onClick={() => dismissModal(false)}
              className="inline-flex shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink sm:hidden"
            >
              Enroll →
            </Link>
            <button
              type="button"
              aria-label="Dismiss banner"
              onClick={dismissBanner}
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white sm:right-3"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="7-Days Agentic AI Bootcamp promotion"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* overlay */}
          <button
            aria-label="Close promotion"
            onClick={() => dismissModal(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* card - no inner scroll, content sized to fit */}
          <div className="animate-popup-enter relative w-full max-w-[560px] overflow-hidden rounded-[24px] border border-white/10 bg-white shadow-2xl">
            {/* close X */}
            <button
              type="button"
              aria-label="Close"
              onClick={() => dismissModal()}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur transition hover:bg-black/30 sm:bg-white/15 sm:hover:bg-white/25"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>

            {/* Header - dark promo */}
            <div className="relative overflow-hidden bg-[#150a33] px-6 py-5 sm:px-8 sm:py-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 90% at 75% 20%, rgba(124,58,237,0.45), transparent 60%), radial-gradient(50% 70% at 15% 85%, rgba(45,122,79,0.28), transparent 60%)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff4d6a] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    50% OFF — Limited Time
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                    Beginner Friendly
                  </span>
                </div>

                <h2 className="mt-4 font-display text-[26px] font-semibold leading-[1.05] tracking-tight text-white sm:text-3xl">
                  7-Days Agentic AI
                  <span className="block font-display text-[26px] font-light italic text-white/90 sm:text-3xl">Bootcamp</span>
                </h2>
                <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-white/70">
                  Your First Step into Generative & Agentic AI — foundations, prompting, tools & a real team prototype in 7 days.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-white/50 line-through decoration-white/30">₹599</span>
                  <span className="font-display text-2xl font-semibold text-white">₹299</span>
                  <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-bold tracking-wide text-[#ff4d6a]">50% OFF</span>
                  <span className="text-xs text-white/50">Inclusive · One-time</span>
                </div>
                <p className="mt-1 text-xs text-white/50">Next cohort: Coming soon · Limited seats · Live + recorded</p>
              </div>
            </div>

            {/* Body - no scroll, compact to fit */}
            <div className="px-6 py-4 sm:px-8 sm:py-5">
              {/* perks - compact */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Beginner Friendly",
                  "14+ Hours · 7 Days",
                  "Build Your First Agent",
                  "Certificate Included",
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-xl border border-line bg-cream/50 px-3 py-2 text-xs font-medium leading-tight text-ink"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M2.5 6.5l2 2 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {label}
                  </div>
                ))}
              </div>

              {/* video preview thumb */}
              <Link
                href="/training/agentic-ai-bootcamp"
                onClick={() => dismissModal(false)}
                className="group mt-3 flex items-center gap-3 rounded-xl border border-line bg-white p-2 pr-4 transition hover:border-accent/20 hover:bg-cream/40"
              >
                <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://img.youtube.com/vi/iyqoT-2xgM4/hqdefault.jpg"
                    alt="Bootcamp preview"
                    className="h-full w-full object-cover opacity-90 transition group-hover:scale-105 group-hover:opacity-100"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#ff4d6a] shadow-md backdrop-blur">
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5" fill="currentColor">
                        <path d="M8 5.2l10 6.3-10 6.3z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Watch Preview
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-sm font-medium leading-tight text-ink">See what you&apos;ll build in 7 days — from prompt to agent.</p>
                  <p className="text-xs text-ink-soft">YouTube Shorts · Somadhan AI Team</p>
                </div>
                <span className="ml-auto hidden text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-accent sm:block">→</span>
              </Link>

              {/* CTAs */}
              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/training/agentic-ai-bootcamp"
                  onClick={() => dismissModal(false)}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-accent to-moss px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:from-accent-deep hover:to-accent hover:shadow-xl hover:shadow-accent/30"
                >
                  Enroll Now — ₹299
                </Link>
                <Link
                  href="/training/agentic-ai-bootcamp"
                  onClick={() => dismissModal(false)}
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
                >
                  View Details
                </Link>
              </div>
              <p className="mt-3 text-center text-xs leading-relaxed text-ink-soft">
                Secure payment via Razorpay · <span className="line-through">₹599</span> now <span className="font-semibold text-ink">₹299</span> · Certificate on completion
              </p>
              <button
                type="button"
                onClick={() => dismissModal()}
                className="mx-auto mt-2 block text-xs font-medium text-ink-soft underline decoration-line underline-offset-4 hover:text-ink hover:decoration-ink-soft"
              >
                Maybe later — don&apos;t show again for 24h
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
