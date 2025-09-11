import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.webp";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-background shadow-sm border-b border-border z-50 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo & Title */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="Bot & Brand Logo"
            className="h-10 w-10 animate-spin-slow"
          />
          <span
            className="text-xl font-bold tracking-wide bg-clip-text text-transparent transition duration-300
              bg-gradient-to-r from-[#0369a1] to-[#00ffff]
              dark:from-[#39ff14] dark:to-[#aaff00]
              dark:drop-shadow-[0_0_8px_#39ff14]"
          >
            Bot & Brand
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm md:text-base">
          {navItems.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`relative px-2 py-1 font-medium transition duration-300
                  ${
                    isActive
                      ? "text-[#0369a1] dark:text-white font-semibold after:scale-x-100"
                      : "text-[#1e293b] dark:text-[#39ff14]"
                  }
                  hover:text-[#0369a1] dark:hover:text-white
                  after:content-[''] after:absolute after:bottom-0 after:left-0
                  after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:transition-transform 
                  after:duration-300 after:bg-[#0369a1] dark:after:bg-[#39ff14] ${
                    isActive ? "after:scale-x-100" : "hover:after:scale-x-100"
                  }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Login/Register Button */}
          <a
            href="https://dashboard.botandbrand.app"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-1.5 rounded-full font-medium text-white bg-[#0369a1] hover:bg-[#0284c7] dark:bg-[#39ff14] dark:text-black dark:hover:bg-[#aaff00] transition"
          >
            Login / Register
          </a>

          <ThemeToggle />
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded hover:bg-muted transition"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Side Drawer */}
          <div className="relative ml-auto h-full w-64 bg-white/90 dark:bg-[#111827]/90 text-foreground backdrop-blur-md shadow-xl p-6 space-y-4 transition-transform duration-300">
            <div className="flex justify-end">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-foreground hover:text-[#00ffff]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Items */}
            {navItems.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-medium px-2 py-2 rounded transition duration-200 ${
                    isActive
                      ? "text-[#00ffff] bg-muted"
                      : "text-foreground hover:text-[#00ffff]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            {/* Mobile Login/Register Button */}
            <a
              href="https://dashboard.botandbrand.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-medium px-4 py-2 mt-4 rounded-full text-center text-white bg-[#0369a1] hover:bg-[#0284c7] dark:bg-[#39ff14] dark:text-black dark:hover:bg-[#aaff00] transition"
            >
              Login / Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
