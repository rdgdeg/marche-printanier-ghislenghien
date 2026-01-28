import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/TranslationContext';

export const CookieBanner: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
      // Masquer le CTA mobile quand la bannière est visible
      setTimeout(() => {
        const ctaElement = document.querySelector('.cookie-cta');
        if (ctaElement) {
          (ctaElement as HTMLElement).style.display = 'none';
        }
      }, 100);
    }
  }, []);

  const hideMobileCTA = () => {
    const ctaElement = document.querySelector('.cookie-cta');
    if (ctaElement) {
      (ctaElement as HTMLElement).style.display = 'none';
    }
  };

  const showMobileCTA = () => {
    const ctaElement = document.querySelector('.cookie-cta');
    if (ctaElement) {
      (ctaElement as HTMLElement).style.display = 'block';
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
    showMobileCTA();
    // Ici vous pouvez ajouter le code pour activer les cookies analytiques
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
    showMobileCTA();
    // Ici vous pouvez ajouter le code pour désactiver les cookies analytiques
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-200 shadow-2xl animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          {/* Cookie Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
              🍪
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">
              {t('cookies.title')}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              {t('cookies.description')}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-2">
              <a href="#privacy" className="hover:text-blue-600 underline">
                {t('cookies.privacyPolicy')}
              </a>
              <span>•</span>
              <a href="#cookies" className="hover:text-blue-600 underline">
                {t('cookies.cookiePolicy')}
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all whitespace-nowrap"
            >
              {t('cookies.decline')}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              {t('cookies.accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
