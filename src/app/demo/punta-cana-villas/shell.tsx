"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";
import { BASE, BRAND, NAV, holdUrl } from "./data";
import { StayProvider, useStay } from "./context";

function ShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const shot = searchParams.get("shot") === "1";
  const [open, setOpen] = useState(false);
  const stay = useStay();
  return (
    <div className={shot ? "pcv pcv-shot" : "pcv"}>
      <header className="pcv-nav">
        <div className="pcv-wrap pcv-nav-inner">
          <Link href={BASE} className="pcv-brand" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/clients/punta-cana-villas-mark.svg" alt="" />
            <span>
              <b>Punta Cana</b>
              <small>Villas · Cap Cana</small>
            </span>
          </Link>
          <nav className="pcv-links" aria-label="Colección">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} className={pathname === l.href ? "is-on" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="pcv-nav-cta">
            <div className="pcv-seg" aria-label="Moneda">
              <button type="button" className={stay.currency === "USD" ? "is-on" : undefined} onClick={() => stay.setCurrency("USD")}>
                USD
              </button>
              <button type="button" className={stay.currency === "DOP" ? "is-on" : undefined} onClick={() => stay.setCurrency("DOP")}>
                DOP
              </button>
            </div>
            <a
              className="pcv-btn pcv-btn-brass"
              href={holdUrl({
                villa: "Villa Marina",
                checkIn: stay.checkIn,
                checkOut: stay.checkOut,
                guests: stay.guests,
                currency: stay.currency,
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hold
            </a>
            <button
              type="button"
              className="pcv-ham"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <div className={`pcv-wrap pcv-drawer${open ? " is-open" : ""}`}>
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </header>

      <main>{children}</main>

      <footer className="pcv-foot">
        <div className="pcv-wrap pcv-foot-grid">
          <div>
            <div className="pcv-brand" style={{ marginBottom: 12 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/clients/punta-cana-villas-mark.svg" alt="" />
              <span>
                <b style={{ color: "#f7f3eb" }}>{BRAND.name}</b>
                <small>Cap Cana</small>
              </span>
            </div>
            <p style={{ margin: 0, lineHeight: 1.6 }}>{BRAND.place}</p>
          </div>
          <div>
            <b style={{ color: "#f7f3eb" }}>Colección</b>
            <ul>
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <b style={{ color: "#f7f3eb" }}>Hold</b>
            <ul>
              <li>
                <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </li>
              <li>
                <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Maps · Cap Cana
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pcv-wrap pcv-foot-end">
          Colección prototipo construida por Nativa Web Studio. Las villas y reseñas son demostración.
        </div>
      </footer>

      <DemoTopBar
        templateName="Punta Cana Villas"
        templateCategory="Villas & Cap Cana"
        theme="villas"
        whatsappMessage="Hola Nativa, vi Punta Cana Villas (#punta-cana-villas) y quiero una colección así: fechas, USD/DOP y hold por WhatsApp."
      />
    </div>
  );
}

export default function PcvShell({ children }: { children: React.ReactNode }) {
  return (
    <StayProvider>
      <ShellInner>{children}</ShellInner>
    </StayProvider>
  );
}
