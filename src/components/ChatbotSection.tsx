import { memo, useRef, useEffect, useState } from 'react';

interface ChatbotSectionProps {
  lang: string;
}

// Simple intersection observer hook
function useInView(ref: React.RefObject<HTMLElement>, threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isInView;
}

const translations = {
  es: {
    title: 'Asistente Virtual Personal',
    subtitle: 'Pregúntame sobre mi experiencia, habilidades y proyectos',
    description:
      'Mi chatbot con inteligencia artificial está disponible 24/7 para responder todas tus preguntas sobre mi experiencia profesional, tecnologías que domino, proyectos realizados y mucho más. Obtén información detallada sobre mi trayectoria y habilidades al instante.',
    features: [
      'Respuestas inmediatas sobre mi experiencia',
      'Información detallada sobre mis tecnologías',
      'Disponible 24 horas, 7 días a la semana',
      'Conocimiento actualizado sobre todos mis proyectos',
      'Asistencia para evaluar mi perfil profesional',
      'Consultas sobre mi experiencia en desarrollo',
    ],
    buttons: {
      chatNow: 'Chatear Ahora',
      openChatbot: 'Abrir Asistente Personal',
    },
    badge: 'IA Personal',
  },
  en: {
    title: 'Personal Virtual Assistant',
    subtitle: 'Ask me about my experience, skills and projects',
    description:
      'My AI-powered chatbot is available 24/7 to answer all your questions about my professional experience, technologies I master, completed projects and much more. Get detailed information about my career path and skills instantly.',
    features: [
      'Instant answers about my experience',
      'Detailed information about my technologies',
      'Available 24 hours, 7 days a week',
      'Up-to-date knowledge about all my projects',
      'Assistance to evaluate my professional profile',
      'Inquiries about my development experience',
    ],
    buttons: {
      chatNow: 'Chat Now',
      openChatbot: 'Open Personal Assistant',
    },
    badge: 'Personal AI',
  },
};

const ChatbotSection = memo(({ lang }: ChatbotSectionProps) => {
  const t = translations[lang as keyof typeof translations] || translations.en;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, 0.2);

  const handleChatbotClick = () => {
    window.open('https://chat.joseantonionuevo.tech/chat', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 transition-all duration-1000 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${
        isInView ? 'animate-fadeInUp opacity-100' : ''
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              {t.badge}
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-gray-100">{t.title}</h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600 dark:text-gray-300">
            {t.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300">
                {t.description}
              </p>
            </div>

            {/* Features list */}
            <ul className="space-y-4">
              {t.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-slate-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-6 sm:flex-row">
              <button
                onClick={handleChatbotClick}
                className="inline-flex transform items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                {t.buttons.chatNow}
              </button>

              <button
                onClick={() => {
                  // Trigger the existing modal
                  const event = new CustomEvent('open-chatbot-modal');
                  window.dispatchEvent(event);
                }}
                className="inline-flex transform items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-md transition-all duration-200 hover:scale-105 hover:border-blue-500 hover:shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-blue-400"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {t.buttons.openChatbot}
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl dark:border-gray-700 dark:bg-gray-800">
              {/* Chat Interface Preview */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center space-x-3 border-b border-slate-200 pb-4 dark:border-gray-600">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-gray-200">
                      José Antonio Assistant
                    </h3>
                    <p className="text-sm text-green-500">● Online</p>
                  </div>
                </div>

                {/* Sample Messages */}
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="max-w-xs rounded-2xl rounded-bl-md bg-slate-100 px-4 py-2 text-slate-800 dark:bg-gray-700 dark:text-gray-200">
                      <p className="text-sm">
                        {lang === 'es'
                          ? '¡Hola! ¿Qué te gustaría saber sobre José Antonio?'
                          : 'Hello! What would you like to know about José Antonio?'}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-xs rounded-2xl rounded-br-md bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-white">
                      <p className="text-sm">
                        {lang === 'es'
                          ? '¿Cuál es su experiencia con React?'
                          : 'What is his experience with React?'}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-xs rounded-2xl rounded-bl-md bg-slate-100 px-4 py-2 text-slate-800 dark:bg-gray-700 dark:text-gray-200">
                      <p className="text-sm">
                        {lang === 'es'
                          ? 'Tiene más de 5 años con React, Next.js y TypeScript...'
                          : 'He has over 5 years with React, Next.js and TypeScript...'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-2 dark:bg-gray-700">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-slate-400"></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                        style={{ animationDelay: '0.1s' }}
                      ></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 animate-pulse rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-20"></div>
            <div
              className="absolute -bottom-6 -left-6 h-32 w-32 animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 opacity-20"
              style={{ animationDelay: '1s' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
});

ChatbotSection.displayName = 'ChatbotSection';

export default ChatbotSection;