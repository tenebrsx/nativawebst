"use client";
import Link from "next/link";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import WhatsappBubble from "@/components/whatsapp-bubble";
import PricingBuilder from "@/components/pricing-builder";
import LaunchJourney from "@/components/launch-journey";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import {
  BrandMarquee,
  CountStat,
  HeroAtmosphere,
  HorizonHalo,
  PointerGlow,
} from "@/components/home-visuals";
import ServiceStories, { StackStories } from "@/components/service-stages";
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

export default function HomePage() {
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
      <section id="services" style={{ padding: "90px 0", background: "var(--bg)", borderBottom: "1px solid var(--border)", scrollMarginTop: 88 }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">{dict.services.label}</div>
            <h2 className="section-title">{dict.services.title}</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              {dict.services.sub}
            </p>
          </Reveal>

          <Reveal>
            <ServiceStories />
          </Reveal>

          <Reveal delay={80}>
            <div id="stack" style={{ marginTop: "48px", padding: "28px", background: "var(--gray-foam)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)" }}>
              <div className="section-label" style={{ marginBottom: "8px" }}>{dict.services.stack_label}</div>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "20px", maxWidth: "560px" }}>{dict.services.stack_sub}</p>
              <StackStories />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── PROOF ───────────────────────────────────────────────── */}
      <section id="proof" className="proof-section">
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-label">{dict.proof.label}</div>
            <h2 className="section-title">{dict.proof.title}</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>{dict.proof.sub}</p>
          </Reveal>

          <div className="proof-metrics">
            <div>
              <div className="proof-metric-num">3 sem</div>
              <div className="proof-metric-lbl">{lang === "es" ? "Brief → web viva" : "Brief → live site"}</div>
            </div>
            <div>
              <div className="proof-metric-num">Maps + WA</div>
              <div className="proof-metric-lbl">{lang === "es" ? "Te encuentran, te escriben" : "They find you, they text"}</div>
            </div>
            <div>
              <div className="proof-metric-num">24h</div>
              <div className="proof-metric-lbl">{lang === "es" ? "Cambios por mensaje" : "Edits by message"}</div>
            </div>
          </div>

          <div className="proof-grid">
            {dict.proof.items.map((item, i) => (
              <Reveal key={item.tag} delay={i * 80}>
                <article className="proof-card">
                  <div className="section-label" style={{ marginBottom: "10px" }}>{item.tag}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className="proof-swap">
                    <div>
                      <span>{lang === "es" ? "Antes" : "Before"}</span>
                      {item.before}
                    </div>
                    <div>
                      <span>{lang === "es" ? "Después" : "After"}</span>
                      {item.after}
                    </div>
                  </div>
                  <div className="proof-chat">
                    <div className="proof-chat-from">{item.chatFrom}</div>
                    <div className="proof-chat-bubble">{item.chatText}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button type="button" className="btn btn-launch" style={{ padding: "16px 32px" }} onClick={() => openWhatsAppFunnel("proof")}>
              {dict.proof.cta}
            </button>
          </div>
        </div>
      </section>

      {/* ─── PROCESS (3 STEPS) ────────────────────────────────────── */}
      <LaunchJourney />

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

      <SiteFooter />
    </div>
  );
}
