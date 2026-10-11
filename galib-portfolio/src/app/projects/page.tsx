import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software systems, prototypes, and engineering experiments.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <div className="prose">
        <p className="eyebrow">Selected work</p>
        <h1>Projects</h1>
        <p className="lead">A curated collection of systems, prototypes, and experiments. Each project states what is implemented, what is measured, and what remains unfinished.</p>
      </div>
      <section className="section">
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}
