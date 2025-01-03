import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const images = [
    '/images/hero.jpg',
    '/images/hero1.jpg',
    '/images/image.JPG',
    '/images/img.JPG'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleButtonClick = () => {
    navigate('/dresses');
  };

  return (
    <section className="relative min-h-[600px] h-screen w-full">
      {/* Image Slider Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-gray-900 mb-4 sm:mb-6 
              tracking-tight leading-tight">
              Discover Your Dream Dress
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-3xl text-gray-700 mb-8 sm:mb-10 
              max-w-2xl mx-auto leading-relaxed">
              Elegance, Style and Unmatched Beauty for Your Special Day
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleButtonClick}
                className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-custom text-white 
                  font-semibold rounded-full hover:bg-customdark transition-all duration-300 
                  text-base sm:text-lg lg:text-xl transform hover:scale-105 active:scale-95
                  shadow-lg hover:shadow-xl"
              >
                Browse Collection
              </button>
              
              <a
                href="https://book.squareup.com/appointments"
                className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-gray-800 
                  text-gray-800 font-semibold rounded-full hover:bg-gray-800 hover:text-white 
                  transition-all duration-300 text-base sm:text-lg lg:text-xl transform 
                  hover:scale-105 active:scale-95"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${index === currentIndex 
                ? 'w-6 bg-custom' 
                : 'bg-gray-400 hover:bg-custom/70'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;