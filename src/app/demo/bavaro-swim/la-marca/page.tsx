"use client";

import { IMG } from "../data";
import { FadeIn, Reveal } from "../reveal";

export default function LaMarcaPage() {
  return (
    <>
      <section className="bs-page-hero">
        <div className="bs-wrap">
          <FadeIn>
            <div className="bs-kicker">
              <i />
              La marca
            </div>
            <h1>Hecho para la costa este. Pedido en el chat.</h1>
            <p className="bs-lede">
              Bávaro Swim nace en Santo Domingo para quien ya está en Punta Cana a las seis. UV50+, lino, una talla que viaja en WhatsApp.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="bs-section" style={{ paddingTop: 8 }}>
        <div className="bs-wrap bs-split">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/tienda.jpg`} alt="Atelier Bávaro Swim" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="bs-kicker">
              <i />
              Atelier
            </div>
            <h2 style={{ fontSize: "2.6rem", fontStyle: "italic", margin: "10px 0" }}>Un rail en la Zona.</h2>
            <p className="bs-lede" style={{ maxWidth: "none" }}>
              No es un marketplace. Es un rail de arena y negro, luz de persiana, y un número de WhatsApp. Recogida en BlueMall el mismo día si hay talla.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
