"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/15";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        aria-live="polite"
        className="rounded-2xl border border-line bg-white p-10 text-center"
      >
        <p className="font-display text-2xl font-medium">Thank you.</p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
          Your message is on its way. We read every note and will reply within
          two working days.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-line bg-white p-8 sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Name
          </label>
          <input id="name" name="name" required placeholder="Your full name" className={inputClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          Organization <span className="normal-case text-ink-soft/60">(optional)</span>
        </label>
        <input
          id="organization"
          name="organization"
          placeholder="Farm, company or institution"
          className={inputClasses}
        />
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about the problem you are trying to solve."
          className={`${inputClasses} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-linear-to-r from-accent to-moss px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/35 hover:from-accent-deep hover:to-accent sm:w-auto"
      >
        Send message
      </button>
      <p className="mt-4 text-xs leading-relaxed text-ink-soft/70">
        Prefer email? Write to us at{" "}
        <a href="mailto:director@somadhantechnologies.in" className="font-medium text-accent hover:text-accent-deep">
          director@somadhantechnologies.in
        </a>
      </p>
    </form>
  );
}
