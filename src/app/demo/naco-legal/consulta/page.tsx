"use client";

import { FormEvent, useState } from "react";
import { PRACTICES, consultMessage } from "../data";
import { FadeIn } from "../reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export default function ConsultaPage() {
  const [area, setArea] = useState("societario");
  const [when, setWhen] = useState("esta semana");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [consultMessage(area, when), name ? `• Nombre: ${name}` : null, note ? `• Nota: ${note}` : null]
      .filter(Boolean)
      .join("\n");
    openWhatsApp(msg);
    setSent(true);
  };

  return (
    <>
      <section className="nl-page-hero">
        <div className="nl-wrap">
          <FadeIn>
            <div className="nl-kicker">
              <i />
              Consulta
            </div>
            <h1>El asunto ya va escrito.</h1>
            <p className="nl-lede" style={{ color: "rgba(242,237,228,0.7)" }}>
              Eliges el área y la semana. WhatsApp abre con la frase. El conmutador no suena.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="nl-section">
        <div className="nl-wrap">
          {sent ? (
            <div>
              <h2 style={{ fontSize: "2.2rem", fontStyle: "italic" }}>WhatsApp abierto.</h2>
              <p className="nl-lede" style={{ marginTop: 10 }}>
                El mensaje lleva el área y la semana. Si no se abrió, revisa el bloqueador.
              </p>
              <button type="button" className="nl-btn nl-btn-ghost" style={{ marginTop: 16 }} onClick={() => setSent(false)}>
                Otra consulta
              </button>
            </div>
          ) : (
            <form className="nl-form" onSubmit={submit}>
              <div className="nl-field">
                <label htmlFor="nl-area">Área</label>
                <select id="nl-area" value={area} onChange={(e) => setArea(e.target.value)}>
                  {PRACTICES.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="nl-field">
                <label htmlFor="nl-when">Cuándo</label>
                <select id="nl-when" value={when} onChange={(e) => setWhen(e.target.value)}>
                  <option value="esta semana">Esta semana</option>
                  <option value="la próxima semana">La próxima semana</option>
                  <option value="este mes">Este mes</option>
                </select>
              </div>
              <div className="nl-field">
                <label htmlFor="nl-name">Nombre</label>
                <input id="nl-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Marta Guillén" />
              </div>
              <div className="nl-field">
                <label htmlFor="nl-note">Nota</label>
                <textarea id="nl-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="SRL, CEI-RD, marca, litigio…" />
              </div>
              <button type="submit" className="nl-btn nl-btn-wa">
                Enviar consulta
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
