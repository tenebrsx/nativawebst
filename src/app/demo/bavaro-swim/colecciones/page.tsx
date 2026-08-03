"use client";

import React from "react";
import Link from "next/link";
import { swimProducts } from "../page";

export default function BavaroColeccionesPage() {
  const collections = [
    {
      title: "Colección Resort 2026: Bikinis & Enterizos",
      desc: "Diseños esculpidos en telas italianas con protección UV50+ y herrajes bañados en oro 18k.",
      badge: "Edición Verano",
      img: swimProducts[0].img,
      href: "/demo/bavaro-swim/tienda"
    },
    {
      title: "Lino Cap Cana: Camisas & Pantalones",
      desc: "Piezas elaboradas en 100% lino fresco de hilado italiano para atardeceres y paseos en yate.",
      badge: "100% Lino Italiano",
      img: swimProducts[1].img,
      href: "/demo/bavaro-swim/tienda"
    },
    {
      title: "Vestidos Resort: Seda & Lino Terrenas",
      desc: "Siluetas fluidas con escotes profundos y caídas elegantes creadas para cenas náuticas.",
      badge: "Alta Costura Resort",
      img: swimProducts[2].img,
      href: "/demo/bavaro-swim/tienda"
    },
    {
      title: "Accesorios de la Costa: Sombreros & Macramé",
      desc: "Sombreros tejidos en palmito dominicano y bolsos en macramé con asas de cuero auténtico.",
      badge: "Artesanal Dominicano",
      img: swimProducts[3].img,
      href: "/demo/bavaro-swim/tienda"
    }
  ];

  return (
    <div style={{ padding: "60px 32px 100px", maxWidth: "1280px", margin: "0 auto" }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <span style={{ fontSize: "11px", fontWeight: 800, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.12em" }}>
          Curaduría de Verano
        </span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "40px", fontWeight: 900, color: "#18181B", marginTop: "6px" }}>
          Colecciones Exclusivas
        </h1>
        <p style={{ fontSize: "15px", color: "#71717A", maxWidth: "560px", margin: "10px auto 0" }}>
          Cada colección encarna el lujo relajado del Caribe dominicano con acabados artesanales y telas de primera calidad.
        </p>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
        {collections.map((col, idx) => (
          <div key={idx} style={{ background: "#FFFFFF", borderRadius: "20px", overflow: "hidden", border: "1px solid #E4E4E7", boxShadow: "0 6px 24px rgba(0,0,0,0.04)" }}>
            <div style={{ height: "300px", overflow: "hidden", position: "relative" }}>
              <img src={col.img} alt={col.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", top: "16px", left: "16px", background: "#18181B", color: "#FAF7F2", padding: "4px 12px", borderRadius: "9999px", fontSize: "11px", fontWeight: 800 }}>
                {col.badge}
              </div>
            </div>
            <div style={{ padding: "32px" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 900, color: "#18181B", margin: "0 0 10px 0" }}>
                {col.title}
              </h2>
              <p style={{ fontSize: "14px", color: "#71717A", lineHeight: "1.6", margin: "0 0 20px 0" }}>
                {col.desc}
              </p>
              <Link
                href={col.href}
                style={{
                  background: "#18181B",
                  color: "#FAF7F2",
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: 900,
                  display: "inline-block"
                }}
              >
                Ver Colección →
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
