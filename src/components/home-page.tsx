"use client";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import PricingTeaser from "@/components/pricing-teaser";
import LaunchJourney from "@/components/launch-journey";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import {
  BrandMarquee,
  CountStat,
  HeroAtmosphere,
  HeroSiteScene,
  PointerGlow,
} from "@/components/home-visuals";
import ServiceStories, { StackStories } from "@/components/service-stages";
import ProofGallery, { ProofIntro } from "@/components/proof-gallery";
import { openWhatsAppFunnel } from "@/lib/whatsapp";
import Link from "next/link";
import { HOME_FAQS, HOME_SALES_LINKS } from "@/lib/home-seo";

// Demo concepts (fictional businesses with a live demo under /demo/*).
// These are NOT clients — the strip is labelled as demos.
const DEMO_SITES = [
  "SDQ Dental Care",
  "Punta Cana Villas",
  "Naco Law Group",
  "Bávaro Swim",
  "Café Terrenas",
  "Constructora Aybar",
];

export default function HomePage() {
  const { lang } = useGeo();
  const dict = translations[lang];

  return (
    <div style={{ minHeight: "100dvh", background: "var(--bg)", position: "relative" }}>
      <PointerGlow />
      <SiteNav />
      <main id="main">

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="hero-section">
        <HeroAtmosphere />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="hero-title hero-in hero-in-d2">
                {dict.hero.title_1}
                {dict.hero.title_2 ? (
                  <>
                    {" "}
                    <br />
                    <span className="wave-accent">{dict.hero.title_2}</span>
                  </>
                ) : null}
                {dict.hero.title_3 ? (
                  <>
                    {" "}
                    <br />
                    {dict.hero.title_3}
                  </>
                ) : null}
              </h1>

              <p className="hero-keyline hero-in hero-in-d3" style={{ fontSize: "14px", fontWeight: 700, color: "var(--muted)", margin: "0 0 12px", letterSpacing: "0.01em" }}>
                Páginas web y tiendas online para negocios en República Dominicana
              </p>
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
                  <CountStat key={`${s.num}-${s.label}`} value={s.num} label={s.label} />
                ))}
              </div>
            </div>
            <HeroSiteScene lang={lang === "en" ? "en" : "es"} />
          </div>
        </div>
      </section>

      {/* ─── BRAND STRIP ────────────────────────────────────────── */}
      <section style={{ background: "var(--gray-foam)", borderBottom: "1px solid var(--border)", padding: "22px 0", overflow: "hidden" }}>
        <div className="container">
          <BrandMarquee label={dict.partners.label} names={DEMO_SITES} />
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
            <div
              id="stack"
              className="home-stack-desktop"
              style={{
                marginTop: "48px",
                padding: "28px",
                background: "var(--gray-foam)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="section-label" style={{ marginBottom: "8px" }}>
                {dict.services.stack_label}
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "20px", maxWidth: "560px" }}>
                {dict.services.stack_sub}
              </p>
              <StackStories />
            </div>
          </Reveal>
        </div>
      </section>

      <PricingTeaser />

      {/* ─── PROOF ───────────────────────────────────────────────── */}
      <section id="proof" className="proof-section">
        <div className="container">
          <Reveal>
            <ProofIntro />
          </Reveal>

          <Reveal delay={80}>
            <ProofGallery />
          </Reveal>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button type="button" className="btn btn-launch btn-launch-static" style={{ padding: "16px 32px" }} onClick={() => openWhatsAppFunnel("proof")}>
              {dict.proof.cta}
            </button>
          </div>
        </div>
      </section>

      {/* ─── PROCESS (3 STEPS) ────────────────────────────────────── */}
      <LaunchJourney />

      {/* ─── FAQ + SALES LINKS (SEO wave 0) ──────────────────────── */}
      <section id="faq" lang="es" style={{ padding: "80px 0", borderTop: "1px solid var(--border)", scrollMarginTop: 88 }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="section-label">Preguntas frecuentes</div>
          <h2 className="section-title" style={{ marginBottom: "28px" }}>Lo que preguntan antes de hacer su página web</h2>
          <dl style={{ margin: "0 0 40px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {HOME_FAQS.map((faq) => (
              <div key={faq.q} className="card" style={{ padding: "22px" }}>
                <dt style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "16px", marginBottom: "8px" }}>{faq.q}</dt>
                <dd style={{ margin: 0, fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{faq.a}</dd>
              </div>
            ))}
          </dl>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))", gap: "12px" }}>
            {HOME_SALES_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="card card-hover" style={{ display: "block", padding: "16px 18px", textDecoration: "none" }}>
                <div style={{ fontWeight: 800, fontFamily: "var(--font-head)", fontSize: "15px", marginBottom: "4px" }}>{l.label}</div>
                <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>{l.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
