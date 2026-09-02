"use client";

import { useState } from "react";
import { type Product, money, orderUrl } from "../../data";
import { useCart } from "../../context";
import { FadeIn } from "../../reveal";

export default function ProductView({ product }: { product: Product }) {
  const cart = useCart();
  const [size, setSize] = useState(product.slug === "enterizo-arena" ? "M" : product.sizes[1] ?? product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);

  return (
    <section className="bs-section">
      <div className="bs-wrap bs-pdp">
        <FadeIn className="bs-pdp-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.hero} alt={product.name} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="bs-kicker">
            <i />
            {product.tag}
          </div>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontStyle: "italic", margin: "10px 0 12px" }}>{product.name}</h1>
          <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 16 }}>{money(product.usd, product.dop, cart.currency)}</div>
          <p className="bs-lede" style={{ maxWidth: "none" }}>
            {product.body}
          </p>
          <div style={{ marginTop: 22, fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--bs-mute)" }}>
            Talla
          </div>
          <div className="bs-sizes">
            {product.sizes.map((s) => (
              <button key={s} type="button" className={`bs-size${size === s ? " is-on" : ""}`} onClick={() => setSize(s)}>
                {s}
              </button>
            ))}
          </div>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--bs-mute)" }}>
            Color
          </div>
          <div className="bs-colors">
            {product.colors.map((c) => (
              <button key={c} type="button" className={`bs-chip${color === c ? " is-on" : ""}`} onClick={() => setColor(c)}>
                {c}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}>
            <button type="button" className="bs-btn bs-btn-ink" onClick={() => cart.add(product, size, color)}>
              A la bolsa
            </button>
            <a className="bs-btn bs-btn-wa" href={orderUrl(product.name, size)} target="_blank" rel="noopener noreferrer">
              Pedir talla {size}
            </a>
          </div>
          <p style={{ fontSize: 13, color: "var(--bs-mute)", marginTop: 14 }}>{product.fabric}. Recogida en BlueMall SDQ.</p>
        </FadeIn>
      </div>
    </section>
  );
}
