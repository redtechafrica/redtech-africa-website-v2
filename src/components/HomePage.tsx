
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { BackgroundElements } from './home/BackgroundElements';
import { HeroSection } from './home/HeroSection';
import { OurStorySection } from './home/OurStorySection';
import { OurDivisionsSection } from './home/OurDivisionsSection';
import { CallToActionSection } from './home/CallToActionSection';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({});
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(prev => ({ ...prev, [index]: isInView }));
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
        : 'bg-gradient-to-br from-gray-50 via-white to-amber-50 text-gray-900'
    }`}>
      <BackgroundElements />
      <HeroSection />
      <OurStorySection isVisible={isVisible[0]} />
      <OurDivisionsSection 
        isVisible1={isVisible[1]} 
        isVisible2={isVisible[2]} 
        isVisible3={isVisible[3]} 
      />
      <CallToActionSection />
    </div>
  );
}
