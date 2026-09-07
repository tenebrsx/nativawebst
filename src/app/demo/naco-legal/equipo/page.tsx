"use client";

import { LAWYERS, consultUrl } from "../data";
import { FadeIn, Reveal } from "../reveal";

export default function EquipoPage() {
  return (
    <>
      <section className="nl-page-hero">
        <div className="nl-wrap">
          <FadeIn>
            <div className="nl-kicker">
              <i />
              Equipo
            </div>
            <h1>Los ves en la web. Te escriben ellos.</h1>
            <p className="nl-lede" style={{ color: "rgba(242,237,228,0.7)" }}>
              Tres abogados. El chat no cae en un conmutador.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="nl-section">
        <div className="nl-wrap nl-team">
          {LAWYERS.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.08}>
              <article className="nl-doc">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.img} alt={l.name} />
                <h3>{l.name}</h3>
                <div className="role">{l.role}</div>
                <p>{l.cred}</p>
                <p>{l.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="nl-wrap" style={{ marginTop: 32 }}>
          <a className="nl-btn nl-btn-wa" href={consultUrl()} target="_blank" rel="noopener noreferrer">
            Pedir consulta
          </a>
        </div>
      </section>
    </>
  );
}
