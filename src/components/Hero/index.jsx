import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1.5 }} 
          className="w-full h-full"
        >
          <img 
            src="/images/hero1.jpg" 
            alt="Elegant Wedding Dress" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        </motion.div>
      </div>

      <div className="relative container mx-auto px-6 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.8 }} 
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-gray-900 mb-6">
            Your Perfect Dress Awaits
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8">
            Experience luxury bridal collections and personalized service in our boutique
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/dresses')} 
              className="bg-custom hover:bg-customdark text-white text-base sm:text-lg px-6 sm:px-8 py-3 
                rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95
                shadow-lg hover:shadow-xl"
            >
              View Collections
            </button>
            <a 
              href="https://book.squareup.com/appointments/pn1ik744tu6bkj/location/LR5XA5F05K6TY/services"
              className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 
                hover:text-white text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full 
                transition-all duration-300 text-center transform hover:scale-105 active:scale-95"
            >
              Book Appointment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;