"use client";

import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { useGeo } from "@/lib/geo-context";
import {
  LEGAL_DOCS,
  LEGAL_LIST,
  LEGAL_UPDATED,
  legalTx,
  type LegalSlug,
} from "@/lib/legal-content";
import { absoluteUrl, SITE_CITATION, SITE_URL } from "@/lib/site";
import { orgId, websiteId } from "@/lib/json-ld";

function crumbs(lang: "es" | "en", current?: { name: string; path: string }) {
  const items = [
    { name: lang === "es" ? "Inicio" : "Home", path: "/" },
    { name: "Legal", path: "/legal" },
  ];
  if (current) items.push(current);
  return items;
}

function BreadcrumbJson({ items }: { items: { name: string; path: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}${items[items.length - 1].path}#webpage`,
            url: `${SITE_URL}${items[items.length - 1].path}`,
            name: items[items.length - 1].name,
            isPartOf: { "@id": websiteId() },
            about: { "@id": orgId() },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              item: item.path === "/" ? SITE_URL : absoluteUrl(item.path),
            })),
          },
        ],
      }}
    />
  );
}

function LegalNav({ lang, current }: { lang: "es" | "en"; current?: LegalSlug }) {
  return (
    <nav
      aria-label={lang === "es" ? "Documentos legales" : "Legal documents"}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        margin: "0 0 36px",
      }}
    >
      {LEGAL_LIST.map((doc) => {
        const on = doc.slug === current;
        return (
          <Link
            key={doc.slug}
            href={doc.path}
            className={on ? "btn btn-launch" : "card card-hover"}
            style={{
              padding: on ? "8px 14px" : "8px 14px",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            {legalTx(doc.label, lang)}
          </Link>
        );
      })}
    </nav>
  );
}

export function LegalHubView() {
  const { lang } = useGeo();
  const trail = crumbs(lang);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <BreadcrumbJson items={trail} />
      <SiteNav />
      <section style={{ padding: "72px 0 80px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px" }}>
            <Link href="/" style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>
              {lang === "es" ? "Inicio" : "Home"}
            </Link>
            {" / "}
            Legal
          </p>
          <div className="section-label">Legal</div>
          <h1 className="section-title" style={{ marginBottom: "16px" }}>
            {lang === "es" ? "Avisos legales de Nativa" : "Nativa legal notices"}
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "12px" }}>
            {lang === "es"
              ? "Tres documentos. Cortos a propósito. Cubren este sitio, el cotizador y el WhatsApp de Nativa — no el contrato de un proyecto, que va en la propuesta."
              : "Three documents. Short on purpose. They cover this site, the quote builder, and Nativa’s WhatsApp — not a project contract, which lives in the proposal."}
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "32px" }}>
            {legalTx(LEGAL_UPDATED, lang)}
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            {LEGAL_LIST.map((doc) => (
              <li key={doc.slug}>
                <Link
                  href={doc.path}
                  className="card card-hover"
                  style={{ display: "block", padding: "22px", textDecoration: "none" }}
                >
                  <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, marginBottom: "6px" }}>
                    {legalTx(doc.h1, lang)}
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                    {legalTx(doc.lede, lang)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.6,
              color: "var(--muted)",
              padding: "16px 18px",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              marginTop: "36px",
            }}
          >
            {lang === "es" ? "Cita:" : "Citation:"} {SITE_CITATION}
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

export function LegalDocView({ slug }: { slug: LegalSlug }) {
  const { lang } = useGeo();
  const doc = LEGAL_DOCS[slug];
  const title = legalTx(doc.h1, lang);
  const trail = crumbs(lang, { name: legalTx(doc.label, lang), path: doc.path });

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <BreadcrumbJson items={trail} />
      <SiteNav />
      <article style={{ padding: "72px 0 80px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px" }}>
            <Link href="/" style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>
              {lang === "es" ? "Inicio" : "Home"}
            </Link>
            {" / "}
            <Link href="/legal" style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>
              Legal
            </Link>
            {" / "}
            {legalTx(doc.label, lang)}
          </p>
          <div className="section-label">{legalTx(doc.label, lang)}</div>
          <h1 className="section-title" style={{ marginBottom: "16px" }}>
            {title}
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "8px" }}>
            {legalTx(doc.lede, lang)}
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "28px" }}>
            {legalTx(LEGAL_UPDATED, lang)}
          </p>
          <LegalNav lang={lang} current={slug} />

          <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "40px" }}>
            {doc.sections.map((section) => (
              <section key={legalTx(section.title, lang)}>
                <h2 style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 800, marginBottom: "10px" }}>
                  {legalTx(section.title, lang)}
                </h2>
                {section.paragraphs.map((p) => (
                  <p
                    key={legalTx(p, lang).slice(0, 48)}
                    style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--muted)", margin: "0 0 12px" }}
                  >
                    {legalTx(p, lang)}
                  </p>
                ))}
                {section.bullets ? (
                  <ul style={{ margin: "0 0 4px", paddingLeft: "20px", color: "var(--muted)", fontSize: "15px", lineHeight: 1.7 }}>
                    {section.bullets.map((b) => (
                      <li key={legalTx(b, lang).slice(0, 40)} style={{ marginBottom: "8px" }}>
                        {legalTx(b, lang)}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.6,
              color: "var(--muted)",
              padding: "16px 18px",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              marginBottom: "28px",
            }}
          >
            {lang === "es" ? "Cita:" : "Citation:"} {SITE_CITATION}
          </p>
          <LegalNav lang={lang} current={slug} />
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
