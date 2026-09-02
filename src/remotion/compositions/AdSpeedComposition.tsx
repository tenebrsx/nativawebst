import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { AdSpeedProps } from "../types";
import { BackgroundCanvas } from "../components/BackgroundCanvas";
import { BrandHeader } from "../components/BrandHeader";
import { AnimatedText } from "../components/AnimatedText";
import { SpeedComparison } from "../components/SpeedComparison";
import { EndCardCTA } from "../components/EndCardCTA";
import { REMOTION_THEME } from "../theme";

export const AdSpeedComposition: React.FC<AdSpeedProps> = ({
  lang = "es",
  businessCity = "Santo Domingo",
  oldLoadTime = "5.2s",
  nativaLoadTime = "0.3s",
  headline,
  subheadline,
  ctaText,
  deliveryBadge,
  whatsappPhone,
}) => {
  const { width, height } = useVideoConfig();
  const isVertical = height > width;

  const defaultHeadline =
    lang === "es"
      ? "¿Tu web tarda más de 3 segundos en cargar en celular?"
      : "Does your website take over 3 seconds to load on mobile?";

  const defaultSubhead =
    lang === "es"
      ? "En Santo Domingo, el 53% de los clientes abandonan antes de ver tu producto."
      : "Over 53% of mobile visitors bounce before seeing your product.";

  const headlineText = headline || defaultHeadline;
  const subheadText = subheadline || defaultSubhead;

  return (
    <AbsoluteFill style={{ backgroundColor: REMOTION_THEME.colors.trenchNavy }}>
      <BackgroundCanvas variant="dark" />

      {/* Main Layout Container */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isVertical ? "80px 48px 90px 48px" : "48px 48px 56px 48px",
          position: "relative",
          zIndex: 10,
          boxSizing: "border-box",
        }}
      >
        {/* Top Header Always Present */}
        <BrandHeader
          badgeText={
            lang === "es"
              ? "ALTA CONVERSIÓN · VELOCIDAD WEB"
              : "HIGH CONVERSION · WEB SPEED"
          }
          dark={true}
        />

        {/* Scene 1: The Problem & Hook (Frames 0 to 140) */}
        <Sequence from={0} durationInFrames={145}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: isVertical ? "28px" : "18px",
              maxWidth: "760px",
              margin: "auto 0",
            }}
          >
            <AnimatedText
              text={headlineText}
              delay={4}
              fontSize={isVertical ? 52 : 40}
              highlightWords={["3", "segundos", "celular", "seconds", "mobile"]}
              highlightColor={REMOTION_THEME.colors.badRed}
            />

            <AnimatedText
              text={subheadText}
              delay={22}
              fontSize={isVertical ? 24 : 20}
              color="#94A3B8"
              fontFamily="body"
              fontWeight={600}
              lineHeight={1.4}
              highlightWords={["53%", "Santo", "Domingo", "abandonan", "bounce"]}
              highlightColor={REMOTION_THEME.colors.sunYellow}
            />
          </div>
        </Sequence>

        {/* Scene 2: The Solution / Speed Race (Frames 140 to 305) */}
        <Sequence from={140} durationInFrames={165}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: isVertical ? "26px" : "16px",
              width: "100%",
              margin: "auto 0",
            }}
          >
            <AnimatedText
              text={
                lang === "es"
                  ? "Con Nativa tu página carga en 0.3 segundos"
                  : "With Nativa your page loads in 0.3 seconds"
              }
              delay={4}
              fontSize={isVertical ? 36 : 28}
              highlightWords={["0.3", "segundos", "seconds"]}
              highlightColor={REMOTION_THEME.colors.goodGreen}
            />

            <SpeedComparison
              delay={8}
              lang={lang}
              oldSeconds={parseFloat(oldLoadTime) || 5.2}
              nativaSeconds={parseFloat(nativaLoadTime) || 0.3}
            />
          </div>
        </Sequence>

        {/* Scene 3: Final Call to Action & 48h Launch (Frames 300 to 450) */}
        <Sequence from={300} durationInFrames={150}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              margin: "auto 0",
            }}
          >
            <EndCardCTA
              delay={4}
              lang={lang}
              ctaText={ctaText}
              badgeText={
                deliveryBadge ||
                (lang === "es"
                  ? "LANZAMIENTO EN 48 HORAS"
                  : "48-HOUR LAUNCH READY")
              }
              whatsappPhone={whatsappPhone}
            />
          </div>
        </Sequence>

        {/* Bottom Small Location Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            opacity: 0.8,
          }}
        >
          <span style={{ fontSize: "13px", color: REMOTION_THEME.colors.coralBlue }}>
            📍
          </span>
          <span
            style={{
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "13px",
              fontWeight: 700,
              color: "#94A3B8",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {businessCity} · Nativa Web Studio
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
