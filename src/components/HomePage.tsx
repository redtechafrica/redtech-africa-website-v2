import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Users, Brain, ArrowRight, Target, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();
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
        : 'bg-gradient-to-br from-gray-50 via-white to-[#8e5e42]/5 text-gray-900'
    }`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-96 h-96 blur-3xl animate-pulse ${
          isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/5'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-80 h-80 blur-3xl animate-pulse delay-1000 ${
          isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/5'
        }`}></div>
      </div>

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center pt-20 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
          : 'bg-gradient-to-br from-[#8e5e42]/5 via-white to-[#8e5e42]/10 text-gray-900'
      }`}>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="space-y-8">
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
            }`}>
              Empowering Africa's Future
            </h1>
            
            <p className={`text-3xl md:text-4xl max-w-4xl mx-auto leading-relaxed font-bold ${
              isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
            }`}>
              Through Resourcing, Education, and Technology
            </p>
            
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              RAC helps organisations access top talent, deploy transformative technology, and create sustainable learning ecosystems
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button
                onClick={() => navigate('/resourcing')}
                className="px-12 py-6 bg-[#8e5e42] rounded-2xl font-bold text-white text-xl hover:shadow-2xl hover:shadow-[#8e5e42]/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-3"
              >
                Explore Our Solutions
                <ArrowRight size={24} />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className={`px-12 py-6 rounded-2xl font-bold text-xl border-2 border-[#8e5e42] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-3 ${
                  isDark 
                    ? 'bg-transparent text-white hover:bg-[#8e5e42]/10'
                    : 'bg-transparent text-gray-900 hover:bg-[#8e5e42]/10'
                }`}
              >
                Partner With Us
                <Users size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our Three Pillars
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div 
              onClick={() => navigate('/resourcing')}
              className={`cursor-pointer p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                  : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
              }`}
            >
              <div className="w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Users size={40} className="text-white" />
              </div>
              <h3 className={`text-2xl font-black mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Resourcing
              </h3>
              <p className={`text-center leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Strategic resourcing and talent ecosystems
              </p>
            </div>

            <div 
              onClick={() => navigate('/edtech')}
              className={`cursor-pointer p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                  : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
              }`}
            >
              <div className="w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Brain size={40} className="text-white" />
              </div>
              <h3 className={`text-2xl font-black mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                EdTech
              </h3>
              <p className={`text-center leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Digital platforms for learning and innovation
              </p>
            </div>

            <div 
              onClick={() => navigate('/technology')}
              className={`cursor-pointer p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                  : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
              }`}
            >
              <div className="w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Code size={40} className="text-white" />
              </div>
              <h3 className={`text-2xl font-black mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Technology
              </h3>
              <p className={`text-center leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Enterprise-grade technology consulting
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className={`backdrop-blur-sm rounded-3xl p-12 border ${
            isDark 
              ? 'bg-gradient-to-br from-[#8e5e42]/20 to-gray-800/80 border-[#8e5e42]/30'
              : 'bg-gradient-to-br from-[#8e5e42]/10 to-white/80 border-[#8e5e42]/30'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className={`text-5xl font-black mb-2 ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`}>1,000+</div>
                <div className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Fellows</div>
              </div>
              <div>
                <div className={`text-5xl font-black mb-2 ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`}>300+</div>
                <div className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Partners</div>
              </div>
              <div>
                <div className={`text-5xl font-black mb-2 ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`}>20+</div>
                <div className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Innovation Events</div>
              </div>
              <div>
                <div className={`text-5xl font-black mb-2 ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`}>5</div>
                <div className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
