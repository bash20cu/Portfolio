const EXPERIENCE_ES = [
  {
    date: "2022 - 8/2025",
    title: "Analista en Tiempo Real / RTA Developer",
    company: "Movate Inc.",
    description:
      "Diseño y desarrollo de soluciones de automatización orientadas a la gestión de Workforce. Creación de reportes dinámicos en Excel con macros en VBA, optimizando la extracción y análisis de datos. Implementación de flujos en Power Automate integrados con Office365 mediante GraphQL, conectando múltiples fuentes (Outlook, SharePoint y Teams) en pipelines de datos. Desarrollo de scripts en VBA y Power Automate Expressions que redujeron los tiempos de análisis en un 60%. Experiencia en integración de APIs de Microsoft para la gestión y visualización de KPIs en tiempo real.",
  },
  {
    date: "2021 - 2023",
    title: "Desarrollador de Software Junior (Proyecto Paralelo)",
    company: "Movate Inc.",
    description:
      "Refactorización de un sistema legacy de troubleshooting basado en un único flujo a una arquitectura modular con múltiples workflows independientes (1LED, 3LED, 4LED, SBG8300, reboot). Implementación de carga dinámica de archivos JSON mediante jQuery y pipelines con `Object.assign`, mejorando la escalabilidad y reduciendo la complejidad del código. Creación de componentes reutilizables (plantillas LED charts) y manejo de estado con `sessionStorage` para optimizar la experiencia de usuario. El cambio permitió pasar de un único flowchart rígido a 5 flujos específicos por dispositivo, mejorando la mantenibilidad y la velocidad de desarrollo de nuevas variantes.",
  },
  {
    date: "2020 - 2022",
    title: "Soporte Técnico Bilingüe (Agente de Call Center)",
    company: "Movate Inc.",
    description:
      "Atención y diagnóstico de módems y routers, además de configuración de redes domésticas para clientes en inglés y español. Destacado por mantener altos indicadores de calidad en llamadas gracias a habilidades comunicativas (empatía, escucha activa y pensamiento deductivo). Mi formación técnica en sistemas me permitió aportar soluciones más allá del soporte estándar, lo que facilitó mi incorporación a un proyecto paralelo de desarrollo interno. Este paso marcó el inicio de mi transición hacia programación y automatización, demostrando iniciativa, capacidad de autoestudio y proactividad en la resolución de problemas.",
  },
];

const EXPERIENCE_EN = [
  {
    date: "2022 - 8/2025",
    title: "Real Time Analyst / RTA Developer",
    company: "Movate Inc.",
    description:
      "Design and development of automation solutions for Workforce Management. Creation of dynamic Excel reports with VBA macros, optimizing data extraction and analysis. Implementation of Power Automate flows integrated with Office365 via GraphQL, connecting multiple sources (Outlook, SharePoint, and Teams) in data pipelines. Development of scripts in VBA and Power Automate Expressions that reduced analysis times by 60%. Experience integrating Microsoft APIs for real-time KPI management and visualization.",
  },
  {
    date: "2021 - 2023",
    title: "Junior Software Developer (Side Project)",
    company: "Movate Inc.",
    description:
      "Refactoring of a legacy troubleshooting system based on a single flow to a modular architecture with multiple independent workflows (1LED, 3LED, 4LED, SBG8300, reboot). Implementation of dynamic JSON file loading via jQuery and pipelines with `Object.assign`, improving scalability and reducing code complexity. Creation of reusable components (LED chart templates) and state management with `sessionStorage` to optimize user experience. The change allowed moving from a single rigid flowchart to 5 specific flows per device, improving maintainability and development speed of new variants.",
  },
  {
    date: "2020 - 2022",
    title: "Bilingual Technical Support (Call Center Agent)",
    company: "Movate Inc.",
    description:
      "Support and diagnosis of modems and routers, as well as home network configuration for clients in English and Spanish. Recognized for maintaining high quality indicators in calls thanks to communication skills (empathy, active listening, and deductive reasoning). My technical background in systems allowed me to provide solutions beyond standard support, which facilitated my incorporation into an internal development side project. This step marked the beginning of my transition to programming and automation, demonstrating initiative, self-study capability, and proactivity in problem-solving.",
  },
];

export const getExperience = ({ currentLocale = 'es' }: { currentLocale?: string }) => {
  if (currentLocale === 'en') return EXPERIENCE_EN
  return EXPERIENCE_ES
}
