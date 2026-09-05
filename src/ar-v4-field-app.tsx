import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUp, Camera, Check, ChevronRight, CloudUpload, Compass, Download, Expand, ImagePlus, Info, Layers, MapPin, Navigation, RefreshCw, ScanLine, SlidersHorizontal, VideoOff, WifiOff } from 'lucide-react';
import { OrbImageTracker } from './ar-v3-image-recognition';
import {
  EMPTY_SENSOR, bearingBetween, encodeObservationImage, extractPanoramaView, flattenProject,
  loadPanorama, mapBearingFromSensor, nodeLabel, normalizeBearing, prepareImage, sensorFromEvent, signedAngle,
  type FieldObservation, type FieldSensor,
} from './ar-v4-field-core';
import { downloadJson, draftStore, readJson } from './ar-v4-field-storage';

type Tab = 'location' | 'camera' | 'capture' | 'calibrate' | 'records';
const FIELD_TABS = [
  { id: 'location', label: '作業位置', short: '位置', icon: MapPin, hint: '選擇樓層與節點，確認這次作業的位置。' },
  { id: 'camera', label: '相機測試', short: '相機', icon: ScanLine, hint: '現場取景、拍照，或測試已保存的節點照片。' },
  { id: 'capture', label: '照片採集', short: '照片', icon: ImagePlus, hint: '整理現場照片與環景取景，確認後再上傳。' },
  { id: 'calibrate', label: '方向校正', short: '校正', icon: Compass, hint: '微調節點方向，讓地圖與現場的朝向一致。' },
  { id: 'records', label: '後台紀錄', short: '紀錄', icon: Layers, hint: '檢查已上傳的觀測資料，或匯出備份。' },
] as const;
type Notice = { kind: 'info' | 'success' | 'error'; text: string };
type Reference = { id: string; nodeId: string; imageUrl: string; label: string; bearing: number | null; source: string };
const optionalAngle = (value: unknown) => value === null || value === undefined || value === '' || !Number.isFinite(Number(value)) ? null : normalizeBearing(Number(value));
const angleText = (angle: number | null) => angle === null ? '尚未確認' : `${Math.round(angle * 10) / 10}°`;
const readableDate = (value: string) => new Date(value).toLocaleString('zh-TW', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
const sourceText = { camera: '現場拍攝', upload: '照片匯入', 'panorama-frame': '環景取景' };
const getProjects = (raw: any) => Array.isArray(raw?.projects) ? raw.projects : raw?.project ? [raw] : [];

export default function FieldApp() {
  const [projects, setProjects] = useState<any[]>([]);
  const [projectId, setProjectId] = useState('');
  const [project, setProject] = useState<any>(null);
  const [floorKey, setFloorKey] = useState('');
  const [nodeId, setNodeId] = useState('');
  const [revision, setRevision] = useState('');
  const [storage, setStorage] = useState('loading');
  const [canWrite, setCanWrite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState('');
  const [notice, setNotice] = useState<Notice | null>(null);
  const [online, setOnline] = useState(navigator.onLine);
  const [tab, setTab] = useState<Tab>(location.pathname.includes('admin-ar-v4') || new URLSearchParams(location.search).get('view') === 'records' ? 'records' : 'location');
  const tabRef = useRef(tab);
  const tabScroll = useRef<Partial<Record<Tab, number>>>({});
  const cameraGeneration = useRef(0);
  const activeTab = FIELD_TABS.find((item) => item.id === tab)!;
  const [sensor, setSensor] = useState<FieldSensor>({ ...EMPTY_SENSOR });
  const sensorRef = useRef(sensor);
  const [sensorMessage, setSensorMessage] = useState('尚未啟用方位感測');
  const [cameraState, setCameraState] = useState('idle');
  const [cameraMessage, setCameraMessage] = useState('開啟相機，建立第一張節點參考照片');
  const [ticks, setTicks] = useState(Date.now());
  const video = useRef<HTMLVideoElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const [draft, setDraft] = useState<FieldObservation | null>(null);
  const [draftLoadedKey, setDraftLoadedKey] = useState('');
  const [draftMessage, setDraftMessage] = useState('');
  const [bearing, setBearing] = useState(0);
  const [mapUp, setMapUp] = useState('');
  const [saveMapUp, setSaveMapUp] = useState(false);
  const [promote, setPromote] = useState(false);
  const [nextNodeId, setNextNodeId] = useState('');
  const [mapZoom, setMapZoom] = useState(1);
  const [panorama, setPanorama] = useState<HTMLImageElement | null>(null);
  const [panoYaw, setPanoYaw] = useState(0);
  const [panoPitch, setPanoPitch] = useState(0);
  const [panoZero, setPanoZero] = useState('');
  const panoCanvas = useRef<HTMLCanvasElement>(null);
  const [detecting, setDetecting] = useState(false);
  const [recognitionMessage, setRecognitionMessage] = useState('尚未進行辨識測試');
  const [candidate, setCandidate] = useState<{ reference: Reference; inliers: number; matches: number } | null>(null);
  const [lock, setLock] = useState<{ nodeId: string; bearing: number; sensorHeading: number | null; sensorKind: FieldSensor['kind']; screenAngle: number; time: number } | null>(null);
  const tracker = useRef<OrbImageTracker | null>(null);
  const detectGeneration = useRef(0);
  const loadGeneration = useRef(0);
  const photoInput = useRef<HTMLInputElement>(null);
  const panoramaInput = useRef<HTMLInputElement>(null);
  const testInput = useRef<HTMLInputElement>(null);
  const floors = useMemo(() => flattenProject(project || {}), [project]);
  const floor = floors.find((f) => `${f.buildingId}/${f.id}` === floorKey) || floors[0];
  const node = floor?.nodes.find((n) => n.id === nodeId);
  const scope = node ? [projectId, floor.buildingId, floor.id, node.nodeType, node.id].join('/') : '';
  const neighbors = useMemo(() => {
    if (!node || !floor) return [];
    const ids = new Set((floor.edges || []).flatMap((edge: any) => edge.start === node.id ? [edge.end] : edge.end === node.id ? [edge.start] : []));
    return floor.nodes.filter((n) => ids.has(n.id) && n.enabled !== false && n.navigable !== false);
  }, [floor, node]);
  const nextNode = neighbors.find((n) => n.id === nextNodeId) || neighbors[0];
  const scaleX = floor?.bounds ? Math.abs(floor.bounds.trX - floor.bounds.blX) : 1;
  const scaleY = floor?.bounds ? Math.abs(floor.bounds.trY - floor.bounds.blY) : 1;
  const targetBearing = node && nextNode ? bearingBetween(node, nextNode, scaleX, scaleY) : null;
  const refs = useMemo<Reference[]>(() => (floor?.nodes || []).flatMap((n) => {
    const observations: Reference[] = (n.fieldObservations || []).map((o: FieldObservation) => ({ id: `${n.id}:${o.id}`, nodeId: n.id, imageUrl: o.imageUrl, label: nodeLabel(n), bearing: optionalAngle(o.mapBearing), source: sourceText[o.source] || '現場照片' }));
    const oldImage = n.nodeType === 'marker' ? n.imageUrl : n.guideImageUrl;
    if (oldImage && !observations.some((o) => o.imageUrl === oldImage)) observations.push({ id: `${n.id}:v3`, nodeId: n.id, imageUrl: oldImage, label: nodeLabel(n), bearing: optionalAngle(n.guideReferenceBearing), source: 'V3 參考照片' });
    return observations;
  }), [floor]);
  const testRefs = useMemo(() => [...refs.filter((r) => r.nodeId === nodeId), ...refs.filter((r) => r.nodeId !== nodeId)].slice(0, 24), [refs, nodeId]);
  const records: Array<{ observation: FieldObservation; label: string; nodeId: string }> = (floor?.nodes || []).flatMap((n) => (n.fieldObservations || []).map((observation: FieldObservation) => ({ observation, label: nodeLabel(n), nodeId: n.id })));
  const coveredNodes = new Set(refs.map((r) => r.nodeId)).size;
  const staleSensor = !sensor.capturedAt || ticks - Date.parse(sensor.capturedAt) > 10000;
  const lockFresh = lock && lock.nodeId === node?.id && ticks - lock.time < 20000 && lock.sensorKind === sensor.kind && lock.screenAngle === sensor.screenAngle;
  const currentMapHeading = lockFresh && lock.sensorHeading !== null && !staleSensor && sensor.heading !== null
    ? normalizeBearing(lock.bearing + signedAngle(sensor.heading - lock.sensorHeading)) : null;
  const turnAngle = targetBearing !== null && currentMapHeading !== null ? signedAngle(targetBearing - currentMapHeading) : null;

  function selectTab(next: Tab) {
    if (tabRef.current === next) return;
    tabScroll.current[tabRef.current] = window.scrollY;
    tabRef.current = next;
    setTab(next);
  }

  function tabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const nextIndex = event.key === 'ArrowRight' ? (index + 1) % FIELD_TABS.length
      : event.key === 'ArrowLeft' ? (index + FIELD_TABS.length - 1) % FIELD_TABS.length
      : event.key === 'Home' ? 0 : event.key === 'End' ? FIELD_TABS.length - 1 : -1;
    if (nextIndex < 0) return;
    event.preventDefault();
    const next = FIELD_TABS[nextIndex].id;
    document.getElementById(`field-tab-${next}`)?.focus({ preventScroll: true });
    selectTab(next);
  }

  function stopDetection() {
    detectGeneration.current++;
    tracker.current?.dispose();
    tracker.current = null;
    setDetecting(false);
  }
  function stopCamera() {
    cameraGeneration.current++;
    stopDetection();
    stream.current?.getTracks().forEach((t) => t.stop());
    stream.current = null;
    if (video.current) video.current.srcObject = null;
    setCameraState('idle');
    setLock(null);
    setCameraMessage('相機已關閉，仍可匯入照片與校正節點');
  }
  async function loadProject(id: string) {
    const generation = ++loadGeneration.current;
    setLoading(true);
    try {
      const result = await readJson(`./api/ar-content?projectId=${encodeURIComponent(id)}&ts=${Date.now()}`);
      if (generation !== loadGeneration.current) return;
      if (!Array.isArray(result.body.buildings)) throw new Error('後台專案沒有可用的樓層資料');
      setProject(result.body);
      setProjectId(id);
      setRevision(result.revision);
      setStorage(result.storage);
      // Refresh the displayed server calibration too; a new revision must not
      // silently authorize overwriting it with an old local angle after a 409.
      const refreshedFloors = flattenProject(result.body);
      const refreshedFloor = refreshedFloors.find((f) => `${f.buildingId}/${f.id}` === floorKey);
      const refreshedNode = refreshedFloor?.nodes.find((n) => n.id === nodeId);
      if (refreshedNode) {
        setBearing(optionalAngle(refreshedNode.guideReferenceBearing) ?? 0);
        setMapUp(refreshedFloor?.mapUpHeading === null || refreshedFloor?.mapUpHeading === undefined ? '' : String(refreshedFloor.mapUpHeading));
        setSaveMapUp(false);
      }
      setLock(null);
      setCandidate(null);
      stopDetection();
    } catch (error) {
      if (generation !== loadGeneration.current) return;
      const raw = await readJson('./ar-data.json');
      if (generation !== loadGeneration.current) return;
      const fallback = getProjects(raw.body).find((p: any) => p.project.id === id);
      if (!fallback) throw error;
      setProject(fallback);
      setProjectId(id);
      setRevision('');
      setStorage('readonly');
      setNotice({ kind: 'error', text: `目前僅載入靜態資料（唯讀），不可上傳。${(error as Error).message}` });
    } finally { if (generation === loadGeneration.current) setLoading(false); }
  }

  useEffect(() => {
    window.scrollTo({ top: tabScroll.current[tab] || 0, behavior: 'instant' as ScrollBehavior });
    const focused = document.activeElement;
    if (focused === document.body || focused?.closest('[hidden]')) {
      document.getElementById(`field-panel-${tab}`)?.focus({ preventScroll: true });
    }
    // Keep the video node mounted so returning to the camera never loses srcObject.
    // Pause all tracks outside the camera tab; do not sample invisible frames.
    const active = tab === 'camera' && !document.hidden;
    stream.current?.getVideoTracks().forEach((track) => { track.enabled = active; });
    if (active && stream.current) {
      video.current?.play().catch(() => {});
    } else {
      video.current?.pause();
      if (detecting) setRecognitionMessage('辨識已暫停，回到相機頁後可重新開始。');
      stopDetection();
    }
  }, [tab]);
  useEffect(() => {
    let mounted = true;
    (async () => {
      const auth = await readJson('/.auth/me').catch(() => null);
      if (mounted) setCanWrite(Boolean(auth?.body?.clientPrincipal?.userRoles?.includes('ar_admin')));
      let summaries: any[] = [];
      let activeId = '';
      try {
        const result = await readJson('./api/ar-content?list=1');
        summaries = result.body.projects || [];
        activeId = result.body.activeProjectId;
      } catch {
        const fallback = await readJson('./ar-data.json');
        summaries = getProjects(fallback.body);
        activeId = fallback.body.activeProjectId;
      }
      if (!mounted) return;
      setProjects(summaries);
      const selected = summaries.find((p) => p.project.id === activeId) || summaries[0];
      if (!selected) throw new Error('尚未建立專案，請先在 V3 後台建立樓層與節點。');
      await loadProject(selected.project.id);
    })().catch((error) => { if (mounted) { setNotice({ kind: 'error', text: error.message }); setLoading(false); } });
    const onOnline = () => setOnline(navigator.onLine);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOnline);
    const clock = window.setInterval(() => setTicks(Date.now()), 1000);
    return () => {
      mounted = false;
      cameraGeneration.current++;
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOnline);
      window.clearInterval(clock);
      detectGeneration.current++;
      tracker.current?.dispose();
      stream.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  useEffect(() => {
    if (!floor) { setNodeId(''); return; }
    if (floorKey !== `${floor.buildingId}/${floor.id}`) setFloorKey(`${floor.buildingId}/${floor.id}`);
    if (!floor.nodes.some((n) => n.id === nodeId)) setNodeId((floor.nodes.find((n) => /大門|入口/.test(nodeLabel(n))) || floor.nodes[0])?.id || '');
  }, [floors, floorKey, nodeId]);
  useEffect(() => {
    setBearing(optionalAngle(node?.guideReferenceBearing) ?? 0);
    setMapUp(floor?.mapUpHeading === undefined || floor?.mapUpHeading === null ? '' : String(floor.mapUpHeading));
    setSaveMapUp(false);
    setPromote(false);
    setNextNodeId('');
    setLock(null);
    setCandidate(null);
    setPanorama(null);
    stopDetection();
    setDraft(null);
    setDraftLoadedKey('');
    setDraftMessage('');
    let active = true;
    if (scope) draftStore(scope).then((saved) => {
      if (!active) return;
      setDraft(saved);
      setDraftLoadedKey(scope);
      if (saved) setDraftMessage('已還原此節點的本機草稿');
    }).catch(() => {
      if (active) { setDraftLoadedKey(scope); setDraftMessage('此瀏覽器無法保存草稿，離開前請上傳或匯出。'); }
    });
    return () => { active = false; };
  }, [scope]);
  useEffect(() => {
    if (!draft || draftLoadedKey !== scope) return;
    let active = true;
    setDraftMessage('正在保存本機草稿…');
    draftStore(scope, draft).then(() => { if (active) setDraftMessage('草稿已保存在此瀏覽器，尚未上傳'); })
      .catch(() => { if (active) setDraftMessage('草稿保存失敗，請保持頁面開啟並匯出備份。'); });
    return () => { active = false; };
  }, [draft, scope, draftLoadedKey]);
  useEffect(() => {
    if (!panorama || !panoCanvas.current) return;
    try {
      const view = extractPanoramaView(panorama, panoYaw, panoPitch, 75);
      const canvas = panoCanvas.current;
      canvas.width = view.width;
      canvas.height = view.height;
      canvas.getContext('2d')?.drawImage(view, 0, 0);
    } catch (error) { setNotice({ kind: 'error', text: (error as Error).message }); }
  }, [panorama, panoYaw, panoPitch, tab]);
  useEffect(() => {
    const hidden = () => { if (document.hidden) stopCamera(); };
    document.addEventListener('visibilitychange', hidden);
    return () => document.removeEventListener('visibilitychange', hidden);
  }, []);
  useEffect(() => {
    const onOrientation = (event: DeviceOrientationEvent) => {
      const reading = sensorFromEvent(event, window.screen.orientation?.angle ?? (window as any).orientation ?? 0);
      if (reading.kind !== 'absolute' && sensorRef.current.kind === 'absolute' && sensorRef.current.capturedAt && Date.now() - Date.parse(sensorRef.current.capturedAt) < 1500) return;
      sensorRef.current = reading;
      setSensor(reading);
    };
    window.addEventListener('deviceorientation', onOrientation);
    window.addEventListener('deviceorientationabsolute', onOrientation as EventListener);
    return () => { window.removeEventListener('deviceorientation', onOrientation); window.removeEventListener('deviceorientationabsolute', onOrientation as EventListener); };
  }, []);

  async function requestSensors() {
    const orientation = (window as any).DeviceOrientationEvent;
    if (!orientation) { setSensorMessage('此裝置沒有方向感測，請用地圖手動校正'); return; }
    try {
      const permission = typeof orientation.requestPermission === 'function' ? await orientation.requestPermission() : 'granted';
      setSensorMessage(permission === 'granted' ? '權限已啟用，等待感測資料；勿靠近金屬或磁鐵' : '方位權限未允許，仍可手動校正');
    } catch { setSensorMessage('方位啟用失敗，請用手機 Safari／Chrome 並由按鈕重試'); }
  }
  async function startCamera() {
    const generation = ++cameraGeneration.current;
    // Invoke permissions from the same user gesture, before awaiting either.
    const orientationRequest = requestSensors();
    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
      setCameraState('error');
      setCameraMessage('相機需要 HTTPS 或本機 localhost；手機不能使用一般 HTTP 區網網址。仍可匯入照片。');
      await orientationRequest;
      return;
    }
    setCameraState('requesting');
    try {
      const media = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
      if (generation !== cameraGeneration.current || document.hidden) {
        media.getTracks().forEach((track) => track.stop());
        return;
      }
      stream.current?.getTracks().forEach((t) => t.stop());
      stream.current = media;
      const active = tabRef.current === 'camera';
      media.getVideoTracks().forEach((track) => { track.enabled = active; });
      if (video.current) {
        video.current.srcObject = media;
        if (active) await video.current.play().catch((error) => {
          if (tabRef.current === 'camera' && generation === cameraGeneration.current) throw error;
        });
      }
      if (generation !== cameraGeneration.current) return;
      setCameraState('ready');
      setCameraMessage('鏡頭直立，對準固定招牌／牆面地標，先停下再拍攝');
    } catch (error) {
      if (generation !== cameraGeneration.current) return;
      const name = (error as Error).name;
      setCameraState('error');
      setCameraMessage(name === 'NotAllowedError' ? '相機權限未允許。請在網址列開啟相機權限，或改用匯入照片。' : name === 'NotFoundError' ? '未找到相機，請用手機或匯入照片測試。' : '相機無法開啟，可能被其他應用占用；請關閉後重試。');
    }
    await orientationRequest;
  }
  async function makeDraft(source: FieldObservation['source'], image: HTMLCanvasElement | HTMLVideoElement, pano?: FieldObservation['panorama']) {
    if (!node) return;
    if (draft && !window.confirm('此節點已有尚未上傳的草稿。要用新照片取代嗎？請先匯出以保留舊草稿。')) return;
    const snapshot = source === 'camera' && sensorRef.current.capturedAt && Date.now() - Date.parse(sensorRef.current.capturedAt) <= 10000 ? { ...sensorRef.current } : { ...EMPTY_SENSOR };
    const capturedAt = new Date().toISOString();
    const encoded = await encodeObservationImage(image);
    const panoBearing = source === 'panorama-frame' && optionalAngle(panoZero) !== null ? normalizeBearing(Number(panoZero) + (pano?.yaw || 0)) : null;
    const newDraft: FieldObservation = { id: crypto.randomUUID(), capturedAt, source, ...encoded, mapBearing: panoBearing, headingSource: panoBearing === null ? 'unconfirmed' : 'manual', sensor: snapshot, note: '', ...(pano ? { panorama: pano } : {}) };
    setDraft(newDraft);
    setPromote(false);
    selectTab('capture');
    setNotice({ kind: 'info', text: '照片已建立本機草稿。請確認節點與拍照朝向，再按「上傳到後台」。' });
  }
  async function capture() {
    if (tabRef.current !== 'camera' || !video.current?.videoWidth || video.current.readyState < 2 || !stream.current?.getVideoTracks().some((track) => track.enabled && track.readyState === 'live')) return;
    setBusy('正在壓縮照片');
    try { await makeDraft('camera', video.current); }
    catch (error) { setNotice({ kind: 'error', text: (error as Error).message }); }
    finally { setBusy(''); }
  }
  async function importPhoto(file?: File) {
    if (!file) return;
    setBusy('正在處理照片');
    try { const image = await prepareImage(file); await makeDraft('upload', image.canvas); }
    catch (error) { setNotice({ kind: 'error', text: (error as Error).message }); }
    finally { setBusy(''); }
  }
  async function importPanorama(file?: File) {
    if (!file) return;
    setBusy('正在開啟環景');
    try { setPanorama(await loadPanorama(file)); setPanoYaw(0); setPanoPitch(0); setPanoZero(''); selectTab('capture'); }
    catch (error) { setNotice({ kind: 'error', text: (error as Error).message }); }
    finally { setBusy(''); }
  }
  async function save(mode: 'photo' | 'calibration') {
    if (!node || !floor || !revision || !canWrite || (mode === 'photo' && !draft)) return;
    const photo = draft;
    if (mode === 'photo' && promote && !window.confirm('將取代此節點在 V3 使用的導引照片。V4 歷史觀測照片會保留，確定繼續？')) return;
    if (mode === 'calibration' && saveMapUp && optionalAngle(mapUp) === null) { setNotice({ kind: 'error', text: '請先填入樓層地圖上方對應的方位。' }); return; }
    setBusy(mode === 'photo' ? '正在上傳照片' : '正在保存角度');
    try {
      const fieldSurvey = {
        projectId, buildingId: floor.buildingId, floorId: floor.id, nodeId: node.id, nodeType: node.nodeType,
        ...(mode === 'photo' ? { observation: photo, promoteToGuide: promote } : { calibration: { guideReferenceBearing: bearing, ...(saveMapUp ? { mapUpHeading: normalizeBearing(Number(mapUp)) } : {}) } }),
      };
      const result = await readJson('./api/save-ar-content', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-AR-Save-Contract': 'ar-field-survey-v1' }, body: JSON.stringify({ expectedSourceBlobSha: revision, fieldSurvey }) });
      if (!result.body.ok) throw new Error('後台未確認儲存成功，草稿已保留。');
      setRevision(result.revision || result.body.sourceBlobSha || '');
      if (mode === 'photo') {
        setDraft(null);
        await draftStore(scope, null).catch(() => {});
        setDraftMessage('照片已上傳，本機待傳草稿已清除');
      }
      const updated = await readJson(`./api/ar-content?projectId=${encodeURIComponent(projectId)}&ts=${Date.now()}`).catch(() => null);
      if (updated) { setProject(updated.body); setRevision(updated.revision); }
      setNotice({ kind: 'success', text: `${mode === 'photo' ? '照片與方位紀錄' : '節點角度'}已保存到${storage === 'local' ? '本機後台（未同步 GitHub）' : '後台'}。${updated ? '' : '重新讀取失敗，請稍後刷新後台。'}` });
    } catch (error) { setNotice({ kind: 'error', text: (error as Error).message }); }
    finally { setBusy(''); }
  }
  async function runRecognition(still?: HTMLCanvasElement) {
    if (!testRefs.length) { setRecognitionMessage('本樓層還沒有參考照片，請先上傳一張。'); return; }
    if (!still && cameraState !== 'ready') { setRecognitionMessage('請先開啟相機，或用「匯入測試照」測試。'); return; }
    stopDetection();
    setCandidate(null);
    setLock(null);
    const generation = detectGeneration.current;
    const instance = new OrbImageTracker({ fullScene: true });
    tracker.current = instance;
    setDetecting(true);
    setRecognitionMessage(`正在準備 ${testRefs.length} 張本樓層參考照片…`);
    try {
      await instance.prepareMany(testRefs.map((r) => ({ id: r.id, imageUrl: r.imageUrl })));
      if (generation !== detectGeneration.current) return;
      const frame = document.createElement('canvas');
      let previous = '';
      let confirmations = 0;
      const started = Date.now();
      do {
        if (generation !== detectGeneration.current) return;
        const image = still || video.current;
        const width = still?.width || video.current?.videoWidth || 0;
        const height = still?.height || video.current?.videoHeight || 0;
        if (!image || !width || !height) throw new Error('相機畫面尚未就緒，請重試。');
        frame.width = Math.min(420, width);
        frame.height = Math.round(height * frame.width / width);
        frame.getContext('2d')!.drawImage(image, 0, 0, frame.width, frame.height);
        const detection = await instance.detect(frame);
        if (generation !== detectGeneration.current) return;
        const ref = detection?.targetId ? testRefs.find((r) => r.id === detection.targetId) : null;
        if (ref && detection && detection.inliers >= 12) {
          confirmations = previous === ref.id ? confirmations + 1 : 1;
          previous = ref.id;
          if (still || confirmations >= 3) {
            setCandidate({ reference: ref, inliers: detection.inliers, matches: detection.matchCount });
            setRecognitionMessage(`候選節點：${ref.label}。${still ? '單張照片比對' : '連續 3 幀吻合'}；仍需現場確認，不代表精確座標。`);
            break;
          }
          setRecognitionMessage(`正在確認 ${ref.label}（${confirmations}/3）…`);
        } else {
          previous = ''; confirmations = 0;
          setRecognitionMessage('尚未匹配：請面向固定地標、靠近原拍攝位置，避免只拍地板。');
        }
        if (still) break;
        await new Promise((resolve) => window.setTimeout(resolve, 220));
      } while (Date.now() - started < 20000);
    } catch (error) { if (generation === detectGeneration.current) setRecognitionMessage((error as Error).message); }
    finally {
      instance.dispose();
      if (tracker.current === instance) tracker.current = null;
      if (generation === detectGeneration.current) setDetecting(false);
    }
  }
  async function testPhoto(file?: File) {
    if (!file) return;
    setBusy('正在讀取測試照片');
    try { const image = await prepareImage(file); await runRecognition(image.canvas); }
    catch (error) { setRecognitionMessage((error as Error).message); }
    finally { setBusy(''); }
  }
  function confirmCandidate() {
    if (!candidate) return;
    const ref = candidate.reference;
    const validSensor = !staleSensor ? sensor.heading : null;
    if (ref.nodeId !== nodeId) setNodeId(ref.nodeId);
    // A match is a node candidate, not a geometric pose. Operator confirmation is explicit.
    const confirmedBearing = ref.bearing;
    if (ref.nodeId === nodeId && confirmedBearing !== null) setLock({ nodeId: ref.nodeId, bearing: confirmedBearing, sensorHeading: validSensor, sensorKind: sensor.kind, screenAngle: sensor.screenAngle, time: Date.now() });
    setNotice({ kind: 'info', text: confirmedBearing === null ? '已選取候選節點；這張照片尚未記錄方向，請到「方向校正」設定。' : ref.nodeId !== nodeId ? '已切換到此節點。請核對地圖，面向參考照片同方向後，在校正工具確認朝向。' : '已由你確認節點與朝向。感測器僅短暫追蹤轉動，20 秒後須重新校正，沒有量測行走距離。' });
  }
  const disabled = Boolean(busy) || loading;
  const writeDisabled = disabled || !canWrite || !revision || storage === 'readonly' || !online;
  const sensorDerived = draft ? mapBearingFromSensor(draft.sensor, optionalAngle(mapUp), Date.parse(draft.capturedAt)) : null;

  return <div className={`field-app app-tabs-layout active-${tab}`}>
    <header className="field-header">
      <a className="field-brand" href="./ar-v4-field.html"><span className="brand-symbol"><Navigation size={23} /></span><span>室內導引 <b>FIELD LAB</b><small>V4 現場 AR 工作台</small></span></a>
      <div className="header-links"><span className="version-tag">V4 · 試作版</span><a href="./ar-v3.html" target="_blank" rel="noreferrer">開啟 V3 <ChevronRight size={14} /></a><a href="./admin-ar-v4.html" target="_blank" rel="noreferrer">現場資料後台 <ChevronRight size={14} /></a></div>
    </header>
    <main>
      <div className="page-heading"><div><div className="eyebrow">FIELD WORKSPACE · 0{FIELD_TABS.findIndex((item) => item.id === tab) + 1} / 05</div><h1>{activeTab.label}</h1><p>{activeTab.hint}</p></div><button className="soft-button refresh-action" disabled={disabled || !projectId} onClick={() => loadProject(projectId).catch((e) => setNotice({ kind: 'error', text: e.message }))}><RefreshCw size={16} /><span>重新讀取後台</span></button></div>
      <div className="environment-strip"><span className={`status-dot ${revision ? 'good' : ''}`} /><strong>{storage === 'local' ? '本機後台 · 不會同步 GitHub' : storage === 'readonly' ? '靜態資料 · 唯讀模式' : storage === 'loading' ? '正在連接後台…' : '雲端後台'}</strong><span>{revision ? `資料版本 ${revision.slice(0, 8)}` : '尚無可寫入的資料版本'}</span><span className="strip-end">{!online ? <><WifiOff size={14} />離線，照片先留草稿</> : canWrite ? '現場作業權限已就緒' : <a href="./admin.html" target="_blank" rel="noreferrer">登入 ar_admin 後才可上傳</a>}</span></div>
      {notice && <div className={`notice ${notice.kind}`} role={notice.kind === 'error' ? 'alert' : 'status'}><Info size={18} /><span>{notice.text}</span><button aria-label="關閉提示" onClick={() => setNotice(null)}>×</button></div>}
      <button className="workspace-context" onClick={() => selectTab('location')} aria-label="切換作業位置"><MapPin size={16} /><span><small>{project?.project?.name || '正在載入場域'} · {floor?.name || '—'}</small><b>{node ? nodeLabel(node) : '請選擇作業節點'}</b></span><em>{tab === 'location' ? '目前位置' : '切換位置'}</em><ChevronRight size={16} /></button>
      <div className="field-grid">
        <section id="field-panel-location" role="tabpanel" aria-labelledby="field-tab-location" tabIndex={0} hidden={tab !== 'location'} className="location-panel panel">
          <div className="panel-title"><span className="step-number">01</span><div><h2>選擇作業位置</h2><p>照片將綁定此節點</p></div><Layers size={19} /></div>
          <label>場域<select aria-label="場域" disabled={disabled} value={projectId} onChange={(e) => loadProject(e.target.value).catch((error) => setNotice({ kind: 'error', text: error.message }))}>{projects.map((p) => <option key={p.project.id} value={p.project.id}>{p.project.name || p.project.id}</option>)}</select></label>
          <label>建物／樓層<select aria-label="樓層" disabled={disabled} value={floor ? `${floor.buildingId}/${floor.id}` : ''} onChange={(e) => setFloorKey(e.target.value)}>{floors.map((f) => <option key={`${f.buildingId}/${f.id}`} value={`${f.buildingId}/${f.id}`}>{f.buildingName} · {f.name}</option>)}</select></label>
          <label>目前節點<select aria-label="目前節點" disabled={disabled || !floor?.nodes.length} value={nodeId} onChange={(e) => setNodeId(e.target.value)}>{floor?.nodes.map((n, i) => <option key={`${n.nodeType}/${n.id}`} value={n.id}>{String(i + 1).padStart(2, '0')} · {nodeLabel(n)}</option>)}</select></label>
          <div className="map-heading"><strong>點選地圖切換節點</strong><button aria-label="切換地圖放大" onClick={() => setMapZoom(mapZoom === 1 ? 1.7 : 1)}><Expand size={15} /></button></div>
          <div className="map-scroll"><div className="floor-map" style={{ width: `${mapZoom * 100}%` }}>
            {floor?.imageUrl ? <img src={floor.imageUrl} alt={`${floor.name} 現有樓層平面圖`} /> : <div className="map-placeholder">此樓層尚未提供平面圖</div>}
            <svg className="map-edges" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">{(floor?.edges || []).map((e: any, i: number) => { const a = floor.nodes.find((n) => n.id === e.start), b = floor.nodes.find((n) => n.id === e.end); return a && b ? <line key={e.id || i} x1={a.x * 1000} y1={a.y * 1000} x2={b.x * 1000} y2={b.y * 1000} /> : null; })}</svg>
            {floor?.nodes.map((n, i) => <button disabled={disabled} key={`${n.nodeType}/${n.id}`} className={`map-node ${n.id === nodeId ? 'selected' : ''}`} style={{ left: `${n.x * 100}%`, top: `${n.y * 100}%` }} aria-label={`選擇節點 ${nodeLabel(n)}`} title={nodeLabel(n)} onClick={() => setNodeId(n.id)}>{i + 1}</button>)}
          </div></div>
          <div className="map-legend"><span><i />作業節點</span><span>地圖上方為 0°</span></div>
          <div className="coverage"><span>本樓層照片覆蓋</span><strong>{coveredNodes}<small> / {floor?.nodes.length || 0} 節點</small></strong><progress max={floor?.nodes.length || 1} value={coveredNodes} /><p>包含 V3 參考照；有照片不代表已通過辨識。</p></div>
          <div className="field-tip"><Info size={17} /><p>站在選定節點附近，拍固定、容易辨認的地標。不要只拍地板、玻璃反光或人群。</p></div>
          <button className="primary-button full-width location-next" disabled={disabled || !node} onClick={() => selectTab('camera')}>位置確認，開始相機作業 <ChevronRight size={16} /></button>
        </section>
        <section id="field-panel-camera" role="tabpanel" aria-labelledby="field-tab-camera" tabIndex={0} hidden={tab !== 'camera'} className="capture-column">
          <div className="camera-card">
            <video ref={video} autoPlay playsInline muted className={cameraState === 'ready' ? 'camera-video visible' : 'camera-video'} />
            <div className="camera-top"><span className="camera-label"><span className={`status-dot ${cameraState === 'ready' ? 'good' : ''}`} />{cameraState === 'ready' ? 'LIVE CAMERA' : 'CAMERA STANDBY'}</span><span>{floor?.name || '—'} · {node ? nodeLabel(node) : '請選節點'}</span></div>
            {cameraState !== 'ready' && <div className="camera-placeholder"><div className="viewfinder-icon"><ScanLine size={50} strokeWidth={1} /></div><h2>從一張現場照片開始</h2><p>{cameraMessage}</p><button className="light-button" onClick={startCamera} disabled={cameraState === 'requesting' || disabled}><Camera size={17} />{cameraState === 'requesting' ? '正在請求權限…' : '開啟相機與方位感測'}</button><small>照片只在按下上傳後送往後台</small></div>}
            {cameraState === 'ready' && <><div className="camera-reticle" /><div className="live-tip">{cameraMessage}</div><button className="camera-shutter" aria-label="拍攝此畫面" disabled={disabled || !node || draftLoadedKey !== scope} onClick={capture}><Camera size={23} /></button></>}
            <div className="guide-hud"><div className="mascot" aria-label="固定畫面吉祥物"><span /><span /><i /></div><div><b>{turnAngle === null ? '小嚮導 · 等待方向確認' : Math.abs(turnAngle) < 18 ? '對準了，朝前方地標看' : `請向${turnAngle > 0 ? '右' : '左'}轉約 ${Math.round(Math.abs(turnAngle))}°`}</b><small>{nextNode ? `下一個地標：${nodeLabel(nextNode)}` : '先選擇相鄰節點，測試轉向提示'}</small></div>{turnAngle !== null && <ArrowUp className="hud-arrow" style={{ transform: `rotate(${turnAngle}deg)` }} />}</div>
            <div className="camera-bottom"><span>節點級定位 · 非公尺級追蹤</span>{cameraState === 'ready' && <button onClick={stopCamera}><VideoOff size={15} />關閉相機</button>}</div>
          </div>
          <div className="sensor-strip"><Compass size={20} /><div><b>{sensor.kind === 'absolute' ? '羅盤方位' : sensor.kind === 'relative' ? '相對轉動' : '方向感測'}</b><span>{staleSensor ? '尚無有效讀值' : angleText(sensor.heading)}{sensor.kind === 'relative' ? ' · 不是北向' : ''}</span></div><div><b>方向校正</b><span>{lockFresh ? '人工確認 · 20 秒有效' : '未校正／已過期'}</span></div><button onClick={requestSensors} disabled={disabled}>重新啟用</button></div>
          <p className="sensor-caption">{sensorMessage}。{sensor.accuracy !== null ? `感測器精度欄位 ${sensor.accuracy}°（非定位精度）。` : ''}切換頁籤會暫停鏡頭，返回後恢復。</p>
          <section className="recognition-panel panel">
            <div className="section-heading"><div><h2><ScanLine size={18} />照片辨識測試</h2><p>比對本樓層已保存照片，先找出候選節點</p></div><span className="subtle-tag">{testRefs.length} 張參考照</span></div>
            <div className="button-row"><button className="primary-button" disabled={disabled || !testRefs.length || cameraState !== 'ready'} onClick={() => detecting ? stopDetection() : runRecognition()}><ScanLine size={16} />{detecting ? '停止辨識' : '開始相機辨識'}</button><button className="soft-button" disabled={disabled || detecting || !testRefs.length} onClick={() => testInput.current?.click()}><ImagePlus size={16} />匯入測試照</button></div>
            <p className="recognition-status" role="status">{recognitionMessage}</p>
            {refs.length > 24 && <p className="helper">為控制記憶體，本輪僅測試 24 張，優先目前節點。請切換節點測試其餘照片。</p>}
            {candidate && <div className="candidate"><img src={candidate.reference.imageUrl} alt="匹配的參考照片" /><div><b>{candidate.reference.label}</b><small>{candidate.reference.source} · 參考朝向 {angleText(candidate.reference.bearing)}</small><small>幾何內點 {candidate.inliers}／匹配 {candidate.matches}，不是定位正確率</small><button disabled={disabled} onClick={confirmCandidate}>我確認在此節點，且面向照片同方向 <Check size={15} /></button></div></div>}
          </section>
        </section>
        <section id="field-tools" hidden={tab === 'location' || tab === 'camera'} className="tools-panel panel">
          {tab === 'capture' && <div id="field-panel-capture" role="tabpanel" aria-labelledby="field-tab-capture" tabIndex={0} className="tool-content">
            <div className="panel-title"><span className="step-number">02</span><div><h2>建立節點參考照片</h2><p>多個方向可分別拍攝、保存</p></div></div>
            <div className="capture-actions"><button className="primary-button" disabled={disabled || !node || draftLoadedKey !== scope} onClick={() => selectTab('camera')}><Camera size={18} />前往相機拍攝</button><button disabled={disabled || !node || draftLoadedKey !== scope} onClick={() => photoInput.current?.click()}><ImagePlus size={17} />匯入照片</button><button disabled={disabled || !node || draftLoadedKey !== scope} onClick={() => panoramaInput.current?.click()}><Expand size={17} />360 環景取景</button></div>
            {panorama && <div className="panorama-editor"><b>環景方向取景</b><canvas ref={panoCanvas} aria-label="環景透視預覽" /><label>水平取景 {panoYaw}°<input aria-label="環景水平取景" type="range" min="-180" max="180" value={panoYaw} onChange={(e) => setPanoYaw(Number(e.target.value))} /></label><label>仰俯角 {panoPitch}°<input aria-label="環景仰俯角" type="range" min="-45" max="45" value={panoPitch} onChange={(e) => setPanoPitch(Number(e.target.value))} /></label><label>環景中央對應的地圖方向（可留白）<input type="number" min="0" max="359.9" step="0.1" placeholder="地圖上方 = 0°" value={panoZero} onChange={(e) => setPanoZero(e.target.value)} /></label><button className="soft-button" disabled={disabled} onClick={async () => { setBusy('正在擷取環景'); try { await makeDraft('panorama-frame', extractPanoramaView(panorama, panoYaw, panoPitch, 75), { yaw: panoYaw, pitch: panoPitch, fov: 75 }); } catch (e) { setNotice({ kind: 'error', text: (e as Error).message }); } finally { setBusy(''); } }}>擷取這個方向</button><p className="helper">僅上傳這張透視照片，不上傳 360 原檔；這不是 VPS 建圖。</p></div>}
            {draft ? <div className="photo-draft"><img src={draft.imageUrl} alt="待上傳的節點參考照片" /><div className="photo-meta"><span>{sourceText[draft.source]}</span><span>{draft.width} × {draft.height} · 約 {Math.ceil(draft.imageUrl.length * 0.75 / 1024)} KB</span></div><p className="draft-state">{draftMessage}</p><label>這張照片的拍攝朝向（地圖角度）<input aria-label="照片拍攝朝向" type="number" min="0" max="359.9" step="0.1" placeholder="尚未確認，先留白" value={draft.mapBearing ?? ''} disabled={disabled} onChange={(e) => setDraft({ ...draft, mapBearing: optionalAngle(e.target.value), headingSource: e.target.value === '' ? 'unconfirmed' : 'manual' })} /></label><div className="button-row compact"><button disabled={disabled} onClick={() => setDraft({ ...draft, mapBearing: bearing, headingSource: 'manual' })}>套用校正面板 {angleText(bearing)}</button><button disabled={disabled || sensorDerived === null} onClick={() => sensorDerived !== null && setDraft({ ...draft, mapBearing: sensorDerived, headingSource: 'sensor-map' })}>採用拍攝時羅盤</button></div><p className="helper">0° 指向地圖上方，90° 指向右方。羅盤須有已校準的樓層北向；匯入照片不會套用現在手機的方位。</p><label>現場備註<textarea aria-label="現場備註" maxLength={1000} placeholder="例如：站在電梯左側，面向服務台；下午逆光" value={draft.note || ''} disabled={disabled} onChange={(e) => setDraft({ ...draft, note: e.target.value })} /></label>{draft.quality?.warnings?.length > 0 && <div className="quality-warnings">{draft.quality.warnings.map((warning, i) => <p key={i}>△ {warning}</p>)}<small>影像品質提示僅供檢查，不是辨識成功率。</small></div>}<label className="check-label"><input type="checkbox" checked={promote} disabled={disabled} onChange={(e) => setPromote(e.target.checked)} /><span>也設為 V3 此節點的主要導引照片<small>會取代舊主圖；預設只新增 V4 觀測紀錄。</small></span></label><button className="primary-button full-width" disabled={writeDisabled} onClick={() => save('photo')}><CloudUpload size={18} />上傳到{storage === 'local' ? '本機' : ''}後台</button><button className="text-button" onClick={() => downloadJson(`ar-v4-draft-${draft.id}.json`, { scope, observation: draft })}><Download size={15} />匯出草稿備份</button></div> : <div className="empty-draft"><ImagePlus size={34} strokeWidth={1.3} /><b>此節點尚無待傳照片</b><p>請拍攝或匯入一張照片。原始檔不會自動上傳。</p></div>}
            <div className="helper-box"><b>現場拍攝小提醒</b><p>先停下來、鏡頭直立；避開可辨識的人臉及個資。建議同一節點分拍前、左、右方，逐張校正方向。</p><p>環景請先用 Insta360 工具匯出 2:1 JPG／PNG。此試作每張檔案上限 30 MB，每節點最多 24 筆觀測。</p></div>
          </div>}
          {tab === 'calibrate' && <div id="field-panel-calibrate" role="tabpanel" aria-labelledby="field-tab-calibrate" tabIndex={0} className="tool-content">
            <div className="panel-title"><span className="step-number">03</span><div><h2>節點方向校正</h2><p>延續 V3 工程版的角度微調</p></div></div>
            <div className="bearing-dial"><span className="dial-n">地圖上方 · 0°</span><span className="dial-e">90°</span><span className="dial-s">180°</span><span className="dial-w">270°</span><Navigation size={65} strokeWidth={1.3} style={{ transform: `rotate(${bearing - 45}deg)` }} /><strong>{angleText(bearing)}</strong></div>
            <label>參考朝向<input aria-label="節點參考朝向" type="range" min="0" max="359" value={bearing} onChange={(e) => setBearing(Number(e.target.value))} disabled={disabled} /></label><div className="angle-adjust"><button disabled={disabled} onClick={() => setBearing(normalizeBearing(bearing - 5))}>−5°</button><button disabled={disabled} onClick={() => setBearing(normalizeBearing(bearing - 1))}>−1°</button><input aria-label="節點角度數值" type="number" min="0" max="359.9" step="0.1" value={bearing} disabled={disabled} onChange={(e) => setBearing(optionalAngle(e.target.value) ?? 0)} /><button disabled={disabled} onClick={() => setBearing(normalizeBearing(bearing + 1))}>+1°</button><button disabled={disabled} onClick={() => setBearing(normalizeBearing(bearing + 5))}>+5°</button></div>
            <label>測試下一個相鄰節點<select aria-label="下一個節點" value={nextNode?.id || ''} disabled={disabled || !neighbors.length} onChange={(e) => { setNextNodeId(e.target.value); setLock(null); }}>{neighbors.length ? neighbors.map((n) => <option key={n.id} value={n.id}>{nodeLabel(n)}</option>) : <option value="">此節點尚未連接路線</option>}</select></label>
            <button className="soft-button full-width" disabled={disabled || targetBearing === null} onClick={() => targetBearing !== null && setBearing(targetBearing)}><Navigation size={16} />以相鄰路段方向作參考 {angleText(targetBearing)}</button>
            <p className="helper">選擇路段只提供地圖參考；請實際面向對應地標。手機朝向不是行走方向，這裡不會量測已走距離。</p>
            <button className="primary-button full-width" disabled={writeDisabled || !node} onClick={() => save('calibration')}><CloudUpload size={17} />保存節點校正到後台</button>
            <button className="soft-button full-width" disabled={disabled || !node} onClick={() => { setLock({ nodeId: node!.id, bearing, sensorHeading: staleSensor ? null : sensor.heading, sensorKind: sensor.kind, screenAngle: sensor.screenAngle, time: Date.now() }); selectTab('camera'); setNotice({ kind: 'info', text: '已手動確認目前朝向，僅在此工作階段生效；沒有感測資料時不會顯示動態轉向。' }); }}>我已面向這個方向 · 測試轉向</button>
            <details className="advanced"><summary><SlidersHorizontal size={15} />樓層方位進階設定</summary><label>地圖上方對應的羅盤方位<input aria-label="樓層地圖北向" type="number" min="0" max="359.9" step="0.1" placeholder="尚未校準" value={mapUp} disabled={disabled} onChange={(e) => setMapUp(e.target.value)} /></label><p className="helper">例如地圖上方正對東方，填 90°。需先對準已知方向，勿直接把手機讀值當地圖北向。</p><label className="check-label"><input type="checkbox" checked={saveMapUp} disabled={disabled} onChange={(e) => setSaveMapUp(e.target.checked)} /><span>儲存節點時，也更新此樓層北向<small>影響整層的羅盤換算，請確認後勾選。</small></span></label></details>
            <div className="helper-box"><b>三種資訊分開保存</b><p>照片：找出候選節點。<br />感測器：記錄手機方位來源與時間。<br />人工校正：確認照片／節點在地圖上的方向。</p><p>修改節點角度不會改寫歷史照片的拍攝方向。</p></div>
          </div>}
          {tab === 'records' && <div id="field-panel-records" role="tabpanel" aria-labelledby="field-tab-records" tabIndex={0} className="tool-content">
            <div className="panel-title"><span className="step-number">04</span><div><h2>後台現場紀錄</h2><p>本樓層 {records.length} 筆 V4 觀測</p></div></div><p className="helper">{storage === 'local' ? '以下是本機後台持久保存的資料，不是 GitHub 雲端資料。' : '以下是目前讀取版本的後台資料。'}點選照片對應節點可繼續補拍。</p>
            <div className="button-row"><button className="soft-button" disabled={disabled || !project} onClick={() => downloadJson(`ar-v4-field-${projectId}.json`, { exportedAt: new Date().toISOString(), storage, revision, project })}><Download size={16} />匯出專案備份</button></div>
            <div className="records-list">{records.length ? records.slice().reverse().map(({ observation: o, label, nodeId: id }) => <article key={`${id}/${o.id}`} className="record-card"><button className="record-image" disabled={disabled} onClick={() => setNodeId(id)}><img src={o.imageUrl} alt={`${label} 的現場觀測照片`} /></button><div><b>{label}</b><span>{sourceText[o.source]} · {angleText(o.mapBearing)}</span><small>{readableDate(o.capturedAt)} · {o.headingSource === 'unconfirmed' ? '方向待確認' : o.headingSource === 'manual' ? '人工標記方向' : '羅盤換算方向'}</small>{o.note && <p>{o.note}</p>}</div></article>) : <div className="empty-draft"><Layers size={34} strokeWidth={1.3} /><b>尚無 V4 上傳紀錄</b><p>照片上傳成功後，會在這裡看到節點、朝向與現場備註。V3 既有參考照不列入新觀測。</p></div>}</div>
          </div>}
          {!node && !loading && <div className="notice error">此樓層沒有節點，請先在 V3 後台建立節點與路線。</div>}
        </section>
      </div>
      {busy && <div className="busy-indicator" role="status"><RefreshCw size={16} />{busy}…</div>}
      <footer className="field-footer"><span>V4 FIELD LAB · 現場採集與校正工具</span><span>相機辨識是節點候選，不是精確座標。請站定操作，留意周遭動線。</span></footer>
    </main>
    <nav className="bottom-nav" aria-label="現場工作台分頁"><div className="bottom-tabs" role="tablist" aria-label="現場工具">{FIELD_TABS.map(({ id, label, short, icon: Icon }, index) => <button key={id} id={`field-tab-${id}`} type="button" role="tab" aria-label={label} aria-selected={tab === id} aria-controls={`field-panel-${id}`} tabIndex={tab === id ? 0 : -1} onClick={() => selectTab(id)} onKeyDown={(event) => tabKeyDown(event, index)}><span className="tab-icon"><Icon size={21} strokeWidth={tab === id ? 2 : 1.6} />{id === 'capture' && draft && <i className="draft-dot" aria-label="有待上傳草稿" />}</span><span>{short}</span></button>)}</div></nav>
    <input ref={photoInput} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={(e) => { importPhoto(e.target.files?.[0]); e.target.value = ''; }} />
    <input ref={panoramaInput} type="file" accept="image/jpeg,image/png" hidden onChange={(e) => { importPanorama(e.target.files?.[0]); e.target.value = ''; }} />
    <input ref={testInput} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={(e) => { testPhoto(e.target.files?.[0]); e.target.value = ''; }} />
  </div>;
}
