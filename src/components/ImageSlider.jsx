import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/cars/car1.jpg",
  "/cars/car2.jpg",
  "/cars/car3.jpg",
  "/cars/car4.jpg",
  "/cars/car5.jpg",
  "/cars/car6.jpg",
  "/cars/car7.jpg",
  "/cars/amaze.jpg",
  "/cars/glanza.png",
  "/cars/fortuner.jpg"
];

const CarSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg group h-full">
      <img
        src={images[currentIndex]}
        alt={`car-${currentIndex}`}
        className="w-full h-[250px] md:h-[450px] object-cover transition-all duration-700 ease-in-out"
      />

      {/* Left Arrow */}
      <button
        onClick={() => {
          prevSlide();
          stopAutoSlide();
          startAutoSlide();
        }}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10"
      >
        <ChevronLeft className="text-gray-700 w-5 h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => {
          nextSlide();
          stopAutoSlide();
          startAutoSlide();
        }}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10"
      >
        <ChevronRight className="text-gray-700 w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              stopAutoSlide();
              startAutoSlide();
            }}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarSlider;
