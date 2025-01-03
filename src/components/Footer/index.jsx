import React from 'react';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { name: 'About Us', path: '/about-us' },
      { name: 'Contact', path: '/contact' },
      { name: 'Book Appointment', path: '/book' },
    ],
    collections: [
      { name: 'Wedding Dresses', path: '/dresses' },
      { name: 'Quinceañera', path: '/quinceanera' },
      { name: 'Special Occasions', path: '/special-occasions' },
      { name: 'Mother of Bride', path: '/wedding/mother-of-bride' },
      { name: 'Bridesmaids', path: '/wedding/bridesmaids' },
    ],
    contact: [
      { icon: <FaMapMarkerAlt />, text: '1749 N University Dr, Pembroke Pines, FL 33024' },
      { icon: <FaPhone />, text: '(754) 263-3480' },
      { icon: <FaEnvelope />, text: 'aboutlovebaf@gmail.com' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-custom to-transparent opacity-50"></div>
      
      {/* Main Footer Content */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-custom via-transparent to-custom opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Branding Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-chopin text-gray-800">About Love Bridal</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating beautiful moments, one dress at a time. We specialize in wedding dresses, 
                quinceañera gowns, and special occasion wear with personalized service and expert alterations.
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.facebook.com/AboutLoveBridal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-custom transition-colors duration-300"
                >
                  <FaFacebookF className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/aboutlovebridal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-custom transition-colors duration-300"
                >
                  <FaInstagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-800 font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-custom transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collections */}
            <div>
              <h3 className="text-gray-800 font-semibold text-lg mb-4">Collections</h3>
              <ul className="space-y-2">
                {footerLinks.collections.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-custom transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-gray-800 font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-4">
                {footerLinks.contact.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-custom mt-1">{item.icon}</span>
                    <span className="text-gray-600 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {currentYear} About Love Bridal & Formal. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-500 hover:text-custom transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-500 hover:text-custom transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;