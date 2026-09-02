import { dop, patientWaUrl, type Treatment } from "./data";

export default function TreatCard({ t }: { t: Treatment }) {
  return (
    <article className="sdq-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={t.img} alt="" />
      <div className="sdq-card-body">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" }}>
          <span className="sdq-tag">{t.tag}</span>
          <span className="sdq-price">
            {dop(t.dop)}
            {t.unit ?? ""}
          </span>
        </div>
        <h3>{t.title}</h3>
        <p>{t.desc}</p>
        <a
          className="sdq-btn sdq-btn-ghost"
          href={patientWaUrl(t.title)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "auto", width: "100%" }}
        >
          Pedir por WhatsApp
        </a>
      </div>
    </article>
  );
}
