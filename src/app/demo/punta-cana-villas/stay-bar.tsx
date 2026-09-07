"use client";

import Link from "next/link";
import { BASE } from "./data";
import { useStay } from "./context";

export default function StayBar({ ctaHref, ctaLabel, flush }: { ctaHref?: string; ctaLabel?: string; flush?: boolean }) {
  const stay = useStay();
  return (
    <div className={flush ? "pcv-stay is-flush" : "pcv-stay"}>
      <div className="pcv-wrap">
        <div className="pcv-stay-card">
          <div className="pcv-field">
            <label htmlFor="pcv-in">Llegada</label>
            <input
              id="pcv-in"
              type="date"
              value={stay.checkIn}
              onChange={(e) => stay.setCheckIn(e.target.value)}
            />
          </div>
          <div className="pcv-field">
            <label htmlFor="pcv-out">Salida</label>
            <input
              id="pcv-out"
              type="date"
              value={stay.checkOut}
              onChange={(e) => stay.setCheckOut(e.target.value)}
            />
          </div>
          <div className="pcv-field">
            <label htmlFor="pcv-g">Huéspedes</label>
            <select
              id="pcv-g"
              value={stay.guests}
              onChange={(e) => stay.setGuests(Number(e.target.value))}
            >
              {[2, 4, 6, 8, 10, 12].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <Link href={ctaHref ?? `${BASE}/villas`} className="pcv-btn pcv-btn-night">
            {ctaLabel ?? "Ver villas"}
          </Link>
        </div>
      </div>
    </div>
  );
}
