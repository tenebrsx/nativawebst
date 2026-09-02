"use client";

import Link from "next/link";
import { BASE, IMG, orderUrl } from "../data";
import { FadeIn, Reveal } from "../reveal";

export default function OrigenPage() {
  return (
    <>
      <section className="ct-page-hero">
        <div className="ct-wrap">
          <FadeIn>
            <div className="ct-kicker">
              <i />
              Origen
            </div>
            <h1>El Limón, Samaná. No un origen de catálogo.</h1>
            <p className="ct-lede">La loma da el geisha. Las Terrenas tuesta. Piantini recibe el kilo.</p>
          </FadeIn>
        </div>
      </section>
      <section className="ct-section" style={{ paddingTop: 8 }}>
        <div className="ct-wrap ct-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/farm.jpg`} alt="Cafetales de Finca El Limón" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ct-kicker">
              <i />
              Finca
            </div>
            <h2 style={{ fontSize: "2.4rem", fontStyle: "italic", margin: "10px 0" }}>1.280 metros. Sombra de guama.</h2>
            <p className="ct-lede" style={{ maxWidth: "none" }}>
              El Limón mira al Atlántico. El geisha se cosecha a mano. El caturra honey se seca en cama. No hay un blend sin nombre: cada ficha dice la loma.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="ct-section" style={{ paddingTop: 0 }}>
        <div className="ct-wrap ct-split">
          <Reveal>
            <div className="ct-kicker">
              <i />
              Tueste
            </div>
            <h2 style={{ fontSize: "2.4rem", fontStyle: "italic", margin: "10px 0" }}>Se tuesta en la terraza, no en un parque industrial.</h2>
            <p className="ct-lede" style={{ maxWidth: "none" }}>
              Tambor de 5 kg en Calle Principal. El perfil se escribe en el chat junto a los kilos. Claro para el geisha. Medio para el espresso de la casa.
            </p>
            <Link href={`${BASE}/tienda/geisha`} className="ct-btn ct-btn-clay" style={{ marginTop: 16 }}>
              Geisha El Limón
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/roaster.jpg`} alt="Tostador en Café Terrenas" />
          </Reveal>
        </div>
      </section>
      <section className="ct-section" style={{ paddingTop: 0 }}>
        <div className="ct-wrap">
          <Reveal>
            <div className="ct-kicker">
              <i />
              Pedido
            </div>
            <h2 style={{ fontSize: "2.2rem", fontStyle: "italic", margin: "10px 0 16px" }}>El origen ya está en la bolsa. Falta el destino.</h2>
            <a className="ct-btn ct-btn-wa" href={orderUrl()} target="_blank" rel="noopener noreferrer">
              2 kg de geisha a Piantini
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
