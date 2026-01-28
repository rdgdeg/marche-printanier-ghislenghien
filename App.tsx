
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { TranslationProvider } from './contexts/TranslationContext';
import { Home } from './pages/Home';
import { Artisans } from './pages/Artisans';
import { ArtisanDetail } from './pages/ArtisanDetail';
import { Sponsors } from './pages/Sponsors';
import { Registration } from './pages/Registration';
import { Info } from './pages/Info';
import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16 pb-24 md:pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/infos" element={<Info />} />
              <Route path="/artisans" element={<Artisans />} />
              <Route path="/artisans/:slug" element={<ArtisanDetail />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/inscription-artisan" element={<Registration />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Cookie Banner */}
          <CookieBanner />
          
          {/* Sticky Mobile CTA - Masqué si bannière cookies visible */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden animate-bounce cookie-cta">
            <Link 
              to="/artisans"
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl font-semibold text-sm whitespace-nowrap border-2 border-blue-500 hover:bg-blue-700 transition-all"
            >
              Découvrir les artisans
            </Link>
          </div>
        </div>
      </Router>
    </TranslationProvider>
  );
};

export default App;
