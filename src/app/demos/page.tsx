"use client";

import Link from "next/link";

export default function DemosPlaygroundPage() {
  const demos = [
    {
      id: "constructora-aybar",
      title: "Constructora Aybar & Torres",
      category: "Construcción & Desarrollo Inmobiliario",
      inspiredBy: "GrupoAybar.com & Construger.com",
      url: "/demo/constructora-aybar",
      badge: "Edición Corporativa",
      features: ["Cotizador de Proyectos m²", "Filtro de Obras Sismo-Resistentes", "Bilingüe ES/EN", "Expediente de Licitación"]
    },
    {
      id: "sdq-auto",
      title: "República Fleet & Maintenance",
      category: "Automotriz & Flotas Comerciales",
      inspiredBy: "Midas.com Enterprise",
      url: "/demo/sdq-auto",
      badge: "Edición Midas",
      features: ["Selector de 15 Marcas & 120+ Modelos", "Buscador de Gomas por Medida", "Calculadora de Precios en RD$", "Reserva de Bahía"]
    },
    {
      id: "sdq-dental",
      title: "SDQ Dental BLU Clinic",
      category: "Salud & Odontología",
      inspiredBy: "DentalBLU.com",
      url: "/demo/sdq-dental",
      badge: "Edición Médica",
      features: ["Pestañas de Tratamientos Integrales", "Fotografía Clínica HD", "Citas Prioritarias por WhatsApp", "Reseñas Verificadas Google"]
    },
    {
      id: "punta-cana-villas",
      title: "Cap Cana & Punta Cana Escapes",
      category: "Bienes Raíces & Villas de Lujo",
      inspiredBy: "Luxury Rental Resorts",
      url: "/demo/punta-cana-villas",
      badge: "Edición Lujo",
      features: ["Calculadora de Noches en USD/DOP", "Servicios de Concierge VIP", "Galería de Villas en Primera Línea"]
    },
    {
      id: "naco-legal",
      title: "Nolasco & Almonte Abogados",
      category: "Firma de Abogados Corporativos",
      inspiredBy: "Corporate Law Standard",
      url: "/demo/naco-legal",
      badge: "Edición Legal",
      features: ["Consulta Confidencial Prioritaria", "Áreas de Derecho Corporativo & Inversión", "Asesoría Fiscal CODIA"]
    },
    {
      id: "terrenas-coffee",
      title: "Café Terrenas Artisanal Store",
      category: "E-Commerce & Productos de Origen",
      inspiredBy: "Artisanal Dominican Coffee",
      url: "/demo/terrenas-coffee",
      badge: "Edición Tienda",
      features: ["Carrito de Compras en Tiempo Real", "Pago con Stripe & Delivery", "Selección de Grano de Origen"]
    }
  ];

  return (
    <div style={{ background: "#0A1128", color: "#F8FAFC", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      
      {/* Header */}
      <header style={{ background: "#070B14", borderBottom: "1px solid #1E293B", padding: "20px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "24px" }}>🎮</span>
            <div>
              <div style={{ fontWeight: 900, fontSize: "18px", color: "#FFFFFF" }}>ALTAMAR DEMO PLAYGROUND</div>
              <div style={{ fontSize: "10px", color: "#38BDF8", fontWeight: 800, letterSpacing: "0.1em" }}>PLANTILLAS VIVAS EN TIEMPO REAL</div>
            </div>
          </Link>

          <div style={{ display: "flex", gap: "12px" }}>
            <Link href="/" style={{ background: "#1E293B", color: "#FFF", padding: "8px 16px", borderRadius: "6px", textDecoration: "none", fontWeight: 800, fontSize: "13px" }}>
              ← Altamar Home
            </Link>
            <Link href="/portfolio" style={{ background: "#0EA5E9", color: "#FFF", padding: "8px 16px", borderRadius: "6px", textDecoration: "none", fontWeight: 800, fontSize: "13px" }}>
              📋 Catálogo Completo
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "70px 24px", textAlign: "center", borderBottom: "1px solid #1E293B" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ background: "#1E293B", color: "#38BDF8", padding: "4px 14px", borderRadius: "20px", fontSize: "11px", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            DEMOS INTERACTIVAS FUNCIONALES
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: "#FFFFFF", margin: "16px 0 12px" }}>
            Explora las Plantillas Vivas Desarrolladas para Clientes de R.D.
          </h1>
          <p style={{ fontSize: "15px", color: "#94A3B8", lineHeight: "1.6" }}>
            Haz clic en cualquiera de las demos para interactuar con los sitios web completos, probar las calculadoras en tiempo real y enviar formularios de prueba.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "80px 24px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "28px" }}>
          {demos.map(d => (
            <div key={d.id} style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "20px", padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ background: "#0EA5E9", color: "#FFF", padding: "3px 10px", borderRadius: "6px", fontSize: "10.5px", fontWeight: 900, textTransform: "uppercase" }}>
                    {d.badge}
                  </span>
                  <span style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 700 }}>{d.inspiredBy}</span>
                </div>

                <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#FFFFFF", margin: "0 0 6px" }}>{d.title}</h3>
                <div style={{ fontSize: "13px", color: "#38BDF8", fontWeight: 800, marginBottom: "16px" }}>{d.category}</div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                  {d.features.map(f => (
                    <span key={f} style={{ background: "#1E293B", color: "#CBD5E1", border: "1px solid #334155", borderRadius: "4px", padding: "3px 8px", fontSize: "11px", fontWeight: 700 }}>
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={d.url}
                style={{ background: "#0EA5E9", color: "#FFFFFF", display: "block", textAlign: "center", padding: "14px", borderRadius: "10px", fontWeight: 900, fontSize: "14.5px", textDecoration: "none", boxShadow: "0 4px 16px rgba(14,165,233,0.3)" }}
              >
                🚀 Abrir Demo Viva →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#070B14", color: "#64748B", padding: "40px 24px", textAlign: "center", fontSize: "12.5px", borderTop: "1px solid #1E293B" }}>
        Altamar Web Studio · Todos los derechos reservados · Santo Domingo, R.D.
      </footer>

    </div>
  );
}
