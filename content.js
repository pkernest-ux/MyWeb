(async () => {
  const contentTargets = document.querySelectorAll("[data-content]");

  if (!contentTargets.length) {
    return;
  }

  const getValue = (source, path) =>
    path.split(".").reduce((value, key) => (value == null ? value : value[key]), source);

  try {
    const response = await fetch(`/content.json?ts=${Date.now()}`, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Content request failed: ${response.status}`);
    }

    const content = await response.json();

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
