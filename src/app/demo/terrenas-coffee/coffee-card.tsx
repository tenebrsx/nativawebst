"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BASE, bagDop, bagUsd, money, type Coffee } from "./data";
import { useOrder } from "./context";

export default function CoffeeCard({ c, i = 0 }: { c: Coffee; i?: number }) {
  const { currency, kg } = useOrder();
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`${BASE}/tienda/${c.slug}`} className="ct-card">
        <div className="ct-card-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.hero} alt={c.name} />
        </div>
        <h3>{c.name}</h3>
        <div className="meta">
          {c.process} · {c.notes}
        </div>
        <div className="rate">{money(bagUsd(c, kg), bagDop(c, kg), currency)}</div>
      </Link>
    </motion.div>
  );
}
