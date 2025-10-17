import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Briefcase, DollarSign, BookOpen, Building2, Cpu, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

export default function ResourcingPage() {
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const resourceServices = [
    {
      icon: Users,
      title: "Talent Acquisition & Management",
      description: "Recruiting, developing, and retaining high-impact professionals who drive organizational success."
    },
    {
      icon: TrendingUp,
      title: "Networks & Alliances",
      description: "Building partnerships, joint ventures, and ecosystems that accelerate growth and innovation."
    },
    {
      icon: Briefcase,
      title: "Vendor & Partnership Networks",
      description: "Curating trusted partners that extend your capabilities and enhance service delivery."
    },
    {
      icon: DollarSign,
      title: "Financial Resources",
      description: "Connecting you to capital, grants, and funding partners that fuel sustainable growth."
    },
    {
      icon: BookOpen,
      title: "Intellectual Resources",
      description: "Leveraging data, research, and institutional knowledge for competitive advantage."
    },
    {
      icon: Building2,
      title: "Infrastructure & Operations",
      description: "Optimizing facilities, logistics, and operational readiness for peak performance."
    },
    {
      icon: Cpu,
      title: "Technological Resources",
      description: "Deploying digital systems for efficiency, scalability, and innovation."
    },
  ];

  const methodology = [
    { step: "Assess", description: "Evaluate your strategic objectives and current resource landscape" },
    { step: "Identify", description: "Pinpoint critical resource gaps and opportunities for optimization" },
    { step: "Deploy", description: "Implement tailored solutions that align with your strategic goals" },
    { step: "Scale", description: "Create sustainable competitive advantage through resource excellence" }
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
              RAC Resourcing
            </h1>
            <p className={`text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed mb-8 font-bold ${
              isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
            }`}>
              Strategic Resourcing Solutions for Growth
            </p>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The art and science of ensuring your organisation has every critical resource needed for success
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Our Strategic Resourcing Services
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive resource optimization helping organisations align people, partnerships, funding, and infrastructure to strategic goals
            </p>
          </div>

          <div 
            data-animate
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 transform ${
              isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            {resourceServices.map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  isDark 
                    ? 'bg-gray-800/50 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                    : 'bg-white/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                }`}
              >
                <div className="w-16 h-16 bg-[#8e5e42] rounded-xl flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
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
              Our Methodology
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {methodology.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`p-8 rounded-2xl border h-full ${
                    isDark 
                      ? 'bg-gradient-to-br from-[#8e5e42]/20 to-gray-800/50 border-[#8e5e42]/30'
                      : 'bg-gradient-to-br from-[#8e5e42]/10 to-white border-[#8e5e42]/30'
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#8e5e42] rounded-full flex items-center justify-center font-bold text-white text-xl">
                        {index + 1}
                      </div>
                      <h3 className={`text-2xl font-black ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.step}
                      </h3>
                    </div>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      {item.description}
                    </p>
                  </div>
                  {index < methodology.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight size={24} className="text-[#8e5e42]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`backdrop-blur-sm rounded-3xl p-12 border transition-all duration-1000 transform ${
              isVisible[3] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } ${
              isDark 
                ? 'bg-gradient-to-br from-[#8e5e42]/20 to-gray-800/80 border-[#8e5e42]/30'
                : 'bg-gradient-to-br from-[#8e5e42]/10 to-white/80 border-[#8e5e42]/30'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`text-4xl font-black mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Creating Competitive Advantage
                </h2>
                <p className={`text-lg leading-relaxed mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We assess your strategic objectives, identify resource gaps, and deliver tailored solutions that create competitive advantage from workforce planning to ecosystem design.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-[#8e5e42] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#8e5e42]/25 transition-all duration-300 flex items-center gap-2"
                >
                  Talk to a Resourcing Consultant
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="space-y-4">
                {[
                  "Strategic alignment of all critical resources",
                  "Comprehensive workforce planning and talent optimization",
                  "Partnership ecosystem development",
                  "Capital and funding connections",
                  "Technology infrastructure deployment"
                ].map((benefit, index) => (
                  <div key={index} className={`flex items-start gap-4 p-4 rounded-lg ${
                    isDark ? 'bg-gray-900/50' : 'bg-white/50'
                  }`}>
                    <CheckCircle size={24} className="text-[#8e5e42] flex-shrink-0 mt-1" />
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
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
            <Target size={48} className={`mx-auto mb-6 ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`} />
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Optimize Your Resources?
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss how strategic resourcing can transform your organization's capabilities and drive sustainable growth.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#8e5e42] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}