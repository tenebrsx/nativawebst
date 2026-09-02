"use client";

import { useEffect } from "react";
import { METRAJES, NIVELES, TIPOS, ZONAS, fmtM2, visitUrl, type Obra } from "../../data";
import { useVisit } from "../../context";
import { FadeIn } from "../../reveal";

export default function ObraView({ obra }: { obra: Obra }) {
  const visit = useVisit();
  const nivelesChips = Array.from(new Set([obra.niveles, ...NIVELES])).sort((a, b) => a - b);
  const m2Chips = Array.from(new Set([obra.m2, ...METRAJES])).sort((a, b) => a - b);
  const zonaChips = Array.from(new Set([obra.zona, ...ZONAS]));

  useEffect(() => {
    visit.setTipo(obra.tipo);
    visit.setNiveles(obra.niveles);
    visit.setM2(obra.m2);
    visit.setZona(obra.zona);
    // hydrate chips from this ficha once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [obra.slug]);

  return (
    <section className="ca-section">
      <div className="ca-wrap ca-pdp">
        <FadeIn>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={obra.hero} alt={obra.name} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="ca-kicker">
            <i />
            {obra.tipo} · {obra.year}
          </div>
          <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.4rem)", margin: "10px 0 12px" }}>{obra.name}</h1>
          <div className="ca-spec">
            {visit.niveles} niveles · {fmtM2(visit.m2)} m² · {visit.zona}
          </div>
          <p className="ca-lede" style={{ maxWidth: "none" }}>
            {obra.body}
          </p>
          <div className="ca-chip-lab">Tipo</div>
          <div className="ca-chips">
            {TIPOS.map((t) => (
              <button key={t} type="button" className={`ca-chip${visit.tipo === t ? " is-on" : ""}`} onClick={() => visit.setTipo(t)}>
                {t}
              </button>
            ))}
          </div>
          <div className="ca-chip-lab">Niveles</div>
          <div className="ca-chips">
            {nivelesChips.map((n) => (
              <button key={n} type="button" className={`ca-chip${visit.niveles === n ? " is-on" : ""}`} onClick={() => visit.setNiveles(n)}>
                {n}
              </button>
            ))}
          </div>
          <div className="ca-chip-lab">m²</div>
          <div className="ca-chips">
            {m2Chips.map((n) => (
              <button key={n} type="button" className={`ca-chip${visit.m2 === n ? " is-on" : ""}`} onClick={() => visit.setM2(n)}>
                {fmtM2(n)}
              </button>
            ))}
          </div>
          <div className="ca-chip-lab">Zona</div>
          <div className="ca-chips">
            {zonaChips.map((z) => (
              <button key={z} type="button" className={`ca-chip${visit.zona === z ? " is-on" : ""}`} onClick={() => visit.setZona(z)}>
                {z}
              </button>
            ))}
          </div>
          <a
            className="ca-btn ca-btn-wa"
            href={visitUrl(visit.tipo, visit.niveles, visit.m2, visit.zona)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar visita
          </a>
          <p className="ca-note">
            WhatsApp abre con el tipo, los niveles, {fmtM2(visit.m2)} m² y {visit.zona}.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
