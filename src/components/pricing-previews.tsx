import { tx, type LandingTemplate } from "@/lib/pricing-templates";

type Flags = {
  seo: boolean;
  brand: boolean;
  bilingual: boolean;
  support: boolean;
  lang: "es" | "en";
};

function Chrome({ domain }: { domain: string }) {
  return (
    <div className="lp-chrome">
      <i /><i /><i />
      <div className="lp-url">{domain}</div>
      <div className="lp-lang">ES | EN</div>
      <div className="lp-care">24h</div>
    </div>
  );
}

function MapBit({ name, meta }: { name: string; meta: string }) {
  return (
    <div className="lp-map" aria-hidden="true">
      <div className="lp-map-field"><i /><i /></div>
      <div className="lp-map-card">
        <b>{name}</b>
        <span>{meta}</span>
      </div>
    </div>
  );
}

function IconDotGrid() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
    </svg>
  );
}
function OtherSite({ t, lang, es, alt }: { t: LandingTemplate; lang: "es" | "en"; es: boolean; alt: "es" | "en" }) {
  return (
    <div className="lp-site lp-ot">
      <div className="lp-ot-hero">
        <img src={t.hero.img} alt="" />
        <nav className="lp-nav">
          <div className="lp-mark lp-ot-mark" aria-hidden="true">
            <IconDotGrid />
          </div>
          <b>{t.brand}</b>
          <div className="lp-nav-links">
            {t.nav.map((n) => <span key={n.es}>{tx(n, lang)}</span>)}
          </div>
        </nav>
        <div className="lp-ot-toast">
          <b>{tx(t.toast.label, lang)}</b>
          <span>{tx(t.toast.text, lang)}</span>
        </div>
        <div className="lp-ot-copy">
          <em>{tx(t.hero.kicker, lang)}</em>
          <h3>{tx(t.hero.title, lang)}</h3>
          <p>{tx(t.hero.sub, lang)}</p>
          <p className="lp-alt">{tx(t.hero.title, alt)}</p>
        </div>
        <div className="lp-ot-bar">
          {t.stats.map((s) => (
            <span key={s.n + s.l.es}>
              <small>{tx(s.l, lang)}</small>
              <b>{s.n}</b>
            </span>
          ))}
          <div className="lp-cta">{tx(t.hero.cta, lang)}</div>
        </div>
      </div>
      <div className="lp-ot-reel">
        {t.cards.map((c) => (
          <article key={c.title.es}>
            <img src={c.img} alt="" />
            <div>
              <small>{tx(c.tag, lang)}</small>
              <b>{tx(c.title, lang)}</b>
              <em>{c.meta}</em>
            </div>
          </article>
        ))}
      </div>
      <div className="lp-ot-proof">
        {t.strip.map((p) => (
          <figure key={p.name}>
            <img src={p.img} alt="" />
            <figcaption>
              {p.name}
              <small>{tx(p.role, lang)}</small>
            </figcaption>
          </figure>
        ))}
        <div className="lp-info">
          <b>{tx(t.info.title, lang)}</b>
          {t.info.lines.map((line) => <span key={line}>{line}</span>)}
        </div>
      </div>
      <MapBit name={t.map.name} meta={tx(t.map.meta, lang)} />
    </div>
  );
}

function ClinicSite({ t, lang, es, alt }: { t: LandingTemplate; lang: "es" | "en"; es: boolean; alt: "es" | "en" }) {
  return (
    <div className="lp-site lp-cl">
      <nav className="lp-nav lp-cl-nav">
        <div className="lp-mark" aria-hidden="true" />
        <b>{t.brand}</b>
        <div className="lp-nav-links">
          {t.nav.map((n) => <span key={n.es}>{tx(n, lang)}</span>)}
        </div>
      </nav>

      <div className="lp-cl-hero">
        <div className="lp-cl-copy">
          <em>{tx(t.hero.kicker, lang)}</em>
          <h3>{tx(t.hero.title, lang)}</h3>
          <p>{tx(t.hero.sub, lang)}</p>
          <p className="lp-alt">{tx(t.hero.title, alt)}</p>
          <div className="lp-cl-trust">
            {t.stats.map((s) => (
              <span key={s.n + s.l.es}>
                <b>{s.n}</b>
                <small>{tx(s.l, lang)}</small>
              </span>
            ))}
          </div>
          <div className="lp-cta">{tx(t.hero.cta, lang)}</div>
        </div>
        <div className="lp-cl-visual">
          <img src={t.hero.img} alt="" />
          <div className="lp-cl-toast">
            <b>{tx(t.toast.label, lang)}</b>
            <span>{tx(t.toast.text, lang)}</span>
          </div>
        </div>
      </div>

      <div className="lp-cl-treats">
        <div className="lp-cl-treats-head">
          <b>{es ? "Tratamientos" : "Treatments"}</b>
          <span>{es ? "Precios orientativos" : "Guide prices"}</span>
        </div>
        <div className="lp-cl-treats-list">
          {t.cards.map((c) => (
            <article key={c.title.es}>
              <img src={c.img} alt="" />
              <div>
                <small>{tx(c.tag, lang)}</small>
                <b>{tx(c.title, lang)}</b>
              </div>
              <em>{c.meta}</em>
            </article>
          ))}
        </div>
      </div>

      <div className="lp-cl-case">
        <div className="lp-cl-case-copy">
          <small>{es ? "Estética dental" : "Cosmetic dentistry"}</small>
          <b>{es ? "Carillas en 2 visitas" : "Veneers in 2 visits"}</b>
        </div>
        <div className="lp-cl-ba">
          <figure>
            <img src="/demo/sdq-dental/case-veneers-before.jpg" alt="" />
            <figcaption>{es ? "Antes" : "Before"}</figcaption>
          </figure>
          <figure>
            <img src="/demo/sdq-dental/case-veneers-after.jpg" alt="" />
            <figcaption>{es ? "Después" : "After"}</figcaption>
          </figure>
        </div>
      </div>

      <div className="lp-cl-team">
        {t.strip.map((p) => (
          <figure key={p.name}>
            <img src={p.img} alt="" />
            <figcaption>
              <b>{p.name}</b>
              <small>{tx(p.role, lang)}</small>
            </figcaption>
          </figure>
        ))}
        <div className="lp-info">
          <b>{tx(t.info.title, lang)}</b>
          {t.info.lines.map((line) => <span key={line}>{line}</span>)}
        </div>
      </div>

      <MapBit name={t.map.name} meta={tx(t.map.meta, lang)} />
    </div>
  );
}

function VillasSite({ t, lang, es, alt }: { t: LandingTemplate; lang: "es" | "en"; es: boolean; alt: "es" | "en" }) {
  return (
    <div className="lp-site lp-vi">
      <div className="lp-vi-hero">
        <img src={t.hero.img} alt="" />
        <nav className="lp-nav">
          <div className="lp-mark" aria-hidden="true" />
          <b>{t.brand}</b>
          <div className="lp-nav-links">
            {t.nav.map((n) => <span key={n.es}>{tx(n, lang)}</span>)}
          </div>
        </nav>
        <div className="lp-vi-toast">
          <b>{tx(t.toast.label, lang)}</b>
          <span>{tx(t.toast.text, lang)}</span>
        </div>
        <div className="lp-vi-copy">
          <em>{tx(t.hero.kicker, lang)}</em>
          <h3>{tx(t.hero.title, lang)}</h3>
          <p>{tx(t.hero.sub, lang)}</p>
          <p className="lp-alt">{tx(t.hero.title, alt)}</p>
        </div>
        <div className="lp-vi-stay">
          <span><small>{es ? "Llegada" : "Arrive"}</small><b>12 dic</b></span>
          <span><small>{es ? "Salida" : "Depart"}</small><b>18 dic</b></span>
          <span><small>{es ? "Huéspedes" : "Guests"}</small><b>8</b></span>
          <div className="lp-cta">{tx(t.hero.cta, lang)}</div>
        </div>
      </div>
      <div className="lp-vi-reel">
        {t.cards.map((c) => (
          <article key={c.title.es}>
            <img src={c.img} alt="" />
            <div>
              <small>{tx(c.tag, lang)}</small>
              <b>{tx(c.title, lang)}</b>
              <em>{c.meta}<i>{es ? " / noche" : " / night"}</i></em>
            </div>
          </article>
        ))}
      </div>
      <div className="lp-vi-rooms">
        {t.strip.map((p) => (
          <figure key={p.name}>
            <img src={p.img} alt="" />
            <figcaption>{p.name}<small>{tx(p.role, lang)}</small></figcaption>
          </figure>
        ))}
      </div>
      <MapBit name={t.map.name} meta={tx(t.map.meta, lang)} />
    </div>
  );
}

function LegalSite({ t, lang, alt }: { t: LandingTemplate; lang: "es" | "en"; alt: "es" | "en" }) {
  return (
    <div className="lp-site lp-lg">
      <div className="lp-lg-hero">
        <img src={t.hero.img} alt="" />
        <nav className="lp-nav">
          <div className="lp-mark" aria-hidden="true" />
          <b>{t.brand}</b>
          <small>Naco · RD</small>
          <div className="lp-nav-links">
            {t.nav.map((n) => <span key={n.es}>{tx(n, lang)}</span>)}
          </div>
        </nav>
        <div className="lp-lg-copy">
          <em>{tx(t.hero.kicker, lang)}</em>
          <h3>{tx(t.hero.title, lang)}</h3>
          <p>{tx(t.hero.sub, lang)}</p>
          <p className="lp-alt">{tx(t.hero.title, alt)}</p>
          <div className="lp-cta">{tx(t.hero.cta, lang)}</div>
        </div>
        <div className="lp-lg-toast">
          <b>{tx(t.toast.label, lang)}</b>
          <span>{tx(t.toast.text, lang)}</span>
        </div>
      </div>
      <ol className="lp-lg-list">
        {t.cards.map((c, i) => (
          <li key={c.title.es}>
            <i>0{i + 1}</i>
            <div>
              <small>{tx(c.tag, lang)}</small>
              <b>{tx(c.title, lang)}</b>
              <em>{c.meta}</em>
            </div>
          </li>
        ))}
      </ol>
      <div className="lp-lg-partners">
        {t.strip.map((p) => (
          <figure key={p.name}>
            <img src={p.img} alt="" />
            <figcaption>{p.name}<small>{tx(p.role, lang)}</small></figcaption>
          </figure>
        ))}
        <div className="lp-info">
          <b>{tx(t.info.title, lang)}</b>
          {t.info.lines.map((line) => <span key={line}>{line}</span>)}
        </div>
      </div>
      <MapBit name={t.map.name} meta={tx(t.map.meta, lang)} />
    </div>
  );
}

function BuildSite({ t, lang, es, alt }: { t: LandingTemplate; lang: "es" | "en"; es: boolean; alt: "es" | "en" }) {
  const lead = t.cards[0];
  const rest = t.cards.slice(1);
  return (
    <div className="lp-site lp-bu">
      <div className="lp-bu-ticker">
        {es ? "12.400 m² EN OBRA · NACO · VISITAS COORDINADAS" : "12,400 m² UNDER WAY · NACO · SITE VISITS"}
      </div>
      <nav className="lp-nav">
        <div className="lp-mark" aria-hidden="true" />
        <b>{t.brand}</b>
        <div className="lp-nav-links">
          {t.nav.map((n) => <span key={n.es}>{tx(n, lang)}</span>)}
        </div>
      </nav>
      <div className="lp-bu-hero">
        <img src={t.hero.img} alt="" />
        <div className="lp-bu-toast">
          <b>{tx(t.toast.label, lang)}</b>
          <span>{tx(t.toast.text, lang)}</span>
        </div>
        <div className="lp-bu-copy">
          <em>{tx(t.hero.kicker, lang)}</em>
          <h3>{tx(t.hero.title, lang)}</h3>
          <p>{tx(t.hero.sub, lang)}</p>
          <p className="lp-alt">{tx(t.hero.title, alt)}</p>
          <div className="lp-cta">{tx(t.hero.cta, lang)}</div>
        </div>
        <div className="lp-bu-nums">
          {t.stats.map((s) => (
            <div key={s.n + s.l.es}>
              <b>{s.n}</b>
              <span>{tx(s.l, lang)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="lp-bu-masonry">
        <article className="is-lead">
          <img src={lead.img} alt="" />
          <div>
            <small>{tx(lead.tag, lang)}</small>
            <b>{tx(lead.title, lang)}</b>
            <em>{lead.meta}</em>
          </div>
        </article>
        {rest.map((c) => (
          <article key={c.title.es}>
            <img src={c.img} alt="" />
            <div>
              <small>{tx(c.tag, lang)}</small>
              <b>{tx(c.title, lang)}</b>
              <em>{c.meta}</em>
            </div>
          </article>
        ))}
      </div>
      <div className="lp-bu-crew">
        {t.strip.slice(0, 2).map((p) => (
          <figure key={p.name}>
            <img src={p.img} alt="" />
            <figcaption>{p.name}<small>{tx(p.role, lang)}</small></figcaption>
          </figure>
        ))}
        <div className="lp-info">
          <b>{tx(t.info.title, lang)}</b>
          {t.info.lines.map((line) => <span key={line}>{line}</span>)}
        </div>
      </div>
      <MapBit name={t.map.name} meta={tx(t.map.meta, lang)} />
    </div>
  );
}

export function LandingPreview({
  template,
  seo,
  brand,
  bilingual,
  support,
  lang,
}: Flags & { template: LandingTemplate }) {
  const es = lang === "es";
  const alt: "es" | "en" = es ? "en" : "es";
  const t = template;
  const props = { t, lang, es, alt };

  return (
    <div
      className="lp"
      data-tpl={t.id}
      data-seo={seo ? "" : undefined}
      data-brand={brand ? "" : undefined}
      data-bi={bilingual ? "" : undefined}
      data-care={support ? "" : undefined}
    >
      <Chrome domain={t.domain} />
      {t.id === "inmobiliaria" ? <VillasSite {...props} /> :
       t.id === "legal" ? <LegalSite t={t} lang={lang} alt={alt} /> :
       t.id === "constructora" ? <BuildSite {...props} /> :
       t.id === "otro" ? <OtherSite {...props} /> :
       <ClinicSite {...props} />}
    </div>
  );
}

export { ShopPreview } from "@/components/pricing-shop-previews";
