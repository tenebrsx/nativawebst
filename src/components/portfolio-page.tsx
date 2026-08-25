"use client";

import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import PortfolioGrid from "@/components/portfolio-grid";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

export default function PortfolioPage() {
  const { lang } = useGeo();
  const dict = translations[lang];
  const pageDict = dict.portfolioPage;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>

      <SiteNav />

      {/* ─── PORTFOLIO HERO ──────────────────────────────────────── */}
      <section style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        padding: "70px 0 50px"
      }}>
        <div className="container">
          
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px" }}>
            <span className="section-label">
              {pageDict.label}
            </span>
            <h1 style={{
              fontFamily: "var(--font-head)",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 900,
              color: "var(--navy-trench)",
              letterSpacing: "-0.03em",
              lineHeight: "1.15",
              marginBottom: "16px"
            }}>
              {pageDict.title}
            </h1>
            <p style={{
              fontSize: "16px",
              color: "var(--muted)",
              lineHeight: "1.65",
              margin: 0
            }}>
              {pageDict.sub}
            </p>
          </div>

          {/* Proof Stats Counter Strip */}
          <div className="stats-strip" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "20px",
            background: "var(--surface)",
            border: "1.5px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "24px 32px",
            boxShadow: "var(--shadow-sm)"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "32px", fontWeight: 900, color: "var(--navy-trench)" }}>
                {pageDict.stat_built}
              </div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "2px" }}>
                {pageDict.stat_built_lbl}
              </div>
            </div>

            <div style={{ textAlign: "center", borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "32px", fontWeight: 900, color: "var(--coral-blue)" }}>
                {pageDict.stat_speed}
              </div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "2px" }}>
                {pageDict.stat_speed_lbl}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "32px", fontWeight: 900, color: "#10B981" }}>
                {pageDict.stat_score}
              </div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "2px" }}>
                {pageDict.stat_score_lbl}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── MAIN PORTFOLIO INTERACTIVE GRID SECTION ────────────── */}
      <section style={{ padding: "60px 0 90px", background: "var(--bg)" }}>
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>

      {/* ─── CUSTOM DEMO CALLOUT BANNER ──────────────────────────── */}
      <section style={{
        background: "var(--navy-trench)",
        color: "#ffffff",
        padding: "60px 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "640px" }}>
          <span style={{
            fontSize: "11px",
            fontWeight: 800,
            color: "var(--coral-blue)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontFamily: "var(--font-head)"
          }}>
            {lang === "es" ? "DEMO A MEDIDA" : "CUSTOM DEMO"}
          </span>
          <h2 style={{
            fontFamily: "var(--font-head)",
            fontSize: "28px",
            fontWeight: 900,
            margin: "12px 0",
            letterSpacing: "-0.02em"
          }}>
            {lang === "es"
              ? "¿No ves tu industria específica?"
              : "Don't see your specific industry?"}
          </h2>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.65)",
            lineHeight: "1.6",
            marginBottom: "28px"
          }}>
            {lang === "es"
              ? "Creamos una previsualización interactiva de 5 minutos adaptada exactamente al modelo de tu negocio sin ningún costo."
              : "We can engineer a custom 5-minute interactive preview tailored specifically to your business model at zero cost."}
          </p>
          <Link href="/#consultation" className="btn btn-launch" style={{ textDecoration: "none", padding: "14px 32px" }}>
            {lang === "es" ? "Solicitar Previsualización Gratis →" : "Request Custom Preview →"}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
