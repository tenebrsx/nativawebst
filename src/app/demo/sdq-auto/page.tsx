"use client";

import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";

export default function SDQAutoDemo() {
  // Extensive Vehicle Database for R.D. Market
  const vehicleDatabase: Record<string, string[]> = {
    Toyota: ["RAV4", "Corolla", "Hilux", "Land Cruiser Prado", "Land Cruiser 300", "Fortuner", "Tacoma", "Camry", "Yaris", "Highlander", "4Runner", "Rush"],
    Honda: ["CR-V", "Civic", "Accord", "HR-V", "Pilot", "Fit", "Ridgeline", "Passport"],
    Hyundai: ["Tucson", "Santa Fe", "Elantra", "Accent", "Sonata", "Creta", "Palisade", "Grand i10", "Staria"],
    Kia: ["Sportage", "Sorento", "Picanto", "Rio", "K5 / Optima", "Telluride", "Seltos", "Carnival"],
    Nissan: ["Frontier", "Kicks", "X-Trail / Rogue", "Versa", "Sentra", "Pathfinder", "Patrol", "March"],
    Lexus: ["RX 350", "GX 460 / GX 550", "LX 570 / LX 600", "IS 250 / IS 350", "NX 300", "ES 350"],
    "Mercedes-Benz": ["C-Class (C200 / C300)", "E-Class (E350)", "GLE SUV / Coupe", "GLC SUV", "G-Wagon (G63)", "A-Class", "CLA"],
    BMW: ["X5", "X3", "X6", "Serie 3 (320i / 330i)", "Serie 5 (530i)", "Serie 4 / M4", "X1"],
    Chevrolet: ["Tahoe", "Suburban", "Colorado", "Silverado", "Equinox", "Tracker", "Trax", "Spark"],
    Ford: ["Explorer", "F-150 / Raptor", "Ranger", "Escape", "Edge", "Expedition", "Mustang"],
    Mazda: ["CX-5", "CX-9", "CX-30", "CX-50", "Mazda 3", "Mazda 6"],
    Mitsubishi: ["Montero / Pajero", "Montero Sport", "L200", "Outlander", "ASX", "Mirage"],
    Audi: ["Q5", "Q7", "Q3", "A4", "A6", "Q8"],
    Jeep: ["Wrangler / Rubicon", "Grand Cherokee", "Compass", "Gladiator", "Renegade"],
    Subaru: ["Forester", "Outback", "Crosstrek", "XV"]
  };

  const years = Array.from({ length: 21 }, (_, i) => (2025 - i).toString());

  const [vehicle, setVehicle] = useState({ year: "2022", make: "Toyota", model: "RAV4", mileage: "45,000 km" });
  const [selectedBranch, setSelectedBranch] = useState("naco");
  const [selectedServices, setSelectedServices] = useState<number[]>([1, 3]);
  const [activeCategory, setActiveCategory] = useState<"all" | "oil" | "brakes" | "tires" | "ac" | "fleet">("all");
  
  // Tire finder state
  const [tireWidth, setTireWidth] = useState("225");
  const [tireAspect, setTireAspect] = useState("65");
  const [tireRim, setTireRim] = useState("17");
  const [selectedTires, setSelectedTires] = useState<number[]>([]);

  // Booking wizard state
  const [bookingStep, setBookingStep] = useState<1 | 2 | 3 | 4>(1);
  const [bookingDate, setBookingDate] = useState("Mañana - 9:00 AM");
  const [customerInfo, setCustomerInfo] = useState({ name: "", phone: "", email: "", notes: "", needValet: false });
  const [bookingCode, setBookingCode] = useState("");

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Handle Make Change
  const handleMakeChange = (newMake: string) => {
    const defaultModel = vehicleDatabase[newMake] ? vehicleDatabase[newMake][0] : "";
    setVehicle({ ...vehicle, make: newMake, model: defaultModel });
  };

  // Sucursales
  const branches = [
    { id: "naco", name: "Sucursal Naco (Santo Domingo)", address: "Av. Gustavo Mejía Ricart #88", phone: "(809) 555-8822", bays: "Bahía 2 & 4 Libres", status: "Disponible Hoy" },
    { id: "bellavista", name: "Sucursal Bella Vista (Santo Domingo)", address: "Av. Rómulo Betancourt #1420", phone: "(809) 555-1420", bays: "Bahía 1 Libre", status: "Disponible Hoy" },
    { id: "santiago", name: "Sucursal Santiago (Zona Norte)", address: "Av. 27 de Febrero #45", phone: "(809) 555-2745", bays: "Bahía 3 Libre", status: "Disponible Hoy" },
    { id: "puntacana", name: "Sucursal Punta Cana (Zona Este)", address: "Boulevard Turístico del Este #12", phone: "(809) 555-0912", bays: "Atención Exprés", status: "Disponible Hoy" }
  ];

  // Comprehensive Services Catalog
  const serviceCatalog = [
    { id: 1, category: "oil", name: "Cambio de Aceite 100% Sintético (Full Synthetic 10k)", price: 3800, time: "45 min", badge: "Recomendado", desc: "Incluye filtro de aceite OEM, 5 cuartos de síntesis completa, relleno de fluidos y chequeo digital de 30 puntos con fotos a tu WhatsApp." },
    { id: 2, category: "oil", name: "Cambio de Aceite Semi-Sintético (Synthetic Blend)", price: 2800, time: "35 min", badge: "Económico", desc: "Formulado para protección contra el calor extremo de la ciudad de Santo Domingo y arranques frecuentes." },
    { id: 3, category: "brakes", name: "Servicio de Frenos Cerámicos por Eje (Pastillas & Rectificación)", price: 4900, time: "60 min", badge: "Popular", desc: "Pastillas de cerámica ultrasilenciosas de baja emisión de polvo + rectificación de discos en torno de precisión y lubricación de cáliper." },
    { id: 4, category: "brakes", name: "Purga de Líquido de Frenos DOT4 & Diagnóstico ABS", price: 2200, time: "30 min", badge: "Seguridad", desc: "Sustitución de fluido hidráulico degradado por la humedad ambiental tropical para mantener pedal firme." },
    { id: 5, category: "tires", name: "Alineación Láser 3D & Balanceo Computarizado (4 Gomas)", price: 2400, time: "40 min", badge: "Precisión", desc: "Ajuste de ángulos de caída, convergencia y avance de dirección para evitar el desgaste irregular." },
    { id: 6, category: "tires", name: "Rotación de Gomas & Calibración de Sensores TPMS", price: 1200, time: "25 min", badge: "Mantenimiento", desc: "Distribuye el desgaste entre ejes delantero y trasero para maximizar la durabilidad hasta un 25% más." },
    { id: 7, category: "ac", name: "Mantenimiento de Aire Acondicionado & Carga de Gas R134a", price: 3500, time: "45 min", badge: "Confort R.D.", desc: "Recarga de gas refrigerante, prueba de fugas por vacío, sustitución de filtro de cabina y desinfección antibacteriana de conductos." },
    { id: 8, category: "ac", name: "Diagnóstico Computarizado OBD-II & Batería", price: 1500, time: "30 min", badge: "Tecnología", desc: "Escaneo de códigos de error de motor, transmisión y prueba de vida útil de batería/alternador." },
    { id: 9, category: "fleet", name: "Mantenimiento Preventivo Integral de Flota (SLA 48h)", price: 6500, time: "90 min", badge: "Flotas NCF", desc: "Plan diseñado para camionetas comerciales y flotillas de reparto con reporte técnico auditado." }
  ];

  // Tire Catalog
  const tireCatalog = [
    { id: 101, brand: "Michelin", model: "Defender LTX M/S", size: "225/65 R17", price: 8900, warranty: "80,000 km", rating: "5.0 ★★★★★", img: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=400&q=80" },
    { id: 102, brand: "Continental", model: "CrossContact LX Sport", size: "225/65 R17", price: 7400, warranty: "70,000 km", rating: "4.9 ★★★★★", img: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=400&q=80" },
    { id: 103, brand: "Pirelli", model: "Scorpion Verde All Season", size: "225/65 R17", price: 7900, warranty: "75,000 km", rating: "4.8 ★★★★★", img: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=400&q=80" },
    { id: 104, brand: "Bridgestone", model: "Dueler H/L Alenza Plus", size: "225/65 R17", price: 8200, warranty: "80,000 km", rating: "4.9 ★★★★★", img: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=400&q=80" }
  ];

  // FAQs
  const faqs = [
    { q: "¿Qué garantía ofrecen en las reparaciones de taller?", a: "Todas nuestras piezas e intervenciones cuentan con 12 meses o 20,000 km de garantía escrita respaldada a nivel nacional en cualquiera de nuestras sucursales." },
    { q: "¿Emiten Comprobante Fiscal (NCF) para empresas?", a: "Sí, emitimos Comprobante de Crédito Fiscal (B01) e insumos desglosados conforme a la DGII para todas las órdenes de servicios y flotas comerciales." },
    { q: "¿Puedo solicitar servicio de recogida y entrega a domicilio (Valet)?", a: "Sí, disponemos de servicio Valet Corporativo. Un chofer certificado retira tu vehículo en tu oficina u hogar en Santo Domingo y te lo regresa listo." },
    { q: "¿Cómo funciona el financiamiento sin intereses?", a: "Puedes diferir el pago de tus mantenimientos o cambio de gomas de 3 a 12 cuotas sin interés utilizando tarjetas de crédito de los principales bancos de R.D." }
  ];

  const filteredServices = activeCategory === "all"
    ? serviceCatalog
    : serviceCatalog.filter(s => s.category === activeCategory);

  const toggleService = (id: number) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleTire = (id: number) => {
    setSelectedTires(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const totalServicesPrice = selectedServices.reduce((sum, id) => {
    const item = serviceCatalog.find(s => s.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalTiresPrice = selectedTires.reduce((sum, id) => {
    const item = tireCatalog.find(t => t.id === id);
    return sum + (item ? item.price * 4 : 0);
  }, 0);

  const grandTotal = totalServicesPrice + totalTiresPrice;

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const code = "REP-AUTO-" + Math.floor(1000 + Math.random() * 9000);
    setBookingCode(code);
    setBookingStep(4);
  };

  return (
    <div style={{ background: "#080C14", color: "#F8FAFC", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      
      {/* Sticky Nativa Demo Banner */}
      <DemoTopBar
        templateName="Plantilla Plataforma República Fleet & Auto (Midas Enterprise)"
        templateCategory="Automotriz & Flotas Comerciales"
        whatsappMessage="Hola Nativa, vi la plataforma completa de República Fleet (#sdq-auto) y quiero cotizar una web empresarial idéntica para mi taller."
      />

      {/* ─── TOP ANNOUNCEMENT BAR ───────────────────────────────── */}
      <div style={{ background: "#FFC72C", color: "#0F172A", padding: "8px 24px", fontSize: "12px", fontWeight: 900, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span>INSPECCIÓN DIGITAL DE 30 PUNTOS GRATIS CON TU CAMBIO DE ACEITE</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>ATENCIÓN A FLOTAS COMERCIALES CON NCF EN MENOS DE 48H</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="tel:8095552886" style={{ color: "#0F172A", textDecoration: "none", fontWeight: 900 }}>📞 (809) 555-AUTO</a>
          <span>LUN-SÁB 7:00 AM - 6:00 PM</span>
        </div>
      </div>

      {/* ─── BRAND HEADER ───────────────────────────────────────── */}
      <header style={{ background: "#0F172A", borderBottom: "1px solid #1E293B", padding: "16px 0", position: "sticky", top: "42px", zIndex: 50 }}>
        <div className="header-bar" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Logo Mark */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="8" fill="#FFC72C" />
              <path d="M12 34V14L20 26L28 14V34H23V22L19 28H17L13 22V34H12Z" fill="#0F172A" stroke="#0F172A" strokeWidth="2" />
              <path d="M34 14H38V34H34V14Z" fill="#0F172A" />
            </svg>
            <div>
              <div style={{ fontWeight: 900, fontSize: "21px", color: "#FFFFFF", letterSpacing: "-0.03em" }}>
                REPÚBLICA <span style={{ color: "#FFC72C" }}>FLEET & AUTO</span>
              </div>
              <div className="brand-tagline" style={{ fontSize: "9.5px", color: "#94A3B8", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                MIDAS STANDARD · SANTO DOMINGO & PUNTA CANA
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "22px" }} className="nav-link-desktop">
            <a href="#services" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "13.5px", fontWeight: 800 }}>Servicios</a>
            <a href="#tires" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "13.5px", fontWeight: 800 }}>Buscador de Gomas</a>
            <a href="#branches" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "13.5px", fontWeight: 800 }}>Sucursales</a>
            <a href="#fleet" style={{ textDecoration: "none", color: "#FFC72C", fontSize: "13.5px", fontWeight: 800 }}>Flotas Corporativas</a>
            <a href="#faq" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "13.5px", fontWeight: 800 }}>Preguntas</a>
          </div>

          {/* Header Action Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="#booking"
              style={{ background: "#FFC72C", color: "#0F172A", padding: "11px 22px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "13.5px", boxShadow: "0 4px 16px rgba(255,199,44,0.25)" }}
            >
              Agendar Turno 🛠️
            </a>
          </div>
        </div>
      </header>

      {/* ─── DYNAMIC VEHICLE SELECTOR STRIP ─────────────────────── */}
      <div style={{ background: "#1E293B", borderBottom: "1px solid #334155", padding: "16px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 900, color: "#FFC72C" }}>
            <span>🚗 VEHÍCULO SELECCIONADO:</span>
          </div>

          <div style={{ display: "flex", gap: "12px", flexGrow: 1, maxWidth: "780px" }}>
            {/* Year Selector (2005 - 2025) */}
            <select
              value={vehicle.year}
              onChange={(e) => setVehicle({ ...vehicle, year: e.target.value })}
              style={{ background: "#0F172A", color: "#FFF", border: "1px solid #475569", padding: "10px 14px", borderRadius: "8px", fontSize: "13.5px", fontWeight: 800, flexGrow: 1 }}
            >
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>

            {/* Make / Brand Selector */}
            <select
              value={vehicle.make}
              onChange={(e) => handleMakeChange(e.target.value)}
              style={{ background: "#0F172A", color: "#FFF", border: "1px solid #475569", padding: "10px 14px", borderRadius: "8px", fontSize: "13.5px", fontWeight: 800, flexGrow: 1 }}
            >
              {Object.keys(vehicleDatabase).map(make => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>

            {/* Model Dynamic Selector */}
            <select
              value={vehicle.model}
              onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
              style={{ background: "#0F172A", color: "#FFF", border: "1px solid #475569", padding: "10px 14px", borderRadius: "8px", fontSize: "13.5px", fontWeight: 800, flexGrow: 1 }}
            >
              {(vehicleDatabase[vehicle.make] || ["Modelo general"]).map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <span style={{ fontSize: "13px", color: "#10B981", fontWeight: 900, background: "rgba(16,185,129,0.1)", padding: "6px 12px", borderRadius: "6px" }}>
            ✓ {vehicle.year} {vehicle.make} {vehicle.model} (Verificado)
          </span>
        </div>
      </div>

      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #0F172A 0%, #080C14 100%)", padding: "80px 24px", borderBottom: "1px solid #1E293B" }}>
        <div className="responsive-two-col-grid" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <span style={{ background: "#1E293B", color: "#FFC72C", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              SERVICIOS AUTOMOTRICES DE NIVEL INTERNACIONAL
            </span>
            <h1 style={{ fontSize: "clamp(34px, 4.8vw, 54px)", fontWeight: 900, color: "#FFFFFF", margin: "18px 0 16px", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
              El Mantenimiento de tu {vehicle.make} {vehicle.model} Hecho Bien.
            </h1>
            <p style={{ fontSize: "16px", color: "#94A3B8", lineHeight: "1.65", margin: "0 0 32px" }}>
              Santo Domingo & Punta Cana: Mantenimiento preventivo, cambio de aceite sintético, frenos cerámicos, gomas de marcas líderes y gestión de flotas comerciales bajo el estándar Midas.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#booking"
                style={{ background: "#FFC72C", color: "#0F172A", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px", boxShadow: "0 4px 20px rgba(255,199,44,0.3)" }}
              >
                Cotizar & Reservar mi Turno →
              </a>
              <a
                href="https://wa.me/18093588113?text=Hola%20Rep%C3%BAblica%20Fleet,%20deseo%20consultar%20mantenimiento%20para%20mi%20veh%C3%ADculo"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#FFFFFF", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px", boxShadow: "0 4px 20px rgba(37,211,102,0.3)", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                WhatsApp Directo
              </a>
            </div>

            {/* Proof Badges */}
            <div style={{ display: "flex", gap: "28px", marginTop: "36px", paddingTop: "24px", borderTop: "1px solid #1E293B" }}>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "#FFC72C" }}>100% Escrito</div>
                <div style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 700 }}>Estimado antes de trabajar</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "#FFC72C" }}>12 Meses</div>
                <div style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 700 }}>Garantía en piezas & mano de obra</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "#10B981" }}>48h SLA</div>
                <div style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 700 }}>Flotas comerciales garantizadas</div>
              </div>
            </div>
          </div>

          {/* Hero Workshop Visual */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "2px solid #334155", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80"
                alt="República Fleet Workshop"
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ position: "absolute", bottom: "-20px", right: "20px", background: "#1E293B", border: "1px solid #334155", padding: "16px 20px", borderRadius: "14px", display: "flex", alignItems: "center", gap: "14px", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
              <div style={{ background: "#FFC72C", color: "#0F172A", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "18px" }}>
                30
              </div>
              <div>
                <div style={{ fontSize: "12.5px", fontWeight: 900, color: "#FFF" }}>Chequeo Digital de 30 Puntos</div>
                <div style={{ fontSize: "11px", color: "#94A3B8" }}>Reporte fotográfico a tu WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUCURSALES EN R.D. ─────────────────────────────────── */}
      <section id="branches" style={{ padding: "80px 24px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: "11px", fontWeight: 900, color: "#FFC72C", textTransform: "uppercase", letterSpacing: "0.1em" }}>RED NACIONAL DE TALLERES</span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>Selecciona Tu Sucursal Cercana</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "20px" }}>
          {branches.map(b => (
            <div
              key={b.id}
              onClick={() => setSelectedBranch(b.id)}
              style={{
                background: selectedBranch === b.id ? "rgba(255,199,44,0.08)" : "#0F172A",
                border: `2px solid ${selectedBranch === b.id ? "#FFC72C" : "#1E293B"}`,
                borderRadius: "16px",
                padding: "24px",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ background: "#1E293B", color: "#10B981", padding: "3px 8px", borderRadius: "6px", fontSize: "10.5px", fontWeight: 900 }}>
                  ● {b.status}
                </span>
                <span style={{ fontSize: "11px", color: "#FFC72C", fontWeight: 800 }}>{b.bays}</span>
              </div>
              <h3 style={{ fontSize: "16.5px", fontWeight: 900, color: "#FFF", margin: "0 0 6px" }}>{b.name}</h3>
              <div style={{ fontSize: "12.5px", color: "#94A3B8", margin: "0 0 4px" }}>{b.address}</div>
              <div style={{ fontSize: "12.5px", color: "#FFC72C", fontWeight: 800 }}>{b.phone}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FULL SERVICES CATALOG WITH CATEGORY FILTER ─────────── */}
      <section id="services" style={{ background: "#0F172A", padding: "90px 24px", borderTop: "1px solid #1E293B", borderBottom: "1px solid #1E293B" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#FFC72C", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              CATÁLOGO COMPLETO DE SERVICIOS
            </span>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "8px 0" }}>
              Mantenimiento & Reparación para Tu {vehicle.make} {vehicle.model} ({vehicle.year})
            </h2>

            {/* Category Filter Pills */}
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
              {[
                { id: "all", label: "Todos los Servicios" },
                { id: "oil", label: "Aceite & Filtros" },
                { id: "brakes", label: "Frenos" },
                { id: "tires", label: "Gomas & Alineación" },
                { id: "ac", label: "Aire Acondicionado (A/C)" },
                { id: "fleet", label: "Flotas Comerciales" }
              ].map(c => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id as any)}
                  style={{
                    background: activeCategory === c.id ? "#FFC72C" : "#1E293B",
                    color: activeCategory === c.id ? "#0F172A" : "#CBD5E1",
                    border: "none",
                    padding: "9px 18px",
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

          {/* Services Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "24px" }}>
            {filteredServices.map(s => {
              const isChecked = selectedServices.includes(s.id);
              return (
                <div
                  key={s.id}
                  onClick={() => toggleService(s.id)}
                  style={{
                    background: isChecked ? "rgba(255,199,44,0.08)" : "#1E293B",
                    border: `2px solid ${isChecked ? "#FFC72C" : "#334155"}`,
                    borderRadius: "16px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <span style={{ background: "#FFC72C", color: "#0F172A", padding: "3px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: 900, textTransform: "uppercase" }}>
                        {s.badge}
                      </span>
                      <span style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 800 }}>⏱️ {s.time}</span>
                    </div>
                    <h3 style={{ fontSize: "17px", fontWeight: 900, color: "#FFF", margin: "0 0 8px", lineHeight: "1.3" }}>{s.name}</h3>
                    <p style={{ fontSize: "13px", color: "#94A3B8", lineHeight: "1.6", margin: 0 }}>{s.desc}</p>
                  </div>

                  <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #334155", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "20px", fontWeight: 900, color: "#FFC72C" }}>RD$ {s.price.toLocaleString()}</div>
                    <button style={{ background: isChecked ? "#10B981" : "#FFC72C", color: isChecked ? "#FFF" : "#0F172A", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: 900, fontSize: "12.5px", cursor: "pointer" }}>
                      {isChecked ? "✓ Seleccionado" : "+ Agregar"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE TIRE FINDER ────────────────────────────── */}
      <section id="tires" style={{ padding: "90px 24px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: "11px", fontWeight: 900, color: "#FFC72C", textTransform: "uppercase", letterSpacing: "0.1em" }}>BUSCADOR INTERACTIVO DE GOMAS</span>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>Encuentra las Gomas para Tu {vehicle.make} {vehicle.model}</h2>
          <p style={{ fontSize: "15px", color: "#94A3B8" }}>Marcas de prestigio con garantía de fábrica y montaje computarizado incluido.</p>
        </div>

        {/* Tire Size Matcher */}
        <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "16px", padding: "24px", marginBottom: "32px", display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ fontSize: "13px", fontWeight: 900, color: "#FFC72C" }}>MEDIDA DE GOMA:</div>
          
          <select value={tireWidth} onChange={(e) => setTireWidth(e.target.value)} style={{ background: "#1E293B", color: "#FFF", border: "1px solid #334155", padding: "8px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 700 }}>
            <option value="205">205 (Ancho)</option>
            <option value="215">215 (Ancho)</option>
            <option value="225">225 (Ancho)</option>
            <option value="265">265 (Ancho)</option>
          </select>

          <select value={tireAspect} onChange={(e) => setTireAspect(e.target.value)} style={{ background: "#1E293B", color: "#FFF", border: "1px solid #334155", padding: "8px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 700 }}>
            <option value="55">55 (Perfil)</option>
            <option value="60">60 (Perfil)</option>
            <option value="65">65 (Perfil)</option>
            <option value="70">70 (Perfil)</option>
          </select>

          <select value={tireRim} onChange={(e) => setTireRim(e.target.value)} style={{ background: "#1E293B", color: "#FFF", border: "1px solid #334155", padding: "8px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 700 }}>
            <option value="16">R16 (Aro)</option>
            <option value="17">R17 (Aro)</option>
            <option value="18">R18 (Aro)</option>
            <option value="20">R20 (Aro)</option>
          </select>

          <span style={{ fontSize: "12px", color: "#10B981", fontWeight: 800 }}>✓ {tireWidth}/{tireAspect} R{tireRim} Compatible con {vehicle.make} {vehicle.model}</span>
        </div>

        {/* Tire Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "24px" }}>
          {tireCatalog.map(t => {
            const isChecked = selectedTires.includes(t.id);
            return (
              <div key={t.id} style={{ background: "#0F172A", border: `2px solid ${isChecked ? "#FFC72C" : "#1E293B"}`, borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                <img src={t.img} alt={t.model} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div style={{ padding: "20px" }}>
                  <div style={{ fontSize: "11px", color: "#FFC72C", fontWeight: 900, textTransform: "uppercase" }}>{t.brand}</div>
                  <h3 style={{ fontSize: "17px", fontWeight: 900, color: "#FFF", margin: "4px 0 6px" }}>{t.model}</h3>
                  <div style={{ fontSize: "12.5px", color: "#94A3B8", margin: "0 0 12px" }}>Medida: {tireWidth}/{tireAspect} R{tireRim} · {t.warranty}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #1E293B", paddingTop: "14px" }}>
                    <div>
                      <div style={{ fontSize: "19px", fontWeight: 900, color: "#FFC72C" }}>RD$ {t.price.toLocaleString()} <span style={{ fontSize: "10px", color: "#94A3B8" }}>/ c.u.</span></div>
                      <div style={{ fontSize: "11px", color: "#10B981", fontWeight: 800 }}>RD$ {(t.price * 4).toLocaleString()} (Juego de 4)</div>
                    </div>
                    <button onClick={() => toggleTire(t.id)} style={{ background: isChecked ? "#10B981" : "#FFC72C", color: isChecked ? "#FFF" : "#0F172A", border: "none", padding: "8px 14px", borderRadius: "6px", fontWeight: 900, fontSize: "12px", cursor: "pointer" }}>
                      {isChecked ? "✓ Agregado" : "+ Agregar 4"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── COMPLETE MULTI-STEP BOOKING WIZARD ─────────────────── */}
      <section id="booking" style={{ background: "#0F172A", padding: "90px 24px", borderTop: "1px solid #1E293B" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", background: "#1E293B", border: "2px solid #FFC72C", borderRadius: "24px", padding: "40px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#FFC72C", textTransform: "uppercase" }}>SISTEMA OFICIAL DE CITAS</span>
            <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>Reserva Tu Turno en Taller</h2>
            <p style={{ fontSize: "14px", color: "#94A3B8" }}>Confirmación inmediata por WhatsApp y asignación de bahía técnica.</p>

            {/* Steps indicator */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "20px" }}>
              {["1. Vehículo & Sucursal", "2. Servicios (" + (selectedServices.length + selectedTires.length) + ")", "3. Fecha & Datos", "4. Confirmado"].map((stepText, idx) => (
                <span key={idx} style={{ fontSize: "12px", fontWeight: 800, color: bookingStep === (idx + 1) ? "#FFC72C" : "#64748B", borderBottom: bookingStep === (idx + 1) ? "2px solid #FFC72C" : "none", paddingBottom: "4px" }}>
                  {stepText}
                </span>
              ))}
            </div>
          </div>

          {bookingStep === 1 && (
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#FFF", marginBottom: "16px" }}>Paso 1: Confirma tu Vehículo y Sucursal</h3>
              <div style={{ background: "#0F172A", padding: "16px", borderRadius: "12px", border: "1px solid #334155", marginBottom: "20px" }}>
                <div style={{ fontSize: "13px", color: "#94A3B8" }}>Vehículo Activo:</div>
                <div style={{ fontSize: "16px", fontWeight: 900, color: "#FFC72C" }}>{vehicle.year} {vehicle.make} {vehicle.model}</div>
                <div style={{ fontSize: "13px", color: "#94A3B8", marginTop: "8px" }}>Sucursal Seleccionada:</div>
                <div style={{ fontSize: "15px", fontWeight: 800, color: "#FFF" }}>{branches.find(b => b.id === selectedBranch)?.name}</div>
              </div>
              <button onClick={() => setBookingStep(2)} style={{ background: "#FFC72C", color: "#0F172A", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 900, fontSize: "15px", cursor: "pointer", width: "100%" }}>
                Continuar a Servicios →
              </button>
            </div>
          )}

          {bookingStep === 2 && (
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#FFF", marginBottom: "16px" }}>Paso 2: Resumen de Servicios Seleccionados</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                {selectedServices.map(id => {
                  const item = serviceCatalog.find(s => s.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} style={{ background: "#0F172A", padding: "12px 16px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "14px", color: "#FFF", fontWeight: 800 }}>{item.name}</span>
                      <span style={{ fontSize: "14px", color: "#FFC72C", fontWeight: 900 }}>RD$ {item.price.toLocaleString()}</span>
                    </div>
                  );
                })}
                {selectedTires.map(id => {
                  const item = tireCatalog.find(t => t.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} style={{ background: "#0F172A", padding: "12px 16px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "14px", color: "#FFF", fontWeight: 800 }}>Juego de 4 Gomas {item.brand} {item.model}</span>
                      <span style={{ fontSize: "14px", color: "#FFC72C", fontWeight: 900 }}>RD$ {(item.price * 4).toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderTop: "1px solid #334155", paddingTop: "14px" }}>
                <span style={{ fontSize: "16px", fontWeight: 900, color: "#FFF" }}>Total Estimado:</span>
                <span style={{ fontSize: "24px", fontWeight: 900, color: "#FFC72C" }}>RD$ {grandTotal.toLocaleString()}</span>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => setBookingStep(1)} style={{ background: "#334155", color: "#FFF", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", cursor: "pointer", width: "30%" }}>
                  ← Atrás
                </button>
                <button onClick={() => setBookingStep(3)} style={{ background: "#FFC72C", color: "#0F172A", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 900, fontSize: "15px", cursor: "pointer", flexGrow: 1 }}>
                  Continuar a Horario & Datos →
                </button>
              </div>
            </div>
          )}

          {bookingStep === 3 && (
            <form onSubmit={handleCompleteBooking} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#FFF", margin: 0 }}>Paso 3: Horario y Datos de Contacto</h3>
              
              <div>
                <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>Selecciona Fecha / Turno</label>
                <select value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #475569", background: "#0F172A", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }}>
                  <option value="Mañana - 8:30 AM">Mañana - 8:30 AM (Bahía Exprés)</option>
                  <option value="Mañana - 10:30 AM">Mañana - 10:30 AM</option>
                  <option value="Tarde - 2:00 PM">Tarde - 2:00 PM</option>
                  <option value="Tarde - 4:00 PM">Tarde - 4:00 PM</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>Nombre Completo *</label>
                <input type="text" required placeholder="ej. Carlos Eduardo Mendoza" value={customerInfo.name} onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #475569", background: "#0F172A", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>WhatsApp de Contacto *</label>
                <input type="tel" required placeholder="809-555-0192" value={customerInfo.phone} onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #475569", background: "#0F172A", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#0F172A", padding: "12px", borderRadius: "8px", border: "1px solid #334155" }}>
                <input type="checkbox" id="valet" checked={customerInfo.needValet} onChange={(e) => setCustomerInfo({ ...customerInfo, needValet: e.target.checked })} style={{ width: "18px", height: "18px" }} />
                <label htmlFor="valet" style={{ fontSize: "13px", color: "#FFF", fontWeight: 700, cursor: "pointer" }}>Deseo Servicio Valet de Recogida a Domicilio en Santo Domingo (+RD$ 800)</label>
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <button type="button" onClick={() => setBookingStep(2)} style={{ background: "#334155", color: "#FFF", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", cursor: "pointer", width: "30%" }}>
                  ← Atrás
                </button>
                <button type="submit" style={{ background: "#FFC72C", color: "#0F172A", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 900, fontSize: "15px", cursor: "pointer", flexGrow: 1 }}>
                  Confirmar Reserva Definitiva 🛠️
                </button>
              </div>
            </form>
          )}

          {bookingStep === 4 && (
            <div style={{ textAlign: "center", background: "#064E3B", border: "2px solid #10B981", borderRadius: "16px", padding: "32px" }}>
              <div style={{ fontSize: "42px", marginBottom: "8px" }}>🎉</div>
              <h3 style={{ color: "#10B981", fontWeight: 900, fontSize: "24px", margin: "0 0 8px" }}>¡Reserva Confirmada Exitosamente!</h3>
              <div style={{ fontSize: "16px", color: "#FFF", fontWeight: 900, margin: "8px 0" }}>Código de Orden: <span style={{ color: "#FFC72C" }}>{bookingCode}</span></div>
              <p style={{ fontSize: "14px", color: "#D1D5DB", lineHeight: "1.6" }}>
                Estimado(a) <strong>{customerInfo.name}</strong>, hemos separado tu turno para <strong>{bookingDate}</strong> en <strong>{branches.find(b => b.id === selectedBranch)?.name}</strong> para tu <strong>{vehicle.year} {vehicle.make} {vehicle.model}</strong>. Un asesor de bahía se comunicará a tu WhatsApp ({customerInfo.phone}).
              </p>
              <button onClick={() => setBookingStep(1)} style={{ background: "#10B981", color: "#FFF", border: "none", padding: "12px 24px", borderRadius: "8px", fontWeight: 900, fontSize: "14px", marginTop: "16px", cursor: "pointer" }}>
                Realizar Otra Cita
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── COMMERCIAL FLEETS SECTION ─────────────────────────── */}
      <section id="fleet" style={{ padding: "90px 24px", maxWidth: "1280px", margin: "0 auto" }}>
        <div className="responsive-two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <span style={{ color: "#FFC72C", fontSize: "11px", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              CUENTAS CORPORATIVAS & FLOTAS
            </span>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "12px 0 16px" }}>
              Soluciones Integrales para Flotas Comerciales
            </h2>
            <p style={{ fontSize: "15px", color: "#94A3B8", lineHeight: "1.7", margin: "0 0 24px" }}>
              Mantenemos tu flota de transporte, repartos o ejecutivos operando al 100% sin interrupciones costosas. Ofrecemos facturación gubernamental con comprobante fiscal (NCF), crédito corporativo y prioridad de bahía.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#D1D5DB" }}>
                <span style={{ color: "#10B981", fontWeight: 900 }}>✓</span> Bahías prioritarias con entrega en menos de 48 horas.
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#D1D5DB" }}>
                <span style={{ color: "#10B981", fontWeight: 900 }}>✓</span> Reportes de mantenimiento preventivo digitalizado para auditorías.
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#D1D5DB" }}>
                <span style={{ color: "#10B981", fontWeight: 900 }}>✓</span> Descuentos volumétricos por flotillas mayores a 5 unidades.
              </div>
            </div>

            <a
              href="https://wa.me/18093588113?text=Hola%20Rep%C3%BAblica%20Fleet,%20deseo%20abrir%20una%20cuenta%20corporativa%20para%20mi%20flota"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#FFC72C", color: "#0F172A", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "14.5px" }}
            >
              Abrir Cuenta Corporativa →
            </a>
          </div>

          <div style={{ borderRadius: "20px", overflow: "hidden", border: "2px solid #334155" }}>
            <img
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
              alt="Commercial Fleet Vehicles"
              style={{ width: "100%", height: "380px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ─── FAQ ACCORDION ──────────────────────────────────────── */}
      <section id="faq" style={{ background: "#0F172A", padding: "90px 24px", borderTop: "1px solid #1E293B" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#FFC72C", textTransform: "uppercase" }}>RESPUESTAS A DUDAS COMUNES</span>
            <h2 style={{ fontSize: "34px", fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>Preguntas Frecuentes</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {faqs.map((f, idx) => (
              <div key={idx} style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: "12px", overflow: "hidden" }}>
                <div
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontWeight: 800, fontSize: "15px", color: "#FFF" }}
                >
                  <span>{f.q}</span>
                  <span style={{ color: "#FFC72C", fontSize: "18px" }}>{openFaq === idx ? "−" : "+"}</span>
                </div>
                {openFaq === idx && (
                  <div style={{ padding: "0 24px 18px", color: "#94A3B8", fontSize: "14px", lineHeight: "1.65", borderTop: "1px solid #334155", paddingTop: "14px" }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ background: "#030712", color: "#94A3B8", padding: "60px 24px", borderTop: "1px solid #1E293B", textAlign: "center", fontSize: "13px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ fontWeight: 900, fontSize: "20px", color: "#FFFFFF", marginBottom: "8px" }}>
            REPÚBLICA FLEET & AUTO MAINTENANCE
          </div>
          <div>Av. Gustavo Mejía Ricart #88, Ensanche Naco, Santo Domingo · Av. España #12, Punta Cana</div>
          <div style={{ marginTop: "12px", color: "#64748B" }}>Teléfono: (809) 555-AUTO · Correo: contacto@republicafleet.com</div>
          <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #111827", color: "#FFC72C", fontWeight: 800, fontSize: "11.5px" }}>
            Demo Template Built by Nativa Web Studio · Inspired by Midas.com
          </div>
        </div>
      </footer>

    </div>
  );
}
