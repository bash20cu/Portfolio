export const PROJECTS = [
    {
        title: "RegistroDocente - Sistema de Gestión Académica",
        description: "Sistema integral de gestión académica con control de acceso basado en roles (Directivos, Docentes, Estudiantes). Desarrollado con Next.js 15 y React 19 (Server Actions). Stack robusto: PostgreSQL + Prisma ORM, validaciones con Zod y autenticación Auth.js v5. Features destacadas: dashboard analítico (Recharts), emails transaccionales (Resend) e integración con Telegram Bot para consultas en tiempo real. Infraestructura dockerizada y calidad asegurada con Jest/RTL.",
        github: null,
        link: "https://registro-docente-sage.vercel.app/",
        topics: ["Next.js 15", "Prisma", "PostgreSQL", "Shadcn/ui", "Auth.js", "Telegram", "Jest"],
        languages: [{ name: "TypeScript", percent: "100%" }],
        image: "/projects/registro-docente.png",
    },
    {
        title: "ONE-Alura",
        description: "Proyecto Final de Alura Latam",
        github: "https://github.com/bash20cu/ONE-Alura",
        link: null,
        topics: ["Alura", "Java", "Tailwind"],
        languages: [
            { name: "javascript", percent: "100%" }
        ],
        image: "/projects/one-alura.webp",
    },
    {
        title: "Proyecto academico en CSharp",
        description: "Proyecto académico avanzado aplicando conceptos de programación, estructuras de datos y control de versiones.",
        github: "https://github.com/bash20cu/Progra-4",
        topics: ["C#", "Programación", "Estructuras de datos"],
        languages: [{ name: "C#", percent: "100%" }],
        image: "/projects/progra4.webp",
    },
    {
        title: "Universidad",
        description: "Repositorio con proyectos académicos en Java, Python, C# y bases de datos.",
        github: "https://github.com/bash20cu/Universidad",
        topics: ["Java", "Python", "C#"],
        languages: [
            { name: "Java", percent: "50%" },
            { name: "Python", percent: "50%" }
        ],
        image: "/projects/universidad.webp",
    },
    {
        title: "Connectivity Tool (Proyecto Privado)",
        company: "Movate Inc.",
        period: "2021 – 2023",
        description: "Refactorización de un sistema legacy de troubleshooting basado en un único flujo a una arquitectura modular con múltiples workflows independientes (1LED, 3LED, 4LED, SBG8300, reboot). Implementación de carga dinámica de archivos JSON mediante jQuery y pipelines con Object.assign, mejorando la escalabilidad y reduciendo la complejidad del código. Creación de componentes reutilizables (plantillas LED charts) y manejo de estado con sessionStorage para optimizar la experiencia de usuario. El cambio permitió pasar de un único flowchart rígido a 5 flujos específicos por dispositivo, mejorando la mantenibilidad y la velocidad de desarrollo de nuevas variantes.",
        disclaimer: "⚠️ Proyecto privado, propiedad de Arris - CommScope. Incluido en el portafolio como side project (sin exponer código).",
        topics: ["jQuery", "Arquitectura modular", "Refactorización", "JSON Pipelines", "State Management"],
        role: "Desarrollador de Software Junior",
        image: "/projects/connectivitytool.webp",
    }
];
