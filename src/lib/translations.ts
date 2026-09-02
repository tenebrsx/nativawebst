export type TranslationKey = 'en' | 'es';

export interface TranslationDict {
  nav: {
    services: string;
    process: string;
    pricing: string;
    portfolio: string;
    proof: string;
    cta: string;
  };
  hero: {
    badge_label: string;
    badge_sub: string;
    title_1: string;
    title_2: string;
    title_3: string;
    desc: string;
    cta_launch: string;
    cta_price: string;
    proof: string;
    stat_delivery: string;
    stat_delivery_lbl: string;
    stat_brands: string;
    stat_brands_lbl: string;
    stat_updates: string;
    stat_updates_lbl: string;
    whatsapp_footer: string;
  };
  partners: {
    label: string;
  };
  services: {
    label: string;
    title: string;
    sub: string;
    items: Array<{ icon: string; title: string; desc: string }>;
    stack_label: string;
    stack_sub: string;
    stack: Array<{ icon: string; title: string; desc: string; need: string }>;
  };
  proof: {
    label: string;
    title: string;
    sub: string;
    before: string;
    after: string;
    view: string;
    cta: string;
  };
  process: {
    label: string;
    title: string;
    sub: string;
    steps: Array<{ num: string; title: string; body: string }>;
  };
  jargon: {
    label: string;
    title: string;
    sub: string;
    cards: Array<{ tech: string; plain: string; why: string; icon: string }>;
    hint: string;
  };
  pricing: {
    label: string;
    title: string;
    sub: string;
    step_1: string;
    step_1_sub: string;
    step_2: string;
    step_2_sub: string;
    step_3: string;
    step_3_sub: string;
    summary_title: string;
    one_time: string;
    monthly: string;
    monthly_suffix: string;
    platform: string;
    managed_support: string;
    cta: string;
    disclaimer: string;
    tiers: Record<string, { name: string; desc: string; pages: string }>;
    addons: Record<string, { label: string; desc: string }>;
    support_label: string;
    support_desc: string;
    preview_title: string;
    ask_open: string;
    ask_close: string;
    ask_tpl: string;
    ask_tpl_sub: string;
    ask_tpl_label: string;
    ask_plan: string;
    ask_plan_sub: string;
    ask_yes: string;
    ask_no: string;
    ask_next: string;
    ask_back: string;
    ask_ready: string;
    ask_ready_sub: string;
  };
  contact: {
    label: string;
    title: string;
    desc: string;
    bullet_1: string;
    bullet_2: string;
    bullet_3: string;
    bullet_4: string;
    form_title: string;
    form_sub: string;
    lbl_name: string;
    lbl_email: string;
    lbl_phone: string;
    lbl_budget: string;
    lbl_message: string;
    placeholder_name: string;
    placeholder_message: string;
    btn_submit_idle: string;
    btn_submit_loading: string;
    success_title: string;
    success_desc: string;
    success_btn: string;
    disclaimer: string;
    cta: string;
  };
  portfolioPage: {
    label: string;
    title: string;
    sub: string;
    stat_built: string;
    stat_built_lbl: string;
    stat_speed: string;
    stat_speed_lbl: string;
    stat_score: string;
    stat_score_lbl: string;
    search_placeholder: string;
    categories: {
      all: string;
      smb: string;
      realestate: string;
      pro: string;
      ecom: string;
    };
    labels: {
      view_mode: string;
      turnaround: string;
      modules: string;
      features: string;
      spec: string;
      cta_modal: string;
      close: string;
      view_demo: string;
      no_results: string;
    };
    projects: Array<{
      id: string;
      title: string;
      client: string;
      category: "smb" | "realestate" | "pro" | "ecom";
      industry: string;
      badge: string;
      speedBefore: string;
      speedAfter: string;
      desc: string;
      problem: string;
      solution: string;
      tags: string[];
    }>;
  };
}

export const translations: Record<TranslationKey, TranslationDict> = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      pricing: "Pricing",
      portfolio: "Work & Proof",
      proof: "Proof",
      cta: "Get Free Quote"
    },
    hero: {
      badge_label: "NATIVA · SANTO DOMINGO",
      badge_sub: "· Live site. Chat that closes.",
      title_1: "Websites Built for",
      title_2: "Local Action.",
      title_3: "Designed to Close.",
      desc: "Fast sites that show up on Maps and open WhatsApp. Once chats are landing, we add a personal CRM — and Nativa, a brand AI you text like a partner.",
      cta_launch: "Launch the Ship →",
      cta_price: "See an estimate",
      proof: "Clinic in Naco — live site, WhatsApp leads in 18 days.",
      stat_delivery: "3 Weeks",
      stat_delivery_lbl: "Brief to live site",
      stat_brands: "48h",
      stat_brands_lbl: "Landing-page launch",
      stat_updates: "24h",
      stat_updates_lbl: "Edits by message",
      whatsapp_footer: "Want to change text, add images, or adjust hours? Just text us."
    },
    partners: {
      label: "Anchor partners:"
    },
    services: {
      label: "What we build",
      title: "They find you. Then they write you.",
      sub: "Web, Maps, and WhatsApp open the pipe. The CRM and Nativa come in once the chat is already alive.",
      items: [
        { icon: "🌐", title: "Website Design & Build", desc: "A fast site that explains the work and sends the visit to WhatsApp. Live in under 3 weeks." },
        { icon: "📍", title: "Google Maps & Local SEO", desc: "When someone nearby searches your service, you show up first — with a tap to WhatsApp." },
        { icon: "📱", title: "WhatsApp Lead Flow", desc: "Every visit lands in your chat. No forms. The conversation starts on their phone." }
      ],
      stack_label: "Once the chat is live",
      stack_sub: "Same WhatsApp. Numbers you can see. An agent you can text.",
      stack: [
        { icon: "📊", title: "Personal CRM", desc: "Pipeline, stages, and figures that move with every message. Leads stop dying in the camera roll.", need: "Personal CRM" },
        { icon: "⚡", title: "Brand AI Agent", desc: "You text Nativa like a partner: how much is in stock? Add ten more. She answers — and does it.", need: "Brand AI Agent" }
      ]
    },
    proof: {
      label: "Proof",
      title: "See how they text you.",
      sub: "The treatment, the dates, the size. Not “hi, info?”.",
      before: "Before",
      after: "After",
      view: "Open site →",
      cta: "I want this for my business →"
    },
    process: {
      label: "What happens next",
      title: "From a 15-minute brief to clients in chat",
      sub: "You describe the site on WhatsApp. You get your own demo. Then the website goes live — Maps, and clients start arriving.",
      steps: [
        { num: "01", title: "15-min brief", body: "You describe the site. We reply with pages, Maps, and how leads hit the chat." },
        { num: "02", title: "Your own demo", body: "A live link in days — not a PDF. You open it on your phone like a customer would." },
        { num: "03", title: "Your site, live", body: "A complete website, open on Maps, and new clients walking in." }
      ]
    },
    jargon: {
      label: "Plain Speak",
      title: "Cutting Through Tech Jargon",
      sub: "Agencies often hide behind complex terminology. We focus on absolute clarity. Click a card to read the plain English meaning.",
      cards: [
        { tech: "SSL & HTTPS Encryption", plain: "The Security Lock", why: "Stops Google from showing visitors a scary red 'Not Secure' warning — and keeps your client data safe.", icon: "🔒" },
        { tech: "Responsive Breakpoints", plain: "Works Perfect on Any Phone", why: "60% of your customers search from a cell phone. We make sure your number and booking form are one tap away.", icon: "📱" },
        { tech: "Edge CDN Caching", plain: "Loads Before They Blink", why: "Slow sites lose 50% of visitors in 3 seconds. We host your site globally so it loads instantly on any network.", icon: "⚡" }
      ],
      hint: "👆 Click any card to translate"
    },
    pricing: {
      label: "Estimate",
      title: "Build your own website",
      sub: "Pick your industry template, then open the studio and build the plan. The preview is live — it changes with every option.",
      step_1: "01 Select Model Size",
      step_1_sub: "Choose the baseline foundation that matches your business needs.",
      step_2: "02 Add Custom Options",
      step_2_sub: "Add tailored features to accelerate growth and market outreach.",
      step_3: "03 Ongoing Support",
      step_3_sub: "Add our zero-stress managed care framework. Text updates anytime.",
      summary_title: "Nativa Configuration",
      one_time: "One-Time Investment",
      monthly: "Monthly Support Plan",
      monthly_suffix: "/month",
      platform: "Platform",
      managed_support: "Managed Support Care",
      cta: "Launch the Ship →",
      disclaimer: "This is a brief, not a charge. We confirm the spec in 15 minutes before anything is built.",
      tiers: {
        landing: { name: "Basic", desc: "A designed landing page: brand, hours, treatments, the team — one page that already looks like the business.", pages: "Landing page" },
        site: { name: "Complete", desc: "The full stack: site, Google Maps and SEO, a personal CRM, and a brand AI synced to it. One setup, then monthly care.", pages: "Web + CRM + AI" },
        shop: { name: "Ecommerce", desc: "A store that starts simple: catalog and bag. Add Shopify when you are ready to take payment.", pages: "Online store" }
      },
      addons: {
        seo: { label: "Google Maps and SEO optimization", desc: "Show up on the map. Rank when they search nearby." },
        brand: { label: "Design & identity", desc: "Mark, palette, and type — the site wears the brand, not a template." },
        bilingual: { label: "Bilingual site EN / ES", desc: "The same site in both languages. Locals and visitors both read it." },
        shopify: { label: "Shopify integration", desc: "Catalog, bag, and checkout on Shopify — when you are ready to sell." },
        crm: { label: "Personal CRM", desc: "Leads, stages, and notes on a board — not lost in the camera roll." },
        ai: { label: "Brand AI synced with CRM", desc: "She answers routine chats and books. A human takes the rest." }
      },
      support_label: "Managed Support & Optimization Care",
      support_desc: "Includes daily backups, performance scaling, secure edge hosting, and unlimited text-to-update content changes.",
      preview_title: "See how your site would look",
      ask_open: "See how your site would look",
      ask_close: "Close the studio",
      ask_tpl: "What kind of business?",
      ask_tpl_sub: "The preview switches to that template.",
      ask_tpl_label: "Template",
      ask_plan: "What are we building?",
      ask_plan_sub: "The preview updates as you choose.",
      ask_yes: "Yes, add it",
      ask_no: "Not now",
      ask_next: "Next",
      ask_back: "Back",
      ask_ready: "Your brief is ready",
      ask_ready_sub: "This is a range, not a charge. We lock the spec in 15 minutes."
    },
    contact: {
      label: "After you tap WhatsApp",
      title: "What happens next",
      desc: "No form. You send a 20-second brief, we reply in minutes, and we only build if the fit is real.",
      bullet_1: "A human replies on WhatsApp — usually the same morning",
      bullet_2: "15-minute alignment. We map the site, Maps, and the chat flow",
      bullet_3: "You get a private preview link on your phone",
      bullet_4: "Go live. Then we add CRM and the AI agent if you want the stack",
      form_title: "Tell us what you need",
      form_sub: "Plain words. We map the site, Maps, and how the chat should land.",
      lbl_name: "Your Name *",
      lbl_email: "Email *",
      lbl_phone: "WhatsApp / Phone *",
      lbl_budget: "Budget Range",
      lbl_message: "What does your business do?",
      placeholder_name: "e.g. María González",
      placeholder_message: "Tell us what you do and what you need — in plain words is perfect.",
      btn_submit_idle: "Send Request Spec →",
      btn_submit_loading: "Submitting Spec...",
      success_title: "We got it!",
      success_desc: "Expect a response within 4 business hours. We'll review your goals and provide a speed audit of your current site.",
      success_btn: "Submit another →",
      disclaimer: "🔒 Your specifications are private. Handled within 4 business hours.",
      cta: "Send the brief on WhatsApp →"
    },
    portfolioPage: {
      label: "Plantillas Interactivas",
      title: "Production-Ready Web Templates",
      sub: "Inspect our ready-to-deploy website templates engineered for Dominican & global brands. Select a template, test live previews, and launch in 48 hours.",
      stat_built: "12+",
      stat_built_lbl: "Plantillas Listas",
      stat_speed: "48h",
      stat_speed_lbl: "Launch Turnaround",
      stat_score: "100/100",
      stat_score_lbl: "Mobile Speed Score",
      search_placeholder: "Search template (e.g. Clinic, Real Estate, Legal, WhatsApp, E-Commerce)...",
      categories: {
        all: "Todas las Plantillas",
        smb: "Medical & SMBs",
        realestate: "Real Estate & Villas",
        pro: "Legal & Corporate",
        ecom: "Shops & E-Com"
      },
      labels: {
        view_mode: "Viewport Preview:",
        turnaround: "Turnaround Time",
        modules: "Integrated Modules",
        features: "Key System Features",
        spec: "Template Specification",
        cta_modal: "Claim This Template & Configure →",
        close: "Close Live Preview",
        view_demo: "Inspect Template →",
        no_results: "No templates match your search criteria. Try another keyword."
      },
      projects: [
        {
          id: "sdq-clinic-template",
          title: "SDQ Medical & Dental Clinic",
          client: "Healthcare & Clinic Template",
          category: "smb",
          industry: "Medical & Dental Clinic",
          badge: "Ready in 48 Hours",
          speedBefore: "5.2s",
          speedAfter: "0.3s",
          desc: "High-speed bilingual clinic template with instant WhatsApp appointment booking and local Google Maps optimization.",
          problem: "Medical practices lose high-value patients when phone lines are busy or online booking forms take minutes to load on mobile.",
          solution: "Pre-configured with direct WhatsApp scheduling, doctor profile cards, localized Google Maps schema, and patient intake forms.",
          tags: ["WhatsApp Booking", "Local SEO", "Doctor Directory", "Bilingual EN/ES"]
        },
        {
          id: "punta-cana-villa-template",
          title: "Punta Cana Coastal Villa",
          client: "Vacation Rental & Resort Template",
          category: "realestate",
          industry: "Real Estate & Vacation Rentals",
          badge: "Ready in 48 Hours",
          speedBefore: "6.1s",
          speedAfter: "0.4s",
          desc: "Luxury vacation rental showcase template with availability calendar, multi-currency USD/DOP toggles, and direct inquiry routing.",
          problem: "Slow photo loading on mobile networks kills rental inquiries before guests can view property features or rates.",
          solution: "Includes Edge-cached CDN image gallery, multi-currency USD/DOP display, seasonal pricing breakdown, and instant WhatsApp booking.",
          tags: ["Photo CDN", "USD/DOP Switcher", "Availability Calendar", "WhatsApp Direct"]
        },
        {
          id: "naco-legal-template",
          title: "Naco Corporate Law & Advisory",
          client: "Legal & Professional Firm Template",
          category: "pro",
          industry: "Corporate Law Firm",
          badge: "Ready in 48 Hours",
          speedBefore: "4.8s",
          speedAfter: "0.3s",
          desc: "High-contrast corporate legal template with practice area breakdown, attorney bio cards, and friction-free consultation form.",
          problem: "Potential corporate clients drop off when legal websites are bloated with jargon and lack clear contact channels.",
          solution: "Engineered with high-contrast corporate typography, structured Google schema for attorney listings, and 1-tap consultation scheduling.",
          tags: ["Practice Cards", "Attorney Profiles", "Lead Engine", "Local SEO"]
        },
        {
          id: "zona-tours-template",
          title: "Zona Colonial Excursion & Tour",
          client: "Tourism & Experience Template",
          category: "realestate",
          industry: "Tourism & Excursions",
          badge: "Ready in 48 Hours",
          speedBefore: "3.9s",
          speedAfter: "0.4s",
          desc: "Mobile-optimized tour booking template with instant ticket selection, multi-language support (EN/ES), and WhatsApp guide dispatch.",
          problem: "Tourists walking around historic areas want to book tours in 30 seconds without creating accounts or waiting for emails.",
          solution: "Features instant ticket selection, automated guide WhatsApp alerts, Stripe Checkout integration, and multi-language toggles.",
          tags: ["Ticket Selector", "WhatsApp Dispatch", "Bilingual EN/ES", "Stripe Ready"]
        },
        {
          id: "terrenas-coffee-template",
          title: "Artisanal Coffee & Specialty Shop",
          client: "E-Commerce & Food Template",
          category: "ecom",
          industry: "E-Commerce & Gourmet Food",
          badge: "Ready in 48 Hours",
          speedBefore: "5.5s",
          speedAfter: "0.3s",
          desc: "Fast Next.js e-commerce storefront template connected to Stripe Checkout, optimized for 2-tap mobile purchases.",
          problem: "Legacy shopping platforms suffer 80%+ cart abandonment rates on mobile due to slow multi-step checkouts.",
          solution: "Custom React storefront with slide-out cart drawer, 2-step Stripe Checkout, product variant selectors, and shipping calculator.",
          tags: ["Stripe Checkout", "Cart Drawer", "Product Grid", "Instagram Feed"]
        },
        {
          id: "sdq-auto-template",
          title: "República Fleet & Maintenance",
          client: "Automotive & Fleet Template",
          category: "smb",
          industry: "Automotive Services",
          badge: "Ready in 48 Hours",
          speedBefore: "4.1s",
          speedAfter: "0.4s",
          desc: "Interactive service cost estimator template allowing vehicle owners to select maintenance options and receive instant WhatsApp specs.",
          problem: "Service centers waste hours every day answering phone calls for routine oil change and maintenance estimates.",
          solution: "Includes interactive service estimator, vehicle model selector, instant cost breakdown, and 1-tap WhatsApp booking dispatch.",
          tags: ["Service Estimator", "WhatsApp Spec", "Package Builder", "Local SEO"]
        },
        {
          id: "sdq-beauty-template",
          title: "Naco Luxury Salon & Aesthetics",
          client: "Beauty & Spa Studio Template",
          category: "smb",
          industry: "Beauty & Spa Studio",
          badge: "Ready in 48 Hours",
          speedBefore: "4.2s",
          speedAfter: "0.3s",
          desc: "Elegant spa & salon template with interactive treatment menu, stylist directory, and VIP appointment booking flow.",
          problem: "Clients want to see treatment pricing, stylist portfolios, and available time slots on Instagram without waiting for DMs.",
          solution: "Pre-loaded with aesthetic treatment menu, stylist showcase, Instagram photo grid, and instant WhatsApp VIP booking.",
          tags: ["Treatment Menu", "Stylist Directory", "WhatsApp Booking", "Instagram Grid"]
        },
        {
          id: "sdq-construction-template",
          title: "Constructora Aybar & Torres",
          client: "Construction & Real Estate Template",
          category: "realestate",
          industry: "Construction & Development",
          badge: "Ready in 48 Hours",
          speedBefore: "5.8s",
          speedAfter: "0.4s",
          desc: "Heavy-duty real estate development template highlighting floor plans, construction progress updates, and brochure PDF downloads.",
          problem: "Investors want to inspect floor plans and construction timelines without waiting for email attachments.",
          solution: "Includes floor plan viewer, progress timeline tracker, automated brochure PDF requester, and WhatsApp sales rep connector.",
          tags: ["Floor Plans", "Progress Tracker", "Brochure Lead", "WhatsApp Sales"]
        },
        {
          id: "hache-design-template",
          title: "Hache Design Studio",
          client: "Architecture & Interior Design Studio",
          category: "pro",
          industry: "Interior Design & Architecture",
          badge: "Featured Portfolio Project",
          speedBefore: "6.4s",
          speedAfter: "0.3s",
          desc: "High-end interior design and architectural development platform featuring luxury residential projects, 3D space visualizers, and project spec inquiries.",
          problem: "Luxury interior design firms struggle to communicate spatial rendering quality and material finish options on slow portfolio sites.",
          solution: "Built with 3D space visualizer cards, material finish selector, interactive project gallery, and direct WhatsApp project spec inquiries.",
          tags: ["Interior Design", "3D Renders", "Project Showcase", "WhatsApp Spec"]
        },
        {
          id: "laura-alba-realestate-template",
          title: "Laura Alba Real Estate",
          client: "Luxury Real Estate & Advisory",
          category: "realestate",
          industry: "Luxury Real Estate & Investments",
          badge: "Live Enterprise Client",
          speedBefore: "5.9s",
          speedAfter: "0.4s",
          desc: "Exclusive Dominican luxury real estate platform showcasing high-end oceanfront villas, Cap Cana penthouses, and investment properties.",
          problem: "High-net-worth real estate buyers need multi-currency USD/DOP property listings, instant floor plan inspection, and VIP broker contact.",
          solution: "Engineered with multi-currency USD/DOP price converter, beachfront property map filter, downloadable property sheets, and VIP WhatsApp advisory.",
          tags: ["Luxury Real Estate", "Villa Listings", "USD/DOP Switcher", "VIP Advisory"]
        }
      ]
    }
  },
  es: {
    nav: {
      services: "Servicios",
      process: "Proceso",
      pricing: "Precios",
      portfolio: "Plantillas & Demos",
      proof: "Prueba",
      cta: "Presupuesto Gratis"
    },
    hero: {
      badge_label: "NATIVA · SANTO DOMINGO",
      badge_sub: "· Web viva. Chat que cierra.",
      title_1: "Sitios Web Creados para",
      title_2: "Acción Local.",
      title_3: "Diseñados para Cerrar.",
      desc: "Sitios rápidos que te encuentran en Maps y te escriben por WhatsApp. Cuando ya hay chats, sumamos un CRM personal y Nativa: un agente IA de marca al que le escribes como a un socio.",
      cta_launch: "Lanzar el Barco →",
      cta_price: "Ver presupuesto",
      proof: "Clínica en Naco — web viva, leads por WhatsApp en 18 días.",
      stat_delivery: "3 Semanas",
      stat_delivery_lbl: "Del brief al sitio vivo",
      stat_brands: "48h",
      stat_brands_lbl: "Landing lista",
      stat_updates: "24h",
      stat_updates_lbl: "Cambios por mensaje",
      whatsapp_footer: "¿Quieres cambiar texto, agregar fotos o ajustar horarios? Solo envíanos un mensaje."
    },
    partners: {
      label: "Empresas aliadas:"
    },
    services: {
      label: "Qué construimos",
      title: "Te encuentran. Luego te escriben.",
      sub: "Web, Maps y WhatsApp abren el tubo. El CRM y Nativa entran cuando el chat ya está vivo.",
      items: [
        { icon: "🌐", title: "Diseño & Desarrollo Web", desc: "Un sitio rápido que explica el oficio y manda la visita a WhatsApp. En vivo en menos de 3 semanas." },
        { icon: "📍", title: "Google Maps & SEO Local", desc: "Cuando buscan tu servicio cerca, apareces primero — con un toque a WhatsApp." },
        { icon: "💬", title: "Flujo de Leads por WhatsApp", desc: "Cada visita cae en tu chat. Sin formularios. La conversación empieza en su celular." }
      ],
      stack_label: "Cuando ya llega el chat",
      stack_sub: "El mismo WhatsApp. Números que se ven. Un agente al que le escribes.",
      stack: [
        { icon: "📊", title: "CRM Personal", desc: "Pipeline, etapas y cifras que se mueven con cada mensaje. Los leads dejan de morir en la galería.", need: "CRM personal" },
        { icon: "⚡", title: "Agente IA de Marca", desc: "Le escribes a Nativa como a un socio: ¿cuánto hay en inventario? Agrega diez más. Ella responde — y lo ejecuta.", need: "Agente IA de marca" }
      ]
    },
    proof: {
      label: "Prueba",
      title: "Mira cómo te escriben.",
      sub: "El tratamiento, las fechas, la talla. No un “hola, info?”.",
      before: "Antes",
      after: "Después",
      view: "Abrir sitio →",
      cta: "Quiero esto para mi negocio →"
    },
    process: {
      label: "Qué pasa después",
      title: "Del brief de 15 minutos a clientes en el chat",
      sub: "Cuentas el sitio por WhatsApp. Ves tu propio demo. El website sale vivo — Maps, y empiezan a llegar clientes.",
      steps: [
        { num: "01", title: "Brief de 15 min", body: "Tú describes el sitio. Respondemos con páginas, Maps, y cómo entra el lead al chat." },
        { num: "02", title: "Tu propio demo", body: "Un link vivo en días — no un PDF. Lo abres en el celular como lo haría un cliente." },
        { num: "03", title: "Tu website en vivo", body: "Un sitio completo, abierto en Maps, y clientes nuevos entrando." }
      ]
    },
    jargon: {
      label: "Hablando Claro",
      title: "Eliminando la Jerga Técnica",
      sub: "Las agencias a menudo se esconden detrás de términos complejos. Nos enfocamos en la claridad absoluta. Haz clic para ver el significado real.",
      cards: [
        { tech: "Encriptación SSL y HTTPS", plain: "El Candado de Seguridad", why: "Evita que Google muestre una advertencia roja de 'No Seguro' a tus clientes y protege sus datos.", icon: "🔒" },
        { tech: "Diseño Responsivo", plain: "Funciona Perfecto en Celulares", why: "El 60% de tus clientes busca desde su celular. Hacemos que tu botón de llamada y reservas estén a un toque de distancia.", icon: "📱" },
        { tech: "Caché Edge CDN", plain: "Carga Antes de que Parpadeen", why: "Las webs lentas pierden al 50% de las visitas. Alojamos tu web globalmente para que cargue al instante en cualquier red.", icon: "⚡" }
      ],
      hint: "👆 Haz clic en cualquier tarjeta para traducir"
    },
    pricing: {
      label: "Presupuesto",
      title: "Arma tu propio website",
      sub: "Elige la plantilla de tu industria, abre el estudio y arma el plan. La preview es real: cambia con cada opción.",
      step_1: "01 Selecciona Tamaño",
      step_1_sub: "Elige la base estructural que se adapte mejor a tus objetivos comerciales.",
      step_2: "02 Agrega Opciones",
      step_2_sub: "Añade herramientas avanzadas para potenciar tu presencia y alcance local.",
      step_3: "03 Soporte Continuo",
      step_3_sub: "Suma nuestro plan de soporte sin estrés. Actualizaciones por chat en 24 horas.",
      summary_title: "Configuración Nativa",
      one_time: "Inversión Única",
      monthly: "Plan de Soporte Mensual",
      monthly_suffix: "/mes",
      platform: "Plataforma",
      managed_support: "Soporte Gestionado",
      cta: "Lanzar el Barco →",
      disclaimer: "Esto es un brief, no un cobro. Confirmamos el spec en 15 minutos antes de construir.",
      tiers: {
        landing: { name: "Básico", desc: "Landing diseñada: marca, horarios, tratamientos, el equipo — una página que ya se ve como el negocio.", pages: "Landing page" },
        site: { name: "Completo", desc: "El stack completo: sitio, Google Maps y SEO, CRM personal e IA de marca sincronizada. Un setup, luego el cuidado mensual.", pages: "Web + CRM + IA" },
        shop: { name: "Ecommerce", desc: "Una tienda que empieza simple: catálogo y bolsa. Suma Shopify cuando quieras cobrar.", pages: "Tienda online" }
      },
      addons: {
        seo: { label: "Google Maps y SEO", desc: "Apareces en el mapa. Sales cuando buscan cerca." },
        brand: { label: "Diseño y identidad", desc: "Marca, paleta y tipo — el sitio viste la marca, no una plantilla." },
        bilingual: { label: "Sitio web bilingüe EN / ES", desc: "El mismo sitio en los dos idiomas. Locales y visitantes lo leen." },
        shopify: { label: "Integración con Shopify", desc: "Catálogo, bolsa y checkout en Shopify — cuando estés listo para vender." },
        crm: { label: "CRM personal", desc: "Leads, etapas y notas en un tablero — no en la galería." },
        ai: { label: "IA personalizada sincronizada con CRM", desc: "Responde lo rutinario y agenda. Un humano toma el resto." }
      },
      support_label: "Plan de Soporte y Optimización",
      support_desc: "Incluye copias de seguridad diarias, velocidad optimizada, alojamiento seguro y cambios de texto/fotos ilimitados.",
      preview_title: "Cómo tu sitio web se vería",
      ask_open: "Cómo tu sitio web se vería",
      ask_close: "Cerrar el estudio",
      ask_tpl: "¿Qué tipo de negocio?",
      ask_tpl_sub: "La preview cambia a esa plantilla.",
      ask_tpl_label: "Plantilla",
      ask_plan: "¿Qué vamos a construir?",
      ask_plan_sub: "La preview cambia al instante.",
      ask_yes: "Sí, súmalo",
      ask_no: "Ahora no",
      ask_next: "Siguiente",
      ask_back: "Atrás",
      ask_ready: "Tu brief está listo",
      ask_ready_sub: "Esto es un rango, no un cobro. Confirmamos el spec en 15 minutos."
    },
    contact: {
      label: "Después de WhatsApp",
      title: "Qué pasa después",
      desc: "Sin formulario. Mandas un brief de 20 segundos, respondemos en minutos, y solo construimos si el encaje es real.",
      bullet_1: "Una persona te responde por WhatsApp — casi siempre el mismo día",
      bullet_2: "Alineación de 15 minutos. Web, Maps, y cómo entra el chat",
      bullet_3: "Recibes un preview privado en tu celular",
      bullet_4: "Salimos en vivo. Luego sumamos CRM y el agente IA si quieres el stack",
      form_title: "Cuéntanos qué necesitas",
      form_sub: "En claro. Mapeamos el sitio, Maps, y cómo debe caer el chat.",
      lbl_name: "Tu Nombre *",
      lbl_email: "Correo Electrónico *",
      lbl_phone: "WhatsApp / Teléfono *",
      lbl_budget: "Presupuesto Estimado",
      lbl_message: "¿A qué se dedica tu negocio?",
      placeholder_name: "ej. María González",
      placeholder_message: "Cuéntanos brevemente qué hace tu negocio y qué necesitas en tu web.",
      btn_submit_idle: "Enviar Requerimientos →",
      btn_submit_loading: "Enviando Especificaciones...",
      success_title: "¡Recibido!",
      success_desc: "Responderemos en menos de 4 horas laborables. Analizaremos tus objetivos e incluiremos una auditoría de velocidad gratis.",
      success_btn: "Enviar otra consulta →",
      disclaimer: "🔒 Tus especificaciones son privadas. Respuesta en 4 horas laborables.",
      cta: "Mandar el brief por WhatsApp →"
    },
    portfolioPage: {
      label: "Plantillas Interactivas",
      title: "Modelos Web Listos para Lanzar",
      sub: "Explora nuestros modelos interactivos diseñados para empresas en la República Dominicana. Selecciona una plantilla, prueba la vista previa y lánzala en 48 horas.",
      stat_built: "12+",
      stat_built_lbl: "Plantillas Listas",
      stat_speed: "48h",
      stat_speed_lbl: "Tiempo de Entrega",
      stat_score: "100/100",
      stat_score_lbl: "Velocidad Google Móvil",
      search_placeholder: "Buscar plantilla (ej. Clínica, Bienes Raíces, Abogados, WhatsApp, Barbería)...",
      categories: {
        all: "Todas las Plantillas",
        smb: "Salud & Clínicas",
        realestate: "Bienes Raíces & Villas",
        pro: "Abogados & Servicios",
        ecom: "Tiendas & Alimentos"
      },
      labels: {
        view_mode: "Vista previa:",
        turnaround: "Tiempo de Entrega",
        modules: "Módulos Integrados",
        features: "Características Principales",
        spec: "Especificaciones del Modelo",
        cta_modal: "Usar Esta Plantilla & Configurar →",
        close: "Cerrar Previsualización",
        view_demo: "Inspeccionar Plantilla →",
        no_results: "No encontramos plantillas con ese criterio. Prueba con otra palabra clave."
      },
      projects: [
        {
          id: "sdq-clinic-template",
          title: "Plantilla SDQ Clínica Médica & Odontológica",
          client: "Modelo para Salud & Odontología",
          category: "smb",
          industry: "Clínica Médica & Odontológica",
          badge: "Lista en 48 Horas",
          speedBefore: "5.2s",
          speedAfter: "0.3s",
          desc: "Plataforma clínica bilingüe ultrarrápida con agendamiento directo por WhatsApp y posicionamiento local en Google Maps.",
          problem: "Las clínicas pierden pacientes cuando las líneas están ocupadas o el formulario tarda minutos en cargar en celulares.",
          solution: "Preconfigurada con citas por WhatsApp, catálogo de especialistas, esquema de Google Maps local y formularios de ingreso.",
          tags: ["Citas por WhatsApp", "SEO Local", "Directorio Médico", "Bilingüe EN/ES"]
        },
        {
          id: "punta-cana-villa-template",
          title: "Plantilla Punta Cana Villas & Alquileres",
          client: "Modelo para Turismo & Bienes Raíces",
          category: "realestate",
          industry: "Bienes Raíces & Alquileres Vacacionales",
          badge: "Lista en 48 Horas",
          speedBefore: "6.1s",
          speedAfter: "0.4s",
          desc: "Catálogo de alquileres de lujo con calendario de disponibilidad, selector multimoneda (USD/DOP) y consultas por WhatsApp.",
          problem: "Las fotos pesadas en redes móviles hacen que los huéspedes abandonen antes de consultar precios o disponibilidad.",
          solution: "Incluye galería con CDN de alta velocidad, selector de moneda USD/DOP, desglose de tarifas por temporada y reservas por WhatsApp.",
          tags: ["CDN de Fotos", "Selector USD/DOP", "Calendario", "WhatsApp Directo"]
        },
        {
          id: "naco-legal-template",
          title: "Plantilla Naco Abogados & Asesores",
          client: "Modelo para Firmas de Abogados",
          category: "pro",
          industry: "Firma de Abogados Corporativos",
          badge: "Lista en 48 Horas",
          speedBefore: "4.8s",
          speedAfter: "0.3s",
          desc: "Sitio web corporativo de alto contraste con desglose de áreas de práctica, perfiles de socios y formulario de consultas directas.",
          problem: "Los clientes corporativos abandonan los sitios de abogados llenos de jerga compleja y sin canales rápidos de contacto.",
          solution: "Diseñada con tipografía corporativa de alto contraste, esquema estructurado de Google para abogados y agendamiento en 1 toque.",
          tags: ["Áreas de Práctica", "Perfiles de Socios", "Captación de Leads", "SEO Local"]
        },
        {
          id: "zona-tours-template",
          title: "Plantilla Excursiones Zona Colonial",
          client: "Modelo para Turismo & Experiencias",
          category: "realestate",
          industry: "Turismo & Excursiones",
          badge: "Lista en 48 Horas",
          speedBefore: "3.9s",
          speedAfter: "0.4s",
          desc: "Plataforma de reservas de tours optimizada para móviles con selección instantánea de boletos, soporte bilingüe (EN/ES) y alertas por WhatsApp.",
          problem: "Los turistas caminando por zonas históricas quieren reservar un tour en 30 segundos sin crear cuentas ni esperar correos.",
          solution: "Incluye selector de boletos instantáneo, notificación de guías por WhatsApp, pasarela Stripe y selector bilingüe.",
          tags: ["Selector de Boletos", "Despacho WhatsApp", "Bilingüe EN/ES", "Stripe Listo"]
        },
        {
          id: "terrenas-coffee-template",
          title: "Plantilla Café Artesanal & Gourmet",
          client: "Modelo para Tiendas & Alimentos",
          category: "ecom",
          industry: "E-Commerce & Alimentos Gourmet",
          badge: "Lista en 48 Horas",
          speedBefore: "5.5s",
          speedAfter: "0.3s",
          desc: "Storefront e-commerce ultrarrápido en Next.js conectado a Stripe Checkout, optimizado para compras móviles en 2 toques.",
          problem: "Las tiendas tradicionales sufren más de un 80% de abandono de carrito en móviles por compras lentas de múltiples pasos.",
          solution: "Storefront en React con carrito deslizable, checkout en 2 pasos con Stripe, selector de productos y calculador de envíos.",
          tags: ["Stripe Checkout", "Carrito Deslizable", "Catálogo", "Feed Instagram"]
        },
        {
          id: "sdq-auto-template",
          title: "Plantilla República Taller Automotriz",
          client: "Modelo para Mantenimiento & Flotas",
          category: "smb",
          industry: "Servicios Automotrices",
          badge: "Lista en 48 Horas",
          speedBefore: "4.1s",
          speedAfter: "0.4s",
          desc: "Estimador interactivo de costo de servicios automotrices permitiendo a los clientes seleccionar mantenimientos y recibir desglose por WhatsApp.",
          problem: "Los talleres pierden horas contestando llamadas para cotizaciones rutinarias de cambio de aceite y frenos.",
          solution: "Incluye estimador interactivo de servicios, selector de modelo de vehículo, desglose inmediato de costo y envío por WhatsApp.",
          tags: ["Estimador de Servicio", "Desglose WhatsApp", "Paquetes", "SEO Local"]
        },
        {
          id: "sdq-beauty-template",
          title: "Plantilla Naco Salón de Belleza & Spa",
          client: "Modelo para Estética & Spa",
          category: "smb",
          industry: "Estética & Salón de Belleza",
          badge: "Lista en 48 Horas",
          speedBefore: "4.2s",
          speedAfter: "0.3s",
          desc: "Sitio elegante para centro de estética con menú de tratamientos, directorio de especialistas y flujo de agendamiento VIP.",
          problem: "Las clientas quieren ver precios de tratamientos, especialistas y disponibilidad sin tener que esperar mensajes por Instagram DM.",
          solution: "Precargada con menú de tratamientos estéticos, galería de especialistas, feed de Instagram y reservas VIP por WhatsApp.",
          tags: ["Menú Tratamientos", "Especialistas", "Reservas WhatsApp", "Feed Instagram"]
        },
        {
          id: "sdq-construction-template",
          title: "Constructora Aybar & Torres",
          client: "Modelo para Constructoras & Proyectos",
          category: "realestate",
          industry: "Construcción & Inmobiliaria",
          badge: "Lista en 48 Horas",
          speedBefore: "5.8s",
          speedAfter: "0.4s",
          desc: "Plataforma inmobiliaria para desarrolladores de torres y proyectos residenciales con planos interactivos y descarga de brochure PDF.",
          problem: "Los inversionistas quieren revisar planos de apartamentos y avances de obra sin esperar adjuntos por correo.",
          solution: "Incluye visor de planos, cronograma de avance de construcción, captador de leads para brochures PDF y contacto con asesores por WhatsApp.",
          tags: ["Visor de Planos", "Avance de Obra", "Brochure PDF", "Ventas WhatsApp"]
        },
        {
          id: "hache-design-template",
          title: "Hache Design Studio",
          client: "Estudio de Arquitectura e Interiorismo",
          category: "pro",
          industry: "Diseño de Interiores & Arquitectura",
          badge: "Proyecto Destacado",
          speedBefore: "6.4s",
          speedAfter: "0.3s",
          desc: "Plataforma de alta gama para estudio de diseño de interiores y arquitectura enfocada en residencia de lujo, renders 3D y cotización de proyectos.",
          problem: "Los estudios de interiorismo pierden clientes cuando sus sitios web no muestran la calidad de acabado y renders en alta resolución.",
          solution: "Construido con visor de renders 3D, catálogo de acabados de materiales, galería interactiva de obras y solicitud de especificaciones por WhatsApp.",
          tags: ["Diseño Interiores", "Renders 3D", "Galería de Obras", "Presupuesto WhatsApp"]
        },
        {
          id: "laura-alba-realestate-template",
          title: "Laura Alba Real Estate",
          client: "Inmobiliaria de Lujo & Asesoría",
          category: "realestate",
          industry: "Bienes Raíces de Lujo & Inversión",
          badge: "Cliente Enterprise En Vivo",
          speedBefore: "5.9s",
          speedAfter: "0.4s",
          desc: "Plataforma inmobiliaria de lujo para villas frente al mar, penthouses en Cap Cana y propiedades de alta rentabilidad en República Dominicana.",
          problem: "Compradores e inversionistas de alto nivel necesitan conversor multimoneda USD/DOP, inspección de planos y asesoría VIP inmediata.",
          solution: "Diseñada con conversor de moneda USD/DOP en tiempo real, filtro de villas frente al mar, ficha técnica en PDF y asesoría VIP por WhatsApp.",
          tags: ["Bienes Raíces Lujo", "Villas Punta Cana", "Moneda USD/DOP", "Asesoría VIP"]
        }
      ]
    }
  }
};
