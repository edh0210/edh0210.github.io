/**
 * EDH Professional Portfolio - Main JavaScript
 * Software Engineer / Software Architect
 */

// ==========================================
// 1. DICTIONARIES (ES / EN)
// ==========================================
const translations = {
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_about: "Perfil",
    nav_engineering: "Capacidades",
    nav_architecture: "Arquitectura",
    nav_projects: "Proyectos",
    nav_tech: "Tech Stack",
    nav_experience: "Experiencia",
    nav_contact: "Contacto",
    nav_resume: "CV / Resume",
    
    // Hero Section
    hero_status: "Disponible para Consultorías, Arquitectura Backend & Agentes IA",
    hero_title_prefix: "Hola, soy ",
    hero_title_name: "Edwin Hernández",
    hero_subtitle: "Software Engineer | Software Architect | Microservicios & Data Engineering",
    hero_desc: "Especializado en arquitectura de Microservicios, Agentes de IA, transacciones bancarias ACH (FICOHSA), tuberías ETL automatizadas con SSIS, dashboards en Power BI (TIGO), APIs REST y optimización de bases de datos relacionales.",
    cta_view_work: "Ver mi trabajo",
    cta_download_cv: "Descargar CV",
    
    // Profile Widget Card
    profile_role: "Software & Enterprise Systems Architect",
    profile_location: "Disponible para Oportunidades Remotas Internacionales",
    hero_highlight_1: "ETL & BI Monitoring (TIGO / SSIS)",
    hero_highlight_2: "Microservicios & Core Financiero",
    
    // Companies Carousel
    comp_label: "Empresas & Plataformas Empresariales",
    
    // Bento Dashboard
    bento_title_1: "Sistemas Empresariales",
    bento_desc_1: "Plataformas ERP, CRM, Microservicios y ETLs automatizados.",
    bento_title_2: "Agentes IA & Chatbots",
    bento_desc_2: "Bots conversacionales en WhatsApp y Telegram con IA.",
    bento_title_3: "Motores de Base de Datos",
    bento_desc_3: "SQL Server, Oracle y MySQL optimizados.",
    bento_title_4: "Criterio de Arquitectura",
    bento_desc_4: "Diseño limpio, escalabilidad y transaccionalidad segura.",
    
    // Capabilities (What I Build)
    cap_tag: "CAPACIDADES TÉCNICAS",
    cap_title: "Lo que sé construir",
    cap_subtitle: "Soluciones de ingeniería enfocadas en resolver problemas de negocio complejos.",
    
    cap_1_title: "Agentes de IA & Chatbots Conversacionales",
    cap_1_desc: "Arquitectura e integración de Agentes de IA y bots automatizados para WhatsApp y Telegram mediante webhooks, gestión de estados y conectores de IA.",
    
    cap_2_title: "Microservicios & Backend Services",
    cap_2_desc: "Construcción de servicios backend distribuidos, arquitectura de Microservicios, capas de negocio seguras y APIs REST de alto rendimiento.",
    
    cap_3_title: "Sistemas Financieros & Transacciones ACH",
    cap_3_desc: "Desarrollo de motores de transacciones financieras ACH, procesamiento de pagos interbancarios, conciliación y seguridad bancaria (FICOHSA).",
    
    cap_4_title: "Arquitectura de Datos & Tuberías ETL (SSIS)",
    cap_4_desc: "Diseño e implementación de procesos ETL automatizados con SQL Server Integration Services (SSIS), seguimiento de flujo de datos, modelado relacional y tuning de consultas en SQL Server & Oracle.",
    
    cap_5_title: "Business Intelligence & Power BI (TIGO)",
    cap_5_desc: "Desarrollo de dashboards ejecutivos e indicadores clave de rendimiento (KPIs) en Power BI para operaciones de telecomunicaciones (TIGO) y toma de decisiones estratégica.",
    
    cap_6_title: "DevOps, Containers & Deployment",
    cap_6_desc: "Contenerización con Docker, orquestación, CI/CD, configuración de servidores de aplicaciones y entornos de despliegue confiables.",
    
    // Architecture Case Studies
    arch_tag: "DISEÑO TÉCNICO",
    arch_title: "Casos de Estudio de Arquitectura",
    arch_subtitle: "Demostración visual de pensamiento sistémico y toma de decisiones técnicas.",
    
    arch_1_title: "Arquitectura Enterprise ERP & CRM Multi-Módulo",
    arch_1_desc: "Sistema centralizado desacoplado mediante servicios de capa intermedia para sincronización de inventario, ventas y datos contables.",
    arch_1_spec_1: "Frontend & UI Dashboard",
    arch_1_spec_2: "Capa de Negocio y APIs REST",
    arch_1_spec_3: "Motor Relacional de BD",
    
    arch_2_title: "Gateway de APIs & Integración de Servicios Heterogéneos",
    arch_2_desc: "Arquitectura de comunicaciones para interconectar servicios legados de infraestructura con nuevas interfaces digitales seguras.",
    arch_2_spec_1: "Control de Accesos & JWT",
    arch_2_spec_2: "Servicios Backend Distribuidos",
    arch_2_spec_3: "Persistencia & Auditoría",
    
    // Featured Projects
    proj_tag: "PORTFOLIO",
    proj_title: "Proyectos Destacados",
    proj_subtitle: "Historias de ingeniería con contexto del problema, arquitectura y solución aplicada.",
    
    proj_1_title: "Plataforma de Ventas y Gestión de Inventarios Enterprise",
    proj_1_prob: "Problema: Desconexión entre puntos de venta y control de inventarios centralizado en tiempo real.",
    proj_1_sol: "Solución: Sistema web responsive modular con API centralizada y arquitectura de capa de datos optimizada.",
    proj_1_role: "Rol: Arquitecto & Desarrollador Principal Backend / BD",
    
    proj_2_title: "Sistema de Geolocalización y Rastreo en Tiempo Real",
    proj_2_prob: "Problema: Falta de visibilidad de ubicaciones y cálculo dinámico de tiempos estimados de llegada (ETA).",
    proj_2_sol: "Solución: Aplicación de procesamiento de puntos geográficos con cálculo dinámico y dashboard de monitoreo.",
    proj_2_role: "Rol: Integración Backend & Estructura de Datos",
    
    proj_3_title: "Dashboard de Inteligencia de Negocio y Métricas Gráficas",
    proj_3_prob: "Problema: Datos dispersos en múltiples tablas sin consolidación ejecutiva.",
    proj_3_sol: "Solución: Motor de consultas agregadas y capa visual interactiva para toma de decisiones rápida.",
    proj_3_role: "Rol: Modelado de Consultas SQL & Servicios API",

    // Tech Stack
    tech_tag: "STACK TECNOLÓGICO",
    tech_title: "Tecnologías & Herramientas",
    tech_subtitle: "Herramientas de software utilizadas en entornos de producción reales.",
    
    tech_cat_1: "Lenguajes & Core",
    tech_cat_2: "Backend & Frameworks",
    tech_cat_3: "Bases de Datos",
    tech_cat_4: "DevOps & Nube",
    tech_cat_5: "Integración & Herramientas",
    tech_cat_6: "Frontend & UI",

    // Approach
    app_tag: "METODOLOGÍA",
    app_title: "Criterio de Ingeniería",
    app_subtitle: "Cómo abordo y resuelvo los desafíos tecnológicos.",
    
    step_1_title: "1. Entender el Problema",
    step_1_desc: "Analizo los requerimientos de negocio e impactos técnicos antes de escribir cualquier línea de código.",
    step_2_title: "2. Diseñar la Arquitectura",
    step_2_desc: "Defino responsabilidades, modelos de datos y fronteras de componentes para evitar deuda técnica.",
    step_3_title: "3. Construir con Calidad",
    step_3_desc: "Desarrollo código limpio, mantenible y probado utilizando mejores prácticas y patrones comprobados.",
    step_4_title: "4. Integrar & Conectar",
    step_4_desc: "Aseguro comunicación fluida entre APIs, bases de datos y servicios externos con manejo de errores.",
    step_5_title: "5. Optimizar Rendimiento",
    step_5_desc: "Afinamiento de consultas SQL, reducción de latencia en servicios y optimización de uso de recursos.",
    step_6_title: "6. Operación & Entrega",
    step_6_desc: "Automatizo despliegues en contenedores e implemento monitoreo para operación continua.",

    // Experience
    exp_tag: "TRAYECTORIA",
    exp_title: "Experiencia Profesional",
    exp_subtitle: "Historial de liderazgo y desarrollo técnico en proyectos de software e infraestructura TI.",
    
    exp_1_role: "Software & Enterprise Systems Architect",
    exp_1_company: "Proyectos Tecnológicos & Consultoría TI",
    exp_1_period: "2018 — Presente",
    exp_1_b1: "Diseño y desarrollo de sistemas empresariales, plataformas ERP y servicios backend bajo arquitecturas .NET y Open Source.",
    exp_1_b2: "Liderazgo en gestión y contratación de proyectos de sistemas de información, optimización de infraestructura TI y definición de procedimientos operacionales.",
    exp_1_b3: "Diseño y afino de estructuras de datos relacionales en SQL Server, Oracle y MySQL para aplicaciones críticas.",
    exp_1_b4: "Integración de servicios REST API y automatización de despliegues mediante contenedores Docker.",

    // Code & Writing
    notes_tag: "PUBLICACIONES & CÓDIGO",
    notes_title: "Notas de Ingeniería",
    notes_subtitle: "Artículos técnicos e investigación en arquitectura de software.",
    
    note_1_title: "Optimización de Consultas Relacionales en SQL Server & Oracle",
    note_2_title: "Diseño de APIs REST Escalables y Mantenibles",
    note_3_title: "Contenerización de Aplicaciones Enterprise con Docker",
    note_coming: "Artículo en redacción — Próximamente",

    // Contact
    contact_title: "¿Construyamos algo relevante?",
    contact_subtitle: "Abierto a discutir oportunidades en Ingeniería de Software, Arquitectura Backend, Integración y Consultoría de Bases de Datos.",
    contact_btn_email: "Enviar Correo Electrónico",
    contact_copied: "¡Correo copiado al portapapeles!",

    // Toast Messages
    toast_cv_title: "Resumen Profesional (Resume)",
    toast_cv_msg: "Cargando vista previa interactiva y enlace de descarga en PDF.",
    toast_copy_title: "Contacto",
    toast_copy_msg: "Dirección eduin_hernandez@hotmail.com copiada al portapapeles."
  },
  
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_engineering: "Capabilities",
    nav_architecture: "Architecture",
    nav_projects: "Projects",
    nav_tech: "Tech Stack",
    nav_experience: "Experience",
    nav_contact: "Contact",
    nav_resume: "Resume / CV",
    
    // Hero Section
    hero_status: "Open for Architecture, Backend & AI Agent Consulting",
    hero_title_prefix: "Hi, I'm ",
    hero_title_name: "Edwin Hernández",
    hero_subtitle: "Software Engineer | Software Architect | Microservices & Data Engineering",
    hero_desc: "Specialized in Microservices architecture, AI Agents, ACH financial transactions (FICOHSA), automated ETL data pipelines with SSIS, Power BI analytics (TIGO), REST APIs, and database performance tuning.",
    cta_view_work: "View My Work",
    cta_download_cv: "Download Resume",
    
    // Profile Widget Card
    profile_role: "Software & Enterprise Systems Architect",
    profile_location: "Available for Global Remote Opportunities",
    hero_highlight_1: "ETL & BI Monitoring (TIGO / SSIS)",
    hero_highlight_2: "Microservices & Core Banking",
    
    // Companies Carousel
    comp_label: "Enterprise Companies & Clients",
    
    // Bento Dashboard
    bento_title_1: "Enterprise Systems",
    bento_desc_1: "ERP, CRM, Microservices, and automated ETL pipelines.",
    bento_title_2: "AI Agents & Chatbots",
    bento_desc_2: "Conversational AI bots on WhatsApp & Telegram.",
    bento_title_3: "Database Engines",
    bento_desc_3: "Optimized SQL Server, Oracle, and MySQL structures.",
    bento_title_4: "Architecture Standards",
    bento_desc_4: "Clean design, scalability, and secure transaction integrity.",
    
    // Capabilities (What I Build)
    cap_tag: "TECHNICAL CAPABILITIES",
    cap_title: "What I Build",
    cap_subtitle: "Engineering solutions focused on solving complex enterprise business problems.",
    
    cap_1_title: "AI Agents & Conversational Bots",
    cap_1_desc: "Architecture and integration of AI Agents and automated bots for WhatsApp and Telegram via webhooks, state management, and AI connectors.",
    
    cap_2_title: "Microservices & Backend Services",
    cap_2_desc: "Building distributed backend services, Microservices architecture, secure business logic layers, and high-throughput REST APIs.",
    
    cap_3_title: "Financial Systems & ACH Transactions",
    cap_3_desc: "Development of ACH financial transaction engines, interbank payment processing, settlement reconciliation, and banking security (FICOHSA).",
    
    cap_4_title: "Data Architecture & SSIS ETL Pipelines",
    cap_4_desc: "Designing and implementing automated ETL data pipelines using SQL Server Integration Services (SSIS), batch tracking & monitoring, relational modeling, and SQL query tuning.",
    
    cap_5_title: "Business Intelligence & Power BI (TIGO)",
    cap_5_desc: "Developing executive dashboards and key performance indicators (KPIs) in Power BI for telecom operations (TIGO) and strategic decision making.",
    
    cap_6_title: "DevOps, Containers & Deployment",
    cap_6_desc: "Containerization with Docker, orchestration, CI/CD, application server setup, and dependable deployment environments.",
    
    // Architecture Case Studies
    arch_tag: "TECHNICAL DESIGN",
    arch_title: "Architecture Case Studies",
    arch_subtitle: "Visual demonstration of systems thinking and technical decision-making.",
    
    arch_1_title: "Multi-Module Enterprise ERP & CRM Architecture",
    arch_1_desc: "Decoupled core system using intermediate service layers for inventory, sales, and accounting data synchronization.",
    arch_1_spec_1: "Frontend & UI Dashboard",
    arch_1_spec_2: "Business Layer & REST APIs",
    arch_1_spec_3: "Relational DB Engine",
    
    arch_2_title: "API Gateway & Heterogeneous Service Integration",
    arch_2_desc: "Communication architecture linking legacy infrastructure services with secure, modern digital interfaces.",
    arch_2_spec_1: "Access Control & JWT",
    arch_2_spec_2: "Distributed Backend Services",
    arch_2_spec_3: "Persistence & Audit Logging",
    
    // Featured Projects
    proj_tag: "PORTFOLIO",
    proj_title: "Featured Engineering Projects",
    proj_subtitle: "Technical case stories featuring problem statement, architecture flow, and applied solution.",
    
    proj_1_title: "Enterprise Sales & Storage System Platform",
    proj_1_prob: "Problem: Disconnection between retail points and real-time centralized inventory tracking.",
    proj_1_sol: "Solution: Responsive web application with centralized API and optimized database architecture.",
    proj_1_role: "Role: Lead Architect & Backend / DB Developer",
    
    proj_2_title: "Real-Time Geolocation & Tracking System",
    proj_2_prob: "Problem: Lack of location visibility and dynamic ETA calculations for field operations.",
    proj_2_sol: "Solution: Geographic point processing engine with dynamic calculation and live monitoring dashboard.",
    proj_2_role: "Role: Backend Integration & Data Structuring",
    
    proj_3_title: "Business Intelligence & Chart Resume Dashboard",
    proj_3_prob: "Problem: Scattered data across multiple isolated tables without executive consolidation.",
    proj_3_sol: "Solution: Aggregated query engine and interactive visual dashboard for executive decision making.",
    proj_3_role: "Role: SQL Query Optimization & API Services",

    // Tech Stack
    tech_tag: "TECH STACK",
    tech_title: "Technologies & Tools",
    tech_subtitle: "Software tools and frameworks utilized in production environments.",
    
    tech_cat_1: "Languages & Core",
    tech_cat_2: "Backend & Frameworks",
    tech_cat_3: "Databases & Storage",
    tech_cat_4: "DevOps & Cloud",
    tech_cat_5: "Integration & Tools",
    tech_cat_6: "Frontend & UI",

    // Approach
    app_tag: "METHODOLOGY",
    app_title: "Engineering Approach",
    app_subtitle: "How I systematically approach and solve technical challenges.",
    
    step_1_title: "1. Understand the Problem",
    step_1_desc: "Thoroughly analyze business requirements and technical constraints before writing code.",
    step_2_title: "2. Design Architecture",
    step_2_desc: "Define component boundaries, data models, and responsibilities to avoid technical debt.",
    step_3_title: "3. Build with Quality",
    step_3_desc: "Develop clean, maintainable, and tested code using proven design patterns and standards.",
    step_4_title: "4. Integrate Systems",
    step_4_desc: "Ensure robust connectivity between APIs, databases, and third-party services with error handling.",
    step_5_title: "5. Optimize Performance",
    step_5_desc: "Fine-tune database queries, reduce API latency, and minimize system resource utilization.",
    step_6_title: "6. Deliver & Operate",
    step_6_desc: "Automate containerized deployments and set up continuous monitoring for high availability.",

    // Experience
    exp_tag: "CAREER HISTORY",
    exp_title: "Professional Experience",
    exp_subtitle: "Track record of technical leadership and software engineering execution.",
    
    exp_1_role: "Software & Enterprise Systems Architect",
    exp_1_company: "Technology Projects & IT Consulting",
    exp_1_period: "2018 — Present",
    exp_1_b1: "Engineered enterprise software applications, ERP platforms, and backend services under .NET and Open Source stacks.",
    exp_1_b2: "Led IT project procurement and management, optimizing technological infrastructure and service management procedures.",
    exp_1_b3: "Designed and optimized relational database schemas in SQL Server, Oracle, and MySQL for business-critical operations.",
    exp_1_b4: "Integrated REST APIs and containerized applications with Docker for streamlined deployments.",

    // Code & Writing
    notes_tag: "PUBLICATIONS & CODE",
    notes_title: "Engineering Notes",
    notes_subtitle: "Technical writing and software architecture insights.",
    
    note_1_title: "Relational Query Tuning in SQL Server & Oracle",
    note_2_title: "Designing Scalable & Maintainable REST APIs",
    note_3_title: "Containerizing Enterprise Applications with Docker",
    note_coming: "Article in progress — Coming Soon",

    // Contact
    contact_title: "Let's build something useful.",
    contact_subtitle: "Open to discussing software engineering, backend architecture, database optimization, and system integration projects.",
    contact_btn_email: "Send Me an Email",
    contact_copied: "Email address copied to clipboard!",

    // Toast Messages
    toast_cv_title: "Professional Resume",
    toast_cv_msg: "Loading interactive preview and PDF download link.",
    toast_copy_title: "Contact Info",
    toast_copy_msg: "Address eduin_hernandez@hotmail.com copied to clipboard."
  }
};

// ==========================================
// 2. STATE MANAGEMENT & INITIALIZATION
// ==========================================
let currentLang = localStorage.getItem('edh_lang') || 'es';
let currentTheme = localStorage.getItem('edh_theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavigation();
  initScrollEffects();
  initToastSystem();
});

// ==========================================
// 3. THEME TOGGLE (DARK / LIGHT)
// ==========================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
  
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('edh_theme', currentTheme);
      updateThemeIcon();
      showToast('Theme Changed', `Switched to ${currentTheme} mode.`, 'info');
    });
  }
}

function updateThemeIcon() {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.innerHTML = currentTheme === 'dark' 
      ? `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
      : `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
  }
}

// ==========================================
// 4. LANGUAGE SWITCHER (COMPACT DROPDOWN)
// ==========================================
function initLanguage() {
  applyLanguage(currentLang);
  
  const dropdownWrapper = document.getElementById('langDropdownWrapper');
  const dropdownToggle = document.getElementById('langDropdownToggle');
  
  if (dropdownToggle && dropdownWrapper) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownWrapper.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!dropdownWrapper.contains(e.target)) {
        dropdownWrapper.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

window.switchLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem('edh_lang', lang);
  applyLanguage(lang);
  
  const dropdownWrapper = document.getElementById('langDropdownWrapper');
  if (dropdownWrapper) {
    dropdownWrapper.classList.remove('open');
  }
  
  showToast(
    lang === 'es' ? 'Idioma cambiado' : 'Language Switched',
    lang === 'es' ? 'Español seleccionado 🇪🇸' : 'English selected 🇺🇸',
    'success'
  );
};

function applyLanguage(lang) {
  const dict = translations[lang];
  
  // 1. Update elements with data-i18n
  if (dict) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }
  
  // 2. Update inline dual-language elements with data-es and data-en
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    const val = lang === 'es' ? el.getAttribute('data-es') : el.getAttribute('data-en');
    if (val) {
      el.textContent = val;
    }
  });
  
  // Update Language Dropdown Button Label & Flag
  const currentLangText = document.getElementById('currentLangText');
  const currentFlag = document.getElementById('currentFlag');
  if (currentLangText && currentFlag) {
    currentLangText.textContent = lang.toUpperCase();
    currentFlag.innerHTML = lang === 'es' 
      ? `<rect width="640" height="480" fill="#002b7f"/><rect width="640" height="160" y="160" fill="#fff"/>`
      : `<rect width="640" height="480" fill="#bd3d44"/><path stroke="#fff" stroke-width="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 276.9h640M0 350.7h640M0 424.6h640"/><rect width="256" height="258.5" fill="#192f5d"/>`;
  }
  
  // Update active class in dropdown options
  document.querySelectorAll('.lang-option').forEach(btn => {
    const isTarget = btn.getAttribute('onclick')?.includes(`'${lang}'`);
    btn.classList.toggle('active', isTarget);
  });
  
  // Set html lang attribute
  document.documentElement.setAttribute('lang', lang);
}

// ==========================================
// 5. ACCESSIBLE NAVIGATION & MOBILE MENU
// ==========================================
function initNavigation() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Close menu when clicking links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

function initScrollEffects() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ==========================================
// 6. CUSTOM MODERN TOAST & ALERT SYSTEM
// ==========================================
function initToastSystem() {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(title, message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const iconSvg = type === 'success' 
    ? `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`
    : type === 'warning'
    ? `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`
    : `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
    
  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    <div class="toast-progress"></div>
  `;
  
  container.appendChild(toast);
  
  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });
  
  // Auto remove after 4s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// Global functions for user actions
window.copyEmail = function() {
  const email = 'eduin_hernandez@hotmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const isEs = currentLang === 'es';
    showToast(
      isEs ? 'Contacto' : 'Contact',
      isEs ? '¡Correo eduin_hernandez@hotmail.com copiado al portapapeles!' : 'Email eduin_hernandez@hotmail.com copied to clipboard!',
      'success'
    );
  }).catch(() => {
    showToast('Email', 'eduin_hernandez@hotmail.com', 'info');
  });
};

window.openResumeModal = function() {
  const isEs = currentLang === 'es';
  showToast(
    isEs ? 'Resume / CV Professional' : 'Professional Resume',
    isEs ? 'Abriendo vista técnica de CV de Edwin Hernández.' : 'Opening Edwin Hernández technical resume view.',
    'info'
  );
  
  // Create or open sleek modal overlay with options to print or view details
  let modal = document.getElementById('resumeModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'resumeModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-container">
        <button class="modal-close-btn" onclick="document.getElementById('resumeModal').classList.remove('active')">&times;</button>
        <h2 style="font-size:1.5rem; margin-bottom:0.5rem;" class="text-gradient">Edwin Hernández R.</h2>
        <p style="font-family:var(--font-mono); font-size:0.85rem; color:var(--accent-cyan); margin-bottom:1.5rem;">SOFTWARE ENGINEER & ARCHITECT</p>
        
        <div style="border-left:3px solid var(--accent-cyan); padding-left:1rem; margin-bottom:1.5rem; color:var(--text-secondary); font-size:0.95rem;">
          <p><strong>Location:</strong> Nicaragua (Open to International Remote)</p>
          <p><strong>Email:</strong> eduin_hernandez@hotmail.com</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/edwin-hernández-36874058/</p>
          <p><strong>GitHub:</strong> github.com/edh0210</p>
        </div>
        
        <h4 style="margin-bottom:0.5rem; font-size:1.1rem;">Summary / Resumen</h4>
        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1.5rem;">
          Software Engineer & Architecture professional with extensive experience designing enterprise systems, backend services, REST APIs, and high-performance relational database schemas (.NET, C#, SQL Server, Oracle, MySQL, Docker).
        </p>
        
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
          <button class="btn btn-primary btn-sm" onclick="window.print()">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            Print / Save PDF Resume
          </button>
          <button class="btn btn-secondary btn-sm" onclick="copyEmail()">
            Copy Direct Email
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  
  setTimeout(() => modal.classList.add('active'), 10);
};
