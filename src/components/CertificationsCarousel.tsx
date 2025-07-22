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
  
  // Touch/swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Dynamic items per slide based on screen size
  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(certifications.length / itemsPerSlide);
  
  const groupedCertifications = [];
  for (let i = 0; i < certifications.length; i += itemsPerSlide) {
    groupedCertifications.push(certifications.slice(i, i + itemsPerSlide));
  }

  // Check if mobile screen and reset carousel when changing
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 768; // md breakpoint
      const wasChanged = newIsMobile !== isMobile;
      
      setIsMobile(newIsMobile);
      
      // Reset carousel position when switching between mobile/desktop
      if (wasChanged) {
        setCurrentIndex(0);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  // Additional safety check: ensure currentIndex is within bounds
  useEffect(() => {
    if (currentIndex >= totalSlides) {
      setCurrentIndex(0);
    }
  }, [currentIndex, totalSlides]);

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

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    // Pause auto-rotation during touch interaction
    if (isMobile) {
      setIsPaused(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      // Resume auto-rotation after touch ends
      if (isMobile) {
        setIsPaused(false);
      }
      return;
    }
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance) {
      // Swiped left - go to next slide
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right - go to previous slide
      goToPrevious();
    }
    
    // Resume auto-rotation after swipe
    if (isMobile) {
      setTimeout(() => setIsPaused(false), 1000); // Brief pause before resuming
    }
  };

  if (certifications.length === 0) return null;

  return (
    <div
      className={`relative mx-auto ${isMobile ? 'w-full max-w-sm' : 'max-w-7xl'}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`overflow-hidden rounded-xl ${isMobile ? 'touch-pan-y select-none' : ''}`}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
        style={isMobile ? { touchAction: 'pan-y' } : undefined}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {groupedCertifications.map((group, slideIndex) => (
            <div key={slideIndex} className={`w-full flex-shrink-0 ${isMobile ? 'px-2' : 'px-4'}`}>
              <div className={`grid gap-6 ${isMobile ? 'grid-cols-1 grid-rows-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} auto-rows-fr`}>
                {group.map((cert) => (
                  <div key={cert.id} className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden flex flex-col">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    ></div>

                    {/* Academy Image Header */}
                    <div className="relative h-24 bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                      <img
                        src={`/certifications/${cert.institution_image}`}
                        alt={cert.platform}
                        className="h-16 object-contain opacity-80"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div className="hidden h-16 w-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-700 items-center justify-center">
                        <FaCertificate className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                    </div>

                    <div className="relative p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2 leading-tight">
                        {cert.certification_title}
                      </h3>
                      
                      <div className="text-center mb-4">
                        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                          {cert.platform}
                        </p>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-6 flex-grow">
                        {cert.description}
                      </p>
                      
                      <div className="flex justify-center mt-auto">
                        <a
                          href={cert.certification_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                          aria-label={`${verifyText} ${cert.certification_title}`}
                        >
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
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
          {/* Navigation buttons - only show on desktop/tablet */}
          {!isMobile && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
                aria-label="Previous certifications"
              >
                <FaChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
                aria-label="Next certifications"
              >
                <FaChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
              </button>
            </>
          )}

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
