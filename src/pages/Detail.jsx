import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allData } from '../data/allData';
import { Helmet } from 'react-helmet';

const Detail = () => {
  const { id } = useParams();
  const item = allData.find(item => item.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? item.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Helmet>
        <title>{item.name} - About Love Bridal</title>
        <meta
          name="description"
          content={`View details for ${item.name}, part of our exclusive collection at About Love Bridal.`}
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Content */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Side - Image Gallery */}
                <div className="space-y-6">
                  {/* Main Image */}
                  <div className="relative aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden group shadow-lg">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={item.images[currentImageIndex]}
                          alt={`${item.name} - View ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={prevImage}
                        className="p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all transform hover:scale-110"
                      >
                        <FaAngleLeft className="w-5 h-5 text-gray-800" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all transform hover:scale-110"
                      >
                        <FaAngleRight className="w-5 h-5 text-gray-800" />
                      </button>
                    </div>
                  </div>

                  {/* Centered Thumbnails */}
                  <div className="flex justify-center">
                    <div className="grid grid-flow-col gap-4 auto-cols-max">
                      {item.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 
                            ${currentImageIndex === index 
                              ? 'ring-2 ring-custom ring-offset-2 scale-110' 
                              : 'hover:opacity-75 hover:scale-105'}`}
                        >
                          <img
                            src={image}
                            alt={`${item.name} thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Product Info */}
                <div>
                  <div className="sticky top-24">
                    {/* Enhanced Info Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-white/20">
                      {/* Elegant Border Accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-custom/30 to-transparent"></div>
                      
                      {/* Category Tag */}
                      <div className="inline-block px-6 py-1.5 bg-custom/10 text-custom rounded-full text-sm mb-6 
                        shadow-sm border border-custom/20">
                        {item.category}
                      </div>

                      {/* Title with Decorative Element */}
                      <div className="relative mb-8">
                        <h1 className="text-3xl font-serif text-gray-900 relative z-10">
                          {item.name}
                        </h1>
                        <div className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-custom to-transparent"></div>
                      </div>

                      {/* Description */}
                      <div className="prose prose-lg mb-8">
                        <p className="text-gray-600 leading-relaxed">
                          Unveil timeless elegance with this stunning {item.category.toLowerCase()} dress. 
                          Meticulously crafted to create an unforgettable silhouette for your special day.
                        </p>
                      </div>

                      {/* Decorative Divider */}
                      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8">
                        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-custom/30"></div>
                      </div>

                      {/* Call to Action */}
                      <div className="flex gap-4 mb-8">
                        <a
                          href= "https://book.squareup.com/appointments/pn1ik744tu6bkj/location/LR5XA5F05K6TY/services"

                          className="group flex-1 inline-flex justify-center items-center px-6 py-3 
                            bg-custom text-white rounded-full hover:bg-customdark 
                            transition-all duration-300 shadow-sm hover:shadow-md
                            text-base font-medium relative overflow-hidden"
                        >
                          <span className="relative z-10"> Schedule Fitting</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-custom via-customdark to-custom 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-200 
                            bg-pos-0 group-hover:bg-pos-100"></div>
                        </a>
                        
                        <a
                          href="/contact"
                          className="group flex-1 inline-flex justify-center items-center px-6 py-3 
                            bg-transparent border-2 border-gray-300 text-gray-800 rounded-full
                            hover:border-custom hover:text-custom
                            transition-all duration-300 shadow-sm hover:shadow-md
                            text-base font-medium"
                        >
                          Request Info
                        </a>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Detail;