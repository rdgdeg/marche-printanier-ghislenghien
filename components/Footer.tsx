
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/TranslationContext';
import { EVENT_INFO } from '../data';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative bg-white border-t border-gray-100 py-8 md:py-12 pb-24 md:pb-12 overflow-hidden">
      {/* Éléments graphiques printaniers */}
      <div className="absolute inset-0 pointer-events-none -z-0 opacity-30">
        <span className="absolute bottom-4 left-4 text-4xl">🌸</span>
        <span className="absolute bottom-8 right-12 text-3xl">🌿</span>
        <span className="absolute top-8 right-20 text-2xl">🦋</span>
        <span className="absolute top-12 left-1/4 text-2xl">🌼</span>
        <span className="absolute bottom-16 left-1/3 text-3xl">🌷</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <span className="text-emerald-600 text-2xl">🌸</span>
            <span className="font-bold text-xl text-gray-800 tracking-tight">Marché <span className="text-emerald-600">Printanier</span></span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            L'événement incontournable pour célébrer le printemps et l'artisanat local à Ghislenghien.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon="📸" label="Instagram" />
            <SocialIcon icon="👥" label="Facebook" />
            <SocialIcon icon="💌" label="Email" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-800 mb-6">Événement</h4>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li>{EVENT_INFO.date}</li>
            <li>{EVENT_INFO.lieu}</li>
            <li>{EVENT_INFO.horaires}</li>
            <li>{EVENT_INFO.entree}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-800 mb-6">Liens rapides</h4>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li><Link to="/artisans" className="hover:text-emerald-600 transition-colors">Annuaire des artisans</Link></li>
            <li><Link to="/infos" className="hover:text-emerald-600 transition-colors">Infos pratiques</Link></li>
            <li><Link to="/sponsors" className="hover:text-emerald-600 transition-colors">Nos sponsors</Link></li>
          </ul>
          <Link
            to="/inscription-artisan"
            className="mt-4 flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-800 font-semibold hover:bg-emerald-100 hover:border-emerald-300 transition-all"
          >
            <span className="w-10 h-10 rounded-xl bg-emerald-200 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </span>
            {t('nav.registration')}
          </Link>
        </div>

        <div>
          <h4 className="font-bold text-gray-800 mb-6">Newsletter</h4>
          <p className="text-gray-500 text-xs mb-4">Restez informé des prochaines éditions et nouveaux artisans.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors">
              OK
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-100 flex flex-col gap-3 text-xs text-gray-500 relative z-10">
        <p><strong className="text-gray-700">Organisation :</strong> L&K Events</p>
        <p><strong className="text-gray-700">Site et communication :</strong> LD Media – Agence de communication à Ath</p>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
          <p className="text-gray-400">© 2026 Marché Printanier de Ghislenghien. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <p className="text-gray-500 italic">Avec le soutien de la Ville d&apos;Ath</p>
            <a href="#" className="hover:text-gray-600">Mentions légales</a>
            <a href="#" className="hover:text-gray-600">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: string, label: string }> = ({ icon, label }) => (
  <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-all text-xl" title={label}>
    {icon}
  </a>
);
