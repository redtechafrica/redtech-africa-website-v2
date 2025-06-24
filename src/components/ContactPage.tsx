
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, MapPin, Phone, Mail, Loader2, Send, Building, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

// Updated reason options to reflect REDtech Africa's tech and media focus
const reasonOptions = [
  { value: "select", label: "Select a service" },
  { value: "web-mobile-development", label: "Web & Mobile Development" },
  { value: "erp-systems", label: "ERP Systems Implementation" },
  { value: "crm-solutions", label: "CRM Solutions" },
  { value: "seo-services", label: "SEO Services" },
  { value: "cybersecurity", label: "Cybersecurity Services" },
  { value: "cloud-infrastructure", label: "Cloud Infrastructure & Support" },
  { value: "ai-integration", label: "AI Integration & Training" },
  { value: "video-production", label: "Video Production & Photography" },
  { value: "content-strategy", label: "Content Strategy & Creation" },
  { value: "digital-marketing", label: "Digital Marketing Campaigns" },
  { value: "brand-development", label: "Brand Development & Identity" },
  { value: "social-media", label: "Social Media Management" },
  { value: "influencer-marketing", label: "Influencer Marketing" },
  { value: "media-distribution", label: "Media Distribution & Monetization" },
  { value: "business-consulting", label: "Business Growth Consulting" },
  { value: "partnership", label: "Partnership Opportunities" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const { isDark } = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reasonForEnquiry, setReasonForEnquiry] = useState("select");
  const [emailJSLoaded, setEmailJSLoaded] = useState(false);

  // Load EmailJS dynamically
  React.useEffect(() => {
    if ((window as any).emailjs) {
      setEmailJSLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    
    script.onload = () => {
      (window as any).emailjs.init('UCiv2mzh9PWuZPf1X');
      setEmailJSLoaded(true);
    };
    
    script.onerror = () => {
      console.error('Failed to load EmailJS');
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleGetDirections = (e: React.MouseEvent<HTMLAnchorElement>, address: string) => {
    e.preventDefault();
    const encodedAddress = encodeURIComponent(address);
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    let mapsUrl;
    if (isIOS) {
      mapsUrl = `maps://maps.apple.com/?q=${encodedAddress}`;
    } else if (isAndroid) {
      mapsUrl = `geo:0,0?q=${encodedAddress}`;
    } else {
      mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    }

    window.open(mapsUrl, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current || !emailJSLoaded) return;

    setIsSubmitting(true);

    try {
      const result = await (window as any).emailjs.sendForm(
        'service_ybmsmpf',
        'template_ocysv8r',
        form.current,
        'UCiv2mzh9PWuZPf1X'
      );

      console.log('Email sent successfully:', result.text);
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      });

      form.current.reset();
      setReasonForEnquiry("select");

    } catch (error) {
      console.error('Email sending failed:', error);
      
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-72 h-72 ${
          isDark 
            ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
            : 'bg-gradient-to-br from-blue-500/5 to-purple-500/5'
        } rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 left-20 w-72 h-72 ${
          isDark 
            ? 'bg-gradient-to-br from-red-500/10 to-orange-500/10' 
            : 'bg-gradient-to-br from-red-500/5 to-orange-500/5'
        } rounded-full blur-3xl animate-pulse delay-1000`}></div>
        <div className={`absolute top-1/3 left-1/3 w-64 h-64 ${
          isDark 
            ? 'bg-gradient-to-br from-green-500/10 to-teal-500/10' 
            : 'bg-gradient-to-br from-green-500/5 to-teal-500/5'
        } rounded-full blur-3xl animate-pulse delay-2000`}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium text-white">
                Get In Touch • Start Your Journey
              </span>
            </div>
            <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent'
            }`}>
              Contact Us
            </h1>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to transform your business? Let's discuss how we can help you achieve your goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className={`${
              isDark 
                ? 'bg-gray-800/30 backdrop-blur-sm border-gray-700/50' 
                : 'bg-white/70 backdrop-blur-sm border-gray-200/50 shadow-xl'
            } rounded-3xl p-8 lg:p-12 border transition-all duration-300`}>
              <div className="mb-8">
                <h2 className={`text-3xl font-black mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Send us a message
                </h2>
                <p className={`text-lg ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className={`text-sm font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      required 
                      className={`${
                        isDark 
                          ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                      } transition-all duration-300`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className={`text-sm font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      required 
                      className={`${
                        isDark 
                          ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                      } transition-all duration-300`}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className={`text-sm font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className={`${
                        isDark 
                          ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                      } transition-all duration-300`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="companyName" className={`text-sm font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="companyName" 
                      name="companyName" 
                      required 
                      className={`${
                        isDark 
                          ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                      } transition-all duration-300`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="reasonForEnquiry" className={`text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Reason for enquiry <span className="text-red-500">*</span>
                  </label>
                  <Select name="reasonForEnquiry" value={reasonForEnquiry} onValueChange={setReasonForEnquiry} required>
                    <SelectTrigger className={`${
                      isDark 
                        ? 'bg-gray-700/50 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } transition-all duration-300`}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className={`${
                      isDark 
                        ? 'bg-gray-800 border-gray-700' 
                        : 'bg-white border-gray-200'
                    }`}>
                      {reasonOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} className={`${
                          isDark 
                            ? 'text-white hover:bg-gray-700' 
                            : 'text-gray-900 hover:bg-gray-100'
                        }`}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
          
                <div className="space-y-2">
                  <label htmlFor="additionalComments" className={`text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Additional Comments
                  </label>
                  <Textarea 
                    id="additionalComments" 
                    name="additionalComments" 
                    className={`min-h-[120px] ${
                      isDark 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                    } transition-all duration-300`}
                    placeholder="Tell us more about your project or requirements..."
                  />
                </div>

                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p className="mb-2">
                    We're committed to your privacy. REDtech Africa uses the information you provide to keep you
                    informed about our technology and media services, product updates, and industry insights. By submitting
                    this form, you agree to receive these communications from us. For more details on how we handle and
                    protect your data, please review our{" "}
                    <a href="/privacy" className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <p>You can opt out of these communications at any time.</p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || !emailJSLoaded} 
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 py-6 text-lg font-semibold rounded-xl group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending your message...
                    </span>
                  ) : !emailJSLoaded ? (
                    <span className="flex items-center gap-3">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Loading...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      <Send className="h-5 w-5" />
                      Send Message
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className={`${
                isDark 
                  ? 'bg-gray-800/30 backdrop-blur-sm border-gray-700/50' 
                  : 'bg-white/70 backdrop-blur-sm border-gray-200/50 shadow-xl'
              } rounded-3xl p-8 border transition-all duration-300`}>
                <h3 className={`text-2xl font-black mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                      <a 
                        href="mailto:hello@redtechafrica.com" 
                        className={`text-lg font-semibold hover:text-blue-500 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        hello@redtechafrica.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
                      <a 
                        href="tel:+2348189696614" 
                        className={`text-lg font-semibold hover:text-green-500 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        +234 818 969 6614
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Office Hours</p>
                      <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Mon - Fri: 9:00 AM - 6:00 PM WAT
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Weekend support available for urgent matters
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className={`${
                isDark 
                  ? 'bg-gray-800/30 backdrop-blur-sm border-gray-700/50' 
                  : 'bg-white/70 backdrop-blur-sm border-gray-200/50 shadow-xl'
              } rounded-3xl p-8 border transition-all duration-300`}>
                <h3 className={`text-2xl font-black mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Our Locations
                </h3>

                <div className="grid gap-8">
                  {/* Lagos Island Location */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Lagos Island Office
                      </h4>
                    </div>
                    <div className="space-y-3 ml-11">
                      <div className="flex items-start gap-3">
                        <MapPin className={`w-5 h-5 mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        <div>
                          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            Trocadero Square in Lekki Phase 1<br />
                            Lagos, Nigeria
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>+234 818 969 6614</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href="#"
                          onClick={(e) => handleGetDirections(e, "Trocadero Square in Lekki Phase 1 Lagos, Nigeria")}
                          className="text-blue-500 hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Lagos Mainland Location */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Lagos Mainland Office
                      </h4>
                    </div>
                    <div className="space-y-3 ml-11">
                      <div className="flex items-start gap-3">
                        <MapPin className={`w-5 h-5 mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        <div>
                          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            Royal Estate 1, Eric Moore<br />
                            Surulere, Lagos, Nigeria
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>+234 707 969 3500</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href="#"
                          onClick={(e) =>
                            handleGetDirections(e, "Royal Estate Phase 1, Eric Moore, Surulere, Lagos, Nigeria")
                          }
                          className="text-purple-500 hover:text-purple-400 transition-colors duration-300 font-medium"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${
            isDark 
              ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border-white/10' 
              : 'bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm border-gray-200/20 shadow-xl'
          } rounded-3xl p-12 border transition-all duration-300`}>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Get Started?
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Join hundreds of businesses that have transformed their operations with REDtech Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1">
                Schedule a Consultation
              </Button>
              <Button 
                variant="outline" 
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 ${
                  isDark 
                    ? 'border-white/20 text-white hover:bg-white/10' 
                    : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                }`}
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
