"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DemoTopBar } from "@/components/demo-top-bar";
import { openWhatsApp } from "@/lib/whatsapp";
import { BASE, BRAND, NAV, money } from "./data";
import { CartProvider, useCart } from "./context";

function BagDrawer() {
  const cart = useCart();
  if (!cart.open) return null;
  const checkout = () => {
    if (cart.cart.length === 0) return;
    const lines = cart.cart.map((i) => `• ${i.name}, talla ${i.size}${i.color ? `, ${i.color}` : ""} ×${i.qty}`);
    const total = money(cart.totalUsd, cart.totalDop, cart.currency);
    openWhatsApp(
      `Quiero el ${cart.cart[0].name.toLowerCase()}, talla ${cart.cart[0].size}. ¿Lo tienen para recoger en SDQ?\n\n${lines.join("\n")}\nTotal: ${total}`,
    );
  };

  return (
    <div className="bs-drawer-cart">
      <button type="button" className="bs-drawer-bg" aria-label="Cerrar bolsa" onClick={() => cart.setOpen(false)} />
      <motion.aside
        className="bs-drawer-panel"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 24, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: "2rem", fontStyle: "italic" }}>Bolsa</h2>
          <button type="button" className="bs-btn bs-btn-ghost" onClick={() => cart.setOpen(false)}>
            Cerrar
          </button>
        </div>
        <div style={{ flex: 1, overflow: "auto", marginTop: 12 }}>
          {cart.cart.length === 0 ? (
            <p className="bs-lede">Vacía. El enterizo arena espera.</p>
          ) : (
            cart.cart.map((i) => (
              <div className="bs-item" key={i.slug + i.size + i.color}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={i.img} alt="" />
                <div>
                  <b>{i.name}</b>
                  <div style={{ fontSize: 12, color: "var(--bs-mute)", marginTop: 4 }}>
                    Talla {i.size} · {i.color}
                  </div>
                  <div style={{ marginTop: 8, display: "flex", gap: 8, alignItems: "center" }}>
                    <button type="button" className="bs-size" onClick={() => cart.delta(i.slug, i.size, i.color, -1)}>
                      −
                    </button>
                    <span>{i.qty}</span>
                    <button type="button" className="bs-size" onClick={() => cart.delta(i.slug, i.size, i.color, 1)}>
                      +
                    </button>
                  </div>
                </div>
                <div style={{ fontWeight: 800, fontSize: 13 }}>{money(i.usd * i.qty, i.dop * i.qty, cart.currency)}</div>
              </div>
            ))
          )}
        </div>
        {cart.cart.length > 0 && (
          <div style={{ paddingTop: 16, borderTop: "1px solid var(--bs-line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 800, marginBottom: 12 }}>
              <span>Total</span>
              <span>{money(cart.totalUsd, cart.totalDop, cart.currency)}</span>
            </div>
            <button type="button" className="bs-btn bs-btn-wa" style={{ width: "100%" }} onClick={checkout}>
              Pedir por WhatsApp
            </button>
            <p style={{ fontSize: 12, color: "var(--bs-mute)", marginTop: 8 }}>
              El chat sale con producto y talla. Recogida en BlueMall o Punta Cana.
            </p>
          </div>
        )}
      </motion.aside>
    </div>
  );
}

function ShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shot = useSearchParams().get("shot") === "1";
  const [menu, setMenu] = useState(false);
  const cart = useCart();
  const count = cart.cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className={shot ? "bs bs-shot" : "bs"}>
      <div className="bs-ann">Recogida en BlueMall SDQ · Envío 24h Punta Cana</div>
      <header className="bs-nav">
        <div className="bs-wrap bs-nav-inner">
          <Link href={BASE} className="bs-brand" onClick={() => setMenu(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/clients/bavaro-swim-mark.svg" alt="" />
            <span>
              <b>Bávaro</b>
              <small>Swim</small>
            </span>
          </Link>
          <nav className="bs-links" aria-label="Tienda">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} className={pathname === l.href ? "is-on" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="bs-nav-cta">
            <div className="bs-seg">
              <button type="button" className={cart.currency === "USD" ? "is-on" : undefined} onClick={() => cart.setCurrency("USD")}>
                USD
              </button>
              <button type="button" className={cart.currency === "DOP" ? "is-on" : undefined} onClick={() => cart.setCurrency("DOP")}>
                DOP
              </button>
            </div>
            <button type="button" className="bs-bag" onClick={() => cart.setOpen(true)}>
              Bolsa {count}
            </button>
            <button type="button" className="bs-ham" aria-label="Menú" aria-expanded={menu} onClick={() => setMenu((v) => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
        <div className={`bs-wrap bs-drawer${menu ? " is-open" : ""}`}>
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenu(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </header>
      <main>{children}</main>
      <footer className="bs-foot">
        <div className="bs-wrap bs-foot-grid">
          <div>
            <b style={{ color: "#fbf7f1", fontFamily: "var(--bs-head)", fontSize: 22, fontWeight: 500 }}>{BRAND.name}</b>
            <p>{BRAND.kicker}</p>
          </div>
          <div>
            <b style={{ color: "#fbf7f1" }}>Tienda</b>
            <ul>
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <b style={{ color: "#fbf7f1" }}>Recoger</b>
            <ul>
              <li>{BRAND.pickup}</li>
              <li>{BRAND.pickupPc}</li>
              <li>
                <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phoneDisplay}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bs-wrap bs-foot-end">Demo de tienda por Nativa Web Studio. Las piezas y reseñas son prototipo.</div>
      </footer>
      <AnimatePresence>{cart.open ? <BagDrawer key="bag" /> : null}</AnimatePresence>
      <DemoTopBar
        templateName="Bávaro Swim"
        templateCategory="Resortwear"
        theme="gold"
        whatsappMessage="Hola Nativa, vi Bávaro Swim (#bavaro-swim) y quiero una tienda así: talla en el chat y recogida en SDQ."
      />
    </div>
  );
}

export default function BavaroShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <ShellInner>{children}</ShellInner>
    </CartProvider>
  );
}
