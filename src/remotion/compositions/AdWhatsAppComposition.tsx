import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { AdWhatsAppProps } from "../types";
import { BackgroundCanvas } from "../components/BackgroundCanvas";
import { BrandHeader } from "../components/BrandHeader";
import { AnimatedText } from "../components/AnimatedText";
import { PhoneFrame } from "../components/PhoneFrame";
import { WhatsAppChatScene } from "../components/WhatsAppChatScene";
import { EndCardCTA } from "../components/EndCardCTA";
import { REMOTION_THEME } from "../theme";

export const AdWhatsAppComposition: React.FC<AdWhatsAppProps> = ({
  lang = "es",
  businessCity = "Santo Domingo",
  headline,
  subheadline,
  clientInquiry,
  autoResponse,
  ctaText,
  whatsappPhone,
}) => {
  const { width, height } = useVideoConfig();
  const isVertical = height > width;

  const defaultHeadline =
    lang === "es"
      ? "¿Tus visitas se van sin comprar o agendar?"
      : "Are your visitors leaving without booking or buying?";

  const defaultSubhead =
    lang === "es"
      ? "En República Dominicana, los negocios que cierran ventas atienden directo en WhatsApp."
      : "In modern business, fast conversion happens directly inside WhatsApp.";

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
              ? "CONVERSIÓN DIRECTA A WHATSAPP"
              : "DIRECT WHATSAPP CONVERSION"
          }
          dark={true}
        />

        {/* Scene 1: The Funnel Hook (Frames 0 to 140) */}
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
              highlightWords={["comprar", "agendar", "booking", "buying"]}
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
              highlightWords={["República", "Dominicana", "WhatsApp", "ventas", "conversion"]}
              highlightColor={REMOTION_THEME.colors.leadPing}
            />
          </div>
        </Sequence>

        {/* Scene 2: Interactive WhatsApp Phone Mockup (Frames 140 to 305) */}
        <Sequence from={140} durationInFrames={165}>
          <div
            style={{
              display: "flex",
              flexDirection: isVertical ? "column" : "row",
              alignItems: "center",
              justifyContent: "center",
              gap: isVertical ? "20px" : "32px",
              width: "100%",
              margin: "auto 0",
            }}
          >
            {/* Explainer Pill */}
            <div style={{ maxWidth: isVertical ? "100%" : "380px" }}>
              <AnimatedText
                text={
                  lang === "es"
                    ? "Convierte cada clic en un cliente listo para comprar en WhatsApp"
                    : "Turn every click into a qualified client in WhatsApp"
                }
                delay={4}
                fontSize={isVertical ? 28 : 26}
                highlightWords={["WhatsApp", "comprar", "qualified"]}
                highlightColor={REMOTION_THEME.colors.leadPing}
                textAlign={isVertical ? "center" : "left"}
              />
            </div>

            {/* Mobile Phone Mockup */}
            <PhoneFrame scale={isVertical ? 0.95 : 0.82}>
              <WhatsAppChatScene
                delay={8}
                lang={lang}
                clientMessage={clientInquiry}
                studioMessage={autoResponse}
              />
            </PhoneFrame>
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
                  ? "Hablar por WhatsApp 💬"
                  : "Chat on WhatsApp 💬")
              }
              badgeText={
                lang === "es"
                  ? "SISTEMA DE CAPTACIÓN AUTOMÁTICA"
                  : "AUTOMATED LEAD GENERATION"
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
          <span style={{ fontSize: "13px", color: REMOTION_THEME.colors.leadPing }}>
            💬
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
            {businessCity} · Embudo WhatsApp Nativa
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
