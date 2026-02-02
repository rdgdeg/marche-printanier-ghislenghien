
import React, { useState, useMemo } from 'react';
import { ARTISANS, CATEGORIES } from '../data';
import { ArtisanCard } from '../components/ArtisanCard';
import { useTranslation } from '../contexts/TranslationContext';

type SortOption = 'random' | 'az';

export const Artisans: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('random');

  const filteredArtisans = useMemo(() => {
    let result = [...ARTISANS].filter(artisan => {
      const matchesSearch = artisan.nom.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          artisan.titre.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || 
                             artisan.categories.some(cat => selectedCategories.includes(cat));
      
      return matchesSearch && matchesCategory;
    });

    if (sortOption === 'az') {
      result.sort((a, b) => a.nom.localeCompare(b.nom));
    } else {
      // For demo purposes, we'll use a fixed "pseudo-random" based on slug to avoid reshuffle on every render
      // But user can toggle to AZ
    }

    return result;
  }, [searchTerm, selectedCategories, sortOption]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Section */}
      <section className="bg-white py-8 md:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">{t('artisans.title')} <span className="text-emerald-600">{t('artisans.titleHighlight')}</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
            {t('artisans.subtitle', { count: String(ARTISANS.length) })}
          </p>
        </div>
      </section>

      {/* Recherche, filtres et tri : tout sur la page (jamais dans le menu) */}
      <section className="bg-white border-b border-gray-100 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          {/* Recherche */}
          <div className="relative w-full max-w-xl">
            <input 
              type="text" 
              placeholder={t('artisans.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl md:rounded-2xl pl-10 md:pl-12 pr-4 py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
            />
            <svg className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-2 items-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategories.includes(cat) 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-gray-50 border border-gray-200 text-gray-600 hover:border-emerald-500'
                }`}
              >
                {cat}
              </button>
            ))}
            {selectedCategories.length > 0 && (
              <button 
                onClick={() => setSelectedCategories([])}
                className="text-xs text-red-500 font-bold px-2 hover:underline"
              >
                {t('artisans.clear')}
              </button>
            )}
          </div>

          {/* Tri */}
          <div className="flex items-center gap-3">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('artisans.sortBy')}</label>
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="random">{t('artisans.sortRandom')}</option>
              <option value="az">{t('artisans.sortAz')}</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-bold text-gray-800">
            {filteredArtisans.length > 1 ? t('artisans.found', { count: filteredArtisans.length }) : t('artisans.foundOne', { count: filteredArtisans.length })}
          </h2>
        </div>

        {filteredArtisans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredArtisans.map(artisan => (
              <ArtisanCard key={artisan.slug} artisan={artisan} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="text-6xl mb-6 animate-float">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('artisans.noResults')}</h3>
            <p className="text-gray-500">{t('artisans.noResultsDesc')}</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategories([]);}}
              className="mt-6 text-emerald-600 font-bold hover:underline hover-lift"
            >
              {t('artisans.reset')}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
