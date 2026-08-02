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
              fontSize: "16px",
              color: "var(--gray-400)",
              pointerEvents: "none"
            }}>🔍</span>
            <input
              type="text"
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
                              <span style={{ background: "#1E64C4", color: "#fff", padding: "2px 6px", borderRadius: "3px", fontSize: "7px", fontWeight: 800 }}>Cita 📅</span>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", alignItems: "center", marginTop: "4px" }}>
                              <div>
                                <span style={{ fontSize: "6.5px", fontWeight: 800, color: "#1E64C4", textTransform: "uppercase" }}>Highland Heights Standard</span>
                                <div style={{ fontSize: "10px", fontWeight: 900, color: "#0F172A", lineHeight: "1.2" }}>Sonrisas Hermosas en Naco</div>
                                <div style={{ fontSize: "7px", color: "#166534", fontWeight: 800, marginTop: "2px" }}>4.9 ★★★★★ (350+ Google)</div>
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
                        ) : project.id.includes("villa") || project.id.includes("construction") ? (
                          <div style={{ padding: "10px", background: "#0A1128", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "8px", fontWeight: 900, color: "#FFB703", letterSpacing: "0.08em" }}>CAP CANA ESCAPES</span>
                              <span style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "2px 5px", borderRadius: "3px", fontSize: "7px" }}>USD / DOP</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", alignItems: "center" }}>
                              <div>
                                <div style={{ fontSize: "10px", fontWeight: 800, lineHeight: "1.2" }}>Villas de Lujo Privadas</div>
                                <div style={{ fontSize: "7px", color: "#0EA5E9", marginTop: "2px" }}>Cap Cana · Bávaro</div>
                                <div style={{ fontSize: "8px", color: "#FFB703", fontWeight: 900, marginTop: "4px" }}>$1,450 / noche</div>
                              </div>
                              <div style={{ borderRadius: "6px", overflow: "hidden", height: "55px" }}>
                                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80" alt="Villa resort" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              </div>
                            </div>
                          </div>
                        ) : project.id.includes("legal") ? (
                          <div style={{ padding: "10px", background: "#0A1128", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "4px", display: "flex", justifyContent: "space-between" }}>
                              <span style={{ fontSize: "8px", fontWeight: 900, letterSpacing: "0.05em" }}>NOLASCO & ALMONTE</span>
                              <span style={{ fontSize: "6.5px", color: "#0EA5E9", fontWeight: 800 }}>ABOGADOS</span>
                            </div>
                            <div>
                              <div style={{ fontSize: "9.5px", fontWeight: 900, color: "#fff", lineHeight: "1.2" }}>Protegemos tu Empresa en R.D.</div>
                              <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>Derecho Corporativo & Inversión Extranjera</div>
                            </div>
                            <div style={{ background: "#0EA5E9", color: "#fff", padding: "3px 6px", borderRadius: "3px", fontSize: "7px", fontWeight: 800, textAlign: "center" }}>
                              Consulta Confidencial →
                            </div>
                          </div>
                        ) : project.id.includes("coffee") ? (
                          <div style={{ padding: "10px", background: "#2B1E16", color: "#FAF7F2", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "8px", fontWeight: 900, color: "#D97706" }}>CAFÉ TERRENAS ☕</span>
                              <span style={{ background: "#D97706", color: "#fff", padding: "2px 5px", borderRadius: "3px", fontSize: "6.5px", fontWeight: 800 }}>🛒 (2)</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", alignItems: "center" }}>
                              <div>
                                <div style={{ fontSize: "9px", fontWeight: 900 }}>Café de Origen</div>
                                <div style={{ fontSize: "7px", color: "#D97706", fontWeight: 800 }}>RD$ 650 / 500g</div>
                              </div>
                              <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "4px", padding: "4px", textAlign: "center", fontSize: "7px", fontWeight: 800 }}>
                                Stripe Checkout 💳
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div style={{ padding: "10px", background: "#0F172A", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "8px", fontWeight: 900, color: "#EF4444" }}>REPÚBLICA AUTO 🚘</span>
                              <span style={{ background: "#EF4444", color: "#fff", padding: "2px 5px", borderRadius: "3px", fontSize: "6.5px", fontWeight: 800 }}>Taller</span>
                            </div>
                            <div style={{ background: "#1E293B", borderRadius: "6px", padding: "6px", border: "1px solid #334155" }}>
                              <div style={{ fontSize: "8px", fontWeight: 800 }}>Cambio de Aceite Sintético</div>
                              <div style={{ fontSize: "9px", fontWeight: 900, color: "#10B981", marginTop: "2px" }}>RD$ 3,800</div>
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
                        background: project.id.includes("clinic") ? "#EFF6FF" : project.id.includes("villa") || project.id.includes("legal") ? "#0A1128" : "#2B1E16",
                        color: project.id.includes("clinic") ? "#0F172A" : "#FFFFFF",
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "6px"
                      }}>
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
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content & Metrics */}
                <div style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  gap: "14px"
                }}>
                  {/* Speed Compare Badge & Result Metric */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "8px"
                  }}>
                    {/* Speed Indicator */}
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      padding: "4px 10px",
                      fontSize: "11px",
                      fontFamily: "var(--font-head)",
                      fontWeight: 700
                    }}>
                      <span style={{ color: "#EF4444", textDecoration: "line-through" }}>{project.speedBefore}</span>
                      <span style={{ color: "var(--coral-blue)" }}>➔</span>
                      <span style={{ color: "#10B981" }}>{project.speedAfter}</span>
                    </div>

                    {/* Result Impact Badge */}
                    <span style={{
                      background: "var(--coral-light)",
                      color: "var(--coral-blue)",
                      fontSize: "11px",
                      fontWeight: 800,
                      borderRadius: "6px",
                      padding: "4px 10px",
                      fontFamily: "var(--font-head)"
                    }}>
                      ⚡ {project.badge}
                    </span>
                  </div>

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
                      🚀 Demo en Vivo
                    </a>
                    <button
                      onClick={() => setActiveModalId(project.id)}
                      className="btn btn-outline"
                      style={{
                        padding: "10px",
                        fontSize: "12px"
                      }}
                    >
                      📋 Especificación
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
