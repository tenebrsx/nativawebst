"use client";

import { OBRAS } from "../data";
import { FadeIn } from "../reveal";
import ObraCard from "../obra-card";

export default function ObrasPage() {
  return (
    <>
      <section className="ca-page-hero">
        <div className="ca-wrap">
          <FadeIn>
            <div className="ca-kicker">
              <i />
              Obras
            </div>
            <h1>El tipo se elige aquí. Los m², también.</h1>
            <p className="ca-lede">Cinco predios. WhatsApp cierra con niveles, metraje y zona.</p>
          </FadeIn>
        </div>
      </section>
      <section className="ca-section" style={{ paddingTop: 8 }}>
        <div className="ca-wrap">
          <div className="ca-grid">
            {OBRAS.map((o, i) => (
              <ObraCard key={o.slug} o={o} i={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
