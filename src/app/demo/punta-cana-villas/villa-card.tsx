"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BASE, money, type Villa } from "./data";
import { useStay } from "./context";

export default function VillaCard({ villa, index = 0 }: { villa: Villa; index?: number }) {
  const { currency } = useStay();
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`${BASE}/villas/${villa.slug}`} className="pcv-card">
        <div className="pcv-card-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={villa.hero} alt={villa.name} />
          <em>{villa.tag}</em>
        </div>
        <h3>{villa.name}</h3>
        <div className="meta">
          {villa.areaLabel} · {villa.guests} huéspedes · {villa.beds} recámaras
        </div>
        <div className="rate">
          {money(villa.nightUsd, currency)} <span style={{ fontWeight: 500, color: "var(--pcv-mute)" }}>/ noche</span>
        </div>
      </Link>
    </motion.div>
  );
}
