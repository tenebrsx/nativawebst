"use client";
import { useState } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";

export default function SailingRoadmap() {
  const [activeStep, setActiveStep] = useState(0);
  const { lang } = useGeo();
  const dict = translations[lang].process;

  // Exact vertical alignment values matching column centers
  const shipPositions = [
    { left: "16.66%", top: "75px", rotate: "-10deg" },
    { left: "50.00%", top: "40px", rotate: "6deg" },
    { left: "83.33%", top: "75px", rotate: "12deg" }
  ];

  const activePos = shipPositions[activeStep];

  return (
    <section id="how-it-works" style={{
      background: "var(--navy-trench)",
      padding: "100px 0 120px",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Self-contained CSS declarations for pulsing, rocking, and card elevations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wave-flow-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wave-flow-fast {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes ship-rock-gentle {
          0%, 100% { transform: translate(-50%, -50%) translateY(0) rotate(var(--ship-rot)); }
          50% { transform: translate(-50%, -50%) translateY(-6px) rotate(calc(var(--ship-rot) + 3deg)); }
        }
        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }
        .ship-container {
          --ship-rot: ${activePos.rotate};
          animation: ship-rock-gentle 3.5s ease-in-out infinite;
        }
        .step-card {
          opacity: 0.45;
          transform: scale(0.97);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .step-card.active {
          opacity: 1;
          transform: translateY(-8px) scale(1.02);
          border-color: var(--coral-blue) !important;
          background: rgba(14, 165, 233, 0.04) !important;
          box-shadow: 0 20px 40px rgba(10,17,40,0.4), 0 0 0 1px rgba(14,165,233,0.15);
        }
        .sailing-track-desktop {
          display: block;
        }
        @media (max-width: 768px) {
          .sailing-track-desktop {
            display: none !important;
          }
          .step-card {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}} />

      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--coral-blue)",
            marginBottom: "12px",
            fontFamily: "var(--font-head)"
          }}>
            {dict.label}
          </div>
          <h2 style={{
            fontSize: "clamp(1.85rem, 3vw, 2.6rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "14px",
            letterSpacing: "-0.02em"
          }}>
            {dict.title}
          </h2>
          <p style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "480px",
            margin: "0 auto"
          }}>
            {dict.sub}
          </p>
        </div>

        {/* Dynamic Sailing Track Area */}
        <div className="sailing-track-desktop" style={{
          position: "relative",
          width: "100%",
          height: "120px",
          marginBottom: "40px"
        }}>
          {/* Wave Path Connecting the harbor nodes */}
          <svg viewBox="0 0 600 120" preserveAspectRatio="none" style={{
            width: "100%",
            height: "100%",
            overflow: "visible",
            display: "block"
          }}>
            <path
              d="M 0,75 C 50,75 50,75 100,75 C 200,75 200,40 300,40 C 400,40 400,75 500,75 C 550,75 550,75 600,75"
              fill="none"
              stroke="rgba(14, 165, 233, 0.2)"
              strokeWidth="3.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
          </svg>

          {/* Node Harbors & Vertical Anchor Guidelines */}
          {[0, 1, 2].map((idx) => {
            const isActive = activeStep === idx;
            const pos = shipPositions[idx];
            return (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  left: pos.left,
                  top: pos.top,
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                {/* Glowing Concentric Pulse Ring for Active Lighthouse Node */}
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "2px solid var(--coral-blue)",
                      left: "50%",
                      top: "50%",
                      animation: "pulse-ring 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1)"
                    }}
                  />
                )}

                {/* Inner Core Dot */}
                <div style={{
                  width: isActive ? "14px" : "10px",
                  height: isActive ? "14px" : "10px",
                  borderRadius: "50%",
                  background: isActive ? "#ffffff" : "var(--coral-blue)",
                  border: isActive ? "3.5px solid var(--coral-blue)" : "2px solid var(--navy-trench)",
                  boxShadow: isActive ? "0 0 16px var(--coral-blue), 0 0 8px #fff" : "none",
                  transition: "all 0.35s ease",
                  position: "relative",
                  zIndex: 3
                }} />

                {/* Vertical Anchor dashed line leading down directly to the card below */}
                <div style={{
                  position: "absolute",
                  top: "14px",
                  height: idx === 1 ? "105px" : "70px",
                  width: "1.5px",
                  borderLeft: `1.5px dashed ${isActive ? "rgba(14, 165, 233, 0.45)" : "rgba(255,255,255,0.08)"}`,
                  transform: "translateX(-50%)",
                  transition: "border-color 0.35s ease",
                  zIndex: 1
                }} />
              </div>
            );
          })}

          {/* Dynamic Sailing Ship */}
          <div
            className="ship-container"
            style={{
              position: "absolute",
              left: activePos.left,
              top: activePos.top,
              transition: "left 0.9s cubic-bezier(0.25, 1, 0.5, 1), top 0.9s cubic-bezier(0.25, 1, 0.5, 1)",
              zIndex: 10,
              pointerEvents: "none"
            }}
          >
            <svg width="54" height="54" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
              filter: "drop-shadow(0 10px 14px rgba(10,17,40,0.45))"
            }}>
              {/* Hull */}
              <path d="M3 14C4.5 17.5 19.5 17.5 21 14H3Z" fill="#ffffff" />
              {/* Main Sail (Coral Blue) */}
              <path d="M12 2V13H19.5L12 2Z" fill="var(--coral-blue)" />
              {/* Front Sail */}
              <path d="M10.8 4V13H4.5L10.8 4Z" fill="rgba(255,255,255,0.85)" />
              {/* Mast */}
              <rect x="10.8" y="2" width="1.2" height="12" fill="#cbd5e1" />
            </svg>
          </div>
        </div>

        {/* Step Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="steps-grid">
          {dict.steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                className={`step-card ${isActive ? "active" : ""}`}
                style={{
                  background: "rgba(255,255,255,0.01)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "var(--radius)",
                  padding: "36px 32px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer"
                }}
              >
                {/* Large visual back-number */}
                <div style={{
                  fontFamily: "var(--font-head)",
                  fontWeight: 900,
                  fontSize: "64px",
                  color: isActive ? "rgba(14, 165, 233, 0.05)" : "rgba(255,255,255,0.02)",
                  position: "absolute",
                  top: "12px",
                  right: "20px",
                  lineHeight: 1,
                  transition: "all 0.35s ease"
                }}>
                  {step.num}
                </div>

                {/* Node Tag indicator */}
                <div style={{
                  width: "36px",
                  height: "36px",
                  background: isActive ? "var(--coral-blue)" : "rgba(255,255,255,0.06)",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-head)",
                  fontWeight: 800,
                  fontSize: "13px",
                  color: "#fff",
                  marginBottom: "24px",
                  transition: "all 0.35s ease"
                }}>
                  {step.num}
                </div>

                <h3 style={{
                  fontFamily: "var(--font-head)",
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: "10px"
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: "14px",
                  color: isActive ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.45)",
                  lineHeight: "1.75",
                  transition: "all 0.35s ease"
                }}>
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* Background waves decoration at section bottom */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "30px",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.1
      }}>
        {/* Layer 1 */}
        <div style={{
          width: "200%",
          height: "100%",
          background: "repeat-x",
          position: "absolute",
          bottom: 0,
          animation: "wave-flow-slow 24s linear infinite"
        }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,50 C150,90 350,10 500,60 C650,110 850,10 1000,60 C1150,110 1350,10 1500,60 L1500,120 L0,120 Z" fill="var(--coral-blue)" />
          </svg>
        </div>
        {/* Layer 2 */}
        <div style={{
          width: "200%",
          height: "100%",
          background: "repeat-x",
          position: "absolute",
          bottom: 0,
          opacity: 0.6,
          animation: "wave-flow-fast 16s linear infinite"
        }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,60 C150,20 350,80 500,40 C650,0 850,80 1000,40 C1150,0 1350,80 1500,40 L1500,120 L0,120 Z" fill="var(--coral-blue)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
