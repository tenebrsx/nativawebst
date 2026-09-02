import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { REMOTION_THEME } from "../theme";

interface WhatsAppChatSceneProps {
  delay?: number;
  lang?: "es" | "en";
  clientMessage?: string;
  studioMessage?: string;
}

export const WhatsAppChatScene: React.FC<WhatsAppChatSceneProps> = ({
  delay = 10,
  lang = "es",
  clientMessage,
  studioMessage,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const defaultClientMsg =
    lang === "es"
      ? "¿Tienen disponibilidad para crear una web rápida con botón a WhatsApp?"
      : "Do you have availability to build a fast website with direct WhatsApp routing?";

  const defaultStudioMsg =
    lang === "es"
      ? "¡Claro que sí! 🚀 Diseñamos y lanzamos tu web en 48h con carga en 0.3s y Google Maps optimizado."
      : "Absolutely! 🚀 We design and launch your platform in 48h with 0.3s speed and Google Maps SEO.";

  const clientMsgText = clientMessage || defaultClientMsg;
  const studioMsgText = studioMessage || defaultStudioMsg;

  // Timings for staggered chat bubbles
  const clientEntrance = spring({
    frame: frame - delay,
    fps,
    config: REMOTION_THEME.springs.snappy,
  });

  const typingProgress = spring({
    frame: frame - delay - 18,
    fps,
    config: REMOTION_THEME.springs.gentle,
  });

  const studioEntrance = spring({
    frame: frame - delay - 32,
    fps,
    config: REMOTION_THEME.springs.snappy,
  });

  const actionPillEntrance = spring({
    frame: frame - delay - 48,
    fps,
    config: REMOTION_THEME.springs.bouncy,
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: REMOTION_THEME.colors.whatsappShell,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* WhatsApp Header */}
      <div
        style={{
          backgroundColor: REMOTION_THEME.colors.whatsappHeader,
          padding: "36px 16px 14px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            backgroundColor: REMOTION_THEME.colors.coralBlue,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: "14px",
            color: "#FFFFFF",
            fontFamily: REMOTION_THEME.fonts.head,
          }}
        >
          N
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "15px",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Nativa Web Studio
          </span>
          <span
            style={{
              fontFamily: REMOTION_THEME.fonts.body,
              fontSize: "11px",
              color: REMOTION_THEME.colors.leadPing,
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            ● {lang === "es" ? "En línea · Responde en 2 min" : "Online · Replies in 2m"}
          </span>
        </div>
      </div>

      {/* Chat Messages Body */}
      <div
        style={{
          padding: "20px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          flex: 1,
        }}
      >
        {/* Client message (left/incoming bubble) */}
        <div
          style={{
            transform: `scale(${clientEntrance}) translateY(${(1 - clientEntrance) * 20}px)`,
            opacity: clientEntrance,
            alignSelf: "flex-start",
            maxWidth: "85%",
            backgroundColor: "#202C33",
            borderRadius: "14px 14px 14px 4px",
            padding: "12px 14px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: REMOTION_THEME.fonts.body,
              fontSize: "13px",
              color: "#E9EDEF",
              lineHeight: 1.35,
            }}
          >
            {clientMsgText}
          </p>
          <div
            style={{
              textAlign: "right",
              fontSize: "10px",
              color: "#8696A0",
              marginTop: "4px",
            }}
          >
            10:24 AM
          </div>
        </div>

        {/* Typing indicator (when studio message hasn't appeared yet) */}
        {studioEntrance < 0.9 && typingProgress > 0 && (
          <div
            style={{
              alignSelf: "flex-end",
              backgroundColor: REMOTION_THEME.colors.whatsappDark,
              borderRadius: "14px",
              padding: "8px 14px",
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "11px", color: "#E9EDEF", fontFamily: REMOTION_THEME.fonts.body }}>
              {lang === "es" ? "Escribiendo..." : "Typing..."}
            </span>
          </div>
        )}

        {/* Studio message (right/outbound bubble) */}
        <div
          style={{
            transform: `scale(${studioEntrance}) translateY(${(1 - studioEntrance) * 20}px)`,
            opacity: studioEntrance,
            alignSelf: "flex-end",
            maxWidth: "88%",
            backgroundColor: REMOTION_THEME.colors.whatsappDark,
            borderRadius: "14px 14px 4px 14px",
            padding: "12px 14px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: REMOTION_THEME.fonts.body,
              fontSize: "13px",
              color: "#E9EDEF",
              lineHeight: 1.35,
              fontWeight: 500,
            }}
          >
            {studioMsgText}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "4px",
              fontSize: "10px",
              color: "#8696A0",
              marginTop: "4px",
            }}
          >
            10:25 AM <span style={{ color: "#53BDEB" }}>✓✓</span>
          </div>
        </div>

        {/* Dynamic Action Chip */}
        <div
          style={{
            transform: `scale(${actionPillEntrance})`,
            opacity: actionPillEntrance,
            alignSelf: "center",
            marginTop: "10px",
            backgroundColor: "rgba(255, 183, 3, 0.15)",
            border: `1px solid ${REMOTION_THEME.colors.sunYellow}`,
            borderRadius: "12px",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "16px" }}>⚡</span>
          <span
            style={{
              fontFamily: REMOTION_THEME.fonts.head,
              fontSize: "12px",
              fontWeight: 800,
              color: REMOTION_THEME.colors.sunYellow,
            }}
          >
            {lang === "es" ? "Nuevo Cliente Potencial Registrado" : "New Qualified Lead Captured"}
          </span>
        </div>
      </div>
    </div>
  );
};
