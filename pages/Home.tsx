
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ARTISANS, EVENT_INFO } from '../data';
import { ArtisanCard } from '../components/ArtisanCard';
import { useTranslation } from '../contexts/TranslationContext';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  // Select 6 random artisans or just featured ones
  const featuredArtisans = useMemo(() => {
    return [...ARTISANS].sort(() => Math.random() - 0.5).slice(0, 6);
  }, []);

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[85vh] md:min-h-[600px] flex items-center overflow-hidden py-12 md:py-0">
        {/* Background avec affiche */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <img 
            src="/assets/623265295_25906280295674205_2018527970220116444_n-e5d34212-f193-450c-9250-f92c4ae54e7d.png" 
            alt="Affiche événement" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-50 rounded-full blur-3xl -z-10 -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
              {t('home.edition')}
            </span>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed animate-fade-in-up">
              {t('home.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-400">
              <Link 
                to="/artisans" 
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-center shadow-lg hover:bg-blue-700 hover:scale-105 transition-all hover-lift"
              >
                {t('home.exploreArtisans')}
              </Link>
              <Link 
                to="/infos" 
                className="bg-white text-gray-800 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold text-center hover:bg-gray-50 transition-all hover-lift"
              >
                {t('home.practicalInfo')}
              </Link>
            </div>

            <div className="flex items-center gap-8 border-t border-gray-100 pt-8 animate-fade-in-up animation-delay-600">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{t('home.when')}</p>
                <p className="font-bold text-gray-800">{EVENT_INFO.date}</p>
              </div>
              <div className="w-px h-8 bg-gray-100"></div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{t('home.where')}</p>
                <p className="font-bold text-gray-800">Ghislenghien, BE</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 hover-lift">
              <img 
                src="/assets/623265295_25906280295674205_2018527970220116444_n-e5d34212-f193-450c-9250-f92c4ae54e7d.png" 
                alt="Affiche de l'événement" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decor elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center text-4xl -rotate-12 animate-float">
              🌼
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center text-4xl rotate-12 animate-float animation-delay-400">
              🌿
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t('home.featuredArtisans')}</h2>
              <p className="text-gray-500 text-lg">{t('home.featuredSubtitle')}</p>
            </div>
            <Link to="/artisans" className="group flex items-center gap-2 text-blue-600 font-bold text-lg hover-lift">
              {t('home.seeAll')} 
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtisans.map(artisan => (
              <ArtisanCard key={artisan.slug} artisan={artisan} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Registration CTA */}
      <section className="py-24 bg-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">{t('home.areYouArtisan')}</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            {t('home.joinUs')}
          </p>
          <Link 
            to="/inscription-artisan" 
            className="inline-block bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all hover-lift animate-fade-in-up animation-delay-400"
          >
            {t('home.register')}
          </Link>
        </div>
      </section>
    </div>
  );
};
