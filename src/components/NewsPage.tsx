
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Award, Users, Zap, Globe, Building2, Rocket, Shield } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function NewsPage() {
  const [currentSlides, setCurrentSlides] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const { isDark } = useTheme();

  const events = [
    {
      id: 'event1',
      title: 'AgriConnect Hackathon & Summit',
      date: 'May 28–30, 2025',
      location: 'Oriental Hotel, Victoria Island, Lagos',
      description:
        'The 2025 AgriConnect Summit brought together Africa\'s agricultural thought leaders — including former President Olusegun Obasanjo, Lagos Governor Babajide Sanwo-Olu, and AfDB President Akinwumi Adesina — to address food security and agripreneurship. Hosted by the DiceyTech platform, the summit featured a two-day workshop for agripreneurs and culminated in a high-energy AgriTech Hackathon.',
      highlights: [
        'Keynote by former President Olusegun Obasanjo',
        'Panel discussion with Lagos Governor Babajide Sanwo-Olu',
        'AgriTech Hackathon with innovative solutions for food security',
        'REDtech Africa founders served as guest speakers and award ceremony hosts',
      ],
      images: [
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fagriconnect_hackathon_may_2025%2FScreenshot%202025-06-24%20at%2019.48.53.png?alt=media&token=08f75024-a947-4cf4-a646-44364c38b80c',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fagriconnect_hackathon_may_2025%2FScreenshot%202025-06-24%20at%2019.05.34.png?alt=media&token=159e6909-05df-459f-8e6c-507d6fc14c7d',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fagriconnect_hackathon_may_2025%2FScreenshot%202025-06-24%20at%2019.05.49.png?alt=media&token=e4b16bf7-82bc-4519-9de2-146d1fdd834e',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fagriconnect_hackathon_may_2025%2FScreenshot%202025-06-24%20at%2019.06.10.png?alt=media&token=737335f5-e3fc-46e7-82f8-196d32481a98',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fagriconnect_hackathon_may_2025%2FScreenshot%202025-06-24%20at%2019.05.03.png?alt=media&token=9b85849a-d855-4c87-8449-0c0e06e01676',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fagriconnect_hackathon_may_2025%2FScreenshot%202025-06-24%20at%2019.04.45.png?alt=media&token=326a2605-1f3d-4190-86c3-6035c3210189',
      ],
      link: 'https://agriconnectsummit.com',
    },
    {
      id: 'event2',
      title: 'Startup World Cup Lagos Regional Final',
      date: 'March 27, 2025',
      location: 'Muson Centre, Victoria Island, Lagos',
      description:
        'David Ogundepo, Tech Innovation Lead at REDtech Africa, was selected among the top 10 startups to pitch at the Startup World Cup Lagos Regional. Held at the Muson Centre and organized by Tech Unite Africa, the event featured hundreds of guests, investors, and sponsors. David presented The Yearbook App product, showcasing its innovative approach to digital storytelling.',
      highlights: [
        'Top 10 startup selection for regional competition',
        'Presentation of The Yearbook App by David Ogundepo',
        'Networking with investors and industry leaders',
        'Part of global series leading to San Francisco finale',
      ],
      images: [
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Ftech_unite_africa_startup_worldcup_march_2025%2FIMG_8171.jpg?alt=media&token=3865fa96-5015-4e5d-9505-29a432b208bc',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Ftech_unite_africa_startup_worldcup_march_2025%2FIMG_8163.jpg?alt=media&token=aa8b43a6-0bad-4a63-805b-249046dc6a6c',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Ftech_unite_africa_startup_worldcup_march_2025%2FIMG_6278.jpg?alt=media&token=38ffe06b-a3cd-45f6-ae95-28373e414fb7',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Ftech_unite_africa_startup_worldcup_march_2025%2FIMG-20250328-WA0015.jpg?alt=media&token=9c623987-0ff7-4ee9-93a5-94fde1bba051',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Ftech_unite_africa_startup_worldcup_march_2025%2FScreenshot_2025-06-24_at_19.36.40.png?alt=media&token=1894a68b-67c9-4af8-a88b-f8a026a552bf',
      ],
      link: 'https://www.startupworldcup.io/lagos-app-2025',
    },
    {
      id: 'event3',
      title: 'REDtech at DataFest Africa 2024',
      date: 'October 17–19, 2024',
      location: 'Daystar Hall, Lagos',
      description:
        'DataFest Africa, the continent\'s premier data science conference, returned to Daystar Hall (Star Hub), Lagos. REDtech Africa hosted an exhibition booth via the DiceyTech hackathon platform. Founders Adedapo Olawunmi and Dolamu Sowunmi, along with Executive Director Ayo Olokan and other team members, engaged attendees and oversaw the award ceremony for DiceyTech Hackathon winners.',
      highlights: [
        'Exhibition booth at Africa\'s premier data science conference',
        'Award ceremony for DiceyTech Hackathon winners',
        'Engagement with government officials, academia, and startups',
        'Collaboration with industry leaders and tech professionals',
      ],
      images: [
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fdatafest_october_2024%2FWhatsApp%20Image%202024-10-19%20at%2020.01.28.jpeg?alt=media&token=5183b93a-2544-46e6-baf2-4c4448742c7a',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fdatafest_october_2024%2FIMG_20241019_160501.jpg?alt=media&token=4bb4c8d6-151c-4cad-896f-a9372fffc36d',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fdatafest_october_2024%2FPhoto%20from%20D.jpg?alt=media&token=b63ca407-2cac-481d-87ea-07391987acef',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fdatafest_october_2024%2FWhatsApp%20Image%202024-10-19%20at%2016.29.11%20(2).jpeg?alt=media&token=8f3d8a52-cffa-4106-b186-47b98064831a',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fdatafest_october_2024%2FWhatsApp%20Image%202024-10-19%20at%2016.29.11%20(5).jpeg?alt=media&token=ce72c517-d907-4c71-8842-6c49f9457897',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fdatafest_october_2024%2FWhatsApp%20Image%202024-10-19%20at%2020.01.29.jpeg?alt=media&token=b53997b3-03ee-4ea8-b332-54df7caf2e72',
        'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fdatafest_october_2024%2F0BLK_5582.jpg?alt=media&token=67a32d95-8247-4bf2-aacc-82bc0af5ea51',
      ],
      link: 'https://www.datacommunityafrica.org',
    },
  ];

  const globalNews = [
    {
      title: 'Cloudflare Launches Large-Scale Crawler Blocking to Protect Publishers',
      summary:
        'Cloudflare is rolling out a new tool to curb AI and web crawlers that scrape content at shocking scales without driving traffic back to publishers—sometimes at ratios of 18,000 crawled pages to just one visit.',
      region: 'Global/US',
      significance:
        'This is a big step to protect original journalism in the AI era, ensuring publishers can monetize their work rather than being bypassed by bots.',
      icon: <Shield size={32} className="text-amber-700" />,
    },
    {
      title: 'TikTok Doubles Down on News Creators Amid Stalled U.S. Sale Talks',
      summary:
        'TikTok is actively bolstering its news creator ecosystem, hiring a dedicated creator manager for North America. This comes as U.S. negotiations over a potential sale remain stuck, pending Chinese approval.',
      region: 'US/Global',
      significance:
        'It highlights TikTok\'s shifting strategy—from entertainment to news—and the geopolitical pressures shaping its U.S. presence and content moderation.',
      icon: <Globe size={32} className="text-amber-700" />,
    },
    {
      title: 'DeepSeek Shakes Up AI with Low-Cost Rival Model',
      summary:
        'Chinese startup DeepSeek launched a low-cost large language model that shot to the top of the App Store charts, spurring outages amid heavy demand.',
      region: 'China/Asia',
      significance:
        'DeepSeek\'s rise demonstrates China\'s growing edge in AI, challenging U.S. dominance—even amid export controls on high-powered chips.',
      icon: <Rocket size={32} className="text-amber-700" />,
    },
    {
      title: 'Japan, U.S. and Taiwan Deepen Semiconductor and AI Ties',
      summary:
        'Japan is attracting massive AI and semiconductor investments from U.S. giants: AWS ($14B), Microsoft ($2.9B), and Google, while TSMC continues expanding fabs and R&D capacity in Japan and Germany.',
      region: 'Asia',
      significance:
        'These moves emphasize a broader push to diversify chip and AI production away from China, enhancing East Asian resilience in a geopolitically tense tech race.',
      icon: <Building2 size={32} className="text-amber-700" />,
    },
    {
      title: 'U.S.–China Trade Tensions Intensify Around Tech Tariffs and 5G Security',
      summary:
        'The U.S. continues imposing higher tariffs (up to 100%) on Chinese tech imports—EV batteries, solar cells—while limiting Huawei and ZTE\'s role in 5G networks.',
      region: 'US/China',
      significance:
        'This underscores how economic strategies and national security concerns are increasingly shaping global technology infrastructure and supply chains.',
      icon: <Zap size={32} className="text-amber-700" />,
    },
    {
      title: 'African Tech Startups Raise Record $2.4 Billion in Funding',
      summary:
        'African tech startups secured record funding in 2024, with fintech, healthtech, and agritech leading the charge. Nigeria, Kenya, and South Africa dominated the funding landscape.',
      region: 'Africa',
      significance:
        'This milestone demonstrates growing investor confidence in African innovation and the continent\'s potential to solve local and global challenges through technology.',
      icon: <Building2 size={32} className="text-amber-700" />,
    },
    {
      title: 'Nigeria Launches National AI Strategy to Boost Digital Economy',
      summary:
        'Nigeria\'s Minister of Communications emphasized using AI across sectors to help the country hit its $1 trillion economy target by 2030, with deployments in healthcare, agriculture, finance, and governance.',
      region: 'Nigeria/Africa',
      significance:
        'This strategic move positions Nigeria as a leader in AI adoption across Africa, potentially accelerating economic growth and technological advancement.',
      icon: <Rocket size={32} className="text-amber-700" />,
    },
    {
      title: 'South African EdTech Platform Expands Across Sub-Saharan Africa',
      summary:
        'A leading South African educational technology platform announced expansion into 12 new African countries, providing digital learning solutions to underserved communities.',
      region: 'Africa',
      significance:
        'This expansion addresses the education gap across Africa while demonstrating the scalability of homegrown tech solutions across the continent.',
      icon: <Users size={32} className="text-amber-700" />,
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
            ? 'bg-gradient-to-br from-amber-700/20 to-amber-800/20' 
            : 'bg-gradient-to-br from-amber-700/30 to-amber-800/30'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDark 
            ? 'bg-gradient-to-br from-amber-800/20 to-amber-900/20' 
            : 'bg-gradient-to-br from-amber-800/30 to-amber-900/30'
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
            <span className="text-amber-700 font-bold text-lg uppercase tracking-wider">Company Events</span>
            <h2 className={`text-5xl font-black mt-2 mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Our Recent Activities</h2>
            <div className="w-40 h-1 bg-gradient-to-r from-amber-800 to-amber-700 mx-auto"></div>
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
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-amber-700/20'
                  : 'bg-gradient-to-br from-white/80 to-amber-50/80 border-amber-200/30'
              }`}>
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-3 h-3 bg-amber-700 rounded-full animate-pulse"></div>
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
                        <Calendar size={16} className="text-amber-700" />
                        <span className={`text-sm font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {event.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-amber-700" />
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
                          isDark ? 'text-amber-300' : 'text-amber-800'
                        }`}>
                          Event Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {event.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Award size={16} className="text-amber-700 mt-1 flex-shrink-0" />
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
                              ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white border-amber-700 hover:border-amber-500'
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
                                    ? 'bg-amber-700'
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
            <span className="text-amber-700 font-bold text-lg uppercase tracking-wider">Global Tech & Media</span>
            <h2 className={`text-5xl font-black mt-2 mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Recent News & Insights</h2>
            <div className="w-40 h-1 bg-gradient-to-r from-amber-800 to-amber-700 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalNews.map((article, index) => (
              <div
                key={index}
                className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-amber-700/20 hover:border-amber-700/40'
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
                        ? 'bg-amber-700/20 text-amber-300'
                        : 'bg-amber-100 text-amber-800'
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
              ? 'bg-gradient-to-r from-amber-700/10 to-amber-800/10 border-white/10'
              : 'bg-gradient-to-r from-amber-700/20 to-amber-800/20 border-white/20 shadow-2xl'
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
                    ? 'border-amber-700/20 text-white hover:bg-amber-700/10' 
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
