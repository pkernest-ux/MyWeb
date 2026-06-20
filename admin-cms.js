const pages = [
  {
    id: "home",
    label: "首頁",
    eyebrow: "Home",
    href: "./index.html",
    description: "維護首頁主視覺、行動按鈕、區塊標題與聯絡文案。",
    fields: [
      ["home.heroTitle", "大標題（白色最大字）", "textarea", "這個欄位會改首頁第一屏最大的白色標題。"],
      ["home.heroLead", "主視覺說明", "textarea", "大標題下方的介紹文字。"],
      ["home.heroLabel", "黃色小標籤", "text", "這是大標題上方的黃色小字，不是主標題。建議保持短一點。"],
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
      ["about.heroTitle", "大標題（白色最大字）", "textarea"],
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
      ["expertise.heroTitle", "大標題（白色最大字）", "textarea"],
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
      ["works.heroTitle", "大標題（白色最大字）", "textarea"],
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
      ["services.heroTitle", "大標題（白色最大字）", "textarea"],
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
      ["toolkit.heroTitle", "大標題（白色最大字）", "textarea"],
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
      ["journal.heroTitle", "大標題（白色最大字）", "textarea"],
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
      ["video.heroTitle", "大標題（白色最大字）", "textarea"],
      ["video.heroLead", "主視覺說明", "textarea"],
      ["video.featuredTitle", "精選影片標題"],
      ["video.recentTitle", "近期探索標題"],
      ["video.ctaTitle", "CTA 標題", "textarea"],
      ["video.ctaText", "CTA 文字", "textarea"]
    ]
  }
];

const arPages = [
  {
    id: "ar-map",
    label: "平面圖管理",
    eyebrow: "AR",
    groupLabel: "AR導引功能",
    href: "./ar.html",
    description: "管理 AR 導引用的建築、樓層、平面圖、定位點與路徑節點。",
    type: "ar",
    arTab: "map",
    fields: []
  },
  {
    id: "ar-list",
    label: "點位列表",
    eyebrow: "AR",
    groupLabel: "AR導引功能",
    href: "./ar.html",
    description: "以列表方式檢視與維護所有 AR 點位資料。",
    type: "ar",
    arTab: "list",
    fields: []
  },
  {
    id: "ar-settings",
    label: "系統設定",
    eyebrow: "AR",
    groupLabel: "AR導引功能",
    href: "./ar.html",
    description: "調整 AR 導引系統的專案名稱與導覽參數。",
    type: "ar",
    arTab: "settings",
    fields: []
  },
  {
    id: "ar-export",
    label: "匯出JSON",
    eyebrow: "AR",
    groupLabel: "AR導引功能",
    href: "./ar.html",
    description: "匯出目前 AR 導引資料，提供前台或系統串接使用。",
    type: "ar",
    arTab: "export",
    fields: []
  }
];

pages.push(...arPages);

const draftStorageKey = "ernest-cms-draft";
const previewStorageKey = "ernest-cms-preview-content";

const form = document.querySelector("#cms-form");
const pageList = document.querySelector("#cms-page-list");
const fieldsElement = document.querySelector("#cms-fields");
const arPanel = document.querySelector("#cms-ar-panel");
const arFrame = document.querySelector("#cms-ar-frame");
const statusElement = document.querySelector("#cms-status");
const pageTitle = document.querySelector("#cms-page-title");
const pageDescription = document.querySelector("#cms-page-description");
const previewButton = document.querySelector("#cms-preview-button");
const draftButton = document.querySelector("#cms-draft-button");
const resetButton = document.querySelector("#cms-reset-button");
const formActions = document.querySelector(".admin-form-actions");
const publishButton = form?.querySelector('button[type="submit"]');
let publishedContent = {};
let workingContent = {};
let activePageId = pages[0].id;
let arMenuExpanded = false;
let hasDraft = false;
let hasUnsavedChanges = false;

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

const setStatus = (title, detail = "", type = "") => {
  if (!statusElement) return;
  statusElement.dataset.type = type;
  statusElement.replaceChildren();

  const titleElement = document.createElement("strong");
  titleElement.textContent = title;
  statusElement.append(titleElement);

  if (detail) {
    const detailElement = document.createElement("span");
    detailElement.textContent = detail;
    statusElement.append(detailElement);
  }
};

const setBusy = (isBusy) => {
  [previewButton, draftButton, resetButton, publishButton].forEach((button) => {
    if (button) button.disabled = isBusy;
  });
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
  hasUnsavedChanges = false;
};

const clearDraft = () => {
  localStorage.removeItem(draftStorageKey);
  localStorage.removeItem(previewStorageKey);
  hasDraft = false;
  hasUnsavedChanges = false;
};

const syncActivePageToWorking = () => {
  if (!form) return;
  const data = new FormData(form);

  for (const [path, value] of data.entries()) {
    setValue(workingContent, path, String(value));
  }
};

const createField = ([path, label, type = "text", hint], content) => {
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

  if (hint) {
    const help = document.createElement("small");
    help.className = "cms-field-hint";
    help.textContent = hint;
    wrapper.append(help);
  }

  return wrapper;
};

const renderPageList = () => {
  if (!pageList) return;
  pageList.innerHTML = "";

  const renderedGroups = new Set();
  pages.forEach((page) => {
    if (page.groupLabel && !renderedGroups.has(page.groupLabel)) {
      const group = document.createElement("button");
      group.type = "button";
      group.className = "cms-page-button cms-page-group-button";
      group.dataset.group = "ar";
      group.setAttribute("aria-expanded", String(arMenuExpanded));
      group.innerHTML = `<span>AR</span><strong>${page.groupLabel}</strong>`;
      pageList.append(group);
      renderedGroups.add(page.groupLabel);
    }

    if (page.groupLabel && !arMenuExpanded) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = `cms-page-button${page.groupLabel ? " is-subpage" : ""}`;
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

  const isArPage = activePage.type === "ar";
  fieldsElement.hidden = isArPage;
  if (arPanel) arPanel.hidden = !isArPage;
  if (formActions) formActions.hidden = isArPage;
  if (previewButton) previewButton.hidden = isArPage;

  if (isArPage) {
    if (arFrame) {
      const targetSrc = `./ar.html?embedded=1&tab=${encodeURIComponent(activePage.arTab)}`;
      if (!arFrame.getAttribute("src")?.includes(`tab=${activePage.arTab}`)) {
        arFrame.setAttribute("src", targetSrc);
      }
    }
    renderPageList();
    return;
  }

  activePage.fields.forEach((field) => {
    fieldsElement.append(createField(field, workingContent));
  });

  renderPageList();
};

const loadContent = async () => {
  setStatus("讀取中", "正在載入目前網站內容。", "loading");
  const response = await fetch(`/content.json?ts=${Date.now()}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Unable to load content: ${response.status}`);
  }

  publishedContent = await response.json();
  const savedDraft = getSavedDraft();
  workingContent = cloneContent(savedDraft?.content || publishedContent);
  hasDraft = Boolean(savedDraft);
  renderForm();
  setStatus(
    hasDraft ? "已載入草稿" : "已載入正式內容",
    hasDraft ? "目前畫面是尚未上架的草稿，確認後可預覽或變更上架。" : "你可以開始編輯，編輯後請先儲存草稿或預覽。",
    hasDraft ? "draft" : "ready"
  );
};

pageList?.addEventListener("click", (event) => {
  const button = event.target.closest(".cms-page-button");
  if (button?.dataset.group === "ar") {
    arMenuExpanded = !arMenuExpanded;
    renderPageList();
    setStatus(
      arMenuExpanded ? "AR導引功能已展開" : "AR導引功能已收合",
      arMenuExpanded
        ? "請選擇平面圖管理、點位列表、系統設定或匯出JSON。"
        : "AR 子功能已收合，需要維護時再點擊 AR導引功能。",
      arMenuExpanded ? "ready" : "draft"
    );
    return;
  }

  if (!button || button.dataset.page === activePageId) return;

  syncActivePageToWorking();
  activePageId = button.dataset.page;
  if (getActivePage().type === "ar") arMenuExpanded = true;
  renderForm();
  const activePage = getActivePage();
  if (activePage.type === "ar") {
    setStatus(
      "AR導引功能已開啟",
      `目前正在維護「${activePage.label}」。AR 資料會先儲存在瀏覽器，完成後可到「匯出JSON」下載配置檔。`,
      "ready"
    );
    return;
  }
  setStatus(
    hasDraft || hasUnsavedChanges ? "編輯草稿中" : "編輯中",
    `目前正在維護「${getActivePage().label}」頁面。`,
    hasDraft || hasUnsavedChanges ? "draft" : "ready"
  );
});

fieldsElement?.addEventListener("input", () => {
  hasUnsavedChanges = true;
  setStatus("尚未儲存", "欄位已變更。請按「儲存草稿」保留草稿，或按「預覽草稿」查看效果。", "pending");
});

draftButton?.addEventListener("click", () => {
  syncActivePageToWorking();
  writeDraft();
  setStatus("已儲存草稿", "草稿已保存在這台瀏覽器，尚未正式上架，一般訪客不會看到。", "draft");
});

previewButton?.addEventListener("click", () => {
  syncActivePageToWorking();
  writeDraft();
  localStorage.setItem(previewStorageKey, JSON.stringify(workingContent));

  const activePage = getActivePage();
  const separator = activePage.href.includes("?") ? "&" : "?";
  window.open(`${activePage.href}${separator}cms-preview=1&ts=${Date.now()}`, "_blank", "noreferrer");
  setStatus("預覽中", "已開啟草稿預覽。預覽不會上架，也不會影響一般訪客。", "preview");
});

resetButton?.addEventListener("click", () => {
  clearDraft();
  workingContent = cloneContent(publishedContent);
  renderForm();
  setStatus("已放棄草稿", "畫面已還原為目前正式上架內容。", "ready");
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  syncActivePageToWorking();
  setStatus("上架中", "正在把變更寫入 GitHub，完成後 Azure 會自動重新部署。", "publishing");
  setBusy(true);

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
    setStatus("已上架", "變更已寫入 GitHub。Azure 正在重新部署，通常 1 到 3 分鐘後會更新前台。", "published");
  } catch (error) {
    setStatus("上架失敗", error.message, "error");
  } finally {
    setBusy(false);
  }
});

loadContent().catch((error) => setStatus("讀取失敗", error.message, "error"));
