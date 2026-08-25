"use client";

import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";

export default function NacoLegalDemo() {
  const [submitted, setSubmitted] = useState(false);

  const practices = [
    { title: "Derecho Corporativo & Fusiones", desc: "Estructuración de sociedades, contratos comerciales y gobierno corporativo en la R.D." },
    { title: "Inversión Extranjera & Zonas Francas", desc: "Asesoría legal para empresas internacionales estableciendo operaciones en el país." },
    { title: "Propiedad Intelectual & Marcas", desc: "Registro de marcas comerciales, patentes y protección de activos intangibles ante ONAPI." },
    { title: "Litigios & Arbitraje Comercial", desc: "Representación jurídica de alta severidad en tribunales de Santo Domingo y cortes arbitrales." }
  ];

  return (
    <div style={{ background: "#0A1128", color: "#ffffff", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Sticky Altamar Demo Banner */}
      <DemoTopBar
        templateName="Plantilla Naco Abogados & Asesores Corporativos"
        templateCategory="Abogados & Servicios"
        whatsappMessage="Hola Altamar, vi el demo de Naco Law (#naco-legal) y quiero cotizar una plataforma corporativa legal para nuestra firma."
      />

      {/* ─── LEGAL HEADER ───────────────────────────────────────── */}
      <header style={{ background: "#0A1128", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "20px 0", position: "sticky", top: "42px", zIndex: 50 }}>
        <div className="header-bar" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: "20px", letterSpacing: "-0.02em", color: "#ffffff" }}>
              NOLASCO & ALMONTE
            </div>
            <div className="brand-tagline" style={{ fontSize: "9.5px", color: "#0EA5E9", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              ABOGADOS Y ASESORES CORPORATIVOS · SANTO DOMINGO
            </div>
          </div>

          <a
            href="https://wa.me/18093588113?text=Hola%20Nolasco%20%26%20Almonte,%20deseo%20una%20consulta%20legal"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#0EA5E9", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none", fontWeight: 800, fontSize: "12.5px" }}
          >
            Solicitar Consulta ⚖️
          </a>
        </div>
      </header>

      {/* ─── LEGAL HERO ─────────────────────────────────────────── */}
      <section style={{ padding: "80px 20px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ color: "#0EA5E9", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            EXCELENCIA JURÍDICA & RIGOR CORPORATIVO
          </span>
          <h1 style={{ fontSize: "clamp(34px, 5vw, 50px)", fontWeight: 900, margin: "16px 0", lineHeight: "1.15" }}>
            Protegemos el Crecimiento de tu Empresa
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6", margin: "0 0 32px" }}>
            Más de 20 años de experiencia asesorando corporaciones nacionales e inversionistas internacionales en la República Dominicana.
          </p>

          <a
            href="#consulta"
            style={{ background: "#ffffff", color: "#0A1128", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "14px" }}
          >
            Agendar Sesión de Estrategia Legal →
          </a>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ─────────────────────────────────────── */}
      <section style={{ padding: "70px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#0EA5E9", textTransform: "uppercase" }}>Áreas de Práctica</span>
          <h2 style={{ fontSize: "30px", fontWeight: 900, margin: "4px 0" }}>Soluciones Legales Integrales</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
          {practices.map(p => (
            <div key={p.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "28px" }}>
              <div style={{ fontSize: "24px", marginBottom: "12px" }}>🏛️</div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, margin: "0 0 10px", color: "#ffffff" }}>{p.title}</h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.6", margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONSULTATION FORM ─────────────────────────────────── */}
      <section id="consulta" style={{ padding: "60px 20px", maxWidth: "600px", margin: "0 auto 80px" }}>
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(14,165,233,0.3)", borderRadius: "16px", padding: "36px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 900, margin: "0 0 8px", textAlign: "center" }}>Solicitar Consulta Privada</h3>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", textAlign: "center", margin: "0 0 28px" }}>
            Un socio de la firma analizará su requerimiento legal y responderá confidencialmente en 4 horas laborables.
          </p>

          {submitted ? (
            <div style={{ background: "rgba(16,185,129,0.15)", border: "1px solid #10B981", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "24px" }}>✅</div>
              <h4 style={{ color: "#10B981", fontWeight: 800, margin: "8px 0" }}>Solicitud Confidencial Recibida</h4>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)" }}>Un abogado senior revisará sus datos y se comunicará con usted vía WhatsApp / Correo.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 800, color: "#94A3B8" }}>Nombre o Razón Social *</label>
                <input type="text" required placeholder="ej. Grupo Empresarial SDQ" style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: "13px", marginTop: "4px" }} />
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 800, color: "#94A3B8" }}>WhatsApp de Contacto *</label>
                <input type="tel" required placeholder="809-555-0199" style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: "13px", marginTop: "4px" }} />
              </div>
              <button type="submit" style={{ background: "#0EA5E9", color: "#fff", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 900, fontSize: "14px", cursor: "pointer" }}>
                Enviar Consulta Confidencial →
              </button>
            </form>
          )}
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "40px 20px", textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
        Nolasco & Almonte Abogados · Torre Forum, Av. Tiradentes #42, Naco, Santo Domingo, R.D.<br/>
        <span style={{ color: "#0EA5E9" }}>Demo Template Powered by Altamar Web Studio</span>
      </footer>

    </div>
  );
}
