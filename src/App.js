import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import SplashScreen from './components/SplashScreen';
import Waitlist from './pages/Waitlist';

function App() {
  const [isSplashDone, setIsSplashDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashDone(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        {!isSplashDone ? (
          <SplashScreen />
        ) : (
          // Show ONLY Waitlist page, no routing, no other components
          <Waitlist />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;