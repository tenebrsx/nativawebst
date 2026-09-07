"use client";

import { COFFEES } from "../data";
import { FadeIn } from "../reveal";
import CoffeeCard from "../coffee-card";

export default function TiendaPage() {
  return (
    <>
      <section className="ct-page-hero">
        <div className="ct-wrap">
          <FadeIn>
            <div className="ct-kicker">
              <i />
              Tienda
            </div>
            <h1>El café se elige aquí. El kilo, también.</h1>
            <p className="ct-lede">Cinco lotes. DOP en la ficha. WhatsApp cierra con tueste, kilos y destino.</p>
          </FadeIn>
        </div>
      </section>
      <section className="ct-section" style={{ paddingTop: 8 }}>
        <div className="ct-wrap">
          <div className="ct-grid">
            {COFFEES.map((c, i) => (
              <CoffeeCard key={c.slug} c={c} i={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
