import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Award, Users, Zap, Globe, Building2, Rocket } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function NewsPage() {
  const [currentSlides, setCurrentSlides] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const { isDark } = useTheme();

  const events = [
    {
      id: 'event1',
      title: 'REDtech Africa Hosts Tech Innovators Summit',
      date: 'July 22, 2024',
      location: 'Lagos, Nigeria',
      description:
        'REDtech Africa successfully hosted the Tech Innovators Summit, bringing together leading tech experts, startups, and investors from across Africa. The summit featured keynote speeches, panel discussions, and workshops focused on driving technological advancements and fostering innovation in the region.',
      highlights: [
        'Keynote by industry leader, Dr. Aisha Bakare',
        'Panel discussion on the future of AI in Africa',
        'Startup pitch competition with $10,000 in prizes',
      ],
      images: [
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.25.40.jpg?alt=media&token=0fa14a70-baad-4215-97e4-f2cc66b7429d',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.28.35.png?alt=media&token=1ce21401-4139-4163-baba-265f2ac843a9',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2016.34.48.jpg?alt=media&token=52f014fc-56fe-4369-8c4e-be58d1424a11',
      ],
      link: 'https://www.example.com/tech-innovators-summit',
    },
    {
      id: 'event2',
      title: 'REDtech Africa Partners with Local Schools for STEM Education',
      date: 'June 15, 2024',
      location: 'Various Locations, Nigeria',
      description:
        'REDtech Africa has launched a new initiative to support STEM education in local schools. The company is providing resources, training, and mentorship to students and teachers to promote interest and skills in science, technology, engineering, and mathematics.',
      highlights: [
        'Donation of computers and educational software to 10 schools',
        'Training workshops for teachers on innovative STEM teaching methods',
        'Mentorship program connecting students with tech professionals',
      ],
      images: [
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2F3.png?alt=media&token=7e750ac1-3b7b-40cd-a35f-f5adfb6a63cc',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2FScreenshot%202025-05-29%20at%2020.56.50.jpg?alt=media&token=750742b4-89df-4943-afe4-88fbc4993ba2',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech%20products%20branding%2F1.png?alt=media&token=3c56050e-817d-43f8-aa3b-1b93a33c5817',
      ],
      link: 'https://www.example.com/stem-education-initiative',
    },
  ];

  const globalNews = [
    {
      title: 'AI Set to Transform African Agriculture',
      summary:
        'Artificial intelligence is poised to revolutionize agriculture in Africa, with applications ranging from precision farming to improved crop yields and disease detection.',
      region: 'Africa',
      significance:
        'AI technologies can help address food security challenges and boost economic growth in the region.',
      icon: <Globe size={32} className="text-amber-600" />,
    },
    {
      title: 'Nigeria Leads in Mobile Technology Adoption',
      summary:
        'Nigeria is at the forefront of mobile technology adoption in Africa, with a high penetration rate and innovative mobile solutions driving economic development.',
      region: 'Nigeria',
      significance:
        'Mobile technology is empowering businesses, connecting communities, and transforming industries across the country.',
      icon: <Zap size={32} className="text-amber-600" />,
    },
    {
      title: 'Tech Hubs Fueling Innovation Across Africa',
      summary:
        'Tech hubs are emerging as key drivers of innovation and entrepreneurship across Africa, providing resources, mentorship, and networking opportunities for startups and tech professionals.',
      region: 'Africa',
      significance:
        'These hubs are fostering a vibrant tech ecosystem and attracting investment to the region.',
      icon: <Building2 size={32} className="text-amber-600" />,
    },
    {
      title: 'New Space Program Aims to Boost Technological Growth',
      summary:
        'A new space program has been launched with the goal of accelerating technological advancements and fostering innovation in the aerospace industry.',
      region: 'Global',
      significance:
        'This initiative is expected to drive research and development, create jobs, and enhance technological capabilities.',
      icon: <Rocket size={32} className="text-amber-600" />,
    },
    {
      title: 'Global Tech Conference Highlights Emerging Trends',
      summary:
        'A major global technology conference recently concluded, showcasing the latest trends and innovations in artificial intelligence, blockchain, and cybersecurity.',
      region: 'Global',
      significance:
        'The conference provided valuable insights into the future of technology and its impact on various industries.',
      icon: <Globe size={32} className="text-amber-600" />,
    },
    {
      title: 'Investment in Cybersecurity Startups on the Rise',
      summary:
        'Venture capital investment in cybersecurity startups is increasing globally, driven by growing concerns about data breaches and cyber threats.',
      region: 'Global',
      significance:
        'This trend is expected to fuel innovation in cybersecurity technologies and enhance protection against cyberattacks.',
      icon: <Shield size={32} className="text-amber-600" />,
    },
  ];

  const nextSlide = (eventId: string, totalImages: number) => {
    setCurrentSlides(prev => ({
      ...prev,
      [eventId]: ((prev[eventId] || 0) + 1) % totalImages
    }));
  };

  const prevSlide = (eventId: string, totalImages: number) => {
    setCurrentSlides(prev => ({
      ...prev,
      [eventId]: ((prev[eventId] || 0) - 1 + totalImages) % totalImages
    }));
  };

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
        : 'bg-gradient-to-br from-amber-50 via-white to-amber-100 text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse ${
          isDark 
            ? 'bg-gradient-to-br from-amber-600/20 to-amber-700/20' 
            : 'bg-gradient-to-br from-amber-600/30 to-amber-700/30'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDark 
            ? 'bg-gradient-to-br from-amber-700/20 to-amber-800/20' 
            : 'bg-gradient-to-br from-amber-700/30 to-amber-800/30'
        }`}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-amber-300 to-amber-500 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 via-amber-800 to-amber-900 bg-clip-text text-transparent'
            }`}>
              News & Events
            </h1>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Stay updated with our latest company events and global tech & media insights
            </p>
          </div>
        </div>
      </section>

      {/* Company Events Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`text-center mb-20 transition-all duration-1000 transform ${
              isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <span className="text-amber-600 font-bold text-lg uppercase tracking-wider">Company Events</span>
            <h2 className={`text-5xl font-black mt-2 mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Our Recent Activities</h2>
            <div className="w-40 h-1 bg-gradient-to-r from-amber-700 to-amber-600 mx-auto"></div>
          </div>

          {events.map((event, index) => (
            <div
              key={event.id}
              data-animate
              className={`mb-20 transition-all duration-1000 transform ${
                isVisible[index + 1] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className={`backdrop-blur-sm rounded-3xl p-8 md:p-12 border ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-amber-600/20'
                  : 'bg-gradient-to-br from-white/80 to-amber-50/80 border-amber-200/30'
              }`}>
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
                      <span className={`text-sm font-medium uppercase tracking-wider ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Event {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className={`text-3xl md:text-4xl font-black mb-4 leading-tight ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {event.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-amber-600" />
                        <span className={`text-sm font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {event.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-amber-600" />
                        <span className={`text-sm font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {event.location}
                        </span>
                      </div>
                    </div>

                    <p className={`text-lg leading-relaxed mb-6 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {event.description}
                    </p>

                    {event.highlights && (
                      <div className="space-y-3">
                        <h4 className={`text-lg font-bold ${
                          isDark ? 'text-amber-300' : 'text-amber-700'
                        }`}>
                          Event Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {event.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Award size={16} className="text-amber-600 mt-1 flex-shrink-0" />
                              <span className={`text-sm ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {event.link && (
                      <div className="pt-4">
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border transition-all duration-300 ${
                            isDark 
                              ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white border-amber-600 hover:border-amber-400'
                              : 'bg-gradient-to-r from-amber-100 to-amber-200 text-gray-900 border-amber-300 hover:border-amber-500'
                          }`}
                        >
                          Learn More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Image Slider */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={event.images[currentSlides[event.id] || 0]}
                        alt={`${event.title} - Image ${(currentSlides[event.id] || 0) + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      
                      {/* Navigation buttons */}
                      {event.images.length > 1 && (
                        <>
                          <button
                            onClick={() => prevSlide(event.id, event.images.length)}
                            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                              isDark 
                                ? 'bg-black/50 text-white hover:bg-black/70'
                                : 'bg-white/50 text-gray-900 hover:bg-white/70'
                            }`}
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={() => nextSlide(event.id, event.images.length)}
                            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                              isDark 
                                ? 'bg-black/50 text-white hover:bg-black/70'
                                : 'bg-white/50 text-gray-900 hover:bg-white/70'
                            }`}
                          >
                            <ChevronRight size={20} />
                          </button>

                          {/* Dots indicator */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {event.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentSlides(prev => ({ ...prev, [event.id]: idx }))}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  idx === (currentSlides[event.id] || 0)
                                    ? 'bg-amber-600'
                                    : isDark 
                                      ? 'bg-white/30 hover:bg-white/50'
                                      : 'bg-black/30 hover:bg-black/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global News Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-amber-600 font-bold text-lg uppercase tracking-wider">Global Tech & Media</span>
            <h2 className={`text-5xl font-black mt-2 mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Recent News & Insights</h2>
            <div className="w-40 h-1 bg-gradient-to-r from-amber-700 to-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalNews.map((article, index) => (
              <div
                key={index}
                className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-amber-600/20 hover:border-amber-600/40'
                    : 'bg-gradient-to-br from-white/80 to-amber-50/80 border-amber-200/30 hover:border-amber-200/50'
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0">
                    {article.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 leading-tight ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {article.title}
                    </h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      isDark 
                        ? 'bg-amber-600/20 text-amber-300'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {article.region}
                    </span>
                  </div>
                </div>
                
                <p className={`text-sm leading-relaxed mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {article.summary}
                </p>

                <div className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {article.significance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 relative">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-sm rounded-3xl p-12 border ${
            isDark 
              ? 'bg-gradient-to-r from-amber-600/10 to-amber-700/10 border-white/10'
              : 'bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-white/20 shadow-2xl'
          }`}>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Stay Updated
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get the latest updates on our events, tech insights, and company news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className={`px-8 py-4 border-2 rounded-xl font-bold transition-all duration-300 inline-block ${
                  isDark 
                    ? 'border-amber-600/20 text-white hover:bg-amber-600/10' 
                    : 'border-amber-300 text-gray-900 hover:bg-amber-100'
                }`}
              >
                Contact Us for Updates
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
</lov-write>
