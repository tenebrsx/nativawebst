"use client";

import { useEffect, useState } from "react";
import { tx, type ShopTemplate } from "@/lib/pricing-templates";
import { LpFit } from "@/components/lp-fit";

export type ShopFlags = {
  seo: boolean;
  brand: boolean;
  bilingual: boolean;
  support: boolean;
  shopify?: boolean;
  lang: "es" | "en";
};

type Props = ShopFlags & { template: ShopTemplate; later?: boolean };

function ShopImg({
  src,
  eager = false,
}: {
  src: string;
  eager?: boolean;
}) {
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      decoding="async"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "low"}
      draggable={false}
    />
  );
}

function ShopPhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shop-slot">
      <div className={"shop-phone"}>{children}</div>
    </div>
  );
}

function useLaterShopMedia() {
  const [later, setLater] = useState(false);
  useEffect(() => {
    const arm = () => setLater(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(arm, { timeout: 1600 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(arm, 700);
    return () => window.clearTimeout(id);
  }, []);
  return later;
}

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

export function FashionShop({ template, lang, later, ...flags }: Props) {
  const { seo, brand, bilingual, support, shopify } = flags;
  const es = lang === "es";
  const t = template;
  const units = es ? "uds" : "left";

  return (
    <div className="shop shop-fashion" {...flagAttrs({ seo, brand, bilingual, support, shopify, lang })}>
      <ShopPhoneShell>
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
              <ShopImg src={t.drop.img} eager />
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

            <div className="shop-picks-label">{es ? "Selección" : "Staff picks"}</div>
            <div className="shop-picks">
              {t.picks.map((p) => (
                <article key={p.name}>
                  <ShopImg src={p.img} eager />
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
              <ShopImg src={later ? t.pdp.img : ""} />
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
              <div className="shop-add" aria-hidden="true">
                {es ? `AÑADIR A LA BOLSA — ${t.pdp.price}` : `ADD TO BAG — ${t.pdp.price}`}
              </div>
            </div>
          </div>

          <div className="shop-screen is-bag">
            <h4 className="shop-bag-title">{es ? "Tu bolsa" : "Your bag"}</h4>
            {t.bag.rows.map((r) => (
              <div className="shop-bag-row" key={r.name}>
                <ShopImg src={later ? r.img : ""} />
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
      </ShopPhoneShell>
    </div>
  );
}

export function LinaShop({ template: t, lang, ...flags }: Props) {
  const es = lang === "es";
  const units = es ? "uds" : "left";
  const pieces = [
    ...t.picks,
    { img: t.pdp.img, name: t.pdp.name, price: t.pdp.price, stock: t.pdp.stock },
  ];
  const sizes = t.pdp.specs.map((spec, i) => ({ spec, on: i === 1 }));

  return (
    <LpFit>
        <div className="shop shop-site shop-lina" {...flagAttrs({ ...flags, lang })}>
          <ShopChrome domain={t.domain} />
          <div className="sl-site">
            <div className="shop-screens">
              <div className="shop-screen is-home">
                <header className="sl-head">
                  <div className="sl-brand">
                    <i className="sl-mark" aria-hidden="true" />
                    <b>{t.brand}</b>
                  </div>
                  <nav className="sl-nav" aria-hidden="true">
                    {t.pills.map((p, i) => (
                      <span key={p.es} className={i === 0 ? "is-on" : undefined}>
                        {tx(p, lang)}
                      </span>
                    ))}
                  </nav>
                  <span className="shop-lang">ES | EN</span>
                  <span className="sl-menu" aria-hidden="true">
                    <i /><i /><i />
                  </span>
                </header>

                <div className="sl-look">
                  <figure className="sl-hero">
                    <ShopImg src={t.drop.img} eager />
                    <figcaption>
                      <small>{tx(t.drop.tag, lang)}</small>
                      <h3>{t.drop.name}</h3>
                      <em>{t.drop.price}</em>
                      <span className="shop-stock">
                        {t.drop.stock} {es ? "uds" : "left"}
                      </span>
                    </figcaption>
                  </figure>
                  <div className="sl-rail">
                    {pieces.map((p) => (
                      <article key={p.name}>
                        <ShopImg src={p.img} eager />
                        <b>{p.name}</b>
                        <span>{p.price}</span>
                        <em className={`shop-stock${"low" in p && p.low ? " is-low" : ""}`}>
                          {p.stock} {units}
                        </em>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="sl-cta" aria-hidden="true">
                  {es ? "Ver el look" : "See the look"}
                </div>
                <footer className="shop-geo">
                  <i />
                  {t.geo}
                </footer>
              </div>

              <div className="shop-screen is-pdp">
                <div className="sl-pdp">
                  <div className="sl-pdp-photo">
                    <ShopImg src={t.pdp.img} eager />
                  </div>
                  <div className="sl-pdp-body">
                    <small>{tx(t.pdp.tag, lang)}</small>
                    <h4>{t.pdp.name}</h4>
                    <b>{t.pdp.price}</b>
                    <p>{tx(t.pdp.body, lang)}</p>
                    <div className="sl-sizes">
                      {sizes.map((s) => (
                        <span key={s.spec} className={s.on ? "is-on" : undefined}>
                          {s.spec}
                        </span>
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
              </div>

              <div className="shop-screen is-bag">
                <div className="sl-bag">
                  <h4 className="shop-bag-title">{es ? "Tu bolsa" : "Your bag"}</h4>
                  {t.bag.rows.map((r) => (
                    <div className="shop-bag-row" key={r.name}>
                      <ShopImg src={r.img} eager />
                      <div>
                        <b>{r.name}</b>
                        <span>{tx(r.variant, lang)}</span>
                        <em className="shop-stock">
                          {r.stock} {units}
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
            </div>
          </div>
        </div>
    </LpFit>
  );
}

export function GastroShop({ template: t, lang, ...flags }: Props) {
  const es = lang === "es";
  const units = es ? "uds" : "left";
  const board = [
    ...t.picks,
    { img: t.pdp.img, name: t.pdp.name, price: t.pdp.price, stock: t.pdp.stock },
  ];
  const scoops = t.pdp.specs.map((spec, i) => ({ spec, on: i === 2 }));

  return (
    <LpFit>
      <div className="shop shop-site shop-gastro" {...flagAttrs({ ...flags, lang })}>
        <ShopChrome domain={t.domain} />
        <div className="sg-site">
          <div className="shop-screens">
            <div className="shop-screen is-home">
              <header className="sg-head">
                <nav className="sg-nav" aria-hidden="true">
                  {t.pills.slice(0, 3).map((p, i) => (
                    <span key={p.es} className={i === 0 ? "is-on" : undefined}>
                      {tx(p, lang)}
                    </span>
                  ))}
                </nav>
                <span className="shop-lang">ES | EN</span>
                <span className="sg-menu" aria-hidden="true">
                  <i /><i /><i />
                </span>
              </header>

              <div className="sg-counter">
                <aside className="sg-board">
                  <p className="sg-kicker">{es ? "Heladería · Piantini" : "Gelato · Piantini"}</p>
                  <b className="sg-logo">{t.brand}</b>
                  <p className="sg-lede">
                    {es
                      ? "Sabores de temporada. Pedí y recogé en vitrina."
                      : "Seasonal scoops. Order and pick up at the case."}
                  </p>

                  <div className="sg-feature">
                    <small>{tx(t.drop.tag, lang)}</small>
                    <h3>{t.drop.name}</h3>
                    <div className="sg-feature-row">
                      <em>{t.drop.price}</em>
                      <span className="shop-stock">
                        {t.drop.stock} {units}
                      </span>
                    </div>
                    <div className="sg-cta" aria-hidden="true">
                      {es ? "Pedir este sabor" : "Order this flavor"}
                    </div>
                  </div>

                  <div className="sg-menu-list">
                    {board.map((p) => (
                      <article key={p.name}>
                        <ShopImg src={p.img} eager />
                        <div>
                          <b>{p.name}</b>
                          <em className={`shop-stock${"low" in p && p.low ? " is-low" : ""}`}>
                            {p.stock} {units}
                          </em>
                        </div>
                        <span>{p.price}</span>
                      </article>
                    ))}
                  </div>
                </aside>

                <figure className="sg-hero">
                  <ShopImg src={t.drop.img} eager />
                  <figcaption>
                    <small>{tx(t.drop.tag, lang)}</small>
                    <h3>{t.drop.name}</h3>
                  </figcaption>
                </figure>
              </div>

              <footer className="shop-geo">
                <i />
                {t.geo}
              </footer>
            </div>

            <div className="shop-screen is-pdp">
              <div className="sg-pdp">
                <div className="sg-pdp-photo">
                  <ShopImg src={t.pdp.img} eager />
                </div>
                <div className="sg-pdp-body">
                  <small>{tx(t.pdp.tag, lang)}</small>
                  <h4>{t.pdp.name}</h4>
                  <b>{t.pdp.price}</b>
                  <p>{tx(t.pdp.body, lang)}</p>
                  <div className="sg-scoops" aria-hidden="true">
                    {scoops.map((s) => (
                      <span key={s.spec} className={s.on ? "is-on" : undefined}>
                        {s.spec}
                      </span>
                    ))}
                  </div>
                  <em className="shop-stock">
                    {t.pdp.stock} {es ? "en vitrina" : "in the case"}
                  </em>
                  <div className="shop-add" aria-hidden="true">
                    {es ? `AÑADIR AL PEDIDO — ${t.pdp.price}` : `ADD TO ORDER — ${t.pdp.price}`}
                  </div>
                </div>
              </div>
            </div>

            <div className="shop-screen is-bag">
              <div className="sg-bag">
                <h4 className="shop-bag-title">{es ? "Tu pedido" : "Your order"}</h4>
                {t.bag.rows.map((r) => (
                  <div className="shop-bag-row" key={r.name}>
                    <ShopImg src={r.img} eager />
                    <div>
                      <b>{r.name}</b>
                      <span>{tx(r.variant, lang)}</span>
                      <em className="shop-stock">
                        {r.stock} {units}
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
          </div>
        </div>
      </div>
    </LpFit>
  );
}

export function BeautyShop({ template: t, lang, ...flags }: Props) {
  const es = lang === "es";
  const units = es ? "uds" : "left";
  const navL = t.pills.slice(0, 2);
  const navR = t.pills.slice(2);
  const shades = [
    { hex: "#c47a6a", on: false },
    { hex: "#a84b4f", on: false },
    { hex: "#8b2e3a", on: false },
    { hex: "#7a1f32", on: true },
    { hex: "#4a1520", on: false },
  ];

  return (
    <LpFit>
      <div className="shop shop-site shop-beauty" {...flagAttrs({ ...flags, lang })}>
        <ShopChrome domain={t.domain} />
        <div className="sb-site">
          <div className="shop-screens">
            <div className="shop-screen is-home">
              <header className="sb-head">
                <nav className="sb-nav sb-nav-l" aria-hidden="true">
                  {navL.map((p, i) => (
                    <span key={p.es} className={i === 0 ? "is-on" : undefined}>
                      {tx(p, lang)}
                    </span>
                  ))}
                </nav>
                <b className="sb-logo">{t.logo}</b>
                <nav className="sb-nav sb-nav-r" aria-hidden="true">
                  {navR.map((p) => (
                    <span key={p.es}>{tx(p, lang)}</span>
                  ))}
                </nav>
                <span className="shop-lang">ES | EN</span>
                <span className="sb-menu" aria-hidden="true">
                  <i /><i /><i />
                </span>
              </header>

              <div className="sb-vanity">
                <figure className="sb-hero">
                  <ShopImg src={t.drop.img} eager />
                </figure>
                <div className="sb-desk">
                  <div className="sb-feature">
                    <small>{tx(t.drop.tag, lang)}</small>
                    <h3>{t.drop.name}</h3>
                    <div className="sb-feature-row">
                      <em>{t.drop.price}</em>
                      <span className="shop-stock">
                        {t.drop.stock} {es ? "uds" : "left"}
                      </span>
                    </div>
                    <p className="sb-note">
                      {es ? "En el tocador" : "On the vanity"}
                    </p>
                    <div className="sb-shades" aria-hidden="true">
                      {shades.map((s) => (
                        <i key={s.hex} className={s.on ? "is-on" : undefined} style={{ background: s.hex }} />
                      ))}
                    </div>
                    <div className="sb-cta" aria-hidden="true">
                      {es ? "Pedir este tono" : "Order this shade"}
                    </div>
                  </div>
                  <div className="sb-tray">
                    {t.picks.map((p) => (
                      <article key={p.name}>
                        <ShopImg src={p.img} eager />
                        <b>{p.name}</b>
                        <span>{p.price}</span>
                        <em className={`shop-stock${p.low ? " is-low" : ""}`}>
                          {p.stock} {units}
                        </em>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <footer className="shop-geo">
                <i />
                {t.geo}
              </footer>
            </div>

            <div className="shop-screen is-pdp">
              <div className="sb-pdp">
                <div className="sb-pdp-photo">
                  <ShopImg src={t.pdp.img} eager />
                </div>
                <div className="sb-pdp-body">
                  <small>{tx(t.pdp.tag, lang)}</small>
                  <h4>{t.pdp.name}</h4>
                  <b>{t.pdp.price}</b>
                  <p>{tx(t.pdp.body, lang)}</p>
                  <div className="sb-shades" aria-hidden="true">
                    {shades.map((s) => (
                      <i key={`pdp-${s.hex}`} className={s.on ? "is-on" : undefined} style={{ background: s.hex }} />
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
            </div>

            <div className="shop-screen is-bag">
              <div className="sb-bag">
                <h4 className="shop-bag-title">{es ? "Tu bolsa" : "Your bag"}</h4>
                {t.bag.rows.map((r) => (
                  <div className="shop-bag-row" key={r.name}>
                    <ShopImg src={r.img} eager />
                    <div>
                      <b>{r.name}</b>
                      <span>{tx(r.variant, lang)}</span>
                      <em className="shop-stock">
                        {r.stock} {units}
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
          </div>
        </div>
      </div>
    </LpFit>
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

export function TechShop({ template, lang, later, ...flags }: Props) {
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
      <ShopPhoneShell>
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
              <ShopImg src={t.drop.img} eager />
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
                  <ShopImg src={p.img} eager />
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
              <ShopImg src={later ? t.pdp.img : ""} />
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
                <ShopImg src={later ? r.img : ""} />
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
      </ShopPhoneShell>
    </div>
  );
}

export function HomeShop({ template: t, lang, later, ...flags }: Props) {
  const es = lang === "es";
  const pieces = [t.drop, ...t.picks];
  const units = es ? "uds" : "left";

  return (
    <div className="shop shop-home" {...flagAttrs({ ...flags, lang })}>
      <ShopPhoneShell>
        <div className="shop-notch" />
        <div className="shop-status">
          <span>9:41</span>
          <em className="shop-shopify">Shopify</em>
          <em className="shop-care">24h</em>
        </div>

        <div className="shop-screens">
          <div className="shop-screen is-home">
            <header className="sh-top">
              <b>{t.brand}</b>
              <span className="shop-lang">ES | EN</span>
            </header>

            <nav className="sh-nav" aria-hidden="true">
              {t.pills.map((p, i) => (
                <span key={p.es} className={i === 0 ? "is-on" : undefined}>
                  {tx(p, lang)}
                </span>
              ))}
            </nav>

            <figure className="sh-hero">
              <ShopImg src={t.pdp.img} eager />
              <figcaption>
                <small>{tx(t.pdp.tag, lang)}</small>
                <h3>{t.pdp.name}</h3>
                <em>{t.pdp.price}</em>
              </figcaption>
            </figure>

            <div className="sh-grid">
              {pieces.map((p) => (
                <article key={p.name}>
                  <ShopImg src={p.img} eager />
                  <div>
                    <b>{p.name}</b>
                    <span>{p.price}</span>
                  </div>
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
              <ShopImg src={later ? t.pdp.img : ""} />
            </div>
            <div className="shop-pdp-body">
              <small>{tx(t.pdp.tag, lang)}</small>
              <h4>{t.pdp.name}</h4>
              <b>{t.pdp.price}</b>
              <p>{tx(t.pdp.body, lang)}</p>
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
            <h4 className="shop-bag-title">{es ? "Tu selección" : "Your selection"}</h4>
            {t.bag.rows.map((r) => (
              <div className="shop-bag-row" key={r.name}>
                <ShopImg src={later ? r.img : ""} />
                <div>
                  <b>{r.name}</b>
                  <span>{tx(r.variant, lang)}</span>
                  <em className="shop-stock">
                    {r.stock} {units}
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
      </ShopPhoneShell>
    </div>
  );
}

export function OtherShop({ template: t, lang, ...flags }: Props) {
  const es = lang === "es";
  const slots = [
    { tone: 0, sku: "01", open: false },
    { tone: 1, sku: "02", open: false },
    { tone: 2, sku: "03", open: false },
    { tone: 0, sku: "—", open: true },
    { tone: 1, sku: "—", open: true },
    { tone: 2, sku: "—", open: true },
  ];

  return (
    <div className="shop shop-site shop-other" {...flagAttrs({ ...flags, lang })}>
      <ShopChrome domain={t.domain} />
      <div className="so">
        <header className="so-head">
          <div className="so-brand">
            <i className="so-mark" aria-hidden="true" />
            <b>{t.brand}</b>
          </div>
          <nav className="so-nav" aria-hidden="true">
            {t.pills.map((p, i) => (
              <span key={p.es} className={i === 0 ? "is-on" : undefined}>
                {tx(p, lang)}
              </span>
            ))}
          </nav>
        </header>

        <div className="so-intro">
          <em>{es ? "Tu categoría" : "Your category"}</em>
          <h3>{es ? "Tu catálogo. Tu marca." : "Your catalog. Your brand."}</h3>
          <p>
            {es
              ? "Un escaparate listo para tu inventario — nombre, precio y stock en cada ficha."
              : "A storefront ready for your inventory — name, price, and stock on every card."}
          </p>
        </div>

        <div className="so-grid">
          {slots.map((s, i) => (
            <article key={`${s.sku}-${i}`} className={s.open ? "is-open" : undefined}>
              <div className={`so-block is-tone-${s.tone}${s.open ? " is-dashed" : ""}`} aria-hidden="true">
                {s.open ? <span>{es ? "Aquí" : "Here"}</span> : <i />}
              </div>
              <span className="so-sku">SKU · {s.sku}</span>
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
  const later = useLaterShopMedia();
  const next = { ...props, later };
  switch (props.template.id) {
    case "gastronomia":
      return <GastroShop {...next} />;
    case "beauty":
      return <BeautyShop {...next} />;
    case "tech":
      return <TechShop {...next} />;
    case "home":
      return <HomeShop {...next} />;
    case "moda":
      return <LinaShop {...next} />;
    case "other":
      return <OtherShop {...props} />;
    default:
      return <FashionShop {...next} />;
  }
}
