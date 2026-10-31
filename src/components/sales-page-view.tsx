"use client";

import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { salesCopy, type SalesPageId } from "@/lib/sales-content";
import { answerPageGraph } from "@/lib/json-ld";
import { openWhatsAppFunnel } from "@/lib/whatsapp";

const h3 = { fontFamily: "var(--font-head)", fontSize: "16px", fontWeight: 800, marginBottom: "10px" } as const;
const body = { fontSize: "14px", color: "var(--muted)", lineHeight: 1.65, margin: 0 } as const;
const grid = (min: number) =>
  ({ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${min}px), 1fr))`, gap: "20px" }) as const;

export function SalesPageView({ id }: { id: SalesPageId }) {
  const copy = salesCopy[id];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <JsonLd
        data={answerPageGraph({
          id: copy.id,
          name: copy.h1,
          description: copy.answer,
          path: copy.path,
          faqs: copy.faqs,
          crumbs: copy.crumbs,
          areaServed: { "@type": "Country", name: "República Dominicana" },
          serviceType: copy.serviceType,
          offers: copy.offers,
        })}
      />
      <SiteNav />
      <main id="main" lang="es">
        <section style={{ padding: "72px 0 48px", borderBottom: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px" }}>
              {copy.crumbs.slice(0, -1).map((crumb, i) => (
                <span key={crumb.path}>
                  {i > 0 ? " / " : null}
                  <Link href={crumb.path} style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>
                    {crumb.name}
                  </Link>
                </span>
              ))}
              {" / "}
              {copy.label}
            </p>
            <div className="section-label">{copy.label}</div>
            <h1 className="section-title" style={{ marginBottom: "20px" }}>{copy.h1}</h1>
            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "28px" }}>{copy.answer}</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button type="button" className="btn btn-launch" onClick={() => openWhatsAppFunnel("sales", copy.need)}>
                {copy.cta}
              </button>
              {copy.secondary ? (
                <Link href={copy.secondary.href} className="btn btn-outline">
                  {copy.secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </section>

        {copy.prices ? (
          <section style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
            <div className="container">
              <h2 className="section-title" style={{ marginBottom: "32px" }}>{copy.pricesTitle}</h2>
              <div style={grid(260)}>
                {copy.prices.map((p) => (
                  <article key={p.name} className="card" style={{ padding: "26px" }}>
                    <div className="section-label" style={{ marginBottom: "6px" }}>{p.name}</div>
                    <div style={{ fontFamily: "var(--font-head)", fontSize: "32px", fontWeight: 800, lineHeight: 1.1 }}>{p.price}</div>
                    <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px" }}>{p.unit}</div>
                    <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {p.points.map((pt) => (
                        <li key={pt} style={{ fontSize: "14px", lineHeight: 1.5 }}>{pt}</li>
                      ))}
                    </ul>
                    {p.note ? (
                      <p style={{ marginTop: "14px", fontSize: "12px", fontWeight: 700, color: "var(--coral-blue)" }}>{p.note}</p>
                    ) : null}
                  </article>
                ))}
              </div>
              {copy.draft ? (
                <p role="note" style={{ marginTop: "20px", fontSize: "13px", color: "var(--muted)", borderLeft: "3px solid var(--coral-blue)", paddingLeft: "12px" }}>
                  {copy.draft}
                </p>
              ) : null}
            </div>
          </section>
        ) : null}

        <section style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: "32px" }}>{copy.blocksTitle}</h2>
            <div style={grid(260)}>
              {copy.blocks.map((b) => (
                <article key={b.title} className="card" style={{ padding: "24px" }}>
                  <h3 style={h3}>{b.title}</h3>
                  <p style={body}>{b.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {copy.steps ? (
          <section style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
            <div className="container">
              <h2 className="section-title" style={{ marginBottom: "32px" }}>{copy.stepsTitle}</h2>
              <div style={grid(240)}>
                {copy.steps.map((s) => (
                  <article key={s.num} style={{ padding: "8px 0" }}>
                    <div className="section-label">{s.num}</div>
                    <h3 style={{ ...h3, marginBottom: "8px" }}>{s.title}</h3>
                    <p style={body}>{s.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <h2 className="section-title" style={{ marginBottom: "28px" }}>Preguntas frecuentes</h2>
            <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
              {copy.faqs.map((faq) => (
                <div key={faq.q} className="card" style={{ padding: "22px" }}>
                  <dt style={{ ...h3, marginBottom: "8px" }}>{faq.q}</dt>
                  <dd style={body}>{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section style={{ padding: "56px 0 80px" }}>
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: "24px" }}>{copy.relatedTitle}</h2>
            <div style={{ ...grid(240), gap: "16px", marginBottom: "36px" }}>
              {copy.related.map((item, i) => (
                <Reveal key={item.href} delay={i * 60}>
                  <Link href={item.href} className="card card-hover" style={{ display: "block", padding: "20px", textDecoration: "none" }}>
                    <div style={{ fontWeight: 800, fontFamily: "var(--font-head)", marginBottom: "6px" }}>{item.label}</div>
                    <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>{item.sub}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
            <button type="button" className="btn btn-launch" onClick={() => openWhatsAppFunnel("sales-close", copy.need)}>
              {copy.cta}
            </button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
