import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUp, Camera, Check, ChevronRight, CloudUpload, Compass, Download, Expand, ImagePlus, Info, Layers, MapPin, Navigation, RefreshCw, Route, ScanLine, SlidersHorizontal, VideoOff, WifiOff } from 'lucide-react';
import { OrbImageTracker, recognitionFrameSize } from './ar-v4-image-recognition';
import { RECOGNITION_REASONS, type Diagnostic, type Preparation, type RecognitionProfile, type FishnetProjection } from './ar-v4-recognition-types';
import { RecognitionInspector } from './ar-v4-recognition-inspector';
import { FishnetProfileControl } from './ar-v4-fishnet-controls';
import { RecognitionCapture } from './ar-v4-recognition-capture';
import { advanceNodeConfirmation, type NodeConfirmation } from './ar-v4-recognition-stability';
import {cameraOrientationSensor,isFreshCameraSensor,manualHeadingAgeValid} from './ar-v4-camera-orientation';
import {useVisualHeading} from './ar-v4-use-visual-heading';
import {HeadingStatus} from './ar-v4-heading-status';
import {
  EMPTY_SENSOR, bearingBetween, encodeObservationImage, extractPanoramaView, flattenProject,
  loadPanorama, mapBearingFromSensor, nodeLabel, normalizeBearing, prepareImage, sensorFromEvent, signedAngle,
  type FieldObservation, type FieldSensor,
} from './ar-v4-field-core';
import { downloadJson, draftStore, readJson, workStore } from './ar-v4-field-storage';
import { EMPTY_STEPS, FLOW_STEPS, Help, Modal, Step, groupObservations, type WorkDraft } from './ar-v4-field-wizard';
import './ar-v4-field-wizard.css';

type Tab = 'location' | 'graph' | 'camera' | 'capture' | 'calibrate' | 'records';
const FIELD_TABS = [
  { id: 'location', label: '作業位置', short: '位置', icon: MapPin, hint: '選擇樓層與節點，確認這次作業的位置。' },
  { id: 'graph', label: '路網編輯', short: '路網', icon: Route, hint: '管理平面圖、路徑節點與 AR 點位，保存後接著做現場採集。' },
  { id: 'camera', label: '相機測試', short: '相機', icon: ScanLine, hint: '現場取景、拍照，或測試已保存的節點照片。' },
  { id: 'capture', label: '照片採集', short: '照片', icon: ImagePlus, hint: '整理現場照片與環景取景，確認後再上傳。' },
  { id: 'calibrate', label: '方向校正', short: '校正', icon: Compass, hint: '微調節點方向，讓地圖與現場的朝向一致。' },
  { id: 'records', label: '後台紀錄', short: '紀錄', icon: Layers, hint: '檢查已上傳的觀測資料，或匯出備份。' },
] as const;
type Notice = { kind: 'info' | 'success' | 'error'; text: string };
type Reference = { id: string; nodeId: string; imageUrl: string; label: string; bearing: number | null; source: string; projection?:FishnetProjection };
const optionalAngle = (value: unknown) => value === null || value === undefined || value === '' || !Number.isFinite(Number(value)) ? null : normalizeBearing(Number(value));
const angleText = (angle: number | null) => angle === null ? '尚未確認' : `${Math.round(angle * 10) / 10}°`;
const readableDate = (value: string) => new Date(value).toLocaleString('zh-TW', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
const sourceText = { camera: '現場拍攝', upload: '照片匯入', 'panorama-frame': '環景取景' };
const getProjects = (raw: any) => Array.isArray(raw?.projects) ? raw.projects : raw?.project ? [raw] : [];

export default function FieldApp() {
  const [recognitionDiagnostic,setRecognitionDiagnostic]=useState<Diagnostic|null>(null);
  const [recognitionPreparation,setRecognitionPreparation]=useState<Preparation|null>(null);
  const [recognitionFrame,setRecognitionFrame]=useState('');
  const [recognitionProfile,setRecognitionProfile]=useState<RecognitionProfile>('fishnet');
  const lastTestFrame=useRef<HTMLCanvasElement|null>(null);
  const [hasTestFrame,setHasTestFrame]=useState(false);
  const [trialResults,setTrialResults]=useState<Partial<Record<RecognitionProfile,{diagnostic:Diagnostic;elapsedMs:number}>>>({});
  const recognitionCapture=useMemo(()=>new RecognitionCapture(),[]);
  const [projects, setProjects] = useState<any[]>([]);
  const [projectId, setProjectId] = useState('');
  const [project, setProject] = useState<any>(null);
  const [floorKey, setFloorKey] = useState('');
  const [nodeId, setNodeId] = useState('');
  const [revision, setRevision] = useState('');
  const [storage, setStorage] = useState('loading');
  const [canWrite, setCanWrite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refreshingProjects, setRefreshingProjects] = useState(false);
  const [busy, setBusy] = useState('');
  const [notice, setNotice] = useState<Notice | null>(null);
  const [online, setOnline] = useState(navigator.onLine);
  const [tab, setTab] = useState<Tab>(location.pathname.includes('admin-ar-v4') || new URLSearchParams(location.search).get('view') === 'records' ? 'records' : 'location');
  const editorFrame = useRef<HTMLIFrameElement>(null);
  const [editorSrc, setEditorSrc] = useState('');
  const [navigationOpen, setNavigationOpen] = useState(false);
  // Navigation owns a separate camera lifecycle. Leaving this tab or changing
  // the saved project disposes its iframe rather than leaving a hidden camera.
  useEffect(() => { setNavigationOpen(false); }, [tab, projectId, revision]);
  const [editorReady, setEditorReady] = useState(false);
  const [editorStatus, setEditorStatus] = useState({ dirty: false, busy: false });
  const editorMessage = useRef<(data: any) => void>(() => {});
  const editorLocked = editorStatus.dirty || editorStatus.busy;
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
  const visualHeading=useVisualHeading(sensor,ticks);
  const video = useRef<HTMLVideoElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const [draft, setDraft] = useState<FieldObservation | null>(null);
  const [draftLoadedKey, setDraftLoadedKey] = useState('');
  const [draftMessage, setDraftMessage] = useState('');
  const [photoWriting, setPhotoPending] = useState(false);
  const [savedPhoto, setSavedPhoto] = useState<FieldObservation|null>(null);
  const [photoDraftError, setPhotoDraftError] = useState(false);
  const [bearing, setBearing] = useState(0);
  const [mapUp, setMapUp] = useState('');
  const [saveMapUp, setSaveMapUp] = useState(false);
  const [promote, setPromote] = useState(false);
  const [nextNodeId, setNextNodeId] = useState('');
  const [mapZoom, setMapZoom] = useState(1);
  const [panorama, setPanorama] = useState<HTMLImageElement | null>(null);
  const [panoFile, setPanoFile] = useState<File|null>(null);
  const [steps, setSteps] = useState({ ...EMPTY_STEPS });
  const [captureKind, setCaptureKind] = useState<'photo'|'panorama'>('photo');
  const [cameraTask, setCameraTask] = useState<'photo'|'recognition'|'direction'|'navigation'>('recognition');
  const [expertMode, setExpertMode] = useState(new URLSearchParams(location.search).get('ui') === 'classic');
  const [menuOpen, setMenuOpen] = useState(false);
  const [recordDetail, setRecordDetail] = useState<string|null>(null);
  const [recordScope, setRecordScope] = useState('node');
  const [workLoadedKey, setWorkLoadedKey] = useState('');
  const [workMessage, setWorkMessage] = useState('');
  const [workWriting, setWorkPending] = useState(false);
  const [savedWork, setSavedWork] = useState<WorkDraft|null>(null);
  const [workError, setWorkError] = useState(false);
  const [calibrationReview, setCalibrationReview] = useState(false);
  const step = steps[tab];
  function goStep(value:number, destination:Tab=tab) { if(destination==='camera'&&value===0){stopCamera();setNavigationOpen(false);} setSteps(old=>({...old,[destination]:Math.max(0,Math.min(FLOW_STEPS[destination].length-1,value))})); }
  const [panoYaw, setPanoYaw] = useState(0);
  const [panoPitch, setPanoPitch] = useState(0);
  const [panoZero, setPanoZero] = useState('');
  const [panoBatch, setPanoBatch] = useState<FieldObservation[]>([]);
  const [panoSaved, setPanoSaved] = useState<string[]>([]);
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
  const workSnapshot=useMemo<WorkDraft>(()=>({version:1,revision,bearing,mapUp,saveMapUp,nextNodeId,panoFile,panoBatch,panoSaved,panoZero,panoYaw,panoPitch,steps,captureKind,calibrationReview}),[revision,bearing,mapUp,saveMapUp,nextNodeId,panoFile,panoBatch,panoSaved,panoZero,panoYaw,panoPitch,steps,captureKind,calibrationReview]);
  const photoPending=photoWriting || Boolean(draft&&draftLoadedKey===scope&&savedPhoto!==draft);
  const workPending=photoPending || workWriting || Boolean(scope&&workLoadedKey===scope&&savedWork!==workSnapshot);
  const activeScope = useRef(scope);
  activeScope.current = scope;
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
    const observations: Reference[] = (n.fieldObservations || []).map((o: FieldObservation) => ({ id: `${n.id}:${o.id}`, nodeId: n.id, imageUrl: o.imageUrl, label: nodeLabel(n), bearing: optionalAngle(o.mapBearing), source: sourceText[o.source] || '現場照片',
      ...(o.source==='panorama-frame'&&o.panorama?.batchId?{projection:{panoramaId:JSON.stringify([projectId,floor.buildingId,floor.id,n.id,o.panorama.batchId]),yaw:o.panorama.yaw,pitch:o.panorama.pitch,fov:o.panorama.fov,mapBearing:optionalAngle(o.mapBearing)}}:{}) }));
    const oldImage = n.nodeType === 'marker' ? n.imageUrl : n.guideImageUrl;
    if (oldImage && !observations.some((o) => o.imageUrl === oldImage)) observations.push({ id: `${n.id}:v3`, nodeId: n.id, imageUrl: oldImage, label: nodeLabel(n), bearing: optionalAngle(n.guideReferenceBearing), source: 'V3 參考照片' });
    return observations;
  }), [floor,projectId]);
  const testRefs = useMemo(() => [...refs.filter((r) => r.nodeId === nodeId), ...refs.filter((r) => r.nodeId !== nodeId)].slice(0, 24), [refs, nodeId]);
  useEffect(()=>{setRecognitionDiagnostic(null);setRecognitionPreparation(null);setRecognitionFrame('');},[scope]);
  useEffect(()=>{lastTestFrame.current=null;setHasTestFrame(false);setTrialResults({});},[scope,tab,revision]);
  const records: Array<{ observation: FieldObservation; label: string; nodeId: string }> = (floor?.nodes || []).flatMap((n) => (n.fieldObservations || []).map((observation: FieldObservation) => ({ observation, label: nodeLabel(n), nodeId: n.id })));
  const coveredNodes = new Set(refs.map((r) => r.nodeId)).size;
  const staleSensor = !sensor.capturedAt || ticks - Date.parse(sensor.capturedAt) > 10000;
  const cameraSensor=cameraOrientationSensor(sensor);
  const liveCameraSensor=isFreshCameraSensor(cameraSensor,Date.now());
  const lockFresh = lock && lock.nodeId === node?.id && manualHeadingAgeValid(lock.time,Date.now()) && liveCameraSensor && lock.sensorKind === cameraSensor.kind && lock.screenAngle === sensor.screenAngle;
  const currentMapHeading = lockFresh && lock.sensorHeading !== null
    ? normalizeBearing(lock.bearing + signedAngle(cameraSensor.heading! - lock.sensorHeading)) : visualHeading.view.bearing;
  useEffect(()=>{if(lock&&(!lockFresh))setLock(null);},[lock,lockFresh]);
  const turnAngle = targetBearing !== null && currentMapHeading !== null ? signedAngle(targetBearing - currentMapHeading) : null;

  function selectTab(next: Tab) {
    setMenuOpen(false);
    if (tabRef.current === next) return;
    setNotice(old=>old?.kind==='error'?old:null);
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
    visualHeading.reset();
    recognitionCapture.clear();
    detectGeneration.current++;
    tracker.current?.dispose();
    tracker.current = null;
    setDetecting(false);
  }
  function changeRecognitionProfile(profile:RecognitionProfile){
    stopDetection();setRecognitionProfile(profile);setCandidate(null);setLock(null);
    setRecognitionDiagnostic(null);setRecognitionPreparation(null);setRecognitionFrame('');
    setRecognitionMessage(lastTestFrame.current?'已切換模式，可重跑同一張測試照。':'已切換模式，請開始辨識或匯入測試照。');
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
  async function loadProject(id: string, selected?: { buildingId: string; floorId: string }, refreshGeneration?: number, restore?: {floorKey:string;nodeId:string;tab:Tab}|null) {
    const generation = refreshGeneration ?? ++loadGeneration.current;
    if (generation !== loadGeneration.current) return;
    stopCamera();
    setNavigationOpen(false);
    setLoading(true);
    const applyLocation = (body: any, loadedRevision: string) => {
      const nextFloors = flattenProject(body);
      const switchingProject = id !== projectId;
      const requestedFloor = selected ? `${selected.buildingId}/${selected.floorId}` : restore?.floorKey ?? (switchingProject ? '' : floorKey);
      const nextFloor = nextFloors.find(f => `${f.buildingId}/${f.id}` === requestedFloor) || nextFloors[0];
      const requestedNode = restore?.nodeId ?? (switchingProject ? '' : nodeId);
      const nextNode = nextFloor?.nodes.find(n => n.id === requestedNode)
        || nextFloor?.nodes.find(n => /大門|入口/.test(n.label)) || nextFloor?.nodes[0];
      // Identical floor/node IDs in different venues are not the same location.
      // Existing scoped drafts remain in IndexedDB and are restored by scope.
      setFloorKey(nextFloor ? `${nextFloor.buildingId}/${nextFloor.id}` : '');
      setNodeId(nextNode?.id || '');
      if (restore && !new URLSearchParams(location.search).has('view') && !location.pathname.includes('admin-ar-v4')) selectTab(restore.tab);
      const nextScope = nextNode ? [id, nextFloor.buildingId, nextFloor.id, nextNode.nodeType, nextNode.id].join('/') : '';
      const serverBearing = optionalAngle(nextNode?.guideReferenceBearing) ?? 0;
      const serverMapUp = nextFloor?.mapUpHeading === null || nextFloor?.mapUpHeading === undefined ? '' : String(nextFloor.mapUpHeading);
      if (nextScope && nextScope === scope && workLoadedKey === scope) {
        // Refreshing does not discard a saved local calibration draft. A new
        // server version instead requires reviewing any differing draft angle.
        if (loadedRevision !== revision && (bearing !== serverBearing || saveMapUp && mapUp !== serverMapUp)) setCalibrationReview(true);
      } else {
        setBearing(serverBearing);
        setMapUp(serverMapUp);
        setSaveMapUp(false);
      }
      if (switchingProject) setMapZoom(1);
    };
    try {
      const result = await readJson(`./api/ar-content?projectId=${encodeURIComponent(id)}&ts=${Date.now()}`);
      if (generation !== loadGeneration.current) return;
      if (!Array.isArray(result.body.buildings)) throw new Error('後台專案沒有可用的樓層資料');
      setProject(result.body);
      setProjectId(id);
      applyLocation(result.body, result.revision);
      setRevision(result.revision);
      setStorage(result.storage);
      // Draft review is handled above; a list revision never authorizes writes.
      setLock(null);
      setCandidate(null);
      stopDetection();
      return true;
    } catch (error) {
      if (generation !== loadGeneration.current) return;
      const raw = await readJson('./ar-data.json');
      if (generation !== loadGeneration.current) return;
      const fallback = getProjects(raw.body).find((p: any) => p.project.id === id);
      if (!fallback) throw error;
      setProject(fallback);
      setProjectId(id);
      applyLocation(fallback, '');
      setRevision('');
      setStorage('readonly');
      setNotice({ kind: 'error', text: `目前僅載入靜態資料（唯讀），不可上傳。${(error as Error).message}` });
      return false;
    } finally { if (generation === loadGeneration.current) setLoading(false); }
  }

  async function readProjectList() {
    const result = await readJson(`./api/ar-content?list=1&ts=${Date.now()}`);
    if (!Array.isArray(result.body.projects) || result.body.projects.some((p: any) => typeof p?.project?.id !== 'string' || !p.project.id)) {
      throw new Error('後台場域清單格式不正確，保留目前作業資料。');
    }
    return result;
  }
  const contextLocked = Boolean(busy) || loading || refreshingProjects || editorLocked || workPending || workError || photoPending || photoDraftError
    || Boolean(scope && (workLoadedKey !== scope || draftLoadedKey !== scope));
  function resolveCalibrationReview(useServer: boolean) {
    if (contextLocked || !calibrationReview || !node || !floor) return;
    if (useServer) {
      setBearing(optionalAngle(node.guideReferenceBearing) ?? 0);
      setMapUp(floor.mapUpHeading === null || floor.mapUpHeading === undefined ? '' : String(floor.mapUpHeading));
      setSaveMapUp(false);
    }
    setCalibrationReview(false);
    setLock(null);
    visualHeading.reset();
  }
  async function refreshProjects() {
    if (contextLocked || !online) return;
    const generation = loadGeneration.current;
    setRefreshingProjects(true);
    try {
      const result = await readProjectList();
      if (generation !== loadGeneration.current) return;
      setProjects(result.body.projects);
      // A list response's revision describes the full catalog. Never use it to
      // authorize a save of the project already loaded in this workspace.
      setNotice(projectId && !result.body.projects.some((p: any) => p.project.id === projectId)
        ? { kind: 'error', text: '場域清單已更新，但目前場域已不在清單中。作業與草稿仍保留，請確認後台狀態。' }
        : { kind: 'success', text: `已重新讀取 ${result.body.projects.length} 個場域；目前位置與草稿不變。` });
    } catch (error) { setNotice({ kind: 'error', text: `場域清單更新失敗，保留目前資料。${(error as Error).message}` }); }
    finally { setRefreshingProjects(false); }
  }
  async function refreshBackend() {
    if (contextLocked || !online || !projectId) return;
    const generation = ++loadGeneration.current;
    stopCamera(); setNavigationOpen(false); setLoading(true);
    try {
      const result = await readProjectList();
      if (generation !== loadGeneration.current) return;
      setProjects(result.body.projects);
      if (!result.body.projects.some((p: any) => p.project.id === projectId)) throw new Error('目前場域已不在後台清單中，保留作業與草稿，請重新選擇場域。');
      const loaded = await loadProject(projectId, undefined, generation);
      if (loaded && generation === loadGeneration.current) setNotice({ kind: 'success', text: '場域清單與目前場域已重新讀取，本機草稿仍保留。' });
    } catch (error) { if (generation === loadGeneration.current) setNotice({ kind: 'error', text: (error as Error).message }); }
    finally { if (generation === loadGeneration.current) setLoading(false); }
  }
  async function switchProject(id: string) {
    if (contextLocked || id === projectId || !projects.some(p => p.project.id === id)) return;
    try {
      const loaded = await loadProject(id);
      if (loaded !== undefined) {
        const url = new URL(location.href);
        url.searchParams.set('projectId', id);
        history.replaceState(null, '', url);
        if (loaded) setNotice({ kind: 'success', text: '已切換場域，請確認樓層與節點；原場域的本機草稿仍保留。' });
      }
    } catch (error) { setNotice({ kind: 'error', text: (error as Error).message }); }
  }

  // The editor stays mounted across tabs so switching tools never destroys its draft.
  useEffect(() => {
    if (tab !== 'graph' || editorSrc || !canWrite || loading || busy || storage === 'readonly') return;
    const params = new URLSearchParams({ embedded: '1', v4: '1', projectId,
      buildingId: floor?.buildingId || '', floorId: floor?.id || '' });
    setEditorSrc(`./admin-ar.html?${params}`);
  }, [tab, editorSrc, canWrite, loading, busy, storage, projectId, floor]);

  useEffect(() => {
    // Do not unmount a dirty frame on a temporary read/auth failure.
    // Keep the editor's export/reload controls usable after a failed refresh.
    // Its API still enforces write permissions and revision checks independently.
    if (editorFrame.current) editorFrame.current.inert = Boolean(busy) || loading;
  }, [editorSrc, busy, loading, canWrite, storage]);

  useEffect(() => {
    if (!editorReady || tab !== 'graph') return;
    editorFrame.current?.contentWindow?.postMessage({ type: 'ar-v4-editor-context', projectId,
      buildingId: floor?.buildingId || '', floorId: floor?.id || '', sourceBlobSha: revision }, location.origin);
  }, [editorReady, tab, projectId, floorKey, revision]);

  editorMessage.current = (data) => {
    if (data.type === 'ar-v4-editor-ready') { setEditorReady(true); return; }
    if (data.type === 'ar-v4-editor-status' && typeof data.dirty === 'boolean' && typeof data.busy === 'boolean') {
      setEditorStatus((old) => old.dirty === data.dirty && old.busy === data.busy ? old : { dirty: data.dirty, busy: data.busy });
      return;
    }
    if (data.type !== 'ar-v4-editor-saved' || typeof data.projectId !== 'string' || !data.projectId ||
        typeof data.buildingId !== 'string' || typeof data.floorId !== 'string' ||
        typeof data.sourceBlobSha !== 'string' || !/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/i.test(data.sourceBlobSha)) return;
    // A message is only a refresh hint. Read authoritative data rather than accepting a frame's payload.
    const generation = ++loadGeneration.current;
    setLoading(true);
    void (async () => {
      try {
        const result = await readProjectList();
        if (generation !== loadGeneration.current) return;
        if (!result.body.projects?.some((p: any) => p.project?.id === data.projectId)) throw new Error('找不到剛保存的專案，請重新讀取後台。');
        setProjects(result.body.projects);
        const refreshed = await loadProject(data.projectId, { buildingId: data.buildingId, floorId: data.floorId }, generation);
        if (refreshed && generation === loadGeneration.current) setNotice({ kind: 'success', text: `路網已保存到${result.storage === 'local' ? '本機後台（未同步 GitHub）' : '後台'}，位置頁已更新。請選擇節點後拍照或校正。` });
      } catch (error) {
        if (generation === loadGeneration.current) setNotice({ kind: 'error', text: `路網保存後未能更新位置頁：${(error as Error).message}。請重新讀取後台。` });
      } finally { if (generation === loadGeneration.current) setLoading(false); }
    })();
  };
  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (event.origin !== location.origin || event.source !== editorFrame.current?.contentWindow ||
          !event.data || typeof event.data !== 'object') return;
      editorMessage.current(event.data);
    };
    window.addEventListener('message', receive);
    return () => window.removeEventListener('message', receive);
  }, []);
  useEffect(() => {
    if (!editorLocked) return;
    const warn = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = ''; };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [editorLocked]);

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
        const result = await readProjectList();
        summaries = result.body.projects || [];
        activeId = result.body.activeProjectId;
        if (mounted) setStorage(result.storage);
      } catch {
        const fallback = await readJson('./ar-data.json');
        summaries = getProjects(fallback.body);
        activeId = fallback.body.activeProjectId;
      }
      if (!mounted) return;
      setProjects(summaries);
      const previous=await workStore<{projectId:string;floorKey:string;nodeId:string;tab:Tab}>('selection:v4').catch(()=>null);
      if (!mounted) return;
      const requestedId = new URLSearchParams(location.search).get('projectId');
      const selected = requestedId !== null ? summaries.find(p => p.project.id === requestedId)
        : summaries.find((p) => p.project.id === previous?.projectId) || summaries.find((p) => p.project.id === activeId) || summaries[0];
      if (requestedId !== null && !selected) throw new Error(`找不到指定場域「${requestedId || '空白 ID'}」。請重新讀取場域或從清單選擇，不會自動切到其他場域。`);
      if (!selected) throw new Error('尚未建立專案，請到「路網」建立場域、樓層與節點。');
      await loadProject(selected.project.id,undefined,undefined,previous&&selected.project.id===previous.projectId?previous:null);
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
    setPanorama(null); setPanoFile(null); setWorkLoadedKey(''); setWorkMessage(''); setWorkError(false); setCalibrationReview(false);
    setPanoBatch([]); setPanoSaved([]);
    setSteps(old=>({...EMPTY_STEPS,location:old.location})); setCaptureKind('photo');
    stopDetection();
    setDraft(null);
    setPhotoPending(false);setPhotoDraftError(false);setSavedPhoto(null);
    setDraftLoadedKey('');
    setDraftMessage('');
    let active = true;
    if (scope) draftStore(scope).then((saved) => {
      if (!active) return;
      setDraft(saved);
      setSavedPhoto(saved);
      setDraftLoadedKey(scope);
      if (saved) setDraftMessage('已還原此節點的本機草稿');
    }).catch(() => {
      if (active) { setDraftLoadedKey(scope); setDraftMessage('此瀏覽器無法保存草稿，離開前請上傳或匯出。'); }
    });
    if (scope) workStore<WorkDraft>(`work:${scope}`).then(async saved => {
      if (!active) return;
      if (saved?.version === 1) {
        setBearing(saved.bearing); setMapUp(saved.mapUp); setSaveMapUp(saved.saveMapUp); setNextNodeId(saved.nextNodeId);
        setPanoBatch(saved.panoBatch); setPanoSaved(saved.panoSaved); setPanoZero(saved.panoZero); setPanoYaw(saved.panoYaw); setPanoPitch(saved.panoPitch);
        setSteps(old=>({...EMPTY_STEPS,...saved.steps,location:old.location,camera:0})); setCaptureKind(saved.captureKind || 'photo');
        setCalibrationReview(Boolean(saved.calibrationReview) || saved.revision !== revision && (saved.bearing !== (optionalAngle(node?.guideReferenceBearing) ?? 0) || saved.saveMapUp));
        if (saved.panoFile) { const image=await loadPanorama(saved.panoFile); if(!active)return; setPanoFile(saved.panoFile); setPanorama(image); }
        setWorkMessage('已恢復此節點的作業草稿');
      }
      if(active)setWorkLoadedKey(scope);
    }).catch(()=>{if(active){setWorkLoadedKey(scope);setWorkError(true);setWorkMessage('作業草稿無法恢復，離開前請保存或匯出。');}});
    return () => { active = false; };
  }, [scope]);
  useEffect(()=>{if(scope&&workLoadedKey===scope&&!loading)void workStore('selection:v4',{projectId,floorKey,nodeId,tab}).catch(()=>{});},[scope,workLoadedKey,loading,tab]);
  useEffect(() => {
    if (!scope || workLoadedKey !== scope) return;
    let active=true; setWorkPending(true);
    const value=workSnapshot;
    workStore(`work:${scope}`,value).then(()=>{if(active){setSavedWork(value);setWorkPending(false);setWorkError(false);setWorkMessage('作業草稿已暫存於此裝置');}}).catch(()=>{if(active){setWorkPending(false);setWorkError(true);setWorkMessage('裝置空間不足或草稿保存失敗，請先保存到後台或匯出。');}});
    return ()=>{active=false;};
  },[scope,workLoadedKey,workSnapshot]);
  useEffect(()=>{
    if(!workPending&&!workError&&!photoPending&&!photoDraftError)return;
    const warn=(e:BeforeUnloadEvent)=>{e.preventDefault();e.returnValue='';};
    window.addEventListener('beforeunload',warn);return()=>window.removeEventListener('beforeunload',warn);
  },[workPending,workError,photoPending,photoDraftError]);
  useEffect(()=>{
    if(expertMode)return;
    document.title=`${activeTab.label} · ${step+1}/${FLOW_STEPS[tab].length}｜V4 工作台`;
    window.scrollTo(0,0);
    document.getElementById('flow-title')?.focus({preventScroll:true});
  },[tab,step,expertMode]);
  useEffect(() => {
    if (!draft || draftLoadedKey !== scope) return;
    let active = true;
    setPhotoPending(true);setPhotoDraftError(false);
    setDraftMessage('正在保存本機草稿…');
    draftStore(scope, draft).then(() => { if (active) {setSavedPhoto(draft);setPhotoPending(false);setDraftMessage('草稿已保存在此瀏覽器，尚未上傳');} })
      .catch(() => { if (active) {setPhotoPending(false);setPhotoDraftError(true);setDraftMessage('草稿保存失敗，請保持頁面開啟並匯出備份。');} });
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
  }, [panorama, panoYaw, panoPitch, tab, expertMode, captureKind]);
  useEffect(() => {
    const hidden = () => { if (document.hidden) stopCamera(); };
    document.addEventListener('visibilitychange', hidden);
    return () => document.removeEventListener('visibilitychange', hidden);
  }, []);
  useEffect(() => {
    const onOrientation = (event: DeviceOrientationEvent) => {
      const reading = sensorFromEvent(event, window.screen.orientation?.angle ?? (window as any).orientation ?? 0);
      if (reading.kind === 'relative' && reading.screenAngle===sensorRef.current.screenAngle && sensorRef.current.kind === 'absolute' && sensorRef.current.capturedAt && Date.now() - Date.parse(sensorRef.current.capturedAt) >= 0 && Date.now() - Date.parse(sensorRef.current.capturedAt) < 1500) return;
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
    setCaptureKind('photo'); goStep(1,'capture'); selectTab('capture');
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
    if (panoBatch.length && panoSaved.length < panoBatch.length && !window.confirm('目前環景還有未完成的上傳。換圖會清除待傳批次，但不會刪除已保存照片，確定換圖？')) return;
    const target = scope;
    setBusy('正在開啟環景');
    try { const image = await loadPanorama(file); if (activeScope.current !== target) return; setPanorama(image); setPanoFile(file); setCaptureKind('panorama'); setPanoBatch([]); setPanoSaved([]); setPanoYaw(0); setPanoPitch(0); setPanoZero(''); goStep(1,'capture'); selectTab('capture'); }
    catch (error) { setNotice({ kind: 'error', text: (error as Error).message }); }
    finally { setBusy(''); }
  }
  async function splitPanorama() {
    const zero = optionalAngle(panoZero);
    if (busy || !panorama || !node || zero === null) return;
    if ((node.fieldObservations || []).length + 8 > 24) { setNotice({ kind: 'error', text: '此節點剩餘容量不足 8 張；不會刪除既有照片。' }); return; }
    const target = scope;
    setBusy('正在自動拆解環景');
    try {
      const batch: FieldObservation[] = [];
      const batchId = crypto.randomUUID();
      for (let yaw = 0; yaw < 360; yaw += 45) {
        await new Promise(resolve => setTimeout(resolve, 0));
        if (activeScope.current !== target) return;
        const encoded = await encodeObservationImage(extractPanoramaView(panorama, yaw, 0, 75));
        batch.push({ id: crypto.randomUUID(), capturedAt: new Date().toISOString(), source: 'panorama-frame', ...encoded,
          mapBearing: normalizeBearing(zero + yaw), headingSource: 'manual', sensor: { ...EMPTY_SENSOR },
          note: `環景批次取景；中央地圖方向 ${zero}°；非地磁北方。`, panorama: { yaw, pitch: 0, fov: 75, batchId } });
      }
      if (activeScope.current === target) { setPanoBatch(batch); setPanoSaved([]); goStep(2,'capture'); setNotice({ kind: 'info', text: '8 張參考照已產生，確認方向後即可保存。' }); }
    } catch (error) { setNotice({ kind: 'error', text: (error as Error).message }); }
    finally { setBusy(''); }
  }
  async function savePanoramaBatch() {
    if (busy || loading || editorLocked || !node || !floor || !canWrite || !online || !panoBatch.length) return;
    const target = scope;
    const generation = loadGeneration.current;
    const current = () => activeScope.current === target && loadGeneration.current === generation;
    let saved = [...panoSaved];
    setBusy('正在保存環景參考照');
    try {
      // Fresh revision also makes retries safe after an uncertain network response.
      const snapshot = await readJson(`./api/ar-content?projectId=${encodeURIComponent(projectId)}&ts=${Date.now()}`);
      if (!current()) return;
      let sha = snapshot.revision;
      const freshNode = flattenProject(snapshot.body).find(f => f.buildingId === floor.buildingId && f.id === floor.id)?.nodes.find(n => n.nodeType === node.nodeType && n.id === node.id);
      if (!freshNode) throw new Error('節點已變更或刪除，請重新確認位置。');
      const existing = freshNode.fieldObservations || [];
      const pending = panoBatch.filter(item => !existing.some((old: FieldObservation) => old.id === item.id));
      if (existing.length + pending.length > 24) throw new Error('後台剩餘容量不足，未開始本次上傳。既有照片均保留。');
      for (const observation of panoBatch) {
        if (!current()) return;
        setBusy(`正在保存環景參考照 ${saved.length}／8`);
        const result = await readJson('./api/save-ar-content', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-AR-Save-Contract': 'ar-field-survey-v1' }, body: JSON.stringify({ expectedSourceBlobSha: sha, fieldSurvey: { projectId, buildingId: floor.buildingId, floorId: floor.id, nodeId: node.id, nodeType: node.nodeType, observation, promoteToGuide: false } }) });
        if (!result.body.ok) throw new Error('後台尚未確認保存，請重試。');
        sha = result.revision || result.body.sourceBlobSha || '';
        if (!saved.includes(observation.id)) saved.push(observation.id);
        if (current()) { setPanoSaved([...saved]); setRevision(sha); }
      }
      const updated = await readJson(`./api/ar-content?projectId=${encodeURIComponent(projectId)}&ts=${Date.now()}`);
      if (current()) { setProject(updated.body); setRevision(updated.revision); goStep(3,'capture'); setNotice({ kind: 'success', text: `8 張環景參考照與方向已保存到${storage === 'local' ? '本機後台（未同步 GitHub）' : '後台'}。可到「相機測試」辨識；未替換 V3 導引照片。` }); }
    } catch (error) { if (current()) setNotice({ kind: 'error', text: `已確認 ${saved.length}／8 張。${(error as Error).message} 保持此頁並按重試，會沿用原照片編號，不重複新增。` }); }
    finally { setBusy(''); }
  }
  async function save(mode: 'photo' | 'calibration') {
    if (busy || loading || editorLocked || !node || !floor || !revision || !canWrite || (mode === 'photo' && !draft)) return;
    const generation = loadGeneration.current;
    const stillCurrent = () => generation === loadGeneration.current && activeScope.current === scope;
    const photo = draft;
    if (mode === 'calibration' && calibrationReview) { setNotice({kind:'error',text:'後台已更新，請先核對恢復的校正草稿。'}); return; }
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
      if (stillCurrent()) setRevision(result.revision || result.body.sourceBlobSha || '');
      if (mode === 'photo') {
        await draftStore(scope, null).catch(() => {});
        if (stillCurrent()) { setDraft(null); setDraftMessage('照片已上傳，本機待傳草稿已清除'); }
      }
      const updated = await readJson(`./api/ar-content?projectId=${encodeURIComponent(projectId)}&ts=${Date.now()}`).catch(() => null);
      if (updated && stillCurrent()) { setProject(updated.body); setRevision(updated.revision); if(mode==='calibration')setSaveMapUp(false); }
      if (stillCurrent()) { goStep(3,mode === 'photo'?'capture':'calibrate'); setNotice({ kind: 'success', text: `${mode === 'photo' ? '照片與方位紀錄' : '節點角度'}已保存到${storage === 'local' ? '本機後台（未同步 GitHub）' : '後台'}。${updated ? '' : '重新讀取失敗，請稍後刷新後台。'}` }); }
    } catch (error) { if (stillCurrent()) setNotice({ kind: 'error', text: (error as Error).message }); }
    finally { setBusy(''); }
  }
  async function runRecognition(still?: HTMLCanvasElement) {
    if (!testRefs.length) { setRecognitionMessage('本樓層還沒有參考照片，請先上傳一張。'); return; }
    if (!still && cameraState !== 'ready') { setRecognitionMessage('請先開啟相機，或用「匯入測試照」測試。'); return; }
    stopDetection();
    setCandidate(null);
    setLock(null);
    setRecognitionDiagnostic(null);setRecognitionPreparation(null);setRecognitionFrame('');
    recognitionCapture.clear();
    const generation = detectGeneration.current;
    const instance = new OrbImageTracker({ fullScene: true, profile:recognitionProfile });
    tracker.current = instance;
    setDetecting(true);
    setRecognitionMessage(`正在準備 ${testRefs.length} 張本樓層參考照片…`);
    try {
      await instance.prepareMany(testRefs.map((r) => ({ id: r.id, nodeId:r.nodeId, imageUrl: r.imageUrl, projection:r.projection })));
      if (generation !== detectGeneration.current) return;
      setRecognitionPreparation(instance.preparation);
      const frame = document.createElement('canvas');
      let confirmation: NodeConfirmation | null = null;
      const started = Date.now();
      do {
        if (generation !== detectGeneration.current) return;
        const image = still || video.current;
        const width = still?.width || video.current?.videoWidth || 0;
        const height = still?.height || video.current?.videoHeight || 0;
        if (!image || !width || !height) throw new Error('相機畫面尚未就緒，請重試。');
        const size=recognitionFrameSize(width,height);
        frame.width = size.width; frame.height = size.height;
        const frameCapturedAt=Date.now(),frameSensor=cameraOrientationSensor(sensorRef.current);
        frame.getContext('2d')!.drawImage(image, 0, 0, frame.width, frame.height);
        const matchStarted=performance.now();
        const detection = await instance.detect(frame);
        const elapsedMs=Math.round(performance.now()-matchStarted);
        if (generation !== detectGeneration.current) return;
        const ref = detection?.targetId ? testRefs.find((r) => r.id === detection.targetId) : null;
        const directionResult=visualHeading.observe(instance.diagnostics,{capturedAt:frameCapturedAt,sensor:frameSensor,nodeId:ref?.nodeId,referenceId:ref?.id,eligibleNodeId:nodeId,still:Boolean(still)});
        setRecognitionDiagnostic(instance.diagnostics);
        setRecognitionFrame(frame.toDataURL('image/jpeg',.65));
        if(instance.diagnostics){
          recognitionCapture.record(frame,instance.diagnostics,{mode:'field',profile:recognitionProfile,revision,nodeId,referenceIds:testRefs.map(r=>r.id),sourceWidth:width,sourceHeight:height,heading:{version:'v4-visual-heading-1',frameCapturedAt,sensor:still?null:frameSensor,estimate:directionResult.estimate,still:Boolean(still)}});
          if(still)setTrialResults(old=>({...old,[recognitionProfile]:{diagnostic:instance.diagnostics!,elapsedMs}}));
        }
        if (ref && detection && detection.inliers >= 12) {
          confirmation = advanceNodeConfirmation(confirmation, ref.nodeId, Date.now());
          if (still || confirmation!.hits >= 3) {
            setCandidate({ reference: ref, inliers: detection.inliers, matches: detection.matchCount });
            setRecognitionMessage(`候選節點：${ref.label}。${still ? '單張照片比對' : '最近 5 次取樣中有 3 次吻合'}；仍需現場確認，不代表精確座標。`);
            if(still||cameraTask!=='direction')break;
          } else setRecognitionMessage(`正在確認 ${ref.label}（${confirmation!.hits}/3，短暫漏判可接續）…`);
        } else {
          confirmation = advanceNodeConfirmation(confirmation, null, Date.now(), instance.diagnostics?.reason === 'ambiguous');
          setRecognitionMessage(confirmation?`暫時未匹配，近期證據保留 ${confirmation.hits}/3；請停留片刻。`:`尚未匹配：${instance.diagnostics?RECOGNITION_REASONS[instance.diagnostics.reason]:'請調整取景'}。`);
        }
        if (still) break;
        await new Promise((resolve) => window.setTimeout(resolve, 220));
      } while (Date.now() - started < 20000);
    } catch (error) { if (generation === detectGeneration.current) { setRecognitionPreparation(instance.preparation);setRecognitionMessage((error as Error).message); } }
    finally {
      instance.dispose();
      if (tracker.current === instance) tracker.current = null;
      if (generation === detectGeneration.current) setDetecting(false);
    }
  }
  async function testPhoto(file?: File) {
    if (!file) return;
    const targetScope=activeScope.current;
    setBusy('正在讀取測試照片');
    try { const image = await prepareImage(file); if(targetScope!==activeScope.current)return;lastTestFrame.current=image.canvas;setHasTestFrame(true);setTrialResults({});await runRecognition(image.canvas); }
    catch (error) { setRecognitionMessage((error as Error).message); }
    finally { setBusy(''); }
  }
  function confirmCandidate() {
    if (!candidate) return;
    const ref = candidate.reference;
    visualHeading.reset();
    const validSensor = liveCameraSensor ? cameraSensor.heading : null;
    if (ref.nodeId !== nodeId) setNodeId(ref.nodeId);
    // A match is a node candidate, not a geometric pose. Operator confirmation is explicit.
    const confirmedBearing = ref.bearing;
    if (ref.nodeId === nodeId && confirmedBearing !== null) setLock({ nodeId: ref.nodeId, bearing: confirmedBearing, sensorHeading: validSensor, sensorKind: cameraSensor.kind, screenAngle: sensor.screenAngle, time: Date.now() });
    setNotice({ kind: 'info', text: confirmedBearing === null ? '已選取候選節點；這張照片尚未記錄方向，請到「方向校正」設定。' : ref.nodeId !== nodeId ? '已切換到此節點。請核對地圖，面向參考照片同方向後，在校正工具確認朝向。' : '已由你確認節點與朝向。感測器僅短暫追蹤轉動，20 秒後須重新校正，沒有量測行走距離。' });
  }
  const disabled = Boolean(busy) || loading;
  const writeDisabled = disabled || editorLocked || !canWrite || !revision || storage === 'readonly' || !online;
  const projectPicker = <div className="field-project-picker"><label>場域<select aria-label="場域" disabled={contextLocked} value={projectId} onChange={e => void switchProject(e.target.value)}>
    {!projectId && <option value="" disabled>請選擇場域</option>}
    {projectId && !projects.some(p => p.project.id === projectId) && <option value={projectId} disabled>{project?.project?.name || projectId}（未列在後台）</option>}
    {projects.map(p => <option key={p.project.id} value={p.project.id}>{p.project.name || p.project.id}</option>)}
  </select></label><button className="soft-button" aria-label="重新讀取場域" disabled={contextLocked || !online} onClick={() => void refreshProjects()}><RefreshCw size={16}/><span>{refreshingProjects ? '讀取中…' : '重新讀取場域'}</span></button></div>;
  const calibrationReviewPanel = calibrationReview && <div className="notice error calibration-review" role="alert"><span>校正草稿與後台版本不同。後台節點方向 {angleText(optionalAngle(node?.guideReferenceBearing))}、樓層北向 {angleText(optionalAngle(floor?.mapUpHeading))}。請選擇採用後台資料，或核對目前草稿後再保存。</span><button disabled={contextLocked || !node} onClick={() => resolveCalibrationReview(true)}>採用後台校正</button><button disabled={contextLocked || !node} onClick={() => resolveCalibrationReview(false)}>我已核對，使用此校正草稿</button></div>;
  const sensorDerived = draft ? mapBearingFromSensor(draft.sensor, optionalAngle(mapUp), Date.parse(draft.capturedAt)) : null;
  const recognitionTools = <section className="v4-fishnet-trial-tools">
    <HeadingStatus heading={visualHeading} manual={Boolean(lockFresh)}/>
    <FishnetProfileControl profile={recognitionProfile} onChange={changeRecognitionProfile} disabled={disabled || detecting}/>
    {hasTestFrame && <button disabled={disabled || detecting} onClick={() => { if (lastTestFrame.current) void runRecognition(lastTestFrame.current); }}>重跑這張測試照</button>}
    {Object.keys(trialResults).length > 0 && <details><summary>同圖對照結果</summary>{(['fishnet','legacy'] as const).map((profile) => {
      const trial = trialResults[profile];
      const resultLabel = {matched:'幾何通過',few_features:'特徵不足',few_matches:'配對不足',geometry:'幾何未通過',clustered:'特徵太集中',ambiguous:'節點混淆',no_targets:'無參考資料'}[trial?.diagnostic.reason || 'no_targets'];
      return trial && <p key={profile}>{profile === 'fishnet' ? 'Fishnet 試驗' : '原版對照'}：{resultLabel} · 幾何內點 {trial.diagnostic.inliers} · {Math.round(trial.elapsedMs)} ms</p>;
    })}<small>同一張測試照、同一搜尋範圍；內點數不是定位正確率。</small></details>}
  </section>;

  const classicView = <div className={`field-app app-tabs-layout active-${tab}`}>
    <header className="field-header">
      <a className="field-brand" href="./ar-v4-field.html"><span className="brand-symbol"><Navigation size={23} /></span><span>室內導引 <b>FIELD LAB</b><small>V4 現場 AR 工作台</small></span></a>
      <div className="header-links"><span className="version-tag">V4 · 試作版</span><a href="./ar-v3.html" target="_blank" rel="noreferrer">開啟 V3 <ChevronRight size={14} /></a><a href="./admin-ar-v4.html" target="_blank" rel="noreferrer">現場資料後台 <ChevronRight size={14} /></a></div>
    </header>
    <main>
      <div className="page-heading"><div><div className="eyebrow">FIELD WORKSPACE · 0{FIELD_TABS.findIndex((item) => item.id === tab) + 1} / 0{FIELD_TABS.length}</div><h1>{activeTab.label}</h1><p>{activeTab.hint}</p></div><button className="soft-button refresh-action" disabled={contextLocked || !online || !projectId} onClick={() => void refreshBackend()}><RefreshCw size={16} /><span>重新讀取後台</span></button></div>
      <div className="environment-strip"><span className={`status-dot ${revision ? 'good' : ''}`} /><strong>{storage === 'local' ? '本機後台 · 不會同步 GitHub' : storage === 'readonly' ? '靜態資料 · 唯讀模式' : storage === 'loading' ? '正在連接後台…' : '雲端後台'}</strong><span>{revision ? `資料版本 ${revision.slice(0, 8)}` : '尚無可寫入的資料版本'}</span><span className="strip-end">{!online ? <><WifiOff size={14} />離線，照片先留草稿</> : canWrite ? '現場作業權限已就緒' : <a href="./admin.html" target="_blank" rel="noreferrer">登入 ar_admin 後才可上傳</a>}</span></div>
      {notice && <div className={`notice ${notice.kind}`} role={notice.kind === 'error' ? 'alert' : 'status'}><Info size={18} /><span>{notice.text}</span><button aria-label="關閉提示" onClick={() => setNotice(null)}>×</button></div>}
      {editorLocked && <div className="editor-draft-notice" role="status"><Route size={18} /><span>{editorStatus.busy ? '路網正在讀取或保存，請稍候。' : '路網有尚未保存的變更。可以切換頁籤整理照片草稿；請先回路網保存，再切換場域或上傳照片與校正。'}</span>{tab !== 'graph' && <button onClick={() => selectTab('graph')}>返回路網</button>}</div>}
      <button className="workspace-context" onClick={() => selectTab('location')} aria-label="切換作業位置"><MapPin size={16} /><span><small>{project?.project?.name || '正在載入場域'} · {floor?.name || '—'}</small><b>{node ? nodeLabel(node) : '請選擇作業節點'}</b></span><em>{tab === 'location' ? '目前位置' : '切換位置'}</em><ChevronRight size={16} /></button>
      <div className="field-grid">
        <section id="field-panel-location" role="tabpanel" aria-labelledby="field-tab-location" tabIndex={0} hidden={tab !== 'location'} className="location-panel panel">
          <div className="panel-title"><span className="step-number">01</span><div><h2>選擇作業位置</h2><p>照片將綁定此節點</p></div><Layers size={19} /></div>
          {projectPicker}
          <label>建物／樓層<select aria-label="樓層" disabled={contextLocked} value={floor ? `${floor.buildingId}/${floor.id}` : ''} onChange={(e) => setFloorKey(e.target.value)}>{floors.map((f) => <option key={`${f.buildingId}/${f.id}`} value={`${f.buildingId}/${f.id}`}>{f.buildingName} · {f.name}</option>)}</select></label>
          <label>目前節點<select aria-label="目前節點" disabled={contextLocked || !floor?.nodes.length} value={nodeId} onChange={(e) => setNodeId(e.target.value)}>{floor?.nodes.map((n, i) => <option key={`${n.nodeType}/${n.id}`} value={n.id}>{String(i + 1).padStart(2, '0')} · {nodeLabel(n)}</option>)}</select></label>
          <div className="map-heading"><strong>點選地圖切換節點</strong><button aria-label="切換地圖放大" onClick={() => setMapZoom(mapZoom === 1 ? 1.7 : 1)}><Expand size={15} /></button></div>
          <div className="map-scroll"><div className="floor-map" style={{ width: `${mapZoom * 100}%` }}>
            {floor?.imageUrl ? <img src={floor.imageUrl} alt={`${floor.name} 現有樓層平面圖`} /> : <div className="map-placeholder">此樓層尚未提供平面圖</div>}
            <svg className="map-edges" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">{(floor?.edges || []).map((e: any, i: number) => { const a = floor.nodes.find((n) => n.id === e.start), b = floor.nodes.find((n) => n.id === e.end); return a && b ? <line key={e.id || i} x1={a.x * 1000} y1={a.y * 1000} x2={b.x * 1000} y2={b.y * 1000} /> : null; })}</svg>
            {floor?.nodes.map((n, i) => <button disabled={contextLocked} key={`${n.nodeType}/${n.id}`} className={`map-node ${n.id === nodeId ? 'selected' : ''}`} style={{ left: `${n.x * 100}%`, top: `${n.y * 100}%` }} aria-label={`選擇節點 ${nodeLabel(n)}`} title={nodeLabel(n)} onClick={() => setNodeId(n.id)}>{i + 1}</button>)}
          </div></div>
          <div className="map-legend"><span><i />作業節點</span><span>地圖上方為 0°</span></div>
          <div className="coverage"><span>本樓層照片覆蓋</span><strong>{coveredNodes}<small> / {floor?.nodes.length || 0} 節點</small></strong><progress max={floor?.nodes.length || 1} value={coveredNodes} /><p>包含 V3 參考照；有照片不代表已通過辨識。</p></div>
          <div className="field-tip"><Info size={17} /><p>站在選定節點附近，拍固定、容易辨認的地標。不要只拍地板、玻璃反光或人群。</p></div>
          <button className="soft-button full-width location-edit" onClick={() => selectTab('graph')}><Route size={17} />編輯地圖、路徑與 AR 點位 <ChevronRight size={16} /></button>
          <button className="primary-button full-width location-next" disabled={disabled || !node} onClick={() => selectTab('camera')}>位置確認，開始相機作業 <ChevronRight size={16} /></button>
        </section>
        <section id="field-panel-graph" role="tabpanel" aria-labelledby="field-tab-graph" tabIndex={0} hidden={tab !== 'graph'} className="graph-panel">
          <div className="graph-workspace-actions">
            <details className="graph-instructions">
              <summary><Info size={16} />操作說明與資料安全</summary>
              <div className="graph-help-content"><b>展開需要的工具，用完收合回到地圖</b><p>「樓層與底圖」切換樓層 →「路徑節點」畫連線 →「AR 點位」放置目的地 →「路網測試」檢查連通 →「資料保存」寫入後台。</p><small>編輯變更會自動暫存於此瀏覽器。{storage === 'local' ? '仍需按「保存到本機後台」，V4 才會讀到更新；不會推送 GitHub。' : '雲端發布會更新 GitHub，請先核對場域與保存確認。'}平面圖點位不是真實空間的 3D 錨點。</small><p className="graph-footnote">切換底部頁籤會保留路網草稿。刪除節點也會移除該節點的已上傳照片，請先匯出備份再確認刪除；單純移動節點不會刪照片。</p></div>
            </details>
            <button className="soft-button graph-return" onClick={() => selectTab('location')}><Camera size={17} />回位置採集</button>
          </div>
          {(!canWrite || storage === 'readonly') && <div className="panel empty-draft"><Route size={34} /><b>請確認後台連線與作業權限</b><p>目前位置頁未連上可寫入後台。已開啟的路網草稿仍保留，可先在編輯器匯出草稿或重新讀取後台；後台仍會檢查權限與版本。</p></div>}
          {canWrite && storage !== 'readonly' && !editorReady && <p className="helper" role="status">正在載入路網編輯器…</p>}
          {editorSrc && <iframe ref={editorFrame} src={editorSrc} title="地圖與路網編輯器" className="graph-editor-frame" allow="camera; accelerometer; gyroscope; magnetometer" />}
        </section>
        <section id="field-panel-camera" role="tabpanel" aria-labelledby="field-tab-camera" tabIndex={0} hidden={tab !== 'camera'} className="capture-column">
          <div className="camera-mode-switch" role="group" aria-label="選擇導引測試方式">
            <button aria-pressed={!navigationOpen} onClick={() => setNavigationOpen(false)}><ScanLine size={17} />照片與方向</button>
            <a href="./ar-v4-demo.html?mode=scan" target="_blank" rel="noopener noreferrer">螢幕辨識 Demo（模擬資料）</a>
            <button aria-pressed={navigationOpen} disabled={loading || !!busy || editorLocked || !projectId} onClick={() => { stopCamera(); setNavigationOpen(true); }}><Navigation size={17} />導航流程</button>
          </div>
          {navigationOpen && tab === 'camera' && !editorLocked && <section className="navigation-test panel" aria-label="導航流程測試">
            <div className="navigation-test-help"><h2>V4 民眾導引測試</h2><p>以目前工作台節點模擬 Kiosk 起點。選目的地預覽 V3 路線，再啟用相機與方向感測；持續比對 V4 照片，抵達由使用者確認。皮卡是方向示意，非精確 3D 錨點。</p><small>切換頁籤會結束測試，草稿不受影響。</small></div>
            <iframe src={`./ar-v4-navigation.html?projectId=${encodeURIComponent(projectId)}&origin=${encodeURIComponent(nodeId)}`} title="AR 導航流程測試" className="navigation-test-frame" allow="camera; accelerometer; gyroscope; magnetometer; fullscreen" allowFullScreen />
          </section>}
          <div hidden={navigationOpen}>
          <div className="camera-card">
            <video ref={video} autoPlay playsInline muted className={cameraState === 'ready' ? 'camera-video visible' : 'camera-video'} />
            <div className="camera-top"><span className="camera-label"><span className={`status-dot ${cameraState === 'ready' ? 'good' : ''}`} />{cameraState === 'ready' ? 'LIVE CAMERA' : 'CAMERA STANDBY'}</span><span>{floor?.name || '—'} · {node ? nodeLabel(node) : '請選節點'}</span></div>
            {cameraState !== 'ready' && <div className="camera-placeholder"><div className="viewfinder-icon"><ScanLine size={50} strokeWidth={1} /></div><h2>從一張現場照片開始</h2><p>{cameraMessage}</p><button className="light-button" onClick={startCamera} disabled={cameraState === 'requesting' || disabled}><Camera size={17} />{cameraState === 'requesting' ? '正在請求權限…' : '開啟相機與方位感測'}</button><small>照片只在按下上傳後送往後台</small></div>}
            {cameraState === 'ready' && <><div className="camera-reticle" /><div className="live-tip">{cameraMessage}</div><button className="camera-shutter" aria-label="拍攝此畫面" disabled={disabled || !node || draftLoadedKey !== scope} onClick={capture}><Camera size={23} /></button></>}
            <div className="guide-hud"><div className="mascot" aria-label="固定畫面吉祥物"><span /><span /><i /></div><div><b>{turnAngle === null ? '小嚮導 · 等待方向確認' : Math.abs(turnAngle) < 18 ? '對準了，朝前方地標看' : `請向${turnAngle > 0 ? '右' : '左'}轉約 ${Math.round(Math.abs(turnAngle))}°`}</b><small>{nextNode ? `下一個地標：${nodeLabel(nextNode)}` : '先選擇相鄰節點，測試轉向提示'}</small></div>{turnAngle !== null && <ArrowUp className="hud-arrow" style={{ transform: `rotate(${turnAngle}deg)` }} />}</div>
            <div className="camera-bottom"><span>節點級定位 · 非公尺級追蹤</span>{cameraState === 'ready' && <button onClick={stopCamera}><VideoOff size={15} />關閉相機</button>}</div>
          </div>
          <div className="sensor-strip"><Compass size={20} /><div><b>{sensor.kind === 'absolute' ? '羅盤方位' : sensor.kind === 'relative' ? '相對轉動' : '方向感測'}</b><span>{staleSensor ? '尚無有效讀值' : angleText(sensor.heading)}{sensor.kind === 'relative' ? ' · 不是北向' : ''}</span></div><div><b>方向校正</b><span>{lockFresh ? '人工確認 · 20 秒有效' : visualHeading.view.bearing!==null?'視覺定向（近似）':'未校正／已過期'}</span></div><button onClick={requestSensors} disabled={disabled}>重新啟用</button></div>
          <p className="sensor-caption">{sensorMessage}。{sensor.accuracy !== null ? `感測器精度欄位 ${sensor.accuracy}°（非定位精度）。` : ''}切換頁籤會暫停鏡頭，返回後恢復。</p>
          <section className="recognition-panel panel">
            <div className="section-heading"><div><h2><ScanLine size={18} />照片辨識測試</h2><p>比對本樓層已保存照片，先找出候選節點</p></div><span className="subtle-tag">{testRefs.length} 張參考照</span></div>
            <div className="button-row"><button className="primary-button" disabled={disabled || !testRefs.length || cameraState !== 'ready'} onClick={() => detecting ? stopDetection() : runRecognition()}><ScanLine size={16} />{detecting ? '停止辨識' : '開始相機辨識'}</button><button className="soft-button" disabled={disabled || detecting || !testRefs.length} onClick={() => testInput.current?.click()}><ImagePlus size={16} />匯入測試照</button></div>
            {recognitionTools}<p className="recognition-status" role="status">{recognitionMessage}</p><RecognitionInspector diagnostic={recognitionDiagnostic} preparation={recognitionPreparation} frame={recognitionFrame} references={testRefs} onExport={()=>recognitionCapture.download()}/>
            {refs.length > 24 && <p className="helper">為控制記憶體，本輪僅測試 24 張，優先目前節點。請切換節點測試其餘照片。</p>}
            {candidate && <div className="candidate"><img src={candidate.reference.imageUrl} alt="匹配的參考照片" /><div><b>{candidate.reference.label}</b><small>{candidate.reference.source} · 參考朝向 {angleText(candidate.reference.bearing)}</small><small>幾何內點 {candidate.inliers}／匹配 {candidate.matches}，不是定位正確率</small><button disabled={disabled} onClick={confirmCandidate}>我確認在此節點，且面向照片同方向 <Check size={15} /></button></div></div>}
          </section>
          </div>
        </section>
        <section id="field-tools" hidden={tab !== 'capture' && tab !== 'calibrate' && tab !== 'records'} className="tools-panel panel">
          {tab === 'capture' && <div id="field-panel-capture" role="tabpanel" aria-labelledby="field-tab-capture" tabIndex={0} className="tool-content">
            <div className="panel-title"><span className="step-number">02</span><div><h2>建立節點參考照片</h2><p>多個方向可分別拍攝、保存</p></div></div>
            <div className="capture-actions"><button className="primary-button" disabled={disabled || !node || draftLoadedKey !== scope} onClick={() => selectTab('camera')}><Camera size={18} />前往相機拍攝</button><button disabled={disabled || !node || draftLoadedKey !== scope} onClick={() => photoInput.current?.click()}><ImagePlus size={17} />匯入照片</button><button disabled={disabled || !node || draftLoadedKey !== scope} onClick={() => panoramaInput.current?.click()}><Expand size={17} />360 環景取景</button></div>
            {panorama && <div className="panorama-editor"><b>① 環景已載入 → ② 校正 0° → ③ 拆解保存</b>
              <p>目前節點：{node ? nodeLabel(node) : '未選擇'}。地圖上方 0°、右方 90°；不是地磁北方。</p>
              <canvas ref={panoCanvas} aria-label="環景透視預覽" />
              <label>水平取景 {panoYaw}°<input disabled={disabled || !!panoBatch.length} aria-label="環景水平取景" type="range" min="-180" max="180" value={panoYaw} onChange={e => setPanoYaw(Number(e.target.value))} /></label>
              <label>仰俯角 {panoPitch}°<input disabled={disabled || !!panoBatch.length} aria-label="環景仰俯角" type="range" min="-45" max="45" value={panoPitch} onChange={e => setPanoPitch(Number(e.target.value))} /></label>
              <p className="helper">將預覽轉到「地圖上方」的現場地標，按下方按鈕校正；也可直接填入環景中央的地圖方向。</p>
              <button disabled={disabled || !!panoBatch.length} onClick={() => setPanoZero(String(normalizeBearing(-panoYaw)))}>目前預覽面向地圖上方（0°）</button>
              <label>環景中央對應的地圖方向<input aria-label="環景中央地圖方向" disabled={disabled || !!panoBatch.length} type="number" min="0" max="359.9" step="0.1" placeholder="請先校正；上方 0°、右方 90°" value={panoZero} onChange={e => setPanoZero(e.target.value)} /></label>
              {!panoBatch.length && <><button className="primary-button" disabled={disabled || !node || optionalAngle(panoZero) === null} onClick={splitPanorama}>自動拆解 8 個方向</button>
              <button className="soft-button" disabled={disabled} onClick={async () => { setBusy('正在擷取環景'); try { await makeDraft('panorama-frame', extractPanoramaView(panorama, panoYaw, panoPitch, 75), { yaw: panoYaw, pitch: panoPitch, fov: 75 }); } catch (e) { setNotice({ kind: 'error', text: (e as Error).message }); } finally { setBusy(''); } }}>只擷取目前方向（舊工具）</button></>}
              {!!panoBatch.length && <><p>③ 預覽 8 張水平參考照 · 已確認保存 {panoSaved.length}／8</p><div className="panorama-batch-grid">{panoBatch.map(item => <figure key={item.id}><img src={item.imageUrl} alt={`地圖方向 ${item.mapBearing} 度的環景參考照`} /><figcaption>地圖 {angleText(item.mapBearing)} {panoSaved.includes(item.id) ? '✓ 已保存' : '待保存'}</figcaption></figure>)}</div>
              <button className="primary-button" disabled={disabled || editorLocked || !canWrite || !online} onClick={savePanoramaBatch}>{panoSaved.length === 8 ? '重新核對後台保存結果' : panoSaved.length ? '重試保存剩餘照片' : '確認方向，保存 8 張到此節點'}</button>
              <button disabled={disabled || (panoSaved.length > 0 && panoSaved.length < 8)} onClick={() => { setPanoBatch([]); setPanoSaved([]); }}>結束此批／重新校正</button></>}
              <p className="helper">支援已拼接的 2:1 JPEG／PNG，最大 30 MB。自動拆解使用水平仰角 0°、視角 75°。只保存壓縮參考照及方向，不上傳 360 原檔；不覆蓋既有照片。待傳批次未永久保存，請勿重新整理或切換節點。</p>
            </div>}
            {draft ? <div className="photo-draft"><img src={draft.imageUrl} alt="待上傳的節點參考照片" /><div className="photo-meta"><span>{sourceText[draft.source]}</span><span>{draft.width} × {draft.height} · 約 {Math.ceil(draft.imageUrl.length * 0.75 / 1024)} KB</span></div><p className="draft-state">{draftMessage}</p><label>這張照片的拍攝朝向（地圖角度）<input aria-label="照片拍攝朝向" type="number" min="0" max="359.9" step="0.1" placeholder="尚未確認，先留白" value={draft.mapBearing ?? ''} disabled={disabled} onChange={(e) => setDraft({ ...draft, mapBearing: optionalAngle(e.target.value), headingSource: e.target.value === '' ? 'unconfirmed' : 'manual' })} /></label><div className="button-row compact"><button disabled={disabled} onClick={() => setDraft({ ...draft, mapBearing: bearing, headingSource: 'manual' })}>套用校正面板 {angleText(bearing)}</button><button disabled={disabled || sensorDerived === null} onClick={() => sensorDerived !== null && setDraft({ ...draft, mapBearing: sensorDerived, headingSource: 'sensor-map' })}>採用拍攝時羅盤</button></div><p className="helper">0° 指向地圖上方，90° 指向右方。羅盤須有已校準的樓層北向；匯入照片不會套用現在手機的方位。</p><label>現場備註<textarea aria-label="現場備註" maxLength={1000} placeholder="例如：站在電梯左側，面向服務台；下午逆光" value={draft.note || ''} disabled={disabled} onChange={(e) => setDraft({ ...draft, note: e.target.value })} /></label>{draft.quality?.warnings?.length > 0 && <div className="quality-warnings">{draft.quality.warnings.map((warning, i) => <p key={i}>△ {warning}</p>)}<small>影像品質提示僅供檢查，不是辨識成功率。</small></div>}<label className="check-label"><input type="checkbox" checked={promote} disabled={disabled} onChange={(e) => setPromote(e.target.checked)} /><span>也設為 V3 此節點的主要導引照片<small>會取代舊主圖；預設只新增 V4 觀測紀錄。</small></span></label><button className="primary-button full-width" disabled={writeDisabled} onClick={() => save('photo')}><CloudUpload size={18} />上傳到{storage === 'local' ? '本機' : ''}後台</button><button className="text-button" onClick={() => downloadJson(`ar-v4-draft-${draft.id}.json`, { scope, observation: draft })}><Download size={15} />匯出草稿備份</button></div> : <div className="empty-draft"><ImagePlus size={34} strokeWidth={1.3} /><b>此節點尚無待傳照片</b><p>請拍攝或匯入一張照片。原始檔不會自動上傳。</p></div>}
            <div className="helper-box"><b>現場拍攝小提醒</b><p>先停下來、鏡頭直立；避開可辨識的人臉及個資。建議同一節點分拍前、左、右方，逐張校正方向。</p><p>環景請先用 Insta360 工具匯出 2:1 JPG／PNG。此試作每張檔案上限 30 MB，每節點最多 24 筆觀測。</p></div>
          </div>}
          {tab === 'calibrate' && <div id="field-panel-calibrate" role="tabpanel" aria-labelledby="field-tab-calibrate" tabIndex={0} className="tool-content">
            <div className="panel-title"><span className="step-number">03</span><div><h2>節點方向校正</h2><p>延續 V3 工程版的角度微調</p></div></div>
            {calibrationReviewPanel}
            <div className="bearing-dial"><span className="dial-n">地圖上方 · 0°</span><span className="dial-e">90°</span><span className="dial-s">180°</span><span className="dial-w">270°</span><Navigation size={65} strokeWidth={1.3} style={{ transform: `rotate(${bearing - 45}deg)` }} /><strong>{angleText(bearing)}</strong></div>
            <label>參考朝向<input aria-label="節點參考朝向" type="range" min="0" max="359" value={bearing} onChange={(e) => setBearing(Number(e.target.value))} disabled={disabled} /></label><div className="angle-adjust"><button disabled={disabled} onClick={() => setBearing(normalizeBearing(bearing - 5))}>−5°</button><button disabled={disabled} onClick={() => setBearing(normalizeBearing(bearing - 1))}>−1°</button><input aria-label="節點角度數值" type="number" min="0" max="359.9" step="0.1" value={bearing} disabled={disabled} onChange={(e) => setBearing(optionalAngle(e.target.value) ?? 0)} /><button disabled={disabled} onClick={() => setBearing(normalizeBearing(bearing + 1))}>+1°</button><button disabled={disabled} onClick={() => setBearing(normalizeBearing(bearing + 5))}>+5°</button></div>
            <label>測試下一個相鄰節點<select aria-label="下一個節點" value={nextNode?.id || ''} disabled={disabled || !neighbors.length} onChange={(e) => { setNextNodeId(e.target.value); setLock(null); }}>{neighbors.length ? neighbors.map((n) => <option key={n.id} value={n.id}>{nodeLabel(n)}</option>) : <option value="">此節點尚未連接路線</option>}</select></label>
            <button className="soft-button full-width" disabled={disabled || targetBearing === null} onClick={() => targetBearing !== null && setBearing(targetBearing)}><Navigation size={16} />以相鄰路段方向作參考 {angleText(targetBearing)}</button>
            <p className="helper">選擇路段只提供地圖參考；請實際面向對應地標。手機朝向不是行走方向，這裡不會量測已走距離。</p>
            <button className="primary-button full-width" disabled={writeDisabled || calibrationReview || !node} onClick={() => save('calibration')}><CloudUpload size={17} />保存節點校正到後台</button>
            <button className="soft-button full-width" disabled={disabled || !node} onClick={() => { visualHeading.reset();setLock({ nodeId: node!.id, bearing, sensorHeading: staleSensor ? null : cameraSensor.heading, sensorKind: cameraSensor.kind, screenAngle: sensor.screenAngle, time: Date.now() }); selectTab('camera'); setNotice({ kind: 'info', text: '已手動確認目前朝向，僅在此工作階段生效；沒有感測資料時不會顯示動態轉向。' }); }}>我已面向這個方向 · 測試轉向</button>
            <details className="advanced"><summary><SlidersHorizontal size={15} />樓層方位進階設定</summary><label>地圖上方對應的羅盤方位<input aria-label="樓層地圖北向" type="number" min="0" max="359.9" step="0.1" placeholder="尚未校準" value={mapUp} disabled={disabled} onChange={(e) => setMapUp(e.target.value)} /></label><p className="helper">例如地圖上方正對東方，填 90°。需先對準已知方向，勿直接把手機讀值當地圖北向。</p><label className="check-label"><input type="checkbox" checked={saveMapUp} disabled={disabled} onChange={(e) => setSaveMapUp(e.target.checked)} /><span>儲存節點時，也更新此樓層北向<small>影響整層的羅盤換算，請確認後勾選。</small></span></label></details>
            <div className="helper-box"><b>三種資訊分開保存</b><p>照片：找出候選節點。<br />感測器：記錄手機方位來源與時間。<br />人工校正：確認照片／節點在地圖上的方向。</p><p>修改節點角度不會改寫歷史照片的拍攝方向。</p></div>
          </div>}
          {tab === 'records' && <div id="field-panel-records" role="tabpanel" aria-labelledby="field-tab-records" tabIndex={0} className="tool-content">
            <p><a href="./ar-v4-demo.html?mode=records" target="_blank" rel="noopener noreferrer">查看獨立模擬素材後台（唯讀，不屬於正式節點）</a></p>
            <div className="panel-title"><span className="step-number">04</span><div><h2>後台現場紀錄</h2><p>本樓層 {records.length} 筆 V4 觀測</p></div></div><p className="helper">{storage === 'local' ? '以下是本機後台持久保存的資料，不是 GitHub 雲端資料。' : '以下是目前讀取版本的後台資料。'}點選照片對應節點可繼續補拍。</p>
            <div className="button-row"><button className="soft-button" disabled={disabled || !project} onClick={() => downloadJson(`ar-v4-field-${projectId}.json`, { exportedAt: new Date().toISOString(), storage, revision, project })}><Download size={16} />匯出專案備份</button></div>
            <div className="records-list">{records.length ? records.slice().reverse().map(({ observation: o, label, nodeId: id }) => <article key={`${id}/${o.id}`} className="record-card"><button className="record-image" disabled={disabled} onClick={() => setNodeId(id)}><img src={o.imageUrl} alt={`${label} 的現場觀測照片`} /></button><div><b>{label}</b><span>{sourceText[o.source]} · {angleText(o.mapBearing)}</span><small>{readableDate(o.capturedAt)} · {o.headingSource === 'unconfirmed' ? '方向待確認' : o.headingSource === 'manual' ? '人工標記方向' : '羅盤換算方向'}</small>{o.note && <p>{o.note}</p>}</div></article>) : <div className="empty-draft"><Layers size={34} strokeWidth={1.3} /><b>尚無 V4 上傳紀錄</b><p>照片上傳成功後，會在這裡看到節點、朝向與現場備註。V3 既有參考照不列入新觀測。</p></div>}</div>
          </div>}
          {!node && !loading && <div className="notice error">此樓層沒有節點，請到「路網」建立並保存節點與路線。</div>}
        </section>
      </div>
      {busy && <div className="busy-indicator" role="status"><RefreshCw size={16} />{busy}…</div>}
      <footer className="field-footer"><span>V4 FIELD LAB · 現場採集與校正工具</span><span>相機辨識是節點候選，不是精確座標。請站定操作，留意周遭動線。</span></footer>
    </main>
    <nav className="bottom-nav" aria-label="現場工作台分頁"><div className="bottom-tabs" role="tablist" aria-label="現場工具">{FIELD_TABS.map(({ id, label, short, icon: Icon }, index) => <button key={id} id={`field-tab-${id}`} type="button" role="tab" aria-label={label} aria-selected={tab === id} aria-controls={`field-panel-${id}`} tabIndex={tab === id ? 0 : -1} onClick={() => selectTab(id)} onKeyDown={(event) => tabKeyDown(event, index)}><span className="tab-icon"><Icon size={21} strokeWidth={tab === id ? 2 : 1.6} />{((id === 'capture' && draft) || (id === 'graph' && editorStatus.dirty)) && <i className="draft-dot" aria-label="有待上傳草稿" />}</span><span>{short}</span></button>)}</div></nav>
    <input ref={photoInput} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={(e) => { importPhoto(e.target.files?.[0]); e.target.value = ''; }} />
    <input ref={panoramaInput} type="file" accept="image/jpeg,image/png" hidden onChange={(e) => { importPanorama(e.target.files?.[0]); e.target.value = ''; }} />
    <input ref={testInput} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={(e) => { testPhoto(e.target.files?.[0]); e.target.value = ''; }} />
  </div>;

  const destination = storage === 'local' ? '本機後台' : '雲端後台';
  const ready = !disabled && workLoadedKey === scope && draftLoadedKey === scope;
  const currentRecords = records.filter(r=>recordScope==='floor'||r.nodeId===nodeId);
  const recordGroups = groupObservations(currentRecords);
  const detailGroup = recordGroups.find(g=>g[0].observation.id===recordDetail);
  const beginCamera = (task:typeof cameraTask) => {stopCamera();setCameraTask(task);setNavigationOpen(task==='navigation');goStep(1,'camera');selectTab('camera');};
  const next = () => {
    if(tab==='location'){ if(step<2)goStep(step+1);else {goStep(0,'capture');selectTab('capture');} }
    if(tab==='capture'){
      if(step===1){if(captureKind==='panorama'){if(panoBatch.length)goStep(2);else void splitPanorama();}else goStep(2);}
      else if(step===2){if(captureKind==='panorama')void savePanoramaBatch();else void save('photo');}
      else if(step===3){goStep(0);}
    }
    if(tab==='calibrate'){if(step<2)goStep(step+1);else if(step===2)void save('calibration');else {goStep(0);selectTab('camera');}}
    if(tab==='camera'){if(step===1)goStep(2);else {goStep(1);setCandidate(null);}}
  };
  const nextLabel = tab==='location' ? step===2?'位置確認，開始採集':'下一步'
    : tab==='capture' ? step===1?(captureKind==='panorama'&&!panoBatch.length?'產生 8 個方向':'下一步'):step===2?`保存到${destination}`:'再採集一組'
    : tab==='calibrate' ? step===2?`保存到${destination}`:step===3?'前往相機測試':'下一步'
    : tab==='camera' ? step===1?'查看結果':'重新測試':'下一步';
  const nextDisabled = !ready || (tab==='location'&&!node) || (tab==='capture'&&(step===1?(captureKind==='panorama'?optionalAngle(panoZero)===null:!draft):step===2?(writeDisabled||(captureKind==='panorama'?!panoBatch.length:!draft)):false))
    || (tab==='calibrate' && (step===2&&(writeDisabled||calibrationReview||(saveMapUp&&optionalAngle(mapUp)===null)))) || (tab==='camera'&&(detecting||!(candidate||lockFresh)));
  const taskStart = tab==='capture'&&step===0 || tab==='camera'&&step===0;
  const footer = !taskStart && tab!=='graph'&&tab!=='records';
  const fullTools = () => {if(editorLocked){setNotice({kind:'error',text:'請先保存路網草稿，再切換工具介面。'});return;} stopCamera();setExpertMode(value=>!value);};
  if(expertMode)return <><div className="classic-return"><button onClick={fullTools} disabled={editorLocked}>返回精靈介面</button><span>完整工具 · 所有原有功能</span></div>{classicView}</>;
  return <div className={`field-app flow-app active-${tab} ${footer?'has-flow-footer':''}`}>
    <header className="flow-header"><button className="flow-brand" onClick={()=>setMenuOpen(true)} aria-label="功能選單"><Navigation size={22}/><span>室內導引</span></button>
      <span className={`flow-storage ${!online||!canWrite?'warning':''}`}>{!online?'離線':storage==='local'?'本機':storage==='readonly'?'唯讀':'雲端'}{canWrite?'':' · 未登入'}</span>
      <Help title="工作台"><p>V4 現場採集與校正。資料版本：{revision||'無'}。{storage==='local'?'本機資料不會自動同步 GitHub。':'保存將透過有權限的後台進行。'}</p><p>{workMessage}</p><p>民眾端使用預先建立的特徵包，不下载參考照片。雲端保存後，需等待 Azure 發布完成才會更新民眾辨識資料；本機則由本機後台建立。工作台照片測試可先確認保存內容。</p><div className="flow-stack"><button disabled={contextLocked||!online||!projectId} onClick={()=>void refreshBackend()}>重新讀取後台</button><button disabled={editorLocked} onClick={fullTools}>完整工具（進階功能）</button><a href="./ar-v3.html" target="_blank" rel="noreferrer">開啟 V3</a><a href="./admin-ar-v4.html" target="_blank" rel="noreferrer">現場資料後台</a><a href="./admin.html" target="_blank" rel="noreferrer">登入後台</a><a href="./ar-v4-demo.html" target="_blank" rel="noreferrer">螢幕辨識 Demo · 模擬素材</a></div></Help>
    </header>
    <main className="flow-main">
      <div className="flow-heading"><div><small>{FLOW_STEPS[tab].length>1?`${step+1} / ${FLOW_STEPS[tab].length} · ${activeTab.label}`:activeTab.label}</small><h1 id="flow-title" tabIndex={-1}>{FLOW_STEPS[tab][step]}</h1></div><Help title={activeTab.label}><p>{activeTab.hint}</p><p>地圖上方是 0°、右方是 90°，不是手機的地磁北方。返回會保留作業草稿，只有按保存才會寫入後台。</p><p>現場請站定操作，避免拍攝個資。節點辨識不是公尺級定位或全程移動追蹤。</p><button disabled={editorLocked} onClick={fullTools}>開啟此功能的完整工具</button></Help></div>
      {tab!=='graph'&&<button className="flow-context" onClick={()=>{goStep(0,'location');selectTab('location');}} disabled={disabled||workPending||workError}><MapPin size={17}/><span><small>{project?.project?.name || (loading ? '正在載入場域' : '請選擇場域')}</small><b>{floor?.name||'選樓層'} · {node?nodeLabel(node):'選節點'}</b></span><ChevronRight size={16}/></button>}
      {notice&&<div className={`notice ${notice.kind}`} role={notice.kind==='error'?'alert':'status'}><span>{notice.text}</span><button aria-label="關閉提示" onClick={()=>setNotice(null)}>×</button></div>}
      {workError&&<div className="notice error" role="alert">{workMessage}<button onClick={()=>downloadJson('v4-work-draft.json',{scope,bearing,mapUp,panoBatch,panoSaved,observation:draft})}>匯出草稿</button></div>}
      {photoDraftError&&<div className="notice error" role="alert">{draftMessage}<button onClick={()=>downloadJson('v4-photo-draft.json',{scope,observation:draft})}>匯出待傳照片</button></div>}
      {editorLocked&&tab!=='graph'&&<div className="notice" role="status">路網有未保存變更，請先完成保存。<button onClick={()=>selectTab('graph')}>回路網</button></div>}
      {loading&&<p role="status">正在讀取資料…</p>}
      <fieldset disabled={disabled} className="flow-fieldset">
      <section id="field-panel-location" role="tabpanel" aria-label="作業位置" hidden={tab!=='location'}>
        <Step visible={step===0}>{projectPicker}<label>建物／樓層<select aria-label="樓層" disabled={contextLocked} value={floor?`${floor.buildingId}/${floor.id}`:''} onChange={e=>setFloorKey(e.target.value)}>{floors.map(f=><option key={`${f.buildingId}/${f.id}`} value={`${f.buildingId}/${f.id}`}>{f.buildingName} · {f.name}</option>)}</select></label><button onClick={()=>selectTab('graph')}>建立／編輯場域與路網</button></Step>
        <Step visible={step===1}><label>目前節點<select aria-label="目前節點" value={nodeId} disabled={disabled||workPending||workError} onChange={e=>setNodeId(e.target.value)}>{floor?.nodes.map(n=><option key={n.id} value={n.id}>{nodeLabel(n)}</option>)}</select></label><div className="map-heading"><span>點選作業位置</span><button aria-label="切換地圖放大" onClick={()=>setMapZoom(mapZoom===1?1.7:1)}><Expand size={19}/></button></div><div className="map-scroll"><div className="floor-map" style={{width:`${mapZoom*100}%`}}>{floor?.imageUrl?<img src={floor.imageUrl} alt={`${floor.name} 現有樓層平面圖`}/>:<p>此樓層尚無底圖</p>}<svg className="map-edges" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">{floor?.edges?.map((e:any,i:number)=>{const a=floor.nodes.find(n=>n.id===e.start),b=floor.nodes.find(n=>n.id===e.end);return a&&b?<line key={i} x1={a.x*1000} y1={a.y*1000} x2={b.x*1000} y2={b.y*1000}/>:null;})}</svg>{floor?.nodes.map((n,i)=><button className={`map-node ${n.id===nodeId?'selected':''}`} key={n.id} disabled={disabled||workPending||workError} style={{left:`${n.x*100}%`,top:`${n.y*100}%`}} aria-label={`選擇節點 ${nodeLabel(n)}`} onClick={()=>setNodeId(n.id)}>{i+1}</button>)}</div></div></Step>
        <Step visible={step===2}><div className="flow-summary"><MapPin size={32}/><h2>{node?nodeLabel(node):'請選節點'}</h2><p>{project?.project?.name} · {floor?.name}</p><small>本樓層已有照片：{coveredNodes} / {floor?.nodes.length||0} 個節點</small></div><button onClick={()=>selectTab('graph')}>編輯地圖、路徑與 AR 點位</button></Step>
      </section>
      <section id="field-panel-graph" role="tabpanel" aria-label="路網編輯" hidden={tab!=='graph'}><div className="flow-inline"><span>編輯、測試與保存均在下方完成</span><Help title="路網資料安全"><p>路網草稿跨頁籤保留，按保存後才更新後台。刪除節點會連帶移除其照片，必須確認。跨樓層連通、尺規、底圖、匯出及復原都保留於工具選單。</p></Help></div>{!canWrite&&<p>需要作業權限，請從右上角登入後台。</p>}{editorSrc&&<iframe ref={editorFrame} src={editorSrc} title="地圖與路網編輯器" className="graph-editor-frame"/>}</section>
      <section id="field-panel-camera" role="tabpanel" aria-label="相機測試" hidden={tab!=='camera'}>
        <Step visible={step===0}><div className="flow-choices"><button onClick={()=>beginCamera('recognition')}><ScanLine/>照片定位測試</button><button onClick={()=>beginCamera('direction')}><Compass/>方向提示測試</button><button disabled={editorLocked} onClick={()=>beginCamera('navigation')}><Navigation/>導航流程</button><button onClick={()=>beginCamera('photo')}><Camera/>拍攝參考照片</button></div><a className="flow-demo" href="./ar-v4-demo.html?mode=scan" target="_blank" rel="noreferrer">示範素材 · 螢幕辨識 Demo</a></Step>
        <div hidden={step===0||cameraTask==='navigation'}><div className="flow-camera"><video ref={video} autoPlay playsInline muted/><span>{cameraState==='ready'?'相機已啟用':'相機未啟用'}</span></div><div className="flow-inline"><button disabled={disabled||cameraState==='requesting'} onClick={startCamera}>{cameraState==='ready'?'重新啟用相機':'開啟相機'}</button><button disabled={cameraState!=='ready'} onClick={stopCamera}>關閉相機</button></div>
          {cameraTask==='photo'&&<button className="primary-button" disabled={!ready||cameraState!=='ready'||!node} onClick={capture}>拍攝此畫面</button>}
          {(cameraTask==='recognition'||cameraTask==='direction')&&<><div className="flow-inline"><button className="primary-button" disabled={disabled||!testRefs.length||cameraState!=='ready'} onClick={()=>detecting?stopDetection():runRecognition()}>{detecting?'停止辨識':'開始相機辨識'}</button><button disabled={disabled||detecting||!testRefs.length} onClick={()=>testInput.current?.click()}>匯入測試照</button></div>{recognitionTools}<p className="recognition-status" role="status">{recognitionMessage}</p><RecognitionInspector diagnostic={recognitionDiagnostic} preparation={recognitionPreparation} frame={recognitionFrame} references={testRefs} onExport={()=>recognitionCapture.download()}/>{!testRefs.length&&<button onClick={()=>selectTab('capture')}>先建立參考照片</button>}{candidate&&<div className="flow-result"><img src={candidate.reference.imageUrl} alt="匹配的參考照片"/><h2>候選：{candidate.reference.label}</h2><p>方向 {angleText(candidate.reference.bearing)} · 仍需人工確認</p><button disabled={disabled} onClick={()=>{confirmCandidate();goStep(2,'camera');}}>我確認在此節點，且面向照片同方向</button><Help title="辨識結果"><p>幾何內點 {candidate.inliers}／匹配 {candidate.matches}，不是定位正確率。本輪使用 {testRefs.length} 張參考照，優先目前節點。</p></Help></div>}</>}
          {cameraTask==='direction'&&<div className="flow-summary"><ArrowUp size={34} style={{transform:`rotate(${turnAngle??0}deg)`}}/><b>{turnAngle===null?'先確認目前面向':Math.abs(turnAngle)<18?'面向正確':`向${turnAngle>0?'右':'左'}轉 ${Math.round(Math.abs(turnAngle))}°`}</b><p>{lockFresh?'人工校正有效 · 20 秒':visualHeading.view.bearing!==null?'視覺方向有效（近似）':'校正已過期／未確認'} · {staleSensor?'感測待啟用':angleText(sensor.heading)}</p><button onClick={requestSensors}>啟用方位感測</button><button onClick={()=>selectTab('calibrate')}>選地標並校正</button></div>}
          <Help title="相機與感測"><p>{cameraMessage}。{sensorMessage}。只辨識候選節點，不追蹤步行距離；切換頁籤會暫停鏡頭。感測來源：{sensor.kind}；精度欄位 {sensor.accuracy??'未知'}。</p><button onClick={requestSensors}>重新啟用方位感測</button></Help>
        </div>
        {navigationOpen&&tab==='camera'&&step>0&&!editorLocked&&<div><p className="flow-safety">目前節點模擬 Kiosk 起點 · V4 連續辨識，抵達由使用者確認</p><iframe src={`./ar-v4-navigation.html?projectId=${encodeURIComponent(projectId)}&origin=${encodeURIComponent(nodeId)}`} title="AR 導航流程測試" className="navigation-test-frame" allow="camera; accelerometer; gyroscope; magnetometer; fullscreen" allowFullScreen/></div>}
      </section>
      <section id="field-panel-capture" role="tabpanel" aria-label="照片採集" hidden={tab!=='capture'}>
        <Step visible={step===0}><div className="flow-choices"><button disabled={!ready||!node} onClick={()=>beginCamera('photo')}><Camera/>現場拍攝</button><button disabled={!ready||!node} onClick={()=>photoInput.current?.click()}><ImagePlus/>匯入照片</button><button disabled={!ready||!node} onClick={()=>panoramaInput.current?.click()}><Expand/>匯入 360 環景</button></div>{(draft||panoBatch.length>0||panorama)&&<button onClick={()=>{if(panoBatch.length||panorama)setCaptureKind('panorama');else setCaptureKind('photo');goStep(1);}}>繼續此節點的草稿</button>}<Help title="照片來源"><p>JPEG／PNG 環景必須先拼接成 2:1，最多 30 MB；一般照片另支援 WebP。原檔只留在裝置，不上傳到後台。每節點最多 24 張觀測照片。</p></Help></Step>
        <Step visible={step===1}>
          {captureKind==='panorama'?<><canvas ref={panoCanvas} className="flow-preview" aria-label="環景透視預覽"/><label>轉向參考地標<input aria-label="環景水平取景" type="range" min="-180" max="180" value={panoYaw} disabled={disabled||!!panoBatch.length} onChange={e=>setPanoYaw(Number(e.target.value))}/></label><button disabled={disabled||!!panoBatch.length} onClick={()=>setPanoZero(String(normalizeBearing(-panoYaw)))}>目前畫面朝向地圖上方（0°）</button><label>環景中央地圖方向<input aria-label="環景中央地圖方向" type="number" placeholder="尚未校正" min="0" max="359.9" value={panoZero} disabled={disabled||!!panoBatch.length} onChange={e=>setPanoZero(e.target.value)}/></label><Help title="環景校正"><p>先把畫面轉到地圖上方的地標，再確認。0° 不是地磁北方。自動產生八張水平、視角 75° 的照片。</p><p>單張取景、仰俯角等仍可在完整工具操作。</p></Help>{panoBatch.length>0&&<button disabled={disabled||panoSaved.length>0} onClick={()=>setPanoBatch([])}>重新校正這批方向</button>}</>
          :draft?<><img className="flow-preview" src={draft.imageUrl} alt="待上傳的節點參考照片"/><label>照片拍攝朝向<input aria-label="照片拍攝朝向" type="number" placeholder="尚未確認，可留白" value={draft.mapBearing??''} onChange={e=>setDraft({...draft,mapBearing:optionalAngle(e.target.value),headingSource:optionalAngle(e.target.value)===null?'unconfirmed':'manual'})}/></label><div className="flow-inline"><button onClick={()=>setDraft({...draft,mapBearing:bearing,headingSource:'manual'})}>套用節點方向</button><button disabled={sensorDerived===null} onClick={()=>sensorDerived!==null&&setDraft({...draft,mapBearing:sensorDerived,headingSource:'sensor-map'})}>採用拍攝時羅盤</button></div><details><summary>備註與進階選項</summary><label>現場備註<textarea aria-label="現場備註" value={draft.note||''} maxLength={1000} onChange={e=>setDraft({...draft,note:e.target.value})}/></label><label className="check-label"><input type="checkbox" checked={promote} onChange={e=>setPromote(e.target.checked)}/>也取代 V3 此節點主要導引照片</label><button onClick={()=>downloadJson(`ar-v4-draft-${draft.id}.json`,{scope,observation:draft})}>匯出草稿備份</button></details>{draft.quality?.warnings?.map((warning,i)=><p key={i} className="flow-safety">△ {warning}</p>)}</>:<button onClick={()=>goStep(0)}>返回選擇來源</button>}
        </Step>
        <Step visible={step===2}><div className="flow-summary"><h2>{node?nodeLabel(node):'未選節點'}</h2><p>{captureKind==='panorama'?`${panoBatch.length} 張環景參考照`:'1 張參考照片'} → {destination}</p><small>{captureKind==='panorama'?`已確認保存 ${panoSaved.length} / ${panoBatch.length}`:draft?.mapBearing===null?'方向待確認':`方向 ${angleText(draft?.mapBearing??null)}`}</small></div>{captureKind==='panorama'?<div className="panorama-batch-grid">{panoBatch.map(o=><figure key={o.id}><img src={o.imageUrl} alt={`環景方向 ${o.mapBearing} 度`}/><figcaption>{angleText(o.mapBearing)} {panoSaved.includes(o.id)?'✓ 已保存':''}</figcaption></figure>)}</div>:draft&&<img className="flow-preview" src={draft.imageUrl} alt="即將保存的照片"/>}{promote&&captureKind==='photo'&&<p className="flow-safety">此操作會取代 V3 主圖；保存時再次確認。</p>}</Step>
        <Step visible={step===3}><div className="flow-summary"><Check size={36}/><h2>後台已確認保存</h2><p>{destination} · {node?nodeLabel(node):''}</p></div><div className="flow-choices"><button onClick={()=>selectTab('records')}>查看紀錄</button><button onClick={()=>beginCamera('recognition')}>測試辨識</button></div></Step>
      </section>
      <section id="field-panel-calibrate" role="tabpanel" aria-label="方向校正" hidden={tab!=='calibrate'}>
        <Step visible={step===0}><label>參考相鄰地標<select aria-label="下一個節點" value={nextNode?.id||''} onChange={e=>{setNextNodeId(e.target.value);setLock(null);}}>{neighbors.length?neighbors.map(n=><option key={n.id} value={n.id}>{nodeLabel(n)}</option>):<option value="">沒有相鄰路段，請使用人工方向</option>}</select></label><button disabled={targetBearing===null} onClick={()=>targetBearing!==null&&setBearing(targetBearing)}>採用此路段方向 {angleText(targetBearing)}</button>{!neighbors.length&&<button onClick={()=>selectTab('graph')}>到路網連接節點</button>}<p>也可按下一步，直接設定人工方向。</p></Step>
        <Step visible={step===1}><div className="flow-dial"><Navigation size={65} style={{transform:`rotate(${bearing-45}deg)`}}/><strong>{angleText(bearing)}</strong><small>地圖上方 0°</small></div><label>參考朝向<input aria-label="節點參考朝向" type="range" min="0" max="359" value={bearing} onChange={e=>setBearing(Number(e.target.value))}/></label><details><summary>精確微調與整層北向</summary><div className="angle-adjust">{[-5,-1].map(n=><button key={n} onClick={()=>setBearing(normalizeBearing(bearing+n))}>{n}°</button>)}<input aria-label="節點角度數值" type="number" value={bearing} onChange={e=>setBearing(optionalAngle(e.target.value)??0)}/>{[1,5].map(n=><button key={n} onClick={()=>setBearing(normalizeBearing(bearing+n))}>+{n}°</button>)}</div><label>樓層地圖北向<input aria-label="樓層地圖北向" type="number" value={mapUp} onChange={e=>setMapUp(e.target.value)}/></label><label className="check-label"><input type="checkbox" checked={saveMapUp} onChange={e=>setSaveMapUp(e.target.checked)}/>同時更新整層北向（影響本樓層羅盤換算）</label></details><button onClick={()=>{if(!node)return;visualHeading.reset();setLock({nodeId:node.id,bearing,sensorHeading:staleSensor?null:cameraSensor.heading,sensorKind:cameraSensor.kind,screenAngle:sensor.screenAngle,time:Date.now()});setCameraTask('direction');goStep(1,'camera');selectTab('camera');}}>我已面向這個方向 · 測試轉向</button></Step>
        <Step visible={step===2}><div className="flow-summary"><h2>{node?nodeLabel(node):''}</h2><p>節點方向 {angleText(bearing)}</p><p>保存到{destination}</p>{saveMapUp&&<p className="flow-safety">也會更新整層北向為 {angleText(optionalAngle(mapUp))}</p>}</div>{calibrationReviewPanel}</Step>
        <Step visible={step===3}><div className="flow-summary"><Check size={36}/><h2>校正已保存</h2><p>歷史照片方向未變更</p></div></Step>
      </section>
      <section id="field-panel-records" role="tabpanel" aria-label="後台紀錄" hidden={tab!=='records'}><div className="flow-inline"><label>查閱範圍<select aria-label="紀錄範圍" value={recordScope} onChange={e=>setRecordScope(e.target.value)}><option value="node">目前節點</option><option value="floor">本樓層</option></select></label><button disabled={!project} onClick={()=>downloadJson(`ar-v4-field-${projectId}.json`,{exportedAt:new Date().toISOString(),storage,revision,project})}><Download size={18}/>匯出專案備份</button></div><p>{currentRecords.length} 張照片 · {destination}</p><div className="flow-records">{recordGroups.map(g=><button className="flow-record" key={`${g[0].nodeId}/${g[0].observation.id}`} onClick={()=>setRecordDetail(g[0].observation.id)}><img src={g[0].observation.imageUrl} alt={`${g[0].label} 的照片批次`}/><span><b>{g[0].label}</b><small>{g.length>1?`環景批次 · ${g.length} 張`:sourceText[g[0].observation.source]}</small><small>{g.every(r=>r.observation.mapBearing!==null)?'方向已設定':'方向待確認'}</small></span><ChevronRight size={20}/></button>)}</div>{!currentRecords.length&&<div className="flow-summary"><p>尚無觀測紀錄</p><button onClick={()=>selectTab('capture')}>建立參考照片</button></div>}<Help title="紀錄與批次"><p>只有具相同批次編號的環景會合併顯示；舊資料逐張保留。已設定方向不等於已通過辨識驗收。</p><a href="./ar-v4-demo.html?mode=records" target="_blank" rel="noreferrer">獨立模擬素材後台</a></Help></section>
      </fieldset>
      {!node&&!loading&&tab!=='graph'&&<p className="notice error">此樓層沒有節點。<button onClick={()=>selectTab('graph')}>到路網建立</button></p>}
      {busy&&<div className="flow-busy" role="status">{busy}…</div>}
      {scope&&<p className="flow-draft-status" role="status">{workPending?'正在暫存…':workMessage}{draft?' · 有待傳照片':''}</p>}
    </main>
    {footer&&<div className="flow-footer"><button onClick={()=>step===0?setMenuOpen(true):goStep(step-1)} disabled={disabled}>{step===0?'功能':'上一步'}</button>{!(tab==='camera'&&(cameraTask==='navigation'||cameraTask==='photo'))&&<button className="primary-button" disabled={nextDisabled} onClick={next}>{nextLabel}<ChevronRight size={18}/></button>}</div>}
    <nav className="flow-nav" aria-label="現場工作台分頁"><div role="tablist" aria-label="現場工具">{FIELD_TABS.map(({id,label,short,icon:Icon},index)=><button role="tab" key={id} id={`field-tab-${id}`} aria-label={label} aria-selected={tab===id} aria-controls={`field-panel-${id}`} tabIndex={tab===id?0:-1} onClick={()=>selectTab(id)} onKeyDown={e=>tabKeyDown(e,index)}><Icon size={21}/><span>{short}</span></button>)}</div></nav>
    {menuOpen&&<Modal title="六大功能" close={()=>setMenuOpen(false)}><div className="flow-choices">{FIELD_TABS.map(({id,label,icon:Icon})=><button key={id} onClick={()=>selectTab(id)}><Icon/>{label}</button>)}</div><button disabled={editorLocked} onClick={()=>{setMenuOpen(false);fullTools();}}>完整工具（進階功能）</button></Modal>}
    {detailGroup&&<Modal title={`${detailGroup[0].label} · ${detailGroup.length} 張`} close={()=>setRecordDetail(null)}><div className="panorama-batch-grid">{detailGroup.map(({observation:o})=><figure key={o.id}><img src={o.imageUrl} alt={`參考朝向 ${angleText(o.mapBearing)}`}/><figcaption>{angleText(o.mapBearing)} · {readableDate(o.capturedAt)}</figcaption><p>{o.note}</p></figure>)}</div><button disabled={workPending||workError} onClick={()=>{setNodeId(detailGroup[0].nodeId);setRecordDetail(null);goStep(0,'capture');selectTab('capture');}}>到此節點補拍</button><button onClick={()=>downloadJson('v4-observations.json',{projectId,floorId:floor?.id,nodeId:detailGroup[0].nodeId,observations:detailGroup.map(r=>r.observation)})}>匯出此組紀錄</button></Modal>}
    <input ref={photoInput} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={e=>{importPhoto(e.target.files?.[0]);e.target.value='';}}/>
    <input ref={panoramaInput} type="file" accept="image/jpeg,image/png" hidden onChange={e=>{importPanorama(e.target.files?.[0]);e.target.value='';}}/>
    <input ref={testInput} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={e=>{testPhoto(e.target.files?.[0]);e.target.value='';}}/>
  </div>;
}
