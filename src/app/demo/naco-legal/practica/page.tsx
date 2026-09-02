"use client";

import Link from "next/link";
import { BASE, PRACTICES } from "../data";
import { FadeIn, Reveal } from "../reveal";

export default function PracticaPage() {
  return (
    <>
      <section className="nl-page-hero">
        <div className="nl-wrap">
          <FadeIn>
            <div className="nl-kicker">
              <i />
              Práctica
            </div>
            <h1>El área está en la página.</h1>
            <p className="nl-lede" style={{ color: "rgba(242,237,228,0.7)" }}>
              No un listado de 40 servicios. Cuatro puertas. WhatsApp agenda, no explica.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="nl-section">
        <div className="nl-wrap nl-grid">
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
      </section>
    </>
  );
}
