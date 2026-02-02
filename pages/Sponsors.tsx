import React, { useState } from 'react';
import { getSponsors } from '../utils/sponsorsStorage';
import type { Sponsor } from '../types';

export const Sponsors: React.FC = () => {
  const SPONSORS = getSponsors();
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <section className="bg-white py-12 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Nos <span className="text-emerald-600">Sponsors</span></h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Grâce à leur soutien, le Marché Printanier peut proposer une expérience de qualité pour cette première édition.
          </p>
        </div>
      </section>

      {/* Grille 4 par rangée */}
      {SPONSORS.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 mt-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {SPONSORS.map(sponsor => (
              <button
                key={sponsor.id}
                type="button"
                onClick={() => setSelectedSponsor(sponsor)}
                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-left min-h-[180px]"
              >
                <div className="w-full h-24 flex items-center justify-center mb-3">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.nom} 
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <span className="font-semibold text-gray-800 text-sm text-center line-clamp-2">{sponsor.nom}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Modal description + coordonnées */}
      {selectedSponsor && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setSelectedSponsor(null)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 mb-6">
              <div className="w-20 h-20 flex-shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100">
                <img src={selectedSponsor.logo} alt={selectedSponsor.nom} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-gray-900">{selectedSponsor.nom}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSponsor(null)}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
                aria-label="Fermer"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {selectedSponsor.description && (
              <div className="mb-6">
                <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedSponsor.description}</p>
              </div>
            )}
            <div>
              <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Coordonnées</h3>
              <ul className="space-y-3">
                {selectedSponsor.lien && selectedSponsor.lien !== '#' && (
                  <li>
                    <a 
                      href={selectedSponsor.lien} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-emerald-600 font-medium hover:underline"
                    >
                      <span className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                      </span>
                      Site web
                    </a>
                  </li>
                )}
                {selectedSponsor.email && (
                  <li>
                    <a 
                      href={`mailto:${selectedSponsor.email}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-emerald-600"
                    >
                      <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </span>
                      {selectedSponsor.email}
                    </a>
                  </li>
                )}
                {selectedSponsor.telephone && (
                  <li>
                    <a 
                      href={`tel:${selectedSponsor.telephone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-emerald-600"
                    >
                      <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </span>
                      {selectedSponsor.telephone}
                    </a>
                  </li>
                )}
                {selectedSponsor.adresse && (
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    </span>
                    <span>{selectedSponsor.adresse}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      <section className="max-w-4xl mx-auto px-4 mt-16 md:mt-24 text-center bg-white rounded-[40px] p-6 md:p-12 shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Devenir partenaire ?</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Associez votre image à un événement local, dynamique et familial. Contactez-nous pour découvrir nos formules de partenariat.
        </p>
        <a href="mailto:partenaires@marcheprintanier.be" className="inline-block bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all">
          Nous contacter
        </a>
      </section>

      <p className="text-center text-gray-500 mt-12 mb-8 italic">Merci à la Ville d&apos;Ath pour le soutien.</p>
    </div>
  );
};
