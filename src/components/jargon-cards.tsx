"use client";
import { useState } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";

export default function JargonCards() {
  const [flipped, setFlipped] = useState<number | null>(null);
  const { lang } = useGeo();

  const dict = translations[lang].jargon;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {dict.cards.map((c, i) => {
        const open = flipped === i;
        return (
          <div
            key={i}
            onClick={() => setFlipped(open ? null : i)}
            className="card card-hover"
            style={{
              padding: "20px 24px",
              cursor: "pointer",
              borderColor: open ? "var(--coral-blue)" : "var(--border)",
              transition: "all 0.2s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div>
                  <div style={{
                    fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em",
                    textTransform: "uppercase", color: "var(--gray-400)",
                    fontFamily: "var(--font-head)", marginBottom: "2px",
                  }}>
                    {open ? (lang === "es" ? "En español claro:" : "In plain English:") : (lang === "es" ? "Lenguaje técnico:" : "Tech speak:")}
                  </div>
                  <div style={{
                    fontSize: "15px", fontWeight: 700,
                    fontFamily: "var(--font-head)", color: "var(--navy-trench)",
                  }}>
                    {open ? c.plain : c.tech}
                  </div>
                  {open && (
                    <div className="animate-up" style={{
                      fontSize: "13px", color: "var(--muted)",
                      marginTop: "6px", lineHeight: "1.6",
                    }}>
                      {c.why}
                    </div>
                  )}
                </div>
              </div>
              <span style={{
                fontSize: "18px", color: "var(--coral-blue)",
                transform: open ? "rotate(45deg)" : "none",
                transition: "transform 0.2s",
                flexShrink: 0,
              }}>+</span>
            </div>
          </div>
        );
      })}
      <p style={{ fontSize: "12px", color: "var(--gray-400)", textAlign: "center" }}>
        {dict.hint.replace("👆 ", "").replace("👆", "")}
      </p>
    </div>
  );
}
