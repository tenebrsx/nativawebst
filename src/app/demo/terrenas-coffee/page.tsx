"use client";

import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";

interface CartItem {
  id: string;
  name: string;
  grind: string;
  priceDOP: number;
  priceUSD: number;
  qty: number;
  img: string;
}

export default function TerrenasCoffeeDemo() {
  const [activeTab, setActiveTab] = useState<"all" | "beans" | "drinks" | "pastries" | "events">("all");
  const [selectedGrind, setSelectedGrind] = useState<Record<string, string>>({
    "c1": "Grano Entero",
    "c2": "Grano Entero",
    "c3": "Grano Entero"
  });
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const products = [
    {
      id: "c1",
      category: "beans",
      name: "Terrenas Single Origin Espresso",
      notes: "Notas: Cacao amargo, macadamia y caramelo de caña tostada.",
      origin: "Cordillera Septentrional · 1,200m",
      priceDOP: 750,
      priceUSD: 12.5,
      img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "c2",
      category: "beans",
      name: "Samaná Micro-Lote Reserva Especial",
      notes: "Notas: Maracuyá, flor de azahar y mermelada de mora silvestre.",
      origin: "Finca El Limón · Lavado Natural",
      priceDOP: 920,
      priceUSD: 15.5,
      img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "c3",
      category: "beans",
      name: "Las Terrenas Dark Roast Cold Brew",
      notes: "Notas: Chocolate negro 80%, melaza y avellanas tostadas.",
      origin: "Tueste Artesanal Medio-Oscuro",
      priceDOP: 680,
      priceUSD: 11.0,
      img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "d1",
      category: "drinks",
      name: "Flat White con Leche de Coco de Samaná",
      notes: "Doble shot de espresso servido con leche de coco local cremada.",
      origin: "Preparado al momento en barra",
      priceDOP: 240,
      priceUSD: 4.0,
      img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "d2",
      category: "drinks",
      name: "Iced Cold Brew Infusionado con Canela",
      notes: "Macerado 18 horas en frío con rajitas de canela orgánica.",
      origin: "Especialidad de la casa",
      priceDOP: 280,
      priceUSD: 4.6,
      img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "p1",
      category: "pastries",
      name: "Pan de Coco Artesanal de Samaná",
      notes: "Receta tradicional horneada diariamente con coco rallado fresco.",
      origin: "Repostería Local",
      priceDOP: 180,
      priceUSD: 3.0,
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProducts = activeTab === "all"
    ? products
    : products.filter(p => p.category === activeTab);

  const addToCart = (product: typeof products[0]) => {
    const grind = selectedGrind[product.id] || "Sin Moler";
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.grind === grind);
      if (existing) {
        return prev.map(item => item.id === product.id && item.grind === grind ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        grind: grind,
        priceDOP: product.priceDOP,
        priceUSD: product.priceUSD,
        qty: 1,
        img: product.img
      }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: string, grind: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.grind === grind) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const totalDOP = cart.reduce((sum, item) => sum + item.priceDOP * item.qty, 0);
  const totalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.qty, 0);
  const freeShippingThreshold = 1500;
  const progressDOP = Math.min(100, (totalDOP / freeShippingThreshold) * 100);

  return (
    <div style={{ background: "#FDFBF7", color: "#2C1A11", minHeight: "100vh", fontFamily: "'Georgia', serif" }}>
      
      {/* Sticky Altamar Demo Banner */}
      <DemoTopBar
        templateName="Plantilla Café Terrenas (Réplica Directa LandToSeaNYC.com)"
        templateCategory="E-Commerce & Café de Especialidad"
        whatsappMessage="Hola Altamar, vi la plantilla de Café Terrenas (#terrenas-coffee) y deseo cotizar una tienda online para mi café o marca."
      />

      {/* ─── ANNOUNCEMENT BAR ────────────────────────────────────── */}
      <div style={{ background: "#2C1A11", color: "#FDFBF7", padding: "8px 24px", fontSize: "12px", textAlign: "center", fontWeight: 600, letterSpacing: "0.05em" }}>
        ENVÍO GRATIS EN SANTO DOMINGO & SAMANÁ EN COMPRAS MAYORES A RD$ 1,500
      </div>

      {/* ─── LAND TO SEA STYLE HEADER ───────────────────────────── */}
      <header style={{ borderBottom: "1px solid #E5DEC9", padding: "20px 0", position: "sticky", top: "42px", background: "#FDFBF7", zIndex: 50 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Left Nav */}
          <div style={{ display: "flex", gap: "24px", fontFamily: "system-ui, sans-serif", fontSize: "13px", fontWeight: 700 }}>
            <a href="#shop" style={{ textDecoration: "none", color: "#2C1A11" }}>Tienda de Café</a>
            <a href="#cafe" style={{ textDecoration: "none", color: "#2C1A11" }}>Café & Bar</a>
            <a href="#events" style={{ textDecoration: "none", color: "#2C1A11" }}>Eventos & Arte</a>
            <a href="#story" style={{ textDecoration: "none", color: "#2C1A11" }}>Nuestra Historia</a>
          </div>

          {/* Center Brand Logo */}
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 900, letterSpacing: "-0.03em", color: "#2C1A11" }}>
              CAFÉ TERRENAS
            </div>
            <div style={{ fontSize: "10px", fontFamily: "system-ui, sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D96B43", fontWeight: 800 }}>
              ARTISANAL ROASTERY · SAMANÁ
            </div>
          </div>

          {/* Right Cart Trigger */}
          <button
            onClick={() => setCartOpen(true)}
            style={{ background: "#2C1A11", color: "#FDFBF7", border: "none", padding: "10px 18px", borderRadius: "20px", cursor: "pointer", fontFamily: "system-ui, sans-serif", fontWeight: 800, fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span>Bolsa</span>
            <span style={{ background: "#D96B43", color: "#FFF", borderRadius: "50%", padding: "2px 7px", fontSize: "11px" }}>
              {cart.reduce((total, item) => total + item.qty, 0)}
            </span>
          </button>
        </div>
      </header>

      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", textAlign: "center", borderBottom: "1px solid #E5DEC9" }}>
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          <span style={{ background: "#F4EBD9", color: "#D96B43", padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontFamily: "system-ui, sans-serif", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            A CAFÉ & CREATIVE SPACE BASED IN LAS TERRENAS, SAMANÁ
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, color: "#2C1A11", margin: "20px 0 16px", lineHeight: "1.1" }}>
            Café de Especie Finca Única & Repostería Artesanal
          </h1>
          <p style={{ fontSize: "18px", color: "#665343", lineHeight: "1.6", margin: "0 0 36px" }}>
            Tostado a mano en pequeños lotes frente a la playa de Las Terrenas. Destacando productores locales dominicanos y momentos de calma.
          </p>
          <a
            href="#shop"
            style={{ background: "#D96B43", color: "#FFF", padding: "16px 36px", borderRadius: "30px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 800, fontSize: "15px", display: "inline-block", boxShadow: "0 4px 20px rgba(217,107,67,0.3)" }}
          >
            COMPRAR CAFÉ EN GRANO
          </a>
        </div>
      </section>

      {/* ─── CATALOG SECTION ────────────────────────────────────── */}
      <section id="shop" style={{ padding: "80px 24px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#2C1A11", margin: 0 }}>Nuestros Granos & Especialidades</h2>
            <div style={{ fontSize: "14px", fontFamily: "system-ui, sans-serif", color: "#665343", marginTop: "4px" }}>Selección fresca tostada esta semana</div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "8px", fontFamily: "system-ui, sans-serif" }}>
            {[
              { id: "all", label: "Todos" },
              { id: "beans", label: "Café en Grano" },
              { id: "drinks", label: "Bebidas del Café" },
              { id: "pastries", label: "Repostería" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  background: activeTab === tab.id ? "#2C1A11" : "#F4EBD9",
                  color: activeTab === tab.id ? "#FDFBF7" : "#2C1A11",
                  border: "none",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontWeight: 700,
                  fontSize: "13px",
                  cursor: "pointer"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
          {filteredProducts.map(p => (
            <div key={p.id} style={{ background: "#FFFFFF", border: "1px solid #E5DEC9", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "260px", objectFit: "cover" }} />
                <div style={{ padding: "24px" }}>
                  <div style={{ fontSize: "11px", fontFamily: "system-ui, sans-serif", fontWeight: 800, color: "#D96B43", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {p.origin}
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#2C1A11", margin: "6px 0 8px" }}>{p.name}</h3>
                  <p style={{ fontSize: "14px", color: "#665343", lineHeight: "1.5", margin: "0 0 16px" }}>{p.notes}</p>

                  {/* Grind Selector for Coffee Beans */}
                  {p.category === "beans" && (
                    <div style={{ marginBottom: "16px", fontFamily: "system-ui, sans-serif" }}>
                      <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#2C1A11", display: "block", marginBottom: "4px" }}>Molienda:</label>
                      <select
                        value={selectedGrind[p.id] || "Grano Entero"}
                        onChange={(e) => setSelectedGrind({ ...selectedGrind, [p.id]: e.target.value })}
                        style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #CBD5E1", background: "#FDFBF7", fontSize: "12.5px", fontWeight: 700 }}
                      >
                        <option value="Grano Entero">Grano Entero (Whole Bean)</option>
                        <option value="Filtro / V60">Filtro / V60 / Drip</option>
                        <option value="Espresso">Espresso / Greca Italiana</option>
                        <option value="Prensa Francesa">Prensa Francesa (Coarse)</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Price & Buy */}
              <div style={{ padding: "0 24px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #F4EBD9", paddingTop: "16px" }}>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 900, color: "#2C1A11" }}>RD$ {p.priceDOP}</div>
                  <div style={{ fontSize: "11px", fontFamily: "system-ui, sans-serif", color: "#94A3B8" }}>USD ${p.priceUSD.toFixed(2)}</div>
                </div>

                <button
                  onClick={() => addToCart(p)}
                  style={{ background: "#2C1A11", color: "#FFF", border: "none", padding: "10px 20px", borderRadius: "20px", fontFamily: "system-ui, sans-serif", fontWeight: 800, fontSize: "13px", cursor: "pointer" }}
                >
                  + Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CAFÉ HOURS & LOCATION ──────────────────────────────── */}
      <section id="cafe" style={{ background: "#2C1A11", color: "#FDFBF7", padding: "80px 24px", marginTop: "40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <span style={{ color: "#D96B43", fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              VISÍTANOS EN LAS TERRENAS
            </span>
            <h2 style={{ fontSize: "38px", fontWeight: 900, margin: "12px 0 16px" }}>
              Un Espacio Creativo Frente al Mar
            </h2>
            <p style={{ fontSize: "16px", color: "#D9CBBF", lineHeight: "1.6", margin: "0 0 28px" }}>
              Disfruta de café de especialidad recien colado, ambiente acogedor con Wi-Fi de alta velocidad para nómadas digitales y arte local.
            </p>

            <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", lineHeight: "1.8" }}>
              <div><strong>Dirección:</strong> Calle Francisco Caamaño Deñó #14, Las Terrenas, Samaná</div>
              <div><strong>Horario:</strong> Lunes a Domingo: 7:30 AM – 6:00 PM</div>
              <div><strong>Teléfono / WhatsApp:</strong> (809) 240-5912</div>
            </div>
          </div>

          <div style={{ borderRadius: "20px", overflow: "hidden", border: "2px solid #523727" }}>
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
              alt="Café Terrenas Storefront"
              style={{ width: "100%", height: "360px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ─── SLIDE-OUT CART DRAWER ─────────────────────────────── */}
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", justifyContent: "flex-end" }}>
          {/* Backdrop */}
          <div onClick={() => setCartOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />

          {/* Drawer Content */}
          <div style={{ position: "relative", width: "100%", maxWidth: "420px", background: "#FDFBF7", height: "100%", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "-10px 0 30px rgba(0,0,0,0.2)" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E5DEC9", paddingBottom: "16px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#2C1A11", margin: 0 }}>Tu Bolsa de Compras</h3>
                <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", fontSize: "20px", fontWeight: 800, cursor: "pointer" }}>Cerrar</button>
              </div>

              {/* Free Shipping Progress Bar */}
              <div style={{ margin: "16px 0", fontFamily: "system-ui, sans-serif", fontSize: "12px" }}>
                {totalDOP >= freeShippingThreshold ? (
                  <div style={{ color: "#10B981", fontWeight: 800 }}>Envío Gratis activado en tu pedido.</div>
                ) : (
                  <div>Faltan <strong style={{ color: "#D96B43" }}>RD$ {freeShippingThreshold - totalDOP}</strong> para Envío Gratis.</div>
                )}
                <div style={{ width: "100%", height: "6px", background: "#E5DEC9", borderRadius: "3px", marginTop: "6px", overflow: "hidden" }}>
                  <div style={{ width: `${progressDOP}%`, height: "100%", background: "#D96B43", transition: "width 0.3s" }} />
                </div>
              </div>

              {/* Items List */}
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px", maxHeight: "360px", overflowY: "auto" }}>
                {cart.length === 0 ? (
                  <div style={{ textAlign: "center", color: "#665343", padding: "40px 0" }}>Tu bolsa está vacía actualmente.</div>
                ) : (
                  cart.map(item => (
                    <div key={`${item.id}-${item.grind}`} style={{ display: "flex", gap: "12px", borderBottom: "1px solid #F4EBD9", paddingBottom: "12px" }}>
                      <img src={item.img} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 800, fontSize: "14px", color: "#2C1A11" }}>{item.name}</div>
                        <div style={{ fontSize: "11px", fontFamily: "system-ui, sans-serif", color: "#D96B43" }}>Molienda: {item.grind}</div>
                        <div style={{ fontWeight: 900, fontSize: "13px", color: "#2C1A11", marginTop: "4px" }}>RD$ {item.priceDOP * item.qty}</div>
                      </div>

                      {/* Qty Controls */}
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "system-ui, sans-serif" }}>
                        <button onClick={() => updateQty(item.id, item.grind, -1)} style={{ background: "#E5DEC9", border: "none", width: "24px", height: "24px", borderRadius: "4px", fontWeight: 900, cursor: "pointer" }}>-</button>
                        <span style={{ fontWeight: 800, fontSize: "13px" }}>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.grind, 1)} style={{ background: "#E5DEC9", border: "none", width: "24px", height: "24px", borderRadius: "4px", fontWeight: 900, cursor: "pointer" }}>+</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div style={{ borderTop: "1px solid #E5DEC9", paddingTop: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px", fontWeight: 900, color: "#2C1A11", marginBottom: "4px" }}>
                  <span>Total RD$:</span>
                  <span>RD$ {totalDOP.toLocaleString()}</span>
                </div>
                <div style={{ fontSize: "12px", fontFamily: "system-ui, sans-serif", color: "#94A3B8", textAlign: "right", marginBottom: "16px" }}>
                  Aprox. USD ${totalUSD.toFixed(2)}
                </div>

                {checkoutComplete ? (
                  <div style={{ background: "#064E3B", color: "#10B981", padding: "14px", borderRadius: "10px", textAlign: "center", fontWeight: 800, fontSize: "13.5px" }}>
                    ¡Pedido enviado por WhatsApp a Café Terrenas!
                  </div>
                ) : (
                  <button
                    onClick={() => setCheckoutComplete(true)}
                    style={{ background: "#D96B43", color: "#FFF", border: "none", width: "100%", padding: "16px", borderRadius: "30px", fontFamily: "system-ui, sans-serif", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 16px rgba(217,107,67,0.3)" }}
                  >
                    PROCEDER AL PAGO / ORDER NOW
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ background: "#1F120B", color: "#D9CBBF", padding: "60px 24px", textAlign: "center", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ fontWeight: 900, fontSize: "22px", color: "#FDFBF7", marginBottom: "8px", fontFamily: "Georgia, serif" }}>
            CAFÉ TERRENAS SRL
          </div>
          <div>Calle Francisco Caamaño Deñó #14, Las Terrenas, Samaná, República Dominicana</div>
          <div style={{ marginTop: "12px", color: "#94A3B8" }}>contacto@cafeterrenas.do · Instagram: @cafeterrenas.do</div>
          <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #2C1A11", color: "#D96B43", fontWeight: 800, fontSize: "11.5px" }}>
            Demo Template Built by Altamar Web Studio · Inspired by LandToSeaNYC.com
          </div>
        </div>
      </footer>

    </div>
  );
}
