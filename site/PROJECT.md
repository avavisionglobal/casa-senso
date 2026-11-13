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
