import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Privacy"
            title="Privacy policy (summary)"
            description="Replace this with your full policy. This page is a template to help you launch quickly."
          />
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <div className="prose max-w-none rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2>What we collect</h2>
            <p>
              If you submit a form, we may collect your name, contact details
              and the message you send. If you provide an NDIS number, we treat
              it as sensitive information.
            </p>
            <h2>How we use it</h2>
            <p>
              We use the information to respond to enquiries, coordinate
              services and improve our communications.
            </p>
            <h2>Contact</h2>
            <p>
              For privacy questions, contact{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

