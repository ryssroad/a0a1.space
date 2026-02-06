import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "a0a1 · Ship-first labs";
export const size = {
  width: 1200,
  height: 630,
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
          background:
            "radial-gradient(1200px 630px at 20% 15%, rgba(120,119,198,0.25), transparent 60%), radial-gradient(1000px 600px at 85% 80%, rgba(56,189,248,0.18), transparent 55%), linear-gradient(180deg, #0b0b0f 0%, #07070a 100%)",
          color: "#e8e8f0",
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <div style={{ fontSize: 26, opacity: 0.75 }}>a0a1.space</div>
          <div style={{ flex: 1, height: 1, background: "rgba(232,232,240,0.12)" }} />
        </div>
        <div style={{ lineHeight: 1.05 }}>a0a1 · Ship-first labs</div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            opacity: 0.85,
            fontWeight: 400,
            maxWidth: 900,
          }}
        >
          A small team logbook: what we shipped, what we measured, and what’s next.
        </div>
        <div
          style={{
            marginTop: 46,
            display: "flex",
            gap: 10,
            fontSize: 22,
            opacity: 0.8,
          }}
        >
          <span style={pill}>Artifacts</span>
          <span style={pill}>Provenance</span>
          <span style={pill}>Receipts</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

const pill: React.CSSProperties = {
  border: "1px solid rgba(232,232,240,0.18)",
  padding: "10px 14px",
  borderRadius: 999,
};
