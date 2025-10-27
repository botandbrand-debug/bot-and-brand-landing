import React from "react";
import botAndBrandImage from "../assets/bot and brand.webp";
import yourOnlinePresenceImage from "../assets/your online presence.webp";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-[#eaffea] via-white to-[#eaffea] dark:from-black dark:via-zinc-900 dark:to-black text-foreground transition-colors duration-500">

      {/* Top Image: Your Digital Presence */}
      <div className="max-w-5xl mx-auto px-6 py-10 flex justify-center">
        <img
          src={yourOnlinePresenceImage}
          alt="Your Digital Presence"
          className="w-full md:w-3/4 h-[28rem] md:h-[32rem] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-4xl mx-auto bg-white/80 dark:bg-white/5 rounded-3xl shadow-xl backdrop-blur-md p-10 text-center border border-white/20 dark:border-white/10 mb-10">
        <p className="text-lg md:text-xl leading-relaxed text-zinc-800 dark:text-gray-200">
          At <span className="font-semibold text-electricBlue">Bot & Brand</span>, we streamline your digital presence from{" "}
          <span className="text-neonGreen font-medium">branded social content</span> to{" "}
          <span className="text-electricBlue font-medium">automated responses</span>, so you can stay visible,
          credible, and connected without doing the heavy lifting.
          <br /><br />
          Whether you’re <span className="font-medium text-electricBlue">launching</span>,{" "}
          <span className="font-medium text-neonGreen">growing</span>, or managing momentum, our system helps you
          build trust, capture attention, and convert interest into action.
        </p>
      </div>

      {/* Bottom Image: Bot & Brand */}
      <div className="max-w-5xl mx-auto px-6 pb-10 flex justify-center">
        <img
          src={botAndBrandImage}
          alt="Bot and Brand"
          className="w-60 md:w-72 h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        />
      </div>

    </section>
  );
};

export default About;
