import Link from "next/link";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <div className="page-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">{site.role}</p>
          <h1>I build reliable software for complex, real-world problems.</h1>
          <p className="lead">{site.shortBio}</p>
          <div className="actions">
            <Link className="button" href="/projects">View selected projects</Link>
            <Link className="button secondary" href="/resume">Download résumé</Link>
          </div>
        </div>
        <p className="hero-note">
          Based in {site.location}. Explore the decisions, tests, and limitations behind the work.
        </p>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>Selected projects</h2>
          <p>A small set of systems and experiments, documented with evidence rather than inflated claims.</p>
        </div>
        <ProjectGrid projects={projects.filter((project) => project.featured)} />
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>What I work on</h2>
          <p>Technical interests that connect product usefulness with engineering discipline.</p>
        </div>
        <div className="capability-grid">
          <article className="capability-card"><h3>Software systems</h3><p>Typed applications, clear domain models, and maintainable interfaces.</p></article>
          <article className="capability-card"><h3>AI integration</h3><p>Useful automation with evaluation, traceable evidence, and honest boundaries.</p></article>
          <article className="capability-card"><h3>Quality and delivery</h3><p>Testing, documentation, and deployment workflows that keep work dependable.</p></article>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>Let&apos;s compare the work</h2>
          <p>Start with a case study, or get in touch if you want to discuss a technical problem.</p>
        </div>
        <Link className="button" href="/contact">Get in touch</Link>
      </section>
    </div>
  );
}
