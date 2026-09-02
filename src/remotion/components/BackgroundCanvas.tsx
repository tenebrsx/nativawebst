import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { REMOTION_THEME } from "../theme";

interface BackgroundCanvasProps {
  variant?: "dark" | "sand";
}

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ variant = "dark" }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const glow1X = interpolate(
    Math.sin(frame / 45),
    [-1, 1],
    [width * 0.2, width * 0.8]
  );
  const glow1Y = interpolate(
    Math.cos(frame / 60),
    [-1, 1],
    [height * 0.15, height * 0.4]
  );

  const glow2X = interpolate(
    Math.cos(frame / 50),
    [-1, 1],
    [width * 0.8, width * 0.2]
  );
  const glow2Y = interpolate(
    Math.sin(frame / 55),
    [-1, 1],
    [height * 0.7, height * 0.9]
  );

  if (variant === "sand") {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height,
          backgroundColor: REMOTION_THEME.colors.sand,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: glow1Y - 250,
            left: glow1X - 250,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(250, 247, 242, 0) 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: glow2Y - 300,
            left: glow2X - 300,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 183, 3, 0.1) 0%, rgba(250, 247, 242, 0) 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(to right, rgba(10, 17, 40, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(10, 17, 40, 0.03) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        backgroundColor: REMOTION_THEME.colors.trenchNavy,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* Dynamic ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: glow1Y - 300,
          left: glow1X - 300,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.22) 0%, rgba(10, 17, 40, 0) 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: glow2Y - 350,
          left: glow2X - 350,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 183, 3, 0.15) 0%, rgba(10, 17, 40, 0) 70%)",
          filter: "blur(90px)",
        }}
      />
      {/* Tech grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Horizon wave accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "6px",
          background: `linear-gradient(90deg, ${REMOTION_THEME.colors.coralBlue} 0%, ${REMOTION_THEME.colors.sunYellow} 50%, ${REMOTION_THEME.colors.leadPing} 100%)`,
        }}
      />
    </div>
  );
};
