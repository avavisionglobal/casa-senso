# Casa Senso — dossier client Contrast

Décoratrice d'intérieur, Laetitia Rein (studio@casa-senso.ch). Contact business : Steve Catena (steve_catena@hotmail.com). Site Wix Studio mis en place avec Julien Doutaz (jul.doutaz@gmail.com).

Lire d'abord `docs/decisions-strategie.md`, puis ce bloc. Ouvrir les sources dès qu'une réponse dépend d'un prix, d'un chiffre, d'une citation ou d'un engagement.

## État au 13.11.2026 (fin de journée) : voir le « Point d'étape » de `docs/decisions-strategie.md`
- **Réseaux sociaux** : 12 posts du 17.11.2026 au 25.02.2027 (3 par mois). Couvertures « Le récit » ; Idées déco I1 ; Livre L1/L2 et Moodboard M1/M2 au choix de Laetitia. Icônes des rubriques dans `brand/icones-rubriques/`. Charte à jour : `brand/charte-reseaux-sociaux.md`.
- **Présentation à Laetitia** : https://claude.ai/artifact/1zhTSNExrnU7qs7NMwzeky (partagée par lien ; copie `social/2026-11-strategie-instagram/`). Tutoiement, « première ébauche », on parle de posts et de patterns thématiques.
- **Site** : Astro dans `site/`, reproduction à l'identique de Wix, mise en ligne visée le 20.11 avec la mesure ; points ouverts dans la décision du 13.11.
- **Règle** : Figma d'abord, artefact ensuite ; versions écartées en page 99.

## Ce qui est établi (12.11.2026)

- **Mandat** : offre RE-00131, Pack Lancement, trois mois, CHF 2'000 moins remise partenariat CHF 500 = CHF 1'500, exonéré de TVA, vidéo offerte. Validée par mail le 04.11.2026 ; contrat signé remis en main propre prévu le 10.11.2026 (à confirmer). Source : `~/Downloads/Contrast_CasaSenso_Offre_RE-00131.pdf`, fil Gmail « Suite à notre séance — proposition pour les trois premiers mois ».
- **Prestations** : amélioration technique du site pour le référencement ; création et paramétrage des comptes publicitaires ; gestion et création de contenu réseaux sociaux ; création et suivi des campagnes ; une vidéo.
- **Budget pub** : CHF 300 à 500 par mois, payé par Casa Senso aux plateformes. Non compris dans l'offre.
- **Démarrage** : dès signature et réception des accès Wix et Search Console, en commençant par le site. Contenus et campagnes publiés après validation de Casa Senso.
- **Adresse de facturation** : Casa Senso - Rein, Laetitia Rein, Cure 18, 2035 Corcelles.
- **Demande prioritaire de Laetitia (04.11)** : le site au plus vite pour lancer les pubs. **Demande du 05.11** : plus d'abonnés Instagram.
- **Audit** : `~/brandiamemory/CONTRAST/audits/casa-senso-2026-10-27/rapport-audit.md` et `~/brandiamemory/CONTRAST/audits/casa-senso-2026-10/` (synthèse client du 28.10, volumes DataForSEO, captures). P0 : noindex sur Agence, Prestations, Réalisations, Contact ; liens `tel:` vers 0041793769512 alors que le numéro affiché est +41 76 615 09 43 ; un lien rendez-vous vers hello@re-new.ch ; adresse 2000 Neuchâtel vs Rue de la Cure 2035.
- **Technique vérifiée le 12.11** : site Wix Studio (`isStudio: true`, metaSiteId 8ee5bd35-c56b-445d-b7be-c78f81e33dfe) ; DNS du domaine chez GoDaddy (ns53/ns54.domaincontrol.com) ; messagerie Microsoft 365 (MX outlook). Invitation de collaboration Wix reçue le 10.11 sur info@contrast-marketing.ch, rôle non vérifié.
- **QLIQ Connect** : page partenaire validée par Laetitia le 08.11 (aperçu `qliq-apercu-casa-senso.vercel.app/partenaire/casa-senso`), branche `preview/casa-senso` du dépôt qliq-connect.
- **Site Astro (aperçu)** : https://casa-senso-apercu.vercel.app, mis en ligne le 15.11 pour relecture par Laetitia, non indexé, formulaire inactif.
- **Projet restaurant = ICHI Ramen Shop** (document « projet restaurant », 12.11) : projet d'une personne proche de Laetitia ; ville, mission exacte et accord de publication inconnus. Premier cas « Espaces professionnels », utilisable aussi pour la page Réalisations du site.
- **Niche en arches** (dossier « chantiers ») : construite du 19 au 21.10.2025 d'après les dates des photos, au-dessus d'un WC ; lieu, auteur et matériaux inconnus.

## Sources et médias

- Moodboards et plan Instagram de Laetitia (WeTransfer du 05.11) : `~/Downloads/instagram - Csa Senso/` (moodboard 15, idées déco, shopping, inspirations voyages 40, photos Marrakech 51, chantiers 15, `construction site/IG CASA SENSO.pptx`).
- Photos pro (SwissTransfer du 08.11, 666 Mo) : `~/Downloads/transfer-01a1bc38/` — maison Corcelles (68), Cannes photos HD (37), Cannes avant (24), `cannes locations.pptx`.
- **Récit et cas client de Laetitia (reçus le 12.11, 131 Mo)** : Drive `CASA SENSO/07 - Contenus de Laetitia/2026-11-12 - Mon histoire et projet restaurant/`. `mon histoire.pptx` (14 slides, 46 images) : rénovation de sa maison en quatre chapitres (découverte, démolition, reconstruction, mise en valeur), texte à la première personne, matière des premiers posts et de la page « À propos ». `projet restaurant.pptx` (8 slides, 24 images) : cas client restaurant, un seul texte d'intro, le reste en photos. À utiliser pour les réalisations du site et les réseaux sociaux.
- Drive : dossier « CASA SENSO » (04 Site web, 05 Offre et présentations, 06 Instagram, 07 Contenus de Laetitia), synchronisé en local sous `~/Library/CloudStorage/GoogleDrive-info@contrast-marketing.ch/My Drive/01 - Clients et marques/CASA SENSO/`.
- Copie des deux présentations du 12.11 dans le dépôt : `sources/2026-11-12-histoire/` (pptx, extraits et planches).
- À rapatrier dans ce dépôt ou sur le Drive : `~/Downloads/instagram - Csa Senso/` (05.11) et `~/Downloads/transfer-01a1bc38/` (08.11) ne sont pas sauvegardés. Les photos utilisées dans les lots sont copiées, recadrées, dans `outputs/batches/*/assets/`.

## Livrables

- `social/2026-11-lancement/` : moodboard de direction, rubriques, feuille de route, calendrier éditorial (16.11.2026 → 14.02.2027). Publié en page privée : https://claude.ai/artifact/843NMueC8mLhfn95DAapzR
- `docs/site-wix-ou-code.md` : analyse ; décision du 12.11 : bascule en code, site opérationnel le 20.11.
- `site/` (13.11) : reproduction à l'identique du site Wix en Astro, contrat et revue dans `site/PROJECT.md`, relevé Wix dans `sources/site-wix-2026-11-13/`. Aperçu local : `cd site && npm install && npm run build && npx astro preview`. Non déployé. Depuis le 13.11 : charte des réseaux sociaux (Lora + League Spartan), PP Hatton retirée.
- Figma « Principale » (https://www.figma.com/design/xGYOPXzuBSCmZf94Z7FgK4/Principale) : page 01 feuille de route, rubriques, calendrier 3 mois, prochaines étapes ; page 02 cinq exemples à valider. Fait foi sur le rythme (3 publications par mois) ; la page claude.ai du 12.11 garde l’ancien rythme.
- `social/2026-11-exemples/fiche-lot.md` : fiche du lot d’exemples.
- `outputs/batches/CASASENSO-chaine-graphique-20261112/` : 8 concepts de charte réseaux sociaux (directions A Le Livre, B Carnet d’atelier), GPT Image 2.5, Figma page 03. Direction A retenue le 12.11.
- `outputs/batches/CASASENSO-mois1-20261112/` : charte Figma (page 00) et 3 premiers posts du calendrier (page 04), direction A. En attente de Laetitia.
- `outputs/batches/CASASENSO-mois1-v2-20261112/` : posts du mois 1 v2 « Livre objet » (Figma page 04), v1 archivée en page 99.
- `veille/2026-11-instagram/` : veille Instagram (21 comptes, 36 carrousels), Figma page 05. En attente des exemples de Diego.
- `outputs/batches/CASASENSO-livre-ch1-v3-20261112/` : Livre chapitre 1 v3 « La découverte » (Figma page 04, en tête). En attente de Diego.
- `outputs/batches/CASASENSO-livre-ch2-4-20261112/` : Livre chapitres II à IV + retouche « vivid » du chapitre I (Figma page 06).
- `outputs/batches/CASASENSO-coulisses-niche-20261112/` : rubrique 06 Coulisses, 6 stories « La niche, en trois jours » + template « Coulisses / Story 9:16 » (Figma pages 00 et 02). En attente de Diego.
- `outputs/batches/CASASENSO-pro-ichi-20261112/` : rubrique 07 Espaces professionnels, carrousel ICHI Ramen Shop 9 slides + template « Espace pro / Slide 4:5 » (Figma pages 00 et 02). En attente de Diego ; accord du restaurant à obtenir.

## Figma « Principale » · ajouts du 13.11.2026
- Page 00 : icônes des rubriques (section 137:96).
- Page 01 : aperçu du profil prévu et optimisé (section 131:297) ; plan d'engagement (99:518) à jour des 12 dates.
- Page 02 : en haut, les mises en scène des patterns (119:365) ; dans chaque rubrique, la version retenue à la place principale ; à droite (x 30000) les directions de couverture A/B/C, les propositions Livre L1–L3, Moodboard M1–M3 et posts complets M1/M2, Idées déco I1–I3, et les expériences de cartes (121:365).
- Page 03 : profils de référence reconstitués (131:90).

## Figma « Principale » · organisation au 12.11.2026 (fait foi)
- 00 Charte graphique · 01 Plan de lancement · 02 Rubriques · 03 Références (veille Instagram) · 99 Archives (versions précédentes et pistes écartées).
- Page 02, de haut en bas, une création à valider par rubrique (toutes livrées le 12.11) : 01 Le Livre (chapitres I à IV) · 02 Inspiration et voyage (Marrakech) · 03 Avant / après (Cannes) · 04 Moodboards (salon vert) · 05 Réalisations (Cannes) · 06 Coulisses et chantiers (La niche, 6 stories) · 07 Espaces professionnels (ICHI Ramen Shop) · 08 Idées déco (3 matières).
- Page 00 : un template (jeu de composants) par rubrique : Avant-après, Moodboard, Idées déco, Réalisation / Slide 4:5 ; Coulisses / Story 9:16 ; Espace pro / Slide 4:5. Couleurs de rubrique en variables « Rubrique/… » (collection Casa Senso).
- Toute nouvelle création de rubrique va dans la page 02, sous le bandeau de sa rubrique. Les anciennes versions vont en 99.

## Figma · méthode et pièges (12.11.2026)
- Bandeau de rubrique : cloner celui de la 05 (rectangle couleur, RUBRIQUE, titre, Le principe, Les textes, Quand, pastille de statut), puis titre de série, section blanche (pas de 1160 px entre slides) et note de provenance sous la section.
- Photos : `upload_assets` sans cible sur la page, puis copier l'`imageHash` reçu sur le calque « Photo (remplacer) » de l'instance, et supprimer les cadres temporaires. Recadrer avant en 1080×1350 ou 1080×1920 (ImageMagick).
- Une instance ne peut pas déplacer ses calques : un bloc de texte qui doit rester ancré en bas se met dans un cadre plein format en auto-layout aligné en bas (voir « Zone récit » du template Coulisses).
- Les mentions en capitales espacées passent sur deux lignes au-delà d'environ 25 caractères : raccourcir.

## Questions ouvertes pour Laetitia (12.11.2026)
- Restaurant ICHI : accord de publication, crédit photo, ville, mission exacte, durée.
- Niche : lieu, qui l'a réalisée, matériaux.
- Tous les textes « proposés par Contrast » des rubriques 03 à 08, et les textes du carnet de voyage.
- Livre : le plancher sombre (DSC02437) est-il le parquet de locomotives ? Tutoiement ou vouvoiement, emojis.

## Charte réseaux sociaux validée (12.11.2026)
Lire `brand/charte-reseaux-sociaux.md` avant toute création : League Spartan, ocre doux #A69368 pour le Livre, cartes à l'identique de House & Garden, carnet de voyage sur le modèle Amber Lewis (Lora), Laetitia une fois par carrousel, provenance de chaque texte et image signalée. Une couleur par rubrique : Livre ocre #A69368 · Voyage terracotta #9A5636 (icône seulement) · Avant/après corail #C8613F · Moodboards prune vif #7A3B4E · Réalisations rose poudré #E2A79A · Coulisses encre chaude #4A4440 · Espaces pro sauge #6E7F73 · Idées déco olive #404734 (le bleu majorelle est abandonné le 13.11). Depuis le 13.11 : couvertures « Le récit », Laetitia n’apparaît plus sur les photos du carnet de voyage.
- `social/2026-11-strategie-instagram/` : page de synthèse (stratégie, feuille de route, charte, 8 rubriques avec slides et variantes, calendrier, engagements). Partagée par lien depuis le 13.11 : https://claude.ai/artifact/1zhTSNExrnU7qs7NMwzeky
