
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export const BackgroundElements = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute top-20 right-20 w-96 h-96 blur-3xl animate-pulse ${
        isDark 
          ? 'bg-gradient-to-br from-amber-600/10 to-amber-700/10'
          : 'bg-gradient-to-br from-amber-600/5 to-amber-700/5'
      }`}></div>
      <div className={`absolute bottom-20 left-20 w-80 h-80 blur-3xl animate-pulse delay-1000 ${
        isDark 
          ? 'bg-gradient-to-br from-amber-700/10 to-amber-800/10'
          : 'bg-gradient-to-br from-amber-700/5 to-amber-800/5'
      }`}></div>
      <div className={`absolute top-1/3 left-1/2 w-72 h-72 blur-3xl animate-pulse delay-2000 ${
        isDark 
          ? 'bg-gradient-to-br from-amber-500/10 to-amber-600/10'
          : 'bg-gradient-to-br from-amber-500/5 to-amber-600/5'
      }`}></div>
    </div>
  );
};
