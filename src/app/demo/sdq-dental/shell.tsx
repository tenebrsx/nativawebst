"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";
import { BASE, CLINIC, NAV, patientWaUrl } from "./data";

export default function SdqShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const shot = searchParams.get("shot") === "1";
  const [open, setOpen] = useState(false);

  return (
    <div className={shot ? "sdq sdq-shot" : "sdq"}>
      <div className="sdq-ann">
        Cupo esta semana en Naco · Lun–Vie 8:00–18:00 ·{" "}
        <a href={patientWaUrl("limpieza + carillas")}>Escribir por WhatsApp</a>
      </div>

      <header className="sdq-nav">
        <div className="sdq-wrap sdq-nav-inner">
          <Link href={BASE} className="sdq-brand" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/clients/sdq-dental-mark.svg" alt="" />
            <span>
              <b>{CLINIC.name}</b>
              <small>Naco · Santo Domingo</small>
            </span>
          </Link>

          <nav className="sdq-links" aria-label="Clínica">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "is-on" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="sdq-nav-cta">
            <a href={`tel:${CLINIC.phoneTel}`} className="sdq-phone-desk" style={{ fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
              {CLINIC.phoneDisplay}
            </a>
            <Link href={`${BASE}/citas`} className="sdq-btn sdq-btn-teal" style={{ padding: "10px 16px", fontSize: 13 }}>
              Agendar
            </Link>
            <button
              type="button"
              className="sdq-ham"
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
        <div className={`sdq-wrap sdq-drawer${open ? " is-open" : ""}`}>
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </header>

      <main>{children}</main>

      <footer className="sdq-foot">
        <div className="sdq-wrap sdq-foot-grid">
          <div>
            <b className="brand">{CLINIC.name}</b>
            <p style={{ margin: "10px 0 0", lineHeight: 1.6 }}>
              {CLINIC.street}
              <br />
              {CLINIC.neighborhood}, {CLINIC.city}
            </p>
          </div>
          <div>
            <b style={{ color: "#f4f7f6" }}>Visítanos</b>
            <ul>
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <b style={{ color: "#f4f7f6" }}>Contacto</b>
            <ul>
              <li>
                <a href={`tel:${CLINIC.phoneTel}`}>{CLINIC.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
              </li>
              <li>
                <a href={patientWaUrl()}>WhatsApp</a>
              </li>
              <li>
                <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sdq-wrap sdq-foot-end">
          Demo de clínica construido por Nativa Web Studio · Los médicos y casos son prototipo.
        </div>
      </footer>

      <DemoTopBar
        templateName="SDQ Dental Care"
        templateCategory="Salud & Odontología"
        theme="dental"
        whatsappMessage="Hola Nativa, vi la web de SDQ Dental Care (#sdq-dental) y quiero una clínica así: Maps, WhatsApp y tratamientos con precio."
      />
    </div>
  );
}
