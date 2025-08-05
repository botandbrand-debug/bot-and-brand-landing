import React, { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-tr from-[#0f0f0f] via-black to-[#111111] text-foreground border-t border-border py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm relative">

        {/* Left: Brand + Copyright */}
        <div className="text-center md:text-left text-zinc-500 dark:text-zinc-400">
          <span className="text-base font-semibold bg-gradient-to-r from-[#00ffff] to-[#39ff14] bg-clip-text text-transparent">
            Bot & Brand
          </span>{" "}
          <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            · Powered by BAUNC
          </span>{" "}
          © {currentYear}. All rights reserved.
        </div>

        {/* Center: Arrow + Social Icons */}
        <div className="flex flex-col items-center">
          {showArrow && (
            <button
              onClick={scrollToTop}
              className="text-electricBlue dark:text-neonGreen mb-2 text-base transition-all duration-500 animate-fadeUpSlow"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          )}

          <div className="flex gap-5 text-xl">
            <a
              href="https://www.instagram.com/Botandbrand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@bot.and.brand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-5 h-5 hover:opacity-90 transition-opacity"
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full fill-[#00ffff] hover:fill-[#39ff14] transition-colors"
              >
                <path d="M176 32c0 26.51 21.49 48 48 48v40a87.93 87.93 0 01-48-14.07V160a80 80 0 11-80-80 79.36 79.36 0 0124.52 3.87V56a8 8 0 0116 0v72a8 8 0 01-8 8 64 64 0 1064 64V32z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: WhatsApp */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-300">
          <span className="whitespace-nowrap">Need help? Let’s chat.</span>
          <a
            href="https://wa.me/27763604655"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 animate-bounce text-xl transition-transform duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
