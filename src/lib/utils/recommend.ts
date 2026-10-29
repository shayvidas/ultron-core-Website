import type { RecommendationOption } from "@/types";

/**
 * Fixed decision rules mapping "what would you most like to improve?" to a
 * recommended service. No AI backend, no personal data — a static lookup.
 */
export const recommendationOptions: RecommendationOption[] = [
  { id: "repetitive", label: "Reduce repetitive work", serviceSlug: "business-automation" },
  { id: "communication", label: "Improve customer communication", serviceSlug: "ai-agents" },
  { id: "engineering", label: "Introduce AI into engineering", serviceSlug: "ai-engineering" },
  { id: "connect", label: "Connect disconnected tools", serviceSlug: "integrations" },
  { id: "website", label: "Launch or improve a website", serviceSlug: "web-development" },
  { id: "software", label: "Build custom software", serviceSlug: "custom-software" },
  { id: "explore", label: "Explore possibilities", serviceSlug: "ai-consulting" },
];

export function recommendService(optionId: string): string | null {
  return recommendationOptions.find((o) => o.id === optionId)?.serviceSlug ?? null;
}
