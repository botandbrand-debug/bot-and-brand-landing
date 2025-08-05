import React from "react";

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-[#eaffea] via-white to-[#eaffea] dark:from-black dark:via-zinc-900 dark:to-black text-black dark:text-white px-6 py-16 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-neonGreen to-electricBlue text-transparent bg-clip-text">
          Our Services
        </h1>

        <div className="grid gap-8">
          {[
            {
              title: "Branded Social Media Content",
              text:
                "We create high-quality, customized content tailored to your brand’s tone, colors, and values. From captions to graphics, everything is designed to reflect your identity and engage your audience.",
            },
            {
              title: "Professional, Consistent Posting",
              text:
                "We handle the entire posting process — planning, scheduling, and publishing — so your brand stays active and visible while you stay focused on your work.",
            },
            {
              title: "Automated Chat & Call Assistants",
              text:
                "Our smart virtual assistants respond to calls and messages, book appointments, send reminders, and follow up with leads — acting like a 24/7 online secretary for your brand.",
            },
            {
              title: "Strategy & Setup",
              text:
                "Whether you’re launching, growing, or simplifying, we help you clarify your goals, build a digital strategy, and set up systems to keep your presence running smoothly from day one.",
            },
          ].map(({ title, text }, i) => (
            <div
              key={i}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2 text-electricBlue dark:text-neonGreen">{title}</h2>
              <p className="text-base text-zinc-800 dark:text-gray-200">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/27763604655"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neonGreen text-black hover:scale-105 transition-transform px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.5 3.5c-4.7-4.7-12.3-4.7-17 0s-4.7 12.3 0 17c3.5 3.5 8.8 4.5 13 2.4l4.5 1.2-1.2-4.5c2-4.2 1-9.5-2.3-13zm-2.4 11.3l-.6.6c-.4.4-1.2.7-1.8.5-3.2-1-5.5-3.3-6.5-6.5-.2-.6 0-1.4.5-1.8l.6-.6c.3-.3.7-.4 1.1-.2l.5.2c.6.2 1 .8 1 1.4 0 .2 0 .5-.2.7-.1.2-.3.3-.4.4-.3.2-.4.6-.2.9.5.8 1.2 1.5 2 2 .3.2.7.1.9-.2.1-.1.2-.3.4-.4.2-.1.4-.2.7-.2.6 0 1.1.4 1.4 1l.2.5c.2.4.1.8-.2 1.1z" />
            </svg>
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
