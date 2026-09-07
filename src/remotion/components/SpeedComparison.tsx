import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { REMOTION_THEME } from "../theme";

interface SpeedComparisonProps {
  delay?: number;
  oldSeconds?: number;
  nativaSeconds?: number;
  lang?: "es" | "en";
}

export const SpeedComparison: React.FC<SpeedComparisonProps> = ({
  delay = 15,
  oldSeconds = 5.2,
  nativaSeconds = 0.3,
  lang = "es",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: REMOTION_THEME.springs.smooth,
  });

  // Relative timer progression (30fps = 1 sec)
  const relativeFrame = Math.max(0, frame - delay);
  
  // Nativa loads in ~9 frames (0.3s)
  const nativaProgress = Math.min(1, relativeFrame / 9);
  const nativaCurrentTime = (nativaProgress * nativaSeconds).toFixed(1);

  // Old web loads over ~90 frames (3.0s simulated)
  const oldProgress = Math.min(1, relativeFrame / 75);
  const oldCurrentTime = (oldProgress * oldSeconds).toFixed(1);

  // Score badge pulse
  const scoreEntrance = spring({
    frame: frame - delay - 14,
    fps,
    config: REMOTION_THEME.springs.bouncy,
  });

  const leadPing = Math.sin((frame - delay) / 4) > 0 ? 1 : 0.8;

  return (
    <div
      style={{
        transform: `scale(${entrance}) translateY(${(1 - entrance) * 30}px)`,
        opacity: entrance,
        width: "100%",
        maxWidth: "680px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        zIndex: 10,
      }}
    >
      {/* Container Box */}
      <div
        style={{
          backgroundColor: "rgba(28, 37, 65, 0.7)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "24px",
          padding: "28px 24px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}
      >
        {/* Old Web Card */}
        <div
          style={{
            backgroundColor: "rgba(239, 68, 68, 0.08)",
            border: "1px solid rgba(239, 68, 68, 0.25)",
            borderRadius: "16px",
            padding: "20px 16px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "13px",
              fontWeight: 800,
              color: REMOTION_THEME.colors.badRed,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {lang === "es" ? "Web Tradicional" : "Legacy Website"}
          </span>

          <div
            style={{
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "44px",
              fontWeight: 900,
              color: REMOTION_THEME.colors.badRed,
              lineHeight: 1,
            }}
          >
            {oldCurrentTime}s
          </div>

          <div
            style={{
              width: "100%",
              height: "8px",
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "4px",
              overflow: "hidden",
              marginTop: "6px",
            }}
          >
            <div
              style={{
                width: `${oldProgress * 100}%`,
                height: "100%",
                backgroundColor: REMOTION_THEME.colors.badRed,
              }}
            />
          </div>

          <span
            style={{
              fontFamily: REMOTION_THEME.fonts.body,
              fontSize: "12px",
              fontWeight: 600,
              color: "#F87171",
              marginTop: "4px",
            }}
          >
            {oldProgress >= 0.7
              ? (lang === "es" ? "⚠️ 53% abandona" : "⚠️ 53% drop off")
              : (lang === "es" ? "⏳ Cargando..." : "⏳ Loading...")}
          </span>
        </div>

        {/* VS Divider Arrow */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "13px",
              fontWeight: 900,
              color: REMOTION_THEME.colors.coralBlue,
            }}
          >
            VS
          </div>
        </div>

        {/* Nativa Web Card */}
        <div
          style={{
            backgroundColor: "rgba(16, 185, 129, 0.12)",
            border: "1.5px solid rgba(16, 185, 129, 0.45)",
            borderRadius: "16px",
            padding: "20px 16px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            boxShadow: nativaProgress >= 1 ? "0 0 25px rgba(16, 185, 129, 0.25)" : "none",
          }}
        >
          <span
            style={{
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "13px",
              fontWeight: 800,
              color: REMOTION_THEME.colors.goodGreen,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Nativa Studio
          </span>

          <div
            style={{
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "44px",
              fontWeight: 900,
              color: REMOTION_THEME.colors.goodGreen,
              lineHeight: 1,
            }}
          >
            {nativaCurrentTime}s
          </div>

          <div
            style={{
              width: "100%",
              height: "8px",
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "4px",
              overflow: "hidden",
              marginTop: "6px",
            }}
          >
            <div
              style={{
                width: `${nativaProgress * 100}%`,
                height: "100%",
                backgroundColor: REMOTION_THEME.colors.goodGreen,
              }}
            />
          </div>

          <span
            style={{
              fontFamily: REMOTION_THEME.fonts.body,
              fontSize: "12px",
              fontWeight: 700,
              color: REMOTION_THEME.colors.goodGreen,
              marginTop: "4px",
            }}
          >
            {lang === "es" ? "⚡ 100/100 Rendimiento" : "⚡ 100/100 Score"}
          </span>
        </div>
      </div>

      {/* Floating Speed Feature Pill */}
      <div
        style={{
          transform: `scale(${scoreEntrance})`,
          opacity: scoreEntrance,
          backgroundColor: "#0F172A",
          border: `1px solid ${REMOTION_THEME.colors.coralBlue}`,
          borderRadius: "14px",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: REMOTION_THEME.colors.leadPing,
              transform: `scale(${leadPing})`,
              boxShadow: `0 0 10px ${REMOTION_THEME.colors.leadPing}`,
            }}
          />
          <span
            style={{
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "14px",
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            {lang === "es" ? "Carga instantánea en 4G/5G" : "Instant Mobile 4G/5G Load"}
          </span>
        </div>

        <span
          style={{
            fontFamily: REMOTION_THEME.fonts.head,
            fontSize: "13px",
            fontWeight: 800,
            color: REMOTION_THEME.colors.sunYellow,
          }}
        >
          {lang === "es" ? "0 Fricción" : "0 Friction"}
        </span>
      </div>
    </div>
  );
};
