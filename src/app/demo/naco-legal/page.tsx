"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BASE, FIRM, IMG, LAWYERS, PRACTICES, REVIEWS, consultUrl } from "./data";
import { FadeIn, Reveal } from "./reveal";

export default function NacoHome() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="nl-hero">
        <div className="nl-hero-media">
          <motion.img
            src={`${IMG}/conference.jpg`}
            alt="Sala de juntas de Naco Law Group"
            initial={reduce ? false : { scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 14, ease: "linear" }}
          />
        </div>
        <div className="nl-hero-copy">
          <FadeIn>
            <div className="nl-kicker">
              <i />
              {FIRM.kicker}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1>
              El asunto ya va <em>en el chat.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="nl-lede" style={{ color: "rgba(242,237,228,0.8)" }}>
              Societario, inversión, marcas, litigios. WhatsApp agenda la consulta. No explica el bufete.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              <a className="nl-btn nl-btn-wa" href={consultUrl()} target="_blank" rel="noopener noreferrer">
                Consulta de societario
              </a>
              <Link href={`${BASE}/practica`} className="nl-btn nl-btn-ghost" style={{ color: "#faf7f1", borderColor: "rgba(255,255,255,0.25)" }}>
                Áreas
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="nl-section">
        <div className="nl-wrap">
          <Reveal className="nl-section-head">
            <div className="nl-kicker">
              <i />
              Cómo entra
            </div>
            <h2>La web nombra el asunto. El chat agenda.</h2>
          </Reveal>
          <div className="nl-steps">
            <Reveal>
              <article className="nl-step">
                <h3>El área</h3>
                <p>Societario, inversión, marcas o litigios. Está en la página, no en un menú de voz.</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="nl-step">
                <h3>El equipo</h3>
                <p>Nolasco, Almonte, Reyes. Los ves antes de escribir.</p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="nl-step">
                <h3>La consulta</h3>
                <p>WhatsApp abre con “consulta de societario esta semana”. El conmutador no suena.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="nl-section" style={{ paddingTop: 0 }}>
        <div className="nl-wrap">
          <Reveal className="nl-section-head">
            <div className="nl-kicker">
              <i />
              Práctica
            </div>
            <h2>Cuatro puertas. El asunto ya tiene nombre.</h2>
          </Reveal>
          <div className="nl-grid">
            {PRACTICES.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link href={`${BASE}/practica/${p.slug}`} className="nl-card">
                  <em>{p.tag}</em>
                  <h3>{p.name}</h3>
                  <p>{p.lede}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="nl-section" style={{ paddingTop: 0 }}>
        <div className="nl-wrap">
          <Reveal className="nl-section-head">
            <div className="nl-kicker">
              <i />
              Equipo
            </div>
            <h2>Quien contesta el chat.</h2>
          </Reveal>
          <div className="nl-team">
            {LAWYERS.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.08}>
                <article className="nl-doc">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.img} alt={l.name} />
                  <h3>{l.name}</h3>
                  <div className="role">{l.role}</div>
                  <p>{l.cred}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href={`${BASE}/equipo`} className="nl-btn nl-btn-ghost">
              Bios
            </Link>
          </div>
        </div>
      </section>

      <section className="nl-section nl-night">
        <div className="nl-wrap nl-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/facade.jpg`} alt="Estudio en Naco" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="nl-kicker">
              <i />
              Naco
            </div>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontStyle: "italic", margin: "12px 0" }}>
              Una casa. No un piso de 40 extensiones.
            </h2>
            <p className="nl-lede">
              {FIRM.street}. El Maps apunta a la puerta de madera. La consulta se pide en el chat, no al conmutador.
            </p>
            <Link href={`${BASE}/el-estudio`} className="nl-btn nl-btn-amber" style={{ marginTop: 20 }}>
              El estudio
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="nl-section">
        <div className="nl-wrap">
          <Reveal className="nl-section-head">
            <div className="nl-kicker">
              <i />
              Clientes
            </div>
            <h2>El primer mensaje ya traía el asunto.</h2>
          </Reveal>
          <div className="nl-reviews">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <blockquote className="nl-quote">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt="" />
                  <p>“{r.text}”</p>
                  <b>{r.name}</b>
                  <span>{r.matter}</span>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
