# 虛構圖書館環景素材

用途：螢幕展示／手機翻拍辨識 demo；不是實際場域，不代表定位準確率，也不是測量用環景。左右接縫及透視一致性未完成環景檢視驗收。

由內建 image_gen 產生；已接入獨立唯讀模擬後台，不加入正式場域。素材檔為 panorama-generated.png。發布狀態以 Azure 預覽站檢查結果為準。

## 生成提示

Use case: photorealistic-natural. Asset type: synthetic 360 equirectangular panorama for a local computer-vision demo, NOT a real place. Generate a single 2:1 full spherical equirectangular indoor panorama, 360 degrees horizontal, 180 vertical, horizon precisely at mid-height, suitable to view inside a panorama sphere. Camera at standing eye level in a fictional public-library reception lobby with a corridor. Rich crisp permanent visual features in every horizontal direction: wood-grain shelves and varied book spines, a reception desk with textured stone front, a distinct mosaic wall, framed abstract geometric prints, doors with patterned panels. No people. No brands, no readable text, no UI, no logos, no watermarks. Neutral daylight, realistic architectural materials, enough sharp high-contrast corners for image feature matching, not overly glossy. Ceiling and floor naturally distorted near the poles as proper equirectangular mapping, continuous left-right seam. This is a generated simulation, not survey geometry. Output only the panorama image.
