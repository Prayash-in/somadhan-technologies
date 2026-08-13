import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/logo.png"
        alt="Somadhan Technologies"
        width={535}
        height={466}
        className={`w-auto ${className}`}
        priority
      />
    </Link>
  );
}