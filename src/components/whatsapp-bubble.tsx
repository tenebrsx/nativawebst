"use client";
import { useState, useEffect, useRef } from "react";
import { useGeo } from "@/lib/geo-context";

type Message = { from: "client" | "us"; text: string };

const SCRIPT_EN: Message[] = [
  { from: "client", text: "Hey! We changed our Sunday hours. Can you update the website?" },
  { from: "us",     text: "On it! What are the new hours?" },
  { from: "client", text: "9 AM to 2 PM now. Thanks so much!" },
  { from: "us",     text: "Done ✅ It's live. Give it a refresh!" },
];

const SCRIPT_ES: Message[] = [
  { from: "client", text: "¡Hola! Cambiamos el horario de los domingos. ¿Se puede actualizar la web?" },
  { from: "us",     text: "¡Claro que sí! ¿Cuáles son las nuevas horas?" },
  { from: "client", text: "Ahora es de 9 AM a 2 PM. ¡Muchas gracias!" },
  { from: "us",     text: "Listo ✅ Ya está publicado. Dale un refresh." },
];

function sleep(ms: number) {
  return new Promise<void>(r => setTimeout(r, ms));
}

export default function WhatsappBubble() {
  const [visible, setVisible] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [typer, setTyper] = useState<"client" | "us" | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const { lang } = useGeo();

  useEffect(() => {
    let alive = true;
    const script = lang === "es" ? SCRIPT_ES : SCRIPT_EN;

    async function run() {
      while (alive) {
        setVisible([]);
        await sleep(1200);
        for (const msg of script) {
          if (!alive) return;
          setTyper(msg.from);
          setTyping(true);
          await sleep(1800);
          if (!alive) return;
          setTyping(false);
          setTyper(null);
          setVisible(prev => [...prev, msg]);
          await sleep(900);
        }
        await sleep(4000);
      }
    }

    run();
    return () => { alive = false; };
  }, [lang]);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [visible, typing]);

  return (
    <div style={{
      width: "280px",
      background: "#111b21",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(15,23,42,0.15)",
      flexShrink: 0,
    }}>
      {/* Header */}
      <div style={{
        background: "#202c33",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}>
        <div style={{
          width: "36px", height: "36px", borderRadius: "50%",
          background: "var(--coral-blue)", display: "flex", alignItems: "center",
          justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "14px",
          fontFamily: "var(--font-head)",
        }}>N</div>
        <div>
          <div style={{ color: "#e9edef", fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-head)" }}>
            Nativa Support
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" }}>
            <span style={{ width: "8px", height: "8px", background: "#25d366", borderRadius: "50%", display: "inline-block" }} className="animate-blink" />
            <span style={{ color: "#8696a0", fontSize: "11px" }}>
              {lang === "es" ? "En línea" : "Online now"}
            </span>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div
        ref={boxRef}
        style={{
          background: "#0b141a",
          padding: "12px",
          height: "240px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          scrollbarWidth: "none",
        }}
      >
        {visible.map((msg, i) => (
          <div key={i} className="animate-up" style={{
            display: "flex",
            justifyContent: msg.from === "us" ? "flex-end" : "flex-start",
          }}>
            <div style={{
              maxWidth: "80%",
              padding: "8px 12px",
              borderRadius: msg.from === "us" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
              background: msg.from === "us" ? "#005c4b" : "#202c33",
              color: "#e9edef",
              fontSize: "12px",
              lineHeight: "1.5",
              fontFamily: "var(--font-body)",
            }}>
              {msg.text}
              <div style={{ textAlign: "right", color: "#8696a0", fontSize: "10px", marginTop: "4px" }}>
                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                {msg.from === "us" && " ✓✓"}
              </div>
            </div>
          </div>
        ))}

        {typing && (
          <div className="animate-up" style={{
            display: "flex",
            justifyContent: typer === "us" ? "flex-end" : "flex-start",
          }}>
            <div style={{
              padding: "8px 14px",
              borderRadius: "12px",
              background: "#202c33",
              display: "flex", gap: "4px", alignItems: "center",
            }}>
              {[0,1,2].map(n => (
                <span key={n} className={`dot-${n+1}`} style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "#8696a0", display: "inline-block",
                }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input bar (Clicking redirects to actual WhatsApp) */}
      <a
        href={`https://wa.me/18093588113?text=${encodeURIComponent(lang === "es" ? "¡Hola Nativa! Me interesa programar un sitio web para mi negocio." : "Hi Nativa! I'm interested in building a website for my business.")}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#202c33",
          padding: "10px 12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          cursor: "pointer"
        }}
      >
        <div style={{
          flex: 1,
          background: "#2a3942",
          borderRadius: "20px",
          padding: "8px 14px",
          fontSize: "12.5px",
          color: "#8696a0",
          fontFamily: "var(--font-body)",
          textAlign: "left"
        }}>
          {lang === "es" ? "Escribe por WhatsApp..." : "Type on WhatsApp..."}
        </div>
        <div style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: "var(--coral-blue)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          color: "#fff"
        }}>
          ➤
        </div>
      </a>
    </div>
  );
}
