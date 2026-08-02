"use client";

import { useState } from "react";

export default function PuntaCanaVillasProduction() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVilla, setSelectedVilla] = useState("Villa Coral Estate · Cap Cana");
  const [booked, setBooked] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "DOP">("USD");

  const villas = [
    {
      id: "v1",
      name: "Villa Coral Estate · Oceanfront Cap Cana",
      location: "Cap Cana Marina, Punta Cana",
      bedrooms: "6 Habitaciones · 12 Huéspedes",
      priceUSD: 1450,
      priceDOP: 87000,
      features: ["Piscina Infinity con Vista al Mar", "Chef Privado Incluido", "Mayordomo 24/7", "Acceso a Playa Juanillo"],
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "v2",
      name: "Altamar Modern Mansion · Casa de Campo",
      location: "Casa de Campo Resort & Golf, La Romana",
      bedrooms: "8 Habitaciones · 16 Huéspedes",
      priceUSD: 2200,
      priceDOP: 132000,
      features: ["Campo de Golf Diente de Perro", "Muelle Privado para Yate", "Helipuerto", "Jacuzzi Climatizado"],
      img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "v3",
      name: "Villa Las Terrenas Beachfront Haven",
      location: "Playa Cosón, Las Terrenas, Samaná",
      bedrooms: "5 Habitaciones · 10 Huéspedes",
      priceUSD: 980,
      priceDOP: 58800,
      features: ["Acceso Directo a Playa Virgen", "Piscina Ecológica de Sal", "Personal Doméstico", "Kayak & Paddleboards"],
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const conciergeServices = [
    { title: "Chef Privado & Alta Gastronomía", desc: "Menús gourmet diseñados a medida con mariscos frescos del Caribe y maridaje de vinos internacionales." },
    { title: "Alquiler de Yates & Katamaranes VIP", desc: "Excursiones privadas hacia Isla Saona, Palmilla y piscina natural con tripulación y bar abierto." },
    { title: "Traslado en Helicóptero & Chófer Privado", desc: "Recogida VIP en la pista del Aeropuerto Internacional de Punta Cana (PUJ) hacia tu villa." }
  ];

  return (
    <div style={{ background: "#060A12", color: "#F8FAFC", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      
      {/* ─── TOP BAR ────────────────────────────────────────────── */}
      <div style={{ background: "#020408", color: "#94A3B8", padding: "10px 24px", fontSize: "12px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ color: "#FFB703", fontWeight: 800 }}>★ COLECCIÓN EXCLUSIVA DE VILLAS DE LUJO EN REPÚBLICA DOMINICANA</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button onClick={() => setCurrency(currency === "USD" ? "DOP" : "USD")} style={{ background: "rgba(255,255,255,0.1)", color: "#FFF", border: "none", padding: "4px 10px", borderRadius: "4px", fontSize: "11px", fontWeight: 800, cursor: "pointer" }}>
              Moneda: {currency} (Click para cambiar)
            </button>
            <a href="https://wa.me/18093588113?text=Hola%20Cap%20Cana%20Escapes,%20deseo%20reservar%20una%20villa" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "none", fontWeight: 800 }}>💬 Concierge WhatsApp</a>
          </div>
        </div>
      </div>

      {/* ─── LUXURY HEADER ──────────────────────────────────────── */}
      <header style={{ background: "#060A12", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "20px 0", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ background: "#FFB703", color: "#060A12", width: "42px", height: "42px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "18px" }}>
              CCE
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: "20px", color: "#FFFFFF", letterSpacing: "0.06em" }}>CAP CANA ESCAPES</div>
              <div style={{ fontSize: "9px", color: "#FFB703", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                LUXURY VILLAS & CONCIERGE VIP
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "28px" }} className="nav-link-desktop">
            <a href="#villas" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "14px", fontWeight: 700 }}>Villas Disponibles</a>
            <a href="#concierge" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "14px", fontWeight: 700 }}>Servicios Concierge</a>
            <a href="#about" style={{ textDecoration: "none", color: "#CBD5E1", fontSize: "14px", fontWeight: 700 }}>Experiencia VIP</a>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            style={{ background: "#FFB703", color: "#060A12", border: "none", padding: "12px 24px", borderRadius: "8px", fontWeight: 900, fontSize: "14px", cursor: "pointer", boxShadow: "0 4px 16px rgba(255,183,3,0.3)" }}
          >
            Reservar Villa →
          </button>
        </div>
      </header>

      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #0A1120 0%, #060A12 100%)", padding: "100px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          <div>
            <span style={{ background: "rgba(255,183,3,0.1)", color: "#FFB703", border: "1px solid rgba(255,183,3,0.3)", padding: "5px 14px", borderRadius: "20px", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              RESORT & PRIVATE VILLAS · PUNTA CANA
            </span>
            <h1 style={{ fontSize: "clamp(36px, 4.8vw, 56px)", fontWeight: 900, color: "#FFFFFF", margin: "20px 0 20px", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
              Colección Privada de Mansiones Frente al Mar
            </h1>
            <p style={{ fontSize: "16.5px", color: "#94A3B8", lineHeight: "1.7", margin: "0 0 36px" }}>
              Disfruta de la máxima privacidad y exclusividad en Cap Cana, Casa de Campo y Las Terrenas. Incluye chef profesional, servicio de mayordomo y traslados privados.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button
                onClick={() => setModalOpen(true)}
                style={{ background: "#FFB703", color: "#060A12", border: "none", padding: "16px 32px", borderRadius: "8px", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 20px rgba(255,183,3,0.3)" }}
              >
                Consultar Disponibilidad de Villa
              </button>
              <a
                href="https://wa.me/18093588113?text=Hola%20Cap%20Cana%20Escapes,%20quisiera%20cotizar%20una%20villa%20para%20mis%20vacaciones"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#FFFFFF", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: 900, fontSize: "15px" }}
              >
                WhatsApp Concierge 24/7
              </a>
            </div>
          </div>

          <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}>
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
              alt="Oceanfront Luxury Villa Cap Cana"
              style={{ width: "100%", height: "450px", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ─── VILLAS CATALOG ─────────────────────────────────────── */}
      <section id="villas" style={{ padding: "90px 24px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 56px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#FFB703", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            NUESTRA COLECCIÓN
          </span>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "8px 0" }}>Villas Exclusivas Seleccionadas</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "36px" }}>
          {villas.map(v => (
            <div key={v.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.4)", display: "flex", flexDirection: "column" }}>
              <img src={v.img} alt={v.name} style={{ width: "100%", height: "240px", objectFit: "cover" }} />
              <div style={{ padding: "32px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "12px", color: "#FFB703", fontWeight: 800 }}>📍 {v.location}</div>
                  <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#FFFFFF", margin: "8px 0 6px" }}>{v.name}</h3>
                  <div style={{ fontSize: "13px", color: "#CBD5E1", fontWeight: 700, marginBottom: "16px" }}>{v.bedrooms}</div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                    {v.features.map((feat, idx) => (
                      <div key={idx} style={{ fontSize: "13px", color: "#94A3B8", display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#FFB703" }}>✓</span> {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "24px", fontWeight: 900, color: "#FFB703", marginBottom: "16px" }}>
                    {currency === "USD" ? `$${v.priceUSD.toLocaleString()} USD` : `RD$ ${v.priceDOP.toLocaleString()}`}
                    <span style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 700 }}> / noche</span>
                  </div>
                  <button
                    onClick={() => { setSelectedVilla(v.name); setModalOpen(true); }}
                    style={{ background: "#FFB703", color: "#060A12", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 900, fontSize: "14px", cursor: "pointer", width: "100%" }}
                  >
                    Solicitar Reserva Privada
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONCIERGE SERVICES ─────────────────────────────────── */}
      <section id="concierge" style={{ background: "rgba(255,255,255,0.02)", padding: "90px 24px", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#FFB703", letterSpacing: "0.15em", textTransform: "uppercase" }}>EXPERIENCIAS PERSONALIZADAS</span>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", margin: "6px 0" }}>Servicios Concierge VIP</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            {conciergeServices.map(c => (
              <div key={c.title} style={{ background: "#060A12", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "32px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#FFFFFF", margin: "0 0 10px" }}>{c.title}</h3>
                <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: "1.65", margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESERVATION MODAL ──────────────────────────────────── */}
      {modalOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(2,4,8,0.8)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}>
          <div style={{ background: "#060A12", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "24px", padding: "40px", maxWidth: "540px", width: "100%", position: "relative" }}>
            <button onClick={() => setModalOpen(false)} style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.1)", border: "none", width: "32px", height: "32px", borderRadius: "50%", color: "#FFF", fontWeight: 900, cursor: "pointer" }}>✕</button>

            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#FFB703", textTransform: "uppercase" }}>RESERVA VIP</span>
              <h3 style={{ fontSize: "24px", fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>Solicitud de Estancia</h3>
            </div>

            {booked ? (
              <div style={{ background: "rgba(255,183,3,0.1)", border: "1px solid #FFB703", padding: "24px", borderRadius: "16px", textAlign: "center" }}>
                <h4 style={{ color: "#FFB703", fontWeight: 900, fontSize: "18px", margin: "0 0 6px" }}>¡Solicitud Confirmada!</h4>
                <p style={{ fontSize: "13px", color: "#FFE699", lineHeight: "1.6", margin: 0 }}>Tu Concierge asignado se comunicará por WhatsApp para coordinar fechas y depósito.</p>
                <button onClick={() => { setBooked(false); setModalOpen(false); }} style={{ background: "#FFB703", color: "#060A12", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", marginTop: "16px", cursor: "pointer" }}>Cerrar</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>Villa Seleccionada</label>
                  <input type="text" value={selectedVilla} readOnly style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", fontWeight: 700, fontSize: "13.5px", color: "#FFB703", marginTop: "4px" }} />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>Nombre Completo *</label>
                  <input type="text" required placeholder="ej. Alexander Hamilton" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "#020408", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, color: "#CBD5E1" }}>WhatsApp / Correo Internacional *</label>
                  <input type="text" required placeholder="+1 (809) 358-8113" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "#020408", color: "#FFF", fontSize: "13.5px", marginTop: "4px" }} />
                </div>
                <button type="submit" style={{ background: "#FFB703", color: "#060A12", border: "none", padding: "16px", borderRadius: "10px", fontWeight: 900, fontSize: "15px", cursor: "pointer", boxShadow: "0 4px 16px rgba(255,183,3,0.3)", marginTop: "6px" }}>
                  Confirmar Reserva con Concierge VIP →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ background: "#020408", color: "#64748B", padding: "60px 24px 30px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "13px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px", marginBottom: "48px" }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: "18px", color: "#FFFFFF", marginBottom: "12px" }}>CAP CANA ESCAPES</div>
              <p style={{ fontSize: "13px", lineHeight: "1.65", color: "#94A3B8", margin: 0 }}>
                Alquiler de villas de ultra lujo y servicios concierge VIP en Punta Cana, Cap Cana y Casa de Campo.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", fontSize: "14px" }}>Oficina Marina</div>
              <div>Marina de Cap Cana, Edificio 4, Suite 102, Punta Cana, República Dominicana.</div>
            </div>
            <div>
              <div style={{ fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", fontSize: "14px" }}>Concierge 24/7</div>
              <div>Tel: +1 (809) 555-VILLA · WhatsApp: +1 (809) 358-8113</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", textAlign: "center", fontSize: "12px" }}>
            © 2026 Cap Cana Escapes SRL. RNC 1-32-09412-4. Todos los derechos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}
