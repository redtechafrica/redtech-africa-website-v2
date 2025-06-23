
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDark } = useTheme();

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      return;
    }

    setIsSubmitting(true);
    setSubscriptionStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setSubscriptionStatus('success');
      setEmail('');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubscriptionStatus('idle');
      }, 4000);
    }, 1500);
  };

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className={`relative overflow-hidden transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white'
        : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 xl:gap-20">
          
          {/* Logo and Company Name */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center gap-4 mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fredtech_v2.png?alt=media&token=37749e94-dba2-4ba6-8e80-283b7d74bda2"
                  alt="REDtech Africa"
                  className="h-24 w-24 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
              REDtech Africa
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Africa's digital transformation through innovative technology solutions and strategic investments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            {quickLinks.map(({ label, path }) => (
              <a
                key={label}
                href={path}
                className="group flex items-center text-sm text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {label}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold mb-8 text-gray-300 uppercase tracking-widest relative">
              <span className="relative z-10">Contact Info</span>
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
            </h4>
            <div className="space-y-6">
              <div className="group flex items-center gap-3 hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-300">
                <div className="flex-shrink-0 p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-1 tracking-wide">Email</p>
                  <a href="mailto:hello@redtechafrica.com" className="text-sm hover:text-blue-400 transition-colors duration-300 block truncate">
                    hello@redtechafrica.com
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-300">
                <div className="flex-shrink-0 p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-1 tracking-wide">Phone</p>
                  <a href="tel:+2348189696614" className="text-sm hover:text-green-400 transition-colors duration-300">
                    +234 818 969 6614
                  </a>
                </div>
              </div>
              
              <div className="group flex items-start gap-3 hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-300">
                <div className="flex-shrink-0 p-2 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300 mt-1">
                  <MapPin className="w-4 h-4 text-red-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-1 tracking-wide">Address</p>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Trocadero Square, Lekki Phase 1<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold mb-8 text-gray-300 uppercase tracking-widest relative">
              <span className="relative z-10">Follow Us</span>
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-transparent"></div>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/company/redtech-africa"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current text-gray-400 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="https://x.com/novelsoftinc"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/20 flex items-center justify-center"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-5 h-5 fill-current text-gray-400 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a
                href="https://instagram.com/redtechafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20 flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current text-gray-400 group-hover:text-pink-400 transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a
                href="https://www.youtube.com/@REDtechAfrica"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20 flex items-center justify-center"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current text-gray-400 group-hover:text-red-400 transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-red-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <div className={`relative backdrop-blur-sm rounded-3xl p-6 shadow-2xl border transition-all duration-500 transform hover:-translate-y-1 ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:shadow-3xl' 
                  : 'bg-white/95 border-white/20 hover:shadow-3xl'
              }`}>
                
                {/* Success State */}
                {subscriptionStatus === "success" && (
                  <div className="text-center space-y-4 animate-fade-in">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h5 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        Welcome to REDtech! 🎉
                      </h5>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Thank you for subscribing! We're excited to share Africa's digital transformation journey with you.
                      </p>
                    </div>
                  </div>
                )}

                {/* Default/Loading State */}
                {(subscriptionStatus === "idle" || subscriptionStatus === "loading") && (
                  <>
                    <div className="text-center mb-6">
                      <h5 className={`text-base font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}>
                        🚀 Stay Updated
                      </h5>
                      <p className={`text-xs leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Get exclusive insights on Africa's tech revolution.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isSubmitting}
                          className={`text-sm border-2 focus:ring-blue-500/20 rounded-xl py-2 px-3 backdrop-blur-sm transition-all duration-300 disabled:opacity-50 ${
                            isDark 
                              ? 'border-gray-600 focus:border-blue-400 bg-gray-800/50 text-white'
                              : 'border-gray-200 focus:border-blue-500 bg-white/80 text-gray-900'
                          }`}
                        />
                      </div>
                      
                      <Button 
                        onClick={handleSubscribe}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        disabled={isSubmitting || !email || !email.includes('@')}
                        className="group w-full bg-gradient-to-r from-gray-900 to-black text-white hover:from-blue-600 hover:to-purple-600 text-sm py-2 px-4 font-semibold rounded-xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Subscribing...
                          </>
                        ) : (
                          <>
                            Subscribe
                            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                          </>
                        )}
                      </Button>
                    </div>
                    
                    <div className="mt-3 text-center">
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        🔒 Privacy respected • No spam
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl">©</span>
            <p className="font-medium">2025 REDtech Africa Inc. All rights reserved.</p>
          </div>
          <div className="flex space-x-8">
            <a href="/privacy" className="hover:text-white transition-colors duration-300 relative group">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/terms" className="hover:text-white transition-colors duration-300 relative group">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
