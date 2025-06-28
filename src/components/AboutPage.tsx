import React, { useState, useEffect } from 'react';
import { Code, Video, Zap, Globe, Shield, Cloud, Brain, Settings, Rocket, Users, Target, Award, TrendingUp, Heart } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [isVisible, setIsVisible] = useState<{[key: number]: boolean}>({});
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const { isDark } = useTheme();

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and creative approaches to solve complex challenges.',
      icon: Rocket,
      color: 'from-[#8e5e42] to-[#8e5e42]'
    },
    {
      title: 'Excellence',
      description: 'We deliver nothing but the highest quality solutions, ensuring every project exceeds expectations and sets new industry standards.',
      icon: Award,
      color: 'from-[#8e5e42] to-[#8e5e42]'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working closely with our clients to understand their vision and bring it to life.',
      icon: Users,
      color: 'from-[#8e5e42] to-[#8e5e42]'
    },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [values.length]);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step1 = 0, step2 = 0, step3 = 0;
      const target1 = 4, target2 = 6, target3 = 20;

      const timer = setInterval(() => {
        step1 += target1 / steps;
        step2 += target2 / steps;
        step3 += target3 / steps;

        setCounter1(Math.min(Math.floor(step1), target1));
        setCounter2(Math.min(Math.floor(step2), target2));
        setCounter3(Math.min(Math.floor(step3), target3));

        if (step1 >= target1 && step2 >= target2 && step3 >= target3) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    if (isVisible[3]) {
      animateCounters();
    }
  }, [isVisible]);

  const backgroundClass = isDark
    ? 'min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
    : 'min-h-screen bg-gradient-to-br from-[#8e5e42]/5 via-white to-[#8e5e42]/10 text-gray-900';

  return (
    <div className={`${backgroundClass} overflow-hidden transition-all duration-500`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {isDark ? (
          <>
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </>
        ) : (
          <>
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#8e5e42]/30 to-[#8e5e42]/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#8e5e42]/30 to-[#8e5e42]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-br from-[#8e5e42]/30 to-[#8e5e42]/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </>
        )}
        
        {/* Floating Tech Elements */}
        <div className={`absolute top-32 left-32 w-4 h-4 ${isDark ? 'bg-[#8e5e42]/30' : 'bg-[#8e5e42]/40'} rounded-full animate-ping delay-500`}></div>
        <div className={`absolute top-64 right-64 w-6 h-6 border-2 ${isDark ? 'border-[#8e5e42]/30' : 'border-[#8e5e42]/40'} rounded-lg rotate-45 animate-spin`}></div>
        <div className={`absolute bottom-32 right-32 w-8 h-8 ${isDark ? 'bg-gradient-to-r from-[#8e5e42]/20 to-[#8e5e42]/20' : 'bg-gradient-to-r from-[#8e5e42]/30 to-[#8e5e42]/30'} rounded-full animate-pulse delay-1500`}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            data-animate
            className={`text-center transition-all duration-1000 transform ${
              isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h1 className={`text-7xl md:text-9xl font-black mb-8 leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
            }`}>
              Who We Are
            </h1>
            <p className={`text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed mb-12 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              REDtech Africa Consulting is a pioneering technology and media powerhouse, 
              dedicated to transforming the digital landscape across Africa and beyond.
            </p>
            
            {/* Animated DNA Helix */}
            <div className="flex justify-center items-center space-x-8 mt-16">
              <div className={`w-24 h-24 rounded-full ${isDark ? 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/40' : 'bg-gradient-to-br from-[#8e5e42]/30 to-[#8e5e42]/50'} flex items-center justify-center animate-pulse`}>
                <Code size={32} className={isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'} />
              </div>
              <div className={`w-32 h-32 rounded-full ${isDark ? 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/40' : 'bg-gradient-to-br from-[#8e5e42]/30 to-[#8e5e42]/50'} flex items-center justify-center animate-pulse delay-500`}>
                <Brain size={40} className={isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'} />
              </div>
              <div className={`w-24 h-24 rounded-full ${isDark ? 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/40' : 'bg-gradient-to-br from-[#8e5e42]/30 to-[#8e5e42]/50'} flex items-center justify-center animate-pulse delay-1000`}>
                <Video size={32} className={isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`grid lg:grid-cols-2 gap-16 transition-all duration-1000 transform ${
              isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            {/* Mission */}
            <div className={`${isDark ? 'bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/20 hover:border-[#8e5e42]/40' : 'bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/30 hover:border-[#8e5e42]/50'} backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 group`}>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-[#8e5e42] rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Target size={28} className="text-white" />
                </div>
                <h2 className={`text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Mission</h2>
              </div>
              <div className="space-y-4">
                <div className={`w-full h-1 bg-[#8e5e42] rounded-full`}></div>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  To revolutionize the African technology and media landscape by delivering cutting-edge solutions 
                  that empower businesses, amplify voices, and drive digital transformation. We bridge the gap 
                  between innovation and impact, creating sustainable growth for our clients while fostering 
                  technological advancement across the continent.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className={`${isDark ? 'bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/20 hover:border-[#8e5e42]/40' : 'bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/30 hover:border-[#8e5e42]/50'} backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 group`}>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-[#8e5e42] rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Rocket size={28} className="text-white" />
                </div>
                <h2 className={`text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Vision</h2>
              </div>
              <div className="space-y-4">
                <div className={`w-full h-1 bg-[#8e5e42] rounded-full`}></div>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  To be Africa's leading technology and media consulting firm, recognized globally for our innovation, 
                  creativity, and transformative impact. We envision a future where African businesses lead the 
                  digital revolution, telling authentic stories and creating world-class solutions that inspire 
                  and connect communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`text-center space-y-16 transition-all duration-1000 transform ${
              isVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className={`${isDark ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-gray-600/30' : 'bg-gradient-to-r from-white/80 to-gray-50/80 border-gray-200/50'} backdrop-blur-sm rounded-3xl p-12 border`}>
              <h2 className={`text-5xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Business</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className={`w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Code size={32} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technology Solutions</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Custom software, mobile apps, and enterprise systems</p>
                </div>
                <div className="text-center">
                  <div className={`w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Video size={32} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Creative Media</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Content production, digital marketing, and brand strategy</p>
                </div>
                <div className="text-center">
                  <div className={`w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Brain size={32} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>AI Integration</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Machine learning solutions and intelligent automation</p>
                </div>
              </div>
              <p className={`text-xl leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                As a premier technology and media consulting firm, we combine technical expertise with creative vision 
                to deliver comprehensive solutions. Our integrated approach ensures that every project not only meets 
                technical requirements but also tells compelling stories and creates meaningful connections with audiences.
              </p>
            </div>

            <div className={`${isDark ? 'bg-gradient-to-r from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/20' : 'bg-gradient-to-r from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/30'} backdrop-blur-sm rounded-3xl p-12 border`}>
              <h2 className={`text-5xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Global Presence</h2>
              <p className={`text-xl leading-relaxed max-w-4xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                With our headquarters rooted in Africa and partnerships spanning across continents, we bring local 
                insights and global perspectives to every project. Our diverse portfolio includes clients from 
                startups to multinational corporations, all united by the common goal of digital transformation 
                and creative excellence.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div className={`${isDark ? 'bg-gray-800/30' : 'bg-white/50'} rounded-xl p-4 text-center`}>
                  <Globe size={24} className={`mx-auto mb-2 ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`} />
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Africa</span>
                </div>
                <div className={`${isDark ? 'bg-gray-800/30' : 'bg-white/50'} rounded-xl p-4 text-center`}>
                  <Globe size={24} className={`mx-auto mb-2 ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`} />
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Europe</span>
                </div>
                <div className={`${isDark ? 'bg-gray-800/30' : 'bg-white/50'} rounded-xl p-4 text-center`}>
                  <Globe size={24} className={`mx-auto mb-2 ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`} />
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Americas</span>
                </div>
                <div className={`${isDark ? 'bg-gray-800/30' : 'bg-white/50'} rounded-xl p-4 text-center`}>
                  <Globe size={24} className={`mx-auto mb-2 ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`} />
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Asia</span>
                </div>
              </div>
            </div>

            <div className={`${isDark ? 'bg-gradient-to-r from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/20' : 'bg-gradient-to-r from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/30'} backdrop-blur-sm rounded-3xl p-12 border`}>
              <h2 className={`text-5xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our History</h2>
              <p className={`text-xl leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Founded with a vision to democratize technology and amplify African creativity, REDtech Africa 
                Consulting has evolved from a small tech startup to a comprehensive digital transformation partner. 
                Our journey has been marked by groundbreaking projects, innovative solutions, and a commitment to 
                pushing the boundaries of what's possible in the digital realm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 transform ${
              isVisible[3] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className={`${isDark ? 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/30' : 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/40'} backdrop-blur-sm rounded-3xl p-8 border text-center group hover:scale-105 transition-transform duration-300`}>
              <div className={`text-6xl font-black mb-4 ${isDark ? 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'}`}>
                {counter1}+
              </div>
              <div className={`font-bold text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Years of Digital Excellence</div>
              <div className={`w-full h-1 bg-[#8e5e42] rounded-full mt-4 group-hover:scale-x-110 transition-transform duration-300`}></div>
            </div>
            
            <div className={`${isDark ? 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/30' : 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/40'} backdrop-blur-sm rounded-3xl p-8 border text-center group hover:scale-105 transition-transform duration-300`}>
              <div className={`text-6xl font-black mb-4 ${isDark ? 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'}`}>
                {counter2}+
              </div>
              <div className={`font-bold text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Innovation Projects Delivered</div>
              <div className={`w-full h-1 bg-[#8e5e42] rounded-full mt-4 group-hover:scale-x-110 transition-transform duration-300`}></div>
            </div>
            
            <div className={`${isDark ? 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/30' : 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/40'} backdrop-blur-sm rounded-3xl p-8 border text-center group hover:scale-105 transition-transform duration-300`}>
              <div className={`text-6xl font-black mb-4 ${isDark ? 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'}`}>
                {counter3}+
              </div>
              <div className={`font-bold text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Global Clients & Partners</div>
              <div className={`w-full h-1 bg-[#8e5e42] rounded-full mt-4 group-hover:scale-x-110 transition-transform duration-300`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`transition-all duration-1000 transform ${
              isVisible[4] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className={`text-5xl font-black text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Guided by Our Values
            </h2>
            
            {/* Interactive Values Display */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Navigation */}
              <div className="space-y-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveValue(index)}
                      className={`w-full p-6 rounded-2xl text-left transition-all duration-500 transform ${
                        activeValue === index 
                          ? isDark
                            ? 'bg-gradient-to-r from-gray-700/50 to-gray-600/50 border-2 border-white/20 scale-105' 
                            : 'bg-gradient-to-r from-white/80 to-gray-50/80 border-2 border-gray-300/40 scale-105'
                          : isDark
                            ? 'bg-gray-800/30 border border-gray-700/30 hover:bg-gray-700/40'
                            : 'bg-white/50 border border-gray-200/40 hover:bg-gray-50/60'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-[#8e5e42] rounded-xl flex items-center justify-center transition-transform duration-300 ${
                          activeValue === index ? 'scale-110' : ''
                        }`}>
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{value.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right - Active Value Display */}
              <div className={`${isDark ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600/30' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200/50'} backdrop-blur-sm rounded-3xl p-12 border min-h-[400px] flex flex-col justify-center`}>
                <div className="transition-all duration-500 transform">
                  <div className="flex items-center mb-8">
                    <div className={`w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mr-6`}>
                      {(() => {
                        const IconComponent = values[activeValue].icon;
                        return <IconComponent size={32} className="text-white" />;
                      })()}
                    </div>
                    <h3 className={`text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{values[activeValue].title}</h3>
                  </div>
                  <div className={`w-full h-2 bg-[#8e5e42] rounded-full mb-8`}></div>
                  <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {values[activeValue].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${isDark ? 'bg-gradient-to-r from-[#8e5e42]/10 via-[#8e5e42]/10 to-[#8e5e42]/10 border-white/10' : 'bg-gradient-to-r from-[#8e5e42]/10 via-[#8e5e42]/10 to-[#8e5e42]/10 border-gray-200/30'} backdrop-blur-sm rounded-3xl p-16 border`}>
            <h2 className={`text-5xl md:text-6xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to Transform Your Digital Future?
            </h2>
            <p className={`text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Join us on a journey of innovation, creativity, and digital excellence. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className={`px-10 py-5 bg-[#8e5e42] rounded-2xl font-bold text-white text-lg hover:shadow-2xl hover:shadow-[#8e5e42]/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}>
                Start Your Journey
              </button>
              <button className={`px-10 py-5 border-2 ${isDark ? 'border-white/20 hover:bg-white/10 hover:border-white/40' : 'border-gray-300/50 hover:bg-gray-100/50 hover:border-gray-400/60'} rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Discover Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
