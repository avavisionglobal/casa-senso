// Réalisations (13.11.2026). Sources : photos pro et « avant » (SwissTransfer du 08.11), documents « mon histoire »
// et « projet restaurant » (12.11). Textes entre guillemets : les mots de Laetitia. Autres textes : proposés par Contrast, à valider.
import type { ImageMetadata } from 'astro';

import cannes_avant_img_3629 from '../assets/images/projets/cannes/avant-img_3629.jpg';
import cannes_avant_img_3630 from '../assets/images/projets/cannes/avant-img_3630.jpg';
import cannes_avant_img_9100 from '../assets/images/projets/cannes/avant-img_9100.jpg';
import cannes_avant_img_9104 from '../assets/images/projets/cannes/avant-img_9104.jpg';
import cannes_avant_img_9111 from '../assets/images/projets/cannes/avant-img_9111.jpg';
import cannes_hd_10 from '../assets/images/projets/cannes/hd-10.jpg';
import cannes_hd_12 from '../assets/images/projets/cannes/hd-12.jpg';
import cannes_hd_15 from '../assets/images/projets/cannes/hd-15.jpg';
import cannes_hd_18 from '../assets/images/projets/cannes/hd-18.jpg';
import cannes_hd_22 from '../assets/images/projets/cannes/hd-22.jpg';
import cannes_hd_23 from '../assets/images/projets/cannes/hd-23.jpg';
import cannes_hd_25 from '../assets/images/projets/cannes/hd-25.jpg';
import cannes_hd_27 from '../assets/images/projets/cannes/hd-27.jpg';
import cannes_hd_28 from '../assets/images/projets/cannes/hd-28.jpg';
import cannes_hd_30 from '../assets/images/projets/cannes/hd-30.jpg';
import cannes_hd_31 from '../assets/images/projets/cannes/hd-31.jpg';
import cannes_hd_34 from '../assets/images/projets/cannes/hd-34.jpg';
import cannes_hd_5 from '../assets/images/projets/cannes/hd-5.jpg';
import cannes_hd_6 from '../assets/images/projets/cannes/hd-6.jpg';
import cannes_hd_7 from '../assets/images/projets/cannes/hd-7.jpg';
import maison_avant_image1 from '../assets/images/projets/maison/avant-image1.jpg';
import maison_avant_image12 from '../assets/images/projets/maison/avant-image12.jpg';
import maison_avant_image15 from '../assets/images/projets/maison/avant-image15.jpg';
import maison_avant_image16 from '../assets/images/projets/maison/avant-image16.jpg';
import maison_avant_image20 from '../assets/images/projets/maison/avant-image20.jpg';
import maison_avant_image28 from '../assets/images/projets/maison/avant-image28.jpg';
import maison_dsc02414 from '../assets/images/projets/maison/dsc02414.jpg';
import maison_dsc02422 from '../assets/images/projets/maison/dsc02422.jpg';
import maison_dsc02427 from '../assets/images/projets/maison/dsc02427.jpg';
import maison_dsc02430 from '../assets/images/projets/maison/dsc02430.jpg';
import maison_dsc02433 from '../assets/images/projets/maison/dsc02433.jpg';
import maison_dsc02450 from '../assets/images/projets/maison/dsc02450.jpg';
import maison_dsc02454 from '../assets/images/projets/maison/dsc02454.jpg';
import maison_dsc02456 from '../assets/images/projets/maison/dsc02456.jpg';
import maison_dsc02465 from '../assets/images/projets/maison/dsc02465.jpg';
import maison_dsc02504_hdr from '../assets/images/projets/maison/dsc02504-hdr.jpg';
import maison_dsc02536 from '../assets/images/projets/maison/dsc02536.jpg';
import maison_dsc02559 from '../assets/images/projets/maison/dsc02559.jpg';
import maison_dsc02580 from '../assets/images/projets/maison/dsc02580.jpg';
import maison_dsc02597 from '../assets/images/projets/maison/dsc02597.jpg';
import maison_dsc02593 from '../assets/images/projets/maison/dsc02593.jpg';
import ichi_ichi_1 from '../assets/images/projets/ichi/ichi-1.jpg';
import ichi_ichi_10 from '../assets/images/projets/ichi/ichi-10.jpg';
import ichi_ichi_12 from '../assets/images/projets/ichi/ichi-12.jpg';
import ichi_ichi_14 from '../assets/images/projets/ichi/ichi-14.jpg';
import ichi_ichi_15 from '../assets/images/projets/ichi/ichi-15.jpg';
import ichi_ichi_17 from '../assets/images/projets/ichi/ichi-17.jpg';
import ichi_ichi_18 from '../assets/images/projets/ichi/ichi-18.jpg';
import ichi_ichi_19 from '../assets/images/projets/ichi/ichi-19.jpg';
import ichi_ichi_2 from '../assets/images/projets/ichi/ichi-2.jpg';
import ichi_ichi_20 from '../assets/images/projets/ichi/ichi-20.jpg';
import ichi_ichi_21 from '../assets/images/projets/ichi/ichi-21.jpg';
import ichi_ichi_22 from '../assets/images/projets/ichi/ichi-22.jpg';
import ichi_ichi_23 from '../assets/images/projets/ichi/ichi-23.jpg';
import ichi_ichi_24 from '../assets/images/projets/ichi/ichi-24.jpg';
import ichi_ichi_3 from '../assets/images/projets/ichi/ichi-3.jpg';

export interface Projet {
  slug: string; titre: string; titreHtml: string; type: string; lieu: string; missions: string[];
  couverture: ImageMetadata; haut: ImageMetadata[]; rangee: ImageMetadata[]; galerie: ImageMetadata[];
  avant?: ImageMetadata[]; avantTitre?: string;
  accroche: string; recit: { p: string; citation?: boolean }[]; a_valider: string;
}

export const projets: Projet[] = [
  {
    slug: 'appartement-cannes', titre: "L'appartement de Cannes", titreHtml: "L'appartement <em>de Cannes</em>",
    type: 'Appartement', lieu: 'Cannes, France',
    missions: ['Aménagement intérieur', 'Décoration & mise en valeur', 'Accompagnement clé en main'],
    couverture: cannes_hd_28,
    haut: [cannes_hd_28, cannes_hd_23, cannes_hd_15],
    rangee: [cannes_hd_25, cannes_hd_22, cannes_hd_30, cannes_hd_5],
    galerie: [cannes_hd_31, cannes_hd_34, cannes_hd_7, cannes_hd_12, cannes_hd_18, cannes_hd_6, cannes_hd_10, cannes_hd_27],
    avant: [cannes_avant_img_9104, cannes_avant_img_9100, cannes_avant_img_9111, cannes_avant_img_3629, cannes_avant_img_3630], avantTitre: 'Avant et pendant les travaux',
    accroche: "Des pièces cloisonnées, de la moquette, peu de lumière… puis un appartement entièrement repensé.",
    recit: [
      { p: "« Notre appartement dans le Sud, que j'ai fait entièrement. »", citation: true },
      { p: "Au départ, des pièces cloisonnées, de la moquette, peu de lumière. Alors on a tout ouvert, jusqu'aux plafonds, et la lumière est revenue, pièce après pièce." },
      { p: "Une cuisine ouverte, chêne et marbre, au cœur de l'appartement. Des chambres apaisées, un mur vert forêt, des salles d'eau en bois et laiton." },
    ],
    a_valider: "Citation : son e-mail du 08.11. Récit : textes proposés par Contrast (repris du post Avant / après), à valider. Adresse non publiée.",
  },
  {
    slug: 'maison-de-famille', titre: 'La maison de famille', titreHtml: 'La maison <em>de famille</em>',
    type: 'Maison · rénovation complète', lieu: 'Canton de Neuchâtel',
    missions: ['Rénovation complète', 'Aménagement intérieur', 'Décoration & mise en valeur'],
    couverture: maison_dsc02450,
    haut: [maison_dsc02422, maison_dsc02450, maison_dsc02414],
    rangee: [maison_dsc02427, maison_dsc02504_hdr, maison_dsc02580, maison_dsc02536],
    galerie: [maison_dsc02430, maison_dsc02433, maison_dsc02454, maison_dsc02456, maison_dsc02465, maison_dsc02593, maison_dsc02559, maison_dsc02597],
    avant: [maison_avant_image12, maison_avant_image15, maison_avant_image16, maison_avant_image20, maison_avant_image28, maison_avant_image1], avantTitre: 'Le chantier',
    accroche: "Une vieille bâtisse, fatiguée, abîmée, mais tellement pleine d'histoire et de charme.",
    recit: [
      { p: "« Là où certains voyaient des murs à refaire, moi, je voyais déjà mille possibilités. »", citation: true },
      { p: "« Pas d'architecte, un budget limité, beaucoup d'huile de coude… Nous nous sommes lancés dans une rénovation complète. J'ai cassé, démoli, évacué des tonnes de gravats, manié le marteau-piqueur. »" },
      { p: "« Je ne voulais pas simplement rénover une maison. Je voulais lui donner une âme. Alors j'ai cherché des matériaux différents, des objets qui avaient déjà vécu, de vieilles briques… Jusqu'à dénicher un ancien parquet de locomotives ! »" },
      { p: "« Et puis vient ce moment magique où tout prend vie… Ce n'est plus un chantier. C'est un chez-soi. Une histoire. Une émotion. »" },
    ],
    a_valider: "Textes : ses mots, document « mon histoire » (12.11), raccourcis. Lieu volontairement limité au canton (maison familiale).",
  },
  {
    slug: 'ichi-ramen-shop', titre: 'ICHI Ramen Shop', titreHtml: 'ICHI <em>Ramen</em> Shop',
    type: 'Restaurant', lieu: 'À confirmer',
    missions: ['Décoration & mise en valeur', 'Création d’ambiances'],
    couverture: ichi_ichi_17,
    haut: [ichi_ichi_23, ichi_ichi_17, ichi_ichi_1],
    rangee: [ichi_ichi_10, ichi_ichi_12, ichi_ichi_3, ichi_ichi_2],
    galerie: [ichi_ichi_18, ichi_ichi_19, ichi_ichi_20, ichi_ichi_21, ichi_ichi_22, ichi_ichi_24, ichi_ichi_14, ichi_ichi_15],
    accroche: "Celui où les idées deviennent réalité, où chaque détail trouve sa place et où un rêve prend enfin vie.",
    recit: [
      { p: "« Derrière ce rêve se trouve une personne exceptionnelle, qui compte énormément pour moi. Alors forcément, quand elle m'a confié son projet, je l'ai pris très à cœur. »" },
      { p: "« Il a fallu écouter ses envies, comprendre sa culture, respecter son histoire, imaginer des ambiances, faire des choix… Et surtout trouver cette petite touche qui fait toute la différence. »", citation: true },
      { p: "« Une magnifique collaboration, faite de confiance, de partage, d'idées et de beaucoup de cœur. Le résultat ? Je crois qu'il parle de lui-même… »" },
    ],
    a_valider: "Textes : ses mots, document « projet restaurant » (12.11). Accord du restaurant, ville et mission exacte à obtenir avant mise en ligne. Gros plans d'affiches manga écartés (œuvres de tiers).",
  },
];
