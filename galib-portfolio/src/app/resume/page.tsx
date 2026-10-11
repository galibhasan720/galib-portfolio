import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Professional résumé and technical background.",
};

export default function ResumePage() {
  return (
    <div className="page-shell">
      <article className="prose">
        <p className="eyebrow">Résumé</p>
        <h1>Experience, education, and technical focus.</h1>
        <p className="lead">Replace this structured summary with the verified content from your résumé before launch.</p>
        <section className="detail-section"><h2>Technical focus</h2><p>TypeScript, Next.js, Python, software architecture, testing, AI-assisted workflows, and deployment.</p></section>
        <section className="detail-section"><h2>Download</h2><p>The final PDF should be stored at <code>/public/files/resume.pdf</code>.</p><Link className="button" href={site.resumeUrl}>Download PDF</Link></section>
      </article>
    </div>
  );
}
