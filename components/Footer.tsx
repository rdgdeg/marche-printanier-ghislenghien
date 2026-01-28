
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 md:py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <span className="text-blue-600 text-2xl">🌸</span>
            <span className="font-bold text-xl text-gray-800 tracking-tight">Marché <span className="text-blue-600">Printanier</span></span>
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
            <li>Dimanche 12 Avril 2026</li>
            <li>Salle Communale, Ghislenghien</li>
            <li>10h00 — 18h00</li>
            <li>Entrée gratuite</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-800 mb-6">Liens rapides</h4>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li><Link to="/artisans" className="hover:text-blue-600 transition-colors">Annuaire des artisans</Link></li>
            <li><Link to="/infos" className="hover:text-blue-600 transition-colors">Infos pratiques</Link></li>
            <li><Link to="/sponsors" className="hover:text-blue-600 transition-colors">Nos sponsors</Link></li>
            <li><Link to="/inscription-artisan" className="hover:text-blue-600 transition-colors">Devenir exposant</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-800 mb-6">Newsletter</h4>
          <p className="text-gray-500 text-xs mb-4">Restez informé des prochaines éditions et nouveaux artisans.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
              OK
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>© 2025 Marché Printanier de Ghislenghien. Tous droits réservés.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-600">Mentions légales</a>
          <a href="#" className="hover:text-gray-600">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: string, label: string }> = ({ icon, label }) => (
  <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all text-xl" title={label}>
    {icon}
  </a>
);
