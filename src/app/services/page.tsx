import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "NDIS supports delivered by Guardian Health Professionals in Melbourne/Victoria — personal care, transport, life skills, nursing, group activities and SDA support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NDIS services",
    itemListElement: SERVICES.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.guardianhealthprofessionals.com.au/services/${s.slug}`,
      name: s.title,
    })),
    provider: {
      "@type": "Organization",
      name: SITE.legalName,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wollert",
        addressRegion: "VIC",
        postalCode: "3750",
        addressCountry: "AU",
      },
    },
    areaServed: SITE.serviceAreas,
  };

  return (
    <div className="bg-white">
      <Script
        id="services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Services"
                title="NDIS disability supports"
                description="We provide flexible supports across Melbourne and Victoria. All services are delivered in line with NDIS Practice Standards and participant choice and control."
              />
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700">
                Pricing:{" "}
                <span className="font-semibold text-slate-900">NDIS-funded</span>{" "}
                (rates and supports depend on your plan and goals). Contact us
                to confirm availability and fit.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/photos/services.jpg"
                alt="People participating in a group activity"
                width={1600}
                height={1067}
                className="h-72 w-full object-cover sm:h-96"
              />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
