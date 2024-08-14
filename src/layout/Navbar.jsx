import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Billeder/logo.png'; // Adjust the path to your logo image
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between max-w-2xl">
            {/* Logo on the left */}
      <div className="container mx-auto flex">
        <div className="flex items-center">
          <img src={logo} 
          alt="Leospa Logo" 
           className="h-12 w-15 logomd:h-20 ml-10 md:ml-40 transition-all duration-300"/>
        </div>

           {/* Burger menu icon on the right for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-red-500 focus:outline-none ml-20 py-6">
            <FaBars size={26} />
          </button>
        </div>
       {/* Desktop Menu */}
        <div className=" md:flex space-x-8 items-center ml-80 pt-10 hidden">
          <a href="/" className="text-lg text-gray-700 hover:text-red-500 uppercase block md:inline-block">Home</a>
          <a href='#about' className="text-lg text-gray-700 hover:text-red-500 uppercase block md:inline-block">About</a>
          <a href='#procedures' className="text-lg text-gray-700 hover:text-red-500 uppercase block md:inline-block">Feature</a>
          <a href="#service" className="text-lg text-gray-700 hover:text-red-500 uppercase block md:inline-block">Service</a>
          <a href='#contact' className="text-lg text-gray-700 hover:text-red-500 uppercase block md:inline-block">Contact</a>
        </div>
      </div>

          {/* Mobile Menu: Appears when the burger menu is clicked */}
      {isOpen && (
        <div className="md:hidden bg-[#FFDAB9] w-3/4 absolute top-16 right-0 shadow-lg rounded-lg">
          <nav className="flex flex-col space-y-4 items-center py-4">
            <a href="/" className="text-lg text-gray-700 hover:text-red-500 uppercase" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-lg text-gray-700 hover:text-red-500 uppercase" onClick={toggleMenu}>About</a>
            <a href="#procedures" className="text-lg text-gray-700 hover:text-red-500 uppercase" onClick={toggleMenu}>Feature</a>
            <a href="#service" className="text-lg text-gray-700 hover:text-red-500 uppercase" onClick={toggleMenu}>Service</a>
            <a href="#contact" className="text-lg text-gray-700 hover:text-red-500 uppercase" onClick={toggleMenu}>Contact</a>
          </nav>       
        </div>
      )}
    </nav>
  );
};

export default Navbar;