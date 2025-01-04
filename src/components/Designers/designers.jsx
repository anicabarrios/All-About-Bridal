import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCrown, FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const DesignerShowcase = () => {
  const [currentDesigner, setCurrentDesigner] = useState(0);

  const designers = [
    {
      name: "Maggie Sottero",
      focus: "Timeless Elegance",
      description: "Romantic designs with impeccable fit and signature corsetry",
      image: "/api/placeholder/400/320",
      specialties: ["Classic Ballgowns", "Romantic A-lines", "Vintage Inspired"],
      signature: "Signature corsetry and timeless romance",
      price: "$$-$$$"
    },
    {
      name: "Allure Bridals",
      focus: "Modern Romance",
      description: "Contemporary silhouettes with intricate beading and luxurious fabrics",
      image: "/api/placeholder/400/320",
      specialties: ["Modern Fit & Flare", "Detailed Beadwork", "Statement Backs"],
      signature: "Intricate details meet modern design",
      price: "$$-$$$"
    },
    {
      name: "Pronovias",
      focus: "European Luxury",
      description: "Sophisticated designs with premium fabrics and expert craftsmanship",
      image: "/api/placeholder/400/320",
      specialties: ["Clean Modern Lines", "Dramatic Trains", "Couture Details"],
      signature: "European sophistication and luxury",
      price: "$$$-$$$$"
    },
    {
      name: "Morilee",
      focus: "Diverse Styles",
      description: "Versatile collections catering to every bride's unique vision",
      image: "/api/placeholder/400/320",
      specialties: ["Size Inclusive", "Traditional to Modern", "Affordable Luxury"],
      signature: "Inclusive luxury for every bride",
      price: "$$-$$$"
    }
  ];

  const nextDesigner = () => {
    setCurrentDesigner((prev) => (prev + 1) % designers.length);
  };

  const prevDesigner = () => {
    setCurrentDesigner((prev) => (prev - 1 + designers.length) % designers.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/api/placeholder/400/320')] opacity-5 blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-3">
              <FaCrown className="text-custom w-8 h-8" />
              <h2 className="text-4xl font-serif text-gray-900">Featured Designers</h2>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-custom to-transparent mt-4"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our curated collection of world-renowned designers, each bringing
            their unique vision of bridal perfection to our boutique
          </p>
        </motion.div>

        <div className="relative">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDesigner}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-custom/10 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                    <h3 className="text-3xl font-serif text-gray-900 mb-3">
                      {designers[currentDesigner].name}
                    </h3>
                    <p className="text-custom font-medium mb-4">
                      {designers[currentDesigner].focus}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {designers[currentDesigner].description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {designers[currentDesigner].specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-custom"></span>
                          <span className="text-gray-700">{specialty}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                      <p className="text-sm text-gray-500 italic">
                        {designers[currentDesigner].signature}
                      </p>
                      <span className="text-custom font-medium">
                        {designers[currentDesigner].price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={designers[currentDesigner].image}
                    alt={designers[currentDesigner].name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-12 gap-4">
              <button
                onClick={prevDesigner}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FaAngleLeft className="w-6 h-6 text-gray-400 group-hover:text-custom transition-colors" />
              </button>
              
              <div className="flex items-center gap-2">
                {designers.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentDesigner(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                      ${idx === currentDesigner ? 'bg-custom w-8' : 'bg-gray-300 hover:bg-custom/50'}`}
                  />
                ))}
              </div>

              <button
                onClick={nextDesigner}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FaAngleRight className="w-6 h-6 text-gray-400 group-hover:text-custom transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerShowcase;