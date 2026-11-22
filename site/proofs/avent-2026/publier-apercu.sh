#!/bin/zsh
# Republie l'aperçu du calendrier de l'Avent sur https://casa-senso-avent.vercel.app
# (projet Vercel casa-senso-avent, équipe Contrast Workspace). Sans la piste B ni les captures Rituals ;
# « Retour au site » et « Prendre rendez-vous » pointent vers l'aperçu du site.
set -e
SRC=${0:A:h}
D=$(mktemp -d)/avent-deploy
SITE=https://casa-senso-apercu.vercel.app
mkdir -p "$D/captures" "$D/assets" "$D/.vercel"
cp "$SRC"/index.html "$SRC"/a-maison.html "$SRC"/c-guirlande.html "$SRC"/shared.js "$SRC"/shared.css "$D"/
cp "$SRC"/assets/* "$D/assets/"
cp "$SRC"/captures/{a-desktop-ecran,a-mobile,c-desktop-ecran,c-mobile}.png "$D/captures/"
for f in "$D"/a-maison.html "$D"/c-guirlande.html "$D"/shared.js; do
  sed -i '' -e "s#href=\"/\"#href=\"$SITE/\"#g" -e "s#href=\"/contact\"#href=\"$SITE/contact\"#g" -e "s#href: '/contact'#href: '$SITE/contact'#g" "$f"
done
print '{ "cleanUrls": false, "headers": [ { "source": "/(.*)", "headers": [ { "key": "X-Robots-Tag", "value": "noindex, nofollow" } ] } ] }' > "$D/vercel.json"
print '{"projectId":"prj_2QBMfzAYOhIgK77leqPqWb8Zg46M","orgId":"team_J9nvFIBbANyK35GQPBLH13id","projectName":"casa-senso-avent"}' > "$D/.vercel/project.json"
cd "$D" && vercel deploy --prod -y --scope crm-real-estates-projects
