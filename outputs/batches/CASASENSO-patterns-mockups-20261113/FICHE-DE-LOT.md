# Lot CASASENSO-patterns-mockups-20261113 · version 1 · statut : livré pour validation (13.11.2026)

Demande de Diego (13.11.2026) : « pour les patterns je souhaite des choses plus design et moins IA, hésite pas à utiliser des images via Higgsfield ou autre ». Remplace les schémas filaires de la section Patterns de l'artefact.
Objectif et audience : présenter à Diego puis à Laetitia les 8 patterns de publication, de façon éditoriale.
Format et nombre : 8 visuels paysage 3:2 (un par pattern), pour l'artefact « Casa Senso Instagram ».
Mode : exploration (une surface et des accessoires différents par pattern, liés à son sujet).
Référence : mise en scène « flat lay » de magazine déco (tirages posés sur une matière). Les slides elles-mêmes suivent les modèles déjà validés (Amber Lewis, House & Garden, Emily Henderson, Dorothée Meilichzon, Studio McGee).
  On reprend : vue de dessus, lumière du jour, matières vraies, tirages posés à plat.
  On ne copie pas : aucune image tierce.
Fabrication :
  - Surfaces et accessoires : GPT Image 2.5 (gpt-image-2.5-sunburst, qualité medium, 1536×1024), sans personne ni texte.
  - Slides : créations réelles de Casa Senso (exports Figma), posées en composition (PIL), légère ombre de contact seulement.
  - Texte et légendes : dans la page HTML, jamais dans l'image.
Interdits : voile sombre, dorure, ombre lourde, cadre, texte généré, mains ou personnes.
Retours : en attente.

## Fabrication réelle
- 8 générations GPT Image 2.5 (une par pattern), 0 retouche ; job IDs et coût : inconnus (le CLI ne les renvoie pas). Prompts : `prompts.jsonl`.
- Composition : `compose.py` (3 slides réelles par pattern, rotation ±2°, ombre de contact légère). Sorties : `composites/*.jpg` (1536×1024) ; versions 1200 px dans l'artefact.
- Slides utilisées : Livre I (04, 01, 06, 07), Voyage (05, 03), Avant/après (02, 03, 05), Réalisation (01, 03, 04), Moodboard (01–03), Coulisses stories (02, 04, 06), ICHI (01–03). « La presse comme caution » : carte vierge, aucun article n'existe.
