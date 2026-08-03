"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useGeo } from "@/lib/geo-context";
import { useBavaroCart, SwimProduct } from "./context";

// 100% Reliable SVG Data URIs for products
export const swimProducts: SwimProduct[] = [
  {
    id: "bikini-bavaro-gold",
    title: "Bikini Bávaro Gold Top & Bottom",
    category: "bikinis",
    desc: "Edición limitada con herrajes dorados bañados en oro 18k y tela de secado rápido con UV50+.",
    priceDOP: 5200,
    priceUSD: 88,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Oro Bávaro", "Blanco Marfil", "Negro Azabache"],
    badge: "Edición Limitada",
    rating: "5.0 ★★★★★ (140+ reseñas)",
    img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="900" viewBox="0 0 800 900"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23FEF3C7"/><stop offset="50%" stop-color="%23FDE68A"/><stop offset="100%" stop-color="%23D4AF37"/></linearGradient></defs><rect width="800" height="900" fill="url(%23bg)"/><path d="M 280,240 Q 320,180 400,240 Q 480,180 520,240 Q 440,360 400,340 Q 360,360 280,240 Z" fill="%23D4AF37" stroke="%23B45309" stroke-width="4"/><path d="M 300,520 Q 400,460 500,520 Q 440,660 400,640 Q 360,660 300,520 Z" fill="%23D4AF37" stroke="%23B45309" stroke-width="4"/><rect x="240" y="720" width="320" height="100" rx="16" fill="%23FFF" stroke="%23D4AF37" stroke-width="4"/><text x="400" y="760" font-family="serif" font-size="22" font-weight="900" fill="%2318181B" text-anchor="middle">BIKINI BÁVARO GOLD</text><text x="400" y="790" font-family="sans-serif" font-size="14" font-weight="800" fill="%23D4AF37" text-anchor="middle">Oro 18k · Edición Limitada</text></svg>`
  },
  {
    id: "camisa-lino-capcana",
    title: "Camisa de Lino Blanco Cap Cana",
    category: "lino",
    desc: "100% lino italiano ultra suave, corte holgado resort ideal para la playa y cenas náuticas.",
    priceDOP: 6500,
    priceUSD: 110,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco Marfil", "Azul Costa", "Verde Esmeralda"],
    badge: "100% Lino Italiano",
    rating: "4.9 ★★★★★ (210+ reseñas)",
    img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="900" viewBox="0 0 800 900"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23FAF7F2"/><stop offset="100%" stop-color="%23E4E4E7"/></linearGradient></defs><rect width="800" height="900" fill="url(%23bg)"/><path d="M 280,240 L 360,200 L 440,200 L 520,240 L 480,620 L 320,620 Z" fill="%23FFFFFF" stroke="%2318181B" stroke-width="4"/><line x1="400" y1="200" x2="400" y2="620" stroke="%23D4D4D8" stroke-width="3"/><rect x="240" y="720" width="320" height="100" rx="16" fill="%23FFF" stroke="%2318181B" stroke-width="4"/><text x="400" y="760" font-family="serif" font-size="20" font-weight="900" fill="%2318181B" text-anchor="middle">CAMISA LINO CAP CANA</text><text x="400" y="790" font-family="sans-serif" font-size="13" font-weight="800" fill="%230F766E" text-anchor="middle">100% Lino Italiano · Punta Cana</text></svg>`
  },
  {
    id: "vestido-seda-terrenas",
    title: "Vestido Resort de Seda & Lino Terrenas",
    category: "vestidos",
    desc: "Caída fluida con espalda descubierta y escote pronunciado. La pieza insignia del verano 2026.",
    priceDOP: 8900,
    priceUSD: 150,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Verde Esmeralda", "Terracotta", "Marfil"],
    badge: "Pieza Insignia",
    rating: "5.0 ★★★★★ (95+ reseñas)",
    img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="900" viewBox="0 0 800 900"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23CCFBF1"/><stop offset="50%" stop-color="%230F766E"/><stop offset="100%" stop-color="%23115E59"/></linearGradient></defs><rect width="800" height="900" fill="url(%23bg)"/><path d="M 340,200 Q 400,260 460,200 L 520,680 L 280,680 Z" fill="%230F766E" stroke="%2399F6E4" stroke-width="4"/><rect x="240" y="740" width="320" height="100" rx="16" fill="%23FFF" stroke="%230F766E" stroke-width="4"/><text x="400" y="780" font-family="serif" font-size="20" font-weight="900" fill="%2318181B" text-anchor="middle">VESTIDO SEDA TERRENAS</text><text x="400" y="810" font-family="sans-serif" font-size="13" font-weight="800" fill="%230F766E" text-anchor="middle">Resort Elegante · Terrenas</text></svg>`
  },
  {
    id: "enterizo-punta-cana",
    title: "Traje de Baño Enterizo Punta Cana Sculpt",
    category: "bikinis",
    desc: "Diseño moldeador de silueta con corte asimétrico y soporte interno invisibles.",
    priceDOP: 5800,
    priceUSD: 98,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro Azabache", "Verde Esmeralda", "Oro"],
    badge: "Efecto Moldeador",
    rating: "4.9 ★★★★★ (180+ reseñas)",
    img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="900" viewBox="0 0 800 900"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%2327272A"/><stop offset="100%" stop-color="%2309090B"/></linearGradient></defs><rect width="800" height="900" fill="url(%23bg)"/><path d="M 320,220 Q 400,280 480,220 Q 440,420 460,620 L 340,620 Q 360,420 320,220 Z" fill="%2318181B" stroke="%23D4AF37" stroke-width="4"/><rect x="240" y="740" width="320" height="100" rx="16" fill="%23FFF" stroke="%2318181B" stroke-width="4"/><text x="400" y="780" font-family="serif" font-size="19" font-weight="900" fill="%2318181B" text-anchor="middle">ENTERIZO PUNTA CANA</text><text x="400" y="810" font-family="sans-serif" font-size="13" font-weight="800" fill="%23D4AF37" text-anchor="middle">Efecto Sculpt · UV50+</text></svg>`
  }
];

export default function BavaroSwimHomePage() {
  const { fmt } = useGeo();
  const { addToCart } = useBavaroCart();
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  return (
    <div>
      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        background: "linear-gradient(135deg, #18181B 0%, #09090B 100%)",
        color: "#FAF7F2",
        padding: "100px 32px 80px",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <span style={{ background: "rgba(212, 175, 55, 0.2)", color: "#D4AF37", padding: "6px 14px", borderRadius: "9999px", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Colección Verano 2026
            </span>

            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 900, lineHeight: "1.1", margin: "16px 0 20px 0", color: "#FAF7F2" }}>
              Elegancia Costera de Punta Cana &amp; Cap Cana
            </h1>

            <p style={{ fontSize: "16px", color: "#D4D4D8", lineHeight: "1.6", margin: "0 0 32px 0", maxWidth: "520px" }}>
              Trajes de baño de secado rápido con protección UV50+, camisas de lino 100% italiano, y accesorios de playa artesanales diseñados en la costa este dominicana.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/demo/bavaro-swim/tienda"
                style={{
                  background: "#D4AF37",
                  color: "#18181B",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: 900,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 6px 20px rgba(212, 175, 55, 0.3)"
                }}
              >
                Explorar Tienda Completa →
              </Link>
              <Link
                href="/demo/bavaro-swim/colecciones"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#FAF7F2",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  textDecoration: "none",
                  padding: "14px 24px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: 800
                }}
              >
                Ver Colecciones 2026
              </Link>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div style={{ borderRadius: "24px", overflow: "hidden", border: "4px solid rgba(212, 175, 55, 0.4)", boxShadow: "0 24px 48px rgba(0,0,0,0.5)" }}>
            <img
              src={swimProducts[0].img}
              alt="Bávaro Swim Collection"
              style={{ width: "100%", height: "480px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ─── FEATURED COLLECTIONS GRID ──────────────────────────── */}
      <section style={{ padding: "80px 32px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Lujo de Playa Dominicano
          </span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 900, color: "#18181B", marginTop: "6px" }}>
            Colecciones Destacadas
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
          {[
            {
              title: "Trajes de Baño UV50+",
              desc: "Bikinis y enterizos esculpidos con herrajes bañados en oro.",
              link: "/demo/bavaro-swim/colecciones",
              img: swimProducts[0].img
            },
            {
              title: "Lino Cap Cana",
              desc: "Camisas y pantalones 100% lino italiano ultra fresco.",
              link: "/demo/bavaro-swim/colecciones",
              img: swimProducts[1].img
            },
            {
              title: "Vestidos Resort",
              desc: "Seda y lino fluido para cenas náuticas y atardeceres.",
              link: "/demo/bavaro-swim/colecciones",
              img: swimProducts[2].img
            }
          ].map((col, idx) => (
            <Link
              key={idx}
              href={col.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #E4E4E7",
                boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
                transition: "transform 0.2s ease"
              }}>
                <div style={{ height: "260px", overflow: "hidden" }}>
                  <img src={col.img} alt={col.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 900, color: "#18181B", margin: 0 }}>
                    {col.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#71717A", margin: "8px 0 16px 0", lineHeight: "1.5" }}>
                    {col.desc}
                  </p>
                  <span style={{ fontSize: "12px", fontWeight: 900, color: "#D4AF37" }}>
                    Explorar Colección →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── BEST SELLERS CATALOG SECTION ───────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 32px", borderTop: "1px solid #E4E4E7" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#0F766E", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Los Favoritos en Punta Cana
              </span>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 900, color: "#18181B", marginTop: "4px" }}>
                Más Vendidos de la Temporada
              </h2>
            </div>
            <Link href="/demo/bavaro-swim/tienda" style={{ fontSize: "13px", fontWeight: 900, color: "#D4AF37", textDecoration: "none" }}>
              Ver Todos los Productos (12) →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
            {swimProducts.map(product => {
              const selectedSize = selectedSizes[product.id] || product.sizes[0];
              const selectedColor = selectedColors[product.id] || product.colors[0];

              return (
                <div key={product.id} style={{ background: "#FAF7F2", borderRadius: "16px", overflow: "hidden", border: "1px solid #E4E4E7", display: "flex", flexDirection: "column" }}>
                  <div style={{ height: "280px", overflow: "hidden", position: "relative" }}>
                    <img src={product.img} alt={product.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: "12px", left: "12px", background: "#18181B", color: "#FAF7F2", padding: "4px 10px", borderRadius: "9999px", fontSize: "10px", fontWeight: 800 }}>
                      {product.badge}
                    </div>
                  </div>

                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <div style={{ fontSize: "11px", color: "#71717A", fontWeight: 700 }}>{product.rating}</div>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", fontWeight: 900, color: "#18181B", margin: "4px 0 6px 0", lineHeight: "1.3" }}>
                      {product.title}
                    </h3>
                    <div style={{ fontSize: "15px", fontWeight: 900, color: "#D4AF37", marginBottom: "14px" }}>
                      {fmt(product.priceUSD)}
                    </div>

                    {/* Size Selector */}
                    <div style={{ marginBottom: "12px" }}>
                      <div style={{ fontSize: "10px", fontWeight: 800, color: "#71717A", textTransform: "uppercase", marginBottom: "4px" }}>
                        Talla:
                      </div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        {product.sizes.map(sz => (
                          <button
                            key={sz}
                            onClick={() => setSelectedSizes(prev => ({ ...prev, [product.id]: sz }))}
                            style={{
                              background: selectedSize === sz ? "#18181B" : "#FFF",
                              color: selectedSize === sz ? "#FFF" : "#18181B",
                              border: "1px solid #D4D4D8",
                              borderRadius: "6px",
                              padding: "4px 8px",
                              fontSize: "11px",
                              fontWeight: 800,
                              cursor: "pointer"
                            }}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Selector */}
                    <div style={{ marginBottom: "16px" }}>
                      <div style={{ fontSize: "10px", fontWeight: 800, color: "#71717A", textTransform: "uppercase", marginBottom: "4px" }}>
                        Color:
                      </div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        {product.colors.map(col => (
                          <button
                            key={col}
                            onClick={() => setSelectedColors(prev => ({ ...prev, [product.id]: col }))}
                            style={{
                              background: selectedColor === col ? "#D4AF37" : "#FFF",
                              color: selectedColor === col ? "#FFF" : "#18181B",
                              border: "1px solid #D4D4D8",
                              borderRadius: "6px",
                              padding: "4px 8px",
                              fontSize: "10px",
                              fontWeight: 800,
                              cursor: "pointer"
                            }}
                          >
                            {col}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(product, selectedSize, selectedColor)}
                      style={{
                        marginTop: "auto",
                        background: "#18181B",
                        color: "#FAF7F2",
                        border: "none",
                        padding: "12px",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: 900,
                        cursor: "pointer"
                      }}
                    >
                      Agregar a la Bolsa →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── BOUTIQUE LOCATIONS ─────────────────────────────────── */}
      <section style={{ padding: "80px 32px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#0F766E", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Visítanos en República Dominicana
          </span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 900, color: "#18181B", marginTop: "4px" }}>
            Nuestras Boutiques Físicas
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {[
            { name: "Punta Cana Resort & Club", loc: "Galerías Puntacana, Local 12", hours: "Lun - Dom: 9:00 AM - 8:00 PM" },
            { name: "Marina Cap Cana", loc: "Paseo del Puerto, Cap Cana", hours: "Lun - Dom: 10:00 AM - 9:00 PM" },
            { name: "BlueMall Santo Domingo", loc: "Nivel 2, Santo Domingo", hours: "Lun - Sáb: 10:00 AM - 9:00 PM" }
          ].map((b, idx) => (
            <div key={idx} style={{ background: "#FFFFFF", padding: "28px", borderRadius: "16px", border: "1px solid #E4E4E7", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#D4AF37", textTransform: "uppercase" }}>Boutique Exclusiva</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 900, color: "#18181B", margin: "6px 0 8px 0" }}>{b.name}</h3>
              <p style={{ fontSize: "13px", color: "#71717A", margin: "0 0 12px 0" }}>📍 {b.loc}</p>
              <div style={{ fontSize: "12px", color: "#0F766E", fontWeight: 700 }}>🕒 {b.hours}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
