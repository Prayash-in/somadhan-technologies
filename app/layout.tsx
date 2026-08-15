import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
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
    default: "Somadhan Technologies — Reaching the Summit of Inclusive AI",
    template: "%s — Somadhan Technologies",
  },
  description:
    "Somadhan Technologies builds intelligent, multilingual and accessible technology solutions for people, agriculture, government and institutions.",
  keywords: [
    "Inclusive AI",
    "Multilingual AI",
    "Agri-Informatics",
    "Government Solutions",
    "AI Research",
    "Artificial Intelligence",
    "Somadhan Technologies",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Somadhan Technologies — Reaching the Summit of Inclusive AI",
    description:
      "Building intelligent, multilingual and accessible technology solutions for people, agriculture, government and institutions.",
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
        <ScrollToTop />
      </body>
    </html>
  );
}
