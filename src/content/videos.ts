/**
 * "See it actually work" demo videos. Each entry renders a player when `src` is
 * set, otherwise a branded placeholder (never a broken embed). Drop an MP4 into
 * /public/videos and set `src` to go live — no code changes needed.
 *
 * `hook` is the funny/attention-grabbing cold-open line shown on the card.
 */
export interface DemoVideo {
  id: string;
  hook: string;
  title: string;
  description: string;
  /** e.g. "/videos/lead-routing.mp4" — null until filmed. */
  src: string | null;
  /** Optional poster image shown before play. */
  poster: string | null;
  /** Short duration label, e.g. "0:45". */
  duration?: string;
}

export const demoVideos: DemoVideo[] = [
  {
    id: "lead-routing",
    hook: "“I'll get to those leads later.” — Nobody, ever, on time.",
    title: "A new lead, handled before you finish your coffee",
    description:
      "Watch an inquiry get classified, logged in the CRM, routed to the right person, and a reply drafted — automatically, with a human approving the send.",
    src: null,
    poster: null,
    duration: "0:45",
  },
  {
    id: "invoice",
    hook: "POV: it's month-end and you're re-typing invoices again.",
    title: "Invoices that read themselves",
    description:
      "An invoice lands by email. The key fields are pulled out, checked, and dropped into your system — you just confirm.",
    src: null,
    poster: null,
    duration: "0:38",
  },
  {
    id: "reports",
    hook: "The weekly report that used to eat your Friday afternoon.",
    title: "Reports that build themselves",
    description:
      "Numbers get gathered from your tools, assembled into the same report every week, and delivered on schedule — no copy-paste.",
    src: null,
    poster: null,
    duration: "0:40",
  },
];
