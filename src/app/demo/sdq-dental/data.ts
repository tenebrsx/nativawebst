import { waUrl } from "@/lib/whatsapp";

export const IMG = "/demo/sdq-dental";
export const BASE = "/demo/sdq-dental";

export const CLINIC = {
  name: "SDQ Dental Care",
  kicker: "Clínica odontológica · Ensanche Naco",
  street: "Calle Manuel de Jesús Troncoso #14",
  neighborhood: "Ensanche Naco",
  city: "Santo Domingo",
  phoneDisplay: "(809) 555-0192",
  phoneTel: "+18095550192",
  email: "citas@sdqdental.do",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calle+Manuel+de+Jesus+Troncoso+Naco+Santo+Domingo",
  rating: "4.9",
  reviews: "350+",
  hours: [
    { d: "Lunes–Viernes", h: "8:00 – 18:00" },
    { d: "Sábado", h: "9:00 – 14:00" },
    { d: "Domingo", h: "Cerrado" },
  ],
} as const;

export type TreatmentCat = "preventivo" | "estetica" | "implantes" | "familia";

export type Treatment = {
  id: string;
  cat: TreatmentCat;
  title: string;
  desc: string;
  tag: string;
  dop: number;
  usd: number;
  unit?: string;
  featured?: boolean;
  img: string;
};

export const TREATMENTS: Treatment[] = [
  {
    id: "limpieza",
    cat: "preventivo",
    title: "Limpieza ultrasónica",
    desc: "Profilaxis, examen y plan. El mensaje llega con el tratamiento, no un “info pls”.",
    tag: "Preventivo",
    dop: 2500,
    usd: 42,
    featured: true,
    img: `${IMG}/instruments.jpg`,
  },
  {
    id: "examen",
    cat: "preventivo",
    title: "Examen + radiografía",
    desc: "Diagnóstico digital en la primera visita. Sales con un plan, no con un PDF genérico.",
    tag: "Diagnóstico",
    dop: 1800,
    usd: 30,
    img: `${IMG}/imaging.jpg`,
  },
  {
    id: "resina",
    cat: "preventivo",
    title: "Resina / empaste",
    desc: "Restauración del color del diente, una sesión. Trae el diente en el chat.",
    tag: "Restauración",
    dop: 3200,
    usd: 54,
    img: `${IMG}/instruments.jpg`,
  },
  {
    id: "endodoncia",
    cat: "preventivo",
    title: "Endodoncia",
    desc: "Conducto en una sesión, con protocolo de sedación si lo pides.",
    tag: "Especializado",
    dop: 12000,
    usd: 200,
    featured: true,
    img: `${IMG}/hero-operatory.jpg`,
  },
  {
    id: "carillas",
    cat: "estetica",
    title: "Carillas de porcelana",
    desc: "Diseño de sonrisa. Cotizamos por diente. WhatsApp ya trae cuántas.",
    tag: "Estética",
    dop: 18000,
    usd: 300,
    unit: "/diente",
    featured: true,
    img: `${IMG}/smile.jpg`,
  },
  {
    id: "blanqueamiento",
    cat: "estetica",
    title: "Blanqueamiento LED",
    desc: "Hasta 4 tonos en 45 minutos. Sin sensibilidad de “kit de farmacia”.",
    tag: "Brillo",
    dop: 7500,
    usd: 125,
    featured: true,
    img: `${IMG}/case-whitening-after.jpg`,
  },
  {
    id: "alineadores",
    cat: "estetica",
    title: "Alineadores invisibles",
    desc: "Corrección discreta. Evaluación y simulación en consulta.",
    tag: "Ortodoncia",
    dop: 35000,
    usd: 580,
    img: `${IMG}/consult.jpg`,
  },
  {
    id: "implante",
    cat: "implantes",
    title: "Implante + corona",
    desc: "Raíz de titanio y corona. El chat pide zona y si falta hueso.",
    tag: "Implantes",
    dop: 28000,
    usd: 465,
    featured: true,
    img: `${IMG}/hero-operatory.jpg`,
  },
  {
    id: "cordales",
    cat: "implantes",
    title: "Extracción de cordales",
    desc: "Quirúrgica guiada. Sedación consciente disponible.",
    tag: "Cirugía",
    dop: 6500,
    usd: 108,
    img: `${IMG}/imaging.jpg`,
  },
  {
    id: "periodoncia",
    cat: "implantes",
    title: "Periodoncia",
    desc: "Encías y hueso. Plan por cuadrantes, seguimiento en el chat.",
    tag: "Encías",
    dop: 8500,
    usd: 142,
    img: `${IMG}/instruments.jpg`,
  },
  {
    id: "ninos",
    cat: "familia",
    title: "Odontopediatría",
    desc: "Primera visita sin prisa. El adulto escribe; el niño no espera un formulario.",
    tag: "Familia",
    dop: 3000,
    usd: 50,
    featured: true,
    img: `${IMG}/kids-nook.jpg`,
  },
  {
    id: "bruxismo",
    cat: "familia",
    title: "Férula para bruxismo",
    desc: "Placa nocturna a medida. Protege esmalte y articulación.",
    tag: "Bienestar",
    dop: 11000,
    usd: 183,
    img: `${IMG}/consult.jpg`,
  },
];

export const CATS: { id: TreatmentCat | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "preventivo", label: "Preventivo" },
  { id: "estetica", label: "Estética" },
  { id: "implantes", label: "Implantes" },
  { id: "familia", label: "Familia" },
];

export const DOCTORS = [
  {
    name: "Dr. Rafael Mendoza",
    spec: "Rehabilitación oral e implantes",
    cred: "UNIBE · NYU · 14 años",
    bio: "Cirugía de implante y coronas en una clínica de barrio, no en un centro de volumen. Explica el plan en el sillón y lo deja escrito en WhatsApp.",
    img: `${IMG}/doctor-mendoza.jpg`,
  },
  {
    name: "Dra. Isabel Valdez",
    spec: "Ortodoncia invisible y estética",
    cred: "PUCMM · São Paulo · 10 años",
    bio: "Carillas, alineadores y diseño de sonrisa. La cotización sale por diente, con foto, no por un paquete opaco.",
    img: `${IMG}/doctor-valdez.jpg`,
  },
  {
    name: "Dra. Camila Reyes",
    spec: "Periodoncia y cuidado familiar",
    cred: "UNPHU · 12 años",
    bio: "Encías, niños y pacientes que llegan con miedo. El ritmo lo marca el chat, no la sala de espera.",
    img: `${IMG}/doctor-reyes.jpg`,
  },
];

export const HYGIENIST = {
  name: "Lic. Elena Núñez",
  spec: "Higienista dental",
  cred: "Colegio Dominicano de Higienistas",
  img: `${IMG}/hygienist.jpg`,
};

export const CASES = [
  {
    id: "veneers",
    title: "Carillas anteriores",
    patient: "Paciente · 44 años · Naco",
    treatment: "Carillas de porcelana",
    note: "Chip en el incisivo y un diente con oro. Seis carillas, dos citas.",
    before: `${IMG}/case-veneers-before.jpg`,
    after: `${IMG}/case-veneers-after.jpg`,
  },
  {
    id: "whitening",
    title: "Blanqueamiento LED",
    patient: "Paciente · 34 años · Piantini",
    treatment: "Blanqueamiento LED",
    note: "Una sesión de 45 minutos. El tono lo eligió ella en el consultorio.",
    before: `${IMG}/case-whitening-before.jpg`,
    after: `${IMG}/case-whitening-after.jpg`,
  },
];

export const REVIEWS = [
  {
    name: "Lic. Vanessa Rivas",
    role: "Carillas · Naco",
    text: "La Dra. Valdez hizo las carillas en dos citas. Escribí por WhatsApp desde Maps; ya iba con el tratamiento en el chat.",
  },
  {
    name: "Ing. Manuel Henríquez",
    role: "Implante · sedación",
    text: "Años sin ir al dentista. Pedí sedación por el chat, el Dr. Mendoza contestó desde el sillón. No fue un call center.",
  },
  {
    name: "Carla Peña",
    role: "Limpieza familiar",
    text: "Agendé a mi hijo y a mí en el mismo hilo. Llegamos, nos atendieron, y el próximo control ya quedó en WhatsApp.",
  },
];

export const NAV = [
  { href: BASE, label: "Inicio" },
  { href: `${BASE}/tratamientos`, label: "Tratamientos" },
  { href: `${BASE}/equipo`, label: "Equipo" },
  { href: `${BASE}/clinica`, label: "La clínica" },
  { href: `${BASE}/casos`, label: "Casos" },
  { href: `${BASE}/citas`, label: "Citas" },
];

export function dop(n: number) {
  return `RD$ ${n.toLocaleString("es-DO")}`;
}

export function patientWa(treatment = "limpieza + carillas") {
  return `Hola, vi ${treatment} en la web de SDQ Dental Care. ¿Tienen cupo esta semana?`;
}

export function patientWaUrl(treatment?: string) {
  return waUrl(patientWa(treatment));
}
