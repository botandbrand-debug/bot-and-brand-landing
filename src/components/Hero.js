import React from "react";
import botImage from "../assets/bot.webp";
import brandImage from "../assets/brand.webp";

export default function Hero() {
  return (
    <section className="py-20 px-6 bg-background text-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-center md:text-left">

        {/* Left: Bot image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={botImage}
            alt="Bot Character"
            className="w-40 sm:w-52 h-auto rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Center: Text */}
        <div className="space-y-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span
              className="block bg-gradient-to-r from-[#00ffff] to-[#3b82f6] 
              dark:from-[#39ff14] dark:to-[#00ff99] 
              bg-clip-text text-transparent 
              drop-shadow-[0_0_8px_#00ffff] 
              dark:drop-shadow-[0_0_8px_#39ff14] 
              transition-all duration-500"
            >
              Your Digital Presence. Autopiloted.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Whether you’re launching, pivoting, or scaling, our process helps you build credibility, capture attention, and grow — without complexity.
          </p>
        </div>

        {/* Right: Brand image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={brandImage}
            alt="Brand Character"
            className="w-40 sm:w-52 h-auto rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
