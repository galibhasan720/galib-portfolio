import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Background, technical interests, and working principles.",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <article className="prose">
        <p className="eyebrow">About</p>
        <h1>Building with curiosity and evidence.</h1>
        <p className="lead">I am a software developer interested in dependable systems, practical AI integration, and the engineering decisions that make products easier to understand and improve.</p>
        <section className="detail-section"><h2>Working principles</h2><ul><li>Start with the user&apos;s real constraint.</li><li>Prefer measurable results over impressive-sounding claims.</li><li>Keep architecture proportional to the problem.</li><li>Document limitations so the next decision is easier.</li></ul></section>
        <section className="detail-section"><h2>Current direction</h2><p>Use this section to describe your education, current learning goals, and the kinds of teams or problems you want to work with.</p></section>
        <Link className="button" href="/resume">View résumé</Link>
      </article>
    </div>
  );
}
