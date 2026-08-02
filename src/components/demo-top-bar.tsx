"use client";

import Link from "next/link";

interface DemoTopBarProps {
  templateName: string;
  templateCategory: string;
  whatsappMessage: string;
}

export function DemoTopBar({ templateName, templateCategory, whatsappMessage }: DemoTopBarProps) {
  const encodedMsg = encodeURIComponent(whatsappMessage);
  const waUrl = `https://wa.me/18093588113?text=${encodedMsg}`;

  return (
    <div style={{
      position: "fixed",
      top: "14px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "calc(100% - 32px)",
      maxWidth: "1180px",
      zIndex: 9999,
      background: "rgba(10, 17, 40, 0.72)",
      backdropFilter: "blur(18px) saturate(200%)",
      WebkitBackdropFilter: "blur(18px) saturate(200%)",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      borderRadius: "9999px",
      padding: "6px 14px",
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.18)",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
    }}>
      {/* Left: Navigation links */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Link
          href="/demos"
          style={{
            background: "rgba(14, 165, 233, 0.18)",
            color: "#38BDF8",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            textDecoration: "none",
            padding: "5px 12px",
            borderRadius: "9999px",
            fontSize: "11px",
            fontWeight: 800,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            letterSpacing: "0.02em"
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          Demos
        </Link>

        <Link
          href="/"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            color: "#CBD5E1",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            textDecoration: "none",
            padding: "5px 12px",
            borderRadius: "9999px",
            fontSize: "11px",
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            gap: "4px"
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
            background: "rgba(255, 255, 255, 0.08)",
            color: "#94A3B8",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "2px 8px",
            borderRadius: "9999px",
            fontSize: "9.5px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.08em"
          }}>
            {templateCategory}
          </span>
          <span style={{ fontWeight: 700, color: "#F8FAFC", fontSize: "11.5px" }}>
            {templateName}
          </span>
        </div>
      </div>

      {/* Right: Action CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", fontWeight: 600 }} className="nav-link-desktop">
          Lanzamiento en 48h
        </span>
        
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
            color: "#ffffff",
            textDecoration: "none",
            padding: "6px 14px",
            borderRadius: "9999px",
            fontSize: "11.5px",
            fontWeight: 800,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 4px 14px rgba(16, 185, 129, 0.35)",
            border: "1px solid rgba(255, 255, 255, 0.2)"
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
