"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";
import { BASE, FIRM, NAV, consultUrl } from "./data";

export default function NacoShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shot = useSearchParams().get("shot") === "1";
  const [open, setOpen] = useState(false);

  return (
    <div className={shot ? "nl nl-shot" : "nl"}>
      <header className="nl-nav">
        <div className="nl-wrap nl-nav-inner">
          <Link href={BASE} className="nl-brand" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/clients/naco-legal-mark.svg" alt="" />
            <span>
              <b>Naco Law</b>
              <small>Group</small>
            </span>
          </Link>
          <nav className="nl-links" aria-label="Bufete">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} className={pathname === l.href ? "is-on" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="nl-nav-cta">
            <a className="nl-btn nl-btn-amber" href={consultUrl()} target="_blank" rel="noopener noreferrer">
              Consulta
            </a>
            <button type="button" className="nl-ham" aria-label="Menú" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
        <div className={`nl-wrap nl-drawer${open ? " is-open" : ""}`}>
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </header>
      <main>{children}</main>
      <footer className="nl-foot">
        <div className="nl-wrap nl-foot-grid">
          <div>
            <b style={{ color: "#faf7f1", fontFamily: "var(--nl-head)", fontSize: 22, fontWeight: 500 }}>{FIRM.name}</b>
            <p style={{ margin: "8px 0 0", lineHeight: 1.6 }}>
              {FIRM.street}
              <br />
              {FIRM.neighborhood}, {FIRM.city}
            </p>
          </div>
          <div>
            <b style={{ color: "#faf7f1" }}>Estudio</b>
            <ul>
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <b style={{ color: "#faf7f1" }}>Consulta</b>
            <ul>
              <li>
                <a href={`tel:${FIRM.phoneTel}`}>{FIRM.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>
              </li>
              <li>
                <a href={FIRM.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Maps · Naco
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nl-wrap nl-foot-end">Demo de bufete por Nativa Web Studio. Los abogados y casos son prototipo.</div>
      </footer>
      <DemoTopBar
        templateName="Naco Law Group"
        templateCategory="Legal"
        theme="legal"
        whatsappMessage="Hola Nativa, vi Naco Law Group (#naco-legal) y quiero un bufete así: el asunto en la web, la consulta por WhatsApp."
      />
    </div>
  );
}
