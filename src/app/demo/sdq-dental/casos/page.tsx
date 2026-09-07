import { CASES, patientWaUrl } from "../data";

export default function CasosPage() {
  return (
    <>
      <section className="sdq-page-hero">
        <div className="sdq-wrap">
          <div className="sdq-kicker">Resultados</div>
          <h1 style={{ margin: "10px 0 12px", fontSize: "clamp(2.1rem, 4vw, 3.2rem)" }}>
            El mismo rostro. El tratamiento en el medio.
          </h1>
          <p className="sdq-lede">
            Casos de la clínica — prototipo de cómo se muestran carillas y blanqueamiento cuando el paciente ya llegó por WhatsApp.
          </p>
        </div>
      </section>
      <section className="sdq-section" style={{ paddingTop: 20 }}>
        <div className="sdq-wrap sdq-cases">
          {CASES.map((c) => (
            <article className="sdq-case" key={c.id}>
              <div className="sdq-case-shots">
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.before} alt={`${c.title} antes`} />
                  <figcaption>Antes</figcaption>
                </figure>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.after} alt={`${c.title} después`} />
                  <figcaption>Después</figcaption>
                </figure>
              </div>
              <div className="sdq-case-meta">
                <span className="sdq-tag">{c.treatment}</span>
                <h2 style={{ marginTop: 10 }}>{c.title}</h2>
                <p style={{ color: "var(--sdq-muted)", margin: "8px 0 0" }}>
                  {c.patient}. {c.note}
                </p>
                <a
                  className="sdq-btn sdq-btn-wa"
                  href={patientWaUrl(c.treatment)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: 16 }}
                >
                  Quiero este tratamiento
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
