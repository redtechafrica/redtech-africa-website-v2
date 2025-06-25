
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

export const CallToActionSection = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <section className="py-20 relative">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`backdrop-blur-sm rounded-3xl p-12 border ${
          isDark 
            ? 'bg-gradient-to-r from-amber-600/10 via-amber-700/10 to-amber-800/10 border-white/10'
            : 'bg-gradient-to-r from-amber-50/80 via-amber-100/80 to-amber-200/80 border-gray-200/30'
        }`}>
          <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Transform Your Business?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join thousands of satisfied customers who have revolutionized their operations with our cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')} 
              className="px-8 py-4 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-amber-600/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
