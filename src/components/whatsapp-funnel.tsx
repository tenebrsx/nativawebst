"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useGeo } from "@/lib/geo-context";
import {
  buildFunnelMessage,
  openWhatsApp,
  type FunnelAnswers,
} from "@/lib/whatsapp";

type Step = "need" | "industry" | "timing" | "budget" | "name" | "go";

const COPY = {
  es: {
    teaser: "¿Armamos tu web esta semana?",
    teaserPricing: "¿Te mando este presupuesto por WhatsApp?",
    teaserStack: "¿Lo quieres que responda solo?",
    teaserCta: "Sí, háblame",
    header: "Nativa en WhatsApp",
    online: "Respuesta en minutos",
    greeting: "Hola — soy el canal directo a Nativa. En 20 segundos te armo un brief y lo mandamos por WhatsApp a +1 (809) 358-8113.",
    askNeed: "¿Qué necesitas ahora?",
    askIndustry: "¿A qué se dedica el negocio?",
    askTiming: "¿Para cuándo lo quieres vivo?",
    askBudget: "¿En qué rango te mueves? (aprox.)",
    askName: "¿Cómo te llamas? (opcional)",
    namePh: "Tu nombre o marca",
    skip: "Saltar",
    send: "Continuar",
    wrap: "Listo. Abro WhatsApp con tu brief para que no empieces de cero.",
    cta: "Seguir en WhatsApp →",
    fabLabel: "WhatsApp",
    needs: [
      { id: "site", label: "Sitio web nuevo" },
      { id: "seo", label: "Google Maps / SEO" },
      { id: "store", label: "Tienda online" },
      { id: "crm", label: "CRM personal" },
      { id: "agent", label: "Agente AI de marca" },
      { id: "other", label: "Otra cosa" },
    ],
    industries: [
      { id: "health", label: "Clínica / Salud" },
      { id: "realestate", label: "Bienes raíces" },
      { id: "legal", label: "Abogados" },
      { id: "food", label: "Café / Restaurante" },
      { id: "build", label: "Construcción" },
      { id: "shop", label: "Tienda / Retail" },
      { id: "other", label: "Otro rubro" },
    ],
    timings: [
      { id: "week", label: "Esta semana" },
      { id: "month", label: "Este mes" },
      { id: "explore", label: "Solo estoy viendo" },
    ],
    budgets: [
      { id: "low", label: "Empezar liviano" },
      { id: "mid", label: "Inversión seria" },
      { id: "high", label: "Stack completo (web + CRM + AI)" },
    ],
  },
  en: {
    teaser: "Want a site live this week?",
    teaserPricing: "Send this quote on WhatsApp?",
    teaserStack: "Want it to answer on its own?",
    teaserCta: "Yes, message me",
    header: "Nativa on WhatsApp",
    online: "Replies in minutes",
    greeting: "Hi — this is the direct line to Nativa. In 20 seconds I’ll pack a brief and send it to WhatsApp at +1 (809) 358-8113.",
    askNeed: "What do you need right now?",
    askIndustry: "What kind of business is it?",
    askTiming: "When do you want it live?",
    askBudget: "Rough budget range?",
    askName: "What’s your name? (optional)",
    namePh: "Your name or brand",
    skip: "Skip",
    send: "Continue",
    wrap: "Done. I’ll open WhatsApp with your brief so you don’t start from zero.",
    cta: "Continue on WhatsApp →",
    fabLabel: "WhatsApp",
    needs: [
      { id: "site", label: "New website" },
      { id: "seo", label: "Google Maps / SEO" },
      { id: "store", label: "Online store" },
      { id: "crm", label: "Personal CRM" },
      { id: "agent", label: "Brand AI Agent" },
      { id: "other", label: "Something else" },
    ],
    industries: [
      { id: "health", label: "Clinic / Health" },
      { id: "realestate", label: "Real estate" },
      { id: "legal", label: "Law firm" },
      { id: "food", label: "Café / Restaurant" },
      { id: "build", label: "Construction" },
      { id: "shop", label: "Shop / Retail" },
      { id: "other", label: "Other" },
    ],
    timings: [
      { id: "week", label: "This week" },
      { id: "month", label: "This month" },
      { id: "explore", label: "Just exploring" },
    ],
    budgets: [
      { id: "low", label: "Start lean" },
      { id: "mid", label: "Serious investment" },
      { id: "high", label: "Full stack (web + CRM + AI)" },
    ],
  },
};

type Msg = { from: "bot" | "me"; text: string };

export default function WhatsappFunnel() {
  const { lang } = useGeo();
  const pathname = usePathname() || "/";
  const t = COPY[lang === "en" ? "en" : "es"];
  const hidden = pathname.startsWith("/demo/");

  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState<Step>("need");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [need, setNeed] = useState("");
  const [industry, setIndustry] = useState("");
  const [timing, setTiming] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [source, setSource] = useState("fab");
  const [teaserKind, setTeaserKind] = useState<"default" | "pricing" | "stack">("default");
  const [sending, setSending] = useState(false);
  const [booted, setBooted] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const prompted = useRef(false);

  const bootChat = useCallback(() => {
    if (booted) return;
    setBooted(true);
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages([{ from: "bot", text: t.greeting }]);
      window.setTimeout(() => {
        setMessages((m) => [...m, { from: "bot", text: t.askNeed }]);
      }, 420);
    }, 380);
  }, [booted, t.askNeed, t.greeting]);

  const openPanel = useCallback(
    (src = "fab", presetNeed?: string) => {
      setSource(src);
      setTeaser(false);
      setOpen(true);
      try {
        sessionStorage.setItem("nativa_funnel_seen", "1");
      } catch {}
      if (presetNeed && !booted) {
        setNeed(presetNeed);
        setBooted(true);
        setMessages([
          { from: "bot", text: t.greeting },
          { from: "me", text: presetNeed },
        ]);
        setTyping(true);
        window.setTimeout(() => {
          setTyping(false);
          setMessages((m) => [...m, { from: "bot", text: t.askIndustry }]);
          setStep("industry");
        }, 480);
        return;
      }
      bootChat();
    },
    [bootChat, booted, t.askIndustry, t.greeting]
  );

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<{ source?: string; need?: string }>).detail;
      openPanel(detail?.source || "event", detail?.need);
    };
    window.addEventListener("nativa:open-funnel", onOpen);
    return () => window.removeEventListener("nativa:open-funnel", onOpen);
  }, [openPanel]);

  useEffect(() => {
    if (hidden) return;
    const seen = () => {
      try {
        return sessionStorage.getItem("nativa_funnel_seen") === "1";
      } catch {
        return false;
      }
    };

    const maybeTease = () => {
      if (prompted.current || seen() || open) return;
      prompted.current = true;
      setTeaser(true);
    };

    const t1 = window.setTimeout(maybeTease, 14000);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.42) maybeTease();
      const pricing = document.getElementById("pricing");
      const stack = document.getElementById("stack");
      if (stack && stack.getBoundingClientRect().top < window.innerHeight * 0.7) setTeaserKind("stack");
      else if (pricing && pricing.getBoundingClientRect().top < window.innerHeight * 0.7) setTeaserKind("pricing");
    };
    const onExit = (e: MouseEvent) => {
      if (e.relatedTarget) return;
      if (e.clientY > 12) return;
      if (prompted.current || seen() || open) return;
      prompted.current = true;
      openPanel("exit");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onExit);
    return () => {
      window.clearTimeout(t1);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onExit);
    };
  }, [hidden, open, openPanel]);

  useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [messages, typing, step]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const pushMe = (text: string) => setMessages((m) => [...m, { from: "me", text }]);
  const pushBot = (text: string, then?: () => void) => {
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text }]);
      then?.();
    }, 480);
  };

  const pickNeed = (label: string) => {
    setNeed(label);
    pushMe(label);
    pushBot(t.askIndustry, () => setStep("industry"));
  };
  const pickIndustry = (label: string) => {
    setIndustry(label);
    pushMe(label);
    pushBot(t.askTiming, () => setStep("timing"));
  };
  const pickTiming = (label: string) => {
    setTiming(label);
    pushMe(label);
    pushBot(t.askBudget, () => setStep("budget"));
  };
  const pickBudget = (label: string) => {
    setBudget(label);
    pushMe(label);
    pushBot(t.askName, () => setStep("name"));
  };
  const submitName = (skip = false) => {
    const value = skip ? "" : name.trim();
    if (!skip && !value) return;
    if (value) pushMe(value);
    else pushMe(t.skip);
    setStep("go");
    pushBot(t.wrap);
  };

  const launch = async () => {
    if (sending) return;
    setSending(true);
    const answers: FunnelAnswers = {
      need,
      industry,
      timing,
      budget,
      name: name.trim(),
      page: pathname,
      source,
    };
    try {
      await addDoc(collection(db, "leads"), {
        channel: "whatsapp-funnel",
        funnelSource: answers.source,
        need: answers.need,
        industry: answers.industry,
        timing: answers.timing,
        budget: answers.budget,
        name: answers.name,
        page: answers.page,
        lang,
        submittedAt: serverTimestamp(),
      });
    } catch {
      /* still open WhatsApp */
    }
    openWhatsApp(buildFunnelMessage(lang === "en" ? "en" : "es", answers));
    try {
      sessionStorage.setItem("nativa_funnel_seen", "1");
    } catch {}
    setSending(false);
    setOpen(false);
  };

  if (hidden) return null;

  const chips =
    step === "need" ? t.needs
      : step === "industry" ? t.industries
      : step === "timing" ? t.timings
      : step === "budget" ? t.budgets
      : [];
  const onChip =
    step === "need" ? pickNeed
      : step === "industry" ? pickIndustry
      : step === "timing" ? pickTiming
      : step === "budget" ? pickBudget
      : undefined;

  return (
    <div className="wa-funnel" data-open={open ? "1" : "0"}>
      {teaser && !open && (
        <button type="button" className="wa-teaser" onClick={() => openPanel("teaser")}>
          <span className="wa-teaser-text">
            {teaserKind === "stack" ? t.teaserStack : teaserKind === "pricing" ? t.teaserPricing : t.teaser}
          </span>
          <span className="wa-teaser-cta">{t.teaserCta}</span>
        </button>
      )}

      {open && (
        <div className="wa-panel" role="dialog" aria-label={t.header}>
          <div className="wa-panel-head">
            <div className="wa-avatar">N</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="wa-panel-title">{t.header}</div>
              <div className="wa-panel-sub">
                <span className="wa-online-dot" />
                {t.online}
              </div>
            </div>
            <button type="button" className="wa-close" aria-label="Close" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div ref={scroller} className="wa-thread">
            {messages.map((m, i) => (
              <div key={i} className={`wa-bubble wa-${m.from}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="wa-bubble wa-bot wa-typing">
                <span className="dot-1" />
                <span className="dot-2" />
                <span className="dot-3" />
              </div>
            )}

            {!typing && onChip && (
              <div className="wa-chips">
                {chips.map((c) => (
                  <button key={c.id} type="button" className="wa-chip" onClick={() => onChip(c.label)}>
                    {c.label}
                  </button>
                ))}
              </div>
            )}

            {!typing && step === "name" && (
              <form
                className="wa-name-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  submitName(false);
                }}
              >
                <input
                  className="wa-name-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePh}
                  autoComplete="name"
                />
                <button type="submit" className="wa-name-go" disabled={!name.trim()}>
                  {t.send}
                </button>
                <button type="button" className="wa-skip" onClick={() => submitName(true)}>
                  {t.skip}
                </button>
              </form>
            )}

            {!typing && step === "go" && (
              <button type="button" className="wa-launch" onClick={launch} disabled={sending}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.5 3.5L3.6 10.6c-.7.3-.7 1.3.1 1.5l4.4 1.4 1.4 4.5c.2.7 1.1.8 1.5.2l2.6-3.3 4.7 3.5c.6.4 1.4.1 1.6-.6l3.1-13c.2-.8-.6-1.5-1.4-1.3z" />
                </svg>
                {sending ? "…" : t.cta}
              </button>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        className="wa-fab"
        aria-label={t.fabLabel}
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openPanel("fab"))}
      >
        <span className="wa-fab-pulse" />
        {open ? (
          <span style={{ fontSize: 22, lineHeight: 1 }}>✕</span>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.78h-.01A9.87 9.87 0 0 1 7.02 20.4l-.36-.21-3.74.98 1-3.65-.24-.37A9.86 9.86 0 0 1 2.16 11.9C2.16 6.45 6.6 2.02 12.05 2.02a9.82 9.82 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.87-9.88 9.87zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.41z" />
          </svg>
        )}
      </button>
    </div>
  );
}
