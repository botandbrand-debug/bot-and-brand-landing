// src/components/Layout.js
import React from 'react';
//import Header from './Header';
//import Footer from './Footer';
import { ThemeProvider } from './ThemeProvider';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
