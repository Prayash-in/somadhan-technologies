export default function LeafMark({
  className = "h-16 w-16",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 3C41 17 53 29 53 41.5C53 50.5 45 59 36 59C34.5 58.6 33.6 57.2 33 54.5C32.4 57.2 31.5 58.6 30 59C21 59 11 50.5 11 41.5C11 29 23 17 32 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 10C31 24 31 39 32 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M32 24C27.5 26 22.5 29.5 20 33.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M32 24C36.5 26 41.5 29.5 44 33.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}