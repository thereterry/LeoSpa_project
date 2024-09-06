import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Procedures from '../components/sections/Procedures';
import Slider from '../components/sections/Slider';

import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';



const HomeLayout = () => {
  return (
    <main className=''>
    <Hero />
    <section id="about">
      <About />
    </section>
    <section id="procedures">
      <Procedures />
    </section>
    <section id="slider">
      <Slider />
    </section>
    <section id="team">
      <Team />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer />
  </main>

  );
};

export default HomeLayout;