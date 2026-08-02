"use client";

import { useState } from "react";

export default function NacoLegalProduction() {
  const [modalOpen, setModalOpen] = useState(false);
  const [practiceSelected, setPracticeSelected] = useState("Derecho Corporativo & M&A");
  const [booked, setBooked] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const practiceAreas = [
    { title: "Derecho Corporativo, M&A & Estructuración NCF", desc: "Constitución de sociedades (SRL, SA, SAS), reestructuración patrimonial, fusiones, adquisiciones y cumplimiento ante la DGII.", tag: "Empresarial" },
    { title: "Inversión Extranjera & Exenciones Fiscales (Ley 16-95 / Confotur)", desc: "Asesoría legal para inversionistas internacionales. Gestión de incentivos tributarios para proyectos turísticos e inmobiliarios.", tag: "Inversión" },
    { title: "Derecho Inmobiliario, Deslindes & Títulos", desc: "Verificación de cargas, depuración de títulos ante el Registro de Títulos y estructuración de fideicomisos inmobiliarios.", tag: "Inmobiliario" },
    { title: "Litigios Complejos & Arbitraje Comercial", desc: "Representación estratégica en disputas comerciales ante las cámaras de comercio y tribunales de la República Dominicana.", tag: "Litigios" },
    { title: "Propiedad Intelectual & Registro de Marcas (ONAPI)", desc: "Protección de marcas, patentes, derechos de autor y nombres comerciales ante la Oficina Nacional de la Propiedad Industrial.", tag: "Marcas" },
    { title: "Derecho Laboral Corporativo & Contratos", desc: "Redacción de contratos ejecutivos, reglamentos internos y asistencia preventiva ante el Ministerio de Trabajo.", tag: "Laboral" }
  ];

  const partners = [
    {
      name: "Lic. Fernando Nolasco, LL.M.",
      role: "Socio Fundador · Derecho Corporativo & Arbitraje",
      credentials: "Graduado Summa Cum Laude PUCMM · Máster en Derecho Internacional por Harvard Law School",
      bio: "Con más de 18 años de experiencia, el Lic. Nolasco ha liderado transacciones corporativas multimillonarias e inversiones extranjeras directas en República Dominicana.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Dra. Patricia Almonte, Ph.D.",
      role: "Socia Directora · Derecho Inmobiliario & Fiscal",
      credentials: "Graduada Unibe · Doctorado en Derecho Tributario por Université Paris 1 Panthéon-Sorbonne",
      bio: "Especialista en planificación fiscal internacional, exención CONFOTUR para desarrollos turísticos y protección de activos patrimoniales.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const faqs = [
    { q: "¿Cuáles son los requisitos para constituir una empresa (SRL) en República Dominicana?", a: "Para constituir una SRL se requiere el registro de nombre comercial en ONAPI, la redacción de los estatutos sociales, el pago del impuesto de constitución (1% del capital social) ante la DGII, y la inscripción en el Registro Mercantil de la Cámara de Comercio. El proceso toma entre 7 a 12 días laborables." },
    { q: "¿Cómo beneficia la Ley CONFOTUR a la inversión en propiedades turísticas?", a: "La Ley 158-01 (CONFOTUR) exime al comprador del pago del 3% del Impuesto a la Transferencia Inmobiliaria y del Impuesto al Patrimonio Inmobiliario (IPI) del 1% anual durante 15 años, lo que optimiza significativamente el retorno de inversión." },
    { q: "¿Ofrecen servicios de consulta jurídica confidencial por videollamada?", a: "Sí, coordinamos reuniones presenciales en nuestra firma en Santo Domingo o consultas virtuales confidenciales vía Zoom/Teams para clientes corporativos internacionales." }
  ];

  return (
    <div style={{ background: "#0A1128", color: "#F8FAFC", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      
      {/* ─── TOP BAR ────────────────────────────────────────────── */}
      <div style={{ background: "#050914", color: "#94A3B8", padding: "10px 24px", fontSize: "12px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <span style={{ color: "#38BDF8", fontWeight: 700 }}>📍 Torre Forum, Av. 27 de Febrero #208, Suite 6A, Ensanche Naco, Santo Domingo</span>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="tel:8095559090" style={{ color: "#FFF", textDecoration: "none", fontWeight: 800 }}>📞 (809) 555-9090</a>
            <a href="https://wa.me/18093588113?text=Deseo%20coordinar%20una%20consulta%20legal" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "none", fontWeight: 800 }}>💬 WhatsApp Firma</a>
          </div>
        </div>
      </div>

      {/* ─── CORPORATE HEADER ───────────────────────────────────── */}
      <header style={{ background: "#0A1128", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "20px 0", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ background: "linear-gradient(135deg, #38BDF8 0%, #1E64C4 100%)", color: "#FFF", width: "42px", height: "42px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "18px" }}>
              N&A
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: "20px", color: "#FFFFFF", letterSpacing: "0.04em" }}>NOLASCO & ALMONTE</div>
              <div style={{ fontSize: "9.5px", color: "#38BDF8", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                ABOGADOS · CONSULTORÍA JURÍDICA EMPRESARIAL
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "28px" }} className="nav-link-desktop">
            <a href="#about" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "14px", fontWeight: 700 }}>Firma</a>
            <a href="#practices" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "14px", fontWeight: 700 }}>Áreas de Práctica</a>
            <a href="#partners" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "14px", fontWeight: 700 }}>Socios</a>
            <a href="#faq" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "14px", fontWeight: 700 }}>Preguntas Legales</a>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            style={{ background: "#38BDF8", color: "#0A1128", border: "none", padding: "12px 24px", borderRadius: "8px", fontWeight: 900, fontSize: "14px", cursor: "pointer", boxShadow: "0 4px 16px rgba(56,189,248,0.25)" }}
          >
            Consulta Confidencial →
          </button>
        </div>
      </header>

      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <section style={{ background: "radial-gradient(circle at top right, #1E293B 0%, #0A1128 60%)", padding: "100px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          <div>
            <span style={{ background: "rgba(56,189,248,0.1)", color: "#38BDF8", border: "1px solid rgba(56,189,248,0.3)", padding: "5px 14px", borderRadius: "20px", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              FIRMA LEGAL LÍDER EN SANTO DOMINGO
            </span>
            <h1 style={{ fontSize: "clamp(36px, 4.8vw, 56px)", fontWeight: 900, color: "#FFFFFF", margin: "20px 0 20px", lineHeight: "1.12", letterSpacing: "-0.03em" }}>
              Protegemos y Escalamos tus Inversiones en República Dominicana
            </h1>
            <p style={{ fontSize: "16.5px", color: "#94A3B8", lineHeight: "1.7", margin: "0 0 36px" }}>
              Proporcionamos asesoría jurídica estratégica a multinacionales, inversionistas extranjeros y grupos empresariales locales en materia corporativa, tributaria e inmobiliaria.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button
                onClick={() => setModalOpen(true)}
                style={{ background: "#38BDF8", color: "#0A1128", border: "none", padding: "16px 32px", borderRadius: "8px", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 20px rgba(56,189,248,0.3)" }}
              >
                Agendar Consulta Confidencial
              </button>
              <a
                href="https://wa.me/18093588113?text=Hola%20Nolasco%20%26%20Almonte,%20deseo%20una%20consulta%20corporativa"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#FFFFFF", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                WhatsApp Directo
              </a>
            </div>

            {/* Proof Badges */}
            <div style={{ display: "flex", gap: "32px", marginTop: "44px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div>
                <div style={{ fontSize: "24px", fontWeight: 900, color: "#38BDF8" }}>USD $450M+</div>
                <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 700 }}>En Transacciones Estructuradas</div>
              </div>
              <div>
                <div style={{ fontSize: "24px", fontWeight: 900, color: "#38BDF8" }}>18+ Años</div>
                <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 700 }}>Trayectoria Legal Intachable</div>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
              alt="Torre Nolasco & Almonte Corporate Offices"
              style={{ width: "100%", height: "460px", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ─────────────────────────────────────── */}
      <section id="practices" style={{ padding: "90px 24px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 56px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#38BDF8", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            ESPECIALIZACIÓN JURÍDICA
          </span>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "8px 0" }}>Áreas de Práctica Principal</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
          {practiceAreas.map(p => (
            <div key={p.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ background: "rgba(56,189,248,0.1)", color: "#38BDF8", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 800, textTransform: "uppercase" }}>
                  {p.tag}
                </span>
                <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#FFFFFF", margin: "14px 0 10px", lineHeight: "1.3" }}>{p.title}</h3>
                <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: "1.65", margin: 0 }}>{p.desc}</p>
              </div>

              <button
                onClick={() => { setPracticeSelected(p.title); setModalOpen(true); }}
                style={{ marginTop: "24px", background: "transparent", color: "#38BDF8", border: "1px solid rgba(56,189,248,0.3)", padding: "12px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", cursor: "pointer", width: "100%" }}
              >
                Solicitar Dictamen Legal →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SENIOR PARTNERS ────────────────────────────────────── */}
      <section id="partners" style={{ background: "rgba(255,255,255,0.02)", padding: "90px 24px", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#38BDF8", letterSpacing: "0.15em", textTransform: "uppercase" }}>LIDERAZGO CORPORATIVO</span>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "6px 0" }}>Socios Directores</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "36px" }}>
            {partners.map(p => (
              <div key={p.name} style={{ background: "#0A1128", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top" }} />
                <div style={{ padding: "32px" }}>
                  <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>{p.name}</h3>
                  <div style={{ fontSize: "13.5px", color: "#38BDF8", fontWeight: 800, marginTop: "4px" }}>{p.role}</div>
                  <div style={{ fontSize: "12px", color: "#CBD5E1", marginTop: "12px", fontWeight: 700, background: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
                    🎓 {p.credentials}
                  </div>
                  <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: "1.65", marginTop: "14px" }}>{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "90px 24px", maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#38BDF8", letterSpacing: "0.15em", textTransform: "uppercase" }}>RESPUESTAS LEGALES</span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, color: "#FFFFFF", margin: "6px 0" }}>Preguntas Frecuentes de Inversionistas</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((f, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  style={{ width: "100%", padding: "20px 24px", background: "none", border: "none", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontWeight: 800, fontSize: "16px", color: "#FFFFFF" }}
                >
                  <span>{f.q}</span>
                  <span style={{ fontSize: "18px", color: "#38BDF8", fontWeight: 900 }}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 24px 20px", color: "#94A3B8", fontSize: "14.5px", lineHeight: "1.7", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px" }}>
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── CONSULTATION MODAL ─────────────────────────────────── */}
      {modalOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(5,9,20,0.8)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}>
          <div style={{ background: "#0A1128", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "24px", padding: "40px", maxWidth: "540px", width: "100%", position: "relative" }}>
            <button onClick={() => setModalOpen(false)} style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.1)", border: "none", width: "32px", height: "32px", borderRadius: "50%", color: "#FFF", fontWeight: 900, cursor: "pointer" }}>✕</button>

            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#38BDF8", textTransform: "uppercase" }}>CONSULTA CONFIDENCIAL</span>
              <h3 style={{ fontSize: "24px", fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>Solicitud de Asesoría Legal</h3>
            </div>

            {booked ? (
              <div style={{ background: "rgba(16,185,129,0.1)", border: "1px solid #10B981", padding: "24px", borderRadius: "16px", textAlign: "center" }}>
                <h4 style={{ color: "#10B981", fontWeight: 900, fontSize: "18px", margin: "0 0 6px" }}>¡Solicitud Confirmada!</h4>
                <p style={{ fontSize: "13px", color: "#A7F3D0", lineHeight: "1.6", margin: 0 }}>Un socio de la firma coordinará la reunión confidencial a través de su correo o WhatsApp.</p>
                <button onClick={() => { setBooked(false); setModalOpen(false); }} style={{ background: "#10B981", color: "#FFF", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", marginTop: "16px", cursor: "pointer" }}>Cerrar</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>Materia Requerida</label>
                  <input type="text" value={practiceSelected} readOnly style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", fontWeight: 700, fontSize: "13.5px", color: "#38BDF8", marginTop: "4px" }} />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>Nombre Completo / Empresa *</label>
                  <input type="text" required placeholder="ej. Grupo Industrial Naco SRL" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "#050914", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>WhatsApp / Correo *</label>
                  <input type="text" required placeholder="contacto@empresa.com / 809-555-9090" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "#050914", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
                </div>
                <button type="submit" style={{ background: "#38BDF8", color: "#0A1128", border: "none", padding: "16px", borderRadius: "10px", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 16px rgba(56,189,248,0.3)", marginTop: "6px" }}>
                  Enviar Solicitud Confidencial →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ─── PRODUCTION FOOTER ──────────────────────────────────── */}
      <footer style={{ background: "#050914", color: "#64748B", padding: "60px 24px 30px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "13px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px", marginBottom: "48px" }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: "18px", color: "#FFFFFF", marginBottom: "12px" }}>NOLASCO & ALMONTE</div>
              <p style={{ fontSize: "13px", lineHeight: "1.65", color: "#94A3B8", margin: 0 }}>
                Firma legal especializada en derecho corporativo, inversión extranjera y litigios patrimoniales en República Dominicana.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", fontSize: "14px" }}>Sede Principal</div>
              <div>Torre Forum, Av. 27 de Febrero #208, Suite 6A, Ensanche Naco, Santo Domingo.</div>
            </div>
            <div>
              <div style={{ fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", fontSize: "14px" }}>Contacto</div>
              <div>Tel: (809) 555-9090 · Email: contacto@nolascoalmonte.do</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", textAlign: "center", fontSize: "12px" }}>
            © 2026 Nolasco & Almonte Abogados. RNC 1-31-90291-8. Todos los derechos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}
