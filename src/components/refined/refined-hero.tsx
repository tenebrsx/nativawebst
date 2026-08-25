"use client";

import { useGeo } from "@/lib/geo-context";
import { openWhatsAppFunnel } from "@/lib/whatsapp";
import InboundChat from "@/components/refined/inbound-chat";

const COPY = {
  es: {
    live: "Santo Domingo",
    liveSub: "Respuesta en minutos",
    title1: "Te buscan en Maps.",
    title2: "Te escriben por WhatsApp.",
    lede: "Web rápida, Maps, y el lead cae en tu chat — no en un formulario. Clínica en Naco: citas por WhatsApp en 18 días.",
    cta: "Háblame por WhatsApp",
    brief: "Así funciona el brief (20s)",
    proof: "15 min. Sin formulario. +1 (809) 358-8113",
    mapsName: "Clínica Naco",
    mapsMeta: "Abierto ahora · 4.9",
    mapsAction: "WhatsApp",
    mapsHint: "El tap abre el chat, no un form.",
    chipsLabel: "¿Qué negocio es?",
    chips: [
      { label: "Clínica", need: "Sitio web + WhatsApp para clínica" },
      { label: "Villas", need: "Sitio web + WhatsApp para villas" },
      { label: "Legal", need: "Sitio web + WhatsApp para despacho legal" },
      { label: "Café / tienda", need: "Sitio web + WhatsApp para café / tienda" },
    ],
    stageAria: "Abrir brief por WhatsApp desde el celular de ejemplo",
  },
  en: {
    live: "Santo Domingo",
    liveSub: "Replies in minutes",
    title1: "They find you on Maps.",
    title2: "They write you on WhatsApp.",
    lede: "Fast site, Maps, and the lead lands in your chat — not a form. Clinic in Naco: WhatsApp bookings in 18 days.",
    cta: "Message me on WhatsApp",
    brief: "How the 20s brief works",
    proof: "15 min. No form. +1 (809) 358-8113",
    mapsName: "Naco Clinic",
    mapsMeta: "Open now · 4.9",
    mapsAction: "WhatsApp",
    mapsHint: "The tap opens chat, not a form.",
    chipsLabel: "What kind of business?",
    chips: [
      { label: "Clinic", need: "Website + WhatsApp for a clinic" },
      { label: "Villas", need: "Website + WhatsApp for villas" },
      { label: "Legal", need: "Website + WhatsApp for a law firm" },
      { label: "Café / shop", need: "Website + WhatsApp for a café / shop" },
    ],
    stageAria: "Open the WhatsApp brief from the sample phone",
  },
};

export default function RefinedHero() {
  const { lang } = useGeo();
  const t = COPY[lang === "en" ? "en" : "es"];

  return (
    <section className="rf-hero">
      <img
        className="rf-hero-img"
        src="/refined/hero-atmosphere.jpg"
        alt=""
        width={1920}
        height={1080}
      />
      <div className="rf-hero-veil" aria-hidden="true" />

      <div className="container rf-hero-inner">
        <div className="rf-copy">
          <div className="rf-badge hero-in">
            <span className="live-dot" />
            <span className="rf-badge-kicker">{t.live}</span>
            <span className="rf-badge-sub">{t.liveSub}</span>
          </div>

          <h1 className="rf-title hero-in hero-in-d2">
            {t.title1}
            <br />
            <span className="rf-title-wa">{t.title2}</span>
          </h1>

          <p className="rf-lede hero-in hero-in-d3">{t.lede}</p>

          <div className="rf-cta-row hero-in hero-in-d4">
            <button
              type="button"
              className="btn btn-launch rf-cta"
              onClick={() => openWhatsAppFunnel("refined-hero")}
            >
              {t.cta}
            </button>
            <button
              type="button"
              className="rf-brief"
              onClick={() => openWhatsAppFunnel("refined-brief")}
            >
              {t.brief}
            </button>
          </div>

          <p className="rf-proof hero-in hero-in-d4">{t.proof}</p>

          <div className="rf-chips hero-in hero-in-d5">
            <div className="rf-chips-label">{t.chipsLabel}</div>
            <div className="rf-chips-row">
              {t.chips.map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  className="rf-chip"
                  onClick={() => openWhatsAppFunnel("refined-chip", chip.need)}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="rf-stage hero-in hero-in-d6"
          onClick={() => openWhatsAppFunnel("refined-phone")}
          aria-label={t.stageAria}
        >
          <div className="rf-maps" aria-hidden="true">
            <div className="rf-maps-pin">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 16s-5.5-5.4-5.5-8.6a5.5 5.5 0 1 1 11 0C14.5 10.6 9 16 9 16z"
                  fill="#0ea5e9"
                />
                <circle cx="9" cy="7.4" r="1.8" fill="#fff" />
              </svg>
            </div>
            <div className="rf-maps-body">
              <div className="rf-maps-name">{t.mapsName}</div>
              <div className="rf-maps-meta">{t.mapsMeta}</div>
            </div>
            <div className="rf-maps-wa">{t.mapsAction}</div>
            <div className="rf-maps-hint">{t.mapsHint}</div>
          </div>

          <div className="rf-phone">
            <div className="rf-phone-bezel">
              <span className="rf-phone-notch" />
              <InboundChat />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
