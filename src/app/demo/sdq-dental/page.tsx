"use client";

import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";

export default function SDQDentalDemo() {
  const [selectedService, setSelectedService] = useState("Diseño de Sonrisa");
  const [booked, setBooked] = useState(false);

  const services = [
    { title: "Limpieza Ultrasónica & Cuidado Preventivo", price: "RD$ 2,500", desc: "Eliminación profunda de placa y profilaxis con tecnología alemana." },
    { title: "Diseño de Sonrisa & Carillas Estéticas", price: "RD$ 18,000", desc: "Restauración de alta precisión en porcelana con simulación 3D." },
    { title: "Ortodoncia Invisible (Alineadores Aligner)", price: "RD$ 35,000", desc: "Alineamiento progresivo sin brackets metálicos." },
    { title: "Blanqueamiento LED de Alta Intensidad", price: "RD$ 7,500", desc: "Aclaramiento de hasta 4 tonos en 1 sola sesión de 45 minutos." }
  ];

  const doctors = [
    { name: "Dr. Carlos Fernández", spec: "Especialista en Rehabilitación Oral & Implantes", exp: "14 años de experiencia · UNIBE / NYU" },
    { name: "Dra. María Laura Torres", spec: "Ortodoncia Invisible & Estética Dental", exp: "10 años de experiencia · PUCMM / São Paulo" }
  ];

  return (
    <div style={{ background: "#F8FAFC", color: "#0F172A", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Sticky Altamar Demo Banner */}
      <DemoTopBar
        templateName="Plantilla SDQ Clínica Médica & Odontológica"
        templateCategory="Salud & Odontología"
        whatsappMessage="Hola Altamar, vi el demo de la Clínica SDQ Dental (#sdq-dental) y quiero cotizar esta plantilla para mi centro médico."
      />

      {/* ─── DENTAL CLINIC HEADER ───────────────────────────────── */}
      <header style={{ background: "#ffffff", borderBottom: "1px solid #E2E8F0", padding: "16px 0", position: "sticky", top: "42px", zIndex: 50 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ background: "#0EA5E9", color: "#fff", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "20px" }}>
              🦷
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: "18px", color: "#0F172A" }}>SDQ Dental Care</div>
              <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 700, letterSpacing: "0.08em" }}>NACO · SANTO DOMINGO</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ fontSize: "12px", color: "#64748B" }} className="nav-link-desktop">
              📞 (809) 555-0192 · Lun–Sáb 8am–6pm
            </div>
            <a
              href="https://wa.me/18093588113?text=Hola%20SDQ%20Dental,%20quiero%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#0EA5E9", color: "#fff", padding: "8px 16px", borderRadius: "6px", textDecoration: "none", fontWeight: 800, fontSize: "13px" }}
            >
              Agendar Cita 📅
            </a>
          </div>
        </div>
      </header>

      {/* ─── CLINIC HERO ────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)", color: "#fff", padding: "70px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ background: "rgba(14,165,233,0.2)", color: "#38BDF8", border: "1px solid rgba(56,189,248,0.3)", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em" }}>
            ODONTOLOGÍA AVANZADA EN NACO, SANTO DOMINGO
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, margin: "16px 0", lineHeight: "1.15" }}>
            Tu Sonrisa en Manos de Especialistas
          </h1>
          <p style={{ fontSize: "16px", color: "#94A3B8", lineHeight: "1.6", margin: "0 0 28px" }}>
            Tecnología digital de diagnóstico 3D, tratamientos sin dolor y atención personalizada en Santo Domingo. Agenda tu evaluación hoy mismo.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#agendar"
              style={{ background: "#0EA5E9", color: "#fff", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px" }}
            >
              Agendar Evaluación Virtual →
            </a>
            <a
              href="https://wa.me/18093588113?text=Hola,%20quisiera%20informacion"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#25D366", color: "#fff", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px" }}
            >
              Consulta Directa por WhatsApp 💬
            </a>
          </div>
        </div>
      </section>

      {/* ─── TREATMENTS SECTION ─────────────────────────────────── */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#0EA5E9", textTransform: "uppercase" }}>Nuestros Servicios</span>
          <h2 style={{ fontSize: "28px", fontWeight: 900, margin: "4px 0" }}>Especialidades Dentales</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {services.map(s => (
            <div key={s.title} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 800, color: "#0EA5E9" }}>{s.price}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 800, margin: "8px 0" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.5" }}>{s.desc}</p>
              </div>
              <button
                onClick={() => { setSelectedService(s.title); document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{ background: "#F1F5F9", color: "#0F172A", border: "none", padding: "10px", borderRadius: "6px", fontWeight: 800, fontSize: "12px", cursor: "pointer", marginTop: "16px" }}
              >
                Seleccionar para Cita 📌
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DOCTORS SECTION ───────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "60px 20px", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#0EA5E9", textTransform: "uppercase" }}>Equipo Médico</span>
            <h2 style={{ fontSize: "28px", fontWeight: 900, margin: "4px 0" }}>Nuestros Especialistas</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {doctors.map(d => (
              <div key={d.name} style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "24px", display: "flex", gap: "16px", alignItems: "center" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#0EA5E9", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "24px" }}>
                  🩺
                </div>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: 800, margin: 0 }}>{d.name}</h3>
                  <div style={{ fontSize: "12px", color: "#0EA5E9", fontWeight: 700, marginTop: "2px" }}>{d.spec}</div>
                  <div style={{ fontSize: "11px", color: "#64748B", marginTop: "4px" }}>{d.exp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPOINTMENT FORM SIMULATOR ────────────────────────── */}
      <section id="agendar" style={{ padding: "60px 20px", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ background: "#fff", border: "1.5px solid #0EA5E9", borderRadius: "16px", padding: "32px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 900, margin: "0 0 6px", textAlign: "center" }}>Agendar Consulta Virtual</h3>
          <p style={{ fontSize: "13px", color: "#64748B", textAlign: "center", margin: "0 0 24px" }}>
            Selecciona tu tratamiento e ingresa tus datos. Recibirás confirmación por WhatsApp en menos de 15 minutos.
          </p>

          {booked ? (
            <div style={{ background: "#F0FDF4", border: "1px solid #86EFAC", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "24px" }}>🎉</div>
              <h4 style={{ color: "#166534", fontWeight: 800, margin: "8px 0" }}>¡Solicitud Enviada con Éxito!</h4>
              <p style={{ fontSize: "12px", color: "#15803D" }}>El equipo de SDQ Dental se pondrá en contacto contigo por WhatsApp para confirmar tu hora de cita.</p>
              <button onClick={() => setBooked(false)} style={{ background: "#166534", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: 800, fontSize: "12px", marginTop: "12px", cursor: "pointer" }}>
                Agendar otra cita
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 800, color: "#475569" }}>Tratamiento Seleccionado</label>
                <input type="text" value={selectedService} readOnly style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #CBD5E1", background: "#F8FAFC", fontWeight: 700, fontSize: "13px", marginTop: "4px" }} />
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 800, color: "#475569" }}>Tu Nombre Completo *</label>
                <input type="text" required placeholder="ej. Lic. Alejandro Gómez" style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #CBD5E1", fontSize: "13px", marginTop: "4px" }} />
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 800, color: "#475569" }}>Teléfono / WhatsApp *</label>
                <input type="tel" required placeholder="809-555-0192" style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #CBD5E1", fontSize: "13px", marginTop: "4px" }} />
              </div>
              <button type="submit" style={{ background: "#0EA5E9", color: "#fff", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 900, fontSize: "14px", cursor: "pointer", marginTop: "8px" }}>
                Confirmar Cita por WhatsApp 📅
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────── */}
      <footer style={{ background: "#0F172A", color: "#94A3B8", padding: "40px 20px", textAlign: "center", fontSize: "12px" }}>
        <div>SDQ Dental Care · Calle Manuel de Jesús Troncoso #14, Naco, Santo Domingo, R.D.</div>
        <div style={{ marginTop: "8px", color: "#64748B" }}>Demo Template Powered by Altamar Web Studio</div>
      </footer>

    </div>
  );
}
