
import React from 'react';
import { Scale, FileText, AlertTriangle, Info, Shield, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const TermsPage = () => {
  const { isDark } = useTheme();

  const terms = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website Access and Use",
      content: "These Terms of Use apply to redtechafrica.com and any affiliated sites operated by REDtech Africa Consulting. By accessing our website, you agree to be legally bound by these terms. These terms may be updated periodically, and your continued use constitutes acceptance of any modifications."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Access Restrictions",
      content: "Our website and services are not directed at or intended for use by persons in jurisdictions where such access would be contrary to local laws or regulations. Users are responsible for compliance with applicable local restrictions."
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "Information Purpose",
      content: "The content on this website is provided for informational purposes only. It does not constitute financial advice, an offer to sell, or a solicitation to purchase any securities or services. REDtech Africa Consulting makes no warranties about the accuracy, reliability, or completeness of the information provided."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Investment Advice",
      content: "REDtech Africa Consulting does not provide investment advice through this website. Before making any investment decisions, you should consult with qualified financial advisors. Past performance is not indicative of future results."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Intellectual Property",
      content: "All content on this website, including text, graphics, logos, and software, is the property of REDtech Africa Consulting or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, REDtech Africa Consulting shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any information provided herein."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Hero Section */}
      <section className={`relative overflow-hidden py-24 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#8e5e42] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8e5e42] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 ${
              isDark 
                ? 'bg-[#8e5e42]/20 border border-[#8e5e42]/30' 
                : 'bg-[#8e5e42]/10 border border-[#8e5e42]/20'
            }`}>
              <Scale className="w-5 h-5 text-[#8e5e42]" />
              <span className={`text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                LEGAL AGREEMENT
              </span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Terms of Service
            </h1>
            
            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <div className={`p-8 rounded-2xl border ${
            isDark 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className={`border-l-4 border-[#8e5e42] pl-6 ${
              isDark ? 'bg-gray-800/30' : 'bg-white'
            } p-6 rounded-r-xl`}>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Terms of Use & Disclaimer
              </h2>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                By accessing and using{' '}
                <a href="https://redtechafrica.com" className="text-[#8e5e42] hover:underline font-medium">
                  redtechafrica.com
                </a>
                , you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and REDtech Africa Consulting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="grid gap-12">
            {terms.map((term, index) => (
              <div key={index} className="group">
                <div className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                  isDark 
                    ? 'bg-gray-800/30 border-gray-700 hover:border-[#8e5e42]/30' 
                    : 'bg-white border-gray-200 hover:border-[#8e5e42]/30 hover:shadow-[#8e5e42]/10'
                }`}>
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                      isDark 
                        ? 'bg-[#8e5e42]/20 text-[#8e5e42]' 
                        : 'bg-[#8e5e42]/10 text-[#8e5e42]'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {term.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {term.title}
                      </h3>
                      
                      <p className={`text-lg leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {term.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className={`py-16 ${
        isDark 
          ? 'bg-gradient-to-r from-gray-800 to-gray-900' 
          : 'bg-gradient-to-r from-gray-50 to-gray-100'
      }`}>
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Important Additional Terms
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-800/50' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Governing Law
              </h3>
              <p className={`${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                These terms are governed by the laws of Nigeria and any disputes will be resolved in the appropriate courts of Lagos, Nigeria.
              </p>
            </div>
            
            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-800/50' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Changes to Terms
              </h3>
              <p className={`${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 text-center">
        <div className="container max-w-4xl mx-auto px-6">
          <div className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <p className="mb-2">Last updated: January 04, 2025</p>
            <p>© 2025 REDtech Africa Consulting. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
