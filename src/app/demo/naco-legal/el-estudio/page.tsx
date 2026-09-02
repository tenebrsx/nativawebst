"use client";

import { FIRM, IMG, consultUrl } from "../data";
import { FadeIn, Reveal } from "../reveal";

export default function EstudioPage() {
  return (
    <>
      <section className="nl-page-hero">
        <div className="nl-wrap">
          <FadeIn>
            <div className="nl-kicker">
              <i />
              El estudio
            </div>
            <h1>Naco, una puerta. No un lobby de 12 pisos.</h1>
            <p className="nl-lede" style={{ color: "rgba(242,237,228,0.7)" }}>
              {FIRM.street}. Maps abre aquí. La consulta se pide antes, en el chat.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="nl-section">
        <div className="nl-wrap nl-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/facade.jpg`} alt="Fachada Naco Law Group" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="nl-kicker">
              <i />
              Llegar
            </div>
            <h2 style={{ fontSize: "2.4rem", fontStyle: "italic", margin: "10px 0" }}>Fantino Falco, Naco.</h2>
            <p className="nl-lede" style={{ maxWidth: "none" }}>
              Estacionamiento en la cuadra. Lun–Vie 9–6. La recepcionista no explica societario: el área ya está en el mensaje.
            </p>
            <a className="nl-btn nl-btn-amber" href={FIRM.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16 }}>
              Abrir Maps
            </a>
          </Reveal>
        </div>
      </section>
      <section className="nl-section" style={{ paddingTop: 0 }}>
        <div className="nl-wrap nl-split">
          <Reveal>
            <div className="nl-kicker">
              <i />
              Sala
            </div>
            <h2 style={{ fontSize: "2.4rem", fontStyle: "italic", margin: "10px 0" }}>La consulta es de 45 minutos.</h2>
            <p className="nl-lede" style={{ maxWidth: "none" }}>
              Mesa de nogal, no un cubículo. Traes el asunto. Nosotros traemos el expediente.
            </p>
            <a className="nl-btn nl-btn-wa" href={consultUrl()} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16 }}>
              Pedir esta semana
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/library.jpg`} alt="Biblioteca del estudio" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
