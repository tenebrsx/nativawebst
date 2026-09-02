import { DOCTORS, HYGIENIST, patientWaUrl } from "../data";

export default function EquipoPage() {
  return (
    <>
      <section className="sdq-page-hero">
        <div className="sdq-wrap">
          <div className="sdq-kicker">Especialistas</div>
          <h1 style={{ margin: "10px 0 12px", fontSize: "clamp(2.1rem, 4vw, 3.2rem)" }}>
            El chat llega al sillón, no a un call center.
          </h1>
          <p className="sdq-lede">
            Tres especialistas y una higienista. UNIBE, PUCMM, NYU. El plan se escribe en WhatsApp después de la consulta.
          </p>
        </div>
      </section>
      <section className="sdq-section" style={{ paddingTop: 28 }}>
        <div className="sdq-wrap sdq-team">
          {DOCTORS.map((d) => (
            <article className="sdq-doc" key={d.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.img} alt={d.name} />
              <h3>{d.name}</h3>
              <div className="spec">{d.spec}</div>
              <div className="cred">{d.cred}</div>
              <p>{d.bio}</p>
            </article>
          ))}
        </div>
        <div className="sdq-wrap" style={{ marginTop: 36 }}>
          <article className="sdq-hygiene">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HYGIENIST.img} alt={HYGIENIST.name} />
            <div className="sdq-card-body" style={{ padding: 28, justifyContent: "center" }}>
              <span className="sdq-tag">Higiene</span>
              <h2 style={{ marginTop: 8 }}>{HYGIENIST.name}</h2>
              <div className="spec" style={{ color: "var(--sdq-teal)", fontWeight: 700, marginTop: 6 }}>
                {HYGIENIST.spec}
              </div>
              <p>{HYGIENIST.cred}. Limpiezas, control de placa y el control de los 6 meses — agendado en el mismo hilo.</p>
              <a className="sdq-btn sdq-btn-wa" href={patientWaUrl("limpieza ultrasónica")} target="_blank" rel="noopener noreferrer" style={{ marginTop: 12, width: "fit-content" }}>
                Pedir limpieza
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
