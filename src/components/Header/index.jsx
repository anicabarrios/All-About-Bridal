import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed w-full z-50 top-0 transition-all duration-300 
        ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-md'}`}
    >
      {/* Mobile and Tablet Header (xs-md) */}
      <div className="xl:hidden container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="block">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-chopin text-gray-900 tracking-tighter">
              About Love Bridal
            </h1>
          </a>
        </div>

        {/* Right side with social & button */}
        <div className="flex items-center">
          {/* Social icons - show on medium screens */}
          <div className="hidden md:flex items-center space-x-4 mr-5">
            <a 
              href="https://www.facebook.com/AboutLoveBridal" 
              className="group flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-custom transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </a>
            <a 
              href="https://www.instagram.com/aboutlovebridal" 
              className="group flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-custom transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>

          {/* Book Appointment Button - show on medium screens */}
          <a
            href="https://book.squareup.com/appointments/pn1ik744tu6bkj/location/LR5XA5F05K6TY/services"
            className="hidden md:flex items-center mr-5 px-5 py-2 bg-transparent border border-custom text-custom
                     font-medium rounded-full hover:bg-custom hover:text-white
                     transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md"
          >
            Book Appointment
          </a>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full border border-gray-200 hover:border-custom 
                     focus:outline-none focus:ring-2 focus:ring-custom focus:ring-offset-2
                     transition-all duration-300 bg-white shadow-sm hover:shadow-md"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Header (xl+) */}
      <div className="hidden xl:block container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 mr-4">
            <a href="/" className="block">
              <h1 className="text-3xl 2xl:text-4xl font-chopin text-gray-900 tracking-tighter">
                About Love Bridal & Formal
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex-grow mx-4">
            <ul className="flex items-center justify-between w-full">
              <li>
                <a href="/" className="text-gray-700 hover:text-custom transition-colors duration-300 text-sm 2xl:text-base relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-gray-700 hover:text-custom transition-colors duration-300 text-sm 2xl:text-base relative group">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/dresses" className="text-gray-700 hover:text-custom transition-colors duration-300 text-sm 2xl:text-base relative group">
                  Wedding Dresses
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/quinceanera" className="text-gray-700 hover:text-custom transition-colors duration-300 text-sm 2xl:text-base relative group">
                  Quinceañera
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/special-occasions" className="text-gray-700 hover:text-custom transition-colors duration-300 text-sm 2xl:text-base relative group">
                  Special Occasions
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/new-arrivals" className="text-gray-700 hover:text-custom transition-colors duration-300 text-sm 2xl:text-base relative group">
                  New Arrivals
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-700 hover:text-custom transition-colors duration-300 text-sm 2xl:text-base relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Side with Social & CTA */}
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.facebook.com/AboutLoveBridal" 
                className="group flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-custom hover:bg-custom transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="https://www.instagram.com/aboutlovebridal" 
                className="group flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-custom hover:bg-custom transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
            <a
              href="https://book.squareup.com/appointments/pn1ik744tu6bkj/location/LR5XA5F05K6TY/services"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 bg-custom text-white
                       font-medium rounded-full overflow-hidden shadow-md hover:shadow-lg
                       transition-all duration-300 whitespace-nowrap"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-custom via-customdark to-custom bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      <div
        className={`xl:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="px-4 pt-4 pb-6 space-y-2 bg-white shadow-inner">
          <a href="/" className="flex justify-center py-2.5 px-4 text-gray-700 hover:bg-gray-50 hover:text-custom transition-colors duration-300 rounded-lg text-center">
            Home
          </a>
          <a href="/about-us" className="flex justify-center py-2.5 px-4 text-gray-700 hover:bg-gray-50 hover:text-custom transition-colors duration-300 rounded-lg text-center">
            About Us
          </a>
          <a href="/dresses" className="flex justify-center py-2.5 px-4 text-gray-700 hover:bg-gray-50 hover:text-custom transition-colors duration-300 rounded-lg text-center">
            Wedding Dresses
          </a>
          <a href="/quinceanera" className="flex justify-center py-2.5 px-4 text-gray-700 hover:bg-gray-50 hover:text-custom transition-colors duration-300 rounded-lg text-center">
            Quinceañera
          </a>
          <a href="/special-occasions" className="flex justify-center py-2.5 px-4 text-gray-700 hover:bg-gray-50 hover:text-custom transition-colors duration-300 rounded-lg text-center">
            Special Occasions
          </a>
          <a href="/new-arrivals" className="flex justify-center py-2.5 px-4 text-gray-700 hover:bg-gray-50 hover:text-custom transition-colors duration-300 rounded-lg text-center">
            New Arrivals
          </a>
          <a href="/contact" className="flex justify-center py-2.5 px-4 text-gray-700 hover:bg-gray-50 hover:text-custom transition-colors duration-300 rounded-lg text-center">
            Contact
          </a>

          {/* Mobile Social Links - only show on smallest screens */}
          <div className="md:hidden pt-4 flex items-center justify-center space-x-8 border-t border-gray-200 mt-4">
            <a 
              href="https://www.facebook.com/AboutLoveBridal" 
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-custom hover:bg-custom transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </a>
            <a 
              href="https://www.instagram.com/aboutlovebridal" 
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-custom hover:bg-custom transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>

          {/* Mobile CTA - only show on smallest screens */}
          <a
            href="https://book.squareup.com/appointments/pn1ik744tu6bkj/location/LR5XA5F05K6TY/services"
            className="md:hidden group relative overflow-hidden block mt-6 text-center py-3 px-6 bg-custom text-white rounded-full hover:bg-customdark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="relative z-10">Book an Appointment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-custom via-customdark to-custom bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;