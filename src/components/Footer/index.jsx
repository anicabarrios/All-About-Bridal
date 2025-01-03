import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaHeart,
  FaClock,
  FaCreditCard
} from 'react-icons/fa';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="relative bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-gray-700 py-10">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-custom to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-custom via-transparent to-customdark opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section - Full width on mobile */}
          <motion.div {...fadeInUp} className="text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <h2 className="text-2xl font-chopin text-gray-800 relative inline-block">
                About Love Bridal & Formal
                <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-custom to-transparent"></div>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto sm:mx-0">
                Creating beautiful moments, one dress at a time. Our dedicated team ensures 
                your special day is perfect with expert alterations and personalized service.
              </p>
            </div>
            {/* Social Icons - Centered on mobile */}
            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              {[
                { icon: FaFacebookF, href: 'https://www.facebook.com/AboutLoveBridal' },
                { icon: FaInstagram, href: 'https://www.instagram.com/aboutlovebridal' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center group
                           hover:bg-custom transform transition-all duration-300 hover:scale-110"
                  whileHover={{ y: -2 }}
                >
                  <social.icon className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Stack on mobile, 2 columns on tablet */}
          <motion.div {...fadeInUp} className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800 pb-2 relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-custom/40"></div>
            </h3>
            <ul className="space-y-2 mt-4">
              {[
                { label: 'About Us', href: '/about-us' },
                { label: 'Wedding Dresses', href: '/dresses' },
                { label: 'Quinceañera', href: '/quinceanera' },
                { label: 'Special Occasions', href: '/special-occasions' }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex justify-center sm:justify-start"
                >
                  <a href={link.href} 
                     className="text-sm text-gray-600 hover:text-custom transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-custom/40 mr-2 transform scale-0 group-hover:scale-100 
                                   transition-transform duration-300"></span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Business Hours - Stack on mobile */}
          <motion.div {...fadeInUp} className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800 pb-2 relative inline-block">
              Business Hours
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-custom/40"></div>
            </h3>
            <ul className="space-y-3 text-sm mt-4">
              <li className="flex items-center justify-center sm:justify-start space-x-3">
                <FaClock className="w-4 h-4 text-custom" />
                <div>
                  <p className="text-gray-600">Mon - Fri: 11:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sat: 1:00 PM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3">
                <FaCreditCard className="w-4 h-4 text-custom" />
                <p className="text-gray-600">All major credit cards accepted</p>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3">
                <FaHeart className="w-4 h-4 text-custom" />
                <p className="text-gray-600">Appointments recommended</p>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information - Stack on mobile */}
          <motion.div {...fadeInUp} className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800 pb-2 relative inline-block">
              Contact Us
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-custom/40"></div>
            </h3>
            <ul className="space-y-3 mt-4">
              {[
                { 
                  icon: FaMapMarkerAlt, 
                  content: '1749 N University Dr\nPembroke Pines, FL 33024',
                  isMultiline: true
                },
                { 
                  icon: FaPhone, 
                  content: '(754) 263-3480',
                  href: 'tel:+17542633480'
                },
                { 
                  icon: FaEnvelope, 
                  content: 'aboutlovebaf@gmail.com',
                  href: 'mailto:aboutlovebaf@gmail.com'
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start justify-center sm:justify-start space-x-3 group">
                  <item.icon className="w-4 h-4 text-custom group-hover:text-customdark transition-colors duration-300 mt-1" />
                  {item.href ? (
                    <a href={item.href} 
                       className="text-sm text-gray-600 hover:text-custom transition-colors duration-300"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-600 whitespace-pre-line">
                      {item.content}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center relative pt-6"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-custom/30 to-transparent"></div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} About Love Bridal & Formal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;