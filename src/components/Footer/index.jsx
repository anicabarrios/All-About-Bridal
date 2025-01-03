import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-gray-700 py-2 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-custom via-transparent to-customdark opacity-30"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
          <div className="order-1 md:order-none">
            <h2 className="text-md md:text-lg font-bold mb-1 text-gray-800">About Love Bridal and Formal</h2>
            <p className="text-sm md:text-md font-light text-gray-600">Creating beautiful moments, one dress at a time.</p>
          </div>
          <div className="order-3 md:order-none">
            <h3 className="text-md font-bold mb-1 text-gray-800">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="/about-us" className="hover:text-custom transition">About Us</a>
              </li>
              <li>
                <a href="/dresses" className="hover:text-custom transition">Wedding Dresses</a>
              </li>
              <li>
                <a href="/quinceanera" className="hover:text-custom transition">Quinceañera Dresses</a>
              </li>
              <li>
                <a href="/special-occasions" className="hover:text-custom transition">Special Occasion</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-custom transition">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-none">
            <h3 className="text-md font-bold mb-1 text-gray-800">Follow Us</h3>
            <div className="flex justify-center space-x-2">
              <a href="https://www.facebook.com/AboutLoveBridal" target="_blank" rel="noopener noreferrer" className="hover:text-custom transition">
                <FaFacebookF className="h-5 w-5 text-gray-700 hover:text-customdark" />
              </a>
              <a href="https://www.instagram.com/aboutlovebridal" target="_blank" rel="noopener noreferrer" className="hover:text-custom transition">
                <FaInstagram className="h-5 w-5 text-gray-700 hover:text-customdark" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} About Love Bridal & Formal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
