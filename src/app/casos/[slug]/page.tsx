// ⚠️ NOT PUBLISHED: noindex, not in sitemap/llms/nav until WRITTEN client OK. See src/lib/casos-content.ts.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { CASOS, CASO_SLUGS, type CasoSlug } from "@/lib/casos-content";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return CASO_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const caso = CASOS[slug as CasoSlug];
  if (!caso) return {};
  return pageMetadata({
    title: `${caso.name}: ${caso.kind}`,
    description: caso.summary,
    path: `/casos/${caso.slug}`,
    noindex: true,
  });
}

export default async function CasoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caso = CASOS[slug as CasoSlug];
  if (!caso) notFound();
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <SiteNav />
      <main id="main" lang="es">
        <section style={{ padding: "72px 0 80px" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px" }}>
              <Link href="/" style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>Inicio</Link>
              {" / "}
              <Link href="/casos" style={{ color: "var(--coral-blue)", textDecoration: "none", fontWeight: 700 }}>Casos</Link>
              {" / "}
              {caso.name}
            </p>
            <div className="section-label">{caso.kind}</div>
            <h1 className="section-title" style={{ marginBottom: "20px" }}>{caso.name}</h1>
            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "28px" }}>{caso.summary}</p>
            <div className="card" style={{ padding: "24px", marginBottom: "28px" }}>
              <h2 style={{ fontFamily: "var(--font-head)", fontSize: "18px", fontWeight: 800, marginBottom: "12px" }}>Qué incluye la página web</h2>
              <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {caso.built.map((b) => (
                  <li key={b} style={{ fontSize: "15px", lineHeight: 1.5 }}>{b}</li>
                ))}
              </ul>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={caso.url} target="_blank" rel="noopener noreferrer" className="btn btn-launch">
                Ver la página en vivo
              </a>
              {caso.related.map((r) => (
                <Link key={r.href} href={r.href} className="btn btn-outline">{r.label}</Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
