import { cn } from "@/lib/utils/cn";

interface NodeDef {
  id: string;
  label: string;
  x: number;
  y: number;
}

/**
 * Original systems-integration visualization: business systems as nodes
 * orbiting a central automation hub, with illuminated connection paths.
 *
 * Pure SVG. Animation is CSS-only and is frozen under prefers-reduced-motion
 * (handled globally in globals.css). The static render is complete on its own,
 * so it looks finished even if animation never runs. Labeled via role="img".
 */
const HUB = { x: 260, y: 170 };

const nodes: NodeDef[] = [
  { id: "crm", label: "CRM", x: 70, y: 70 },
  { id: "email", label: "Email", x: 260, y: 48 },
  { id: "calendar", label: "Calendar", x: 450, y: 70 },
  { id: "docs", label: "Documents", x: 500, y: 190 },
  { id: "analytics", label: "Analytics", x: 450, y: 300 },
  { id: "support", label: "Support", x: 70, y: 300 },
  { id: "api", label: "Internal APIs", x: 20, y: 190 },
];

export function SystemsDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 360"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-labelledby="systems-diagram-title systems-diagram-desc"
    >
      <title id="systems-diagram-title">Connected business systems around an automation hub</title>
      <desc id="systems-diagram-desc">
        A central automation hub connected to seven business systems — CRM, Email, Calendar,
        Documents, Analytics, Customer Support, and Internal APIs — with information flowing along
        the connecting paths.
      </desc>

      <defs>
        <radialGradient id="hub-fill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff5a4d" />
          <stop offset="70%" stopColor="#b91c1c" />
          <stop offset="100%" stopColor="#1b1f27" />
        </radialGradient>
        <linearGradient id="link-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e53935" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#e53935" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* connection paths */}
      <g fill="none" stroke="url(#link-grad)" strokeWidth="1.5">
        {nodes.map((n, i) => (
          <line
            key={n.id}
            x1={HUB.x}
            y1={HUB.y}
            x2={n.x}
            y2={n.y}
            strokeDasharray="4 8"
            style={{ animation: `dash-flow 2.4s linear infinite`, animationDelay: `${i * 0.25}s` }}
          />
        ))}
      </g>

      {/* flowing pulse dots along each link */}
      <g>
        {nodes.map((n, i) => (
          <circle
            key={`pulse-${n.id}`}
            r="2.4"
            fill="#ff5a4d"
            style={{ animation: `pulse-flow 2.8s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}
          >
            <animateMotion
              dur="2.8s"
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
              path={`M${HUB.x},${HUB.y} L${n.x},${n.y}`}
            />
          </circle>
        ))}
      </g>

      {/* outer system nodes */}
      {nodes.map((n) => (
        <g key={`node-${n.id}`}>
          <rect
            x={n.x - 44}
            y={n.y - 15}
            width="88"
            height="30"
            rx="8"
            fill="#232833"
            stroke="rgba(188,195,208,0.28)"
            strokeWidth="1"
          />
          <circle cx={n.x - 30} cy={n.y} r="3" fill="#e53935" />
          <text
            x={n.x + 2}
            y={n.y + 4}
            textAnchor="middle"
            fontSize="11"
            fill="#aeb4c0"
            fontFamily="sans-serif"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* central hub */}
      <circle cx={HUB.x} cy={HUB.y} r="42" fill="#1b1f27" stroke="rgba(229,57,53,0.35)" strokeWidth="1.5" />
      <circle
        cx={HUB.x}
        cy={HUB.y}
        r="30"
        fill="url(#hub-fill)"
        style={{ animation: "pulse-flow 3.5s ease-in-out infinite" }}
      />
      <circle cx={HUB.x} cy={HUB.y} r="12" fill="#14171d" />
      <text
        x={HUB.x}
        y={HUB.y + 4}
        textAnchor="middle"
        fontSize="10"
        fill="#F6F7F9"
        fontFamily="sans-serif"
        fontWeight="600"
      >
        HUB
      </text>
    </svg>
  );
}
