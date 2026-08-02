"use client";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import WhatsappBubble from "@/components/whatsapp-bubble";
import JargonCards from "@/components/jargon-cards";
import PricingBuilder from "@/components/pricing-builder";
import ContactForm from "@/components/contact-form";
import SailingRoadmap from "@/components/sailing-roadmap";
import { RegionSelector } from "@/components/region-selector";

export default function Home() {
  const { lang, setLang, currency, setCurrency } = useGeo();
  const dict = translations[lang];

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
          <div>
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
          </div>

          {/* Nav links / Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a href="#services" className="nav-link-desktop" style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", fontFamily: "var(--font-head)" }}>
              {dict.nav.services}
            </a>
            <a href="#how-it-works" className="nav-link-desktop" style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", fontFamily: "var(--font-head)" }}>
              {dict.nav.process}
            </a>
            <a href="#pricing" className="nav-link-desktop" style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", fontFamily: "var(--font-head)" }}>
              {dict.nav.pricing}
            </a>
            <a href="/portfolio" className="nav-link-desktop" style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", fontFamily: "var(--font-head)" }}>
              {dict.nav.portfolio}
            </a>

            {/* Language & Currency Region Selector */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center", borderLeft: "1px solid var(--border)", paddingLeft: "16px" }}>
              <RegionSelector />
            </div>

            <a href="#consultation" className="btn btn-navy" style={{ padding: "10px 20px", fontSize: "13px" }}>
              {dict.nav.cta}
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        padding: "90px 0 70px",
      }}>
        <div className="container">
          {/* Micro Tagline */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--coral-light)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "32px",
            border: "1px solid rgba(14,165,233,0.15)"
          }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--coral-blue)", fontFamily: "var(--font-head)", letterSpacing: "0.05em" }}>
              {dict.hero.badge_label}
            </span>
            <span style={{ fontSize: "12px", color: "var(--navy-trench)", fontWeight: 600 }}>
              {dict.hero.badge_sub}
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "60px",
            alignItems: "center",
          }} className="hero-grid">
            {/* Left Column */}
            <div style={{ maxWidth: "620px" }}>
              <h1 style={{
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--navy-trench)",
                marginBottom: "20px",
              }}>
                {dict.hero.title_1}<br />
                <span className="wave-accent">{dict.hero.title_2}</span><br />
                {dict.hero.title_3}
              </h1>

              <p style={{
                fontSize: "17px",
                color: "var(--muted)",
                lineHeight: "1.75",
                marginBottom: "36px",
                maxWidth: "500px",
              }}>
                {dict.hero.desc}
              </p>

              {/* CTAs: Sun Yellow ONLY for "Launch the Ship" primary */}
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "40px" }}>
                <a href="#consultation" className="btn btn-launch" style={{ fontSize: "15px", padding: "16px 32px" }}>
                  {dict.hero.cta_launch}
                </a>
                <a href="#pricing" className="btn btn-outline" style={{ fontSize: "15px", padding: "14.5px 30.5px" }}>
                  {dict.hero.cta_price}
                </a>
              </div>

              {/* Trust stats */}
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
                {[
                  { num: dict.hero.stat_delivery, label: dict.hero.stat_delivery_lbl },
                  { num: dict.hero.stat_brands, label: dict.hero.stat_brands_lbl },
                  { num: dict.hero.stat_updates, label: dict.hero.stat_updates_lbl },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "22px", color: "var(--navy-trench)" }}>
                      {s.num}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--gray-400)", fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (WhatsApp Simulator) */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <WhatsappBubble />
              <a
                href={`https://wa.me/18093588113?text=${encodeURIComponent(lang === "es" ? "¡Hola Nativa! Me interesa programar un sitio web para mi negocio." : "Hi Nativa! I'm interested in building a website for my business.")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "11.5px",
                  color: "var(--gray-muted)",
                  textAlign: "center",
                  maxWidth: "220px",
                  lineHeight: "1.45",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  cursor: "pointer",
                  transition: "color 0.2s"
                }}
              >
                {dict.hero.whatsapp_footer}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND STRIP ────────────────────────────────────────── */}
      <section style={{ background: "var(--gray-foam)", borderBottom: "1px solid var(--border)", padding: "24px 0", overflow: "hidden" }}>
        <div className="container">
          <div className="brand-strip-container">
            <span style={{ fontSize: "11px", color: "var(--gray-400)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", flexShrink: 0 }}>
              {dict.partners.label}
            </span>
            {["SDQ Dental Care", "Punta Cana Real Estate", "Zona Colonial Tours", "Naco Law Group", "Las Terrenas Rentals"].map(n => (
              <span key={n} style={{
                fontSize: "13px", fontWeight: 700, color: "var(--navy-trench)", opacity: 0.6,
                fontFamily: "var(--font-head)", flexShrink: 0
              }}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────── */}
      <section id="services" style={{ padding: "90px 0", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">{dict.services.label}</div>
            <h2 className="section-title">{dict.services.title}</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              {dict.services.sub}
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}>
            {dict.services.items.map(s => (
              <div key={s.title} className="card card-hover" style={{ padding: "32px", background: "var(--white)", borderColor: "var(--border)" }}>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "16px", fontWeight: 800, color: "var(--navy-trench)", marginBottom: "10px" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.65", color: "var(--muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS (3 STEPS) ────────────────────────────────────── */}
      <SailingRoadmap />

      {/* ─── JARGON TRANSLATOR ───────────────────────────────────── */}
      <section style={{ padding: "90px 0", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="jargon-grid">
            <div>
              <div className="section-label">{dict.jargon.label}</div>
              <h2 className="section-title">
                {dict.jargon.title}
              </h2>
              <p className="section-sub">
                {dict.jargon.sub}
              </p>
            </div>
            <JargonCards />
          </div>
        </div>
      </section>

      {/* ─── PRICING CONFIGURATOR ────────────────────────────────── */}
      <section id="pricing" style={{ padding: "90px 0", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">{dict.pricing.label}</div>
            <h2 className="section-title">{dict.pricing.title}</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              {dict.pricing.sub}
            </p>
          </div>
          <PricingBuilder />
        </div>
      </section>

      {/* ─── CONTACT FORM ────────────────────────────────────────── */}
      <section id="consultation" style={{ padding: "90px 0", background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="contact-grid">
            {/* Left */}
            <div>
              <div className="section-label">{dict.contact.label}</div>
              <h2 className="section-title">
                {dict.contact.title}
              </h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.75", marginBottom: "36px" }}>
                {dict.contact.desc}
              </p>

              {/* Specs Checklists (using clean typographic bullets) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  dict.contact.bullet_1,
                  dict.contact.bullet_2,
                  dict.contact.bullet_3,
                  dict.contact.bullet_4,
                ].map((text) => {
                  return (
                    <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{ fontSize: "15px", flexShrink: 0, color: "var(--coral-blue)", fontWeight: 900 }}>—</span>
                      <span style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Form */}
            <ContactForm />
          </div>
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
                <span>Nativa</span>
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
                <li><a href="#services" style={{ transition: "color 0.2s" }}>{dict.nav.services}</a></li>
                <li><a href="#how-it-works" style={{ transition: "color 0.2s" }}>{dict.nav.process}</a></li>
                <li><a href="#pricing" style={{ transition: "color 0.2s" }}>{dict.nav.pricing}</a></li>
                <li><a href="/portfolio" style={{ transition: "color 0.2s" }}>{dict.nav.portfolio}</a></li>
                <li><a href="/logos" style={{ transition: "color 0.2s" }}>Logos Lab</a></li>
                <li><a href="/ads" style={{ transition: "color 0.2s" }}>Instagram Ads</a></li>
                <li><a href="#consultation" style={{ transition: "color 0.2s" }}>{dict.nav.cta}</a></li>
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
                  <a href="mailto:info@nativa.studio" style={{ color: "var(--coral-blue)", fontWeight: 600 }}>info@nativa.studio</a>
                </li>
                <li>
                  <a href="tel:+18093588113" style={{ fontWeight: 600 }}>+1 (809) 358-8113</a>
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
            <p style={{ color: "rgba(255,255,255,0.3)" }}>
              © {new Date().getFullYear()} Nativa Web Studio. Santo Domingo, Dominican Republic. All rights reserved.
            </p>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px" }}>
              {lang === "es" ? "Diseñado con alto contraste de ingeniería." : "Built with high engineering contrast."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
