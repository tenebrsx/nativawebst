import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, pageMetadata, SITE_URL } from "@/lib/site";
import { orgId, websiteId } from "@/lib/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Casos de clientes",
  description:
    "Casos de clientes de Nativa Web Studio. Somos un estudio nuevo: publicaremos aquí solo proyectos entregados con resultados verificables. Mientras tanto, mira nuestros conceptos de demo.",
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
              name: "Casos de clientes | Nativa Web Studio",
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
      <main id="main">
      <section style={{ padding: "72px 0 80px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <div className="section-label">Casos</div>
          <h1 className="section-title" style={{ marginBottom: "20px" }}>
            Casos de clientes
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "24px" }}>
            Somos un estudio nuevo y todavía no tenemos casos publicados. No vamos a inventarlos: cuando entreguemos
            proyectos con resultados medibles, los publicaremos aquí con el permiso de cada cliente.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "28px" }}>
            Mientras tanto, las plantillas en{" "}
            <Link href="/portfolio" style={{ color: "var(--coral-blue)", fontWeight: 700 }}>
              /portfolio
            </Link>{" "}
            son conceptos de demo por industria, no clientes. Si quieres ver cómo quedaría tu sitio, pide tu demo
            gratis: te lo armamos en 48 horas.
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
      </main>
      <SiteFooter />
    </div>
  );
}
