
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
import ResourcingPage from "./components/ResourcingPage";
import EdTechPage from "./components/EdTechPage";
import TechnologyPage from "./components/TechnologyPage";
import ContactPage from "./components/ContactPage";
import InsightsPage from "./components/InsightsPage";
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
              <Route path="/resourcing" element={<><ResourcingPage /><Footer /></>} />
              <Route path="/edtech" element={<><EdTechPage /><Footer /></>} />
              <Route path="/technology" element={<><TechnologyPage /><Footer /></>} />
              <Route path="/insights" element={<><InsightsPage /><Footer /></>} />
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
