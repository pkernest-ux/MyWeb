"""Convert numbered equirectangular panoramas into textured glTF (.glb) depth meshes.

Each panorama gets a monocular depth estimate (Depth Anything V2, ONNX, CPU),
which displaces a sphere around the camera into an approximate 3D shell of the
scene. The result is viewable in model3d.html.

Usage:
    python tools/pano2glb/pano2glb.py <photo-folder> [--out assets/models]

Writes <out>/<name>.glb for every photo plus <out>/manifest.json listing the
models in numbered order together with the order checks (gaps, duplicates,
non-2:1 images).
"""

import argparse
import io
import json
import re
import struct
import sys
import urllib.request
from pathlib import Path

import numpy as np
import onnxruntime as ort
from PIL import Image

MODEL_URL = "https://github.com/fabio-sim/Depth-Anything-ONNX/releases/download/v2.0.0/depth_anything_v2_vits.onnx"
MODEL_PATH = Path(__file__).with_name("depth_anything_v2_vits.onnx")
NET = 518  # model input size
MEAN = np.array([0.485, 0.456, 0.406], np.float32)
STD = np.array([0.229, 0.224, 0.225], np.float32)
IMAGE_EXT = {".jpg", ".jpeg", ".png", ".webp"}


# ---------- ordering ----------

def last_number(name):
    m = re.search(r"(\d+)(?!.*\d)", Path(name).stem)
    return int(m.group(1)) if m else None


def natural_key(name):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r"(\d+)", name)]


def order_report(entries):
    nums = [e["num"] for e in entries if e["num"] is not None]
    counts = {}
    for n in nums:
        counts[n] = counts.get(n, 0) + 1
    gaps = [n for n in range(min(nums), max(nums) + 1) if n not in counts] if nums else []
    return {
        "count": len(entries),
        "range": [min(nums), max(nums)] if nums else None,
        "missing": gaps,
        "duplicates": sorted(n for n, c in counts.items() if c > 1),
        "unnumbered": [e["file"] for e in entries if e["num"] is None],
        "notEquirect": [e["file"] for e in entries if abs(e["width"] / e["height"] - 2) > 0.05],
    }


# ---------- depth ----------

def load_session():
    if not MODEL_PATH.exists():
        print(f"Downloading depth model to {MODEL_PATH} ...", file=sys.stderr)
        urllib.request.urlretrieve(MODEL_URL, MODEL_PATH)
    return ort.InferenceSession(str(MODEL_PATH), providers=["CPUExecutionProvider"])


def infer(session, rgb):
    x = (np.asarray(rgb.resize((NET, NET), Image.BICUBIC), np.float32) / 255 - MEAN) / STD
    x = x.transpose(2, 0, 1)[None]
    return session.run(None, {session.get_inputs()[0].name: x})[0][0]


def panorama_disparity(session, img, width=1024):
    """Relative disparity for a full 360° panorama, shape (width//2, width).

    The panorama is covered by four 180°-wide windows (50% overlap, wrapping
    around). Each window's affine-invariant disparity is fitted to the running
    mosaic on the overlap, then blended with a cosine weight.
    """
    h, w = width // 2, width
    pano = np.asarray(img.convert("RGB").resize((w, h), Image.BICUBIC))
    wrapped = np.concatenate([pano, pano], axis=1)
    acc = np.zeros((h, w), np.float64)
    wsum = np.zeros((h, w), np.float64)
    ramp = np.sin(np.linspace(0, np.pi, h))[None, :] ** 2  # window weight across its width
    for k in range(4):
        x0 = k * w // 4
        crop = Image.fromarray(wrapped[:, x0 : x0 + h])
        d = np.asarray(Image.fromarray(infer(session, crop)).resize((h, h), Image.BILINEAR), np.float64)
        cols = (np.arange(h) + x0) % w
        if k:
            seen = wsum[:, cols] > 0
            a, b = np.polyfit(d[seen], (acc[:, cols] / np.maximum(wsum[:, cols], 1e-9))[seen], 1)
            d = a * d + b
        acc[:, cols] += d * ramp
        wsum[:, cols] += ramp
    return acc / wsum


def disparity_to_depth(disp, camera_height=1.6, floor_below_deg=30, max_depth=30.0):
    """Turn relative disparity into metric depth using the floor below the camera.

    Depth Anything predicts disparity up to an unknown affine map, so
    1/depth = a * disp + b. Pixels looking down more than ``floor_below_deg``
    are assumed to be floor at ``camera_height`` below the lens, which gives
    1/depth = sin(-lat) / camera_height there; a and b are fitted to that
    (with one round of outlier rejection for furniture on the floor).
    """
    h, w = disp.shape
    lat = (0.5 - (np.arange(h) + 0.5) / h) * np.pi
    rows = lat < -np.radians(floor_below_deg)
    x = disp[rows].ravel()
    y = np.repeat(np.sin(-lat[rows]) / camera_height, w)
    keep = np.ones_like(x, bool)
    for _ in range(2):
        a, b = np.polyfit(x[keep], y[keep], 1)
        res = y - (a * x + b)
        keep = np.abs(res) < 2 * res[keep].std() + 1e-9
    if a <= 0:  # degenerate fit (no visible floor): fall back to a plain scale
        a, b = np.median(y / np.maximum(x, 1e-6)), 0.0
    return 1.0 / np.maximum(a * disp + b, 1.0 / max_depth)


# ---------- mesh & glb ----------

def build_mesh(depth, grid_w=384, max_ratio=1.35):
    gh, gw = grid_w // 2, grid_w
    d = np.asarray(Image.fromarray(depth.astype(np.float32)).resize((gw, gh + 1), Image.BILINEAR))
    d = np.concatenate([d, d[:, :1]], axis=1)  # duplicate seam column so UVs stay continuous
    u = np.linspace(0, 1, gw + 1)
    v = np.linspace(0, 1, gh + 1)
    uu, vv = np.meshgrid(u, v)
    lon = (uu - 0.5) * 2 * np.pi
    lat = (0.5 - vv) * np.pi
    dirs = np.stack([np.cos(lat) * np.sin(lon), np.sin(lat), -np.cos(lat) * np.cos(lon)], -1)
    pos = (dirs * d[..., None]).reshape(-1, 3).astype(np.float32)
    uv = np.stack([uu, vv], -1).reshape(-1, 2).astype(np.float32)

    idx = np.arange((gh + 1) * (gw + 1)).reshape(gh + 1, gw + 1)
    a, b, c, e = idx[:-1, :-1], idx[:-1, 1:], idx[1:, :-1], idx[1:, 1:]
    dq = np.stack([d[:-1, :-1], d[:-1, 1:], d[1:, :-1], d[1:, 1:]])
    keep = (dq.max(0) / dq.min(0) < max_ratio).ravel()  # drop quads that span a depth jump
    quads = np.stack([a, b, c, e], -1).reshape(-1, 4)[keep]
    # winding faces the camera at the origin
    tris = np.concatenate([quads[:, [0, 1, 2]], quads[:, [1, 3, 2]]]).astype(np.uint32)
    return pos, uv, tris


def write_glb(path, pos, uv, tris, texture_jpeg, name):
    bufs, views, accessors = [], [], []

    def add(data, target, comp, typ, count, minmax=False):
        off = sum(len(b) for b in bufs)
        pad = (-len(data)) % 4
        bufs.append(data + b"\0" * pad)
        views.append({"buffer": 0, "byteOffset": off, "byteLength": len(data), **({"target": target} if target else {})})
        acc = {"bufferView": len(views) - 1, "componentType": comp, "count": count, "type": typ}
        if minmax:
            arr = np.frombuffer(data, np.float32).reshape(-1, 3)
            acc["min"], acc["max"] = arr.min(0).tolist(), arr.max(0).tolist()
        accessors.append(acc)
        return len(accessors) - 1

    p = add(pos.tobytes(), 34962, 5126, "VEC3", len(pos), minmax=True)
    t = add(uv.tobytes(), 34962, 5126, "VEC2", len(uv))
    i = add(tris.tobytes(), 34963, 5125, "SCALAR", tris.size)
    off = sum(len(b) for b in bufs)
    bufs.append(texture_jpeg + b"\0" * ((-len(texture_jpeg)) % 4))
    views.append({"buffer": 0, "byteOffset": off, "byteLength": len(texture_jpeg)})
    binary = b"".join(bufs)

    gltf = {
        "asset": {"version": "2.0", "generator": "pano2glb"},
        "extensionsUsed": ["KHR_materials_unlit"],
        "scene": 0,
        "scenes": [{"nodes": [0]}],
        "nodes": [{"mesh": 0, "name": name}],
        "meshes": [{"name": name, "primitives": [{"attributes": {"POSITION": p, "TEXCOORD_0": t}, "indices": i, "material": 0}]}],
        "materials": [{
            "name": name,
            "pbrMetallicRoughness": {"baseColorTexture": {"index": 0}, "metallicFactor": 0, "roughnessFactor": 1},
            "doubleSided": True,
            "extensions": {"KHR_materials_unlit": {}},
        }],
        "textures": [{"source": 0, "sampler": 0}],
        "samplers": [{"magFilter": 9729, "minFilter": 9987, "wrapS": 33071, "wrapT": 33071}],
        "images": [{"bufferView": len(views) - 1, "mimeType": "image/jpeg"}],
        "accessors": accessors,
        "bufferViews": views,
        "buffers": [{"byteLength": len(binary)}],
    }
    js = json.dumps(gltf, separators=(",", ":")).encode()
    js += b" " * ((-len(js)) % 4)
    with open(path, "wb") as f:
        f.write(struct.pack("<III", 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(binary)))
        f.write(struct.pack("<II", len(js), 0x4E4F534A) + js)
        f.write(struct.pack("<II", len(binary), 0x004E4942) + binary)


def texture_bytes(img, width):
    buf = io.BytesIO()
    img.convert("RGB").resize((width, width // 2), Image.LANCZOS).save(buf, "JPEG", quality=85, optimize=True)
    return buf.getvalue()


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("folder", type=Path)
    ap.add_argument("--out", type=Path, default=Path("assets/models"))
    ap.add_argument("--grid", type=int, default=384, help="mesh columns (rows = grid/2)")
    ap.add_argument("--texture", type=int, default=2048, help="texture width in pixels")
    ap.add_argument("--camera-height", type=float, default=1.6, help="metres, used to scale the depth")
    args = ap.parse_args()

    files = sorted((f for f in args.folder.iterdir() if f.suffix.lower() in IMAGE_EXT), key=lambda f: natural_key(f.name))
    if not files:
        sys.exit(f"No images found in {args.folder}")
    args.out.mkdir(parents=True, exist_ok=True)
    session = load_session()

    entries = []
    for n, f in enumerate(files, 1):
        img = Image.open(f)
        img.load()
        entry = {"file": f.name, "num": last_number(f.name), "width": img.width, "height": img.height}
        print(f"[{n}/{len(files)}] {f.name} {img.width}x{img.height}", file=sys.stderr)
        depth = disparity_to_depth(panorama_disparity(session, img), args.camera_height)
        pos, uv, tris = build_mesh(depth, args.grid)
        glb = f.stem + ".glb"
        write_glb(args.out / glb, pos, uv, tris, texture_bytes(img, args.texture), f.stem)
        entry.update(model=glb, triangles=len(tris), sizeBytes=(args.out / glb).stat().st_size)
        entries.append(entry)

    manifest = {"report": order_report(entries), "models": entries}
    (args.out / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2))
    print(json.dumps(manifest["report"], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
