import React, { useEffect, useState } from 'react';
import logo from '../../assets/Billeder/logo.png'; // Import your logo image
import useRequestData from '../../hooks/useRequestData';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialVimeo } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {

  const { makeRequest, data, error, isLoading } = useRequestData();

  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    makeRequest('http://localhost:5029/footer');
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      setFooterData(data);
    }
  }, [data]);

  console.log(isLoading);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;


  return (
    <footer className="py-10 text-center">
      <div className="bg-[#FEF7F6]">
        <img src={logo} alt="Leospa" className="mx-auto mb-6 w-24 h-auto" />
        <nav className="mb-6">
          <ul className="flex justify-center space-x-6 text-sm font-semibold text-gray-700">
            <li><a href="#home" className="text-base text-gray-700 hover:text-red-500 uppercase font-medium">Home</a></li>
            <li><a href="#about" className="text-base text-gray-700 hover:text-red-500 uppercase font-medium">About</a></li>
            <li><a href="#feature" className="text-base  text-gray-700 hover:text-red-500 uppercase font-medium">Feature</a></li>
            <li><a href="#service" className="text-base  text-gray-700 hover:text-red-500 uppercase font-medium">Service</a></li>
            <li><a href="#contact" className="text-base  text-gray-700 hover:text-red-500 uppercase font-medium">Contact</a></li>
          </ul>
        </nav>
        
          <div className="mb-6">
            <p className="text-base text-gray-700">{footerData.name}</p>
            <p className="text-base text-gray-700">CVR: {footerData.cvr}</p>
            <p className="text-base text-gray-700">{footerData.address}</p>
            <p className="text-base text-gray-700">{footerData.zipncity}</p>
            <p className="text-base text-gray-700">Phone: {footerData.phone}</p>
            <p className="text-base text-gray-700">Email: {footerData.email}</p>
            <p className="text-base text-gray-700">{footerData.openinghours}</p>
          </div>  

        <div className="flex justify-center space-x-4 mb-6 social-icons">
          <div className="relative flex items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <TiSocialFacebook className="text-gray-700 hover:text-red-500" />
            </a>
          </div>
          <div className="relative flex items-center">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TiSocialTwitter className="text-gray-700 hover:text-red-500" />
            </a>
          </div>
          <div className="relative flex items-center">
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
              <TiSocialVimeo className="text-gray-700 hover:text-red-500" />
            </a>
          </div>
          <div className="relative flex items-center">
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <SlSocialInstagram className="text-gray-700 hover:text-red-500" />
            </a>
          </div>
        </div>
      
        <p className="text-xs text-gray-400">
          &copy; COPYRIGHT 2021<a href="https://themeies.com" className="text-red-400 hover:text-red-400 ml-2 mr-2">LEOSPA</a> ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;