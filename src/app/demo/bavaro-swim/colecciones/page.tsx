"use client";

import Link from "next/link";
import { BASE, CATS, PRODUCTS } from "../data";
import { FadeIn } from "../reveal";

export default function ColeccionesPage() {
  const groups = CATS.filter((c) => c.id !== "all");
  return (
    <>
      <section className="bs-page-hero">
        <div className="bs-wrap">
          <FadeIn>
            <div className="bs-kicker">
              <i />
              Colecciones
            </div>
            <h1>Enterizos. Bikinis. Lino.</h1>
          </FadeIn>
        </div>
      </section>
      <section className="bs-section" style={{ paddingTop: 8 }}>
        <div className="bs-wrap bs-grid">
          {groups.map((g) => {
            const p = PRODUCTS.find((x) => x.category === g.id);
            if (!p) return null;
            return (
              <Link key={g.id} href={`${BASE}/tienda`} className="bs-card">
                <div className="bs-card-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.hero} alt={g.label} />
                  <em>{g.label}</em>
                </div>
                <h3>{g.label}</h3>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
