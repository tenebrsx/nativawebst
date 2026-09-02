import { z } from "zod";

export type VideoFormat = "story" | "feed";

export const AdSpeedSchema = z.object({
  lang: z.enum(["es", "en"]).default("es").optional(),
  businessCity: z.string().default("Santo Domingo").optional(),
  oldLoadTime: z.string().default("5.2s").optional(),
  nativaLoadTime: z.string().default("0.3s").optional(),
  headline: z.string().optional(),
  subheadline: z.string().optional(),
  ctaText: z.string().optional(),
  deliveryBadge: z.string().optional(),
  whatsappPhone: z.string().default("+1 (829) 000-0000").optional(),
});

export type AdSpeedProps = z.infer<typeof AdSpeedSchema>;

export const AdMapsSchema = z.object({
  lang: z.enum(["es", "en"]).default("es").optional(),
  businessCity: z.string().default("Santo Domingo, RD").optional(),
  businessName: z.string().default("Tu Negocio Líder").optional(),
  headline: z.string().optional(),
  subheadline: z.string().optional(),
  rating: z.string().default("5.0 ★★★★★").optional(),
  reviewCount: z.string().default("128 reseñas verificadas").optional(),
  ctaText: z.string().optional(),
  whatsappPhone: z.string().default("+1 (829) 000-0000").optional(),
});

export type AdMapsProps = z.infer<typeof AdMapsSchema>;

export const AdWhatsAppSchema = z.object({
  lang: z.enum(["es", "en"]).default("es").optional(),
  businessCity: z.string().default("Santo Domingo").optional(),
  headline: z.string().optional(),
  subheadline: z.string().optional(),
  clientInquiry: z.string().optional(),
  autoResponse: z.string().optional(),
  ctaText: z.string().optional(),
  whatsappPhone: z.string().default("+1 (829) 000-0000").optional(),
});

export type AdWhatsAppProps = z.infer<typeof AdWhatsAppSchema>;
