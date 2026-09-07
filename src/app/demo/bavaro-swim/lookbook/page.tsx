"use client";

import { IMG, BASE } from "../data";
import { FadeIn, Reveal } from "../reveal";
import Link from "next/link";

export default function LookbookPage() {
  return (
    <>
      <section className="bs-page-hero">
        <div className="bs-wrap">
          <FadeIn>
            <div className="bs-kicker">
              <i />
              Lookbook
            </div>
            <h1>Bávaro, a las seis.</h1>
            <p className="bs-lede">Las mismas piezas de la tienda, en la costa. Cada foto abre la talla.</p>
          </FadeIn>
        </div>
      </section>
      <section className="bs-section" style={{ paddingTop: 8 }}>
        <div className="bs-wrap bs-look">
          <Reveal>
            <Link href={`${BASE}/tienda/enterizo-arena`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="tall" src={`${IMG}/enterizo-arena.jpg`} alt="Enterizo Arena" />
            </Link>
          </Reveal>
          <div className="bs-look-side">
            <Reveal delay={0.08}>
              <Link href={`${BASE}/tienda/bikini-sal`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/bikini-sal.jpg`} alt="Bikini Sal" />
              </Link>
            </Reveal>
            <Reveal delay={0.14}>
              <Link href={`${BASE}/tienda/camisa-lino`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/camisa-lino.jpg`} alt="Camisa lino" />
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="bs-wrap" style={{ marginTop: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/beach.jpg`} alt="Bávaro al atardecer" style={{ width: "100%", height: 380, objectFit: "cover" }} />
        </div>
      </section>
    </>
  );
}
