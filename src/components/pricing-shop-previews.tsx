"use client";

import { useState, type KeyboardEvent } from "react";
import { tx, type ShopTemplate } from "@/lib/pricing-templates";

export type ShopFlags = {
  seo: boolean;
  brand: boolean;
  bilingual: boolean;
  support: boolean;
  shopify?: boolean;
  lang: "es" | "en";
};

type Props = ShopFlags & { template: ShopTemplate };

function flagAttrs(f: ShopFlags) {
  return {
    "data-seo": f.seo ? "" : undefined,
    "data-brand": f.brand ? "" : undefined,
    "data-bi": f.bilingual ? "" : undefined,
    "data-care": f.support ? "" : undefined,
    "data-shopify": f.shopify ? "" : undefined,
  };
}

function ShopChrome({ domain }: { domain: string }) {
  return (
    <div className="shop-chrome">
      <i />
      <i />
      <i />
      <div className="shop-url">{domain}</div>
      <em className="shop-shopify">Shopify</em>
      <div className="lp-lang">ES | EN</div>
      <div className="lp-care">24h</div>
    </div>
  );
}

function IconHome() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  );
}
function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </svg>
  );
}
function IconBag() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19.5c1.2-3.2 3.6-4.8 7-4.8s5.8 1.6 7 4.8" />
    </svg>
  );
}

type Screen = "home" | "pdp" | "bag";

export function FashionShop({ template, lang, ...flags }: Props) {
  const { seo, brand, bilingual, support, shopify } = flags;
  const es = lang === "es";
  const t = template;
  const units = es ? "uds" : "left";
  const [screen, setScreen] = useState<Screen>("home");
  const [pill, setPill] = useState(0);

  const stopBubble = (e: { stopPropagation(): void }) => e.stopPropagation();

  const openPdp = () => setScreen("pdp");
  const onPickKey = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPdp();
    }
  };

  return (
    <div
      className="shop shop-fashion shop-interactive"
      onClick={stopBubble}
      {...flagAttrs({ seo, brand, bilingual, support, shopify, lang })}
    >
      <div className="shop-phone">
        <div className="shop-notch" />
        <div className="shop-status">
          <span>9:41</span>
          <em className="shop-shopify">Shopify</em>
          <em className="shop-care">24h</em>
        </div>

        <div className="shop-screens">
          <div className={`shop-screen is-home${screen === "home" ? " is-active" : ""}`}>
            <header className="shop-top">
              <b className="shop-logo">{t.logo}</b>
              <span className="shop-lang">ES | EN</span>
              <div className="shop-search" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="M16 16l4 4" />
                </svg>
              </div>
            </header>

            <button type="button" className="shop-drop" onClick={openPdp}>
              <img src={t.drop.img} alt="" />
              <div className="shop-drop-meta">
                <i>{tx(t.drop.tag, lang)}</i>
                <b>{t.drop.name}</b>
                <span>{t.drop.price}</span>
                <em className="shop-stock">
                  {t.drop.stock} {es ? "uds en inventario" : "in stock"}
                </em>
              </div>
            </button>

            <div className="shop-pills">
              {t.pills.map((p, i) => (
                <button
                  type="button"
                  key={p.es}
                  className={i === pill ? "is-on" : undefined}
                  onClick={() => setPill(i)}
                >
                  {tx(p, lang)}
                </button>
              ))}
            </div>

            <div className="shop-picks-label">{es ? "Selección" : "Staff picks"}</div>
            <div className="shop-picks">
              {t.picks.map((p) => (
                <article
                  key={p.name}
                  role="button"
                  tabIndex={0}
                  onClick={openPdp}
                  onKeyDown={onPickKey}
                >
                  <img src={p.img} alt="" />
                  <b>{p.name}</b>
                  <span>{p.price}</span>
                  <em className={`shop-stock${p.low ? " is-low" : ""}`}>
                    {p.stock} {units}
                  </em>
                </article>
              ))}
            </div>

            <div className="shop-geo">
              <i />
              {t.geo}
            </div>
          </div>

          <div className={`shop-screen is-pdp${screen === "pdp" ? " is-active" : ""}`}>
            <div className="shop-pdp-photo">
              <img src={t.pdp.img} alt="" />
            </div>
            <div className="shop-pdp-body">
              <small>{tx(t.pdp.tag, lang)}</small>
              <h4>{t.pdp.name}</h4>
              <b>{t.pdp.price}</b>
              <p>{tx(t.pdp.body, lang)}</p>
              <div className="shop-specs">
                {t.pdp.specs.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <em className="shop-stock">
                {t.pdp.stock} {es ? "en inventario" : "in inventory"}
              </em>
              <button type="button" className="shop-add" onClick={() => setScreen("bag")}>
                {es ? `AÑADIR A LA BOLSA — ${t.pdp.price}` : `ADD TO BAG — ${t.pdp.price}`}
              </button>
            </div>
          </div>

          <div className={`shop-screen is-bag${screen === "bag" ? " is-active" : ""}`}>
            <h4 className="shop-bag-title">{es ? "Tu bolsa" : "Your bag"}</h4>
            {t.bag.rows.map((r) => (
              <div className="shop-bag-row" key={r.name}>
                <img src={r.img} alt="" />
                <div>
                  <b>{r.name}</b>
                  <span>{tx(r.variant, lang)}</span>
                  <em className="shop-stock">
                    {r.stock} {es ? "uds" : "in stock"}
                  </em>
                </div>
                <strong>{r.price}</strong>
              </div>
            ))}
            <div className="shop-sum">
              <span>{es ? "Subtotal" : "Subtotal"}</span>
              <b>{t.bag.subtotal}</b>
            </div>
            <button type="button" className="shop-add">
              {es ? "IR A PAGAR" : "CHECKOUT"}
            </button>
            <div className="shop-pay">Shop Pay · Shopify</div>
          </div>
        </div>

        <nav className="shop-dock">
          <button
            type="button"
            className={screen === "home" ? "is-on" : undefined}
            aria-label={es ? "Inicio" : "Home"}
            onClick={() => setScreen("home")}
          >
            <IconHome />
          </button>
          <button
            type="button"
            aria-label={es ? "Catálogo" : "Catalog"}
            onClick={() => setScreen("home")}
          >
            <IconGrid />
          </button>
          <button
            type="button"
            className={screen === "bag" ? "is-on has-count" : "has-count"}
            aria-label={es ? "Bolsa" : "Bag"}
            onClick={() => setScreen("bag")}
          >
            <IconBag />
            <i>2</i>
          </button>
          <button type="button" aria-label={es ? "Cuenta" : "Account"} onClick={() => setScreen("home")}>
            <IconUser />
          </button>
        </nav>
      </div>
    </div>
  );
}

export function GastroShop({ template: t, lang, ...flags }: Props) {
  const es = lang === "es";
  return (
    <div className="shop shop-site shop-gastro" {...flagAttrs({ ...flags, lang })}>
      <ShopChrome domain={t.domain} />
      <div className="sg">
        <header className="sg-top">
          <em>{es ? "Mercado · Despensa" : "Market · Pantry"}</em>
          <b>{t.brand}</b>
          <nav>
            {t.pills.map((p, i) => (
              <span key={p.es} className={i === 0 ? "is-on" : undefined}>
                {tx(p, lang)}
              </span>
            ))}
          </nav>
        </header>
        <div className="sg-body">
          <figure className="sg-hero">
            <img src={t.drop.img} alt="" />
            <figcaption>
              <i>{tx(t.drop.tag, lang)}</i>
              <h3>{t.drop.name}</h3>
              <span>{t.drop.price}</span>
            </figcaption>
          </figure>
          <ol className="sg-menu">
            <li>
              <b>{t.drop.name}</b>
              <em>{t.drop.price}</em>
            </li>
            {t.picks.map((p) => (
              <li key={p.name}>
                <b>{p.name}</b>
                <em>{p.price}</em>
              </li>
            ))}
            <li>
              <b>{t.pdp.name}</b>
              <em>{t.pdp.price}</em>
            </li>
            <li className="sg-cta">{es ? "Pedir la despensa" : "Order the pantry"}</li>
          </ol>
        </div>
        <div className="sg-stills">
          {[t.picks[0], t.bag.rows[1], t.picks[1]].map((p) => (
            <figure key={p.name}>
              <img src={p.img} alt="" />
              <figcaption>{p.name}</figcaption>
            </figure>
          ))}
        </div>
        <footer className="shop-geo">
          <i />
          {t.geo}
        </footer>
      </div>
    </div>
  );
}

export function BeautyShop({ template, lang, ...flags }: Props) {
  const es = lang === "es";
  const t = template;
  const units = es ? "uds" : "left";
  const shades = [
    { hex: "#c47a6a", on: false },
    { hex: "#a84b4f", on: false },
    { hex: "#8b2e3a", on: false },
    { hex: "#7a1f32", on: true },
    { hex: "#4a1520", on: false },
  ];

  return (
    <div className="shop shop-beauty" {...flagAttrs({ ...flags, lang })}>
      <div className="shop-phone">
        <div className="shop-notch" />
        <div className="shop-status">
          <span>9:41</span>
          <em className="shop-shopify">Shopify</em>
          <em className="shop-care">24h</em>
        </div>

        <div className="shop-screens">
          <div className="shop-screen is-home">
            <header className="shop-top">
              <b className="shop-logo">{t.logo}</b>
              <span className="shop-lang">ES | EN</span>
              <div className="shop-search" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="M16 16l4 4" />
                </svg>
              </div>
            </header>

            <div className="shop-drop">
              <img src={t.drop.img} alt="" />
              <div className="shop-drop-meta">
                <i>{tx(t.drop.tag, lang)}</i>
                <b>{t.drop.name}</b>
                <span>{t.drop.price}</span>
                <em className="shop-stock">
                  {t.drop.stock} {es ? "uds en inventario" : "in stock"}
                </em>
              </div>
            </div>

            <div className="shop-pills">
              {t.pills.map((p, i) => (
                <span key={p.es} className={i === 0 ? "is-on" : undefined}>
                  {tx(p, lang)}
                </span>
              ))}
            </div>

            <div className="shop-picks-label">{es ? "En el tocador" : "On the vanity"}</div>
            <div className="shop-picks">
              {t.picks.map((p) => (
                <article key={p.name}>
                  <img src={p.img} alt="" />
                  <b>{p.name}</b>
                  <span>{p.price}</span>
                  <em className={`shop-stock${p.low ? " is-low" : ""}`}>
                    {p.stock} {units}
                  </em>
                </article>
              ))}
            </div>

            <div className="shop-geo">
              <i />
              {t.geo}
            </div>
          </div>

          <div className="shop-screen is-pdp">
            <div className="shop-pdp-photo">
              <img src={t.pdp.img} alt="" />
            </div>
            <div className="shop-pdp-body">
              <small>{tx(t.pdp.tag, lang)}</small>
              <h4>{t.pdp.name}</h4>
              <b>{t.pdp.price}</b>
              <p>{tx(t.pdp.body, lang)}</p>
              <div className="sb-shades" aria-hidden="true">
                {shades.map((s) => (
                  <i key={s.hex} className={s.on ? "is-on" : undefined} style={{ background: s.hex }} />
                ))}
              </div>
              <div className="shop-specs">
                {t.pdp.specs.map((spec) => (
                  <span key={spec}>{spec}</span>
                ))}
              </div>
              <em className="shop-stock">
                {t.pdp.stock} {es ? "en inventario" : "in inventory"}
              </em>
              <div className="shop-add" aria-hidden="true">
                {es ? `AÑADIR A LA BOLSA — ${t.pdp.price}` : `ADD TO BAG — ${t.pdp.price}`}
              </div>
            </div>
          </div>

          <div className="shop-screen is-bag">
            <h4 className="shop-bag-title">{es ? "Tu bolsa" : "Your bag"}</h4>
            {t.bag.rows.map((r) => (
              <div className="shop-bag-row" key={r.name}>
                <img src={r.img} alt="" />
                <div>
                  <b>{r.name}</b>
                  <span>{tx(r.variant, lang)}</span>
                  <em className="shop-stock">
                    {r.stock} {es ? "uds" : "in stock"}
                  </em>
                </div>
                <strong>{r.price}</strong>
              </div>
            ))}
            <div className="shop-sum">
              <span>{es ? "Subtotal" : "Subtotal"}</span>
              <b>{t.bag.subtotal}</b>
            </div>
            <div className="shop-add" aria-hidden="true">
              {es ? "IR A PAGAR" : "CHECKOUT"}
            </div>
            <div className="shop-pay">Shop Pay · Shopify</div>
          </div>
        </div>

        <nav className="shop-dock" aria-hidden="true">
          <span>
            <IconHome />
          </span>
          <span>
            <IconGrid />
          </span>
          <span className="has-count">
            <IconBag />
            <i>2</i>
          </span>
          <span>
            <IconUser />
          </span>
        </nav>
      </div>
    </div>
  );
}

function IconBuild() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
      <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFilter() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 6h16M7 12h10M10 18h4" />
    </svg>
  );
}

export function TechShop({ template, lang, ...flags }: Props) {
  const es = lang === "es";
  const t = template;
  const units = es ? "uds" : "left";
  const configs = [
    { label: "16GB", on: false },
    { label: "32GB", on: true },
    { label: "64GB", on: false },
  ];

  return (
    <div className="shop shop-tech" {...flagAttrs({ ...flags, lang })}>
      <div className="shop-phone">
        <div className="shop-notch" />
        <div className="shop-status">
          <span>9:41</span>
          <em className="shop-shopify">Shopify</em>
          <em className="shop-care">24h</em>
        </div>

        <div className="shop-screens">
          <div className="shop-screen is-home">
            <header className="shop-top">
              <b className="shop-logo">{t.logo}</b>
              <span className="shop-lang">ES | EN</span>
              <div className="shop-search" aria-hidden="true">
                <IconFilter />
              </div>
            </header>

            <div className="shop-drop">
              <img src={t.drop.img} alt="" />
              <div className="shop-drop-meta">
                <i>{tx(t.drop.tag, lang)}</i>
                <b>{t.drop.name}</b>
                <span>{t.drop.price}</span>
                <em className="shop-stock">
                  {t.drop.stock} {es ? "uds en inventario" : "in stock"}
                </em>
              </div>
            </div>

            <div className="shop-pills">
              {t.pills.map((p, i) => (
                <span key={p.es} className={i === 0 ? "is-on" : undefined}>
                  {tx(p, lang)}
                </span>
              ))}
            </div>

            <div className="shop-picks-label">{es ? "Piezas en stock" : "Parts in stock"}</div>
            <div className="shop-picks">
              {t.picks.map((p) => (
                <article key={p.name}>
                  <img src={p.img} alt="" />
                  <b>{p.name}</b>
                  <span>{p.price}</span>
                  <em className={`shop-stock${p.low ? " is-low" : ""}`}>
                    {p.stock} {units}
                  </em>
                </article>
              ))}
            </div>

            <div className="shop-geo">
              <i />
              {t.geo}
            </div>
          </div>

          <div className="shop-screen is-pdp">
            <div className="shop-pdp-photo">
              <img src={t.pdp.img} alt="" />
            </div>
            <div className="shop-pdp-body">
              <small>{tx(t.pdp.tag, lang)}</small>
              <h4>{t.pdp.name}</h4>
              <b>{t.pdp.price}</b>
              <p>{tx(t.pdp.body, lang)}</p>
              <div className="st-config" aria-hidden="true">
                {configs.map((c) => (
                  <span key={c.label} className={c.on ? "is-on" : undefined}>{c.label}</span>
                ))}
              </div>
              <div className="shop-specs">
                {t.pdp.specs.map((spec) => (
                  <span key={spec}>{spec}</span>
                ))}
              </div>
              <em className="shop-stock">
                {t.pdp.stock} {es ? "en inventario" : "in inventory"}
              </em>
              <div className="shop-add" aria-hidden="true">
                {es ? `AÑADIR — ${t.pdp.price}` : `ADD — ${t.pdp.price}`}
              </div>
            </div>
          </div>

          <div className="shop-screen is-bag">
            <h4 className="shop-bag-title">{es ? "Tu build" : "Your build"}</h4>
            {t.bag.rows.map((r) => (
              <div className="shop-bag-row" key={r.name}>
                <img src={r.img} alt="" />
                <div>
                  <b>{r.name}</b>
                  <span>{tx(r.variant, lang)}</span>
                  <em className="shop-stock">
                    {r.stock} {es ? "uds" : "in stock"}
                  </em>
                </div>
                <strong>{r.price}</strong>
              </div>
            ))}
            <div className="shop-sum">
              <span>{es ? "Subtotal" : "Subtotal"}</span>
              <b>{t.bag.subtotal}</b>
            </div>
            <div className="shop-add" aria-hidden="true">
              {es ? "IR A PAGAR" : "CHECKOUT"}
            </div>
            <div className="shop-pay">Shop Pay · Shopify</div>
          </div>
        </div>

        <nav className="shop-dock" aria-hidden="true">
          <span>
            <IconHome />
          </span>
          <span>
            <IconGrid />
          </span>
          <span className="has-count">
            <IconBag />
            <i>2</i>
          </span>
          <span>
            <IconBuild />
          </span>
        </nav>
      </div>
    </div>
  );
}

export function ElectronicsShop({ template: t, lang, ...flags }: Props) {
  const es = lang === "es";
  const specs = [
    { k: es ? "Autonomía" : "Battery", v: "40 h" },
    { k: "ANC", v: es ? "Híbrido" : "Hybrid" },
    { k: es ? "Carga" : "Charge", v: "USB-C" },
    { k: es ? "Peso" : "Weight", v: "248 g" },
  ];
  return (
    <div className="shop shop-site shop-elec" {...flagAttrs({ ...flags, lang })}>
      <ShopChrome domain={t.domain} />
      <div className="se">
        <header className="se-top">
          <b>{t.brand}</b>
          <span>{es ? "Showroom" : "Showroom"}</span>
          <nav>
            {t.pills.map((p) => (
              <em key={p.es}>{tx(p, lang)}</em>
            ))}
          </nav>
        </header>
        <div className="se-stage">
          <figure>
            <img src={t.drop.img} alt="" />
            <div className="se-cast" />
          </figure>
          <div className="se-copy">
            <i>{tx(t.drop.tag, lang)}</i>
            <h3>{t.drop.name}</h3>
            <p>{tx(t.pdp.body, lang)}</p>
            <b>{t.drop.price}</b>
            <div className="se-grid">
              {specs.map((s) => (
                <span key={s.k}>
                  <small>{s.k}</small>
                  <strong>{s.v}</strong>
                </span>
              ))}
            </div>
            <div className="se-cta">{es ? "Reservar en vitrina" : "Reserve on the floor"}</div>
          </div>
        </div>
        <footer className="shop-geo">
          <i />
          {t.geo}
        </footer>
      </div>
    </div>
  );
}

export function HomeShop({ template: t, lang, ...flags }: Props) {
  const es = lang === "es";
  const pieces = [t.drop, ...t.picks];
  return (
    <div className="shop shop-site shop-home" {...flagAttrs({ ...flags, lang })}>
      <ShopChrome domain={t.domain} />
      <div className="sh">
        <header className="sh-top">
          <b>{t.brand}</b>
          <nav>
            {t.pills.map((p, i) => (
              <span key={p.es} className={i === 0 ? "is-on" : undefined}>
                {tx(p, lang)}
              </span>
            ))}
          </nav>
        </header>
        <figure className="sh-hero">
          <img src={t.pdp.img} alt="" />
          <figcaption>
            <small>{tx(t.pdp.tag, lang)}</small>
            <h3>{t.pdp.name}</h3>
            <em>{t.pdp.price}</em>
          </figcaption>
        </figure>
        <div className="sh-grid">
          {pieces.map((p) => (
            <article key={p.name}>
              <img src={p.img} alt="" />
              <div>
                <b>{p.name}</b>
                <span>{p.price}</span>
              </div>
            </article>
          ))}
        </div>
        <footer className="shop-geo">
          <i />
          {t.geo}
        </footer>
      </div>
    </div>
  );
}

export function OtherShop({ template: t, lang, ...flags }: Props) {
  const es = lang === "es";
  const slots = [
    { img: t.picks[0].img, name: es ? "Producto 01" : "Product 01", sku: "SKU · 01", live: true },
    { img: t.picks[1].img, name: es ? "Producto 02" : "Product 02", sku: "SKU · 02", live: true },
    { img: t.pdp.img, name: es ? "Producto 03" : "Product 03", sku: "SKU · 03", live: true },
    { img: "", name: es ? "Tu producto" : "Your product", sku: "SKU · —", live: false },
    { img: "", name: es ? "Tu producto" : "Your product", sku: "SKU · —", live: false },
    { img: "", name: es ? "Tu producto" : "Your product", sku: "SKU · —", live: false },
  ];
  return (
    <div className="shop shop-site shop-other" {...flagAttrs({ ...flags, lang })}>
      <ShopChrome domain={t.domain} />
      <div className="so">
        <header className="so-top">
          <small>{es ? "Plantilla abierta" : "Open template"}</small>
          <b>{es ? "Tu catálogo. Tu marca." : "Your catalog. Your brand."}</b>
          <p>
            {es
              ? "Un escaparate genérico de lujo — mapea lo que vendas. El chat cierra con el SKU."
              : "A generic luxury storefront — map whatever you sell. The chat closes with the SKU."}
          </p>
        </header>
        <div className="so-grid">
          {slots.map((s, i) => (
            <article key={`${s.sku}-${i}`} className={s.live ? undefined : "is-slot"}>
              {s.live ? <img src={s.img} alt="" /> : <div className="so-empty">{es ? "Aquí" : "Here"}</div>}
              <b>{s.name}</b>
              <span>{s.sku}</span>
            </article>
          ))}
        </div>
        <div className="so-cta">{es ? "Pedir este catálogo" : "Quote this catalog"}</div>
        <footer className="shop-geo">
          <i />
          {t.geo}
        </footer>
      </div>
    </div>
  );
}

export function ShopPreview(props: Props) {
  switch (props.template.id) {
    case "gastronomia":
      return <GastroShop {...props} />;
    case "beauty":
      return <BeautyShop {...props} />;
    case "tech":
      return <TechShop {...props} />;
    case "electronics":
      return <ElectronicsShop {...props} />;
    case "home":
      return <HomeShop {...props} />;
    case "other":
      return <OtherShop {...props} />;
    default:
      return <FashionShop {...props} />;
  }
}
