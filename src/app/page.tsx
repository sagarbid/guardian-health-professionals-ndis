import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import ContactCtaForm from "@/components/ContactCtaForm";
import { Icon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-50 via-white to-white">
        <Container className="py-14 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                NDIS-registered provider • Melbourne / Victoria
              </div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Guardian Health Professionals
                <span className="block bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">
                  Your Trusted NDIS Partner
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
                Family-owned disability support with 40+ years combined
                experience. We empower independence, dignity and choice through
                compassionate, reliable care.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Explore services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Talk to our team
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-2xl font-extrabold text-slate-900">
                    40+ years
                  </div>
                  <div className="mt-1 text-sm text-slate-700">
                    Combined experience across health and disability support.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-2xl font-extrabold text-slate-900">
                    100% satisfaction
                  </div>
                  <div className="mt-1 text-sm text-slate-700">
                    A commitment to respectful, participant-centred care.
                  </div>
                  <div className="mt-2 text-xs text-slate-500">
                    *Sample stat for demo; replace with verified figure.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-6">
              <div className="relative mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm">
                <Image
                  src="/photos/hero.jpg"
                  alt="A person using a wheelchair in a bright, accessible home setting"
                  width={1600}
                  height={1067}
                  className="h-56 w-full object-cover sm:h-72"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    Compassionate, participant-led support
                  </div>
                </div>
              </div>
              <ContactCtaForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-14">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Services"
              title="NDIS supports we deliver"
              description="Flexible supports aligned to your plan and goals — delivered with safety, respect and clear communication."
            />
            <Link
              href="/services"
              className="hidden sm:inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              View all
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Why choose us"
            title="Support that feels safe and empowering"
            description="We keep it simple: listen first, plan clearly, deliver consistently."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Participant-centred",
                body: "Your goals, routines and preferences guide every shift — with choice and control respected.",
              },
              {
                title: "Skilled, consistent team",
                body: "Experienced staff and a family-owned culture that values reliability and genuine care.",
              },
              {
                title: "Clear communication",
                body: "Transparent notes and a proactive approach to keeping everyone informed and supported.",
              },
            ].map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-emerald-50 p-2 text-emerald-700">
                    <Icon name="check" className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-slate-900">
                      {t.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {t.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Testimonials"
            title="What participants and families say"
            description="Sample testimonials for demo content — replace with real, consented feedback."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Participant (Melbourne VIC)",
                quote:
                  "They listened to my goals and helped me build routines that actually work for my day-to-day life.",
              },
              {
                name: "Family member",
                quote:
                  "Reliable, respectful and kind. Communication was clear and we felt genuinely supported.",
              },
              {
                name: "Support coordinator",
                quote:
                  "Professional team, quick to implement services, and focused on outcomes aligned to the plan.",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <blockquote className="text-sm leading-relaxed text-slate-800">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-slate-600">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-emerald-50 p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="text-lg font-extrabold tracking-tight text-slate-900">
                  Ready to get started?
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Tell us what support you’re looking for and we’ll respond
                  promptly. Based in {SITE.addressLine}, supporting Melbourne
                  and surrounds.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Contact us
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  View services
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
