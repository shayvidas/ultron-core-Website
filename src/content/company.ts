import type { Founder } from "@/types";

export const mission =
  "Make modern AI and software engineering practical, accessible, and valuable for businesses of all sizes.";

export const philosophy = "Start with the problem. Build what matters. Keep it maintainable.";

export const values: { title: string; body: string }[] = [
  { title: "Practicality", body: "We solve the real problem, not the trend." },
  { title: "Engineering quality", body: "Maintainable, tested, documented work." },
  { title: "Transparency", body: "Clear scope, honest trade-offs, direct communication." },
  { title: "Security awareness", body: "Sensible defaults for access, secrets, and data." },
  { title: "Continuous improvement", body: "We measure, learn, and refine." },
  { title: "Client ownership", body: "You own the work and the knowledge to run it." },
];

/**
 * Founder profiles. HONESTY RULE: do not invent names, titles, credentials, or
 * history. `bio: null` renders a clearly-marked "pending" treatment. `portrait:
 * null` renders a typographic profile instead of a fake photo.
 */
export const founders: Founder[] = [
  {
    // Faisal leads the business — listed first (the face of the company).
    name: "Faisal Islam",
    title: "Co-Founder & Head of Business Operations",
    initials: "FI",
    portrait: null,
    linkedin: null,
    bio: "Faisal leads business operations, client relationships, and delivery at Ultron Core. He brings over a decade of engineering and QA leadership across healthcare technology, media, and security — building and scaling engineering and quality organizations for platforms used at large scale. At Ultron Core he focuses on understanding each client's business, defining scope, and making sure delivery lands.",
  },
  {
    name: "Shay Albert Vidas",
    title: "Co-Founder & Head of Engineering",
    initials: "SV",
    portrait: null,
    linkedin: null,
    bio: "Shay leads technical strategy, architecture, and delivery at Ultron Core. He is a software engineer and technical leader with extensive experience in mobile development, software architecture, and engineering workflows, including AI-assisted development and systems integration. At Ultron Core he owns engineering quality — from architecture and code review through testing, CI/CD, and release readiness.",
  },
];

/**
 * Founder career background — companies Faisal and/or Shay worked at over their
 * careers. HONESTY: these are PRIOR EMPLOYERS (experience), NOT Ultron Core
 * clients. Copy that uses this must say "our founders worked at / led
 * engineering at", never "Ultron Core delivered for". Descriptions are factual
 * summaries of what each company does.
 */
export interface ExperienceCompany {
  name: string;
  sector: string;
  blurb: string;
}

export const experienceCompanies: ExperienceCompany[] = [
  {
    name: "Amwell",
    sector: "Telehealth",
    blurb: "A US telehealth platform connecting patients and clinicians over secure video at scale.",
  },
  {
    name: "Avizia",
    sector: "Telehealth",
    blurb: "Acute-care telemedicine platform for hospitals and health systems (acquired by Amwell).",
  },
  {
    name: "Radwin",
    sector: "Wireless broadband",
    blurb: "Global provider of high-performance wireless broadband and fixed-wireless solutions.",
  },
  {
    name: "Intersections Inc.",
    sector: "Identity & security",
    blurb: "Identity-protection and credit-monitoring services (the Identity Guard product).",
  },
  {
    name: "Gannett / USA Today",
    sector: "Media",
    blurb: "The largest US newspaper publisher and the USA Today national news network.",
  },
  {
    name: "Mars Interactive",
    sector: "Interactive media",
    blurb: "Interactive media and digital product work.",
  },
  {
    name: "Ananey Communications",
    sector: "Media & broadcast",
    blurb: "Media and communications group.",
  },
  {
    name: "TG-17",
    sector: "Technology",
    blurb: "Technology product and engineering work.",
  },
];

/**
 * Intro line for the experience section — truthful framing. Edit freely.
 * Keep it as founder experience; do not imply these are Ultron Core clients.
 */
export const experienceIntro =
  "Before founding Ultron Core, Faisal and Shay spent over a decade building, leading, and automating engineering across telehealth, media, networking, and security — leading AI and engineering work on platforms used by large numbers of people. Ultron Core brings that same discipline to practical AI and automation.";
