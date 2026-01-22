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
      {/* REMOVE the wrapper div - let Waitlist handle its own layout */}
      {!isSplashDone ? (
        <SplashScreen />
      ) : (
        <Waitlist />
      )}
    </ThemeProvider>
  );
}

export default App;