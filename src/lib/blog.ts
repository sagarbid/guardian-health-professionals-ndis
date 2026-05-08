import { listMdxSlugs, readMdxDoc } from "@/lib/mdx";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO
  tags?: string[];
};

export async function listBlogPosts() {
  const slugs = await listMdxSlugs("blog");
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const doc = await readMdxDoc<BlogFrontmatter>("blog", slug);
      return {
        slug,
        ...doc.frontmatter,
      };
    }),
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPost(slug: string) {
  return readMdxDoc<BlogFrontmatter>("blog", slug);
}

