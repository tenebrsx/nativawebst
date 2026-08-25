"use client";

import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";

export default function SDQDentalDemo() {
  const [activeTab, setActiveTab] = useState<"general" | "cosmetic" | "specialty">("general");
  const [booked, setBooked] = useState(false);
  const [selectedService, setSelectedService] = useState("Limpieza & Profilaxis Ultrasónica");

  const services = {
    general: [
      { title: "Limpieza Ultrasónica & Examen Completo", desc: "Eliminación profunda de placa, profilaxis con tecnología alemana y diagnóstico digital 3D.", tag: "Preventivo", price: "RD$ 2,500", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" },
      { title: "Tratamiento de Conducto (Endodoncia)", desc: "Procedimiento de alta precisión en 1 sola sesión sin dolor ni molestia posterior.", tag: "Especializado", price: "RD$ 12,000", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" },
      { title: "Odontopediatría & Cuidado Infantil", desc: "Atención cálida y libre de ansiedad adaptada para los más pequeños de la familia.", tag: "Familiar", price: "RD$ 3,000", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
      { title: "Extracciones Quirúrgicas & Cordales", desc: "Procedimientos guiados por anestesia local o sedación consciente.", tag: "Cirugía", price: "RD$ 6,500", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80" }
    ],
    cosmetic: [
      { title: "Diseño de Sonrisa & Carillas BioClear", desc: "Restauración estética de alta precisión en porcelana o resina biocompatible.", tag: "Estética", price: "RD$ 18,000", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" },
      { title: "Blanqueamiento LED de Alta Intensidad", desc: "Aclaramiento de hasta 4 tonos en 1 sola sesión de 45 minutos sin sensibilidad.", tag: "Brillo", price: "RD$ 7,500", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" },
      { title: "Alineadores Invisibles Invisalign®", desc: "Corrección progresiva y discreta sin brackets metálicos.", tag: "Ortodoncia", price: "RD$ 35,000", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
      { title: "Restauración de Dientes Desgastados", desc: "Reconstrucción anatómica para recuperar la mordida y la estética juvenil.", tag: "Rejuvenecimiento", price: "RD$ 14,000", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80" }
    ],
    specialty: [
      { title: "Implantes Dentales & Coronas en Porcelana", desc: "Reemplazo permanente con raíz de titanio y corona biomecánica idéntica al diente natural.", tag: "Implantes", price: "RD$ 28,000", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80" },
      { title: "Sedación Consciente & Odontología Sin Estrés", desc: "Supera el miedo dental con protocolos de sedación aprobados internacionalmente.", tag: "Confort", price: "RD$ 5,000", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
      { title: "Tratamiento de Frenillo Láser (Frenectomía)", desc: "Liberación de frenillo lingual o labial con láser de dióxido de carbono sin sangrado.", tag: "Láser", price: "RD$ 9,000", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" },
      { title: "Tratamiento para Apnea del Sueño & Bruxismo", desc: "Dispositivos bucales nocturnos a medida para mejorar el descanso y proteger los dientes.", tag: "Bienestar", price: "RD$ 11,000", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" }
    ]
  };

  const doctors = [
    { name: "Dr. Carlos Fernández", spec: "Especialista en Rehabilitación Oral & Implantes", exp: "14 años de experiencia · UNIBE / NYU", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80" },
    { name: "Dra. María Laura Torres", spec: "Ortodoncia Invisible & Estética Dental", exp: "10 años de experiencia · PUCMM / São Paulo", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80" }
  ];

  const testimonials = [
    { name: "Lic. Vanessa Rivas", text: "Dra. Laura y el Dr. Carlos hicieron mi tratamiento de carillas en 2 citas. El espacio en Naco es súper cómodo, pulcro y el personal sumamente atento.", role: "Paciente de Estética Dental", stars: 5 },
    { name: "Ing. Manuel Henríquez", text: "Tenía años con fobia al dentista hasta que probé la sedación consciente en Dental BLU. No sentí absolutamente nada de molestia durante mi implante.", role: "Paciente de Implantes", stars: 5 }
  ];

  return (
    <div style={{ background: "#FFFFFF", color: "#1E293B", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      
      {/* Sticky Nativa Demo Banner */}
      <DemoTopBar
        templateName="Plantilla Dental BLU Clinic (Edición Profesional)"
        templateCategory="Salud & Odontología"
        whatsappMessage="Hola Nativa, vi la plantilla profesional de Clínica Dental BLU (#sdq-dental) y quiero personalizarla para mi clínica."
      />

      {/* ─── DENTAL BLU HEADER BAR ──────────────────────────────── */}
      <header style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "16px 0", position: "sticky", top: "42px", zIndex: 50 }}>
        <div className="header-bar" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Custom SVG Vector Dental BLU Brand Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="10" fill="#1E64C4" />
              <path d="M24 10C17.5 10 13 15 13 22C13 29 16 38 20 40C22 41 23 37 24 35C25 37 26 41 28 40C32 38 35 29 35 22C35 15 30.5 10 24 10Z" fill="#FFFFFF" />
              <path d="M24 16C21 16 19 18.5 19 22C19 25 21 27 24 27C27 27 29 25 29 22C29 18.5 27 16 24 16Z" fill="#38BDF8" opacity="0.6" />
            </svg>
            <div>
              <div style={{ fontWeight: 900, fontSize: "19px", color: "#0F172A", letterSpacing: "-0.02em" }}>DENTAL BLU</div>
              <div className="brand-tagline" style={{ fontSize: "9.5px", color: "#1E64C4", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                HIGHLAND HEIGHTS STANDARD · NACO, SANTO DOMINGO
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }} className="nav-link-desktop">
            <a href="#about" style={{ textDecoration: "none", color: "#475569", fontSize: "13.5px", fontWeight: 700 }}>Nosotros</a>
            <a href="#services" style={{ textDecoration: "none", color: "#475569", fontSize: "13.5px", fontWeight: 700 }}>Especialidades</a>
            <a href="#doctors" style={{ textDecoration: "none", color: "#475569", fontSize: "13.5px", fontWeight: 700 }}>Especialistas</a>
            <a href="#testimonials" style={{ textDecoration: "none", color: "#475569", fontSize: "13.5px", fontWeight: 700 }}>Testimonios</a>
            <a href="#appointment" style={{ textDecoration: "none", color: "#475569", fontSize: "13.5px", fontWeight: 700 }}>Contacto</a>
          </div>

          {/* Header Action Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="tel:8095550192"
              style={{ background: "#F1F5F9", color: "#0F172A", padding: "10px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: 800, fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}
              className="nav-link-desktop"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              (809) 555-0192
            </a>
            <a
              href="#appointment"
              style={{ background: "#1E64C4", color: "#FFFFFF", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontWeight: 800, fontSize: "13px", boxShadow: "0 4px 12px rgba(30,100,196,0.25)" }}
            >
              Solicitar Cita
            </a>
          </div>
        </div>
      </header>

      {/* ─── DENTAL BLU HERO SECTION ────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)", padding: "80px 24px", borderBottom: "1px solid #E2E8F0" }}>
        <div className="responsive-two-col-grid" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <span style={{ background: "#DBEAFE", color: "#1E64C4", padding: "4px 12px", borderRadius: "20px", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Cuidado Dental de Confianza · Naco, Santo Domingo
            </span>
            <h1 style={{ fontSize: "clamp(34px, 4.5vw, 52px)", fontWeight: 900, color: "#0F172A", margin: "16px 0", lineHeight: "1.12", letterSpacing: "-0.03em" }}>
              Atención Excepcional para Sonrisas Hermosas y Saludables
            </h1>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.65", margin: "0 0 32px" }}>
              Vive la experiencia Dental BLU: donde la atención personalizada, los tratamientos odontológicos avanzados y un ambiente de total tranquilidad se unan para cuidar de ti y de tu familia.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#appointment"
                style={{ background: "#1E64C4", color: "#FFFFFF", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px", boxShadow: "0 4px 16px rgba(30,100,196,0.3)" }}
              >
                Agendar Consulta en Línea →
              </a>
              <a
                href="https://wa.me/18093588113?text=Hola%20Dental%20BLU,%20deseo%20consultar%20disponibilidad"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#FFFFFF", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px", boxShadow: "0 4px 16px rgba(37,211,102,0.3)", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                WhatsApp Directo
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div style={{ display: "flex", gap: "24px", marginTop: "36px", paddingTop: "24px", borderTop: "1px solid #CBD5E1" }}>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "#1E64C4" }}>4.9 ★★★★★</div>
                <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 700 }}>+350 Reseñas en Google</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "#1E64C4" }}>15+ Años</div>
                <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 700 }}>Especialistas Certificados</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "#166534" }}>0% Dolor</div>
                <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 700 }}>Protocolo de Sedación</div>
              </div>
            </div>
          </div>

          {/* Real Operatory & Clinic Photography Hero Card */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 50px rgba(30,100,196,0.18)", border: "4px solid #FFFFFF" }}>
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Dental BLU Clinic Operatory Room"
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
              />
            </div>
            
            {/* Floating Review Badge Overlay */}
            <div style={{ position: "absolute", bottom: "-20px", left: "20px", background: "#FFFFFF", padding: "16px 20px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.12)", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ background: "#25D366", color: "#fff", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 900, color: "#0F172A" }}>Citas Inmediatas por WhatsApp</div>
                <div style={{ fontSize: "11px", color: "#64748B" }}>Respuesta promedio: 5 minutos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT SECTION ("Tu Sonrisa, Nuestra Pasión") ──────── */}
      <section id="about" style={{ padding: "90px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="responsive-two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          
          {/* Clinic Interior Photo Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
              alt="Dental Reception Lounge"
              style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
            />
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
              alt="Beautiful Healthy Smile"
              style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
            />
          </div>

          <div style={{ background: "#1E64C4", color: "#FFFFFF", borderRadius: "24px", padding: "40px", boxShadow: "0 10px 30px rgba(30,100,196,0.2)" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "#93C5FD" }}>
              FILOSOFÍA DENTAL BLU
            </span>
            <h2 style={{ fontSize: "32px", fontWeight: 900, margin: "12px 0 16px" }}>
              Tu Sonrisa, Nuestra Pasión
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#E0F2FE", margin: "0 0 20px" }}>
              En Dental BLU, tu salud bucal, tu confianza y tu comodidad son nuestra máxima prioridad. Liderados por especialistas formados internacionalmente, nuestra práctica se basa en tres pilares fundamentales: <em>Sonrisas Hermosas, Salud para Toda la Vida y Atención Única.</em>
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#BAE6FD", margin: 0 }}>
              Desde limpiezas preventivas rutinarias hasta implantes dentales avanzados, ortodoncia invisible y frenectomías infantiles con láser, ofrecemos un espectro completo de tratamientos en un ambiente sereno e higiénico.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DOCTORS TEAM SECTION ───────────────────────────────── */}
      <section id="doctors" style={{ background: "#F8FAFC", padding: "80px 24px", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#1E64C4", textTransform: "uppercase" }}>EQUIPO DE ESPECIALISTAS</span>
            <h2 style={{ fontSize: "34px", fontWeight: 900, color: "#0F172A", margin: "4px 0" }}>Conoce a Nuestros Doctores</h2>
            <p style={{ fontSize: "15px", color: "#64748B" }}>Profesionales certificados dedicados al cuidado integral de tu salud bucal.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "32px" }}>
            {doctors.map(d => (
              <div key={d.name} style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
                <img
                  src={d.img}
                  alt={d.name}
                  style={{ width: "100%", height: "280px", objectFit: "cover", objectPosition: "top" }}
                />
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#0F172A", margin: 0 }}>{d.name}</h3>
                  <div style={{ fontSize: "13px", color: "#1E64C4", fontWeight: 800, marginTop: "4px" }}>{d.spec}</div>
                  <div style={{ fontSize: "12px", color: "#64748B", marginTop: "6px" }}>{d.exp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES TABBED SECTION ────────────────────────────── */}
      <section id="services" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#1E64C4", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            SERVICIOS ODONTOLÓGICOS INTEGRALES
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, color: "#0F172A", margin: "8px 0" }}>
            Logra la Sonrisa de tus Sueños
          </h2>
          <p style={{ fontSize: "15px", color: "#64748B" }}>
            Combinamos tecnología odontológica de vanguardia con un trato humano cálido para garantizar resultados duraderos.
          </p>

          {/* Category Tabs */}
          <div style={{ display: "inline-flex", background: "#F1F5F9", border: "1px solid #CBD5E1", padding: "4px", borderRadius: "12px", marginTop: "24px", gap: "4px" }}>
            <button
              onClick={() => setActiveTab("general")}
              style={{ background: activeTab === "general" ? "#1E64C4" : "transparent", color: activeTab === "general" ? "#FFF" : "#475569", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", cursor: "pointer" }}
            >
              Odontología General
            </button>
            <button
              onClick={() => setActiveTab("cosmetic")}
              style={{ background: activeTab === "cosmetic" ? "#1E64C4" : "transparent", color: activeTab === "cosmetic" ? "#FFF" : "#475569", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", cursor: "pointer" }}
            >
              Estética & Sonrisa
            </button>
            <button
              onClick={() => setActiveTab("specialty")}
              style={{ background: activeTab === "specialty" ? "#1E64C4" : "transparent", color: activeTab === "specialty" ? "#FFF" : "#475569", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", cursor: "pointer" }}
            >
              Especialidades & Implantes
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))", gap: "24px" }}>
          {services[activeTab].map(s => (
            <div key={s.title} style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
              <img
                src={s.img}
                alt={s.title}
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 900, background: "#EFF6FF", color: "#1E64C4", padding: "3px 8px", borderRadius: "6px", textTransform: "uppercase" }}>
                    {s.tag}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: 900, color: "#0F172A" }}>{s.price}</span>
                </div>
                <h3 style={{ fontSize: "16.5px", fontWeight: 800, color: "#0F172A", margin: "0 0 8px", lineHeight: "1.3" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.6", margin: 0 }}>{s.desc}</p>
                
                <button
                  onClick={() => { setSelectedService(s.title); document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" }); }}
                  style={{ marginTop: "16px", background: "#F1F5F9", color: "#1E64C4", border: "none", padding: "10px", borderRadius: "8px", fontWeight: 800, fontSize: "12px", cursor: "pointer", width: "100%" }}
                >
                  Seleccionar Tratamiento
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS SECTION ────────────────────────────────── */}
      <section id="testimonials" style={{ background: "#F8FAFC", padding: "80px 24px", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#1E64C4", textTransform: "uppercase" }}>TESTIMONIOS REALES DE PACIENTES</span>
            <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#0F172A", margin: "4px 0" }}>Lo Que Dicen Nuestros Pacientes</h2>
          </div>

          <div className="responsive-two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
            {testimonials.map((t, idx) => (
              <div key={idx} style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "20px", padding: "32px", boxShadow: "0 6px 20px rgba(0,0,0,0.03)" }}>
                <div style={{ color: "#F59E0B", fontSize: "16px", fontWeight: 900, marginBottom: "12px" }}>★★★★★</div>
                <p style={{ fontSize: "14.5px", color: "#334155", lineHeight: "1.65", margin: "0 0 20px", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div>
                  <div style={{ fontWeight: 900, fontSize: "15px", color: "#0F172A" }}>{t.name}</div>
                  <div style={{ fontSize: "11.5px", color: "#1E64C4", fontWeight: 700, marginTop: "2px" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPOINTMENT FORM SECTION ──────────────────────────── */}
      <section id="appointment" style={{ padding: "80px 24px", maxWidth: "680px", margin: "0 auto" }}>
        <div style={{ background: "#FFFFFF", border: "2px solid #1E64C4", borderRadius: "24px", padding: "40px", boxShadow: "0 20px 40px rgba(30,100,196,0.12)" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#1E64C4", textTransform: "uppercase" }}>Citas Prioritarias</span>
            <h2 style={{ fontSize: "28px", fontWeight: 900, color: "#0F172A", margin: "4px 0" }}>Solicitar Evaluación Dental</h2>
            <p style={{ fontSize: "13.5px", color: "#64748B", margin: 0 }}>
              Completa el formulario a continuación. Recibirás tu confirmación de cita en WhatsApp en menos de 15 minutos.
            </p>
          </div>

          {booked ? (
            <div style={{ background: "#F0FDF4", border: "1.5px solid #86EFAC", padding: "28px", borderRadius: "16px", textAlign: "center" }}>
              <h3 style={{ color: "#166534", fontWeight: 900, fontSize: "20px", margin: "0 0 8px" }}>¡Solicitud Confirmada!</h3>
              <p style={{ fontSize: "13px", color: "#15803D", lineHeight: "1.6" }}>
                El equipo médico de Dental BLU Naco te ha asignado turno prioritario. Nos comunicaremos a tu WhatsApp para coordinar tu hora exacta.
              </p>
              <button onClick={() => setBooked(false)} style={{ background: "#166534", color: "#FFF", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", marginTop: "16px", cursor: "pointer" }}>
                Solicitar otra cita
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={{ fontSize: "11.5px", fontWeight: 800, color: "#334155" }}>Tratamiento Requerido</label>
                <input type="text" value={selectedService} readOnly style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1", background: "#F8FAFC", fontWeight: 700, fontSize: "13.5px", color: "#1E64C4", marginTop: "4px" }} />
              </div>
              <div>
                <label style={{ fontSize: "11.5px", fontWeight: 800, color: "#334155" }}>Nombre y Apellido *</label>
                <input type="text" required placeholder="ej. María Mercedes Almonte" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "13.5px", marginTop: "4px" }} />
              </div>
              <div>
                <label style={{ fontSize: "11.5px", fontWeight: 800, color: "#334155" }}>WhatsApp de Contacto *</label>
                <input type="tel" required placeholder="809-555-0192" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "13.5px", marginTop: "4px" }} />
              </div>
              <button type="submit" style={{ background: "#1E64C4", color: "#FFFFFF", border: "none", padding: "16px", borderRadius: "10px", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 16px rgba(30,100,196,0.3)", marginTop: "6px" }}>
                Confirmar Cita por WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── DENTAL BLU FOOTER ──────────────────────────────────── */}
      <footer style={{ background: "#0F172A", color: "#94A3B8", padding: "50px 24px", textAlign: "center", fontSize: "13px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontWeight: 900, fontSize: "18px", color: "#FFFFFF", marginBottom: "8px" }}>Dental BLU SDQ</div>
          <div>Calle Manuel de Jesús Troncoso #14, Ensanche Naco, Santo Domingo, República Dominicana</div>
          <div style={{ marginTop: "12px", color: "#64748B" }}>Teléfono: (809) 555-0192 · Correo: citas@dentalblusdq.com</div>
          <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #1E293B", color: "#38BDF8", fontWeight: 800, fontSize: "11.5px" }}>
            Demo Template Built by Nativa Web Studio · Inspired by DentalBLU.com
          </div>
        </div>
      </footer>

    </div>
  );
}
