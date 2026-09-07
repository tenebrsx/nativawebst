"use client";

import { BRAND, orderUrl } from "../data";
import { FadeIn, Reveal } from "../reveal";

export default function RecogerPage() {
  return (
    <>
      <section className="bs-page-hero">
        <div className="bs-wrap">
          <FadeIn>
            <div className="bs-kicker">
              <i />
              Recoger
            </div>
            <h1>BlueMall hoy. Punta Cana mañana.</h1>
            <p className="bs-lede">El chat pregunta la talla. La pieza espera en el mostrador.</p>
          </FadeIn>
        </div>
      </section>
      <section className="bs-section" style={{ paddingTop: 8 }}>
        <div className="bs-wrap bs-grid-2">
          <Reveal>
            <article className="bs-step">
              <h3>Santo Domingo</h3>
              <p>
                {BRAND.pickup}. Lunes a sábado 11–8. El enterizo arena, talla M, se reserva por WhatsApp y se recoge el mismo día.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="bs-step">
              <h3>Punta Cana</h3>
              <p>{BRAND.pickupPc}. Envío 24h desde SDQ. El mensaje ya trae la talla; el runner no pregunta “¿cuál era?”.</p>
            </article>
          </Reveal>
        </div>
        <div className="bs-wrap" style={{ marginTop: 32 }}>
          <a className="bs-btn bs-btn-wa" href={orderUrl("enterizo arena", "M")} target="_blank" rel="noopener noreferrer">
            Pedir enterizo arena, talla M
          </a>
        </div>
      </section>
    </>
  );
}
