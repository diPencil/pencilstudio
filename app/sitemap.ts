import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const BASE = "https://dipencil.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/work",
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

  return [...staticRoutes, ...serviceRoutes];
}

