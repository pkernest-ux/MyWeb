const schema = [
  {
    section: "Home",
    fields: [
      ["home.heroLabel", "Hero Label"],
      ["home.heroTitle", "Hero Title", "textarea"],
      ["home.heroLead", "Hero Lead", "textarea"],
      ["home.primaryCta", "Primary CTA"],
      ["home.secondaryCta", "Secondary CTA"],
      ["home.aboutTitle", "About Title", "textarea"],
      ["home.aboutText", "About Text", "textarea"],
      ["home.workTitle", "Work Title", "textarea"],
      ["home.toolkitTitle", "Toolkit Title", "textarea"],
      ["home.toolkitText", "Toolkit Text", "textarea"],
      ["home.contactTitle", "Contact Title", "textarea"],
      ["home.contactText", "Contact Text", "textarea"]
    ]
  },
  {
    section: "Pages",
    fields: [
      ["about.heroTitle", "About Hero Title", "textarea"],
      ["about.heroLead", "About Hero Lead", "textarea"],
      ["about.sectionTitle", "About Section Title", "textarea"],
      ["about.sectionText", "About Section Text", "textarea"],
      ["expertise.heroTitle", "Expertise Title", "textarea"],
      ["expertise.heroLead", "Expertise Lead", "textarea"],
      ["works.heroTitle", "Works Title", "textarea"],
      ["works.heroLead", "Works Lead", "textarea"],
      ["services.heroTitle", "Services Title", "textarea"],
      ["services.heroLead", "Services Lead", "textarea"],
      ["toolkit.heroTitle", "Stack Title", "textarea"],
      ["toolkit.heroLead", "Stack Lead", "textarea"],
      ["toolkit.videoTitle", "Stack Video Title", "textarea"],
      ["toolkit.videoText", "Stack Video Text", "textarea"],
      ["journal.heroTitle", "Journal Title", "textarea"],
      ["journal.heroLead", "Journal Lead", "textarea"],
      ["video.heroTitle", "Video Title", "textarea"],
      ["video.heroLead", "Video Lead", "textarea"],
      ["video.featuredTitle", "Featured Video Title"],
      ["video.recentTitle", "Recent Section Title"],
      ["video.ctaTitle", "Video CTA Title", "textarea"],
      ["video.ctaText", "Video CTA Text", "textarea"]
    ]
  }
];

const form = document.querySelector("#cms-form");
const statusElement = document.querySelector("#cms-status");
let currentContent = {};

const getValue = (source, path) =>
  path.split(".").reduce((value, key) => (value == null ? value : value[key]), source);

const setValue = (source, path, value) => {
  const keys = path.split(".");
  const last = keys.pop();
  const target = keys.reduce((obj, key) => {
    obj[key] = obj[key] || {};
    return obj[key];
  }, source);

  target[last] = value;
};

const setStatus = (message, type = "") => {
  if (!statusElement) return;
  statusElement.textContent = message;
  statusElement.dataset.type = type;
};

const renderForm = (content) => {
  form.innerHTML = "";

  schema.forEach((group) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = group.section;
    fieldset.append(legend);

    group.fields.forEach(([path, label, type]) => {
      const wrapper = document.createElement("label");
      wrapper.className = "cms-field";
      wrapper.dataset.path = path;

      const text = document.createElement("span");
      text.textContent = label;

      const input =
        type === "textarea" ? document.createElement("textarea") : document.createElement("input");
      input.name = path;
      input.value = getValue(content, path) || "";

      if (type === "textarea") {
        input.rows = 4;
      } else {
        input.type = "text";
      }

      wrapper.append(text, input);
      fieldset.append(wrapper);
    });

    form.append(fieldset);
  });
};

const loadContent = async () => {
  setStatus("Loading content...");
  const response = await fetch(`/content.json?ts=${Date.now()}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Unable to load content: ${response.status}`);
  }

  currentContent = await response.json();
  renderForm(currentContent);
  setStatus("Ready");
};

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nextContent = structuredClone(currentContent);
  const data = new FormData(form);

  for (const [path, value] of data.entries()) {
    setValue(nextContent, path, String(value));
  }

  setStatus("Saving...");

  try {
    const response = await fetch("/api/save-content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nextContent)
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.error || `Save failed: ${response.status}`);
    }

    currentContent = nextContent;
    setStatus("Saved. Azure is redeploying; changes usually appear in 1 to 3 minutes.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
});

loadContent().catch((error) => setStatus(error.message, "error"));
