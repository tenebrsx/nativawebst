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
    crm: "Leads, etapas y cifras — en un tablero, no en la galería.",
    agent: "Le escribes a Nativa. Ella cuenta, suma y confirma.",
    crmBrand: "CRM Nativa",
    crmLive: "En vivo",
    crmClose: "Cierre",
    kpiLeads: "Leads",
    kpiOpen: "En curso",
    kpiWon: "Cierres",
    kpiLeadsN: ["12", "16", "21"],
    kpiOpenN: ["4", "6", "8"],
    kpiWonN: ["2", "3", "5"],
    kpiRateN: ["31%", "44%", "62%"],
    leads: [
      { n: "María", k: "Carillas", s: "Nuevo", s2: "Seguir" },
      { n: "Luis", k: "Limpieza", s: "Seguir", s2: "Cita" },
      { n: "Ana", k: "Brackets", s: "Cita", s2: "Cita" },
    ],
    agentRole: "IA de marca · en línea",
    agentAskStock: "¿Cuánto Café Geisha tenemos?",
    agentStockReply: "Café Geisha — 42 unidades.",
    agentAddTen: "Agrega 10 más al inventario",
    agentAddReply: "Listo. Café Geisha — 52 unidades.",
    agentSku: "Café Geisha",
    agentUnit: "uds",
    agentStockFrom: "42",
    agentStockTo: "52",
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
    crm: "Leads, stages, and figures — on a board, not in the camera roll.",
    agent: "You text Nativa. She counts, adds, and confirms.",
    crmBrand: "Nativa CRM",
    crmLive: "Live",
    crmClose: "Close rate",
    kpiLeads: "Leads",
    kpiOpen: "In play",
    kpiWon: "Closed",
    kpiLeadsN: ["12", "16", "21"],
    kpiOpenN: ["4", "6", "8"],
    kpiWonN: ["2", "3", "5"],
    kpiRateN: ["31%", "44%", "62%"],
    leads: [
      { n: "María", k: "Veneers", s: "New", s2: "Follow" },
      { n: "Luis", k: "Cleaning", s: "Follow", s2: "Booked" },
      { n: "Ana", k: "Braces", s: "Booked", s2: "Booked" },
    ],
    agentRole: "Brand AI · online",
    agentAskStock: "How much Café Geisha do we have?",
    agentStockReply: "Café Geisha — 42 units.",
    agentAddTen: "Add 10 more to inventory",
    agentAddReply: "Done. Café Geisha — 52 units.",
    agentSku: "Café Geisha",
    agentUnit: "units",
    agentStockFrom: "42",
    agentStockTo: "52",
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
  const kpis = [
    { label: t.kpiLeads, steps: t.kpiLeadsN },
    { label: t.kpiOpen, steps: t.kpiOpenN },
    { label: t.kpiWon, steps: t.kpiWonN },
  ];
  return (
    <Stage>
      <div className="svc-crm">
        <div className="svc-crm-head">
          <b>{t.crmBrand}</b>
          <span>{t.crmLive}</span>
        </div>
        <div className="svc-crm-kpis">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="svc-crm-kpi">
              <span className="svc-roll">
                <span>
                  {kpi.steps.map((n) => (
                    <b key={`${kpi.label}-${n}`}>{n}</b>
                  ))}
                </span>
              </span>
              <small>{kpi.label}</small>
            </div>
          ))}
        </div>
        <div className="svc-crm-meter">
          <div className="svc-crm-meter-top">
            <span>{t.crmClose}</span>
            <em className="svc-roll svc-roll-sm">
              <span>
                {t.kpiRateN.map((n) => (
                  <b key={n}>{n}</b>
                ))}
              </span>
            </em>
          </div>
          <div className="svc-crm-track">
            <i className="svc-crm-fill" />
          </div>
        </div>
        <div className="svc-crm-feed">
          {t.leads.map((lead) => (
            <div key={lead.n} className="svc-crm-row">
              <b>{lead.n}</b>
              <em>{lead.k}</em>
              <i data-s={lead.s2}>
                <span className="svc-crm-status">
                  <span>{lead.s}</span>
                  <span>{lead.s2}</span>
                </span>
              </i>
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
      <div className="svc-llm">
        <div className="svc-llm-head">
          <div className="svc-wa-av">N</div>
          <div>
            <b>Nativa</b>
            <small>{t.agentRole}</small>
          </div>
        </div>
        <div className="svc-llm-thread">
          <div className="svc-llm-type svc-llm-t1" aria-hidden="true">
            <i /><i /><i />
          </div>
          <div className="svc-llm-out svc-llm-m1">{t.agentAskStock}</div>
          <div className="svc-llm-type svc-llm-t2" aria-hidden="true">
            <i /><i /><i />
          </div>
          <div className="svc-llm-in svc-llm-m2">{t.agentStockReply}</div>
          <div className="svc-llm-out svc-llm-m3">{t.agentAddTen}</div>
          <div className="svc-llm-type svc-llm-t3" aria-hidden="true">
            <i /><i /><i />
          </div>
          <div className="svc-llm-in svc-llm-m4">{t.agentAddReply}</div>
        </div>
        <div className="svc-llm-stock">
          <small>{t.agentSku}</small>
          <span className="svc-roll svc-roll-sm svc-llm-count">
            <span>
              <b>{t.agentStockFrom}</b>
              <b>{t.agentStockTo}</b>
            </span>
          </span>
          <em>{t.agentUnit}</em>
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
