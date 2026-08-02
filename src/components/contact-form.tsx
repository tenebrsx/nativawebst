"use client";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useEffect } from "react";
import { useGeo } from "@/lib/geo-context";
import { translations } from "@/lib/translations";

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "New Website", budget: "$1,500–$3,000", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const { lang, currency } = useGeo();
  const dict = translations[lang].contact;

  useEffect(() => { setMounted(true); }, []);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await addDoc(collection(db, "leads"), { ...form, currency, countryLang: lang, submittedAt: serverTimestamp() });
    } catch {
      await new Promise(r => setTimeout(r, 600));
    }
    setStatus("done");
  };

  if (!mounted) return <div className="card" style={{ padding: "40px", height: "380px" }} />;

  if (status === "done") return (
    <div className="card" style={{ padding: "48px", textAlign: "center" }}>
      <div style={{
        width: "56px", height: "56px", background: "var(--coral-light)",
        borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 20px", color: "var(--coral-blue)"
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h4 style={{ fontFamily: "var(--font-head)", fontSize: "20px", marginBottom: "10px", color: "var(--navy-trench)" }}>
        {dict.success_title}
      </h4>
      <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7", maxWidth: "320px", margin: "0 auto 24px" }}>
        {dict.success_desc}
      </p>
      <button onClick={() => setStatus("idle")} style={{
        fontSize: "13px", color: "var(--coral-blue)", fontWeight: 600,
        background: "none", border: "none", cursor: "pointer",
      }}>
        {dict.success_btn}
      </button>
    </div>
  );

  return (
    <form onSubmit={submit} className="card" style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "18px" }}>
      <div>
        <div className="section-label">{dict.label}</div>
        <h3 style={{ fontFamily: "var(--font-head)", fontSize: "22px", fontWeight: 800, color: "var(--navy-trench)", margin: "0 0 4px" }}>
          {dict.form_title}
        </h3>
        <p style={{ fontSize: "13px", color: "var(--muted)" }}>
          {dict.form_sub}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
        <div>
          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, fontFamily: "var(--font-head)", marginBottom: "6px", color: "var(--navy-trench)" }}>
            {dict.lbl_name}
          </label>
          <input className="input" name="name" required value={form.name} onChange={handle} placeholder={dict.placeholder_name} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, fontFamily: "var(--font-head)", marginBottom: "6px", color: "var(--navy-trench)" }}>
            {dict.lbl_email}
          </label>
          <input className="input" type="email" name="email" required value={form.email} onChange={handle} placeholder="you@company.com" />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
        <div>
          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, fontFamily: "var(--font-head)", marginBottom: "6px", color: "var(--navy-trench)" }}>
            {dict.lbl_phone}
          </label>
          <input className="input" type="tel" name="phone" required value={form.phone} onChange={handle} placeholder="+1 (809) 000-0000" />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, fontFamily: "var(--font-head)", marginBottom: "6px", color: "var(--navy-trench)" }}>
            {dict.lbl_budget}
          </label>
          {currency === "DOP" ? (
            <select className="input" name="budget" value={form.budget} onChange={handle}>
              <option>Menos de RD$90,000</option>
              <option>RD$90,000–RD$180,000</option>
              <option>RD$180,000–RD$360,000</option>
              <option>Más de RD$360,000</option>
            </select>
          ) : (
            <select className="input" name="budget" value={form.budget} onChange={handle}>
              <option>Under $1,500</option>
              <option>$1,500–$3,000</option>
              <option>$3,000–$6,000</option>
              <option>Over $6,000</option>
            </select>
          )}
        </div>
      </div>

      <div>
        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, fontFamily: "var(--font-head)", marginBottom: "6px", color: "var(--navy-trench)" }}>
          {dict.lbl_message}
        </label>
        <textarea
          className="input"
          name="message"
          rows={3}
          value={form.message}
          onChange={handle}
          placeholder={dict.placeholder_message}
          style={{ resize: "none" }}
        />
      </div>

      <button type="submit" className="btn btn-navy" disabled={status === "loading"}
        style={{ width: "100%", padding: "16px", fontSize: "15px" }}>
        {status === "loading" ? dict.btn_submit_loading : dict.btn_submit_idle}
      </button>

      <p style={{ fontSize: "11px", color: "var(--gray-400)", textAlign: "center" }}>
        {dict.disclaimer.replace("🔒 ", "").replace("🔒", "")}
      </p>
    </form>
  );
}
