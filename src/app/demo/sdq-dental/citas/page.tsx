"use client";

import { FormEvent, useState } from "react";
import { TREATMENTS, patientWa } from "../data";
import { openWhatsApp } from "@/lib/whatsapp";

export default function CitasPage() {
  const [sent, setSent] = useState(false);
  const [treatment, setTreatment] = useState(TREATMENTS[0].title);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [when, setWhen] = useState("Esta semana");
  const [note, setNote] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      patientWa(treatment),
      "",
      name ? `• Nombre: ${name}` : null,
      phone ? `• WhatsApp: ${phone}` : null,
      `• Preferencia: ${when}`,
      note ? `• Nota: ${note}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    openWhatsApp(msg);
    setSent(true);
  };

  return (
    <>
      <section className="sdq-page-hero">
        <div className="sdq-wrap">
          <div className="sdq-kicker">Citas</div>
          <h1 style={{ margin: "10px 0 12px", fontSize: "clamp(2.1rem, 4vw, 3.2rem)" }}>
            Dile el tratamiento. Te confirmamos la hora.
          </h1>
          <p className="sdq-lede">
            El formulario no se queda en una bandeja. Abre WhatsApp con el servicio ya escrito.
          </p>
        </div>
      </section>
      <section className="sdq-section" style={{ paddingTop: 16 }}>
        <div className="sdq-wrap">
          {sent ? (
            <div className="sdq-success" style={{ maxWidth: 560 }}>
              <h2>WhatsApp abierto.</h2>
              <p style={{ margin: "8px 0 16px", color: "var(--sdq-muted)" }}>
                Si no se abrió la ventana, revisa el bloqueador. El equipo confirma cupo en el chat.
              </p>
              <button type="button" className="sdq-btn sdq-btn-ghost" onClick={() => setSent(false)}>
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form className="sdq-form" onSubmit={submit}>
              <div>
                <label htmlFor="sdq-t">Tratamiento</label>
                <select id="sdq-t" value={treatment} onChange={(e) => setTreatment(e.target.value)}>
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="sdq-n">Nombre</label>
                <input id="sdq-n" required value={name} onChange={(e) => setName(e.target.value)} placeholder="María Almonte" />
              </div>
              <div>
                <label htmlFor="sdq-p">WhatsApp</label>
                <input id="sdq-p" required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="809-555-0192" />
              </div>
              <div>
                <label htmlFor="sdq-w">Cuándo</label>
                <select id="sdq-w" value={when} onChange={(e) => setWhen(e.target.value)}>
                  <option>Esta semana</option>
                  <option>La próxima semana</option>
                  <option>Este mes</option>
                </select>
              </div>
              <div>
                <label htmlFor="sdq-note">Nota (opcional)</label>
                <textarea id="sdq-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Dolor, seguro ARS, turismo médico…" />
              </div>
              <button type="submit" className="sdq-btn sdq-btn-wa">
                Enviar por WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
