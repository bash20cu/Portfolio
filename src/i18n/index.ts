export const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en',
}

export const getI18N = ({ currentLocale = 'es' }: { currentLocale?: string }) => {
    if (currentLocale === LANGUAGES.ENGLISH) return ENGLISH
    return SPANISH
}

export const SPANISH = {
    SEO: {
        TITLE: "Porfolio de Miguel – Desarrollador y Programador",
        DESCRIPTION: "Soy Miguel Alejandro Fernández Arteaga, desarrollador con experiencia en programación orientada a objetos (Java, C#, JavaScript), análisis de datos y automatización de procesos.",
    },
    HEADER: {
        EXPERIENCE: "Experiencia",
        PROJECTS: "Proyectos",
        ABOUT: "Sobre mí",
        CONTACT: "Contacto",
    },
    HERO: {
        GREETING: "Hey, soy Miguel Fernandez",
        ROLE: "Estudiante de Ingeniería de Software",
        DESCRIPTION_1: "Soy Miguel Alejandro Fernández Arteaga, desarrollador con experiencia en",
        DESCRIPTION_STRONG: "programación orientada a objetos, análisis de datos y automatización de procesos",
        DESCRIPTION_2: ". He trabajado en proyectos de optimización de flujos con VBA, Power Automate y GraphQL de Microsoft, además de crear aplicaciones web y soluciones interactivas. Me apasiona el desarrollo web, la automatización y la creación de herramientas que generan impacto real en los equipos y empresas.",
        AVAILABLE_WORK: "Disponible para trabajar",
        CTA: "¿Tienes un proyecto o propuesta? Escríbeme:",
    },
    ABOUT: {
        TITLE: "Sobre mí",
        P1: "Me llamo Miguel Alejandro. Cuento con más de 6 años de experiencia en <strong>programación orientada a objetos (Java, C#, JavaScript)</strong> y 3 años especializándome en <strong>automatización de procesos</strong>.",
        P2: "He liderado la <strong>optimización de flujos de trabajo</strong> (VBA, Power Automate, GraphQL) reduciendo tiempos de análisis en un 60%, y he transformado sistemas legacy en <strong>arquitecturas modulares modernas</strong>. Me apasiona crear herramientas web interactivas que resuelvan problemas complejos y generen impacto real.",
        P3: "Siempre busco aprender y colaborar en equipo. Puedes ver más de mi código en <a href='https://github.com/bash20cu' target='_blank' class='font-bold hover:text-yellow-500 transition'>GitHub</a>.",
    },
    EXPERIENCE: {
        TITLE: "Experiencia laboral",
    },
    PROJECTS: {
        TITLE: "Proyectos",
        CODE: "Código",
        PREVIEW: "Preview",
    }
}

export const ENGLISH = {
    SEO: {
        TITLE: "Miguel's Portfolio – Developer & Programmer",
        DESCRIPTION: "I am Miguel Alejandro Fernández Arteaga, a developer experienced in OOP (Java, C#, JavaScript), data analysis, and process automation.",
    },
    HEADER: {
        EXPERIENCE: "Experience",
        PROJECTS: "Projects",
        ABOUT: "About Me",
        CONTACT: "Contact",
    },
    HERO: {
        GREETING: "Hey, I'm Miguel Fernandez",
        ROLE: "Software Engineering Student",
        DESCRIPTION_1: "I am Miguel Alejandro Fernández Arteaga, a developer experienced in",
        DESCRIPTION_STRONG: "object-oriented programming, data analysis, and process automation",
        DESCRIPTION_2: ". I have worked on workflow optimization projects using VBA, Power Automate, and Microsoft GraphQL, as well as creating web applications and interactive solutions. I am passionate about web development, automation, and building tools that generate real impact for teams and companies.",
        AVAILABLE_WORK: "Available for work",
        CTA: "Have a project or proposal? Write to me:",
    },
    ABOUT: {
        TITLE: "About Me",
        P1: "My name is Miguel Alejandro. I have over 6 years of experience in <strong>object-oriented programming (Java, C#, JavaScript)</strong> and 3 years specializing in <strong>process automation</strong>.",
        P2: "I have led <strong>workflow optimization</strong> (VBA, Power Automate, GraphQL) reducing analysis times by 60%, and transformed legacy systems into <strong>modern modular architectures</strong>. I am passionate about creating interactive web tools that solve complex problems and drive real impact.",
        P3: "I'm always looking to learn and collaborate. You can check more of my code on <a href='https://github.com/bash20cu' target='_blank' class='font-bold hover:text-yellow-500 transition'>GitHub</a>.",
    },
    EXPERIENCE: {
        TITLE: "Work Experience",
    },
    PROJECTS: {
        TITLE: "Projects",
        CODE: "Code",
        PREVIEW: "Preview",
    }
}
