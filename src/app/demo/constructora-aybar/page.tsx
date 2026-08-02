"use client";

import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";

export default function ConstructoraAybarDemo() {
  const [activeCategory, setActiveCategory] = useState<"all" | "residential" | "resort" | "industrial">("all");
  const [projectType, setProjectType] = useState<"residential" | "resort" | "commercial" | "industrial">("residential");
  const [areaSqM, setAreaSqM] = useState(2500);
  const [finishLevel, setFinishLevel] = useState<"premium" | "luxury" | "ultraluxury">("luxury");
  const [booked, setBooked] = useState(false);
  const [quoteCode, setQuoteCode] = useState("");

  const [contactForm, setContactForm] = useState({ name: "", company: "", phone: "", email: "", notes: "" });

  const projects = [
    {
      id: 1,
      category: "residential",
      name: "Torre Aybar Anacaona",
      location: "Av. Anacaona, Bella Vista, Santo Domingo",
      details: "32 Niveles · Penthouses Triplex · Helipuerto Privado",
      area: "28,500 m² construidos",
      year: "2024 (Entregado)",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      category: "resort",
      name: "Cap Cana Oceanfront Estates",
      location: "Cap Cana, La Altagracia",
      details: "12 Villas de Ultra Lujo · Muelle Privado · Frente al Mar",
      area: "14,200 m² de construcción",
      year: "2023 (Entregado)",
      img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      category: "residential",
      name: "Residencial Naco Signature",
      location: "Ensanche Naco, Santo Domingo",
      details: "18 Niveles · Domótica Integrada · Certificación LEED",
      area: "16,800 m² construidos",
      year: "2024 (En Construcción)",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      category: "industrial",
      name: "Parque Industrial Logístico SDQ",
      location: "Autopista Duarte Km 22, Santo Domingo Este",
      details: "45,000 m² de Naves Clase A · Losas de Alta Carga",
      area: "45,000 m² techados",
      year: "2023 (Entregado)",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Price Calculation per m²
  const costPerSqM = {
    residential: { premium: 850, luxury: 1250, ultraluxury: 1850 },
    resort: { premium: 1100, luxury: 1600, ultraluxury: 2400 },
    commercial: { premium: 750, luxury: 1100, ultraluxury: 1550 },
    industrial: { premium: 450, luxury: 650, ultraluxury: 950 }
  };

  const unitRateUSD = costPerSqM[projectType][finishLevel];
  const totalEstUSD = areaSqM * unitRateUSD;
  const totalEstDOP = totalEstUSD * 60; // 1 USD = 60 DOP

  const handleCalculateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const code = "AYBAR-CONST-" + Math.floor(1000 + Math.random() * 9000);
    setQuoteCode(code);
    setBooked(true);
  };

  return (
    <div style={{ background: "#070B14", color: "#F8FAFC", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      
      {/* Sticky Altamar Demo Banner */}
      <DemoTopBar
        templateName="Plantilla Constructora Aybar & Torres (Grupo Aybar & Construger Standard)"
        templateCategory="Construcción & Desarrollo Inmobiliario"
        whatsappMessage="Hola Altamar, vi la plantilla de Constructora Aybar (#sdq-construction) y deseo cotizar una web corporativa para mi constructora."
      />

      {/* ─── TOP ANNOUNCEMENT BAR ───────────────────────────────── */}
      <div style={{ background: "#D7A639", color: "#0A1128", padding: "8px 24px", fontSize: "12px", fontWeight: 900, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span>CERTIFICACIÓN ISO 9001:2015 EN GESTIÓN DE CALIDAD DE CONSTRUCCIÓN</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>LICENCIA CODIA #48921</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="tel:18095473746" style={{ color: "#0A1128", textDecoration: "none", fontWeight: 900 }}>📞 (809) 547-3746</a>
          <span>SANTO DOMINGO & PUNTA CANA</span>
        </div>
      </div>

      {/* ─── BRAND HEADER ───────────────────────────────────────── */}
      <header style={{ background: "#0A1128", borderBottom: "1px solid #1E293B", padding: "18px 0", position: "sticky", top: "42px", zIndex: 50 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Custom SVG Constructora Aybar Brand Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="8" fill="#D7A639" />
              <path d="M24 8L36 34H30L24 20L18 34H12L24 8Z" fill="#0A1128" />
              <path d="M17 26H31V30H17V26Z" fill="#0A1128" />
            </svg>
            <div>
              <div style={{ fontWeight: 900, fontSize: "20px", color: "#FFFFFF", letterSpacing: "-0.02em" }}>
                CONSTRUCTORA <span style={{ color: "#D7A639" }}>AYBAR & TORRES</span>
              </div>
              <div style={{ fontSize: "9.5px", color: "#94A3B8", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                INGENIERÍA & EDIFICACIONES DE ALTO LUJO · DESDE 1998
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }} className="nav-link-desktop">
            <a href="#about" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "13.5px", fontWeight: 800 }}>Nosotros</a>
            <a href="#portfolio" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "13.5px", fontWeight: 800 }}>Obras Emblemáticas</a>
            <a href="#estimator" style={{ textDecoration: "none", color: "#D7A639", fontSize: "13.5px", fontWeight: 800 }}>Cotizador de Proyectos</a>
            <a href="#engineering" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "13.5px", fontWeight: 800 }}>Sismo-Resistencia</a>
            <a href="#contact" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "13.5px", fontWeight: 800 }}>Contacto</a>
          </div>

          {/* Header Action Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="#estimator"
              style={{ background: "#D7A639", color: "#0A1128", padding: "11px 22px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "13.5px", boxShadow: "0 4px 16px rgba(215,166,57,0.25)" }}
            >
              Cotizar Obra 🏗️
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #0A1128 0%, #070B14 100%)", padding: "90px 24px", borderBottom: "1px solid #1E293B" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <span style={{ background: "#1E293B", color: "#D7A639", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              SINÓNIMO DE EXCELENCIA EN LA CONSTRUCCIÓN
            </span>
            <h1 style={{ fontSize: "clamp(34px, 4.8vw, 54px)", fontWeight: 900, color: "#FFFFFF", margin: "18px 0 16px", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
              Construyendo la Infraestructura y el Lujo Urbano de República Dominicana
            </h1>
            <p style={{ fontSize: "16px", color: "#94A3B8", lineHeight: "1.65", margin: "0 0 32px" }}>
              Más de 25 años liderando la construcción de majestuosas torres residenciales en Santo Domingo, villas turísticas exclusivas en Cap Cana y complejas obras industriales con certificación de calidad ISO 9001.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#estimator"
                style={{ background: "#D7A639", color: "#0A1128", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px", boxShadow: "0 4px 20px rgba(215,166,57,0.3)" }}
              >
                Cotizar Proyecto de Construcción →
              </a>
              <a
                href="https://wa.me/18093588113?text=Hola%20Constructora%20Aybar,%20deseo%20consultar%20un%20proyecto%20de%20construcci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#FFFFFF", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px", boxShadow: "0 4px 20px rgba(37,211,102,0.3)", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                WhatsApp Directo
              </a>
            </div>

            {/* Metrics Badges */}
            <div style={{ display: "flex", gap: "28px", marginTop: "36px", paddingTop: "24px", borderTop: "1px solid #1E293B" }}>
              <div>
                <div style={{ fontSize: "22px", fontWeight: 900, color: "#D7A639" }}>+150 Obras</div>
                <div style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 700 }}>Proyectos Entregados</div>
              </div>
              <div>
                <div style={{ fontSize: "22px", fontWeight: 900, color: "#D7A639" }}>+1.2M m²</div>
                <div style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 700 }}>Área de Construcción</div>
              </div>
              <div>
                <div style={{ fontSize: "22px", fontWeight: 900, color: "#10B981" }}>Sismo-Resistente</div>
                <div style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 700 }}>Norma Grado 8+</div>
              </div>
            </div>
          </div>

          {/* Hero High-Rise Photo Card */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "2px solid #334155", boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}>
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                alt="Torre Aybar Anacaona Construction"
                style={{ width: "100%", height: "440px", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ position: "absolute", bottom: "-20px", right: "20px", background: "#0A1128", border: "1px solid #334155", padding: "16px 20px", borderRadius: "14px", display: "flex", alignItems: "center", gap: "14px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
              <div style={{ background: "#D7A639", color: "#0A1128", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "18px" }}>
                32
              </div>
              <div>
                <div style={{ fontSize: "12.5px", fontWeight: 900, color: "#FFF" }}>Torre Aybar Anacaona</div>
                <div style={{ fontSize: "11px", color: "#94A3B8" }}>32 Niveles · Entregado con Éxito</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO SHOWCASE SECTION ─────────────────────────── */}
      <section id="portfolio" style={{ padding: "90px 24px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
          <span style={{ fontSize: "11px", fontWeight: 900, color: "#D7A639", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            PORTAFOLIO DE OBRAS DE EMBLEMA
          </span>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "8px 0" }}>
            Nuestras Construcciones Destacadas
          </h2>
          <p style={{ fontSize: "15px", color: "#94A3B8" }}>
            Explora algunos de los desarrollos inmobiliarios, turísticos e industriales más representativos en Santo Domingo y Cap Cana.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            {[
              { id: "all", label: "Todos los Proyectos" },
              { id: "residential", label: "Torres Residenciales" },
              { id: "resort", label: "Proyectos Turísticos & Villas" },
              { id: "industrial", label: "Naves & Infraestructura" }
            ].map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id as any)}
                style={{
                  background: activeCategory === c.id ? "#D7A639" : "#1E293B",
                  color: activeCategory === c.id ? "#0A1128" : "#CBD5E1",
                  border: "none",
                  padding: "9px 20px",
                  borderRadius: "8px",
                  fontWeight: 900,
                  fontSize: "13px",
                  cursor: "pointer"
                }}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
          {filteredProjects.map(p => (
            <div key={p.id} style={{ background: "#0A1128", border: "1px solid #1E293B", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: "240px", objectFit: "cover" }} />
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: 900, background: "#1E293B", color: "#D7A639", padding: "3px 8px", borderRadius: "4px", textTransform: "uppercase" }}>
                    {p.year}
                  </span>
                  <span style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 700 }}>{p.area}</span>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#FFFFFF", margin: "4px 0 6px" }}>{p.name}</h3>
                <div style={{ fontSize: "13px", color: "#D7A639", fontWeight: 800, marginBottom: "8px" }}>{p.location}</div>
                <p style={{ fontSize: "13.5px", color: "#94A3B8", lineHeight: "1.6", margin: 0 }}>{p.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INTERACTIVE CONSTRUCTION ESTIMATOR ───────────────── */}
      <section id="estimator" style={{ background: "#0A1128", padding: "90px 24px", borderTop: "1px solid #1E293B", borderBottom: "1px solid #1E293B" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", background: "#070B14", border: "2px solid #D7A639", borderRadius: "24px", padding: "40px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#D7A639", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              HERRAMIENTA DE PRESUPUESTO PRELIMINAR
            </span>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "6px 0" }}>
              Cotizador Interactivo de Proyectos de Obra
            </h2>
            <p style={{ fontSize: "14.5px", color: "#94A3B8" }}>
              Configura el tipo de obra, los metros cuadrados y el nivel de acabados para obtener un estimado de presupuesto inmediato.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", alignItems: "center" }}>
            
            {/* Config Controls */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ fontSize: "12.5px", fontWeight: 800, color: "#CBD5E1", display: "block", marginBottom: "6px" }}>1. Tipo de Edificación</label>
                <select value={projectType} onChange={(e) => setProjectType(e.target.value as any)} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #334155", background: "#0A1128", color: "#FFF", fontSize: "14px", fontWeight: 800 }}>
                  <option value="residential">Torre Residencial de Lujo</option>
                  <option value="resort">Villa Turística Frontal al Mar</option>
                  <option value="commercial">Plaza / Centro Comercial</option>
                  <option value="industrial">Nave Industrial / Logística</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: "12.5px", fontWeight: 800, color: "#CBD5E1", display: "block", marginBottom: "6px" }}>
                  2. Área de Construcción: <strong style={{ color: "#D7A639" }}>{areaSqM.toLocaleString()} m²</strong>
                </label>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="500"
                  value={areaSqM}
                  onChange={(e) => setAreaSqM(Number(e.target.value))}
                  style={{ width: "100%", height: "8px", accentColor: "#D7A639", cursor: "pointer" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#94A3B8", marginTop: "4px" }}>
                  <span>500 m²</span>
                  <span>12,500 m²</span>
                  <span>25,000 m²</span>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12.5px", fontWeight: 800, color: "#CBD5E1", display: "block", marginBottom: "6px" }}>3. Nivel de Acabados & Especificaciones</label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                  <button
                    onClick={() => setFinishLevel("premium")}
                    style={{ background: finishLevel === "premium" ? "#D7A639" : "#0A1128", color: finishLevel === "premium" ? "#0A1128" : "#FFF", border: "1px solid #334155", padding: "10px", borderRadius: "6px", fontWeight: 900, fontSize: "12px", cursor: "pointer" }}
                  >
                    Estándar Premium
                  </button>
                  <button
                    onClick={() => setFinishLevel("luxury")}
                    style={{ background: finishLevel === "luxury" ? "#D7A639" : "#0A1128", color: finishLevel === "luxury" ? "#0A1128" : "#FFF", border: "1px solid #334155", padding: "10px", borderRadius: "6px", fontWeight: 900, fontSize: "12px", cursor: "pointer" }}
                  >
                    Lujo Importado
                  </button>
                  <button
                    onClick={() => setFinishLevel("ultraluxury")}
                    style={{ background: finishLevel === "ultraluxury" ? "#D7A639" : "#0A1128", color: finishLevel === "ultraluxury" ? "#0A1128" : "#FFF", border: "1px solid #334155", padding: "10px", borderRadius: "6px", fontWeight: 900, fontSize: "12px", cursor: "pointer" }}
                  >
                    Ultra Lujo LEED
                  </button>
                </div>
              </div>
            </div>

            {/* Real-time Calculation Summary Card */}
            <div style={{ background: "#0A1128", border: "2px solid #D7A639", borderRadius: "20px", padding: "32px", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
              <div style={{ fontSize: "12px", fontWeight: 900, color: "#D7A639", textTransform: "uppercase" }}>PRESUPUESTO PRELIMINAR ESTIMADO</div>
              
              <div style={{ marginTop: "16px", borderBottom: "1px solid #1E293B", paddingBottom: "16px" }}>
                <div style={{ fontSize: "13px", color: "#94A3B8" }}>Tasa Promedio de Construcción:</div>
                <div style={{ fontSize: "18px", fontWeight: 900, color: "#FFF" }}>USD ${unitRateUSD} / m²</div>
              </div>

              <div style={{ marginTop: "16px", borderBottom: "1px solid #1E293B", paddingBottom: "16px" }}>
                <div style={{ fontSize: "13px", color: "#94A3B8" }}>Inversión Total Estimada en USD:</div>
                <div style={{ fontSize: "28px", fontWeight: 900, color: "#D7A639" }}>USD ${totalEstUSD.toLocaleString()}</div>
              </div>

              <div style={{ marginTop: "16px", marginBottom: "24px" }}>
                <div style={{ fontSize: "12px", color: "#94A3B8" }}>Equivalente Aproximado en DOP (Tasa RD$ 60.00):</div>
                <div style={{ fontSize: "18px", fontWeight: 900, color: "#10B981" }}>RD$ {totalEstDOP.toLocaleString()}</div>
              </div>

              <a
                href="#contact"
                style={{ background: "#D7A639", color: "#0A1128", display: "block", textAlign: "center", padding: "14px", borderRadius: "8px", fontWeight: 900, fontSize: "14.5px", textDecoration: "none", boxShadow: "0 4px 16px rgba(215,166,57,0.3)" }}
              >
                Solicitar Anteproyecto & Cita Técnica →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SISMO-RESISTENCIA & INGENIERÍA ─────────────────────── */}
      <section id="engineering" style={{ padding: "90px 24px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "11px", fontWeight: 900, color: "#D7A639", textTransform: "uppercase" }}>TECNOLOGÍA DE INGENIERÍA CIVIL</span>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>Garantía Estructural & Sismo-Resistencia</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
          <div style={{ background: "#0A1128", border: "1px solid #1E293B", borderRadius: "16px", padding: "28px" }}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>🛡️</div>
            <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#FFF", margin: "0 0 8px" }}>Diseño Sismo-Resistente Grado 8+</h3>
            <p style={{ fontSize: "13.5px", color: "#94A3B8", lineHeight: "1.6" }}>Estructuras calculadas con hormigón de alta resistencia (f'c = 350-450 kg/cm²) y acero grado 60 ensayado bajo normas sísmicas internacionales.</p>
          </div>

          <div style={{ background: "#0A1128", border: "1px solid #1E293B", borderRadius: "16px", padding: "28px" }}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>📋</div>
            <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#FFF", margin: "0 0 8px" }}>Certificación ISO 9001:2015</h3>
            <p style={{ fontSize: "13.5px", color: "#94A3B8", lineHeight: "1.6" }}>Control estricto de mezclas, curado e inspecciones por laboratorio independiente certificado en cada fase del vaciado.</p>
          </div>

          <div style={{ background: "#0A1128", border: "1px solid #1E293B", borderRadius: "16px", padding: "28px" }}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>⏱️</div>
            <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#FFF", margin: "0 0 8px" }}>Cronograma PMI & Cero Retrasos</h3>
            <p style={{ fontSize: "13.5px", color: "#94A3B8", lineHeight: "1.6" }}>Planificación mediante metodología PMI / Primavera P6 con reporte semanal de avance físico y financiero para los desarrolladores.</p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT & ANTEPROYECTO FORM ────────────────────────── */}
      <section id="contact" style={{ background: "#0A1128", padding: "90px 24px", borderTop: "1px solid #1E293B" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", background: "#070B14", border: "2px solid #D7A639", borderRadius: "24px", padding: "40px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#D7A639", textTransform: "uppercase" }}>DEPARTAMENTO DE INGENIERÍA</span>
            <h2 style={{ fontSize: "30px", fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>Solicitar Evaluación de Proyecto</h2>
            <p style={{ fontSize: "13.5px", color: "#94A3B8" }}>
              Nuestros ingenieros principales revisarán tus requerimientos y se pondrán en contacto en menos de 24 horas.
            </p>
          </div>

          {booked ? (
            <div style={{ background: "#064E3B", border: "1.5px solid #10B981", borderRadius: "16px", padding: "28px", textAlign: "center" }}>
              <h3 style={{ color: "#10B981", fontWeight: 900, fontSize: "22px", margin: "0 0 8px" }}>¡Solicitud de Proyecto Recibida!</h3>
              <div style={{ fontSize: "15px", color: "#FFF", fontWeight: 900, margin: "8px 0" }}>Código de Expediente: <span style={{ color: "#D7A639" }}>{quoteCode}</span></div>
              <p style={{ fontSize: "13.5px", color: "#D1D5DB", lineHeight: "1.6" }}>
                Gracias <strong>{contactForm.name}</strong> ({contactForm.company || "Inversor Privado"}). El equipo de licitaciones de Constructora Aybar te contactará por WhatsApp para solicitar los planos preliminares.
              </p>
              <button onClick={() => setBooked(false)} style={{ background: "#10B981", color: "#FFF", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: 900, fontSize: "13px", marginTop: "16px", cursor: "pointer" }}>
                Enviar Otro Proyecto
              </button>
            </div>
          ) : (
            <form onSubmit={handleCalculateQuote} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>Nombre Completo *</label>
                <input type="text" required placeholder="ej. Ing. Manuel Aybar" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #334155", background: "#0A1128", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>Empresa / Grupo Inmobiliario</label>
                <input type="text" placeholder="ej. Grupo Desarrollador Naco SRL" value={contactForm.company} onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #334155", background: "#0A1128", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>WhatsApp Directo *</label>
                  <input type="tel" required placeholder="809-555-0192" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #334155", background: "#0A1128", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>Correo Corporativo *</label>
                  <input type="email" required placeholder="m.aybar@desarrollos.com" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #334155", background: "#0A1128", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>Detalles del Proyecto / Terreno</label>
                <textarea rows={3} placeholder="Describa la ubicación del terreno, número de niveles deseados y fecha de inicio estimada..." value={contactForm.notes} onChange={(e) => setContactForm({ ...contactForm, notes: e.target.value })} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #334155", background: "#0A1128", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
              </div>

              <button type="submit" style={{ background: "#D7A639", color: "#0A1128", border: "none", padding: "16px", borderRadius: "10px", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 16px rgba(215,166,57,0.3)", marginTop: "6px" }}>
                Enviar Expediente a Licitación 🏗️
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ background: "#03060D", color: "#94A3B8", padding: "60px 24px", borderTop: "1px solid #1E293B", textAlign: "center", fontSize: "13px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ fontWeight: 900, fontSize: "20px", color: "#FFFFFF", marginBottom: "8px" }}>
            CONSTRUCTORA AYBAR & TORRES SRL
          </div>
          <div>Torre Empresarial Piantini, Piso 14, Av. Winston Churchill #102, Santo Domingo, República Dominicana</div>
          <div style={{ marginTop: "12px", color: "#64748B" }}>Teléfono: (809) 547-3746 · Correo: contacto@constructoraaybar.com · CODIA #48921</div>
          <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #0F172A", color: "#D7A639", fontWeight: 800, fontSize: "11.5px" }}>
            Demo Template Built by Altamar Web Studio · Inspired by GrupoAybar.com & Construger.com
          </div>
        </div>
      </footer>

    </div>
  );
}
