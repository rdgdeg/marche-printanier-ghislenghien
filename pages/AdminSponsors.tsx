import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSponsors, setSponsors } from '../utils/sponsorsStorage';
import { SPONSORS as DEFAULT_SPONSORS } from '../data';
import type { Sponsor } from '../types';

export const AdminSponsors: React.FC = () => {
  const [sponsors, setSponsorsState] = useState<Sponsor[]>([]);
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [lien, setLien] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSponsorsState(getSponsors());
  }, []);

  const saveSponsors = (next: Sponsor[]) => {
    setSponsors(next);
    setSponsorsState(next);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    let logo = logoUrl.trim();
    if (logoFile) {
      const base64 = await fileToBase64(logoFile);
      if (base64) logo = base64;
    }
    if (!logo) {
      setMessage('Ajoutez une image (URL ou fichier).');
      return;
    }
    const newSponsor: Sponsor = {
      id: `sp-${Date.now()}`,
      nom: nom.trim() || 'Sponsor',
      logo,
      lien: lien.trim() || '#',
      ...(description.trim() && { description: description.trim() }),
      ...(email.trim() && { email: email.trim() }),
      ...(telephone.trim() && { telephone: telephone.trim() }),
      ...(adresse.trim() && { adresse: adresse.trim() }),
    };
    saveSponsors([...sponsors, newSponsor]);
    setNom('');
    setDescription('');
    setLogoUrl('');
    setLien('');
    setEmail('');
    setTelephone('');
    setAdresse('');
    setLogoFile(null);
    setMessage('Sponsor ajouté. Il défile sur l’accueil.');
  };

  const handleDelete = (id: string) => {
    saveSponsors(sponsors.filter(s => s.id !== id));
    setMessage('Sponsor supprimé.');
  };

  const handleReset = () => {
    if (window.confirm('Réinitialiser la liste avec les sponsors par défaut ?')) {
      saveSponsors(DEFAULT_SPONSORS);
      setMessage('Liste réinitialisée.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 pb-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Gestion des sponsors</h1>
          <Link to="/" className="text-emerald-600 font-medium hover:underline">← Retour à l’accueil</Link>
        </div>
        <p className="text-gray-600 mb-6">
          Les sponsors ajoutés ici défilent en boucle sur la page d’accueil. Indiquez au moins une image par sponsor (URL ou fichier).
        </p>

        <form onSubmit={handleAdd} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-8">
          <h2 className="font-bold text-gray-800 mb-4">Ajouter un sponsor</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom (optionnel)</label>
              <input
                type="text"
                value={nom}
                onChange={e => setNom(e.target.value)}
                placeholder="Ex: Partenaire"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image – URL</label>
              <input
                type="url"
                value={logoUrl}
                onChange={e => { setLogoUrl(e.target.value); setLogoFile(null); }}
                placeholder="https://..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ou image – fichier</label>
              <input
                type="file"
                accept="image/*"
                onChange={e => {
                  const f = e.target.files?.[0];
                  if (f) { setLogoFile(f); setLogoUrl(''); }
                }}
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:text-emerald-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description (optionnel)</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Courte description du partenaire..."
                rows={2}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lien site web (optionnel)</label>
              <input
                type="url"
                value={lien}
                onChange={e => setLien(e.target.value)}
                placeholder="https://..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email (optionnel)</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="contact@..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone (optionnel)</label>
              <input
                type="tel"
                value={telephone}
                onChange={e => setTelephone(e.target.value)}
                placeholder="+32 ..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adresse (optionnel)</label>
              <input
                type="text"
                value={adresse}
                onChange={e => setAdresse(e.target.value)}
                placeholder="Rue, code postal, ville"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button type="submit" className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
              Ajouter le sponsor
            </button>
          </div>
          {message && <p className="mt-4 text-sm text-emerald-600">{message}</p>}
        </form>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800">Sponsors actuels ({sponsors.length})</h2>
            <button type="button" onClick={handleReset} className="text-xs text-gray-500 hover:text-red-600">
              Réinitialiser
            </button>
          </div>
          <ul className="space-y-4">
            {sponsors.map(s => (
              <li key={s.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-16 h-12 flex-shrink-0 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-100">
                  <img src={s.logo} alt={s.nom} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 truncate">{s.nom}</p>
                  <p className="text-xs text-gray-500 truncate">{s.lien || '—'}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(s.id)}
                  className="text-red-500 text-sm font-medium hover:underline"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          {sponsors.length === 0 && (
            <p className="text-gray-500 text-sm py-4">Aucun sponsor. Utilisez le formulaire ci-dessus ou réinitialisez.</p>
          )}
        </div>
      </div>
    </div>
  );
};

function fileToBase64(file: File): Promise<string | null> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}
