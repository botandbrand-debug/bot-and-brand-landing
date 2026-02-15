import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import SplashScreen from './components/SplashScreen';
import AppRoutes from './routes';

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
      {!isSplashDone ? <SplashScreen /> : <AppRoutes />}
    </ThemeProvider>
  );
}

export default App;