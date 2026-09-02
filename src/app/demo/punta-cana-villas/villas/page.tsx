"use client";

import { useMemo, useState } from "react";
import { AREAS, VILLAS, type Area } from "../data";
import VillaCard from "../villa-card";
import { useStay } from "../context";
import { FadeIn } from "../reveal";

export default function VillasPage() {
  const [area, setArea] = useState<Area | "all">("all");
  const stay = useStay();
  const list = useMemo(() => {
    return VILLAS.filter((v) => (area === "all" ? true : v.area === area)).filter((v) => v.guests >= stay.guests);
  }, [area, stay.guests]);

  return (
    <>
      <section className="pcv-page-hero">
        <div className="pcv-wrap">
          <FadeIn>
            <div className="pcv-kicker">
              <i />
              Colección
            </div>
            <h1>Seis casas en Cap Cana.</h1>
            <p className="pcv-lede" style={{ color: "rgba(247,243,235,0.7)" }}>
              Filtra por muelle, golf, Juanillo o acantilado. La barra de arriba ya tiene tus noches y tu moneda.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="pcv-section">
        <div className="pcv-wrap">
          <div className="pcv-tabs" role="tablist" aria-label="Zona">
            {AREAS.map((a) => (
              <button
                key={a.id}
                type="button"
                role="tab"
                aria-selected={area === a.id}
                className={`pcv-tab${area === a.id ? " is-on" : ""}`}
                onClick={() => setArea(a.id)}
              >
                {a.label}
              </button>
            ))}
          </div>
          {list.length === 0 ? (
            <p className="pcv-lede">Ninguna villa cubre {stay.guests} huéspedes en esa zona. Baja el número o elige Todas.</p>
          ) : (
            <div className="pcv-grid">
              {list.map((v, i) => (
                <VillaCard key={v.slug} villa={v} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
