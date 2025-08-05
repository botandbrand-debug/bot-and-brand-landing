import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 bg-background text-foreground">
      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl font-bold text-center mb-10
        bg-clip-text text-transparent
        bg-gradient-to-r from-[#00ffff] to-[#3b82f6]
        dark:from-[#39ff14] dark:to-[#00ff99] dark:bg-gradient-to-r
        drop-shadow-[0_0_8px_#00ffff]
        dark:drop-shadow-[0_0_8px_#39ff14]
        transition-all duration-500"
      >
        What We Do
      </h2>

      {/* Grid of Service Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <ServiceCard
          title="Branded Content Creation"
          description="We create unique social media content tailored to your business’s tone, style, and audience."
          gradient="bg-gradient-to-br from-electric to-electricBlue"
        />
        <ServiceCard
          title="Consistent Posting"
          description="We manage and automate consistent, professional posting to help you stay active and top-of-mind."
          gradient="bg-gradient-to-br from-electricBlue to-neonGreen"
        />
        <ServiceCard
          title="Chat & Voice Assistants"
          description="Automated assistants handle inquiries, bookings, reminders, and even phone calls—like a smart online secretary."
          gradient="bg-gradient-to-br from-electricBlueDark to-electric"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
