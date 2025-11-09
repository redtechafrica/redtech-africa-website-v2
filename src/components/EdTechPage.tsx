import React, { useState, useEffect } from 'react';
import { Trophy, BookOpen, Users, Target, Zap, CheckCircle, ArrowRight, Award, TrendingUp, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

export default function EdTechPage() {
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const platforms = [
    {
      title: "Dicey Hackathon Platform (DHP)",
      subtitle: "Powering Innovation Competitions & Collaborative Learning",
      icon: Trophy,
      description: "Empowering innovation challenges & engagement. DHP is the ultimate platform for running hackathons, coding challenges, and innovation competitions that inspire creativity and drive results.",
      features: [
        "Seamless event management & judging tools",
        "Real time leaderboards & analytics",
        "Mentorship matching & sponsor integration",
        "Perfect for universities, institutions, hubs, and corporate innovation teams"
      ],
      stats: [
        { value: "70%", label: "Reduction in event management time" },
        { value: "3x", label: "Engagement from participants" },
        { value: "100+", label: "Institutions onboarded" }
      ],
      image: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.28.35.png?alt=media&token=1ce21401-4139-4163-baba-265f2ac843a9"
    },
    {
      title: "Year Book App (YBA)",
      subtitle: "Modernizing Digital Yearbooks & Alumni Engagement",
      icon: BookOpen,
      description: "Reimagining how institutions celebrate achievements and memories. YBA transforms traditional yearbooks into dynamic digital experiences that last forever.",
      features: [
        "Cloud based, multimedia yearbook builder",
        "Collaborative creation for students and staff",
        "Fully digital, sustainable, and globally accessible",
        "Interactive features and social sharing capabilities"
      ],
      stats: [
        { value: "100%", label: "Digital & Sustainable" },
        { value: "Global", label: "Accessible Anywhere" },
        { value: "Forever", label: "Cloud Based Storage" }
      ],
      image: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2F1.png?alt=media&token=3c56050e-817d-43f8-aa3b-1b93a33c5817"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Built for Education",
      description: "Purpose built for academic and training institutions"
    },
    {
      icon: Zap,
      title: "Easy to Implement",
      description: "Cloud based, scalable, and ready to deploy"
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "Regular updates based on user feedback"
    },
    {
      icon: CheckCircle,
      title: "Affordable Pricing",
      description: "Designed for schools, universities, and public institutions"
    }
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

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-[#8e5e42]/5 via-white to-[#8e5e42]/10 text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl animate-pulse ${
          isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/20'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/20'
        }`}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
            }`}>
              RAC EdTech
            </h1>
            <p className={`text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed mb-8 font-bold ${
              isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
            }`}>
              Transforming Education Through Technology
            </p>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Empowering institutions, students, and innovators to thrive in the digital age while driving inclusive growth through AI, Data, and Digital Transformation
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      {platforms.map((platform, index) => (
        <section key={index} className="py-20 relative">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              data-animate
              className={`transition-all duration-1000 transform ${
                isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className={`backdrop-blur-sm rounded-3xl p-12 border ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20'
                  : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20'
              }`}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mb-6">
                      <platform.icon size={40} className="text-white" />
                    </div>
                    
                    <h2 className={`text-4xl md:text-5xl font-black ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {platform.title}
                    </h2>
                    
                    <p className={`text-xl font-bold ${
                      isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
                    }`}>
                      {platform.subtitle}
                    </p>

                    <p className={`text-lg leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {platform.description}
                    </p>

                    <div className="space-y-3">
                      {platform.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-[#8e5e42] flex-shrink-0 mt-1" />
                          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6">
                      {platform.stats.map((stat, idx) => (
                        <div key={idx} className={`p-4 rounded-xl text-center ${
                          isDark ? 'bg-[#8e5e42]/20' : 'bg-[#8e5e42]/10'
                        }`}>
                          <div className={`text-3xl font-black mb-2 ${
                            isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
                          }`}>
                            {stat.value}
                          </div>
                          <div className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={platform.image}
                        alt={platform.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose RAC EdTech */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`transition-all duration-1000 transform ${
              isVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-12 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Why Choose RAC EdTech
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl border text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    isDark 
                      ? 'bg-gray-800/50 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                      : 'bg-white/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                  }`}
                >
                  <div className="w-16 h-16 bg-[#8e5e42] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon size={32} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-sm rounded-3xl p-12 border ${
            isDark 
              ? 'bg-[#8e5e42]/10 border-white/10'
              : 'bg-[#8e5e42]/20 border-[#8e5e42]/30 shadow-2xl'
          }`}>
            <Award size={48} className={`mx-auto mb-6 ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`} />
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Transform Your Educational Institution
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Join innovative institutions using RAC EdTech to enhance learning, engagement, and institutional success.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#8e5e42] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              Book a Demo
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}