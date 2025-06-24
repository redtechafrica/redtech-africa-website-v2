
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Calendar, MapPin, ExternalLink, Award, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const NewsPage = () => {
  const { isDark } = useTheme();

  const globalNews = [
    {
      id: 1,
      title: "Cloudflare launches large-scale crawler-blocking to protect publishers",
      summary: "Cloudflare is rolling out a new tool to curb AI and web crawlers that scrape content at shocking scales without driving traffic back to publishers—sometimes at ratios of 18,000 crawled pages to just one visit.",
      source: "japantimes.co.jp",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      region: "Global/US"
    },
    {
      id: 2,
      title: "TikTok doubles down on news creators amid stalled U.S. sale talks",
      summary: "TikTok is actively bolstering its news creator ecosystem, hiring a dedicated creator manager for North America. This comes as U.S. negotiations over a potential sale remain stuck, pending Chinese approval.",
      source: "axios.com",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      region: "US/Global"
    },
    {
      id: 3,
      title: "DeepSeek shakes up AI with low-cost rival model",
      summary: "Chinese startup DeepSeek launched a low-cost large language model that shot to the top of the App Store charts, spurring outages amid heavy demand.",
      source: "asahi.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      region: "China/Asia"
    },
    {
      id: 4,
      title: "Japan, U.S. and Taiwan deepen semiconductor and AI ties",
      summary: "Japan is attracting massive AI and semiconductor investments from U.S. giants: AWS ($14 B), Microsoft ($2.9 B), and Google, while TSMC continues expanding fabs and R&D capacity in Japan and Germany. Meanwhile, Taiwan is reinforcing its chip leadership by aggressively countering Chinese cyber-espionage and boosting domestic cybersecurity measures.",
      source: "taipeitimes.com",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      region: "Asia"
    },
    {
      id: 5,
      title: "U.S.–China trade tensions intensify around tech tariffs and 5G security",
      summary: "The U.S. continues imposing higher tariffs (up to 100%) on Chinese tech imports—EV batteries, solar cells—while limiting Huawei and ZTE's role in 5G networks. In turn, China protests and threatens countermeasures.",
      source: "axios.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      region: "US/China"
    }
  ];

  const companyEvents = [
    {
      id: 1,
      title: "DataFest Africa 2024 – Daystar Hall, Lagos",
      date: "October 17–19, 2024",
      venue: "Daystar Hall (Star Hub), Lagos",
      description: "DataFest Africa, the continent's premier data science conference, returned to Daystar Hall (Star Hub), Lagos, bringing an eclectic mix of government officials, academia, start-ups, and private sector leaders.",
      details: "REDtech Africa hosted an exhibition booth via the DiceyTech hackathon platform. Founders Adedapo Olawunmi and Dolamu Sowunmi, along with Executive Director Ayo Olokan and other team members, were on hand to engage attendees. They also oversaw the award ceremony for winners of the DiceyTech Hackathon, presenting cash prizes and celebrating standout talent. David Ogundepo of Nouvellesoft was present in full support, underscoring the collaborative spirit of the day.",
      coverImage: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fdatafest_october_2024%2FWhatsApp%20Image%202024-10-19%20at%2020.01.28.jpeg?alt=media&token=5183b93a-2544-46e6-baf2-4c4448742c7a",
      eventImage: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fdatafest_october_2024%2F0BLK_5582.jpg?alt=media&token=67a32d95-8247-4bf2-aacc-82bc0af5ea51",
      link: "https://www.datacommunityafrica.org/"
    },
    {
      id: 2,
      title: "Startup World Cup Lagos Regional Final",
      date: "March 27, 2025",
      venue: "Muson Centre, Victoria Island, Lagos",
      description: "David Ogundepo, newly appointed Tech Innovation Lead at REDtech Africa since January 2025, was selected among the top 10 startups to pitch at the Startup World Cup Lagos Regional — part of a global series leading to a grand finale in San Francisco.",
      details: "Held at the Muson Centre, Victoria Island, Lagos and organized by Tech Unite Africa in partnership with Startup World Cup, the live event featured hundreds of guests, investors, and sponsors. David presented The Yearbook App product, showcasing its innovative approach to digital storytelling and community engagement. His participation symbolized REDtech's commitment to nurturing tech ventures with regional impact.",
      coverImage: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Ftech_unite_africa_startup_worldcup_march_2025%2FIMG_8171.jpg?alt=media&token=3865fa96-5015-4e5d-9505-29a432b208bc",
      eventImage: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Ftech_unite_africa_startup_worldcup_march_2025%2FScreenshot_2025-06-24_at_19.36.40.png?alt=media&token=1894a68b-67c9-4af8-a88b-f8a026a552bf",
      link: "https://www.startupworldcup.io/lagos-app-2025"
    },
    {
      id: 3,
      title: "AgriConnect Hackathon & Summit",
      date: "May 28–30, 2025",
      venue: "Oriental Hotel, Victoria Island, Lagos",
      description: "The 2025 AgriConnect Summit brought together Africa's agricultural thought leaders — including former President Olusegun Obasanjo, Lagos Governor Babajide Sanwo-Olu, and AfDB President Akinwumi Adesina — to address food security and agripreneurship.",
      details: "Hosted by the DiceyTech platform, the summit featured a two-day workshop (May 28–29) for agripreneurs and culminated in a high-energy AgriTech Hackathon on May 30. Founders of REDtech Africa served as guest speakers and led the award ceremony recognizing innovative hackathon winners.",
      coverImage: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fagriconnect_hackathon_may_2025%2FScreenshot%202025-06-24%20at%2019.04.45.png?alt=media&token=326a2605-1f3d-4190-86c3-6035c3210189",
      eventImage: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fnews_page%2Fagriconnect_hackathon_may_2025%2FScreenshot%202025-06-24%20at%2019.48.53.png?alt=media&token=08f75024-a947-4cf4-a646-44364c38b80c",
      link: "https://agriconnectsummit.com"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20' 
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
        }`} />
        <div className="relative container mx-auto px-4 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
              <Globe className="w-4 h-4 text-blue-500" />
              <span className={`text-sm font-medium ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                Tech & Media Insights
              </span>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              News & <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Stay informed with global tech developments and discover REDtech Africa's latest events and achievements
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        {/* Global Tech News Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Global Tech & Media News
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Latest developments from around the world
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalNews.map((article, index) => (
              <Card key={article.id} className={`group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800' 
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              } ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      {article.region}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {article.title}
                  </h3>
                  <p className={`text-sm mb-4 line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      Source: {article.source}
                    </span>
                    <ExternalLink className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Events Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                REDtech Africa Events
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Our journey in tech innovation and community building
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {companyEvents.map((event, index) => (
              <div key={event.id} className={`relative ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex gap-12 items-center`}>
                {/* Event Images */}
                <div className="flex-1 space-y-6">
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img 
                      src={event.coverImage} 
                      alt={`${event.title} cover`}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-4 text-white">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">{event.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={event.eventImage} 
                      alt={`${event.title} event`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Event Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {event.title}
                    </h3>
                    <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {event.description}
                    </p>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {event.details}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <a 
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>Community Event</span>
                    </div>
                  </div>
                </div>

                {/* Decorative line */}
                {index < companyEvents.length - 1 && (
                  <div className={`absolute left-1/2 -bottom-8 w-px h-16 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-300'
                  } hidden lg:block`} />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsPage;
