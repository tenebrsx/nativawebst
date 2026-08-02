"use client";

import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import PortfolioGrid from "@/components/portfolio-grid";
import Link from "next/link";

export default function PortfolioPage() {
  const { lang, setLang, currency, setCurrency } = useGeo();
  const dict = translations[lang];
  const pageDict = dict.portfolioPage;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>

      {/* ─── NAVBAR ──────────────────────────────────────────────── */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 1px 8px rgba(10,17,40,0.02)",
      }}>
        <div className="container" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{
              fontFamily: "var(--font-head)",
              fontWeight: 900,
              fontSize: "20px",
              color: "var(--navy-trench)",
              letterSpacing: "-0.04em",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}>
              <span>Altamar</span>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--coral-blue)", marginTop: "2px" }}>
                <path d="M1 8.5C3.5 8.5 4.5 6 7 6C9.5 6 10.5 8.5 13 8.5C15.5 8.5 16.5 6 18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M3 3C5.5 3 6.5 0.5 9 0.5C11.5 0.5 12.5 3 15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>
            <div style={{ fontSize: "9px", color: "var(--gray-400)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>
              {lang === "es" ? "Estudio Web · Santo Domingo, RD" : "Web Studio · Santo Domingo, DR"}
            </div>
          </Link>

          {/* Nav links / Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link href="/#services" className="nav-link-desktop" style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", fontFamily: "var(--font-head)", textDecoration: "none" }}>
              {dict.nav.services}
            </Link>
            <Link href="/#how-it-works" className="nav-link-desktop" style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", fontFamily: "var(--font-head)", textDecoration: "none" }}>
              {dict.nav.process}
            </Link>
            <Link href="/#pricing" className="nav-link-desktop" style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", fontFamily: "var(--font-head)", textDecoration: "none" }}>
              {dict.nav.pricing}
            </Link>
            <Link href="/portfolio" className="nav-link-desktop" style={{ fontSize: "13px", fontWeight: 800, color: "var(--coral-blue)", fontFamily: "var(--font-head)", textDecoration: "none" }}>
              {dict.nav.portfolio}
            </Link>

            {/* Language & Currency Controls */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center", borderLeft: "1px solid var(--border)", paddingLeft: "16px" }}>
              <button
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-head)", fontSize: "12px", fontWeight: 800,
                  color: "var(--navy-trench)", opacity: 0.8
                }}
              >
                {lang.toUpperCase()}
              </button>
              <button
                onClick={() => setCurrency(currency === "USD" ? "DOP" : "USD")}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-head)", fontSize: "12px", fontWeight: 800,
                  color: "var(--navy-trench)", opacity: 0.8
                }}
              >
                {currency}
              </button>
            </div>

            <Link href="/#consultation" className="btn btn-navy" style={{ padding: "10px 20px", fontSize: "13px", textDecoration: "none" }}>
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      </nav>

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
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{
        background: "var(--navy-trench)",
        padding: "80px 0 48px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "rgba(255,255,255,0.4)"
      }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "48px",
            marginBottom: "64px"
          }} className="footer-grid">
            
            {/* Column 1: Brand Info */}
            <div>
              <div style={{
                fontFamily: "var(--font-head)",
                fontWeight: 900,
                fontSize: "24px",
                color: "#fff",
                marginBottom: "16px",
                letterSpacing: "-0.04em",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                <span>Altamar</span>
                <svg width="20" height="14" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--coral-blue)" }}>
                  <path d="M1 8.5C3.5 8.5 4.5 6 7 6C9.5 6 10.5 8.5 13 8.5C15.5 8.5 16.5 6 18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p style={{ fontSize: "13px", lineHeight: "1.7", marginBottom: "24px", maxWidth: "300px" }}>
                {lang === "es" 
                  ? "Interfaces de alto rendimiento construidas con precisión e ingeniería local para Santo Domingo y marcas globales."
                  : "High-performance web platforms engineered locally in Santo Domingo to scale worldwide businesses."}
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href="https://wa.me/18093588113"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    padding: "8px 16px",
                    fontSize: "12.5px",
                    color: "#fff",
                    fontWeight: 700,
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all 0.2s"
                  }}
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Column 2: Nav Quick Links */}
            <div>
              <h4 style={{ color: "#fff", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 800, marginBottom: "20px" }}>
                {lang === "es" ? "Navegación" : "Sitemap"}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px" }}>
                <li><Link href="/#services" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{dict.nav.services}</Link></li>
                <li><Link href="/#how-it-works" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{dict.nav.process}</Link></li>
                <li><Link href="/#pricing" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{dict.nav.pricing}</Link></li>
                <li><Link href="/portfolio" style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>{dict.nav.portfolio}</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact details */}
            <div>
              <h4 style={{ color: "#fff", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 800, marginBottom: "20px" }}>
                {lang === "es" ? "Contacto" : "Reach Us"}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px", lineHeight: 1.6 }}>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>
                  Av. Winston Churchill<br />
                  Santo Domingo, RD
                </li>
                <li>
                  <a href="mailto:info@altamar.io" style={{ color: "var(--coral-blue)", fontWeight: 600, textDecoration: "none" }}>info@altamar.io</a>
                </li>
                <li>
                  <a href="tel:+18093588113" style={{ fontWeight: 600, color: "#fff", textDecoration: "none" }}>+1 (809) 358-8113</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Local Trust Seal */}
            <div>
              <h4 style={{ color: "#fff", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 800, marginBottom: "20px" }}>
                {lang === "es" ? "Identidad" : "Commitment"}
              </h4>
              <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "var(--radius)",
                padding: "20px",
                textAlign: "left"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <span style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "12px", color: "#fff", letterSpacing: "0.02em" }}>
                    HECHO EN RD
                  </span>
                </div>
                <p style={{ fontSize: "11.5px", lineHeight: "1.6" }}>
                  {lang === "es" 
                    ? "Orgullosamente desarrollados y operados desde la República Dominicana para potenciar marcas del Caribe al mundo."
                    : "Proudly engineered in the Dominican Republic to scale businesses from Santo Domingo to global reach."}
                </p>
              </div>
            </div>

          </div>

          {/* Bottom section */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "12px"
          }}>
            <p style={{ color: "rgba(255,255,255,0.3)", margin: 0 }}>
              © {new Date().getFullYear()} Altamar Web Studio. Santo Domingo, Dominican Republic. All rights reserved.
            </p>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", margin: 0 }}>
              {lang === "es" ? "Diseñado con alto contraste de ingeniería." : "Built with high engineering contrast."}
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
