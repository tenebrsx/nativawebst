"use client";

import { EXPERIENCES, IMG } from "../data";
import { FadeIn, Reveal } from "../reveal";
import Link from "next/link";
import { BASE } from "../data";

export default function ExperienciasPage() {
  return (
    <>
      <section className="pcv-page-hero">
        <div className="pcv-wrap">
          <FadeIn>
            <div className="pcv-kicker">
              <i />
              En la casa
            </div>
            <h1>El extra se pide en el hold.</h1>
            <p className="pcv-lede" style={{ color: "rgba(247,243,235,0.7)" }}>
              Chef, yate, mesa. No hay un carrito de add-ons. Se escribe debajo de las fechas.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="pcv-section">
        <div className="pcv-wrap">
          <div className="pcv-xp">
            {EXPERIENCES.map((x, i) => (
              <Reveal key={x.title} delay={i * 0.08}>
                <article>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={x.img} alt={x.title} />
                  <h3>{x.title}</h3>
                  <p>{x.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="pcv-section" style={{ paddingTop: 0 }}>
        <div className="pcv-wrap pcv-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/night.jpg`} alt="Piscina de noche" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="pcv-kicker">
              <i />
              Ritmo
            </div>
            <h2 style={{ fontSize: "2.8rem", fontStyle: "italic", margin: "10px 0" }}>La noche es de la casa.</h2>
            <p className="pcv-lede" style={{ maxWidth: "none" }}>
              Sin animación de resort. Sin pulsera. El staff se va. Queda el agua iluminada y la mesa.
            </p>
            <Link href={`${BASE}/reservar`} className="pcv-btn pcv-btn-night" style={{ marginTop: 18 }}>
              Pedir el hold
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
