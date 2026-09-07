export type TranslationKey = 'en' | 'es';

export interface TranslationDict {
  nav: {
    services: string;
    process: string;
    pricing: string;
    portfolio: string;
    proof: string;
    local: string;
    why: string;
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
    per_user_suffix: string;
    setup_suffix: string;
    about: string;
    starting_at: string;
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
    ask_peek: string;
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
      local: "Santo Domingo",
      why: "Why us",
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
      stat_delivery_lbl: "Page live",
      stat_brands: "48h",
      stat_brands_lbl: "Free demo",
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
        { icon: "📱", title: "24/7 Support", desc: "Change hours, photos, or copy by message. We reply and publish — usually the same day." }
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
      sub: "Pick your industry. Open the studio and build the plan. The preview is live — it changes with every option.",
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
      per_user_suffix: "/user/month",
      setup_suffix: "setup",
      about: "~",
      starting_at: "from",
      platform: "Platform",
      managed_support: "Managed Support Care",
      cta: "Launch the Ship →",
      disclaimer: "This is a brief, not a charge. We confirm the spec in 15 minutes before anything is built.",
      tiers: {
        landing: { name: "Essential", desc: "A designed landing page: brand, hours, treatments, the team — one page that already looks like the business.", pages: "Landing page" },
        site: { name: "Complete", desc: "The full stack: site, Google Maps and SEO, a personal CRM, and a brand AI synced to it. One setup, then monthly care.", pages: "Web + CRM + AI" },
        shop: { name: "Ecommerce", desc: "A store that starts simple: catalog and bag. Add Shopify when you are ready to take payment.", pages: "Online store" }
      },
      addons: {
        seo: { label: "Google Maps and SEO optimization", desc: "Show up on the map. Rank when they search nearby." },
        brand: { label: "Design & identity", desc: "Mark, palette, and type — the site wears the brand, not a template." },
        bilingual: { label: "Bilingual site EN / ES", desc: "The same site in both languages. Locals and visitors both read it." },
        shopify: { label: "Shopify integration", desc: "Catalog, bag, and checkout on Shopify — when you are ready to sell." },
        crm: { label: "Personal CRM", desc: "From RD$ 10,000 setup, then ~RD$ 2,000 per user/month — leads, stages, and notes on a board." },
        ai: { label: "Brand AI synced with CRM", desc: "Answers routine chats and books. Scales with your volume — starting at RD$ 4,000/month." }
      },
      support_label: "Managed Support & Optimization Care",
      support_desc: "Includes daily backups, performance scaling, secure edge hosting, and unlimited text-to-update content changes.",
      preview_title: "See how your site would look",
      ask_open: "See how your site would look",
      ask_peek: "See how it would look →",
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
      portfolio: "Trabajos y demos",
      proof: "Casos",
      local: "Santo Domingo",
      why: "Por qué nosotros",
      cta: "Pedir cotización"
    },
    hero: {
      badge_label: "NATIVA · SANTO DOMINGO",
      badge_sub: "· Sitio en vivo. Chat que cierra.",
      title_1: "Presencia Digital que tu",
      title_2: "Negocio Merece.",
      title_3: "",
      desc: "Apareces en Google Maps cuando buscan tu servicio. Un toque abre WhatsApp. Cuando ya llegan mensajes, sumamos un CRM personal y Nativa: un agente de IA al que le escribes como a un socio.",
      cta_launch: "Escríbenos por WhatsApp →",
      cta_price: "Ver presupuesto",
      proof: "Clínica en Naco — sitio en vivo, clientes por WhatsApp en 18 días.",
      stat_delivery: "3 semanas",
      stat_delivery_lbl: "Página lista",
      stat_brands: "48h",
      stat_brands_lbl: "Demo gratis",
      stat_updates: "24h",
      stat_updates_lbl: "Cambios por mensaje",
      whatsapp_footer: "¿Quieres cambiar texto, agregar fotos o ajustar horarios? Solo envíanos un mensaje."
    },
    partners: {
      label: "Empresas aliadas:"
    },
    services: {
      label: "Qué construimos",
      title: "Optimizamos tu presencia online.",
      sub: "Web, Maps y WhatsApp abren el camino. El CRM y Nativa entran cuando el chat ya está vivo.",
      items: [
        { icon: "🌐", title: "Diseño y desarrollo web", desc: "Una página que explica el oficio y manda la visita a WhatsApp. Lista en unas 3 semanas." },
        { icon: "📍", title: "Google Maps y SEO local", desc: "Cuando buscan tu servicio cerca, apareces primero — con un toque a WhatsApp." },
        { icon: "💬", title: "Soporte 24/7", desc: "Cambias horarios, fotos o textos por mensaje. Contestamos y lo publicamos — casi siempre el mismo día." }
      ],
      stack_label: "Cuando ya llega el chat",
      stack_sub: "El mismo WhatsApp. Números que se ven. Un agente al que le escribes.",
      stack: [
        { icon: "📊", title: "CRM personal", desc: "Etapas y cifras que se mueven con cada mensaje. Los clientes dejan de perderse en el celular.", need: "CRM personal" },
        { icon: "⚡", title: "Agente IA de marca", desc: "Le escribes a Nativa como a un socio: ¿cuánto hay en inventario? Agrega diez más. Ella responde — y lo ejecuta.", need: "Agente IA de marca" }
      ]
    },
    proof: {
      label: "Casos",
      title: "Mira cómo te escriben.",
      sub: "El tratamiento, las fechas, la talla. No un “hola, info?”.",
      before: "Antes",
      after: "Después",
      view: "Abrir sitio →",
      cta: "Quiero esto para mi negocio →"
    },
    process: {
      label: "Qué pasa después",
      title: "De una charla de 15 minutos a clientes en el chat",
      sub: "Describes el sitio por WhatsApp. Ves tu propio demo. El sitio sale en vivo — Maps, y empiezan a llegar clientes.",
      steps: [
        { num: "01", title: "Charla de 15 min", body: "Tú describes el sitio. Respondemos con páginas, Maps y cómo entra el cliente al chat." },
        { num: "02", title: "Tu propio demo", body: "Un link vivo en días — no un PDF. Lo abres en el celular como lo haría un cliente." },
        { num: "03", title: "Tu sitio en vivo", body: "Un sitio completo, abierto en Maps, y clientes nuevos entrando." }
      ]
    },
    jargon: {
      label: "En claro",
      title: "Sin jerga técnica",
      sub: "Otras agencias se esconden detrás de términos complicados. Nosotros hablamos claro. Toca una tarjeta para ver qué significa de verdad.",
      cards: [
        { tech: "Encriptación SSL y HTTPS", plain: "El candado de seguridad", why: "Evita que Google muestre una advertencia roja de 'No seguro' a tus clientes y protege sus datos.", icon: "🔒" },
        { tech: "Diseño responsivo", plain: "Se ve bien en el celular", why: "El 60% de tus clientes busca desde el celular. Hacemos que tu número y tus reservas estén a un toque.", icon: "📱" },
        { tech: "Caché Edge CDN", plain: "Carga antes de que parpadeen", why: "Los sitios lentos pierden la mitad de las visitas. Alojamos tu web para que cargue rápido en cualquier red.", icon: "⚡" }
      ],
      hint: "👆 Toca cualquier tarjeta para traducir"
    },
    pricing: {
      label: "Presupuesto",
      title: "Como se viera tu Propio Sitio Web",
      sub: "Elige tu industria. Entra al estudio y arma el plan. La vista previa es real: cambia con cada opción.",
      step_1: "01 Elige el plan",
      step_1_sub: "Escoge la base que mejor encaje con tu negocio.",
      step_2: "02 Suma opciones",
      step_2_sub: "Agrega lo que te ayude a aparecer cerca y a cerrar por chat.",
      step_3: "03 Soporte continuo",
      step_3_sub: "Suma el plan de cuidado sin estrés. Cambios por chat en 24 horas.",
      summary_title: "Tu configuración",
      one_time: "Inversión única",
      monthly: "Plan de soporte mensual",
      monthly_suffix: "/mes",
      per_user_suffix: "/usuario/mes",
      setup_suffix: "de instalación",
      about: "~",
      starting_at: "desde",
      platform: "Plataforma",
      managed_support: "Soporte continuo",
      cta: "Escríbenos por WhatsApp →",
      disclaimer: "Esto es un estimado, no un cobro. Confirmamos el alcance en 15 minutos antes de construir.",
      tiers: {
        landing: { name: "Esencial", desc: "Una página diseñada: marca, horarios, tratamientos, el equipo — ya se ve como el negocio.", pages: "Página de aterrizaje" },
        site: { name: "Completo", desc: "Todo junto: sitio, Google Maps y SEO, CRM personal e IA de marca sincronizada. Una instalación, luego el cuidado mensual.", pages: "Web + CRM + IA" },
        shop: { name: "Ecommerce", desc: "Una tienda que empieza simple: catálogo y bolsa. Suma Shopify cuando quieras cobrar.", pages: "Tienda online" }
      },
      addons: {
        seo: { label: "Google Maps y SEO", desc: "Apareces en el mapa. Sales cuando buscan cerca." },
        brand: { label: "Diseño y identidad", desc: "Marca, paleta y tipo — el sitio viste la marca, no una plantilla." },
        bilingual: { label: "Sitio bilingüe EN / ES", desc: "El mismo sitio en los dos idiomas. Locales y visitantes lo leen." },
        shopify: { label: "Integración con Shopify", desc: "Catálogo, bolsa y cobro en Shopify — cuando estés listo para vender." },
        crm: { label: "CRM personal", desc: "Desde RD$ 10,000 de instalación, luego ~RD$ 2,000 por usuario/mes — clientes, etapas y notas en un tablero." },
        ai: { label: "IA de marca sincronizada con CRM", desc: "Responde lo rutinario y agenda. Crece con tu volumen — desde RD$ 4,000/mes." }
      },
      support_label: "Plan de soporte y optimización",
      support_desc: "Incluye copias de seguridad diarias, velocidad optimizada, alojamiento seguro y cambios de texto/fotos ilimitados.",
      preview_title: "Como se viera tu Propio Sitio Web",
      ask_open: "Como se viera tu Propio Sitio Web",
      ask_peek: "Ver cómo se vería →",
      ask_close: "Cerrar el estudio",
      ask_tpl: "¿Qué tipo de negocio?",
      ask_tpl_sub: "La vista previa cambia a esa plantilla.",
      ask_tpl_label: "Plantilla",
      ask_plan: "¿Qué vamos a construir?",
      ask_plan_sub: "La vista previa cambia al instante.",
      ask_yes: "Sí, súmalo",
      ask_no: "Ahora no",
      ask_next: "Siguiente",
      ask_back: "Atrás",
      ask_ready: "Tu estimado está listo",
      ask_ready_sub: "Esto es un rango, no un cobro. Confirmamos el alcance en 15 minutos."
    },
    contact: {
      label: "Después de WhatsApp",
      title: "Qué pasa después",
      desc: "Sin formulario. Mandas un mensaje de 20 segundos, respondemos en minutos, y solo construimos si el encaje es real.",
      bullet_1: "Una persona te responde por WhatsApp — casi siempre el mismo día",
      bullet_2: "Alineación de 15 minutos. Web, Maps y cómo entra el chat",
      bullet_3: "Recibes una vista previa privada en tu celular",
      bullet_4: "Salimos en vivo. Luego sumamos CRM y el agente de IA si quieres el paquete completo",
      form_title: "Cuéntanos qué necesitas",
      form_sub: "En claro. Armamos el sitio, Maps y cómo debe caer el chat.",
      lbl_name: "Tu nombre *",
      lbl_email: "Correo electrónico *",
      lbl_phone: "WhatsApp / Teléfono *",
      lbl_budget: "Presupuesto estimado",
      lbl_message: "¿A qué se dedica tu negocio?",
      placeholder_name: "ej. María González",
      placeholder_message: "Cuéntanos brevemente qué hace tu negocio y qué necesitas en tu web.",
      btn_submit_idle: "Enviar mensaje →",
      btn_submit_loading: "Enviando…",
      success_title: "¡Recibido!",
      success_desc: "Responderemos en menos de 4 horas laborables. Revisamos tus metas e incluimos una revisión rápida de velocidad.",
      success_btn: "Enviar otra consulta →",
      disclaimer: "🔒 Tu mensaje es privado. Respuesta en 4 horas laborables.",
      cta: "Mandar el mensaje por WhatsApp →"
    },
    portfolioPage: {
      label: "Plantillas listas",
      title: "Sitios listos para lanzar",
      sub: "Plantillas hechas para negocios en República Dominicana. Elige una, pruébala en vivo y lánzala en 48 horas.",
      stat_built: "12+",
      stat_built_lbl: "Plantillas listas",
      stat_speed: "48h",
      stat_speed_lbl: "Tiempo de entrega",
      stat_score: "100/100",
      stat_score_lbl: "Velocidad en celular",
      search_placeholder: "Buscar plantilla (ej. clínica, villas, abogados, WhatsApp, tienda)…",
      categories: {
        all: "Todas las plantillas",
        smb: "Salud y clínicas",
        realestate: "Bienes raíces y villas",
        pro: "Abogados y servicios",
        ecom: "Tiendas y alimentos"
      },
      labels: {
        view_mode: "Vista previa:",
        turnaround: "Tiempo de entrega",
        modules: "Qué incluye",
        features: "Lo que destaca",
        spec: "Detalle de la plantilla",
        cta_modal: "Usar esta plantilla →",
        close: "Cerrar vista previa",
        view_demo: "Ver plantilla →",
        no_results: "No encontramos plantillas con ese criterio. Prueba con otra palabra."
      },
      projects: [
        {
          id: "sdq-clinic-template",
          title: "Clínica médica y odontológica",
          client: "Plantilla para salud",
          category: "smb",
          industry: "Clínica médica y odontológica",
          badge: "Lista en 48 horas",
          speedBefore: "5.2s",
          speedAfter: "0.3s",
          desc: "Plantilla bilingüe para clínicas: citas por WhatsApp y visibilidad en Google Maps.",
          problem: "Las clínicas pierden pacientes cuando las líneas están ocupadas o el formulario tarda en cargar en el celular.",
          solution: "Citas por WhatsApp, perfiles del equipo, Maps local y formularios cortos.",
          tags: ["Citas por WhatsApp", "SEO local", "Directorio médico", "Bilingüe EN/ES"]
        },
        {
          id: "punta-cana-villa-template",
          title: "Villas y alquileres en Punta Cana",
          client: "Plantilla para turismo y villas",
          category: "realestate",
          industry: "Bienes raíces y alquileres vacacionales",
          badge: "Lista en 48 horas",
          speedBefore: "6.1s",
          speedAfter: "0.4s",
          desc: "Catálogo de alquileres con calendario, precios en USD/DOP y consultas por WhatsApp.",
          problem: "Las fotos pesadas hacen que los huéspedes se vayan antes de preguntar por fechas o tarifas.",
          solution: "Galería rápida, selector USD/DOP, tarifas por temporada y reserva por WhatsApp.",
          tags: ["Fotos rápidas", "USD/DOP", "Calendario", "WhatsApp directo"]
        },
        {
          id: "naco-legal-template",
          title: "Abogados y asesores en Naco",
          client: "Plantilla para firmas legales",
          category: "pro",
          industry: "Firma de abogados",
          badge: "Lista en 48 horas",
          speedBefore: "4.8s",
          speedAfter: "0.3s",
          desc: "Sitio claro para firmas: áreas de práctica, perfiles del equipo y consulta en un toque.",
          problem: "Los clientes se van de sitios llenos de jerga y sin un canal rápido para escribir.",
          solution: "Tipografía limpia, perfiles de socios y agendamiento de consulta en un toque.",
          tags: ["Áreas de práctica", "Perfiles", "Consulta rápida", "SEO local"]
        },
        {
          id: "zona-tours-template",
          title: "Excursiones Zona Colonial",
          client: "Plantilla para tours",
          category: "realestate",
          industry: "Turismo y excursiones",
          badge: "Lista en 48 horas",
          speedBefore: "3.9s",
          speedAfter: "0.4s",
          desc: "Reservas de tours en el celular: boletos al instante, bilingüe y aviso al guía por WhatsApp.",
          problem: "Los turistas quieren reservar en 30 segundos, sin crear cuenta ni esperar un correo.",
          solution: "Selector de boletos, aviso al guía por WhatsApp, cobro con Stripe y cambio de idioma.",
          tags: ["Boletos", "WhatsApp al guía", "Bilingüe EN/ES", "Stripe"]
        },
        {
          id: "terrenas-coffee-template",
          title: "Café artesanal y gourmet",
          client: "Plantilla para tiendas de comida",
          category: "ecom",
          industry: "Tienda y alimentos gourmet",
          badge: "Lista en 48 horas",
          speedBefore: "5.5s",
          speedAfter: "0.3s",
          desc: "Tienda rápida para vender desde el celular: catálogo, bolsa y cobro en dos toques.",
          problem: "Las tiendas lentas pierden más de la mitad de las compras en el celular.",
          solution: "Catálogo claro, bolsa deslizable, cobro en dos pasos y calculadora de envío.",
          tags: ["Cobro Stripe", "Bolsa", "Catálogo", "Instagram"]
        },
        {
          id: "sdq-auto-template",
          title: "Taller y flota",
          client: "Plantilla para talleres",
          category: "smb",
          industry: "Servicios automotrices",
          badge: "Lista en 48 horas",
          speedBefore: "4.1s",
          speedAfter: "0.4s",
          desc: "Cotizador de servicios: el cliente elige el mantenimiento y recibe el desglose por WhatsApp.",
          problem: "Los talleres pierden horas contestando llamadas por cambios de aceite y frenos.",
          solution: "Estimador de servicios, modelo del vehículo, costo al instante y envío por WhatsApp.",
          tags: ["Estimador", "Desglose WhatsApp", "Paquetes", "SEO local"]
        },
        {
          id: "sdq-beauty-template",
          title: "Salón y spa",
          client: "Plantilla para estética",
          category: "smb",
          industry: "Estética y salón",
          badge: "Lista en 48 horas",
          speedBefore: "4.2s",
          speedAfter: "0.3s",
          desc: "Sitio elegante con menú de tratamientos, equipo y reservas VIP por WhatsApp.",
          problem: "Las clientas quieren ver precios y disponibilidad sin esperar un DM en Instagram.",
          solution: "Menú de tratamientos, galería del equipo, fotos de Instagram y reserva por WhatsApp.",
          tags: ["Menú", "Especialistas", "Reservas WhatsApp", "Instagram"]
        },
        {
          id: "sdq-construction-template",
          title: "Constructora Aybar & Torres",
          client: "Plantilla para constructoras",
          category: "realestate",
          industry: "Construcción e inmobiliaria",
          badge: "Lista en 48 horas",
          speedBefore: "5.8s",
          speedAfter: "0.4s",
          desc: "Sitio para torres y proyectos: planos, avance de obra y brochure en PDF.",
          problem: "Los inversionistas quieren ver planos y avance sin esperar un adjunto por correo.",
          solution: "Visor de planos, cronograma de obra, pedido de brochure y contacto por WhatsApp.",
          tags: ["Planos", "Avance de obra", "Brochure PDF", "Ventas WhatsApp"]
        },
        {
          id: "hache-design-template",
          title: "Hache Design Studio",
          client: "Estudio de arquitectura e interiorismo",
          category: "pro",
          industry: "Diseño de interiores y arquitectura",
          badge: "Proyecto destacado",
          speedBefore: "6.4s",
          speedAfter: "0.3s",
          desc: "Portafolio de alto nivel: residencias, renders 3D y cotización de proyectos por WhatsApp.",
          problem: "Los estudios pierden clientes cuando el sitio no muestra bien los acabados ni los renders.",
          solution: "Renders 3D, catálogo de acabados, galería de obras y cotización por WhatsApp.",
          tags: ["Interiores", "Renders 3D", "Galería", "Presupuesto WhatsApp"]
        },
        {
          id: "laura-alba-realestate-template",
          title: "Laura Alba Real Estate",
          client: "Inmobiliaria de lujo",
          category: "realestate",
          industry: "Bienes raíces de lujo",
          badge: "Cliente en vivo",
          speedBefore: "5.9s",
          speedAfter: "0.4s",
          desc: "Villas frente al mar, penthouses en Cap Cana y propiedades de inversión en República Dominicana.",
          problem: "Compradores de alto nivel necesitan precios en USD/DOP, planos y un asesor rápido.",
          solution: "Precios en USD/DOP, filtro de villas frente al mar, ficha en PDF y asesoría VIP por WhatsApp.",
          tags: ["Lujo", "Villas Punta Cana", "USD/DOP", "Asesoría VIP"]
        }
      ]
    }
  }
};
