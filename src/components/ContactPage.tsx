
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, MapPin, Phone, Mail, Loader2 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

// Updated reason options to reflect REDtech Africa's tech and media focus
const reasonOptions = [
  { value: "select", label: "Select" },
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
  useEffect(() => {
    if ((window as any).emailjs) {
      setEmailJSLoaded(true);
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
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
    
    if (!form.current || !emailJSLoaded) {
      toast({
        title: "Error",
        description: "Email service is not ready. Please try again in a moment.",
        variant: "destructive",
      });
      return;
    }

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
        variant: "default",
      });

      // Reset form
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
    <div className={`min-h-screen w-full transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
          isDark ? 'bg-purple-500' : 'bg-blue-500'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-pulse delay-1000 ${
          isDark ? 'bg-blue-500' : 'bg-purple-500'
        }`}></div>
      </div>
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <h1 className={`text-4xl font-light text-center mb-12 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Contact Us
        </h1>

        <div className={`p-6 sm:p-8 rounded-lg shadow-sm mb-12 transition-colors duration-300 ${
          isDark ? 'bg-gray-800 shadow-purple-500/10' : 'bg-white shadow-blue-500/10'
        }`}>
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  First Name <span className="text-amber-600">*</span>
                </label>
                <Input 
                  id="firstName" 
                  name="firstName" 
                  required 
                  className={isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Last Name <span className="text-amber-600">*</span>
                </label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  required 
                  className={isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email <span className="text-amber-600">*</span>
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className={isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="companyName" className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Company Name <span className="text-amber-600">*</span>
                </label>
                <Input 
                  id="companyName" 
                  name="companyName" 
                  required 
                  className={isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="reasonForEnquiry" className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Reason for enquiry <span className="text-amber-600">*</span>
              </label>
              <Select name="reasonForEnquiry" value={reasonForEnquiry} onValueChange={setReasonForEnquiry} required>
                <SelectTrigger className={isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className={isDark ? 'bg-gray-700 border-gray-600' : ''}>
                  {reasonOptions.map((option) => (
                    <SelectItem 
                      key={option.value} 
                      value={option.value}
                      className={isDark ? 'text-white hover:bg-gray-600' : ''}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
      
            <div className="space-y-2">
              <label htmlFor="additionalComments" className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Additional Comments
              </label>
              <Textarea 
                id="additionalComments" 
                name="additionalComments" 
                className={`min-h-[100px] ${isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}`}
              />
            </div>

            <div className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <p className="mb-2">
                We're committed to your privacy. REDtech Africa Consulting uses the information you provide to keep you
                informed about our technology and media services, product updates, and industry insights. By submitting
                this form, you agree to receive these communications from us. For more details on how we handle and
                protect your data, please review our{" "}
                <a href="/privacy" className="text-amber-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
              <p>You can opt out of these communications at any time.</p>
            </div>

            <Button 
              type="submit" 
              variant="outline" 
              disabled={isSubmitting || !emailJSLoaded} 
              className={`w-32 transition-all duration-300 ${
                isDark 
                  ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10' 
                  : 'border-blue-500 text-blue-600 hover:bg-blue-500/10'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Submit <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </div>

        {/* Location section */}
        <div className="space-y-6 px-4 sm:px-0">
          <h2 className={`text-2xl font-light transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Our Locations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className={`text-xl font-medium transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Lagos Island Location
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className={`h-5 w-5 mt-1 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-400'
                  }`} />
                  <div>
                    <p className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Trocadero Square in Lekki Phase 1 Lagos, Nigeria.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className={`h-5 w-5 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-400'
                  }`} />
                  <p className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    +234 818 969 6614
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className={`h-5 w-5 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-400'
                  }`} />
                  <a 
                    href="mailto:hello@redtechafrica.com" 
                    className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-300 hover:text-amber-400' : 'text-gray-700 hover:text-amber-600'
                    }`}
                  >
                    hello@redtechafrica.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    onClick={(e) => handleGetDirections(e, "Trocadero Square in Lekki Phase 1 Lagos, Nigeria")}
                    className="text-amber-600 hover:underline"
                  >
                    Get Directions {">"}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`text-xl font-medium transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Lagos Mainland Location
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className={`h-5 w-5 mt-1 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-400'
                  }`} />
                  <div>
                    <p className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Royal Estate 1, Eric Moore, Surulere, Lagos, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className={`h-5 w-5 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-400'
                  }`} />
                  <p className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    +234 707 969 3500
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className={`h-5 w-5 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-400'
                  }`} />
                  <a 
                    href="mailto:hello@redtechafrica.com" 
                    className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-300 hover:text-amber-400' : 'text-gray-700 hover:text-amber-600'
                    }`}
                  >
                    hello@redtechafrica.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    onClick={(e) =>
                      handleGetDirections(e, "Royal Estate Phase 1, Eric Moore, Surulere, Lagos, Nigeria")
                    }
                    className="text-amber-600 hover:underline"
                  >
                    Get Directions {">"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
