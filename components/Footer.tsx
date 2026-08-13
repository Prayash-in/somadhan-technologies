import Logo from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/solutions", label: "Solutions" },
      { href: "/research", label: "Research" },
      { href: "/team", label: "Team & Careers" },
      { href: "/blog", label: "Insights" },
    ],
  },
  {
    title: "Engage",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/contact#newsletter", label: "Newsletter" },
      { href: "/contact#careers", label: "Careers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-32" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              A research-first AI startup building cutting-edge intelligence
              for agriculture — from lab, to field, to market.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-ink-soft/70">
              Intelligence, rooted in research.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-soft transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Somadhan Technologies. All rights reserved.</p>
          <p>
            hello@somadhan.tech &middot; Built on research, not hype.
          </p>
        </div>
      </div>
    </footer>
  );
}