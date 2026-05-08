import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type React from "react";

export type MdxDoc<TFrontmatter extends Record<string, unknown>> = {
  slug: string;
  frontmatter: TFrontmatter;
  content: React.ReactNode;
};

function contentDir(...parts: string[]) {
  return path.join(process.cwd(), "content", ...parts);
}

export async function listMdxSlugs(folder: string) {
  const dir = contentDir(folder);
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".mdx"))
    .map((e) => e.name.replace(/\.mdx$/, ""))
    .sort();
}

export async function readMdxDoc<TFrontmatter extends Record<string, unknown>>(
  folder: string,
  slug: string,
  components?: Record<string, React.ComponentType<Record<string, unknown>>>,
): Promise<MdxDoc<TFrontmatter>> {
  const fullPath = contentDir(folder, `${slug}.mdx`);
  const raw = await fs.readFile(fullPath, "utf8");

  const compiled = await compileMDX<TFrontmatter>({
    source: raw,
    options: { parseFrontmatter: true, mdxOptions: { remarkPlugins: [remarkGfm] } },
    components,
  });

  return {
    slug,
    frontmatter: (compiled.frontmatter ?? {}) as TFrontmatter,
    content: compiled.content,
  };
}
