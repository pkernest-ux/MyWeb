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

const draftStorageKey = "ernest-cms-draft";
const previewStorageKey = "ernest-cms-preview-content";

const form = document.querySelector("#cms-form");
const pageList = document.querySelector("#cms-page-list");
const fieldsElement = document.querySelector("#cms-fields");
const statusElement = document.querySelector("#cms-status");
const pageTitle = document.querySelector("#cms-page-title");
const pageDescription = document.querySelector("#cms-page-description");
const previewButton = document.querySelector("#cms-preview-button");
const draftButton = document.querySelector("#cms-draft-button");
const resetButton = document.querySelector("#cms-reset-button");
let publishedContent = {};
let workingContent = {};
let activePageId = pages[0].id;
let hasDraft = false;

const cloneContent = (content) => JSON.parse(JSON.stringify(content || {}));

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

const getSavedDraft = () => {
  try {
    const rawDraft = localStorage.getItem(draftStorageKey);
    if (!rawDraft) return null;
    const draft = JSON.parse(rawDraft);
    return draft && draft.content ? draft : null;
  } catch (error) {
    console.warn("Draft unavailable", error);
    return null;
  }
};

const writeDraft = () => {
  localStorage.setItem(
    draftStorageKey,
    JSON.stringify({
      updatedAt: new Date().toISOString(),
      content: workingContent
    })
  );
  hasDraft = true;
};

const clearDraft = () => {
  localStorage.removeItem(draftStorageKey);
  localStorage.removeItem(previewStorageKey);
  hasDraft = false;
};

const syncActivePageToWorking = () => {
  if (!form) return;
  const data = new FormData(form);

  for (const [path, value] of data.entries()) {
    setValue(workingContent, path, String(value));
  }
};

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

const renderForm = () => {
  const activePage = getActivePage();
  if (!fieldsElement || !pageTitle || !pageDescription) return;

  fieldsElement.innerHTML = "";
  pageTitle.textContent = activePage.label;
  pageDescription.textContent = activePage.description;

  activePage.fields.forEach((field) => {
    fieldsElement.append(createField(field, workingContent));
  });

  renderPageList();
};

const loadContent = async () => {
  setStatus("Loading content...");
  const response = await fetch(`/content.json?ts=${Date.now()}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Unable to load content: ${response.status}`);
  }

  publishedContent = await response.json();
  const savedDraft = getSavedDraft();
  workingContent = cloneContent(savedDraft?.content || publishedContent);
  hasDraft = Boolean(savedDraft);
  renderForm();
  setStatus(hasDraft ? "已載入尚未上架的草稿。" : "已載入正式內容，可開始編輯。");
};

pageList?.addEventListener("click", (event) => {
  const button = event.target.closest(".cms-page-button");
  if (!button || button.dataset.page === activePageId) return;

  syncActivePageToWorking();
  activePageId = button.dataset.page;
  renderForm();
  setStatus(hasDraft ? `正在編輯草稿：${getActivePage().label}` : `正在編輯：${getActivePage().label}`);
});

draftButton?.addEventListener("click", () => {
  syncActivePageToWorking();
  writeDraft();
  setStatus("草稿已儲存。這不會影響前台正式內容。", "success");
});

previewButton?.addEventListener("click", () => {
  syncActivePageToWorking();
  writeDraft();
  localStorage.setItem(previewStorageKey, JSON.stringify(workingContent));

  const activePage = getActivePage();
  const separator = activePage.href.includes("?") ? "&" : "?";
  window.open(`${activePage.href}${separator}cms-preview=1&ts=${Date.now()}`, "_blank", "noreferrer");
  setStatus("已開啟草稿預覽。預覽不會上架，也不會影響一般訪客。", "success");
});

resetButton?.addEventListener("click", () => {
  clearDraft();
  workingContent = cloneContent(publishedContent);
  renderForm();
  setStatus("草稿已放棄，畫面已還原為目前正式內容。");
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  syncActivePageToWorking();
  setStatus("正在上架變更...");

  try {
    const response = await fetch("/api/save-content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workingContent)
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.error || `Save failed: ${response.status}`);
    }

    publishedContent = cloneContent(workingContent);
    clearDraft();
    setStatus("已上架。Azure 正在重新部署，通常 1 到 3 分鐘後會更新前台。", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
});

loadContent().catch((error) => setStatus(error.message, "error"));
