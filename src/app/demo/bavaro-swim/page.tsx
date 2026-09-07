"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BASE, IMG, PRODUCTS, REVIEWS, orderUrl } from "./data";
import { FadeIn, Reveal } from "./reveal";
import ProductCard from "./product-card";

export default function BavaroHome() {
  const reduce = useReducedMotion();
  const enterizo = PRODUCTS[0];

  return (
    <>
      <section className="bs-hero">
        <div className="bs-hero-copy">
          <FadeIn>
            <div className="bs-kicker">
              <i />
              Verano · Bávaro
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1>
              La talla ya va <em>en el chat.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="bs-lede" style={{ color: "rgba(244,237,227,0.72)" }}>
              Eligen el enterizo en el celular. WhatsApp llega con la talla. Recogida en BlueMall, no un carrito abandonado.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 28 }}>
              <Link href={`${BASE}/tienda/enterizo-arena`} className="bs-btn bs-btn-gold">
                Enterizo Arena
              </Link>
              <Link href={`${BASE}/tienda`} className="bs-btn bs-btn-ghost" style={{ color: "#fbf7f1", borderColor: "rgba(255,255,255,0.25)" }}>
                Tienda
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="bs-hero-media">
          <motion.img
            src={enterizo.hero}
            alt="Enterizo Arena en Bávaro"
            initial={reduce ? false : { scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "linear" }}
          />
        </div>
      </section>

      <section className="bs-section">
        <div className="bs-wrap">
          <Reveal className="bs-section-head">
            <div className="bs-kicker">
              <i />
              Cómo se pide
            </div>
            <h2>Pieza. Talla. Recoger en SDQ.</h2>
          </Reveal>
          <div className="bs-steps">
            <Reveal>
              <article className="bs-step">
                <h3>La pieza</h3>
                <p>Enterizo, bikini, lino. El precio está en USD o DOP, a la vista.</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="bs-step">
                <h3>La talla</h3>
                <p>XS a L, en la ficha. No después, en un DM de Instagram.</p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="bs-step">
                <h3>El chat</h3>
                <p>WhatsApp abre con el enterizo arena, talla M, recogida en BlueMall.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bs-section" style={{ paddingTop: 0 }}>
        <div className="bs-wrap">
          <Reveal className="bs-section-head">
            <div className="bs-kicker">
              <i />
              Colección
            </div>
            <h2>Seis piezas. Una costa.</h2>
          </Reveal>
          <div className="bs-grid">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.slug} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bs-section bs-ink">
        <div className="bs-wrap bs-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/enterizo-detail.jpg`} alt="Detalle Enterizo Arena" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="bs-kicker">
              <i />
              Firma
            </div>
            <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", fontStyle: "italic", margin: "12px 0" }}>
              Enterizo Arena
            </h2>
            <p className="bs-lede">{enterizo.body}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
              <Link href={`${BASE}/tienda/enterizo-arena`} className="bs-btn bs-btn-gold">
                Ver pieza
              </Link>
              <a className="bs-btn bs-btn-wa" href={orderUrl("enterizo arena", "M")} target="_blank" rel="noopener noreferrer">
                Pedir talla M
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bs-section">
        <div className="bs-wrap">
          <Reveal className="bs-section-head">
            <div className="bs-kicker">
              <i />
              Lo que llega
            </div>
            <h2>El mensaje ya trae la talla.</h2>
          </Reveal>
          <div className="bs-grid-2">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <blockquote className="bs-quote">
                  <p>“{r.text}”</p>
                  <b>{r.name}</b>
                  <span>{r.piece}</span>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
