
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ProductsPage from "./components/ProductsPage";
import ContactPage from "./components/ContactPage";
import NewsPage from "./components/NewsPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ThemeProvider>
          <div className="min-h-screen">
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<><AboutPage /><Footer /></>} />
              <Route path="/services" element={<><ServicesPage /><Footer /></>} />
              <Route path="/products" element={<><ProductsPage /><Footer /></>} />
              <Route path="/news" element={<><NewsPage /><Footer /></>} />
              <Route path="/contact" element={<><ContactPage /><Footer /></>} />
              <Route path="/privacy" element={<><PrivacyPage /><Footer /></>} />
              <Route path="/terms" element={<><TermsPage /><Footer /></>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
