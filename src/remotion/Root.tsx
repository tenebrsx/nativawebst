import React from "react";
import { Composition } from "remotion";
import { AdSpeedComposition } from "./compositions/AdSpeedComposition";
import { AdMapsComposition } from "./compositions/AdMapsComposition";
import { AdWhatsAppComposition } from "./compositions/AdWhatsAppComposition";
import { AdSpeedSchema, AdMapsSchema, AdWhatsAppSchema } from "./types";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Ad 01: Speed & 48h Delivery */}
      <Composition
        id="AdSpeed-Story"
        component={AdSpeedComposition}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
        schema={AdSpeedSchema}
        defaultProps={{
          lang: "es",
          businessCity: "Santo Domingo",
          oldLoadTime: "5.2s",
          nativaLoadTime: "0.3s",
          headline: "¿Tu web tarda más de 3 segundos en cargar en celular?",
          subheadline:
            "En Santo Domingo, el 53% de los clientes abandonan antes de ver tu producto.",
          ctaText: "Lanza Tu Web en 48 Horas 🚀",
          deliveryBadge: "LANZAMIENTO EN 48 HORAS",
          whatsappPhone: "+1 (829) 000-0000",
        }}
      />
      <Composition
        id="AdSpeed-Feed"
        component={AdSpeedComposition}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1080}
        schema={AdSpeedSchema}
        defaultProps={{
          lang: "es",
          businessCity: "Santo Domingo",
          oldLoadTime: "5.2s",
          nativaLoadTime: "0.3s",
          headline: "¿Tu web tarda 5s en cargar en celular?",
          subheadline:
            "El 53% de clientes en Santo Domingo abandonan webs lentas.",
          ctaText: "Pedir cotización 💬",
          deliveryBadge: "LANZAMIENTO EN 48 HORAS",
          whatsappPhone: "+1 (829) 000-0000",
        }}
      />

      {/* Ad 02: Google Maps & Local SEO Dominance */}
      <Composition
        id="AdMaps-Story"
        component={AdMapsComposition}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
        schema={AdMapsSchema}
        defaultProps={{
          lang: "es",
          businessCity: "Santo Domingo, RD",
          businessName: "Tu Negocio Líder",
          headline: "¿Tu negocio aparece de #1 en Google Maps?",
          subheadline:
            "El 82% de las compras locales en Santo Domingo comienzan en el mapa de Google.",
          rating: "5.0 ★★★★★",
          reviewCount: "128 reseñas verificadas",
          ctaText: "Auditoría SEO Gratis 📍",
          whatsappPhone: "+1 (829) 000-0000",
        }}
      />
      <Composition
        id="AdMaps-Feed"
        component={AdMapsComposition}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1080}
        schema={AdMapsSchema}
        defaultProps={{
          lang: "es",
          businessCity: "Santo Domingo, RD",
          businessName: "Tu Negocio Líder",
          headline: "¿Apareces de #1 en Google Maps?",
          subheadline:
            "El 82% de compras locales empiezan en el mapa de Google.",
          rating: "5.0 ★★★★★",
          reviewCount: "128 reseñas",
          ctaText: "Auditoría SEO Gratis 📍",
          whatsappPhone: "+1 (829) 000-0000",
        }}
      />

      {/* Ad 03: Direct WhatsApp Sales Funnel */}
      <Composition
        id="AdWhatsApp-Story"
        component={AdWhatsAppComposition}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
        schema={AdWhatsAppSchema}
        defaultProps={{
          lang: "es",
          businessCity: "Santo Domingo",
          headline: "¿Tus visitas se van sin comprar o agendar?",
          subheadline:
            "En República Dominicana, los negocios que cierran ventas atienden directo en WhatsApp.",
          clientInquiry:
            "¿Tienen disponibilidad para crear una web rápida con botón a WhatsApp?",
          autoResponse:
            "¡Claro que sí! 🚀 Diseñamos y lanzamos tu web en 48h con carga en 0.3s.",
          ctaText: "Hablar por WhatsApp 💬",
          whatsappPhone: "+1 (829) 000-0000",
        }}
      />
      <Composition
        id="AdWhatsApp-Feed"
        component={AdWhatsAppComposition}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1080}
        schema={AdWhatsAppSchema}
        defaultProps={{
          lang: "es",
          businessCity: "Santo Domingo",
          headline: "¿Tus visitas se van sin comprar?",
          subheadline:
            "Cierra más ventas atendiendo directo en WhatsApp.",
          clientInquiry:
            "¿Cuánto cuesta una web rápida para mi negocio?",
          autoResponse:
            "¡Hola! Tu plataforma queda lista en 48h con carga en 0.3s 🚀",
          ctaText: "Hablar por WhatsApp 💬",
          whatsappPhone: "+1 (829) 000-0000",
        }}
      />
    </>
  );
};
