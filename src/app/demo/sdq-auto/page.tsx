"use client";

import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";

export default function SDQAutoDemo() {
  const [selectedServices, setSelectedServices] = useState<number[]>([1, 3]);

  const serviceOptions = [
    { id: 1, name: "Cambio de Aceite Sintético & Filtros", price: 3800, time: "45 min" },
    { id: 2, name: "Inspección & Cambio de Pastillas de Freno", price: 4500, time: "60 min" },
    { id: 3, name: "Diagnóstico Computarizado OBD2", price: 1500, time: "30 min" },
    { id: 4, name: "Alineación 3D & Balanceo de 4 Gomas", price: 2200, time: "40 min" }
  ];

  const toggleService = (id: number) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedServices.reduce((sum, id) => {
    const item = serviceOptions.find(s => s.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  return (
    <div style={{ background: "#0F172A", color: "#F8FAFC", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Sticky Altamar Demo Banner */}
      <DemoTopBar
        templateName="Plantilla República Taller Automotriz & Flotas"
        templateCategory="Automotriz & Servicios"
        whatsappMessage="Hola Altamar, vi el demo de República Auto (#sdq-auto) y quiero cotizar un cotizador de servicios automotrices para mi taller."
      />

      {/* ─── AUTO HEADER ────────────────────────────────────────── */}
      <header style={{ background: "#1E293B", borderBottom: "1px solid #334155", padding: "18px 0", position: "sticky", top: "42px", zIndex: 50 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "24px" }}>🚘</span>
            <div>
              <div style={{ fontWeight: 900, fontSize: "18px", letterSpacing: "-0.02em", color: "#ffffff" }}>REPÚBLICA FLEET SERVICES</div>
              <div style={{ fontSize: "9.5px", color: "#EF4444", fontWeight: 800, letterSpacing: "0.15em" }}>MANTENIMIENTO AUTOMOTRIZ · SANTO DOMINGO</div>
            </div>
          </div>

          <a
            href="https://wa.me/18093588113?text=Hola%20Rep%C3%BAblica%20Auto,%20quiero%20cotizar%20un%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#EF4444", color: "#fff", padding: "8px 16px", borderRadius: "6px", textDecoration: "none", fontWeight: 900, fontSize: "12.5px" }}
          >
            Taller Directo 🛠️
          </a>
        </div>
      </header>

      {/* ─── AUTO HERO ──────────────────────────────────────────── */}
      <section style={{ padding: "70px 20px", textAlign: "center", borderBottom: "1px solid #334155" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <span style={{ color: "#EF4444", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            TECNOLOGÍA DE DIAGNÓSTICO EN TIEMPO REAL
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, margin: "16px 0 12px" }}>
            Cotiza el Mantenimiento de tu Vehículo en 1 Minuto
          </h1>
          <p style={{ fontSize: "15px", color: "#94A3B8", lineHeight: "1.6", margin: "0 0 28px" }}>
            Selecciona los servicios que necesita tu vehículo e ingresa tu WhatsApp. Recibirás tu turno de taller confirmado sin esperar en fila.
          </p>
        </div>
      </section>

      {/* ─── INTERACTIVE ESTIMATOR ─────────────────────────────── */}
      <section style={{ padding: "60px 20px", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ background: "#1E293B", border: "1.5px solid #334155", borderRadius: "16px", padding: "32px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 900, margin: "0 0 4px", textAlign: "center" }}>Estimador Interactivo de Servicio</h3>
          <p style={{ fontSize: "12.5px", color: "#94A3B8", textAlign: "center", margin: "0 0 24px" }}>
            Marca las casillas de los trabajos requeridos:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {serviceOptions.map(s => {
              const isChecked = selectedServices.includes(s.id);
              return (
                <div
                  key={s.id}
                  onClick={() => toggleService(s.id)}
                  style={{
                    background: isChecked ? "rgba(239,68,68,0.15)" : "#0F172A",
                    border: `1.5px solid ${isChecked ? "#EF4444" : "#334155"}`,
                    borderRadius: "10px",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "4px", border: `2px solid ${isChecked ? "#EF4444" : "#64748B"}`, background: isChecked ? "#EF4444" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: "12px" }}>
                      {isChecked ? "✓" : ""}
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "14px", color: "#fff" }}>{s.name}</div>
                      <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "2px" }}>Tiempo est.: {s.time}</div>
                    </div>
                  </div>
                  <div style={{ fontWeight: 900, fontSize: "15px", color: "#EF4444" }}>
                    RD$ {s.price.toLocaleString()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Estimation Summary Box */}
          <div style={{ background: "#0F172A", borderRadius: "10px", padding: "20px", border: "1px solid #334155", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
            <div>
              <div style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 700 }}>Total Estimado de Servicio</div>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "#10B981" }}>
                RD$ {totalPrice.toLocaleString()}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "11px", color: "#94A3B8" }}>{selectedServices.length} servicios seleccionados</div>
            </div>
          </div>

          <a
            href={`https://wa.me/18093588113?text=Hola%20Rep%C3%BAblica%20Auto,%20deseo%20reservar%20mantenimiento.%20Total%20estimado:%20RD$%20${totalPrice}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textAlign: "center", background: "#25D366", color: "#fff", textDecoration: "none", padding: "14px", borderRadius: "8px", fontWeight: 900, fontSize: "14px" }}
          >
            Enviar Cotización por WhatsApp 💬
          </a>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #334155", padding: "40px 20px", textAlign: "center", fontSize: "12px", color: "#64748B" }}>
        República Fleet Services · Av. Luperón #88, Santo Domingo, R.D.<br/>
        <span style={{ color: "#EF4444" }}>Demo Template Powered by Altamar Web Studio</span>
      </footer>

    </div>
  );
}
