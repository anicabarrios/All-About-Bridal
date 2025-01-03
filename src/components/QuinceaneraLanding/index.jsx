import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allData } from '../../data/allData';

const QuinceaneraLanding = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const quinceaneraData = allData.filter(item => 
    item.category === 'Dresses' || item.category === 'Accessories'
  );

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quinceaneraData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, quinceaneraData.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quinceaneraData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? quinceaneraData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 w-full h-full">
        {quinceaneraData.map((item, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.images[0]})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight mb-6">
              Quinceañera Collection
            </h2>
            <p className="text-lg sm:text-xl lg:text-3xl font-light mb-10 max-w-3xl mx-auto">
              Elegance, Style, and Unmatched Beauty for Your Special Day
            </p>
            <motion.button 
              onClick={() => navigate('/quinceanera')}
              className="px-8 py-4 bg-custom text-white font-semibold rounded-full 
                         hover:bg-customdark transition-all duration-300 
                         text-base sm:text-lg lg:text-xl 
                         transform hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Collection
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prevSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-2 m-4 
                     rounded-full transition-all duration-300 
                     opacity-0 group-hover:opacity-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={nextSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-2 m-4 
                     rounded-full transition-all duration-300 
                     opacity-0 group-hover:opacity-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {quinceaneraData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
                       ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default QuinceaneraLanding;