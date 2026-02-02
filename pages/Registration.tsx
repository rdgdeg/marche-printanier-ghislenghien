
import React, { useState } from 'react';
import { CATEGORIES } from '../data';
import { useTranslation } from '../contexts/TranslationContext';

export const Registration: React.FC = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    titre: '',
    selectedCategories: [] as string[],
    descriptionCourte: '',
    descriptionLongue: '',
    email: '',
    telephone: '',
    adresse: '',
    codePostal: '',
    ville: '',
    horaires: '',
    site: '',
    instagram: '',
    facebook: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form data:', formData);
    setSubmitted(true);
    setFormData({ nom: '', titre: '', selectedCategories: [], descriptionCourte: '', descriptionLongue: '', email: '', telephone: '', adresse: '', codePostal: '', ville: '', horaires: '', site: '', instagram: '', facebook: '', consent: false });
    window.scrollTo(0, 0);
  };

  const toggleCategory = (cat: string) => {
    setFormData(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(cat) 
        ? prev.selectedCategories.filter(c => c !== cat) 
        : [...prev.selectedCategories, cat]
    }));
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl">
          ✨
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">{t('registration.success')}</h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('registration.successDesc', { name: formData.nom }) }}></p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setSubmitted(false)}
            className="text-emerald-600 font-bold hover:underline transition-all hover:scale-105"
          >
            {t('registration.another')}
          </button>
          <a href="/" className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all hover:scale-105">{t('registration.backHome')}</a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pb-24">
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 pt-24 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -ml-48 -mb-48"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">{t('registration.title')}</h1>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {t('registration.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 -mt-10">
        <form onSubmit={handleSubmit} className="bg-white rounded-[40px] shadow-2xl p-6 md:p-8 lg:p-12 space-y-8 md:space-y-12">
          
          {/* Section: Identité */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm animate-pulse">1</span>
              {t('registration.section1')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('registration.commercialName')} *</label>
                <input 
                  required
                  type="text" 
                  value={formData.nom}
                  onChange={e => setFormData({...formData, nom: e.target.value})}
                  placeholder="Ex: Atelier Pivoine"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('registration.activity')} *</label>
                <input 
                  required
                  type="text" 
                  value={formData.titre}
                  onChange={e => setFormData({...formData, titre: e.target.value})}
                  placeholder="Ex: Création de bijoux en grès"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-700">{t('registration.categories')} *</label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      formData.selectedCategories.includes(cat)
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-emerald-500'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section: Description */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm animate-pulse">2</span>
              {t('registration.section2')}
            </h3>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-bold text-gray-700">{t('registration.shortDesc')} *</label>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{formData.descriptionCourte.length}/160</span>
              </div>
              <textarea 
                required
                maxLength={160}
                rows={2}
                value={formData.descriptionCourte}
                onChange={e => setFormData({...formData, descriptionCourte: e.target.value})}
                placeholder="Une phrase d'accroche pour l'annuaire..."
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">{t('registration.longDesc')}</label>
              <textarea 
                rows={5}
                value={formData.descriptionLongue}
                onChange={e => setFormData({...formData, descriptionLongue: e.target.value})}
                placeholder="Racontez-nous votre histoire, vos matières, votre processus..."
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              ></textarea>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section: Médias */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm animate-pulse">3</span>
              {t('registration.section3')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700">{t('registration.mainPhoto')} *</label>
                <div className="border-2 border-dashed border-gray-200 rounded-3xl p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📸</div>
                  <p className="text-sm font-bold text-gray-500">Choisir un fichier</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase">PNG, JPG up to 10MB</p>
                  <input type="file" className="hidden" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700">{t('registration.gallery')}</label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-xl text-gray-300">+</div>
                  <div className="aspect-square bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-xl text-gray-300">+</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section: Contact */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm animate-pulse">4</span>
              {t('registration.section4')}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('registration.email')} *</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('registration.phone')}</label>
                <input type="tel" value={formData.telephone} onChange={e => setFormData({...formData, telephone: e.target.value})} placeholder="+32 123 45 67 89" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('registration.address')}</label>
                <input type="text" value={formData.adresse} onChange={e => setFormData({...formData, adresse: e.target.value})} placeholder={t('registration.addressPlaceholder')} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('registration.postalCode')}</label>
                <input type="text" value={formData.codePostal} onChange={e => setFormData({...formData, codePostal: e.target.value})} placeholder="7800" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('registration.city')}</label>
                <input type="text" value={formData.ville} onChange={e => setFormData({...formData, ville: e.target.value})} placeholder={t('registration.cityPlaceholder')} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('registration.hours')}</label>
                <input type="text" value={formData.horaires} onChange={e => setFormData({...formData, horaires: e.target.value})} placeholder={t('registration.hoursPlaceholder')} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('registration.website')}</label>
                <input type="url" value={formData.site} onChange={e => setFormData({...formData, site: e.target.value})} placeholder="https://..." className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('registration.social')}</label>
                <input type="text" value={formData.instagram} onChange={e => setFormData({...formData, instagram: e.target.value})} placeholder="@votre_profil" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('registration.facebook')}</label>
                <input type="text" value={formData.facebook} onChange={e => setFormData({...formData, facebook: e.target.value})} placeholder="@votre_page" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
          </div>

          {/* Consent */}
          <div className="pt-8">
            <label className="flex items-start gap-4 cursor-pointer group">
              <input 
                required
                type="checkbox" 
                checked={formData.consent}
                onChange={e => setFormData({...formData, consent: e.target.checked})}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" 
              />
              <span className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                {t('registration.consent')} *
              </span>
            </label>
          </div>

          <button 
            type="submit"
            className="w-full bg-emerald-600 text-white py-5 rounded-[20px] font-bold text-lg shadow-xl hover:bg-emerald-700 hover:-translate-y-1 transition-all active:scale-95 hover:scale-105"
          >
            {t('registration.submit')}
          </button>
        </form>
      </div>
    </div>
  );
};
