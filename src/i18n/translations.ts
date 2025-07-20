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
      description: "Passionate about creating innovative web solutions",
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
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again."
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
      description: "Apasionado por crear soluciones web innovadoras",
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
      name: "Nombre",
      email: "Correo Electrónico",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo."
    },
    footer: {
      rights: "Todos los derechos reservados",
      madeWith: "Hecho con"
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;