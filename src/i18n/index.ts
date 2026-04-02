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
        TITLE: "Portfolio de Miguel – Software, Automatización y Datos",
        DESCRIPTION: "Miguel Alejandro Fernández Arteaga crea herramientas internas, automatizaciones y sistemas de análisis que mejoran operaciones reales con software, datos y visión de negocio.",
    },
    HEADER: {
        EXPERIENCE: "Experiencia",
        PROJECTS: "Proyectos",
        ABOUT: "Sobre mí",
        CONTACT: "Contacto",
        POSITIONING: "Valor",
        JOURNEY: "Roadmap",
        LEARNING: "Aprendizaje",
    },
    HERO: {
        GREETING: "Miguel Alejandro Fernández Arteaga",
        ROLE: "Software, automatización y análisis para operaciones reales",
        DESCRIPTION_1: "Construyo",
        DESCRIPTION_STRONG: "herramientas internas, automatizaciones y sistemas de análisis",
        DESCRIPTION_2: " que reducen trabajo manual, mejoran la toma de decisiones y conectan tecnología con operación. Mi experiencia mezcla desarrollo web, BI, WFM e iniciativas ITSM con enfoque claro en impacto de negocio.",
        AVAILABLE_WORK: "Disponible para roles en software, automation y BI",
        CTA: "Conversemos si necesitas alguien que convierta procesos complejos en sistemas útiles:",
        PRIMARY_CTA: "Ver proyectos",
        SECONDARY_CTA: "Descargar CV",
        CONTACT_BUTTON: "Contáctame",
        EMAIL_LABEL: "Correo",
        HIGHLIGHTS: [
            "6+ años programando y construyendo soluciones",
            "60% menos tiempo de análisis con automatización",
            "Experiencia con equipos globales y operación real",
        ],
    },
    POSITIONING: {
        TITLE: "Cómo aporto valor",
        INTRO: "Mi mejor aporte ocurre en la intersección entre software, automatización y decisiones operativas.",
        PILLARS: [
            {
                title: "Software aplicado",
                description: "Desarrollo herramientas internas, simuladores y experiencias web orientadas a procesos reales, no solo demos técnicas.",
            },
            {
                title: "Automatización con impacto",
                description: "Transformo tareas repetitivas en flujos confiables con Power Automate, VBA, SQL y lógica de negocio clara.",
            },
            {
                title: "Datos para decidir",
                description: "Conecto KPIs, reporting y análisis para que líderes y equipos puedan actuar con rapidez y mejor contexto.",
            },
        ],
    },
    JOURNEY: {
        TITLE: "Roadmap de lo que he construido",
        INTRO: "Mi trayectoria no ha sido lineal: fui sumando soporte, operación, automatización, frontend, backend, arquitectura y formación universitaria documentada hasta convertirme en un perfil más completo de producto y software.",
        STEPS: [
            {
                period: "Base técnica",
                title: "Fundamentos de programación, redes y bases de datos",
                description: "Mi formación técnica y universitaria me dio base en Java, C#, Python, bases de datos, redes, estructuras de datos, sistemas operativos y diseño de software. Esa mezcla explica por qué hoy puedo moverme con comodidad entre frontend, backend y análisis.",
            },
            {
                period: "Operación real",
                title: "Soporte, contexto de negocio y experiencia con usuarios",
                description: "Trabajar en soporte técnico me obligó a entender usuarios, presión operativa, diagnóstico rápido y continuidad del servicio. Ahí empecé a desarrollar criterio práctico, no solo técnico.",
            },
            {
                period: "Automatización",
                title: "Procesos, reporting y mejora operativa",
                description: "Después llevé ese contexto a automatización, reporting, análisis de datos y KPIs en entornos WFM. Reduje tiempos de análisis, construí flujos de aprobación y ayudé a convertir operación en información accionable.",
            },
            {
                period: "Producto",
                title: "Herramientas internas, frontend y full-stack",
                description: "Paralelamente fui entrando más a producto y desarrollo: simuladores, herramientas internas, dashboards y luego sistemas full-stack con autenticación, bases de datos, roles, reporting y UX más madura.",
            },
        ],
    },
    LEARNING: {
        TITLE: "Aprendizaje y formación",
        INTRO: "Mi aprendizaje combina experiencia laboral, universidad y formación técnica complementaria. No crecí en una sola rama: fui construyendo criterio en software, análisis, arquitectura, UX, operación, nube y gestión.",
        AREAS: [
            {
                title: "Ingeniería de software y arquitectura",
                description: "Mi ruta en UIA cubre análisis y especificación, diseño de software, arquitectura de software, calidad, verificación y validación, procesos de ingeniería e implementación y mantenimiento.",
                courses: "UIA: análisis, diseño, arquitectura, calidad, procesos e implementación",
            },
            {
                title: "Programación, backend y datos",
                description: "Mi trayectoria académica y práctica cubre programación 1-4, tópicos avanzados, bases de datos 1-2, estructuras de datos y algoritmos, sistemas operativos, redes y proyectos con SQL, modelado y lógica de negocio.",
                courses: "UIA: programación 1-4, tópicos avanzados, BD 1-2, estructuras, SO y redes",
            },
            {
                title: "Producto, UX y gestión",
                description: "También he desarrollado criterio en interacción humano-computadora, administración de proyectos informáticos, probabilidad y estadística, investigación de operaciones e inglés aplicado a entornos profesionales.",
                courses: "UIA: UX, proyectos, estadística, investigación de operaciones e inglés",
            },
        ],
        CERTIFICATIONS_LABEL: "Certificación destacada",
        CERT_TITLE: "Fundamentos de Azure",
        CERT_DESCRIPTION: "Certificación del Instituto Nacional de Aprendizaje (INA), completada en noviembre de 2025. Refuerza mi base en servicios cloud, conceptos de infraestructura y visión moderna de plataformas.",
        CERT_META: "INA · 50 horas · Noviembre 2025",
        DEGREE_LABEL: "Trayectoria universitaria",
        DEGREE_TITLE: "Ingeniería de Software en UIA",
        DEGREE_DESCRIPTION: "Mi roadmap universitario ya documenta cursos aprobados y proyectos visibles en áreas como bases de datos, estructuras de datos, programación, inteligencia artificial, PowerShell y tópicos avanzados. Esa amplitud explica por qué hoy puedo presentarme con más solidez como full-stack con criterio de producto y operación.",
    },
    ABOUT: {
        TITLE: "Sobre mí",
        P1: "Soy estudiante de Ingeniería de Software con experiencia construyendo puentes entre <strong>operaciones, automatización y desarrollo</strong>. Mi recorrido empezó en soporte técnico, creció en entornos de operación global y evolucionó hacia herramientas internas, reporting, BI y mejora de procesos.",
        P2: "He trabajado con <strong>Excel avanzado, Power Automate, SQL, Power BI, JavaScript, jQuery, HTML/CSS, Java, C# y Python</strong>, siempre con la misma meta: reducir fricción, acelerar análisis y convertir necesidades operativas en soluciones escalables.",
        P3: "Hoy me vendo mejor como un perfil híbrido: alguien que entiende la operación, habla con negocio y también puede construir la solución. Puedes ver más de mi trabajo en <a href='https://github.com/bash20cu' target='_blank' rel='noopener noreferrer' class='font-bold hover:text-yellow-500 transition'>GitHub</a>.",
        CV_ES: "Ver CV más reciente en español",
        CV_EN: "View latest resume in English",
    },
    EXPERIENCE: {
        TITLE: "Experiencia laboral",
    },
    PROJECTS: {
        TITLE: "Proyectos",
        FEATURED_TITLE: "Trabajo destacado",
        FEATURED_INTRO: "Los proyectos que mejor representan hoy mi mezcla de full-stack, automatización, datos y criterio de producto.",
        PRIVATE_TITLE: "Sistemas privados y tooling",
        PRIVATE_INTRO: "Casos donde puedo explicar arquitectura, decisiones y valor sin exponer código ni materiales sensibles.",
        ACADEMIC_TITLE: "Base académica visible",
        ACADEMIC_INTRO: "Proyectos de universidad que todavía aportan contexto técnico y muestran cómo fui construyendo criterio de arquitectura y datos.",
        VISUAL_HINT: "Pasa el cursor para ver visual",
        CODE: "Código",
        PREVIEW: "Preview",
        IMPACT: "Impacto",
    },
    CONTACT: {
        OPEN: "Contáctame",
        CLOSE: "Cerrar",
        TITLE: "Hablemos",
        DESCRIPTION: "Cuéntame qué estás construyendo o qué tipo de rol tienes en mente.",
        EMAIL_PLACEHOLDER: "Tu correo…",
        MESSAGE_PLACEHOLDER: "Tu mensaje…",
        SUBMIT: "Enviar mensaje",
        CANCEL: "Cancelar",
        DIRECT: "También puedes escribirme a",
    },
    FOOTER: {
        ABOUT: "Sobre mí",
        CONTACT: "Contacto",
    },
    UI: {
        SWITCH_LANGUAGE: "Cambiar idioma",
        THEME: "Cambiar tema",
        MENU: "Abrir menú",
        CLOSE_MENU: "Cerrar menú",
        PREVIOUS_PROJECT: "Proyecto anterior",
        NEXT_PROJECT: "Siguiente proyecto",
        PREVIOUS_EXPERIENCE: "Experiencia anterior",
        NEXT_EXPERIENCE: "Siguiente experiencia",
    }
}

export const ENGLISH = {
    SEO: {
        TITLE: "Miguel's Portfolio – Software, Automation & Data",
        DESCRIPTION: "Miguel Alejandro Fernandez Arteaga builds internal tools, automation workflows, and analytics systems that improve real operations through software, data, and business context.",
    },
    HEADER: {
        EXPERIENCE: "Experience",
        PROJECTS: "Projects",
        ABOUT: "About Me",
        CONTACT: "Contact",
        POSITIONING: "Value",
        JOURNEY: "Roadmap",
        LEARNING: "Learning",
    },
    HERO: {
        GREETING: "Miguel Alejandro Fernandez Arteaga",
        ROLE: "Software, automation, and data for real operations",
        DESCRIPTION_1: "I build",
        DESCRIPTION_STRONG: "internal tools, automation flows, and analytics systems",
        DESCRIPTION_2: " that reduce manual work, improve decision-making, and connect technology with operations. My background combines web development, BI, WFM, and ITSM exposure with a strong business-impact mindset.",
        AVAILABLE_WORK: "Open to software, automation, and BI roles",
        CTA: "Let's talk if you need someone who can turn complex processes into useful systems:",
        PRIMARY_CTA: "View projects",
        SECONDARY_CTA: "Download resume",
        CONTACT_BUTTON: "Contact me",
        EMAIL_LABEL: "Email",
        HIGHLIGHTS: [
            "6+ years building with programming and applied tech",
            "60% faster analysis through automation initiatives",
            "Experience across global teams and real operations",
        ],
    },
    POSITIONING: {
        TITLE: "How I create value",
        INTRO: "My strongest contribution happens at the intersection of software, automation, and operational decision-making.",
        PILLARS: [
            {
                title: "Applied software",
                description: "I build internal tools, simulators, and web experiences designed around real workflows, not just technical demos.",
            },
            {
                title: "Automation with impact",
                description: "I turn repetitive tasks into reliable flows using Power Automate, VBA, SQL, and clear business logic.",
            },
            {
                title: "Data for decisions",
                description: "I connect KPIs, reporting, and analysis so leaders and teams can act faster with better context.",
            },
        ],
    },
    JOURNEY: {
        TITLE: "Roadmap of what I've built",
        INTRO: "My trajectory has not been linear: I kept adding support, operations, automation, frontend, backend, architecture, and documented university work until I became a more complete software and product profile.",
        STEPS: [
            {
                period: "Technical base",
                title: "Programming, networking, and database foundations",
                description: "My technical and university background gave me a base in Java, C#, Python, databases, networking, data structures, operating systems, and software design. That mix explains why I can move comfortably between frontend, backend, and analysis today.",
            },
            {
                period: "Real operations",
                title: "Support, business context, and user-facing experience",
                description: "Working in technical support forced me to understand users, operational pressure, fast diagnosis, and service continuity. That is where I started building practical product judgment, not only technical knowledge.",
            },
            {
                period: "Automation",
                title: "Processes, reporting, and operational improvement",
                description: "I then brought that context into automation, reporting, data analysis, and KPIs in WFM environments. I reduced analysis time, built approval flows, and helped turn operations into actionable information.",
            },
            {
                period: "Product",
                title: "Internal tools, frontend, and full-stack systems",
                description: "At the same time, I kept moving deeper into product and development: simulators, internal tools, dashboards, and then full-stack systems with authentication, databases, roles, reporting, and stronger UX.",
            },
        ],
    },
    LEARNING: {
        TITLE: "Learning and education",
        INTRO: "My learning combines work experience, university coursework, and technical training. I did not grow in only one lane: I built judgment across software, analysis, architecture, UX, operations, cloud, and project thinking.",
        AREAS: [
            {
                title: "Software engineering and architecture",
                description: "My UIA path covers analysis and specification, software design, software architecture, quality, verification and validation, engineering processes, and implementation and maintenance.",
                courses: "UIA: analysis, design, architecture, quality, processes, implementation",
            },
            {
                title: "Programming, backend, and data",
                description: "My academic and practical path covers programming 1-4, advanced programming topics, databases 1-2, data structures and algorithms, operating systems, networking, plus projects involving SQL, modeling, and business logic.",
                courses: "UIA: programming 1-4, advanced programming, databases, data structures, OS, networking",
            },
            {
                title: "Product, UX, and management",
                description: "I have also developed judgment in human-computer interaction, IT project management, probability and statistics, operations research, and English for professional environments.",
                courses: "UIA: UX, project management, statistics, operations research, English",
            },
        ],
        CERTIFICATIONS_LABEL: "Featured certification",
        CERT_TITLE: "Azure Fundamentals",
        CERT_DESCRIPTION: "Certification completed through Costa Rica's Instituto Nacional de Aprendizaje (INA) in November 2025. It reinforces my base in cloud services, infrastructure concepts, and modern platform thinking.",
        CERT_META: "INA · 50 hours · November 2025",
        DEGREE_LABEL: "University path",
        DEGREE_TITLE: "Software Engineering at UIA",
        DEGREE_DESCRIPTION: "My university roadmap already documents completed coursework and visible projects across databases, data structures, programming, artificial intelligence, PowerShell, and advanced topics. That breadth is one reason I can now position myself more honestly as a full-stack profile with product and operations judgment.",
    },
    ABOUT: {
        TITLE: "About Me",
        P1: "I'm a Software Engineering student with hands-on experience building bridges between <strong>operations, automation, and software delivery</strong>. My path started in technical support, grew through global operations, and evolved into internal tools, reporting, BI, and process improvement.",
        P2: "I have worked with <strong>advanced Excel, Power Automate, SQL, Power BI, JavaScript, jQuery, HTML/CSS, Java, C#, and Python</strong>, always with the same goal: reduce friction, speed up analysis, and turn operational needs into scalable solutions.",
        P3: "Today, my strongest positioning is as a hybrid profile: someone who understands the operation, can speak with business stakeholders, and can also build the solution. You can explore more of my work on <a href='https://github.com/bash20cu' target='_blank' rel='noopener noreferrer' class='font-bold hover:text-yellow-500 transition'>GitHub</a>.",
        CV_ES: "View latest CV in Spanish",
        CV_EN: "View latest resume in English",
    },
    EXPERIENCE: {
        TITLE: "Work Experience",
    },
    PROJECTS: {
        TITLE: "Projects",
        FEATURED_TITLE: "Featured work",
        FEATURED_INTRO: "The projects that best represent my current mix of full-stack development, automation, data, and product judgment.",
        PRIVATE_TITLE: "Private systems and tooling",
        PRIVATE_INTRO: "Cases where I can explain architecture, decisions, and value without exposing sensitive code or materials.",
        ACADEMIC_TITLE: "Visible academic foundation",
        ACADEMIC_INTRO: "University projects that still add technical context and show how I built stronger architecture and data judgment over time.",
        VISUAL_HINT: "Hover to preview visual",
        CODE: "Code",
        PREVIEW: "Preview",
        IMPACT: "Impact",
    },
    CONTACT: {
        OPEN: "Contact me",
        CLOSE: "Close",
        TITLE: "Let's talk",
        DESCRIPTION: "Tell me what you're building or what kind of role you have in mind.",
        EMAIL_PLACEHOLDER: "Your email…",
        MESSAGE_PLACEHOLDER: "Your message…",
        SUBMIT: "Send message",
        CANCEL: "Cancel",
        DIRECT: "You can also email me at",
    },
    FOOTER: {
        ABOUT: "About Me",
        CONTACT: "Contact",
    },
    UI: {
        SWITCH_LANGUAGE: "Switch language",
        THEME: "Change theme",
        MENU: "Open menu",
        CLOSE_MENU: "Close menu",
        PREVIOUS_PROJECT: "Previous project",
        NEXT_PROJECT: "Next project",
        PREVIOUS_EXPERIENCE: "Previous experience",
        NEXT_EXPERIENCE: "Next experience",
    }
}
