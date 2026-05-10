import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { SITE } from "@/lib/site";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b5fff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guardianhealthprofessionals.com.au"),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "NDIS-registered disability support in Melbourne (Wollert, VIC). Compassionate care supporting independence, dignity, and daily living.",
  applicationName: SITE.shortName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    title: SITE.name,
    description:
      "Your trusted NDIS partner in Melbourne/Victoria — personal care, nursing, community access, life skills, SDA and more.",
    url: "/",
    siteName: SITE.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description:
      "NDIS-registered disability support in Melbourne (Wollert, VIC).",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    url: "https://www.guardianhealthprofessionals.com.au",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wollert",
      addressRegion: "VIC",
      postalCode: "3750",
      addressCountry: "AU",
    },
    areaServed: SITE.serviceAreas,
    email: SITE.email,
    telephone: SITE.phone,
  };

  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900 flex flex-col">
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
