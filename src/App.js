import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';

import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import AppRoutes from './routes';

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
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
