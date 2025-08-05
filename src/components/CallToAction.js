import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="text-center py-16 px-6 bg-[#e0faff] dark:bg-zinc-950 transition-colors duration-300">
      <div className="rounded-2xl p-10 border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#00ffff] dark:text-[#39ff14]">
          Ready to Autopilot Your Digital Presence?
        </h2>
        <p className="mb-8 text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto">
          Start your journey with <span className="font-semibold text-electric-blue">Bot & Brand</span> — message us directly or schedule a walkthrough. We respond fast.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://wa.me/27763604655"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-neon-green text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-card"
          >
            <MessageCircle className="w-5 h-5" />
            Start Now
          </a>
          <a
            href="https://instagram.com/botandbrand"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-electric-blue text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-card"
          >
            <Instagram className="w-5 h-5" />
            DM Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
