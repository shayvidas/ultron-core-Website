import type { IconName } from "@/types";

interface AudienceCard {
  title: string;
  body: string;
  href: string;
  icon: IconName;
}

/** Homepage "Who We Help" — links to the relevant solution pages. */
export const audienceCards: AudienceCard[] = [
  {
    title: "Small & Growing Businesses",
    body: "Reduce the repetitive work that slows down your day.",
    href: "/solutions/small-business",
    icon: "automation",
  },
  {
    title: "Engineering Teams",
    body: "Improve development workflows and introduce AI with control.",
    href: "/solutions/engineering-teams",
    icon: "engineering",
  },
  {
    title: "Established Organizations",
    body: "Connect existing systems and turn AI ideas into practical solutions.",
    href: "/solutions/customer-operations",
    icon: "integrations",
  },
];
