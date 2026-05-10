"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import Container from "@/components/Container";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function SiteNav() {
  const pathname = usePathname();
  const menuId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label={`${SITE.shortName} home`}
          >
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image
                  src="/brand/logo-mark-96.png"
                  alt=""
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="leading-tight">
              <div className="hidden sm:block">
                <Image
                  src="/brand/logo-wordmark.png"
                  alt={SITE.shortName}
                  width={520}
                  height={140}
                  className="h-6 w-auto"
                  priority
                />
              </div>
              <div className="sm:hidden text-sm font-semibold text-slate-900">
                {SITE.shortName}
              </div>
              <div className="text-xs text-slate-600">
                NDIS & SDA registered • #{SITE.ndisRegistrationNumber}
              </div>
            </div>
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
                        active
                          ? "bg-blue-50 text-blue-800"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Get support
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 md:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </div>

        <div
          id={menuId}
          className={cn("md:hidden", open ? "block" : "hidden")}
        >
          <div className="mt-3 grid gap-2 rounded-xl border border-slate-200 bg-white p-2">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
                    active
                      ? "bg-blue-50 text-blue-800"
                      : "text-slate-800 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Get support
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
