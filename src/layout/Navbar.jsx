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
          <img src={logo} alt="Leospa Logo" className="h-20 w-15 ml-40" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-red-500 focus:outline-none">
            <FaBars size={24} />
          </button>
        </div>
    
        <div className=" md:flex space-x-8 items-center ml-80 pt-10 hidden">
          <NavLink to="/" className="text-lg text-gray-700 hover:text-red-500 uppercase block md:inline-block">Home</NavLink>
          <NavLink to="/about" className="text-lg text-gray-700 hover:text-red-500 uppercase block md:inline-block">About</NavLink>
          <NavLink to="/procedures" className="text-lg text-gray-700 hover:text-red-500 uppercase block md:inline-block">Feature</NavLink>
          <NavLink to="/service" className="text-lg text-gray-700 hover:text-red-500 uppercase block md:inline-block">Service</NavLink>
          <NavLink to="/contact" className="text-lg text-gray-700 hover:text-red-500 uppercase block md:inline-block">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;