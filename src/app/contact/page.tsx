import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactCtaForm from "@/components/ContactCtaForm";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Guardian Health Professionals in Wollert, VIC. Enquire about NDIS supports, availability and service areas across Melbourne/Victoria.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Contact"
        title="Talk to our team"
        description="Tell us what you need support with and we’ll respond promptly."
        imageSrc="/illustrations/contact.webp"
        imageAlt="Uplifting illustration for contact and support"
      />

      <section>
        <Container className="py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-extrabold text-slate-900">
                  Contact details
                </div>
                <div className="mt-3 grid gap-2 text-sm text-slate-700">
                  <div>
                    <span className="font-semibold text-slate-900">Phone:</span>{" "}
                    <a
                      className="underline underline-offset-4"
                      href={`tel:${SITE.phone.replaceAll(" ", "")}`}
                    >
                      {SITE.phone}
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Email:</span>{" "}
                    <a
                      className="underline underline-offset-4"
                      href={`mailto:${SITE.email}`}
                    >
                      {SITE.email}
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Hours:</span>{" "}
                    {SITE.hours}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Address:</span>{" "}
                    {SITE.addressLine}
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-600">
                  If you or someone else is in immediate danger, call 000.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="px-5 pt-5">
                  <div className="text-sm font-extrabold text-slate-900">
                    Map (Wollert VIC)
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    Approximate location shown for privacy. Confirm address when
                    booking.
                  </p>
                </div>
                <div className="mt-4 aspect-[16/9] w-full">
                  <iframe
                    title="Wollert VIC map"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Wollert%20VIC%203750&output=embed"
                  />
                </div>
              </div>
            </div>

            <div>
              <ContactCtaForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
