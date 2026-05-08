import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import MdxContent from "@/components/MdxContent";
import { getBlogPost, listBlogPosts } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = await listBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const doc = await getBlogPost(slug);
    return {
      title: doc.frontmatter.title,
      description: doc.frontmatter.description,
      alternates: { canonical: `/blog/${slug}` },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let doc;
  try {
    doc = await getBlogPost(slug);
  } catch {
    return notFound();
  }

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <Container className="py-14 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-wide text-emerald-700">
            {new Date(doc.frontmatter.date).toLocaleDateString("en-AU", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </div>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {doc.frontmatter.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
            {doc.frontmatter.description}
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <MdxContent>{doc.content}</MdxContent>
          </div>
        </Container>
      </section>
    </div>
  );
}

