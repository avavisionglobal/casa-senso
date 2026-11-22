// Plan du site (22.11.2026), généré à chaque build : les réalisations s'y ajoutent d'elles-mêmes.
// Une nouvelle page doit être ajoutée à la liste ci-dessous. La 404 et les aperçus n'y figurent pas.
import type { APIRoute } from 'astro';
import { projets } from '../data/projets';
import { pageUrl } from '../lib/schema';

const chemins = [
  '', '/agence', '/prestations', '/prestations/particuliers', '/prestations/professionnels',
  '/realisations', ...projets.map((p) => `/realisations/${p.slug}`),
  '/contact', '/avent', '/mentions-legales', '/politique-de-confidentialite',
];

export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${chemins.map((c) => `  <url><loc>${pageUrl(c)}</loc></url>`).join('\n')}\n</urlset>\n`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
