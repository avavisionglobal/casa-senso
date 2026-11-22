// Données structurées schema.org (22.11.2026). Un seul graphe JSON-LD par page, écrit par Base.astro :
// l'entreprise, sa fondatrice et le site (identiques partout), puis la page, son fil d'Ariane et ce que
// la page ajoute (prestation, liste de réalisations, réalisation). Les nœuds se citent par leur « @id ».
// Coordonnées : src/data/site.ts (mêmes valeurs que les mentions légales).
import { site } from '../data/site';
import { services } from '../data/prestations';

export const instagram = 'https://www.instagram.com/casa_senso.ch/';
export const abs = (chemin: string) => (chemin.startsWith('http') ? chemin : site.url + chemin);
export const pageUrl = (chemin: string) => (chemin ? site.url + chemin : `${site.url}/`);

export const ids = {
  entreprise: `${site.url}/#entreprise`,
  fondatrice: `${site.url}/#laetitia`,
  site: `${site.url}/#site`,
  page: (chemin: string) => `${pageUrl(chemin)}#page`,
  fil: (chemin: string) => `${pageUrl(chemin)}#fil`,
};

export const zone = [
  { '@type': 'AdministrativeArea', name: 'Canton de Neuchâtel' },
  { '@type': 'Place', name: 'Suisse romande' },
];

export const entreprise = {
  '@type': 'LocalBusiness',
  '@id': ids.entreprise,
  name: site.name,
  url: `${site.url}/`,
  description: "Aménagement intérieur et décoration à Neuchâtel, pour les particuliers et les professionnels : conception, choix du mobilier et des matières, coordination et installation.",
  slogan: "De l'idée à la réalisation",
  logo: { '@type': 'ImageObject', url: abs('/logo.png'), width: 512, height: 512 },
  image: abs('/og-image.jpg'),
  telephone: site.phoneHref.replace('tel:', ''),
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.rue,
    postalCode: '2035',
    addressLocality: 'Corcelles',
    addressRegion: 'NE',
    addressCountry: 'CH',
  },
  areaServed: zone,
  founder: { '@id': ids.fondatrice },
  sameAs: [instagram],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: site.phoneHref.replace('tel:', ''),
    email: site.email,
    availableLanguage: 'fr',
    areaServed: 'CH',
  },
  knowsAbout: ['Aménagement intérieur', "Décoration d'intérieur", 'Sélection de mobilier', 'Rénovation intérieure', "Aménagement d'espaces professionnels"],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.t, description: s.items.join('. ') + '.', provider: { '@id': ids.entreprise } },
    })),
  },
};

export const fondatrice = {
  '@type': 'Person',
  '@id': ids.fondatrice,
  name: site.person,
  jobTitle: "Fondatrice, décoratrice d'intérieur",
  url: pageUrl('/agence'),
  worksFor: { '@id': ids.entreprise },
};

export const siteWeb = {
  '@type': 'WebSite',
  '@id': ids.site,
  name: site.name,
  url: `${site.url}/`,
  inLanguage: 'fr-CH',
  publisher: { '@id': ids.entreprise },
};

// Noms du fil d'Ariane, par segment d'adresse. Une réalisation donne son propre nom (prop « fil » de Base).
export const nomsFil: Record<string, string> = {
  agence: "L'agence",
  prestations: 'Prestations',
  particuliers: 'Particuliers',
  professionnels: 'Professionnels',
  realisations: 'Réalisations',
  contact: 'Contact',
  avent: "Calendrier de l'Avent",
  'mentions-legales': 'Mentions légales',
  'politique-de-confidentialite': 'Politique de confidentialité',
};
