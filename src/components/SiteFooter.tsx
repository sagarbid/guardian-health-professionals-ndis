import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-base font-semibold text-slate-900">
              {SITE.shortName}
            </div>
            <p className="text-sm text-slate-700">
              Family-owned Australian disability support with 40+ years combined
              experience. Supporting NDIS participants with dignity, safety and
              compassionate care.
            </p>
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-slate-900">ABN:</span>{" "}
              {SITE.abn}
              <br />
              <span className="font-semibold text-slate-900">Location:</span>{" "}
              {SITE.addressLine}
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-slate-900">Explore</div>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    className="text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                    href={l.href}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-xs text-slate-600">
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
              >
                Privacy
              </Link>{" "}
              •{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
              >
                Terms
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-slate-900">
              Contact
            </div>
            <div className="text-sm text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Phone:</span>{" "}
                <a
                  href={`tel:${SITE.phone.replaceAll(" ", "")}`}
                  className="underline underline-offset-4 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="underline underline-offset-4 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="mt-2 text-xs text-slate-600">
                {SITE.hours}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="text-xs font-semibold text-slate-900">
                NDIS registered provider
              </div>
              <div className="mt-2">
                <Image
                  src="/ndis-mark.svg"
                  alt="NDIS registered provider (placeholder mark)"
                  width={260}
                  height={72}
                  className="h-10 w-auto"
                />
              </div>
              <div className="mt-1 text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Note:</span>{" "}
                NDIS logo is used for identification only and does not imply
                endorsement.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </div>
          <div>Melbourne • Victoria • Australia</div>
        </div>
      </Container>
    </footer>
  );
}
