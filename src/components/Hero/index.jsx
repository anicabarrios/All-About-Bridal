import React, { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    '/images/hero.jpg',
    '/images/hero1.jpg',
    '/images/image.JPG',
    '/images/img.JPG'
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-90"></div>
          </div>
        ))}
      </div>
      <div className="relative container mx-auto px-6 lg:px-12 py-32 lg:py-40 flex flex-col items-center text-center text-gray-800 z-10">
        <h2 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-6">Discover Your Dream Dress</h2>
        <p className="text-xl md:text-3xl font-light mb-10">Elegance, Style and Unmatched Beauty for Your Special Day</p>
        <button className="px-10 py-4 bg-custom text-white font-semibold rounded-full hover:bg-customdark transition duration-300 text-lg md:text-xl">Browse Collection</button>
      </div>
    </section>
  );
}

export default Hero;
