"use client";

import { BRAND, IMG, orderUrl } from "../data";
import { FadeIn, Reveal } from "../reveal";

export default function LocalPage() {
  return (
    <>
      <section className="ct-page-hero">
        <div className="ct-wrap">
          <FadeIn>
            <div className="ct-kicker">
              <i />
              El local
            </div>
            <h1>Terraza al pueblo. El pedido también se hace sentado.</h1>
            <p className="ct-lede">
              {BRAND.street}. Maps abre aquí. El geisha se pide antes, en el chat, si va a Piantini.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="ct-section" style={{ paddingTop: 8 }}>
        <div className="ct-wrap ct-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/terrace.jpg`} alt="Terraza de Café Terrenas" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ct-kicker">
              <i />
              Llegar
            </div>
            <h2 style={{ fontSize: "2.4rem", fontStyle: "italic", margin: "10px 0" }}>Calle Principal, frente al parque.</h2>
            <p className="ct-lede" style={{ maxWidth: "none" }}>
              Abierto 7–18. Shot de la casa o bolsa para el viaje. Si el kilo va a Santo Domingo, WhatsApp ya trae el destino.
            </p>
            <a className="ct-btn ct-btn-clay" href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16 }}>
              Abrir Maps
            </a>
          </Reveal>
        </div>
      </section>
      <section className="ct-section" style={{ paddingTop: 0 }}>
        <div className="ct-wrap ct-split">
          <Reveal>
            <div className="ct-kicker">
              <i />
              Barra
            </div>
            <h2 style={{ fontSize: "2.4rem", fontStyle: "italic", margin: "10px 0" }}>El espresso se sirve. El geisha se envía.</h2>
            <p className="ct-lede" style={{ maxWidth: "none" }}>
              La barra es para quien está en Las Terrenas. El chat es para quien está en Piantini y quiere dos kilos.
            </p>
            <a className="ct-btn ct-btn-wa" href={orderUrl()} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16 }}>
              Pedir envío
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/barista.jpg`} alt="Barista en Café Terrenas" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
