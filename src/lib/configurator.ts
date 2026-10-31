/**
 * Free, cosmetic / scope options for the /pricing-builder configurator plus
 * the URL + localStorage (de)serialisation of a build. Paid items and their
 * prices live only in src/lib/pricing.ts.
 */
import {
  ADDON_IDS,
  clampUsers,
  isAddonId,
  isPlanId,
  sanitizeAddons,
  type AddonId,
  type PlanId,
} from "@/lib/pricing";
import { templatesFor, type L } from "@/lib/pricing-templates";

export type SectionDef = { id: string; label: L; locked?: boolean };

/** Sections inside the site. All included in the plan price. */
export const SECTIONS: Record<PlanId, SectionDef[]> = {
  landing: [
    { id: "inicio", label: { es: "Portada", en: "Hero" }, locked: true },
    { id: "servicios", label: { es: "Servicios", en: "Services" } },
    { id: "nosotros", label: { es: "Nosotros / equipo", en: "About / team" } },
    { id: "galeria", label: { es: "Galería / proyectos", en: "Gallery / projects" } },
    { id: "testimonios", label: { es: "Testimonios", en: "Testimonials" } },
    { id: "faq", label: { es: "Preguntas frecuentes", en: "FAQ" } },
    { id: "ubicacion", label: { es: "Ubicación y horario", en: "Location & hours" } },
    { id: "contacto", label: { es: "Contacto por WhatsApp", en: "WhatsApp contact" }, locked: true },
  ],
  shop: [
    { id: "inicio", label: { es: "Portada", en: "Home" }, locked: true },
    { id: "catalogo", label: { es: "Catálogo", en: "Catalog" }, locked: true },
    { id: "producto", label: { es: "Ficha de producto", en: "Product page" }, locked: true },
    { id: "bolsa", label: { es: "Bolsa", en: "Bag" }, locked: true },
    { id: "colecciones", label: { es: "Colecciones", en: "Collections" } },
    { id: "marca", label: { es: "Sobre la marca", en: "About the brand" } },
    { id: "envios", label: { es: "Envíos y devoluciones", en: "Shipping & returns" } },
    { id: "faq", label: { es: "Preguntas frecuentes", en: "FAQ" } },
  ],
};

export const DEFAULT_SECTIONS: Record<PlanId, string[]> = {
  landing: ["servicios", "nosotros", "galeria", "ubicacion"],
  shop: ["colecciones", "envios"],
};

export const TONES = ["original", "dark"] as const;
export type Tone = (typeof TONES)[number];

export type Palette = { id: string; label: L; swatch: string[] };

/** Palette is a preference for the real build; it costs nothing. */
export const PALETTES: Palette[] = [
  { id: "plantilla", label: { es: "De la plantilla", en: "Template's own" }, swatch: [] },
  { id: "atlantico", label: { es: "Atlántico", en: "Atlantic" }, swatch: ["#0B1F4D", "#1E4FD7", "#E8EEFB"] },
  { id: "caribe", label: { es: "Caribe", en: "Caribbean" }, swatch: ["#0D3B3A", "#0F8B7E", "#E3F4F1"] },
  { id: "tierra", label: { es: "Tierra", en: "Earth" }, swatch: ["#3A2416", "#B5652B", "#F4EBE1"] },
  { id: "mono", label: { es: "Monocromo", en: "Monochrome" }, swatch: ["#0B0D12", "#5C6470", "#F7F8FA"] },
];

export type Build = {
  plan: PlanId;
  tpl: string;
  tone: Tone;
  palette: string;
  sections: string[];
  addons: AddonId[];
  crmUsers: number;
  support: boolean;
};

export function defaultTemplate(plan: PlanId) {
  return templatesFor(plan)[0].id;
}

export function defaultBuild(plan: PlanId = "landing"): Build {
  return {
    plan,
    tpl: defaultTemplate(plan),
    tone: "original",
    palette: "plantilla",
    sections: [...DEFAULT_SECTIONS[plan]],
    addons: [],
    crmUsers: 1,
    support: false,
  };
}

function optionalSectionIds(plan: PlanId) {
  return SECTIONS[plan].filter((s) => !s.locked).map((s) => s.id);
}

/** Make any (possibly hand-edited) build valid for its plan. */
export function normalizeBuild(raw: Partial<Build>): Build {
  const plan: PlanId = isPlanId(raw.plan) ? raw.plan : "landing";
  const base = defaultBuild(plan);
  const tpls = templatesFor(plan).map((t) => t.id);
  const allowed = optionalSectionIds(plan);
  const sections = Array.isArray(raw.sections)
    ? allowed.filter((id) => raw.sections!.includes(id))
    : base.sections;
  const addons = Array.isArray(raw.addons)
    ? sanitizeAddons(plan, raw.addons.filter(isAddonId)).kept
    : [];
  return {
    plan,
    tpl: typeof raw.tpl === "string" && tpls.includes(raw.tpl) ? raw.tpl : base.tpl,
    tone: (TONES as readonly string[]).includes(raw.tone as string) ? (raw.tone as Tone) : "original",
    palette: PALETTES.some((p) => p.id === raw.palette) ? (raw.palette as string) : "plantilla",
    sections,
    addons,
    crmUsers: clampUsers(raw.crmUsers ?? 1),
    support: raw.support === true,
  };
}

export function buildToQuery(b: Build) {
  const p = new URLSearchParams();
  p.set("plan", b.plan);
  p.set("tpl", b.tpl);
  if (b.tone !== "original") p.set("tone", b.tone);
  if (b.palette !== "plantilla") p.set("pal", b.palette);
  p.set("sec", b.sections.join(",") || "-");
  if (b.addons.length) p.set("add", b.addons.join(","));
  if (b.addons.includes("crm") && b.crmUsers > 1) p.set("u", String(b.crmUsers));
  if (b.support) p.set("sup", "1");
  return p.toString().replace(/%2C/g, ",");
}

export function buildFromQuery(search: string): Build | null {
  const p = new URLSearchParams(search);
  if (!p.has("plan")) return null;
  const list = (k: string) => (p.get(k) ?? "").split(",").map((s) => s.trim()).filter((s) => s && s !== "-");
  return normalizeBuild({
    plan: p.get("plan") as PlanId,
    tpl: p.get("tpl") ?? undefined,
    tone: (p.get("tone") ?? "original") as Tone,
    palette: p.get("pal") ?? "plantilla",
    sections: p.has("sec") ? list("sec") : undefined,
    addons: list("add").filter((x): x is AddonId => (ADDON_IDS as readonly string[]).includes(x)),
    crmUsers: Number(p.get("u") ?? 1),
    support: p.get("sup") === "1",
  });
}

export const STORAGE_KEY = "nativa_pricing_build_v1";
