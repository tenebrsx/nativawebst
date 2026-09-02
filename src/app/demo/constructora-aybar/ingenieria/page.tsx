"use client";

import Link from "next/link";
import { BASE, IMG, visitUrl } from "../data";
import { FadeIn, Reveal } from "../reveal";

export default function IngenieriaPage() {
  return (
    <>
      <section className="ca-page-hero">
        <div className="ca-wrap">
          <FadeIn>
            <div className="ca-kicker">
              <i />
              Ingeniería
            </div>
            <h1>El metraje llega antes que el casco.</h1>
            <p className="ca-lede">Estructura, sismo, losa. La visita se pide con los m², no con un PDF genérico.</p>
          </FadeIn>
        </div>
      </section>
      <section className="ca-section" style={{ paddingTop: 8 }}>
        <div className="ca-wrap ca-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/site.jpg`} alt="Ingenieros en visita de obra" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ca-kicker">
              <i />
              Método
            </div>
            <h2 style={{ fontSize: "2.4rem", margin: "10px 0" }}>Tres datos. Una visita.</h2>
            <p className="ca-lede" style={{ maxWidth: "none" }}>
              Tipo, niveles, metraje, zona. El expediente entra por WhatsApp. El predio se camina después, no al revés.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="ca-section" style={{ paddingTop: 0 }}>
        <div className="ca-wrap">
          <div className="ca-steps">
            <Reveal>
              <article className="ca-step">
                <h3>Anteproyecto</h3>
                <p>El promotor nombra la torre y los m². No mandamos un brochure de 40 páginas.</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="ca-step">
                <h3>Estructura</h3>
                <p>Losa, sismo, CODIA. La visita confirma lo que el chat ya trajo.</p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="ca-step">
                <h3>Obra</h3>
                <p>Naco, Piantini, Cap Cana, Duarte. El barrio va en el primer mensaje.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="ca-section" style={{ paddingTop: 0 }}>
        <div className="ca-wrap ca-split">
          <Reveal>
            <div className="ca-kicker">
              <i />
              Visita
            </div>
            <h2 style={{ fontSize: "2.4rem", margin: "10px 0" }}>18 niveles. 12.400 m². Naco.</h2>
            <p className="ca-lede" style={{ maxWidth: "none" }}>
              El default es la torre que está pidiendo el mercado. WhatsApp abre con esa frase.
            </p>
            <a className="ca-btn ca-btn-wa" href={visitUrl()} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16 }}>
              Agendar esa visita
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/office.jpg`} alt="Estudio de Constructora Aybar" />
          </Reveal>
        </div>
      </section>
      <section className="ca-section" style={{ paddingTop: 0 }}>
        <div className="ca-wrap">
          <Link href={`${BASE}/obras/torre-naco`} className="ca-btn ca-btn-ghost">
            Ficha Torre Naco
          </Link>
        </div>
      </section>
    </>
  );
}
