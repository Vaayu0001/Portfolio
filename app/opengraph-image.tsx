import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#f7f8f4",
        color: "#151712",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div style={{ color: "#0f766e", fontSize: 30, fontWeight: 700 }}>Portfolio</div>
        <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1 }}>
          {profile.fullName}
        </div>
        <div style={{ color: "#5f675c", fontSize: 36, maxWidth: 850 }}>
          Software projects across algorithms, collaborative tools, and DBMS.
        </div>
      </div>
    </div>,
    size,
  );
}
