import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Terms",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Terms"
            title="Website terms (summary)"
            description="Replace this with your full terms. This page is a template to help you launch quickly."
          />
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <div className="prose max-w-none rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2>General information only</h2>
            <p>
              Content on this website is general and does not constitute medical
              or legal advice. Contact us to discuss your needs and confirm
              service suitability.
            </p>
            <h2>NDIS</h2>
            <p>
              References to the NDIS are for service description. NDIS logos are
              used for identification only and do not imply endorsement.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

