import type { Project } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid">
      {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
    </div>
  );
}
