"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  BASE,
  FEATURED,
  IMG,
  METRAJES,
  NIVELES,
  OBRAS,
  REVIEWS,
  TIPOS,
  ZONAS,
  fmtM2,
  visitUrl,
} from "./data";
import { useVisit } from "./context";
import { FadeIn, Reveal } from "./reveal";
import ObraCard from "./obra-card";

export default function AybarHome() {
  const reduce = useReducedMotion();
  const visit = useVisit();
  const torre = FEATURED;

  return (
    <>
      <section className="ca-hero">
        <div className="ca-hero-media">
          <motion.img
            src={`${IMG}/hero.jpg`}
            alt="Torre de 18 niveles en Naco, Santo Domingo"
            initial={reduce ? false : { scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 14, ease: "linear" }}
          />
        </div>
        <div className="ca-hero-copy">
          <FadeIn>
            <div className="ca-kicker">
              <i />
              Obra · Santo Domingo
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1>
              Los m².
              <br />
              La zona.
              <br />
              <em>La visita.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="ca-lede">
              Torre, 18 niveles, 12.400 m², Naco. WhatsApp agenda la visita. No un PDF genérico.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              <a
                className="ca-btn ca-btn-wa"
                href={visitUrl(visit.tipo, visit.niveles, visit.m2, visit.zona)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar visita
              </a>
              <Link href={`${BASE}/obras`} className="ca-btn ca-btn-ghost" style={{ color: "#efebe3", borderColor: "rgba(255,255,255,0.28)" }}>
                Obras
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="ca-section">
        <div className="ca-wrap">
          <Reveal className="ca-section-head">
            <div className="ca-kicker">
              <i />
              Cómo entra
            </div>
            <h2>La ficha nombra el proyecto. El chat agenda la visita.</h2>
          </Reveal>
          <div className="ca-steps">
            <Reveal>
              <article className="ca-step">
                <h3>El tipo</h3>
                <p>Torre, villas, nave o plaza. Está en la página, no en un correo pidiendo el brochure.</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="ca-step">
                <h3>Los m²</h3>
                <p>12.400 por defecto, porque es el metraje que llega. El selector ya está puesto.</p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="ca-step">
                <h3>La zona</h3>
                <p>Naco. WhatsApp abre con niveles, metraje y barrio. La visita se pide, no se explica la firma.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ca-section" style={{ paddingTop: 0 }}>
        <div className="ca-wrap ca-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={torre.hero} alt={torre.name} />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ca-kicker">
              <i />
              En obra
            </div>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", margin: "10px 0 12px" }}>{torre.name}</h2>
            <p className="ca-lede" style={{ maxWidth: "none" }}>
              {torre.body}
            </p>
            <div className="ca-spec">
              {visit.niveles} niveles · {fmtM2(visit.m2)} m² · {visit.zona}
            </div>
            <div className="ca-chip-lab">Tipo</div>
            <div className="ca-chips">
              {TIPOS.map((t) => (
                <button key={t} type="button" className={`ca-chip${visit.tipo === t ? " is-on" : ""}`} onClick={() => visit.setTipo(t)}>
                  {t}
                </button>
              ))}
            </div>
            <div className="ca-chip-lab">Niveles</div>
            <div className="ca-chips">
              {NIVELES.map((n) => (
                <button key={n} type="button" className={`ca-chip${visit.niveles === n ? " is-on" : ""}`} onClick={() => visit.setNiveles(n)}>
                  {n}
                </button>
              ))}
            </div>
            <div className="ca-chip-lab">m²</div>
            <div className="ca-chips">
              {METRAJES.map((n) => (
                <button key={n} type="button" className={`ca-chip${visit.m2 === n ? " is-on" : ""}`} onClick={() => visit.setM2(n)}>
                  {fmtM2(n)}
                </button>
              ))}
            </div>
            <div className="ca-chip-lab">Zona</div>
            <div className="ca-chips">
              {ZONAS.map((z) => (
                <button key={z} type="button" className={`ca-chip${visit.zona === z ? " is-on" : ""}`} onClick={() => visit.setZona(z)}>
                  {z}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
              <a
                className="ca-btn ca-btn-wa"
                href={visitUrl(visit.tipo, visit.niveles, visit.m2, visit.zona)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir visita
              </a>
              <Link href={`${BASE}/obras/torre-naco`} className="ca-btn ca-btn-ghost">
                Ficha
              </Link>
            </div>
            <p className="ca-note">
              El mensaje sale: “{visit.tipo} {visit.niveles} niveles, {fmtM2(visit.m2)} m², {visit.zona}. ¿Agendamos visita?”
            </p>
          </Reveal>
        </div>
      </section>

      <section className="ca-section" style={{ paddingTop: 0 }}>
        <div className="ca-wrap">
          <Reveal className="ca-section-head">
            <div className="ca-kicker">
              <i />
              Obras
            </div>
            <h2>Cinco predios. El chat nombra los m².</h2>
          </Reveal>
          <div className="ca-grid">
            {OBRAS.map((o, i) => (
              <ObraCard key={o.slug} o={o} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="ca-section ca-ink">
        <div className="ca-wrap ca-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/site.jpg`} alt="Visita de obra Constructora Aybar" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ca-kicker">
              <i />
              Ingeniería
            </div>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", margin: "12px 0" }}>
              El expediente llega antes que la visita.
            </h2>
            <p className="ca-lede">
              Estructura, metraje, zona. WhatsApp no es un “info pls”. El promotor llega con el proyecto escrito.
            </p>
            <Link href={`${BASE}/ingenieria`} className="ca-btn ca-btn-oxide" style={{ marginTop: 20 }}>
              El método
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="ca-section">
        <div className="ca-wrap">
          <Reveal className="ca-section-head">
            <div className="ca-kicker">
              <i />
              Promotores
            </div>
            <h2>El primer mensaje ya traía los m².</h2>
          </Reveal>
          <div className="ca-reviews">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <blockquote className="ca-quote">
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
