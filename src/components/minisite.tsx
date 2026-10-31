"use client";

/**
 * Art-directed demo mini sites for the /pricing-builder live preview.
 * <MiniSite> renders one fictional business site (desktop layout at 1280px,
 * phone layout via container queries at 390px). <MiniViewer> scales it to the
 * stage, scrolls it gently, and jumps to whatever the visitor just changed.
 */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { MiniSite as Site, MsItem, MsMark } from "@/lib/minisites";
import "./minisite.css";

export type MsFlags = {
  seo: boolean;
  brand: boolean;
  bilingual: boolean;
  shopify: boolean;
  support: boolean;
  ai: boolean;
};

/* ── icons ─────────────────────────────────────────────────── */
const I = {
  bag: "M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4.3-4.3",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
  heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z",
  pin: "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4.5l3 2",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z",
  check: "M5 12.5 10 17 19 7",
  arrow: "M5 12h14m-5-5 5 5-5 5",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  truck: "M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  shield: "M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z",
  cal: "M5 6h14v14H5zM5 10h14M9 3v4m6-4v4",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z",
  menu: "M4 7h16M4 12h16M4 17h16",
  lock: "M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5z",
  quote: "M7 7h4v4c0 3-1.5 5-4 6m6-10h4v4c0 3-1.5 5-4 6",
  spark: "M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6",
};

function Ico({ d, fill = false }: { d: string; fill?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ms-ico">
      <path d={d} fill={fill ? "currentColor" : "none"} stroke={fill ? "none" : "currentColor"} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WaIco() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ms-ico">
      <path
        fill="currentColor"
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm4.6 12.6c-.2.6-1.1 1.1-1.6 1.1-.4.1-1 .1-1.6-.1-.4-.1-.8-.3-1.4-.5-2.5-1.1-4.1-3.6-4.2-3.8-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.1.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.1.1.6-.1 1.2Z"
      />
    </svg>
  );
}

const MARKS: Record<MsMark, ReactNode> = {
  tooth: <path d="M8 4c-2.5 0-4 2-4 4.6 0 2.4 1 3.6 1.6 6 .5 2.2.9 5.4 2.6 5.4 1.6 0 1.7-3.6 3.8-3.6s2.2 3.6 3.8 3.6c1.7 0 2.1-3.2 2.6-5.4.6-2.4 1.6-3.6 1.6-6C20 6 18.5 4 16 4c-1.8 0-2.6 1-4 1S9.8 4 8 4Z" />,
  sun: <><circle cx="12" cy="13" r="4.5" /><path d="M2 19h20M5 15.5h2M17 15.5h2M12 4v2.5M5.6 7.2l1.7 1.7M18.4 7.2l-1.7 1.7" /></>,
  column: <path d="M4 20h16M5 17h14M6 17V9m4 8V9m4 8V9m4 8V9M4 9h16L12 4 4 9Z" />,
  beam: <path d="M3 20h18M5 20V8l7-4 7 4v12M9 20v-6h6v6M5 11h14" />,
  leaf: <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14m0 0 7-7" />,
  wave: <path d="M3 9c3-3 6 3 9 0s6 3 9 0M3 15c3-3 6 3 9 0s6 3 9 0" />,
  drop: <path d="M12 3c3.5 4.4 6 7.6 6 10.6a6 6 0 0 1-12 0C6 10.6 8.5 7.4 12 3Z" />,
  cone: <><circle cx="12" cy="8" r="4.5" /><path d="M7.7 10.5 12 21l4.3-10.5" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3M10 10h4v4h-4z" /></>,
  chair: <path d="M7 11V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5M5 11h14v4H5zM7 15v5m10-5v5" />,
  jar: <path d="M8 3h8v3H8zM7 6h10l1 3v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9l1-3ZM6 12h12" />,
};

function Logo({ site, flags }: { site: Site; flags: MsFlags }) {
  return (
    <div className={`ms-logo${flags.brand ? " is-brand" : ""}`}>
      <span className="ms-mark">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {MARKS[site.mark]}
          </g>
        </svg>
      </span>
      <span className="ms-word">
        <b>{site.brand}</b>
        <small>{site.tagline}</small>
      </span>
    </div>
  );
}

function Img({ src, eager, className }: { src?: string; eager?: boolean; className?: string }) {
  if (!src) return <span className={`ms-ph ${className ?? ""}`} />;
  return <img src={src} alt="" className={className} loading={eager ? "eager" : "lazy"} decoding="async" draggable={false} />;
}

function Title({ site, text, em }: { site: Site; text: string; em?: string }) {
  return (
    <>
      {text} {em ? site.fonts.headItalicEm ? <em>{em}</em> : <span className="ms-acc">{em}</span> : null}
    </>
  );
}

function Head({ kicker, title, sub, center }: { kicker: string; title: ReactNode; sub?: string; center?: boolean }) {
  return (
    <header className={`ms-head${center ? " is-center" : ""}`}>
      <span className="ms-kick">{kicker}</span>
      <h4>{title}</h4>
      {sub ? <p>{sub}</p> : null}
    </header>
  );
}

/* ── shared blocks ─────────────────────────────────────────── */
function Nav({ site, flags }: { site: Site; flags: MsFlags }) {
  const shop = site.kind === "shop";
  return (
    <div className="ms-navwrap">
      {site.promo ? <div className="ms-promo">{site.promo}</div> : null}
      <nav className="ms-nav">
        <Logo site={site} flags={flags} />
        <ul className="ms-links">
          {site.nav.map((n, i) => (
            <li key={n} className={i === 0 ? "is-on" : undefined}>
              {n}
            </li>
          ))}
        </ul>
        <div className="ms-nav-r">
          {flags.bilingual ? (
            <span className="ms-lang">
              <b>ES</b>
              <i>EN</i>
            </span>
          ) : null}
          {shop ? (
            <>
              <span className="ms-iconbtn"><Ico d={I.search} /></span>
              <span className="ms-iconbtn ms-hide-m"><Ico d={I.user} /></span>
              <span className="ms-iconbtn ms-bagbtn">
                <Ico d={I.bag} />
                <em>{site.shop?.bag.reduce((n, b) => n + b.qty, 0)}</em>
              </span>
            </>
          ) : (
            <>
              <span className="ms-phone ms-hide-m"><Ico d={I.phone} />{site.phone}</span>
              <span className="ms-btn ms-btn-sm">{site.hero.cta.split(" ")[0]}</span>
            </>
          )}
          <span className="ms-iconbtn ms-burger"><Ico d={I.menu} /></span>
        </div>
      </nav>
    </div>
  );
}

function Booking({ site }: { site: Site }) {
  const b = site.booking;
  if (!b) return null;
  return (
    <div className="ms-book">
      <b className="ms-book-t"><Ico d={I.cal} />{b.title}</b>
      <div className="ms-book-f">
        {b.fields.map((f) => (
          <span key={f.label}>
            <small>{f.label}</small>
            {f.value}
          </span>
        ))}
      </div>
      {b.slots ? (
        <div className="ms-slots">
          {b.slots.map((s, i) => (
            <i key={s} className={i === 1 ? "is-on" : undefined}>{s}</i>
          ))}
        </div>
      ) : null}
      <span className="ms-btn ms-btn-full"><WaIco />{b.cta}</span>
      {b.note ? <small className="ms-book-n">{b.note}</small> : null}
    </div>
  );
}

function Hero({ site }: { site: Site }) {
  const h = site.hero;
  const copy = (
    <div className="ms-hero-copy">
      <span className="ms-kick ms-kick-pill"><i />{h.kicker}</span>
      <h3><Title site={site} text={h.title} em={h.em} /></h3>
      <p>{h.sub}</p>
      <div className="ms-actions">
        <span className="ms-btn">{h.cta}<Ico d={I.arrow} /></span>
        {h.cta2 ? <span className="ms-btn ms-btn-ghost">{h.cta2}</span> : null}
      </div>
      <ul className="ms-badges">
        {h.badges.map((b) => (
          <li key={b}><Ico d={I.check} />{b}</li>
        ))}
      </ul>
    </div>
  );
  return (
    <section className={`ms-hero ms-hero-${site.heroStyle}`} data-sec="inicio">
      <div className="ms-hero-media">
        <Img src={h.img} eager />
        {h.img2 ? <Img src={h.img2} className="ms-hero-inset" /> : null}
      </div>
      <div className="ms-hero-in">
        {copy}
        {site.kind === "landing" ? <Booking site={site} /> : null}
      </div>
    </section>
  );
}

function Stats({ site }: { site: Site }) {
  if (site.kind === "shop") {
    return (
      <div className="ms-perks">
        {site.shop!.perks.map((p, i) => (
          <span key={p}><Ico d={[I.truck, I.shield, I.check][i % 3]} />{p}</span>
        ))}
      </div>
    );
  }
  if (!site.stats) return null;
  return (
    <div className="ms-stats">
      {site.stats.map((s) => (
        <span key={s.l}>
          <b>{s.n}</b>
          <small>{s.l}</small>
        </span>
      ))}
    </div>
  );
}

function About({ site, sec }: { site: Site; sec: string }) {
  const a = site.about;
  return (
    <section className="ms-sec ms-about" data-sec={sec}>
      <div className="ms-about-media">
        <Img src={a.img} />
        {a.img2 ? <Img src={a.img2} className="ms-about-inset" /> : null}
      </div>
      <div className="ms-about-copy">
        <Head kicker={a.kicker} title={a.title} />
        <p className="ms-lead">{a.body}</p>
        <ul className="ms-ticks">
          {a.points.map((p) => (
            <li key={p}><Ico d={I.check} />{p}</li>
          ))}
        </ul>
        {a.people ? (
          <div className="ms-people">
            {a.people.map((p) => (
              <figure key={p.name}>
                <Img src={p.img} />
                <figcaption>
                  <b>{p.name}</b>
                  <small>{p.role}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Gallery({ site, sec }: { site: Site; sec: string }) {
  const g = site.gallery;
  return (
    <section className="ms-sec ms-gal" data-sec={sec}>
      <Head kicker={g.kicker} title={g.title} />
      <div className={`ms-gal-grid n${Math.min(g.imgs.length, 6)}`}>
        {g.imgs.map((im, i) => (
          <figure key={im.src + i}>
            <Img src={im.src} />
            {im.cap ? <figcaption>{im.cap}</figcaption> : null}
          </figure>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="ms-sec ms-rev" data-sec="testimonios">
      <Head kicker="Testimonios" title="Aquí van las reseñas reales de tus clientes" sub="Al lanzar conectamos tus reseñas de Google. En la demo no inventamos opiniones." center />
      <div className="ms-rev-grid">
        {[0, 1, 2].map((i) => (
          <div key={i} className="ms-rev-card">
            <Ico d={I.quote} />
            <i /><i /><i className="is-short" />
            <span><b /><small /></span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq({ site }: { site: Site }) {
  return (
    <section className="ms-sec ms-faq" data-sec="faq">
      <Head kicker="Preguntas frecuentes" title="Antes de escribirnos" />
      <div className="ms-faq-list">
        {site.faq.map((f, i) => (
          <div key={f.q} className={`ms-faq-i${i === 0 ? " is-open" : ""}`}>
            <b>{f.q}<Ico d={i === 0 ? I.minus : I.plus} /></b>
            {i === 0 ? <p>{f.a}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function MapArt() {
  return (
    <svg className="ms-map-art" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="260" className="m-bg" />
      <path d="M0 210 C80 190 140 240 230 215 S360 190 400 205 V260 H0Z" className="m-water" />
      <path d="M40 40h90v60H40zM250 30h110v70H250z" className="m-park" rx="8" />
      <g className="m-road">
        <path d="M0 120 H400" strokeWidth="14" />
        <path d="M170 0 V260" strokeWidth="12" />
        <path d="M0 40 L400 170" strokeWidth="8" />
      </g>
      <g className="m-street">
        <path d="M0 80H400M0 160H400M60 0V260M110 0V260M240 0V260M310 0V260M360 0V260" strokeWidth="3" />
      </g>
    </svg>
  );
}

function Location({ site, flags, sec }: { site: Site; flags: MsFlags; sec: string }) {
  const l = site.location;
  return (
    <section className="ms-sec ms-loc" data-sec={sec}>
      <div className="ms-loc-copy">
        <Head kicker="Ubicación y horario" title={l.area} />
        <p className="ms-addr"><Ico d={I.pin} />{l.address}</p>
        <table className="ms-hours">
          <tbody>
            {l.hours.map(([d, h]) => (
              <tr key={d}>
                <th>{d}</th>
                <td>{h}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="ms-note"><Ico d={I.clock} />{l.note}</p>
      </div>
      <div className="ms-map">
        <MapArt />
        <span className="ms-pin"><Ico d={I.pin} fill /></span>
        <div className={`ms-gcard${flags.seo ? " is-seo" : ""}`}>
          <b>{site.brand}</b>
          <small>{flags.seo ? "Perfil de Google optimizado · Abierto ahora" : l.area}</small>
          <span className="ms-gcard-a">
            <i><Ico d={I.arrow} />Cómo llegar</i>
            <i><Ico d={I.phone} />Llamar</i>
            {flags.seo ? <i><Ico d={I.globe} />Sitio web</i> : null}
          </span>
        </div>
      </div>
    </section>
  );
}

function CtaBand({ site }: { site: Site }) {
  return (
    <section className="ms-cta" data-sec="contacto">
      <div>
        <h4>{site.cta.title}</h4>
        <p>{site.cta.sub}</p>
      </div>
      <span className="ms-btn ms-btn-wa"><WaIco />{site.cta.button}</span>
    </section>
  );
}

function Footer({ site, flags }: { site: Site; flags: MsFlags }) {
  return (
    <footer className="ms-foot" data-sec="footer">
      <div className="ms-foot-top">
        <div className="ms-foot-brand">
          <Logo site={site} flags={flags} />
          <p>{site.footer.blurb}</p>
          <span className="ms-social"><i>IG</i><i>TT</i><i>FB</i><i><WaIco /></i></span>
        </div>
        {site.footer.cols.map((c) => (
          <div key={c.t} className="ms-foot-col">
            <b>{c.t}</b>
            {c.l.map((x) => <span key={x}>{x}</span>)}
          </div>
        ))}
        <div className="ms-foot-col">
          <b>Contacto</b>
          <span>{site.phone}</span>
          <span>{site.location.address}</span>
        </div>
      </div>
      <div className="ms-foot-bot">
        <span>© 2026 {site.brand} · {site.domain}</span>
        {site.kind === "shop" ? (
          <span className="ms-pay"><i>VISA</i><i>MC</i><i>AMEX</i>{flags.shopify ? <i>Shop Pay</i> : <i>Efectivo</i>}</span>
        ) : null}
        {flags.support ? <span className="ms-care"><Ico d={I.shield} />Mantenido por Nativa · soporte 24 h</span> : null}
      </div>
    </footer>
  );
}

/* ── landing-only ──────────────────────────────────────────── */
function Services({ site }: { site: Site }) {
  const s = site.services;
  const list = !s.items[0]?.img;
  return (
    <section className="ms-sec ms-svc" data-sec="servicios">
      <Head kicker={s.kicker} title={s.title} sub={s.sub} />
      {list ? (
        <ol className="ms-svc-list">
          {s.items.map((it, i) => (
            <li key={it.name}>
              <i>{String(i + 1).padStart(2, "0")}</i>
              <div>
                <b>{it.name}</b>
                <p>{it.desc}</p>
              </div>
              <small>{it.meta}</small>
              <Ico d={I.arrow} />
            </li>
          ))}
        </ol>
      ) : (
        <div className={`ms-cards n${s.items.length}`}>
          {s.items.map((it, i) => (
            <article key={it.name} className={i === 0 ? "is-hover" : undefined}>
              <div className="ms-card-img">
                <Img src={it.img} />
                {it.tag ? <span className="ms-tag">{it.tag}</span> : null}
              </div>
              <div className="ms-card-b">
                <b>{it.name}</b>
                <p>{it.desc}</p>
                <span className="ms-price">
                  {it.price ?? it.meta}
                  {it.price && it.meta ? <small>{it.meta}</small> : null}
                  <Ico d={I.arrow} />
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
      {site.process ? (
        <div className="ms-steps">
          <span className="ms-kick">{site.process.kicker}</span>
          <b className="ms-steps-t">{site.process.title}</b>
          <ol>
            {site.process.steps.map((st) => (
              <li key={st.t}>
                <i>{st.n}</i>
                <b>{st.t}</b>
                <p>{st.d}</p>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </section>
  );
}

/* ── shop-only ─────────────────────────────────────────────── */
function Product({ p, hover }: { p: MsItem; hover?: boolean }) {
  return (
    <article className={`ms-prod${hover ? " is-hover" : ""}`}>
      <div className="ms-prod-img">
        <Img src={p.img} />
        {p.tag ? <span className={`ms-tag${p.low ? " is-low" : ""}`}>{p.tag}</span> : null}
        <span className="ms-fav"><Ico d={I.heart} /></span>
        <span className="ms-quick"><Ico d={I.plus} />Añadir</span>
      </div>
      <b>{p.name}</b>
      <small>{p.desc}</small>
      <span className="ms-pp">
        {p.price}
        {p.was ? <s>{p.was}</s> : null}
      </span>
    </article>
  );
}

function Catalog({ site }: { site: Site }) {
  const s = site.shop!;
  return (
    <section className="ms-sec ms-cat" data-sec="catalogo">
      <div className="ms-cat-head">
        <Head kicker="Catálogo" title="Lo más pedido esta semana" />
        <span className="ms-sort">Ordenar: Populares <Ico d={I.arrow} /></span>
      </div>
      <div className="ms-pills">
        {s.cats.map((c, i) => (
          <i key={c} className={i === 0 ? "is-on" : undefined}>{c}</i>
        ))}
      </div>
      <div className="ms-grid">
        {s.products.map((p, i) => (
          <Product key={p.name} p={p} hover={i === 1} />
        ))}
      </div>
    </section>
  );
}

function Collections({ site }: { site: Site }) {
  const s = site.shop!;
  return (
    <section className="ms-sec ms-cols" data-sec="colecciones">
      <Head kicker="Colecciones" title="Compra por colección" />
      <div className="ms-cols-grid">
        {s.collections.map((c) => (
          <figure key={c.name}>
            <Img src={c.img} />
            <figcaption>
              <b>{c.name}</b>
              <small>{c.count}</small>
              <Ico d={I.arrow} />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Pdp({ site, flags }: { site: Site; flags: MsFlags }) {
  const p = site.shop!.pdp;
  const opt = (o: { label: string; values: string[]; on: number }) => (
    <div className="ms-opt">
      <small>{o.label}: <b>{o.values[o.on]}</b></small>
      <span>
        {o.values.map((v, i) => (
          <i key={v} className={i === o.on ? "is-on" : undefined}>{v}</i>
        ))}
      </span>
    </div>
  );
  return (
    <section className="ms-sec ms-pdp" data-sec="producto">
      <div className="ms-pdp-gal">
        <div className="ms-pdp-main"><Img src={p.imgs[0]} /></div>
        <div className="ms-pdp-thumbs">
          {p.imgs.map((src, i) => (
            <span key={src + i} className={i === 0 ? "is-on" : undefined}><Img src={src} /></span>
          ))}
        </div>
      </div>
      <div className="ms-pdp-info">
        <span className="ms-crumb">Inicio / {site.shop!.cats[1]} / {p.name}</span>
        <span className="ms-kick">{p.tag}</span>
        <h4>{p.name}</h4>
        <span className="ms-pdp-price">{p.price}<small>o 3 cuotas sin interés</small></span>
        <p>{p.desc}</p>
        {opt(p.option)}
        {p.option2 ? opt(p.option2) : null}
        <div className="ms-buy">
          <span className="ms-qty"><Ico d={I.minus} /><b>1</b><Ico d={I.plus} /></span>
          <span className="ms-btn ms-btn-full"><Ico d={I.bag} />Añadir a la bolsa</span>
        </div>
        <span className={`ms-btn ms-btn-full ${flags.shopify ? "ms-btn-shop" : "ms-btn-ghost"}`}>
          {flags.shopify ? <>Comprar con <b>Shop Pay</b></> : <><WaIco />Pedir por WhatsApp</>}
        </span>
        <ul className="ms-acc-list">
          {p.details.map((d) => (
            <li key={d}>{d}<Ico d={I.plus} /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Bag({ site, flags }: { site: Site; flags: MsFlags }) {
  const s = site.shop!;
  return (
    <section className="ms-sec ms-bag" data-sec="bolsa">
      <div className="ms-bag-l">
        <Head kicker="Tu bolsa" title={`${s.bag.reduce((n, b) => n + b.qty, 0)} artículos`} />
        <ol className="ms-checkout-steps">
          <li className="is-on">Bolsa</li>
          <li>Entrega</li>
          <li>Pago</li>
        </ol>
        {s.bag.map((b) => (
          <div key={b.name} className="ms-line">
            <Img src={b.img} />
            <div>
              <b>{b.name}</b>
              <small>{b.variant}</small>
              <span className="ms-qty ms-qty-sm"><Ico d={I.minus} /><b>{b.qty}</b><Ico d={I.plus} /></span>
            </div>
            <em>{b.price}</em>
          </div>
        ))}
      </div>
      <aside className="ms-bag-r">
        <b className="ms-bag-t">Resumen</b>
        <dl>
          <div><dt>Subtotal</dt><dd>{s.subtotal}</dd></div>
          <div><dt>Envío</dt><dd>{s.shipping}</dd></div>
          <div className="is-total"><dt>Total</dt><dd>{s.total}</dd></div>
        </dl>
        <span className="ms-code">Código de descuento <Ico d={I.plus} /></span>
        <span className={`ms-btn ms-btn-full${flags.shopify ? " ms-btn-shop" : ""}`}>
          {flags.shopify ? <><Ico d={I.lock} />Pagar con tarjeta · Shopify</> : <><WaIco />Enviar pedido por WhatsApp</>}
        </span>
        <small className="ms-secure"><Ico d={I.shield} />{flags.shopify ? "Pago seguro · tarjetas y Shop Pay" : "Confirmamos stock y pago por WhatsApp"}</small>
      </aside>
    </section>
  );
}

function Shipping({ site }: { site: Site }) {
  const s = site.shop!;
  return (
    <section className="ms-sec ms-ship" data-sec="envios">
      <Head kicker="Envíos y devoluciones" title="Llega rápido a todo el país" />
      <div className="ms-ship-grid">
        {s.ship.map((z) => (
          <div key={z.zone}>
            <Ico d={I.truck} />
            <b>{z.zone}</b>
            <small>{z.time}</small>
            <em>{z.price}</em>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── the site ──────────────────────────────────────────────── */
export function MiniSite({
  site,
  sections,
  flags,
  tone,
  swatch,
}: {
  site: Site;
  sections: string[];
  flags: MsFlags;
  tone: "original" | "dark";
  swatch?: string[];
}) {
  const on = (id: string) => sections.includes(id);
  const style = {
    "--ms-bg0": site.colors.bg,
    "--ms-ink0": swatch?.[0] ?? site.colors.ink,
    "--ms-ac": swatch?.[1] ?? site.colors.accent,
    "--ms-soft0": swatch?.[2] ?? site.colors.soft,
    "--ms-head": site.fonts.head,
    "--ms-body": site.fonts.body,
    "--ms-hw": site.fonts.headWeight ?? 600,
    "--ms-hcase": site.fonts.headCase === "upper" ? "uppercase" : "none",
  } as CSSProperties;

  return (
    <div className="ms" data-ms={site.id} data-kind={site.kind} data-tone={tone} style={style}>
      <Nav site={site} flags={flags} />
      <Hero site={site} />
      <Stats site={site} />
      {site.kind === "landing" ? (
        <>
          {on("servicios") ? <Services site={site} /> : null}
          {on("nosotros") ? <About site={site} sec="nosotros" /> : null}
          {on("galeria") ? <Gallery site={site} sec="galeria" /> : null}
          {on("testimonios") ? <Reviews /> : null}
          {on("faq") ? <Faq site={site} /> : null}
          {on("ubicacion") ? <Location site={site} flags={flags} sec="ubicacion" /> : null}
        </>
      ) : (
        <>
          <Catalog site={site} />
          {on("colecciones") ? <Collections site={site} /> : null}
          <Pdp site={site} flags={flags} />
          <Bag site={site} flags={flags} />
          {on("marca") ? (
            <>
              <About site={site} sec="marca" />
              <Gallery site={site} sec="marca-galeria" />
            </>
          ) : null}
          {on("envios") ? <Shipping site={site} /> : null}
          {on("faq") ? <Faq site={site} /> : null}
        </>
      )}
      <CtaBand site={site} />
      <Footer site={site} flags={flags} />
      {flags.ai ? (
        <div className="ms-chat">
          <span className="ms-chat-b"><Ico d={I.spark} /></span>
        </div>
      ) : null}
    </div>
  );
}

/* ── viewer: scale + gentle auto-scroll + jump to changes ──── */
export type MsFocus = { id: string; n: number } | null;

function usePrefersReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setR(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return r;
}

export function MiniViewer({
  children,
  domain,
  bilingual,
  focus,
  auto = true,
  interactive = true,
  fit = "width",
}: {
  children: ReactNode;
  domain: string;
  bilingual?: boolean;
  focus?: MsFocus;
  auto?: boolean;
  interactive?: boolean;
  fit?: "width";
}) {
  const viewRef = useRef<HTMLDivElement>(null);
  const sizerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(1);
  const pauseUntil = useRef(0);
  const reduce = usePrefersReducedMotion();
  const [ready, setReady] = useState(false);

  // Scale the fixed-width page to the viewer width.
  useEffect(() => {
    const view = viewRef.current;
    const page = pageRef.current;
    const sizer = sizerRef.current;
    if (!view || !page || !sizer) return;
    let raf = 0;
    const apply = () => {
      raf = 0;
      const w = view.clientWidth;
      const pw = page.offsetWidth;
      if (!w || !pw) return;
      const s = w / pw;
      scaleRef.current = s;
      page.style.transform = `scale(${s})`;
      sizer.style.height = `${Math.ceil(page.offsetHeight * s)}px`;
      setReady(true);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const ro = new ResizeObserver(on);
    ro.observe(view);
    ro.observe(page);
    apply();
    return () => {
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [fit]);

  // Pause auto-scroll while the visitor drives the preview.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const hold = () => {
      pauseUntil.current = performance.now() + 6000;
    };
    const evs = ["wheel", "pointerdown", "touchstart", "keydown"] as const;
    evs.forEach((e) => view.addEventListener(e, hold, { passive: true }));
    return () => evs.forEach((e) => view.removeEventListener(e, hold));
  }, []);

  // Jump to whatever just changed.
  useEffect(() => {
    if (!focus) return;
    const view = viewRef.current;
    const page = pageRef.current;
    if (!view || !page) return;
    const t = window.setTimeout(() => {
      const el = page.querySelector<HTMLElement>(`[data-sec="${focus.id}"]`);
      const top = el ? Math.max(0, el.offsetTop * scaleRef.current - 6) : 0;
      view.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
      pauseUntil.current = performance.now() + 7000;
      if (el) {
        el.classList.remove("ms-flash");
        void el.offsetWidth;
        el.classList.add("ms-flash");
      }
    }, 60);
    return () => window.clearTimeout(t);
  }, [focus, reduce]);

  // Gentle auto-scroll: drift down, rest at the end, glide back up.
  useEffect(() => {
    const view = viewRef.current;
    if (!view || !auto || reduce) return;
    let raf = 0;
    let last = performance.now();
    let visible = true;
    let carry = 0;
    let restUntil = performance.now() + 2500;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(view);
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(64, now - last);
      last = now;
      if (!visible || document.hidden || now < pauseUntil.current || now < restUntil) return;
      const max = view.scrollHeight - view.clientHeight;
      if (max <= 2) return;
      if (view.scrollTop >= max - 1) {
        restUntil = now + 3200;
        window.setTimeout(() => view.scrollTo({ top: 0, behavior: "smooth" }), 2400);
        return;
      }
      carry += (dt / 1000) * Math.max(14, view.clientHeight * 0.06);
      if (carry >= 1) {
        const step = Math.floor(carry);
        carry -= step;
        view.scrollTop += step;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [auto, reduce]);

  return (
    <div className="ms-frame">
      <div className="ms-chrome" aria-hidden="true">
        <i /><i /><i />
        <span className="ms-url"><Ico d={I.lock} />{domain}</span>
        {bilingual ? <span className="ms-chrome-lang">ES | EN</span> : null}
      </div>
      <div className={`ms-view${interactive ? " is-interactive" : ""}`} ref={viewRef}>
        <div className="ms-sizer" ref={sizerRef}>
          <div className={`ms-page${ready ? " is-ready" : ""}`} ref={pageRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
