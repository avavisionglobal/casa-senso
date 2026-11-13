# Site casa-senso.ch en code · contrat de projet

Version 1 · 13.11.2026 · stade : reproduction du site Wix actuel.

## Décision et périmètre

- **Demande de Diego (13.11.2026)** : « faire exactement le même site web » que https://www.casa-senso.ch/ (Wix Studio), en code. Suite de la décision du 12.11 (bascule Wix → code, `docs/decisions-strategie.md`).
- **Direction retenue** : le site actuel est la référence unique et dominante. Pas de deux pistes : la direction est fixée par Diego. Aucun texte réécrit, aucune section ajoutée ou retirée.
- **Pages** (mêmes adresses que Wix, pas de redirection) : `/`, `/agence`, `/prestations`, `/realisations`, `/contact`, `/politique-de-confidentialite`.
- **Écarts volontaires avec Wix** (corrections, pas des choix de style) :
  1. Lien téléphone : `tel:+41766150943` (numéro affiché et déclaré dans le balisage LocalBusiness) au lieu de `0041793769512`. Audit du 27.10, P0. **À confirmer par Laetitia.**
  2. Bouton « Prendre rendez-vous » du menu mobile : `studio@casa-senso.ch` au lieu de `hello@re-new.ch`. Audit P0.
  3. Toutes les pages indexables (pas de `noindex`). Audit P0. L'aperçu Vercel, lui, reste en `noindex` tant que le domaine n'est pas basculé.
  4. Tablette (750–1000 px) : Wix affiche des mises en page cassées (mot coupé « Compose r », grands vides). On applique la mise en page mobile, élargie.
  5. Le texte défilant (marquee) masqué dans Wix et les images de modèle Wix inutilisées ne sont pas reproduits.
- **Adresse** : affichée telle quelle (« 2000 Neuchatel » / « 2000 Neuchâtel »). Écart avec Rue de la Cure 18, 2035 Corcelles signalé à Laetitia (audit P1), non corrigé sans sa réponse.

## Stack

- Astro (statique), dossier `site/` du dépôt `~/brandiamemory/casa-senso`. Hébergement prévu : Vercel (racine du projet : `site`).
- Formulaire : fonction Vercel `api/contact.js` → envoi par Resend à studio@casa-senso.ch. Clé `RESEND_API_KEY` à créer ; sans clé, le formulaire affiche un message d'erreur avec le lien e-mail.
- Prévisualisation : `cd site && npm install && npm run dev` (http://localhost:4321).

## Sources

- Relevé du site Wix du 13.11.2026 : `sources/site-wix-2026-11-13/` (captures 1440 et 390 px, HTML rendu, textes, styles calculés, images d'origine, polices).
- Textes : repris mot pour mot de ce relevé (y compris ponctuation et majuscules).
- Images : originaux téléchargés depuis le stockage Wix (`images/`), mêmes cadrages (`object-fit: cover`, centre).

## Typographie (relevée sur le site)

| Rôle | Police Wix | Police utilisée | Licence |
| --- | --- | --- | --- |
| Titres de page, titre accueil | PP Hatton Medium (fichier importé dans Wix) | même fichier | **Commerciale (Pangram Pangram). Licence web à vérifier avant mise en ligne.** |
| « Le plaisir de choisir… » accueil | PP Hatton Ultralight, graissé par le navigateur | même fichier, même graissage | idem |
| Textes, boutons, menu | Wix Madefor Display / Text | mêmes polices, version libre (Fontsource) | OFL |
| « Avant - Après » | Linotype Didot Italic (bibliothèque Wix) | Bodoni Moda Italic | OFL. Didot n'est licenciée que dans Wix |

## Contrat visuel (PASS/FAIL au rendu)

| Critère | PASS | FAIL |
| --- | --- | --- |
| Fidélité de composition | À 1440 et 390 px, chaque section a la même position, la même taille de texte et le même cadrage photo que la capture Wix correspondante (écart de quelques pixels toléré). | Bloc déplacé, texte qui revient à la ligne ailleurs de façon visible, photo recadrée sur un autre sujet. |
| Textes | Identiques au relevé, mot pour mot. | Mot changé, ajouté ou manquant. |
| Interactions | Menu fixe, survols (menu gris, bouton noir ↔ contour), apparitions au défilement, menu mobile plein écran. | Interaction absente ou différente. |
| Lisibilité | Aucun mot coupé, aucun chevauchement de 360 à 1920 px. | Mot coupé, texte sur texte, défilement horizontal. |
| Liens | Téléphone, e-mail, pages, rendez-vous mènent aux bonnes destinations. | Lien mort ou vers une autre adresse. |

## Restes à faire avant bascule

- Licence PP Hatton (Laetitia, Julien Doutaz ou Steve) ; à défaut, acheter la licence web ou choisir une police de remplacement.
- Confirmer le numéro de téléphone et l'adresse.
- Clé Resend et test d'envoi réel du formulaire.
- GA4, Search Console, pixel Meta et suivi du formulaire (décision du 12.11).
- Accès GoDaddy pour les enregistrements A / CNAME (ne pas toucher aux MX).

## Revue du rendu · 13.11.2026 (version 1)

Méthode : captures pleine page du site Wix et du site codé à 1440 px et 390 px, comparées côte à côte, plus mesures pixel (positions des titres, filets, pied de page, cadrages photo).

| Page | Hauteur Wix / code (1440 px) | Hauteur Wix / code (390 px) |
| --- | --- | --- |
| Accueil | 2342 / 2346 | 2540 / 2544 |
| L'agence | 1912 / 1914 | 2521 / 2522 |
| Prestations | 2273 / 2276 | 3396 / 3398 |
| Réalisations | 3614 / 3617 | 3360 / 3362 |
| Contact | 1273 / 1276 | 1891 / 1892 |
| Politique de confidentialité | 1739 / 1745 | 2102 / 2104 |

| Critère | Verdict | Note |
| --- | --- | --- |
| Fidélité de composition | PASS | Mêmes retours à la ligne, mêmes positions à quelques px. Le gras « fabriqué » de Wix (Madefor déclarée en 400) est reproduit. Points focaux Wix appliqués (portrait 34 %, réalisations 100 % / 10 %). |
| Textes | PASS | Repris mot pour mot. Seul changement : texte alternatif « Après » de la chambre d'enfant (Wix indiquait « Avant »). |
| Interactions | PASS | En-tête fixe, survols, menu mobile plein écran (Échap, fermeture à la navigation), apparitions au défilement (fondu, montée, glissé) avec respect de « réduire les animations ». |
| Lisibilité | PASS | Aucun défilement horizontal de 360 à 1920 px ; tablette 768 / 1024 px propre. |
| Liens | PASS | Pages internes 200 ; e-mail studio@ partout ; téléphone +41 76 615 09 43. |
| Formulaire | NON VÉRIFIÉ | Validation et messages testés ; envoi réel impossible sans clé Resend et déploiement Vercel. |
| « Avant - Après » | Écart assumé | Bodoni Moda Italic au lieu de Linotype Didot (licence Wix). |

## Accueil v2 · 13.11.2026 (proposition, à valider par Diego)

- **Demande de Diego** : revoir l'accueil sur l'architecture des sections de https://www.madah.fr/ (référence dominante, fiche `contrast-web-references/fiches/REF-0050-madah.md`), sans toucher à la DA du site ; améliorer le grand visuel, les sections et les images.
- **DA conservée** : PP Hatton et Madefor, noir sur blanc, boutons-pilules à flèche et pilule noire de l'en-tête, en-tête et pied de page inchangés. Seule couleur ajoutée : l'olive #404734, déjà présente dans le site Wix.
- **Ancienne version** : `site/proofs/index-reproduction-wix-2026-11-13.astro`.

| Section | Hésitation du visiteur | Ce qui la lève | Source |
| --- | --- | --- | --- |
| Grand visuel (4 photos de Cannes en fondu, pause possible) | « Est-ce que ce qu'elle fait me plaît ? » | Photos pro HD, nom du lieu et de la pièce | SwissTransfer du 08.11 (HD-30, 28, 23, 7) |
| Intro | « Que fait-elle exactement ? » | Textes du site actuel | site Wix |
| Mes dernières réalisations | « A-t-elle vraiment des projets aboutis ? » | Une ligne par projet : Cannes, maison de famille, avant / après | photos HD Cannes et Corcelles, paires avant/après du site |
| Citation | « Qui est derrière ? » | Les mots de Laetitia | son e-mail du 08.11 (écrit pour la page QLIQ) |
| Vous avez un projet ? | « Comment je commence ? » | Rendez-vous, devis gratuit, lien vers les prestations | « Demander un devis gratuit… » du site ; reste proposé |
| Instagram | « Est-ce qu'elle est active ? » | 4–5 photos, lien vers @casa_senso.ch | photos HD |

**Textes proposés par Contrast (à faire valider par Laetitia)** : « Mes dernières réalisations », « L'appartement de Cannes », « La maison de famille », « Vous avez un projet ? Parlons-en ensemble. », « Une pièce à repenser, une maison à aménager ou des locaux à mettre en valeur : dites-moi en quelques lignes ce que vous imaginez, je vous recontacte rapidement. », « Suivez mes projets sur Instagram », « Suivez-moi », légendes du diaporama.

**Écarté faute de preuve** : avis clients (pas d'avis Google), presse.

**Limites** : « Voir le projet » mène à la page Réalisations, qui ne présente pas encore la maison de famille ni les photos HD de Cannes : pages projet à créer. La citation a été écrite pour QLIQ : demander à Laetitia si elle veut la réutiliser.

Revue du 13.11 : ordinateur 1440, tablette 820, mobile 390 relus visuellement ; aucun défilement horizontal de 360 à 1920 px ; aucune erreur console ; liens internes 200. Lisibilité : titres posés sur un encart blanc (le texte noir directement sur les photos claires ne passait pas).

## Accueil v3 et charte commune · 13.11.2026 (proposition, à valider par Diego)

- **Demande de Diego** : « pas fan », beaucoup plus épuré ; reprendre la DA des réseaux sociaux (l'artefact) comme charte du site ; garder la mise en page de base (ordre madah.fr) mais des sections mieux composées, des animations plus modernes, que ça fasse « décoration d'intérieur » ; le carrousel du grand visuel est bien, mais sans le compteur « 01 / 04 · L'appartement de Cannes · le salon » et il tourne en continu, sans bouton d'arrêt. Références : captures de madah.fr (cartes arrondies, pilules terracotta « Voir le projet », titre avec un mot en couleur).
- **Charte appliquée à tout le site** (variables de `global.css`, les anciennes pointent vers les nouvelles) : Lora pour les titres avec un mot en italique terracotta, League Spartan pour le texte et les menus, fond crème #FAF7F0, encre #1E1A17, accent terracotta #9A5636, olive #404734 pour la citation, cartes beiges #F1EAE0, coins arrondis 16 px, dessins au trait des réseaux sociaux (fauteuil, porte ouverte, bâtisse). **PP Hatton n'est plus utilisée** (licence non confirmée) ; ses fichiers restent dans `public/fonts/` et devront être retirés avant la mise en ligne.
- **Accueil** : grand visuel en fondu continu avec lent zoom, titre « De l'idée à la *réalisation* » posé sur la photo (dégradé doux en bas), plus d'encart blanc, de compteur ni de pause (diaporama arrêté si « réduire les animations » est demandé). Intro centrée avec dessin au trait ; mosaïque de projets arrondie, nom du projet en Lora sur la photo et pilule terracotta ; citation dans un bloc olive arrondi avec dessin ; carte projet beige avec dessin de porte ouverte ; Instagram en vignettes arrondies. Textes inchangés.
- **Animations** : apparition en montée décalée (data-stagger), images qui se découvrent de bas en haut avec léger dézoom (data-anim="reveal"), zoom au survol des projets, soulignés animés, flèche des boutons qui pivote, ombre de l'en-tête au défilement. Tout est désactivé avec « réduire les animations ».
- **En-tête** : crème translucide, menu en capitales espacées avec soulignement animé, bouton « Prendre rendez-vous » terracotta. Pied de page beige.
- **Versions précédentes** : `proofs/index-v2-madah-2026-11-13.astro`, `proofs/index-reproduction-wix-2026-11-13.astro`.

Revue du 13.11 (local, http://localhost:4321) : accueil 1440 et 390 px relu visuellement ; aucun défilement horizontal ; aucune erreur console ; pages L'agence, Prestations, Réalisations, Contact relues à 1440 px avec la nouvelle charte (mises en page Wix conservées, à retravailler page par page si validé). NON VÉRIFIÉ : tablette 820 px, pages intérieures en mobile.

### Retours du 13.11 (2) · Avant / après retiré, 3 grands visuels à comparer
- La rangée « Avant / Après » de l'accueil est retirée (demande de Diego).
- Page de travail `/apercu-heros` (hors index, **à supprimer avant la mise en ligne**) : grand visuel actuel + 3 versions. A · Éditorial partagé (texte sur le crème à gauche, diaporama arrondi à droite avec un grand arrondi en bas à gauche, bouton prestations). B · Couverture de livre (grand titre centré au-dessus, photo encadrée en dessous, arche sur mobile). C · Bande vivante (titre centré, bande de photos arrondies décalées qui défile lentement en continu). Relu à 1440 et 390 px, sans erreur ni défilement horizontal.
- **13.11, Diego : « La B go ! »** Grand visuel B « Couverture de livre » appliqué à l'accueil (mention « Casa Senso · Laetitia Rein », titre centré, sous-titre, diaporama continu encadré à coins arrondis de 40 px, arche sur mobile ; apparition en montée au chargement). Relu à 1440 et 390 px, sans erreur.
- **13.11, Diego : « je souhaite quand même une grande image »** : photo du grand visuel agrandie (marges de 20 px, hauteur d'un écran moins l'en-tête, jusqu'à 1000 px ; 72 % de l'écran sur mobile), titre resserré au-dessus. Relu à 1440 et 390 px.
- **13.11, Diego : « je veux vraiment la photo comme avant en grand avec un texte par-dessus ; pas de texte en haut »** : retour au grand visuel plein écran (diaporama continu, lent zoom, titre et phrase posés en bas à gauche sur un dégradé doux). La version B est abandonnée. Relu à 1440 et 390 px.
- **13.11, Diego : texte du grand visuel pas assez visible, pas fan de sa place** : page `/apercu-heros` refaite avec 4 placements sur la photo plein écran (1 au milieu avec voile léger, 2 au milieu dans un cadre de verre dépoli foncé, 3 à gauche au milieu de la hauteur avec dégradé latéral, 4 en bas au centre très grand sur dégradé plus marqué). Relu à 1440 et 390 px, sans erreur. En attente du choix.

## L'agence v3 · 13.11.2026 (proposition, à valider par Diego)
- **Demande de Diego** : refonte de la page L'agence, garder la photo actuelle de Laetitia, ajouter des iconographies, dans l'esprit de l'artefact réseaux sociaux et de l'accueil v3.
- **Composition** (textes du site inchangés, seulement redistribués) : ouverture (mention « L'agence », titre Lora « Des espaces qui *inspirent*. Des projets sans contraintes. », texte d'intro à droite) · portrait de Laetitia en arche (forme des couvertures des réseaux sociaux) avec son texte et la phrase « Une seule interlocutrice… » mise en avant · « Imaginer. Composer. *Déléguer.* » en 3 cartes numérotées avec dessins au trait (nuancier, console composée, porte ouverte) · bande olive avec la bâtisse et « Parce que chaque détail mérite toute notre attention… », boutons Prendre rendez-vous et Voir mes réalisations.
- **Ajouts de libellés** : mentions « L'agence », « Laetitia Rein · fondatrice », lien « Voir mes réalisations », numéros 01–03.
- **Animations** : montée décalée, photo qui se découvre, cartes qui se soulèvent au survol, dessins qui bougent légèrement.
- Ancienne version : `proofs/agence-reproduction-wix-2026-11-13.astro`.
- Revue : 1440, 820, 390 et 360 px, aucune erreur, aucun défilement horizontal (corrigé : la photo débordait de 15 px sur mobile).
- **13.11, Diego : ouverture de L'agence « trop gros, il faut simple et efficace »** : une seule colonne, titre Lora 48 px sur une ligne (« Des espaces qui *inspirent*. »), « Des projets sans contraintes. » en petit gris, texte d'intro dessous ; marges réduites. Relu à 1440 et 390 px.
