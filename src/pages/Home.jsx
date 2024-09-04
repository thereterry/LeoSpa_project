import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Procedures from '../components/sections/Procedures';
import Slider from '../components/sections/Slider';

import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';



const Home = () => {
  return (
    <main className=''>
      <Hero />
      <About />
      <Procedures />
      <Slider />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;