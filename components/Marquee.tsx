const items = [
  "Precision Agriculture",
  "Crop Intelligence",
  "Climate & Water Resilience",
  "Agri Value Chain Intelligence",
  "Peer-Reviewed Research",
  "Field-Validated Models",
  "Built with Agronomists",
];

export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-8 pr-8 whitespace-nowrap"
        >
          <span className="font-display text-sm font-medium uppercase tracking-[0.22em] text-ink-soft">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rotate-45 bg-linear-to-br from-accent to-gold"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="relative overflow-hidden border-b border-line bg-cream/60 py-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-cream to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-cream to-transparent"
      />
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}