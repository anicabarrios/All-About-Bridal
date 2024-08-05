import React, { useState } from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWeddingDropdownOpen, setIsWeddingDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleWeddingDropdown = () => {
    setIsWeddingDropdownOpen(!isWeddingDropdownOpen);
  };

  return (
    <header className="bg-white py-4 shadow-lg fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">
        <h1 className="text-2xl md:text-4xl font-serif text-gray-900 tracking-tight mx-auto md:mx-0 md:text-left w-full md:w-auto text-center">
          About Love Bridal and Formal
        </h1>
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <ul className="flex space-x-8">
            <li><a href="/" className="text-gray-700 hover:text-custom transition duration-300">Home</a></li>
            <li><a href="/about-us" className="text-gray-700 hover:text-custom transition duration-300">About Us</a></li>
            <li className="relative">
              <button
                onClick={toggleWeddingDropdown}
                className="text-gray-700 hover:text-custom transition duration-300 flex items-center"
              >
                Wedding
              </button>
              {isWeddingDropdownOpen && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md w-48 text-gray-700 text-center">
                  <li><a href="/dresses" className="block px-4 py-2 hover:bg-gray-100 transition duration-300">Bridal Gowns</a></li>
                  <li><a href="/wedding/mother-of-bride" className="block px-4 py-2 hover:bg-gray-100 transition duration-300">Mother of Bride</a></li>
                  <li><a href="/wedding/bridesmaids" className="block px-4 py-2 hover:bg-gray-100 transition duration-300">Bridesmaids</a></li>
                </ul>
              )}
            </li>
            <li><a href="/quincanera" className="text-gray-700 hover:text-custom transition duration-300">Quinceanera</a></li>
            <li><a href="/special-occasions" className="text-gray-700 hover:text-custom transition duration-300">Special Occasions</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-custom transition duration-300">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="https://book.squareup.com/appointments/pn1ik744tu6bkj/location/LR5XA5F05K6TY/services"
            className="px-4 py-2 bg-custom text-white font-semibold rounded-md hidden md:block hover:bg-customdark transition duration-300"
          >
            Book an Appointment
          </a>
          <a href="https://www.instagram.com/aboutlovebridal" className="text-gray-700 hover:text-custom transition duration-300">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/AboutLoveBridal" className="text-gray-700 hover:text-custom transition duration-300">
            <FaFacebookF className="h-6 w-6" />
          </a>
        </div>
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-custom hover:border-custom"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className="px-6 pt-2 pb-4 space-y-2 text-lg font-medium text-center">
          <li><a href="/" className="text-gray-700 hover:text-custom transition duration-300 block">Home</a></li>
          <li><a href="/about-us" className="text-gray-700 hover:text-custom transition duration-300 block">About Us</a></li>
          <li className="relative">
            <button
              onClick={toggleWeddingDropdown}
              className="text-gray-700 hover:text-custom transition duration-300 block w-full text-center"
            >
              Wedding
            </button>
            {isWeddingDropdownOpen && (
              <ul className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md w-48 text-gray-700 text-center">
                <li><a href="/dresses" className="block px-4 py-2 hover:bg-gray-100 transition duration-300">Bridal Gowns</a></li>
                <li><a href="/dresses" className="block px-4 py-2 hover:bg-gray-100 transition duration-300">Mother of Bride</a></li>
                <li><a href="/dresses" className="block px-4 py-2 hover:bg-gray-100 transition duration-300">Bridesmaids</a></li>
              </ul>
            )}
          </li>
          <li><a href="/quincanera" className="text-gray-700 hover:text-custom transition duration-300 block">Quinceanera</a></li>
          <li><a href="/special-occasions" className="text-gray-700 hover:text-custom transition duration-300 block">Special Occasions</a></li>
          <li><a href="/contact" className="text-gray-700 hover:text-custom transition duration-300 block">Contact</a></li>
          <li><a href="https://book.squareup.com/appointments/pn1ik744tu6bkj/location/LR5XA5F05K6TY/services" className="text-gray-700 hover:text-custom transition duration-300 block">Book an Appointment</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
