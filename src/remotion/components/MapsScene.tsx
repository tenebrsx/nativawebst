import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { REMOTION_THEME } from "../theme";

interface MapsSceneProps {
  delay?: number;
  lang?: "es" | "en";
  businessCity?: string;
  businessName?: string;
  rating?: string;
  reviewCount?: string;
}

export const MapsScene: React.FC<MapsSceneProps> = ({
  delay = 10,
  lang = "es",
  businessCity = "Santo Domingo, DN",
  businessName = "Tu Negocio Líder",
  rating = "5.0 ★★★★★",
  reviewCount = "128 reseñas",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const mapEntrance = spring({
    frame: frame - delay,
    fps,
    config: REMOTION_THEME.springs.smooth,
  });

  const pinEntrance = spring({
    frame: frame - delay - 14,
    fps,
    config: REMOTION_THEME.springs.bouncy,
  });

  const cardEntrance = spring({
    frame: frame - delay - 26,
    fps,
    config: REMOTION_THEME.springs.snappy,
  });

  const pulseRadius = interpolate(
    Math.sin((frame - delay) / 6),
    [-1, 1],
    [20, 60]
  );
  const pulseOpacity = interpolate(
    Math.sin((frame - delay) / 6),
    [-1, 1],
    [0.7, 0.1]
  );

  return (
    <div
      style={{
        transform: `scale(${mapEntrance})`,
        opacity: mapEntrance,
        width: "100%",
        maxWidth: "680px",
        borderRadius: "24px",
        overflow: "hidden",
        backgroundColor: "#0C1524",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Search Header Bar */}
      <div
        style={{
          padding: "16px 20px",
          backgroundColor: "#1C2541",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span style={{ fontSize: "18px" }}>🔍</span>
        <div
          style={{
            fontFamily: REMOTION_THEME.fonts.head,
            fontSize: "14px",
            color: "#FFFFFF",
            fontWeight: 700,
          }}
        >
          {lang === "es"
            ? `Mejores servicios en ${businessCity}`
            : `Top services in ${businessCity}`}
        </div>
      </div>

      {/* Stylized Map View Field */}
      <div
        style={{
          height: "260px",
          backgroundColor: "#0A1128",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Abstract road vectors */}
        <div
          style={{
            position: "absolute",
            width: "140%",
            height: "18px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            transform: "rotate(-25deg)",
            top: "40%",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "140%",
            height: "14px",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            transform: "rotate(40deg)",
            top: "60%",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "140%",
            height: "22px",
            backgroundColor: "rgba(14, 165, 233, 0.08)",
            top: "50%",
          }}
        />

        {/* Radar Pulse around Pin */}
        <div
          style={{
            position: "absolute",
            width: `${pulseRadius * 2}px`,
            height: `${pulseRadius * 2}px`,
            borderRadius: "50%",
            backgroundColor: REMOTION_THEME.colors.coralBlue,
            opacity: pulseOpacity,
          }}
        />

        {/* Dropping Pin */}
        <div
          style={{
            transform: `translateY(${(1 - pinEntrance) * -80}px) scale(${pinEntrance})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              backgroundColor: REMOTION_THEME.colors.badRed,
              color: "#FFFFFF",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: 900,
              fontSize: "13px",
              fontFamily: REMOTION_THEME.fonts.head,
              boxShadow: "0 8px 20px rgba(239, 68, 68, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>📍</span> {lang === "es" ? "#1 en Tu Zona" : "#1 in Your Area"}
          </div>
          <div
            style={{
              width: "4px",
              height: "16px",
              backgroundColor: REMOTION_THEME.colors.badRed,
            }}
          />
        </div>
      </div>

      {/* Business Result Card Overlay */}
      <div
        style={{
          transform: `scale(${cardEntrance}) translateY(${(1 - cardEntrance) * 20}px)`,
          opacity: cardEntrance,
          padding: "20px",
          backgroundColor: "#111B27",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h4
              style={{
                margin: 0,
                fontFamily: REMOTION_THEME.fonts.head,
                fontSize: "18px",
                fontWeight: 800,
                color: "#FFFFFF",
              }}
            >
              {businessName}
            </h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "4px",
              }}
            >
              <span
                style={{
                  fontFamily: REMOTION_THEME.fonts.head,
                  fontSize: "13px",
                  fontWeight: 800,
                  color: REMOTION_THEME.colors.sunYellow,
                }}
              >
                {rating}
              </span>
              <span
                style={{
                  fontFamily: REMOTION_THEME.fonts.body,
                  fontSize: "12px",
                  color: "#94A3B8",
                }}
              >
                ({reviewCount})
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              padding: "6px 12px",
              borderRadius: "8px",
              color: REMOTION_THEME.colors.goodGreen,
              fontSize: "12px",
              fontWeight: 800,
              fontFamily: REMOTION_THEME.fonts.head,
            }}
          >
            {lang === "es" ? "Abierto Ahora" : "Open Now"}
          </div>
        </div>

        {/* Fast Action Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div
            style={{
              backgroundColor: REMOTION_THEME.colors.whatsappDark,
              color: "#FFFFFF",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "12px",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <span>💬</span> WhatsApp
          </div>

          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FFFFFF",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "12px",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <span>🌐</span> {lang === "es" ? "Sitio Web (0.3s)" : "Website (0.3s)"}
          </div>
        </div>
      </div>
    </div>
  );
};
