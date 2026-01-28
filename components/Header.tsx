
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../contexts/TranslationContext';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 h-16 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110">
            <span className="text-blue-600 text-xl">🌸</span>
          </div>
          <span className="font-bold text-lg md:text-xl text-gray-800 tracking-tight">Marché <span className="text-blue-600">Printanier</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/infos">{t('nav.info')}</NavLink>
          <NavLink to="/artisans">{t('nav.artisans')}</NavLink>
          <NavLink to="/sponsors">{t('nav.sponsors')}</NavLink>
          <NavLink to="/contact">{t('nav.contact')}</NavLink>
          <Link 
            to="/inscription-artisan" 
            className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-all border border-blue-200"
          >
            {t('nav.registration')}
          </Link>
          <Link 
            to="/artisans" 
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-sm active:scale-95 hover:scale-105"
          >
            {t('nav.seeArtisans')}
          </Link>
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-4 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
          <div className="flex flex-col gap-2">
            <MobileNavLink to="/">{t('nav.home')}</MobileNavLink>
            <MobileNavLink to="/infos">{t('nav.info')}</MobileNavLink>
            <MobileNavLink to="/artisans">{t('nav.artisans')}</MobileNavLink>
            <MobileNavLink to="/sponsors">{t('nav.sponsors')}</MobileNavLink>
            <MobileNavLink to="/inscription-artisan">{t('nav.registration')}</MobileNavLink>
            <MobileNavLink to="/contact">{t('nav.contact')}</MobileNavLink>
          </div>
          <Link 
            to="/artisans" 
            className="bg-blue-600 text-white text-center py-4 rounded-2xl font-semibold shadow-lg hover:bg-blue-700 transition-all"
          >
            {t('nav.discoverArtisans')}
          </Link>
        </div>
      )}
    </header>
  );
};

const LanguageSelector: React.FC<{ language: 'fr' | 'nl', setLanguage: (lang: 'fr' | 'nl') => void }> = ({ language, setLanguage }) => (
  <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
    <button
      onClick={() => setLanguage('fr')}
      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
        language === 'fr' 
          ? 'bg-blue-600 text-white shadow-sm' 
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      FR
    </button>
    <button
      onClick={() => setLanguage('nl')}
      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
        language === 'nl' 
          ? 'bg-blue-600 text-white shadow-sm' 
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      NL
    </button>
  </div>
);

const NavLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-gray-600 font-medium hover:text-blue-600 transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
  </Link>
);

const MobileNavLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-xl font-semibold text-gray-800 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all"
  >
    {children}
  </Link>
);
