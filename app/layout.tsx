import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://somadhan.tech"),
  title: {
    default: "Somadhan Technologies — Intelligence, rooted in research",
    template: "%s — Somadhan Technologies",
  },
  description:
    "Somadhan Technologies is a research-first AI startup building cutting-edge solutions for agriculture — from precision farming and crop intelligence to climate resilience and value-chain analytics.",
  keywords: [
    "Agri-tech",
    "Artificial Intelligence",
    "Precision Agriculture",
    "Crop Intelligence",
    "Research",
    "Somadhan Technologies",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Somadhan Technologies — Intelligence, rooted in research",
    description:
      "A research-first AI startup building cutting-edge solutions for agriculture.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-screen bg-paper font-sans text-ink">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
