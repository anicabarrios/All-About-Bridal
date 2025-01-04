import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { allData } from '../data/allData';

const categories = ['All', 'Evening/Prom', 'Cocktail/Homecoming'];

const SpecialOccasions = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter data based on selected category
  const sodata = allData.filter(item => ['Evening/Prom', 'Cocktail/Homecoming'].includes(item.category));
  const filteredItems = selectedCategory === 'All'
    ? sodata
    : sodata.filter(item => item.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Special Occasion Dresses - About Love Bridal</title>
        <meta
          name="description"
          content="Discover our collection of special occasion dresses for evening and prom events, cocktail parties, and more."
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* Header Section with Gradient Background */}
          <section className="relative h-48 md:h-64 lg:h-80 bg-gradient-to-r from-custom/10 to-customdark/10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto px-4 h-full flex items-center justify-center text-center"
            >
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
                  Special Occasions
                </h1>
                <div className="w-24 h-1 bg-custom mx-auto"></div>
              </div>
            </motion.div>
          </section>

          {/* Category Navigation and Items Grid */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              {/* Category Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map(category => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 
                      ${
                        selectedCategory === category
                          ? 'bg-custom text-white shadow-lg'
                          : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-custom hover:text-custom'
                      }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Items Grid */}
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredItems.map(item => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card
                        id={item.id}
                        image={item.images[0]}
                        name={item.name}
                        category={item.category}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default SpecialOccasions;
