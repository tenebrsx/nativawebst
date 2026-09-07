import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { REMOTION_THEME } from "../theme";

interface BrandHeaderProps {
  badgeText?: string;
  dark?: boolean;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  badgeText = "ESTUDIO WEB & MARKETING",
  dark = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoEntrance = spring({
    frame,
    fps,
    config: REMOTION_THEME.springs.snappy,
  });

  const badgeEntrance = spring({
    frame: frame - 6,
    fps,
    config: REMOTION_THEME.springs.smooth,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "14px",
        width: "100%",
        zIndex: 10,
      }}
    >
      {/* Nativa Brand Mark */}
      <div
        style={{
          transform: `scale(${logoEntrance}) translateY(${(1 - logoEntrance) * -20}px)`,
          opacity: logoEntrance,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            backgroundColor: REMOTION_THEME.colors.coralBlue,
            boxShadow: `0 0 16px ${REMOTION_THEME.colors.coralBlue}`,
          }}
        />
        <span
          style={{
            fontFamily: REMOTION_THEME.fonts.head,
            fontSize: "24px",
            fontWeight: 900,
            letterSpacing: "0.12em",
            color: dark ? REMOTION_THEME.colors.textLight : REMOTION_THEME.colors.trenchNavy,
            textTransform: "uppercase",
          }}
        >
          Nativa<span style={{ color: REMOTION_THEME.colors.coralBlue }}>.</span>
        </span>
      </div>

      {/* Category / Campaign Badge */}
      {badgeText && (
        <div
          style={{
            transform: `scale(${badgeEntrance})`,
            opacity: badgeEntrance,
            backgroundColor: dark ? "rgba(14, 165, 233, 0.12)" : "rgba(14, 165, 233, 0.08)",
            border: `1px solid ${dark ? "rgba(14, 165, 233, 0.35)" : "rgba(14, 165, 233, 0.25)"}`,
            padding: "8px 18px",
            borderRadius: "999px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: REMOTION_THEME.colors.coralBlue,
              textTransform: "uppercase",
            }}
          >
            {badgeText}
          </span>
        </div>
      )}
    </div>
  );
};
