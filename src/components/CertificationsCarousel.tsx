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

  useEffect(() => {
    if (!isPaused && certifications.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, certifications.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (certifications.length === 0) return null;

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certifications.map((cert, index) => {
            return (
              <div key={cert.id} className="w-full flex-shrink-0 px-4">
                <div className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-xl mx-auto max-w-lg overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Academy Image Header */}
                  <div className="relative h-24 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
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

                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2 leading-tight">
                      {cert.certification_title}
                    </h3>

                    <div className="text-center mb-4">
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                        {cert.platform}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-6 line-clamp-3">
                      {cert.description}
                    </p>

                    <div className="flex justify-center">
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
              </div>
            );
          })}
        </div>
      </div>

      {certifications.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Previous certification"
          >
            <FaChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Next certification"
          >
            <FaChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-indigo-600 dark:bg-indigo-400"
                    : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
