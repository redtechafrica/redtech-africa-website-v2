
import React from 'react';
import { Star } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface OurStorySectionProps {
  isVisible: boolean;
}

export const OurStorySection = ({ isVisible }: OurStorySectionProps) => {
  const { isDark } = useTheme();

  return (
    <section className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          data-animate
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="space-y-8">
            <div>
              <span className="text-amber-600 font-bold text-lg uppercase tracking-wider">Our Story</span>
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
                  ? 'bg-gradient-to-r from-amber-600/20 to-amber-700/20 border border-amber-600/30 text-amber-300'
                  : 'bg-gradient-to-r from-amber-600/10 to-amber-700/10 border border-amber-600/20 text-amber-700'
              }`}>
                4+ Years Experience
              </div>
              <div className={`px-6 py-3 rounded-full font-medium ${
                isDark 
                  ? 'bg-gradient-to-r from-amber-700/20 to-amber-800/20 border border-amber-700/30 text-amber-300'
                  : 'bg-gradient-to-r from-amber-700/10 to-amber-800/10 border border-amber-700/20 text-amber-700'
              }`}>
                20+ Projects Delivered
              </div>
              <div className={`px-6 py-3 rounded-full font-medium ${
                isDark 
                  ? 'bg-gradient-to-r from-amber-800/20 to-amber-600/20 border border-amber-800/30 text-amber-300'
                  : 'bg-gradient-to-r from-amber-800/10 to-amber-600/10 border border-amber-800/20 text-amber-700'
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
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-700 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Star size={40} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
