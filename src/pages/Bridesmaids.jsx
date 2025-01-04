import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { allData } from '../data/allData';

const Bridesmaids = () => {
  const bridesmaidsData = allData.filter(item => item.category === 'Bridesmaids');

  return (
    <>
      <Helmet>
        <title>Bridesmaids Dresses - About Love Bridal</title>
        <meta
          name="description"
          content="Explore our bridesmaids dress collection to find the perfect look for your bridal party."
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
                  Bridesmaids Dresses
                </h1>
                <div className="w-24 h-1 bg-custom mx-auto"></div>
              </div>
            </motion.div>
          </section>

          {/* Dresses Grid Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              {/* Dresses Grid */}
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {bridesmaidsData.map(dress => (
                    <motion.div
                      key={dress.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card
                        id={dress.id}
                        image={dress.images[0]}
                        name={dress.name}
                        category={dress.category}
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

export default Bridesmaids;
