
export interface Artisan {
  slug: string;
  nom: string;
  titre: string;
  categories: string[];
  description_courte: string;
  description_longue?: string;
  email: string;
  telephone?: string;
  adresse?: string;
  codePostal?: string;
  ville?: string;
  horaires?: string;
  site?: string;
  instagram?: string;
  facebook?: string;
  photo_principale: string;
  galerie?: string[];
  featured?: boolean;
}

export interface Sponsor {
  id: string;
  nom: string;
  niveau: 'Or' | 'Argent' | 'Bronze';
  logo: string;
  lien: string;
  description?: string;
}

export interface EventInfo {
  titre: string;
  date: string;
  horaires: string;
  lieu: string;
  entree: string;
  details: string[];
}
