"use client";

import Link from "next/link";
import { BASE, type Practice, consultUrl } from "../../data";
import { FadeIn } from "../../reveal";

export default function PracticeView({ practice }: { practice: Practice }) {
  return (
    <>
      <section className="nl-page-hero">
        <div className="nl-wrap">
          <FadeIn>
            <div className="nl-kicker">
              <i />
              {practice.tag}
            </div>
            <h1>{practice.name}</h1>
            <p className="nl-lede" style={{ color: "rgba(242,237,228,0.7)" }}>
              {practice.lede}
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="nl-section">
        <div className="nl-wrap" style={{ maxWidth: 640 }}>
          <p className="nl-lede" style={{ maxWidth: "none" }}>
            {practice.body}
          </p>
          <ul className="nl-list">
            {practice.matters.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 28 }}>
            <a className="nl-btn nl-btn-wa" href={consultUrl(practice.slug)} target="_blank" rel="noopener noreferrer">
              Consulta de {practice.name.toLowerCase()}
            </a>
            <Link href={`${BASE}/consulta`} className="nl-btn nl-btn-ghost">
              Agendar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
