import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { MobileTabBar } from "@/components/mobile/MobileTabBar";
import { MobileTopBar } from "@/components/mobile/MobileTopBar";
import { PullToRefresh } from "@/components/mobile/PullToRefresh";
import { InstallPrompt } from "@/components/mobile/InstallPrompt";
import { useIsMobile } from "@/hooks/use-mobile";
import Index from "./pages/Index.tsx";
import Stories from "./pages/Stories.tsx";
import StoryPage from "./pages/StoryPage.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/stories" element={<PageTransition><Stories /></PageTransition>} />
        <Route path="/stories/:slug" element={<PageTransition><StoryPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const Shell = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <ScrollToTop />
      {!isMobile && <SmoothScroll />}
      {!isMobile && <Header />}
      {isMobile && <MobileTopBar />}
      {isMobile ? (
        <PullToRefresh>
          <AnimatedRoutes />
        </PullToRefresh>
      ) : (
        <AnimatedRoutes />
      )}
      {!isMobile && <Footer />}
      {isMobile && <MobileTabBar />}
      {isMobile && <InstallPrompt />}
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Shell />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
