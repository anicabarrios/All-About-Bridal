import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaHeart, FaGem, FaMagic, FaCrown } from 'react-icons/fa';

const AboutUs = () => {
  const experiences = [
    {
      icon: <FaHeart className="w-12 h-12 text-custom" />,
      title: "Intimate Boutique Setting",
      description: "Experience personalized attention in our elegant, comfortable space where your dreams take center stage."
    },
    {
      icon: <FaGem className="w-12 h-12 text-custom" />,
      title: "Expert Craftsmanship",
      description: "Our in-house alterations specialist brings 40 years of experience to ensure your perfect fit."
    },
    {
      icon: <FaMagic className="w-12 h-12 text-custom" />,
      title: "Curated Collections",
      description: "Discover our handpicked selection of designer gowns, ranging from sizes 2-32, ensuring every bride finds their dream dress."
    },
    {
      icon: <FaCrown className="w-12 h-12 text-custom" />,
      title: "Royal Treatment",
      description: "From your first appointment to your final fitting, enjoy a stress-free, memorable experience with our dedicated team."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - About Love Bridal</title>
        <meta
          name="description"
          content="Learn more about About Love Bridal, our dedication to quality craftsmanship, and the exceptional service we offer."
        />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 lg:pt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-6"
                >
                  Our Story
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px max-w-xs mx-auto bg-custom"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <img
                    src="/images/hero1.jpg"
                    alt="About Love Bridal Store"
                    className="w-full h-[400px] lg:h-[600px] object-cover rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-6 lg:space-y-8 text-center lg:text-left"
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900">
                    Creating Beautiful Moments Since 2010
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At About Love Bridal, we believe every love story deserves the perfect dress. Our journey began with a simple mission: to provide exceptional bridal services with a personal touch.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We genuinely care about the outcome of your dress, as customer satisfaction is our main priority. All alterations are done in-house by our skilled specialist with over 40 years of experience.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We proudly offer a diverse selection of designers in both bridal and formal collections, with sizes ranging up to 32 to ensure every bride finds their perfect dress.
                  </p>
                </motion.div>
              </div>

              {/* Experience Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl"
              >
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
                    The About Love Experience
                  </h2>
                  <div className="h-px w-24 bg-custom mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {experiences.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-serif text-gray-900 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-600 italic">
                      "We believe every bride deserves to feel beautiful, confident, and celebrated throughout their entire bridal journey."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="py-16 lg:py-24"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 mb-8">
              Begin Your Bridal Journey
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and let us help you find the dress of your dreams.
            </p>
            <a
              href="https://book.squareup.com/appointments"
              className="inline-block px-8 py-3 bg-custom text-white rounded-full hover:bg-customdark transition-colors duration-300"
            >
              Book an Appointment
            </a>
          </div>
        </motion.section>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;