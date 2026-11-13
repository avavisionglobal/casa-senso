# Composition des mockups patterns : surfaces GPT Image 2.5 + slides réelles Casa Senso.
import sys
from PIL import Image, ImageFilter, ImageDraw
B, I = sys.argv[1], sys.argv[2]
SETS = {
 "parcours":  ["livre-1-04","voyage-05","voyage-03"],
 "cartes":    ["livre-1-01","livre-1-06","livre-1-07"],
 "aa":        ["aa-02","aa-03","aa-05"],
 "visite":    ["real-01","real-03","real-04"],
 "planche":   ["mood-01","mood-02","mood-03"],
 "coulisses": ["cou-story-02","cou-story-04","cou-story-06"],
 "fiche":     ["pro-01","pro-02","pro-03"],
 "presse":    [None],
}
ROT = [-2.4, 0.6, 2.2]
def light(im):
    # léger dégradé de lumière (haut gauche plus clair) pour coller à l'éclairage de la surface
    w, h = im.size; g = Image.new("L", (w, h)); d = ImageDraw.Draw(g)
    for y in range(h): d.line([(0, y), (w, y)], fill=int(255 * y / h))
    dark = Image.new("RGB", (w, h), (40, 30, 20)); bright = Image.new("RGB", (w, h), (255, 250, 240))
    im = Image.composite(dark, im, g.point(lambda v: int(v * 0.10)))
    return Image.composite(bright, im, g.point(lambda v: int((255 - v) * 0.06)))
def place(bg, sl, cx, cy, ang):
    sl = light(sl.convert("RGB")).convert("RGBA")
    r = sl.rotate(ang, resample=Image.BICUBIC, expand=True)
    a = r.split()[-1]
    sh = Image.new("RGBA", r.size, (35, 25, 15, 0)); sh.putalpha(a.point(lambda v: int(v * 0.30)))
    pad = 40; shp = Image.new("RGBA", (r.width + pad * 2, r.height + pad * 2), (0, 0, 0, 0)); shp.paste(sh, (pad, pad), sh)
    shp = shp.filter(ImageFilter.GaussianBlur(14))
    x, y = int(cx - r.width / 2), int(cy - r.height / 2)
    bg.alpha_composite(shp, (x - pad + 5, y - pad + 9)); bg.alpha_composite(r, (x, y))
for k, names in SETS.items():
    bg = Image.open(f"{B}/generated/{k}-gpt-v01.png").convert("RGBA").resize((1536, 1024), Image.LANCZOS)
    if names[0] is None:
        card = Image.new("RGB", (430, 538), (246, 241, 232))
        place(bg, card, 768, 512, -2.0)
    else:
        story = k == "coulisses"
        H = 600 if story else 490
        xs = [768 - 440, 768, 768 + 440] if not story else [768 - 385, 768, 768 + 385]
        for i, n in enumerate(names):
            sl = Image.open(f"{I}/{n}.jpg"); sl = sl.resize((round(H * sl.width / sl.height), H), Image.LANCZOS)
            place(bg, sl, xs[i], 512 + (i - 1) * 6, ROT[i])
    out = bg.convert("RGB")
    out.save(f"{B}/composites/{k}.jpg", quality=88)
    out.resize((1200, 800), Image.LANCZOS).save(f"{I}/pat-{k}.jpg", quality=80, optimize=True, progressive=True)
print("ok")
