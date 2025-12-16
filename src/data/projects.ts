export const PROJECTS = [
    {
        title: "RegistroDocente - Sistema de Gestión Académica",
        description: "Plataforma integral para la gestión de instituciones educativas (Directivos, Docentes y Estudiantes). Desarrollada con Next.js (App Router), Server Actions y React 19. Utiliza PostgreSQL (Neon/Supabase) con Prisma ORM para la gestión de datos, y Auth.js v5 para la autenticación segura. La interfaz moderna está construida con Tailwind CSS y Shadcn/ui, asegurando una experiencia de usuario accesible y responsiva. Incluye CI/CD pipeline y tests automatizados con Jest.",
        github: null,
        link: null,
        topics: ["Next.js App Router", "Server Actions", "Prisma", "PostgreSQL", "Shadcn/ui", "Auth.js"],
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
