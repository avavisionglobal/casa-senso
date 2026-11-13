# Recadrages 4:5 des images générées + planche de couverture (grille propre, fond blanc).
from PIL import Image, ImageOps
G = "generated/{}-gpt-v01.png"
def crop(src, W, H, cx=0.5, cy=0.5):
    im = Image.open(src).convert("RGB"); w, h = im.size; r = W / H
    if w / h > r: nw = int(h * r); x0 = int((w - nw) * cx); im = im.crop((x0, 0, x0 + nw, h))
    else: nh = int(w / r); y0 = int((h - nh) * cy); im = im.crop((0, y0, w, y0 + nh))
    return im.resize((W, H), Image.LANCZOS)
CY = {"velours":1.0, "laiton":0.0, "prune":0.7, "cuir":0.55, "matieres":0.8}
for k, cy in CY.items(): crop(G.format(k), 1080, 1350, cy=cy).save(f"slides/{k}.jpg", quality=92)
W, H, g = 2664, 1776, 24
board = Image.new("RGB", (W, H), "white")
cw = (W - 2 * g) // 3; rh = (H - g) // 2
def zoom(k, cx, cy, side):
    im = Image.open(G.format(k)).convert("RGB"); w, h = im.size
    x0 = max(0, min(w - side, int(cx * w - side / 2))); y0 = max(0, min(h - side * rh // cw, int(cy * h - side * rh / cw / 2)))
    return im.crop((x0, y0, x0 + side, y0 + int(side * rh / cw))).resize((cw, rh), Image.LANCZOS)
tiles = [("velours", .42, .70, 640), ("laiton", .5, .22, 600), ("prune", .40, .44, 680),
         ("cuir", .38, .52, 640), ("douceur", .45, .45, 600), ("matieres", .55, .62, 700)]
for i, (k, cx, cy, side) in enumerate(tiles):
    board.paste(zoom(k, cx, cy, side), ((i % 3) * (cw + g), (i // 3) * (rh + g)))
board.save("slides/planche.jpg", quality=92)
print("ok")
