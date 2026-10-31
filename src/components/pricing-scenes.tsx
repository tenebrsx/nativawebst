/* Layered SVG scenes per industry (240×200). Nativa palette only. Animated parts are tagged:
   data-p   = intro piece (staggers in once)       data-a="float|spin|swing|steam|blink|twinkle|pulse|draw"
   Accent colour comes from the chosen palette (defaults to signal blue). */
import type { ReactNode } from "react";

const INK = "#0B0D12", MID = "#1A1D26", PAPER = "#F7F8FA", WASH = "#E8EEFB", W = "#FFFFFF", MUTE = "#5C6470";
type P = { a: string; dark: boolean };

const Shadow = ({ cx = 120, w = 70 }: { cx?: number; w?: number }) => <ellipse cx={cx} cy="178" rx={w} ry="7" fill={INK} opacity=".08" />;
const Spark = ({ x, y, s = 1, a }: { x: number; y: number; s?: number; a: string }) => (
  <path data-a="twinkle" transform={`translate(${x} ${y}) scale(${s})`} d="M0-8C1-2 2-1 8 0 2 1 1 2 0 8-1 2-2 1-8 0-2-1-1-2 0-8z" fill={a} />
);
const Card = ({ x, y, w, h, children, p }: { x: number; y: number; w: number; h: number; children?: ReactNode; p: P }) => (
  <g data-p data-a="float" transform={`translate(${x} ${y})`}>
    <rect x="2" y="4" width={w} height={h} rx="8" fill={INK} opacity=".08" />
    <rect width={w} height={h} rx="8" fill={p.dark ? MID : W} stroke={p.dark ? "#2A2F3B" : "#E3E6EC"} />
    {children}
  </g>
);
const Line = ({ x, y, w, o = 1, c = MUTE }: { x: number; y: number; w: number; o?: number; c?: string }) => <rect x={x} y={y} width={w} height="4" rx="2" fill={c} opacity={o} />;

function Back({ a, dark }: P) {
  return (
    <g>
      <circle data-a="spin" cx="120" cy="96" r="78" fill="none" stroke={a} strokeOpacity=".25" strokeDasharray="2 7" strokeWidth="2" />
      <circle cx="120" cy="96" r="58" fill={dark ? MID : WASH} />
      <g fill={dark ? "#2A2F3B" : "#D5DBE6"}>{Array.from({ length: 24 }, (_, i) => <circle key={i} cx={22 + (i % 6) * 9} cy={22 + Math.floor(i / 6) * 9} r="1.4" />)}</g>
    </g>
  );
}

const SCENES: Record<string, (p: P) => ReactNode> = {
  clinica: (p) => (<>
    <Shadow />
    <g data-p transform="translate(78 50)">
      <rect width="84" height="112" rx="10" fill={p.dark ? MID : W} stroke={INK} strokeWidth="2.5" />
      <rect x="10" y="10" width="64" height="40" rx="6" fill={WASH} />
      <path data-a="pulse" d="M14 30h12l5-10 7 20 6-14 4 4h18" fill="none" stroke={p.a} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <Line x={12} y={62} w={48} c={INK} /><Line x={12} y={72} w={36} o={.5} /><Line x={12} y={82} w={56} o={.5} />
      <rect x="12" y="94" width="40" height="10" rx="5" fill={p.a} />
    </g>
    <g data-p data-a="float" transform="translate(150 40)"><circle r="18" fill={p.a} /><path d="M0-9v18M-9 0h18" stroke={W} strokeWidth="4" strokeLinecap="round" /></g>
    <Card x={30} y={112} w={64} h={36} p={p}><circle cx="14" cy="18" r="7" fill={WASH} /><Line x={26} y={12} w={30} c={INK} /><Line x={26} y={21} w={20} o={.5} /></Card>
    <Spark x={60} y={46} a={p.a} /><Spark x={196} y={120} s={.7} a={p.a} />
  </>),
  inmobiliaria: (p) => (<>
    <Shadow w={84} />
    <g data-p transform="translate(64 58)">
      <path d="M0 50 56 6l56 44" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="12" y="44" width="88" height="70" fill={p.dark ? MID : W} stroke={INK} strokeWidth="2.5" />
      <rect x="22" y="56" width="22" height="18" rx="2" fill={WASH} stroke={INK} strokeWidth="2" /><rect x="68" y="56" width="22" height="18" rx="2" fill={WASH} stroke={INK} strokeWidth="2" />
      <rect x="46" y="80" width="20" height="34" rx="2" fill={p.a} />
      <rect x="78" y="14" width="10" height="20" fill={INK} />
    </g>
    <g data-p data-a="swing" transform="translate(178 62)"><path d="M0 0v22" stroke={INK} strokeWidth="2" /><rect x="-16" y="22" width="32" height="22" rx="4" fill={W} stroke={INK} strokeWidth="2" /><Line x={-10} y={30} w={20} c={p.a} /></g>
    <g data-p data-a="float" transform="translate(40 52)"><circle r="14" fill={p.a} /><circle cx="-3" cy="-1" r="5" fill="none" stroke={W} strokeWidth="2.5" /><path d="M1 3l8 8M6 8l3-3" stroke={W} strokeWidth="2.5" strokeLinecap="round" /></g>
    <Spark x={196} y={34} a={p.a} />
  </>),
  legal: (p) => (<>
    <Shadow />
    <g data-p transform="translate(120 40)">
      <path d="M0 6v118M-30 124h60" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <g data-a="swing">
        <path d="M-54 18h108" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M-46 18-62 56h32zM46 18 30 56h32z" fill="none" stroke={INK} strokeWidth="2" />
        <path d="M-64 56a18 9 0 0 0 36 0z" fill={p.a} /><path d="M28 56a18 9 0 0 0 36 0z" fill={p.dark ? W : INK} />
      </g>
      <circle cy="6" r="6" fill={p.a} />
    </g>
    <Card x={22} y={118} w={70} h={42} p={p}><Line x={10} y={10} w={44} c={INK} /><Line x={10} y={20} w={50} o={.5} /><Line x={10} y={29} w={34} o={.5} /></Card>
    <Spark x={200} y={52} a={p.a} />
  </>),
  constructora: (p) => (<>
    <Shadow w={86} />
    <g data-p transform="translate(56 30)">
      <path d="M20 148V14M14 14h112" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d="M20 30 34 14M20 50l14-16M20 70l14-16M20 90l14-16" stroke={INK} strokeWidth="2" />
      <g data-a="swing"><path d="M104 14v30" stroke={INK} strokeWidth="2" /><rect x="92" y="44" width="24" height="16" rx="2" fill={p.a} /></g>
    </g>
    <g data-p transform="translate(98 88)">
      <rect width="62" height="90" fill={p.dark ? MID : W} stroke={INK} strokeWidth="2.5" />
      {Array.from({ length: 8 }, (_, i) => <rect key={i} data-a={i === 5 ? "blink" : undefined} x={9 + (i % 2) * 26} y={10 + Math.floor(i / 2) * 20} width="18" height="12" rx="1.5" fill={i === 5 ? p.a : WASH} />)}
    </g>
    <Spark x={196} y={40} a={p.a} /><Spark x={44} y={70} s={.6} a={p.a} />
  </>),
  moda: (p) => (<>
    <Shadow />
    <g data-p data-a="swing" transform="translate(120 34)">
      <path d="M0 0a9 9 0 1 1 9 9c-5 0-9 3-9 7L-56 50h112L0 16" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M-44 50h88l-8 86h-72z" fill={p.a} />
      <path d="M-20 50c0 14 40 14 40 0" fill="none" stroke={W} strokeWidth="2.5" />
    </g>
    <Card x={162} y={112} w={58} h={48} p={p}><rect x="8" y="8" width="16" height="16" rx="3" fill={WASH} /><Line x={8} y={30} w={40} c={INK} /><Line x={8} y={38} w={24} c={p.a} /></Card>
    <Spark x={48} y={60} a={p.a} />
  </>),
  gastronomia: (p) => (<>
    <Shadow w={64} />
    <g data-p transform="translate(84 70)">
      <path d="M0 22h68v30a34 34 0 0 1-68 0z" fill={p.dark ? MID : W} stroke={INK} strokeWidth="3" />
      <path d="M68 32h8a12 12 0 0 1 0 24h-10" fill="none" stroke={INK} strokeWidth="3" />
      <rect x="0" y="34" width="68" height="8" fill={p.a} />
      <g data-a="steam" stroke={MUTE} strokeWidth="3" strokeLinecap="round" fill="none"><path d="M18 14c-5-6 5-10 0-16" /><path d="M34 14c-5-6 5-10 0-16" /><path d="M50 14c-5-6 5-10 0-16" /></g>
    </g>
    <Card x={160} y={44} w={60} h={40} p={p}><Line x={8} y={10} w={30} c={INK} /><Line x={8} y={19} w={44} o={.5} /><Line x={8} y={28} w={22} c={p.a} /></Card>
    <Spark x={46} y={58} a={p.a} />
  </>),
  beauty: (p) => (<>
    <Shadow w={60} />
    <g data-p transform="translate(92 46)">
      <rect x="10" y="0" width="24" height="22" rx="4" fill={INK} />
      <rect y="22" width="44" height="100" rx="12" fill={p.dark ? MID : W} stroke={INK} strokeWidth="3" />
      <rect x="0" y="62" width="44" height="26" fill={p.a} />
    </g>
    <g data-p data-a="float" transform="translate(150 96)"><circle r="20" fill={WASH} stroke={INK} strokeWidth="2.5" /><circle r="9" fill={p.a} /></g>
    <Spark x={70} y={52} a={p.a} /><Spark x={182} y={58} s={.7} a={p.a} />
  </>),
  tech: (p) => (<>
    <Shadow w={86} />
    <g data-p transform="translate(50 50)">
      <rect width="140" height="88" rx="8" fill={INK} />
      <rect x="8" y="8" width="124" height="72" rx="4" fill={p.dark ? MID : W} />
      <g data-a="draw"><path d="M20 62l18-14 16 8 22-24 18 10 22-18" fill="none" stroke={p.a} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></g>
      <path d="M-8 98h156" stroke={INK} strokeWidth="5" strokeLinecap="round" />
    </g>
    <g data-p data-a="float" transform="translate(196 54)"><circle r="12" fill={p.a} /><path d="M-4 0h8M0-4v8" stroke={W} strokeWidth="2.5" strokeLinecap="round" /></g>
    <Spark x={40} y={44} a={p.a} />
  </>),
  home: (p) => (<>
    <Shadow w={84} />
    <g data-p transform="translate(52 88)">
      <path d="M0 44V24a12 12 0 0 1 24 0v8h88v-8a12 12 0 0 1 24 0v20z" fill={p.dark ? MID : W} stroke={INK} strokeWidth="3" />
      <rect x="24" y="22" width="88" height="22" rx="4" fill={p.a} />
      <path d="M8 44v18M128 44v18" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </g>
    <g data-p data-a="swing" transform="translate(150 22)"><path d="M0 0v28" stroke={INK} strokeWidth="2" /><path d="M-16 50h32l-6-22h-20z" fill={WASH} stroke={INK} strokeWidth="2.5" /><circle data-a="blink" cy="56" r="5" fill={p.a} /></g>
    <Spark x={60} y={56} a={p.a} />
  </>),
};
SCENES.other = SCENES.otro = (p) => (<>
  <Shadow w={84} />
  <g data-p transform="translate(56 56)">
    <path d="M0 30h128l-10-30H10z" fill={p.a} />
    <path d="M0 30a16 12 0 0 0 32 0 16 12 0 0 0 32 0 16 12 0 0 0 32 0 16 12 0 0 0 32 0" fill={p.dark ? MID : W} stroke={INK} strokeWidth="2.5" />
    <rect x="8" y="42" width="112" height="72" fill={p.dark ? MID : W} stroke={INK} strokeWidth="2.5" />
    <rect x="20" y="56" width="40" height="30" rx="2" fill={WASH} />
    <rect x="76" y="56" width="32" height="58" rx="2" fill={INK} /><circle data-a="blink" cx="100" cy="86" r="3" fill={p.a} />
  </g>
  <Spark x={200} y={48} a={p.a} />
</>);

export function Scene({ id, a, dark }: { id: string; a: string; dark: boolean }) {
  const s = SCENES[id] ?? SCENES.otro;
  return (
    <svg viewBox="0 0 240 200" className="pi-scene" aria-hidden="true">
      <Back a={a} dark={dark} />
      {s({ a, dark })}
    </svg>
  );
}
export { INK, PAPER };
