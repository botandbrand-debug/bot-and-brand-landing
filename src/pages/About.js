import React from "react";
import botAndBrandImage from "../assets/bot and brand.webp";
import yourOnlinePresenceImage from "../assets/your online presence.webp";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-[#eaffea] via-white to-[#eaffea] dark:from-black dark:via-zinc-900 dark:to-black text-foreground transition-colors duration-500">

      {/* Image Row: Swaps Order on Dark Mode */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* Image 1 — Light Mode: Bot & Brand | Dark Mode: Your Presence */}
        <div className="flex justify-center order-1 dark:order-2">
          <img
            src={botAndBrandImage}
            alt="Bot and Brand"
            className="w-60 h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Image 2 — Light Mode: Your Presence | Dark Mode: Bot & Brand */}
        <div className="flex justify-center order-2 dark:order-1">
          <img
            src={yourOnlinePresenceImage}
            alt="Your Digital Presence"
            className="w-60 h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-4xl mx-auto bg-white/80 dark:bg-white/5 rounded-3xl shadow-xl backdrop-blur-md p-10 text-center border border-white/20 dark:border-white/10 mb-20">
        <p className="text-lg md:text-xl leading-relaxed text-zinc-800 dark:text-gray-200">
          At <span className="font-semibold text-electricBlue">Bot & Brand</span>, we streamline your digital presence — from{" "}
          <span className="text-neonGreen font-medium">branded social content</span> to{" "}
          <span className="text-electricBlue font-medium">automated responses</span> — so you can stay visible,
          credible, and connected without doing the heavy lifting.
          <br /><br />
          Whether you’re <span className="font-medium text-electricBlue">launching</span>,{" "}
          <span className="font-medium text-neonGreen">growing</span>, or managing momentum, our system helps you
          build trust, capture attention, and convert interest into action.
        </p>
      </div>

    </section>
  );
};

export default About;
