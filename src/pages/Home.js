import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="pt-16 px-4 sm:px-6 md:px-10 lg:px-16 space-y-8 md:space-y-10">
      <Hero />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Home;
