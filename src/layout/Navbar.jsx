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
      <div className="container mx-auto flex">
        <div className="flex justify-between ">
          <img src={logo} 
          alt="Leospa Logo" 
           className="h-12 w-15 logomd:h-20 ml-10 md:ml-40 transition-all duration-300"/>
     
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-red-500 focus:outline-none ml-20 py-6">
            <FaBars size={26} />
          </button>
        </div>
    
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
        <div className="md:hidden bg-white w-full mt-40">
          <nav className="flex flex-col space-y-2 items-center">
            <NavLink to="/" className="text-lg text-gray-700 hover:text-red-500 uppercase" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" className="text-lg text-gray-700 hover:text-red-500 uppercase" onClick={toggleMenu}>About</NavLink>
            <NavLink to="/procedures" className="text-lg text-gray-700 hover:text-red-500 uppercase" onClick={toggleMenu}>Feature</NavLink>
            <NavLink to="/service" className="text-lg text-gray-700 hover:text-red-500 uppercase" onClick={toggleMenu}>Service</NavLink>
            <NavLink to="/contact" className="text-lg text-gray-700 hover:text-red-500 uppercase" onClick={toggleMenu}>Contact</NavLink>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;