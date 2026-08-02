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
  const [activeTab, setActiveTab] = useState<"all" | "beans" | "drinks" | "pastries" | "merch">("all");
  const [selectedGrind, setSelectedGrind] = useState<Record<string, string>>({
    "c1": "Grano Entero",
    "c2": "Grano Entero",
    "c3": "Grano Entero",
    "c4": "Grano Entero"
  });
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const products = [
    {
      id: "c1",
      category: "beans",
      name: "Terrenas Single Origin Espresso",
      notes: "Notas de cata: Cacao amargo, macadamia y caramelo de caña tostada.",
      origin: "Cordillera Septentrional · Altitud 1,200m",
      priceDOP: 750,
      priceUSD: 12.5,
      img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "c2",
      category: "beans",
      name: "Samaná Micro-Lote Reserva Especial",
      notes: "Notas de cata: Maracuyá, flor de azahar y mermelada de mora silvestre.",
      origin: "Finca El Limón · Proceso Lavado Natural",
      priceDOP: 920,
      priceUSD: 15.5,
      img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "c3",
      category: "beans",
      name: "Las Terrenas Dark Roast Cold Brew",
      notes: "Notas de cata: Chocolate negro 80%, melaza y avellanas tostadas.",
      origin: "Tueste Artesanal Medio-Oscuro de la Casa",
      priceDOP: 680,
      priceUSD: 11.0,
      img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "d1",
      category: "drinks",
      name: "Flat White con Leche de Coco de Samaná",
      notes: "Doble shot de espresso de la casa servido con leche de coco artesanal cremada.",
      origin: "Preparado al momento en barra",
      priceDOP: 240,
      priceUSD: 4.0,
      img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "d2",
      category: "drinks",
      name: "Iced Cold Brew Infusionado con Canela",
      notes: "Macerado 18 horas en frío con rajitas de canela orgánica de la cordillera.",
      origin: "Especialidad helada de la casa",
      priceDOP: 280,
      priceUSD: 4.6,
      img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "p1",
      category: "pastries",
      name: "Pan de Coco Artesanal de Samaná",
      notes: "Receta tradicional horneada diariamente con coco rallado fresco y mantequilla de campo.",
      origin: "Horno Artesanal Local",
      priceDOP: 180,
      priceUSD: 3.0,
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "p2",
      category: "pastries",
      name: "Croissant de Nutella & Almendras",
      notes: "Hojaldre francés crujiente relleno de avellanas y almendras fileteadas.",
      origin: "Repostería de la casa",
      priceDOP: 220,
      priceUSD: 3.7,
      img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "m1",
      category: "merch",
      name: "Kit de Extracción V60 Pour-Over",
      notes: "Incluye goteador cerámico artesanal, jarra de vidrio de borosilicato y 50 filtros.",
      origin: "Edición Limitada Café Terrenas",
      priceDOP: 2400,
      priceUSD: 40.0,
      img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const events = [
    {
      id: "e1",
      date: "SÁBADO 15 AGOSTO · 10:00 AM",
      title: "Taller de Barismo Doméstico & Arte Latte",
      desc: "Aprende a calibrar tu molino, perfeccionar la extracción de espresso y cremar leche para cappuccinos perfectos en casa.",
      price: "RD$ 1,500 / persona",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "e2",
      date: "VIERNES 28 AGOSTO · 5:30 PM",
      title: "Cupping & Cata de Cafés Dominicanos",
      desc: "Recorrido sensorial guiado por nuestro tostador principal probando 5 micro-lotes de Samaná, Jarabacoa y Barahona.",
      price: "Entrada Libre con Reserva",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
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
      <div style={{ background: "#2C1A11", color: "#FDFBF7", padding: "10px 24px", fontSize: "12px", textAlign: "center", fontWeight: 700, letterSpacing: "0.06em", fontFamily: "system-ui, sans-serif", paddingTop: "68px" }}>
        ENVÍO GRATIS EN SANTO DOMINGO & SAMANÁ EN COMPRAS MAYORES A RD$ 1,500
      </div>

      {/* ─── STICKY HEADER ──────────────────────────────────────── */}
      <header style={{ borderBottom: "1px solid #E5DEC9", padding: "18px 0", position: "sticky", top: "54px", background: "rgba(253, 251, 247, 0.95)", backdropFilter: "blur(12px)", zIndex: 50 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Left Nav */}
          <div style={{ display: "flex", gap: "24px", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif", fontSize: "13px", fontWeight: 700 }}>
            <a href="#shop" style={{ textDecoration: "none", color: "#2C1A11", transition: "color 0.2s" }}>Tienda de Café</a>
            <a href="#cafe" style={{ textDecoration: "none", color: "#2C1A11", transition: "color 0.2s" }}>Café & Bar</a>
            <a href="#events" style={{ textDecoration: "none", color: "#2C1A11", transition: "color 0.2s" }}>Eventos</a>
            <a href="#story" style={{ textDecoration: "none", color: "#2C1A11", transition: "color 0.2s" }}>Historia</a>
          </div>

          {/* Center Brand Logo */}
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.02em", color: "#2C1A11", fontFamily: "'Georgia', serif" }}>
              CAFÉ TERRENAS
            </div>
            <div style={{ fontSize: "9.5px", fontFamily: "system-ui, sans-serif", letterSpacing: "0.22em", textTransform: "uppercase", color: "#D96B43", fontWeight: 800 }}>
              ARTISANAL ROASTERY · SAMANÁ
            </div>
          </div>

          {/* Right Cart Trigger */}
          <button
            onClick={() => setCartOpen(true)}
            style={{
              background: "#2C1A11",
              color: "#FDFBF7",
              border: "none",
              padding: "10px 20px",
              borderRadius: "9999px",
              cursor: "pointer",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "13px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 12px rgba(44, 26, 17, 0.2)",
              transition: "transform 0.2s"
            }}
          >
            <span>Bolsa</span>
            <span style={{ background: "#D96B43", color: "#FFF", borderRadius: "9999px", padding: "2px 8px", fontSize: "11px", fontWeight: 900 }}>
              {cart.reduce((total, item) => total + item.qty, 0)}
            </span>
          </button>
        </div>
      </header>

      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <section style={{ padding: "90px 24px 70px", textAlign: "center", borderBottom: "1px solid #E5DEC9", background: "linear-gradient(180deg, #FDFBF7 0%, #F8F2E6 100%)" }}>
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          <span style={{ background: "#F4EBD9", color: "#D96B43", padding: "6px 18px", borderRadius: "9999px", fontSize: "11.5px", fontFamily: "system-ui, sans-serif", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", border: "1px solid #E5DEC9" }}>
            A CAFÉ & CREATIVE SPACE BASED IN LAS TERRENAS, SAMANÁ
          </span>
          <h1 style={{ fontSize: "clamp(38px, 5.2vw, 64px)", fontWeight: 900, color: "#2C1A11", margin: "22px 0 18px", lineHeight: "1.08", letterSpacing: "-0.02em" }}>
            Café de Especie Finca Única & Repostería Artesanal
          </h1>
          <p style={{ fontSize: "18px", color: "#665343", lineHeight: "1.65", margin: "0 0 36px" }}>
            Tostado a mano en pequeños lotes frente a la playa de Las Terrenas. Destacando productores locales dominicanos y momentos de calma.
          </p>
          <a
            href="#shop"
            style={{
              background: "#D96B43",
              color: "#FFF",
              padding: "16px 38px",
              borderRadius: "9999px",
              textDecoration: "none",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "15px",
              display: "inline-block",
              boxShadow: "0 6px 24px rgba(217,107,67,0.35)",
              transition: "transform 0.2s"
            }}
          >
            COMPRAR CAFÉ EN GRANO
          </a>
        </div>
      </section>

      {/* ─── CATALOG SECTION ────────────────────────────────────── */}
      <section id="shop" style={{ padding: "90px 24px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "44px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#2C1A11", margin: 0, letterSpacing: "-0.02em" }}>Nuestros Granos & Especialidades</h2>
            <div style={{ fontSize: "15px", fontFamily: "system-ui, sans-serif", color: "#665343", marginTop: "6px" }}>Selección fresca tostada semanalmente en Samaná</div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "8px", fontFamily: "system-ui, sans-serif", flexWrap: "wrap" }}>
            {[
              { id: "all", label: "Todos" },
              { id: "beans", label: "Café en Grano" },
              { id: "drinks", label: "Bebidas del Bar" },
              { id: "pastries", label: "Repostería" },
              { id: "merch", label: "Equipos V60" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  background: activeTab === tab.id ? "#2C1A11" : "#F4EBD9",
                  color: activeTab === tab.id ? "#FDFBF7" : "#2C1A11",
                  border: "none",
                  padding: "9px 20px",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
          {filteredProducts.map(p => (
            <div key={p.id} style={{ background: "#FFFFFF", border: "1px solid #E5DEC9", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 24px rgba(44,26,17,0.06)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "260px", objectFit: "cover" }} />
                <div style={{ padding: "26px" }}>
                  <div style={{ fontSize: "11px", fontFamily: "system-ui, sans-serif", fontWeight: 800, color: "#D96B43", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {p.origin}
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#2C1A11", margin: "8px 0 10px", lineHeight: "1.25" }}>{p.name}</h3>
                  <p style={{ fontSize: "14px", color: "#665343", lineHeight: "1.55", margin: "0 0 18px", fontFamily: "system-ui, sans-serif" }}>{p.notes}</p>

                  {/* Grind Selector for Coffee Beans */}
                  {p.category === "beans" && (
                    <div style={{ marginBottom: "18px", fontFamily: "system-ui, sans-serif" }}>
                      <label style={{ fontSize: "11.5px", fontWeight: 800, color: "#2C1A11", display: "block", marginBottom: "6px" }}>Especificación de Molienda:</label>
                      <select
                        value={selectedGrind[p.id] || "Grano Entero"}
                        onChange={(e) => setSelectedGrind({ ...selectedGrind, [p.id]: e.target.value })}
                        style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1", background: "#FDFBF7", fontSize: "13px", fontWeight: 700, color: "#2C1A11" }}
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
              <div style={{ padding: "0 26px 26px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #F4EBD9", paddingTop: "18px" }}>
                
                {/* Fixed Uniform Pricing Typography */}
                <div style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                  <div style={{ fontSize: "22px", fontWeight: 900, color: "#2C1A11", letterSpacing: "-0.02em" }}>
                    RD$ {p.priceDOP.toLocaleString()}
                  </div>
                  <div style={{ fontSize: "11.5px", fontWeight: 700, color: "#8C7A6B" }}>
                    USD ${p.priceUSD.toFixed(2)}
                  </div>
                </div>

                <button
                  onClick={() => addToCart(p)}
                  style={{
                    background: "#2C1A11",
                    color: "#FFF",
                    border: "none",
                    padding: "11px 22px",
                    borderRadius: "9999px",
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: "13px",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(44, 26, 17, 0.15)",
                    transition: "transform 0.15s"
                  }}
                >
                  + Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CAFÉ HOURS & LOCATION (FIXED HIGH CONTRAST) ─────────── */}
      <section id="cafe" style={{ background: "linear-gradient(135deg, #2C1A11 0%, #1A0F0A 100%)", color: "#FDFBF7", padding: "100px 24px", marginTop: "40px", borderTop: "1px solid #3D2619", borderBottom: "1px solid #3D2619" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          <div>
            <span style={{ color: "#E27A54", fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 900, letterSpacing: "0.18em", textTransform: "uppercase", background: "rgba(226, 122, 84, 0.15)", padding: "4px 12px", borderRadius: "9999px", border: "1px solid rgba(226, 122, 84, 0.3)" }}>
              VISÍTANOS EN LAS TERRENAS
            </span>
            
            {/* FIXED HIGH CONTRAST WHITE HEADLINE */}
            <h2 style={{ fontSize: "clamp(34px, 4.5vw, 48px)", fontWeight: 900, color: "#FDFBF7", margin: "18px 0 16px", lineHeight: "1.15", letterSpacing: "-0.02em", fontFamily: "'Georgia', serif" }}>
              Un Espacio Creativo Frente al Mar
            </h2>
            
            {/* FIXED HIGH CONTRAST CREAM SUBTEXT */}
            <p style={{ fontSize: "17px", color: "#E5D4C0", lineHeight: "1.7", margin: "0 0 32px", fontFamily: "system-ui, sans-serif" }}>
              Disfruta de café de especialidad recién colado, ambiente acogedor con Wi-Fi de alta velocidad para nómadas digitales y exhibición permanente de arte local.
            </p>

            <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "14.5px", lineHeight: "2", display: "flex", flexDirection: "column", gap: "12px", color: "#FDFBF7" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ background: "#E27A54", color: "#2C1A11", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "14px", flexShrink: 0 }}>📍</div>
                <div><strong>Dirección:</strong> Calle Francisco Caamaño Deñó #14, Las Terrenas, Samaná</div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ background: "#E27A54", color: "#2C1A11", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "14px", flexShrink: 0 }}>🕒</div>
                <div><strong>Horario:</strong> Lunes a Domingo: 7:30 AM – 6:00 PM</div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ background: "#E27A54", color: "#2C1A11", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "14px", flexShrink: 0 }}>💬</div>
                <div><strong>Teléfono / WhatsApp:</strong> (809) 240-5912</div>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: "24px", overflow: "hidden", border: "2px solid rgba(226, 122, 84, 0.3)", boxShadow: "0 25px 50px rgba(0,0,0,0.6)" }}>
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
              alt="Café Terrenas Storefront"
              style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ─── EVENTS SECTION ────────────────────────────────────── */}
      <section id="events" style={{ padding: "90px 24px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px" }}>
          <span style={{ fontSize: "11px", fontWeight: 900, color: "#D96B43", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "system-ui, sans-serif" }}>
            EVENTOS & COMUNIDAD EN LAS TERRENAS
          </span>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#2C1A11", margin: "8px 0", letterSpacing: "-0.02em" }}>
            Talleres, Catas & Arte
          </h2>
          <p style={{ fontSize: "15px", color: "#665343", fontFamily: "system-ui, sans-serif" }}>
            Únete a nuestros encuentros semanales de cultura del café y talleres creativos.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px" }}>
          {events.map(ev => (
            <div key={ev.id} style={{ background: "#FFFFFF", border: "1px solid #E5DEC9", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 24px rgba(44,26,17,0.06)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <img src={ev.img} alt={ev.title} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                <div style={{ padding: "26px" }}>
                  <div style={{ fontSize: "11px", fontFamily: "system-ui, sans-serif", fontWeight: 900, color: "#D96B43", letterSpacing: "0.1em" }}>
                    {ev.date}
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#2C1A11", margin: "8px 0" }}>{ev.title}</h3>
                  <p style={{ fontSize: "14px", color: "#665343", lineHeight: "1.6", margin: 0, fontFamily: "system-ui, sans-serif" }}>{ev.desc}</p>
                </div>
              </div>

              <div style={{ padding: "0 26px 26px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #F4EBD9", paddingTop: "16px", fontFamily: "system-ui, sans-serif" }}>
                <div style={{ fontWeight: 800, fontSize: "14px", color: "#2C1A11" }}>{ev.price}</div>
                <a
                  href="https://wa.me/18093588113?text=Hola%20Caf%C3%A9%20Terrenas,%20deseo%20reservar%20mi%20cupo%20para%20el%20taller"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "#2C1A11", color: "#FFF", padding: "9px 20px", borderRadius: "9999px", textDecoration: "none", fontWeight: 800, fontSize: "12.5px" }}
                >
                  Reservar Cupo
                </a>
              </div>
            </div>
          ))}
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
                <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", fontSize: "14px", fontWeight: 800, cursor: "pointer", color: "#2C1A11" }}>Cerrar</button>
              </div>

              {/* Free Shipping Progress Bar */}
              <div style={{ margin: "16px 0", fontFamily: "system-ui, sans-serif", fontSize: "12px" }}>
                {totalDOP >= freeShippingThreshold ? (
                  <div style={{ color: "#10B981", fontWeight: 800 }}>Envío Gratis activado en tu pedido.</div>
                ) : (
                  <div>Faltan <strong style={{ color: "#D96B43" }}>RD$ {(freeShippingThreshold - totalDOP).toLocaleString()}</strong> para Envío Gratis.</div>
                )}
                <div style={{ width: "100%", height: "6px", background: "#E5DEC9", borderRadius: "3px", marginTop: "6px", overflow: "hidden" }}>
                  <div style={{ width: `${progressDOP}%`, height: "100%", background: "#D96B43", transition: "width 0.3s" }} />
                </div>
              </div>

              {/* Items List */}
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px", maxHeight: "360px", overflowY: "auto" }}>
                {cart.length === 0 ? (
                  <div style={{ textAlign: "center", color: "#665343", padding: "40px 0", fontFamily: "system-ui, sans-serif" }}>Tu bolsa está vacía actualmente.</div>
                ) : (
                  cart.map(item => (
                    <div key={`${item.id}-${item.grind}`} style={{ display: "flex", gap: "12px", borderBottom: "1px solid #F4EBD9", paddingBottom: "12px" }}>
                      <img src={item.img} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 800, fontSize: "14px", color: "#2C1A11", fontFamily: "system-ui, sans-serif" }}>{item.name}</div>
                        <div style={{ fontSize: "11px", fontFamily: "system-ui, sans-serif", color: "#D96B43" }}>Molienda: {item.grind}</div>
                        <div style={{ fontWeight: 900, fontSize: "13.5px", color: "#2C1A11", marginTop: "4px", fontFamily: "system-ui, sans-serif" }}>RD$ {(item.priceDOP * item.qty).toLocaleString()}</div>
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
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px", fontWeight: 900, color: "#2C1A11", marginBottom: "4px", fontFamily: "system-ui, sans-serif" }}>
                  <span>Total RD$:</span>
                  <span>RD$ {totalDOP.toLocaleString()}</span>
                </div>
                <div style={{ fontSize: "12px", fontFamily: "system-ui, sans-serif", color: "#8C7A6B", textAlign: "right", marginBottom: "16px" }}>
                  Aprox. USD ${totalUSD.toFixed(2)}
                </div>

                {checkoutComplete ? (
                  <div style={{ background: "#064E3B", color: "#10B981", padding: "14px", borderRadius: "10px", textAlign: "center", fontWeight: 800, fontSize: "13.5px", fontFamily: "system-ui, sans-serif" }}>
                    ¡Pedido enviado por WhatsApp a Café Terrenas!
                  </div>
                ) : (
                  <button
                    onClick={() => setCheckoutComplete(true)}
                    style={{ background: "#D96B43", color: "#FFF", border: "none", width: "100%", padding: "16px", borderRadius: "9999px", fontFamily: "system-ui, sans-serif", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 16px rgba(217,107,67,0.3)" }}
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
