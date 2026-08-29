import Logo from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/team", label: "Team" },
      { href: "/multilingual-ai", label: "Multilingual AI" },
      { href: "/agri-informatics", label: "Agri-Informatics" },
      { href: "/training", label: "Training & Internship" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/research", label: "Research & Innovation" },
      { href: "/projects", label: "Projects" },
      { href: "/team#careers", label: "Careers" },
      { href: "/blog", label: "Insights" },
      { href: "/contact", label: "Contact Us" },
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
              Building intelligent, multilingual and accessible technology
              solutions for people, agriculture and institutions.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-ink-soft/70">
              Reaching the Summit of Inclusive AI
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
          <p>Guwahati, Assam, India &middot; director@somadhantechnologies.in</p>
        </div>
      </div>
    </footer>
  );
}