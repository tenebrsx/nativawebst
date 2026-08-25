"use client";

import { useEffect, useRef, useState } from "react";
import { useGeo } from "@/lib/geo-context";

type Message = { from: "client" | "us"; text: string };

const LOOPS = {
  es: [
    [
      { from: "client" as const, text: "Hola, vi limpieza + carillas en Google. ¿Tienen cupo esta semana?" },
      { from: "us" as const, text: "Sí, te agendo. ¿Mañana 9am te sirve?" },
      { from: "client" as const, text: "Perfecto. Los encontré en Maps." },
    ],
    [
      { from: "client" as const, text: "Vi la villa en Bávaro — ¿está libre del 12 al 18?" },
      { from: "us" as const, text: "Sí. Te cotizo esta noche por aquí." },
      { from: "client" as const, text: "Genial, vengo de la web." },
    ],
  ],
  en: [
    [
      { from: "client" as const, text: "Hi — saw cleaning + veneers on Google. Any slots this week?" },
      { from: "us" as const, text: "Yes. Tomorrow at 9am work for you?" },
      { from: "client" as const, text: "Perfect. Found you on Maps." },
    ],
    [
      { from: "client" as const, text: "Saw the Bávaro villa — free the 12th to the 18th?" },
      { from: "us" as const, text: "Yes. I’ll quote you here tonight." },
      { from: "client" as const, text: "Great — came from the site." },
    ],
  ],
};

function sleep(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

export default function InboundChat() {
  const { lang } = useGeo();
  const copy = lang === "en" ? "en" : "es";
  const [visible, setVisible] = useState<Message[]>(() => [LOOPS[copy][0][0]]);
  const [typing, setTyping] = useState(false);
  const [typer, setTyper] = useState<"client" | "us" | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alive = true;
    const loops = LOOPS[copy];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setVisible([loops[0][0]]);

    async function run() {
      if (reduced) {
        setVisible(loops[0]);
        return;
      }
      let i = 0;
      while (alive) {
        const script = loops[i % loops.length];
        setVisible([script[0]]);
        await sleep(900);
        for (const msg of script.slice(1)) {
          if (!alive) return;
          setTyper(msg.from);
          setTyping(true);
          await sleep(1200);
          if (!alive) return;
          setTyping(false);
          setTyper(null);
          setVisible((prev) => [...prev, msg]);
          await sleep(900);
        }
        await sleep(2800);
        i += 1;
      }
    }

    run();
    return () => {
      alive = false;
    };
  }, [copy]);

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [visible, typing]);

  return (
    <div className="rf-chat">
      <div className="rf-chat-head">
        <div className="rf-chat-avatar">N</div>
        <div>
          <div className="rf-chat-name">Nativa</div>
          <div className="rf-chat-status">
            <span className="rf-chat-dot" />
            {copy === "es" ? "En línea" : "Online now"}
          </div>
        </div>
      </div>

      <div ref={boxRef} className="rf-chat-thread">
        {visible.map((msg, i) => (
          <div key={`${msg.text}-${i}`} className={`rf-chat-row rf-chat-row-${msg.from}`}>
            <div className={`rf-chat-bubble rf-chat-bubble-${msg.from}`}>
              {msg.text}
              {msg.from === "us" && <span className="rf-chat-ticks"> ✓✓</span>}
            </div>
          </div>
        ))}
        {typing && (
          <div className={`rf-chat-row rf-chat-row-${typer ?? "client"}`}>
            <div className="rf-chat-bubble rf-chat-bubble-client rf-chat-typing">
              <span /><span /><span />
            </div>
          </div>
        )}
      </div>

      <div className="rf-chat-composer">
        <div className="rf-chat-input">
          {copy === "es" ? "El lead llega aquí…" : "The lead lands here…"}
        </div>
        <div className="rf-chat-send" aria-hidden="true">➤</div>
      </div>
    </div>
  );
}
