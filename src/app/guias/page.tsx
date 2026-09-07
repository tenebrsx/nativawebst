import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { GUIDE_LIST } from "@/lib/guides-content";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Guías: estudio web, SEO local y WhatsApp en RD",
  description:
    "Guías prácticas de Nativa: cómo elegir estudio web en Santo Domingo, SEO local en Maps, WhatsApp vs formulario, y qué incluye un sitio profesional en RD.",
  path: "/guias",
});

export default function GuiasIndexPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <SiteNav />
      <section style={{ padding: "72px 0 80px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <div className="section-label">Guías</div>
          <h1 className="section-title" style={{ marginBottom: "16px" }}>
            Guías para negocios en República Dominicana
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "36px" }}>
            Cuatro pilares, no un blog diario. Calidad sobre volumen.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            {GUIDE_LIST.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={guide.path}
                  className="card card-hover"
                  style={{ display: "block", padding: "22px", textDecoration: "none" }}
                >
                  <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, marginBottom: "6px" }}>{guide.h1}</div>
                  <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{guide.lede}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
