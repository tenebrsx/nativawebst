"use client";

import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { guidesEs, type GuideCopy } from "@/lib/guides-content";
import { answerPageGraph } from "@/lib/json-ld";
import { openWhatsAppFunnel } from "@/lib/whatsapp";
import type { GuideSlug } from "@/lib/site";

export function GuidePageView({ slug }: { slug: GuideSlug }) {
  const copy: GuideCopy = guidesEs[slug];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <JsonLd
        data={answerPageGraph({
          id: copy.slug,
          name: copy.h1,
          description: copy.lede,
          path: copy.path,
          faqs: copy.faqs,
          crumbs: [
            { name: "Inicio", path: "/" },
            { name: "Guías", path: "/guias" },
            { name: copy.label, path: copy.path },
          ],
          areaServed: { "@type": "Country", name: "República Dominicana" },
          serviceType: copy.h1,
        })}
      />
      <SiteNav />
      <article style={{ padding: "72px 0 48px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px" }}>
            <Link href="/" style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>
              Inicio
            </Link>
            {" / "}
            <Link href="/guias" style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>
              Guías
            </Link>
            {" / "}
            {copy.label}
          </p>
          <div className="section-label">{copy.label}</div>
          <h1 className="section-title" style={{ marginBottom: "20px" }}>{copy.h1}</h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "36px" }}>{copy.lede}</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
            {copy.sections.map((section) => (
              <section key={section.title}>
                <h2 style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 800, marginBottom: "10px" }}>
                  {section.title}
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>{section.body}</p>
              </section>
            ))}
          </div>

          <h2 className="section-title" style={{ marginBottom: "20px", fontSize: "28px" }}>FAQ</h2>
          <dl style={{ margin: "0 0 40px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {copy.faqs.map((faq) => (
              <div key={faq.q} className="card" style={{ padding: "20px" }}>
                <dt style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "15px", marginBottom: "8px" }}>{faq.q}</dt>
                <dd style={{ margin: 0, fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{faq.a}</dd>
              </div>
            ))}
          </dl>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "28px" }}>
            <Link href="/servicios/diseno-web" className="card card-hover" style={{ padding: "16px 18px", textDecoration: "none", flex: "1 1 200px" }}>
              <div style={{ fontWeight: 800, marginBottom: "4px" }}>Diseño web</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>Servicio</p>
            </Link>
            <Link href="/por-que-nosotros" className="card card-hover" style={{ padding: "16px 18px", textDecoration: "none", flex: "1 1 200px" }}>
              <div style={{ fontWeight: 800, marginBottom: "4px" }}>Por qué nosotros</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>Calidad primero</p>
            </Link>
            <Link href="/santo-domingo" className="card card-hover" style={{ padding: "16px 18px", textDecoration: "none", flex: "1 1 200px" }}>
              <div style={{ fontWeight: 800, marginBottom: "4px" }}>Santo Domingo</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>Ficha local</p>
            </Link>
          </div>

          <button type="button" className="btn btn-launch" onClick={() => openWhatsAppFunnel("guia", copy.need)}>
            {copy.cta}
          </button>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
