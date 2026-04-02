type Project = {
  title: string
  section: "featured" | "private" | "academic"
  type: string
  summary: string
  description: string
  architecture: {
    label: string
    steps: { title: string; detail: string }[]
  }
  impact: string[]
  topics: string[]
  image: string
  github?: string | null
  link?: string | null
  disclaimer?: string
  company?: string
  period?: string
  role?: string
}

const PROJECTS_ES: Project[] = [
  {
    title: "WFM Helper",
    section: "featured",
    type: "Herramienta interna privada",
    summary: "Pipeline de ingestión, validación y normalización para datos operativos listos para Power BI.",
    description:
      "Diseñé una aplicación de apoyo analítico orientada a archivos operativos de workforce management. Su núcleo orquesta extracción por formato, reglas de validación, normalización y escritura estructurada para que reporting, auditorías y dashboards partan de datos más consistentes.",
    architecture: {
      label: "Arquitectura",
      steps: [
        { title: "Inputs", detail: "Archivos y reportes operativos crudos" },
        { title: "Extraction", detail: "Carga y parsing por formato" },
        { title: "Validation", detail: "Reglas y consistencia de métricas" },
        { title: "BI Output", detail: "Tablas listas para reporting y dashboards" },
      ],
    },
    impact: [
      "Reduce limpieza manual y retrabajo antes de llegar a BI.",
      "Convierte archivos crudos en tablas más confiables para reporting.",
      "Acerca la operación diaria a decisiones más rápidas y menos fricción analítica.",
    ],
    topics: ["Python", "ETL", "Validación", "Normalización", "Power BI", "SQLite/Access"],
    image: "/files/wfm-helper-architecture.svg",
    disclaimer:
      "Caso privado. La arquitectura mostrada es una abstracción propia y no expone código, datos ni internals corporativos.",
  },
  {
    title: "Scrapping Pipelines",
    section: "featured",
    type: "Sistema privado de ingestión",
    summary: "Conjunto de flujos especializados para forecast, interval, staffing, hourly digest y weekly summary.",
    description:
      "Construí y organicé pipelines enfocados en extracción y procesamiento de reportes WFM para consolidar información dispersa, detectar inconsistencias y alimentar vistas analíticas en Power BI. El valor no está en un único script, sino en una arquitectura de módulos reutilizables por tipo de archivo y necesidad operativa.",
    architecture: {
      label: "Arquitectura",
      steps: [
        { title: "Forecast", detail: "Ingesta y reprocesos planificados" },
        { title: "Specialized flows", detail: "Interval, hourly y staffing por módulo" },
        { title: "Normalization", detail: "Salidas comparables y auditables" },
        { title: "Executive views", detail: "Resúmenes semanales y consumo en BI" },
      ],
    },
    impact: [
      "Estandariza múltiples fuentes en una salida más utilizable.",
      "Reduce dependencia de revisión manual workbook por workbook.",
      "Mejora la preparación de datasets para forecast, staffing y resúmenes ejecutivos.",
    ],
    topics: ["Python", "Pipelines", "Forecast", "Staffing", "KPI Reporting", "Power BI"],
    image: "/files/scrapping-pipeline-architecture.svg",
    disclaimer:
      "Caso privado. La visualización es conceptual y resume la arquitectura sin mostrar activos corporativos.",
  },
  {
    title: "RegistroDocente",
    section: "featured",
    type: "Producto full-stack",
    summary: "Sistema de gestión académica con roles, autenticación, módulos operativos y despliegue moderno.",
    description:
      "Proyecto full-stack centrado en administración académica con una base sólida de producto: autenticación, control por roles, entidades institucionales, gestión de activos y estructura preparada para crecer. Es uno de los ejemplos más claros de cómo hoy puedo moverme entre frontend, backend, base de datos y experiencia de usuario.",
    architecture: {
      label: "Arquitectura",
      steps: [
        { title: "UI", detail: "Flujos académicos y vistas por rol" },
        { title: "Auth", detail: "Acceso controlado y sesiones" },
        { title: "App layer", detail: "Reglas y módulos de negocio" },
        { title: "Data", detail: "Persistencia relacional y reporting" },
      ],
    },
    impact: [
      "Demuestra arquitectura de producto y flujo completo de negocio.",
      "Une interfaz, lógica de aplicación y datos en una experiencia coherente.",
      "Refuerza mi posicionamiento como perfil full-stack, no solo analítico.",
    ],
    topics: ["Next.js 15", "TypeScript", "Prisma", "SQL Server", "Auth.js", "Shadcn/ui"],
    image: "/projects/registro-docente.png",
    github: "https://github.com/bash20cu/RegistroDocente",
    link: "https://registro-docente-sage.vercel.app/",
  },
  {
    title: "Presupuesto",
    section: "featured",
    type: "Producto web moderno",
    summary: "Aplicación financiera con automatización de facturas, categorización y reporting.",
    description:
      "Desarrollé una app de presupuesto que junta captura de movimientos, ingestión de facturas desde correo, categorización y vistas de seguimiento en una sola experiencia. Es un proyecto valioso para mostrar producto real, automatización útil y madurez en stack moderno.",
    architecture: {
      label: "Arquitectura",
      steps: [
        { title: "Capture", detail: "Entradas manuales y facturas" },
        { title: "Processing", detail: "Acciones, validación y clasificación" },
        { title: "Data model", detail: "Persistencia limpia por dominio" },
        { title: "Insights", detail: "Presupuesto y seguimiento financiero" },
      ],
    },
    impact: [
      "Conecta automatización y experiencia de usuario en un solo producto.",
      "Muestra criterio de dominio, no solo implementación técnica.",
      "Fortalece mi perfil como constructor de herramientas útiles para personas reales.",
    ],
    topics: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "Playwright"],
    image: "/files/presupuesto-system-map.svg",
    github: "https://github.com/bash20cu/Presupuesto",
  },
  {
    title: "OpsLens",
    section: "private",
    type: "Herramienta de exploración de datos",
    summary: "Dashboard client-side para subir archivos y explorar KPIs sin backend.",
    description:
      "OpsLens nace como una herramienta liviana para que una persona pueda cargar un archivo y obtener una lectura rápida: vista previa, métricas base y señales visuales útiles. Me sirve para mostrar sensibilidad de UX, velocidad de entrega y pensamiento de producto alrededor de datos.",
    architecture: {
      label: "Arquitectura",
      steps: [
        { title: "Upload", detail: "CSV y Excel en el navegador" },
        { title: "Parsing", detail: "Lectura client-side" },
        { title: "Metrics", detail: "KPIs y tipado básico" },
        { title: "Visuals", detail: "Exploración inmediata sin backend" },
      ],
    },
    impact: [
      "Hace más accesible la exploración inicial de datasets.",
      "Demuestra diseño frontend con foco en claridad y utilidad.",
      "Es una buena muestra de cómo presento datos sin sobrecomplicar la interfaz.",
    ],
    topics: ["Astro", "React", "TypeScript", "Tailwind", "Recharts", "XLSX"],
    image: "/files/opslens-browser-analytics.svg",
    github: "https://github.com/bash20cu/opslens",
  },
  {
    title: "Connectivity Tool",
    section: "private",
    type: "Caso privado de tooling",
    summary: "Refactorización de una herramienta legacy de troubleshooting hacia flujos modulares por dispositivo.",
    description:
      "Participé en la evolución de una herramienta de troubleshooting que pasó de un único flujo rígido a varios workflows específicos, con mejor carga dinámica, componentes reutilizables y manejo de estado más claro. Aunque el código no puede publicarse, sí es una parte importante de mi historia como desarrollador orientado a producto interno.",
    architecture: {
      label: "Arquitectura",
      steps: [
        { title: "Legacy flow", detail: "Un único recorrido rígido" },
        { title: "Device paths", detail: "Workflows por escenario" },
        { title: "Reusable parts", detail: "Componentes y estado compartido" },
        { title: "Support UX", detail: "Más claridad y mantenimiento" },
      ],
    },
    impact: [
      "Mejoró mantenibilidad y velocidad para introducir variantes.",
      "Separó escenarios de uso sin duplicar lógica innecesariamente.",
      "Aportó mejor experiencia de soporte y una base más escalable.",
    ],
    topics: ["JavaScript", "jQuery", "JSON Pipelines", "Refactorización", "State Management"],
    image: "/projects/connectivitytool.webp",
    company: "Movate / ARRIS - CommScope",
    period: "2021 - 2023",
    role: "Junior Software Developer",
    disclaimer:
      "Proyecto corporativo privado. Se describe el problema resuelto y la arquitectura general, sin exponer código ni detalles sensibles.",
  },
  {
    title: "ClinicaPlus",
    section: "academic",
    type: "Proyecto academico full-stack",
    summary: "Sistema universitario documentado con arquitectura monolitica SSR para explicar capas, datos y despliegue.",
    description:
      "Este proyecto academico me sirve para mostrar que mi aprendizaje universitario no fue solo teorico. Se documentaron decisiones de arquitectura, modelo de datos y estrategia de despliegue para una entrega que conectara frontend, backend y base relacional de forma entendible.",
    architecture: {
      label: "Arquitectura",
      steps: [
        { title: "SSR UI", detail: "Pantallas servidas desde Next.js" },
        { title: "App layer", detail: "Coordinación y validación" },
        { title: "Relational data", detail: "Modelo y persistencia" },
        { title: "Deploy", detail: "Entrega simple y explicable" },
      ],
    },
    impact: [
      "Aterriza arquitectura de software en un caso entregable.",
      "Muestra documentacion tecnica y claridad de capas.",
      "Sirve como puente entre la U y mis proyectos mas cercanos a producto.",
    ],
    topics: ["Next.js", "PostgreSQL", "SSR", "Arquitectura", "Modelo relacional"],
    image: "/files/clinicaplus-architecture.svg",
    github: "https://github.com/bash20cu/impl_softw",
  },
  {
    title: "Universidad",
    section: "academic",
    type: "Repositorio academico",
    summary: "Conjunto de laboratorios y proyectos en programacion, bases de datos, estructuras de datos e inteligencia artificial.",
    description:
      "Mi repositorio de universidad resume una etapa amplia de aprendizaje aplicado. No lo presento como un unico proyecto estrella, sino como evidencia de profundidad tecnica: diagramas UML, modelos relacionales, laboratorios de programacion y ejercicios que construyeron la base de lo que hago hoy.",
    architecture: {
      label: "Mapa técnico",
      steps: [
        { title: "Programming", detail: "Labs y ejercicios por curso" },
        { title: "Data structures", detail: "Modelado y pensamiento lógico" },
        { title: "Databases", detail: "ERDs y diseño relacional" },
        { title: "AI / systems", detail: "Amplitud más allá del CRUD" },
      ],
    },
    impact: [
      "Prueba amplitud academica y consistencia de aprendizaje.",
      "Da contexto a mis bases en algoritmos, bases de datos y modelado.",
      "Completa la narrativa entre formacion y experiencia profesional.",
    ],
    topics: ["Java", "C#", "Python", "SQL", "UML", "Data Structures"],
    image: "/projects/universidad.webp",
    github: "https://github.com/bash20cu/Universidad",
  },
]

const PROJECTS_EN: Project[] = [
  {
    title: "WFM Helper",
    section: "featured",
    type: "Private internal tool",
    summary: "Ingestion, validation, and normalization pipeline for operational data prepared for Power BI.",
    description:
      "I designed an analytics support application around workforce management source files. Its core orchestrates format-aware extraction, validation rules, normalization, and structured writing so reporting, audits, and dashboards start from cleaner and more reliable data.",
    architecture: {
      label: "Architecture",
      steps: [
        { title: "Inputs", detail: "Raw operational files and reports" },
        { title: "Extraction", detail: "Format-aware loading and parsing" },
        { title: "Validation", detail: "Rules and metric consistency" },
        { title: "BI Output", detail: "Structured tables for dashboards" },
      ],
    },
    impact: [
      "Reduces manual cleanup before data reaches BI.",
      "Turns raw source files into more reliable tables for reporting.",
      "Brings day-to-day operations closer to faster decisions and less analytical friction.",
    ],
    topics: ["Python", "ETL", "Validation", "Normalization", "Power BI", "SQLite/Access"],
    image: "/files/wfm-helper-architecture.svg",
    disclaimer:
      "Private case study. The architecture shown here is my own abstraction and does not expose corporate code, data, or internal details.",
  },
  {
    title: "Scrapping Pipelines",
    section: "featured",
    type: "Private ingestion system",
    summary: "A focused set of pipelines for forecast, interval, staffing, hourly digest, and weekly summary reporting.",
    description:
      "I built and organized WFM-oriented extraction and processing flows to consolidate scattered information, detect inconsistencies, and feed analytical views in Power BI. The value is not a single script, but an architecture of reusable modules shaped around file types and reporting needs.",
    architecture: {
      label: "Architecture",
      steps: [
        { title: "Forecast", detail: "Scheduled ingestion and reforecasting" },
        { title: "Specialized flows", detail: "Interval, hourly, and staffing modules" },
        { title: "Normalization", detail: "Comparable and auditable outputs" },
        { title: "Executive views", detail: "Weekly summaries and BI consumption" },
      ],
    },
    impact: [
      "Standardizes multiple sources into a more usable analytical output.",
      "Reduces dependency on manual workbook-by-workbook review.",
      "Improves dataset readiness for forecast, staffing, and executive summaries.",
    ],
    topics: ["Python", "Pipelines", "Forecast", "Staffing", "KPI Reporting", "Power BI"],
    image: "/files/scrapping-pipeline-architecture.svg",
    disclaimer:
      "Private case study. The visual is conceptual and summarizes the architecture without exposing corporate assets.",
  },
  {
    title: "RegistroDocente",
    section: "featured",
    type: "Full-stack product",
    summary: "Academic management system with roles, authentication, operational modules, and modern deployment.",
    description:
      "This full-stack build focuses on academic administration with a real product backbone: authentication, role-based access, institutional entities, asset management, and a structure prepared to grow. It is one of the clearest examples of how I now move across frontend, backend, database, and user experience.",
    architecture: {
      label: "Architecture",
      steps: [
        { title: "UI", detail: "Academic workflows and role-based views" },
        { title: "Auth", detail: "Controlled access and sessions" },
        { title: "App layer", detail: "Business rules and modules" },
        { title: "Data", detail: "Relational persistence and reporting" },
      ],
    },
    impact: [
      "Demonstrates product architecture and an end-to-end business flow.",
      "Connects interface, application logic, and data in a coherent experience.",
      "Reinforces my positioning as a full-stack profile, not only an analytics one.",
    ],
    topics: ["Next.js 15", "TypeScript", "Prisma", "SQL Server", "Auth.js", "Shadcn/ui"],
    image: "/projects/registro-docente.png",
    github: "https://github.com/bash20cu/RegistroDocente",
    link: "https://registro-docente-sage.vercel.app/",
  },
  {
    title: "Presupuesto",
    section: "featured",
    type: "Modern web product",
    summary: "Finance application with invoice automation, categorization, and reporting.",
    description:
      "I developed a budgeting app that combines transaction capture, email-based invoice intake, categorization, and follow-up views in one product experience. It is a strong project to show useful automation, domain thinking, and maturity with a modern full-stack stack.",
    architecture: {
      label: "Architecture",
      steps: [
        { title: "Capture", detail: "Manual entries and invoice intake" },
        { title: "Processing", detail: "Actions, validation, and classification" },
        { title: "Data model", detail: "Clean persistence by domain" },
        { title: "Insights", detail: "Budget and financial follow-up" },
      ],
    },
    impact: [
      "Connects automation and user experience inside one product.",
      "Shows domain understanding, not just technical implementation.",
      "Strengthens my profile as a builder of useful systems for real people.",
    ],
    topics: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "Playwright"],
    image: "/files/presupuesto-system-map.svg",
    github: "https://github.com/bash20cu/Presupuesto",
  },
  {
    title: "OpsLens",
    section: "private",
    type: "Data exploration tool",
    summary: "Client-side dashboard for uploading files and exploring KPIs without a backend.",
    description:
      "OpsLens started as a lightweight way for someone to upload a file and instantly get a quick read: preview, core metrics, and useful visual signals. It helps show frontend sensitivity, fast delivery, and product thinking around data experiences.",
    architecture: {
      label: "Architecture",
      steps: [
        { title: "Upload", detail: "CSV and Excel in the browser" },
        { title: "Parsing", detail: "Client-side processing" },
        { title: "Metrics", detail: "KPIs and basic typing" },
        { title: "Visuals", detail: "Immediate exploration without backend" },
      ],
    },
    impact: [
      "Makes first-pass dataset exploration more accessible.",
      "Demonstrates frontend design focused on clarity and usefulness.",
      "Shows how I present data without overcomplicating the interface.",
    ],
    topics: ["Astro", "React", "TypeScript", "Tailwind", "Recharts", "XLSX"],
    image: "/files/opslens-browser-analytics.svg",
    github: "https://github.com/bash20cu/opslens",
  },
  {
    title: "Connectivity Tool",
    section: "private",
    type: "Private tooling case",
    summary: "Refactoring of a legacy troubleshooting tool into modular device-based workflows.",
    description:
      "I contributed to the evolution of a troubleshooting tool that moved from one rigid path into several device-specific workflows, with better dynamic loading, reusable components, and clearer state handling. Even without public code, it remains an important part of my story as a developer focused on internal product quality.",
    architecture: {
      label: "Architecture",
      steps: [
        { title: "Legacy flow", detail: "One rigid journey" },
        { title: "Device paths", detail: "Scenario-based workflows" },
        { title: "Reusable parts", detail: "Shared state and components" },
        { title: "Support UX", detail: "More clarity and maintainability" },
      ],
    },
    impact: [
      "Improved maintainability and speed for introducing new variants.",
      "Separated usage scenarios without duplicating unnecessary logic.",
      "Contributed to better support UX and a more scalable internal base.",
    ],
    topics: ["JavaScript", "jQuery", "JSON Pipelines", "Refactoring", "State Management"],
    image: "/projects/connectivitytool.webp",
    company: "Movate / ARRIS - CommScope",
    period: "2021 - 2023",
    role: "Junior Software Developer",
    disclaimer:
      "Private corporate project. The portfolio covers the problem solved and the architecture direction without exposing code or sensitive details.",
  },
  {
    title: "ClinicaPlus",
    section: "academic",
    type: "Academic full-stack project",
    summary: "University system documented with a monolithic SSR architecture to explain layers, data, and deployment.",
    description:
      "This academic build helps show that my university work was not only theoretical. It includes documented architecture decisions, database thinking, and a deployment strategy that connects frontend, backend, and a relational model in a way that is easy to present and defend.",
    architecture: {
      label: "Architecture",
      steps: [
        { title: "SSR UI", detail: "Pages served from Next.js" },
        { title: "App layer", detail: "Validation and coordination" },
        { title: "Relational data", detail: "Model and persistence" },
        { title: "Deploy", detail: "Simple and explainable delivery" },
      ],
    },
    impact: [
      "Turns software architecture into a concrete, deliverable case.",
      "Shows technical documentation and clear layering.",
      "Acts as a bridge between university work and my product-oriented builds.",
    ],
    topics: ["Next.js", "PostgreSQL", "SSR", "Architecture", "Relational modeling"],
    image: "/files/clinicaplus-architecture.svg",
    github: "https://github.com/bash20cu/impl_softw",
  },
  {
    title: "University",
    section: "academic",
    type: "Academic repository",
    summary: "A broader collection of labs and projects across programming, databases, data structures, and artificial intelligence.",
    description:
      "My university repository works better as a map of applied learning than as one single flagship project. It shows UML diagrams, relational models, programming labs, and academic exercises that built the technical base behind the work I do now.",
    architecture: {
      label: "Technical map",
      steps: [
        { title: "Programming", detail: "Labs and coursework builds" },
        { title: "Data structures", detail: "Modeling and logical thinking" },
        { title: "Databases", detail: "ERDs and relational design" },
        { title: "AI / systems", detail: "Breadth beyond CRUD apps" },
      ],
    },
    impact: [
      "Proves academic breadth and consistency over time.",
      "Adds context to my foundations in algorithms, databases, and modeling.",
      "Completes the story between education and professional experience.",
    ],
    topics: ["Java", "C#", "Python", "SQL", "UML", "Data Structures"],
    image: "/projects/universidad.webp",
    github: "https://github.com/bash20cu/Universidad",
  },
]

export const getProjects = ({ currentLocale = "es" }: { currentLocale?: string }) => {
  if (currentLocale === "en") return PROJECTS_EN
  return PROJECTS_ES
}
