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

export function FashionShop({ template, lang, ...flags }: Props) {
  const { seo, brand, bilingual, support, shopify } = flags;
  const es = lang === "es";
  const t = template;
  const units = es ? "uds" : "left";

  return (
    <div className="shop shop-fashion" {...flagAttrs({ seo, brand, bilingual, support, shopify, lang })}>
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

            <div className="shop-picks-label">{es ? "Selección" : "Staff picks"}</div>
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

function IconLeaf() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 21c-4-4.5-7-8.5-7-12a7 7 0 0 1 14 0c0 3.5-3 7.5-7 12Z" />
      <path d="M12 9v12" />
    </svg>
  );
}

export function GastroShop({ template, lang, ...flags }: Props) {
  const es = lang === "es";
  const t = template;
  const units = es ? "uds" : "left";
  const sizes = [
    { label: "250 ml", on: false },
    { label: "500 ml", on: true },
    { label: "1 L", on: false },
  ];

  return (
    <div className="shop shop-gastro" {...flagAttrs({ ...flags, lang })}>
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

            <div className="shop-picks-label">{es ? "De la región" : "From the region"}</div>
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
              <div className="sg-sizes" aria-hidden="true">
                {sizes.map((s) => (
                  <span key={s.label} className={s.on ? "is-on" : undefined}>
                    {s.label}
                  </span>
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
                {es ? `AÑADIR A LA DESPENSA — ${t.pdp.price}` : `ADD TO PANTRY — ${t.pdp.price}`}
              </div>
            </div>
          </div>

          <div className="shop-screen is-bag">
            <h4 className="shop-bag-title">{es ? "Tu despensa" : "Your pantry"}</h4>
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
              {es ? "PEDIR LA DESPENSA" : "ORDER PANTRY"}
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
            <IconLeaf />
          </span>
        </nav>
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

export function HomeShop({ template: t, lang, ...flags }: Props) {
  const es = lang === "es";
  const pieces = [t.drop, ...t.picks];
  const units = es ? "uds" : "left";

  return (
    <div className="shop shop-home" {...flagAttrs({ ...flags, lang })}>
      <div className="shop-phone">
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
                <img src={r.img} alt="" />
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
      </div>
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
          <em>{es ? "Plantilla abierta" : "Open template"}</em>
          <h3>{es ? "Tu catálogo. Tu marca." : "Your catalog. Your brand."}</h3>
          <p>
            {es
              ? "Un escaparate genérico de lujo — mapea lo que vendas. El chat cierra con el SKU."
              : "A generic luxury storefront — map whatever you sell. The chat closes with the SKU."}
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
  switch (props.template.id) {
    case "gastronomia":
      return <GastroShop {...props} />;
    case "beauty":
      return <BeautyShop {...props} />;
    case "tech":
      return <TechShop {...props} />;
    case "home":
      return <HomeShop {...props} />;
    case "other":
      return <OtherShop {...props} />;
    default:
      return <FashionShop {...props} />;
  }
}
