"use client";

import { useState } from "react";

export type ReceiptEnrollment = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  institution?: string | null;
  city?: string | null;
  course_name: string;
  amount: number; // paise
  currency?: string | null;
  payment_status: string;
  razorpay_order_id?: string | null;
  razorpay_payment_id?: string | null;
  created_at?: string | null;
};

function shortId(id: string) {
  return id.replace(/-/g, "").slice(0, 8).toUpperCase();
}

function formatDate(iso?: string | null) {
  if (!iso) return new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function formatAmount(paise: number) {
  return `Rs. ${(paise / 100).toLocaleString("en-IN")}`;
}

export default function ReceiptDownloader({ enrollment }: { enrollment: ReceiptEnrollment }) {
  const [generating, setGenerating] = useState(false);

  async function handleDownload() {
    if (generating) return;
    setGenerating(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "mm", format: "a4" });
      const pageW = doc.internal.pageSize.getWidth();
      const margin = 16;
      const contentW = pageW - margin * 2;
      let y = 0;

      // Header band
      doc.setFillColor(21, 60, 41); // deep forest
      doc.rect(0, 0, pageW, 42, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(17);
      doc.text("Somadhan Technologies", margin, 15);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("Payment Receipt", margin, 23);
      doc.setFontSize(9);
      doc.setTextColor(220, 230, 222);
      doc.text("director@somadhantechnologies.in", margin, 30);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(255, 255, 255);
      const receiptNo = `ST-${new Date(enrollment.created_at || Date.now()).getFullYear()}-${shortId(enrollment.id)}`;
      doc.text(receiptNo, pageW - margin, 15, { align: "right" });
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(220, 230, 222);
      doc.text(`Date: ${formatDate(enrollment.created_at)}`, pageW - margin, 23, { align: "right" });
      doc.text("Status: PAID", pageW - margin, 30, { align: "right" });

      y = 52;

      // Billed to
      doc.setTextColor(30, 30, 30);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text("BILLED TO", margin, y);
      y += 6;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(enrollment.name, margin, y);
      y += 5.5;
      doc.setFontSize(9);
      doc.setTextColor(90, 90, 90);
      doc.text(enrollment.email, margin, y);
      y += 5;
      if (enrollment.phone) {
        doc.text(`Phone: ${enrollment.phone}`, margin, y);
        y += 5;
      }
      const meta = [enrollment.institution, enrollment.city].filter(Boolean).join("  |  ");
      if (meta) {
        doc.text(meta, margin, y);
        y += 5;
      }
      y += 3;

      // Divider
      doc.setDrawColor(230, 230, 230);
      doc.line(margin, y, margin + contentW, y);
      y += 7;

      // Course / amount table (simple rows)
      doc.setTextColor(30, 30, 30);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text("DESCRIPTION", margin, y);
      doc.text("AMOUNT", pageW - margin, y, { align: "right" });
      y += 6;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      const courseLines = doc.splitTextToSize(enrollment.course_name, contentW - 50);
      doc.text(courseLines, margin, y);
      doc.setFont("helvetica", "bold");
      doc.text(formatAmount(enrollment.amount), pageW - margin, y, { align: "right" });
      y += Math.max(7, courseLines.length * 5 + 2);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(90, 90, 90);
      doc.text("Inclusive of all taxes  |  One-time  |  50% off MRP Rs. 599", margin, y);
      y += 8;

      // Totals box
      doc.setFillColor(245, 247, 245);
      doc.roundedRect(margin, y, contentW, 14, 2, 2, "F");
      doc.setTextColor(30, 30, 30);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text("Total Paid", margin + 4, y + 9);
      doc.text(formatAmount(enrollment.amount), pageW - margin - 4, y + 9, { align: "right" });
      y += 22;

      // Payment details
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text("PAYMENT DETAILS", margin, y);
      y += 6;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(60, 60, 60);
      const rows: Array<[string, string]> = [
        ["Enrollment ID", enrollment.id],
        ["Payment ID", enrollment.razorpay_payment_id || "—"],
        ["Order ID", enrollment.razorpay_order_id || "—"],
        ["Currency", enrollment.currency || "INR"],
      ];
      for (const [label, value] of rows) {
        doc.setFont("helvetica", "bold");
        doc.text(`${label}:`, margin, y);
        doc.setFont("helvetica", "normal");
        const valLines = doc.splitTextToSize(value, contentW - 48);
        doc.text(valLines, margin + 42, y);
        y += Math.max(5.5, valLines.length * 5);
      }
      y += 6;

      // Footer
      doc.setDrawColor(230, 230, 230);
      doc.line(margin, y, margin + contentW, y);
      y += 6;
      doc.setFontSize(8.5);
      doc.setTextColor(110, 110, 110);
      doc.text("System-generated receipt. Keep your Enrollment ID for support queries.", margin, y);
      y += 5;
      doc.text("Questions? director@somadhantechnologies.in", margin, y);
      y += 5;
      doc.setFontSize(8);
      doc.text("Test Mode — issued against a Razorpay test payment.", margin, y);

      doc.save(`Somadhan-Receipt-${shortId(enrollment.id)}.pdf`);
    } catch (e) {
      console.error("Receipt generation failed:", e);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={generating}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-60"
    >
      {generating ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
          Generating PDF…
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download Receipt (PDF)
        </>
      )}
    </button>
  );
}
