
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const HeroSection = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <section className={`relative min-h-screen flex items-center justify-center ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
        : 'bg-gradient-to-br from-amber-50 via-white to-amber-100 text-gray-900'
    }`}>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8 md:space-y-12 pt-24 md:pt-0">
          <div className="space-y-6">
            <h1 className={`text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-amber-200 to-amber-300 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-amber-700 to-amber-800 bg-clip-text text-transparent'
            }`}>
              <span className="block">Powering</span>
              <span className="block text-amber-500">Africa's</span>
              <span className="block">Digital Future</span>
            </h1>
            
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark 
                ? 'bg-gradient-to-r from-amber-400 to-amber-600'
                : 'bg-gradient-to-r from-amber-600 to-amber-800'
            }`}></div>
          </div>
          
          <p className={`text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-medium px-4 ${
            isDark ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Through <span className="text-amber-500 font-bold">Innovation & Storytelling</span>, we bridge technology and media to help 
            businesses scale, creatives thrive, and communities connect across Africa and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 px-4">
            <button
              onClick={() => navigate('/services')}
              className="group px-10 md:px-12 py-5 md:py-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 rounded-2xl font-bold text-white text-xl hover:shadow-2xl hover:shadow-amber-600/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 flex items-center justify-center gap-4 border-2 border-amber-400/20"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile-specific visual enhancement */}
          <div className="block md:hidden mt-12">
            <div className={`flex justify-center space-x-8 ${
              isDark ? 'text-amber-400' : 'text-amber-600'
            }`}>
              <div className="text-center">
                <div className="text-3xl font-black">4+</div>
                <div className="text-sm opacity-80">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black">20+</div>
                <div className="text-sm opacity-80">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black">∞</div>
                <div className="text-sm opacity-80">Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-8 h-12 border-2 rounded-full flex justify-center ${
          isDark ? 'border-amber-400/60' : 'border-amber-600/60'
        }`}>
          <div className={`w-2 h-4 rounded-full mt-2 animate-pulse ${
            isDark ? 'bg-amber-400/80' : 'bg-amber-600/80'
          }`}></div>
        </div>
        <div className={`text-sm mt-2 font-medium ${
          isDark ? 'text-amber-400/60' : 'text-amber-600/60'
        }`}>
          Scroll
        </div>
      </div>
    </section>
  );
};
