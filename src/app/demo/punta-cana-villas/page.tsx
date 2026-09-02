"use client";

import Link from "next/link";
import { BASE, BRAND, EXPERIENCES, IMG, REVIEWS, VILLAS, holdUrl, money, nightsBetween } from "./data";
import { useStay } from "./context";
import Hero from "./hero";
import StayBar from "./stay-bar";
import VillaCard from "./villa-card";
import { Reveal } from "./reveal";

export default function PuntaCanaVillasHome() {
  const stay = useStay();
  const marina = VILLAS[0];
  const nights = nightsBetween(stay.checkIn, stay.checkOut);

  return (
    <>
      <Hero />
      <StayBar />

      <section className="pcv-section">
        <div className="pcv-wrap">
          <Reveal className="pcv-section-head">
            <div className="pcv-kicker">
              <i />
              Colección
            </div>
            <h2>Seis casas. Ningún mostrador.</h2>
            <p>Elige por muelle, fairway, Juanillo o acantilado. El precio es por noche. El chat cierra el hold.</p>
          </Reveal>
          <div className="pcv-reel">
            {VILLAS.map((v, i) => (
              <VillaCard key={v.slug} villa={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="pcv-section" style={{ paddingTop: 0 }}>
        <div className="pcv-wrap">
          <Reveal className="pcv-section-head">
            <div className="pcv-kicker">
              <i />
              El hold
            </div>
            <h2>Tres toques. Sin “¿cuánto la noche?”.</h2>
          </Reveal>
          <div className="pcv-steps">
            <Reveal>
              <article className="pcv-step">
                <h3>Fechas y gente</h3>
                <p>Llegada, salida, cuántos. Queda en la barra. No en un mail.</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="pcv-step">
                <h3>La villa</h3>
                <p>Marina, Palmera, Coral, Brisa, Luna, Caletón. USD o DOP, a la vista.</p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="pcv-step">
                <h3>El recorrido</h3>
                <p>WhatsApp abre con la casa, las noches y la moneda. Eso es el hold.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pcv-section" style={{ paddingTop: 0 }}>
        <div className="pcv-wrap pcv-feature">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={marina.hero} alt={marina.name} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pcv-kicker">
              <i />
              Destacada
            </div>
            <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", fontStyle: "italic", margin: "12px 0" }}>{marina.name}</h2>
            <p className="pcv-lede" style={{ maxWidth: "none" }}>
              {marina.body}
            </p>
            <div className="pcv-stats">
              <div>
                <b>{marina.guests}</b>
                <span>Huéspedes</span>
              </div>
              <div>
                <b>{nights}</b>
                <span>Noches en tu barra</span>
              </div>
              <div>
                <b>{money(marina.nightUsd * nights, stay.currency)}</b>
                <span>Estimado</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href={`${BASE}/villas/marina`} className="pcv-btn pcv-btn-night">
                Ver Villa Marina
              </Link>
              <a
                className="pcv-btn pcv-btn-wa"
                href={holdUrl({
                  villa: marina.name,
                  checkIn: stay.checkIn,
                  checkOut: stay.checkOut,
                  guests: stay.guests,
                  currency: stay.currency,
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hold por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pcv-section pcv-night">
        <div className="pcv-wrap pcv-split">
          <Reveal>
            <div className="pcv-kicker">
              <i />
              El lugar
            </div>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", fontStyle: "italic", margin: "12px 0" }}>
              Cap Cana no es un resort. Es un recinto.
            </h2>
            <p className="pcv-lede" style={{ color: "rgba(247,243,235,0.7)", maxWidth: "none" }}>
              Marina, Punta Espada, Juanillo, Caletón. Las villas están dentro. Maps apunta a la caseta. El concierge abre el portón cuando el hold está en el chat.
            </p>
            <Link href={`${BASE}/cap-cana`} className="pcv-btn pcv-btn-brass" style={{ marginTop: 20 }}>
              Cómo se llega
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/marina-aerial.jpg`} alt="Marina de Cap Cana al atardecer" />
          </Reveal>
        </div>
      </section>

      <section className="pcv-section">
        <div className="pcv-wrap">
          <Reveal className="pcv-section-head">
            <div className="pcv-kicker">
              <i />
              En la casa
            </div>
            <h2>Chef, yate, mesa. En el mismo hilo.</h2>
          </Reveal>
          <div className="pcv-xp">
            {EXPERIENCES.map((x, i) => (
              <Reveal key={x.title} delay={i * 0.08}>
                <article>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={x.img} alt={x.title} />
                  <h3>{x.title}</h3>
                  <p>{x.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pcv-section" style={{ paddingTop: 0 }}>
        <div className="pcv-wrap">
          <Reveal className="pcv-section-head">
            <div className="pcv-kicker">
              <i />
              Huéspedes
            </div>
            <h2>El chat ya tenía las fechas.</h2>
          </Reveal>
          <div className="pcv-reviews">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <blockquote className="pcv-quote">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt="" />
                  <p>“{r.text}”</p>
                  <b>{r.name}</b>
                  <span>{r.stay}</span>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pcv-section pcv-night">
        <div className="pcv-wrap" style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", alignItems: "end" }}>
          <div>
            <div className="pcv-kicker">
              <i />
              {BRAND.kicker}
            </div>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", fontStyle: "italic", marginTop: 12 }}>
              Pide el recorrido. La villa ya va en el mensaje.
            </h2>
          </div>
          <Link href={`${BASE}/reservar`} className="pcv-btn pcv-btn-brass">
            Armar el hold
          </Link>
        </div>
      </section>
    </>
  );
}
