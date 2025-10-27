import React, { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

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
    <footer className="bg-gradient-to-tr from-[#0f0f0f] via-black to-[#111111] border-t border-border py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm relative">

        {/* Left: Brand + Copyright */}
        <div className="text-center md:text-left text-white">
          <span className="text-base font-semibold">
            Bot & Brand
          </span>{" "}
          <span className="text-xs sm:text-sm text-zinc-400">
            · From BAUNC
          </span>{" "}
          © {currentYear}. All rights reserved.
        </div>

        {/* Center: Back to top arrow */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          {showArrow && (
            <button
              onClick={scrollToTop}
              className="text-electricBlue dark:text-neonGreen mb-2 text-base transition-all duration-500 animate-fadeUpSlow"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          )}
        </div>

        {/* Right: Social Icons (bounce together) */}
        <div className="flex flex-col items-center md:items-end gap-2 text-sm">
          <span className="whitespace-nowrap text-white">Need help? Let's chat.</span>
          
          <div className="flex gap-5 text-xl mt-1 animate-bounce">
            <a
              href="https://wa.me/27763604655"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-transform duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/Botandbrand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:text-pink-400 transition-transform duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@bot.and.brand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00ffff] transition-colors duration-300"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>

          {/* Privacy & Terms Links */}
          <div className="flex flex-col items-center md:items-end gap-1 mt-2">
            <a
              href="/privacy-policy"
              className="text-white hover:text-neonGreen dark:hover:text-electricBlue transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-white hover:text-neonGreen dark:hover:text-electricBlue transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}