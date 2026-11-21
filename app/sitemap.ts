import type { MetadataRoute } from "next";
import { services } from "@/lib/services/services";
import { WORK_CATEGORIES } from "@/lib/portfolio/portfolio-content";

const BASE = "https://dipencil.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/sectors",
    "/cloud-hosting",
    "/enterprise",
    "/pricing",
    "/work",
    "/contact",
    "/ask",
    "/superfeliz",
    "/askfeliz",
    "/strategy-direction",
    "/design-experience",
    "/build-launch",
    "/help",
    "/help/faqs",
    "/help/guides",
    "/help/contact",
    "/support",
    "/support/customer",
    "/support/technical",
    "/support/callback",
    "/support/report",
  ].map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workCategoryRoutes = WORK_CATEGORIES.map((cat) => ({
    url: `${BASE}/work/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workProjectRoutes = WORK_CATEGORIES.flatMap((cat) =>
    cat.projects.map((proj) => ({
      url: `${BASE}/work/${cat.slug}/${proj.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...workCategoryRoutes,
    ...workProjectRoutes,
  ];
}

