const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function SatelliteGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <rect x="7" y="7" width="10" height="10" rx="2" transform="rotate(45 12 12)" />
      <circle cx="12" cy="12" r="1.4" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21" />
      <path d="M5.6 5.6l1.9 1.9M18.4 5.6l-1.9 1.9" />
    </svg>
  );
}

export function LeafGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M20 4C20 14 15.5 20 8 20C8 12 12 6 20 4Z" />
      <path d="M4 20C6.5 14.5 10 10.5 16 8" />
    </svg>
  );
}

export function DropGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M12 3.5C12 3.5 18.5 10.3 18.5 14.5C18.5 18.1 15.6 21 12 21C8.4 21 5.5 18.1 5.5 14.5C5.5 10.3 12 3.5 12 3.5Z" />
      <path d="M9 15.5a3 3 0 0 0 3 3" />
    </svg>
  );
}

export function ChainGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="6" r="2.6" />
      <circle cx="18" cy="18" r="2.6" />
      <path d="m8.2 10.6 7.2-3.2M8.2 13.4l7.2 3.2" />
    </svg>
  );
}

export function LanguageGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M4 6h9M8.5 3.5v2.5" />
      <path d="M6.5 6c0 4 2.5 6.5 6.5 7.5" />
      <path d="M10 9.5C9 12 7.5 13.5 5 14.5" />
      <rect x="13" y="12" width="8" height="8" rx="2" />
      <path d="M14.5 16h.01M17 16h.01M14.5 18.5h.01M17 18.5h.01" />
    </svg>
  );
}

export function BuildingGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 9h4a1 1 0 0 1 1 1v11" />
      <path d="M2 21h20" />
      <path d="M7 8h.01M10 8h.01M7 12h.01M10 12h.01M7 16h.01M10 16h.01M17 13h.01M17 17h.01" />
    </svg>
  );
}

export function SolutionGlyph({
  id,
  className = "h-6 w-6",
}: {
  id: string;
  className?: string;
}) {
  switch (id) {
    case "precision-agriculture":
      return <SatelliteGlyph className={className} />;
    case "crop-intelligence":
      return <LeafGlyph className={className} />;
    case "climate-resilience":
      return <DropGlyph className={className} />;
    case "value-chain-intelligence":
      return <ChainGlyph className={className} />;
    default:
      return <SatelliteGlyph className={className} />;
  }
}