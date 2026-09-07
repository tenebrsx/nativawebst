"use client";

import { motion, useReducedMotion } from "framer-motion";
import { IMG } from "./data";
import { FadeIn } from "./reveal";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="pcv-hero">
      <div className="pcv-hero-media">
        <motion.img
          src={`${IMG}/hero.jpg`}
          alt="Infinity pool de Villa Marina al atardecer en Cap Cana"
          initial={reduce ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: "linear" }}
        />
      </div>
      <div className="pcv-hero-copy">
        <FadeIn>
          <div className="pcv-kicker">
            <i />
            Cap Cana · Marina · Caletón
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <h1>
            La villa. Las fechas. <em>El chat.</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.22}>
          <p className="pcv-lede" style={{ color: "rgba(247,243,235,0.82)", maxWidth: "36ch" }}>
            USD o DOP en la ficha. WhatsApp solo para el recorrido. El hold llega con la villa y las noches ya escritas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
