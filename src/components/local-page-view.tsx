"use client";

import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { useGeo } from "@/lib/geo-context";
import { localCopy, type LocalPageId } from "@/lib/local-content";
import { answerPageGraph } from "@/lib/json-ld";
import { openWhatsAppFunnel } from "@/lib/whatsapp";

export function LocalPageView({ id }: { id: LocalPageId }) {
  const { lang } = useGeo();
  const copy = localCopy[lang][id];

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
          areaServed: copy.areaServed,
          serviceType: copy.serviceType,
        })}
      />
      <SiteNav />
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
          <button type="button" className="btn btn-launch" onClick={() => openWhatsAppFunnel("local", copy.need)}>
            {copy.cta}
          </button>
        </div>
      </section>

      <section style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "32px" }}>{copy.problemsTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "20px" }}>
            {copy.problems.map((item) => (
              <article key={item.title} className="card" style={{ padding: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "16px", fontWeight: 800, marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "32px" }}>{copy.stepsTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))", gap: "20px" }}>
            {copy.steps.map((step) => (
              <article key={step.num} style={{ padding: "8px 0" }}>
                <div className="section-label">{step.num}</div>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "16px", fontWeight: 800, marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="section-title" style={{ marginBottom: "28px" }}>FAQ</h2>
          <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
            {copy.faqs.map((faq) => (
              <div key={faq.q} className="card" style={{ padding: "22px" }}>
                <dt style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "16px", marginBottom: "8px" }}>{faq.q}</dt>
                <dd style={{ margin: 0, fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section style={{ padding: "56px 0 80px" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "24px" }}>{copy.relatedTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))", gap: "16px", marginBottom: "36px" }}>
            {copy.related.map((item, i) => (
              <Reveal key={item.href} delay={i * 60}>
                <Link href={item.href} className="card card-hover" style={{ display: "block", padding: "20px", textDecoration: "none" }}>
                  <div style={{ fontWeight: 800, fontFamily: "var(--font-head)", marginBottom: "6px" }}>{item.label}</div>
                  <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>{item.sub}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <button type="button" className="btn btn-launch" onClick={() => openWhatsAppFunnel("local-close", copy.need)}>
            {copy.cta}
          </button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
