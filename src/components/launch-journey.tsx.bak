"use client";

import { useEffect, useState } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { openWhatsAppFunnel } from "@/lib/whatsapp";
import "./launch-journey.css";

const COPY = {
  es: {
    cta: "Háblame por WhatsApp",
    beats: [
      {
        kicker: "01",
        title: "Brief de 15 min",
        cap: "WhatsApp. Páginas, Maps, y cómo entra el lead.",
      },
      {
        kicker: "02",
        title: "Preview en el celular",
        cap: "Un link vivo en días. Lo abres como lo haría un cliente.",
      },
      {
        kicker: "03",
        title: "Clientes en el chat",
        cap: "La web sale. Maps conectado. Cada visita puede escribirte.",
      },
    ],
    need: "Sitio web nuevo",
    industry: "Clínica / Salud",
    timing: "Este mes",
    url: "preview.nativa.studio",
    liveUrl: "clinica-naco.do",
    clinic: "Clínica Naco",
    hero: "Citas hoy.",
    search: "clínica cerca de mí",
    ping: "1 lead",
  },
  en: {
    cta: "Message me on WhatsApp",
    beats: [
      {
        kicker: "01",
        title: "15-min brief",
        cap: "WhatsApp. Pages, Maps, and how the lead arrives.",
      },
      {
        kicker: "02",
        title: "Preview on your phone",
        cap: "A live link in days. You tap it like a customer would.",
      },
      {
        kicker: "03",
        title: "Clients in chat",
        cap: "Site live. Maps on. Every visit can write you.",
      },
    ],
    need: "New website",
    industry: "Clinic / Health",
    timing: "This month",
    url: "preview.nativa.studio",
    liveUrl: "naco-clinic.do",
    clinic: "Naco Clinic",
    hero: "Book today.",
    search: "clinic near me",
    ping: "1 lead",
  },
};

function BriefScene({ t }: { t: (typeof COPY)["es"] }) {
  return (
    <div className="lj-scene lj-brief">
      <div className="lj-wa">
        <div className="lj-wa-head">
          <span className="lj-av">N</span>
          <div>
            <b>Nativa</b>
            <small>{t.beats[0].title}</small>
          </div>
        </div>
        <div className="lj-wa-body">
          <div className="lj-chip lj-d1">{t.need}</div>
          <div className="lj-chip lj-d2">{t.industry}</div>
          <div className="lj-chip lj-d3">{t.timing}</div>
        </div>
      </div>
    </div>
  );
}

function PreviewScene({ t }: { t: (typeof COPY)["es"] }) {
  return (
    <div className="lj-scene lj-preview">
      <div className="lj-phone">
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
        </div>
      </div>
    </div>
  );
}

function LiveScene({ t }: { t: (typeof COPY)["es"] }) {
  return (
    <div className="lj-scene lj-live">
      <div className="lj-map">
        <div className="lj-search lj-d1">{t.search}</div>
        <span className="lj-pin" />
        <div className="lj-card lj-d3">
          <div>
            <strong>{t.clinic}</strong>
            <small>{t.liveUrl}</small>
          </div>
          <span className="lj-ping">{t.ping}</span>
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setBeat((n) => (n + 1) % 3);
    }, 5200);
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

        <div className="lj-rail" role="tablist">
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
