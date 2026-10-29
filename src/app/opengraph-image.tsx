import { ImageResponse } from "next/og";

export const alt = "Ultron Core — AI Automation & Software Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #14171d 0%, #1b1f27 55%, #232833 100%)",
          color: "#F7F8FA",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
          <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
            <path d="M14 16 L22 16 L22 44 L28 50 L18 50 L14 44 Z" fill="#e8e8ea" />
            <path
              d="M36 13 A20 20 0 1 0 36 51"
              fill="none"
              stroke="#8a8d95"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <circle cx="32" cy="32" r="7" fill="#e53935" />
            <circle cx="32" cy="32" r="2.8" fill="#15151b" />
          </svg>
          <span style={{ fontSize: 34, fontWeight: 700 }}>
            Ultron<span style={{ color: "#e53935" }}>Core</span>
          </span>
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 940 }}>
          AI That Works for Your Business.
        </div>
        <div style={{ fontSize: 30, color: "#aeb4c0", marginTop: 28, maxWidth: 900 }}>
          AI automation, systems integration, and software engineering — designed around how your
          business actually works.
        </div>
      </div>
    ),
    { ...size },
  );
}
