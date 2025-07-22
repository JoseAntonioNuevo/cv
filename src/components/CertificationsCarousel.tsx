import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaCertificate,
} from "react-icons/fa";

interface Certification {
  id: string;
  certification_title: string;
  description: string;
  institution_image: string;
  certification_url: string;
  year: number;
  platform: string;
}

interface CertificationsCarouselProps {
  certifications: Certification[];
  verifyText: string;
}

export default function CertificationsCarousel({
  certifications,
  verifyText,
}: CertificationsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Dynamic items per slide based on screen size
  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(certifications.length / itemsPerSlide);
  
  const groupedCertifications = [];
  for (let i = 0; i < certifications.length; i += itemsPerSlide) {
    groupedCertifications.push(certifications.slice(i, i + itemsPerSlide));
  }

  useEffect(() => {
    if (!isPaused && totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, isMobile ? 4000 : 5000); // Faster on mobile since less content per slide

      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides, isMobile]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (certifications.length === 0) return null;

  return (
    <div
      className={`relative mx-auto ${isMobile ? 'w-full max-w-sm' : 'max-w-7xl'}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {groupedCertifications.map((group, slideIndex) => (
            <div key={slideIndex} className={`w-full flex-shrink-0 ${isMobile ? 'px-2' : 'px-4'}`}>
              <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                {group.map((cert) => (
                  <div key={cert.id} className={`group relative bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden ${isMobile ? 'w-full' : 'mx-auto max-w-lg'}`}>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    ></div>

                    {/* Academy Image Header */}
                    <div className={`relative bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${isMobile ? 'h-20' : 'h-20'}`}>
                      <img
                        src={`/certifications/${cert.institution_image}`}
                        alt={cert.platform}
                        className={`object-contain opacity-80 ${isMobile ? 'h-12' : 'h-12'}`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div className={`hidden rounded-full bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-700 items-center justify-center ${isMobile ? 'h-12 w-12' : 'h-12 w-12'}`}>
                        <FaCertificate className={`text-white ${isMobile ? 'w-6 h-6' : 'w-6 h-6'}`} />
                      </div>
                      <div className="absolute top-2 right-2">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                    </div>

                    <div className={`relative ${isMobile ? 'p-4' : 'p-4'}`}>
                      <h3 className={`font-bold text-gray-900 dark:text-white text-center mb-2 leading-tight ${isMobile ? 'text-lg' : 'text-lg'}`}>
                        {cert.certification_title}
                      </h3>

                      <div className="text-center mb-3">
                        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          {cert.platform}
                        </p>
                      </div>

                      <p className={`text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-4 ${isMobile ? 'line-clamp-2' : 'line-clamp-2'}`}>
                        {cert.description}
                      </p>

                      <div className="flex justify-center">
                        <a
                          href={cert.certification_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg ${isMobile ? 'px-4 py-2' : 'px-4 py-2'}`}
                          aria-label={`${verifyText} ${cert.certification_title}`}
                        >
                          <FaExternalLinkAlt className={`${isMobile ? 'w-3 h-3' : 'w-3 h-3'}`} />
                          {verifyText}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          {/* Navigation buttons - positioned differently on mobile */}
          <button
            onClick={goToPrevious}
            className={`absolute top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 group rounded-full ${
              isMobile 
                ? 'left-2 p-2' 
                : 'left-0 -translate-x-12 p-3'
            }`}
            aria-label="Previous certifications"
          >
            <FaChevronLeft className={`text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 ${
              isMobile ? 'w-4 h-4' : 'w-5 h-5'
            }`} />
          </button>

          <button
            onClick={goToNext}
            className={`absolute top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 group rounded-full ${
              isMobile 
                ? 'right-2 p-2' 
                : 'right-0 translate-x-12 p-3'
            }`}
            aria-label="Next certifications"
          >
            <FaChevronRight className={`text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 ${
              isMobile ? 'w-4 h-4' : 'w-5 h-5'
            }`} />
          </button>

          {/* Pagination dots */}
          <div className={`flex justify-center gap-2 ${isMobile ? 'mt-6' : 'mt-8'}`}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-indigo-600 dark:bg-indigo-400"
                    : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
