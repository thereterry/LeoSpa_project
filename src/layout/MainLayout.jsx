import React from 'react';
import Navbar from '../layout/Navbar'; 
import Footer from '../components/sections/Footer'


const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
