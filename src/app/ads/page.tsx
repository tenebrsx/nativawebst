"use client";

import { useState } from "react";
import { useGeo } from "@/lib/geo-context";
import Link from "next/link";

type Format = "feed" | "story";
type AdLang = "es" | "en";

export default function AdsPage() {
  const { lang, setLang, currency, setCurrency } = useGeo();
  const [adFormat, setAdFormat] = useState<Format>("feed");
  const [adLang, setAdLang] = useState<AdLang>("es");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyAdText = (index: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const ads = [
    {
      id: "ad-speed",
      title: "Ad 01 · Speed & 48h Delivery",
      badge: "ALTA CONVERSIÓN · VELOCIDAD",
      hook: {
        es: "¿Tu negocio pierde clientes porque tu web tarda 5 segundos en cargar en celular?",
        en: "Is your business losing clients because your website takes 5 seconds to load on mobile?"
      },
      body: {
        es: "En Altamar construimos plataformas web de alto rendimiento orientadas a la acción local. Carga en 0.3 segundos, botón directo a WhatsApp y posicionamiento en Google Maps en Santo Domingo.\n\n⚡ Carga ultrarrápida (100/100 Google Móvil)\n💬 Agendamiento por WhatsApp sin fricción\n📍 SEO Local para destacar en tu zona\n\n👉 Haz clic en el enlace de la bio para configurar tu plataforma en 2 minutos.",
        en: "At Altamar we build high-performance web platforms engineered for local action. 0.3s load speed, direct WhatsApp routing, and local Google Maps optimization.\n\n⚡ Ultra-fast load speed (100/100 Mobile Score)\n💬 Frictionless WhatsApp scheduling\n📍 Local SEO to dominate your area\n\n👉 Click the bio link to configure your estimate in 2 minutes."
      },
      hashtags: "#DiseñoWebRD #SantoDomingo #SEOlocalRD #MarketingRD #PymeRD #AltamarWebStudio #WebStudioRD",
      cta: {
        es: "Pedir Presupuesto Gratis 💬",
        en: "Get Free Quote Spec 💬"
      },
      visualStyle: {
        gradient: "linear-gradient(135deg, #0A1128 0%, #0F172A 100%)",
        accent: "#0EA5E9"
      },
      mockGraphic: (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", justifyContent: "center", height: "100%", padding: "20px" }}>
          <div style={{ fontSize: "11px", fontWeight: 800, color: "#0EA5E9", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            ALTAMAR WEB STUDIO
          </div>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "22px", fontWeight: 900, color: "#ffffff", lineHeight: "1.25", margin: 0 }}>
            {adLang === "es" ? "¿Web Lenta = Clientes Perdidos?" : "Slow Site = Lost Clients?"}
          </h2>
          <div style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px",
            padding: "12px 16px",
            display: "flex",
            gap: "16px",
            alignItems: "center"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#EF4444", textDecoration: "line-through", fontWeight: 700 }}>Vieja Web</div>
              <div style={{ fontSize: "16px", fontWeight: 900, color: "#EF4444" }}>5.2s</div>
            </div>
            <div style={{ fontSize: "16px", color: "#0EA5E9" }}>➔</div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#10B981", fontWeight: 700 }}>Altamar</div>
              <div style={{ fontSize: "16px", fontWeight: 900, color: "#10B981" }}>0.3s</div>
            </div>
          </div>
          <div style={{
            background: "#FFB703",
            color: "#0A1128",
            padding: "10px 20px",
            borderRadius: "6px",
            fontWeight: 800,
            fontSize: "12px",
            fontFamily: "var(--font-head)",
            marginTop: "6px"
          }}>
            {adLang === "es" ? "Lanzamiento en 48 Horas 🚀" : "48-Hour Launch 🚀"}
          </div>
        </div>
      )
    },
    {
      id: "ad-maps",
      title: "Ad 02 · Google Maps Dominance",
      badge: "SEO LOCAL · GOOGLE MAPS",
      hook: {
        es: "Cuando tus clientes buscan tu servicio en Santo Domingo... ¿apareces tú o tu competencia?",
        en: "When clients search for your services nearby... do you show up or does your competitor?"
      },
      body: {
        es: "Estar de primero en los mapas de Google es la diferencia entre tener la agenda llena o perder ventas todos los días.\n\nEn Altamar optimizamos tu ficha de Google Maps y conectamos tu sitio web con marcado estructurado de negocio local.\n\n📍 Posicionamiento de 5 estrellas en tu sector\n📞 Botón directo de llamadas y WhatsApp\n⭐ Sin comisiones ni mensualidades ocultas\n\n👉 Escríbenos por WhatsApp y solicita tu auditoría de SEO gratis.",
        en: "Ranking #1 on Google Maps is the difference between a full calendar and losing sales every day.\n\nAt Altamar we optimize your Google Maps listing and connect your site with structured local business schema.\n\n📍 5-star local search positioning\n📞 Direct call & WhatsApp button\n⭐ Zero hidden monthly fees\n\n👉 Message us on WhatsApp for a free local SEO audit."
      },
      hashtags: "#GoogleMapsRD #SEOlocal #PaginasWebRD #SantoDomingoBusiness #AltamarWebStudio #Dominicana",
      cta: {
        es: "Auditoría SEO Gratis 📍",
        en: "Free Local SEO Audit 📍"
      },
      visualStyle: {
        gradient: "linear-gradient(135deg, #0A1128 0%, #1E293B 100%)",
        accent: "#FFB703"
      },
      mockGraphic: (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", justifyContent: "center", height: "100%", padding: "20px" }}>
          <div style={{ fontSize: "28px" }}>📍</div>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 900, color: "#ffffff", lineHeight: "1.25", margin: 0 }}>
            {adLang === "es" ? "Sé el #1 en Google Maps en Santo Domingo" : "Rank #1 on Google Maps in Santo Domingo"}
          </h2>
          <div style={{
            background: "#ffffff",
            color: "#0A1128",
            borderRadius: "8px",
            padding: "10px 14px",
            textAlign: "left",
            width: "100%",
            maxWidth: "240px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
            fontSize: "11px"
          }}>
            <div style={{ fontWeight: 800, color: "#0EA5E9" }}>⭐ #1 Tu Negocio en Naco</div>
            <div style={{ color: "#64748B", fontSize: "10px", marginTop: "2px" }}>5.0 ★★★★★ (48 reseñas)</div>
            <div style={{ marginTop: "6px", background: "#25D366", color: "#fff", padding: "4px 8px", borderRadius: "4px", fontWeight: 800, fontSize: "9.5px", textAlign: "center" }}>
              💬 Contactar por WhatsApp
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ad-whatsapp",
      title: "Ad 03 · Automatic WhatsApp Lead Flow",
      badge: "CAPTACIÓN DE LEADS · WHATSAPP",
      hook: {
        es: "Deja de perder horas respondiendo 'precio por DM' en Instagram.",
        en: "Stop wasting hours replying 'price via DM' on Instagram."
      },
      body: {
        es: "Convierte a tus seguidores de redes en clientes reales con un cotizador web automático.\n\nTus clientes seleccionan sus servicios en tu web en 30 segundos y reciben su desglose directamente en tu WhatsApp listo para cerrar.\n\n💬 Cero fricción de ventas\n📊 Cotizador interactivo personalizado\n⚡ Respuestas en segundos\n\n👉 Prueba el demo del cotizador en el enlace de nuestro perfil.",
        en: "Convert your social followers into paying clients with an automated web quote flow.\n\nYour clients select their services on your site in 30 seconds and receive a detailed breakdown straight to your WhatsApp.\n\n💬 Zero sales friction\n📊 Interactive custom quote builder\n⚡ Instant responses\n\n👉 Test the live quote demo link in our profile."
      },
      hashtags: "#WhatsAppBusiness #VentasRD #CotizadorWeb #EmprendedoresRD #SantoDomingo #Altamar",
      cta: {
        es: "Probar Cotizador Demo ⚡",
        en: "Test Live Quote Demo ⚡"
      },
      visualStyle: {
        gradient: "linear-gradient(135deg, #0A1128 0%, #0F172A 100%)",
        accent: "#25D366"
      },
      mockGraphic: (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", justifyContent: "center", height: "100%", padding: "20px" }}>
          <div style={{ background: "#25D366", color: "#fff", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: 900 }}>
            💬
          </div>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 900, color: "#ffffff", lineHeight: "1.25", margin: 0 }}>
            {adLang === "es" ? "De Instagram Directo a tu WhatsApp" : "From Instagram Direct to WhatsApp"}
          </h2>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", margin: 0 }}>
            {adLang === "es" ? "Sin 'precio por DM'. Cotizaciones automáticas en 30 segundos." : "No 'DM for price'. Automatic quotes in 30 seconds."}
          </p>
        </div>
      )
    },
    {
      id: "ad-blueprints",
      title: "Ad 04 · 48-Hour Ready Templates",
      badge: "PLANTILLAS LISTAS · LANZAMIENTO",
      hook: {
        es: "Elige tu plantilla web y lánzala este mismo fin de semana.",
        en: "Choose your web template blueprint and launch this weekend."
      },
      body: {
        es: "Tenemos más de 12 plantillas web interactivas listos para usar en la República Dominicana: clínicas odontológicas, firmas de abogados, casas vacacionales, talleres y tiendas online.\n\n🚀 Diseños de alto impacto\n📱 100% optimizados para celulares\n⚡ Listos para publicar en 48 horas\n\n👉 Explora la tienda de plantillas interactivas en nuestro sitio web.",
        en: "We have 12+ interactive website blueprints ready to deploy in the Dominican Republic: dental clinics, law firms, luxury rentals, auto shops & online stores.\n\n🚀 High-impact modern design\n📱 100% mobile-optimized\n⚡ Ready to launch in 48 hours\n\n👉 Explore the interactive template blueprint showcase on our site."
      },
      hashtags: "#PlantillasWeb #DiseñoWebSantoDomingo #AltamarWebStudio #DesarrolloWebRD #PymesRD",
      cta: {
        es: "Ver Plantillas en Vivo 🚀",
        en: "Inspect Live Templates 🚀"
      },
      visualStyle: {
        gradient: "linear-gradient(135deg, #0EA5E9 0%, #0A1128 100%)",
        accent: "#ffffff"
      },
      mockGraphic: (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", justifyContent: "center", height: "100%", padding: "20px" }}>
          <span style={{ fontSize: "10px", fontWeight: 800, color: "#FFB703", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            ALTAMAR BLUEPRINTS
          </span>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 900, color: "#ffffff", lineHeight: "1.25", margin: 0 }}>
            {adLang === "es" ? "12+ Plantillas Web Listas para Usar" : "12+ Web Templates Ready to Deploy"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", width: "100%", maxWidth: "220px", marginTop: "4px" }}>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "4px", padding: "8px", fontSize: "9px", fontWeight: 800, color: "#fff" }}>🏥 Clínicas</div>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "4px", padding: "8px", fontSize: "9px", fontWeight: 800, color: "#fff" }}>🏖️ Villas</div>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "4px", padding: "8px", fontSize: "9px", fontWeight: 800, color: "#fff" }}>⚖️ Abogados</div>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "4px", padding: "8px", fontSize: "9px", fontWeight: 800, color: "#fff" }}>🛒 Tiendas</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#FAF7F2", color: "#0A1128" }}>

      {/* ─── NAVBAR ──────────────────────────────────────────────── */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#FAF7F2",
        borderBottom: "1px solid rgba(10,17,40,0.1)",
        padding: "16px 0"
      }}>
        <div className="container header-bar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#0A1128", display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <span style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "20px" }}>Altamar</span>
            <span className="hide-on-narrow" style={{ fontSize: "11px", background: "#FFB703", color: "#0A1128", padding: "2px 8px", borderRadius: "10px", fontWeight: 800 }}>
              Instagram Ad Studio
            </span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
            {/* Ad Language Switcher */}
            <div style={{
              display: "flex",
              background: "rgba(10,17,40,0.05)",
              borderRadius: "8px",
              padding: "2px"
            }}>
              <button
                onClick={() => setAdLang("es")}
                style={{
                  background: adLang === "es" ? "#0A1128" : "transparent",
                  color: adLang === "es" ? "#fff" : "#0A1128",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 800,
                  cursor: "pointer",
                  fontFamily: "var(--font-head)"
                }}
              >
                ES 🇩🇴
              </button>
              <button
                onClick={() => setAdLang("en")}
                style={{
                  background: adLang === "en" ? "#0A1128" : "transparent",
                  color: adLang === "en" ? "#fff" : "#0A1128",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 800,
                  cursor: "pointer",
                  fontFamily: "var(--font-head)"
                }}
              >
                EN 🇺🇸
              </button>
            </div>

            <Link href="/" className="btn btn-navy" style={{ textDecoration: "none", padding: "8px 16px", fontSize: "12px" }}>
              Back to Site →
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section style={{ padding: "50px 0 30px" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "720px" }}>
          <span style={{
            fontSize: "11px",
            fontWeight: 800,
            color: "#0EA5E9",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontFamily: "var(--font-head)"
          }}>
            Meta & Instagram Campaign Studio
          </span>
          <h1 style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(30px, 5vw, 42px)",
            fontWeight: 900,
            margin: "12px 0",
            letterSpacing: "-0.03em",
            color: "#0A1128"
          }}>
            High-Converting Instagram Ad Concepts
          </h1>
          <p style={{ fontSize: "15px", color: "#64748B", lineHeight: "1.6", margin: "0 0 24px" }}>
            Ready-to-use Instagram Feed & Story ad campaigns tailored for local Dominican business owners. Inspect visual graphic mocks, copy captions, and paste hashtags.
          </p>

          {/* Aspect Ratio Switcher Controls */}
          <div style={{
            display: "inline-flex",
            background: "#ffffff",
            border: "1.5px solid rgba(10,17,40,0.1)",
            padding: "4px",
            borderRadius: "12px",
            gap: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
            <button
              onClick={() => setAdFormat("feed")}
              style={{
                background: adFormat === "feed" ? "#0A1128" : "transparent",
                color: adFormat === "feed" ? "#ffffff" : "#64748B",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: 800,
                cursor: "pointer",
                fontFamily: "var(--font-head)"
              }}
            >
              Square Feed (1:1)
            </button>
            <button
              onClick={() => setAdFormat("story")}
              style={{
                background: adFormat === "story" ? "#0A1128" : "transparent",
                color: adFormat === "story" ? "#ffffff" : "#64748B",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: 800,
                cursor: "pointer",
                fontFamily: "var(--font-head)"
              }}
            >
              Story / Reel (9:16)
            </button>
          </div>

        </div>
      </section>

      {/* ─── ADS SHOWCASE GRID ───────────────────────────────────── */}
      <section style={{ padding: "20px 0 90px" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "36px"
          }}>
            {ads.map((ad, idx) => {
              const fullCopyText = `${ad.hook[adLang]}\n\n${ad.body[adLang]}\n\n${ad.hashtags}`;
              const isCopied = copiedIndex === idx;

              return (
                <div
                  key={ad.id}
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid rgba(10,17,40,0.1)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 6px 24px rgba(10,17,40,0.05)"
                  }}
                >
                  {/* Ad Header Badge */}
                  <div style={{
                    padding: "16px 20px",
                    borderBottom: "1px solid rgba(10,17,40,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#FAF7F2"
                  }}>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#0EA5E9", letterSpacing: "0.08em" }}>
                      {ad.badge}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: 800, color: "#0A1128", fontFamily: "var(--font-head)" }}>
                      {ad.title}
                    </span>
                  </div>

                  {/* Graphic Visual Canvas Simulator */}
                  <div style={{
                    background: ad.visualStyle.gradient,
                    height: adFormat === "feed" ? "320px" : "420px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    transition: "height 0.3s ease"
                  }}>
                    {/* Simulated Instagram Overlay Header */}
                    <div style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      right: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      zIndex: 5
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#0EA5E9", border: "1.5px solid #fff" }} />
                        <span style={{ fontSize: "11px", fontWeight: 800, color: "#fff" }}>altamar.web</span>
                      </div>
                      <span style={{ fontSize: "9px", background: "rgba(255,255,255,0.2)", color: "#fff", padding: "2px 6px", borderRadius: "4px", fontWeight: 700 }}>
                        Sponsored
                      </span>
                    </div>

                    {/* Graphic Canvas Content */}
                    {ad.mockGraphic}

                    {/* CTA Bar in Mock Graphic */}
                    <div style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "12px",
                      right: "12px",
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "6px",
                      padding: "8px 12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 800
                    }}>
                      <span>{ad.cta[adLang]}</span>
                      <span>➔</span>
                    </div>
                  </div>

                  {/* Ad Copy Caption & Hashtags Container */}
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px", flexGrow: 1 }}>
                    
                    {/* Hook Headline */}
                    <div>
                      <span style={{ fontSize: "10px", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Headline / Hook
                      </span>
                      <h4 style={{ fontFamily: "var(--font-head)", fontSize: "15px", fontWeight: 900, color: "#0A1128", margin: "4px 0 0", lineHeight: "1.4" }}>
                        "{ad.hook[adLang]}"
                      </h4>
                    </div>

                    {/* Primary Text Caption */}
                    <div>
                      <span style={{ fontSize: "10px", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Caption Body Text
                      </span>
                      <div style={{
                        background: "#FAF7F2",
                        border: "1px solid rgba(10,17,40,0.08)",
                        borderRadius: "8px",
                        padding: "12px",
                        fontSize: "12.5px",
                        color: "#334155",
                        whiteSpace: "pre-line",
                        lineHeight: "1.6",
                        marginTop: "4px"
                      }}>
                        {ad.body[adLang]}
                      </div>
                    </div>

                    {/* Hashtags */}
                    <div>
                      <span style={{ fontSize: "10px", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Dominican Target Hashtags
                      </span>
                      <div style={{ fontSize: "11.5px", color: "#0EA5E9", fontWeight: 600, marginTop: "4px" }}>
                        {ad.hashtags}
                      </div>
                    </div>

                    {/* Copy Text Action Button */}
                    <button
                      onClick={() => copyAdText(idx, fullCopyText)}
                      style={{
                        marginTop: "auto",
                        background: isCopied ? "#10B981" : "#0A1128",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "12px",
                        fontSize: "13px",
                        fontWeight: 800,
                        fontFamily: "var(--font-head)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        transition: "all 0.2s"
                      }}
                    >
                      {isCopied ? "✓ Ad Copy & Hashtags Copied!" : "📋 Copy Full Instagram Caption"}
                    </button>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
