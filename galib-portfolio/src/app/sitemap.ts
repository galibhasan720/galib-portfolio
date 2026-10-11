import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/about", "/resume", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${site.siteUrl}${route}` })),
    ...projects.map((project) => ({ url: `${site.siteUrl}/projects/${project.slug}` })),
  ];
}
