import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'nl';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.info': 'Infos',
    'nav.artisans': 'Artisans',
    'nav.sponsors': 'Sponsors',
    'nav.contact': 'Contact',
    'nav.registration': 'J\'envoie mes infos',
    'nav.seeArtisans': 'Voir les artisans',
    'nav.discoverArtisans': 'Découvrir les artisans',
    
    // Home
    'home.edition': 'Édition 2026',
    'home.title': 'L\'artisanat',
    'home.titleHighlight': 'en fleurs',
    'home.subtitle': 'Le Marché Printanier de Ghislenghien fait sa première édition pour célébrer la créativité locale. Rejoignez-nous pour une journée inoubliable.',
    'home.exploreArtisans': 'Explorer les artisans',
    'home.practicalInfo': 'Infos pratiques',
    'home.when': 'Quand',
    'home.where': 'Où',
    'home.featuredArtisans': 'Artisans à la une',
    'home.featuredSubtitle': 'Un aperçu des talents qui seront présents cette année.',
    'home.seeAll': 'Voir tout l\'annuaire',
    'home.areYouArtisan': 'Vous êtes artisan ?',
    'home.joinUs': 'Rejoignez plus de 50 créateurs passionnés pour cette édition printanière. Partagez votre savoir-faire et rencontrez un public curieux.',
    'home.register': 'Je souhaite m\'inscrire',
    
    // Artisans
    'artisans.title': 'L\'Annuaire des',
    'artisans.titleHighlight': 'Artisans',
    'artisans.subtitle': 'Découvrez les {count} créateurs et producteurs locaux qui font la richesse de notre marché cette année.',
    'artisans.search': 'Rechercher par nom ou activité...',
    'artisans.sortBy': 'Trier par',
    'artisans.sortRandom': 'Aléatoire (Équité)',
    'artisans.sortAz': 'Alphabétique (A→Z)',
    'artisans.clear': 'Effacer',
    'artisans.found': '{count} artisans trouvés',
    'artisans.foundOne': '{count} artisan trouvé',
    'artisans.noResults': 'Aucun résultat',
    'artisans.noResultsDesc': 'Essayez de modifier vos critères de recherche ou de filtres.',
    'artisans.reset': 'Réinitialiser tout',
    'artisans.discover': 'Découvrir',
    
    // Registration
    'registration.title': 'J\'envoie mes infos',
    'registration.subtitle': 'Remplissez le formulaire ci-dessous pour présenter votre univers et partager vos informations avec les visiteurs.',
    'registration.section1': 'Votre activité',
    'registration.section2': 'Présentation',
    'registration.section3': 'Photos',
    'registration.section4': 'Contact & Réseaux',
    'registration.commercialName': 'Nom commercial',
    'registration.activity': 'Titre / Activité',
    'registration.categories': 'Catégories (choisissez-en au moins une)',
    'registration.shortDesc': 'Description courte',
    'registration.longDesc': 'Description détaillée',
    'registration.mainPhoto': 'Photo principale',
    'registration.gallery': 'Galerie (0-5 photos)',
    'registration.email': 'Email',
    'registration.phone': 'Téléphone',
    'registration.address': 'Adresse',
    'registration.addressPlaceholder': 'Rue et numéro',
    'registration.postalCode': 'Code postal',
    'registration.city': 'Ville / Localité',
    'registration.cityPlaceholder': 'Ex: Ghislenghien',
    'registration.hours': 'Horaires d\'ouverture',
    'registration.hoursPlaceholder': 'Ex: Lun-Ven 9h-18h',
    'registration.website': 'Site web',
    'registration.facebook': 'Facebook',
    'registration.social': 'Instagram',
    'registration.consent': 'J\'autorise l\'organisation du Marché Printanier à utiliser mes photos et informations pour la promotion de l\'événement sur le site web et les réseaux sociaux.',
    'registration.submit': 'Envoyer mes informations',
    'registration.success': 'Merci pour votre envoi !',
    'registration.successDesc': 'Vos informations "<strong>{name}</strong>" ont bien été reçues. Elles seront publiées sur le site après validation.',
    'registration.another': 'Envoyer d\'autres informations',
    'registration.backHome': 'Retour à l\'accueil',
    
    // Info
    'info.title': 'Infos pratiques',
    'info.date': 'Date',
    'info.hours': 'Horaires',
    'info.location': 'Lieu',
    'info.entry': 'Entrée',
    'info.details': 'Détails',
    'info.eventLocation': 'Lieu de l\'événement',
    'info.onSite': 'Sur place',
    'info.inflatableCastle': 'Château gonflable pour les enfants',
    'info.foodOnSite': 'Restauration sur place',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.titleHighlight': 'nous',
    'contact.subtitle': 'Une question sur l\'événement ? Une proposition de partenariat ? Nous vous répondrons avec plaisir.',
    'contact.name': 'Votre nom',
    'contact.namePlaceholder': 'Jean Dupont',
    'contact.email': 'Votre email',
    'contact.emailPlaceholder': 'jean@example.com',
    'contact.phone': 'Téléphone (optionnel)',
    'contact.phonePlaceholder': '+32 123 45 67 89',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'Sélectionnez un sujet',
    'contact.subjectGeneral': 'Question générale',
    'contact.subjectPartnership': 'Partenariat',
    'contact.subjectPress': 'Presse',
    'contact.subjectArtisan': 'Inscription artisan',
    'contact.subjectOther': 'Autre',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Comment pouvons-nous vous aider ?',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé !',
    'contact.successDesc': 'Merci pour votre message. Nous vous répondrons dans les plus brefs délais.',
    'contact.error': 'Erreur',
    'contact.errorDesc': 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.',
    'contact.generalEmail': 'Email général',
    'contact.pressPartnerships': 'Presse & Partenariats',
    'contact.responseTime': 'Réponse sous 48h',
    'contact.followUs': 'Suivez-nous',
    'contact.required': 'Champ obligatoire',
    
    // Cookies
    'cookies.title': 'Nous utilisons des cookies',
    'cookies.description': 'Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. En continuant à utiliser ce site, vous acceptez notre utilisation des cookies.',
    'cookies.accept': 'Tout accepter',
    'cookies.decline': 'Refuser',
    'cookies.privacyPolicy': 'Politique de confidentialité',
    'cookies.cookiePolicy': 'Politique des cookies',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur est survenue',
  },
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.info': 'Info',
    'nav.artisans': 'Ambachtslieden',
    'nav.sponsors': 'Sponsors',
    'nav.contact': 'Contact',
    'nav.registration': 'Ik stuur mijn gegevens',
    'nav.seeArtisans': 'Bekijk de ambachtslieden',
    'nav.discoverArtisans': 'Ontdek de ambachtslieden',
    
    // Home
    'home.edition': 'Editie 2026',
    'home.title': 'Het ambacht',
    'home.titleHighlight': 'in bloei',
    'home.subtitle': 'De Lente Markt van Ghislenghien organiseert zijn eerste editie om lokale creativiteit te vieren. Sluit je bij ons aan voor een onvergetelijke dag.',
    'home.exploreArtisans': 'Verken de ambachtslieden',
    'home.practicalInfo': 'Praktische info',
    'home.when': 'Wanneer',
    'home.where': 'Waar',
    'home.featuredArtisans': 'Uitgelichte ambachtslieden',
    'home.featuredSubtitle': 'Een voorproefje van de talenten die dit jaar aanwezig zullen zijn.',
    'home.seeAll': 'Bekijk het volledige register',
    'home.areYouArtisan': 'Bent u een ambachtsman?',
    'home.joinUs': 'Sluit je aan bij meer dan 50 gepassioneerde makers voor deze lenteeditie. Deel je knowhow en ontmoet een nieuwsgierig publiek.',
    'home.register': 'Ik wil me inschrijven',
    
    // Artisans
    'artisans.title': 'Het Register van',
    'artisans.titleHighlight': 'Ambachtslieden',
    'artisans.subtitle': 'Ontdek de {count} lokale makers en producenten die de rijkdom van onze markt dit jaar vormen.',
    'artisans.search': 'Zoeken op naam of activiteit...',
    'artisans.sortBy': 'Sorteren op',
    'artisans.sortRandom': 'Willekeurig (Eerlijk)',
    'artisans.sortAz': 'Alfabetisch (A→Z)',
    'artisans.clear': 'Wissen',
    'artisans.found': '{count} ambachtslieden gevonden',
    'artisans.foundOne': '{count} ambachtsman gevonden',
    'artisans.noResults': 'Geen resultaten',
    'artisans.noResultsDesc': 'Probeer uw zoekcriteria of filters te wijzigen.',
    'artisans.reset': 'Alles resetten',
    'artisans.discover': 'Ontdekken',
    
    // Registration
    'registration.title': 'Ik stuur mijn gegevens',
    'registration.subtitle': 'Vul het onderstaande formulier in om uw universum te presenteren en uw informatie met bezoekers te delen.',
    'registration.section1': 'Uw activiteit',
    'registration.section2': 'Presentatie',
    'registration.section3': 'Foto\'s',
    'registration.section4': 'Contact & Netwerken',
    'registration.commercialName': 'Handelsnaam',
    'registration.activity': 'Titel / Activiteit',
    'registration.categories': 'Categorieën (kies er minstens één)',
    'registration.shortDesc': 'Korte beschrijving',
    'registration.longDesc': 'Gedetailleerde beschrijving',
    'registration.mainPhoto': 'Hoofdfoto',
    'registration.gallery': 'Galerij (0-5 foto\'s)',
    'registration.email': 'E-mail',
    'registration.phone': 'Telefoon (optioneel)',
    'registration.phonePlaceholder': '+32 123 45 67 89',
    'registration.address': 'Adres',
    'registration.addressPlaceholder': 'Straat en nummer',
    'registration.postalCode': 'Postcode',
    'registration.city': 'Stad / Plaats',
    'registration.cityPlaceholder': 'Bijv: Ghislenghien',
    'registration.hours': 'Openingsuren',
    'registration.hoursPlaceholder': 'Bijv: Ma-Vr 9u-18u',
    'registration.website': 'Website',
    'registration.facebook': 'Facebook',
    'registration.social': 'Instagram',
    'registration.consent': 'Ik geef de organisatie van de Lente Markt toestemming om mijn foto\'s en informatie te gebruiken voor de promotie van het evenement op de website en sociale media.',
    'registration.submit': 'Mijn gegevens verzenden',
    'registration.success': 'Bedankt voor uw verzending!',
    'registration.successDesc': 'Uw informatie "<strong>{name}</strong>" is goed ontvangen. Ze zullen op de website worden gepubliceerd na validatie.',
    'registration.another': 'Andere informatie verzenden',
    'registration.backHome': 'Terug naar home',
    
    // Info
    'info.title': 'Praktische info',
    'info.date': 'Datum',
    'info.hours': 'Uren',
    'info.location': 'Locatie',
    'info.entry': 'Toegang',
    'info.details': 'Details',
    'info.eventLocation': 'Locatie van het evenement',
    'info.onSite': 'Ter plaatse',
    'info.inflatableCastle': 'Opblaaskasteel voor kinderen',
    'info.foodOnSite': 'Restauratie ter plaatse',
    
    // Contact
    'contact.title': 'Contacteer ons',
    'contact.titleHighlight': 'ons',
    'contact.subtitle': 'Een vraag over het evenement? Een partnerschapsvoorstel? We beantwoorden u graag.',
    'contact.name': 'Uw naam',
    'contact.namePlaceholder': 'Jan Janssen',
    'contact.email': 'Uw e-mail',
    'contact.emailPlaceholder': 'jan@voorbeeld.be',
    'contact.phone': 'Telefoon (optioneel)',
    'contact.phonePlaceholder': '+32 123 45 67 89',
    'contact.subject': 'Onderwerp',
    'contact.subjectPlaceholder': 'Selecteer een onderwerp',
    'contact.subjectGeneral': 'Algemene vraag',
    'contact.subjectPartnership': 'Partnerschap',
    'contact.subjectPress': 'Pers',
    'contact.subjectArtisan': 'Ambachtsman inschrijving',
    'contact.subjectOther': 'Andere',
    'contact.message': 'Bericht',
    'contact.messagePlaceholder': 'Hoe kunnen we u helpen?',
    'contact.send': 'Bericht verzenden',
    'contact.sending': 'Verzenden...',
    'contact.success': 'Bericht verzonden!',
    'contact.successDesc': 'Bedankt voor uw bericht. We zullen u zo spoedig mogelijk antwoorden.',
    'contact.error': 'Fout',
    'contact.errorDesc': 'Er is een fout opgetreden bij het verzenden. Probeer het opnieuw.',
    'contact.generalEmail': 'Algemeen e-mail',
    'contact.pressPartnerships': 'Pers & Partnerschappen',
    'contact.responseTime': 'Antwoord binnen 48u',
    'contact.followUs': 'Volg ons',
    'contact.required': 'Verplicht veld',
    
    // Cookies
    'cookies.title': 'Wij gebruiken cookies',
    'cookies.description': 'Deze site gebruikt cookies om uw navigatie-ervaring te verbeteren en het verkeer te analyseren. Door deze site te blijven gebruiken, accepteert u ons gebruik van cookies.',
    'cookies.accept': 'Alles accepteren',
    'cookies.decline': 'Weigeren',
    'cookies.privacyPolicy': 'Privacybeleid',
    'cookies.cookiePolicy': 'Cookiebeleid',
    
    // Common
    'common.loading': 'Laden...',
    'common.error': 'Er is een fout opgetreden',
  },
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string, params?: Record<string, string | number>): string => {
    let translation = translations[language][key] || translations.fr[key] || key;
    
    if (params) {
      Object.keys(params).forEach(param => {
        translation = translation.replace(`{${param}}`, String(params[param]));
      });
    }
    
    return translation;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};
