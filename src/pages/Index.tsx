
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navigation } from '@/components/Navigation';
import AboutPage from '@/components/AboutPage';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <AboutPage />
      </div>
    </ThemeProvider>
  );
};

export default Index;
