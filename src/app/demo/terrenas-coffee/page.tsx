"use client";

import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";

export default function TerrenasCoffeeDemo() {
  const [cartCount, setCartCount] = useState(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [purchased, setPurchased] = useState(false);

  const products = [
    { id: 1, name: "Café Orgánico Terrenas — Tueste Medio", notes: "Notas de Chocolate Oscuro & Avellana", price: "RD$ 650", weight: "500g / 1.1 lbs" },
    { id: 2, name: "Reserva Especial Jarabacoa — Grano Entero", notes: "Notas de Caramelo & Frutos Rojos", price: "RD$ 890", weight: "500g / 1.1 lbs" },
    { id: 3, name: "Edición Limitada Barahona — Tueste Oscuro", notes: "Cuerpo Intenso & Toque de Especies", price: "RD$ 750", weight: "500g / 1.1 lbs" }
  ];

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div style={{ background: "#FAF7F2", color: "#2B1E16", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Sticky Altamar Demo Banner */}
      <DemoTopBar
        templateName="Plantilla Café Artesanal & Tienda Gourmet"
        templateCategory="Tiendas & Alimentos"
        whatsappMessage="Hola Altamar, vi el demo de Café Terrenas (#terrenas-coffee) y quiero cotizar una tienda online e-commerce como esta."
      />

      {/* ─── COFFEE STORE HEADER ───────────────────────────────── */}
      <header style={{ background: "#2B1E16", color: "#FAF7F2", padding: "18px 0", position: "sticky", top: "42px", zIndex: 50 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "24px" }}>☕</span>
            <div>
              <div style={{ fontWeight: 900, fontSize: "18px", letterSpacing: "0.05em" }}>CAFÉ TERRENAS</div>
              <div style={{ fontSize: "9px", color: "#D97706", fontWeight: 800, letterSpacing: "0.15em" }}>ORIGEN DOMINICANO 100% ORGÁNICO</div>
            </div>
          </div>

          <button
            onClick={() => setCheckoutOpen(true)}
            style={{ background: "#D97706", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "20px", fontWeight: 800, fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}
          >
            🛒 Carrito ({cartCount})
          </button>
        </div>
      </header>

      {/* ─── STORE HERO ─────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #3D2B1F 0%, #2B1E16 100%)", color: "#fff", padding: "70px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ color: "#D97706", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            DEL CAFETAL A TU TAZA EN 24 HORAS
          </span>
          <h1 style={{ fontFamily: "serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, margin: "16px 0 12px" }}>
            Café de Origen Dominicano Tostado a Mano
          </h1>
          <p style={{ fontSize: "15px", color: "#D1D5DB", lineHeight: "1.6", margin: "0 0 28px" }}>
            Cultivado en las montañas de Samaná y Jarabacoa. Envíos exprés a todo el país y a Estados Unidos por DHL.
          </p>
        </div>
      </section>

      {/* ─── PRODUCT CATALOG ───────────────────────────────────── */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#D97706", textTransform: "uppercase" }}>Catálogo Principal</span>
          <h2 style={{ fontFamily: "serif", fontSize: "30px", margin: "4px 0" }}>Selección de Granos Especiales</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
          {products.map(p => (
            <div key={p.id} style={{ background: "#ffffff", border: "1px solid #E5E7EB", borderRadius: "16px", overflow: "hidden", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ background: "#FAF7F2", borderRadius: "12px", height: "140px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "54px", marginBottom: "16px" }}>
                  ☕
                </div>
                <div style={{ fontSize: "11px", color: "#D97706", fontWeight: 800 }}>{p.weight}</div>
                <h3 style={{ fontFamily: "serif", fontSize: "18px", margin: "4px 0 8px" }}>{p.name}</h3>
                <p style={{ fontSize: "12.5px", color: "#6B7280", margin: "0 0 16px" }}>{p.notes}</p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #F3F4F6", paddingTop: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: 900, color: "#2B1E16" }}>{p.price}</span>
                <button
                  onClick={addToCart}
                  style={{ background: "#2B1E16", color: "#fff", border: "none", padding: "8px 14px", borderRadius: "8px", fontWeight: 800, fontSize: "12px", cursor: "pointer" }}
                >
                  + Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STRIPE CHECKOUT MODAL SIMULATOR ───────────────────── */}
      {checkoutOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", zIndex: 9000 }}>
          <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", maxWidth: "460px", width: "100%", color: "#0F172A" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>Checkout Seguro (Stripe / WhatsApp)</h3>
              <span style={{ fontSize: "11px", background: "#F1F5F9", padding: "2px 6px", borderRadius: "4px", fontWeight: 700 }}>🔒 Encriptado 256-bit</span>
            </div>

            {purchased ? (
              <div style={{ background: "#F0FDF4", border: "1px solid #86EFAC", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
                <div style={{ fontSize: "24px" }}>📦</div>
                <h4 style={{ color: "#166534", fontWeight: 800, margin: "8px 0" }}>¡Orden Procesada!</h4>
                <p style={{ fontSize: "12px", color: "#15803D" }}>Recibirás tu número de rastreo de envío por correo y WhatsApp en 1 hora.</p>
                <button onClick={() => { setPurchased(false); setCheckoutOpen(false); setCartCount(0); }} style={{ background: "#166534", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: 800, fontSize: "12px", marginTop: "12px", cursor: "pointer" }}>
                  Entendido
                </button>
              </div>
            ) : (
              <div>
                <p style={{ fontSize: "13px", color: "#64748B", marginBottom: "16px" }}>
                  Items en carrito: <strong>{cartCount} productos</strong>
                </p>
                <button
                  onClick={() => setPurchased(true)}
                  style={{ width: "100%", background: "#6366F1", color: "#fff", padding: "14px", border: "none", borderRadius: "8px", fontWeight: 900, fontSize: "14px", cursor: "pointer", marginBottom: "8px" }}
                >
                  Pagar con Tarjeta (Stripe Checkout) 💳
                </button>
                <button
                  onClick={() => setPurchased(true)}
                  style={{ width: "100%", background: "#25D366", color: "#fff", padding: "14px", border: "none", borderRadius: "8px", fontWeight: 900, fontSize: "14px", cursor: "pointer" }}
                >
                  Completar por WhatsApp 💬
                </button>
                <button
                  onClick={() => setCheckoutOpen(false)}
                  style={{ width: "100%", background: "transparent", color: "#64748B", border: "none", padding: "10px", fontSize: "12px", fontWeight: 700, marginTop: "8px", cursor: "pointer" }}
                >
                  Seguir Comprando
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <footer style={{ background: "#2B1E16", color: "#9CA3AF", padding: "40px 20px", textAlign: "center", fontSize: "12px" }}>
        Café Orgánico Terrenas · Las Terrenas, Samaná, República Dominicana<br/>
        <span style={{ color: "#D97706" }}>Demo Template Powered by Altamar Web Studio</span>
      </footer>

    </div>
  );
}
