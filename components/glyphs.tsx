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

export function ScanGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M9.8 9.8a3.4 3.4 0 0 0-1.9 4.4c.3-.5.8-.9 1.4-1.1M14.2 14.2a3.4 3.4 0 0 0 1.9-4.4c-.3.5-.8.9-1.4 1.1" />
      <path d="M6.5 17.5c2 1 9 1 11 0" />
    </svg>
  );
}

export function LayersGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M12 2.5c2.6 3.1 3.6 5 3.6 6.4a3.6 3.6 0 0 1-7.2 0C8.4 7.5 9.4 5.6 12 2.5Z" />
      <path d="M12 12.5c2.6 3.1 3.6 5 3.6 6.4a3.6 3.6 0 0 1-7.2 0c0-1.4 1-3.3 3.6-6.4Z" />
      <path d="M3.5 14.5c5 2 12 2 17 0M3.5 18.5c5 2 12 2 17 0" />
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

export function UniversityGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="m22 8-10-4-10 4 10 4 10-4Z" />
      <path d="M6 10.5V16c3 1.5 9 1.5 12 0v-5.5" />
      <path d="M22 8v5" />
    </svg>
  );
}

export function ResearchGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M9.5 3h5M10 3v6l-4.6 8A2 2 0 0 0 7.2 20h9.6a2 2 0 0 0 1.8-3l-4.6-8V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

export function IndustryGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M3 21V9l6 3.5V9l6 3.5V9l6 3.5V21" />
      <path d="M3 21h18M7 17h.01M11 17h.01M15 17h.01" />
    </svg>
  );
}

export function CommunityGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 19a4 4 0 0 1 5.5-3.7" />
    </svg>
  );
}

export function VoiceGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3Z" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M9 21h6" />
    </svg>
  );
}

export function TranslateGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M3.5 5.5h7M7 3.5v2" />
      <path d="M5.2 5.5c0 3 1.7 4.7 4.2 5.6" />
      <path d="M7.8 8.6c-.9 1.7-2.2 2.9-3.7 3.5" />
      <rect x="13" y="10.5" width="8" height="8" rx="2" />
      <path d="M14.5 14.5h.01M17 14.5h.01M14.5 17h.01M17 17h.01" />
      <path d="M3.5 20.5h4M5.5 18.5v2" />
      <path d="M21 3.5v4" />
    </svg>
  );
}

export function NetworkGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 4 5.1 4 8.5s-1.5 6.2-4 8.5c-2.5-2.3-4-5.1-4-8.5s1.5-6.2 4-8.5Z" />
      <circle cx="12" cy="5.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="18.8" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="18.8" r="1" fill="currentColor" stroke="none" />
      <circle cx="5.2" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CitizenGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="9.5" cy="8" r="3.5" />
      <path d="M3.5 20a6 6 0 0 1 12 0" />
      <path d="M17.5 10.5l.9 1.9 2.1.3-1.5 1.4.4 2-1.9-1-1.9 1 .4-2-1.5-1.4 2.1-.3.9-1.9Z" />
    </svg>
  );
}

export function DashboardGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <rect x="3.5" y="13" width="4" height="7.5" rx="1" />
      <rect x="10" y="7" width="4" height="13.5" rx="1" />
      <rect x="16.5" y="10" width="4" height="10.5" rx="1" />
      <path d="M5 9.5 12 4l7 5.5" />
    </svg>
  );
}

export function DocumentGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M6 3.5h8l4 4v13H6Z" />
      <path d="M14 3.5v4h4" />
      <path d="M9 12h6M9 15.5h6" />
      <path d="M12.5 8.5V5M10 5h5" />
    </svg>
  );
}

export function BuildingGlyph({ className = "h-6 w-6" }: { className?: string }) {  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 9h4a1 1 0 0 1 1 1v11" />
      <path d="M2 21h20" />
      <path d="M7 8h.01M10 8h.01M7 12h.01M10 12h.01M7 16h.01M10 16h.01M17 13h.01M17 17h.01" />
    </svg>
  );
}

export function MailGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
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