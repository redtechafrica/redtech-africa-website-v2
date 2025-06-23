
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const products = [
    {
      id: 1,
      title: "YearBook App (YBA)",
      subtitle: "Revolutionizing Academic Memories",
      description:
        "Transform traditional hardcover yearbooks into dynamic digital experiences. YearBook App captures student autobiographies, school activities, and institutional history in an interactive mobile platform available on iOS and Android.",
      target: "Perfect for: Secondary schools, universities, colleges",
      status: "",
      image: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2F1.png?alt=media&token=3c56050e-817d-43f8-aa3b-1b93a33c5817",
      color: "from-blue-500 to-purple-600",
      accent: "bg-blue-500",
      link: "https://apps.apple.com/us/app/yearbook-academy/id6740851135"
    },
    {
      id: 2,
      title: "REDtech ERP System",
      subtitle: "Three-in-One Business Management",
      description:
        "Our comprehensive ERP solution is specifically designed for restaurants, studios, and hospitality/real estate businesses. Streamline operations, manage resources, and boost profitability with our integrated platform.",
      target: "",
      status: "Currently serving: Multiple businesses across various industries",
      image: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-30%20at%2011.25.02.png?alt=media&token=9150c0eb-0659-4bc1-b033-ca807430e96a",
      color: "from-red-500 to-orange-600",
      accent: "bg-red-500",
      link: "https://trifusion-erpwxyv.rollout.site/#dashboard"
    },
    {
      id: 3,
      title: "Dicey Tech Hackathon",
      subtitle: "Fostering Innovation Across Africa",
      description:
        "Data & AI hackathons held in Nigeria, across Africa, and the UK — empowering the next generation of African tech innovators. These challenges are designed to harness local talent, solve real-world problems, and drive global impact through data science, artificial intelligence, and cutting-edge technology.",
      target: "",
      status: "Impact: Prizes awarded, careers launched, communities built",
      image: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.28.35.png?alt=media&token=1ce21401-4139-4163-baba-265f2ac843a9",
      color: "from-green-500 to-teal-600",
      accent: "bg-green-500",
      link: "https://diceytech.co.uk/"
    },
    {
      id: 4,
      title: "REDstream Platform",
      subtitle: "African Stories, Global Audience",
      description:
        "Our streaming platform celebrates African content with a curated selection of films, series, and documentaries. Featuring original MMD productions and premium African content behind a smart paywall system.",
      target: "",
      status: "Coming Soon: Launch with exclusive African originals",
      image: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.34.48.jpg?alt=media&token=52f014fc-56fe-4369-8c4e-be58d1424a11",
      color: "from-purple-500 to-pink-600",
      accent: "bg-purple-500",
      link: "https://redstream-webapp-platform.vercel.app/"
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

  const handleProductClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse ${
          isDark 
            ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' 
            : 'bg-gradient-to-br from-blue-500/30 to-purple-500/30'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDark 
            ? 'bg-gradient-to-br from-red-500/20 to-orange-500/20' 
            : 'bg-gradient-to-br from-red-500/30 to-orange-500/30'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse delay-2000 ${
          isDark 
            ? 'bg-gradient-to-br from-green-500/10 to-teal-500/10' 
            : 'bg-gradient-to-br from-green-500/20 to-teal-500/20'
        }`}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium text-white shadow-lg">
                Innovation • Technology • Excellence
              </span>
            </div>
            <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent'
            }`}>
              Our Products
            </h1>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Cutting-edge solutions that shape the future of technology and digital experiences
            </p>

            {/* Floating Tech Elements */}
            <div className="relative mt-16 h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-32 h-32 border-2 rounded-lg rotate-45 animate-spin ${
                  isDark ? 'border-blue-500/30' : 'border-blue-500/50'
                }`}></div>
                <div className={`absolute w-24 h-24 border-2 rounded-full animate-pulse ${
                  isDark ? 'border-purple-500/30' : 'border-purple-500/50'
                }`}></div>
                <div className={`absolute w-16 h-16 rounded-full animate-bounce ${
                  isDark 
                    ? 'bg-gradient-to-r from-red-500/30 to-orange-500/30' 
                    : 'bg-gradient-to-r from-red-500/50 to-orange-500/50'
                }`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-animate
              className={`mb-20 transition-all duration-1000 transform ${
                isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-r ${product.color} p-1 group hover:scale-[1.02] transition-all duration-500`}>
                <div className={`backdrop-blur-sm rounded-3xl p-8 md:p-12 ${
                  isDark ? 'bg-gray-900/95' : 'bg-white/95'
                }`}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-3 h-3 ${product.accent} rounded-full animate-pulse`}></div>
                        <span className={`text-sm font-medium uppercase tracking-wider ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          Product {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      
                      {/* Enhanced Clickable Title */}
                      <h3 
                        onClick={() => handleProductClick(product.link)}
                        className={`text-4xl md:text-5xl font-black mb-4 leading-tight cursor-pointer relative group/title transition-all duration-500 hover:scale-105 active:scale-95 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        <span className="relative z-10 bg-gradient-to-r from-current via-current to-current bg-clip-text text-transparent group-hover/title:from-blue-400 group-hover/title:via-purple-400 group-hover/title:to-pink-400 transition-all duration-500">
                          {product.title}
                        </span>
                        
                        {/* Animated underline */}
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover/title:w-full transition-all duration-700 ease-out"></div>
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover/title:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl rounded-lg"></div>
                        </div>
                        
                        {/* Click indicator */}
                        <div className="absolute -top-2 -right-2 opacity-0 group-hover/title:opacity-100 transform translate-x-2 group-hover/title:translate-x-0 transition-all duration-300">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Floating particles */}
                        <div className="absolute inset-0 opacity-0 group-hover/title:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-150"></div>
                          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-300"></div>
                        </div>
                      </h3>
                      
                      <h4 className={`text-xl md:text-2xl font-bold mb-6 ${
                        isDark 
                          ? 'bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent'
                      }`}>
                        {product.subtitle}
                      </h4>

                      <p className={`text-lg leading-relaxed mb-8 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {product.description}
                      </p>

                      <div className="space-y-3">
                        {product.target && (
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <p className="text-green-500 font-medium">{product.target}</p>
                          </div>
                        )}
                        
                        {product.status && (
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <p className="text-blue-500 font-medium">{product.status}</p>
                          </div>
                        )}
                      </div>

                      {/* Visit Product Button */}
                      <div className="pt-6">
                        <button
                          onClick={() => handleProductClick(product.link)}
                          className={`group/btn relative px-8 py-4 rounded-xl font-bold border transition-all duration-300 overflow-hidden ${
                            isDark 
                              ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white border-gray-600 hover:border-gray-400' 
                              : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 border-gray-300 hover:border-gray-500'
                          }`}
                        >
                          <span className="relative z-10 flex items-center space-x-2">
                            <span>Visit Product</span>
                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/50 to-pink-600/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                        </button>
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl z-10"></div>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-110"
                        />
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-ping"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-sm rounded-3xl p-12 border ${
            isDark 
              ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-white/10' 
              : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20 shadow-2xl'
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
                onClick={() => navigate("/contact")} 
                className={`px-8 py-4 border-2 rounded-xl font-bold transition-all duration-300 ${
                  isDark 
                    ? 'border-white/20 text-white hover:bg-white/10' 
                    : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                }`}
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
