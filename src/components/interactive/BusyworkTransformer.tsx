import { cn } from "@/lib/utils/cn";

/**
 * Signature hero visual: manual "busywork" tasks on the left are pulled through
 * the red UltronCore core and emerge as a clean, automated flow on the right.
 *
 * Pure SVG + CSS animation. Frozen under prefers-reduced-motion (globals.css),
 * and the static frame already reads as a complete before→after picture, so it
 * never looks broken. Labeled via role="img".
 */
const chaos = [
  { y: 30, w: 92, label: "Copy to CRM" },
  { y: 62, w: 110, label: "Chase follow-up" },
  { y: 94, w: 78, label: "Re-key invoice" },
  { y: 126, w: 104, label: "Send reminder" },
  { y: 158, w: 86, label: "Update sheet" },
];

const done = [
  { y: 52, label: "Logged" },
  { y: 94, label: "Routed" },
  { y: 136, label: "Replied" },
];

export function BusyworkTransformer({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 220"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-labelledby="bw-title bw-desc"
    >
      <title id="bw-title">Manual busywork transformed into automated results</title>
      <desc id="bw-desc">
        On the left, scattered manual tasks like copying data to a CRM, chasing follow-ups, and
        re-keying invoices. They flow through a central automation core and emerge on the right as
        completed, automated outcomes.
      </desc>

      <defs>
        <linearGradient id="bw-core" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff5a4d" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        <linearGradient id="bw-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e53935" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#e53935" stopOpacity="0.8" />
        </linearGradient>
        <filter id="bw-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* LEFT: chaotic manual tasks */}
      <g>
        {chaos.map((t, i) => (
          <g
            key={t.label}
            style={{
              transformOrigin: "60px center",
              animation: `bw-suck 5s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <rect
              x={14}
              y={t.y}
              width={t.w}
              height="20"
              rx="5"
              fill="#232833"
              stroke="rgba(188,195,208,0.35)"
              strokeWidth="1"
            />
            <circle cx={26} cy={t.y + 10} r="2.5" fill="#aeb4c0" />
            <text x={36} y={t.y + 14} fontSize="9.5" fill="#aeb4c0" fontFamily="sans-serif">
              {t.label}
            </text>
          </g>
        ))}
      </g>

      {/* flow lines into the core */}
      <g stroke="url(#bw-flow)" strokeWidth="1.5" fill="none">
        <path d="M150 100 C 200 60, 220 90, 248 105" strokeDasharray="3 6" style={{ animation: "dash-flow 1.6s linear infinite" }} />
        <path d="M150 110 C 200 120, 220 108, 248 110" strokeDasharray="3 6" style={{ animation: "dash-flow 1.6s linear infinite", animationDelay: "0.3s" }} />
      </g>

      {/* CENTER: the core */}
      <g style={{ transformOrigin: "260px 110px" }}>
        <circle cx="260" cy="110" r="38" fill="url(#bw-core)" opacity="0.25" filter="url(#bw-soft)" />
        <circle cx="260" cy="110" r="30" fill="#1b1f27" stroke="url(#bw-core)" strokeWidth="2" />
        <circle
          cx="260"
          cy="110"
          r="16"
          fill="url(#bw-core)"
          style={{ animation: "pulse-flow 2.4s ease-in-out infinite" }}
        />
        <circle cx="260" cy="110" r="6" fill="#14171d" />
        <text x="260" y="162" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f6f7f9" fontFamily="sans-serif">
          ULTRON CORE
        </text>
      </g>

      {/* flow lines out */}
      <g stroke="url(#bw-flow)" strokeWidth="1.5" fill="none" transform="translate(520,0) scale(-1,1)">
        <path d="M150 100 C 200 60, 220 90, 248 105" strokeDasharray="3 6" style={{ animation: "dash-flow 1.6s linear infinite" }} />
      </g>

      {/* RIGHT: clean automated results */}
      <g>
        {done.map((d, i) => (
          <g
            key={d.label}
            style={{ animation: `bw-emerge 5s ease-in-out infinite`, animationDelay: `${0.8 + i * 0.4}s` }}
          >
            <rect
              x={360}
              y={d.y}
              width="140"
              height="24"
              rx="6"
              fill="#232833"
              stroke="rgba(52,211,153,0.4)"
              strokeWidth="1"
            />
            <circle cx={376} cy={d.y + 12} r="6" fill="rgba(52,211,153,0.15)" />
            <path
              d={`M${372.5} ${d.y + 12} l2.3 2.3 l4.2 -4.6`}
              stroke="#6ee7b7"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x={390} y={d.y + 16} fontSize="10.5" fill="#f6f7f9" fontFamily="sans-serif" fontWeight="600">
              {d.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
