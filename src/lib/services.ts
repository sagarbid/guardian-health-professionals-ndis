export type ServiceSlug =
  | "assist-personal-activities"
  | "assist-personal-activities-high"
  | "assist-life-stage-transition"
  | "assist-travel-transport"
  | "development-life-skills"
  | "household-tasks"
  | "community-nursing-care"
  | "daily-tasks-shared-living"
  | "participate-community"
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
    title: "Assist Personal Activities",
    short:
      "Personal care support delivered respectfully, helping you maintain dignity and independence.",
    icon: "heart",
    ndisCategoryLabel: "0107 Assist-Personal Activities",
  },
  {
    slug: "assist-personal-activities-high",
    title: "Assist Personal Activities (High)",
    short:
      "Higher intensity personal care supports delivered safely and respectfully, aligned to your plan and goals.",
    icon: "shield",
    ndisCategoryLabel: "0104 Assist Personal Activities High",
  },
  {
    slug: "assist-life-stage-transition",
    title: "Assist-Life Stage, Transition",
    short:
      "Support during life changes — planning, routines, and practical help to stay connected and on track.",
    icon: "spark",
    ndisCategoryLabel: "0106 Assist-Life Stage, Transition",
  },
  {
    slug: "assist-travel-transport",
    title: "Assist – Travel / Transport",
    short:
      "Safe, reliable support to get to appointments, community activities, work and social outings.",
    icon: "bus",
    ndisCategoryLabel: "0108 Assist-Travel/Transport",
  },
  {
    slug: "development-life-skills",
    title: "Development – Life Skills",
    short:
      "Build everyday skills for greater confidence at home and in the community.",
    icon: "spark",
    ndisCategoryLabel: "0117 Development-Life Skills",
  },
  {
    slug: "household-tasks",
    title: "Household Tasks",
    short:
      "Practical help with cleaning, laundry, meal prep and keeping your home safe and comfortable.",
    icon: "home",
    ndisCategoryLabel: "0120 Household Tasks",
  },
  {
    slug: "community-nursing-care",
    title: "Community Nursing Care",
    short:
      "Registered nurse support in the community, aligned to your goals and clinical needs.",
    icon: "shield",
    ndisCategoryLabel: "0114 Community Nursing Care",
  },
  {
    slug: "daily-tasks-shared-living",
    title: "Daily Tasks / Shared Living",
    short:
      "Support with day-to-day routines in shared or individual living arrangements.",
    icon: "people",
    ndisCategoryLabel: "0115 Daily Tasks/Shared Living",
  },
  {
    slug: "participate-community",
    title: "Participate Community",
    short:
      "Support to build confidence, connection and meaningful participation in your community.",
    icon: "people",
    ndisCategoryLabel: "0125 Participate Community",
  },
  {
    slug: "group-centre-activities",
    title: "Group / Centre Activities",
    short:
      "Skill-building and social participation programs designed to feel welcoming and inclusive.",
    icon: "people",
    ndisCategoryLabel: "0136 Group/Centre Activities",
  },
  {
    slug: "specialised-disability-accommodation",
    title: "Specialised Disability Accommodation (SDA)",
    short:
      "Support navigation and coordination for SDA needs with participant choice and control at the centre.",
    icon: "building",
    ndisCategoryLabel: "0131 Specialised Disability Accommodation",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
