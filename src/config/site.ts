/**
 * Ultron Core — single source of truth for business configuration.
 *
 * HONESTY RULE: Fields that are not yet confirmed are `null`. The UI hides any
 * null field (phone, address, LinkedIn, booking, etc.) rather than rendering a
 * placeholder. Do not invent values here.
 */

export interface SocialLinks {
  linkedin: string | null;
}

export interface SeoDefaults {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  ogImage: string;
}

export interface SiteConfig {
  name: string;
  wordmark: string;
  tagline: string;
  taglineSecondary: string;
  supportingStatement: string;
  description: string;
  /** Canonical base URL. Overridable via NEXT_PUBLIC_SITE_URL. No trailing slash. */
  url: string;
  /** Real destination email — null until founders confirm one. */
  contactEmail: string | null;
  /** null => hidden. */
  phone: string | null;
  /** null => hidden; do NOT invent an address. */
  address: string | null;
  social: SocialLinks;
  /** Confirmed booking URL — null => "Book a Free Intro Call" routes to /contact. */
  bookingUrl: string | null;
  seo: SeoDefaults;
  flags: {
    analyticsEnabled: boolean;
    bookingEnabled: boolean;
  };
}

const url = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ultroncore.example").replace(/\/$/, "");
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || null;

export const siteConfig: SiteConfig = {
  name: "Ultron Core",
  wordmark: "ULTRON CORE",
  tagline: "AI That Works for Your Business.",
  taglineSecondary: "From AI Potential to Real Business Results.",
  supportingStatement:
    "AI agents, intelligent automation, systems integration, and software engineering — designed around how your business actually works.",
  description:
    "Ultron Core is a founder-led AI automation and software engineering consultancy. We help businesses adopt practical AI, automate repetitive work, connect existing systems, and build better digital experiences.",
  url,

  // --- Founder-supplied business details (null => hidden on the site) ---
  contactEmail: null,
  phone: null,
  address: null,
  social: {
    linkedin: null,
  },
  bookingUrl,

  seo: {
    defaultTitle: "Ultron Core — AI Automation & Software Engineering",
    titleTemplate: "%s · Ultron Core",
    defaultDescription:
      "Practical AI, automation, systems integration, and software engineering for businesses that want real results. Founder-led, hands-on implementation.",
    ogImage: "/opengraph-image",
  },

  flags: {
    analyticsEnabled: Boolean(process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN),
    bookingEnabled: Boolean(bookingUrl),
  },
};

/** Where the primary "Book a Free Intro Call" CTA should point. */
export const bookingHref = siteConfig.bookingUrl ?? "/contact";

export const nav = {
  main: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/solutions", label: "Solutions" },
    { href: "/work", label: "Our Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  primaryCta: { href: bookingHref, label: "Book a Free Intro Call" },
} as const;
