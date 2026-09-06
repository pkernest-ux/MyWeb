import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { extractPanoramaView, prepareImage } from './ar-v4-field-core';
import { OrbImageTracker } from './ar-v3-image-recognition';
import './ar-v4-demo.css';

type Demo = {
  id: string; name: string; simulation: boolean; readonly: boolean; storage: string;
  node: { id: string; name: string; x: number; y: number };
  panorama: { url: string; centerMapBearing: number; referenceYawDegrees: number[]; pitch: number; fov: number };
  route: Array<{ id: string; name: string; x: number; y: number }>;
  limitations: string[];
};
type Reference = { id: string; imageUrl: string; bearing: number };
const normalize = (angle: number) => ((angle % 360) + 360) % 360;

function DemoApp() {
  const initial = new URLSearchParams(location.search).get('mode');
  const [mode, setMode] = useState(initial === 'scan' || initial === 'records' ? initial : 'display');
  const [data, setData] = useState<Demo | null>(null);
  const [panorama, setPanorama] = useState<HTMLImageElement | null>(null);
  const [yaw, setYaw] = useState(0);
  const [status, setStatus] = useState('正在讀取後台模擬資料…');
  const [running, setRunning] = useState(false);
  const [candidate, setCandidate] = useState<{ bearing: number; inliers: number } | null>(null);
  const [step, setStep] = useState(-1);
  const [testPhoto, setTestPhoto] = useState('');
  const canvas = useRef<HTMLCanvasElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const display = useRef<HTMLDivElement>(null);
  const file = useRef<HTMLInputElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const tracker = useRef<OrbImageTracker | null>(null);
  const generation = useRef(0);
  const references = useRef<Reference[]>([]);

  function release() {
    generation.current++;
    tracker.current?.dispose(); tracker.current = null;
    stream.current?.getTracks().forEach(track => track.stop()); stream.current = null;
    if (video.current) video.current.srcObject = null;
    setRunning(false);
  }
  function switchMode(next: string) {
    release(); setCandidate(null); setStep(-1); setMode(next);
    history.replaceState(null, '', `?mode=${next}`);
  }
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const response = await fetch('./api/ar-demo-library', { cache: 'no-store' });
      if (!response.ok) throw new Error('模擬後台尚未部署或暫時無法讀取。');
      const value: Demo = await response.json();
      if (value.id !== 'demo-library-screen-v1' || value.simulation !== true || value.readonly !== true || !Array.isArray(value.panorama?.referenceYawDegrees)) throw new Error('後台不是預期的獨立模擬資料，停止載入。');
      const asset = new URL(value.panorama.url, location.href);
      if (asset.origin !== location.origin || !asset.pathname.startsWith('/assets/ar-v4/demo-library/')) throw new Error('模擬素材來源不正確。');
      const image = new Image();
      await new Promise<void>((resolve, reject) => { image.onload = () => resolve(); image.onerror = () => reject(new Error('環景素材載入失敗')); image.src = asset.href; });
      if (cancelled) return;
      setData(value); setPanorama(image); setStatus('後台模擬資料已載入。先在展示螢幕選好方向，再用手机翻拍。');
    })().catch(error => { if (!cancelled) setStatus(error.message); });
    return () => { cancelled = true; release(); };
  }, []);
  useEffect(() => {
    const pause = () => { if (document.hidden) { release(); setStatus('已暫停相機；回到頁面後請重新開始。'); } };
    document.addEventListener('visibilitychange', pause);
    window.addEventListener('pagehide', release);
    return () => { document.removeEventListener('visibilitychange', pause); window.removeEventListener('pagehide', release); };
  }, []);
  useEffect(() => {
    if (!panorama || !canvas.current || !data || mode !== 'display') return;
    const timer = window.setTimeout(() => {
      const view = extractPanoramaView(panorama, yaw, data.panorama.pitch, data.panorama.fov);
      const target = canvas.current;
      if (!target) return;
      target.width = view.width; target.height = view.height;
      target.getContext('2d')?.drawImage(view, 0, 0);
    }, 80);
    return () => clearTimeout(timer);
  }, [panorama, data, yaw, mode]);

  async function makeReferences(run: number) {
    if (!panorama || !data) throw new Error('環景還沒載入');
    if (references.current.length) return references.current;
    const result: Reference[] = [];
    for (const angle of data.panorama.referenceYawDegrees) {
      if (run !== generation.current) throw new Error('已停止');
      setStatus(`正在將環景轉成參考視角 ${result.length + 1}／${data.panorama.referenceYawDegrees.length}…`);
      await new Promise(resolve => setTimeout(resolve, 0));
      const frame = extractPanoramaView(panorama, angle, data.panorama.pitch, data.panorama.fov);
      result.push({ id: `demo-view-${angle}`, imageUrl: frame.toDataURL('image/jpeg', .86), bearing: normalize(data.panorama.centerMapBearing + angle) });
    }
    references.current = result;
    return result;
  }
  async function recognize(source?: HTMLCanvasElement) {
    if (!data || !panorama) return;
    release(); const run = generation.current;
    setCandidate(null); setStep(-1); setRunning(true);
    if (!source) setTestPhoto('');
    try {
      if (!source) {
        if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) throw new Error('手機相機需要 HTTPS，請使用 Azure 測試連結；也可改用「匯入翻拍照片」。');
        const media = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
        if (run !== generation.current || document.hidden) { media.getTracks().forEach(track => track.stop()); return; }
        stream.current = media;
        if (!video.current) throw new Error('相機預覽尚未就緒');
        video.current.srcObject = media;
        await video.current.play();
      }
      const refs = await makeReferences(run);
      if (run !== generation.current) return;
      const instance = new OrbImageTracker({ fullScene: true }); tracker.current = instance;
      await instance.prepareMany(refs);
      if (run !== generation.current) return;
      setStatus('請對準另一個螢幕的場景，避開邊框與反光，停穩約一秒。');
      let previous = '', confirmations = 0;
      const started = Date.now();
      do {
        if (run !== generation.current) return;
        const input = source || video.current;
        const width = source?.width || video.current?.videoWidth || 0;
        const height = source?.height || video.current?.videoHeight || 0;
        if (!input || !width || !height) throw new Error('相機尚未提供畫面，請再試一次');
        const frame = document.createElement('canvas'); frame.width = 420; frame.height = Math.round(420 * height / width);
        frame.getContext('2d')!.drawImage(input, 0, 0, frame.width, frame.height);
        const match = await instance.detect(frame);
        if (run !== generation.current) return;
        const reference = refs.find(item => item.id === match?.targetId);
        if (reference && match && match.inliers >= 12) {
          confirmations = previous === reference.id ? confirmations + 1 : 1; previous = reference.id;
          if (source || confirmations >= 3) {
            setCandidate({ bearing: reference.bearing, inliers: match.inliers });
            setStatus(`辨識到模擬接待區的參考視角。${source ? '單張翻拍' : '連續三幀'}匹配；仍需人工確認。`);
            return;
          }
          setStatus(`正在確認同一個視角 ${confirmations}／3…`);
        } else { previous = ''; confirmations = 0; setStatus('尚未匹配。請讓場景占畫面大部分，縮小傾斜角度，避開螢幕反光。'); }
        if (source) break;
        await new Promise(resolve => setTimeout(resolve, 200));
      } while (Date.now() - started < 25000);
      setStatus('本次未辨識成功。可改選展示的預設方向、靠近螢幕，或匯入一張翻拍照片重試。');
    } catch (error) { if (run === generation.current) setStatus((error as Error).message); }
    finally { if (run === generation.current) release(); }
  }
  async function importPhoto(selected?: File) {
    if (!selected) return;
    release(); const run = generation.current;
    setCandidate(null); setStep(-1); setRunning(true); setStatus('正在讀取翻拍照片，照片只在此裝置處理…');
    try {
      const image = await prepareImage(selected);
      if (run !== generation.current) return;
      setTestPhoto(image.canvas.toDataURL('image/jpeg', .75));
      await recognize(image.canvas);
    } catch (error) { if (run === generation.current) { setStatus((error as Error).message); setRunning(false); } }
  }

  return <main className="demo-app">
    <header><div><small>V4 SCREEN LAB · 獨立模擬資料</small><h1>把螢幕變成辨識場景</h1></div><a href="./ar-v4-field.html">回 V4 工作台</a></header>
    <p className="demo-warning">AI 生成環景 · 不是實際建築。僅驗證螢幕翻拍流程，不代表現場定位精度。</p>
    <nav aria-label="Demo 模式">{[['display', '① 螢幕展示'], ['scan', '② 手機辨識'], ['records', '後台素材']].map(([id, label]) => <button key={id} aria-pressed={mode === id} onClick={() => switchMode(id)}>{label}</button>)}</nav>
    <p className="demo-status" role="status">{status}</p>
    {mode === 'display' && <section className="demo-panel">
      <div className="demo-section-heading"><div><h2>展示給手機拍攝</h2><p>同一模擬節點，切换不同方向。先用正前方測試，再試其他預設方向。</p></div><button disabled={!panorama} onClick={() => display.current?.requestFullscreen?.().catch(() => setStatus('此瀏覽器不支援全螢幕，仍可直接翻拍。'))}>全螢幕</button></div>
      <div className="demo-display" ref={display}><canvas ref={canvas} aria-label="模擬圖書館透視場景" /><span>模擬素材 · 非現場</span></div>
      <label>觀看方向 {normalize(yaw)}°（虛構地圖軸）<input type="range" min="0" max="359" value={yaw} onChange={event => setYaw(Number(event.target.value))} disabled={!panorama} /></label>
      <div className="demo-directions">{data?.panorama.referenceYawDegrees.map(angle => <button key={angle} aria-pressed={yaw === angle} onClick={() => setYaw(angle)}>{angle}°</button>)}</div>
      <p>另一個裝置開啟同一網址，點「手機辨識」。建議螢幕亮度適中、關閉自動轉場，避免反光；不需要對 QR 圖案辨識。</p>
      <a className="demo-action" href="?mode=scan">在本裝置切到手機辨識</a>
    </section>}
    {mode === 'scan' && <section className="demo-panel">
      <h2>對著展示螢幕辨識</h2><p>參考素材從模擬後台讀取，手機照片與相機畫面不會上傳。先停下來操作，勿邊走邊測。</p>
      <div className="demo-camera"><video ref={video} autoPlay playsInline muted />{!running && !testPhoto && <span>相機待命</span>}{testPhoto && !running && <img src={testPhoto} alt="這次匯入的翻拍照片" />}</div>
      <div className="demo-actions"><button className="primary" disabled={!panorama || running} onClick={() => recognize()}>開啟相機並辨識</button><button disabled={!panorama || running} onClick={() => file.current?.click()}>匯入翻拍照片</button>{running && <button onClick={() => { release(); setStatus('已停止辨識與相機'); }}>停止相機</button>}</div>
      <input ref={file} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={event => { importPhoto(event.target.files?.[0]); event.target.value = ''; }} />
      {candidate && <article className="demo-candidate"><h3>候選位置：{data?.node.name}</h3><p>參考朝向 {candidate.bearing}° · 幾何內點 {candidate.inliers}（不是正確率）</p><p>這是圖像視角的方向，不是你手機或螢幕的真實羅盤方向。</p><button className="primary" onClick={() => setStep(0)}>我確認這是模擬接待區，顯示示意路線</button></article>}
      {step >= 0 && data && <article className="demo-route"><h3>{step === 2 ? '示意流程完成' : `示意路線 ${step + 1}／2`}</h3><svg viewBox="0 0 100 100" role="img" aria-label="模擬接待區到閱覽室的示意路線"><rect x="8" y="10" width="84" height="80" rx="8" fill="#f1f5e9" /><polyline points={data.route.map(point => `${point.x * 100},${point.y * 100}`).join(' ')} fill="none" stroke="#90ae9b" strokeWidth="3" />{data.route.map((point, index) => <g key={point.id}><circle cx={point.x * 100} cy={point.y * 100} r={index === step ? 4 : 2.5} fill={index === step ? '#245e50' : '#fff'} stroke="#245e50" /><text x={point.x * 100} y={point.y * 100 - 7} textAnchor="middle" fontSize="4">{point.name}</text></g>)}</svg><p>僅為虛構路線演示，不提供真實距離或步行定位。下一步由按鈕手動推進，並非偵測你走到了轉角。</p><button disabled={step === 2} onClick={() => setStep(value => Math.min(2, value + 1))}>{step === 0 ? '模擬已抵達轉角' : '模擬已抵達目的地'}</button></article>}
    </section>}
    {mode === 'records' && data && <section className="demo-panel"><h2>已保存的獨立模擬資料</h2><p>來源：版本化模擬後台 · 唯讀。未加入正式場域，未改寫真實節點。</p><dl><dt>場域</dt><dd>{data.name}</dd><dt>可辨識節點</dt><dd>{data.node.name}（一個）</dd><dt>參考方向</dt><dd>{data.panorama.referenceYawDegrees.join('、')}°</dd><dt>環景中央對應方向</dt><dd>{data.panorama.centerMapBearing}°（虛構地圖軸）</dd></dl><img className="demo-panorama" src={data.panorama.url} alt="已保存的 AI 生成環景原圖" /><p>掃描時由瀏覽器自動擷取八個方向；不必手動裁圖，這不是 AI 自動判定真實地理方位。</p><ul>{data.limitations.map(item => <li key={item}>{item}</li>)}</ul><a href="./api/ar-demo-library" target="_blank" rel="noreferrer">查看後台資料</a></section>}
    <footer>此 Demo 不寫入正式後台、不上傳手機畫面。切換模式或離開頁面會停止相機。</footer>
  </main>;
}
createRoot(document.getElementById('ar-v4-demo-root')!).render(<DemoApp />);
