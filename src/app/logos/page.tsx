"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  CONCEPTS,
  TYPE_LABEL,
  inkFor,
  type Canvas,
  type LogoType,
} from "./marks";
import "./logos.css";

const FILTERS: Array<{ id: "all" | LogoType; es: string; en: string }> = [
  { id: "all", es: "Todas", en: "All" },
  { id: "wordmark", es: "Wordmark", en: "Wordmark" },
  { id: "glass", es: "Glass", en: "Glass" },
  { id: "lettermark", es: "Lettermark", en: "Lettermark" },
  { id: "pictorial", es: "Pictórica", en: "Pictorial" },
  { id: "abstract", es: "Abstracta", en: "Abstract" },
  { id: "emblem", es: "Emblema", en: "Emblem" },
  { id: "modular", es: "Modular", en: "Modular" },
  { id: "stamp", es: "Sello", en: "Stamp" },
  { id: "ligature", es: "Ligadura", en: "Ligature" },
];

const CANVASES: Array<{ id: Canvas; es: string; en: string }> = [
  { id: "sand", es: "Arena", en: "Sand" },
  { id: "navy", es: "Navy", en: "Navy" },
  { id: "dusk", es: "Glass dusk", en: "Glass dusk" },
];

export default function LogosPage() {
  const es = true;
  const [ready, setReady] = useState(false);
  const [canvas, setCanvas] = useState<Canvas>("sand");
  const [filter, setFilter] = useState<"all" | LogoType>("all");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    setReady(true);
  }, []);

  const ink = inkFor(canvas);
  const list = useMemo(
    () => (filter === "all" ? CONCEPTS : CONCEPTS.filter((c) => c.type === filter)),
    [filter],
  );

  const copySvg = async (id: string, svg: string) => {
    await navigator.clipboard.writeText(svg);
    setCopied(id);
    window.setTimeout(() => setCopied(null), 1800);
  };

  if (!ready) {
    return <div className="ll-page" data-canvas="sand" />;
  }

  return (
    <div className="ll-page" data-canvas={canvas}>
      <header className="ll-bar">
        <div className="container ll-bar-inner">
          <Link href="/" className="ll-brand">
            Nativa
            <span className="ll-pill">Logo lab</span>
          </Link>
          <Link href="/" className="ll-back">
            {es ? "Volver al sitio" : "Back to site"}
          </Link>
        </div>
      </header>

      <main>
        <section className="container ll-hero">
          <div className="ll-kicker">{es ? "Exploración de marca" : "Brand exploration"}</div>
          <h1>
            {es
              ? "Nueve tipos de logo. Elige una dirección, no un ícono."
              : "Nine logo types. Pick a direction, not an icon."}
          </h1>
          <p>
            {es
              ? "Nativa es un estudio web en Santo Domingo. Aquí no son variaciones de la misma ola: son categorías distintas — wordmark, glass, lettermark, pictórica, abstracta, emblema, modular, sello y ligadura. El lean actual (minimal + glass) está marcado."
              : "Nativa is a web studio in Santo Domingo. These are not wave variations: they are distinct types — wordmark, glass, lettermark, pictorial, abstract, emblem, modular, stamp, and ligature. The current lean (minimal + glass) is tagged."}
          </p>
        </section>

        <div className="container ll-controls" role="toolbar" aria-label={es ? "Filtros" : "Filters"}>
          {CANVASES.map((c) => (
            <button
              key={c.id}
              type="button"
              className="ll-chip"
              data-on={canvas === c.id}
              onClick={() => setCanvas(c.id)}
            >
              {es ? c.es : c.en}
            </button>
          ))}
          <span aria-hidden style={{ width: 8 }} />
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className="ll-chip"
              data-on={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {es ? f.es : f.en}
            </button>
          ))}
        </div>

        <section className="container ll-grid">
          {list.map((c) => {
            const base = { ink, canvas };
            const stage = { ...base, uid: `${c.id}-stage` };
            const lock = { ...base, uid: `${c.id}-lock` };
            const s32 = { ...base, uid: `${c.id}-32` };
            const s16 = { ...base, uid: `${c.id}-16` };
            return (
              <article key={c.id} className="ll-card">
                <div className="ll-meta">
                  <span className="ll-type">{TYPE_LABEL[c.type]}</span>
                  {c.lean === "minimal" && (
                    <span className="ll-lean">{es ? "Lean: minimal" : "Lean: minimal"}</span>
                  )}
                  {c.lean === "glass" && (
                    <span className="ll-lean">{es ? "Lean: glass" : "Lean: glass"}</span>
                  )}
                </div>
                <h2>{es ? c.nameEs : c.name}</h2>
                <div className="ll-stage" data-glass={c.type === "glass"}>
                  {c.mark(stage)}
                </div>
                {c.type === "wordmark" || c.type === "stamp" || c.type === "ligature" ? (
                  <div className="ll-lockup" style={{ justifyContent: "center" }}>
                    {c.mark(lock)}
                  </div>
                ) : (
                  <div className="ll-lockup">
                    <div className="ll-lockup-mark">{c.mark(lock)}</div>
                    <div>
                      <strong>Nativa</strong>
                      <span>Web Studio · Santo Domingo</span>
                    </div>
                  </div>
                )}
                <div className="ll-sizes">
                  <div className="ll-size">
                    <div className="ll-box" style={{ width: 32, height: 32 }}>
                      <div style={{ transform: "scale(0.42)", transformOrigin: "center" }}>
                        {c.mark(s32)}
                      </div>
                    </div>
                    <i>32</i>
                  </div>
                  <div className="ll-size">
                    <div className="ll-box" style={{ width: 16, height: 16 }}>
                      <div style={{ transform: "scale(0.22)", transformOrigin: "center" }}>
                        {c.mark(s16)}
                      </div>
                    </div>
                    <i>16</i>
                  </div>
                </div>
                <p>{es ? c.ideaEs : c.idea}</p>
                <p className="ll-use">{es ? c.useEs : c.use}</p>
                <button
                  type="button"
                  className={copied === c.id ? "ll-copy ll-copy-done" : "ll-copy"}
                  onClick={() => copySvg(c.id, c.svg)}
                >
                  {copied === c.id
                    ? es
                      ? "SVG copiado"
                      : "SVG copied"
                    : es
                      ? "Copiar SVG"
                      : "Copy SVG"}
                </button>
              </article>
            );
          })}
        </section>

        {filter === "all" && (
          <section className="container ll-lineup">
            <h2>{es ? "En una sola línea" : "On one line"}</h2>
            <div className="ll-lineup-row">
              {CONCEPTS.map((c) => (
                <div key={c.id} className="ll-lineup-item" title={es ? c.nameEs : c.name}>
                  {c.mark({ uid: `${c.id}-line`, ink, canvas })}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
