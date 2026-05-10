import {
  Camera,
  Code,
  Globe,
  Mail,
  MapPin,
  Palette,
  Phone,
  Users,
} from "lucide-react";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { NdisRegisteredBadge } from "@/components/ui/ndis-registered-badge";

const data = {
  facebookLink: "https://facebook.com/",
  instaLink: "https://instagram.com/",
  twitterLink: "https://twitter.com/",
  githubLink: "https://github.com/",
  dribbbleLink: "https://dribbble.com/",
  services: {
    webdev: "/services/assist-personal-activities",
    webdesign: "/services/development-life-skills",
    marketing: "/services/participate-community",
    googleads: "/services/community-nursing-care",
  },
  about: {
    history: "/about",
    team: "/about",
    handbook: "/services",
    careers: "/contact",
  },
  help: {
    faqs: "/blog",
    support: "/contact",
    livechat: "/contact",
  },
  contact: {
    email: SITE.email,
    phone: SITE.phone,
    address: SITE.addressLine,
  },
  company: {
    name: SITE.shortName,
    description:
      "NDIS & SDA registered disability support across Melbourne and Victoria. We focus on respectful, participant-led support that promotes independence, dignity, and community connection.",
    logo: "/brand/logo-mark-128.png",
  },
};

const socialLinks = [
  { icon: Users, label: "Facebook", href: data.facebookLink },
  { icon: Camera, label: "Instagram", href: data.instaLink },
  { icon: Globe, label: "Twitter", href: data.twitterLink },
  { icon: Code, label: "GitHub", href: data.githubLink },
  { icon: Palette, label: "Dribbble", href: data.dribbbleLink },
];

const aboutLinks = [
  { text: "About Guardian", href: data.about.history },
  { text: "Our values", href: data.about.team },
  { text: "Services", href: data.about.handbook },
  { text: "Contact", href: data.about.careers },
];

const serviceLinks = [
  { text: "Personal activities", href: data.services.webdev },
  { text: "Life skills", href: data.services.webdesign },
  { text: "Community participation", href: data.services.marketing },
  { text: "Community nursing", href: data.services.googleads },
];

const helpfulLinks = [
  { text: "NDIS guides", href: data.help.faqs },
  { text: "Support", href: data.help.support },
  { text: "Enquiry", href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.company.logo || "/placeholder.svg"}
                alt="logo"
                className="h-8 w-8 rounded-full bg-white/90 p-1"
              />
              <span className="text-2xl font-semibold">{data.company.name}</span>
            </div>

            <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? "group flex justify-center gap-1.5 sm:justify-start"
                          : "text-secondary-foreground/70 transition"
                      }`}
                    >
                      <span className="text-secondary-foreground/70 transition">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-primary relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <Icon className="text-primary size-5 shrink-0 shadow-sm" />
                      {isAddress ? (
                        <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                          {text}
                        </address>
                      ) : (
                        <span className="text-secondary-foreground/70 flex-1 transition">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              <NdisRegisteredBadge className="mt-6" compact />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
