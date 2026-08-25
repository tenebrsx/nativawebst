"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { openWhatsAppFunnel } from "@/lib/whatsapp";
import "./service-stages.css";

const CAPTION = {
  es: {
    web: "Del brief al sitio — 3 semanas.",
    maps: "Te buscan cerca. Apareces primero.",
    wa: "El toque cae en tu chat.",
    search: "clínica cerca de mí",
    clinic: "Clínica Naco",
    open: "Abierto · 4.9",
    url: "clinica-naco.do",
    hero: "Citas hoy.\nSin formularios.",
    cta: "WhatsApp",
    speed: "0.3s",
    inbound: "Hola, vi carillas en Google. ¿Cupo esta semana?",
    outbound: "Sí — mañana 9am te sirve?",
    online: "En línea",
    crm: "Inventario de leads. En movimiento.",
    agent: "Una entrada. Tres salidas.",
    pipeline: "Ops",
    colNew: "Nuevo",
    colFollow: "Seguir",
    colBook: "Cita",
    leadName: "María",
    leadTag: "Carillas",
    leadNote: "Prefiere mañana",
    agentAsk: "¿Tienen cupo mañana?",
    agentReply: "Sí — 9am u 11am. ¿Cuál te queda?",
    agentBooked: "Cita · mañana 9:00",
    agentName: "Agente Nativa",
    agentTag: "IA",
    crmIn: "Entrada",
    crmRoute: "Ruta",
    crmFile: "Archivo",
    leads: [
      { n: "María", k: "Carillas", s: "Nuevo" },
      { n: "Luis", k: "Limpieza", s: "Seguir" },
      { n: "Ana", k: "Brackets", s: "Cita" },
      { n: "Joel", k: "Blanqueado", s: "Nuevo" },
    ],
    agentOutReply: "Respuesta",
    agentOutCal: "Agenda",
    agentOutNote: "Nota CRM",
  },
  en: {
    web: "Brief to live site — 3 weeks.",
    maps: "They search nearby. You show up first.",
    wa: "The tap lands in your chat.",
    search: "clinic near me",
    clinic: "Naco Clinic",
    open: "Open · 4.9",
    url: "naco-clinic.do",
    hero: "Book today.\nNo forms.",
    cta: "WhatsApp",
    speed: "0.3s",
    inbound: "Hi — saw veneers on Google. Slot this week?",
    outbound: "Yes — tomorrow 9am work?",
    online: "Online",
    crm: "Lead inventory. Always moving.",
    agent: "One inbound. Three outputs.",
    pipeline: "Ops",
    colNew: "New",
    colFollow: "Follow",
    colBook: "Booked",
    leadName: "María",
    leadTag: "Veneers",
    leadNote: "Prefers tomorrow",
    agentAsk: "Any slots tomorrow?",
    agentReply: "Yes — 9am or 11am. Which works?",
    agentBooked: "Booked · tomorrow 9:00",
    agentName: "Nativa Agent",
    agentTag: "AI",
    crmIn: "Inbox",
    crmRoute: "Route",
    crmFile: "File",
    leads: [
      { n: "María", k: "Veneers", s: "New" },
      { n: "Luis", k: "Cleaning", s: "Follow" },
      { n: "Ana", k: "Braces", s: "Booked" },
      { n: "Joel", k: "Whitening", s: "New" },
    ],
    agentOutReply: "Reply",
    agentOutCal: "Calendar",
    agentOutNote: "CRM note",
  },
};

function useStageOn() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(false);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setOn(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, on };
}

function Stage({ children }: { children: ReactNode }) {
  const { ref, on } = useStageOn();
  return (
    <div
      ref={ref}
      className={`svc-stage${on ? " is-on" : ""}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

function WebStage({ t }: { t: (typeof CAPTION)["es"] }) {
  return (
    <Stage>
      <div className="svc-browser">
        <div className="svc-chrome">
          <span /><span /><span />
          <div className="svc-url">{t.url}</div>
        </div>
        <div className="svc-page">
          <div className="svc-web-bar svc-bit svc-d1">
            <b>{t.clinic}</b>
            <i>{t.cta}</i>
          </div>
          <div className="svc-web-hero svc-bit svc-d2">
            {t.hero.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div className="svc-web-media svc-bit svc-d3">
            <div className="svc-web-photo" />
            <div className="svc-web-copy">
              <em /><em />
            </div>
          </div>
          <div className="svc-speed svc-bit svc-d4">{t.speed}</div>
        </div>
      </div>
    </Stage>
  );
}

function MapsStage({ t }: { t: (typeof CAPTION)["es"] }) {
  return (
    <Stage>
      <div className="svc-map">
        <svg className="svc-map-art" viewBox="0 0 320 210" preserveAspectRatio="xMidYMid slice">
          <rect width="320" height="210" fill="#dcefe4" />
          <path d="M0 70H320M0 140H320M80 0V210M180 0V210M250 0V210" stroke="#c3ddd0" strokeWidth="10" />
          <path d="M0 108H320" stroke="#b7d4c6" strokeWidth="4" />
          <circle cx="70" cy="48" r="22" fill="#cfe6d8" />
          <circle cx="260" cy="168" r="36" fill="#c5e0d3" />
        </svg>
        <div className="svc-search svc-bit svc-d1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="5" cy="5" r="3.4" stroke="#474f6e" strokeWidth="1.4" />
            <path d="M7.6 7.6L10 10" stroke="#474f6e" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className="svc-search-q">{t.search}</span>
        </div>
        <span className="svc-pin svc-pin-a" />
        <span className="svc-pin svc-pin-b" />
        <div className="svc-listing svc-bit svc-d4">
          <div>
            <strong>{t.clinic}</strong>
            <small>{t.open}</small>
          </div>
          <span>{t.cta}</span>
        </div>
      </div>
    </Stage>
  );
}

function ChatStage({ t }: { t: (typeof CAPTION)["es"] }) {
  return (
    <Stage>
      <div className="svc-wa">
        <div className="svc-wa-head">
          <div className="svc-wa-av">N</div>
          <div>
            <b>Nativa</b>
            <small>{t.online}</small>
          </div>
        </div>
        <div className="svc-wa-thread">
          <div className="svc-wa-type"><i /><i /><i /></div>
          <div className="svc-wa-in svc-bit svc-d2">{t.inbound}</div>
          <div className="svc-wa-out svc-bit svc-d3">
            {t.outbound}
            <em>✓✓</em>
          </div>
        </div>
      </div>
    </Stage>
  );
}

function CrmStage({ t }: { t: (typeof CAPTION)["es"] }) {
  return (
    <Stage>
      <div className="svc-ops">
        <div className="svc-ops-beam" />
        <div className="svc-ops-col">
          <small>{t.crmIn}</small>
          {t.leads.map((lead) => (
            <div key={lead.n} className="svc-ops-pill">
              <b>WA</b> {lead.n}
            </div>
          ))}
        </div>
        <div className="svc-ops-core"><span /></div>
        <div className="svc-ops-col svc-ops-file">
          <small>{t.crmFile}</small>
          {t.leads.map((lead) => (
            <div key={lead.n} className="svc-ops-row">
              <span>{lead.n}</span>
              <em>{lead.k}</em>
              <i data-s={lead.s}>{lead.s}</i>
            </div>
          ))}
        </div>
      </div>
    </Stage>
  );
}

function AgentStage({ t }: { t: (typeof CAPTION)["es"] }) {
  return (
    <Stage>
      <div className="svc-hub">
        <div className="svc-hub-in">{t.agentAsk}</div>
        <div className="svc-hub-core">
          <span>{t.agentTag}</span>
        </div>
        <div className="svc-hub-rays" aria-hidden="true">
          <i /><i /><i />
        </div>
        <div className="svc-hub-out">
          <div className="svc-hub-card svc-d1">
            <small>{t.agentOutReply}</small>
            <b>{t.agentReply}</b>
          </div>
          <div className="svc-hub-card svc-d2">
            <small>{t.agentOutCal}</small>
            <b>{t.agentBooked}</b>
          </div>
          <div className="svc-hub-card svc-d3">
            <small>{t.agentOutNote}</small>
            <b>{t.leadName} · {t.leadTag}</b>
          </div>
        </div>
      </div>
    </Stage>
  );
}

export default function ServiceStories() {
  const { lang } = useGeo();
  const dict = translations[lang];
  const t = CAPTION[lang === "en" ? "en" : "es"];
  const [web, maps, wa] = dict.services.items;

  return (
    <div className="svc-grid">
      <Link href="/servicios/diseno-web" className="card card-hover svc-card">
        <WebStage t={t} />
        <h3>{web.title}</h3>
        <p>{t.web}</p>
      </Link>
      <Link href="/servicios/seo-local" className="card card-hover svc-card">
        <MapsStage t={t} />
        <h3>{maps.title}</h3>
        <p>{t.maps}</p>
      </Link>
      <button
        type="button"
        className="card card-hover svc-card"
        onClick={() => openWhatsAppFunnel("services-visual", wa.title)}
      >
        <ChatStage t={t} />
        <h3>{wa.title}</h3>
        <p>{t.wa}</p>
      </button>
    </div>
  );
}

export function StackStories() {
  const { lang } = useGeo();
  const dict = translations[lang];
  const t = CAPTION[lang === "en" ? "en" : "es"];
  const [crm, agent] = dict.services.stack;

  return (
    <div className="svc-grid svc-grid-2">
      <Link href="/servicios/crm" className="card card-hover svc-card">
        <CrmStage t={t} />
        <h3>{crm.title}</h3>
        <p>{t.crm}</p>
      </Link>
      <Link href="/servicios/agentes-ia" className="card card-hover svc-card">
        <AgentStage t={t} />
        <h3>{agent.title}</h3>
        <p>{t.agent}</p>
      </Link>
    </div>
  );
}
