"use client";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import WhatsappBubble from "@/components/whatsapp-bubble";
import PricingBuilder from "@/components/pricing-builder";
import SailingRoadmap from "@/components/sailing-roadmap";
import SiteNav from "@/components/site-nav";
import Reveal from "@/components/reveal";
import {
  BrandMarquee,
  CountStat,
  HeroAtmosphere,
  HorizonHalo,
  PointerGlow,
  ServiceGlyph,
} from "@/components/home-visuals";
import { openWhatsAppFunnel } from "@/lib/whatsapp";

const PARTNERS = [
  "SDQ Dental Care",
  "Punta Cana Real Estate",
  "Zona Colonial Tours",
  "Naco Law Group",
  "Las Terrenas Rentals",
  "Bávaro Swim",
  "Café Terrenas",
];

export default function Home() {
  const { lang } = useGeo();
  const dict = translations[lang];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative" }}>
      <PointerGlow />
      <SiteNav />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="hero-section">
        <HeroAtmosphere />
        <div className="container">
          <div className="hero-badge hero-in">
            <span className="live-dot" />
            <span className="hero-badge-kicker">
              {dict.hero.badge_label}
            </span>
            <span className="hero-badge-sub">
              {dict.hero.badge_sub}
            </span>
          </div>

          <div className="hero-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "60px",
            alignItems: "center",
          }}>
            <div style={{ maxWidth: "620px", width: "100%" }}>
              <h1 className="hero-title hero-in hero-in-d2">
                {dict.hero.title_1}<br />
                <span className="wave-accent">{dict.hero.title_2}</span><br />
                {dict.hero.title_3}
              </h1>

              <p className="hero-lede hero-in hero-in-d3">
                {dict.hero.desc}
              </p>

              <div className="hero-ctas hero-in hero-in-d4">
                <button
                  type="button"
                  className="btn btn-launch"
                  style={{ fontSize: "15px", padding: "16px 32px" }}
                  onClick={() => openWhatsAppFunnel("hero")}
                >
                  {dict.hero.cta_launch}
                </button>
                <a href="#pricing" className="btn btn-outline" style={{ fontSize: "15px", padding: "14.5px 30.5px" }}>
                  {dict.hero.cta_price}
                </a>
              </div>
              <p className="hero-proof hero-in hero-in-d4">{dict.hero.proof}</p>

              <div className="hero-stats hero-in hero-in-d5" style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
                {[
                  { num: dict.hero.stat_delivery, label: dict.hero.stat_delivery_lbl },
                  { num: dict.hero.stat_brands, label: dict.hero.stat_brands_lbl },
                  { num: dict.hero.stat_updates, label: dict.hero.stat_updates_lbl },
                ].map(s => (
                  <CountStat key={s.label} value={s.num} label={s.label} />
                ))}
              </div>
            </div>

            <div className="hero-in hero-in-d6" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <HorizonHalo>
                <div className="float-phone">
                  <WhatsappBubble />
                </div>
              </HorizonHalo>
              <button
                type="button"
                onClick={() => openWhatsAppFunnel("hero-phone")}
                style={{
                  fontSize: "11.5px",
                  color: "var(--gray-muted)",
                  textAlign: "center",
                  maxWidth: "220px",
                  lineHeight: "1.45",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {dict.hero.whatsapp_footer}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND STRIP ────────────────────────────────────────── */}
      <section style={{ background: "var(--gray-foam)", borderBottom: "1px solid var(--border)", padding: "22px 0", overflow: "hidden" }}>
        <div className="container">
          <BrandMarquee label={dict.partners.label} names={PARTNERS} />
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────── */}
      <section id="services" style={{ padding: "90px 0", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">{dict.services.label}</div>
            <h2 className="section-title">{dict.services.title}</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              {dict.services.sub}
            </p>
          </Reveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "24px",
          }}>
            {dict.services.items.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <button
                  type="button"
                  className="card card-hover card-shine"
                  onClick={() => openWhatsAppFunnel("services")}
                  style={{ padding: "32px", background: "var(--white)", borderColor: "var(--border)", height: "100%", textAlign: "left", cursor: "pointer", width: "100%" }}
                >
                  <ServiceGlyph icon={s.icon} title={s.title} />
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "16px", fontWeight: 800, color: "var(--navy-trench)", marginBottom: "10px" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.65", color: "var(--muted)" }}>{s.desc}</p>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div id="stack" style={{ marginTop: "48px", padding: "28px", background: "var(--gray-foam)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)" }}>
              <div className="section-label" style={{ marginBottom: "8px" }}>{dict.services.stack_label}</div>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "20px", maxWidth: "560px" }}>{dict.services.stack_sub}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "16px" }}>
                {dict.services.stack.map((s) => (
                  <button
                    key={s.title}
                    type="button"
                    className="card card-hover"
                    onClick={() => openWhatsAppFunnel("stack", s.need)}
                    style={{ padding: "22px", textAlign: "left", cursor: "pointer", width: "100%", background: "var(--white)" }}
                  >
                    <ServiceGlyph icon={s.icon} title={s.title} />
                    <h3 style={{ fontFamily: "var(--font-head)", fontSize: "15px", fontWeight: 800, color: "var(--navy-trench)", marginBottom: "8px" }}>{s.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{s.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── PROCESS (3 STEPS) ────────────────────────────────────── */}
      <SailingRoadmap />

      <section style={{ padding: "90px 0", background: "var(--gray-foam)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-label">{dict.proof.label}</div>
            <h2 className="section-title">{dict.proof.title}</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>{dict.proof.sub}</p>
          </Reveal>
          <div className="proof-grid">
            {dict.proof.items.map((item, i) => (
              <Reveal key={item.tag} delay={i * 80}>
                <button
                  type="button"
                  className="card card-hover"
                  onClick={() => openWhatsAppFunnel("proof")}
                  style={{ padding: "28px", height: "100%", textAlign: "left", width: "100%", cursor: "pointer" }}
                >
                  <div className="section-label" style={{ marginBottom: "10px" }}>{item.tag}</div>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "18px", fontWeight: 800, marginBottom: "10px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{item.body}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING CONFIGURATOR ────────────────────────────────── */}
      <section id="pricing" style={{ padding: "90px 0", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">{dict.pricing.label}</div>
            <h2 className="section-title">{dict.pricing.title}</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              {dict.pricing.sub}
            </p>
          </Reveal>
          <PricingBuilder />
        </div>
      </section>

      {/* ─── CONTACT FORM ────────────────────────────────────────── */}
      <section id="consultation" style={{ padding: "90px 0", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <Reveal style={{ textAlign: "center" }}>
            <div className="section-label">{dict.contact.label}</div>
            <h2 className="section-title">{dict.contact.title}</h2>
            <p className="section-sub" style={{ margin: "0 auto 36px" }}>{dict.contact.desc}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", textAlign: "left", marginBottom: "32px" }}>
              {[dict.contact.bullet_1, dict.contact.bullet_2, dict.contact.bullet_3, dict.contact.bullet_4].map((text, i) => (
                <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ fontFamily: "var(--font-head)", fontWeight: 800, color: "var(--coral-blue)", fontSize: "13px", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>
            <button type="button" className="btn btn-launch" style={{ padding: "16px 32px", fontSize: "15px" }} onClick={() => openWhatsAppFunnel("close")}>
              {dict.contact.cta}
            </button>
          </Reveal>
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
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all 0.2s"
                  }}
                >
                  WhatsApp
                </button>
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
