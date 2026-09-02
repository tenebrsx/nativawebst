"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BASE, fmtM2, type Obra } from "./data";

export default function ObraCard({ o, i = 0 }: { o: Obra; i?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`${BASE}/obras/${o.slug}`} className="ca-card">
        <div className="ca-card-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={o.hero} alt={o.name} />
        </div>
        <h3>{o.name}</h3>
        <div className="meta">
          {o.zona} · {o.year}
        </div>
        <div className="rate">
          {o.niveles} niveles · {fmtM2(o.m2)} m²
        </div>
      </Link>
    </motion.div>
  );
}
