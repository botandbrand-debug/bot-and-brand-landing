import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); // Increased duration to 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }} // Slower fade in/out
        >
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 animate-spin-slow mb-4"
          />
          <p className="text-xs text-muted-foreground absolute bottom-6">
            From <span className="font-semibold">BAUNC</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
