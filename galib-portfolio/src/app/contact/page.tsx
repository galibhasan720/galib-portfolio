import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ways to connect with the developer behind this portfolio.",
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <article className="prose">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s talk about useful software.</h1>
        <p className="lead">For opportunities, collaboration, or a technical conversation, email is the simplest way to reach me.</p>
        <section className="detail-section">
          <p><a className="text-link" href={`mailto:${site.email}`}>{site.email}</a></p>
          <p><a className="text-link" href={site.githubUrl}>GitHub ↗</a></p>
          <p><a className="text-link" href={site.linkedinUrl}>LinkedIn ↗</a></p>
        </section>
      </article>
    </div>
  );
}
