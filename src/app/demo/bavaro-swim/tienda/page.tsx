"use client";

import { useMemo, useState } from "react";
import { CATS, PRODUCTS, type Category } from "../data";
import ProductCard from "../product-card";
import { FadeIn } from "../reveal";

export default function TiendaPage() {
  const [cat, setCat] = useState<Category | "all">("all");
  const list = useMemo(() => (cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat)), [cat]);

  return (
    <>
      <section className="bs-page-hero">
        <div className="bs-wrap">
          <FadeIn>
            <div className="bs-kicker">
              <i />
              Tienda
            </div>
            <h1>La talla se elige aquí.</h1>
            <p className="bs-lede">Seis piezas. USD o DOP. El chat cierra con el nombre y la talla.</p>
          </FadeIn>
        </div>
      </section>
      <section className="bs-section" style={{ paddingTop: 8 }}>
        <div className="bs-wrap">
          <div className="bs-tabs" role="tablist">
            {CATS.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={cat === c.id}
                className={`bs-tab${cat === c.id ? " is-on" : ""}`}
                onClick={() => setCat(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="bs-grid">
            {list.map((p, i) => (
              <ProductCard key={p.slug} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
