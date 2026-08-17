"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { createClient } from "@supabase/supabase-js";

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/15";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState<FormState>("idle");

  const update =
    (field: keyof typeof initialForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) {
      setState("error");
      return;
    }
    setState("submitting");
    const supabase = createClient(url, key);
    const { error } = await supabase.from("contacts").insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      company: form.company || null,
      subject: form.subject || null,
      message: form.message,
    });
    if (error) {
      setState("error");
      return;
    }
    setState("success");
  }

  if (state === "success") {
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
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft"
          >
            Phone{" "}
            <span className="normal-case text-ink-soft/60">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 98765 43210"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="company"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft"
          >
            Company{" "}
            <span className="normal-case text-ink-soft/60">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={update("company")}
            placeholder="Organization or institution"
            className={inputClasses}
          />
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft"
        >
          Subject{" "}
          <span className="normal-case text-ink-soft/60">(optional)</span>
        </label>
        <input
          id="subject"
          name="subject"
          value={form.subject}
          onChange={update("subject")}
          placeholder="What is this about?"
          className={inputClasses}
        />
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about the problem you are trying to solve."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full rounded-full bg-linear-to-r from-accent to-moss px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/35 hover:from-accent-deep hover:to-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {state === "submitting" ? "Sending…" : "Send message"}
        </button>
        {state === "error" ? (
          <p aria-live="polite" className="text-sm text-terra">
            Something went wrong. Please try again or email us directly.
          </p>
        ) : null}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-ink-soft/70">
        Prefer email? Write to us at{" "}
        <a
          href="mailto:director@somadhantechnologies.in"
          className="font-medium text-accent hover:text-accent-deep"
        >
          director@somadhantechnologies.in
        </a>
      </p>
    </form>
  );
}