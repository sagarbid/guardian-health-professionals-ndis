import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { listBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical NDIS guides and plain-language tips for participants and families in Melbourne/Victoria.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage() {
  const posts = await listBlogPosts();

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Blog"
                title="NDIS guides and resources"
                description="Sample articles for demo content — replace with your own posts or connect Contentful."
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/illustrations/blog-uplift.svg"
                alt="Uplifting illustration for NDIS resources"
                width={1600}
                height={900}
                className="h-72 w-full object-cover sm:h-96"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  {new Date(p.date).toLocaleDateString("en-AU", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </div>
                <div className="mt-2 text-lg font-extrabold tracking-tight text-slate-900">
                  {p.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {p.description}
                </p>
                <div className="mt-4 text-sm font-semibold text-blue-700">
                  Read article →
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
