import React from 'react';
// import Navbar from '../layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Procedures from '../components/sections/Procedures';
import Slider from '../components/sections/Slider';
import Service from '../components/sections/Service'
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';



const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Procedures />
      <Slider />
      <Service />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;