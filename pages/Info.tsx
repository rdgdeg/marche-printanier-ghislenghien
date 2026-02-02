import React from 'react';
import { EVENT_INFO, ARTISANS } from '../data';
import { EventActions } from '../components/EventActions';

export const Info: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-24">
      <section className="bg-white py-12 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Infos <span className="text-emerald-600">Pratiques</span></h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Tout ce qu'il faut savoir pour préparer votre visite au Marché Printanier de Ghislenghien.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <InfoBox 
              icon="📍" 
              title="Lieu de l'événement" 
              content={
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-gray-800">{EVENT_INFO.lieu}</p>
                  <div className="aspect-video w-full bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl overflow-hidden relative shadow-inner border border-emerald-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <a 
                         href="https://www.google.com/maps/search/Place+de+Ghislenghien" 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="bg-white px-6 py-3 rounded-2xl shadow-xl font-bold text-emerald-600 hover:scale-105 transition-all hover-lift"
                       >
                          Ouvrir dans Google Maps
                       </a>
                    </div>
                  </div>
                </div>
              } 
            />

            <InfoBox 
              icon="⏰" 
              title="Dates & Horaires" 
              content={
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-8">
                    <div className="bg-emerald-50 p-6 rounded-3xl flex-1 border border-emerald-100">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Date</p>
                      <p className="text-2xl font-bold text-gray-800">{EVENT_INFO.date}</p>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-3xl flex-1 border border-emerald-100">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Horaires</p>
                      <p className="text-2xl font-bold text-gray-800">{EVENT_INFO.horaires}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <EventActions />
                  </div>
                </div>
              } 
            />

            <InfoBox 
              icon="🍽️" 
              title="Sur place" 
              content={
                <ul className="grid sm:grid-cols-2 gap-4">
                  {EVENT_INFO.details.map((detail, i) => (
                    <li key={i} className="flex gap-3 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                      <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm">✓</span>
                      <span className="font-medium text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              } 
            />
          </div>

          <div className="space-y-8">
            {/* Affiche de l'événement */}
            <div className="bg-white rounded-[40px] p-6 shadow-xl border border-gray-100 overflow-hidden hover-lift">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Affiche de l'événement</h3>
              <img 
                src="/assets/623265295_25906280295674205_2018527970220116444_n-e5d34212-f193-450c-9250-f92c4ae54e7d.png" 
                alt="Affiche de l'événement" 
                className="w-full h-auto rounded-2xl shadow-md"
              />
            </div>
            
            <div className="bg-emerald-600 text-white rounded-[40px] p-8 md:p-12 shadow-xl sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Le saviez-vous ?</h3>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                Le Marché Printanier est un événement 100% bénévole. Notre objectif est de créer un lien direct entre producteurs et consommateurs.
              </p>
              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl animate-pulse-slow">🌱</div>
                    <p className="font-semibold text-lg">Zéro déchet encouragé</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl animate-pulse-slow animation-delay-200">👩‍🎨</div>
                    <p className="font-semibold text-lg">{ARTISANS.length}+ Artisans locaux</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl animate-pulse-slow animation-delay-400">👨‍👩‍👧‍👦</div>
                    <p className="font-semibold text-lg">Château gonflable pour enfants</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const InfoBox: React.FC<{ icon: string, title: string, content: React.ReactNode }> = ({ icon, title, content }) => (
  <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 overflow-hidden">
    <div className="flex items-center gap-4 mb-8">
      <span className="text-4xl">{icon}</span>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    {content}
  </div>
);
