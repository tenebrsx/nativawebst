import Link from "next/link";
import {
  BASE,
  CASES,
  CLINIC,
  DOCTORS,
  IMG,
  REVIEWS,
  TREATMENTS,
  dop,
  patientWaUrl,
} from "./data";
import TreatCard from "./treat-card";

export default function SdqDentalHome() {
  const featured = TREATMENTS.filter((t) => t.featured);

  return (
    <>
      <section className="sdq-hero">
        <div className="sdq-wrap sdq-hero-grid">
          <div>
            <div className="sdq-kicker">
              <i />
              {CLINIC.kicker}
            </div>
            <h1 style={{ margin: "14px 0 16px" }}>
              Citas hoy.
              <span>El tratamiento ya va en el chat.</span>
            </h1>
            <p className="sdq-lede">
              Te encuentran en Maps, tocan, y te llega un WhatsApp con la limpieza, las carillas o el implante. Contestas desde el sillón — no en Instagram a las 11pm.
            </p>
            <div className="sdq-hero-actions">
              <Link href={`${BASE}/citas`} className="sdq-btn sdq-btn-teal">
                Agendar evaluación
              </Link>
              <a
                className="sdq-btn sdq-btn-wa"
                href={patientWaUrl("limpieza + carillas")}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp · cupo esta semana
              </a>
            </div>
            <div className="sdq-stats">
              <div>
                <b>{CLINIC.rating} ★</b>
                <span>{CLINIC.reviews} reseñas en Google</span>
              </div>
              <div>
                <b>Naco</b>
                <span>18 min desde Piantini</span>
              </div>
              <div>
                <b>24 h</b>
                <span>Confirmación por WhatsApp</span>
              </div>
            </div>
          </div>
          <div className="sdq-hero-shot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/hero-operatory.jpg`} alt="Consultorio de SDQ Dental Care en Naco" />
            <aside className="sdq-ping">
              <small>Paciente</small>
              <p>Hola, vi limpieza + carillas en la web. ¿Tienen cupo esta semana?</p>
            </aside>
          </div>
        </div>
        <div className="sdq-wrap sdq-chips" aria-label="Tratamientos rápidos">
          {featured.map((t) => (
            <a key={t.id} className="sdq-chip" href={patientWaUrl(t.title)} target="_blank" rel="noopener noreferrer">
              {t.title} · {dop(t.dop)}
            </a>
          ))}
        </div>
      </section>

      <section className="sdq-section sdq-band">
        <div className="sdq-wrap">
          <div className="sdq-section-head">
            <div className="sdq-kicker">Cómo llega el lead</div>
            <h2 style={{ marginTop: 8 }}>Maps. Un toque. WhatsApp con el servicio.</h2>
            <p>La web no es un folleto. Es la puerta. El cierre es el chat.</p>
          </div>
          <div className="sdq-steps">
            <article className="sdq-step">
              <em>01</em>
              <h3>Te encuentran</h3>
              <p>Ficha de Maps, horario y foto de la clínica en Naco. El paciente ya sabe dónde ir.</p>
            </article>
            <article className="sdq-step">
              <em>02</em>
              <h3>Tocan un tratamiento</h3>
              <p>Limpieza, carillas, implante: el precio está a la vista. El botón abre WhatsApp con ese nombre.</p>
            </article>
            <article className="sdq-step">
              <em>03</em>
              <h3>Escribes desde el sillón</h3>
              <p>No es un formulario en el correo. Es un chat con el servicio ya escrito.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sdq-section">
        <div className="sdq-wrap">
          <div className="sdq-section-head">
            <div className="sdq-kicker">Tratamientos</div>
            <h2 style={{ marginTop: 8 }}>El precio sale en DOP. El chat cierra la fecha.</h2>
            <p>Seis puertas de entrada. El catálogo completo está en tratamientos.</p>
          </div>
          <div className="sdq-cards">
            {featured.map((t) => (
              <TreatCard key={t.id} t={t} />
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href={`${BASE}/tratamientos`} className="sdq-btn sdq-btn-ghost">
              Ver todos los tratamientos
            </Link>
          </div>
        </div>
      </section>

      <section className="sdq-section sdq-band">
        <div className="sdq-wrap sdq-split">
          <div className="sdq-photo-grid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/reception.jpg`} alt="Recepción de SDQ Dental Care" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/consult.jpg`} alt="Sala de consulta" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/smile.jpg`} alt="Paciente después de blanqueamiento" />
          </div>
          <div>
            <div className="sdq-kicker">La clínica</div>
            <h2 style={{ margin: "10px 0 14px" }}>Un consultorio de barrio, no una franquicia.</h2>
            <p className="sdq-lede" style={{ maxWidth: "none" }}>
              Luz de tarde, sillón sage, y un equipo que contesta el chat. En Naco, a 18 minutos de Piantini. Estacionamiento en la cuadra. ARS Humano, Palic y Universal: confirmamos cobertura por WhatsApp antes de que llegues.
            </p>
            <div className="sdq-hero-actions">
              <Link href={`${BASE}/clinica`} className="sdq-btn sdq-btn-teal">
                Cómo es la primera visita
              </Link>
              <a className="sdq-btn sdq-btn-ghost" href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                Abrir en Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sdq-section">
        <div className="sdq-wrap">
          <div className="sdq-section-head">
            <div className="sdq-kicker">Equipo</div>
            <h2 style={{ marginTop: 8 }}>Quién te atiende.</h2>
          </div>
          <div className="sdq-team">
            {DOCTORS.map((d) => (
              <article className="sdq-doc" key={d.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.img} alt={d.name} />
                <h3>{d.name}</h3>
                <div className="spec">{d.spec}</div>
                <div className="cred">{d.cred}</div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href={`${BASE}/equipo`} className="sdq-btn sdq-btn-ghost">
              Bios y credenciales
            </Link>
          </div>
        </div>
      </section>

      <section className="sdq-section sdq-band">
        <div className="sdq-wrap">
          <div className="sdq-section-head">
            <div className="sdq-kicker">Casos</div>
            <h2 style={{ marginTop: 8 }}>Antes y después, del mismo paciente.</h2>
          </div>
          <article className="sdq-case">
            <div className="sdq-case-shots">
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={CASES[0].before} alt="Antes de carillas" />
                <figcaption>Antes</figcaption>
              </figure>
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={CASES[0].after} alt="Después de carillas" />
                <figcaption>Después</figcaption>
              </figure>
            </div>
            <div className="sdq-case-meta">
              <div className="sdq-tag">{CASES[0].treatment}</div>
              <h3 style={{ marginTop: 10 }}>{CASES[0].title}</h3>
              <p style={{ color: "var(--sdq-muted)", margin: "8px 0 0" }}>{CASES[0].note}</p>
              <Link href={`${BASE}/casos`} className="sdq-btn sdq-btn-ghost" style={{ marginTop: 16 }}>
                Ver más casos
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="sdq-section">
        <div className="sdq-wrap">
          <div className="sdq-section-head">
            <div className="sdq-kicker">Pacientes</div>
            <h2 style={{ marginTop: 8 }}>Lo que llega después del chat.</h2>
          </div>
          <div className="sdq-reviews">
            {REVIEWS.map((r) => (
              <blockquote className="sdq-quote" key={r.name}>
                <div className="sdq-stars">★★★★★</div>
                <p>“{r.text}”</p>
                <b>{r.name}</b>
                <span>{r.role}</span>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="sdq-section sdq-band">
        <div className="sdq-wrap">
          <div className="sdq-map">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/exterior.jpg`} alt="Fachada de SDQ Dental Care en Naco" />
            <div className="sdq-map-copy">
              <div className="sdq-kicker">Naco</div>
              <h2 style={{ margin: "8px 0 10px" }}>{CLINIC.street}</h2>
              <p>
                {CLINIC.neighborhood}, {CLINIC.city}. La ficha de Maps abre este mismo WhatsApp.
              </p>
              <ul className="sdq-hours">
                {CLINIC.hours.map((h) => (
                  <li key={h.d}>
                    <span>{h.d}</span>
                    <b>{h.h}</b>
                  </li>
                ))}
              </ul>
              <div className="sdq-hero-actions">
                <a className="sdq-btn sdq-btn-teal" href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Cómo llegar
                </a>
                <a className="sdq-btn sdq-btn-wa" href={patientWaUrl()} target="_blank" rel="noopener noreferrer">
                  Escribir ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sdq-wrap sdq-cta-band">
        <div>
          <div className="sdq-kicker">Cupo esta semana</div>
          <h2 style={{ marginTop: 8 }}>Dile el tratamiento. Te confirmamos la hora.</h2>
        </div>
        <Link href={`${BASE}/citas`} className="sdq-btn sdq-btn-teal">
          Pedir cita
        </Link>
      </section>
    </>
  );
}
