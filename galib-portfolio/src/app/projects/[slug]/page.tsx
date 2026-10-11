import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="page-shell">
      <article className="prose">
        <header className="detail-header">
          <p className="eyebrow">{project.status.replace("-", " ")} · {project.year}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>
          <p className="meta">Role: {project.role}</p>
          <ul className="tags">{project.techStack.map((item) => <li className="tag" key={item}>{item}</li>)}</ul>
        </header>
        <DetailSection title="Problem"><p>{project.problem}</p></DetailSection>
        <DetailSection title="Solution"><p>{project.solution}</p></DetailSection>
        <DetailSection title="Architecture"><List items={project.architecture} /></DetailSection>
        <DetailSection title="Features"><List items={project.features} /></DetailSection>
        <DetailSection title="Testing"><List items={project.testing} /></DetailSection>
        <DetailSection title="Results"><List items={project.results.length ? project.results : ["No measured results published yet."]} /></DetailSection>
        <DetailSection title="Limitations and next steps"><List items={project.limitations} /></DetailSection>
      </article>
    </div>
  );
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="detail-section"><h2>{title}</h2>{children}</section>;
}

function List({ items }: { items: string[] }) {
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
