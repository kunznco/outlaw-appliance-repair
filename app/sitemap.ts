import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { servicePages } from "@/lib/services-content";
import { areas } from "@/lib/areas-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/service-area`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages.map((s) => ({
      url: `${site.url}/services/${s.urlSlug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...areas.map((a) => ({
      url: `${site.url}/service-area/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
