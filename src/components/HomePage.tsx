
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Video, Zap, Globe, Shield, Cloud, Brain, Settings, Rocket, Users, Target, Award, TrendingUp, Heart, Plus, ArrowRight, CheckCircle, Star, Play } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const heroImages = [
    "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2F1.png?alt=media&token=3c56050e-817d-43f8-aa3b-1b93a33c5817",
    "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.25.40.jpg?alt=media&token=0fa14a70-baad-4215-97e4-f2cc66b7429d",
    "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.28.35.png?alt=media&token=1ce21401-4139-4163-baba-265f2ac843a9",
    "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.34.48.jpg?alt=media&token=52f014fc-56fe-4369-8c4e-be58d1424a11",
    "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2F3.png?alt=media&token=7e750ac1-3b7b-40cd-a35f-f5adfb6a63cc",
    "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2020.56.50.jpg?alt=media&token=750742b4-89df-4943-afe4-88fbc4993ba2"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
          isDark 
            ? 'bg-[#8e5e42]/10'
            : 'bg-[#8e5e42]/5'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-80 h-80 blur-3xl animate-pulse delay-1000 ${
          isDark 
            ? 'bg-[#8e5e42]/10'
            : 'bg-[#8e5e42]/5'
        }`}></div>
        <div className={`absolute top-1/3 left-1/2 w-72 h-72 blur-3xl animate-pulse delay-2000 ${
          isDark 
            ? 'bg-[#8e5e42]/10'
            : 'bg-[#8e5e42]/5'
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
              Powering Africa's Digital Future
            </h1>
            
            <p className={`text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Through Innovation & Storytelling, we bridge technology and media to help 
              businesses scale, creatives thrive, and communities connect across Africa and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button
                onClick={() => navigate('/services')}
                className="px-12 py-6 bg-[#8e5e42] rounded-2xl font-bold text-white text-xl hover:shadow-2xl hover:shadow-[#8e5e42]/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-3"
              >
                Explore Our Solutions
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? 'border-white/30' : 'border-gray-600/30'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              isDark ? 'bg-white/50' : 'bg-gray-600/50'
            }`}></div>
          </div>
        </div>
      </section>

      {/* Where Technology Meets Creative Excellence */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 transform ${
              isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="space-y-8">
              <div>
                <span className="text-[#8e5e42] font-bold text-lg uppercase tracking-wider">Our Story</span>
                <h2 className={`text-5xl font-black mt-2 mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Where Technology Meets Creative Excellence
                </h2>
              </div>
              
              <div className={`space-y-6 text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p>
                  REDtech Africa is a pioneering media-tech company transforming how businesses and creatives build, 
                  scale, and connect with audiences across the African continent. Through our two specialized 
                  divisions—Technology Services and Media & Digital Services—we deliver end-to-end solutions 
                  that combine cutting-edge innovation with compelling storytelling.
                </p>
                <p>
                  Founded on the vision of democratizing access to world-class technology and media production, 
                  we've grown to become a trusted partner helping businesses and creators navigate the digital 
                  landscape with confidence and creativity.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className={`px-6 py-3 rounded-full font-medium ${
                  isDark 
                    ? 'bg-[#8e5e42]/20 border border-[#8e5e42]/30 text-[#8e5e42]'
                    : 'bg-[#8e5e42]/10 border border-[#8e5e42]/20 text-[#8e5e42]'
                }`}>
                  4+ Years Experience
                </div>
                <div className={`px-6 py-3 rounded-full font-medium ${
                  isDark 
                    ? 'bg-[#8e5e42]/20 border border-[#8e5e42]/30 text-gray-300'
                    : 'bg-[#8e5e42]/10 border border-[#8e5e42]/20 text-gray-600'
                }`}>
                  20+ Projects Delivered
                </div>
                <div className={`px-6 py-3 rounded-full font-medium ${
                  isDark 
                    ? 'bg-[#8e5e42]/20 border border-[#8e5e42]/30 text-[#8e5e42]'
                    : 'bg-[#8e5e42]/10 border border-[#8e5e42]/20 text-[#8e5e42]'
                }`}>
                  Global Reach
                </div>
              </div>
            </div>

            <div className="relative">
              <div className={`rounded-3xl overflow-hidden shadow-2xl ${
                isDark ? 'border-4 border-white/10' : 'border-4 border-gray-200/50'
              }`}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.25.40.jpg?alt=media&token=0fa14a70-baad-4215-97e4-f2cc66b7429d"
                  alt="REDtech Product Showcase"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8e5e42] rounded-3xl flex items-center justify-center shadow-2xl">
                <Star size={40} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`text-center mb-20 transition-all duration-1000 transform ${
              isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <span className="text-[#8e5e42] font-bold text-lg uppercase tracking-wider">What We Do</span>
            <h2 className={`text-5xl font-black mt-2 mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Our Divisions</h2>
            <div className="w-40 h-1 bg-[#8e5e42] mx-auto"></div>
          </div>

          {/* Technology Services */}
          <div 
            data-animate
            className={`grid lg:grid-cols-2 gap-16 items-center mb-24 transition-all duration-1000 transform ${
              isVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="relative">
              <div className={`rounded-3xl overflow-hidden shadow-2xl ${
                isDark ? 'border-4 border-[#8e5e42]/20' : 'border-4 border-[#8e5e42]/10'
              }`}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.28.35.png?alt=media&token=1ce21401-4139-4163-baba-265f2ac843a9"
                  alt="Technology Services"
                  className="w-full h-[600px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#8e5e42] rounded-2xl flex items-center justify-center shadow-2xl">
                <Code size={32} className="text-white" />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className={`text-4xl font-black mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Technology Services</h3>
                <p className={`text-xl font-medium mb-6 ${
                  isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
                }`}>Building Tomorrow's Digital Infrastructure</p>
              </div>

              <div className={`backdrop-blur-sm rounded-3xl p-8 border ${
                isDark 
                  ? 'bg-[#8e5e42]/10 border-[#8e5e42]/20'
                  : 'bg-[#8e5e42]/5 border-[#8e5e42]/20'
              }`}>
                <p className={`mb-8 text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We develop robust, scalable solutions that power businesses across industries. From custom 
                  applications to enterprise systems, our technology services ensure you stay ahead in an 
                  ever-evolving digital world.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Custom Web & Mobile Development",
                    "Enterprise Resource Planning (ERP) Systems",
                    "Customer Relationship Management (CRM) Solutions",
                    "Search Engine Optimization (SEO) Tools",
                    "Cybersecurity Services",
                    "Cloud Infrastructure & Support",
                    "AI Integration & Training",
                    "Project Management Solutions"
                  ].map((service, index) => (
                    <div key={index} className={`flex items-center gap-3 p-3 rounded-lg border ${
                      isDark 
                        ? 'bg-[#8e5e42]/10 border-[#8e5e42]/20' 
                        : 'bg-[#8e5e42]/5 border-[#8e5e42]/20'
                    }`}>
                      <CheckCircle size={16} className={`flex-shrink-0 ${
                        isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
                      }`} />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Media & Digital Services */}
          <div 
            data-animate
            className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 transform ${
              isVisible[3] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h3 className={`text-4xl font-black mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Media & Digital Services</h3>
                <p className={`text-xl font-medium mb-6 ${
                  isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
                }`}>Amplifying African Stories, Globally</p>
              </div>

              <div className={`backdrop-blur-sm rounded-3xl p-8 border ${
                isDark 
                  ? 'bg-[#8e5e42]/10 border-[#8e5e42]/20'
                  : 'bg-[#8e5e42]/5 border-[#8e5e42]/20'
              }`}>
                <p className={`mb-8 text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Our creative powerhouse specializes in content production, digital marketing, and brand strategy. 
                  We help creators and businesses tell their stories with impact while building sustainable revenue streams.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Video Production & Photography",
                    "Content Strategy & Creation",
                    "Digital Marketing Campaigns",
                    "Brand Development & Identity",
                    "Social Media Management",
                    "Influencer Marketing",
                    "Media Distribution & Monetization",
                    "Analytics & Performance Tracking"
                  ].map((service, index) => (
                    <div key={index} className={`flex items-center gap-3 p-3 rounded-lg border ${
                      isDark 
                        ? 'bg-[#8e5e42]/10 border-[#8e5e42]/20' 
                        : 'bg-[#8e5e42]/5 border-[#8e5e42]/20'
                    }`}>
                      <CheckCircle size={16} className={`flex-shrink-0 ${
                        isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
                      }`} />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className={`rounded-3xl overflow-hidden shadow-2xl ${
                isDark ? 'border-4 border-[#8e5e42]/20' : 'border-4 border-[#8e5e42]/10'
              }`}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.34.48.jpg?alt=media&token=52f014fc-56fe-4369-8c4e-be58d1424a11"
                  alt="Media & Digital Services"
                  className="w-full h-[600px] object-cover"
                  style={{ objectPosition: '10% 20%' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#8e5e42] rounded-2xl flex items-center justify-center shadow-2xl">
                <Video size={32} className="text-white" />
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
              : 'bg-[#8e5e42]/10 border-gray-200/30'
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
                className="px-8 py-4 bg-[#8e5e42] rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-[#8e5e42]/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
