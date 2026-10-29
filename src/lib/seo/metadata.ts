import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataArgs {
  title?: string;
  description?: string;
  /** Path beginning with "/" — used for canonical + OG url. */
  path?: string;
  /** Override the OG image path. */
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex,
}: BuildMetadataArgs = {}): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const resolvedTitle = title
    ? siteConfig.seo.titleTemplate.replace("%s", title)
    : siteConfig.seo.defaultTitle;
  const resolvedDescription = description ?? siteConfig.seo.defaultDescription;
  const ogImage = image ?? siteConfig.seo.ogImage;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [ogImage],
    },
  };
}

/**
 * ProfessionalService structured data. HONESTY RULE: only emit fields that are
 * real. Address, phone, and ratings are omitted entirely when not configured —
 * we never fabricate them, and we never emit review/aggregateRating schema.
 */
export function organizationJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: ["IL", "Worldwide"],
    knowsAbout: [
      "AI automation",
      "AI agents",
      "Business process automation",
      "Systems integration",
      "Software engineering",
      "AI consulting",
    ],
  };
  if (siteConfig.contactEmail) data.email = siteConfig.contactEmail;
  if (siteConfig.phone) data.telephone = siteConfig.phone;
  if (siteConfig.social.linkedin) data.sameAs = [siteConfig.social.linkedin];
  return data;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
