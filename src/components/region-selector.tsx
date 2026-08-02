"use client";

import React, { useState, useRef, useEffect } from "react";
import { useGeo } from "@/lib/geo-context";

export function RegionSelector() {
  const { lang, setLang, currency, setCurrency, country, countryName, isDR, loading, resetToDetected } = useGeo();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const flagEmoji = isDR ? "🇩🇴" : country === "US" ? "🇺🇸" : "🌐";

  return (
    <div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        title="Detector de Región & Moneda"
        style={{
          background: "var(--bg)",
          color: "var(--navy-deep)",
          border: "1px solid var(--border)",
          borderRadius: "9999px",
          padding: "5px 12px",
          fontSize: "11.5px",
          fontWeight: 800,
          fontFamily: "var(--font-head)",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
          boxShadow: "var(--shadow-sm)",
          transition: "all 0.2s ease"
        }}
      >
        <span>{flagEmoji}</span>
        <span>{currency === "DOP" ? "RD$ DOP" : "$ USD"}</span>
        <span style={{ color: "var(--coral-blue)", opacity: 0.6 }}>•</span>
        <span style={{ textTransform: "uppercase" }}>{lang}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      {/* Dropdown Modal */}
      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          right: 0,
          width: "280px",
          background: "#FFFFFF",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "14px",
          padding: "16px",
          boxShadow: "0 20px 40px rgba(10, 17, 40, 0.18)",
          zIndex: 99999,
          color: "#0F172A",
          fontFamily: "system-ui, -apple-system, sans-serif",
          animation: "fadeIn 0.15s ease-out"
        }}>
          {/* Header & Detected Location */}
          <div style={{ borderBottom: "1px solid #F1F5F9", paddingBottom: "10px", marginBottom: "12px" }}>
            <div style={{ fontSize: "10px", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Región Detectada / Region
            </div>
            <div style={{ fontSize: "13px", fontWeight: 900, color: "#0F172A", marginTop: "2px", display: "flex", alignItems: "center", gap: "6px" }}>
              <span>{flagEmoji}</span>
              <span>{loading ? "Detectando..." : countryName}</span>
              <span style={{ fontSize: "10px", background: isDR ? "#DCFCE7" : "#E0F2FE", color: isDR ? "#166534" : "#0369A1", padding: "1px 6px", borderRadius: "9999px", fontWeight: 800 }}>
                {isDR ? "R.D." : "Global"}
              </span>
            </div>
          </div>

          {/* Currency Toggle */}
          <div style={{ marginBottom: "14px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#475569", marginBottom: "6px" }}>
              Moneda / Currency:
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
              <button
                onClick={() => setCurrency("DOP")}
                style={{
                  padding: "8px 10px",
                  borderRadius: "8px",
                  fontSize: "11.5px",
                  fontWeight: 800,
                  border: currency === "DOP" ? "2px solid #0EA5E9" : "1px solid #E2E8F0",
                  background: currency === "DOP" ? "#F0F9FF" : "#F8FAFC",
                  color: currency === "DOP" ? "#0284C7" : "#475569",
                  cursor: "pointer"
                }}
              >
                🇩🇴 RD$ (DOP)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                style={{
                  padding: "8px 10px",
                  borderRadius: "8px",
                  fontSize: "11.5px",
                  fontWeight: 800,
                  border: currency === "USD" ? "2px solid #0EA5E9" : "1px solid #E2E8F0",
                  background: currency === "USD" ? "#F0F9FF" : "#F8FAFC",
                  color: currency === "USD" ? "#0284C7" : "#475569",
                  cursor: "pointer"
                }}
              >
                🇺🇸 $ (USD)
              </button>
            </div>
          </div>

          {/* Language Toggle */}
          <div style={{ marginBottom: "14px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#475569", marginBottom: "6px" }}>
              Idioma / Language:
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
              <button
                onClick={() => setLang("es")}
                style={{
                  padding: "8px 10px",
                  borderRadius: "8px",
                  fontSize: "11.5px",
                  fontWeight: 800,
                  border: lang === "es" ? "2px solid #0EA5E9" : "1px solid #E2E8F0",
                  background: lang === "es" ? "#F0F9FF" : "#F8FAFC",
                  color: lang === "es" ? "#0284C7" : "#475569",
                  cursor: "pointer"
                }}
              >
                Español (ES)
              </button>
              <button
                onClick={() => setLang("en")}
                style={{
                  padding: "8px 10px",
                  borderRadius: "8px",
                  fontSize: "11.5px",
                  fontWeight: 800,
                  border: lang === "en" ? "2px solid #0EA5E9" : "1px solid #E2E8F0",
                  background: lang === "en" ? "#F0F9FF" : "#F8FAFC",
                  color: lang === "en" ? "#0284C7" : "#475569",
                  cursor: "pointer"
                }}
              >
                English (EN)
              </button>
            </div>
          </div>

          {/* Reset Auto-detection Link */}
          <div style={{ textAlign: "center", borderTop: "1px solid #F1F5F9", paddingTop: "8px" }}>
            <button
              onClick={() => {
                resetToDetected();
                setOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                fontSize: "10.5px",
                color: "#64748B",
                textDecoration: "underline",
                cursor: "pointer",
                fontWeight: 600
              }}
            >
              🔄 Restablecer Detección Automática
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
