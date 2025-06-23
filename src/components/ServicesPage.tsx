import React, { useState, useEffect } from 'react';
import { Plus, Minus, Code, Video, Zap, Globe, Shield, Cloud, Brain, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

export default function ServicesPage() {
  const [expandedTechServices, setExpandedTechServices] = useState<string | null>(null);
  const [expandedMediaServices, setExpandedMediaServices] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const [activeTab, setActiveTab] = useState('tech');
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const techServices = [
    {
      id: "web-mobile",
      title: "Custom Web & Mobile Development",
      description: "Tailored web and mobile applications designed to meet your specific business needs and user expectations.",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "erp",
      title: "Enterprise Resource Planning (ERP) Systems",
      description: "Comprehensive ERP solutions that streamline operations, integrate business processes, and enhance productivity.",
      icon: Settings,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "crm",
      title: "Customer Relationship Management (CRM) Solutions",
      description: "Powerful CRM tools to manage customer interactions, improve relationships, and drive sales growth.",
      icon: Globe,
      color: "from-purple-500 to-violet-500"
    },
    {
      id: "seo",
      title: "Search Engine Optimization (SEO) Tools",
      description: "Advanced SEO strategies and tools to improve your online visibility and drive organic traffic to your website.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Services",
      description: "Robust security solutions to protect your digital assets, data, and infrastructure from cyber threats.",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure & Support",
      description: "Scalable cloud solutions with ongoing support to ensure your business operates efficiently and securely.",
      icon: Cloud,
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: "ai",
      title: "AI Integration & Training",
      description: "Cutting-edge AI solutions tailored to your business needs, with comprehensive training for your team.",
      icon: Brain,
      color: "from-teal-500 to-green-500"
    },
    {
      id: "project",
      title: "Project Management Solutions",
      description: "Effective project management tools and methodologies to ensure successful delivery of your initiatives.",
      icon: Settings,
      color: "from-orange-500 to-red-500"
    },
  ];

  const mediaServices = [
    {
      id: "video",
      title: "Video Production & Photography",
      description: "Professional video and photo content creation to showcase your brand, products, and services.",
      icon: Video,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: "content",
      title: "Content Strategy & Creation",
      description: "Strategic content planning and creation that resonates with your target audience and drives engagement.",
      icon: Code,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Campaigns",
      description: "Comprehensive digital marketing campaigns designed to increase brand awareness and drive conversions.",
      icon: Zap,
      color: "from-blue-500 to-purple-500"
    },
    {
      id: "brand",
      title: "Brand Development & Identity",
      description: "Strategic brand development services to establish a strong, memorable identity in the marketplace.",
      icon: Globe,
      color: "from-green-500 to-teal-500"
    },
    {
      id: "social",
      title: "Social Media Management",
      description: "End-to-end social media management to build your online presence and engage with your community.",
      icon: Settings,
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: "influencer",
      title: "Influencer Marketing",
      description: "Strategic partnerships with relevant influencers to amplify your brand message and reach new audiences.",
      icon: Globe,
      color: "from-red-500 to-pink-500"
    },
    {
      id: "distribution",
      title: "Media Distribution & Monetization",
      description: "Effective distribution strategies and monetization solutions to maximize the value of your content.",
      icon: Cloud,
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: "analytics",
      title: "Analytics & Performance Tracking",
      description: "Comprehensive analytics and reporting to measure the impact of your media and marketing efforts.",
      icon: Brain,
      color: "from-violet-500 to-purple-500"
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

  const toggleTechService = (id: string) => {
    setExpandedTechServices(expandedTechServices === id ? null : id);
  };

  const toggleMediaService = (id: string) => {
    setExpandedMediaServices(expandedMediaServices === id ? null : id);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl animate-pulse ${
          isDark 
            ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
            : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDark 
            ? 'bg-gradient-to-br from-red-500/10 to-orange-500/10' 
            : 'bg-gradient-to-br from-red-500/20 to-orange-500/20'
        }`}></div>
        <div className={`absolute top-1/3 left-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse delay-2000 ${
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
                Technology • Media • Innovation
              </span>
            </div>
            <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent'
            }`}>
              Our Services
            </h1>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive solutions spanning technology development and creative media production
            </p>

            {/* Service Tabs */}
            <div className="flex justify-center mt-12">
              <div className={`backdrop-blur-sm rounded-2xl p-2 border ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700/50' 
                  : 'bg-white/50 border-gray-200/50 shadow-xl'
              }`}>
                <button
                  onClick={() => setActiveTab('tech')}
                  className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    activeTab === 'tech'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : isDark 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Technology Services
                </button>
                <button
                  onClick={() => setActiveTab('media')}
                  className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    activeTab === 'media'
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                      : isDark 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Media Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Services Division */}
      <section className={`py-20 transition-all duration-1000 ${activeTab === 'tech' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`transition-all duration-1000 transform ${
              isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className={`rounded-3xl p-1 mb-16 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20' 
                : 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30'
            }`}>
              <div className={`backdrop-blur-sm rounded-3xl overflow-hidden ${
                isDark ? 'bg-gray-900/95' : 'bg-white/95'
              }`}>
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-96 lg:h-auto">
                    <div className={`absolute inset-0 z-10 ${
                      isDark 
                        ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20' 
                        : 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30'
                    }`}></div>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2F3.png?alt=media&token=7e750ac1-3b7b-40cd-a35f-f5adfb6a63cc"
                      alt="Technology Services"
                      className="w-full h-full object-cover"
                    />
                    {/* Floating Tech Elements */}
                    <div className="absolute top-8 right-8 w-16 h-16 border-2 border-blue-400/50 rounded-lg rotate-45 animate-spin z-20"></div>
                    <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full animate-pulse z-20"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 space-y-8">
                    <div>
                      <h2 className={`text-4xl lg:text-5xl font-black mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Technology Services Division
                      </h2>
                      <p className="text-xl text-blue-500 font-medium">
                        Building Tomorrow's Digital Infrastructure
                      </p>
                    </div>

                    <div className={`backdrop-blur-sm p-6 rounded-2xl border ${
                      isDark 
                        ? 'bg-gray-800/50 border-blue-500/20' 
                        : 'bg-blue-50/50 border-blue-500/30'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <Code size={16} className="text-white" />
                        </div>
                        <p className={`leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          We develop robust, scalable solutions that power businesses across industries. From custom
                          applications to enterprise systems, our technology services ensure you stay ahead in an
                          ever-evolving digital world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Services Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {techServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={service.id}
                    className={`backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600/50' 
                        : 'bg-white/30 border-gray-200/50 hover:border-gray-300/50 shadow-lg'
                    }`}
                  >
                    <button
                      onClick={() => toggleTechService(service.id)}
                      className="w-full p-6 text-left flex items-center justify-between group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <span className={`text-lg font-bold transition-colors duration-300 ${
                          isDark 
                            ? 'text-white group-hover:text-blue-300' 
                            : 'text-gray-900 group-hover:text-blue-600'
                        }`}>
                          {service.title}
                        </span>
                      </div>
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:rotate-180 transition-transform duration-300`}>
                        {expandedTechServices === service.id ? 
                          <Minus size={16} className="text-white" /> : 
                          <Plus size={16} className="text-white" />
                        }
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedTechServices === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <div className={`w-full h-1 bg-gradient-to-r ${service.color} rounded-full mb-4`}></div>
                        <p className={`leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Media Services Division */}
      <section className={`py-20 transition-all duration-1000 ${activeTab === 'media' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`transition-all duration-1000 transform ${
              isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className={`rounded-3xl p-1 mb-16 ${
              isDark 
                ? 'bg-gradient-to-r from-pink-500/20 to-rose-500/20' 
                : 'bg-gradient-to-r from-pink-500/30 to-rose-500/30'
            }`}>
              <div className={`backdrop-blur-sm rounded-3xl overflow-hidden ${
                isDark ? 'bg-gray-900/95' : 'bg-white/95'
              }`}>
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content Section */}
                  <div className="p-8 lg:p-12 space-y-8 order-2 lg:order-1">
                    <div>
                      <h2 className={`text-4xl lg:text-5xl font-black mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Media & Digital Services
                      </h2>
                      <p className="text-xl text-pink-500 font-medium">
                        Amplifying African Stories, Globally
                      </p>
                    </div>

                    <div className={`backdrop-blur-sm p-6 rounded-2xl border ${
                      isDark 
                        ? 'bg-gray-800/50 border-pink-500/20' 
                        : 'bg-pink-50/50 border-pink-500/30'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                          <Video size={16} className="text-white" />
                        </div>
                        <p className={`leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Our creative powerhouse specializes in content production, digital marketing, and brand strategy. We
                          help creators and businesses tell their stories with impact while building sustainable revenue
                          streams.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative h-96 lg:h-auto order-1 lg:order-2">
                    <div className={`absolute inset-0 z-10 ${
                      isDark 
                        ? 'bg-gradient-to-br from-pink-500/20 to-rose-500/20' 
                        : 'bg-gradient-to-br from-pink-500/30 to-rose-500/30'
                    }`}></div>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2020.56.50.jpg?alt=media&token=750742b4-89df-4943-afe4-88fbc4993ba2"
                      alt="Media Services"
                      className="w-full h-full object-cover object-left"
                    />
                    {/* Floating Media Elements */}
                    <div className="absolute top-8 left-8 w-14 h-14 border-2 border-pink-400/50 rounded-full animate-ping z-20"></div>
                    <div className="absolute bottom-8 right-8 w-10 h-10 bg-gradient-to-r from-rose-500/30 to-pink-500/30 rounded-lg animate-pulse z-20"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Services Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {mediaServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={service.id}
                    className={`backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600/50' 
                        : 'bg-white/30 border-gray-200/50 hover:border-gray-300/50 shadow-lg'
                    }`}
                  >
                    <button
                      onClick={() => toggleMediaService(service.id)}
                      className="w-full p-6 text-left flex items-center justify-between group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <span className={`text-lg font-bold transition-colors duration-300 ${
                          isDark 
                            ? 'text-white group-hover:text-pink-300' 
                            : 'text-gray-900 group-hover:text-pink-600'
                        }`}>
                          {service.title}
                        </span>
                      </div>
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:rotate-180 transition-transform duration-300`}>
                        {expandedMediaServices === service.id ? 
                          <Minus size={16} className="text-white" /> : 
                          <Plus size={16} className="text-white" />
                        }
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedMediaServices === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <div className={`w-full h-1 bg-gradient-to-r ${service.color} rounded-full mb-4`}></div>
                        <p className={`leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-sm rounded-3xl p-12 border ${
            isDark 
              ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-white/10' 
              : 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border-white/20 shadow-2xl'
          }`}>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Elevate Your Business?
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Partner with us to unlock your potential through cutting-edge technology and creative excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate("/contact")}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
