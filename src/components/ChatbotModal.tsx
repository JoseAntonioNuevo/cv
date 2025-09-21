import { useState, useEffect } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';

export default function ChatbotModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatbotUrl, setChatbotUrl] = useState('');

  useEffect(() => {
    // Determinar la URL del chatbot según el entorno
    const isDevelopment = window.location.hostname === 'localhost';
    if (isDevelopment) {
      // En desarrollo, usa el puerto donde corre tu chatbot local
      setChatbotUrl('http://localhost:3003/chat');
    } else {
      // En producción, usa la URL de tu chatbot desplegado
      setChatbotUrl('https://chat.joseantonionuevo.tech/chat');
    }

    // Listen for custom event to open modal
    const handleOpenModal = () => {
      setIsOpen(true);
    };

    window.addEventListener('open-chatbot-modal', handleOpenModal);
    
    return () => {
      window.removeEventListener('open-chatbot-modal', handleOpenModal);
    };
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón flotante para abrir el chatbot */}
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Abrir chatbot"
      >
        <FaRobot className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Habla conmigo
        </span>
      </button>

      {/* Modal del chatbot */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay oscuro */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={toggleModal}
          />
          
          {/* Contenedor del modal - responsive */}
          <div className="relative w-full max-w-4xl h-[80vh] md:h-[80vh] sm:h-[70vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn lg:max-w-5xl">
            {/* Header del modal */}
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700 bg-gradient-to-r from-blue-500 to-purple-600">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FaRobot className="w-5 h-5" />
                Asistente Virtual de José Antonio
              </h2>
              <button
                onClick={toggleModal}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                aria-label="Cerrar modal"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            
            {/* Iframe del chatbot */}
            <div className="w-full h-[calc(100%-64px)]">
              {chatbotUrl && (
                <iframe
                  src={chatbotUrl}
                  className="w-full h-full border-0"
                  title="Chatbot de José Antonio"
                  allow="microphone"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Estilos para la animación */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}