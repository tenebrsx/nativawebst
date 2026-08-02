"use client";

import Link from "next/link";

export type DemoTheme = "coffee" | "gold" | "dental" | "villas" | "legal" | "auto" | "dark";

interface DemoTopBarProps {
  templateName: string;
  templateCategory: string;
  whatsappMessage: string;
  theme?: DemoTheme;
}

export function DemoTopBar({ templateName, templateCategory, whatsappMessage, theme = "dark" }: DemoTopBarProps) {
  const encodedMsg = encodeURIComponent(whatsappMessage);
  const waUrl = `https://wa.me/18093588113?text=${encodedMsg}`;

  // Theme presets that seamlessly blend with each sub-site's aesthetic
  const themeStyles: Record<DemoTheme, {
    bg: string;
    border: string;
    text: string;
    demosBg: string;
    demosText: string;
    demosBorder: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    ctaBg: string;
    ctaText: string;
  }> = {
    coffee: {
      bg: "rgba(31, 18, 11, 0.78)",
      border: "1px solid rgba(217, 107, 67, 0.22)",
      text: "#FDFBF7",
      demosBg: "rgba(217, 107, 67, 0.16)",
      demosText: "#D96B43",
      demosBorder: "1px solid rgba(217, 107, 67, 0.35)",
      badgeBg: "rgba(244, 235, 217, 0.12)",
      badgeText: "#E5C3B2",
      badgeBorder: "1px solid rgba(244, 235, 217, 0.2)",
      ctaBg: "linear-gradient(135deg, #D96B43 0%, #C25630 100%)",
      ctaText: "#FFFFFF"
    },
    gold: {
      bg: "rgba(10, 17, 40, 0.82)",
      border: "1px solid rgba(215, 166, 57, 0.25)",
      text: "#F8FAFC",
      demosBg: "rgba(215, 166, 57, 0.16)",
      demosText: "#D7A639",
      demosBorder: "1px solid rgba(215, 166, 57, 0.35)",
      badgeBg: "rgba(215, 166, 57, 0.12)",
      badgeText: "#E2C476",
      badgeBorder: "1px solid rgba(215, 166, 57, 0.25)",
      ctaBg: "linear-gradient(135deg, #D7A639 0%, #B88A24 100%)",
      ctaText: "#0A1128"
    },
    dental: {
      bg: "rgba(15, 30, 60, 0.82)",
      border: "1px solid rgba(56, 189, 248, 0.22)",
      text: "#FFFFFF",
      demosBg: "rgba(56, 189, 248, 0.16)",
      demosText: "#38BDF8",
      demosBorder: "1px solid rgba(56, 189, 248, 0.35)",
      badgeBg: "rgba(255, 255, 255, 0.1)",
      badgeText: "#BAE6FD",
      badgeBorder: "1px solid rgba(255, 255, 255, 0.15)",
      ctaBg: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
      ctaText: "#FFFFFF"
    },
    villas: {
      bg: "rgba(7, 16, 38, 0.82)",
      border: "1px solid rgba(20, 184, 166, 0.25)",
      text: "#F8FAFC",
      demosBg: "rgba(20, 184, 166, 0.16)",
      demosText: "#2DD4BF",
      demosBorder: "1px solid rgba(20, 184, 166, 0.35)",
      badgeBg: "rgba(20, 184, 166, 0.12)",
      badgeText: "#99F6E4",
      badgeBorder: "1px solid rgba(20, 184, 166, 0.25)",
      ctaBg: "linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)",
      ctaText: "#FFFFFF"
    },
    legal: {
      bg: "rgba(15, 23, 42, 0.85)",
      border: "1px solid rgba(217, 119, 6, 0.22)",
      text: "#FFFFFF",
      demosBg: "rgba(217, 119, 6, 0.16)",
      demosText: "#F59E0B",
      demosBorder: "1px solid rgba(217, 119, 6, 0.35)",
      badgeBg: "rgba(255, 255, 255, 0.08)",
      badgeText: "#FDE68A",
      badgeBorder: "1px solid rgba(255, 255, 255, 0.12)",
      ctaBg: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
      ctaText: "#FFFFFF"
    },
    auto: {
      bg: "rgba(15, 23, 42, 0.85)",
      border: "1px solid rgba(239, 68, 68, 0.25)",
      text: "#FFFFFF",
      demosBg: "rgba(239, 68, 68, 0.16)",
      demosText: "#F87171",
      demosBorder: "1px solid rgba(239, 68, 68, 0.35)",
      badgeBg: "rgba(255, 255, 255, 0.08)",
      badgeText: "#FCA5A5",
      badgeBorder: "1px solid rgba(255, 255, 255, 0.12)",
      ctaBg: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
      ctaText: "#FFFFFF"
    },
    dark: {
      bg: "rgba(10, 17, 40, 0.75)",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      text: "#FFFFFF",
      demosBg: "rgba(14, 165, 233, 0.18)",
      demosText: "#38BDF8",
      demosBorder: "1px solid rgba(56, 189, 248, 0.3)",
      badgeBg: "rgba(255, 255, 255, 0.08)",
      badgeText: "#94A3B8",
      badgeBorder: "1px solid rgba(255, 255, 255, 0.1)",
      ctaBg: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      ctaText: "#FFFFFF"
    }
  };

  const s = themeStyles[theme] || themeStyles.dark;

  return (
    <div style={{
      position: "fixed",
      top: "14px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "calc(100% - 32px)",
      maxWidth: "1180px",
      zIndex: 9999,
      background: s.bg,
      backdropFilter: "blur(20px) saturate(190%)",
      WebkitBackdropFilter: "blur(20px) saturate(190%)",
      border: s.border,
      borderRadius: "9999px",
      padding: "6px 14px",
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
    }}>
      {/* Left: Navigation links */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>

        <Link
          href="/"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            color: s.text,
            border: "1px solid rgba(255, 255, 255, 0.08)",
            textDecoration: "none",
            padding: "5px 12px",
            borderRadius: "9999px",
            fontSize: "11px",
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            opacity: 0.9
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Altamar
        </Link>

        {/* Separator */}
        <div style={{ width: "1px", height: "14px", background: "rgba(255, 255, 255, 0.15)", margin: "0 4px" }} className="nav-link-desktop" />

        {/* Template info */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="nav-link-desktop">
          <span style={{
            background: s.badgeBg,
            color: s.badgeText,
            border: s.badgeBorder,
            padding: "2px 8px",
            borderRadius: "9999px",
            fontSize: "9.5px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.08em"
          }}>
            {templateCategory}
          </span>
          <span style={{ fontWeight: 700, color: s.text, fontSize: "11.5px" }}>
            {templateName}
          </span>
        </div>
      </div>

      {/* Right: Action CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "11px", color: s.text, opacity: 0.65, fontWeight: 600 }} className="nav-link-desktop">
          Lanzamiento en 48h
        </span>
        
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: s.ctaBg,
            color: s.ctaText,
            textDecoration: "none",
            padding: "6px 15px",
            borderRadius: "9999px",
            fontSize: "11.5px",
            fontWeight: 900,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
            border: "1px solid rgba(255, 255, 255, 0.25)"
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          Reclamar Esta Web
        </a>
      </div>
    </div>
  );
}
