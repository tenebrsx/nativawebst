"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ADS, findAd, type AdEntry, type AdKind, type AdLang } from "./ads-library";
import "./ads.css";

function StillVisual({ ad, lang }: { ad: AdEntry; lang: AdLang }) {
  const t = ad.frame[lang];

  if (ad.id === "quality") {
    return (
      <div className="ad-quality-site" aria-hidden="true">
        <div className="ad-quality-chrome">
          <span />
          <span />
          <span />
          <b>nativa.studio</b>
        </div>
        <div className="ad-quality-page">
          <div className="ad-quality-page-nav">
            <b>{t.mockBrand}</b>
            {t.mockNav.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="ad-quality-hero">
            <small>{t.mockHero}</small>
            <strong>{t.mockCta}</strong>
          </div>
          <div className="ad-quality-cards">
            {t.mockCards.map((card) => (
              <div key={card.v}>
                <em>{card.k}</em>
                <b>{card.v}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (ad.id === "speed") {
    return (
      <div className="ad-speed" aria-hidden="true">
        <div className="ad-speed-col is-old">
          <small>Antes</small>
          <b>{t.speedOld}</b>
        </div>
        <span>→</span>
        <div className="ad-speed-col is-new">
          <small>Nativa</small>
          <b>{t.speedNew}</b>
        </div>
      </div>
    );
  }

  if (ad.id === "maps") {
    return (
      <div className="ad-maps" aria-hidden="true">
        <div className="ad-maps-pin" />
        <div className="ad-maps-card">
          <em>★ #1</em>
          <b>{t.mapsName}</b>
          <span>{t.mapsMeta}</span>
          <strong>WhatsApp</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="ad-wa" aria-hidden="true">
      <div className="ad-wa-head">WhatsApp</div>
      <div className="ad-wa-bubble">
        <small>{t.waFrom}</small>
        <p>{t.waMsg}</p>
      </div>
    </div>
  );
}

function Still({ ad, lang }: { ad: AdEntry; lang: AdLang }) {
  const t = ad.frame[lang];

  return (
    <article className={`ad-quality ad-kind-${ad.id}`} aria-label={ad.label[lang]}>
      <header className="ad-quality-top">
        <div className="ad-quality-brand">
          <i className="ad-quality-mark" aria-hidden="true" />
          <div>
            <strong>Nativa</strong>
            <span>{t.studio}</span>
          </div>
        </div>
      </header>

      <div className="ad-quality-mid">
        <em>{t.eyebrow}</em>
        <h2>
          <span className="ad-quality-lead">{t.lead}</span>
          <i>{t.payoff}</i>
        </h2>
        <p>{t.body}</p>
        <StillVisual ad={ad} lang={lang} />
        <div className="ad-quality-proof">
          {t.proof.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>

      <footer className="ad-quality-bot">
        <div className="ad-quality-cta">
          <i aria-hidden="true" />
          {t.cta}
        </div>
        <div className="ad-quality-url">{t.url}</div>
      </footer>
    </article>
  );
}

export default function AdsPage() {
  const [lang, setLang] = useState<AdLang>("es");
  const [adId, setAdId] = useState<AdKind>("quality");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fromHash = window.location.hash.replace(/^#/, "") as AdKind;
    if (ADS.some((a) => a.id === fromHash)) setAdId(fromHash);
  }, []);

  const pick = (id: AdKind) => {
    setAdId(id);
    setCopied(false);
    if (window.location.hash !== `#${id}`) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const ad = findAd(adId);

  const copyCaption = async () => {
    await navigator.clipboard.writeText(ad.caption[lang]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="ads-studio">
      <header className="ads-bar">
        <Link href="/">Nativa</Link>
        <div className="ads-bar-meta">
          <span className="ads-chip">Biblioteca · 9:16</span>
          <div className="ads-toggle" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "es" ? "is-on" : undefined}
              onClick={() => setLang("es")}
            >
              ES
            </button>
            <button
              type="button"
              className={lang === "en" ? "is-on" : undefined}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <Link href="/">Site →</Link>
        </div>
      </header>

      <div className="ads-shell">
        <div className="ads-stage-wrap">
          <div className="ads-stage-label">
            {lang === "es" ? "Captura este cuadro · 9:16" : "Screenshot this frame · 9:16"}
          </div>
          <div className="ads-stage">
            <div className="ads-frame">
              <Still ad={ad} lang={lang} />
            </div>
          </div>
        </div>

        <aside className="ads-side">
          <p className="ads-lib-kicker">{lang === "es" ? "Biblioteca de ads" : "Ad library"}</p>
          <h1>{ad.n} · {ad.label[lang]}</h1>
          <p>{ad.blurb[lang]}</p>

          <div className="ads-lib" role="listbox" aria-label={lang === "es" ? "Elegir anuncio" : "Pick an ad"}>
            {ADS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="option"
                aria-selected={item.id === ad.id}
                className={`ads-lib-item${item.id === ad.id ? " is-on" : ""}`}
                onClick={() => pick(item.id)}
              >
                <b>{item.n}</b>
                <span>
                  <strong>{item.label[lang]}</strong>
                  <em>{item.blurb[lang]}</em>
                </span>
              </button>
            ))}
          </div>

          <div className="ads-side-card">
            <b>{lang === "es" ? "Caption listo" : "Ready caption"}</b>
            <pre>{ad.caption[lang]}</pre>
            <button
              type="button"
              className={`ads-copy-btn${copied ? " is-done" : ""}`}
              onClick={copyCaption}
            >
              {copied
                ? lang === "es"
                  ? "Copiado"
                  : "Copied"
                : lang === "es"
                  ? "Copiar caption"
                  : "Copy caption"}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
