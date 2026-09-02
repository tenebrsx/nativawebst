"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";
import { BASE, BRAND, NAV, orderUrl } from "./data";
import { OrderProvider, useOrder } from "./context";

function ShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shot = useSearchParams().get("shot") === "1";
  const [menu, setMenu] = useState(false);
  const order = useOrder();

  return (
    <div className={shot ? "ct ct-shot" : "ct"}>
      <div className="ct-ann">Envío a Piantini · Precio en DOP en el chat</div>
      <header className="ct-nav">
        <div className="ct-wrap ct-nav-inner">
          <Link href={BASE} className="ct-brand" onClick={() => setMenu(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/clients/terrenas-coffee-mark.svg" alt="" />
            <span>
              <b>Café Terrenas</b>
              <small>Las Terrenas</small>
            </span>
          </Link>
          <nav className="ct-links" aria-label="Café">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} className={pathname === l.href ? "is-on" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="ct-nav-cta">
            <div className="ct-seg" aria-label="Moneda">
              <button
                type="button"
                className={order.currency === "USD" ? "is-on" : undefined}
                onClick={() => order.setCurrency("USD")}
              >
                USD
              </button>
              <button
                type="button"
                className={order.currency === "DOP" ? "is-on" : undefined}
                onClick={() => order.setCurrency("DOP")}
              >
                DOP
              </button>
            </div>
            <a className="ct-btn ct-btn-clay" href={orderUrl("geisha", order.kg, order.dest)} target="_blank" rel="noopener noreferrer">
              Pedir geisha
            </a>
          </div>
          <button
            type="button"
            className="ct-ham"
            aria-label={menu ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu}
            onClick={() => setMenu((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`ct-wrap ct-drawer${menu ? " is-open" : ""}`}>
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenu(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </header>
      <main>{children}</main>
      <footer className="ct-foot">
        <div className="ct-wrap ct-foot-grid">
          <div>
            <b style={{ color: "#fbf6ee", fontFamily: "var(--ct-head)", fontSize: 22, fontWeight: 500 }}>{BRAND.name}</b>
            <p style={{ margin: "8px 0 0", lineHeight: 1.6 }}>
              {BRAND.street}
              <br />
              {BRAND.town}
            </p>
          </div>
          <div>
            <b style={{ color: "#fbf6ee" }}>Casa</b>
            <ul>
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <b style={{ color: "#fbf6ee" }}>Pedido</b>
            <ul>
              <li>
                <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </li>
              <li>
                <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Maps · Las Terrenas
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ct-wrap ct-foot-end">Demo de café por Nativa Web Studio. Los lotes y reseñas son prototipo.</div>
      </footer>
      <DemoTopBar
        templateName="Café Terrenas"
        templateCategory="Café"
        theme="coffee"
        whatsappMessage="Hola Nativa, vi Café Terrenas (#terrenas-coffee) y quiero una tienda así: tueste, kilos y destino en el chat."
      />
    </div>
  );
}

export default function TerrenasShell({ children }: { children: React.ReactNode }) {
  return (
    <OrderProvider>
      <ShellInner>{children}</ShellInner>
    </OrderProvider>
  );
}
