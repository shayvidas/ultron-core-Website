import type { IconName } from "@/types";

/**
 * Original, hand-authored line icons for Ultron Core services.
 * Decorative by default (aria-hidden); pass a `title` to make them labeled.
 */
const paths: Record<IconName, React.ReactNode> = {
  agents: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M12 11.2v3.1" />
      <rect x="6.5" y="14.3" width="11" height="5.5" rx="1.6" />
      <path d="M9.3 17h.01M14.7 17h.01" />
      <path d="M6.5 16.5H4.2M17.5 16.5h2.3" />
    </>
  ),
  automation: (
    <>
      <path d="M12 4.2v2.3M12 17.5v2.3M4.2 12h2.3M17.5 12h2.3" />
      <path d="M6.7 6.7l1.6 1.6M15.7 15.7l1.6 1.6M17.3 6.7l-1.6 1.6M8.3 15.7l-1.6 1.6" />
      <circle cx="12" cy="12" r="3.3" />
    </>
  ),
  engineering: (
    <>
      <path d="M8.5 7.5 4.5 12l4 4.5" />
      <path d="M15.5 7.5 19.5 12l-4 4.5" />
      <path d="M13.3 5.5 10.7 18.5" />
    </>
  ),
  integrations: (
    <>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M7.4 7.6 10.6 16.4M16.6 7.6 13.4 16.4M8.2 6h7.6" />
    </>
  ),
  web: (
    <>
      <rect x="3.5" y="5" width="17" height="12.5" rx="1.8" />
      <path d="M3.5 9h17" />
      <path d="M6.2 7h.01M8.2 7h.01M10.2 7h.01" />
      <path d="M9 20h6" />
    </>
  ),
  software: (
    <>
      <rect x="4" y="4.5" width="16" height="15" rx="2" />
      <path d="M8 9.5 10.3 12 8 14.5" />
      <path d="M12.8 14.5H16" />
    </>
  ),
  consulting: (
    <>
      <path d="M12 4.5a5.3 5.3 0 0 0-3.2 9.5c.5.4.8 1 .8 1.6v.4h4.8v-.4c0-.6.3-1.2.8-1.6A5.3 5.3 0 0 0 12 4.5Z" />
      <path d="M9.6 18.5h4.8M10.4 20.3h3.2" />
    </>
  ),
  rescue: (
    <>
      <path d="M12 3.8 5 6.8v4.6c0 3.9 2.8 6.9 7 8.8 4.2-1.9 7-4.9 7-8.8V6.8l-7-3Z" />
      <path d="M9.3 12.2l1.9 1.9 3.6-3.9" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className = "h-6 w-6",
  title,
}: {
  name: IconName;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
