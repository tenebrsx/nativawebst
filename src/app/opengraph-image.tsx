import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

export const alt = "Nativa Studio — páginas web, SEO local, CRM y agentes IA en Santo Domingo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const mark = await readFile(join(process.cwd(), "public/brand/nati/mark.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;
  const H = 168; // mark height; gap 24%, clear space ≥25%

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f8fa",
          color: "#0b0d12",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: Math.round(H * 0.24) }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={H} height={H} alt="" />
          <div style={{ display: "flex", fontSize: 104, letterSpacing: "-0.03em" }}>
            <span style={{ fontWeight: 700 }}>nativa</span>
            <span style={{ fontWeight: 400, opacity: 0.55, marginLeft: 26 }}>studio</span>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 56, fontSize: 30, color: "#1e4fd7", fontWeight: 600 }}>
          Páginas web, Google Maps y WhatsApp · Santo Domingo
        </div>
      </div>
    ),
    { ...size },
  );
}
