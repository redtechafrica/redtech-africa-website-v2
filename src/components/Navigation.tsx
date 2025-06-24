
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/contexts/ThemeContext';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'bg-gray-900/95 shadow-2xl shadow-amber-600/10'
            : 'bg-white/95 shadow-2xl shadow-amber-600/10'
          : 'bg-transparent'
      } backdrop-blur-xl border-b ${
        scrolled
          ? isDark
            ? 'border-amber-600/20'
            : 'border-amber-600/20'
          : 'border-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fredtech_v2.png?alt=media&token=37749e94-dba2-4ba6-8e80-283b7d74bda2"
                alt="REDtech Africa"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-amber-600/20 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </div>
            <span className={`font-bold text-lg hidden sm:inline transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              REDtech Africa
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8 px-8">
            {navLinks.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Theme Toggle & Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`relative w-16 h-8 rounded-full transition-all duration-500 ${
                isDark
                  ? 'bg-gradient-to-r from-amber-700 to-amber-600'
                  : 'bg-gradient-to-r from-orange-400 to-yellow-400'
              } shadow-lg hover:shadow-xl`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-500 flex items-center justify-center ${
                  isDark ? 'left-1' : 'left-9'
                }`}
              >
                {isDark ? (
                  <Moon size={12} className="text-amber-700" />
                ) : (
                  <Sun size={12} className="text-orange-500" />
                )}
              </div>
              <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-20 bg-white transition-opacity duration-300"></div>
            </button>

            {/* Contact Button */}
            <Button className={`rounded-full px-6 font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-amber-700 to-amber-600 hover:shadow-lg hover:shadow-amber-600/25 text-white'
                : 'bg-gradient-to-r from-amber-700 to-amber-600 hover:shadow-lg hover:shadow-amber-600/25 text-white'
            } hover:scale-105`}>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-xl transition-all duration-300 flex items-center justify-center ${
                isDark
                  ? 'bg-amber-600/20 hover:bg-amber-600/30'
                  : 'bg-orange-500/20 hover:bg-orange-500/30'
              }`}
            >
              {isDark ? (
                <Moon size={18} className="text-amber-400" />
              ) : (
                <Sun size={18} className="text-orange-500" />
              )}
            </button>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`${
                  isDark ? 'hover:bg-white/10' : 'hover:bg-gray-900/10'
                }`}>
                  {isMenuOpen ? (
                    <X className={`h-6 w-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                  ) : (
                    <Menu className={`h-6 w-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                  )}
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className={`w-80 ${
                isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-lg font-medium transition-colors duration-300 ${
                        isDark
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
