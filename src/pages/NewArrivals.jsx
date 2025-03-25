import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { allData } from '../data/allData';
import { FaHeart } from 'react-icons/fa';

const NewArrivals = () => {
  // Filter only new items
  const newItems = allData.filter(item => item.category === 'new');

  return (
    <>
      <Helmet>
        <title>New Arrivals - About Love Bridal</title>
        <meta
          name="description"
          content="Discover our latest wedding dress collections and new arrivals at About Love Bridal. Find your perfect dress today!"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        <main>
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
                  New Arrivals
                </h1>
                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-custom to-transparent mb-6"></div>
              </div>
            </motion.div>
          </section>

          {/* New Arrivals Grid */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {newItems.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card
                      id={item.id}
                      image={item.images[0]}
                      name={item.name}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
            
          {/* Newsletter Section */}
          <section className="py-16 bg-gradient-to-r from-custom/5 to-customdark/5">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-serif text-gray-900 mb-4">
                  Stay Updated
                </h2>
                <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-custom to-transparent mb-6"></div>
                <p className="text-gray-600 mb-8">
                  Subscribe to our newsletter to be the first to know about new arrivals and exclusive offers
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom"
                  />
                  <button className="px-8 py-3 bg-custom text-white rounded-full hover:bg-customdark transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NewArrivals;