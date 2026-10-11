import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <span className="status">{project.status.replace("-", " ")}</span>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul className="tags" aria-label="Technologies">
        {project.techStack.map((technology) => (
          <li className="tag" key={technology}>{technology}</li>
        ))}
      </ul>
      <Link className="text-link" href={`/projects/${project.slug}`}>
        Read case study →
      </Link>
    </article>
  );
}
