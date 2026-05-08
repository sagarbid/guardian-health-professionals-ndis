import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import AiRewritePanel from "@/components/AiRewritePanel";
import MdxContent from "@/components/MdxContent";
import SectionHeading from "@/components/SectionHeading";
import { readMdxDoc } from "@/lib/mdx";
import { getService, SERVICES, type ServiceSlug } from "@/lib/services";

type ServiceFrontmatter = {
  summary?: string;
  aiSeed?: string;
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: ServiceSlug }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return notFound();

  const doc = await readMdxDoc<ServiceFrontmatter>("services", slug);
  const seed =
    doc.frontmatter.aiSeed ??
    doc.frontmatter.summary ??
    `${service.title}: ${service.short}`;

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="NDIS Service"
            title={service.title}
            description={service.short}
          />
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              NDIS-funded
            </span>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
              Participant-centred
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
              Melbourne / VIC
            </span>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <MdxContent>{doc.content}</MdxContent>
              <div className="mt-6 rounded-xl bg-slate-50 p-4 text-xs text-slate-700">
                <span className="font-semibold text-slate-900">Important:</span>{" "}
                Information on this website is general and not a substitute for
                professional medical advice.
              </div>
            </div>
            <div className="space-y-4">
              <AiRewritePanel serviceTitle={service.title} defaultText={seed} />
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-extrabold text-slate-900">
                  Next step
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Tell us your goals and preferred supports. We’ll confirm
                  availability and plan fit.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Contact our team
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

