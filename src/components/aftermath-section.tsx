"use client";

import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { openWhatsAppFunnel } from "@/lib/whatsapp";
import Reveal from "@/components/reveal";
import "./aftermath-section.css";

const COPY = {
  es: {
    cards: [
      {
        num: "01",
        pillClass: "am-pill-wa",
        pillContent: (
          <>
            <span className="pulse-dot" />
            WhatsApp
          </>
        ),
        title: "Respuesta humana",
      },
      {
        num: "02",
        pillClass: "am-pill-bp",
        pillContent: "15 min",
        title: "Alineación y mapa",
      },
      {
        num: "03",
        pillClass: "am-pill-pv",
        pillContent: "Preview móvil",
        title: "Demo en tu celular",
      },
      {
        num: "04",
        pillClass: "am-pill-lv",
        pillContent: "100/100",
        title: "En vivo y stack",
      },
    ],
    disclaimer: "Sin compromiso. Revisamos si tu proyecto encaja antes de construir.",
  },
  en: {
    cards: [
      {
        num: "01",
        pillClass: "am-pill-wa",
        pillContent: (
          <>
            <span className="pulse-dot" />
            WhatsApp
          </>
        ),
        title: "Human response",
      },
      {
        num: "02",
        pillClass: "am-pill-bp",
        pillContent: "15 min",
        title: "Fast alignment",
      },
      {
        num: "03",
        pillClass: "am-pill-pv",
        pillContent: "Mobile preview",
        title: "Live phone demo",
      },
      {
        num: "04",
        pillClass: "am-pill-lv",
        pillContent: "100/100",
        title: "Go live & stack",
      },
    ],
    disclaimer: "No commitment. We review project fit before building.",
  },
};

export default function AftermathSection() {
  const { lang } = useGeo();
  const dict = translations[lang].contact;
  const t = COPY[lang === "en" ? "en" : "es"];

  const descriptions = [
    dict.bullet_1,
    dict.bullet_2,
    dict.bullet_3,
    dict.bullet_4,
  ];

  return (
    <section id="consultation" className="aftermath-simple-section">
      <div className="container" style={{ maxWidth: "1040px" }}>
        {/* ─── Header ────────────────────────────────────────────── */}
        <Reveal style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-label">{dict.label}</div>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-sub" style={{ margin: "0 auto", maxWidth: "600px" }}>
            {dict.desc}
          </p>
        </Reveal>

        {/* ─── 4 Clean Step Cards Grid ───────────────────────────── */}
        <div className="aftermath-simple-grid">
          {t.cards.map((card, i) => (
            <Reveal key={card.num} delay={i * 60}>
              <div className="aftermath-simple-card">
                <div className="aftermath-card-top">
                  <span className="aftermath-badge-num">{card.num}</span>
                  <span className={`am-pill ${card.pillClass}`}>
                    {card.pillContent}
                  </span>
                </div>
                <h3 className="aftermath-card-title">{card.title}</h3>
                <p className="aftermath-card-desc">{descriptions[i]}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ─── CTA Button ────────────────────────────────────────── */}
        <Reveal style={{ textAlign: "center", marginTop: "36px" }} delay={240}>
          <button
            type="button"
            className="btn btn-launch"
            style={{ padding: "16px 36px", fontSize: "15.5px" }}
            onClick={() => openWhatsAppFunnel("close")}
          >
            {dict.cta}
          </button>
          <p style={{ fontSize: "12.5px", color: "var(--muted)", marginTop: "12px" }}>
            {t.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
