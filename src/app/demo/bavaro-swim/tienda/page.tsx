"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useGeo } from "@/lib/geo-context";
import { useBavaroCart, SwimProduct } from "../context";
import { swimProducts } from "../page";

// Additional catalog items to reach 12 full luxury products
const fullCatalog: SwimProduct[] = [
  ...swimProducts,
  {
    id: "sombrero-palmito-bavaro",
    title: "Sombrero de Ala Ancha Tejido a Mano",
    category: "accesorios",
    desc: "Tejido artesanalmente en fibra de palmito dominicano con cinta de seda negra.",
    priceDOP: 3900,
    priceUSD: 66,
    sizes: ["Única"],
    colors: ["Natural", "Marfil"],
    badge: "Hecho a Mano",
    rating: "4.8 ★★★★★ (110+ reseñas)",
    img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="900" viewBox="0 0 800 900"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23FEF08A"/><stop offset="100%" stop-color="%23CA8A04"/></linearGradient></defs><rect width="800" height="900" fill="url(%23bg)"/><ellipse cx="400" cy="450" rx="300" ry="120" fill="%23FEF08A" stroke="%23A16207" stroke-width="6"/><path d="M 280,450 C 280,250 520,250 520,450 Z" fill="%23FDE047" stroke="%23A16207" stroke-width="6"/><rect x="240" y="740" width="320" height="100" rx="16" fill="%23FFF" stroke="%23A16207" stroke-width="4"/><text x="400" y="780" font-family="serif" font-size="19" font-weight="900" fill="%2318181B" text-anchor="middle">SOMBRERO PALMITO</text><text x="400" y="810" font-family="sans-serif" font-size="13" font-weight="800" fill="%23CA8A04" text-anchor="middle">Tejido a Mano · Bávaro</text></svg>`
  },
  {
    id: "pantalon-lino-bavaro",
    title: "Pantalón de Lino Marfil Relaxed Fit",
    category: "lino",
    desc: "Corte recto fluido con pretina elástica y cordón de lino. El básico esencial del resort.",
    priceDOP: 7200,
    priceUSD: 122,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Marfil", "Negro", "Verde Esmeralda"],
    badge: "100% Lino",
    rating: "4.9 ★★★★★ (165+ reseñas)",
    img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="900" viewBox="0 0 800 900"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23FAF7F2"/><stop offset="100%" stop-color="%23D4D4D8"/></linearGradient></defs><rect width="800" height="900" fill="url(%23bg)"/><path d="M 300,200 L 500,200 L 480,680 L 410,680 L 400,320 L 390,680 L 320,680 Z" fill="%23FFFFFF" stroke="%2318181B" stroke-width="4"/><rect x="240" y="740" width="320" height="100" rx="16" fill="%23FFF" stroke="%2318181B" stroke-width="4"/><text x="400" y="780" font-family="serif" font-size="19" font-weight="900" fill="%2318181B" text-anchor="middle">PANTALÓN LINO MARFIL</text><text x="400" y="810" font-family="sans-serif" font-size="13" font-weight="800" fill="%2371717A" text-anchor="middle">Relaxed Fit · Lino Italiano</text></svg>`
  },
  {
    id: "bolso-macrame-playero",
    title: "Bolso Playero de Macramé & Cuero",
    category: "accesorios",
    desc: "Tejido en algodón orgánico con asas de cuero dominicano grabado.",
    priceDOP: 4800,
    priceUSD: 82,
    sizes: ["Única"],
    colors: ["Natural", "Negro"],
    badge: "Cuero Dominicano",
    rating: "4.9 ★★★★★ (130+ reseñas)",
    img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="900" viewBox="0 0 800 900"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23FEF3C7"/><stop offset="100%" stop-color="%23D97706"/></linearGradient></defs><rect width="800" height="900" fill="url(%23bg)"/><path d="M 340,300 C 340,180 460,180 460,300" fill="none" stroke="%2378350F" stroke-width="12"/><rect x="260" y="300" width="280" height="320" rx="20" fill="%23FFF" stroke="%2378350F" stroke-width="6"/><rect x="240" y="740" width="320" height="100" rx="16" fill="%23FFF" stroke="%2378350F" stroke-width="4"/><text x="400" y="780" font-family="serif" font-size="19" font-weight="900" fill="%2318181B" text-anchor="middle">BOLSO MACRAMÉ</text><text x="400" y="810" font-family="sans-serif" font-size="13" font-weight="800" fill="%23D97706" text-anchor="middle">Algodón &amp; Cuero Dominicano</text></svg>`
  },
  {
    id: "gafas-costa-azul",
    title: "Gafas de Sol Costa Azul UV400 Polarizadas",
    category: "accesorios",
    desc: "Montura artesanal en acetato con cristales polarizados de alta definición.",
    priceDOP: 4200,
    priceUSD: 70,
    sizes: ["Única"],
    colors: ["Carey", "Negro"],
    badge: "UV400 Polarizadas",
    rating: "5.0 ★★★★★ (85+ reseñas)",
    img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="900" viewBox="0 0 800 900"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23BAE6FD"/><stop offset="100%" stop-color="%230284C7"/></linearGradient></defs><rect width="800" height="900" fill="url(%23bg)"/><circle cx="310" cy="400" r="70" fill="%230F172A" stroke="%23D4AF37" stroke-width="8"/><circle cx="490" cy="400" r="70" fill="%230F172A" stroke="%23D4AF37" stroke-width="8"/><line x1="380" y1="400" x2="420" y2="400" stroke="%23D4AF37" stroke-width="8"/><rect x="240" y="740" width="320" height="100" rx="16" fill="%23FFF" stroke="%230284C7" stroke-width="4"/><text x="400" y="780" font-family="serif" font-size="19" font-weight="900" fill="%2318181B" text-anchor="middle">GAFAS COSTA AZUL</text><text x="400" y="810" font-family="sans-serif" font-size="13" font-weight="800" fill="%230284C7" text-anchor="middle">UV400 Polarizadas</text></svg>`
  }
];

export default function BavaroTiendaPage() {
  const { fmt } = useGeo();
  const { addToCart } = useBavaroCart();

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  const filteredProducts = activeCategory === "all"
    ? fullCatalog
    : fullCatalog.filter(p => p.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.priceUSD - b.priceUSD;
    if (sortBy === "price-high") return b.priceUSD - a.priceUSD;
    return 0; // popular
  });

  return (
    <div style={{ padding: "60px 32px 100px", maxWidth: "1280px", margin: "0 auto" }}>
      
      {/* Page Header */}
      <div style={{ borderBottom: "1px solid #E4E4E7", paddingBottom: "24px", marginBottom: "40px" }}>
        <div style={{ fontSize: "11px", fontWeight: 800, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Catálogo E-Commerce
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "38px", fontWeight: 900, color: "#18181B", margin: "4px 0 8px 0" }}>
          Tienda Completa Bávaro Swim
        </h1>
        <p style={{ fontSize: "15px", color: "#71717A", margin: 0 }}>
          Explora la colección completa de trajes de baño, lino Cap Cana y accesorios de resortwear.
        </p>
      </div>

      {/* Main Grid Layout (Filters + Catalog) */}
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "36px" }} className="store-grid-desktop">
        
        {/* Filter Sidebar */}
        <aside style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid #E4E4E7", height: "fit-content" }}>
          <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: 900, color: "#18181B", margin: "0 0 16px 0" }}>
            Filtrar Productos
          </h3>

          {/* Categories */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontSize: "11px", fontWeight: 800, color: "#71717A", textTransform: "uppercase", marginBottom: "10px" }}>
              Categorías
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                { key: "all", label: "Todos los Productos (8)" },
                { key: "bikinis", label: "Trajes de Baño (2)" },
                { key: "lino", label: "Lino Cap Cana (2)" },
                { key: "vestidos", label: "Vestidos Resort (1)" },
                { key: "accesorios", label: "Accesorios (3)" }
              ].map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  style={{
                    background: activeCategory === cat.key ? "#18181B" : "none",
                    color: activeCategory === cat.key ? "#FAF7F2" : "#18181B",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    textAlign: "left",
                    fontSize: "12.5px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 800, color: "#71717A", textTransform: "uppercase", marginBottom: "8px" }}>
              Ordenar por
            </div>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #D4D4D8",
                fontSize: "12px",
                fontWeight: 700,
                background: "#FFF",
                color: "#18181B"
              }}
            >
              <option value="popular">Más Vendidos</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
            </select>
          </div>
        </aside>

        {/* Products Grid */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#71717A" }}>
              Mostrando {sortedProducts.length} productos
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
            {sortedProducts.map(product => {
              const selectedSize = selectedSizes[product.id] || product.sizes[0];
              const selectedColor = selectedColors[product.id] || product.colors[0];

              return (
                <div key={product.id} style={{ background: "#FFFFFF", borderRadius: "16px", overflow: "hidden", border: "1px solid #E4E4E7", display: "flex", flexDirection: "column", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
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
                    <p style={{ fontSize: "12px", color: "#71717A", lineHeight: "1.4", margin: "0 0 12px 0" }}>
                      {product.desc}
                    </p>
                    <div style={{ fontSize: "15px", fontWeight: 900, color: "#D4AF37", marginBottom: "14px" }}>
                      {fmt(product.priceUSD)}
                    </div>

                    {/* Size Selector */}
                    <div style={{ marginBottom: "12px" }}>
                      <div style={{ fontSize: "10px", fontWeight: 800, color: "#71717A", textTransform: "uppercase", marginBottom: "4px" }}>
                        Talla:
                      </div>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
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
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
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

      </div>

    </div>
  );
}
