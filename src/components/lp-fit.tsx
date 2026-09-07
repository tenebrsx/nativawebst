"use client";

import { useEffect, useRef, type ReactNode } from "react";

const ARTBOARD_W = 1280;
const ARTBOARD_H = 780;

/**
 * Scales a fixed 1280×780 artboard into available space.
 * ResizeObserver + visualViewport keep the frame fully visible across
 * browser zoom, DPI, and window sizes (container queries alone can fail).
 */
export function LpFit({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const apply = () => {
      const fluid = window.matchMedia("(max-width: 980px)").matches;
      if (fluid) {
        el.style.setProperty("--lp-s", "1");
        return;
      }

      const { width, height } = el.getBoundingClientRect();
      if (width < 2 || height < 2) return;
      const next = Math.min(width / ARTBOARD_W, height / ARTBOARD_H);
      el.style.setProperty("--lp-s", String(next > 0.01 ? next : 1));
    };

    apply();
    // Re-measure after layout/fonts settle (teaser grid + enter animation)
    const raf = window.requestAnimationFrame(() => {
      apply();
      window.requestAnimationFrame(apply);
    });

    const ro = new ResizeObserver(apply);
    ro.observe(el);
    const parent = el.parentElement;
    if (parent) ro.observe(parent);

    const mq = window.matchMedia("(max-width: 980px)");
    mq.addEventListener("change", apply);
    window.addEventListener("resize", apply);
    window.visualViewport?.addEventListener("resize", apply);

    return () => {
      window.cancelAnimationFrame(raf);
      ro.disconnect();
      mq.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
      window.visualViewport?.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <div className="lp-fit" ref={ref}>
      <div className="lp-fit-inner">{children}</div>
    </div>
  );
}
