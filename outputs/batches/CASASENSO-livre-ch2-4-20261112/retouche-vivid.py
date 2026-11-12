import sys
from PIL import Image, ImageOps, ImageEnhance, ImageFilter
def grade(im, strength=1.0, shadows=0.82):
    im = im.convert('RGB')
    im = ImageOps.autocontrast(im, cutoff=0.6)
    lut = [int(255 * ((i / 255) ** shadows)) for i in range(256)]
    im = im.point(lut * 3)
    im = ImageEnhance.Contrast(im).enhance(1 + 0.10 * strength)
    im = ImageEnhance.Color(im).enhance(1 + 0.26 * strength)
    r, g, b = im.split()
    r = r.point(lambda v: min(255, int(v * (1 + 0.035 * strength))))
    b = b.point(lambda v: int(v * (1 - 0.04 * strength)))
    im = Image.merge('RGB', (r, g, b))
    return im.filter(ImageFilter.UnsharpMask(radius=2, percent=int(55 * strength), threshold=3))
def crop(src, W, H, cx=0.5, cy=0.5):
    im = ImageOps.exif_transpose(Image.open(src)).convert('RGB'); w, h = im.size; r = W / H
    if w / h > r: nw = int(h * r); x0 = int((w - nw) * cx); im = im.crop((x0, 0, x0 + nw, h))
    else: nh = int(w / r); y0 = int((h - nh) * cy); im = im.crop((0, y0, w, y0 + nh))
    return im.resize((W, H), Image.LANCZOS)

def vivid(im, lift=0.55, sat=1.32, warm=1.0, contrast=1.06):
    from PIL import ImageChops
    im = im.convert('RGB')
    L = im.convert('L').filter(ImageFilter.GaussianBlur(18))
    mask = L.point(lambda v: int(255 * (1 - v / 255) ** 1.4))
    bright = im.point([int(255 * ((i / 255) ** lift)) for i in range(256)] * 3)
    out = Image.composite(bright, im, mask)
    hi = L.point(lambda v: 255 if v > 235 else int(max(0, (v - 200)) * 255 / 35))
    out = Image.composite(im, out, hi)
    out = ImageEnhance.Contrast(out).enhance(contrast)
    out = ImageEnhance.Color(out).enhance(sat)
    r, g, b = out.split()
    r = r.point(lambda v: min(255, int(v * (1 + 0.03 * warm)))); b = b.point(lambda v: int(v * (1 - 0.035 * warm)))
    out = Image.merge('RGB', (r, g, b))
    return out.filter(ImageFilter.UnsharpMask(radius=2, percent=60, threshold=3))
