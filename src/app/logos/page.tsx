"use client";

import { useState } from "react";
import { useGeo } from "@/lib/geo-context";
import Link from "next/link";

export default function LogosPage() {
  const { lang, setLang, currency, setCurrency } = useGeo();
  const [bgMode, setBgMode] = useState<"sand" | "navy">("sand");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copySvg = (id: string, svgCode: string) => {
    navigator.clipboard.writeText(svgCode);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isDark = bgMode === "navy";
  const bg = isDark ? "#0A1128" : "#FAF7F2";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const border = isDark ? "rgba(255,255,255,0.1)" : "rgba(10,17,40,0.1)";
  const textPrimary = isDark ? "#ffffff" : "#0A1128";
  const textMuted = isDark ? "rgba(255,255,255,0.6)" : "#64748B";

  const concepts = [
    {
      id: "concept-1",
      title: "01. La Vela (The Geometric Sail)",
      concept: "Sail & Ocean Wave Fusion",
      desc: "Combines dual geometric sailboat sails with a curving ocean wave base. Represents high-speed sailing, progress, and forward momentum.",
      svgCode: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36C18 41 34 41 40 36C36 34 26 33 20 35C16 36 14 36 12 36Z" fill="#0EA5E9"/>
  <path d="M22 10L36 33H22V10Z" fill="#0EA5E9"/>
  <path d="M19 16L7 33H19V16Z" fill="#FFB703"/>
</svg>`,
      render: (color = "#0EA5E9") => (
        <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 36C18 41 34 41 40 36C36 34 26 33 20 35C16 36 14 36 12 36Z" fill={color} />
          <path d="M22 10L36 33H22V10Z" fill={color} />
          <path d="M19 16L7 33H19V16Z" fill="#FFB703" />
        </svg>
      )
    },
    {
      id: "concept-2",
      title: "02. El Faro (The Monogram Beacon)",
      concept: "Letter 'A' + Lighthouse Beam",
      desc: "Integrates the letter 'A' with a sharp lighthouse beacon sweeping across horizon line waves. Represents guidance, search ranking, and clarity.",
      svgCode: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 6L8 40H16L24 22L32 40H40L24 6Z" fill="#0A1128"/>
  <path d="M24 12L38 18L24 24V12Z" fill="#0EA5E9" opacity="0.9"/>
  <path d="M6 34C14 31 22 37 30 34C36 31 42 34 44 34" stroke="#FFB703" strokeWidth="3" strokeLinecap="round"/>
</svg>`,
      render: (color = "#0EA5E9") => (
        <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6L8 40H16L24 22L32 40H40L24 6Z" fill={isDark ? "#ffffff" : "#0A1128"} />
          <path d="M24 12L38 18L24 24V12Z" fill={color} opacity="0.9" />
          <path d="M6 34C14 31 22 37 30 34C36 31 42 34 44 34" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "concept-3",
      title: "03. Nativa Crest (Continuous Horizon)",
      concept: "Rising Sun & Dual Wave Crest",
      desc: "Continuous line-art wave with a golden sun circle rising on the horizon. Warm, inviting, and modern.",
      svgCode: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="20" r="10" fill="#FFB703" opacity="0.85"/>
  <path d="M4 28C10 24 16 32 24 26C32 20 38 28 44 26" stroke="#0EA5E9" strokeWidth="3.5" strokeLinecap="round"/>
  <path d="M4 34C12 30 18 36 26 32C34 28 40 34 44 33" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
</svg>`,
      render: (color = "#0EA5E9") => (
        <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="20" r="10" fill="#FFB703" opacity="0.85" />
          <path d="M4 28C10 24 16 32 24 26C32 20 38 28 44 26" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M4 34C12 30 18 36 26 32C34 28 40 34 44 33" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      )
    },
    {
      id: "concept-4",
      title: "04. Onda Nativa (High-Speed Wave Surge)",
      concept: "Tech Wave Pulse",
      desc: "Sleek triple-stroke wave surge. Gives a high-frequency, ultra-fast engineering feel suitable for modern software platforms.",
      svgCode: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 32C12 32 15 20 22 20C29 20 31 32 42 32" stroke="#0EA5E9" strokeWidth="4" strokeLinecap="round"/>
  <path d="M6 22C12 22 15 10 22 10C29 10 31 22 42 22" stroke="#FFB703" strokeWidth="3" strokeLinecap="round"/>
  <path d="M6 40C12 40 15 30 22 30C29 30 31 40 42 40" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
</svg>`,
      render: (color = "#0EA5E9") => (
        <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 32C12 32 15 20 22 20C29 20 31 32 42 32" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <path d="M6 22C12 22 15 10 22 10C29 10 31 22 42 22" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" />
          <path d="M6 40C12 40 15 30 22 30C29 30 31 40 42 40" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        </svg>
      )
    },
    {
      id: "concept-5",
      title: "05. La Brújula (Maritime Compass Star)",
      concept: "4-Point Compass & Waves",
      desc: "Four-point navigational star encircled by ocean wave arcs. Symbolizes direction, precision guidance, and strategic local positioning.",
      svgCode: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 4L28 20L44 24L28 28L24 44L20 28L4 24L20 20L24 4Z" fill="#0EA5E9"/>
  <circle cx="24" cy="24" r="5" fill="#FFB703"/>
  <path d="M8 38C16 34 32 34 40 38" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
</svg>`,
      render: (color = "#0EA5E9") => (
        <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L28 20L44 24L28 28L24 44L20 28L4 24L20 20L24 4Z" fill={color} />
          <circle cx="24" cy="24" r="5" fill="#FFB703" />
          <path d="M8 38C16 34 32 34 40 38" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        </svg>
      )
    },
    {
      id: "concept-6",
      title: "06. Nativa Minimal Lockup",
      concept: "Clean Wave Waveform Wordmark",
      desc: "Minimalist horizontal ocean wave track with clean geometric letterforms. Directly used in Nativa's live web navigation bar.",
      svgCode: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 28C12 28 16 18 24 18C32 18 36 28 44 28" stroke="#0EA5E9" strokeWidth="4" strokeLinecap="round"/>
  <path d="M8 16C16 16 18 8 24 8C30 8 32 16 40 16" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
</svg>`,
      render: (color = "#0EA5E9") => (
        <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 28C12 28 16 18 24 18C32 18 36 28 44 28" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <path d="M8 16C16 16 18 8 24 8C30 8 32 16 40 16" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        </svg>
      )
    }
  ];

  return (
    <div style={{ minHeight: "100vh", background: bg, color: textPrimary, transition: "background 0.3s, color 0.3s" }}>

      {/* ─── NAVBAR ──────────────────────────────────────────────── */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: bg,
        borderBottom: `1px solid ${border}`,
        padding: "16px 0"
      }}>
        <div className="container header-bar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", color: textPrimary, display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <span style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "20px" }}>Nativa</span>
            <span className="hide-on-narrow" style={{ fontSize: "11px", background: "#0EA5E9", color: "#fff", padding: "2px 8px", borderRadius: "10px", fontWeight: 800 }}>
              Logo Lab
            </span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            {/* Dark / Light Canvas Switcher */}
            <div style={{
              display: "flex",
              background: isDark ? "rgba(255,255,255,0.08)" : "rgba(10,17,40,0.06)",
              padding: "3px",
              borderRadius: "8px",
              border: `1px solid ${border}`
            }}>
              <button
                onClick={() => setBgMode("sand")}
                style={{
                  background: !isDark ? "#ffffff" : "transparent",
                  color: !isDark ? "#0A1128" : "rgba(255,255,255,0.6)",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 800,
                  cursor: "pointer",
                  fontFamily: "var(--font-head)"
                }}
              >
                🏖️ Sand (#FAF7F2)
              </button>
              <button
                onClick={() => setBgMode("navy")}
                style={{
                  background: isDark ? "#0EA5E9" : "transparent",
                  color: isDark ? "#ffffff" : "#0A1128",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 800,
                  cursor: "pointer",
                  fontFamily: "var(--font-head)"
                }}
              >
                ⚓ Navy (#0A1128)
              </button>
            </div>

            <Link href="/" className="btn btn-navy" style={{ textDecoration: "none", padding: "8px 16px", fontSize: "12px" }}>
              Back to Site →
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section style={{ padding: "60px 0 40px" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "700px" }}>
          <span style={{
            fontSize: "11px",
            fontWeight: 800,
            color: "#0EA5E9",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontFamily: "var(--font-head)"
          }}>
            Pure SVG Code Lab
          </span>
          <h1 style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(32px, 5vw, 44px)",
            fontWeight: 900,
            margin: "12px 0",
            letterSpacing: "-0.03em"
          }}>
            Code-Generated Brand Identities
          </h1>
          <p style={{ fontSize: "15px", color: textMuted, lineHeight: "1.6" }}>
            Every concept below is rendered straight from pure SVG/React vector code—zero raster images, 100% resolution independent, and ready to drop into any navbar or favicon.
          </p>
        </div>
      </section>

      {/* ─── LOGO CONCEPTS GRID ──────────────────────────────────── */}
      <section style={{ padding: "20px 0 90px" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "32px"
          }}>
            {concepts.map((c) => {
              const isCopied = copiedId === c.id;
              return (
                <div
                  key={c.id}
                  style={{
                    background: cardBg,
                    border: `1.5px solid ${border}`,
                    borderRadius: "16px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.5)" : "0 4px 20px rgba(10,17,40,0.04)",
                    transition: "transform 0.2s"
                  }}
                >
                  {/* Card Title & Tag */}
                  <div>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "#0EA5E9", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {c.concept}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-head)", fontSize: "18px", fontWeight: 800, margin: "4px 0 0", color: textPrimary }}>
                      {c.title}
                    </h3>
                  </div>

                  {/* SVG Canvas Stage */}
                  <div style={{
                    background: isDark ? "#0A1128" : "#FAF7F2",
                    border: `1px solid ${border}`,
                    borderRadius: "12px",
                    height: "160px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px"
                  }}>
                    {c.render("#0EA5E9")}
                  </div>

                  {/* Brand Lockup Preview (Icon + Typography) */}
                  <div style={{
                    background: isDark ? "rgba(255,255,255,0.02)" : "rgba(10,17,40,0.02)",
                    border: `1px solid ${border}`,
                    borderRadius: "8px",
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                  }}>
                    <div style={{ transform: "scale(0.65)" }}>
                      {c.render("#0EA5E9")}
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "16px", color: textPrimary, letterSpacing: "-0.03em" }}>
                        Nativa
                      </div>
                      <div style={{ fontSize: "9px", color: textMuted, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        Web Studio · Santo Domingo
                      </div>
                    </div>
                  </div>

                  {/* Concept Description */}
                  <p style={{ fontSize: "13px", color: textMuted, lineHeight: "1.6", margin: 0, flexGrow: 1 }}>
                    {c.desc}
                  </p>

                  {/* Copy Code Action Button */}
                  <button
                    onClick={() => copySvg(c.id, c.svgCode)}
                    style={{
                      background: isCopied ? "#10B981" : isDark ? "rgba(255,255,255,0.08)" : "var(--navy-trench)",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "12px",
                      fontSize: "13px",
                      fontWeight: 800,
                      fontFamily: "var(--font-head)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      transition: "all 0.2s"
                    }}
                  >
                    {isCopied ? "✓ SVG Code Copied!" : "📋 Copy SVG Code"}
                  </button>

                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
