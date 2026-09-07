"use client";

import { useEffect, useState } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { openWhatsAppFunnel } from "@/lib/whatsapp";
import "./launch-journey.css";

const COPY = {
  es: {
    cta: "Hablemos por WhatsApp",
    beats: [
      { kicker: "01", title: "Charla de 15 min", cap: "Tú describes el sitio. Nativa responde con páginas, Maps y cómo entra el cliente." },
      { kicker: "02", title: "Tu propio demo", cap: "Un link vivo en días. Lo abres como lo haría un cliente." },
      { kicker: "03", title: "Tu sitio en vivo", cap: "El sitio sale completo. Apareces en Maps. Empiezan a llegar clientes." },
    ],
    online: "en línea",
    pitch1: "Tengo una clínica en Naco. Quiero un sitio con citas, el equipo y los tratamientos.",
    pitch2: "Y que me encuentren en Maps — no en un PDF.",
    reply: "Listo. Página + Maps + WhatsApp. En 15 min cerramos páginas y cómo cae el cliente al chat.",
    url: "preview.nativa.studio",
    liveUrl: "clinica-naco.do",
    clinic: "Clínica Naco",
    hero: "Citas hoy.",
    search: "clínica cerca de mí",
    openNow: "Abierto ahora",
    ctaBook: "Pedir cita",
    treat1: "Limpieza",
    treat2: "Carillas",
    treat3: "RX",
    mapsMeta: "4.9 · Naco · Abierto",
    mVisits: "Vistas en mapas",
    mBookings: "Clientes nuevos",
    mRevenue: "Revenue",
    mVisitsN: ["12", "28", "47"],
    mBookingsN: ["4", "18", "36"],
    mRevenueN: ["RD$ 48k", "RD$ 120k", "RD$ 280k"],
  },
  en: {
    cta: "Message me on WhatsApp",
    beats: [
      { kicker: "01", title: "15-min brief", cap: "You describe the site. Nativa replies with pages, Maps, and how the lead arrives." },
      { kicker: "02", title: "Your own demo", cap: "A live link in days. You tap it like a customer would." },
      { kicker: "03", title: "Your site, live", cap: "A complete website. You’re on Maps. Clients start walking in." },
    ],
    online: "online",
    pitch1: "I run a clinic in Naco. I need a site with bookings, the team, and treatments.",
    pitch2: "And I want to show up on Maps — not in a PDF.",
    reply: "Got it. Landing + Maps + WhatsApp. In 15 min we lock pages and how the lead hits the chat.",
    url: "preview.nativa.studio",
    liveUrl: "naco-clinic.do",
    clinic: "Naco Clinic",
    hero: "Book today.",
    search: "clinic near me",
    openNow: "Open now",
    ctaBook: "Book now",
    treat1: "Cleaning",
    treat2: "Veneers",
    treat3: "X-ray",
    mapsMeta: "4.9 · Naco · Open",
    mVisits: "Map views",
    mBookings: "New clients",
    mRevenue: "Revenue",
    mVisitsN: ["12", "28", "47"],
    mBookingsN: ["4", "18", "36"],
    mRevenueN: ["RD$ 48k", "RD$ 120k", "RD$ 280k"],
  },
} as const;

type JourneyCopy = (typeof COPY)[keyof typeof COPY];

function BriefScene({ t }: { t: JourneyCopy }) {
  return (
    <div className="lj-scene lj-brief">
      <div className="lj-wa">
        <div className="lj-wa-head">
          <span className="lj-av">N</span>
          <div>
            <b>Nativa</b>
            <small>
              <i className="lj-online" />
              {t.online}
            </small>
          </div>
        </div>
        <div className="lj-wa-body">
          <div className="lj-out lj-d0">
            {t.pitch1}
            <em className="lj-ticks" aria-hidden="true" />
          </div>
          <div className="lj-out lj-d1">
            {t.pitch2}
            <em className="lj-ticks" aria-hidden="true" />
          </div>
          <div className="lj-type" aria-hidden="true">
            <span /><span /><span />
          </div>
          <div className="lj-in lj-d2">{t.reply}</div>
        </div>
      </div>
    </div>
  );
}

function PreviewScene({ t }: { t: JourneyCopy }) {
  return (
    <div className="lj-scene lj-preview">
      <div className="lj-phone">
        <span className="lj-notch" aria-hidden="true" />
        <div className="lj-phone-bar">{t.url}</div>
        <div className="lj-site">
          <div className="lj-site-nav lj-d1">
            <b>{t.clinic}</b>
            <i>WA</i>
          </div>
          <div className="lj-site-hero lj-d2">{t.hero}</div>
          <div className="lj-site-media lj-d3">
            <span /><span /><span />
          </div>
          <div className="lj-site-cta lj-d3">WA</div>
        </div>
        <span className="lj-home" aria-hidden="true" />
      </div>
    </div>
  );
}

function LiveScene({ t }: { t: JourneyCopy }) {
  return (
    <div className="lj-scene lj-live">
      <div className="lj-live-board">
        <div className="lj-mini lj-d1">
          <div className="lj-mini-nav">
            <b>{t.clinic}</b>
            <i>WA</i>
          </div>
          <div className="lj-mini-hero">
            <em>
              <span className="lj-open-dot" />
              {t.openNow}
            </em>
            <strong>{t.hero}</strong>
            <span className="lj-mini-cta">{t.ctaBook}</span>
          </div>
          <div className="lj-mini-rows">
            <span>{t.treat1}</span>
            <span>{t.treat2}</span>
            <span>{t.treat3}</span>
          </div>
        </div>

        <div className="lj-map lj-d2">
          <div className="lj-streets" aria-hidden="true" />
          <span className="lj-park lj-park-a" aria-hidden="true" />
          <span className="lj-park lj-park-b" aria-hidden="true" />
          <div className="lj-search">{t.search}</div>
          <span className="lj-pin" />
          <span className="lj-pin-halo" aria-hidden="true" />
          <div className="lj-card">
            <div>
              <strong>{t.clinic}</strong>
              <small>{t.mapsMeta}</small>
            </div>
            <span className="lj-open">{t.openNow}</span>
          </div>
        </div>

        <div className="lj-traffic lj-d3">
          <div className="lj-metric">
            <span>{t.mVisits}</span>
            <b className="lj-metric-n" aria-hidden="true">
              <i>
                {t.mVisitsN.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </i>
            </b>
          </div>
          <div className="lj-metric">
            <span>{t.mBookings}</span>
            <b className="lj-metric-n" aria-hidden="true">
              <i>
                {t.mBookingsN.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </i>
            </b>
          </div>
          <div className="lj-metric is-hot">
            <span>{t.mRevenue}</span>
            <b className="lj-metric-n" aria-hidden="true">
              <i>
                {t.mRevenueN.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </i>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LaunchJourney() {
  const { lang } = useGeo();
  const dict = translations[lang].process;
  const t = COPY[lang === "en" ? "en" : "es"];
  const [beat, setBeat] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (pinned) return;
    const id = window.setInterval(() => {
      setBeat((n) => (n + 1) % 3);
    }, 5800);
    return () => window.clearInterval(id);
  }, [pinned]);

  return (
    <section id="how-it-works" className="lj">
      <div className="container">
        <div className="lj-head">
          <div className="section-label">{dict.label}</div>
          <h2 className="lj-title">{dict.title}</h2>
          <p className="lj-sub">{dict.sub}</p>
        </div>

        <div className="lj-rail" role="tablist" data-beat={beat}>
          <span className="lj-rail-glider" aria-hidden="true" />
          {t.beats.map((b, i) => (
            <button
              key={b.kicker}
              type="button"
              role="tab"
              aria-selected={beat === i}
              className={`lj-tab${beat === i ? " is-on" : ""}${!pinned ? " is-auto" : ""}`}
              onClick={() => {
                setBeat(i);
                setPinned(true);
              }}
            >
              <span>{b.kicker}</span>
              {b.title}
            </button>
          ))}
        </div>

        <div className="lj-stage" data-beat={beat}>
          <div className={`lj-panel${beat === 0 ? " is-on" : ""}`}><BriefScene t={t} /></div>
          <div className={`lj-panel${beat === 1 ? " is-on" : ""}`}><PreviewScene t={t} /></div>
          <div className={`lj-panel${beat === 2 ? " is-on" : ""}`}><LiveScene t={t} /></div>
        </div>

        <p className="lj-cap">{t.beats[beat].cap}</p>
        <div className="lj-cta">
          <button type="button" className="btn btn-launch" onClick={() => openWhatsAppFunnel("journey")}>
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
