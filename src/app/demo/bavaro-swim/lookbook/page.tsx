"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useBavaroCart } from "../context";
import { swimProducts } from "../page";

export default function BavaroLookbookPage() {
  const { addToCart } = useBavaroCart();
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const lookbookShots = [
    {
      title: "Atardecer en Cap Cana Marina",
      location: "Cap Cana · Marina Resort",
      outfit: swimProducts[0], // Bikini Gold
      img: swimProducts[0].img
    },
    {
      title: "Paseo Náutico en Catamarán",
      location: "Bávaro Beach",
      outfit: swimProducts[1], // Camisa Lino
      img: swimProducts[1].img
    },
    {
      title: "Cena al Atardecer en Playa Blanca",
      location: "Punta Cana Resort & Club",
      outfit: swimProducts[2], // Vestido Terrenas
      img: swimProducts[2].img
    },
    {
      title: "Sesión Sculpt en la Piscina",
      location: "Villas de Cap Cana",
      outfit: swimProducts[3], // Enterizo Sculpt
      img: swimProducts[3].img
    }
  ];

  return (
    <div style={{ padding: "60px 32px 100px", maxWidth: "1280px", margin: "0 auto" }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <span style={{ fontSize: "11px", fontWeight: 800, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.12em" }}>
          Editorial Verano 2026
        </span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "40px", fontWeight: 900, color: "#18181B", marginTop: "6px" }}>
          Lookbook Shoppable
        </h1>
        <p style={{ fontSize: "15px", color: "#71717A", maxWidth: "560px", margin: "10px auto 0" }}>
          Haz clic en cualquier imagen editorial para comprar directamente las piezas del outfit.
        </p>
      </div>

      {/* Lookbook Gallery */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
        {lookbookShots.map((shot, idx) => (
          <div
            key={idx}
            onClick={() => setActiveModal(idx)}
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              height: "450px",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              border: "1px solid #E4E4E7"
            }}
          >
            <img src={shot.img} alt={shot.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            
            {/* Overlay Banner */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "28px",
              color: "#FAF7F2"
            }}>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#D4AF37", textTransform: "uppercase" }}>
                📍 {shot.location}
              </div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 900, margin: "4px 0 10px 0" }}>
                {shot.title}
              </h3>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#D4AF37", color: "#18181B", padding: "8px 16px", borderRadius: "9999px", fontSize: "12px", fontWeight: 900, width: "fit-content" }}>
                🛒 Comprar este Outfit →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shoppable Modal Popup */}
      {activeModal !== null && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div onClick={() => setActiveModal(null)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} />
          
          <div style={{ position: "relative", background: "#FFFFFF", borderRadius: "24px", overflow: "hidden", maxWidth: "600px", width: "100%", zIndex: 1, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
            <div style={{ height: "260px", overflow: "hidden", position: "relative" }}>
              <img src={lookbookShots[activeModal].img} alt="Lookbook outfit" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <button onClick={() => setActiveModal(null)} style={{ position: "absolute", top: "16px", right: "16px", background: "#18181B", color: "#FFF", border: "none", width: "32px", height: "32px", borderRadius: "50%", cursor: "pointer", fontWeight: 900 }}>✕</button>
            </div>

            <div style={{ padding: "28px" }}>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#D4AF37", textTransform: "uppercase" }}>
                Outfit Destacado
              </div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 900, color: "#18181B", margin: "4px 0 8px 0" }}>
                {lookbookShots[activeModal].outfit.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#71717A", margin: "0 0 16px 0", lineHeight: "1.5" }}>
                {lookbookShots[activeModal].outfit.desc}
              </p>

              <button
                onClick={() => {
                  addToCart(lookbookShots[activeModal].outfit, lookbookShots[activeModal].outfit.sizes[0], lookbookShots[activeModal].outfit.colors[0]);
                  setActiveModal(null);
                }}
                style={{
                  width: "100%",
                  background: "#18181B",
                  color: "#FAF7F2",
                  border: "none",
                  padding: "14px",
                  borderRadius: "9999px",
                  fontSize: "13.5px",
                  fontWeight: 900,
                  cursor: "pointer"
                }}
              >
                Agregar Outfit Completo a la Bolsa →
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
