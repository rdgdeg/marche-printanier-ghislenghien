
import React from 'react';
import { Link } from 'react-router-dom';
import { Artisan } from '../types';
import { useTranslation } from '../contexts/TranslationContext';

interface ArtisanCardProps {
  artisan: Artisan;
}

export const ArtisanCard: React.FC<ArtisanCardProps> = ({ artisan }) => {
  const { t } = useTranslation();
  return (
    <Link 
      to={`/artisans/${artisan.slug}`} 
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full hover-lift animate-fade-in-up"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={artisan.photo_principale} 
          alt={artisan.nom} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {artisan.categories.slice(0, 2).map(cat => (
            <span key={cat} className="bg-white/90 backdrop-blur-sm text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {cat}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
          {artisan.nom}
        </h3>
        <p className="text-blue-600 text-xs font-semibold mb-3">
          {artisan.titre}
        </p>
        <p className="text-gray-500 text-sm line-clamp-2 mb-6">
          {artisan.description_courte}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            {t('artisans.discover')} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </div>
      </div>
    </Link>
  );
};
