"use client";

import { BRAND, ENGINEERS, IMG, visitUrl } from "../data";
import { FadeIn, Reveal } from "../reveal";

export default function EstudioPage() {
  return (
    <>
      <section className="ca-page-hero">
        <div className="ca-wrap">
          <FadeIn>
            <div className="ca-kicker">
              <i />
              Estudio
            </div>
            <h1>Una mesa de planos. No un lobby de 12 pisos.</h1>
            <p className="ca-lede">
              {BRAND.street}. Maps abre aquí. La visita al predio se pide antes, en el chat.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="ca-section" style={{ paddingTop: 8 }}>
        <div className="ca-wrap ca-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/office.jpg`} alt="Estudio Constructora Aybar" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ca-kicker">
              <i />
              Llegar
            </div>
            <h2 style={{ fontSize: "2.4rem", margin: "10px 0" }}>Máximo Gómez, Santo Domingo.</h2>
            <p className="ca-lede" style={{ maxWidth: "none" }}>
              Lun–Vie 8–18. La recepcionista no explica la torre: los m² ya están en el mensaje.
            </p>
            <a className="ca-btn ca-btn-oxide" href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16 }}>
              Abrir Maps
            </a>
          </Reveal>
        </div>
      </section>
      <section className="ca-section" style={{ paddingTop: 0 }}>
        <div className="ca-wrap">
          <Reveal className="ca-section-head">
            <div className="ca-kicker">
              <i />
              Dirección
            </div>
            <h2>Quien camina el predio.</h2>
          </Reveal>
          <div className="ca-team">
            {ENGINEERS.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.08}>
                <article className="ca-doc">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.img} alt={e.name} />
                  <h3>{e.name}</h3>
                  <div className="role">{e.role}</div>
                  <p>{e.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="ca-section" style={{ paddingTop: 0 }}>
        <div className="ca-wrap">
          <a className="ca-btn ca-btn-wa" href={visitUrl()} target="_blank" rel="noopener noreferrer">
            Visita Torre Naco
          </a>
        </div>
      </section>
    </>
  );
}
