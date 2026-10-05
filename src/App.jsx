import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Common Components
import { BackgroundNodes } from './components/common/BackgroundNodes';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

// Core Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { ServicesView } from './views/ServicesView';
import PrivacyView from './views/PrivacyView';
import { HtmlSitemapView } from './views/HtmlSitemapView';

// Dedicated Service Landing Pages (Keyword-Targeted)
import { SeoMumbaiView } from './views/services/SeoMumbaiView';
import { WebDevMumbaiView } from './views/services/WebDevMumbaiView';
import { SocialMediaView } from './views/services/SocialMediaView';
import { PerformanceMarketingView } from './views/services/PerformanceMarketingView';
import { BrandingAgencyView } from './views/services/BrandingAgencyView';

// Dedicated Location Hubs (Mumbai & Pan-India)
import { MumbaiLocationView } from './views/locations/MumbaiLocationView';
import { IndiaLocationView } from './views/locations/IndiaLocationView';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-secondary selection:text-white noise-fx bg-white">
        <BackgroundNodes />
        <Navbar />
        <main className="relative">
          <Routes>
            {/* Core Routes */}
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/services" element={<ServicesView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/privacy" element={<PrivacyView />} />
            <Route path="/sitemap" element={<HtmlSitemapView />} />

            {/* Keyword-Targeted Service Landing Pages */}
            <Route path="/services/seo-agency-mumbai" element={<SeoMumbaiView />} />
            <Route path="/services/web-design-development-mumbai" element={<WebDevMumbaiView />} />
            <Route path="/services/social-media-marketing-agency" element={<SocialMediaView />} />
            <Route path="/services/performance-marketing-agency" element={<PerformanceMarketingView />} />
            <Route path="/services/branding-creative-agency" element={<BrandingAgencyView />} />

            {/* Keyword-Targeted Location Landing Pages */}
            <Route path="/locations/digital-marketing-agency-mumbai" element={<MumbaiLocationView />} />
            <Route path="/locations/digital-marketing-company-india" element={<IndiaLocationView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}