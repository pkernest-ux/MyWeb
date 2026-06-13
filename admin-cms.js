const pages = [
  {
    id: "home",
    label: "首頁",
    eyebrow: "Home",
    href: "./index.html",
    description: "維護首頁主視覺、行動按鈕、區塊標題與聯絡文案。",
    fields: [
      ["home.heroLabel", "主視覺標籤"],
      ["home.heroTitle", "主標題", "textarea"],
      ["home.heroLead", "主視覺說明", "textarea"],
      ["home.primaryCta", "主要按鈕文字"],
      ["home.secondaryCta", "次要按鈕文字"],
      ["home.aboutTitle", "關於區塊標題", "textarea"],
      ["home.aboutText", "關於區塊文字", "textarea"],
      ["home.workTitle", "作品區塊標題", "textarea"],
      ["home.toolkitTitle", "工具區塊標題", "textarea"],
      ["home.toolkitText", "工具區塊文字", "textarea"],
      ["home.contactTitle", "聯絡區塊標題", "textarea"],
      ["home.contactText", "聯絡區塊文字", "textarea"]
    ]
  },
  {
    id: "about",
    label: "關於",
    eyebrow: "About",
    href: "./about.html",
    description: "維護關於頁的主視覺與個人定位文字。",
    fields: [
      ["about.heroTitle", "主標題", "textarea"],
      ["about.heroLead", "主視覺說明", "textarea"],
      ["about.sectionTitle", "內容區塊標題", "textarea"],
      ["about.sectionText", "內容區塊文字", "textarea"]
    ]
  },
  {
    id: "expertise",
    label: "專長",
    eyebrow: "Expertise",
    href: "./expertise.html",
    description: "維護專長頁的主標題與說明文字。",
    fields: [
      ["expertise.heroTitle", "主標題", "textarea"],
      ["expertise.heroLead", "主視覺說明", "textarea"]
    ]
  },
  {
    id: "works",
    label: "作品",
    eyebrow: "Works",
    href: "./works.html",
    description: "維護作品頁的主標題與說明文字。",
    fields: [
      ["works.heroTitle", "主標題", "textarea"],
      ["works.heroLead", "主視覺說明", "textarea"]
    ]
  },
  {
    id: "services",
    label: "服務",
    eyebrow: "Services",
    href: "./services.html",
    description: "維護服務頁的主標題與說明文字。",
    fields: [
      ["services.heroTitle", "主標題", "textarea"],
      ["services.heroLead", "主視覺說明", "textarea"]
    ]
  },
  {
    id: "toolkit",
    label: "工具",
    eyebrow: "Toolkit",
    href: "./toolkit.html",
    description: "維護工具頁主視覺，以及連到影片區塊的介紹文字。",
    fields: [
      ["toolkit.heroTitle", "主標題", "textarea"],
      ["toolkit.heroLead", "主視覺說明", "textarea"],
      ["toolkit.videoTitle", "影片區塊標題", "textarea"],
      ["toolkit.videoText", "影片區塊文字", "textarea"]
    ]
  },
  {
    id: "journal",
    label: "文章",
    eyebrow: "Journal",
    href: "./journal.html",
    description: "維護文章頁的主標題與說明文字。",
    fields: [
      ["journal.heroTitle", "主標題", "textarea"],
      ["journal.heroLead", "主視覺說明", "textarea"]
    ]
  },
  {
    id: "video",
    label: "影片",
    eyebrow: "Video",
    href: "./video.html",
    description: "維護影片頁主視覺、精選影片標題、列表標題與 CTA 文案。",
    fields: [
      ["video.heroTitle", "主標題", "textarea"],
      ["video.heroLead", "主視覺說明", "textarea"],
      ["video.featuredTitle", "精選影片標題"],
      ["video.recentTitle", "近期探索標題"],
      ["video.ctaTitle", "CTA 標題", "textarea"],
      ["video.ctaText", "CTA 文字", "textarea"]
    ]
  }
];

const form = document.querySelector("#cms-form");
const pageList = document.querySelector("#cms-page-list");
const fieldsElement = document.querySelector("#cms-fields");
const statusElement = document.querySelector("#cms-status");
const pageTitle = document.querySelector("#cms-page-title");
const pageDescription = document.querySelector("#cms-page-description");
const previewLink = document.querySelector("#cms-preview-link");
const resetButton = document.querySelector("#cms-reset-button");
let currentContent = {};
let activePageId = pages[0].id;

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

const getActivePage = () => pages.find((page) => page.id === activePageId) || pages[0];

const createField = ([path, label, type], content) => {
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
  return wrapper;
};

const renderPageList = () => {
  if (!pageList) return;
  pageList.innerHTML = "";

  pages.forEach((page) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cms-page-button";
    button.dataset.page = page.id;
    button.setAttribute("aria-pressed", String(page.id === activePageId));
    button.innerHTML = `<span>${page.eyebrow}</span><strong>${page.label}</strong>`;
    pageList.append(button);
  });
};

const renderForm = (content) => {
  const activePage = getActivePage();
  if (!fieldsElement || !pageTitle || !pageDescription || !previewLink) return;

  fieldsElement.innerHTML = "";
  pageTitle.textContent = activePage.label;
  pageDescription.textContent = activePage.description;
  previewLink.href = activePage.href;

  activePage.fields.forEach((field) => {
    fieldsElement.append(createField(field, content));
  });

  renderPageList();
};

const loadContent = async () => {
  setStatus("Loading content...");
  const response = await fetch(`/content.json?ts=${Date.now()}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Unable to load content: ${response.status}`);
  }

  currentContent = await response.json();
  renderForm(currentContent);
  setStatus("已載入，可開始編輯。");
};

pageList?.addEventListener("click", (event) => {
  const button = event.target.closest(".cms-page-button");
  if (!button || button.dataset.page === activePageId) return;

  activePageId = button.dataset.page;
  renderForm(currentContent);
  setStatus(`正在編輯：${getActivePage().label}`);
});

resetButton?.addEventListener("click", () => {
  renderForm(currentContent);
  setStatus(`已還原目前頁面：${getActivePage().label}`);
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nextContent = structuredClone(currentContent);
  const data = new FormData(form);

  for (const [path, value] of data.entries()) {
    setValue(nextContent, path, String(value));
  }

  setStatus("儲存中...");

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
    setStatus("已儲存。Azure 正在重新部署，通常 1 到 3 分鐘後會更新前台。", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
});

loadContent().catch((error) => setStatus(error.message, "error"));
