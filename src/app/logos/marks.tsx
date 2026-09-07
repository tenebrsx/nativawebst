import type { ReactNode } from "react";

export type LogoType =
  | "wordmark"
  | "glass"
  | "lettermark"
  | "pictorial"
  | "abstract"
  | "emblem"
  | "modular"
  | "stamp"
  | "ligature";

export type Canvas = "sand" | "navy" | "dusk";

export const TYPE_LABEL: Record<LogoType, string> = {
  wordmark: "Wordmark",
  glass: "Glass",
  lettermark: "Lettermark",
  pictorial: "Pictorial",
  abstract: "Abstract",
  emblem: "Emblem",
  modular: "Modular",
  stamp: "Stamp",
  ligature: "Ligature",
};

const CORAL = "#0ea5e9";
const SUN = "#ffb703";
const NAVY = "#0a1128";
const SAND = "#faf7f2";

export function inkFor(canvas: Canvas) {
  return canvas === "sand" ? NAVY : SAND;
}

type MarkProps = {
  uid: string;
  ink: string;
  canvas: Canvas;
};

export type LogoConcept = {
  id: string;
  type: LogoType;
  name: string;
  nameEs: string;
  lean?: "minimal" | "glass";
  idea: string;
  ideaEs: string;
  use: string;
  useEs: string;
  svg: string;
  mark: (props: MarkProps) => ReactNode;
};

function WordmarkMark({ ink }: MarkProps) {
  return (
    <svg viewBox="0 0 220 52" width="220" height="52" fill="none" aria-hidden>
      <text
        x="2"
        y="34"
        fill={ink}
        fontFamily="Montserrat, system-ui, sans-serif"
        fontWeight="900"
        fontSize="34"
        letterSpacing="-2.2"
      >
        NATIVA
      </text>
      <path
        d="M4 44.5 H208"
        stroke={CORAL}
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlassMark({ uid }: MarkProps) {
  const g = `${uid}-glass`;
  const b = `${uid}-glow`;
  return (
    <svg viewBox="0 0 64 64" width="72" height="72" fill="none" aria-hidden>
      <defs>
        <linearGradient id={g} x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.22" />
        </linearGradient>
        <filter id={b} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <circle cx="22" cy="20" r="15" fill={CORAL} opacity="0.5" filter={`url(#${b})`} />
      <circle cx="46" cy="44" r="13" fill={SUN} opacity="0.42" filter={`url(#${b})`} />
      <rect x="8" y="8" width="48" height="48" rx="15" fill={`url(#${g})`} />
      <rect
        x="8.6"
        y="8.6"
        width="46.8"
        height="46.8"
        rx="14.4"
        stroke="#ffffff"
        strokeOpacity="0.78"
        strokeWidth="1.2"
      />
      <path
        d="M8 16.5 C18 14 28 11 40 12"
        stroke="#ffffff"
        strokeOpacity="0.6"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M22 42 V22 H26.2 L38 42 H43 V22 H38.8 V36.2 L28.2 22 H22.8 V42 H22 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function LettermarkMark({ ink, canvas }: MarkProps) {
  const n = "M16 50 V14 H25.5 V36.5 L38.5 14 H48 V50 H38.5 V27.5 L25.5 50 H16 Z";
  const gap = canvas === "sand" ? "#f3ede2" : "#070c1c";
  return (
    <svg viewBox="0 0 64 64" width="72" height="72" fill="none" aria-hidden>
      <path d={n} fill={ink} />
      <rect x="8" y="30.4" width="48" height="3.2" fill={gap} />
      <path d="M12 32 H52" stroke={CORAL} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function PictorialMark() {
  return (
    <svg viewBox="0 0 64 64" width="72" height="72" fill="none" aria-hidden>
      <circle cx="32" cy="32" r="26" fill={NAVY} />
      <circle cx="32" cy="24" r="9" fill={SUN} />
      <path d="M6 36 H58 V32 C48 32 42 40 32 40 C22 40 16 32 6 32 V36 Z" fill="#1c2541" />
      <path
        d="M10 40 C18 36 24 44 32 40 C40 36 46 44 54 40"
        stroke={CORAL}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AbstractMark({ ink }: MarkProps) {
  const stroke = ink;
  return (
    <svg viewBox="0 0 64 64" width="72" height="72" fill="none" aria-hidden>
      <rect x="8" y="14" width="36" height="28" rx="5" stroke={stroke} strokeWidth="2.4" />
      <path d="M8 22 H44" stroke={stroke} strokeWidth="2.4" />
      <circle cx="14.5" cy="18" r="1.4" fill={CORAL} />
      <circle cx="19.5" cy="18" r="1.4" fill={SUN} />
      <circle cx="24.5" cy="18" r="1.4" fill={stroke} opacity="0.35" />
      <rect x="20" y="22" width="36" height="28" rx="5" stroke={CORAL} strokeWidth="2.4" />
      <path d="M28 38 H48 M28 43 H42" stroke={CORAL} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EmblemMark({ ink, canvas }: MarkProps) {
  const ring = canvas === "sand" ? NAVY : SAND;
  return (
    <svg viewBox="0 0 64 64" width="72" height="72" fill="none" aria-hidden>
      <circle cx="32" cy="32" r="29" stroke={ring} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="24.5" stroke={CORAL} strokeWidth="1.1" />
      <text
        x="32"
        y="18.5"
        textAnchor="middle"
        fill={ink}
        fontFamily="Montserrat, system-ui, sans-serif"
        fontWeight="800"
        fontSize="5.2"
        letterSpacing="1.6"
      >
        NATIVA
      </text>
      <circle cx="32" cy="30" r="5.5" fill={SUN} />
      <path
        d="M16 38 C22 34 26 42 32 38 C38 34 42 42 48 38"
        stroke={CORAL}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <text
        x="32"
        y="50"
        textAnchor="middle"
        fill={ink}
        fontFamily="Montserrat, system-ui, sans-serif"
        fontWeight="700"
        fontSize="4.4"
        letterSpacing="0.8"
        opacity="0.7"
      >
        SANTO DOMINGO
      </text>
    </svg>
  );
}

function ModularMark({ ink }: MarkProps) {
  const cells = [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ];
  return (
    <svg viewBox="0 0 64 64" width="72" height="72" fill="none" aria-hidden>
      {cells.map((row, y) =>
        row.map((on, x) => {
          const accent = on && x === 2 && y === 2;
          return (
            <rect
              key={`${x}-${y}`}
              x={10 + x * 9}
              y={10 + y * 9}
              width="7"
              height="7"
              rx="1.6"
              fill={on ? (accent ? CORAL : ink) : "transparent"}
              opacity={on ? 1 : 0}
            />
          );
        }),
      )}
    </svg>
  );
}

function StampMark({ canvas }: MarkProps) {
  const face = canvas === "sand" ? NAVY : SAND;
  const knock = canvas === "sand" ? SAND : NAVY;
  return (
    <svg viewBox="0 0 96 56" width="120" height="70" fill="none" aria-hidden>
      <rect x="2" y="2" width="92" height="52" rx="4" fill={face} />
      <text
        x="48"
        y="30"
        textAnchor="middle"
        fill={knock}
        fontFamily="Montserrat, system-ui, sans-serif"
        fontWeight="900"
        fontSize="18"
        letterSpacing="1.4"
      >
        NATIVA
      </text>
      <rect x="28" y="38" width="40" height="3" rx="1.5" fill={CORAL} />
    </svg>
  );
}

function LigatureMark({ ink }: MarkProps) {
  return (
    <svg viewBox="0 0 84 64" width="92" height="70" fill="none" aria-hidden>
      <path d="M8 52 V12 H18 V38 L30 12 H40 V52 H30 V26 L18 52 H8 Z" fill={ink} />
      <path d="M40 52 L54 12 H64 L78 52 H66.5 L63.5 42 H50.5 L47.5 52 H40 Z" fill={ink} />
      <path d="M51.5 33 H62.5" stroke={CORAL} strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

export const CONCEPTS: LogoConcept[] = [
  {
    id: "wordmark",
    type: "wordmark",
    name: "Nativa rule",
    nameEs: "Nativa con regla",
    lean: "minimal",
    idea: "Swiss wordmark. The name is the mark. A single coral horizon sits under the letters — no icon, no sail, no glass.",
    ideaEs: "Wordmark suizo. El nombre es la marca. Un solo horizonte coral bajo las letras — sin ícono, sin vela, sin vidrio.",
    use: "Best in the navbar and on invoices. Scales to a text-only favicon via the letter N.",
    useEs: "Mejor en el navbar y en facturas. Escala a favicon solo-texto con la N.",
    svg: `<svg viewBox="0 0 220 52" xmlns="http://www.w3.org/2000/svg"><text x="2" y="34" fill="#0a1128" font-family="Montserrat, system-ui, sans-serif" font-weight="900" font-size="34" letter-spacing="-2.2">NATIVA</text><path d="M4 44.5 H208" stroke="#0ea5e9" stroke-width="2.25" stroke-linecap="round"/></svg>`,
    mark: (p) => <WordmarkMark {...p} />,
  },
  {
    id: "glass",
    type: "glass",
    name: "Frost N",
    nameEs: "N de escarcha",
    lean: "glass",
    idea: "Glassmorphism app icon: frost panel, sun and coral glow behind, N cut from the ice. Reads as a product, not a print studio.",
    ideaEs: "Ícono glassmorphism: panel de escarcha, brillo sol y coral detrás, N recortada del hielo. Se lee como producto, no como imprenta.",
    use: "Favicon, app icon, dark hero. Weak on one-color print and at 16px.",
    useEs: "Favicon, ícono de app, hero oscuro. Débil en impresión a un color y a 16px.",
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="nativa-glass" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0.55"/><stop offset="1" stop-color="#0ea5e9" stop-opacity="0.22"/></linearGradient></defs><circle cx="22" cy="20" r="15" fill="#0ea5e9" opacity="0.5"/><circle cx="46" cy="44" r="13" fill="#ffb703" opacity="0.42"/><rect x="8" y="8" width="48" height="48" rx="15" fill="url(#nativa-glass)" stroke="#fff" stroke-opacity="0.78"/><path d="M22 42 V22 H26.2 L38 42 H43 V22 H38.8 V36.2 L28.2 22 H22.8 V42 H22 Z" fill="#fff"/></svg>`,
    mark: (p) => <GlassMark {...p} />,
  },
  {
    id: "lettermark",
    type: "lettermark",
    name: "N-horizon",
    nameEs: "N-horizonte",
    idea: "Geometric N sliced by the coral horizon. One letter, one line. Works as a 16px favicon and as a stamp on a WhatsApp avatar.",
    ideaEs: "N geométrica cortada por el horizonte coral. Una letra, una línea. Sirve a 16px y como avatar de WhatsApp.",
    use: "Favicon, social avatar, close of a business card.",
    useEs: "Favicon, avatar social, cierre de tarjeta.",
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M16 50 V14 H25.5 V36.5 L38.5 14 H48 V50 H38.5 V27.5 L25.5 50 H16 Z" fill="#0a1128"/><rect x="8" y="30.4" width="48" height="3.2" fill="#f3ede2"/><path d="M12 32 H52" stroke="#0ea5e9" stroke-width="2.4" stroke-linecap="round"/></svg>`,
    mark: (p) => <LettermarkMark {...p} />,
  },
  {
    id: "pictorial",
    type: "pictorial",
    name: "Sol y mar",
    nameEs: "Sol y mar",
    idea: "The brand as a place: navy disc, sun, one coral wave. This is the DESIGN.md horizon — Caribbean afternoon, not SaaS chrome.",
    ideaEs: "La marca como un lugar: disco navy, sol, una ola coral. El horizonte del estudio — tarde caribeña, no cromo SaaS.",
    use: "Hero, merch, maps pin. Too scenic for a dense UI toolbar.",
    useEs: "Hero, merch, pin de maps. Demasiado paisaje para una toolbar densa.",
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="26" fill="#0a1128"/><circle cx="32" cy="24" r="9" fill="#ffb703"/><path d="M6 36 H58 V32 C48 32 42 40 32 40 C22 40 16 32 6 32 V36 Z" fill="#1c2541"/><path d="M10 40 C18 36 24 44 32 40 C40 36 46 44 54 40" stroke="#0ea5e9" stroke-width="2.4" stroke-linecap="round"/></svg>`,
    mark: () => <PictorialMark />,
  },
  {
    id: "abstract",
    type: "abstract",
    name: "Two frames",
    nameEs: "Dos marcos",
    idea: "Stacked browser frames. The agency builds sites — the mark is two windows, one offset in coral, like a live preview over a wireframe.",
    ideaEs: "Marcos de browser apilados. El estudio construye sitios — la marca es dos ventanas, una desplazada en coral, preview sobre wireframe.",
    use: "Case-study covers, deck openers. Not a favicon.",
    useEs: "Portadas de casos, openings de deck. No es favicon.",
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="14" width="36" height="28" rx="5" stroke="#0a1128" stroke-width="2.4"/><rect x="20" y="22" width="36" height="28" rx="5" stroke="#0ea5e9" stroke-width="2.4"/></svg>`,
    mark: (p) => <AbstractMark {...p} />,
  },
  {
    id: "emblem",
    type: "emblem",
    name: "Studio seal",
    nameEs: "Sello del estudio",
    idea: "Circular crest. Feels like a law firm or a hotel, not a startup. Useful when Nativa needs gravitas on a proposal or a sign.",
    ideaEs: "Cresta circular. Se siente bufete u hotel, no startup. Útil cuando Nativa necesita gravitas en una propuesta o un letrero.",
    use: "PDF covers, wax-stamp moments, footer of a contract.",
    useEs: "Portadas PDF, momento sello, pie de contrato.",
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="29" stroke="#0a1128" stroke-width="1.5"/><circle cx="32" cy="32" r="24.5" stroke="#0ea5e9" stroke-width="1.1"/><circle cx="32" cy="30" r="5.5" fill="#ffb703"/></svg>`,
    mark: (p) => <EmblemMark {...p} />,
  },
  {
    id: "modular",
    type: "modular",
    name: "Grid N",
    nameEs: "N en grilla",
    idea: "N built from a 5×5 tile grid. Digital, systematic, close to agents and CRM — a bit Pentagram, a bit terminal.",
    ideaEs: "N construida en grilla 5×5. Digital, sistemática, cercana a agentes y CRM — un poco Pentagram, un poco terminal.",
    use: "Favicon, loading state (tiles lighting up), dark UI.",
    useEs: "Favicon, estado de carga (tiles que encienden), UI oscura.",
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="#0a1128"><rect x="10" y="10" width="7" height="7" rx="1.6"/><rect x="46" y="10" width="7" height="7" rx="1.6"/><rect x="10" y="19" width="7" height="7" rx="1.6"/><rect x="19" y="19" width="7" height="7" rx="1.6"/><rect x="46" y="19" width="7" height="7" rx="1.6"/><rect x="10" y="28" width="7" height="7" rx="1.6"/><rect x="28" y="28" width="7" height="7" rx="1.6" fill="#0ea5e9"/><rect x="46" y="28" width="7" height="7" rx="1.6"/><rect x="10" y="37" width="7" height="7" rx="1.6"/><rect x="37" y="37" width="7" height="7" rx="1.6"/><rect x="46" y="37" width="7" height="7" rx="1.6"/><rect x="10" y="46" width="7" height="7" rx="1.6"/><rect x="46" y="46" width="7" height="7" rx="1.6"/></g></svg>`,
    mark: (p) => <ModularMark {...p} />,
  },
  {
    id: "stamp",
    type: "stamp",
    name: "Block stamp",
    nameEs: "Sello bloque",
    idea: "Brutalist plate. Navy slab, knocked-out NATIVA, coral bar. The opposite of glass — loud, cheap to print, hard to ignore.",
    ideaEs: "Placa brutalista. Losa navy, NATIVA recortada, barra coral. Lo opuesto al vidrio — alto, barato de imprimir, difícil de ignorar.",
    use: "Tape on a package, OG image, ads. Too heavy for a quiet navbar.",
    useEs: "Cinta en un paquete, imagen OG, ads. Demasiado pesado para un navbar quieto.",
    svg: `<svg viewBox="0 0 96 56" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="92" height="52" rx="4" fill="#0a1128"/><text x="48" y="30" text-anchor="middle" fill="#faf7f2" font-family="Montserrat, system-ui, sans-serif" font-weight="900" font-size="18" letter-spacing="1.4">NATIVA</text><rect x="28" y="38" width="40" height="3" rx="1.5" fill="#0ea5e9"/></svg>`,
    mark: (p) => <StampMark {...p} />,
  },
  {
    id: "ligature",
    type: "ligature",
    name: "NA join",
    nameEs: "NA unida",
    idea: "Boutique ligature: N shares its right stem with A. The coral bar is only the A’s crossbar. Studio, not software.",
    ideaEs: "Ligadura boutique: la N comparte el palo derecho con la A. La barra coral es solo el travesaño de la A. Estudio, no software.",
    use: "Letterhead, interior sign, a quieter alternative to the full wordmark.",
    useEs: "Membrete, letrero interior, alternativa más quieta al wordmark completo.",
    svg: `<svg viewBox="0 0 84 64" xmlns="http://www.w3.org/2000/svg"><path d="M8 52 V12 H18 V38 L30 12 H40 V52 H30 V26 L18 52 H8 Z" fill="#0a1128"/><path d="M40 52 L54 12 H64 L78 52 H66.5 L63.5 42 H50.5 L47.5 52 H40 Z" fill="#0a1128"/><path d="M51.5 33 H62.5" stroke="#0ea5e9" stroke-width="3.2" stroke-linecap="round"/></svg>`,
    mark: (p) => <LigatureMark {...p} />,
  },
];
