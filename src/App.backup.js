import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#111827] dark:to-[#1f2937] text-black dark:text-white font-sans scroll-smooth transition-colors duration-300">
      {/* Navigation */}
      <header className="flex flex-col md:flex-row justify-between items-center p-6 border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-3">
          <motion.img
            src="/logo.webp"
            alt="Bot & Brand logo"
            className="w-12 h-12"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          />
          <div>
            <h1 className="text-2xl font-bold text-electric-blue">Bot & Brand</h1>
            <p className="text-xs text-black/60 dark:text-white/60">Digital presence on autopilot.</p>
          </div>
        </div>
        <nav className="flex gap-6 mt-4 md:mt-0 text-sm md:text-base">
          <a href="#services" className="hover:text-electric-blue transition">Services</a>
          <a href="#contact" className="hover:text-electric-blue transition">Contact</a>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Smart content. Instant replies. <br className="hidden md:inline" />
          Hands-free calls — even while you sleep.
        </motion.h2>
        <motion.p
          className="text-black/70 dark:text-white/70 max-w-2xl mx-auto mt-4 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bot & Brand runs your digital presence even when you're off the clock.
        </motion.p>
        <motion.a
          href="https://wa.me/27763604655?text=Hi%20👋%20I'm%20ready%20to%20level%20up%20with%20Bot%20%26%20Brand%20—%20let's%20talk!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-electric-blue text-black px-6 py-3 rounded-full shadow-md hover:bg-white transition"
          whileHover={{ scale: 1.05 }}
        >
          Book a Free Demo
        </motion.a>
      </section>

      {/* Mission & Vision */}
      <section className="text-center py-12 px-6 max-w-3xl mx-auto">
        <motion.h3
          className="text-xl md:text-2xl font-semibold mb-4 text-electric-blue"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mission & Vision
        </motion.h3>
        <motion.p
          className="text-black/70 dark:text-white/70 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our mission is simple: make your business look active, professional, and responsive—day or night. 
          Our vision is a world where solo founders, small teams, and even large companies grow with less stress and more sleep.
        </motion.p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-electric-blue mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Automated Client Communication",
              items: [
                "24/7 chat responses",
                "Hands-free phone call answering",
                "Guided FAQs and lead qualification"
              ]
            },
            {
              title: "Effortless Content Creation",
              items: [
                "Branded images and videos",
                "Captions, hashtags, and content calendars",
                "Optional scheduling and publishing"
              ]
            },
            {
              title: "Booking & Lead Capture Systems",
              items: [
                "Smart forms and booking links",
                "Follow-up automation",
                "CRM integration (optional)"
              ]
            },
            {
              title: "Done-for-You Branding Systems",
              items: [
                "Brand identity setup (bio, logo guidance, colors)",
                "Website & landing page builds",
                "Social media starter kits"
              ]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-black/5 dark:bg-white/5 p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-electric-blue">{service.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-black/90 dark:text-white/90">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-16 px-6">
        <motion.p
          className="text-xl mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What would you like help with? 😊
        </motion.p>
        <motion.a
          href="https://wa.me/27763604655?text=Hi%20👋%20I'm%20ready%20to%20level%20up%20with%20Bot%20%26%20Brand%20—%20let's%20talk!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-400 transition animate-bounceSlow"
        >
          Let’s Chat
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-black/50 dark:text-white/50 border-t border-black/10 dark:border-white/10">
        Contact: <a href="mailto:BotAndBrand@solution4u.com" className="underline">BotAndBrand@solution4u.com</a><br />
        &copy; {new Date().getFullYear()} Bot & Brand. All rights reserved.
      </footer>
    </div>
  );
}

export default App;