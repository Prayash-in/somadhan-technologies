"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p aria-live="polite" className="text-sm text-paper">
        Subscribed — field notes, twice a month. Welcome aboard.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@example.com"
        className="w-full rounded-full border border-line bg-white px-5 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-accent sm:w-72"
      />
      <button
        type="submit"
        className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
      >
        Subscribe
      </button>
    </form>
  );
}
