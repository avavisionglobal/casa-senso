// Typographie française (18.11.2026), appliquée au HTML de chaque page au moment du build.
// Problème corrigé : avec une espace normale avant « : ; ! ? » ou après « « », le navigateur peut
// couper la ligne juste avant la ponctuation, qui se retrouve seule en début de ligne.
// On remplace ces espaces par une espace fine insécable (U+202F), comme en typographie française.
// Aussi : numéros de téléphone et « CHF » + montant ne se coupent plus.
// Seuls le texte visible et quelques attributs lus par les gens (alt, title, placeholder…) sont
// touchés ; jamais l'intérieur de <script>, <style>, <textarea> ou <pre>.
import { defineMiddleware } from 'astro:middleware';

const FINE = ' ';
const INSECABLE = ' ';

export function typo(s: string): string {
  return s
    .replace(/(?:[  ]|&nbsp;)+([:;!?»])/g, `${FINE}$1`)
    .replace(/«(?:[  ]|&nbsp;)+/g, `«${FINE}`)
    .replace(/\+\d{2}(?:[  ]\d{2,3}){4}/g, (m) => m.replace(/ /g, INSECABLE))
    .replace(/\b0\d{2}(?: \d{3})(?: \d{2}){2}\b/g, (m) => m.replace(/ /g, INSECABLE))
    .replace(/\bCHF /g, `CHF${INSECABLE}`);
}

const ATTRS = /(\s(?:alt|title|placeholder|aria-label|content|data-aide)=")([^"]*)(")/g;
const BRUT = new Set(['script', 'style', 'textarea', 'pre']);
const BALISE = /<(\/?)([a-zA-Z][\w-]*)[^>]*>|<!--[\s\S]*?-->/g;

export function typoHtml(html: string): string {
  let out = '';
  let i = 0;
  let brut: string | null = null;
  for (const m of html.matchAll(BALISE)) {
    const texte = html.slice(i, m.index);
    out += brut ? texte : typo(texte);
    const [entier, fermant, nom] = m;
    const n = nom?.toLowerCase();
    if (brut) {
      if (fermant && n === brut) brut = null;
      out += entier;
    } else {
      if (!fermant && n && BRUT.has(n)) brut = n;
      out += n ? entier.replace(ATTRS, (_a, d, v, f) => d + typo(v) + f) : entier;
    }
    i = (m.index ?? 0) + entier.length;
  }
  out += brut ? html.slice(i) : typo(html.slice(i));
  return out;
}

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  if (!(res.headers.get('content-type') ?? '').includes('text/html')) return res;
  const html = await res.text();
  return new Response(typoHtml(html), { status: res.status, statusText: res.statusText, headers: res.headers });
});
