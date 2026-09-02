import { CLINIC, IMG, patientWaUrl } from "../data";

const VISIT = [
  {
    n: "01",
    t: "Escribes el tratamiento",
    d: "Limpieza, carillas, implante. El chat ya trae el servicio. Si vienes de afuera, pide USD.",
  },
  {
    n: "02",
    t: "Confirmamos cupo",
    d: "En menos de un día hábil: hora, especialista, y si aplica cobertura ARS.",
  },
  {
    n: "03",
    t: "Llegas a Naco",
    d: "Calle Manuel de Jesús Troncoso #14. 15 minutos de evaluación. Plan por escrito en WhatsApp.",
  },
  {
    n: "04",
    t: "Vuelves con fecha",
    d: "El control y la siguiente cita quedan en el mismo hilo. Sin llamar al conmutador.",
  },
];

export default function ClinicaPage() {
  return (
    <>
      <section className="sdq-page-hero">
        <div className="sdq-wrap">
          <div className="sdq-kicker">Ensanche Naco</div>
          <h1 style={{ margin: "10px 0 12px", fontSize: "clamp(2.1rem, 4vw, 3.2rem)" }}>
            La clínica es pequeña a propósito.
          </h1>
          <p className="sdq-lede">
            Un consultorio con luz, no un piso de 12 sillones. Te atienden por nombre. El Maps apunta aquí.
          </p>
        </div>
      </section>

      <section className="sdq-section" style={{ paddingTop: 20 }}>
        <div className="sdq-wrap sdq-gallery">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/exterior.jpg`} alt="Fachada en Naco" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/reception.jpg`} alt="Recepción" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/hero-operatory.jpg`} alt="Sillón" />
        </div>
      </section>

      <section className="sdq-section sdq-band">
        <div className="sdq-wrap">
          <div className="sdq-section-head">
            <div className="sdq-kicker">Primera visita</div>
            <h2 style={{ marginTop: 8 }}>Cuatro pasos. Ninguno es un formulario de 12 campos.</h2>
          </div>
          <div className="sdq-visit">
            {VISIT.map((s) => (
              <article className="sdq-step" key={s.n}>
                <em>{s.n}</em>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sdq-section">
        <div className="sdq-wrap sdq-split">
          <div>
            <div className="sdq-kicker">Práctico</div>
            <h2 style={{ margin: "8px 0 14px" }}>Cómo llegar, cuándo, y con qué seguro.</h2>
            <ul className="sdq-hours">
              {CLINIC.hours.map((h) => (
                <li key={h.d}>
                  <span>{h.d}</span>
                  <b>{h.h}</b>
                </li>
              ))}
            </ul>
            <p className="sdq-lede" style={{ maxWidth: "none" }}>
              Estacionamiento en la cuadra. Uber / Didi: “Troncoso, Naco”. ARS Humano, Palic, Universal — confirmamos cobertura en el chat antes de la cita. Turismo médico: precios también en USD.
            </p>
            <div className="sdq-hero-actions">
              <a className="sdq-btn sdq-btn-teal" href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                Abrir Maps
              </a>
              <a className="sdq-btn sdq-btn-wa" href={patientWaUrl()} target="_blank" rel="noopener noreferrer">
                Preguntar por WhatsApp
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/consult.jpg`} alt="Consultorio" style={{ width: "100%", height: 360, objectFit: "cover", borderRadius: 22 }} />
        </div>
      </section>
    </>
  );
}
