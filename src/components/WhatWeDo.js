import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Branded Social Media Content",
    description:
      "We create sleek, branded content that speaks to your audience and reinforces your credibility.",
  },
  {
    title: "Consistent Posting & Scheduling",
    description:
      "Never fall behind — we manage a reliable, polished posting schedule tailored to your goals.",
  },
  {
    title: "Smart Automation (Chat + Voice)",
    description:
      "Automated chatbots and call responders that act like your virtual assistant, handling bookings, FAQs, and follow-ups.",
  },
];

const WhatWeDo = () => {
  return (
    <motion.section
      className="px-6 py-12 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        What We Do
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-card border border-border p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhatWeDo;
