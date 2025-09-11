import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';

import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import AppRoutes from './routes';
import ChatWidget from './components/ChatWidget'; // ⬅️ Import widget

function App() {
  const [isSplashDone, setIsSplashDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashDone(true);
    }, 2000); // Adjust splash duration (ms) if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        {!isSplashDone ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />

            {/* 🔹 Chat Widget floats globally on every page */}
            <ChatWidget webhookUrl="https://n8n-on-fly-morning-night-4549.fly.dev/webhook/eb27b69a-5387-46af-b68e-7f096e4ec6e5/chat" />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
