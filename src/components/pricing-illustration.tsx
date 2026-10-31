"use client";
/* Illustration-led preview: an editorial spot per industry + the plan's pieces as simple objects.
   Deliberately NOT a website mock — it shows what you're choosing, not a fake deliverable. */
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { AddonId } from "@/lib/pricing";
import type { Build } from "@/lib/configurator";
import { PALETTES, SECTIONS } from "@/lib/configurator";
import { tx } from "@/lib/pricing-templates";

const INK = "#0B0D12", PAPER = "#F7F8FA", BLUE = "#1E4FD7", WASH = "#E8EEFB", MUTED = "#5C6470";
const S = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

/* one spot per industry — 120×120 line drawings with a single accent shape */
function Spot({ id, a }: { id: string; a: string }) {
  const g = (() => {
    switch (id) {
      case "clinica": return <><rect x="30" y="34" width="60" height="56" rx="10" {...S}/><path d="M60 46v32M44 62h32" {...S} stroke={a} strokeWidth={6}/><path d="M48 34v-8h24v8" {...S}/></>;
      case "inmobiliaria": return <><path d="M22 60 60 28l38 32" {...S}/><path d="M32 54v38h56V54" {...S}/><rect x="52" y="68" width="16" height="24" rx="2" fill={a}/><circle cx="84" cy="34" r="5" {...S}/></>;
      case "legal": return <><path d="M60 24v68M40 92h40M30 36h60" {...S}/><path d="M30 36 20 62h20zM90 36 80 62h20z" {...S}/><path d="M20 62a10 6 0 0 0 20 0M80 62a10 6 0 0 0 20 0" fill={a}/></>;
      case "constructora": return <><path d="M28 96V30h4M28 30h62M84 30v18" {...S}/><rect x="76" y="48" width="16" height="12" fill={a}/><rect x="44" y="60" width="28" height="36" rx="2" {...S}/><path d="M52 70h12M52 80h12" {...S}/></>;
      case "moda": return <><path d="M60 36a8 8 0 1 1 8 8c-4 0-8 3-8 6l-36 22h72L60 50" {...S}/><rect x="40" y="80" width="40" height="10" rx="5" fill={a}/></>;
      case "gastronomia": return <><path d="M32 52h48v18a24 24 0 0 1-48 0z" {...S}/><path d="M80 58h6a8 8 0 0 1 0 16h-8" {...S}/><path d="M46 28c-4 6 4 10 0 16M60 28c-4 6 4 10 0 16" {...S} stroke={a}/></>;
      case "beauty": return <><rect x="44" y="44" width="32" height="48" rx="8" {...S}/><rect x="52" y="28" width="16" height="16" rx="3" fill={a}/><path d="M52 64h16" {...S}/></>;
      case "tech": return <><rect x="26" y="32" width="68" height="44" rx="6" {...S}/><path d="M18 88h84" {...S}/><circle cx="60" cy="54" r="8" fill={a}/></>;
      case "home": return <><path d="M28 70V56a8 8 0 0 1 16 0v6h32v-6a8 8 0 0 1 16 0v14z" {...S}/><path d="M30 70v14M90 70v14" {...S}/><rect x="44" y="62" width="32" height="8" fill={a}/></>;
      default: return <><path d="M24 50h72l-6-18H30z" {...S}/><path d="M30 50v40h60V50" {...S}/><rect x="52" y="66" width="16" height="24" fill={a}/><path d="M24 50a9 9 0 0 0 18 0 9 9 0 0 0 18 0 9 9 0 0 0 18 0 9 9 0 0 0 18 0" {...S}/></>;
    }
  })();
  return <svg viewBox="0 0 120 120" className="pi-spot" aria-hidden="true">{g}</svg>;
}

const ADDON_ICON: Record<AddonId, (a: string) => React.ReactNode> = {
  seo: (a) => <><path d="M20 6a9 9 0 0 1 9 9c0 7-9 15-9 15s-9-8-9-15a9 9 0 0 1 9-9z" fill={a}/><circle cx="20" cy="15" r="3.4" fill="#fff"/></>,
  brand: (a) => <><circle cx="14" cy="16" r="7" fill={a}/><circle cx="26" cy="16" r="7" {...S} strokeWidth={2.4}/><circle cx="20" cy="27" r="7" {...S} strokeWidth={2.4}/></>,
  bilingual: (a) => <><circle cx="20" cy="20" r="12" {...S} strokeWidth={2.4}/><path d="M8 20h24M20 8c-6 7-6 17 0 24M20 8c6 7 6 17 0 24" {...S} strokeWidth={2} stroke={a}/></>,
  shopify: (a) => <><path d="M8 10h4l4 16h14l3-11H14" {...S} strokeWidth={2.4}/><circle cx="18" cy="31" r="2.5" fill={a}/><circle cx="28" cy="31" r="2.5" fill={a}/></>,
  crm: (a) => <><rect x="6" y="9" width="8" height="22" rx="2" fill={a}/><rect x="16" y="9" width="8" height="15" rx="2" {...S} strokeWidth={2.2}/><rect x="26" y="9" width="8" height="10" rx="2" {...S} strokeWidth={2.2}/></>,
  ai: (a) => <><path d="M8 12h24v14H18l-6 5v-5H8z" {...S} strokeWidth={2.4}/><path d="M20 15l1.6 3.4L25 20l-3.4 1.6L20 25l-1.6-3.4L15 20l3.4-1.6z" fill={a}/></>,
};

export default function PricingIllustration({ build, lang, label, addonLabels }: { build: Build; lang: "es" | "en"; label: string; addonLabels: Record<string, string> }) {
  const root = useRef<HTMLDivElement>(null);
  const pal = PALETTES.find((p) => p.id === build.palette);
  const accent = pal?.swatch[1] ?? BLUE;
  const dark = build.tone === "dark";
  const secs = SECTIONS[build.plan].filter((s) => s.locked || build.sections.includes(s.id));
  const key = `${build.tpl}|${build.plan}`;

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".pi-spot", { scale: 0.92, opacity: 0, rotation: -4, duration: 0.6, ease: "back.out(1.6)", transformOrigin: "50% 60%" });
      gsap.from(".pi-sec", { y: 8, opacity: 0, duration: 0.35, stagger: 0.03, ease: "power2.out", clearProps: "all" });
    });
  }, { scope: root, dependencies: [key], revertOnUpdate: false });

  // new add-on / section badges pop once
  const prev = useRef<Set<string> | null>(null);
  useGSAP(() => {
    const now = new Set([...build.addons.map((a) => "a:" + a), ...build.sections.map((s) => "s:" + s)]);
    const before = prev.current;
    prev.current = now;
    if (!before || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const fresh = [...now].filter((k) => !before.has(k)).map((k) => root.current?.querySelector(`[data-k="${k}"]`)).filter(Boolean) as Element[];
    if (fresh.length) gsap.fromTo(fresh, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2)", stagger: 0.05, clearProps: "transform,opacity" });
  }, { scope: root, dependencies: [build.addons.join(","), build.sections.join(",")] });

  return (
    <div ref={root} className={`pi${dark ? " is-dark" : ""}`} style={{ ["--pi-a" as string]: accent }} role="img" aria-label={label}>
      <p className="pi-note">{lang === "es" ? "Ilustración de lo que eliges — tu sitio real se diseña contigo." : "An illustration of your choices — your real site is designed with you."}</p>
      <div className="pi-stage">
        <div className="pi-spotwrap" style={{ color: dark ? PAPER : INK }}><Spot id={build.tpl} a={accent} /></div>
        <ul className="pi-addons">
          {build.addons.map((a) => (
            <li key={a} data-k={`a:${a}`} className="pi-addon" title={addonLabels[a]}>
              <svg viewBox="0 0 40 40" aria-hidden="true" style={{ color: dark ? PAPER : INK }}>{ADDON_ICON[a](accent)}</svg>
              <span>{addonLabels[a]}</span>
            </li>
          ))}
        </ul>
      </div>
      <ol className="pi-secs" aria-label={lang === "es" ? "Secciones" : "Sections"}>
        {secs.map((s, i) => (
          <li key={s.id} className="pi-sec" data-k={`s:${s.id}`}><b>{String(i + 1).padStart(2, "0")}</b>{tx(s.label, lang)}</li>
        ))}
      </ol>
      <div className="pi-sw" aria-hidden="true">{(pal?.swatch.length ? pal.swatch : [INK, BLUE, WASH]).map((c) => <i key={c} style={{ background: c }} />)}<span style={{ color: MUTED }}>{tx(pal!.label, lang)}</span></div>
    </div>
  );
}
