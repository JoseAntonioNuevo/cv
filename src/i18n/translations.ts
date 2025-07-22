export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      certifications: "Certifications",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Full Stack Developer",
      description:
        "Experienced Tech Lead & Full Stack Developer specializing in scalable web applications. Expert in React, Next.js, TypeScript, Python, Laravel, Node.js, and modern testing practices. Proficient with PostgreSQL, Docker, and cloud deployments. Passionate about clean code, performance optimization, and delivering exceptional user experiences. Freelance developer actively seeking new opportunities to build innovative solutions.",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Me",
      description:
        "I am a passionate developer with experience in building modern web applications.",
    },
    experience: {
      title: "Work Experience",
      current: "Current",
      responsibilities: "Responsibilities",
      companies: {
        recovo: {
          location: "Barcelona, Spain - Hybrid",
          positions: {
            fullstack: "Full Stack Engineer",
            techlead: "Tech Lead",
          },
          descriptions: {
            fullstack:
              "Professional evolution at sustainable fashion technology company: Full Stack Engineer (Oct 2022 - Feb 2025) and Tech Lead (Feb 2025 - Present). Contributing to circular economy platform development from hands-on development to technical leadership.",
            techlead:
              "Professional evolution at sustainable fashion technology company: Full Stack Engineer (Oct 2022 - Feb 2025) and Tech Lead (Feb 2025 - Present). Contributing to circular economy platform development from hands-on development to technical leadership.",
          },
          achievements: {
            fullstack:
              "Built microservices architecture for marketplace platform, implemented real-time inventory management system, developed RESTful APIs and GraphQL endpoints, improved platform performance by 40%",
            techlead:
              "Leading cross-functional teams, designing scalable systems for sustainable marketplace, mentoring developers and establishing best practices, driving architectural decisions and technology adoption",
          },
        },
        acceleralia: {
          location: "Full Remote",
          positions: {
            fullstack: "Full Stack Engineer",
            techlead: "Tech Lead",
            parttime: "Part-time Full Stack Developer",
          },
          descriptions: {
            fullstack:
              "Career progression through multiple roles: Full Stack Engineer (Aug 2020 - Jan 2022), Tech Lead (Jan 2022 - Oct 2022), and Part-time Full Stack Developer (Oct 2022 - Jul 2025). This journey encompassed hands-on development to technical leadership and consultancy.",
            techlead:
              "Career progression through multiple roles: Full Stack Engineer (Aug 2020 - Jan 2022), Tech Lead (Jan 2022 - Oct 2022), and Part-time Full Stack Developer (Oct 2022 - Jul 2025). This journey encompassed hands-on development to technical leadership and consultancy.",
            parttime:
              "Career progression through multiple roles: Full Stack Engineer (Aug 2020 - Jan 2022), Tech Lead (Jan 2022 - Oct 2022), and Part-time Full Stack Developer (Oct 2022 - Jul 2025). This journey encompassed hands-on development to technical leadership and consultancy.",
          },
          achievements: {
            fullstack:
              "Built responsive web applications from scratch, implemented authentication and authorization systems, integrated third-party APIs and payment gateways",
            techlead:
              "Managed team of 8 developers across multiple projects, established coding standards and review processes, introduced agile methodologies improving delivery time by 30%",
            parttime:
              "Maintained critical client applications, provided technical consultancy for ongoing projects, ensured smooth knowledge transfer to new team members",
          },
        },
      },
      present: "Present",
    },
    education: {
      title: "Education",
      degree: "Degree",
      institution: "Institution",
      period: "Period",
      studies: {
        fullstackMasters: {
          degree: "FullStack Web Masters",
          institution: "ThreePoints - The School for Digital Business",
          year: "2022",
          description:
            "Advanced specialization in full-stack web development, focusing on modern technologies and best practices",
        },
        dam: {
          degree:
            "Higher Degree in Multiplatform Application Development (DAM)",
          institution: "Universitat Oberta de Catalunya (UOC)",
          year: "2021",
          description:
            "Comprehensive training in software development for multiple platforms including web, mobile, and desktop applications",
        },
        daw: {
          degree: "Higher Degree in Web Application Development (DAW)",
          institution: "Jesuïtes Bellvitge",
          year: "2020",
          description:
            "Specialized training in web application development, both front-end and back-end technologies",
        },
        bachillerato: {
          degree: "Bachillerato (High School Diploma)",
          institution: "Jesuïtes Bellvitge",
          year: "2018",
          description:
            "Scientific and technological branch with focus on mathematics and computer science",
        },
      },
    },
    skills: {
      title: "Skills",
      technical: "Technical Skills",
      languages: "Languages",
      tools: "Tools & Technologies",
    },
    certifications: {
      title: "Certifications",
      issuer: "Issued by",
      date: "Date",
      academy: "Academy",
      verify: "View Certificate",
      badges: {
        aws: {
          name: "AWS Certified Solutions Architect - Associate",
          academy: "Amazon Web Services",
          issuer: "AWS Training and Certification",
          date: "2023",
          description: "Validates expertise in designing and deploying scalable systems on AWS. Covers compute, networking, storage, and database AWS services with focus on cost optimization and security.",
          image: "/certifications/aws.webp",
          link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
        },
        docker: {
          name: "Docker Certified Associate",
          academy: "Docker Inc.",
          issuer: "Docker Certification Program",
          date: "2022",
          description: "Demonstrates proficiency with Docker containerization technology, including container orchestration, networking, security, and Docker Compose for multi-container applications.",
          image: "/certifications/docker.webp",
          link: "https://training.mirantis.com/certification/dca-certification-exam/",
        },
        react: {
          name: "Meta Front-End Developer Professional Certificate",
          academy: "Meta",
          issuer: "Meta via Coursera",
          date: "2023",
          description: "Comprehensive program covering React, JavaScript ES6+, HTML/CSS, UI/UX design principles, and modern front-end development practices for building responsive web applications.",
          image: "/certifications/meta.webp",
          link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
        },
        gcp: {
          name: "Google Cloud Professional Developer",
          academy: "Google Cloud",
          issuer: "Google Cloud Training",
          date: "2023",
          description: "Validates skills in designing, building, and deploying applications on Google Cloud Platform, including cloud-native development and microservices architecture.",
          image: "/certifications/google.webp",
          link: "https://cloud.google.com/certification/cloud-developer",
        },
        azure: {
          name: "Microsoft Azure Developer Associate",
          academy: "Microsoft",
          issuer: "Microsoft Learn",
          date: "2022",
          description: "Demonstrates expertise in developing solutions for Azure, including compute solutions, Azure storage, security implementation, monitoring, and troubleshooting.",
          image: "/certifications/microsoft.webp",
          link: "https://docs.microsoft.com/en-us/certifications/azure-developer/",
        },
        kubernetes: {
          name: "Certified Kubernetes Application Developer",
          academy: "Cloud Native Computing Foundation",
          issuer: "CNCF",
          date: "2023",
          description: "Validates skills in designing and deploying cloud-native applications for Kubernetes, including application lifecycle management and troubleshooting.",
          image: "/certifications/kubernetes.webp",
          link: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/",
        },
        fullstack: {
          name: "Full Stack Web Development Bootcamp",
          academy: "The Odin Project",
          issuer: "The Odin Project",
          date: "2021",
          description: "Intensive program covering full-stack development with HTML, CSS, JavaScript, Node.js, Express, MongoDB, React, and modern development workflows including Git and testing.",
          image: "/certifications/coursera.webp",
          link: "https://www.theodinproject.com/",
        },
        typescript: {
          name: "TypeScript Essential Training",
          academy: "LinkedIn Learning",
          issuer: "LinkedIn Learning",
          date: "2022",
          description: "Comprehensive training in TypeScript fundamentals, advanced types, generics, decorators, and integration with popular frameworks like React and Node.js.",
          image: "/certifications/udemy.webp",
          link: "https://www.linkedin.com/learning/typescript-essential-training",
        },
      },
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      viewCode: "View Code",
      technologies: "Technologies",
      portfolio: {
        registryApi: {
          title: "Registry API",
          description:
            "RESTful API built with Laravel for managing registry operations. Features include authentication, CRUD operations, data validation, and comprehensive API documentation.",
          technologies: ["Laravel", "PHP", "MySQL", "REST API"],
        },
        boardGame: {
          title: "Interactive Board Game",
          description:
            "Modern web-based board game built with Next.js. Features real-time gameplay, responsive design, game state management, and smooth animations for an engaging user experience.",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Have a question or want to work together? Feel free to reach out!",
      connectTitle: "Let's Connect",
      connectSubtitle: "Choose your preferred method of communication",
      sendMessageTitle: "Send a Message",
      name: "Your Name",
      namePlaceholder: "John Doe",
      email: "Your Email",
      emailPlaceholder: "john@example.com",
      subject: "Subject",
      subjectPlaceholder: "Project Inquiry",
      message: "Message",
      messagePlaceholder: "Your message here...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinText: "View Profile",
      githubText: "View Projects",
    },
    footer: {
      copyright: "All rights reserved",
      madeWith: "Made with",
      builtWith: "Built with",
      location: "Barcelona, Spain",
      quickLinks: "Quick Links",
      contactInfo: "Contact Information",
      followMe: "Follow Me",
      backToTop: "Back to Top",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      experience: "Experiencia",
      education: "Educación",
      skills: "Habilidades",
      certifications: "Certificaciones",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Full Stack",
      description:
        "Tech Lead y Desarrollador Full Stack experimentado, especializado en aplicaciones web escalables. Experto en React, Next.js, TypeScript, Python, Laravel, Node.js y prácticas modernas de testing. Dominio de PostgreSQL, Docker y despliegues en la nube. Apasionado por el código limpio, optimización del rendimiento y crear experiencias de usuario excepcionales. Desarrollador freelance buscando activamente nuevas oportunidades para construir soluciones innovadoras.",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Soy un desarrollador apasionado con experiencia en la creación de aplicaciones web modernas.",
    },
    experience: {
      title: "Experiencia Laboral",
      current: "Actual",
      responsibilities: "Responsabilidades",
      companies: {
        recovo: {
          location: "Barcelona, España - Híbrido",
          positions: {
            fullstack: "Ingeniero Full Stack",
            techlead: "Tech Lead",
          },
          descriptions: {
            fullstack:
              "Evolución profesional en empresa de tecnología de moda sostenible: Ingeniero Full Stack (Oct 2022 - Feb 2025) y Tech Lead (Feb 2025 - Presente). Contribuyendo al desarrollo de plataforma de economía circular desde desarrollo práctico hasta liderazgo técnico.",
            techlead:
              "Evolución profesional en empresa de tecnología de moda sostenible: Ingeniero Full Stack (Oct 2022 - Feb 2025) y Tech Lead (Feb 2025 - Presente). Contribuyendo al desarrollo de plataforma de economía circular desde desarrollo práctico hasta liderazgo técnico.",
          },
          achievements: {
            fullstack:
              "Construí arquitectura de microservicios para plataforma de marketplace, implementé sistema de gestión de inventario en tiempo real, desarrollé APIs RESTful y endpoints GraphQL, mejoré el rendimiento de la plataforma en un 40%",
            techlead:
              "Liderando equipos multifuncionales, diseñando sistemas escalables para marketplace sostenible, mentoreando desarrolladores y estableciendo mejores prácticas, impulsando decisiones arquitectónicas y adopción de tecnologías",
          },
        },
        acceleralia: {
          location: "Remoto Completo",
          positions: {
            fullstack: "Ingeniero Full Stack",
            techlead: "Tech Lead",
            parttime: "Desarrollador Full Stack de Medio Tiempo",
          },
          descriptions: {
            fullstack:
              "Progresión profesional a través de múltiples roles: Ingeniero Full Stack (Ago 2020 - Ene 2022), Tech Lead (Ene 2022 - Oct 2022), y Desarrollador Full Stack de Medio Tiempo (Oct 2022 - Jul 2025). Este viaje abarcó desde desarrollo práctico hasta liderazgo técnico y consultoría.",
            techlead:
              "Progresión profesional a través de múltiples roles: Ingeniero Full Stack (Ago 2020 - Ene 2022), Tech Lead (Ene 2022 - Oct 2022), y Desarrollador Full Stack de Medio Tiempo (Oct 2022 - Jul 2025). Este viaje abarcó desde desarrollo práctico hasta liderazgo técnico y consultoría.",
            parttime:
              "Progresión profesional a través de múltiples roles: Ingeniero Full Stack (Ago 2020 - Ene 2022), Tech Lead (Ene 2022 - Oct 2022), y Desarrollador Full Stack de Medio Tiempo (Oct 2022 - Jul 2025). Este viaje abarcó desde desarrollo práctico hasta liderazgo técnico y consultoría.",
          },
          achievements: {
            fullstack:
              "Construí aplicaciones web responsivas desde cero, implementé sistemas de autenticación y autorización, integré APIs de terceros y pasarelas de pago",
            techlead:
              "Gestioné equipo de 8 desarrolladores en múltiples proyectos, establecí estándares de código y procesos de revisión, introduje metodologías ágiles mejorando el tiempo de entrega en un 30%",
            parttime:
              "Mantuve aplicaciones críticas de clientes, proporcioné consultoría técnica para proyectos en curso, aseguré transferencia de conocimiento fluida a nuevos miembros del equipo",
          },
        },
      },
      present: "Presente",
    },
    education: {
      title: "Educación",
      degree: "Título",
      institution: "Institución",
      period: "Período",
      studies: {
        fullstackMasters: {
          degree: "FullStack Web Masters",
          institution: "ThreePoints - The School for Digital Business",
          year: "2022",
          description:
            "Especialización avanzada en desarrollo web full-stack, enfocada en tecnologías modernas y mejores prácticas",
        },
        dam: {
          degree:
            "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
          institution: "Universitat Oberta de Catalunya (UOC)",
          year: "2021",
          description:
            "Formación integral en desarrollo de software para múltiples plataformas incluyendo aplicaciones web, móviles y de escritorio",
        },
        daw: {
          degree: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
          institution: "Jesuïtes Bellvitge",
          year: "2020",
          description:
            "Formación especializada en desarrollo de aplicaciones web, tecnologías front-end y back-end",
        },
        bachillerato: {
          degree: "Bachillerato",
          institution: "Jesuïtes Bellvitge",
          year: "2018",
          description:
            "Rama científica y tecnológica con enfoque en matemáticas e informática",
        },
      },
    },
    skills: {
      title: "Habilidades",
      technical: "Habilidades Técnicas",
      languages: "Idiomas",
      tools: "Herramientas y Tecnologías",
    },
    certifications: {
      title: "Certificaciones",
      issuer: "Emitido por",
      date: "Fecha",
      academy: "Academia",
      verify: "Ver Certificado",
      badges: {
        aws: {
          name: "AWS Certified Solutions Architect - Associate",
          academy: "Amazon Web Services",
          issuer: "AWS Training and Certification",
          date: "2023",
          description: "Valida la experiencia en el diseño y despliegue de sistemas escalables en AWS. Cubre servicios de cómputo, redes, almacenamiento y bases de datos con enfoque en optimización de costos y seguridad.",
          image: "/certifications/aws.webp",
          link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
        },
        docker: {
          name: "Docker Certified Associate",
          academy: "Docker Inc.",
          issuer: "Programa de Certificación Docker",
          date: "2022",
          description: "Demuestra competencia en tecnología de contenedorización Docker, incluyendo orquestación de contenedores, redes, seguridad y Docker Compose para aplicaciones multi-contenedor.",
          image: "/certifications/docker.webp",
          link: "https://training.mirantis.com/certification/dca-certification-exam/",
        },
        react: {
          name: "Certificado Profesional de Desarrollador Front-End de Meta",
          academy: "Meta",
          issuer: "Meta vía Coursera",
          date: "2023",
          description: "Programa integral que cubre React, JavaScript ES6+, HTML/CSS, principios de diseño UI/UX y prácticas modernas de desarrollo front-end para crear aplicaciones web responsivas.",
          image: "/certifications/meta.webp",
          link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
        },
        gcp: {
          name: "Google Cloud Professional Developer",
          academy: "Google Cloud",
          issuer: "Google Cloud Training",
          date: "2023",
          description: "Valida habilidades en el diseño, construcción y despliegue de aplicaciones en Google Cloud Platform, incluyendo desarrollo cloud-native y arquitectura de microservicios.",
          image: "/certifications/google.webp",
          link: "https://cloud.google.com/certification/cloud-developer",
        },
        azure: {
          name: "Microsoft Azure Developer Associate",
          academy: "Microsoft",
          issuer: "Microsoft Learn",
          date: "2022",
          description: "Demuestra experiencia en el desarrollo de soluciones para Azure, incluyendo soluciones de cómputo, almacenamiento de Azure, implementación de seguridad, monitoreo y resolución de problemas.",
          image: "/certifications/microsoft.webp",
          link: "https://docs.microsoft.com/en-us/certifications/azure-developer/",
        },
        kubernetes: {
          name: "Certified Kubernetes Application Developer",
          academy: "Cloud Native Computing Foundation",
          issuer: "CNCF",
          date: "2023",
          description: "Valida habilidades en el diseño y despliegue de aplicaciones cloud-native para Kubernetes, incluyendo gestión del ciclo de vida de aplicaciones y resolución de problemas.",
          image: "/certifications/kubernetes.webp",
          link: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/",
        },
        fullstack: {
          name: "Bootcamp de Desarrollo Web Full Stack",
          academy: "The Odin Project",
          issuer: "The Odin Project",
          date: "2021",
          description: "Programa intensivo que cubre desarrollo full-stack con HTML, CSS, JavaScript, Node.js, Express, MongoDB, React y flujos de trabajo de desarrollo modernos incluyendo Git y testing.",
          image: "/certifications/coursera.webp",
          link: "https://www.theodinproject.com/",
        },
        typescript: {
          name: "Entrenamiento Esencial de TypeScript",
          academy: "LinkedIn Learning",
          issuer: "LinkedIn Learning",
          date: "2022",
          description: "Entrenamiento integral en fundamentos de TypeScript, tipos avanzados, genéricos, decoradores e integración con frameworks populares como React y Node.js.",
          image: "/certifications/udemy.webp",
          link: "https://www.linkedin.com/learning/typescript-essential-training",
        },
      },
    },
    projects: {
      title: "Proyectos",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      technologies: "Tecnologías",
      portfolio: {
        registryApi: {
          title: "API de Registro",
          description:
            "API RESTful construida con Laravel para gestionar operaciones de registro. Incluye autenticación, operaciones CRUD, validación de datos y documentación completa de la API.",
          technologies: ["Laravel", "PHP", "MySQL", "REST API"],
        },
        boardGame: {
          title: "Juego de Mesa Interactivo",
          description:
            "Juego de mesa moderno basado en web construido con Next.js. Incluye juego en tiempo real, diseño responsivo, gestión del estado del juego y animaciones fluidas para una experiencia de usuario atractiva.",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
      },
    },
    contact: {
      title: "Ponte en Contacto",
      subtitle:
        "¿Tienes una pregunta o quieres trabajar juntos? ¡No dudes en contactarme!",
      connectTitle: "Conectemos",
      connectSubtitle: "Elige tu método de comunicación preferido",
      sendMessageTitle: "Enviar un Mensaje",
      name: "Tu Nombre",
      namePlaceholder: "Juan Pérez",
      email: "Tu Correo Electrónico",
      emailPlaceholder: "juan@ejemplo.com",
      subject: "Asunto",
      subjectPlaceholder: "Consulta de Proyecto",
      message: "Mensaje",
      messagePlaceholder: "Tu mensaje aquí...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Teléfono",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinText: "Ver Perfil",
      githubText: "Ver Proyectos",
    },
    footer: {
      copyright: "Todos los derechos reservados",
      madeWith: "Hecho con",
      builtWith: "Construido con",
      location: "Barcelona, España",
      quickLinks: "Enlaces Rápidos",
      contactInfo: "Información de Contacto",
      followMe: "Sígueme",
      backToTop: "Volver Arriba",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
