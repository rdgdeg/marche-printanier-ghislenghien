
import React, { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (formData.phone && !/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Format de téléphone invalide';
    }

    if (!formData.subject) {
      newErrors.subject = t('contact.required');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.required');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simuler l'envoi du formulaire
    try {
      // Ici vous pouvez ajouter votre logique d'envoi (API, email, etc.)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setErrors({});
      
      // Scroll vers le haut pour voir le message de succès
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Effacer l'erreur du champ quand l'utilisateur commence à taper
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-gray-50 min-h-screen pb-24">
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-32 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl animate-scale-in">
              ✨
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">{t('contact.success')}</h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              {t('contact.successDesc')}
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all hover-lift animate-fade-in-up animation-delay-400"
            >
              {t('contact.send')} un autre message
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header Section - Séparée du formulaire */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Contactez-<span className="text-yellow-300">{t('contact.titleHighlight')}</span>
          </h1>
          <p className="text-xl opacity-90 leading-relaxed animate-fade-in-up animation-delay-200">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Message d'erreur */}
      {submitStatus === 'error' && (
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-2xl animate-fade-in-up">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-bold">{t('contact.error')}</p>
                <p className="text-sm">{t('contact.errorDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Formulaire - Espacement clair après la bannière */}
      <div className="max-w-4xl mx-auto px-4 mt-12 mb-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Colonne Formulaire */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-[40px] shadow-2xl p-6 md:p-8 lg:p-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    {t('contact.name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full bg-gray-50 border rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 transition-all ${
                      errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-500'
                    }`}
                    placeholder={t('contact.namePlaceholder')}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    {t('contact.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full bg-gray-50 border rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 transition-all ${
                      errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-500'
                    }`}
                    placeholder={t('contact.emailPlaceholder')}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">{t('contact.phone')}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={`w-full bg-gray-50 border rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 transition-all ${
                      errors.phone ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-500'
                    }`}
                    placeholder={t('contact.phonePlaceholder')}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    {t('contact.subject')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className={`w-full bg-gray-50 border rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-500'
                    }`}
                  >
                    <option value="">{t('contact.subjectPlaceholder')}</option>
                    <option value="general">{t('contact.subjectGeneral')}</option>
                    <option value="partnership">{t('contact.subjectPartnership')}</option>
                    <option value="press">{t('contact.subjectPress')}</option>
                    <option value="artisan">{t('contact.subjectArtisan')}</option>
                    <option value="other">{t('contact.subjectOther')}</option>
                  </select>
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                  {t('contact.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`w-full bg-gray-50 border rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-500'
                  }`}
                  placeholder={t('contact.messagePlaceholder')}
                />
                <div className="flex justify-between items-center">
                  {errors.message ? (
                    <p className="text-xs text-red-500">{errors.message}</p>
                  ) : (
                    <p className="text-xs text-gray-400">{formData.message.length} caractères</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-all hover-lift disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.sending')}
                  </>
                ) : (
                  t('contact.send')
                )}
              </button>
            </form>
          </div>

          {/* Colonne Informations de contact */}
          <div className="md:col-span-2 space-y-6 order-1 md:order-2">
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 hover-lift transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📧</span>
                </div>
                <h4 className="font-bold text-gray-800">{t('contact.generalEmail')}</h4>
              </div>
              <a href="mailto:hello@marcheprintanier.be" className="text-blue-600 font-bold mb-1 hover:underline block">
                hello@marcheprintanier.be
              </a>
              <p className="text-xs text-gray-400">{t('contact.responseTime')}</p>
            </div>

            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 hover-lift transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🤝</span>
                </div>
                <h4 className="font-bold text-gray-800">{t('contact.pressPartnerships')}</h4>
              </div>
              <a href="mailto:presse@marcheprintanier.be" className="text-blue-600 font-bold mb-1 hover:underline block">
                presse@marcheprintanier.be
              </a>
            </div>

            <div className="bg-blue-50 rounded-[40px] p-8 border border-blue-100 hover-lift transition-all">
              <h4 className="font-bold text-blue-800 mb-4">{t('contact.followUs')}</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl hover:bg-blue-100 transition-all hover:scale-110">
                  📸
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl hover:bg-blue-100 transition-all hover:scale-110">
                  👥
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
