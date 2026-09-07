import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { AdMapsProps } from "../types";
import { BackgroundCanvas } from "../components/BackgroundCanvas";
import { BrandHeader } from "../components/BrandHeader";
import { AnimatedText } from "../components/AnimatedText";
import { MapsScene } from "../components/MapsScene";
import { EndCardCTA } from "../components/EndCardCTA";
import { REMOTION_THEME } from "../theme";

export const AdMapsComposition: React.FC<AdMapsProps> = ({
  lang = "es",
  businessCity = "Santo Domingo, RD",
  businessName = "Tu Negocio Líder",
  headline,
  subheadline,
  rating = "5.0 ★★★★★",
  reviewCount = "128 reseñas verificadas",
  ctaText,
  whatsappPhone,
}) => {
  const { width, height } = useVideoConfig();
  const isVertical = height > width;

  const defaultHeadline =
    lang === "es"
      ? "¿Tu negocio aparece de #1 en Google Maps?"
      : "Is your business ranking #1 on Google Maps?";

  const defaultSubhead =
    lang === "es"
      ? "El 82% de las compras locales en Santo Domingo comienzan en el mapa de Google."
      : "82% of local customer decisions start directly on Google Maps.";

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
        {/* Top Header */}
        <BrandHeader
          badgeText={
            lang === "es"
              ? "SEO LOCAL · GOOGLE MAPS"
              : "LOCAL SEO · GOOGLE MAPS"
          }
          dark={true}
        />

        {/* Scene 1: The Local Search Hook (Frames 0 to 140) */}
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
              highlightWords={["#1", "Google", "Maps", "ranking"]}
              highlightColor={REMOTION_THEME.colors.sunYellow}
            />

            <AnimatedText
              text={subheadText}
              delay={20}
              fontSize={isVertical ? 24 : 20}
              color="#94A3B8"
              fontFamily="body"
              fontWeight={600}
              lineHeight={1.4}
              highlightWords={["82%", "Santo", "Domingo", "mapa", "decisions"]}
              highlightColor={REMOTION_THEME.colors.coralBlue}
            />
          </div>
        </Sequence>

        {/* Scene 2: Interactive Map Simulation (Frames 140 to 305) */}
        <Sequence from={140} durationInFrames={165}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: isVertical ? "24px" : "14px",
              width: "100%",
              margin: "auto 0",
            }}
          >
            <AnimatedText
              text={
                lang === "es"
                  ? "Conectamos tu web a clientes cercanos listos para comprar"
                  : "We connect your site to high-intent local buyers"
              }
              delay={4}
              fontSize={isVertical ? 32 : 26}
              highlightWords={["cercanos", "comprar", "buyers", "local"]}
              highlightColor={REMOTION_THEME.colors.leadPing}
            />

            <MapsScene
              delay={8}
              lang={lang}
              businessCity={businessCity}
              businessName={businessName}
              rating={rating}
              reviewCount={reviewCount}
            />
          </div>
        </Sequence>

        {/* Scene 3: Final Call to Action (Frames 300 to 450) */}
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
              ctaText={
                ctaText ||
                (lang === "es"
                  ? "Auditoría SEO Gratis 📍"
                  : "Free Local SEO Audit 📍")
              }
              badgeText={
                lang === "es"
                  ? "POSICIONAMIENTO LOCAL GARANTIZADO"
                  : "GUARANTEED LOCAL VISIBILITY"
              }
              whatsappPhone={whatsappPhone}
            />
          </div>
        </Sequence>

        {/* Bottom Tag */}
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
            {businessCity} · Estrategia de Google Maps
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
