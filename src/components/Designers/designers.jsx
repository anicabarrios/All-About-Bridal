import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const DesignerShowcase = () => {
  const [activeDesigner, setActiveDesigner] = useState(0);

  const designers = [
    {
      name: "Maggie Sottero",
      focus: "Timeless Elegance",
      description: "Romantic designs with impeccable fit and signature corsetry",
      image: "/api/placeholder/400/320",
      specialties: ["Classic Ballgowns", "Romantic A-lines", "Vintage Inspired"],
      signature: "Signature corsetry and timeless romance",
    },
    {
      name: "Allure Bridals",
      focus: "Modern Romance",
      description: "Contemporary silhouettes with intricate beading and luxurious fabrics",
      image: "/api/placeholder/400/320",
      specialties: ["Modern Fit & Flare", "Detailed Beadwork", "Statement Backs"],
      signature: "Intricate details meet modern design",
    },
    {
      name: "Pronovias",
      focus: "European Luxury",
      description: "Sophisticated designs with premium fabrics and expert craftsmanship",
      image: "/api/placeholder/400/320",
      specialties: ["Clean Modern Lines", "Dramatic Trains", "Couture Details"],
      signature: "European sophistication and luxury",
 
    },
    {
      name: "Morilee",
      focus: "Diverse Styles",
      description: "Versatile collections catering to every bride's unique vision",
      image: "/api/placeholder/400/320",
      specialties: ["Size Inclusive", "Traditional to Modern", "Affordable Luxury"],
      signature: "Inclusive luxury for every bride",

    }
  ];

  const nextDesigner = () => {
    setActiveDesigner((prev) => (prev + 1) % designers.length);
  };

  const prevDesigner = () => {
    setActiveDesigner((prev) => (prev - 1 + designers.length) % designers.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
              Our Designer Collections
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-custom"></div>
              <FaHeart className="text-custom w-4 h-4" />
              <div className="h-px w-12 bg-custom"></div>
            </div>
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDesigner}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-5 gap-8 items-center"
            >
              {/* Designer List - Left Side */}
              <div className="hidden md:block md:col-span-1 space-y-4">
                {designers.map((designer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDesigner(idx)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      idx === activeDesigner
                        ? 'bg-custom/10 text-custom shadow-md'
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <p className="font-medium">{designer.name}</p>
                    <p className="text-sm opacity-75">{designer.focus}</p>
                  </button>
                ))}
              </div>

              {/* Main Content - Center and Right */}
              <div className="md:col-span-4 bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative h-72 md:h-full">
                    <img
                      src={designers[activeDesigner].image}
                      alt={designers[activeDesigner].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-2">
                        {designers[activeDesigner].name}
                      </h3>
                      <p className="text-custom font-medium">
                        {designers[activeDesigner].focus}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {designers[activeDesigner].description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {designers[activeDesigner].specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-custom"></div>
                          <span className="text-gray-700">{specialty}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <p className="text-sm text-gray-500 italic">
                        {designers[activeDesigner].signature}
                      </p>
                      <span className="text-custom font-medium">
                        {designers[activeDesigner].price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
            <button
              onClick={prevDesigner}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            
            <div className="flex items-center gap-2">
              {designers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDesigner(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${idx === activeDesigner ? 'bg-custom w-6' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <button
              onClick={nextDesigner}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerShowcase;