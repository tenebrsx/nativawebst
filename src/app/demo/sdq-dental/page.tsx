"use client";

import { useState } from "react";

export default function SDQDentalProduction() {
  const [activeTab, setActiveTab] = useState<"general" | "cosmetic" | "specialty">("general");
  const [selectedService, setSelectedService] = useState("Limpieza & Profilaxis Ultrasónica");
  const [booked, setBooked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const insuranceProviders = [
    { name: "Primera ARS de Humano", logo: "HUMANO" },
    { name: "ARS Palic / MAPFRE Salud", logo: "MAPFRE" },
    { name: "SENASA (Plan Complementario & Especial)", logo: "SENASA" },
    { name: "ARS Universal", logo: "UNIVERSAL" },
    { name: "ARS Monumental", logo: "MONUMENTAL" },
    { name: "ARS Futuro", logo: "FUTURO" }
  ];

  const services = {
    general: [
      { id: "g1", title: "Limpieza Ultrasónica & Profilaxis Estándar", desc: "Eliminación completa de sarro y placa bacteriana mediante ultrasonido alemán. Incluye aplicación de flúor reforzado.", price: "RD$ 2,500", duration: "45 mins", coverage: "Cobertura 80-100% ARS" },
      { id: "g2", title: "Tratamiento de Conducto (Endodoncia en 1 Sesión)", desc: "Manejo del dolor de origen pulpar con localizador de ápice digital y limas rotatorias de níquel-titanio.", price: "RD$ 12,000", duration: "60 mins", coverage: "Cobertura Parcial ARS" },
      { id: "g3", title: "Odontopediatría & Sellantes de Fosas", desc: "Atención especializada para niños. Protección contra caries mediante sellantes de resina fluida libre de BPA.", price: "RD$ 3,000", duration: "40 mins", coverage: "Cobertura 80% ARS" },
      { id: "g4", title: "Cirugía de Terceros Molares (Cordales Impactadas)", desc: "Extracción quirúrgica guiada por tomografía CBCT 3D bajo anestesia local de alta efectividad o sedación.", price: "RD$ 6,500", duration: "50 mins", coverage: "Reembolso ARS" }
    ],
    cosmetic: [
      { id: "c1", title: "Diseño de Sonrisa en Carillas BioClear & Porcelana", desc: "Planificación digital de sonrisa DSD (Digital Smile Design) y carillas ultradelgadas de disilicato de litio.", price: "RD$ 18,000 / pieza", duration: "2 citas", coverage: "Plan Financiamiento BLU" },
      { id: "c2", title: "Blanqueamiento LED de Alta Intensidad (Zoom®)", desc: "Aclaramiento dental seguro de hasta 4 tonos en 45 minutos sin causar sensibilidad en el esmalte.", price: "RD$ 7,500", duration: "45 mins", coverage: "Promoción del Mes" },
      { id: "c3", title: "Alineadores Invisibles Invisalign® (Ortodoncia Invisible)", desc: "Corrección de apiñamiento y mordida mediante férulas transparentes personalizadas removibles.", price: "RD$ 35,000 inicial", duration: "12 - 18 meses", coverage: "Cuotas sin Interés" },
      { id: "c4", title: "Reconstrucción Estética de Bordes Incisales", desc: "Restauración anatómica con resinas nanohíbridas japonesas que devuelven la apariencia natural al diente.", price: "RD$ 4,500", duration: "45 mins", coverage: "Cobertura Parcial" }
    ],
    specialty: [
      { id: "s1", title: "Implante Dental de Titanio Straumann® + Corona", desc: "Reemplazo radicular de precisión suiza con integración ósea garantizada y corona de zirconio monolítico.", price: "RD$ 28,000", duration: "3 fases", coverage: "Financiamiento 12 meses" },
      { id: "s2", title: "Sedación Consciente por Inhalación / Intravenosa", desc: "Protocolo médico supervisado por anestesiólogo para pacientes con fobia dental o intervenciones complejas.", price: "RD$ 5,000", duration: "Por sesión", coverage: "Servicio Premium" },
      { id: "s3", title: "Frenectomía Láser (Liberación de Frenillo Lingual / Labial)", desc: "Procedimiento en infantes y adultos mediante láser de CO2 sin sangrado ni necesidad de suturas.", price: "RD$ 9,000", duration: "30 mins", coverage: "Reembolso ARS" },
      { id: "s4", title: "Placa Neuromuscular para Bruxismo & Apnea del Sueño", desc: "Dispositivo intraoral rígido de descarga articular para evitar el desgaste dentario y dolores de cabeza.", price: "RD$ 11,000", duration: "2 citas", coverage: "Cobertura Parcial" }
    ]
  };

  const doctors = [
    {
      name: "Dr. Carlos Fernández, DDS, MS",
      title: "Director Médico & Cirujano Implantólogo",
      education: "Graduado Magna Cum Laude UNIBE · Máster en Implantología Oral por New York University (NYU)",
      memberships: "Miembro del Colegío Dominicano de Odontólogos (CDO) y la International Team for Implantology (ITI)",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Dra. María Laura Torres, DDS",
      title: "Especialista en Ortodoncia Invisible & Estética Dental",
      education: "Graduada PUCMM · Postgrado en Ortodoncia Digital en la Universidad de São Paulo (USP), Brasil",
      memberships: "Proveedor Certificado Invisalign® Gold Provider en República Dominicana",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const faqs = [
    { q: "¿Aceptan seguros médicos de República Dominicana?", a: "Sí, trabajamos con los principales seguros de salud del país (Primera ARS de Humano, ARS Palic/Mapfre, Universal, SENASA Plan Complementario, entre otros). Para coberturas de profilaxis y resinas, aplicamos la cobertura directa en recepción." },
    { q: "¿Tienen opciones de financiamiento para tratamientos estéticos o implantes?", a: "Sí, contamos con el Plan de Pago BLU Smiles, el cual te permite saldar tu tratamiento en cuotas fijas de 3, 6 o 12 meses sin intereses mediante tarjetas de crédito de bancos locales (Banreservas, Banco Popular, BHD)." },
    { q: "¿En qué consiste el protocolo de Odontología Sin Dolor?", a: "Para pacientes con ansiedad o fobia dental, aplicamos anastesia computarizada de baja velocidad y sedación consciente por óxido nitroso o sedación IV supervisada por un médico anestesiólogo certificado." },
    { q: "¿Dónde están ubicados y cuentan con estacionamiento?", a: "Estamos ubicados en la Calle Manuel de Jesús Troncoso #14, Ensanche Naco, Santo Domingo. Contamos con parqueo privado vigilado para nuestros pacientes en el nivel subterráneo del edificio." }
  ];

  return (
    <div style={{ background: "#FFFFFF", color: "#1E293B", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      
      {/* ─── OFFICIAL CLINIC TOP BAR ─────────────────────────────── */}
      <div style={{ background: "#0F172A", color: "#94A3B8", padding: "10px 24px", fontSize: "12px", borderBottom: "1px solid #1E293B" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ color: "#38BDF8", fontWeight: 700 }}>📍 Calle Manuel de Jesús Troncoso #14, Ensanche Naco, Santo Domingo</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span>🕒 Lun-Vie: 8:00 AM - 7:00 PM | Sáb: 9:00 AM - 2:00 PM</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="tel:8095550192" style={{ color: "#FFFFFF", textDecoration: "none", fontWeight: 800 }}>📞 (809) 555-0192</a>
            <a href="https://wa.me/18093588113?text=Hola%20Dental%20BLU,%20deseo%20agendar%20una%20consulta" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "none", fontWeight: 800 }}>💬 WhatsApp Citas</a>
          </div>
        </div>
      </div>

      {/* ─── CLINIC HEADER BAR ──────────────────────────────────── */}
      <header style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "18px 0", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Custom SVG Vector Logo Mark */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="10" fill="#1E64C4" />
              <path d="M24 10C17.5 10 13 15 13 22C13 29 16 38 20 40C22 41 23 37 24 35C25 37 26 41 28 40C32 38 35 29 35 22C35 15 30.5 10 24 10Z" fill="#FFFFFF" />
              <path d="M24 16C21 16 19 18.5 19 22C19 25 21 27 24 27C27 27 29 25 29 22C29 18.5 27 16 24 16Z" fill="#38BDF8" opacity="0.6" />
            </svg>
            <div>
              <div style={{ fontWeight: 900, fontSize: "20px", color: "#0F172A", letterSpacing: "-0.02em" }}>DENTAL BLU</div>
              <div style={{ fontSize: "9.5px", color: "#1E64C4", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                CENTRO ODONTOLÓGICO ESPECIALIZADO · NACO
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }} className="nav-link-desktop">
            <a href="#about" style={{ textDecoration: "none", color: "#334155", fontSize: "14px", fontWeight: 700 }}>Sobre la Clínica</a>
            <a href="#services" style={{ textDecoration: "none", color: "#334155", fontSize: "14px", fontWeight: 700 }}>Tratamientos</a>
            <a href="#doctors" style={{ textDecoration: "none", color: "#334155", fontSize: "14px", fontWeight: 700 }}>Especialistas</a>
            <a href="#insurance" style={{ textDecoration: "none", color: "#334155", fontSize: "14px", fontWeight: 700 }}>Seguros & Pagos</a>
            <a href="#faq" style={{ textDecoration: "none", color: "#334155", fontSize: "14px", fontWeight: 700 }}>Preguntas Frecuentes</a>
          </div>

          {/* Action CTAs */}
          <button
            onClick={() => setModalOpen(true)}
            style={{ background: "#1E64C4", color: "#FFFFFF", padding: "12px 24px", borderRadius: "8px", border: "none", fontWeight: 900, fontSize: "14px", cursor: "pointer", boxShadow: "0 4px 14px rgba(30,100,196,0.25)" }}
          >
            Agendar Evaluación 📅
          </button>
        </div>
      </header>

      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)", padding: "90px 24px", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          <div>
            <span style={{ background: "#DBEAFE", color: "#1E64C4", padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Odontología de Vanguardia en Santo Domingo
            </span>
            <h1 style={{ fontSize: "clamp(36px, 4.8vw, 56px)", fontWeight: 900, color: "#0F172A", margin: "18px 0 18px", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
              Atención Odontológica Excepcional para Sonrisas Saludables y Naturales
            </h1>
            <p style={{ fontSize: "16.5px", color: "#475569", lineHeight: "1.65", margin: "0 0 36px" }}>
              En Dental BLU combinamos especialistas certificados internacionalmente, tomografía 3D de alta resolución y un protocolo de sedación sin dolor para cuidar tu salud bucal con la calidez que mereces.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button
                onClick={() => setModalOpen(true)}
                style={{ background: "#1E64C4", color: "#FFFFFF", padding: "16px 32px", borderRadius: "8px", border: "none", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 18px rgba(30,100,196,0.3)" }}
              >
                Solicitar Cita Prioritaria →
              </button>
              <a
                href="https://wa.me/18093588113?text=Hola%20Dental%20BLU,%20quisiera%20consultar%20disponibilidad"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#FFFFFF", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px", boxShadow: "0 4px 18px rgba(37,211,102,0.3)", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                WhatsApp Directo
              </a>
            </div>

            {/* Proof Badges */}
            <div style={{ display: "flex", gap: "32px", marginTop: "40px", paddingTop: "28px", borderTop: "1px solid #CBD5E1" }}>
              <div>
                <div style={{ fontSize: "22px", fontWeight: 900, color: "#1E64C4" }}>4.9 ★★★★★</div>
                <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 700 }}>+380 Reseñas en Google</div>
              </div>
              <div>
                <div style={{ fontSize: "22px", fontWeight: 900, color: "#1E64C4" }}>15+ Años</div>
                <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 700 }}>Experiencia Médica</div>
              </div>
              <div>
                <div style={{ fontSize: "22px", fontWeight: 900, color: "#166534" }}>0% Ansiedad</div>
                <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 700 }}>Protocolo de Sedación</div>
              </div>
            </div>
          </div>

          {/* High Quality Clinic Hero Card */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 50px rgba(30,100,196,0.18)", border: "4px solid #FFFFFF" }}>
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Dental BLU Clinic Suite"
                style={{ width: "100%", height: "450px", objectFit: "cover", display: "block" }}
              />
            </div>
            
            {/* Floating Review Badge Overlay */}
            <div style={{ position: "absolute", bottom: "-20px", left: "24px", background: "#FFFFFF", padding: "18px 24px", borderRadius: "18px", boxShadow: "0 12px 36px rgba(0,0,0,0.12)", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ background: "#1E64C4", color: "#fff", width: "42px", height: "42px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "18px" }}>
                3D
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 900, color: "#0F172A" }}>Escáner Intraoral iTero®</div>
                <div style={{ fontSize: "11.5px", color: "#64748B" }}>Diagnóstico sin moldes incómodos de pasta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARS INSURANCE PROVIDERS BANNER ────────────────────── */}
      <section id="insurance" style={{ background: "#FFFFFF", padding: "40px 24px", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", textTransform: "uppercase" }}>
          <div style={{ fontSize: "11px", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "center", marginBottom: "20px" }}>
            ACEPTAMOS LOS PRINCIPALES SEGUROS DE SALUD DE REPÚBLICA DOMINICANA
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            {insuranceProviders.map(p => (
              <div key={p.name} style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", padding: "12px 20px", borderRadius: "10px", fontWeight: 900, fontSize: "13px", color: "#1E64C4", letterSpacing: "0.05em" }}>
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT & CLINIC PHILOSOPHY ──────────────────────────── */}
      <section id="about" style={{ padding: "90px 24px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          
          {/* Clinic Photo Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
              alt="Dental Reception Lounge"
              style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: "18px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
            />
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
              alt="Patient Smile Result"
              style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: "18px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
            />
          </div>

          <div style={{ background: "#1E64C4", color: "#FFFFFF", borderRadius: "24px", padding: "48px", boxShadow: "0 15px 40px rgba(30,100,196,0.2)" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "#93C5FD" }}>
              EXCELENCIA ODONTOLÓGICA EN NACO
            </span>
            <h2 style={{ fontSize: "34px", fontWeight: 900, margin: "14px 0 18px", lineHeight: "1.2" }}>
              Nuestra Misión: Salud Bucal de Alto Nivel con Trato Humano
            </h2>
            <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "#E0F2FE", margin: "0 0 20px" }}>
              En Dental BLU entendemos que acudir al dentista debe ser una experiencia cómoda, transparente y libre de dolor. Nuestra clínica está diseñada bajo normas de bioseguridad europeas para garantizar un entorno estéril y acogedor.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#BAE6FD", margin: 0 }}>
              Desde una limpieza preventiva de rutina hasta la reconstrucción completa de la dentadura con implantes Straumann®, cada tratamiento se planifica de forma personalizada para devolverte la funcionalidad y estética natural.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DOCTORS TEAM SECTION ───────────────────────────────── */}
      <section id="doctors" style={{ background: "#F8FAFC", padding: "90px 24px", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 56px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#1E64C4", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              NUESTRO EQUIPO MÉDICO
            </span>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#0F172A", margin: "6px 0" }}>Especialistas Certificados</h2>
            <p style={{ fontSize: "15.5px", color: "#64748B" }}>
              Formación continua en universidades internacionales de EE.UU., Brasil y Europa.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "36px" }}>
            {doctors.map(d => (
              <div key={d.name} style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>
                <img
                  src={d.img}
                  alt={d.name}
                  style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top" }}
                />
                <div style={{ padding: "32px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: 0 }}>{d.name}</h3>
                    <div style={{ fontSize: "14px", color: "#1E64C4", fontWeight: 800, marginTop: "6px" }}>{d.title}</div>
                    <p style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", marginTop: "14px" }}>{d.education}</p>
                    <div style={{ fontSize: "12px", color: "#64748B", marginTop: "10px", fontWeight: 700, background: "#F1F5F9", padding: "8px 12px", borderRadius: "8px" }}>
                      {d.memberships}
                    </div>
                  </div>
                  <button
                    onClick={() => { setSelectedService(`Consulta con ${d.name}`); setModalOpen(true); }}
                    style={{ marginTop: "24px", background: "#EFF6FF", color: "#1E64C4", border: "1px solid #DBEAFE", padding: "12px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", cursor: "pointer", width: "100%" }}
                  >
                    Agendar Consulta con el Especialista
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES & TREATMENTS CATALOG ──────────────────────── */}
      <section id="services" style={{ padding: "90px 24px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#1E64C4", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            CATÁLOGO COMPLETO DE TRATAMIENTOS
          </span>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#0F172A", margin: "8px 0" }}>
            Soluciones Dentales para Toda la Familia
          </h2>
          <p style={{ fontSize: "15.5px", color: "#64748B" }}>
            Selecciona la categoría para explorar opciones con precios transparentes y coberturas de seguro.
          </p>

          {/* Category Tabs */}
          <div style={{ display: "inline-flex", background: "#F1F5F9", border: "1px solid #CBD5E1", padding: "4px", borderRadius: "14px", marginTop: "28px", gap: "4px" }}>
            <button
              onClick={() => setActiveTab("general")}
              style={{ background: activeTab === "general" ? "#1E64C4" : "transparent", color: activeTab === "general" ? "#FFF" : "#475569", border: "none", padding: "12px 24px", borderRadius: "10px", fontWeight: 800, fontSize: "14px", cursor: "pointer" }}
            >
              Odontología General
            </button>
            <button
              onClick={() => setActiveTab("cosmetic")}
              style={{ background: activeTab === "cosmetic" ? "#1E64C4" : "transparent", color: activeTab === "cosmetic" ? "#FFF" : "#475569", border: "none", padding: "12px 24px", borderRadius: "10px", fontWeight: 800, fontSize: "14px", cursor: "pointer" }}
            >
              Estética & Diseño de Sonrisa
            </button>
            <button
              onClick={() => setActiveTab("specialty")}
              style={{ background: activeTab === "specialty" ? "#1E64C4" : "transparent", color: activeTab === "specialty" ? "#FFF" : "#475569", border: "none", padding: "12px 24px", borderRadius: "10px", fontWeight: 800, fontSize: "14px", cursor: "pointer" }}
            >
              Implantes & Especialidades
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
          {services[activeTab].map(s => (
            <div key={s.id} style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "20px", padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: 900, background: "#EFF6FF", color: "#1E64C4", padding: "4px 10px", borderRadius: "6px", textTransform: "uppercase" }}>
                    {s.coverage}
                  </span>
                  <span style={{ fontSize: "12px", color: "#64748B", fontWeight: 700 }}>⏱️ {s.duration}</span>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0F172A", margin: "0 0 10px", lineHeight: "1.35" }}>{s.title}</h3>
                <p style={{ fontSize: "13.5px", color: "#64748B", lineHeight: "1.65", margin: "0 0 20px" }}>{s.desc}</p>
              </div>

              <div>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "#0F172A", marginBottom: "14px" }}>{s.price}</div>
                <button
                  onClick={() => { setSelectedService(s.title); setModalOpen(true); }}
                  style={{ background: "#1E64C4", color: "#FFFFFF", border: "none", padding: "12px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", cursor: "pointer", width: "100%", boxShadow: "0 4px 12px rgba(30,100,196,0.2)" }}
                >
                  Seleccionar Tratamiento 📌
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ACCORDION SECTION ──────────────────────────────── */}
      <section id="faq" style={{ background: "#F8FAFC", padding: "90px 24px", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#1E64C4", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              RESOLVEMOS TUS DUDAS
            </span>
            <h2 style={{ fontSize: "34px", fontWeight: 900, color: "#0F172A", margin: "6px 0" }}>Preguntas Frecuentes</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((f, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderRadius: "14px", overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{ width: "100%", padding: "20px 24px", background: "none", border: "none", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontWeight: 800, fontSize: "16px", color: "#0F172A" }}
                  >
                    <span>{f.q}</span>
                    <span style={{ fontSize: "18px", color: "#1E64C4", fontWeight: 900 }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 24px 20px", color: "#475569", fontSize: "14.5px", lineHeight: "1.7", borderTop: "1px solid #F1F5F9", paddingTop: "16px" }}>
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── LOCATION & CONTACT SECTION ─────────────────────────── */}
      <section style={{ padding: "90px 24px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#1E64C4", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              UBICACIÓN & ATENCIÓN
            </span>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#0F172A", margin: "8px 0 16px" }}>
              Visítanos en Ensanche Naco
            </h2>
            <p style={{ fontSize: "15.5px", color: "#475569", lineHeight: "1.65", margin: "0 0 28px" }}>
              Nuestra clínica cuenta con valet parking, parqueo subterráneo privado, sala de espera VIP con Wi-Fi de alta velocidad y café de cortesía.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ background: "#EFF6FF", color: "#1E64C4", padding: "10px", borderRadius: "10px", fontWeight: 900 }}>📍</div>
                <div>
                  <div style={{ fontWeight: 800, color: "#0F172A", fontSize: "15px" }}>Dirección Física:</div>
                  <div style={{ fontSize: "14px", color: "#64748B", marginTop: "2px" }}>Calle Manuel de Jesús Troncoso #14, Ensanche Naco, Santo Domingo, D.N.</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ background: "#EFF6FF", color: "#1E64C4", padding: "10px", borderRadius: "10px", fontWeight: 900 }}>📞</div>
                <div>
                  <div style={{ fontWeight: 800, color: "#0F172A", fontSize: "15px" }}>Teléfonos Directos:</div>
                  <div style={{ fontSize: "14px", color: "#64748B", marginTop: "2px" }}>Recepción: (809) 555-0192 · WhatsApp: (809) 358-8113</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              style={{ background: "#1E64C4", color: "#FFFFFF", padding: "16px 32px", borderRadius: "8px", border: "none", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 18px rgba(30,100,196,0.3)" }}
            >
              Agendar Evaluación Presencial
            </button>
          </div>

          {/* Interactive Map Block */}
          <div style={{ background: "#F1F5F9", borderRadius: "24px", overflow: "hidden", height: "380px", border: "1px solid #CBD5E1", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "42px", marginBottom: "12px" }}>🗺️</div>
            <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#0F172A", margin: "0 0 6px" }}>Google Maps Integrado</h3>
            <p style={{ fontSize: "13.5px", color: "#64748B", maxWidth: "340px", margin: "0 0 20px" }}>
              Ensanche Naco, Santo Domingo. Próximo a la Av. Winston Churchill.
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#FFFFFF", color: "#1E64C4", border: "1px solid #CBD5E1", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontWeight: 800, fontSize: "13px" }}
            >
              Abrir en Google Maps ↗
            </a>
          </div>
        </div>
      </section>

      {/* ─── APPOINTMENT MODAL ──────────────────────────────────── */}
      {modalOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(15,23,42,0.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}>
          <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "40px", maxWidth: "540px", width: "100%", boxShadow: "0 25px 50px rgba(0,0,0,0.25)", position: "relative" }}>
            <button
              onClick={() => setModalOpen(false)}
              style={{ position: "absolute", top: "20px", right: "20px", background: "#F1F5F9", border: "none", width: "32px", height: "32px", borderRadius: "50%", fontWeight: 900, cursor: "pointer", color: "#475569" }}
            >
              ✕
            </button>

            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#1E64C4", textTransform: "uppercase" }}>RESERVA EN LÍNEA</span>
              <h3 style={{ fontSize: "24px", fontWeight: 900, color: "#0F172A", margin: "4px 0" }}>Solicitud de Cita Médica</h3>
            </div>

            {booked ? (
              <div style={{ background: "#F0FDF4", border: "1.5px solid #86EFAC", padding: "24px", borderRadius: "16px", textAlign: "center" }}>
                <h4 style={{ color: "#166534", fontWeight: 900, fontSize: "18px", margin: "0 0 6px" }}>¡Solicitud Recibida!</h4>
                <p style={{ fontSize: "13px", color: "#15803D", lineHeight: "1.6", margin: 0 }}>
                  Tu cita ha sido asignada. Nuestro equipo te contactará por WhatsApp para confirmar la hora exacta.
                </p>
                <button
                  onClick={() => { setBooked(false); setModalOpen(false); }}
                  style={{ background: "#166534", color: "#FFF", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", marginTop: "16px", cursor: "pointer" }}
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#334155" }}>Servicio Requerido</label>
                  <input type="text" value={selectedService} readOnly style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1", background: "#F8FAFC", fontWeight: 700, fontSize: "13.5px", color: "#1E64C4", marginTop: "4px" }} />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#334155" }}>Nombre y Apellidos *</label>
                  <input type="text" required placeholder="ej. María Mercedes Almonte" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "13.5px", marginTop: "4px" }} />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#334155" }}>Teléfono / WhatsApp *</label>
                  <input type="tel" required placeholder="809-555-0192" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "13.5px", marginTop: "4px" }} />
                </div>
                <button type="submit" style={{ background: "#1E64C4", color: "#FFFFFF", border: "none", padding: "16px", borderRadius: "10px", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 16px rgba(30,100,196,0.3)", marginTop: "6px" }}>
                  Confirmar Reserva por WhatsApp 📅
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ─── CLINIC PRODUCTION FOOTER ───────────────────────────── */}
      <footer style={{ background: "#0F172A", color: "#94A3B8", padding: "70px 24px 30px", fontSize: "13px", borderTop: "1px solid #1E293B" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px", marginBottom: "48px" }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: "20px", color: "#FFFFFF", marginBottom: "12px" }}>DENTAL BLU SDQ</div>
              <p style={{ fontSize: "13px", lineHeight: "1.65", color: "#64748B", margin: 0 }}>
                Centro odontológico de alta especialización en Santo Domingo. Diagnóstico digital 3D, implantes de titanio y diseño de sonrisa.
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", fontSize: "14px" }}>Horario de Atención</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
                <div>Lunes a Viernes: 8:00 AM - 7:00 PM</div>
                <div>Sábados: 9:00 AM - 2:00 PM</div>
                <div>Domingos: Cerrado</div>
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", fontSize: "14px" }}>Contacto Directo</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
                <div>Citas: (809) 555-0192</div>
                <div>WhatsApp: (809) 358-8113</div>
                <div>Correo: citas@dentalblusdq.com</div>
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", fontSize: "14px" }}>Seguros Aceptados</div>
              <div style={{ fontSize: "12px", color: "#64748B", lineHeight: "1.6" }}>
                Primera ARS, ARS Palic/Mapfre, Universal, SENASA Complementario y ARS Monumental.
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #1E293B", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", fontSize: "12px", color: "#64748B" }}>
            <div>© 2026 Dental BLU SDQ. Todos los derechos reservados. RNC 1-32-84920-1.</div>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="#about" style={{ color: "#64748B", textDecoration: "none" }}>Política de Privacidad</a>
              <a href="#about" style={{ color: "#64748B", textDecoration: "none" }}>Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
