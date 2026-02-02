
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ARTISANS } from '../data';

export const ArtisanDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState(false);

  const artisan = ARTISANS.find(a => a.slug === slug);

  // S'assurer qu'on scroll en haut quand on arrive sur la page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!artisan) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Oups !</h1>
        <p className="text-gray-500 mb-8">Cet artisan n'existe pas ou a été retiré de la liste.</p>
        <Link to="/artisans" className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold">Retour à l'annuaire</Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="bg-gray-50 pb-24">
      {/* Top Banner with back button and share */}
      <div className="bg-white border-b border-gray-100 py-4 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('/artisans')}
            className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Retour
          </button>
          <button 
            onClick={handleShare}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all ${
              copySuccess ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-50 text-gray-700 hover:bg-emerald-50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
            {copySuccess ? 'Copié !' : 'Partager la fiche'}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-12">
          {/* Photos Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-[40px] overflow-hidden shadow-xl bg-white mb-6">
              <img 
                src={artisan.photo_principale} 
                alt={artisan.nom} 
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
            
            {artisan.galerie && artisan.galerie.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {artisan.galerie.map((img, i) => (
                  <div key={i} className="rounded-3xl overflow-hidden shadow-md h-32 md:h-48">
                    <img src={img} alt={`${artisan.nom} galerie ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-white rounded-[40px] p-6 md:p-8 lg:p-12 shadow-sm border border-gray-100 h-full">
              <div className="flex flex-wrap gap-2 mb-6">
                {artisan.categories.map(cat => (
                  <span key={cat} className="bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {cat}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{artisan.nom}</h1>

              <div className="space-y-6 mb-12">
                <h3 className="font-bold text-gray-800 text-lg border-l-4 border-emerald-500 pl-4">Présentation</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {artisan.description_longue || artisan.description_courte}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-gray-800 text-lg">Coordonnées</h3>
                
                <div className="flex flex-col gap-3">
                  {artisan.email && (
                    <a href={`mailto:${artisan.email}`} className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-all p-4 bg-gray-50 rounded-2xl group">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</p>
                        <p className="font-semibold">{artisan.email}</p>
                      </div>
                    </a>
                  )}

                  {artisan.telephone && (
                    <a href={`tel:${artisan.telephone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-all p-4 bg-gray-50 rounded-2xl group">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Téléphone</p>
                        <p className="font-semibold">{artisan.telephone}</p>
                      </div>
                    </a>
                  )}

                  {(artisan.adresse || artisan.codePostal || artisan.ville) && (
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Adresse</p>
                        <p className="font-semibold text-gray-700">
                          {artisan.adresse && <>{artisan.adresse}<br /></>}
                          {artisan.codePostal && artisan.ville ? `${artisan.codePostal} ${artisan.ville}` : artisan.codePostal || artisan.ville}
                        </p>
                      </div>
                    </div>
                  )}

                  {artisan.horaires && (
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Horaires</p>
                        <p className="font-semibold text-gray-700">{artisan.horaires}</p>
                      </div>
                    </div>
                  )}

                  {artisan.instagram && (
                    <a href={artisan.instagram.startsWith('http') ? artisan.instagram : `https://instagram.com/${artisan.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-pink-600 transition-all p-4 bg-gray-50 rounded-2xl group">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-pink-600 group-hover:text-white transition-all">
                        <span className="text-lg">📸</span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Instagram</p>
                        <p className="font-semibold">{artisan.instagram.replace('@', '@')}</p>
                      </div>
                    </a>
                  )}

                  {artisan.facebook && (
                    <a href={artisan.facebook.startsWith('http') ? artisan.facebook : `https://facebook.com/${artisan.facebook.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-all p-4 bg-gray-50 rounded-2xl group">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <span className="text-lg">👥</span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Facebook</p>
                        <p className="font-semibold">{artisan.facebook}</p>
                      </div>
                    </a>
                  )}

                  {artisan.site && (
                    <a href={artisan.site} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-all p-4 bg-gray-50 rounded-2xl group">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Site web</p>
                        <p className="font-semibold">Consulter le site</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
