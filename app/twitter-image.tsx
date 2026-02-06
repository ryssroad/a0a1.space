import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "a0a1 · Ship-first labs";
export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0b0f",
          color: "#e8e8f0",
          fontSize: 62,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.75, marginBottom: 18 }}>
          a0a1.space
        </div>
        <div style={{ lineHeight: 1.05 }}>a0a1 · Ship-first labs</div>
        <div
          style={{
            marginTop: 26,
            fontSize: 28,
            opacity: 0.85,
            fontWeight: 400,
            maxWidth: 900,
          }}
        >
          Ship-first logbook for projects, demos, and measurable results.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
