"use client";

import { useMemo, useState } from "react";
import { CATS, TREATMENTS, type TreatmentCat } from "../data";
import TreatCard from "../treat-card";

export default function TratamientosPage() {
  const [cat, setCat] = useState<TreatmentCat | "all">("all");
  const list = useMemo(
    () => (cat === "all" ? TREATMENTS : TREATMENTS.filter((t) => t.cat === cat)),
    [cat],
  );

  return (
    <>
      <section className="sdq-page-hero">
        <div className="sdq-wrap">
          <div className="sdq-kicker">Catálogo</div>
          <h1 style={{ margin: "10px 0 12px", fontSize: "clamp(2.1rem, 4vw, 3.2rem)" }}>
            Tratamientos con precio.
          </h1>
          <p className="sdq-lede">
            DOP en la página. USD para quienes llegan de afuera. El botón abre WhatsApp con el nombre del servicio.
          </p>
        </div>
      </section>
      <section className="sdq-section" style={{ paddingTop: 24 }}>
        <div className="sdq-wrap">
          <div className="sdq-tabs" role="tablist" aria-label="Categorías">
            {CATS.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={cat === c.id}
                className={`sdq-tab${cat === c.id ? " is-on" : ""}`}
                onClick={() => setCat(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="sdq-cards">
            {list.map((t) => (
              <TreatCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
