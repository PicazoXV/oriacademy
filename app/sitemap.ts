import type { MetadataRoute } from "next";
import { courses } from "@/lib/data/courses";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/cursos",
    "/talleres",
    "/camino-alumno",
    "/por-que-ori",
    "/contacto",
    "/solicitar-plaza",
    "/horarios",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const courseEntries: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${siteConfig.url}/curso/${course.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...courseEntries];
}
