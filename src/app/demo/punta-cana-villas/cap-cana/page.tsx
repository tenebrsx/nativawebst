"use client";

import { IMG, BRAND } from "../data";
import { FadeIn, Reveal } from "../reveal";

export default function CapCanaPage() {
  return (
    <>
      <section className="pcv-page-hero">
        <div className="pcv-wrap">
          <FadeIn>
            <div className="pcv-kicker">
              <i />
              El recinto
            </div>
            <h1>Cap Cana, no Punta Cana genérico.</h1>
            <p className="pcv-lede" style={{ color: "rgba(247,243,235,0.7)" }}>
              Un portón. Una marina. Un campo. Una playa. Las villas están adentro. Maps abre la caseta.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="pcv-section">
        <div className="pcv-wrap pcv-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/marina-aerial.jpg`} alt="Marina Cap Cana" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="pcv-kicker">
              <i />
              Marina
            </div>
            <h2 style={{ fontSize: "2.8rem", fontStyle: "italic", margin: "10px 0" }}>El muelle es la calle.</h2>
            <p className="pcv-lede" style={{ maxWidth: "none" }}>
              Villa Marina tiene muelle propio. El yate no es un extra de brochure: sale de abajo. El hold en WhatsApp es también el aviso a seguridad.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="pcv-section" style={{ paddingTop: 0 }}>
        <div className="pcv-wrap pcv-split">
          <Reveal>
            <div className="pcv-kicker">
              <i />
              Juanillo
            </div>
            <h2 style={{ fontSize: "2.8rem", fontStyle: "italic", margin: "10px 0" }}>Arena clara, sin silla de hotel.</h2>
            <p className="pcv-lede" style={{ maxWidth: "none" }}>
              Villa Coral está a tres minutos a pie. Casa Caletón mira una caleta. No hay toalla de resort. Hay un camino de uvas de playa.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/beach.jpg`} alt="Camino a Juanillo" />
          </Reveal>
        </div>
      </section>
      <section className="pcv-section pcv-night">
        <div className="pcv-wrap">
          <Reveal className="pcv-section-head">
            <div className="pcv-kicker">
              <i />
              Llegar
            </div>
            <h2>PUJ, 25 minutos. El portón, con el chat.</h2>
            <p>
              {BRAND.place}. Transfer privado se pide en el mismo hilo del hold. Estacionamiento en cada casa. Uber llega hasta la caseta.
            </p>
          </Reveal>
          <a className="pcv-btn pcv-btn-brass" href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer">
            Abrir Maps
          </a>
        </div>
      </section>
    </>
  );
}
