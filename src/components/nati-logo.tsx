/**
 * Official Nati logo (kit: /public/brand/nati, source: nativa-ads/logos-nati/concept.md).
 * Clear space = 25% of mark height, mark→wordmark gap = 24%, min 24px on screen.
 * Never rotate, stretch, recolor (no orange) or add hard shadows.
 */
type Props = {
  /** "horizontal" = mark + "nativa studio"; "short" = mark + "nativa"; "stacked" = mark above wordmark. */
  variant?: "horizontal" | "short" | "stacked";
  /** Background the logo sits on. */
  tone?: "light" | "dark";
  /** Use the single-colour white mark (dark footers). */
  mono?: boolean;
  /** Mark height in px (min 24). */
  size?: number;
  className?: string;
};

export default function NatiLogo({ variant = "horizontal", tone = "light", mono = false, size = 32, className }: Props) {
  const h = Math.max(24, size);
  const src = mono
    ? tone === "dark"
      ? "/brand/nati/mark-mono-white.svg"
      : "/brand/nati/mark-mono-ink.svg"
    : tone === "dark"
      ? "/brand/nati/mark-dark.svg"
      : "/brand/nati/mark.svg";
  const ink = tone === "dark" ? "#f7f8fa" : "#0b0d12";
  const stacked = variant === "stacked";
  const fontSize = Math.round(h * (stacked ? 0.5 : 0.62));

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: stacked ? "column" : "row",
        alignItems: "center",
        gap: `${Math.round(h * 0.24)}px`,
        lineHeight: 1,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" width={h} height={h} style={{ width: h, height: h, flexShrink: 0, display: "block" }} />
      <span
        style={{
          fontFamily: "var(--font-head), 'Instrument Sans', system-ui, sans-serif",
          fontSize: `${fontSize}px`,
          letterSpacing: "-0.03em",
          color: ink,
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ fontWeight: 700 }}>nativa</span>
        {variant === "short" ? null : <span style={{ fontWeight: 400, opacity: 0.55 }}> studio</span>}
      </span>
      <span className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
        Nativa Studio
      </span>
    </span>
  );
}
