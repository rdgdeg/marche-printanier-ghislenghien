
import React from 'react';
import { SPONSORS } from '../data';

export const Sponsors: React.FC = () => {
  const gold = SPONSORS.filter(s => s.niveau === 'Or');
  const silver = SPONSORS.filter(s => s.niveau === 'Argent');
  const bronze = SPONSORS.filter(s => s.niveau === 'Bronze');

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Nos <span className="text-blue-600">Sponsors</span></h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Grâce à leur soutien, le Marché Printanier continue de grandir et de proposer une expérience de qualité chaque année.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-12 space-y-24">
        {/* Or Section */}
        {gold.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-yellow-400 hidden sm:block"></span>
              Partenaires Or
              <span className="h-px w-12 bg-yellow-400 hidden sm:block"></span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {gold.map(sponsor => <SponsorCard key={sponsor.id} sponsor={sponsor} />)}
            </div>
          </section>
        )}

        {/* Argent Section */}
        {silver.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-gray-300 hidden sm:block"></span>
              Partenaires Argent
              <span className="h-px w-12 bg-gray-300 hidden sm:block"></span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {silver.map(sponsor => <SponsorCard key={sponsor.id} sponsor={sponsor} />)}
            </div>
          </section>
        )}

        {/* Bronze Section */}
        {bronze.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-orange-300 hidden sm:block"></span>
              Partenaires Bronze
              <span className="h-px w-12 bg-orange-300 hidden sm:block"></span>
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
              {bronze.map(sponsor => <SponsorCard key={sponsor.id} sponsor={sponsor} small />)}
            </div>
          </section>
        )}
      </div>

      <section className="max-w-4xl mx-auto px-4 mt-16 md:mt-32 text-center bg-white rounded-[40px] p-6 md:p-12 shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Devenir partenaire ?</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Associez votre image à un événement local, dynamique et familial. Contactez-nous pour découvrir nos formules de partenariat.
        </p>
        <a href="mailto:partenaires@marcheprintanier.be" className="inline-block bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all">
          Nous contacter
        </a>
      </section>
    </div>
  );
};

const SponsorCard: React.FC<{ sponsor: any, small?: boolean }> = ({ sponsor, small }) => (
  <a 
    href={sponsor.lien} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center"
  >
    <div className={`mb-6 p-4 bg-gray-50 rounded-2xl w-full flex items-center justify-center ${small ? 'h-24' : 'h-32'}`}>
      <img src={sponsor.logo} alt={sponsor.nom} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
    </div>
    <h3 className="font-bold text-gray-800 mb-2">{sponsor.nom}</h3>
    {!small && <p className="text-gray-500 text-sm leading-relaxed">{sponsor.description}</p>}
  </a>
);
