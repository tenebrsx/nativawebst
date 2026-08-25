"use client";

import Link from "next/link";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { SERVICES, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY, SITE_STREET } from "@/lib/site";
import { openWhatsAppFunnel } from "@/lib/whatsapp";

export default function SiteFooter() {
  const { lang } = useGeo();
  const dict = translations[lang];

  return (
    <footer
      style={{
        background: "var(--navy-trench)",
        padding: "80px 0 48px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "rgba(255,255,255,0.4)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "48px",
            marginBottom: "64px",
          }}
          className="footer-grid"
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 900,
                fontSize: "24px",
                color: "#fff",
                marginBottom: "16px",
                letterSpacing: "-0.04em",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>Nativa</span>
              <svg width="20" height="14" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--coral-blue)" }}>
                <path d="M1 8.5C3.5 8.5 4.5 6 7 6C9.5 6 10.5 8.5 13 8.5C15.5 8.5 16.5 6 18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <p style={{ fontSize: "13px", lineHeight: "1.7", marginBottom: "24px", maxWidth: "300px" }}>
              {lang === "es"
                ? "Sitios web, SEO local, CRM y agentes IA construidos en Santo Domingo para marcas de República Dominicana."
                : "Websites, local SEO, CRM and AI agents engineered in Santo Domingo for businesses across the Dominican Republic."}
            </p>
            <button
              type="button"
              onClick={() => openWhatsAppFunnel("footer")}
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
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              WhatsApp
            </button>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 800, marginBottom: "20px" }}>
              {lang === "es" ? "Servicios" : "Services"}
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px" }}>
              <li>
                <Link href="/servicios" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                  {lang === "es" ? "Todos los servicios" : "All services"}
                </Link>
              </li>
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={service.path} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                    {lang === "es" ? service.nameEs : service.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 800, marginBottom: "20px" }}>
              {lang === "es" ? "Navegación" : "Sitemap"}
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px" }}>
              <li><Link href="/#proof" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{dict.nav.proof}</Link></li>
              <li><Link href="/#how-it-works" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{dict.nav.process}</Link></li>
              <li><Link href="/#pricing" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{dict.nav.pricing}</Link></li>
              <li><Link href="/portfolio" style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>{dict.nav.portfolio}</Link></li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 800, marginBottom: "20px" }}>
              {lang === "es" ? "Contacto" : "Reach Us"}
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px", lineHeight: 1.6 }}>
              <li style={{ color: "rgba(255,255,255,0.6)" }}>
                {SITE_STREET}<br />
                Santo Domingo, RD
              </li>
              <li>
                <a href={`mailto:${SITE_EMAIL}`} style={{ color: "var(--coral-blue)", fontWeight: 600, textDecoration: "none" }}>{SITE_EMAIL}</a>
              </li>
              <li>
                <a href={`tel:${SITE_PHONE}`} style={{ fontWeight: 600, color: "#fff", textDecoration: "none" }}>{SITE_PHONE_DISPLAY}</a>
              </li>
            </ul>
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "var(--radius)",
                padding: "16px",
                marginTop: "20px",
              }}
            >
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "12px", color: "#fff", letterSpacing: "0.02em", marginBottom: "8px" }}>
                HECHO EN RD
              </div>
              <p style={{ fontSize: "11.5px", lineHeight: "1.6", margin: 0 }}>
                {lang === "es"
                  ? "Operamos desde la República Dominicana para marcas del Caribe."
                  : "Operated from the Dominican Republic for Caribbean brands."}
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "12px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", margin: 0 }}>
            © {new Date().getFullYear()} Nativa Web Studio. Santo Domingo, Dominican Republic.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", margin: 0 }}>
            {lang === "es" ? "Diseñado con alto contraste de ingeniería." : "Built with high engineering contrast."}
          </p>
        </div>
      </div>
    </footer>
  );
}
