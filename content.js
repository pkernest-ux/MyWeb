(async () => {
  const contentTargets = document.querySelectorAll("[data-content]");

  if (!contentTargets.length) {
    return;
  }

  const previewStorageKey = "ernest-cms-preview-content";
  const isPreview = new URLSearchParams(window.location.search).get("cms-preview") === "1";

  const getValue = (source, path) =>
    path.split(".").reduce((value, key) => (value == null ? value : value[key]), source);

  const getPreviewContent = () => {
    if (!isPreview) return null;

    try {
      const rawPreview = localStorage.getItem(previewStorageKey);
      return rawPreview ? JSON.parse(rawPreview) : null;
    } catch (error) {
      console.warn("Preview content unavailable", error);
      return null;
    }
  };

  const showPreviewBanner = () => {
    if (!isPreview) return;

    const banner = document.createElement("div");
    banner.className = "cms-preview-banner";
    banner.textContent = "草稿預覽模式：這只是你尚未上架的內容，一般訪客不會看到。";
    document.body.prepend(banner);
  };

  try {
    const previewContent = getPreviewContent();
    let content = previewContent;

    if (!content) {
      const response = await fetch(`/content.json?ts=${Date.now()}`, { cache: "no-store" });

      if (!response.ok) {
        throw new Error(`Content request failed: ${response.status}`);
      }

      content = await response.json();
    }

    showPreviewBanner();

    contentTargets.forEach((target) => {
      const value = getValue(content, target.dataset.content);

      if (typeof value === "string") {
        target.textContent = value;
      }
    });
  } catch (error) {
    console.warn("Content override unavailable", error);
  }
})();
