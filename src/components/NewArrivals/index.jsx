import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaArrowRight, FaStar, FaQuoteRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NewArrivals = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Premium featured dresses
  const featuredDresses = [
    {
      name: "Elysian Dream",
      category: "Couture A-Line",
      image: "/images/341.webp",
      altImage: "/images/342.webp", 
      description: "Exquisite handcrafted lace with crystal embellishments",
      designer: "Maggie Sottero",
      quote: "Pure magic in every detail",
      features: ["French lace", "Crystal beading", "Cathedral train"]
    },
    {
      name: "Celestia Royal",
      category: "Luxury Ball Gown",
      image: "/images/345.webp",
      altImage: "/images/346.webp",
      description: "Breathtaking silhouette with cascading tulle and pearl accents",
      designer: "Pronovias",
      quote: "Royalty redefined",
      features: ["Layered tulle", "Pearl embroidery", "Structured bodice"]
    },
    {
      name: "Ophelia Blush",
      category: "Couture Mermaid",
      image: "/images/360.webp",
      altImage: "/images/361.webp", 
      description: "Sculpted silhouette with blush undertones and 3D floral appliqués",
      designer: "Allure Couture",
      quote: "Romance in every stitch",
      features: ["3D florals", "Blush underlays", "Illusion back"]
    }
  ];

  // Auto rotate with pause on hover
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredDresses.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isHovering, featuredDresses.length]);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blush-50/20 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-transparent via-custom/10 to-transparent"></div>
      <div className="absolute -top-24 right-1/4 w-64 h-64 bg-custom/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-custom/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        {/* Elegant Header - Updated to match other sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              New Collection
            </h2>
            
            {/* Updated underline styling to match other sections */}
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-custom to-transparent mb-6"></div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light italic"
            >
              Discover the exquisite artistry of our latest arrivals
            </motion.p>
          </div>
        </motion.div>

        {/* Premium Showcase */}
        <div 
          className="max-w-6xl mx-auto relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={`showcase-${activeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left Column - Image with Effects */}
                <div className="relative">
                  {/* Main Image Container */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-gray-50 group"
                  >
                    {/* NEW Label */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-custom blur-md opacity-40 rounded-full"></div>
                        <div className="relative bg-gradient-to-r from-custom to-customdark text-white px-6 py-2 rounded-full font-medium tracking-wider shadow-lg">
                          NEW ARRIVAL
                        </div>
                      </div>
                    </div>
                    
                    {/* Main Image with background fill and object-cover */}
                    <div className="absolute inset-0 transition-all duration-1000 ease-in-out group-hover:opacity-0">
                      <img 
                        src={featuredDresses[activeIndex].image} 
                        alt={featuredDresses[activeIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Alt Image on Hover with background fill and object-cover */}
                    <div className="absolute inset-0 opacity-0 transition-all duration-1000 ease-in-out group-hover:opacity-100">
                      <img 
                        src={featuredDresses[activeIndex].altImage} 
                        alt={`${featuredDresses[activeIndex].name} - Alternate View`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </motion.div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-custom/20 rounded-full z-[-1]"></div>
                  <div className="absolute -top-10 -left-6 text-5xl text-custom/10 z-[-1]">
                    <FaQuoteRight />
                  </div>
                </div>

                {/* Right Column - Content with Animation */}
                <motion.div 
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* White Content Card */}
                  <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
                    {/* Category and Designer */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="h-px w-6 bg-custom/50 mr-3"></div>
                        <p className="text-custom uppercase tracking-wider font-medium text-sm">
                          {featuredDresses[activeIndex].category}
                        </p>
                      </div>
                      <p className="text-gray-500 text-sm">
                        By <span className="text-custom">{featuredDresses[activeIndex].designer}</span>
                      </p>
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                      {featuredDresses[activeIndex].name}
                    </h3>
                    
                    {/* Quote */}
                    <div className="mb-6 italic text-lg text-gray-500 flex items-center">
                      <FaQuoteRight className="text-custom/30 mr-2 text-sm" />
                      <span>"{featuredDresses[activeIndex].quote}"</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 mb-8 leading-relaxed">
                      {featuredDresses[activeIndex].description}
                    </p>
                    
                    {/* Feature List */}
                    <div className="space-y-3 mb-10">
                      {featuredDresses[activeIndex].features.map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + (idx * 0.1) }}
                          className="flex items-center"
                        >
                          <FaStar className="text-custom w-3 h-3 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                         <button 
                        onClick={() => navigate('/new-arrivals')} 
                        className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-custom text-white rounded-full hover:bg-customdark transition-all duration-300 shadow-md relative overflow-hidden"
                      >
                        <span className="relative z-10">View Collection</span>
                        <FaArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 w-0 bg-customdark group-hover:w-full transition-all duration-500 ease-out"></div>
                      </button>
                      <a 
                        href="https://book.squareup.com/appointments/pn1ik744tu6bkj/location/LR5XA5F05K6TY/services"
                        className="flex items-center justify-center px-8 py-3.5 border-2 border-gray-300 text-gray-700 rounded-full hover:border-custom hover:text-custom transition-all duration-300"
                      >
                        Book Appointment
                      </a>
                    </div>
                  </div>
                  
                  {/* Background Decoration */}
                  <div className="absolute top-6 -right-6 w-20 h-20 bg-custom/5 rounded-full blur-lg z-[-1]"></div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Indicators */}
          <div className="flex justify-center mt-12 gap-4">
            {featuredDresses.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View ${featuredDresses[idx].name}`}
                className="group relative"
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  idx === activeIndex ? 'bg-custom scale-100' : 'bg-gray-300 scale-75 group-hover:scale-100'
                }`}></div>
                <div className={`absolute -inset-1 rounded-full transition-all duration-500 ${
                  idx === activeIndex ? 'bg-custom/20' : 'bg-transparent'
                }`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element - Already using gradient style */}
        <div className="flex justify-center mt-20">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-custom/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;