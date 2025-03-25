import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { allData } from '../data/allData';
import { FaHeart } from 'react-icons/fa';

const SpecialOccasions = () => {
  // Filter data for special occasions
  const sodata = allData.filter(item => 
    ['Evening/Prom', 'Cocktail/Homecoming'].includes(item.category)
  );

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
          {/* Updated Header Section with consistent decoration */}
          <section className="relative h-auto pt-24 pb-10 lg:pt-32 lg:pb-16 bg-gradient-to-r from-custom/10 to-customdark/10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto px-4 flex items-center justify-center text-center"
            >
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <FaHeart className="text-custom h-8 w-8 opacity-20" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
                  Special Occasions
                </h1>
                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-custom to-transparent mb-6"></div>
               
              </div>
            </motion.div>
          </section>

          {/* Items Grid */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              {/* Items Grid */}
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {sodata.map(item => (
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