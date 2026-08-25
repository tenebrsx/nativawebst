"use client";

import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";

export default function PuntaCanaVillasDemo() {
  const [curr, setCurr] = useState<"USD" | "DOP">("USD");
  const [inquired, setInquired] = useState(false);

  const villas = [
    { name: "Villa Marina Cap Cana", beds: "6 Habitaciones", guests: "12 Huéspedes", priceUSD: 1450, priceDOP: 87000, img: "🏖️" },
    { name: "Punta Cana Beachfront Sanctuary", beds: "4 Habitaciones", guests: "8 Huéspedes", priceUSD: 950, priceDOP: 57000, img: "🌅" },
    { name: "Bávaro Palms Luxury Estate", beds: "5 Habitaciones", guests: "10 Huéspedes", priceUSD: 1200, priceDOP: 72000, img: "🍹" }
  ];

  return (
    <div style={{ background: "#FAF7F2", color: "#0A1128", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Sticky Altamar Demo Banner */}
      <DemoTopBar
        templateName="Plantilla Punta Cana Luxury Villas & Alquileres"
        templateCategory="Bienes Raíces & Turismo"
        whatsappMessage="Hola Altamar, vi el demo de Punta Cana Villas (#punta-cana-villas) y me interesa cotizar una plataforma vacacional como esta."
      />

      {/* ─── VILLA HEADER ───────────────────────────────────────── */}
      <header style={{ background: "#ffffff", borderBottom: "1px solid #E2E8F0", padding: "16px 0", position: "sticky", top: "42px", zIndex: 50 }}>
        <div className="header-bar" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: "20px", fontFamily: "serif", letterSpacing: "0.05em", color: "#0A1128" }}>
              PUNTA CANA COASTAL ESCAPES
            </div>
            <div className="brand-tagline" style={{ fontSize: "9px", color: "#0EA5E9", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              LUXURY VACATION VILLA COLLECTION
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Currency Switcher */}
            <div style={{ display: "flex", background: "#F1F5F9", padding: "2px", borderRadius: "6px" }}>
              <button
                onClick={() => setCurr("USD")}
                style={{ background: curr === "USD" ? "#0A1128" : "transparent", color: curr === "USD" ? "#fff" : "#0A1128", border: "none", padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 800, cursor: "pointer" }}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurr("DOP")}
                style={{ background: curr === "DOP" ? "#0A1128" : "transparent", color: curr === "DOP" ? "#fff" : "#0A1128", border: "none", padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 800, cursor: "pointer" }}
              >
                DOP (RD$)
              </button>
            </div>

            <a
              href="https://wa.me/18093588113?text=Hola%20Punta%20Cana%20Escapes,%20quiero%20consultar%20disponibilidad"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#0A1128", color: "#fff", padding: "8px 16px", borderRadius: "6px", textDecoration: "none", fontWeight: 800, fontSize: "12px" }}
            >
              Concierge WhatsApp 💬
            </a>
          </div>
        </div>
      </header>

      {/* ─── VILLA HERO ─────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #0A1128 0%, #1E293B 100%)", color: "#fff", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ color: "#FFB703", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            CAP CANA · BÁVARO · LOS CORALES
          </span>
          <h1 style={{ fontFamily: "serif", fontSize: "clamp(34px, 5vw, 52px)", fontWeight: 400, margin: "16px 0 12px", lineHeight: "1.1" }}>
            Exclusividad y Privacidad en el Caribe
          </h1>
          <p style={{ fontSize: "15px", color: "#94A3B8", lineHeight: "1.6", margin: "0 0 32px" }}>
            Villas privadas con servicio de chef personal, piscina infinity y acceso exclusivo a campos de golf en Punta Cana.
          </p>
        </div>
      </section>

      {/* ─── VILLA CATALOG ──────────────────────────────────────── */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#0EA5E9", textTransform: "uppercase", letterSpacing: "0.1em" }}>Colección 2026</span>
          <h2 style={{ fontFamily: "serif", fontSize: "32px", margin: "4px 0" }}>Villas Destacadas</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "28px" }}>
          {villas.map(v => (
            <div key={v.name} style={{ background: "#ffffff", border: "1px solid #E2E8F0", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <div style={{ background: "#E2E8F0", height: "180px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "64px" }}>
                {v.img}
              </div>
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "11px", color: "#64748B", fontWeight: 700 }}>{v.beds} · {v.guests}</span>
                  <span style={{ fontSize: "14px", fontWeight: 900, color: "#0A1128" }}>
                    {curr === "USD" ? `$${v.priceUSD.toLocaleString()} / noche` : `RD$ ${v.priceDOP.toLocaleString()} / noche`}
                  </span>
                </div>
                <h3 style={{ fontFamily: "serif", fontSize: "20px", margin: "0 0 16px" }}>{v.name}</h3>
                
                <button
                  onClick={() => setInquired(true)}
                  style={{ width: "100%", background: "#0A1128", color: "#fff", border: "none", padding: "12px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", cursor: "pointer" }}
                >
                  Consultar Disponibilidad 🗓️
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INQUIRY MODAL SIMULATOR ────────────────────────────── */}
      {inquired && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", zIndex: 9000 }}>
          <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", maxWidth: "440px", width: "100%" }}>
            <h3 style={{ fontFamily: "serif", fontSize: "22px", margin: "0 0 8px" }}>Reserva de Concierge</h3>
            <p style={{ fontSize: "13px", color: "#64748B", margin: "0 0 20px" }}>
              Indica tus fechas tentativas y número de huéspedes. Nuestro equipo coordinará tu transporte VIP y reserva por WhatsApp.
            </p>
            <button
              onClick={() => setInquired(false)}
              style={{ background: "#25D366", color: "#fff", width: "100%", padding: "14px", border: "none", borderRadius: "8px", fontWeight: 900, fontSize: "14px", cursor: "pointer" }}
            >
              Enviar Solicitud por WhatsApp 💬
            </button>
            <button
              onClick={() => setInquired(false)}
              style={{ background: "transparent", color: "#64748B", width: "100%", padding: "10px", border: "none", fontSize: "12px", fontWeight: 700, marginTop: "8px", cursor: "pointer" }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <footer style={{ background: "#0A1128", color: "#64748B", padding: "40px 20px", textAlign: "center", fontSize: "12px" }}>
        Punta Cana Coastal Escapes · Cap Cana Resort, Punta Cana, La Altagracia, R.D.<br/>
        <span style={{ color: "#0EA5E9" }}>Demo Template Powered by Altamar Web Studio</span>
      </footer>

    </div>
  );
}
