import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { listBlogPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.guardianhealthprofessionals.com.au";
  const posts = await listBlogPosts().catch(() => []);

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    ...SERVICES.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
    })),
    { url: `${base}/blog`, lastModified: new Date() },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
    })),
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
  ];
}
