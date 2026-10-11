export type ProjectStatus =
  | "planned"
  | "in-progress"
  | "prototype"
  | "completed";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  featured: boolean;
  year: number;
  role: string;
  techStack: string[];
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  testing: string[];
  results: string[];
  limitations: string[];
  repositoryUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "diagnostic-report-management",
    title: "Diagnostic Report Management",
    summary:
      "A structured workflow for organizing diagnostic reports and making review easier.",
    status: "in-progress",
    featured: true,
    year: 2026,
    role: "System design and implementation",
    techStack: ["TypeScript", "Next.js", "PostgreSQL"],
    problem:
      "Clinicians and support staff need a consistent way to find, review, and track reports without losing important context.",
    solution:
      "A focused management workflow with structured records, clear status transitions, and an interface designed around fast review.",
    architecture: [
      "Next.js application layer with typed domain models",
      "Relational storage for report metadata and audit-friendly state",
      "Reusable UI components for list, detail, and review workflows",
    ],
    features: ["Structured report records", "Search and filtering", "Review status tracking"],
    testing: ["Add verified test commands and results before publishing this case study."],
    results: [],
    limitations: ["This project is still in progress; production evidence is not yet available."],
  },
  {
    slug: "parallel-log-intelligence",
    title: "Parallel Log Intelligence",
    summary:
      "An experiment in processing operational logs concurrently while keeping findings inspectable.",
    status: "prototype",
    featured: true,
    year: 2026,
    role: "Architecture, experimentation, and evaluation",
    techStack: ["Python", "Concurrency", "LLM evaluation"],
    problem:
      "Large log collections are slow to inspect manually, but automated summaries are only useful when their evidence can be traced.",
    solution:
      "A prototype pipeline that partitions log work, runs analyses concurrently, and preserves source references for review.",
    architecture: [
      "Partitioning stage for independent log segments",
      "Concurrent analysis workers with bounded work",
      "Aggregation stage that preserves evidence references",
    ],
    features: ["Concurrent processing", "Evidence-linked findings", "Evaluation hooks"],
    testing: ["Add benchmark methodology and measured timings before claiming performance gains."],
    results: [],
    limitations: ["The prototype needs broader datasets and repeatable benchmarks."],
  },
  {
    slug: "portfolio-foundation",
    title: "Developer Portfolio Foundation",
    summary:
      "This portfolio itself: a statically rendered, evidence-focused site designed for easy maintenance.",
    status: "in-progress",
    featured: true,
    year: 2026,
    role: "Design and implementation",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    problem:
      "A portfolio should make technical work easy to inspect without introducing infrastructure that distracts from the work.",
    solution:
      "A content-first site with typed project metadata, focused case studies, accessible navigation, and a simple deployment path.",
    architecture: [
      "Next.js App Router with statically rendered pages",
      "Typed project data kept in the repository",
      "Vercel deployment with no database or runtime backend",
    ],
    features: ["Project case studies", "Responsive layout", "SEO-ready route structure"],
    testing: ["Lint, type checking, production build, and manual responsive checks are part of the launch checklist."],
    results: [],
    limitations: ["Replace this starter content with verified personal project evidence before launch."],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
