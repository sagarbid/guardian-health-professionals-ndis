export const SITE = {
  name: "Guardian Health Professionals – Your Trusted NDIS Partner",
  shortName: "Guardian Health Professionals",
  legalName: "Guardian Health Professionals Pty Ltd",
  abn: "46 637 290 110",
  addressLine: "Wollert VIC 3750",
  country: "Australia",
  email: "info@guardianhealthprofessionals.com.au",
  phone: "1300 000 000",
  hours: "Mon–Fri 9:00am–5:00pm (AEST/AEDT)",
  serviceAreas: ["Melbourne", "Northern suburbs", "Victoria"],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

