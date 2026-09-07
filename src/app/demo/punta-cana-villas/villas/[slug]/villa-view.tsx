"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  type Villa,
  formatRange,
  holdUrl,
  money,
  nightsBetween,
} from "../../data";
import { useStay } from "../../context";
import { FadeIn } from "../../reveal";

export default function VillaView({ villa }: { villa: Villa }) {
  const stay = useStay();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<string | null>(null);
  const nights = nightsBetween(stay.checkIn, stay.checkOut);
  const total = villa.nightUsd * nights;
  const wa = holdUrl({
    villa: villa.name,
    checkIn: stay.checkIn,
    checkOut: stay.checkOut,
    guests: stay.guests,
    currency: stay.currency,
  });

  return (
    <>
      <section className="pcv-page-hero">
        <div className="pcv-wrap">
          <FadeIn>
            <div className="pcv-kicker">
              <i />
              {villa.areaLabel}
            </div>
            <h1>{villa.name}</h1>
            <p className="pcv-lede" style={{ color: "rgba(247,243,235,0.7)" }}>
              {villa.lede}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pcv-section">
        <div className="pcv-wrap pcv-feature" style={{ alignItems: "start" }}>
          <div className="pcv-gallery">
            <button type="button" onClick={() => setOpen(villa.gallery[0])} style={{ border: 0, padding: 0, background: "none", cursor: "pointer" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="main" src={villa.gallery[0]} alt={villa.name} />
            </button>
            <div className="pcv-gallery-side">
              {villa.gallery.slice(1, 3).map((src) => (
                <button key={src} type="button" onClick={() => setOpen(src)} style={{ border: 0, padding: 0, background: "none", cursor: "pointer" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          </div>

          <aside className="pcv-book">
            <div className="pcv-kicker">
              <i />
              Hold
            </div>
            <div className="price">{money(villa.nightUsd, stay.currency)}</div>
            <div style={{ fontSize: 13, color: "var(--pcv-mute)", marginBottom: 14 }}>/ noche · {nights} noches · {money(total, stay.currency)}</div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--pcv-mute)" }}>
              {formatRange(stay.checkIn, stay.checkOut)} · {stay.guests} personas · {stay.currency}
            </p>
            <a className="pcv-btn pcv-btn-wa" href={wa} target="_blank" rel="noopener noreferrer" style={{ width: "100%", marginTop: 16 }}>
              Pedir recorrido
            </a>
            <p style={{ fontSize: 12, color: "var(--pcv-mute)", marginTop: 12 }}>
              El mensaje sale con la villa, las fechas y la moneda. WhatsApp es el hold — no un motor de reservas.
            </p>
          </aside>
        </div>

        <div className="pcv-wrap" style={{ marginTop: 48, maxWidth: 720 }}>
          <h2 style={{ fontSize: "2.4rem", fontStyle: "italic" }}>La casa</h2>
          <p className="pcv-lede" style={{ maxWidth: "none", marginTop: 12 }}>
            {villa.body}
          </p>
          <div className="pcv-amenities">
            {villa.amenities.map((a) => (
              <span className="pcv-chip" key={a}>
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open ? (
          <motion.button
            type="button"
            className="pcv-lb"
            onClick={() => setOpen(null)}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Cerrar foto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={open} alt="" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}
