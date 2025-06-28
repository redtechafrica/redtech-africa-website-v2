
import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const PrivacyPage = () => {
  const { isDark } = useTheme();

  const sections = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "What Personal Information Do We Collect?",
      content: `For the purposes of this Policy, "personal information" means any information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with you. Personal information does not include information that is aggregated or that cannot be reasonably linked to you.

REDtech and third parties working on our behalf collect personal information that you provide directly to us. The specific information you provide is typically a function of the context in which you provide it; for example, we collect information from you when you register for an event or when you submit professional background and contact information in relation to potential opportunities with REDtech.`,
      items: [
        "Contact information and other identifiers (name, address, phone number, email address, social media identifiers, employer, position title)",
        "Internet activity information (cookies, server logs, web beacons, and other electronic tools)",
        "Context-specific information (event registration IDs and details related to REDtech-sponsored programs)",
        "Other personal information you may provide or that we may obtain from third-party sources"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: "We use your personal information to provide our services, communicate with you, improve our offerings, and comply with legal obligations.",
      items: [
        "To provide and maintain our services",
        "To communicate with you about our programs and opportunities",
        "To improve our website and services",
        "To comply with legal and regulatory requirements"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Information Sharing",
      content: "We may share your information with third parties in certain circumstances, always with appropriate safeguards.",
      items: [
        "With service providers who assist us in our operations",
        "With portfolio companies when relevant to opportunities",
        "When required by law or to protect our rights",
        "With your explicit consent"
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Your Rights",
      content: "You have certain rights regarding your personal information, subject to applicable laws.",
      items: [
        "Access to your personal information",
        "Correction of inaccurate information",
        "Deletion of your information in certain circumstances",
        "Objection to processing for marketing purposes"
      ]
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
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#8e5e42] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8e5e42] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 ${
              isDark 
                ? 'bg-[#8e5e42]/20 border border-[#8e5e42]/30' 
                : 'bg-[#8e5e42]/10 border border-[#8e5e42]/20'
            }`}>
              <Shield className="w-5 h-5 text-[#8e5e42]" />
              <span className={`text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                LAST UPDATED: JANUARY 04, 2025
              </span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Privacy Policy
            </h1>
            
            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              REDtech Africa is committed to respecting and protecting your privacy
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
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              REDtech Africa Consulting ("REDtech") is committed to respecting and protecting the privacy of the personal information it collects. Please read this Privacy Policy ("Policy") carefully to understand what information REDtech collects, how it uses such information, and when it may disclose this information to others. This Policy applies to information collected from you via this website{' '}
              <a href="https://redtechafrica.com" className="text-[#8e5e42] hover:underline font-medium">
                (redtechafrica.com)
              </a>{' '}
              and other REDtech Africa Consulting–affiliated websites and online services.
            </p>
            
            <p className={`text-lg leading-relaxed mt-6 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              If you are an investor in a REDtech Africa Consulting Fund, then our investor privacy notice, as required by applicable laws, is also applicable to you.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                    isDark 
                      ? 'bg-[#8e5e42]/20 text-[#8e5e42]' 
                      : 'bg-[#8e5e42]/10 text-[#8e5e42]'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {section.title}
                    </h2>
                    
                    <p className={`text-lg leading-relaxed mb-8 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {section.content}
                    </p>
                    
                    {section.items && (
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#8e5e42] rounded-full mt-3 flex-shrink-0"></div>
                            <p className={`text-lg leading-relaxed ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-16 ${
        isDark 
          ? 'bg-gradient-to-r from-gray-800 to-gray-900' 
          : 'bg-gradient-to-r from-gray-50 to-gray-100'
      }`}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Questions About This Policy?
          </h2>
          
          <p className={`text-lg mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            If you have any questions about this Privacy Policy or how we handle your personal information, please contact us.
          </p>
          
          <a 
            href="mailto:hello@redtechafrica.com"
            className="inline-flex items-center gap-3 bg-[#8e5e42] hover:bg-[#8e5e42]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8e5e42]/25"
          >
            <FileText className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
