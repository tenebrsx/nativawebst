"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BASE, money, type Product } from "./data";
import { useCart } from "./context";

export default function ProductCard({ p, i = 0 }: { p: Product; i?: number }) {
  const { currency } = useCart();
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`${BASE}/tienda/${p.slug}`} className="bs-card">
        <div className="bs-card-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.hero} alt={p.name} />
          <em>{p.tag}</em>
        </div>
        <h3>{p.name}</h3>
        <div className="rate">{money(p.usd, p.dop, currency)}</div>
      </Link>
    </motion.div>
  );
}
