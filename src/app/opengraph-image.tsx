import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "Nativa Web Studio — sitios web, SEO local, CRM y agentes IA en Santo Domingo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a1128",
          color: "#faf7f2",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(14,165,233,0.18)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 160,
            bottom: -120,
            width: 360,
            height: 360,
            borderRadius: 999,
            background: "rgba(255,183,3,0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#0ea5e9",
            }}
          >
            Nativa Web Studio
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                maxWidth: 900,
              }}
            >
              Sitios web que cierran por WhatsApp
            </div>
            <div
              style={{
                fontSize: 28,
                color: "rgba(250,247,242,0.78)",
                maxWidth: 820,
                lineHeight: 1.35,
              }}
            >
              SEO local · CRM personal · Agentes IA · Santo Domingo, RD
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 22,
              color: "rgba(250,247,242,0.55)",
            }}
          >
            <span>nativa.studio</span>
            <span>Hecho en República Dominicana</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
