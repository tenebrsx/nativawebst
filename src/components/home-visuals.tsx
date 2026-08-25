"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function HeroAtmosphere() {
  return (
    <div className="hero-atmosphere" aria-hidden="true">
      <div className="hero-orb hero-orb-coral" />
      <div className="hero-orb hero-orb-sun" />
      <div className="hero-orb hero-orb-foam" />
      <div className="hero-grid-lines" />
      <svg className="hero-horizon-svg" viewBox="0 0 1440 220" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveFillA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="waveFillB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a1128" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0a1128" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <g className="wave-layer wave-layer-slow">
          <path
            d="M0,90 C180,150 360,30 540,90 C720,150 900,40 1080,95 C1260,150 1380,70 1440,90 L1440,220 L0,220 Z"
            fill="url(#waveFillB)"
          />
          <path
            d="M1440,90 C1620,150 1800,30 1980,90 C2160,150 2340,40 2520,95 C2700,150 2820,70 2880,90 L2880,220 L1440,220 Z"
            fill="url(#waveFillB)"
          />
        </g>
        <g className="wave-layer wave-layer-mid">
          <path
            d="M0,120 C200,70 380,170 560,120 C740,70 920,165 1100,118 C1280,70 1380,140 1440,120 L1440,220 L0,220 Z"
            fill="url(#waveFillA)"
          />
          <path
            d="M1440,120 C1640,70 1820,170 2000,120 C2180,70 2360,165 2540,118 C2720,70 2820,140 2880,120 L2880,220 L1440,220 Z"
            fill="url(#waveFillA)"
          />
        </g>
        <path
          className="horizon-stroke"
          d="M0,108 C240,78 420,138 720,108 C1020,78 1200,132 1440,108"
          fill="none"
          stroke="#0ea5e9"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>
      <div className="hero-grain" />
    </div>
  );
}

export function PointerGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let x = window.innerWidth / 2;
    let y = 200;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - 280}px, ${y - 280}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="pointer-glow" aria-hidden="true" />;
}

export function BrandMarquee({ label, names }: { label: string; names: string[] }) {
  const row = [...names, ...names];
  return (
    <div className="marquee" aria-label={label}>
      <span className="marquee-label">{label}</span>
      <div className="marquee-viewport">
        <div className="marquee-track">
          {row.map((n, i) => (
            <span key={`${n}-${i}`} className="marquee-item">
              <span className="marquee-dot" />
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CountStat({ value, label }: { value: string; label: string }) {
  const match = value.match(/[\d,]+/);
  const target = match ? parseInt(match[0].replace(/,/g, ""), 10) : 0;
  const suffix = match ? value.slice(value.indexOf(match[0]) + match[0].length) : "";
  const prefix = match ? value.slice(0, value.indexOf(match[0])) : value;
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (started.current) return;
      started.current = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setN(target);
        return;
      }
      const duration = 1100;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setN(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const formatted = target >= 1000 ? n.toLocaleString("en-US") : String(n);

  return (
    <div ref={ref}>
      <div className="stat-num" style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "22px" }}>
        {prefix}{formatted}{suffix}
      </div>
      <div className="stat-lbl" style={{ fontSize: "12px", fontWeight: 600 }}>{label}</div>
    </div>
  );
}

export function HorizonHalo({ children }: { children: ReactNode }) {
  return (
    <div className="horizon-halo">
      <svg className="horizon-ring" viewBox="0 0 320 320" aria-hidden="true">
        <circle cx="160" cy="160" r="148" fill="none" stroke="rgba(14,165,233,0.38)" strokeWidth="1.2" strokeDasharray="5 9" />
        <circle cx="160" cy="160" r="118" fill="none" stroke="rgba(255,183,3,0.42)" strokeWidth="1.2" strokeDasharray="2 11" />
        <circle cx="160" cy="12" r="4" fill="#ffb703" />
        <circle cx="160" cy="308" r="3" fill="#0ea5e9" />
      </svg>
      <svg className="horizon-crest" viewBox="0 0 120 56" aria-hidden="true">
        <circle cx="60" cy="22" r="10" fill="#FFB703" opacity="0.9" />
        <path d="M8 32C22 24 36 40 60 28C84 16 100 34 112 30" stroke="#0EA5E9" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M8 42C24 34 38 46 62 38C86 30 100 44 112 42" stroke="#0EA5E9" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.45" />
      </svg>
      {children}
    </div>
  );
}

export function ServiceGlyph({ icon, title }: { icon?: string; title: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const key = `${icon ?? ""} ${title}`.toLowerCase();
  let kind: "globe" | "pin" | "pen" | "cart" | "chat" | "wrench" | "bolt" | "leads" = "globe";
  if (/map|📍|seo/.test(key)) kind = "pin";
  else if (/copy|✍️|persuas|copywrit/.test(key)) kind = "pen";
  else if (/commerce|🛒|scheduling|tienda/.test(key)) kind = "cart";
  else if (/whatsapp|💬|📱|automation/.test(key)) kind = "chat";
  else if (/support|🔧|manten|update/.test(key)) kind = "wrench";
  else if (/⚡|carga|optim|speed|ultrarr/.test(key)) kind = "bolt";
  else if (/crm|tablero|pipeline/.test(key)) kind = "leads";
  else if (/agent|agente|ai |ia /.test(key)) kind = "bolt";
  else if (/lead|formulario|captac/.test(key)) kind = "leads";

  const glyphs = {
    globe: (
      <svg {...common}>
        <circle cx="14" cy="14" r="10" />
        <path d="M4 14h20M14 4c3.2 3.6 3.2 16.4 0 20M14 4c-3.2 3.6-3.2 16.4 0 20" />
      </svg>
    ),
    pin: (
      <svg {...common}>
        <path d="M14 24s-8-8.2-8-13a8 8 0 1 1 16 0c0 4.8-8 13-8 13z" />
        <circle cx="14" cy="11" r="2.4" />
      </svg>
    ),
    pen: (
      <svg {...common}>
        <path d="M16.5 5.5l6 6L10 24H4v-6L16.5 5.5z" />
        <path d="M13.5 8.5l6 6" />
      </svg>
    ),
    cart: (
      <svg {...common}>
        <path d="M3.5 5h2.2l2.2 12.5h12.4l2-8.2H8" />
        <circle cx="11.5" cy="22" r="1.6" />
        <circle cx="18.8" cy="22" r="1.6" />
      </svg>
    ),
    chat: (
      <svg {...common}>
        <path d="M6 21.5l1.6-3.2A9 9 0 1 1 22 14a9 9 0 0 1-12.4 8.2L6 21.5z" />
        <path d="M10 12.2c.4 2 2.2 3.8 4.2 4.2" />
      </svg>
    ),
    wrench: (
      <svg {...common}>
        <path d="M18.5 9.5a5 5 0 0 1-6.7 6.7L6 21.9 4.1 20l5.7-5.8A5 5 0 0 1 18.5 9.5z" />
        <circle cx="17.2" cy="8.2" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    ),
    bolt: (
      <svg {...common}>
        <path d="M15 3L6.5 15.5h6L13 25l8.5-12.5h-6L15 3z" />
      </svg>
    ),
    leads: (
      <svg {...common}>
        <path d="M5 20v-2.5A4.5 4.5 0 0 1 9.5 13h0A4.5 4.5 0 0 1 14 17.5V20" />
        <circle cx="9.5" cy="8.5" r="3" />
        <path d="M16 20v-2a3.5 3.5 0 0 1 3.2-3.5h0A3.5 3.5 0 0 1 22.5 18v2" />
        <circle cx="19.2" cy="9.2" r="2.4" />
      </svg>
    ),
  };

  return <span className="service-glyph">{glyphs[kind]}</span>;
}
