# pano2glb

Turns numbered 360° equirectangular photos into textured glTF (`.glb`) models
that `model3d.html` displays.

For every photo it:

1. estimates depth with Depth Anything V2 (small, ONNX, runs on CPU) over four
   overlapping 180° windows stitched into one 360° depth map;
2. scales depth to metres by fitting it to the floor below the camera
   (`--camera-height`, default 1.6 m);
3. displaces a sphere around the camera into a textured mesh, dropping
   triangles that span a depth jump, and writes it as `.glb`.

It also writes `manifest.json` with the models in numbered order and an order
report (missing numbers, duplicates, unnumbered files, non-2:1 images).

```sh
pip install -r tools/pano2glb/requirements.txt
python tools/pano2glb/pano2glb.py path/to/Photos-1-001 --out assets/models
```

The depth model (~100 MB) is downloaded next to the script on first run.

Limits: this is single-view depth, so each model is an approximate shell seen
from one spot — walls can bow and scale is only as good as the floor fit.
Models are not aligned with each other.
