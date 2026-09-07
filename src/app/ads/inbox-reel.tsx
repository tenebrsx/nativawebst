"use client";

import type { AdLang } from "./ads-library";

const COPY = {
  es: {
    studio: "Web Studio · RD",
    before: "Antes",
    after: "Después",
    ig: "Instagram · Direct",
    dm1: "precio?",
    dm2: "info?",
    dead: "Sin talla. Sin cita. Sin cierre.",
    siteKicker: "El sitio",
    countLabel: "mensajes hoy",
    holdLead: "Tu negocio merece",
    holdPayoff: "más clientes.",
    cta: "Elige Nativa",
    bubbles: [
      { from: "Bávaro Swim", msg: "Enterizo arena, talla M." },
      { from: "Punta Cana Villas", msg: "Villa Luna, 4 noches. ¿Hay?" },
      { from: "SDQ Dental", msg: "¿Cupo para carillas mañana?" },
      { from: "Casa Norte", msg: "Metraje listo. Coordinamos visita." },
    ],
  },
  en: {
    studio: "Web Studio · DR",
    before: "Before",
    after: "After",
    ig: "Instagram · Direct",
    dm1: "price?",
    dm2: "info?",
    dead: "No size. No appointment. No close.",
    siteKicker: "The site",
    countLabel: "messages today",
    holdLead: "Your business deserves",
    holdPayoff: "more clients.",
    cta: "Choose Nativa",
    bubbles: [
      { from: "Bávaro Swim", msg: "Arena one-piece, size M." },
      { from: "Punta Cana Villas", msg: "Villa Luna, 4 nights. Available?" },
      { from: "SDQ Dental", msg: "Opening for veneers tomorrow?" },
      { from: "Casa Norte", msg: "Square meters ready. Book the visit." },
    ],
  },
} as const;

export function InboxReel({ lang, reduced }: { lang: AdLang; reduced: boolean }) {
  const t = COPY[lang];

  return (
    <article className={`ad-reel${reduced ? " is-static" : ""}`} aria-label="Inbox reel">
      <header className="ad-reel-brand">
        <i className="ad-quality-mark" aria-hidden="true" />
        <div>
          <strong>Nativa</strong>
          <span>{t.studio}</span>
        </div>
      </header>

      <div className="ad-reel-body">
        <section className="ad-reel-scene ad-reel-before">
          <em>{t.before}</em>
          <div className="ad-reel-ig">
            <b>{t.ig}</b>
            <div className="ad-reel-dm">{t.dm1}</div>
            <div className="ad-reel-dm">{t.dm2}</div>
            <p>{t.dead}</p>
          </div>
        </section>

        <section className="ad-reel-scene ad-reel-site">
          <em>{t.siteKicker}</em>
          <div className="ad-quality-site ad-reel-mock">
            <div className="ad-quality-chrome">
              <span />
              <span />
              <span />
              <b>nativa.studio</b>
            </div>
            <div className="ad-quality-page">
              <div className="ad-quality-page-nav">
                <b>Casa Norte</b>
                <span>Obras</span>
                <span>Visita</span>
              </div>
              <div className="ad-quality-hero">
                <small>12.400 m² en obra.</small>
                <strong>Cotizar visita</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ad-reel-scene ad-reel-after">
          <em>{t.after}</em>
          <div className="ad-reel-dash">
            <div className="ad-reel-count">
              <b>
                <span>3</span>
                <span>12</span>
                <span>28</span>
                <span>47</span>
              </b>
              <small>{t.countLabel}</small>
            </div>
            <svg className="ad-reel-chart" viewBox="0 0 160 56" fill="none" aria-hidden="true">
              <path d="M4 48 C 28 46, 36 40, 52 36 S 84 30, 100 18 S 132 10, 156 6" />
            </svg>
          </div>
          <div className="ad-reel-stack">
            {t.bubbles.map((b) => (
              <div className="ad-reel-bubble" key={b.from}>
                <small>{b.from}</small>
                <p>{b.msg}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="ad-reel-hold">
        <h2>
          <span>{t.holdLead}</span>
          <i>{t.holdPayoff}</i>
        </h2>
        <div className="ad-quality-cta">
          <i aria-hidden="true" />
          {t.cta}
        </div>
      </footer>
    </article>
  );
}
