"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  BASE,
  COFFEES,
  DESTINOS,
  FEATURED,
  IMG,
  KILOS,
  REVIEWS,
  bagDop,
  bagUsd,
  kgLabel,
  money,
  orderUrl,
} from "./data";
import { useOrder } from "./context";
import { FadeIn, Reveal } from "./reveal";
import CoffeeCard from "./coffee-card";

export default function TerrenasHome() {
  const reduce = useReducedMotion();
  const order = useOrder();
  const geisha = FEATURED;

  return (
    <>
      <section className="ct-hero">
        <div className="ct-hero-media">
          <motion.img
            src={`${IMG}/terrace.jpg`}
            alt="Terraza de Café Terrenas en Las Terrenas al atardecer"
            initial={reduce ? false : { scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 14, ease: "linear" }}
          />
        </div>
        <div className="ct-hero-copy">
          <FadeIn>
            <div className="ct-kicker">
              <i />
              Tueste · Las Terrenas
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1>
              El kilo.
              <br />
              El destino.
              <br />
              <em>El precio en DOP.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="ct-lede">
              Geisha El Limón, dos kilos, envío a Piantini. WhatsApp cierra el envío. No un formulario vacío.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              <a className="ct-btn ct-btn-wa" href={orderUrl("geisha", order.kg, order.dest)} target="_blank" rel="noopener noreferrer">
                Pedir {kgLabel(order.kg)} de geisha
              </a>
              <Link href={`${BASE}/tienda`} className="ct-btn ct-btn-ghost" style={{ color: "#fbf6ee", borderColor: "rgba(255,255,255,0.28)" }}>
                Tienda
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="ct-section">
        <div className="ct-wrap">
          <Reveal className="ct-section-head">
            <div className="ct-kicker">
              <i />
              Cómo se pide
            </div>
            <h2>La ficha nombra el café. El chat cierra el envío.</h2>
          </Reveal>
          <div className="ct-steps">
            <Reveal>
              <article className="ct-step">
                <h3>El tueste</h3>
                <p>Geisha, caturra, natural. Está en la página, no en un DM pidiendo la lista.</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="ct-step">
                <h3>Los kilos</h3>
                <p>250 g o dos kilos. El selector ya está en 2 kg porque es el pedido que llega.</p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="ct-step">
                <h3>El destino</h3>
                <p>Piantini por defecto. WhatsApp abre con kilos, café y ciudad. El precio, en DOP.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ct-section" style={{ paddingTop: 0 }}>
        <div className="ct-wrap ct-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={geisha.hero} alt={geisha.name} />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ct-kicker">
              <i />
              Micro-lote
            </div>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", fontStyle: "italic", margin: "10px 0 12px" }}>
              {geisha.name}
            </h2>
            <p className="ct-lede" style={{ maxWidth: "none" }}>
              {geisha.origin}. {geisha.notes}. {geisha.body}
            </p>
            <div className="ct-price">{money(bagUsd(geisha, order.kg), bagDop(geisha, order.kg), order.currency)}</div>
            <div className="ct-chip-lab">Kilos</div>
            <div className="ct-chips">
              {KILOS.map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`ct-chip${order.kg === n ? " is-on" : ""}`}
                  onClick={() => order.setKg(n)}
                >
                  {kgLabel(n)}
                </button>
              ))}
            </div>
            <div className="ct-chip-lab">Destino</div>
            <div className="ct-chips">
              {DESTINOS.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`ct-chip${order.dest === d ? " is-on" : ""}`}
                  onClick={() => order.setDest(d)}
                >
                  {d}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
              <a className="ct-btn ct-btn-wa" href={orderUrl("geisha", order.kg, order.dest)} target="_blank" rel="noopener noreferrer">
                Pedir por WhatsApp
              </a>
              <Link href={`${BASE}/tienda/geisha`} className="ct-btn ct-btn-ghost">
                Ficha
              </Link>
            </div>
            <p className="ct-note">
              El mensaje sale: “Quiero {kgLabel(order.kg).replace(" ", "")} de geisha, envío a {order.dest}. ¿Cuánto en DOP?”
            </p>
          </Reveal>
        </div>
      </section>

      <section className="ct-section" style={{ paddingTop: 0 }}>
        <div className="ct-wrap">
          <Reveal className="ct-section-head">
            <div className="ct-kicker">
              <i />
              Tienda
            </div>
            <h2>Cinco lotes. El chat nombra el kilo.</h2>
          </Reveal>
          <div className="ct-grid">
            {COFFEES.map((c, i) => (
              <CoffeeCard key={c.slug} c={c} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="ct-section ct-ink">
        <div className="ct-wrap ct-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/farm.jpg`} alt="Finca El Limón, Samaná" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ct-kicker">
              <i />
              Origen
            </div>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontStyle: "italic", margin: "12px 0" }}>
              El Limón, no un blend anónimo.
            </h2>
            <p className="ct-lede">
              La loma de Samaná. El geisha sube a 1.280 m. El tueste se hace en Las Terrenas. El kilo se pide con destino.
            </p>
            <Link href={`${BASE}/origen`} className="ct-btn ct-btn-clay" style={{ marginTop: 20 }}>
              La finca
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="ct-section">
        <div className="ct-wrap">
          <Reveal className="ct-section-head">
            <div className="ct-kicker">
              <i />
              Quienes piden
            </div>
            <h2>El primer mensaje ya traía los kilos.</h2>
          </Reveal>
          <div className="ct-reviews">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <blockquote className="ct-quote">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt="" />
                  <p>“{r.text}”</p>
                  <b>{r.name}</b>
                  <span>{r.stay}</span>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
