"use client";

import { FormEvent, useState } from "react";
import { VILLAS, formatRange, holdMessage, nightsBetween } from "../data";
import { useStay } from "../context";
import { FadeIn } from "../reveal";
import StayBar from "../stay-bar";
import { openWhatsApp } from "@/lib/whatsapp";

export default function ReservarPage() {
  const stay = useStay();
  const [villa, setVilla] = useState("Villa Marina");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const nights = nightsBetween(stay.checkIn, stay.checkOut);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      holdMessage({
        villa,
        checkIn: stay.checkIn,
        checkOut: stay.checkOut,
        guests: stay.guests,
        currency: stay.currency,
      }),
      name ? `• Nombre: ${name}` : null,
      note ? `• Nota: ${note}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    openWhatsApp(msg);
    setSent(true);
  };

  return (
    <>
      <section className="pcv-page-hero">
        <div className="pcv-wrap">
          <FadeIn>
            <div className="pcv-kicker">
              <i />
              Hold
            </div>
            <h1>La villa ya va en el mensaje.</h1>
            <p className="pcv-lede" style={{ color: "rgba(247,243,235,0.7)" }}>
              {formatRange(stay.checkIn, stay.checkOut)} · {stay.guests} personas · {nights} noches · {stay.currency}
            </p>
          </FadeIn>
        </div>
      </section>
      <StayBar flush ctaHref="#pcv-hold" ctaLabel="Usar estas fechas" />
      <section className="pcv-section" id="pcv-hold">
        <div className="pcv-wrap">
          {sent ? (
            <div>
              <h2 style={{ fontSize: "2.4rem", fontStyle: "italic" }}>WhatsApp abierto.</h2>
              <p className="pcv-lede" style={{ marginTop: 10 }}>
                El hold salió con la villa, las fechas y la moneda. Si no se abrió, revisa el bloqueador.
              </p>
              <button type="button" className="pcv-btn pcv-btn-ghost" style={{ marginTop: 16, color: "var(--pcv-ink)", borderColor: "var(--pcv-line)" }} onClick={() => setSent(false)}>
                Otro hold
              </button>
            </div>
          ) : (
            <form className="pcv-form" onSubmit={submit}>
              <div className="pcv-field">
                <label htmlFor="pcv-villa">Villa</label>
                <select id="pcv-villa" value={villa} onChange={(e) => setVilla(e.target.value)}>
                  {VILLAS.map((v) => (
                    <option key={v.slug} value={v.name}>
                      {v.name} · {v.areaLabel}
                    </option>
                  ))}
                </select>
              </div>
              <div className="pcv-field">
                <label htmlFor="pcv-name">Nombre</label>
                <input id="pcv-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Clara Méndez" />
              </div>
              <div className="pcv-field">
                <label htmlFor="pcv-note">Nota</label>
                <textarea id="pcv-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Chef, yate, cuna, transfer PUJ…" />
              </div>
              <button type="submit" className="pcv-btn pcv-btn-wa">
                Enviar hold por WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
