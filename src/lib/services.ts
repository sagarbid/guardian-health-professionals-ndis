export type ServiceSlug =
  | "assist-personal-activities"
  | "assist-travel-transport"
  | "development-life-skills"
  | "household-tasks"
  | "community-nursing-care"
  | "daily-tasks-shared-living"
  | "group-centre-activities"
  | "specialised-disability-accommodation";

export type Service = {
  slug: ServiceSlug;
  title: string;
  short: string;
  icon: "shield" | "heart" | "home" | "bus" | "spark" | "people" | "building";
  ndisCategoryLabel: string;
};

export const SERVICES: Service[] = [
  {
    slug: "assist-personal-activities",
    title: "Assist Personal Activities (High/Low)",
    short:
      "Personal care support delivered respectfully, helping you maintain dignity and independence.",
    icon: "heart",
    ndisCategoryLabel: "Assist Personal Activities High/Low",
  },
  {
    slug: "assist-travel-transport",
    title: "Assist – Travel / Transport",
    short:
      "Safe, reliable support to get to appointments, community activities, work and social outings.",
    icon: "bus",
    ndisCategoryLabel: "Assist-Travel/Transport",
  },
  {
    slug: "development-life-skills",
    title: "Development – Life Skills",
    short:
      "Build everyday skills for greater confidence at home and in the community.",
    icon: "spark",
    ndisCategoryLabel: "Development-Life Skills",
  },
  {
    slug: "household-tasks",
    title: "Household Tasks",
    short:
      "Practical help with cleaning, laundry, meal prep and keeping your home safe and comfortable.",
    icon: "home",
    ndisCategoryLabel: "Household Tasks",
  },
  {
    slug: "community-nursing-care",
    title: "Community Nursing Care",
    short:
      "Registered nurse support in the community, aligned to your goals and clinical needs.",
    icon: "shield",
    ndisCategoryLabel: "Community Nursing Care",
  },
  {
    slug: "daily-tasks-shared-living",
    title: "Daily Tasks / Shared Living",
    short:
      "Support with day-to-day routines in shared or individual living arrangements.",
    icon: "people",
    ndisCategoryLabel: "Daily Tasks/Shared Living",
  },
  {
    slug: "group-centre-activities",
    title: "Group / Centre Activities",
    short:
      "Skill-building and social participation programs designed to feel welcoming and inclusive.",
    icon: "people",
    ndisCategoryLabel: "Group/Centre Activities",
  },
  {
    slug: "specialised-disability-accommodation",
    title: "Specialised Disability Accommodation (SDA)",
    short:
      "Support navigation and coordination for SDA needs with participant choice and control at the centre.",
    icon: "building",
    ndisCategoryLabel: "Specialised Disability Accommodation",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

