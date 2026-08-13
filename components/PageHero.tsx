import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(45,122,79,0.1),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-field-grid opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="animate-drift-b pointer-events-none absolute -top-24 right-[-10rem] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,120,31,0.15),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-drift-a pointer-events-none absolute -top-32 left-[-10rem] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(74,157,106,0.18),transparent_70%)] blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            <span
              aria-hidden="true"
              className="h-px w-6 bg-linear-to-r from-accent to-moss"
            />
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.12] tracking-tight text-balance sm:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}