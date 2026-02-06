import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

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
          background: "#0b0b0f",
          color: "#e8e8f0",
          fontSize: 36,
          fontWeight: 800,
          borderRadius: 14,
          border: "1px solid rgba(232,232,240,0.18)",
        }}
      >
        a0
      </div>
    ),
    {
      ...size,
    }
  );
}
