"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";
import { BASE, BRAND, NAV, visitUrl } from "./data";
import { VisitProvider, useVisit } from "./context";

function ShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shot = useSearchParams().get("shot") === "1";
  const [menu, setMenu] = useState(false);
  const visit = useVisit();

  return (
    <div className={shot ? "ca ca-shot" : "ca"}>
      <div className="ca-ann">Torre 18 niveles · 12.400 m² · Naco</div>
      <header className="ca-nav">
        <div className="ca-wrap ca-nav-inner">
          <Link href={BASE} className="ca-brand" onClick={() => setMenu(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/clients/constructora-aybar-mark.svg" alt="" />
            <span>
              <b>Aybar</b>
              <small>Constructora</small>
            </span>
          </Link>
          <nav className="ca-links" aria-label="Constructora">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} className={pathname === l.href ? "is-on" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="ca-nav-cta">
            <a
              className="ca-btn ca-btn-oxide"
              href={visitUrl(visit.tipo, visit.niveles, visit.m2, visit.zona)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visita
            </a>
          </div>
          <button
            type="button"
            className="ca-ham"
            aria-label={menu ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu}
            onClick={() => setMenu((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`ca-wrap ca-drawer${menu ? " is-open" : ""}`}>
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenu(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </header>
      <main>{children}</main>
      <footer className="ca-foot">
        <div className="ca-wrap ca-foot-grid">
          <div>
            <b style={{ color: "#f7f4ee", fontFamily: "var(--ca-head)", fontSize: 22, fontWeight: 600, textTransform: "uppercase" }}>
              {BRAND.name}
            </b>
            <p style={{ margin: "8px 0 0", lineHeight: 1.6 }}>
              {BRAND.street}
              <br />
              {BRAND.town}
            </p>
          </div>
          <div>
            <b style={{ color: "#f7f4ee" }}>Obra</b>
            <ul>
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <b style={{ color: "#f7f4ee" }}>Visita</b>
            <ul>
              <li>
                <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </li>
              <li>
                <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Maps · Santo Domingo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ca-wrap ca-foot-end">Demo de constructora por Nativa Web Studio. Las obras y reseñas son prototipo.</div>
      </footer>
      <DemoTopBar
        templateName="Constructora Aybar"
        templateCategory="Construcción"
        theme="dark"
        whatsappMessage="Hola Nativa, vi Constructora Aybar (#constructora-aybar) y quiero una web así: m² y zona en el chat, visita por WhatsApp."
      />
    </div>
  );
}

export default function AybarShell({ children }: { children: React.ReactNode }) {
  return (
    <VisitProvider>
      <ShellInner>{children}</ShellInner>
    </VisitProvider>
  );
}
