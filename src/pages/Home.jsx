import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaHeart, FaCrown, FaGem, FaCalendarAlt } from 'react-icons/fa';
import { TestimonialsSection, InstagramFeed } from '../components/EnhancedSections';
import DesignerShowcase from '../components/Designers/designers';
import Hero from '../components/Hero';
const Home = () => {
  const navigate = useNavigate();

  const collections = [
    {
      title: 'Wedding Collection',
      description: 'Find your dream wedding dress',
      image: '/images/304.webp',
      path: '/dresses'
    },
    {
      title: 'Quinceañera',
      description: 'Make your special day unforgettable',
      image: '/images/1.webp',
      path: '/quinceanera'
    },
    {
      title: 'Special Occasions',
      description: 'Perfect dresses for every celebration',
      image: '/images/102.webp',
      path: '/special-occasions'
    }
  ];

  const features = [
    {
      icon: <FaHeart className="w-8 h-8 text-custom" />,
      title: "Personalized Service",
      description: "One-on-one attention from our expert consultants"
    },
    {
      icon: <FaCrown className="w-8 h-8 text-custom" />,
      title: "Luxury Experience",
      description: "Premium designer collections in a beautiful setting"
    },
    {
      icon: <FaGem className="w-8 h-8 text-custom" />,
      title: "Expert Alterations",
      description: "In-house tailoring for the perfect fit"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-custom" />,
      title: "Private Appointments",
      description: "Dedicated time for your bridal journey"
    }

  ];

  return (
    <>
      <Helmet>
        <title>About Love Bridal - Luxury Wedding & Formal Wear</title>
        <meta
          name="description"
          content="Discover exquisite wedding dresses, quinceañera gowns, and formal wear at About Love Bridal in Pembroke Pines, FL."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BridalShop",
              "name": "About Love Bridal and Formal",
              "image": "/images/298.webp",
              "url": "https://www.aboutlovebridal.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1749 N University Dr",
                "addressLocality": "Pembroke Pines",
                "addressRegion": "FL",
                "postalCode": "33024",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.0245951,
                "longitude": -80.2491858
              },
              "description": "Premier bridal boutique offering wedding dresses, quinceañera gowns, and formal wear",
              "telephone": "+1-754-263-3480",
              "openingHours": ["Mo-Sa 10:00-19:00"],
              "priceRange": "$",
              "paymentAccepted": ["cash", "credit card"],
              "sameAs": [
                "https://www.facebook.com/AboutLoveBridal",
                "https://www.instagram.com/aboutlovebridal"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Collections Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Collections</h2>
              <div className="w-24 h-1 bg-custom mx-auto"></div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative h-96 overflow-hidden rounded-lg cursor-pointer shadow-lg"
                  onClick={() => navigate(collection.path)}
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-serif text-white mb-2">{collection.title}</h3>
                    <p className="text-white/90">{collection.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <DesignerShowcase />
        {/* Enhanced Testimonials Section */}
        <TestimonialsSection />

        {/* Enhanced Instagram Feed */}
        <InstagramFeed />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-custom/5 to-customdark/5">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                Find Your Perfect Dress
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Schedule your appointment today for a personalized bridal experience
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://book.squareup.com/appointments/pn1ik744tu6bkj/location/LR5XA5F05K6TY/services"
                  className="px-8 py-3 bg-custom text-white rounded-full hover:bg-customdark transition-colors duration-300"
                >
                  Book Appointment
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3 border-2 border-gray-600 text-gray-600 rounded-full hover:border-custom hover:text-custom bg-white transition-colors duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;