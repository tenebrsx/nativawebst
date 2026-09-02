"use client";

import { FormEvent, useState } from "react";
import { COFFEES, DESTINOS, KILOS, kgLabel, orderLine } from "../data";
import { useOrder } from "../context";
import { FadeIn } from "../reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export default function PedidoPage() {
  const order = useOrder();
  const [coffee, setCoffee] = useState("geisha");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [orderLine(coffee, order.kg, order.dest), name ? `• Nombre: ${name}` : null, note ? `• Nota: ${note}` : null]
      .filter(Boolean)
      .join("\n");
    openWhatsApp(msg);
    setSent(true);
  };

  return (
    <>
      <section className="ct-page-hero">
        <div className="ct-wrap">
          <FadeIn>
            <div className="ct-kicker">
              <i />
              Pedido
            </div>
            <h1>El kilo y el destino ya van escritos.</h1>
            <p className="ct-lede">Eliges el café, los kilos y Piantini. WhatsApp abre con la frase. El formulario no se queda vacío.</p>
          </FadeIn>
        </div>
      </section>
      <section className="ct-section" style={{ paddingTop: 8 }}>
        <div className="ct-wrap">
          {sent ? (
            <div>
              <h2 style={{ fontSize: "2.2rem", fontStyle: "italic" }}>WhatsApp abierto.</h2>
              <p className="ct-lede" style={{ marginTop: 10 }}>
                El mensaje lleva el café, los kilos y el destino. Si no se abrió, revisa el bloqueador.
              </p>
              <button type="button" className="ct-btn ct-btn-ghost" style={{ marginTop: 16 }} onClick={() => setSent(false)}>
                Otro pedido
              </button>
            </div>
          ) : (
            <form className="ct-form" onSubmit={submit}>
              <div className="ct-field">
                <label htmlFor="ct-coffee">Café</label>
                <select id="ct-coffee" value={coffee} onChange={(e) => setCoffee(e.target.value)}>
                  {COFFEES.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="ct-field">
                <label htmlFor="ct-kg">Kilos</label>
                <select id="ct-kg" value={order.kg} onChange={(e) => order.setKg(Number(e.target.value))}>
                  {KILOS.map((n) => (
                    <option key={n} value={n}>
                      {kgLabel(n)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="ct-field">
                <label htmlFor="ct-dest">Destino</label>
                <select id="ct-dest" value={order.dest} onChange={(e) => order.setDest(e.target.value)}>
                  {DESTINOS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div className="ct-field">
                <label htmlFor="ct-name">Nombre</label>
                <input id="ct-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Sofía Mena" />
              </div>
              <div className="ct-field">
                <label htmlFor="ct-note">Nota</label>
                <textarea id="ct-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Tueste claro, grano entero…" />
              </div>
              <button type="submit" className="ct-btn ct-btn-wa">
                Enviar pedido
              </button>
              <p className="ct-note">{orderLine(coffee, order.kg, order.dest)}</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
