
import { Artisan, Sponsor, EventInfo } from './types';

export const CATEGORIES = [
  "Bougies & senteurs",
  "Bijoux",
  "Déco & céramique",
  "Textile & accessoires",
  "Gourmandises",
  "Illustration & papeterie",
  "Zéro déchet",
  "Fleurs & décoration",
  "Bien-être",
  "Spiritueux & boissons",
  "Gravure & impression"
];

export const ARTISANS: Artisan[] = [
  {
    slug: 'philsosel',
    nom: 'Philsosel',
    titre: 'Créatrice de fées, de petites maisons féeriques pour oiseaux et fées, de petits montages printaniers et de bijoux pour adultes et enfants',
    categories: ['Déco & céramique', 'Bijoux'],
    description_courte: 'Créations féeriques : maisons pour oiseaux et fées, montages printaniers et bijoux pour toute la famille.',
    description_longue: 'Philsosel crée un univers magique avec des maisons féeriques pour oiseaux et fées, des montages printaniers délicats et des bijoux uniques pour adultes et enfants. Chaque création est pensée pour apporter une touche de féerie dans votre quotidien.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/philsosel/800/600',
    featured: true
  },
  {
    slug: 'valhalla-bar',
    nom: 'Valhalla Bar',
    titre: 'Liqueurs et spiritueux 100% belge et local de chez Gervin',
    categories: ['Spiritueux & boissons', 'Gourmandises'],
    description_courte: 'Liqueurs et spiritueux artisanaux 100% belge et local.',
    description_longue: 'Valhalla Bar propose une sélection de liqueurs et spiritueux artisanaux 100% belges et locaux, créés par Gervin. Découvrez des saveurs authentiques et des créations uniques.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/valhalla/800/600',
    featured: true
  },
  {
    slug: 'reve-creations',
    nom: 'Rêve Créations',
    titre: 'Animatrice d\'ateliers couture (Ath et Ellezelles) et créatrice textile personnalisée',
    categories: ['Textile & accessoires'],
    description_courte: 'Ateliers couture et créations textiles personnalisées.',
    description_longue: 'Rêve Créations anime des ateliers couture à Ath et Ellezelles et crée des pièces textiles personnalisées. Partagez votre passion pour la couture et découvrez des créations uniques.',
    email: '',
    ville: 'Ath, Ellezelles',
    photo_principale: 'https://picsum.photos/seed/reve/800/600',
    featured: true
  },
  {
    slug: 'bmoon',
    nom: 'B\'moon',
    titre: 'Création de bijoux en acier inoxydable pierre naturelle coffret bien être deco',
    categories: ['Bijoux', 'Bien-être', 'Déco & céramique'],
    description_courte: 'Bijoux en acier inoxydable avec pierres naturelles, coffrets bien-être et décoration.',
    description_longue: 'B\'moon crée des bijoux élégants en acier inoxydable agrémentés de pierres naturelles. La marque propose également des coffrets bien-être et des objets de décoration pour votre intérieur.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/bmoon/800/600',
    featured: true
  },
  {
    slug: 'asteria',
    nom: 'Astéria',
    titre: 'Bougies artisanales, bougies gourmandes',
    categories: ['Bougies & senteurs'],
    description_courte: 'Bougies artisanales et bougies gourmandes pour parfumer votre intérieur.',
    description_longue: 'Astéria propose une collection de bougies artisanales et bougies gourmandes, créées avec soin pour apporter chaleur et douceur à votre foyer. Des senteurs délicates et gourmandes pour tous les goûts.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/asteria/800/600',
    featured: true
  },
  {
    slug: 'astrantia',
    nom: 'Astrantia',
    titre: 'Fleurs séchées',
    categories: ['Fleurs & décoration'],
    description_courte: 'Compositions et bouquets de fleurs séchées pour une décoration durable.',
    description_longue: 'Astrantia crée de magnifiques compositions et bouquets de fleurs séchées. Une décoration naturelle et durable qui apporte une touche de poésie à votre intérieur toute l\'année.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/astrantia/800/600',
    featured: false
  },
  {
    slug: 'larbre-a-saucissons',
    nom: 'L\'arbre à saucissons',
    titre: 'Saucissons et tapenades diverses',
    categories: ['Gourmandises'],
    description_courte: 'Saucissons artisanaux et tapenades variées pour vos apéritifs.',
    description_longue: 'L\'arbre à saucissons propose une sélection de saucissons artisanaux et de tapenades diverses. Des produits de qualité pour vos apéritifs et repas conviviaux.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/saucissons/800/600',
    featured: false
  },
  {
    slug: 'press-on-nails',
    nom: 'Press on nails',
    titre: 'Ongles en gel réutilisables',
    categories: ['Bien-être'],
    description_courte: 'Ongles en gel réutilisables pour un look parfait au quotidien.',
    description_longue: 'Press on nails propose des ongles en gel réutilisables, faciles à poser et à retirer. Un moyen pratique et économique d\'avoir des ongles parfaitement manucurés.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/nails/800/600',
    featured: false
  },
  {
    slug: 'atelier-keyla-co',
    nom: 'L\'atelier de Keyla & Co',
    titre: 'Articles cousus main, foulards, pochettes à livres, sacs, couvertures bébé, bavoirs, portes carrés, bouillote et cold pack, articles sublimés ou personnalisés comme verre, tasses, pochettes et sacs, articles bébé comme doudous, capes de bains, bavoirs, foulards pour animal de compagnie',
    categories: ['Textile & accessoires'],
    description_courte: 'Créations textiles cousues main : accessoires, articles bébé et personnalisés.',
    description_longue: 'L\'atelier de Keyla & Co crée à la main une large gamme d\'articles textiles : foulards, pochettes à livres, sacs, articles pour bébé (couvertures, bavoirs, doudous, capes de bain), bouillottes et cold packs. La marque propose également des articles personnalisés et sublimés (verres, tasses, pochettes, sacs) ainsi que des foulards pour animaux de compagnie.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/keyla/800/600',
    featured: true
  },
  {
    slug: 'atelier-bonpa',
    nom: 'L\'atelier de Bonpa',
    titre: 'Gravures sur bois, découpe sur bois, création artistique en bois et impression 3D',
    categories: ['Gravure & impression', 'Déco & céramique'],
    description_courte: 'Gravures et découpes sur bois, créations artistiques et impressions 3D.',
    description_longue: 'L\'atelier de Bonpa allie tradition et modernité avec des gravures et découpes sur bois, des créations artistiques uniques et des impressions 3D. Chaque pièce est réalisée avec passion et précision.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/bonpa/800/600',
    featured: false
  },
  {
    slug: 'nomay-crochet',
    nom: 'Nomay crochet',
    titre: 'Créations à la demande ou modèles existants sur place au crochet',
    categories: ['Textile & accessoires'],
    description_courte: 'Créations au crochet sur mesure ou modèles existants.',
    description_longue: 'Nomay crochet propose des créations au crochet sur mesure ou des modèles existants. Des pièces uniques et personnalisées réalisées avec passion et savoir-faire.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/crochet/800/600',
    featured: false
  },
  {
    slug: 'tissage-la-magie-des-noeuds',
    nom: 'Tis\'Sage, la magie des noeuds',
    titre: 'Création de bijoux en micro-macramé avec pierres naturelles et décos en macramé',
    categories: ['Bijoux', 'Déco & céramique'],
    description_courte: 'Bijoux en micro-macramé avec pierres naturelles et décorations en macramé.',
    description_longue: 'Tis\'Sage crée des bijoux délicats en micro-macramé agrémentés de pierres naturelles, ainsi que des décorations en macramé. L\'art du nœud au service de la beauté et de l\'élégance.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/macrame/800/600',
    featured: true
  },
  {
    slug: 'ateliers-valou',
    nom: 'Ateliers de Valou',
    titre: 'Bijoux et dessins à l\'encre de Chine',
    categories: ['Bijoux', 'Illustration & papeterie'],
    description_courte: 'Bijoux artisanaux et dessins à l\'encre de Chine.',
    description_longue: 'Les Ateliers de Valou proposent des bijoux artisanaux uniques et des dessins réalisés à l\'encre de Chine. Des créations qui allient élégance et art traditionnel.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/valou/800/600',
    featured: false
  },
  {
    slug: 'maison-kaela',
    nom: 'Maison Kaela',
    titre: 'Pâtes à tartiner, confiseries, douceurs artisanales',
    categories: ['Gourmandises'],
    description_courte: 'Pâtes à tartiner, confiseries et douceurs artisanales pour se faire plaisir.',
    description_longue: 'Maison Kaela propose une gamme de pâtes à tartiner, confiseries et douceurs artisanales. Des produits gourmands créés avec soin pour régaler petits et grands.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/kaela/800/600',
    featured: true
  },
  {
    slug: 'bijoux-demonic',
    nom: 'Bijoux Démonic',
    titre: 'Bijoux artisanaux plaques argent pierres naturelles. Pièces et design uniques.',
    categories: ['Bijoux'],
    description_courte: 'Bijoux artisanaux en plaques argent avec pierres naturelles, pièces uniques.',
    description_longue: 'Bijoux Démonic crée des bijoux artisanaux en plaques argent agrémentés de pierres naturelles. Chaque pièce est unique et témoigne d\'un design soigné et original.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/demonic/800/600',
    featured: true
  },
  {
    slug: 'miss-recup',
    nom: 'Miss Récup',
    titre: 'Réalisation de tabliers en jeans recyclés pour des artisans potiers céramistes, vanneries, cuisine, jardinage et autres loisirs',
    categories: ['Textile & accessoires', 'Zéro déchet'],
    description_courte: 'Tabliers en jeans recyclés pour artisans et loisirs créatifs.',
    description_longue: 'Miss Récup transforme des jeans en tabliers pratiques et stylés pour artisans potiers, céramistes, vanniers, cuisine, jardinage et autres loisirs créatifs. Une démarche écologique et créative.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/recup/800/600',
    featured: false
  },
  {
    slug: 'ruche-douche',
    nom: 'De la ruche à la douche',
    titre: 'Miel et savons à base de miel',
    categories: ['Gourmandises', 'Bien-être', 'Zéro déchet'],
    description_courte: 'Miel artisanal et savons naturels à base de miel.',
    description_longue: 'De la ruche à la douche propose du miel artisanal de qualité et des savons naturels à base de miel. Des produits naturels pour votre bien-être et votre gourmandise.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/ruche/800/600',
    featured: true
  },
  {
    slug: 'erable',
    nom: 'L\'érable',
    titre: 'Produits typiquement canadiens',
    categories: ['Gourmandises'],
    description_courte: 'Produits typiquement canadiens pour découvrir les saveurs du Québec.',
    description_longue: 'L\'érable vous fait découvrir les produits typiquement canadiens. Une sélection de spécialités québécoises pour voyager en saveurs.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/erable/800/600',
    featured: false
  },
  {
    slug: 'goodies-kevin',
    nom: 'Les goodies de Kevin',
    titre: 'Goodies en tout genre, casquettes, tasses, etc…',
    categories: ['Textile & accessoires'],
    description_courte: 'Goodies variés : casquettes, tasses et bien plus encore.',
    description_longue: 'Les goodies de Kevin propose une large gamme de goodies : casquettes, tasses et bien d\'autres articles personnalisables pour tous les goûts.',
    email: '',
    photo_principale: 'https://picsum.photos/seed/goodies/800/600',
    featured: false
  }
];

export const SPONSORS: Sponsor[] = [
  {
    id: '1',
    nom: 'Banque Locale',
    niveau: 'Or',
    logo: 'https://picsum.photos/seed/bank/200/100',
    lien: 'https://example.com',
    description: 'Partenaire historique de notre marché printanier.'
  },
  {
    id: '2',
    nom: 'Jardinerie Verduria',
    niveau: 'Argent',
    logo: 'https://picsum.photos/seed/garden/200/100',
    lien: 'https://example.com',
    description: 'Spécialiste du jardin et de la décoration extérieure.'
  },
  {
    id: '3',
    nom: 'Boulangerie du Village',
    niveau: 'Bronze',
    logo: 'https://picsum.photos/seed/bakery/200/100',
    lien: 'https://example.com',
    description: 'Le bon pain artisanal pour vos événements.'
  }
];

export const EVENT_INFO: EventInfo = {
  titre: 'Ghislenghien',
  date: 'Dimanche 03 mai 2026',
  horaires: 'À partir de 10h00',
  lieu: 'Place de Ghislenghien (Belgique)',
  entree: 'Gratuite',
  details: [
    'Château gonflable pour les enfants',
    'Restauration sur place',
    'Parking gratuit à proximité',
    'Accès PMR complet',
    'Espace Food & Drinks locaux',
    'Activités créatives pour enfants toute la journée'
  ]
};
