# Prépare les éléments pour Figma : textures en grain neutre (fusion Incrustation), traits en PNG transparent, objets recadrés.
from PIL import Image, ImageFilter, ImageOps, ImageChops
G = "generated/{}-gpt-v01.png"
def crop45(im):
    w, h = im.size; nh = int(w * 5 / 4); y0 = (h - nh) // 2; return im.crop((0, y0, w, y0 + nh)).resize((1080, 1350), Image.LANCZOS)
for k in ["papier", "lin", "enduit"]:
    g = crop45(Image.open(G.format("tex-" + k)).convert("L"))
    hp = ImageChops.subtract(g, g.filter(ImageFilter.GaussianBlur(24)), scale=1, offset=128)
    hp = hp.point(lambda v: max(0, min(255, int(128 + (v - 128) * 2.2))))
    hp.convert("RGB").save(f"assets/tex-{k}.png")
INK, CREAM = (30, 26, 23), (243, 237, 227)
for k, col in [("fauteuil", CREAM), ("echantillons", CREAM), ("batisse", CREAM), ("arche", INK)]:
    g = Image.open(G.format("trait-" + k)).convert("L")
    a = ImageOps.invert(g).point(lambda v: 0 if v < 40 else min(255, int((v - 40) * 1.6)))
    a = a.filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(0.8)); im = Image.new("RGBA", g.size, col + (0,)); im.putalpha(a); im = im.crop(a.getbbox()); im.save(f"assets/trait-{k}.png")
for k in ["eucalyptus", "echantillons", "cle", "palme"]:
    im = Image.open(G.format("objet-" + k)).convert("RGBA"); im = im.crop(im.split()[-1].point(lambda v: 255 if v > 20 else 0).getbbox()); im.save(f"assets/objet-{k}.png")
for f in sorted(__import__("os").listdir("assets")): print(f, Image.open("assets/" + f).size)
