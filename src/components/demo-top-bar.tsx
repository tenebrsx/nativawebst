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
      position: "sticky",
      top: 0,
      zIndex: 9999,
      background: "#0A1128",
      color: "#ffffff",
      borderBottom: "1.5px solid #0EA5E9",
      padding: "10px 16px",
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      {/* Left: Back Link & Badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link
          href="/demos"
          style={{
            background: "#0EA5E9",
            color: "#ffffff",
            textDecoration: "none",
            padding: "4px 10px",
            borderRadius: "6px",
            fontSize: "11px",
            fontWeight: 800,
            transition: "background 0.2s"
          }}
        >
          🎮 Playground Demos
        </Link>
        <Link
          href="/"
          style={{
            background: "rgba(255,255,255,0.1)",
            color: "#ffffff",
            textDecoration: "none",
            padding: "4px 10px",
            borderRadius: "6px",
            fontSize: "11px",
            fontWeight: 700,
            transition: "background 0.2s"
          }}
        >
          ← Altamar Home
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{
            background: "#0EA5E9",
            color: "#fff",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "9px",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.08em"
          }}>
            {templateCategory}
          </span>
          <span style={{ fontWeight: 800, color: "#F8FAFC" }} className="nav-link-desktop">
            {templateName}
          </span>
        </div>
      </div>

      {/* Right: CTA Button */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)" }} className="nav-link-desktop">
          ⚡ Lanzamiento en 48h
        </span>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            color: "#ffffff",
            textDecoration: "none",
            padding: "6px 14px",
            borderRadius: "6px",
            fontSize: "11.5px",
            fontWeight: 900,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 2px 8px rgba(37,211,102,0.4)"
          }}
        >
          💬 Reclamar Esta Web →
        </a>
      </div>
    </div>
  );
}
