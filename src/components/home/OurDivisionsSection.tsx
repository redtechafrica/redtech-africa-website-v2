
import React from 'react';
import { Code, Video, CheckCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface OurDivisionsSectionProps {
  isVisible1: boolean;
  isVisible2: boolean;
  isVisible3: boolean;
}

export const OurDivisionsSection = ({ isVisible1, isVisible2, isVisible3 }: OurDivisionsSectionProps) => {
  const { isDark } = useTheme();

  const techServices = [
    "Custom Web & Mobile Development",
    "Enterprise Resource Planning (ERP) Systems",
    "Customer Relationship Management (CRM) Solutions",
    "Search Engine Optimization (SEO) Tools",
    "Cybersecurity Services",
    "Cloud Infrastructure & Support",
    "AI Integration & Training",
    "Project Management Solutions"
  ];

  const mediaServices = [
    "Video Production & Photography",
    "Content Strategy & Creation",
    "Digital Marketing Campaigns",
    "Brand Development & Identity",
    "Social Media Management",
    "Influencer Marketing",
    "Media Distribution & Monetization",
    "Analytics & Performance Tracking"
  ];

  return (
    <section className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          data-animate
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible1 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <span className="text-amber-600 font-bold text-lg uppercase tracking-wider">What We Do</span>
          <h2 className={`text-5xl font-black mt-2 mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Our Divisions</h2>
          <div className="w-40 h-1 bg-gradient-to-r from-amber-700 to-amber-600 mx-auto"></div>
        </div>

        {/* Technology Services */}
        <div 
          data-animate
          className={`grid lg:grid-cols-2 gap-16 items-center mb-24 transition-all duration-1000 transform ${
            isVisible2 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="relative">
            <div className={`rounded-3xl overflow-hidden shadow-2xl ${
              isDark ? 'border-4 border-amber-600/20' : 'border-4 border-amber-600/10'
            }`}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.28.35.png?alt=media&token=1ce21401-4139-4163-baba-265f2ac843a9"
                alt="Technology Services"
                className="w-full h-[600px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-amber-700 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Code size={32} className="text-white" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className={`text-4xl font-black mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Technology Services</h3>
              <p className={`text-xl font-medium mb-6 ${
                isDark ? 'text-amber-300' : 'text-amber-700'
              }`}>Building Tomorrow's Digital Infrastructure</p>
            </div>

            <div className={`backdrop-blur-sm rounded-3xl p-8 border ${
              isDark 
                ? 'bg-gradient-to-br from-amber-600/10 to-amber-700/10 border-amber-600/20'
                : 'bg-gradient-to-br from-amber-50/80 to-amber-100/80 border-amber-200/30'
            }`}>
              <p className={`mb-8 text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We develop robust, scalable solutions that power businesses across industries. From custom 
                applications to enterprise systems, our technology services ensure you stay ahead in an 
                ever-evolving digital world.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {techServices.map((service, index) => (
                  <div key={index} className={`flex items-center gap-3 p-3 rounded-lg border ${
                    isDark 
                      ? 'bg-amber-600/10 border-amber-600/20' 
                      : 'bg-amber-50/50 border-amber-200/30'
                  }`}>
                    <CheckCircle size={16} className={`flex-shrink-0 ${
                      isDark ? 'text-amber-400' : 'text-amber-600'
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
            isVisible3 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h3 className={`text-4xl font-black mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Media & Digital Services</h3>
              <p className={`text-xl font-medium mb-6 ${
                isDark ? 'text-amber-300' : 'text-amber-700'
              }`}>Amplifying African Stories, Globally</p>
            </div>

            <div className={`backdrop-blur-sm rounded-3xl p-8 border ${
              isDark 
                ? 'bg-gradient-to-br from-amber-600/10 to-amber-700/10 border-amber-600/20'
                : 'bg-gradient-to-br from-amber-50/80 to-amber-100/80 border-amber-200/30'
            }`}>
              <p className={`mb-8 text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Our creative powerhouse specializes in content production, digital marketing, and brand strategy. 
                We help creators and businesses tell their stories with impact while building sustainable revenue streams.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {mediaServices.map((service, index) => (
                  <div key={index} className={`flex items-center gap-3 p-3 rounded-lg border ${
                    isDark 
                      ? 'bg-amber-600/10 border-amber-600/20' 
                      : 'bg-amber-50/50 border-amber-200/30'
                  }`}>
                    <CheckCircle size={16} className={`flex-shrink-0 ${
                      isDark ? 'text-amber-400' : 'text-amber-600'
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
              isDark ? 'border-4 border-amber-600/20' : 'border-4 border-amber-600/10'
            }`}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.34.48.jpg?alt=media&token=52f014fc-56fe-4369-8c4e-be58d1424a11"
                alt="Media & Digital Services"
                className="w-full h-[600px] object-cover"
                style={{ objectPosition: '10% 20%' }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-700 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Video size={32} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
