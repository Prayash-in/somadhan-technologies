"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ComponentType } from "react";
import Logo from "./Logo";
import {
  LeafGlyph,
  LanguageGlyph,
  CommunityGlyph,
  CitizenGlyph,
} from "./glyphs";

type NavChild = {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  tile: string;
};

const aboutItems: NavChild[] = [
  {
    href: "/about",
    label: "About Us",
    Icon: CommunityGlyph,
    tile: "bg-accent-soft text-accent-deep",
  },
  {
    href: "/team",
    label: "Team",
    Icon: CitizenGlyph,
    tile: "bg-sky-soft text-sky-deep",
  },
];

const aiItems: NavChild[] = [
  {
    href: "/agri-informatics",
    label: "Agri-Informatics",
    Icon: LeafGlyph,
    tile: "bg-accent-soft text-accent-deep",
  },
  {
    href: "/multilingual-ai",
    label: "Multilingual AI",
    Icon: LanguageGlyph,
    tile: "bg-sky-soft text-sky-deep",
  },
];

const links = [
  { href: "/", label: "Home" },
];

const linksAfter = [
  { href: "/training", label: "Training & Internship" },
  { href: "/research", label: "Research & Innovation" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Insights" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function Chevron({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`${className ?? "h-3.5 w-3.5"} transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function NavDropdown({ label, items }: { label: string; items: NavChild[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const groupActive = items.some((item) => isActive(pathname, item.href));

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        className={`group flex items-center gap-1 whitespace-nowrap text-sm transition-colors ${
          groupActive || open
            ? "font-medium text-accent"
            : "text-ink-soft hover:text-ink"
        }`}
      >
        {label}
        <Chevron open={open} />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-line bg-white p-1.5 shadow-xl shadow-ink/10">
          {items.map(({ href, label: itemLabel, Icon, tile }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-cream"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tile} transition-transform duration-300 group-hover:scale-105`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                {itemLabel}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: NavChild[];
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const groupActive = items.some((item) => isActive(pathname, item.href));

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex items-center justify-between rounded-lg px-3 py-3 text-base transition-colors ${
          groupActive
            ? "font-medium text-accent"
            : "text-ink-soft hover:bg-cream hover:text-ink"
        }`}
      >
        {label}
        <Chevron open={open} className="h-4 w-4" />
      </button>
      {open ? (
        <div className="flex flex-col gap-1 border-l-2 border-line pl-3">
          {items.map(({ href, label: itemLabel, Icon, tile }) => (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                isActive(pathname, href)
                  ? "font-medium text-accent"
                  : "text-ink-soft hover:bg-cream hover:text-ink"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tile}`}
              >
                <Icon className="h-4 w-4" />
              </span>
              {itemLabel}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="sticky top-0 z-50 border-b border-line bg-paper"
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <div className="flex items-center gap-6">
          <Logo className="h-18" />
          <div className="hidden items-center gap-6 lg:flex xl:gap-7">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(pathname, link.href)}
              />
            ))}

            <NavDropdown label="About" items={aboutItems} />

            <NavDropdown label="AI Solutions" items={aiItems} />

            {linksAfter.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(pathname, link.href)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-linear-to-r from-accent to-moss px-5 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-accent/25 md:inline-flex"
          >
            Contact us
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-full bg-ink transition-transform duration-300 ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full bg-ink transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-ink transition-transform duration-300 ${
                  open ? "top-1/2 -rotate-45" : "top-full"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-paper px-5 pb-8 pt-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <MobileLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(pathname, link.href)}
                onNavigate={() => setOpen(false)}
              />
            ))}

            <MobileAccordion
              label="About"
              items={aboutItems}
              onNavigate={() => setOpen(false)}
            />

            <MobileAccordion
              label="AI Solutions"
              items={aiItems}
              onNavigate={() => setOpen(false)}
            />

            {linksAfter.map((link) => (
              <MobileLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(pathname, link.href)}
                onNavigate={() => setOpen(false)}
              />
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-linear-to-r from-accent to-moss px-5 py-3 text-center text-sm font-medium text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative whitespace-nowrap text-sm transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 ${
        active
          ? "font-medium text-accent after:scale-x-100"
          : "text-ink-soft hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`rounded-lg px-3 py-3 text-base transition-colors ${
        active
          ? "font-medium text-accent"
          : "text-ink-soft hover:bg-cream hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}
