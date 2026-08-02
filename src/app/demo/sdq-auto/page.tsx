"use client";

import { useState } from "react";
import { DemoTopBar } from "@/components/demo-top-bar";

export default function SDQAutoDemo() {
  const [vehicle, setVehicle] = useState({ year: "2022", make: "Toyota", model: "RAV4", mileage: "45,000 km" });
  const [selectedServices, setSelectedServices] = useState<number[]>([1, 2]);
  const [activeTab, setActiveTab] = useState<"oil" | "brakes" | "tires" | "fleet">("oil");
  const [booked, setBooked] = useState(false);

  const serviceOptions = [
    { id: 1, category: "oil", name: "Cambio de Aceite 100% Sintético (Full Synthetic 10k)", price: 3800, time: "45 min", desc: "Incluye filtro de aceite OEM, 5 cuartos de síntesis completa y 30 puntos de inspección digital cortesía." },
    { id: 2, category: "oil", name: "Cambio de Aceite Semi-Sintético (Synthetic Blend)", price: 2800, time: "35 min", desc: "Ideal para uso cotidiano urbano en Santo Domingo con protección antidesgaste." },
    { id: 3, category: "brakes", name: "Servicio de Frenos Cerámicos por Eje (Pastillas & Rectificación)", price: 4900, time: "60 min", desc: "Pastillas de cerámica silenciosas de alto rendimiento + rectificación de discos y limpieza de cáliper." },
    { id: 4, category: "brakes", name: "Purga de Líquido de Frenos Dot4 & Diagnóstico ABS", price: 2200, time: "30 min", desc: "Sustitución completa del fluido hidráulico sometido a humedad ambiental tropical." },
    { id: 5, category: "tires", name: "Alineación Láser 3D & Balanceo Dinámico de 4 Gomas", price: 2400, time: "40 min", desc: "Calibración computarizada para evitar el desgaste irregular de neumáticos en carreteras de R.D." },
    { id: 6, category: "tires", name: "Rotación de Gomas & Inspección de Presión TPMS", price: 1200, time: "25 min", desc: "Optimiza la vida útil de tus neumáticos prolongando hasta 15,000 km adicionales." },
    { id: 7, category: "fleet", name: "Mantenimiento Preventivo de Flotas Comerciales (SLA 48h)", price: 6500, time: "90 min", desc: "Chequeo de 50 puntos para camiones de reparto, vanes ejecutivas y vehículos corporativos." }
  ];

  const coupons = [
    { code: "MIDAS-SYNTH-25", title: "RD$ 1,000 de Descuento", desc: "En Cambio de Aceite 100% Sintético + Chequeo Multi-Punto Gratis", expires: "Válido este mes" },
    { code: "MIDAS-BRAKE-50", title: "RD$ 1,500 de Descuento", desc: "En Reparación Integral de Frenos Cerámicos por Eje", expires: "Válido este mes" },
    { code: "MIDAS-FREE-CHECK", title: "Diagnóstico OBD-II GRATIS", desc: "Con cualquier servicio mayor a RD$ 3,000 en taller", expires: "Válido este mes" }
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
    <div style={{ background: "#0B0F19", color: "#F8FAFC", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>

      {/* ─── MIDAS TOP ANNOUNCEMENT BAR ─────────────────────────── */}
      <div style={{ background: "#FFC72C", color: "#0F172A", padding: "8px 24px", fontSize: "12px", fontWeight: 900, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span>CHEQUEO DIGITAL DE 30 PUNTOS DE CORTESÍA CON CADA MANTENIMIENTO</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>ATENCIÓN A FLOTAS COMERCIALES CON NCF</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="tel:8095552886" style={{ color: "#0F172A", textDecoration: "none", fontWeight: 900 }}>📞 (809) 555-AUTO</a>
          <span>LUN-SÁB 7:00 AM - 6:00 PM</span>
        </div>
      </div>

      {/* ─── MIDAS BRANDED HEADER ───────────────────────────────── */}
      <header style={{ background: "#111827", borderBottom: "1px solid #1F2937", padding: "16px 0", position: "sticky", top: "42px", zIndex: 50 }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Custom SVG Midas-Style Brand Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="8" fill="#FFC72C" />
              <path d="M12 34V14L20 26L28 14V34H23V22L19 28H17L13 22V34H12Z" fill="#111827" stroke="#111827" strokeWidth="2" />
              <path d="M34 14H38V34H34V14Z" fill="#111827" />
            </svg>
            <div>
              <div style={{ fontWeight: 900, fontSize: "21px", color: "#FFFFFF", letterSpacing: "-0.03em" }}>
                REPÚBLICA <span style={{ color: "#FFC72C" }}>FLEET & AUTO</span>
              </div>
              <div style={{ fontSize: "9.5px", color: "#9CA3AF", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                MIDAS STANDARD · SANTO DOMINGO & PUNTA CANA
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }} className="nav-link-desktop">
            <a href="#services" style={{ textDecoration: "none", color: "#D1D5DB", fontSize: "13.5px", fontWeight: 800 }}>Aceite & Filtros</a>
            <a href="#services" style={{ textDecoration: "none", color: "#D1D5DB", fontSize: "13.5px", fontWeight: 800 }}>Frenos</a>
            <a href="#services" style={{ textDecoration: "none", color: "#D1D5DB", fontSize: "13.5px", fontWeight: 800 }}>Gomas & Alineación</a>
            <a href="#fleet" style={{ textDecoration: "none", color: "#FFC72C", fontSize: "13.5px", fontWeight: 800 }}>Flotas Corporativas</a>
            <a href="#coupons" style={{ textDecoration: "none", color: "#D1D5DB", fontSize: "13.5px", fontWeight: 800 }}>Cupónes</a>
          </div>

          {/* Action CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="#estimator"
              style={{ background: "#FFC72C", color: "#0F172A", padding: "11px 22px", borderRadius: "6px", textDecoration: "none", fontWeight: 900, fontSize: "13.5px", boxShadow: "0 4px 16px rgba(255,199,44,0.25)" }}
            >
              Cotizar & Agendar Cita
            </a>
          </div>
        </div>
      </header>

      {/* ─── VEHICLE SELECTOR STRIP ─────────────────────────────── */}
      <div style={{ background: "#1F2937", borderBottom: "1px solid #374151", padding: "14px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 800, color: "#FFC72C" }}>
            <span>🚗 VEHÍCULO SELECCIONADO:</span>
          </div>

          <div style={{ display: "flex", gap: "12px", flexGrow: 1, maxWidth: "700px" }}>
            <select
              value={vehicle.year}
              onChange={(e) => setVehicle({ ...vehicle, year: e.target.value })}
              style={{ background: "#111827", color: "#FFF", border: "1px solid #4B5563", padding: "8px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, flexGrow: 1 }}
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2018">2018</option>
            </select>

            <select
              value={vehicle.make}
              onChange={(e) => setVehicle({ ...vehicle, make: e.target.value })}
              style={{ background: "#111827", color: "#FFF", border: "1px solid #4B5563", padding: "8px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, flexGrow: 1 }}
            >
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Kia">Kia</option>
              <option value="Nissan">Nissan</option>
              <option value="Ford">Ford</option>
              <option value="Chevrolet">Chevrolet</option>
            </select>

            <input
              type="text"
              value={vehicle.model}
              onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
              placeholder="Modelo (ej. RAV4, CR-V)"
              style={{ background: "#111827", color: "#FFF", border: "1px solid #4B5563", padding: "8px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, flexGrow: 1 }}
            />
          </div>

          <span style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: 700 }}>
            {vehicle.year} {vehicle.make} {vehicle.model} · {vehicle.mileage}
          </span>
        </div>
      </div>

      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #111827 0%, #0B0F19 100%)", padding: "80px 24px", borderBottom: "1px solid #1F2937" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <span style={{ background: "#374151", color: "#FFC72C", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              SERVICIOS AUTOMOTRICES HECHOS CON EXCELENCIA
            </span>
            <h1 style={{ fontSize: "clamp(34px, 4.8vw, 54px)", fontWeight: 900, color: "#FFFFFF", margin: "18px 0 16px", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
              El Mantenimiento de tu Vehículo Hecho Bien. Garantizado.
            </h1>
            <p style={{ fontSize: "16px", color: "#9CA3AF", lineHeight: "1.65", margin: "0 0 32px" }}>
              Mantenimiento preventivo, cambio de aceite sintético, servicio de frenos cerámicos y gestión de flotas comerciales en Santo Domingo con la garantía oficial República Fleet.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#estimator"
                style={{ background: "#FFC72C", color: "#0F172A", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px", boxShadow: "0 4px 20px rgba(255,199,44,0.3)" }}
              >
                Cotizar mi Vehículo Ahora →
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
            <div style={{ display: "flex", gap: "28px", marginTop: "36px", paddingTop: "24px", borderTop: "1px solid #1F2937" }}>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "#FFC72C" }}>100% Escrito</div>
                <div style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 700 }}>Estimado antes de trabajar</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "#FFC72C" }}>12 Meses</div>
                <div style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 700 }}>Garantía en piezas & mano de obra</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "#10B981" }}>48h SLA</div>
                <div style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 700 }}>Flotas comerciales garantizadas</div>
              </div>
            </div>
          </div>

          {/* Hero Photography Card */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "2px solid #374151", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80"
                alt="República Fleet Auto Maintenance Workshop"
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ position: "absolute", bottom: "-20px", right: "20px", background: "#1F2937", border: "1px solid #374151", padding: "16px 20px", borderRadius: "14px", display: "flex", alignItems: "center", gap: "14px", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
              <div style={{ background: "#FFC72C", color: "#0F172A", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "18px" }}>
                30
              </div>
              <div>
                <div style={{ fontSize: "12.5px", fontWeight: 900, color: "#FFF" }}>Chequeo Digital de 30 Puntos</div>
                <div style={{ fontSize: "11px", color: "#9CA3AF" }}>Reporte fotográfico a tu WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE ESTIMATOR & APPOINTMENT BUILDER ────────── */}
      <section id="estimator" style={{ padding: "90px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "11px", fontWeight: 900, color: "#FFC72C", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            COTIZADOR EN TIEMPO REAL
          </span>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "8px 0" }}>
            Selecciona los Servicios para Tu {vehicle.make} {vehicle.model} ({vehicle.year})
          </h2>
          <p style={{ fontSize: "15px", color: "#9CA3AF" }}>
            Obtén una cotización transparente con precios locales en pesos dominicanos (RD$).
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "32px", alignItems: "start" }}>
          
          {/* Services List Selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {serviceOptions.map(s => {
              const isChecked = selectedServices.includes(s.id);
              return (
                <div
                  key={s.id}
                  onClick={() => toggleService(s.id)}
                  style={{
                    background: isChecked ? "rgba(255,199,44,0.08)" : "#111827",
                    border: `2px solid ${isChecked ? "#FFC72C" : "#1F2937"}`,
                    borderRadius: "14px",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  <div style={{ flexGrow: 1, paddingRight: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 900, background: isChecked ? "#FFC72C" : "#374151", color: isChecked ? "#0F172A" : "#FFF", padding: "2px 8px", borderRadius: "4px", textTransform: "uppercase" }}>
                        {s.category.toUpperCase()}
                      </span>
                      <span style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: 700 }}>⏱️ {s.time}</span>
                    </div>
                    <h3 style={{ fontSize: "16.5px", fontWeight: 900, color: "#FFFFFF", margin: "0 0 6px" }}>{s.name}</h3>
                    <p style={{ fontSize: "13px", color: "#9CA3AF", margin: 0, lineHeight: "1.5" }}>{s.desc}</p>
                  </div>

                  <div style={{ textAlign: "right", minWidth: "120px" }}>
                    <div style={{ fontSize: "18px", fontWeight: 900, color: "#FFC72C" }}>RD$ {s.price.toLocaleString()}</div>
                    <div style={{ fontSize: "11px", color: isChecked ? "#10B981" : "#6B7280", fontWeight: 800, marginTop: "4px" }}>
                      {isChecked ? "✓ Seleccionado" : "+ Agregar"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real-time Order Summary Card */}
          <div style={{ background: "#111827", border: "2px solid #FFC72C", borderRadius: "20px", padding: "28px", position: "sticky", top: "120px", boxShadow: "0 15px 40px rgba(0,0,0,0.4)" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#FFFFFF", margin: "0 0 16px", borderBottom: "1px solid #1F2937", paddingBottom: "12px" }}>
              Resumen del Turno
            </h3>

            <div style={{ fontSize: "13px", color: "#D1D5DB", marginBottom: "16px" }}>
              <div style={{ fontWeight: 800, color: "#FFC72C" }}>{vehicle.year} {vehicle.make} {vehicle.model}</div>
              <div style={{ fontSize: "11.5px", color: "#9CA3AF" }}>Taller Naco, Santo Domingo</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px", borderBottom: "1px solid #1F2937", paddingBottom: "16px" }}>
              {selectedServices.map(id => {
                const item = serviceOptions.find(s => s.id === id);
                if (!item) return null;
                return (
                  <div key={id} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <span style={{ color: "#D1D5DB", flexGrow: 1, paddingRight: "8px" }}>{item.name}</span>
                    <span style={{ fontWeight: 800, color: "#FFF" }}>RD$ {item.price.toLocaleString()}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <span style={{ fontSize: "15px", fontWeight: 900, color: "#FFF" }}>Total Estimado:</span>
              <span style={{ fontSize: "24px", fontWeight: 900, color: "#FFC72C" }}>RD$ {totalPrice.toLocaleString()}</span>
            </div>

            {booked ? (
              <div style={{ background: "#064E3B", border: "1px solid #10B981", borderRadius: "10px", padding: "16px", textAlign: "center" }}>
                <div style={{ fontWeight: 900, color: "#10B981", fontSize: "16px" }}>¡Turno Confirmado!</div>
                <div style={{ fontSize: "12px", color: "#D1D5DB", marginTop: "4px" }}>
                  Tu asesor te enviará los datos de bahía en taller a tu WhatsApp.
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <input
                  type="text"
                  required
                  placeholder="Nombre Completo"
                  style={{ background: "#1F2937", border: "1px solid #374151", color: "#FFF", padding: "10px", borderRadius: "6px", fontSize: "13px" }}
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp de Contacto"
                  style={{ background: "#1F2937", border: "1px solid #374151", color: "#FFF", padding: "10px", borderRadius: "6px", fontSize: "13px" }}
                />
                <button
                  type="submit"
                  style={{ background: "#FFC72C", color: "#0F172A", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 900, fontSize: "14.5px", cursor: "pointer", boxShadow: "0 4px 16px rgba(255,199,44,0.3)", marginTop: "4px" }}
                >
                  Agendar Turno en Taller 🛠️
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── COMMERCIAL FLEETS SECTION ─────────────────────────── */}
      <section id="fleet" style={{ background: "#111827", padding: "90px 24px", borderTop: "1px solid #1F2937", borderBottom: "1px solid #1F2937" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <span style={{ color: "#FFC72C", fontSize: "11px", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              CUENTAS CORPORATIVAS & FLOTAS
            </span>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "12px 0 16px" }}>
              Soluciones Integrales para Flotas Comerciales
            </h2>
            <p style={{ fontSize: "15px", color: "#9CA3AF", lineHeight: "1.7", margin: "0 0 24px" }}>
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

          <div style={{ borderRadius: "20px", overflow: "hidden", border: "2px solid #374151" }}>
            <img
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
              alt="Commercial Fleet Vehicles"
              style={{ width: "100%", height: "380px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ─── SPECIAL COUPONS GRID ───────────────────────────────── */}
      <section id="coupons" style={{ padding: "90px 24px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "11px", fontWeight: 900, color: "#FFC72C", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            OFERTAS ESPECIALES DEL MES
          </span>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>
            Cupónes & Promociones de Taller
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {coupons.map(c => (
            <div key={c.code} style={{ background: "#111827", border: "2px dashed #FFC72C", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ background: "#374151", color: "#FFC72C", padding: "3px 10px", borderRadius: "4px", fontSize: "10px", fontWeight: 900, textTransform: "uppercase" }}>
                  CUPÓN OFICIAL
                </span>
                <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#FFFFFF", margin: "12px 0 6px" }}>{c.title}</h3>
                <p style={{ fontSize: "13.5px", color: "#9CA3AF", lineHeight: "1.5", margin: "0 0 16px" }}>{c.desc}</p>
              </div>

              <div style={{ borderTop: "1px solid #1F2937", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", color: "#6B7280", fontWeight: 700 }}>Código: <strong style={{ color: "#FFF" }}>{c.code}</strong></span>
                <a href="#estimator" style={{ color: "#FFC72C", textDecoration: "none", fontWeight: 900, fontSize: "12.5px" }}>Canjear →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ background: "#030712", color: "#9CA3AF", padding: "60px 24px", borderTop: "1px solid #1F2937", textAlign: "center", fontSize: "13px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ fontWeight: 900, fontSize: "20px", color: "#FFFFFF", marginBottom: "8px" }}>
            REPÚBLICA FLEET & AUTO MAINTENANCE
          </div>
          <div>Av. Gustavo Mejía Ricart #88, Ensanche Naco, Santo Domingo · Av. España #12, Punta Cana</div>
          <div style={{ marginTop: "12px", color: "#6B7280" }}>Teléfono: (809) 555-AUTO · Correo: contacto@republicafleet.com</div>
          <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #111827", color: "#FFC72C", fontWeight: 800, fontSize: "11.5px" }}>
            Demo Template Built by Altamar Web Studio · Inspired by Midas.com
          </div>
        </div>
      </footer>

    </div>
  );
}
