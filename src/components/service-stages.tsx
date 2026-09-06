"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";
import { openWhatsAppFunnel } from "@/lib/whatsapp";
import "./service-stages.css";

function WaTicks() {
  return (
    <svg className="svc-wa-ticks" viewBox="0 0 16 10" width="15" height="9" aria-hidden="true">
      <path
        d="M1.1 5.1 3.6 7.6 9.4 1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.2 5.1 7.7 7.6 14.1 1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CAPTION = {
  es: {
    web: "Armamos tu Sitio Web en 3 semanas o menos.",
    maps: "Optimizamos para que salgas primero en búsquedas.",
    wa: "Estamos en línea 24/7.",
    search: "clínica cerca de mí",
    clinic: "Clínica Naco",
    open: "Abierto · 4.9",
    url: "clinica-naco.do",
    hero: "Agenda tu cita.",
    writeUs: "Escríbenos",
    cta: "WhatsApp",
    speed: "0.3s",
    supportBrand: "Nativa Support",
    support1: "¡Hola! Cambiamos el horario de los domingos. ¿Se puede actualizar la web?",
    support2: "¡Claro que sí! ¿Cuáles son las nuevas horas?",
    support3: "Ahora es de 9 AM a 2 PM. ¡Muchas gracias!",
    support4: "Listo ✅ Ya está publicado. Dale un refresh.",
    online: "En línea",
    crm: "Armamos tu CRM personal (incluye un monto adicional).",
    agent: "Conectamos tu CRM a tu IA personalizada de marca.",
    crmBrand: "CRM Nativa",
    crmLive: "En vivo",
    crmBoard: "Pipeline",
    crmLeads: "Clientes",
    crmChats: "Chats",
    crmNoteLabel: "Nota",
    crmNote: "Quiere carillas — cotizar mañana.",
    crmVia: "WhatsApp",
    colNew: "Nuevo",
    colOpen: "En curso",
    colWon: "Cierre",
    cardLuis: { n: "Luis", k: "Limpieza" },
    cardSofia: { n: "Sofía", k: "Revisión" },
    cardAna: { n: "Ana", k: "Brackets" },
    cardMaria: { n: "María", k: "Carillas" },
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
    wa: "Hours, photos, copy — on WhatsApp, same day.",
    search: "clinic near me",
    clinic: "Naco Clinic",
    open: "Open · 4.9",
    url: "naco-clinic.do",
    hero: "Book today.",
    writeUs: "Message us",
    cta: "WhatsApp",
    speed: "0.3s",
    supportBrand: "Nativa Support",
    support1: "Hey! We changed our Sunday hours. Can you update the website?",
    support2: "On it! What are the new hours?",
    support3: "9 AM to 2 PM now. Thanks so much!",
    support4: "Done ✅ It's live. Give it a refresh!",
    online: "Online",
    crm: "Leads, stages, and figures — on a board, not in the camera roll.",
    agent: "You text Nativa. She counts, adds, and confirms.",
    crmBrand: "Nativa CRM",
    crmLive: "Live",
    crmBoard: "Pipeline",
    crmLeads: "Leads",
    crmChats: "Chats",
    crmNoteLabel: "Note",
    crmNote: "Wants veneers — quote tomorrow.",
    crmVia: "WhatsApp",
    colNew: "New",
    colOpen: "In play",
    colWon: "Won",
    cardLuis: { n: "Luis", k: "Cleaning" },
    cardSofia: { n: "Sofía", k: "Checkup" },
    cardAna: { n: "Ana", k: "Braces" },
    cardMaria: { n: "María", k: "Veneers" },
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
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const activate = () => {
      if (done) return;
      done = true;
      setOn(true);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const visible = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.bottom > 40 && r.top < vh - 40;
    };

    const onScroll = () => {
      if (visible()) activate();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) activate();
      },
      { threshold: 0, rootMargin: "140px 0px 140px 0px" }
    );
    io.observe(el);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      done = true;
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
          </div>
          <div className="svc-web-hero svc-bit svc-d2">
            <span>{t.hero}</span>
            <div className="svc-web-wa">
              <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M13.6 2.4A7.27 7.27 0 0 0 8.36.67 7.3 7.3 0 0 0 1.05 7.9c0 1.28.34 2.54.98 3.64L1 15.33l3.9-1.02a7.3 7.3 0 0 0 3.46.88h.01a7.3 7.3 0 0 0 7.3-7.28 7.27 7.27 0 0 0-2.07-5.51Zm-5.24 11.2h-.01a6.06 6.06 0 0 1-3.09-.85l-.22-.13-2.31.6.62-2.25-.14-.23a6.07 6.07 0 0 1-.93-3.24 6.07 6.07 0 0 1 10.4-4.3 6.04 6.04 0 0 1 1.79 4.31 6.07 6.07 0 0 1-6.11 6.09Zm3.33-4.55c-.18-.09-1.08-.53-1.25-.59-.17-.06-.29-.09-.41.09-.12.18-.47.59-.58.71-.11.12-.21.13-.39.04-.18-.09-.76-.28-1.45-.89-.54-.48-.9-1.07-1.01-1.25-.1-.18-.01-.28.08-.37.08-.08.18-.21.27-.31.09-.1.12-.18.18-.3.06-.12.03-.22-.02-.31-.05-.09-.41-1-.56-1.37-.15-.36-.3-.31-.41-.31h-.35c-.12 0-.31.04-.47.22-.16.18-.62.6-.62 1.47s.64 1.71.73 1.83c.09.12 1.26 1.92 3.05 2.7.43.18.76.29 1.02.37.43.14.82.12 1.13.07.34-.05 1.08-.44 1.23-.87.15-.43.15-.8.1-.87-.05-.08-.16-.12-.34-.21Z"
                />
              </svg>
              {t.writeUs}
            </div>
          </div>
          <div className="svc-web-media svc-bit svc-d3">
            <div className="svc-web-photo" />
            <div className="svc-web-copy">
              <em /><em />
            </div>
          </div>
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
      <div className="svc-wa svc-wa-support">
        <div className="svc-wa-head">
          <div className="svc-wa-av">N</div>
          <div>
            <b>{t.supportBrand}</b>
            <small>{t.online}</small>
          </div>
        </div>
        <div className="svc-wa-thread">
          <div className="svc-wa-type svc-wa-t1 is-me" aria-hidden="true"><i /><i /><i /></div>
          <div className="svc-wa-me svc-wa-m1">
            {t.support1}
            <em>
              <WaTicks />
            </em>
          </div>
          <div className="svc-wa-type svc-wa-t2" aria-hidden="true"><i /><i /><i /></div>
          <div className="svc-wa-them svc-wa-m2">{t.support2}</div>
          <div className="svc-wa-type svc-wa-t3 is-me" aria-hidden="true"><i /><i /><i /></div>
          <div className="svc-wa-me svc-wa-m3">
            {t.support3}
            <em>
              <WaTicks />
            </em>
          </div>
          <div className="svc-wa-type svc-wa-t4" aria-hidden="true"><i /><i /><i /></div>
          <div className="svc-wa-them svc-wa-m4">{t.support4}</div>
        </div>
      </div>
    </Stage>
  );
}

function CrmRailIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
      <path d={d} fill="currentColor" />
    </svg>
  );
}

function CrmStage({ t }: { t: (typeof CAPTION)["es"] }) {
  const cols = [
    { id: "new", label: t.colNew, count: ["2", "1"] },
    { id: "open", label: t.colOpen, count: ["1", "2"] },
    { id: "won", label: t.colWon, count: ["1", "2"] },
  ] as const;

  return (
    <Stage>
      <div className="svc-crm">
        <aside className="svc-crm-rail">
          <div className="svc-crm-mark">N</div>
          <nav className="svc-crm-nav">
            <span className="is-board" title={t.crmBoard}>
              <CrmRailIcon d="M2 2.5h5v5H2zm7 0h5v5H9zM2 9.5h5v5H2zm7 0h5v5H9z" />
            </span>
            <span className="is-leads" title={t.crmLeads}>
              <CrmRailIcon d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-4.5 5.2c0-2.1 2-3.2 4.5-3.2s4.5 1.1 4.5 3.2V14H3.5z" />
            </span>
            <span className="is-chats" title={t.crmChats}>
              <CrmRailIcon d="M2.2 3.2A1.7 1.7 0 0 1 3.9 1.5h8.2A1.7 1.7 0 0 1 13.8 3.2v6.1a1.7 1.7 0 0 1-1.7 1.7H6.1L3.2 13.6V11H3.9A1.7 1.7 0 0 1 2.2 9.3z" />
            </span>
          </nav>
        </aside>

        <div className="svc-crm-shell">
          <div className="svc-crm-head">
            <div>
              <b>{t.crmBrand}</b>
              <small>{t.crmBoard}</small>
            </div>
            <span>{t.crmLive}</span>
          </div>

          <div className="svc-crm-stage">
            <div className="svc-crm-board">
              {cols.map((col) => (
                <div key={col.id} className={`svc-crm-col is-${col.id}`}>
                  <div className="svc-crm-col-head">
                    <small>{col.label}</small>
                    <em className="svc-roll svc-roll-sm">
                      <span>
                        {col.count.map((n) => (
                          <b key={`${col.id}-${n}`}>{n}</b>
                        ))}
                      </span>
                    </em>
                  </div>
                  {col.id === "new" && (
                    <article className="svc-crm-card is-static">
                      <b>{t.cardLuis.n}</b>
                      <span>{t.cardLuis.k}</span>
                      <i>{t.crmVia}</i>
                    </article>
                  )}
                  {col.id === "open" && (
                    <article className="svc-crm-card is-static">
                      <b>{t.cardSofia.n}</b>
                      <span>{t.cardSofia.k}</span>
                      <i>{t.crmVia}</i>
                    </article>
                  )}
                  {col.id === "won" && (
                    <article className="svc-crm-card is-static">
                      <b>{t.cardAna.n}</b>
                      <span>{t.cardAna.k}</span>
                      <i>{t.crmVia}</i>
                    </article>
                  )}
                  <div className={`svc-crm-slot is-${col.id}`} />
                </div>
              ))}
            </div>

            <article className="svc-crm-drag">
              <b>{t.cardMaria.n}</b>
              <span>{t.cardMaria.k}</span>
              <i>{t.crmVia}</i>
            </article>

            <div className="svc-crm-cursor" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="#0a1128"
                  stroke="#fff"
                  strokeWidth="1.4"
                  d="M5.2 3.1 18.4 12.2l-6.1 1.3 3.4 6.7-2.5 1.3-3.5-6.8-4.5 4.2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="svc-crm-drawer">
          <div className="svc-crm-drawer-head">
            <b>{t.cardMaria.n}</b>
            <em>{t.cardMaria.k}</em>
          </div>
          <small>{t.crmNoteLabel}</small>
          <p>{t.crmNote}</p>
          <span>{t.crmVia}</span>
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
