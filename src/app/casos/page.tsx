import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, pageMetadata, SITE_CITATION, SITE_URL } from "@/lib/site";
import { orgId, websiteId } from "@/lib/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Casos reales | Nativa Web Studio",
  description:
    "Casos de proyectos reales de Nativa Web Studio. Publicamos solo trabajo entregado con resultados verificables — no demos ni clientes inventados.",
  path: "/casos",
});

export default function CasosPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/casos#webpage`,
              url: `${SITE_URL}/casos`,
              name: "Casos reales | Nativa Web Studio",
              description:
                "Portfolio de casos reales. Solo proyectos entregados; las demos en /demo/* no son casos.",
              isPartOf: { "@id": websiteId() },
              about: { "@id": orgId() },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: SITE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Casos",
                  item: absoluteUrl("/casos"),
                },
              ],
            },
          ],
        }}
      />
      <SiteNav />
      <section style={{ padding: "72px 0 80px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <div className="section-label">Casos</div>
          <h1 className="section-title" style={{ marginBottom: "20px" }}>
            Casos reales — cuando existan, aquí
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "24px" }}>
            Todavía no publicamos casos inventados. Cuando un proyecto real tenga problema → entrega → resultado
            (WhatsApp, Maps, plazos), irá en esta página con nombre y métricas que se puedan defender.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "28px" }}>
            Mientras tanto, las plantillas en{" "}
            <Link href="/portfolio" style={{ color: "var(--coral-blue)", fontWeight: 700 }}>
              /portfolio
            </Link>{" "}
            son prototipos de industria — no clientes en vivo. Si quieres ver calidad de producto, pide una cotización
            por WhatsApp.
          </p>
          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.6,
              color: "var(--muted)",
              padding: "16px 18px",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              marginBottom: "32px",
            }}
          >
            Cita: {SITE_CITATION}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/servicios/diseno-web" className="btn btn-launch" style={{ textDecoration: "none" }}>
              Diseño web
            </Link>
            <Link
              href="/por-que-nosotros"
              className="card card-hover"
              style={{ padding: "12px 18px", textDecoration: "none", fontWeight: 700 }}
            >
              Por qué nosotros
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
