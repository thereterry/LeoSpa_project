import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Billeder/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center max-w-2xl relative z-10">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:outline-none">
        Skip to main content
      </a>
      {/* Logo on the left */}
      <div className="container mx-auto flex items-center">
        <Link to="/" aria-label="Home">
          <img
            src={logo}
            alt="Leospa Logo"
            className="h-12 w-15 md:h-20 ml-10 md:ml-40 transition-all duration-300"
          />
        </Link>
      </div>

      {/* Burger menu icon on the right for mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-red-500 focus:outline-none ml-20 py-6"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <FaBars size={26} />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="md:flex space-x-8 items-center ml-80 pt-10 hidden">
        {['Home', 'About', 'Feature', 'Service', 'Contact'].map((item) => (
          <a
            key={item}
            href={item === 'Service' ? '/service' : `#${item.toLowerCase()}`}
            className="text-lg text-gray-700 hover:text-red-500 uppercase block md:inline-block"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu: Burger menu when clicked */}
      <div
        className={`fixed bg-[#FAF4EB] w-full h-50 top-0 left-0 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-red-500 focus:outline-none"
          aria-label="Close menu"
        >
          <FaTimes size={26} />
        </button>
        <nav className="flex flex-col space-y-4 items-center py-20">
          {['Home', 'About', 'Feature', 'Service', 'Contact'].map((item) => (
            <Link
              key={item}
            to={item === 'Service' ? '/service' : item === 'Feature' ? '/feature' : `/${item.toLowerCase()}`}
              className="text-lg text-gray-700 hover:text-red-500 uppercase"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;

