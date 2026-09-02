import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { REMOTION_THEME } from "../theme";

interface EndCardCTAProps {
  delay?: number;
  lang?: "es" | "en";
  ctaText?: string;
  badgeText?: string;
  whatsappPhone?: string;
}

export const EndCardCTA: React.FC<EndCardCTAProps> = ({
  delay = 0,
  lang = "es",
  ctaText,
  badgeText,
  whatsappPhone = "+1 (829) 000-0000",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: REMOTION_THEME.springs.bouncy,
  });

  const buttonPulse = interpolate(
    Math.sin((frame - delay) / 5),
    [-1, 1],
    [1, 1.05]
  );

  const defaultCta =
    lang === "es"
      ? "Lanza Tu Web en 48 Horas 🚀"
      : "Launch Your Website in 48h 🚀";

  const defaultBadge =
    lang === "es"
      ? "PEDIR PRESUPUESTO GRATIS"
      : "GET FREE ESTIMATE SPEC";

  const ctaLabel = ctaText || defaultCta;
  const badgeLabel = badgeText || defaultBadge;

  return (
    <div
      style={{
        transform: `scale(${entrance}) translateY(${(1 - entrance) * 30}px)`,
        opacity: entrance,
        width: "100%",
        maxWidth: "680px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        zIndex: 20,
      }}
    >
      {/* Top Value Pill */}
      <div
        style={{
          backgroundColor: "rgba(14, 165, 233, 0.15)",
          border: `1px solid ${REMOTION_THEME.colors.coralBlue}`,
          padding: "8px 20px",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: REMOTION_THEME.colors.coralBlue,
            boxShadow: `0 0 10px ${REMOTION_THEME.colors.coralBlue}`,
          }}
        />
        <span
          style={{
            fontFamily: REMOTION_THEME.fonts.head,
            fontSize: "13px",
            fontWeight: 800,
            color: REMOTION_THEME.colors.coralBlue,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {badgeLabel}
        </span>
      </div>

      {/* Main Sun Yellow CTA Button */}
      <div
        style={{
          transform: `scale(${buttonPulse})`,
          backgroundColor: REMOTION_THEME.colors.sunYellow,
          borderRadius: "16px",
          padding: "22px 36px",
          boxShadow: "0 15px 35px rgba(255, 183, 3, 0.35), 0 0 20px rgba(255, 183, 3, 0.2)",
          cursor: "pointer",
          width: "100%",
          textAlign: "center",
          border: "2px solid #FFA500",
        }}
      >
        <span
          style={{
            fontFamily: REMOTION_THEME.fonts.head,
            fontSize: "24px",
            fontWeight: 900,
            color: REMOTION_THEME.colors.trenchNavy,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          {ctaLabel}
        </span>
      </div>

      {/* Trust & Guarantee points */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: REMOTION_THEME.colors.goodGreen, fontSize: "16px" }}>✓</span>
            <span
              style={{
                fontFamily: REMOTION_THEME.fonts.body,
                fontSize: "14px",
                color: "#E2E8F0",
                fontWeight: 600,
              }}
            >
              {lang === "es" ? "Carga en 0.3s" : "0.3s Load Speed"}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: REMOTION_THEME.colors.goodGreen, fontSize: "16px" }}>✓</span>
            <span
              style={{
                fontFamily: REMOTION_THEME.fonts.body,
                fontSize: "14px",
                color: "#E2E8F0",
                fontWeight: 600,
              }}
            >
              {lang === "es" ? "Botón a WhatsApp" : "Direct WhatsApp"}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: REMOTION_THEME.colors.goodGreen, fontSize: "16px" }}>✓</span>
            <span
              style={{
                fontFamily: REMOTION_THEME.fonts.body,
                fontSize: "14px",
                color: "#E2E8F0",
                fontWeight: 600,
              }}
            >
              {lang === "es" ? "Sin mensualidades" : "No hidden fees"}
            </span>
          </div>
        </div>

        {/* Action Prompt */}
        <p
          style={{
            fontFamily: REMOTION_THEME.fonts.head,
            fontSize: "15px",
            fontWeight: 800,
            color: REMOTION_THEME.colors.coralBlue,
            margin: "8px 0 0 0",
            textAlign: "center",
          }}
        >
          👉 {lang === "es" ? "Haz clic en el enlace del perfil o escribe por WhatsApp" : "Click link in bio or message via WhatsApp"}
        </p>
      </div>
    </div>
  );
};
