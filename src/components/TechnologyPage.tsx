import React, { useState, useEffect } from 'react';
import { Code, Cloud, Brain, Cpu, Database, Shield, Zap, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

export default function TechnologyPage() {
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const capabilities = [
    {
      icon: Cloud,
      title: "Digital Infrastructure",
      description: "Cloud, enterprise systems, cybersecurity, and data management solutions"
    },
    {
      icon: Code,
      title: "Product Engineering",
      description: "Custom web and mobile applications built for performance and scale"
    },
    {
      icon: Layers,
      title: "Enterprise Solutions",
      description: "ERP systems integrating HR, finance, operations, and sales"
    },
    {
      icon: Brain,
      title: "AI & Data Solutions",
      description: "Predictive analytics and automation for smarter decision-making"
    }
  ];

  const products = [
    {
      title: "Trade Credit Solution",
      description: "AI-powered credit management platform for financial institutions. Streamline lending operations with intelligent risk assessment and automated workflows.",
      features: [
        "Real-time credit scoring and risk assessment",
        "Automated loan processing and approval",
        "Portfolio management and monitoring",
        "Comprehensive reporting and analytics"
      ],
      icon: Database
    },
    {
      title: "Pawning App",
      description: "Digital platform for collateral-based lending with automated valuation. Modern solution for pawnshops and lending institutions.",
      features: [
        "AI-powered asset valuation",
        "Digital inventory management",
        "Secure transaction processing",
        "Customer relationship management"
      ],
      icon: Shield
    },
    {
      title: "Redstream",
      description: "Professional-grade video streaming and monetization platform. Deliver high-quality content to global audiences with robust monetization tools.",
      features: [
        "HD/4K video streaming infrastructure",
        "Multiple monetization models",
        "Analytics and audience insights",
        "Content management system"
      ],
      icon: Zap
    },
    {
      title: "ERP Suite",
      description: "Scalable enterprise management system integrating key business processes. Comprehensive solution for growing businesses.",
      features: [
        "Financial management and accounting",
        "HR and payroll integration",
        "Inventory and supply chain management",
        "Sales and customer management"
      ],
      icon: Layers
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
              RAC Technology
            </h1>
            <p className={`text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed mb-8 font-bold ${
              isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
            }`}>
              Strategic Technology Consulting & Innovation
            </p>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Beyond IT delivery, we're your strategic technology partner helping organisations reimagine how they operate, innovate, and scale through modern digital tools
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Our Capabilities
            </h2>
          </div>

          <div 
            data-animate
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 transform ${
              isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  isDark 
                    ? 'bg-gray-800/50 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                    : 'bg-white/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                }`}
              >
                <div className="w-16 h-16 bg-[#8e5e42] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <capability.icon size={32} className="text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {capability.title}
                </h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Portfolio */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Our Innovation Portfolio
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Cutting-edge solutions that power business transformation across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                data-animate
                className={`backdrop-blur-sm rounded-3xl p-8 border transition-all duration-1000 transform hover:scale-105 ${
                  isVisible[3 + index] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20'
                    : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20'
                }`}
              >
                <div className="w-16 h-16 bg-[#8e5e42] rounded-xl flex items-center justify-center mb-6">
                  <product.icon size={32} className="text-white" />
                </div>
                
                <h3 className={`text-2xl font-black mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {product.title}
                </h3>
                
                <p className={`text-lg mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {product.description}
                </p>

                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[#8e5e42] flex-shrink-0 mt-1" />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            <Cpu size={48} className={`mx-auto mb-6 ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`} />
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Transform Your Technology Infrastructure?
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss how our technology solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#8e5e42] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              Explore Our Tech Solutions
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}