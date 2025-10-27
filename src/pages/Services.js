import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Branded Social Media Content",
      text: "We create high-quality, customized content tailored to your brand’s tone, colors, and values. From captions to graphics, everything is designed to reflect your identity and engage your audience.",
    },
    {
      title: "Professional, Consistent Posting",
      text: "We handle the entire posting process, including planning, scheduling, and publishing, so your brand stays active and visible while you focus on your work.",
    },
    {
      title: "Automated Chat & Call Assistants",
      text: "Our smart virtual assistants respond to calls and messages, book appointments, send reminders, and follow up with leads, acting like a 24/7 online secretary for your brand.",
    },
    {
      title: "Strategy & Setup",
      text: "Whether you’re launching, growing, or simplifying, we help you clarify your goals, build a digital strategy, and set up systems to keep your presence running smoothly from day one.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#eaffea] via-white to-[#eaffea] dark:from-black dark:via-zinc-900 dark:to-black text-black dark:text-white px-6 py-16 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-black dark:text-white">
          Our Services
        </h1>

        <div className="grid gap-8">
          {services.map(({ title, text }, i) => (
            <div
              key={i}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">
                {title}
              </h2>
              <p className="text-base text-zinc-800 dark:text-gray-200">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/27716235194"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-zinc-900 hover:scale-110 transition-transform duration-300 shadow-lg"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-3xl text-[#39ff14]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
