import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-background text-black dark:text-white transition-colors duration-500">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
        What We Do
      </h2>

      {/* Grid of Service Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <ServiceCard
          title={
            <span className="font-semibold text-xl sm:text-2xl">
              Branded Content Creation
            </span>
          }
          description="We create unique social media content tailored to your business’s tone, style, and audience."
          gradient="none"
        />
        <ServiceCard
          title={
            <span className="font-semibold text-xl sm:text-2xl">
              Consistent Posting
            </span>
          }
          description="We manage and automate consistent, professional posting to help you stay active and top of mind."
          gradient="none"
        />
        <ServiceCard
          title={
            <span className="font-semibold text-xl sm:text-2xl">
              Chat & Voice Assistants
            </span>
          }
          description="Automated assistants handle inquiries, bookings, reminders, and even phone calls like a smart online secretary."
          gradient="none"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
