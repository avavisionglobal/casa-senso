// Calendrier de l'Avent 2026 (page /avent). Option A « La maison aux volets », choisie par Laetitia
// le 19.11.2026 (e-mail « on est fan des deux mais on a une préférence pour la maison »).
//
// Une ligne par jour. À remplir au fil de décembre, quand la planche du jour est publiée sur Instagram :
//   titre  : le nom de la planche (ex. « Le salon vert »)
//   texte  : une ou deux phrases, à la première personne de Laetitia
//   image  : la planche, importée en haut du fichier (format 4:5 conseillé, ex. 1080 × 1350)
//            import j05 from '../assets/images/avent/jour-05.jpg';  puis  image: j05
//   post   : l'adresse du post Instagram du jour
// Tant qu'un champ est vide, la page affiche un remplaçant sobre (fenêtre éclairée, lien vers le profil).
//
// Surprise : au moment du build, les jours postérieurs à la date du build (heure de Zurich) sont publiés
// sans leur contenu. Une planche n'apparaît donc dans le code du site qu'à partir de son jour, après
// une nouvelle mise en ligne. Variable AVENT_JUSQUA=24 pour tout publier (aperçu interne seulement).
import type { ImageMetadata } from 'astro';

export interface JourAvent {
  n: number;
  titre?: string;
  texte?: string;
  image?: ImageMetadata;
  post?: string;
}

export const ANNEE = 2026;
export const INSTAGRAM = 'https://www.instagram.com/casa_senso.ch/';

export const jours: JourAvent[] = Array.from({ length: 24 }, (_, i) => ({ n: i + 1 }));
