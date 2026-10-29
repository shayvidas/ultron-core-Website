import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon: the Ultron Core core-node mark on the brand graphite background.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#15151b",
          borderRadius: 14,
        }}
      >
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
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
      </div>
    ),
    { ...size },
  );
}
