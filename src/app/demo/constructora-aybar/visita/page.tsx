"use client";

import { FormEvent, useState } from "react";
import { METRAJES, NIVELES, TIPOS, ZONAS, fmtM2, visitLine } from "../data";
import { useVisit } from "../context";
import { FadeIn } from "../reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export default function VisitaPage() {
  const visit = useVisit();
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      visitLine(visit.tipo, visit.niveles, visit.m2, visit.zona),
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
      <section className="ca-page-hero">
        <div className="ca-wrap">
          <FadeIn>
            <div className="ca-kicker">
              <i />
              Visita
            </div>
            <h1>Los m² y la zona ya van escritos.</h1>
            <p className="ca-lede">Eliges tipo, niveles y Naco. WhatsApp abre con la frase. El PDF no se queda vacío.</p>
          </FadeIn>
        </div>
      </section>
      <section className="ca-section" style={{ paddingTop: 8 }}>
        <div className="ca-wrap">
          {sent ? (
            <div>
              <h2 style={{ fontSize: "2.2rem" }}>WhatsApp abierto.</h2>
              <p className="ca-lede" style={{ marginTop: 10 }}>
                El mensaje lleva el tipo, los niveles, los m² y la zona. Si no se abrió, revisa el bloqueador.
              </p>
              <button type="button" className="ca-btn ca-btn-ghost" style={{ marginTop: 16 }} onClick={() => setSent(false)}>
                Otra visita
              </button>
            </div>
          ) : (
            <form className="ca-form" onSubmit={submit}>
              <div className="ca-field">
                <label htmlFor="ca-tipo">Tipo</label>
                <select id="ca-tipo" value={visit.tipo} onChange={(e) => visit.setTipo(e.target.value)}>
                  {TIPOS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="ca-field">
                <label htmlFor="ca-niveles">Niveles</label>
                <select id="ca-niveles" value={visit.niveles} onChange={(e) => visit.setNiveles(Number(e.target.value))}>
                  {NIVELES.map((n) => (
                    <option key={n} value={n}>
                      {n} niveles
                    </option>
                  ))}
                </select>
              </div>
              <div className="ca-field">
                <label htmlFor="ca-m2">m²</label>
                <select id="ca-m2" value={visit.m2} onChange={(e) => visit.setM2(Number(e.target.value))}>
                  {METRAJES.map((n) => (
                    <option key={n} value={n}>
                      {fmtM2(n)} m²
                    </option>
                  ))}
                </select>
              </div>
              <div className="ca-field">
                <label htmlFor="ca-zona">Zona</label>
                <select id="ca-zona" value={visit.zona} onChange={(e) => visit.setZona(e.target.value)}>
                  {ZONAS.map((z) => (
                    <option key={z} value={z}>
                      {z}
                    </option>
                  ))}
                </select>
              </div>
              <div className="ca-field">
                <label htmlFor="ca-name">Nombre</label>
                <input id="ca-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Marta Guillén" />
              </div>
              <div className="ca-field">
                <label htmlFor="ca-note">Nota</label>
                <textarea id="ca-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Losa, sismo, fecha de visita…" />
              </div>
              <button type="submit" className="ca-btn ca-btn-wa">
                Enviar visita
              </button>
              <p className="ca-note">{visitLine(visit.tipo, visit.niveles, visit.m2, visit.zona)}</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
