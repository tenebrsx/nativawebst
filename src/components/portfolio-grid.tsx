"use client";

import { useState, useMemo } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";

const demoRoutes: Record<string, string> = {
  "sdq-clinic-template": "/demo/sdq-dental",
  "punta-cana-villa-template": "/demo/punta-cana-villas",
  "naco-legal-template": "/demo/naco-legal",
  "zona-tours-template": "/demo/punta-cana-villas",
  "terrenas-coffee-template": "/demo/terrenas-coffee",
  "caribe-superfoods-template": "/demo/caribe-superfoods",
  "bavaro-swim-template": "/demo/bavaro-swim",
  "hache-design-template": "/demo/constructora-aybar",
  "laura-alba-realestate-template": "/demo/punta-cana-villas",
  "sdq-auto-template": "/demo/sdq-auto",
  "sdq-beauty-template": "/demo/sdq-dental",
  "sdq-construction-template": "/demo/constructora-aybar",
};

type Category = "all" | "smb" | "realestate" | "pro" | "ecom";

export default function PortfolioGrid() {
  const { lang } = useGeo();
  const dict = translations[lang].portfolioPage;

  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  
  // Track viewport mode per project card ('desktop' or 'mobile')
  const [cardModes, setCardModes] = useState<Record<string, "desktop" | "mobile">>({});

  const getMode = (id: string) => cardModes[id] || "desktop";

  const toggleMode = (id: string, mode: "desktop" | "mobile") => {
    setCardModes(prev => ({ ...prev, [id]: mode }));
  };

  const filteredProjects = useMemo(() => {
    return dict.projects.filter(project => {
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        project.title.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.industry.toLowerCase().includes(q) ||
        project.desc.toLowerCase().includes(q) ||
        project.tags.some(t => t.toLowerCase().includes(q))
      );
      return matchesCategory && matchesSearch;
    });
  }, [dict.projects, selectedCategory, searchQuery]);

  const activeProject = useMemo(() => {
    if (!activeModalId) return null;
    return dict.projects.find(p => p.id === activeModalId) || null;
  }, [dict.projects, activeModalId]);

  return (
    <div style={{ position: "relative" }}>

      {/* ─── SEARCH & CATEGORY FILTER BAR ───────────────────────── */}
      <div style={{
        background: "var(--surface)",
        border: "1.5px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "20px 24px",
        marginBottom: "40px",
        boxShadow: "var(--shadow-sm)"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          {/* Top Row: Search Input */}
          <div style={{ position: "relative", width: "100%" }}>
            <span style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--gray-400)",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center"
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              type="text"
              suppressHydrationWarning
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={dict.search_placeholder}
              style={{
                width: "100%",
                padding: "14px 16px 14px 46px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                color: "var(--navy-trench)",
                outline: "none",
                transition: "border-color 0.2s"
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "var(--gray-400)",
                  cursor: "pointer",
                  fontSize: "14px"
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Bottom Row: Category Chips */}
          <div style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center"
          }}>
            {(["all", "smb", "realestate", "pro", "ecom"] as Category[]).map((catKey) => {
              const isActive = selectedCategory === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setSelectedCategory(catKey)}
                  style={{
                    background: isActive ? "var(--navy-trench)" : "var(--bg)",
                    color: isActive ? "#ffffff" : "var(--navy-trench)",
                    border: `1.5px solid ${isActive ? "var(--navy-trench)" : "var(--border)"}`,
                    padding: "9px 18px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: 700,
                    fontFamily: "var(--font-head)",
                    cursor: "pointer",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  {dict.categories[catKey]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── PROJECT CARDS GRID ──────────────────────────────────── */}
      {filteredProjects.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "60px 20px",
          background: "var(--surface)",
          borderRadius: "var(--radius)",
          border: "1.5px dashed var(--border)"
        }}>
          <p style={{ color: "var(--muted)", fontSize: "15px", fontFamily: "var(--font-sans)" }}>
            {dict.labels.no_results}
          </p>
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "28px"
        }}>
          {filteredProjects.map((project) => {
            const mode = getMode(project.id);
            return (
              <div
                key={project.id}
                className="card card-hover"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                  background: "var(--surface)"
                }}
              >
                {/* Card Header & Viewport Switcher */}
                <div style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(255,255,255,0.4)"
                }}>
                  <div>
                    <span style={{
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--coral-blue)",
                      fontFamily: "var(--font-head)"
                    }}>
                      {project.industry}
                    </span>
                    <h3 style={{
                      fontSize: "16px",
                      fontWeight: 800,
                      color: "var(--navy-trench)",
                      fontFamily: "var(--font-head)",
                      margin: "2px 0 0"
                    }}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Desktop / Mobile Viewport Toggle */}
                  <div style={{
                    display: "flex",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "2px",
                    gap: "2px"
                  }}>
                    <button
                      onClick={() => toggleMode(project.id, "desktop")}
                      title="Desktop View"
                      style={{
                        background: mode === "desktop" ? "var(--navy-trench)" : "transparent",
                        color: mode === "desktop" ? "#fff" : "var(--muted)",
                        border: "none",
                        borderRadius: "4px",
                        padding: "4px 8px",
                        fontSize: "11px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }}
                    >
                      🖥️
                    </button>
                    <button
                      onClick={() => toggleMode(project.id, "mobile")}
                      title="Mobile View"
                      style={{
                        background: mode === "mobile" ? "var(--navy-trench)" : "transparent",
                        color: mode === "mobile" ? "#fff" : "var(--muted)",
                        border: "none",
                        borderRadius: "4px",
                        padding: "4px 8px",
                        fontSize: "11px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }}
                    >
                      📱
                    </button>
                  </div>
                </div>

                {/* Card Viewport Canvas Container */}
                <div style={{
                  background: mode === "desktop" ? "#0F172A" : "#1E293B",
                  padding: "16px",
                  height: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  {mode === "desktop" ? (
                    /* Mock Desktop Frame */
                    <div style={{
                      width: "100%",
                      height: "100%",
                      background: "#ffffff",
                      borderRadius: "6px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden"
                    }}>
                      {/* Browser Header Bar */}
                      <div style={{
                        background: "#E2E8F0",
                        padding: "6px 10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "9px",
                        color: "#64748B"
                      }}>
                        <div style={{ display: "flex", gap: "4px" }}>
                          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#EF4444" }} />
                          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#F59E0B" }} />
                          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981" }} />
                        </div>
                        <div style={{
                          background: "#ffffff",
                          borderRadius: "3px",
                          padding: "2px 8px",
                          flexGrow: 1,
                          fontSize: "8px",
                          color: "#475569",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}>
                          https://{project.id}.altamar.app
                        </div>
                      </div>

                      {/* Desktop Mock Web Page Body */}
                      <div style={{
                        background: "#ffffff",
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      }}>
                        {project.id.includes("clinic") || project.id.includes("beauty") ? (
                          <div style={{ padding: "10px", background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                <div style={{ background: "#1E64C4", color: "#fff", width: "16px", height: "16px", borderRadius: "3px", fontSize: "7px", fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>BLU</div>
                                <span style={{ fontSize: "9px", fontWeight: 900, color: "#0F172A" }}>Dental BLU SDQ</span>
                              </div>
                              <span style={{ background: "#1E64C4", color: "#fff", padding: "2px 6px", borderRadius: "3px", fontSize: "7px", fontWeight: 800 }}>Cita Directa</span>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", alignItems: "center", marginTop: "4px" }}>
                              <div>
                                <span style={{ fontSize: "6.5px", fontWeight: 800, color: "#1E64C4", textTransform: "uppercase" }}>Odontología Especializada</span>
                                <div style={{ fontSize: "10px", fontWeight: 900, color: "#0F172A", lineHeight: "1.2" }}>Sonrisas Hermosas en Naco</div>
                                <div style={{ fontSize: "7px", color: "#166534", fontWeight: 800, marginTop: "2px" }}>4.9 ★★★★★ (350+ Reseñas)</div>
                              </div>
                              <div style={{ borderRadius: "6px", overflow: "hidden", height: "55px", border: "1px solid #E2E8F0" }}>
                                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80" alt="Clinic operatory" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              </div>
                            </div>

                            <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
                              <span style={{ background: "#EFF6FF", border: "1px solid #DBEAFE", borderRadius: "3px", padding: "2px 4px", fontSize: "6.5px", color: "#1E64C4", fontWeight: 700 }}>Preventiva</span>
                              <span style={{ background: "#EFF6FF", border: "1px solid #DBEAFE", borderRadius: "3px", padding: "2px 4px", fontSize: "6.5px", color: "#1E64C4", fontWeight: 700 }}>Carillas BioClear</span>
                              <span style={{ background: "#EFF6FF", border: "1px solid #DBEAFE", borderRadius: "3px", padding: "2px 4px", fontSize: "6.5px", color: "#1E64C4", fontWeight: 700 }}>Invisalign</span>
                            </div>
                          </div>
                        ) : project.id.includes("villa") ? (
                          <div style={{ padding: "10px", background: "#0A1128", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "8px", fontWeight: 900, color: "#FFB703", letterSpacing: "0.08em" }}>CAP CANA ESCAPES</span>
                              <span style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "2px 5px", borderRadius: "3px", fontSize: "7px" }}>USD / DOP</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", alignItems: "center" }}>
                              <div>
                                <div style={{ fontSize: "10px", fontWeight: 800, lineHeight: "1.2" }}>Villas de Ultra Lujo</div>
                                <div style={{ fontSize: "7px", color: "#0EA5E9", marginTop: "2px" }}>Cap Cana · Bávaro</div>
                                <div style={{ fontSize: "8px", color: "#FFB703", fontWeight: 900, marginTop: "4px" }}>USD $1,450 / noche</div>
                              </div>
                              <div style={{ borderRadius: "6px", overflow: "hidden", height: "55px" }}>
                                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80" alt="Villa resort" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              </div>
                            </div>
                          </div>
                        ) : project.id.includes("construction") ? (
                          <div style={{
                            background: "#0A1128",
                            color: "#FFFFFF",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            fontFamily: "system-ui, -apple-system, sans-serif"
                          }}>
                            {/* Top Gold Engineering Bar */}
                            <div style={{ background: "#D7A639", color: "#0A1128", padding: "3px 8px", fontSize: "5.5px", textAlign: "center", fontWeight: 900, letterSpacing: "0.08em" }}>
                              SISMO-RESISTENCIA GRADO 8+ · AUDITORÍA P6 · CODIA #48921
                            </div>

                            {/* Crisp White Header Bar */}
                            <div style={{ background: "#FFFFFF", padding: "5px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #D7A639" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                <span style={{ fontSize: "8px", fontWeight: 900, color: "#0A1128", letterSpacing: "0.05em" }}>
                                  CONSTRUCTORA <span style={{ color: "#D7A639" }}>AYBAR</span>
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <span style={{ background: "rgba(215, 166, 57, 0.15)", color: "#B88A24", border: "1px solid rgba(215, 166, 57, 0.4)", padding: "1px 5px", borderRadius: "3px", fontSize: "5.5px", fontWeight: 900 }}>
                                  ISO 9001:2015
                                </span>
                                <span style={{ background: "#0A1128", color: "#D7A639", padding: "1px 5px", borderRadius: "3px", fontSize: "5.5px", fontWeight: 800 }}>
                                  ES / EN
                                </span>
                              </div>
                            </div>

                            {/* Hero High-Rise Showcase & Estimator Preview */}
                            <div style={{ margin: "6px 8px 8px 8px", padding: "8px 10px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", border: "1px solid rgba(215, 166, 57, 0.25)", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "8px", alignItems: "center" }}>
                              <div>
                                <span style={{ fontSize: "5.5px", fontWeight: 800, color: "#D7A639", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                  Torre Aybar Anacaona
                                </span>
                                <div style={{ fontSize: "9px", fontWeight: 900, color: "#FFFFFF", lineHeight: "1.2", marginTop: "2px" }}>
                                  Torres Residenciales & Obras
                                </div>
                                <div style={{ fontSize: "6px", color: "#94A3B8", marginTop: "2px", lineHeight: "1.2" }}>
                                  f&apos;c = 350-450 kg/cm² · 32 Niveles
                                </div>
                                <div style={{ display: "inline-block", background: "rgba(215, 166, 57, 0.15)", border: "1px solid rgba(215, 166, 57, 0.35)", color: "#E2C476", padding: "2px 6px", borderRadius: "4px", fontSize: "6.5px", fontWeight: 900, marginTop: "5px" }}>
                                  Cotizador m² (USD/DOP)
                                </div>
                              </div>

                              <div style={{ borderRadius: "6px", overflow: "hidden", height: "55px", border: "1px solid rgba(215, 166, 57, 0.35)", position: "relative" }}>
                                <img
                                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
                                  alt="Torre Aybar Anacaona high-rise construction"
                                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                <div style={{ position: "absolute", bottom: "3px", right: "3px", background: "rgba(10, 17, 40, 0.9)", color: "#D7A639", padding: "1px 4px", borderRadius: "2px", fontSize: "5px", fontWeight: 900 }}>
                                  32 Niveles
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : project.id.includes("legal") ? (
                          <div style={{ padding: "10px", background: "#0A1128", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "4px", display: "flex", justifyContent: "space-between" }}>
                              <span style={{ fontSize: "8px", fontWeight: 900, letterSpacing: "0.05em" }}>NOLASCO & ALMONTE</span>
                              <span style={{ fontSize: "6.5px", color: "#0EA5E9", fontWeight: 800 }}>ABOGADOS</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", alignItems: "center" }}>
                              <div>
                                <div style={{ fontSize: "9px", fontWeight: 900, color: "#fff", lineHeight: "1.2" }}>Protegemos tu Empresa</div>
                                <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>Derecho Corporativo</div>
                              </div>
                              <div style={{ borderRadius: "6px", overflow: "hidden", height: "45px" }}>
                                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" alt="Law firm" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              </div>
                            </div>
                            <div style={{ background: "#0EA5E9", color: "#fff", padding: "3px 6px", borderRadius: "3px", fontSize: "7px", fontWeight: 800, textAlign: "center" }}>
                              Consulta Confidencial →
                            </div>
                          </div>
                        ) : project.id.includes("hache") ? (
                          <div style={{ padding: "10px", background: "#1C1917", color: "#FAFAF9", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(217, 119, 6, 0.3)", paddingBottom: "4px" }}>
                              <span style={{ fontSize: "8.5px", fontWeight: 900, color: "#F59E0B", letterSpacing: "0.08em" }}>HACHE DESIGN STUDIO</span>
                              <span style={{ background: "rgba(245, 158, 11, 0.15)", color: "#F59E0B", padding: "1px 5px", borderRadius: "3px", fontSize: "6px", fontWeight: 900 }}>INTERIORISMO</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "8px", alignItems: "center" }}>
                              <div>
                                <div style={{ fontSize: "9.5px", fontWeight: 900, color: "#FFFFFF", lineHeight: "1.2" }}>Arquitectura &amp; Renders 3D</div>
                                <div style={{ fontSize: "7px", color: "#A8A29E", marginTop: "2px" }}>Residencias de Lujo</div>
                                <div style={{ fontSize: "7px", color: "#F59E0B", fontWeight: 800, marginTop: "4px" }}>Especificaciones por WhatsApp</div>
                              </div>
                              <div style={{ borderRadius: "6px", overflow: "hidden", height: "50px", border: "1px solid rgba(245, 158, 11, 0.3)" }}>
                                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80" alt="Hache Design interior" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              </div>
                            </div>
                          </div>
                        ) : project.id.includes("laura-alba") ? (
                          <div style={{ padding: "10px", background: "#0F172A", color: "#F8FAFC", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(212, 175, 55, 0.3)", paddingBottom: "4px" }}>
                              <span style={{ fontSize: "8.5px", fontWeight: 900, color: "#D4AF37", letterSpacing: "0.08em" }}>LAURA ALBA REAL ESTATE</span>
                              <span style={{ background: "#D4AF37", color: "#0F172A", padding: "1px 5px", borderRadius: "3px", fontSize: "6px", fontWeight: 900 }}>CAP CANA</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "8px", alignItems: "center" }}>
                              <div>
                                <div style={{ fontSize: "9.5px", fontWeight: 900, color: "#FFFFFF", lineHeight: "1.2" }}>Villas Frente al Mar</div>
                                <div style={{ fontSize: "7px", color: "#38BDF8", marginTop: "2px" }}>Punta Cana &amp; Santo Domingo</div>
                                <div style={{ fontSize: "7px", color: "#D4AF37", fontWeight: 800, marginTop: "4px" }}>Conversor USD / DOP</div>
                              </div>
                              <div style={{ borderRadius: "6px", overflow: "hidden", height: "50px", border: "1px solid rgba(212, 175, 55, 0.3)" }}>
                                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80" alt="Laura Alba Real Estate luxury villa" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              </div>
                            </div>
                          </div>
                        ) : project.id.includes("coffee") ? (
                          <div style={{
                            background: "#FDFBF7",
                            color: "#2C1A11",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            fontFamily: "system-ui, -apple-system, sans-serif"
                          }}>
                            {/* Top Announcement Bar */}
                            <div style={{ background: "#2C1A11", color: "#FDFBF7", padding: "3px 8px", fontSize: "5.5px", textAlign: "center", fontWeight: 700, letterSpacing: "0.08em" }}>
                              ENVIOS A TODA R.D. · CATA DE CAFÉ EN LAS TERRENAS
                            </div>

                            {/* Header Navigation */}
                            <div style={{ padding: "6px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #EAE3D2" }}>
                              <span style={{ fontFamily: "Georgia, serif", fontSize: "9.5px", fontWeight: 900, color: "#2C1A11", letterSpacing: "0.04em" }}>
                                CAFÉ TERRENAS
                              </span>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "6.5px", fontWeight: 700, color: "#8C7A6B" }}>
                                <span>SHOP</span>
                                <span>NOSOTROS</span>
                                <span>EVENTOS</span>
                                <span style={{ background: "#D96B43", color: "#FFFFFF", padding: "1.5px 6px", borderRadius: "9999px", fontSize: "6px", fontWeight: 800 }}>
                                  Bolsa (2)
                                </span>
                              </div>
                            </div>

                            {/* Hero Section Container (Land to Sea NYC Style) */}
                            <div style={{ margin: "6px 8px 8px 8px", padding: "8px 10px", background: "#2C1A11", borderRadius: "8px", color: "#FDFBF7", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "8px", alignItems: "center" }}>
                              <div>
                                <span style={{ fontSize: "5.5px", fontWeight: 800, color: "#D96B43", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                  Las Terrenas, Samaná
                                </span>
                                <div style={{ fontFamily: "Georgia, serif", fontSize: "9px", fontWeight: 700, color: "#FDFBF7", lineHeight: "1.2", marginTop: "2px" }}>
                                  Un Espacio Creativo Frente al Mar
                                </div>
                                <div style={{ fontSize: "6px", color: "#E5D4C0", marginTop: "3px", lineHeight: "1.2" }}>
                                  Café de Especialidad Tostado en Samaná
                                </div>
                                <div style={{ display: "inline-block", background: "#D96B43", color: "#FFFFFF", padding: "2px 6px", borderRadius: "4px", fontSize: "7px", fontWeight: 900, marginTop: "5px" }}>
                                  RD$ 240 <span style={{ fontSize: "5.5px", fontWeight: 500, opacity: 0.9 }}>/ espresso</span>
                                </div>
                              </div>

                              <div style={{ borderRadius: "6px", overflow: "hidden", height: "55px", border: "1px solid rgba(255,255,255,0.15)", position: "relative" }}>
                                <img
                                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80"
                                  alt="Café Terrenas Roastery"
                                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                <div style={{ position: "absolute", bottom: "3px", right: "3px", background: "rgba(44, 26, 17, 0.88)", color: "#FDFBF7", padding: "1px 4px", borderRadius: "2px", fontSize: "5px", fontWeight: 800 }}>
                                  Las Terrenas
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* República Fleet & Maintenance (Automotive) */
                          <div style={{
                            background: "#0F172A",
                            color: "#FFFFFF",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            fontFamily: "system-ui, -apple-system, sans-serif"
                          }}>
                            {/* Top Express Service Bar */}
                            <div style={{ background: "linear-gradient(90deg, #DC2626 0%, #B91C1C 100%)", color: "#FFFFFF", padding: "3px 8px", fontSize: "5.5px", textAlign: "center", fontWeight: 800, letterSpacing: "0.08em" }}>
                              ⚡ MANTENIMIENTO EXPRESS HASTA 6:00 PM · RED DE 4 SUCURSALES
                            </div>

                            {/* Header Navigation */}
                            <div style={{ padding: "6px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #334155" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <span style={{ background: "#EF4444", color: "#FFF", padding: "1.5px 5px", borderRadius: "3px", fontSize: "7.5px", fontWeight: 900, letterSpacing: "0.05em" }}>
                                  REPÚBLICA FLEET
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "6.5px", fontWeight: 700, color: "#94A3B8" }}>
                                <span>COTIZADOR</span>
                                <span>MARCAS</span>
                                <span>SUCURSALES</span>
                                <span style={{ background: "#EF4444", color: "#FFFFFF", padding: "1.5px 6px", borderRadius: "3px", fontSize: "6px", fontWeight: 800 }}>
                                  Agendar Cita
                                </span>
                              </div>
                            </div>

                            {/* Hero Interactive Selector Showcase */}
                            <div style={{ margin: "6px 8px 8px 8px", padding: "8px 10px", background: "#1E293B", borderRadius: "8px", border: "1px solid #334155", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "8px", alignItems: "center" }}>
                              <div>
                                <span style={{ fontSize: "5.5px", fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                  Mantenimiento & Flotas
                                </span>
                                <div style={{ fontSize: "9px", fontWeight: 900, color: "#FFFFFF", lineHeight: "1.2", marginTop: "2px" }}>
                                  Cotizador Automotriz m²
                                </div>
                                <div style={{ fontSize: "6px", color: "#94A3B8", marginTop: "2px", lineHeight: "1.2" }}>
                                  15 Marcas · 120+ Modelos (Toyota, Honda, Hyundai...)
                                </div>
                                <div style={{ display: "inline-block", background: "#0F172A", border: "1px solid #334155", color: "#10B981", padding: "2px 6px", borderRadius: "4px", fontSize: "7px", fontWeight: 900, marginTop: "5px" }}>
                                  Cambio Aceite RD$ 3,800
                                </div>
                              </div>

                              <div style={{ borderRadius: "6px", overflow: "hidden", height: "55px", border: "1px solid #334155", position: "relative" }}>
                                <img
                                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80"
                                  alt="Automotive fleet service"
                                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                <div style={{ position: "absolute", bottom: "3px", right: "3px", background: "rgba(15, 23, 42, 0.9)", color: "#10B981", padding: "1px 4px", borderRadius: "2px", fontSize: "5px", fontWeight: 900 }}>
                                  Red 4 Sucursales
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Mock Mobile Frame */
                    <div style={{
                      width: "125px",
                      height: "195px",
                      background: "#ffffff",
                      borderRadius: "16px",
                      border: "4px solid #0F172A",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      position: "relative"
                    }}>
                      {/* Speaker Notch */}
                      <div style={{
                        width: "30px",
                        height: "4px",
                        background: "#0F172A",
                        borderRadius: "2px",
                        margin: "4px auto 2px"
                      }} />
                      {/* Mobile Body Content */}
                      <div style={{
                        padding: "8px",
                        background: project.id.includes("clinic")
                          ? "#EFF6FF"
                          : project.id.includes("villa") || project.id.includes("legal")
                          ? "#0A1128"
                          : project.id.includes("coffee")
                          ? "linear-gradient(180deg, #1F120B 0%, #2D1B11 100%)"
                          : "#0F172A",
                        color: project.id.includes("clinic") ? "#0F172A" : "#FFFFFF",
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "5px"
                      }}>
                        {project.id.includes("coffee") ? (
                          <>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "6.5px", fontWeight: 900, color: "#D96B43" }}>CAFÉ TERRENAS</span>
                              <span style={{ background: "#D96B43", color: "#fff", padding: "1px 4px", borderRadius: "2px", fontSize: "5px", fontWeight: 900 }}>🛒 2</span>
                            </div>
                            <div style={{ borderRadius: "4px", overflow: "hidden", height: "48px", border: "1px solid rgba(217,107,67,0.35)", position: "relative" }}>
                              <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=300&q=80" alt="Coffee" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              <div style={{ position: "absolute", bottom: "2px", right: "2px", background: "rgba(0,0,0,0.85)", color: "#D96B43", padding: "1px 3px", borderRadius: "2px", fontSize: "4.5px", fontWeight: 900 }}>RD$ 750</div>
                            </div>
                            <div>
                              <div style={{ fontSize: "6.5px", fontWeight: 900, color: "#FDFBF7", lineHeight: "1.1" }}>Single Origin Espresso</div>
                              <div style={{ fontSize: "5.5px", color: "rgba(253,251,247,0.6)", marginTop: "1px" }}>Tueste Artesanal</div>
                            </div>
                            <div style={{
                              background: "linear-gradient(135deg, #D96B43 0%, #C25630 100%)",
                              color: "#fff",
                              borderRadius: "3px",
                              padding: "3px",
                              fontSize: "5.5px",
                              fontWeight: 900,
                              textAlign: "center"
                            }}>
                              Comprar en 2 Taps
                            </div>
                          </>
                        ) : (
                          <>
                            <div style={{ fontSize: "7px", fontWeight: 900 }}>
                              {project.id.includes("clinic") ? "Dental BLU SDQ" : project.id.includes("villa") ? "Cap Cana Escapes" : "Nolasco Law"}
                            </div>
                            <div style={{ fontSize: "8px", fontWeight: 800, lineHeight: "1.2" }}>
                              {project.id.includes("clinic") ? "Atención Excepcional" : project.id.includes("villa") ? "Villas de Lujo" : "Abogados Corporativos"}
                            </div>
                            <div style={{
                              background: "#25D366",
                              color: "#fff",
                              borderRadius: "4px",
                              padding: "4px",
                              fontSize: "7px",
                              fontWeight: 900,
                              textAlign: "center",
                              marginTop: "auto"
                            }}>
                              WhatsApp Directo 💬
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  gap: "14px"
                }}>

                  <p style={{
                    fontSize: "13px",
                    color: "var(--muted)",
                    lineHeight: "1.6",
                    margin: 0
                  }}>
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border)",
                          borderRadius: "4px",
                          padding: "3px 8px",
                          fontSize: "11px",
                          color: "var(--navy-trench)",
                          fontWeight: 600,
                          fontFamily: "var(--font-head)"
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ marginTop: "auto", paddingTop: "12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    <a
                      href={demoRoutes[project.id] || "/demo/sdq-dental"}
                      className="btn btn-navy"
                      style={{
                        padding: "10px",
                        fontSize: "12px",
                        textDecoration: "none",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "4px"
                      }}
                    >
                      Ver Demo en Vivo →
                    </a>
                    <button
                      onClick={() => setActiveModalId(project.id)}
                      className="btn btn-outline"
                      style={{
                        padding: "10px",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "4px"
                      }}
                    >
                      Especificaciones
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ─── CASE STUDY SLIDE-OVER DRAWER / MODAL ────────────────── */}
      {activeProject && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          background: "rgba(10, 17, 40, 0.75)",
          backdropFilter: "blur(6px)",
          display: "flex",
          justifyContent: "flex-end",
          animation: "fadeUp 0.25s ease forwards"
        }}>
          <div style={{
            width: "100%",
            maxWidth: "580px",
            height: "100%",
            background: "var(--surface)",
            borderLeft: "1.5px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            boxShadow: "-10px 0 40px rgba(0,0,0,0.3)"
          }}>

            {/* Modal Header */}
            <div style={{
              padding: "24px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "var(--bg)",
              position: "sticky",
              top: 0,
              zIndex: 10
            }}>
              <div>
                <span style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "var(--coral-blue)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: "var(--font-head)"
                }}>
                  {activeProject.industry}
                </span>
                <h2 style={{
                  fontSize: "20px",
                  fontWeight: 900,
                  color: "var(--navy-trench)",
                  fontFamily: "var(--font-head)",
                  margin: "4px 0 0"
                }}>
                  {activeProject.title}
                </h2>
                <span style={{ fontSize: "12px", color: "var(--gray-400)", fontWeight: 600 }}>
                  {activeProject.client}
                </span>
              </div>

              <button
                onClick={() => setActiveModalId(null)}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "16px",
                  color: "var(--navy-trench)"
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "24px" }}>
              
              {/* Highlight Impact Bar */}
              <div style={{
                background: "var(--coral-light)",
                border: "1px solid rgba(14,165,233,0.2)",
                borderRadius: "var(--radius-sm)",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 800, color: "var(--coral-blue)", textTransform: "uppercase" }}>
                    {dict.labels.turnaround}
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--navy-trench)", fontFamily: "var(--font-head)" }}>
                    ⚡ {activeProject.badge}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "11px", fontWeight: 800, color: "var(--gray-400)", textTransform: "uppercase" }}>
                    Google Speed Target
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#10B981" }}>
                    {activeProject.speedAfter} (100/100)
                  </div>
                </div>
              </div>

              {/* The Specification Section */}
              <div>
                <h4 style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--navy-trench)",
                  fontFamily: "var(--font-head)",
                  marginBottom: "8px"
                }}>
                  {dict.labels.spec}
                </h4>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7" }}>
                  {activeProject.problem}
                </p>
              </div>

              {/* System Features Section */}
              <div>
                <h4 style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--coral-blue)",
                  fontFamily: "var(--font-head)",
                  marginBottom: "8px"
                }}>
                  {dict.labels.features}
                </h4>
                <p style={{ fontSize: "14px", color: "var(--navy-trench)", lineHeight: "1.7", fontWeight: 500 }}>
                  {activeProject.solution}
                </p>
              </div>

              {/* Modules list */}
              <div>
                <h4 style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--navy-trench)",
                  fontFamily: "var(--font-head)",
                  marginBottom: "12px"
                }}>
                  {dict.labels.modules}
                </h4>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {activeProject.tags.map(t => (
                    <span
                      key={t}
                      style={{
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                        padding: "6px 12px",
                        fontSize: "12px",
                        color: "var(--navy-trench)",
                        fontWeight: 700,
                        fontFamily: "var(--font-head)"
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div style={{
                marginTop: "20px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border)"
              }}>
                <a
                  href="/#pricing"
                  onClick={() => setActiveModalId(null)}
                  className="btn btn-launch"
                  style={{
                    width: "100%",
                    padding: "16px",
                    fontSize: "14px"
                  }}
                >
                  {dict.labels.cta_modal}
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
