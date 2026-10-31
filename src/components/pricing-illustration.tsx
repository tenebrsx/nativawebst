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
import { Scene } from "@/components/pricing-scenes";

const INK = "#0B0D12", PAPER = "#F7F8FA", BLUE = "#1E4FD7", WASH = "#E8EEFB", MUTED = "#5C6470";
const S = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

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
      const q = gsap.utils.selector(root);
      const intro = gsap.timeline();
      intro.from(q(".pi-scene [data-p]"), { y: 14, opacity: 0, scale: 0.94, duration: 0.6, stagger: 0.08, ease: "back.out(1.5)", transformOrigin: "50% 100%" })
        .from(q(".pi-scene [data-a='draw']"), { clipPath: "inset(0 100% 0 0)", duration: 0.9, ease: "power2.inOut" }, 0.3)
        .from(q(".pi-sec"), { y: 8, opacity: 0, duration: 0.35, stagger: 0.03, ease: "power2.out", clearProps: "all" }, 0.2);
      const loops = [
        gsap.to(q("[data-a='spin']"), { rotation: 360, duration: 40, repeat: -1, ease: "none", svgOrigin: "120 96" }),
        gsap.to(q("[data-a='float']"), { y: "-=5", duration: 2.6, yoyo: true, repeat: -1, ease: "sine.inOut", stagger: 0.4, delay: 0.8 }),
        gsap.to(q("[data-a='swing']"), { rotation: 3, duration: 2.2, yoyo: true, repeat: -1, ease: "sine.inOut", transformOrigin: "50% 0%", delay: 0.8 }),
        gsap.fromTo(q("[data-a='steam'] path"), { y: 4, opacity: 0 }, { y: -6, opacity: 0.9, duration: 1.6, repeat: -1, stagger: 0.4, ease: "sine.out" }),
        gsap.to(q("[data-a='blink']"), { opacity: 0.35, duration: 1.1, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1 }),
        gsap.to(q("[data-a='twinkle']"), { scale: 0.6, opacity: 0.5, duration: 1.4, yoyo: true, repeat: -1, ease: "sine.inOut", stagger: 0.5, transformOrigin: "50% 50%" }),
        gsap.fromTo(q("[data-a='pulse']"), { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.8, repeat: -1, repeatDelay: 0.8, ease: "power1.inOut" }),
      ];
      const io = new IntersectionObserver(([e]) => loops.forEach((l) => (e.isIntersecting ? l.play() : l.pause())));
      if (root.current) io.observe(root.current);
      return () => io.disconnect();
    });
  }, { scope: root, dependencies: [key, build.tone, build.palette], revertOnUpdate: true });

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
        <div className="pi-spotwrap"><Scene id={build.tpl} a={accent} dark={dark} /></div>
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
    </div>
  );
}
