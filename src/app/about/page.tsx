import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Guardian Health Professionals — a family-owned, NDIS-registered provider supporting participants across Melbourne and Victoria.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const values = [
    {
      title: "Dignity & respect",
      body: "Support is delivered with consent, privacy and a focus on participant choice and control.",
    },
    {
      title: "Safety & quality",
      body: "We follow NDIS Practice Standards and a culture of continuous improvement.",
    },
    {
      title: "Compassionate care",
      body: "We show up with empathy, patience and professional boundaries — every shift.",
    },
    {
      title: "Reliable communication",
      body: "Clear updates, transparent planning and respectful coordination with your support team.",
    },
  ];

  const timeline = [
    {
      year: "Foundation",
      title: "Family-owned beginnings",
      body: "Built on a commitment to compassionate care and community-first values.",
    },
    {
      year: "Experience",
      title: "40+ years combined",
      body: "A team with broad experience across health and disability support settings.",
    },
    {
      year: "Today",
      title: "NDIS-registered services",
      body: "Delivering flexible, goal-aligned supports to NDIS participants across Melbourne/Victoria.",
    },
  ];

  const team = [
    {
      name: "Leadership team",
      role: "Family-owned and participant-focused",
      body: "Experienced leaders who keep quality, safety and communication at the centre of service delivery.",
    },
    {
      name: "Support workers",
      role: "Respectful, reliable, skilled",
      body: "A team that values consistency, routines and support that feels empowering (not rushed).",
    },
    {
      name: "Nursing support",
      role: "Clinical care in the community",
      body: "Registered nurse support where clinically appropriate and aligned to participant goals.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="About us"
                title="A family-owned NDIS provider built on trust"
                description="We support NDIS participants with practical, compassionate care — empowering independence, dignity and choice."
              />
              <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-sm font-extrabold text-slate-900">
                    Our mission
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Empower independence and dignity through compassionate support
                    that is safe, reliable and aligned to the participant’s goals.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-sm font-extrabold text-slate-900">
                    Our approach
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Listen first, plan clearly, deliver consistently — and keep
                    communication simple and respectful.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-sm font-extrabold text-slate-900">
                    Based in
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {SITE.addressLine}. Supporting Melbourne and surrounding areas
                    across Victoria.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/illustrations/about-team.svg"
                alt="Friendly team and community illustration"
                width={1200}
                height={700}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <SectionHeading
            eyebrow="Values"
            title="What we stand for"
            description="Our values guide how we communicate, support participants and collaborate with families and support teams."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="text-base font-semibold text-slate-900">
                  {v.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Team"
            title="People behind the support"
            description="We build a culture where participants feel safe, listened to, and supported by consistent staff."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {team.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-base font-semibold text-slate-900">
                  {t.name}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  {t.role}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Timeline"
            title="Our story so far"
            description="A simple overview — edit this timeline in code or move it into MDX as your story grows."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {timeline.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="text-xs font-bold uppercase tracking-wide text-slate-600">
                  {t.year}
                </div>
                <div className="mt-2 text-base font-semibold text-slate-900">
                  {t.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
