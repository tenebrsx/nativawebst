"use client";

import { useState } from "react";

export default function TerrenasCoffeeProduction() {
  const [cartCount, setCartCount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const products = [
    {
      id: "p1",
      name: "Café Terrenas · Reserva Cordillera Central",
      roast: "Tueste Medio · Notas de Cacao Dominicano & Miel",
      origin: "Jarabacoa & Constanza (1,400m de Altitud)",
      price: 650,
      weight: "500g (Grano Entero o Molido)",
      img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "p2",
      name: "Café Terrenas · Espresso Orgánico Barahona",
      roast: "Tueste Oscuro · Cuerpo Intenso & Notas de Avellana",
      origin: "Sierra de Bahoruco (1,200m de Altitud)",
      price: 720,
      weight: "500g (Grano Entero)",
      img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "p3",
      name: "Café Terrenas · Edición Especial Las Terrenas",
      roast: "Tueste Claro (Light Roast) · Notas Cítricas & Floral",
      origin: "Samaná High Altitude Estate",
      price: 850,
      weight: "500g (Edición Limitada)",
      img: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div style={{ background: "#1C1410", color: "#FAF7F2", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      
      {/* ─── TOP BAR ────────────────────────────────────────────── */}
      <div style={{ background: "#0F0B08", color: "#D97706", padding: "10px 24px", fontSize: "12px", borderBottom: "1px solid rgba(255,255,255,0.08)", textTransform: "uppercase", fontWeight: 800 }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>🚚 ENVÍO GRATIS A TODO SANTO DOMINGO & SANTIAGO EN COMPRAS MAYORES A RD$ 1,500</span>
          <span>☕ CAFÉ 100% ARÁBICA DE ORIGEN DOMINICANO</span>
        </div>
      </div>

      {/* ─── STORE HEADER ───────────────────────────────────────── */}
      <header style={{ background: "#1C1410", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "20px 0", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ background: "#D97706", color: "#FFF", width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "20px" }}>
              ☕
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: "20px", color: "#FAF7F2", letterSpacing: "0.04em" }}>CAFÉ TERRENAS</div>
              <div style={{ fontSize: "9.5px", color: "#D97706", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                ARTISANAL ROASTERS · SAMANÁ & SANTO DOMINGO
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "28px" }} className="nav-link-desktop">
            <a href="#products" style={{ textDecoration: "none", color: "#E5E7EB", fontSize: "14px", fontWeight: 700 }}>Nuestros Cafés</a>
            <a href="#origin" style={{ textDecoration: "none", color: "#E5E7EB", fontSize: "14px", fontWeight: 700 }}>Origen & Fincas</a>
            <a href="#subscription" style={{ textDecoration: "none", color: "#E5E7EB", fontSize: "14px", fontWeight: 700 }}>Suscripción Café</a>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            style={{ background: "#D97706", color: "#FFFFFF", border: "none", padding: "12px 24px", borderRadius: "8px", fontWeight: 900, fontSize: "14px", cursor: "pointer", boxShadow: "0 4px 16px rgba(217,119,6,0.3)" }}
          >
            🛒 Carrito ({cartCount})
          </button>
        </div>
      </header>

      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <section style={{ background: "radial-gradient(circle at top, #2B1E16 0%, #1C1410 80%)", padding: "100px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          <div>
            <span style={{ background: "rgba(217,119,6,0.15)", color: "#D97706", border: "1px solid rgba(217,119,6,0.3)", padding: "5px 14px", borderRadius: "20px", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              TOSTADO FRESCO CADA SEMANA EN SAMANÁ
            </span>
            <h1 style={{ fontSize: "clamp(36px, 4.8vw, 56px)", fontWeight: 900, color: "#FAF7F2", margin: "20px 0 20px", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
              El Auténtico Sabor del Café de Especialidad Dominicano
            </h1>
            <p style={{ fontSize: "16.5px", color: "#D1D5DB", lineHeight: "1.7", margin: "0 0 36px" }}>
              Granos de café Arábica seleccionados a mano en las alturas de la Cordillera Central y la Sierra de Bahoruco. Tostado artesanalmente en pequeños lotes para preservar notas aromáticas únicas.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#products"
                style={{ background: "#D97706", color: "#FFFFFF", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px", boxShadow: "0 4px 20px rgba(217,119,6,0.3)" }}
              >
                Comprar Café en Línea →
              </a>
            </div>
          </div>

          <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}>
            <img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1000&q=80"
              alt="Café Terrenas Fresh Artisanal Coffee Beans"
              style={{ width: "100%", height: "450px", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS CATALOG ───────────────────────────────────── */}
      <section id="products" style={{ padding: "90px 24px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 56px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#D97706", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            NUESTRA SELECCIÓN DE TOUESTES
          </span>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FAF7F2", margin: "8px 0" }}>Cafés de Origen Único</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "36px" }}>
          {products.map(p => (
            <div key={p.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.4)", display: "flex", flexDirection: "column" }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: "240px", objectFit: "cover" }} />
              <div style={{ padding: "32px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: "11px", color: "#D97706", fontWeight: 800 }}>📍 {p.origin}</span>
                  <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#FAF7F2", margin: "8px 0 6px" }}>{p.name}</h3>
                  <p style={{ fontSize: "13.5px", color: "#D1D5DB", lineHeight: "1.6", margin: "0 0 16px" }}>{p.roast}</p>
                  <div style={{ fontSize: "12px", color: "#9CA3AF" }}>{p.weight}</div>
                </div>

                <div style={{ marginTop: "24px" }}>
                  <div style={{ fontSize: "24px", fontWeight: 900, color: "#D97706", marginBottom: "16px" }}>RD$ {p.price}</div>
                  <button
                    onClick={() => { setCartCount(cartCount + 1); setModalOpen(true); }}
                    style={{ background: "#D97706", color: "#FFFFFF", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 900, fontSize: "14px", cursor: "pointer", width: "100%" }}
                  >
                    Agregar al Carrito 🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CHECKOUT MODAL ─────────────────────────────────────── */}
      {modalOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(15,11,8,0.8)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}>
          <div style={{ background: "#1C1410", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "24px", padding: "40px", maxWidth: "540px", width: "100%", position: "relative" }}>
            <button onClick={() => setModalOpen(false)} style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.1)", border: "none", width: "32px", height: "32px", borderRadius: "50%", color: "#FFF", fontWeight: 900, cursor: "pointer" }}>✕</button>

            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#D97706", textTransform: "uppercase" }}>CHECKOUT SEGURO</span>
              <h3 style={{ fontSize: "24px", fontWeight: 900, color: "#FAF7F2", margin: "4px 0" }}>Tu Carrito ({cartCount} artículos)</h3>
            </div>

            {checkoutComplete ? (
              <div style={{ background: "rgba(217,119,6,0.15)", border: "1px solid #D97706", padding: "24px", borderRadius: "16px", textAlign: "center" }}>
                <h4 style={{ color: "#D97706", fontWeight: 900, fontSize: "18px", margin: "0 0 6px" }}>¡Orden Procesada!</h4>
                <p style={{ fontSize: "13px", color: "#FAF7F2", lineHeight: "1.6", margin: 0 }}>Recibirás tu número de rastreo de envío exprés en tu WhatsApp.</p>
                <button onClick={() => { setCheckoutComplete(false); setModalOpen(false); }} style={{ background: "#D97706", color: "#FFF", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", marginTop: "16px", cursor: "pointer" }}>Cerrar</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setCheckoutComplete(true); }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#D1D5DB" }}>Nombre Completo *</label>
                  <input type="text" required placeholder="ej. Juan Pablo Duarte" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "#0F0B08", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#D1D5DB" }}>Dirección de Envío en R.D. *</label>
                  <input type="text" required placeholder="Calle El Conde #45, Zona Colonial, Santo Domingo" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "#0F0B08", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#D1D5DB" }}>WhatsApp para Confirmación *</label>
                  <input type="tel" required placeholder="809-555-0192" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "#0F0B08", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
                </div>
                <button type="submit" style={{ background: "#D97706", color: "#FFFFFF", border: "none", padding: "16px", borderRadius: "10px", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 16px rgba(217,119,6,0.3)", marginTop: "6px" }}>
                  Pagar con Tarjeta / WhatsApp 💳
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ background: "#0F0B08", color: "#9CA3AF", padding: "60px 24px 30px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "13px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px", marginBottom: "48px" }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: "18px", color: "#FAF7F2", marginBottom: "12px" }}>CAFÉ TERRENAS</div>
              <p style={{ fontSize: "13px", lineHeight: "1.65", color: "#9CA3AF", margin: 0 }}>
                Café de especialidad tueste fresco. Fincas seleccionadas en Jarabacoa, Constanza y Barahona.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 800, color: "#FAF7F2", marginBottom: "14px", fontSize: "14px" }}>Tostaduría Principal</div>
              <div>Calle Principal #22, Las Terrenas, Samaná · Tienda en Santo Domingo.</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", textAlign: "center", fontSize: "12px" }}>
            © 2026 Café Terrenas SRL. RNC 1-32-55019-3. Todos los derechos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}
