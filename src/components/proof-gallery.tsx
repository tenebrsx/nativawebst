"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { PROOF_CLIENTS, type ProofClient, type ProofScene } from "@/lib/proof-clients";
import "./proof-gallery.css";

function loc(c: ProofClient, lang: "es" | "en") {
  const es = lang === "es";
  return {
    name: es ? c.nameEs : c.nameEn,
    place: es ? c.placeEs : c.placeEn,
    industry: es ? c.industryEs : c.industryEn,
    result: es ? c.resultEs : c.resultEn,
    body: es ? c.bodyEs : c.bodyEn,
    metric: es ? c.metricEs : c.metricEn,
    before: es ? c.beforeEs : c.beforeEn,
    after: es ? c.afterEs : c.afterEn,
  };
}

function Scene({ scene, name }: { scene: ProofScene; name: string }) {
  return (
    <div className={`pg-scene pg-scene-${scene}`} aria-hidden="true">
      <div className="pg-scene-bar">
        <span className="pg-scene-dot" />
        <b>{name}</b>
        <i />
        <i />
      </div>
      <div className="pg-scene-hero">
        <span />
        <span />
      </div>
      <div className="pg-scene-grid">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function Card({ client, featured }: { client: ProofClient; featured?: boolean }) {
  const { lang } = useGeo();
  const dict = translations[lang].proof;
  const t = loc(client, lang);
  const className = `pg-card${featured ? " is-featured" : ""}`;

  const inner = (
    <>
      <div className="pg-chrome">
        <span />
        <span />
        <span />
        <em>{client.urlLabel || client.href?.replace(/^\//, "") || "nativa.studio"}</em>
      </div>
      <div className="pg-shot">
        {client.screenshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="pg-shot-img" src={client.screenshot} alt={t.name} />
        ) : (
          <Scene scene={client.scene} name={t.name} />
        )}
        {featured ? <span className="pg-phone" aria-hidden="true" /> : null}
      </div>
      <div className="pg-meta">
        <div className="pg-brand">
          {client.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="pg-logo" src={client.logo} alt="" />
          ) : (
            <span className="pg-mark">{client.mark}</span>
          )}
          <div>
            <strong>{t.name}</strong>
            <span>
              {t.industry} · {t.place}
            </span>
          </div>
          <b className="pg-metric">{t.metric}</b>
        </div>
        <h3>{t.result}</h3>
        {featured ? <p className="pg-body">{t.body}</p> : null}
        {featured ? (
          <div className="pg-swap">
            <div>
              <span>{dict.before}</span>
              {t.before}
            </div>
            <div>
              <span>{dict.after}</span>
              {t.after}
            </div>
          </div>
        ) : null}
        {client.href ? <span className="pg-open">{dict.view}</span> : null}
      </div>
    </>
  );

  if (client.href) {
    const external = client.href.startsWith("http");
    return (
      <Link
        href={client.href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </Link>
    );
  }

  return <article className={className}>{inner}</article>;
}

const INBOX_HEAD = {
  es: { title: "Hoy en WhatsApp", live: "chats nuevos" },
  en: { title: "Today on WhatsApp", live: "new chats" },
};

const INBOX_FEED = {
  es: [
    { mark: "SD", name: "SDQ Dental Care", from: "Paciente", text: "¿Tienen cupo para carillas?" },
    { mark: "PC", name: "Punta Cana Villas", from: "Huésped", text: "Villa Luna, 4 noches. ¿Hay?" },
    { mark: "BS", name: "Bávaro Swim", from: "Cliente", text: "Enterizo arena, talla M." },
    { mark: "NL", name: "Naco Law Group", from: "Cliente", text: "¿Consulta de societario hoy?" },
    { mark: "CT", name: "Café Terrenas", from: "Cliente", text: "2kg de geisha, ¿envío?" },
    { mark: "CA", name: "Constructora Aybar", from: "Promotor", text: "Torre 18 niveles, ¿visita?" },
    { mark: "SD", name: "SDQ Dental Care", from: "Paciente", text: "Limpieza mañana, ¿queda cupo?" },
    { mark: "PC", name: "Punta Cana Villas", from: "Huésped", text: "Villa Coral, 8 personas." },
    { mark: "BS", name: "Bávaro Swim", from: "Cliente", text: "Bikini Sal talla S, recoger." },
    { mark: "NL", name: "Naco Law Group", from: "Cliente", text: "Due diligence, ¿esta semana?" },
  ],
  en: [
    { mark: "SD", name: "SDQ Dental Care", from: "Patient", text: "Veneers this week, any slot?" },
    { mark: "PC", name: "Punta Cana Villas", from: "Guest", text: "Villa Luna, 4 nights. Free?" },
    { mark: "BS", name: "Bávaro Swim", from: "Customer", text: "Arena one-piece, size M." },
    { mark: "NL", name: "Naco Law Group", from: "Client", text: "Corporate consult today?" },
    { mark: "CT", name: "Café Terrenas", from: "Customer", text: "Two kilos Geisha, delivery?" },
    { mark: "CA", name: "Constructora Aybar", from: "Developer", text: "18-floor tower, site visit?" },
    { mark: "SD", name: "SDQ Dental Care", from: "Patient", text: "Cleaning tomorrow, still open?" },
    { mark: "PC", name: "Punta Cana Villas", from: "Guest", text: "Villa Coral for eight guests." },
    { mark: "BS", name: "Bávaro Swim", from: "Customer", text: "Bikini Sal, size S, pickup." },
    { mark: "NL", name: "Naco Law Group", from: "Client", text: "Due diligence this week?" },
  ],
} as const;

const INBOX_WHEN = {
  es: ["ahora", "hace 1 min", "hace 4 min"],
  en: ["now", "1 min ago", "4 min ago"],
};

export function ProofIntro() {
  const { lang } = useGeo();
  const dict = translations[lang].proof;
  const es = lang !== "en";
  const copy = es ? INBOX_HEAD.es : INBOX_HEAD.en;
  const when = es ? INBOX_WHEN.es : INBOX_WHEN.en;
  const feed = es ? INBOX_FEED.es : INBOX_FEED.en;
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(true);
  const [tick, setTick] = useState(2);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(false);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setOn(entry.isIntersecting),
      { threshold: 0.28 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!on) return;
    const id = window.setInterval(() => {
      setTick((n) => n + 1);
    }, 2800);
    return () => window.clearInterval(id);
  }, [on]);

  const n = feed.length;
  const notes = [0, 1, 2].map((offset) => feed[((tick - offset) % n + n) % n]);
  const liveCount = 3 + (tick % 6);

  return (
    <div ref={ref} className={`proof-head${on ? " is-on" : ""}`}>
      <div className="proof-head-copy">
        <div className="section-label">{dict.label}</div>
        <h2 className="section-title">{dict.title}</h2>
        <p className="section-sub">{dict.sub}</p>
      </div>
      <div className="proof-inbox" aria-hidden="true">
        <div className="proof-inbox-bar">
          <span />
          <b>{copy.title}</b>
          <em>{liveCount} {copy.live}</em>
        </div>
        <ul className="proof-inbox-list">
          {notes.map((note, i) => (
            <li
              key={`${note.mark}-${note.text}`}
              className={`proof-note proof-note-${(i % 3) + 1}${i === 0 && on ? " is-fresh" : ""}`}
            >
              <span className="proof-note-mark">{note.mark}</span>
              <div>
                <strong>{note.name}</strong>
                <small>
                  {note.from}
                  {" · "}
                  {when[i]}
                </small>
                <p>{note.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProofGallery() {
  const featured = PROOF_CLIENTS.find((c) => c.featured) ?? PROOF_CLIENTS[0];
  const rest = PROOF_CLIENTS.filter((c) => c.id !== featured.id);

  return (
    <div className="pg-grid">
      <Card client={featured} featured />
      {rest.map((client) => (
        <Card key={client.id} client={client} />
      ))}
    </div>
  );
}
