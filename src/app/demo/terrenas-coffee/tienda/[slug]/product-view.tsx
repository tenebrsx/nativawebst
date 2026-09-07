"use client";

import { DESTINOS, KILOS, bagDop, bagUsd, kgLabel, money, orderUrl, type Coffee } from "../../data";
import { useOrder } from "../../context";
import { FadeIn } from "../../reveal";

export default function ProductView({ coffee }: { coffee: Coffee }) {
  const order = useOrder();

  return (
    <section className="ct-section">
      <div className="ct-wrap ct-pdp">
        <FadeIn>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={coffee.hero} alt={coffee.name} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="ct-kicker">
            <i />
            {coffee.process} · {coffee.origin}
          </div>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontStyle: "italic", margin: "10px 0 12px" }}>{coffee.name}</h1>
          <div className="ct-price">{money(bagUsd(coffee, order.kg), bagDop(coffee, order.kg), order.currency)}</div>
          <p className="ct-lede" style={{ maxWidth: "none" }}>
            {coffee.body}
          </p>
          <p style={{ marginTop: 8, color: "var(--ct-mute)", fontSize: 14 }}>{coffee.notes}</p>
          <div className="ct-chip-lab">Kilos</div>
          <div className="ct-chips">
            {KILOS.map((n) => (
              <button
                key={n}
                type="button"
                className={`ct-chip${order.kg === n ? " is-on" : ""}`}
                onClick={() => order.setKg(n)}
              >
                {kgLabel(n)}
              </button>
            ))}
          </div>
          <div className="ct-chip-lab">Destino</div>
          <div className="ct-chips">
            {DESTINOS.map((d) => (
              <button
                key={d}
                type="button"
                className={`ct-chip${order.dest === d ? " is-on" : ""}`}
                onClick={() => order.setDest(d)}
              >
                {d}
              </button>
            ))}
          </div>
          <a className="ct-btn ct-btn-wa" href={orderUrl(coffee.slug, order.kg, order.dest)} target="_blank" rel="noopener noreferrer">
            Pedir {kgLabel(order.kg)} de {coffee.slug}
          </a>
          <p className="ct-note">
            WhatsApp abre con el café, los kilos y {order.dest}. El precio se confirma en DOP.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
