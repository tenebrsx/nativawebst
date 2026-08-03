"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DemoTopBar } from "@/components/demo-top-bar";
import { useGeo } from "@/lib/geo-context";
import { BavaroCartProvider, useBavaroCart } from "./context";

function BavaroLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { currency, fmt } = useGeo();
  const { cart, cartOpen, setCartOpen, updateQty, totalDOP, totalUSD } = useBavaroCart();

  const handleWhatsAppCheckout = () => {
    let msg = `Hola Bávaro Swim & Resortwear, deseo realizar la siguiente orden:\n\n`;
    cart.forEach(item => {
      msg += `• ${item.qty}x ${item.title} (Talla: ${item.size}, Color: ${item.color}) - ${currency === "DOP" ? `RD$ ${item.priceDOP * item.qty}` : `$${item.priceUSD * item.qty}`}\n`;
    });
    msg += `\n*Total*: ${currency === "DOP" ? `RD$ ${totalDOP}` : `$${totalUSD}`}\n`;
    msg += `\nDirección de envío (Punta Cana / Cap Cana / Santo Domingo):`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/18093588113?text=${encoded}`, "_blank");
  };

  const navLinks = [
    { href: "/demo/bavaro-swim", label: "Inicio" },
    { href: "/demo/bavaro-swim/tienda", label: "Tienda Completa" },
    { href: "/demo/bavaro-swim/colecciones", label: "Colecciones" },
    { href: "/demo/bavaro-swim/lookbook", label: "Lookbook 2026" },
  ];

  return (
    <div style={{ background: "#FAF7F2", color: "#18181B", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      
      {/* ─── ANNOUNCEMENT BAR ────────────────────────────────────── */}
      <div style={{ background: "#18181B", color: "#FAF7F2", padding: "10px 24px", fontSize: "11.5px", textAlign: "center", fontWeight: 700, letterSpacing: "0.08em" }}>
        🌴 ENVÍOS EXPRÉS 24H EN SANTO DOMINGO, PUNTA CANA & CAP CANA · ENVÍO GRATIS EN PEDIDOS &gt; $150 USD
      </div>

      {/* ─── STICKY HEADER ────────────────────────────────────────── */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 99,
        background: "rgba(250, 247, 242, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(24, 24, 27, 0.08)",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        {/* Brand Logo */}
        <Link href="/demo/bavaro-swim" style={{ textDecoration: "none" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 900, color: "#18181B", letterSpacing: "0.08em", lineHeight: "1" }}>
            BÁVARO <span style={{ color: "#D4AF37" }}>SWIM</span>
          </div>
          <div style={{ fontSize: "9px", fontWeight: 800, color: "#0F766E", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "4px" }}>
            Resort &amp; Beachwear · Punta Cana
          </div>
        </Link>

        {/* Navigation Links */}
        <nav style={{ display: "flex", gap: "28px", alignItems: "center" }} className="nav-link-desktop">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive ? "#D4AF37" : "#18181B",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: isActive ? 900 : 700,
                  borderBottom: isActive ? "2px solid #D4AF37" : "2px solid transparent",
                  paddingBottom: "4px",
                  transition: "all 0.2s ease"
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Cart Trigger */}
          <button
            onClick={() => setCartOpen(true)}
            style={{
              background: "#18181B",
              color: "#FAF7F2",
              border: "none",
              borderRadius: "9999px",
              padding: "9px 20px",
              fontSize: "12px",
              fontWeight: 800,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)"
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Bolsa ({cart.reduce((sum, i) => sum + i.qty, 0)})
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* ─── SLIDE-OUT BAG DRAWER ────────────────────────────────── */}
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99999, display: "flex", justifyContent: "flex-end" }}>
          <div
            onClick={() => setCartOpen(false)}
            style={{ position: "absolute", inset: 0, background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(4px)" }}
          />

          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: "420px",
            background: "#FFFFFF",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "-10px 0 30px rgba(0,0,0,0.2)",
            zIndex: 1
          }}>
            {/* Header */}
            <div style={{ padding: "20px", borderBottom: "1px solid #E4E4E7", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FAF7F2" }}>
              <div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "19px", fontWeight: 900, color: "#18181B", margin: 0 }}>
                  Tu Bolsa de Compras
                </h3>
                <div style={{ fontSize: "11px", color: "#71717A", marginTop: "2px" }}>
                  {cart.length} artículos seleccionados
                </div>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#18181B", fontWeight: 700 }}
              >
                ✕
              </button>
            </div>

            {/* Cart Items List */}
            <div style={{ padding: "20px", flexGrow: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "14px" }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 20px", color: "#A1A1AA" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: "0 auto 12px", opacity: 0.5 }}>
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  </svg>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#18181B" }}>Tu bolsa está vacía</div>
                  <div style={{ fontSize: "12px", marginTop: "4px" }}>Explora nuestra colección resort de verano.</div>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id + item.size + item.color} style={{ display: "flex", gap: "12px", padding: "12px", background: "#FAF7F2", borderRadius: "12px", border: "1px solid #E4E4E7" }}>
                    <img src={item.img} alt={item.title} style={{ width: "65px", height: "75px", objectFit: "cover", borderRadius: "8px" }} />
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontSize: "13px", fontWeight: 800, color: "#18181B", lineHeight: "1.3" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#71717A", marginTop: "2px" }}>
                        Talla: <strong>{item.size}</strong> · Color: <strong>{item.color}</strong>
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: 900, color: "#D4AF37", marginTop: "4px" }}>
                        {currency === "DOP" ? `RD$ ${item.priceDOP * item.qty}` : `$${item.priceUSD * item.qty}`}
                      </div>

                      {/* Qty Controls */}
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "6px" }}>
                        <button
                          onClick={() => updateQty(item.id, item.size, item.color, -1)}
                          style={{ width: "22px", height: "22px", borderRadius: "4px", border: "1px solid #D4D4D8", background: "#FFF", cursor: "pointer", fontWeight: 800 }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: "12px", fontWeight: 800 }}>{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.size, item.color, 1)}
                          style={{ width: "22px", height: "22px", borderRadius: "4px", border: "1px solid #D4D4D8", background: "#FFF", cursor: "pointer", fontWeight: 800 }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / WhatsApp Dispatch */}
            {cart.length > 0 && (
              <div style={{ padding: "20px", borderTop: "1px solid #E4E4E7", background: "#FAF7F2" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", fontWeight: 900, color: "#18181B", marginBottom: "14px" }}>
                  <span>Total Estimado:</span>
                  <span>{currency === "DOP" ? `RD$ ${totalDOP}` : `$${totalUSD}`}</span>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  style={{
                    width: "100%",
                    background: "#25D366",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "14px",
                    borderRadius: "9999px",
                    fontSize: "13.5px",
                    fontWeight: 900,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 4px 14px rgba(37, 211, 102, 0.3)"
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  Comprar por WhatsApp →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ background: "#18181B", color: "#FAF7F2", padding: "60px 24px 30px", borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: "60px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", textAlign: "center", fontSize: "12px", color: "#A1A1AA" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 900, color: "#FFFFFF", marginBottom: "6px" }}>
            BÁVARO SWIM &amp; RESORTWEAR SRL
          </div>
          <div>Punta Cana Resort &amp; Club · Marina Cap Cana · BlueMall Santo Domingo</div>
          <div style={{ marginTop: "8px" }}>hola@bavaroswim.do · Instagram: @bavaroswim.do</div>
          <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", color: "#D4AF37", fontWeight: 800 }}>
            Tienda E-Commerce Desarrollada por Altamar Web Studio
          </div>
        </div>
      </footer>

      {/* Bottom Floating Demo Dock */}
      <DemoTopBar
        templateName="Bávaro Swim & Resortwear"
        templateCategory="E-Commerce Multi-Página de Lujo"
        whatsappMessage="Hola Altamar, vi la tienda multi-página de Bávaro Swim (#bavaro-swim) y deseo cotizar una tienda e-commerce para mi marca."
        theme="villas"
      />

    </div>
  );
}

export default function BavaroLayout({ children }: { children: React.ReactNode }) {
  return (
    <BavaroCartProvider>
      <BavaroLayoutInner>{children}</BavaroLayoutInner>
    </BavaroCartProvider>
  );
}
