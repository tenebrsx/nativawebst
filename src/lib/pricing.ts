/**
 * Single source of truth for Nativa's prices.
 *
 * Both the homepage "Arma tu propio sitio web" studio (pricing-builder.tsx)
 * and the full configurator page (/pricing-builder) read from here, so they
 * can never disagree. Every amount is resolved to a whole number in the
 * currency being shown, and totals are the sum of those visible amounts.
 */

export type Currency = "DOP" | "USD";

/** 1 USD = 60 DOP. Kept in sync with GeoProvider's `rate`. */
export const DEFAULT_RATE = 60;

/**
 * A price is defined in DOP, in USD, or both. When only one side is defined
 * the other is converted with the exchange rate and rounded to a whole unit.
 */
export type Price = { dop?: number; usd?: number };

export const PLAN_IDS = ["landing", "shop"] as const;
export type PlanId = (typeof PLAN_IDS)[number];

export const ADDON_IDS = ["seo", "brand", "bilingual", "shopify", "crm", "ai"] as const;
export type AddonId = (typeof ADDON_IDS)[number];

export type AddonDef = {
  /** One-time cost (build / setup). */
  oneTime?: Price;
  /** Recurring monthly cost. */
  monthly?: Price;
  /** Monthly cost is per CRM user. */
  perUser?: boolean;
  /** Price is a "desde" (starting at) figure. */
  from?: boolean;
};

export type PlanDef = {
  price: Price;
  /** Add-ons offered with this plan, in display order. */
  addons: AddonId[];
};

export const PLANS: Record<PlanId, PlanDef> = {
  /** Esencial — landing page. A USD floor: US$ 349. */
  landing: { price: { usd: 349 }, addons: ["seo", "brand", "bilingual", "crm", "ai"] },
  /** Tienda online — RD$ 35,000 in DOP, US$ 549 in USD. */
  shop: { price: { usd: 549, dop: 35_000 }, addons: ["shopify", "brand", "bilingual", "seo"] },
};

export const ADDONS: Record<AddonId, AddonDef> = {
  seo: { oneTime: { dop: 5_000 } },
  brand: { oneTime: { dop: 5_000 } },
  bilingual: { oneTime: { dop: 3_000 } },
  shopify: { oneTime: { dop: 4_000 } },
  crm: { oneTime: { dop: 10_000 }, monthly: { dop: 2_000 }, perUser: true, from: true },
  ai: { monthly: { dop: 4_000 }, from: true },
};

export const SUPPORT: { monthly: Price } = { monthly: { dop: 3_000 } };

export const CRM_USERS_MIN = 1;
export const CRM_USERS_MAX = 10;

export function isPlanId(v: unknown): v is PlanId {
  return typeof v === "string" && (PLAN_IDS as readonly string[]).includes(v);
}

export function isAddonId(v: unknown): v is AddonId {
  return typeof v === "string" && (ADDON_IDS as readonly string[]).includes(v);
}

export function addonsFor(plan: PlanId): AddonId[] {
  return PLANS[plan].addons;
}

export function offers(plan: PlanId, id: AddonId) {
  return PLANS[plan].addons.includes(id);
}

export function isMonthlyOnly(id: AddonId) {
  const a = ADDONS[id];
  return !!a.monthly && !a.oneTime;
}

/** Resolve a price to a whole number in `currency`. */
export function priceIn(p: Price | undefined, currency: Currency, rate = DEFAULT_RATE): number {
  if (!p) return 0;
  if (currency === "DOP") {
    if (p.dop !== undefined) return Math.round(p.dop);
    return Math.round((p.usd ?? 0) * rate);
  }
  if (p.usd !== undefined) return Math.round(p.usd);
  return Math.round((p.dop ?? 0) / rate);
}

export function planPrice(plan: PlanId, currency: Currency, rate = DEFAULT_RATE) {
  return priceIn(PLANS[plan].price, currency, rate);
}

export function addonOneTime(id: AddonId, currency: Currency, rate = DEFAULT_RATE) {
  return priceIn(ADDONS[id].oneTime, currency, rate);
}

/** Monthly cost for one unit (one CRM user). */
export function addonMonthlyUnit(id: AddonId, currency: Currency, rate = DEFAULT_RATE) {
  return priceIn(ADDONS[id].monthly, currency, rate);
}

export function supportMonthly(currency: Currency, rate = DEFAULT_RATE) {
  return priceIn(SUPPORT.monthly, currency, rate);
}

/** "RD$ 20,940" / "US$ 349". Whole units with thousands separators. */
export function formatMoney(n: number, currency: Currency) {
  const v = Math.round(n).toLocaleString("en-US");
  return currency === "DOP" ? `RD$ ${v}` : `US$ ${v}`;
}

/** Drop add-ons the plan does not offer. Returns kept + removed, order preserved. */
export function sanitizeAddons(plan: PlanId, addons: Iterable<AddonId>) {
  const kept: AddonId[] = [];
  const removed: AddonId[] = [];
  const seen = new Set<AddonId>();
  for (const id of addons) {
    if (seen.has(id)) continue;
    seen.add(id);
    if (offers(plan, id)) kept.push(id);
    else removed.push(id);
  }
  // Keep the plan's display order.
  kept.sort((a, b) => PLANS[plan].addons.indexOf(a) - PLANS[plan].addons.indexOf(b));
  return { kept, removed };
}

export type QuoteInput = {
  plan: PlanId;
  addons: Iterable<AddonId>;
  support: boolean;
  crmUsers?: number;
};

export type QuoteLine = {
  id: "plan" | AddonId | "support";
  kind: "plan" | "addon" | "support";
  oneTime: number;
  monthly: number;
  /** For per-user add-ons: number of users and the unit monthly price. */
  units?: number;
  unitMonthly?: number;
  from?: boolean;
};

export type Quote = {
  currency: Currency;
  lines: QuoteLine[];
  oneTime: number;
  monthly: number;
  /** Monthly add-ons only (CRM + AI), excluding support. */
  monthlyAddons: number;
  supportMonthly: number;
};

export function clampUsers(n: unknown) {
  const v = Math.round(Number(n));
  if (!Number.isFinite(v)) return CRM_USERS_MIN;
  return Math.min(CRM_USERS_MAX, Math.max(CRM_USERS_MIN, v));
}

/**
 * Build the quote. Only add-ons the plan offers are counted, each one once.
 * Totals are the sum of the visible, already-rounded line items.
 */
export function quote(input: QuoteInput, currency: Currency, rate = DEFAULT_RATE): Quote {
  const { kept } = sanitizeAddons(input.plan, input.addons);
  const users = clampUsers(input.crmUsers ?? 1);
  const lines: QuoteLine[] = [
    { id: "plan", kind: "plan", oneTime: planPrice(input.plan, currency, rate), monthly: 0 },
  ];
  for (const id of kept) {
    const def = ADDONS[id];
    const unitMonthly = addonMonthlyUnit(id, currency, rate);
    const units = def.perUser ? users : 1;
    lines.push({
      id,
      kind: "addon",
      oneTime: addonOneTime(id, currency, rate),
      monthly: unitMonthly * units,
      units: def.perUser ? users : undefined,
      unitMonthly: def.perUser ? unitMonthly : undefined,
      from: def.from,
    });
  }
  const sup = input.support ? supportMonthly(currency, rate) : 0;
  if (input.support) {
    lines.push({ id: "support", kind: "support", oneTime: 0, monthly: sup });
  }
  const oneTime = lines.reduce((s, l) => s + l.oneTime, 0);
  const monthly = lines.reduce((s, l) => s + l.monthly, 0);
  return { currency, lines, oneTime, monthly, monthlyAddons: monthly - sup, supportMonthly: sup };
}
