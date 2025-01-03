import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWeddingDropdownOpen, setIsWeddingDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isWeddingDropdownOpen) setIsWeddingDropdownOpen(false);
  };

  const toggleWeddingDropdown = () => {
    setIsWeddingDropdownOpen(!isWeddingDropdownOpen);
  };

  return (
    <header className={`fixed w-full z-50 top-0 transition-all duration-300 
      ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-chopin text-gray-900 tracking-tighter order-1">
          About Love Bridal and Formal
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-base xl:text-lg font-medium order-2">
          <ul className="flex items-center space-x-6 xl:space-x-8">
            <li><a href="/" className="text-gray-700 hover:text-custom transition-colors duration-300">Home</a></li>
            <li><a href="/about-us" className="text-gray-700 hover:text-custom transition-colors duration-300">About Us</a></li>
            <li className="relative group">
              <button
                onClick={toggleWeddingDropdown}
                className="flex items-center text-gray-700 hover:text-custom transition-colors duration-300 gap-1"
              >
                Wedding
                <FaChevronDown className="w-3 h-3 mt-1 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <ul className={`absolute left-1/2 -translate-x-1/2 mt-2 py-2 bg-white shadow-xl rounded-lg w-48
                transition-all duration-300 opacity-0 translate-y-2 invisible
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible`}>
                <li><a href="/dresses" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-custom transition-colors duration-300">Bridal Gowns</a></li>
                <li><a href="/wedding/mother-of-bride" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-custom transition-colors duration-300">Mother of Bride</a></li>
                <li><a href="/wedding/bridesmaids" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-custom transition-colors duration-300">Bridesmaids</a></li>
              </ul>
            </li>
            <li><a href="/quinceanera" className="text-gray-700 hover:text-custom transition-colors duration-300">Quinceañera</a></li>
            <li><a href="/special-occasions" className="text-gray-700 hover:text-custom transition-colors duration-300">Special Occasions</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-custom transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>

        {/* Social Links & CTA */}
        <div className="flex items-center space-x-4 order-2 lg:order-3">
          <a
            href="https://book.squareup.com/appointments"
            className="hidden lg:inline-flex px-4 py-2 bg-transparent border-2 border-gray-600 text-gray-600 
              font-semibold rounded-md hover:bg-white hover:text-customdark hover:border-customdark 
              transition-colors duration-300"
          >
            Book an Appointment
          </a>
          <div className="flex items-center space-x-3">
            <a href="https://www.facebook.com/AboutLoveBridal" className="text-gray-700 hover:text-custom transition-colors duration-300">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/aboutlovebridal" className="text-gray-700 hover:text-custom transition-colors duration-300">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md border border-gray-300 hover:border-custom 
              focus:outline-none focus:ring-2 focus:ring-custom focus:ring-offset-2"
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
        <nav className="px-4 pt-2 pb-4 space-y-2 bg-white shadow-inner">
          <a href="/" className="block py-2 text-gray-700 hover:text-custom transition-colors duration-300">Home</a>
          <a href="/about-us" className="block py-2 text-gray-700 hover:text-custom transition-colors duration-300">About Us</a>
          <div className="relative">
            <button
              onClick={toggleWeddingDropdown}
              className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-custom transition-colors duration-300"
            >
              <span>Wedding</span>
              <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ${isWeddingDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-300 ${isWeddingDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <a href="/dresses" className="block py-2 pl-4 text-gray-700 hover:text-custom transition-colors duration-300">Bridal Gowns</a>
              <a href="/wedding/mother-of-bride" className="block py-2 pl-4 text-gray-700 hover:text-custom transition-colors duration-300">Mother of Bride</a>
              <a href="/wedding/bridesmaids" className="block py-2 pl-4 text-gray-700 hover:text-custom transition-colors duration-300">Bridesmaids</a>
            </div>
          </div>
          <a href="/quinceanera" className="block py-2 text-gray-700 hover:text-custom transition-colors duration-300">Quinceañera</a>
          <a href="/special-occasions" className="block py-2 text-gray-700 hover:text-custom transition-colors duration-300">Special Occasions</a>
          <a href="/contact" className="block py-2 text-gray-700 hover:text-custom transition-colors duration-300">Contact</a>
          <a href="https://book.squareup.com/appointments" className="block py-2 text-custom hover:text-customdark transition-colors duration-300">Book an Appointment</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;