# Site casa-senso.ch : rester sur Wix ou reconstruire en code

Note interne, 12.11.2026.

## Faits vérifiés

- Site Wix Studio, 6 pages : accueil, agence, prestations, réalisations, contact, politique de confidentialité.
- Domaine géré chez GoDaddy (ns53/ns54.domaincontrol.com), pas chez Wix. Le `www` pointe vers Wix (pointing.wixdns.net).
- Messagerie sur Microsoft 365 (MX `casasenso-ch01b.mail.protection.outlook.com`).
- Polices : Wix Madefor Display / Text (publiées en open source sur Google Fonts) et une police de titre importée dans Wix (`wfont_b4e971_…`), licence à vérifier.
- Animations Wix actuelles : apparitions au défilement et parallaxe (attributs `data-motion`, `reveal`, `parallax` dans le HTML).
- Lighthouse 27.10 : mobile 78/100, LCP 5,3 s ; ordinateur 92/100.
- Invitation Wix reçue le 10.11, rôle non vérifié.

## Ce que Wix permet et ne permet pas

- Wix n'exporte ni le HTML, ni le CSS, ni la mise en page. On ne peut pas « récupérer » le site et le passer en code.
- On peut le **reconstruire** : mêmes textes, mêmes images (originaux téléchargeables depuis le gestionnaire de médias avec l'accès Wix), mêmes polices, même mise en page, à partir des captures et du HTML public.
- Le rendu peut être identique et les animations meilleures (GSAP, défilement fluide, transitions de pages), avec un chargement mobile plus rapide.

## Bascule

- Hébergement Vercel, construit dans `~/brandiamemory/casa-senso`.
- Mêmes adresses de pages (`/agence`, `/prestations`, `/realisations`, `/contact`) : pas de redirection nécessaire, référencement conservé.
- Changer seulement les enregistrements A / CNAME du `www` et de la racine chez GoDaddy. Ne pas toucher aux MX : les mails continuent.
- Il faut l'accès GoDaddy (probablement Julien Doutaz ou Steve).
- Après bascule et contrôle, résilier le forfait Wix à son échéance (date à vérifier).

## Ce qui change pour Casa Senso

- Laetitia ne pourra plus modifier le site dans l'éditeur Wix. Soit elle passe par Contrast, soit on ajoute un petit outil d'édition pour les réalisations.
- Le formulaire de contact passe par un service d'envoi (à brancher avec la mesure des demandes).
- Le site a été mis en place avec Julien Doutaz : en parler avec Steve avant d'annoncer une reconstruction.

## Périmètre

L'offre RE-00131 prévoit « Amélioration technique du site pour son référencement ». Une reconstruction complète dépasse ce poste : à décider (inclus dans le partenariat ou offre séparée).

## Proposition

1. Tout de suite, dans Wix : les quatre corrections P0 de l'audit (environ une demi-heure), pour ne pas bloquer les pubs.
2. En parallèle : reconstruction en code, aperçu Vercel, validation par Laetitia, bascule en janvier avant la campagne Meta 2.
3. Il manque une référence d'animation choisie par Diego (règle Contrast Web) avant de produire les deux pistes.
