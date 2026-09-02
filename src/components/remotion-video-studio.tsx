"use client";

import React, { useState } from "react";
import { Player } from "@remotion/player";
import { AdSpeedComposition } from "../remotion/compositions/AdSpeedComposition";
import { AdMapsComposition } from "../remotion/compositions/AdMapsComposition";
import { AdWhatsAppComposition } from "../remotion/compositions/AdWhatsAppComposition";
import { REMOTION_THEME } from "../remotion/theme";

type AdType = "speed" | "maps" | "whatsapp";
type Format = "story" | "feed";
type AdLang = "es" | "en";

export function RemotionVideoStudio() {
  const [selectedAd, setSelectedAd] = useState<AdType>("speed");
  const [format, setFormat] = useState<Format>("story");
  const [lang, setLang] = useState<AdLang>("es");
  const [city, setCity] = useState<string>("Santo Domingo");
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  // Dynamic dimensions
  const width = 1080;
  const height = format === "story" ? 1920 : 1080;
  const compositionId = `${
    selectedAd === "speed"
      ? "AdSpeed"
      : selectedAd === "maps"
      ? "AdMaps"
      : "AdWhatsApp"
  }-${format === "story" ? "Story" : "Feed"}`;

  const renderCommand = `npx remotion render src/remotion/index.ts ${compositionId} public/videos/${compositionId.toLowerCase()}.mp4`;
  const stillCommand = `npx remotion still src/remotion/index.ts ${compositionId} public/videos/${compositionId.toLowerCase()}-thumb.png --frame=200`;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(id);
    setTimeout(() => setCopiedCommand(null), 2500);
  };

  return (
    <div
      style={{
        background: "#0A1128",
        borderRadius: "24px",
        border: "1.5px solid rgba(255, 255, 255, 0.12)",
        overflow: "hidden",
        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
        color: "#FFFFFF",
        marginBottom: "60px",
      }}
    >
      {/* Studio Header Bar */}
      <div
        style={{
          padding: "20px 28px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          background: "#0F172A",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: REMOTION_THEME.colors.coralBlue,
              boxShadow: `0 0 12px ${REMOTION_THEME.colors.coralBlue}`,
            }}
          />
          <div>
            <h3
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "18px",
                fontWeight: 900,
                margin: 0,
                color: "#FFFFFF",
              }}
            >
              Remotion Video Engine · Instagram Ads
            </h3>
            <p
              style={{
                fontSize: "12px",
                color: "#94A3B8",
                margin: "2px 0 0",
              }}
            >
              Motor de renderizado de video 100% en código React. 30 FPS, 1080p, animaciones fluidas con resortes.
            </p>
          </div>
        </div>

        {/* Global Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          {/* Format Switcher */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              borderRadius: "10px",
              padding: "4px",
              display: "flex",
              gap: "4px",
            }}
          >
            <button
              onClick={() => setFormat("story")}
              style={{
                background: format === "story" ? REMOTION_THEME.colors.coralBlue : "transparent",
                color: format === "story" ? "#0A1128" : "#FFFFFF",
                border: "none",
                borderRadius: "6px",
                padding: "6px 12px",
                fontSize: "12px",
                fontWeight: 800,
                cursor: "pointer",
                fontFamily: "var(--font-head)",
              }}
            >
              📱 Story / Reel (9:16)
            </button>
            <button
              onClick={() => setFormat("feed")}
              style={{
                background: format === "feed" ? REMOTION_THEME.colors.coralBlue : "transparent",
                color: format === "feed" ? "#0A1128" : "#FFFFFF",
                border: "none",
                borderRadius: "6px",
                padding: "6px 12px",
                fontSize: "12px",
                fontWeight: 800,
                cursor: "pointer",
                fontFamily: "var(--font-head)",
              }}
            >
              ⏹️ Feed (1:1)
            </button>
          </div>

          {/* Lang Switcher */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              borderRadius: "10px",
              padding: "4px",
              display: "flex",
              gap: "4px",
            }}
          >
            <button
              onClick={() => setLang("es")}
              style={{
                background: lang === "es" ? REMOTION_THEME.colors.sunYellow : "transparent",
                color: lang === "es" ? "#0A1128" : "#FFFFFF",
                border: "none",
                borderRadius: "6px",
                padding: "6px 10px",
                fontSize: "12px",
                fontWeight: 800,
                cursor: "pointer",
                fontFamily: "var(--font-head)",
              }}
            >
              ES 🇩🇴
            </button>
            <button
              onClick={() => setLang("en")}
              style={{
                background: lang === "en" ? REMOTION_THEME.colors.sunYellow : "transparent",
                color: lang === "en" ? "#0A1128" : "#FFFFFF",
                border: "none",
                borderRadius: "6px",
                padding: "6px 10px",
                fontSize: "12px",
                fontWeight: 800,
                cursor: "pointer",
                fontFamily: "var(--font-head)",
              }}
            >
              EN 🇺🇸
            </button>
          </div>
        </div>
      </div>

      {/* Ad Selection Tabs */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          background: "rgba(15, 23, 42, 0.6)",
          padding: "0 24px",
          gap: "8px",
          overflowX: "auto",
        }}
      >
        <button
          onClick={() => setSelectedAd("speed")}
          style={{
            background: "none",
            border: "none",
            borderBottom: selectedAd === "speed" ? `3px solid ${REMOTION_THEME.colors.coralBlue}` : "3px solid transparent",
            color: selectedAd === "speed" ? "#FFFFFF" : "#94A3B8",
            padding: "16px 18px",
            fontSize: "13px",
            fontWeight: 800,
            cursor: "pointer",
            fontFamily: "var(--font-head)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>⚡</span> Ad 01 · Velocidad & 48h
        </button>

        <button
          onClick={() => setSelectedAd("maps")}
          style={{
            background: "none",
            border: "none",
            borderBottom: selectedAd === "maps" ? `3px solid ${REMOTION_THEME.colors.coralBlue}` : "3px solid transparent",
            color: selectedAd === "maps" ? "#FFFFFF" : "#94A3B8",
            padding: "16px 18px",
            fontSize: "13px",
            fontWeight: 800,
            cursor: "pointer",
            fontFamily: "var(--font-head)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>📍</span> Ad 02 · Google Maps Dominance
        </button>

        <button
          onClick={() => setSelectedAd("whatsapp")}
          style={{
            background: "none",
            border: "none",
            borderBottom: selectedAd === "whatsapp" ? `3px solid ${REMOTION_THEME.colors.coralBlue}` : "3px solid transparent",
            color: selectedAd === "whatsapp" ? "#FFFFFF" : "#94A3B8",
            padding: "16px 18px",
            fontSize: "13px",
            fontWeight: 800,
            cursor: "pointer",
            fontFamily: "var(--font-head)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>💬</span> Ad 03 · Embudo WhatsApp
        </button>
      </div>

      {/* Main Studio Body: Player & Controls Side-by-Side */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          padding: "32px",
          gap: "36px",
          alignItems: "center",
        }}
      >
        {/* Interactive Remotion Player */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#060A17",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "20px",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.8)",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: format === "story" ? "320px" : "420px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
              backgroundColor: "#000000",
            }}
          >
            {selectedAd === "speed" && (
              <Player
                acknowledgeRemotionLicense
                component={AdSpeedComposition}
                durationInFrames={450}
                fps={30}
                compositionWidth={width}
                compositionHeight={height}
                controls
                loop
                autoPlay
                inputProps={{
                  lang,
                  businessCity: city,
                  oldLoadTime: "5.2s",
                  nativaLoadTime: "0.3s",
                  headline:
                    lang === "es"
                      ? "¿Tu web tarda más de 3 segundos en cargar en celular?"
                      : "Does your website take over 3 seconds to load on mobile?",
                  subheadline:
                    lang === "es"
                      ? `En ${city}, el 53% de los clientes abandonan antes de ver tu producto.`
                      : `In ${city}, 53% of mobile visitors bounce before seeing your product.`,
                  ctaText:
                    lang === "es"
                      ? "Lanza Tu Web en 48 Horas 🚀"
                      : "Launch Your Website in 48h 🚀",
                  deliveryBadge:
                    lang === "es"
                      ? "LANZAMIENTO EN 48 HORAS"
                      : "48-HOUR LAUNCH READY",
                }}
                style={{
                  width: "100%",
                  aspectRatio: `${width}/${height}`,
                }}
              />
            )}

            {selectedAd === "maps" && (
              <Player
                acknowledgeRemotionLicense
                component={AdMapsComposition}
                durationInFrames={450}
                fps={30}
                compositionWidth={width}
                compositionHeight={height}
                controls
                loop
                autoPlay
                inputProps={{
                  lang,
                  businessCity: `${city}, RD`,
                  businessName: "Tu Negocio Líder",
                  headline:
                    lang === "es"
                      ? "¿Tu negocio aparece de #1 en Google Maps?"
                      : "Is your business ranking #1 on Google Maps?",
                  subheadline:
                    lang === "es"
                      ? `El 82% de las compras locales en ${city} comienzan en el mapa.`
                      : `82% of local customer decisions in ${city} start directly on Google Maps.`,
                  ctaText:
                    lang === "es"
                      ? "Auditoría SEO Gratis 📍"
                      : "Free Local SEO Audit 📍",
                }}
                style={{
                  width: "100%",
                  aspectRatio: `${width}/${height}`,
                }}
              />
            )}

            {selectedAd === "whatsapp" && (
              <Player
                acknowledgeRemotionLicense
                component={AdWhatsAppComposition}
                durationInFrames={450}
                fps={30}
                compositionWidth={width}
                compositionHeight={height}
                controls
                loop
                autoPlay
                inputProps={{
                  lang,
                  businessCity: city,
                  headline:
                    lang === "es"
                      ? "¿Tus visitas se van sin comprar o agendar?"
                      : "Are your visitors leaving without booking or buying?",
                  subheadline:
                    lang === "es"
                      ? "En República Dominicana, los negocios que cierran ventas atienden directo en WhatsApp."
                      : "In modern business, fast conversion happens directly inside WhatsApp.",
                  ctaText:
                    lang === "es"
                      ? "Hablar por WhatsApp 💬"
                      : "Chat on WhatsApp 💬",
                }}
                style={{
                  width: "100%",
                  aspectRatio: `${width}/${height}`,
                }}
              />
            )}
          </div>

          <div
            style={{
              fontSize: "11px",
              color: "#94A3B8",
              marginTop: "12px",
              textAlign: "center",
            }}
          >
            ⏱️ 15.0s (450 frames @ 30 FPS) · Resizable {width}x{height}px
          </div>
        </div>

        {/* Dynamic Controls & CLI Exporters */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <span
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "11px",
                fontWeight: 800,
                color: REMOTION_THEME.colors.coralBlue,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Parámetros de Campaña
            </span>
            <h4
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "20px",
                fontWeight: 900,
                margin: "4px 0 12px",
                color: "#FFFFFF",
              }}
            >
              Personalización Dinámica
            </h4>
            <p style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.5, margin: 0 }}>
              Modifica la ciudad y los valores para generar variantes de anuncios orientadas a diferentes mercados locales.
            </p>
          </div>

          {/* City Selector */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 700,
                color: "#E2E8F0",
                marginBottom: "6px",
                fontFamily: "var(--font-head)",
              }}
            >
              Ciudad / Zona Objetivo:
            </label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["Santo Domingo", "Santiago", "Punta Cana", "La Romana", "Piantini"].map(
                (targetCity) => (
                  <button
                    key={targetCity}
                    onClick={() => setCity(targetCity)}
                    style={{
                      background:
                        city === targetCity
                          ? REMOTION_THEME.colors.coralBlue
                          : "rgba(255, 255, 255, 0.08)",
                      color: city === targetCity ? "#0A1128" : "#FFFFFF",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "8px",
                      padding: "6px 12px",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontFamily: "var(--font-head)",
                    }}
                  >
                    {targetCity}
                  </button>
                )
              )}
            </div>
          </div>

          {/* CLI Render Section */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "14px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span
                style={{
                  fontFamily: "var(--font-head)",
                  fontSize: "12px",
                  fontWeight: 800,
                  color: REMOTION_THEME.colors.sunYellow,
                }}
              >
                🎬 Exportar Video MP4 (CLI)
              </span>
              <span style={{ fontSize: "11px", color: "#94A3B8" }}>
                ID: {compositionId}
              </span>
            </div>

            <code
              style={{
                backgroundColor: "#060A17",
                padding: "10px 12px",
                borderRadius: "8px",
                fontSize: "11.5px",
                color: "#38BDF8",
                wordBreak: "break-all",
                fontFamily: "monospace",
                display: "block",
              }}
            >
              {renderCommand}
            </code>

            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => copyToClipboard(renderCommand, "mp4")}
                style={{
                  background: copiedCommand === "mp4" ? "#10B981" : REMOTION_THEME.colors.sunYellow,
                  color: "#0A1128",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  fontSize: "12px",
                  fontWeight: 800,
                  cursor: "pointer",
                  fontFamily: "var(--font-head)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                {copiedCommand === "mp4" ? "✓ Comando Copiado!" : "📋 Copiar Comando MP4"}
              </button>

              <button
                onClick={() => copyToClipboard(stillCommand, "still")}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  fontSize: "12px",
                  fontWeight: 800,
                  cursor: "pointer",
                  fontFamily: "var(--font-head)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {copiedCommand === "still" ? "✓ Copiado" : "📸 Miniatura"}
              </button>
            </div>
          </div>

          {/* Quick instructions */}
          <div style={{ fontSize: "12px", color: "#94A3B8", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div>• Iniciar Remotion Studio interactivo: <code style={{ color: "#F8FAFC" }}>npm run remotion:studio</code></div>
            <div>• Renderizar todos los formatos: <code style={{ color: "#F8FAFC" }}>npm run remotion:render</code></div>
          </div>
        </div>
      </div>
    </div>
  );
}
