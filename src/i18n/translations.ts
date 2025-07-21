export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Full Stack Developer",
      description: "Experienced Tech Lead & Full Stack Developer specializing in scalable web applications. Expert in React, Next.js, TypeScript, Python, Laravel, Node.js, and modern testing practices. Proficient with PostgreSQL, Docker, and cloud deployments. Passionate about clean code, performance optimization, and delivering exceptional user experiences. Freelance developer actively seeking new opportunities to build innovative solutions.",
      downloadCV: "Download CV",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      description: "I am a passionate developer with experience in building modern web applications."
    },
    experience: {
      title: "Work Experience",
      current: "Current",
      responsibilities: "Responsibilities"
    },
    education: {
      title: "Education",
      degree: "Degree",
      institution: "Institution",
      period: "Period"
    },
    skills: {
      title: "Skills",
      technical: "Technical Skills",
      languages: "Languages",
      tools: "Tools & Technologies"
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      viewCode: "View Code",
      technologies: "Technologies"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a question or want to work together? Feel free to reach out!",
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
      githubText: "View Projects"
    },
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      experience: "Experiencia",
      education: "Educación",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Full Stack",
      description: "Tech Lead y Desarrollador Full Stack experimentado, especializado en aplicaciones web escalables. Experto en React, Next.js, TypeScript, Python, Laravel, Node.js y prácticas modernas de testing. Dominio de PostgreSQL, Docker y despliegues en la nube. Apasionado por el código limpio, optimización del rendimiento y crear experiencias de usuario excepcionales. Desarrollador freelance buscando activamente nuevas oportunidades para construir soluciones innovadoras.",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame"
    },
    about: {
      title: "Sobre Mí",
      description: "Soy un desarrollador apasionado con experiencia en la creación de aplicaciones web modernas."
    },
    experience: {
      title: "Experiencia Laboral",
      current: "Actual",
      responsibilities: "Responsabilidades"
    },
    education: {
      title: "Educación",
      degree: "Título",
      institution: "Institución",
      period: "Período"
    },
    skills: {
      title: "Habilidades",
      technical: "Habilidades Técnicas",
      languages: "Idiomas",
      tools: "Herramientas y Tecnologías"
    },
    projects: {
      title: "Proyectos",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      technologies: "Tecnologías"
    },
    contact: {
      title: "Ponte en Contacto",
      subtitle: "¿Tienes una pregunta o quieres trabajar juntos? ¡No dudes en contactarme!",
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
      githubText: "Ver Proyectos"
    },
    footer: {
      rights: "Todos los derechos reservados",
      madeWith: "Hecho con"
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;