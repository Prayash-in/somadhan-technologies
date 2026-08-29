"use client";

type Props = {
  variant?: "hero" | "sidebar" | "inline";
  label?: string;
  className?: string;
};

export default function EnrollButton({ variant = "hero", label, className }: Props) {
  function openEnrollment() {
    const el = document.getElementById("enroll-form-section");
    if (el) {
      el.classList.remove("hidden");
      // tiny delay to allow display change before smooth scroll
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      // focus first input for accessibility
      setTimeout(() => {
        const firstInput = el.querySelector<HTMLInputElement>("input");
        firstInput?.focus();
      }, 400);
    }
    // also reveal mobile hidden note if any
    const note = document.getElementById("enroll-hint");
    if (note) note.classList.add("hidden");
  }

  if (variant === "hero") {
    return (
      <button
        type="button"
        onClick={openEnrollment}
        className={
          className ??
          "inline-flex items-center justify-center rounded-full bg-[#ff4d6a] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#ff3d5a]"
        }
      >
        {label ?? "Enroll Now — ₹299"}
      </button>
    );
  }

  if (variant === "sidebar") {
    return (
      <button
        type="button"
        onClick={openEnrollment}
        className={
          className ??
          "mt-6 flex w-full items-center justify-center rounded-full bg-[#ff4d6a] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#ff3d5a]"
        }
      >
        {label ?? "Enroll Now — ₹299"}
      </button>
    );
  }

  return (
    <button type="button" onClick={openEnrollment} className={className}>
      {label ?? "Enroll Now"}
    </button>
  );
}
