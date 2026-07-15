/* 有機農業推廣成效儀表板 — 前台圖表 */
(async function () {
  const [data, twGeo] = await Promise.all([
    fetch("./data/cache.json", { cache: "no-store" }).then(r => r.json()),
    fetch("./static/taiwan.json").then(r => r.json()),
  ]);
  echarts.registerMap("taiwan", twGeo);

  // ── 色彩權杖（dataviz 參考調色盤，已通過 CVD 驗證） ──
  const C = {
    s1: "#2a78d6", s2: "#1baf7a", s3: "#eda100",
    deemph: "#cfcec6", ink: "#0b0b0b", ink2: "#52514e",
    muted: "#898781", grid: "#e1e0d9", baseline: "#c3c2b7",
    surface: "#fcfcfb",
  };
  const BLUES = ["#cde2fb", "#9ec5f4", "#6da7ec", "#3987e5", "#256abf", "#184f95", "#0d366b"];

  const fmt = n => (n === null || n === undefined) ? "—" : Number(n).toLocaleString("zh-Hant-TW");
  const mmdd = d => `${+d.slice(5, 7)}/${+d.slice(8, 10)}`;

  const FONT = 'system-ui, -apple-system, "Segoe UI", "Microsoft JhengHei", sans-serif';
  echarts.registerTheme && null; // 使用逐圖設定

  const toolbox = {
    right: 4, top: 0, itemSize: 13, iconStyle: { borderColor: C.muted },
    feature: {
      dataView: { readOnly: true, title: "資料檢視", lang: ["資料檢視（表格）", "關閉", ""], backgroundColor: C.surface, textColor: C.ink2 },
      saveAsImage: { title: "下載圖檔", name: "有機農業儀表板" },
    },
  };
  const tooltipBase = {
    backgroundColor: C.surface, borderColor: "rgba(11,11,11,0.12)",
    textStyle: { color: C.ink, fontFamily: FONT, fontSize: 12.5 },
    extraCssText: "box-shadow:0 4px 14px rgba(0,0,0,.10);border-radius:8px;",
  };
  function catAxis(extra) {
    return Object.assign({
      type: "category",
      axisLine: { lineStyle: { color: C.baseline } },
      axisTick: { show: false },
      axisLabel: { color: C.muted, fontFamily: FONT },
    }, extra || {});
  }
  function valAxis(extra) {
    return Object.assign({
      type: "value",
      axisLabel: { color: C.muted, fontFamily: FONT },
      splitLine: { lineStyle: { color: C.grid, width: 1 } },
    }, extra || {});
  }
  const charts = [];
  // 容器尺寸一有變化（初次排版、頁籤切換、轉向）即補繪，避免 0 寬度殘留
  const ro = new ResizeObserver(entries => {
    for (const e of entries) {
      const inst = echarts.getInstanceByDom(e.target);
      if (inst && e.contentRect.width > 0) inst.resize();
    }
  });
  function make(id, option, media) {
    const el = document.getElementById(id);
    if (!el) return null;
    const ch = echarts.init(el, null, { renderer: "canvas" });
    option.animation = false; // 報表型儀表板：直接呈現最終狀態，亦利於圖檔匯出
    ch.setOption(media ? { baseOption: option, media } : option);
    charts.push(ch);
    ro.observe(el);
    return ch;
  }
  window.addEventListener("resize", () => charts.forEach(c => c.resize()));

  // ── 頁籤切換（隱藏面板中的圖表在顯示時需 resize 補繪） ──
  function activateTab(name) {
    document.querySelectorAll(".tab-btn").forEach(b =>
      b.classList.toggle("on", b.dataset.tab === name));
    document.querySelectorAll(".tab-panel").forEach(p =>
      p.classList.toggle("on", p.id === "panel-" + name));
    if (history.replaceState) history.replaceState(null, "", "#" + name);
    setTimeout(() => charts.forEach(c => c.resize()), 0);
    window.scrollTo({ top: 0 });
  }
  document.querySelectorAll(".tab-btn").forEach(b =>
    b.addEventListener("click", () => activateTab(b.dataset.tab)));
  const initTab = (location.hash || "").replace("#", "");
  if (["ops", "survey", "policy"].includes(initTab)) activateTab(initTab);

  const x = data.x720, u = data.usage, s = data.survey;
  const ACT = data.activity_days || [];

  // ── 頁首徽章 ──
  const badges = [];
  if (x) badges.push(`營運數據期間 <b>${x.date_range[0].replaceAll("-", "/")} – ${x.date_range[1].replaceAll("-", "/")}</b>`);
  if (u) badges.push(`逐時使用紀錄 <b>${fmt(u.total)}</b> 筆`);
  if (s) badges.push(`問卷有效樣本 <b>${fmt(s.n)}</b> 份（截至 ${s.date_range ? s.date_range[1].replaceAll("-", "/") : "—"}）`);
  badges.push(`彙整時間 ${data.generated_at ? data.generated_at.replace("T", " ") : ""}`);
  document.getElementById("badges").innerHTML =
    badges.map(b => `<span class="badge">${b}</span>`).join("");

  // ── KPI：平臺營運 ──
  if (x && u) {
    document.getElementById("ops-period").textContent =
      `資料來源：X720 營運儀表板、平臺逐時使用紀錄`;
    const kpis = [
      { label: "累計網站操作", value: fmt(x.total_ops), unit: "人次", delta: `四場活動日占 ${x.activity_ops_share}%`, good: true },
      { label: "新增會員", value: fmt(x.total_members), unit: "人", delta: `四場活動日占 ${x.activity_member_share}%`, good: true },
      { label: "互動會員（去重）", value: fmt(u.members.unique), unit: "人", delta: `平均每人互動 ${u.members.avg_interactions} 次`, good: false },
      { label: "會員互動占比", value: u.identity.member_pct, unit: "%", delta: `會員 ${fmt(u.identity.member)} 筆 vs 訪客 ${fmt(u.identity.guest)} 筆`, good: true },
    ];
    document.getElementById("kpi-ops").innerHTML = kpis.map(k => `
      <div class="kpi"><div class="label">${k.label}</div>
      <div class="value">${k.value}<small>${k.unit}</small></div>
      <div class="delta${k.good ? " good" : ""}">${k.delta}</div></div>`).join("");
  }

  // ── 圖 1：每日趨勢（上下兩面板、共用時間軸） ──
  if (x) {
    const dates = x.daily.map(d => d.date);
    const ops = x.daily.map(d => d.ops);
    const members = x.daily.map(d => d.members);
    const actPoints = x.daily.map((d, i) => d.is_activity ? { value: [i, d.ops], date: d.date } : null).filter(Boolean);
    make("chart-daily", {
      toolbox,
      tooltip: Object.assign({ trigger: "axis", axisPointer: { type: "line", lineStyle: { color: C.baseline } } }, tooltipBase),
      axisPointer: { link: [{ xAxisIndex: "all" }] },
      grid: [
        { left: 64, right: 24, top: 34, height: "46%" },
        { left: 64, right: 24, bottom: 46, height: "24%" },
      ],
      xAxis: [
        catAxis({ gridIndex: 0, data: dates.map(mmdd), axisLabel: { show: false }, axisTick: { show: false } }),
        catAxis({ gridIndex: 1, data: dates.map(mmdd), axisLabel: { color: C.muted, interval: 2 } }),
      ],
      yAxis: [
        valAxis({ gridIndex: 0, name: "操作人次", nameTextStyle: { color: C.ink2, fontFamily: FONT } }),
        valAxis({ gridIndex: 1, name: "新增會員（人）", nameTextStyle: { color: C.ink2, fontFamily: FONT } }),
      ],
      series: [
        {
          name: "網站操作人次", type: "line", xAxisIndex: 0, yAxisIndex: 0,
          data: ops, symbol: "none", lineStyle: { width: 2, color: C.s1 },
          areaStyle: { color: C.s1, opacity: 0.08 },
        },
        {
          name: "活動日", type: "scatter", xAxisIndex: 0, yAxisIndex: 0,
          data: actPoints.map(p => p.value), symbolSize: 11,
          itemStyle: { color: C.s1, borderColor: C.surface, borderWidth: 2 },
          label: {
            show: true, position: "top", color: C.ink2, fontFamily: FONT, fontSize: 11.5,
            formatter: p => `${mmdd(actPoints[p.dataIndex].date)}\n${fmt(p.value[1])}`,
          },
          tooltip: { show: false },
        },
        {
          name: "新增會員", type: "bar", xAxisIndex: 1, yAxisIndex: 1,
          data: members, barMaxWidth: 14,
          itemStyle: { color: C.s1, borderRadius: [4, 4, 0, 0] },
        },
      ],
    }, [
      {
        query: { maxWidth: 640 },
        option: {
          grid: [
            { left: 46, right: 12, top: 34, height: "44%" },
            { left: 46, right: 12, bottom: 40, height: "24%" },
          ],
          xAxis: [{}, { axisLabel: { interval: 6, fontSize: 10 } }],
          // 窄幅時活動日標籤易重疊，改由觸控 tooltip 承載
          series: [{}, { label: { show: false }, symbolSize: 9 }, {}],
        },
      },
    ]);
  }

  // ── 圖 2：四場活動比較 ──
  if (x) {
    const labels = ACT.map(mmdd);
    const opsAct = ACT.map(d => (x.activity_days.find(a => a.date === d) || {}).ops ?? 0);
    const memAct = ACT.map(d => (x.activity_days.find(a => a.date === d) || {}).members ?? 0);
    const svyAct = ACT.map(d => s ? (s.by_session[d] || 0) : 0);
    const series = [
      { name: "操作人次", data: opsAct, color: C.s1 },
      { name: "新增會員", data: memAct, color: C.s2 },
    ];
    if (s) series.push({ name: "問卷回收", data: svyAct, color: C.s3 });
    make("chart-activity", {
      toolbox,
      tooltip: Object.assign({ trigger: "axis" }, tooltipBase),
      legend: { bottom: 0, textStyle: { color: C.ink2, fontFamily: FONT }, itemWidth: 14, itemHeight: 10 },
      grid: { left: 56, right: 20, top: 30, bottom: 56 },
      xAxis: catAxis({ data: labels }),
      yAxis: valAxis(),
      series: series.map(sr => ({
        name: sr.name, type: "bar", data: sr.data, barMaxWidth: 22, barGap: "25%",
        itemStyle: { color: sr.color, borderRadius: [4, 4, 0, 0] },
        label: sr.name === "操作人次"
          ? { show: true, position: "top", color: C.ink2, fontFamily: FONT, fontSize: 11 }
          : undefined,
      })),
    }, [
      { query: { maxWidth: 480 }, option: { grid: { left: 44, right: 10, top: 26, bottom: 56 } } },
    ]);
  }

  // ── 圖 3：逐時分布（強調 13–15 時） ──
  if (u) {
    make("chart-hourly", {
      toolbox,
      tooltip: Object.assign({
        trigger: "axis",
        formatter: p => `${p[0].axisValue} 時<br/><b>${fmt(p[0].value)}</b> 次互動`,
      }, tooltipBase),
      grid: { left: 52, right: 16, top: 30, bottom: 40 },
      xAxis: catAxis({ data: [...Array(24).keys()].map(h => h), axisLabel: { interval: 1 } }),
      yAxis: valAxis(),
      series: [{
        type: "bar", barMaxWidth: 18,
        data: u.hourly.map((v, h) => ({
          value: v,
          itemStyle: { color: (h >= 13 && h <= 15) ? C.s1 : C.deemph, borderRadius: [4, 4, 0, 0] },
          label: h === u.peak_hour ? { show: true, position: "top", color: C.ink2, fontFamily: FONT, fontSize: 11, formatter: fmt(v) } : { show: false },
        })),
      }],
    }, [
      {
        query: { maxWidth: 480 },
        option: { grid: { left: 42, right: 8, top: 26, bottom: 34 }, xAxis: { axisLabel: { interval: 3 } } },
      },
    ]);
  }

  // ── 圖 4：會員 vs 訪客（單列堆疊）＋互動深度 ──
  if (u) {
    document.getElementById("identity-sub").textContent =
      `共 ${fmt(u.total)} 筆逐時互動`;
    make("chart-identity", {
      tooltip: Object.assign({
        trigger: "item",
        formatter: p => `${p.seriesName}：<b>${fmt(p.value)}</b> 筆（${(p.value / u.total * 100).toFixed(1)}%）`,
      }, tooltipBase),
      grid: { left: 4, right: 4, top: 8, bottom: 8 },
      xAxis: { type: "value", show: false, max: u.total },
      yAxis: { type: "category", show: false, data: [""] },
      series: [
        {
          name: "會員", type: "bar", stack: "id", data: [u.identity.member], barMaxWidth: 34,
          itemStyle: { color: C.s1, borderColor: C.surface, borderWidth: 1, borderRadius: [4, 0, 0, 4] },
          label: { show: true, position: "inside", color: "#fff", fontFamily: FONT, formatter: `會員 ${u.identity.member_pct}%` },
        },
        {
          name: "訪客", type: "bar", stack: "id", data: [u.identity.guest],
          itemStyle: { color: C.deemph, borderColor: C.surface, borderWidth: 1, borderRadius: [0, 4, 4, 0] },
          label: { show: true, position: "inside", color: C.ink, fontFamily: FONT, formatter: `訪客 ${(100 - u.identity.member_pct).toFixed(1)}%` },
        },
      ],
    });
    const m = u.members;
    document.getElementById("member-depth").innerHTML = [
      [fmt(m.unique), "互動會員（人）"],
      [m.avg_interactions, "平均互動次數"],
      [m.median, "中位數（次）"],
      [fmt(m.max), "單一會員最高（次）"],
      [fmt(m.deep_browse), "瀏覽首頁以外頁面"],
      [fmt(m.coupon_users), "開啟優惠券頁"],
    ].map(([v, l]) => `<div class="ms"><div class="v">${v}</div><div class="l">${l}</div></div>`).join("");
  }

  // ── 圖 5：頁面 Top10 ──
  if (u) {
    const pages = [...u.top_pages].reverse();
    make("chart-pages", {
      toolbox,
      tooltip: Object.assign({
        trigger: "item",
        formatter: p => `${p.name}：<b>${fmt(p.value)}</b> 次`,
      }, tooltipBase),
      grid: { left: 90, right: 60, top: 12, bottom: 28 },
      xAxis: valAxis(),
      yAxis: catAxis({ data: pages.map(p => p.name), axisLabel: { color: C.ink2 } }),
      series: [{
        type: "bar", data: pages.map(p => p.count), barMaxWidth: 16,
        itemStyle: { color: C.s1, borderRadius: [0, 4, 4, 0] },
        label: { show: true, position: "right", color: C.ink2, fontFamily: FONT, fontSize: 11.5, formatter: p => fmt(p.value) },
      }],
    });
  }

  // ═══ 問卷區 ═══
  if (s && s.n) {
    document.getElementById("survey-period").textContent =
      `有效樣本 ${fmt(s.n)} 份，其中 ${s.activity_share}% 回收自四場活動當日`;

    // 願付溢價（合併自己煮＋外食）
    const pr = s.premium;
    const wN = (pr.cook ? pr.cook.n : 0) + (pr.eatout ? pr.eatout.n : 0);
    const wSum = (pr.cook ? pr.cook.willing_pct * pr.cook.n : 0) + (pr.eatout ? pr.eatout.willing_pct * pr.eatout.n : 0);
    const willingAll = wN ? (wSum / wN).toFixed(1) : "—";

    const kpis = [
      { label: "問卷有效樣本", value: fmt(s.n), unit: "份", delta: `活動日回收占 ${s.activity_share}%`, good: false },
      { label: "信任我國有機農業", value: s.trust.trust_pct, unit: "%", delta: "含「非常信任」與「信任」", good: true },
      { label: "有機標章實測正確率", value: s.badge.actual_correct_pct, unit: "%", delta: `自評可辨識 ${s.badge.self_can_pct}%`, good: true },
      { label: "願付有機溢價", value: willingAll, unit: "%", delta: `平均加成：自己煮 ${pr.cook ? pr.cook.avg_premium : "—"}%／外食 ${pr.eatout ? pr.eatout.avg_premium : "—"}%`, good: true },
    ];
    document.getElementById("kpi-survey").innerHTML = kpis.map(k => `
      <div class="kpi"><div class="label">${k.label}</div>
      <div class="value">${k.value}<small>${k.unit}</small></div>
      <div class="delta${k.good ? " good" : ""}">${k.delta}</div></div>`).join("");

    // ── 地圖 ＋ 縣市排行（指標切換） ──
    const METRICS = {
      n: { label: "受訪樣本數", unit: "份", ramp: BLUES },
      trust_pct: { label: "信任度", unit: "%", ramp: BLUES },
      willing_pct: { label: "願付溢價比例", unit: "%", ramp: BLUES },
    };
    const mapChart = make("chart-map", {});
    const rankChart = make("chart-county-rank", {});
    const countyByName = Object.fromEntries(s.counties.map(c => [c.name, c]));

    function renderMap(metric) {
      const conf = METRICS[metric];
      const rows = s.counties.filter(c => c[metric] !== null && c[metric] !== undefined);
      const vals = rows.map(c => c[metric]);
      const vmin = metric === "n" ? 0 : Math.max(0, Math.floor(Math.min(...vals) / 10) * 10);
      const vmax = Math.max(...vals);
      mapChart.setOption({
        baseOption: {
        animation: false,
        toolbox,
        tooltip: Object.assign({
          trigger: "item",
          formatter: p => {
            const c = countyByName[p.name];
            if (!c) return `${p.name}：無受訪樣本`;
            return `<b>${p.name}</b><br/>受訪樣本：<b>${fmt(c.n)}</b> 份（${c.pct}%）` +
              (c.trust_pct !== null ? `<br/>信任度：${c.trust_pct}%` : "") +
              (c.willing_pct !== null ? `<br/>願付溢價：${c.willing_pct}%` : "");
          },
        }, tooltipBase),
        visualMap: {
          min: vmin, max: vmax, left: 10, bottom: 10, calculable: false,
          inRange: { color: conf.ramp },
          text: [`${conf.label}（高）`, "低"],
          textStyle: { color: C.ink2, fontFamily: FONT, fontSize: 11.5 },
        },
        series: [{
          type: "map", map: "taiwan", roam: false,
          center: [120.9, 23.65], zoom: 1.15, aspectScale: 0.9,
          itemStyle: { areaColor: "#f0efec", borderColor: C.surface, borderWidth: 1 },
          emphasis: { itemStyle: { areaColor: "#eda100", opacity: 0.9 }, label: { color: C.ink, fontFamily: FONT } },
          select: { disabled: true },
          label: { show: false },
          data: rows.map(c => ({ name: c.name, value: c[metric] })),
        }],
        },
        media: [
          {
            query: { maxWidth: 520 },
            option: {
              visualMap: { left: 2, bottom: 2, itemHeight: 90, textStyle: { fontSize: 10.5 } },
              series: [{ zoom: 1.05 }],
            },
          },
        ],
      }, { notMerge: true });

      const top = [...rows].sort((a, b) => b[metric] - a[metric]).slice(0, 10).reverse();
      document.getElementById("county-rank-sub").textContent =
        `${conf.label}（前十）` + (metric !== "n" ? "，樣本數 <5 之縣市宜保守解讀" : "");
      rankChart.setOption({
        animation: false,
        toolbox,
        tooltip: Object.assign({
          trigger: "item",
          formatter: p => {
            const c = countyByName[p.name];
            return `<b>${p.name}</b>：${fmt(p.value)}${conf.unit}（n=${c.n}）`;
          },
        }, tooltipBase),
        grid: { left: 76, right: 64, top: 12, bottom: 30 },
        xAxis: valAxis(metric !== "n" ? { max: 100 } : {}),
        yAxis: catAxis({ data: top.map(c => c.name), axisLabel: { color: C.ink2 } }),
        series: [{
          type: "bar", barMaxWidth: 16,
          data: top.map(c => c[metric]),
          itemStyle: { color: C.s1, borderRadius: [0, 4, 4, 0] },
          label: {
            show: true, position: "right", color: C.ink2, fontFamily: FONT, fontSize: 11.5,
            formatter: p => `${fmt(p.value)}${conf.unit === "%" ? "%" : ""}`,
          },
        }],
      }, { notMerge: true });
    }
    renderMap("n");
    document.querySelectorAll("#map-metric button").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#map-metric button").forEach(b => b.classList.remove("on"));
        btn.classList.add("on");
        renderMap(btn.dataset.m);
      });
    });

    // ── 認知與信任（順序量表堆疊） ──
    const LEVELS = [
      { key: ["完全知道", "非常信任"], label: "完全知道／非常信任", color: "#1c5cab" },
      { key: ["知道", "信任"], label: "知道／信任", color: "#6da7ec" },
      { key: ["不太知道", "不信任"], label: "不太知道／不信任", color: "#d9d8d2" },
      { key: ["完全不知道", "非常不信任"], label: "完全不知道／非常不信任", color: "#a8a69e" },
    ];
    const kRows = [
      { name: "禁止化學農藥／肥料／基改", dist: s.knowledge["2"].dist },
      { name: "有助生態環境永續", dist: s.knowledge["3"].dist },
      { name: "須通過驗證才可貼標章", dist: s.knowledge["4"].dist },
      { name: "信任我國有機農業", dist: s.trust.dist },
    ].reverse();
    const rowTotals = kRows.map(r => Object.values(r.dist).reduce((a, b) => a + b, 0));
    make("chart-knowledge", {
      toolbox,
      tooltip: Object.assign({
        trigger: "axis", axisPointer: { type: "shadow" },
        formatter: ps => `<b>${ps[0].axisValue}</b><br/>` + ps.map(p =>
          `${p.marker}${p.seriesName}：<b>${p.value}%</b>`).join("<br/>"),
      }, tooltipBase),
      legend: { bottom: 0, textStyle: { color: C.ink2, fontFamily: FONT, fontSize: 12 }, itemWidth: 14, itemHeight: 10 },
      grid: { left: 190, right: 30, top: 12, bottom: 46 },
      xAxis: valAxis({ max: 100, axisLabel: { formatter: "{value}%" } }),
      yAxis: catAxis({ data: kRows.map(r => r.name), axisLabel: { color: C.ink2 } }),
      series: LEVELS.map((lv, li) => ({
        name: lv.label, type: "bar", stack: "k", barMaxWidth: 24,
        itemStyle: { color: lv.color, borderColor: C.surface, borderWidth: 1 },
        label: {
          show: true, position: "inside", fontFamily: FONT, fontSize: 11,
          color: li === 0 ? "#fff" : C.ink,
          formatter: p => p.value >= 8 ? `${p.value}%` : "",
        },
        data: kRows.map((r, ri) => {
          const cnt = lv.key.reduce((a, k) => a + (r.dist[k] || 0), 0);
          return +(cnt / rowTotals[ri] * 100).toFixed(1);
        }),
      })),
    }, [
      {
        query: { maxWidth: 640 },
        option: {
          grid: { left: 112, right: 12, top: 12, bottom: 66 },
          yAxis: { axisLabel: { width: 100, overflow: "break", fontSize: 11, lineHeight: 14 } },
          legend: { textStyle: { fontSize: 11 }, itemWidth: 11, itemHeight: 8 },
          series: [{ label: { fontSize: 10 } }, { label: { fontSize: 10 } },
                   { label: { fontSize: 10 } }, { label: { fontSize: 10 } }],
        },
      },
    ]);

    // ── 標章辨識 × 教育程度 ──
    document.getElementById("badge-sub").textContent =
      `全體實測正確率 ${s.badge.actual_correct_pct}%；自評可辨識 ${s.badge.self_can_pct}%`;
    const eb = s.badge.by_education;
    make("chart-badge", {
      toolbox,
      tooltip: Object.assign({
        trigger: "item",
        formatter: p => {
          const g = eb[p.dataIndex];
          return `<b>${g.group}</b>：${g.correct_pct}%（n=${g.n}）`;
        },
      }, tooltipBase),
      grid: { left: 52, right: 20, top: 30, bottom: 40 },
      xAxis: catAxis({ data: eb.map(g => g.group), axisLabel: { color: C.ink2, interval: 0 } }),
      yAxis: valAxis({ max: 100, axisLabel: { formatter: "{value}%" } }),
      series: [{
        type: "bar", barMaxWidth: 30,
        data: eb.map(g => g.correct_pct),
        itemStyle: { color: C.s1, borderRadius: [4, 4, 0, 0] },
        label: { show: true, position: "top", color: C.ink2, fontFamily: FONT, formatter: p => `${p.value}%` },
        markLine: {
          symbol: "none", silent: true,
          lineStyle: { color: C.baseline, type: "solid", width: 1 },
          label: { position: "insideStartTop", color: C.muted, fontFamily: FONT, fontSize: 11, formatter: `全體 ${s.badge.actual_correct_pct}%` },
          data: [{ yAxis: s.badge.actual_correct_pct }],
        },
      }],
    });

    // ── 資訊管道 Top10 ──
    const chs = s.channels.slice(0, 10).reverse();
    make("chart-channels", {
      toolbox,
      tooltip: Object.assign({
        trigger: "item",
        formatter: p => {
          const c = chs[p.dataIndex];
          return `<b>${c.name}</b>：${c.pct}%（${fmt(c.count)} 人次）`;
        },
      }, tooltipBase),
      grid: { left: 104, right: 56, top: 12, bottom: 30 },
      xAxis: valAxis({ axisLabel: { formatter: "{value}%" } }),
      yAxis: catAxis({ data: chs.map(c => c.name), axisLabel: { color: C.ink2 } }),
      series: [{
        type: "bar", barMaxWidth: 16,
        data: chs.map(c => c.pct),
        itemStyle: { color: C.s1, borderRadius: [0, 4, 4, 0] },
        label: { show: true, position: "right", color: C.ink2, fontFamily: FONT, fontSize: 11.5, formatter: p => `${p.value}%` },
      }],
    }, [
      {
        query: { maxWidth: 480 },
        option: { grid: { left: 94, right: 44, top: 12, bottom: 30 }, yAxis: { axisLabel: { fontSize: 11 } } },
      },
    ]);

    // ── 各場活動願付溢價 ──
    const ss = s.session_stats;
    make("chart-premium", {
      toolbox,
      tooltip: Object.assign({
        trigger: "axis",
        formatter: ps => {
          const st = ss[ps[0].dataIndex];
          return `<b>${mmdd(st.date)} 場次</b>（n=${st.n}）<br/>` +
            ps.map(p => `${p.marker}${p.seriesName}：<b>${p.value ?? "—"}%</b>`).join("<br/>");
        },
      }, tooltipBase),
      legend: { bottom: 0, textStyle: { color: C.ink2, fontFamily: FONT }, itemWidth: 14, itemHeight: 10 },
      grid: { left: 52, right: 20, top: 30, bottom: 56 },
      xAxis: catAxis({ data: ss.map(t => mmdd(t.date)) }),
      yAxis: valAxis({ axisLabel: { formatter: "{value}%" }, name: "平均可接受加成", nameTextStyle: { color: C.ink2, fontFamily: FONT } }),
      series: [
        {
          name: "自己煮", type: "bar", barMaxWidth: 22,
          data: ss.map(t => t.cook), itemStyle: { color: C.s1, borderRadius: [4, 4, 0, 0] },
          label: { show: true, position: "top", color: C.ink2, fontFamily: FONT, fontSize: 11, formatter: p => `${p.value}%` },
        },
        {
          name: "外食", type: "bar", barMaxWidth: 22,
          data: ss.map(t => t.eatout), itemStyle: { color: C.s2, borderRadius: [4, 4, 0, 0] },
        },
      ],
    });

    // ── 受訪者輪廓（年齡） ──
    const gender = s.profile.gender;
    const gTotal = gender.reduce((a, g) => a + g.count, 0);
    const diet = s.profile.diet;
    const dTotal = diet.reduce((a, d) => a + d.count, 0);
    const profileCard = document.getElementById("chart-profile").closest(".card");
    profileCard.querySelector(".card-sub").textContent =
      gender.map(g => `${g.name} ${(g.count / gTotal * 100).toFixed(1)}%`).join("｜") + "　·　" +
      diet.map(d => `${d.name} ${(d.count / dTotal * 100).toFixed(1)}%`).join("｜");
    make("chart-profile", {
      toolbox,
      tooltip: Object.assign({
        trigger: "item",
        formatter: p => `<b>${p.name}</b>：${fmt(p.value)} 人（${(p.value / s.n * 100).toFixed(1)}%）`,
      }, tooltipBase),
      grid: { left: 52, right: 20, top: 30, bottom: 40 },
      xAxis: catAxis({ data: s.profile.age.map(a => a.name.replace("歲", "").replace("~", "–")), axisLabel: { color: C.ink2, interval: 0, fontSize: 11 } }),
      yAxis: valAxis({ name: "人數", nameTextStyle: { color: C.ink2, fontFamily: FONT } }),
      series: [{
        type: "bar", barMaxWidth: 26,
        data: s.profile.age.map(a => a.count),
        itemStyle: { color: C.s1, borderRadius: [4, 4, 0, 0] },
        label: { show: true, position: "top", color: C.ink2, fontFamily: FONT, fontSize: 11, formatter: p => fmt(p.value) },
      }],
    }, [
      {
        query: { maxWidth: 520 },
        option: {
          grid: { left: 44, right: 10, top: 30, bottom: 54 },
          xAxis: { axisLabel: { rotate: 40, fontSize: 10 } },
        },
      },
    ]);

    // ── 政策對應卡 ──
    const minKnow = Math.min(...Object.values(s.knowledge).map(k => k.know_pct));
    const nonAct = s.by_session.other || 0;
    const topCounty = s.counties[0];
    const female = gender.find(g => g.name === "女性");
    const femalePct = female ? (female.count / gTotal * 100).toFixed(1) : "—";
    const policies = [
      {
        t: "消費推廣／市場成長",
        p: `${willingAll}% 受訪者願付有機溢價，平均可接受加成 自己煮 ${pr.cook ? pr.cook.avg_premium : "—"}%、外食 ${pr.eatout ? pr.eatout.avg_premium : "—"}%，具正向消費潛力。`,
        tag: "方向相符", warn: false,
      },
      {
        t: "食農教育",
        p: `信任度 ${s.trust.trust_pct}%、標章實測正確率 ${s.badge.actual_correct_pct}%；惟「禁用化學投入」基本定義知曉率 ${s.knowledge["2"].know_pct}% 為三題最低，仍待補強。`,
        tag: "整體良好，基本定義待補強", warn: true,
      },
      {
        t: "觸及廣度",
        p: `受訪者最多來自${topCounty ? topCounty.name : "—"}（${topCounty ? topCounty.pct : "—"}%），地域涵蓋北中南；惟女性占 ${femalePct}%、青壯族群集中，族群廣度待強化。`,
        tag: "較前期改善，族群廣度待強化", warn: true,
      },
      {
        t: "系統瀏覽提升",
        p: `${s.activity_share}% 問卷回收集中於活動當日，非活動日自然填答僅 ${fmt(nonAct)} 份，線上平臺獨立導流效益仍有限，建議導入來源追蹤與內容經營。`,
        tag: "線上獨立導流待提升", warn: true,
      },
    ];
    document.getElementById("policy").innerHTML = policies.map(pl => `
      <div class="policy"><h3>${pl.t}</h3><p>${pl.p}</p>
      <span class="tag${pl.warn ? " warn" : ""}">${pl.tag}</span></div>`).join("");
  }
})();
