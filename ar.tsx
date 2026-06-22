import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { 
  Map, MapPin, Target, Download, Upload, Plus, 
  Settings, Trash2, Camera, Play, CheckCircle2, AlertTriangle, X,
  Edit, Image as ImageIcon, Database, HardDrive, Menu,
  ZoomIn, ZoomOut, Maximize, Scan, Info, Smartphone,
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight,
  ArrowUpLeft, ArrowUpRight, ArrowDownLeft, ArrowDownRight, Minus, Navigation,
  Building, Layers, ArrowUpDown, Eye, Ruler, Route, GitCommit, MousePointer2, Activity
} from 'lucide-react';

// ==========================================
// 圖片壓縮工具
// ==========================================
const compressImage = (base64Str, maxWidth, callback) => {
  const img = new Image();
  img.onload = () => {
    let width = img.width;
    let height = img.height;
    if (width > maxWidth || height > maxWidth) {
      if (width > height) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      } else {
        width = Math.round((width * maxWidth) / height);
        height = maxWidth;
      }
    }
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    callback(canvas.toDataURL('image/jpeg', 0.7));
  };
  img.onerror = () => callback(base64Str); 
  img.src = base64Str;
};

const ArrowIcon = ({ direction, className }) => {
  const icons = {
    'none': Minus, 'up': ArrowUp, 'down': ArrowDown, 'left': ArrowLeft, 'right': ArrowRight,
    'up-left': ArrowUpLeft, 'up-right': ArrowUpRight, 'down-left': ArrowDownLeft, 'down-right': ArrowDownRight
  };
  const Icon = icons[direction] || Minus;
  return <Icon className={className} />;
};

const getFloorLevel = (name) => {
  if (!name) return 0;
  const upper = name.toUpperCase().trim();
  if (upper.startsWith('B')) {
    const num = parseInt(upper.substring(1));
    return isNaN(num) ? -99 : -num; 
  }
  const num = parseInt(upper);
  return isNaN(num) ? 0 : num; 
};

const getFloorBounds = (floor) => floor?.bounds || { blX: 0, blY: 0, trX: 100, trY: 100 };

const cloneData = (value) => JSON.parse(JSON.stringify(value));

const normalizeAngleDelta = (current, base) => (((current - base) + 540) % 360) - 180;

const buildTubeFromPoints = (points, radius, color, opacity = 1) => {
  if (!points || points.length < 2) return null;
  const curve = new THREE.CatmullRomCurve3(points);
  const geometry = new THREE.TubeGeometry(curve, Math.max(8, points.length * 12), radius, 12, false);
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity
  });
  return new THREE.Mesh(geometry, material);
};

const createRouteArrow = (from, to) => {
  const direction = new THREE.Vector3().subVectors(to, from);
  if (direction.length() < 0.001) return null;

  const cone = new THREE.Mesh(
    new THREE.ConeGeometry(0.09, 0.24, 24),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  cone.position.copy(to);
  cone.position.y += 0.02;
  cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  return cone;
};

const getPointAtPolylineDistance = (points, distance) => {
  if (!points || points.length === 0) return null;
  let remaining = distance;

  for (let i = 0; i < points.length - 1; i++) {
    const from = points[i];
    const to = points[i + 1];
    const segmentLength = Math.hypot(to.x - from.x, to.y - from.y);
    if (segmentLength <= 0.001) continue;

    if (remaining <= segmentLength) {
      const ratio = remaining / segmentLength;
      return {
        x: from.x + (to.x - from.x) * ratio,
        y: from.y + (to.y - from.y) * ratio,
        angle: Math.atan2(to.y - from.y, to.x - from.x)
      };
    }

    remaining -= segmentLength;
  }

  const last = points[points.length - 1];
  const previous = points[points.length - 2] || last;
  return {
    x: last.x,
    y: last.y,
    angle: Math.atan2(last.y - previous.y, last.x - previous.x)
  };
};

const getPolylineLength = (points) => {
  if (!points || points.length < 2) return 0;
  return points.slice(1).reduce((total, point, index) => {
    const previous = points[index];
    return total + Math.hypot(point.x - previous.x, point.y - previous.y);
  }, 0);
};

const getVectorPathLength = (points) => {
  if (!points || points.length < 2) return 0;
  return points.slice(1).reduce((total, point, index) => total + point.distanceTo(points[index]), 0);
};

const createFlowArrowGroup = (points) => {
  if (!points || points.length < 2) return null;
  const curve = new THREE.CatmullRomCurve3(points);
  const routeLength = Math.max(getVectorPathLength(points), 0.001);
  const arrowCount = Math.max(4, Math.min(16, Math.ceil(routeLength / 0.34)));
  const arrows = [];
  const group = new THREE.Group();

  for (let i = 0; i < arrowCount; i++) {
    const arrow = new THREE.Group();
    const halo = new THREE.Mesh(
      new THREE.ConeGeometry(0.14, 0.34, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.22 })
    );
    const core = new THREE.Mesh(
      new THREE.ConeGeometry(0.09, 0.28, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.98 })
    );
    arrow.add(halo);
    arrow.add(core);
    arrow.userData.flowOffset = i / arrowCount;
    arrows.push(arrow);
    group.add(arrow);
  }

  group.userData.flow = { curve, arrows };
  return group;
};

const updateFlowArrowGroup = (group, elapsedMs) => {
  const flow = group?.userData?.flow;
  if (!flow) return;

  flow.arrows.forEach((arrow) => {
    const t = (arrow.userData.flowOffset + elapsedMs * 0.00028) % 1;
    const point = flow.curve.getPointAt(t);
    const tangent = flow.curve.getTangentAt(t).normalize();
    arrow.position.copy(point);
    arrow.position.y += 0.11;
    arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tangent);
    arrow.children.forEach((child, index) => {
      child.material.opacity = (index === 0 ? 0.16 : 0.58) + (index === 0 ? 0.18 : 0.4) * Math.sin(t * Math.PI);
    });
  });
};

const createDefaultConfig = (name = '新導引專案') => ({
  projectName: name,
  lerpFactor: 15
});

const createDefaultBuildings = () => [
  {
    id: `b_${Date.now()}`,
    name: '預設場域',
    floors: [
      {
        id: `f_${Date.now()}`,
        name: '1F',
        imageUrl: null,
        markers: [],
        waypoints: [],
        edges: [],
        bounds: { blX: 0, blY: 0, trX: 100, trY: 100 }
      }
    ]
  }
];

const createProject = (name = '新導引專案', description = '') => ({
  id: `project_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
  name,
  description,
  updatedAt: new Date().toISOString(),
  systemConfig: createDefaultConfig(name),
  buildings: createDefaultBuildings()
});

const createProjectFromPublishedData = (data) => ({
  id: data?.project?.id || 'published',
  name: data?.project?.name || data?.systemConfig?.projectName || 'AR導覽',
  description: data?.project?.description || '',
  updatedAt: data?.project?.updatedAt || new Date().toISOString(),
  systemConfig: { ...createDefaultConfig(data?.project?.name || 'AR導覽'), ...(data?.systemConfig || {}) },
  buildings: Array.isArray(data?.buildings) ? data.buildings : []
});

export default function ARManagerApp({ embedded = false, initialTab = 'map', publicOnly = false }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [promptModal, setPromptModal] = useState({ isOpen: false, title: '', placeholder: '', onSubmit: null, defaultValue: '' });
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, title: '', message: '', onConfirm: null });
  const [alertModal, setAlertModal] = useState({ isOpen: false, message: '' });
  const [permissionsModal, setPermissionsModal] = useState(false);
  const [boundsModal, setBoundsModal] = useState({ isOpen: false, blX: 0, blY: 0, trX: 100, trY: 100 });
  const isLoadingProjectRef = useRef(false);

  const [projects, setProjects] = useState(() => {
    if (publicOnly) return [createProjectFromPublishedData({})];

    try {
      const savedProjects = localStorage.getItem('arManager_projects');
      if (savedProjects) {
        const parsed = JSON.parse(savedProjects);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) { console.error("Project load error:", e); }

    let migratedConfig = createDefaultConfig('預設導引專案');
    let migratedBuildings = createDefaultBuildings();
    try {
      const savedConfig = localStorage.getItem('arManager_config');
      if (savedConfig) migratedConfig = { ...migratedConfig, ...JSON.parse(savedConfig) };
      const savedBuildings = localStorage.getItem('arManager_buildings');
      if (savedBuildings) migratedBuildings = JSON.parse(savedBuildings);
    } catch (e) { console.error("Legacy AR data migration error:", e); }

    return [{
      id: `project_${Date.now()}`,
      name: migratedConfig.projectName || '預設導引專案',
      description: '由既有 AR 導引資料自動建立',
      updatedAt: new Date().toISOString(),
      systemConfig: migratedConfig,
      buildings: migratedBuildings
    }];
  });
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id);
  const activeProject = projects.find(project => project.id === activeProjectId) || projects[0];

  const [systemConfig, setSystemConfig] = useState(() => cloneData(activeProject?.systemConfig || createDefaultConfig()));

  const [buildings, setBuildings] = useState(() => cloneData(activeProject?.buildings || createDefaultBuildings()));
  const [activeBuildingId, setActiveBuildingId] = useState(buildings[0]?.id);
  const [activeFloorId, setActiveFloorId] = useState(buildings[0]?.floors[0]?.id);
  const [referenceFloorId, setReferenceFloorId] = useState('');
  
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [selectedWaypointId, setSelectedWaypointId] = useState(null);
  const [draggingId, setDraggingId] = useState(null);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  // 路徑與節點編輯模式
  const [isPathMode, setIsPathMode] = useState(false);
  const [isToggleShaftMode, setIsToggleShaftMode] = useState(false);
  const [pathStartNodeId, setPathStartNodeId] = useState(null); 
  const [hoverPos, setHoverPos] = useState(null);

  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [panStartClient, setPanStartClient] = useState({ x: 0, y: 0 });
  const [isAddMode, setIsAddMode] = useState(false);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [measurePoints, setMeasurePoints] = useState([]);

  // 路網分析測試功能狀態
  const [isNavTestMode, setIsNavTestMode] = useState(false);
  const [navTestPoints, setNavTestPoints] = useState([]); 
  const [navTestPath, setNavTestPath] = useState([]); 

  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const fileInputRef = useRef(null);
  const markerImageInputRef = useRef(null);

  const [mapTransform, setMapTransform] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const handleExternalTabChange = (event) => {
      const nextTab = event?.detail?.tab;
      if (['map', 'list', 'settings', 'export'].includes(nextTab)) {
        switchTab(nextTab);
      }
    };

    window.addEventListener('ar-manager:set-tab', handleExternalTabChange);
    return () => window.removeEventListener('ar-manager:set-tab', handleExternalTabChange);
  }, []);

  useEffect(() => {
    if (publicOnly) return;
    try { localStorage.setItem('arManager_projects', JSON.stringify(projects)); }
    catch (e) { if (e.name === 'QuotaExceededError') setAlertModal({ isOpen: true, message: "專案資料太大，請先匯出 JSON 或移除不需要的圖片資料。" }); }
  }, [projects, publicOnly]);

  useEffect(() => {
    if (!publicOnly) return;

    let cancelled = false;
    const loadPublishedData = async () => {
      const apiResponse = await fetch(`/api/ar-content?ts=${Date.now()}`, { cache: 'no-store' });
      if (apiResponse.ok) return apiResponse.json();

      const staticResponse = await fetch(`/ar-data.json?ts=${Date.now()}`, { cache: 'no-store' });
      if (!staticResponse.ok) throw new Error(`Unable to load AR data: ${staticResponse.status}`);
      return staticResponse.json();
    };

    loadPublishedData()
      .then(data => {
        if (cancelled) return;
        const project = createProjectFromPublishedData(data);
        setProjects([project]);
        setActiveProjectId(project.id);
        setSystemConfig(cloneData(project.systemConfig));
        setBuildings(cloneData(project.buildings));
        setActiveBuildingId(project.buildings[0]?.id);
        setActiveFloorId(project.buildings[0]?.floors[0]?.id);
      })
      .catch(error => {
        console.warn("Published AR data unavailable", error);
        if (!cancelled) {
          setProjects([createProjectFromPublishedData({})]);
          setSystemConfig(createDefaultConfig('\u0041\u0052\u5c0e\u89bd'));
          setBuildings([]);
        }
      });

    return () => { cancelled = true; };
  }, [publicOnly]);

  useEffect(() => {
    if (publicOnly) return;
    if (localStorage.getItem('arManager_projects')) return;

    let cancelled = false;
    fetch(`/api/ar-content?ts=${Date.now()}`, { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`Unable to load AR data: ${response.status}`);
        return response.json();
      })
      .then(data => {
        if (cancelled || !Array.isArray(data?.buildings) || data.buildings.length === 0) return;
        const project = createProjectFromPublishedData(data);
        setProjects([project]);
        setActiveProjectId(project.id);
        setSystemConfig(cloneData(project.systemConfig));
        setBuildings(cloneData(project.buildings));
        setActiveBuildingId(project.buildings[0]?.id);
        setActiveFloorId(project.buildings[0]?.floors[0]?.id);
      })
      .catch(error => console.warn("Published AR admin seed unavailable", error));

    return () => { cancelled = true; };
  }, [publicOnly]);

  useEffect(() => {
    if (publicOnly) return;
    if (!activeProject) return;
    isLoadingProjectRef.current = true;
    const nextBuildings = cloneData(activeProject.buildings || createDefaultBuildings());
    setSystemConfig(cloneData(activeProject.systemConfig || createDefaultConfig(activeProject.name)));
    setBuildings(nextBuildings);
    setActiveBuildingId(nextBuildings[0]?.id);
    setActiveFloorId(nextBuildings[0]?.floors[0]?.id);
    setSelectedMarkerId(null);
    setSelectedWaypointId(null);
    setReferenceFloorId('');
    setMapTransform({ x: 0, y: 0, scale: 1 });
  }, [activeProjectId, publicOnly]);

  useEffect(() => {
    if (publicOnly) return;
    if (!activeProjectId) return;
    if (isLoadingProjectRef.current) {
      isLoadingProjectRef.current = false;
      return;
    }
    setProjects(prev => prev.map(project => project.id === activeProjectId ? {
      ...project,
      name: systemConfig.projectName || project.name,
      systemConfig: cloneData(systemConfig),
      buildings: cloneData(buildings),
      updatedAt: new Date().toISOString()
    } : project));
  }, [activeProjectId, buildings, systemConfig, publicOnly]);

  useEffect(() => {
    if (publicOnly) return;
    try { localStorage.setItem('arManager_buildings', JSON.stringify(buildings)); } 
    catch (e) { if (e.name === 'QuotaExceededError') setAlertModal({ isOpen: true, message: "⚠️ 瀏覽器本地暫存空間已滿！" }); }
  }, [buildings, publicOnly]);

  useEffect(() => {
    if (publicOnly) return;
    try { localStorage.setItem('arManager_config', JSON.stringify(systemConfig)); } 
    catch (e) { console.error("Config save error:", e); }
  }, [systemConfig, publicOnly]);

  useEffect(() => {
    const b = buildings.find(b => b.id === activeBuildingId);
    if (!b) {
      if (buildings.length > 0) { setActiveBuildingId(buildings[0].id); setActiveFloorId(buildings[0].floors[0]?.id); }
    } else if (!b.floors.find(f => f.id === activeFloorId)) {
      if (b.floors.length > 0) setActiveFloorId(b.floors[0].id);
    }
  }, [buildings, activeBuildingId, activeFloorId]);

  useEffect(() => {
    if (referenceFloorId === activeFloorId) setReferenceFloorId('');
  }, [activeFloorId, referenceFloorId]);

  // 注意：已移除原先會「切換樓層時清空 navTestPoints」的 useEffect，確保跨層導航測試能順利進行

  useEffect(() => { setIsConfirmingDelete(false); }, [selectedMarkerId, selectedWaypointId]);

  useEffect(() => {
    const hasAsked = sessionStorage.getItem('ar_permissions_asked');
    if (!hasAsked) setPermissionsModal(true);
  }, []);

  const requestPermissions = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        stream.getTracks().forEach(track => track.stop()); 
      }
    } catch (err) {}
    try {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        await DeviceOrientationEvent.requestPermission();
      }
    } catch (err) {}
    sessionStorage.setItem('ar_permissions_asked', 'true');
    setPermissionsModal(false);
  };

  const currentBuilding = buildings.find(b => b.id === activeBuildingId) || buildings[0];
  const currentFloor = currentBuilding?.floors.find(f => f.id === activeFloorId);
  const currentMarkers = currentFloor?.markers || [];
  const currentWaypoints = currentFloor?.waypoints || [];
  const currentEdges = currentFloor?.edges || [];
  const currentBounds = getFloorBounds(currentFloor);

  // ==========================================
  // 資料同步核心機制
  // ==========================================
  const updateNode = (id, updates, isMarker = true) => {
    setBuildings(prev => {
      let targetNode = null; let currentBId = null; let sourceFloor = null;
      prev.forEach(b => b.floors.forEach(f => {
        const list = isMarker ? f.markers : f.waypoints;
        const n = list?.find(node => node.id === id);
        if (n) { targetNode = n; currentBId = b.id; sourceFloor = f; }
      }));
      if (!targetNode) return prev;

      const effectiveShaftId = updates.shaftId !== undefined ? updates.shaftId : targetNode.shaftId;
      const effectiveIsVerticalShaft = updates.isVerticalShaft !== undefined ? updates.isVerticalShaft : targetNode.isVerticalShaft;
      const isShaftSync = effectiveIsVerticalShaft && effectiveShaftId;
      const sourceBounds = getFloorBounds(sourceFloor);

      return prev.map(b => {
        if (b.id !== currentBId && !isShaftSync) return b;
        return {
          ...b,
          floors: b.floors.map(f => {
            let list = isMarker ? [...(f.markers || [])] : [...(f.waypoints || [])];
            
            const processNode = (n) => {
              const res = { ...n, ...updates };
              if ((updates.x !== undefined || updates.y !== undefined) && f.id !== sourceFloor.id) {
                const fBounds = getFloorBounds(f);
                if (updates.x !== undefined) {
                  const globalX = sourceBounds.blX + updates.x * (sourceBounds.trX - sourceBounds.blX);
                  res.x = fBounds.trX !== fBounds.blX ? (globalX - fBounds.blX) / (fBounds.trX - fBounds.blX) : 0.5;
                }
                if (updates.y !== undefined) {
                  const globalY = sourceBounds.trY - updates.y * (sourceBounds.trY - sourceBounds.blY);
                  res.y = fBounds.trY !== fBounds.blY ? (fBounds.trY - globalY) / (fBounds.trY - fBounds.blY) : 0.5;
                }
              }
              return res;
            };

            if (isShaftSync) {
              list = list.map(n => (n.shaftId === effectiveShaftId || n.id === id) ? processNode(n) : n);
            } else {
              list = list.map(n => n.id === id ? processNode(n) : n);
            }
            return isMarker ? { ...f, markers: list } : { ...f, waypoints: list };
          })
        };
      });
    });
  };

  const handleMarkerUpdate = (id, field, value) => updateNode(id, { [field]: value }, true);
  const handleWaypointUpdate = (id, field, value) => updateNode(id, { [field]: value }, false);

  const handleToggleVerticalShaft = (node, isShaft, isMarker = true) => {
    if (!isShaft) {
      const shaftId = node.shaftId;
      setBuildings(prev => prev.map(b => {
        if (b.id !== activeBuildingId) return b;
        return {
          ...b, floors: b.floors.map(f => {
            const updateList = (list) => (list||[]).filter(n => {
              if (f.id !== activeFloorId && n.shaftId === shaftId) return false; 
              return true;
            }).map(n => {
              if (n.id === node.id) return { ...n, isVerticalShaft: false, shaftId: null, linkedFloorIds: [], sourceFloorId: null };
              return n;
            });
            return isMarker ? { ...f, markers: updateList(f.markers) } : { ...f, waypoints: updateList(f.waypoints) };
          })
        };
      }));
    } else {
      const prefix = isMarker ? 'shaft_m_' : 'shaft_wp_';
      const newShaftId = node.shaftId || `${prefix}${Date.now()}`;
      const updates = { isVerticalShaft: true, shaftId: newShaftId, linkedFloorIds: [activeFloorId] };
      if (!isMarker) updates.sourceFloorId = activeFloorId;
      updateNode(node.id, updates, isMarker);
    }
  };

  const handleToggleShaftFloor = (node, targetFloorId, isAdding, isMarker = true) => {
    const shaftId = node.shaftId;
    const currentLinked = node.linkedFloorIds || [activeFloorId];
    const newLinkedFloorIds = isAdding ? [...currentLinked, targetFloorId] : currentLinked.filter(id => id !== targetFloorId);

    setBuildings(prev => prev.map(b => {
      if (b.id !== activeBuildingId) return b;
      return {
        ...b, floors: b.floors.map(f => {
          let updatedList = isMarker ? [...(f.markers||[])] : [...(f.waypoints||[])];
          if (isAdding && f.id === targetFloorId) {
            const targetBounds = getFloorBounds(f);
            const sourceBounds = getFloorBounds(currentFloor);
            const globalX = sourceBounds.blX + node.x * (sourceBounds.trX - sourceBounds.blX);
            const globalY = sourceBounds.trY - node.y * (sourceBounds.trY - sourceBounds.blY);
            const newX = targetBounds.trX !== targetBounds.blX ? (globalX - targetBounds.blX) / (targetBounds.trX - targetBounds.blX) : 0.5;
            const newY = targetBounds.trY !== targetBounds.blY ? (targetBounds.trY - globalY) / (targetBounds.trY - targetBounds.blY) : 0.5;
            
            const prefix = isMarker ? 'marker_' : 'wp_';
            updatedList.push({ ...node, id: `${prefix}${Date.now()}_${Math.random().toString(36).substr(2, 5)}_${f.id}`, x: newX, y: newY, linkedFloorIds: newLinkedFloorIds });
          } else if (!isAdding && f.id === targetFloorId) {
            updatedList = updatedList.filter(n => n.shaftId !== shaftId);
          } else {
            updatedList = updatedList.map(n => n.shaftId === shaftId ? { ...n, linkedFloorIds: newLinkedFloorIds } : n);
          }
          return isMarker ? { ...f, markers: updatedList } : { ...f, waypoints: updatedList };
        })
      };
    }));
  };

  const deleteNode = (id) => {
    let shaftIdToDelete = null;
    let deletedIds = new Set([id]);

    buildings.forEach(b => b.floors.forEach(f => {
      f.markers.forEach(m => { if (m.id === id && m.isVerticalShaft) shaftIdToDelete = m.shaftId; });
      f.waypoints?.forEach(w => { if (w.id === id && w.isVerticalShaft) shaftIdToDelete = w.shaftId; });
    }));

    if (shaftIdToDelete) {
      buildings.forEach(b => b.floors.forEach(f => {
        f.markers.forEach(m => { if (m.shaftId === shaftIdToDelete) deletedIds.add(m.id); });
        f.waypoints?.forEach(w => { if (w.shaftId === shaftIdToDelete) deletedIds.add(w.id); });
      }));
    }

    setBuildings(prev => prev.map(b => ({
      ...b, floors: b.floors.map(f => ({
        ...f, 
        markers: (f.markers||[]).filter(m => !deletedIds.has(m.id)),
        waypoints: (f.waypoints||[]).filter(w => !deletedIds.has(w.id)),
        edges: (f.edges||[]).filter(e => !deletedIds.has(e.start) && !deletedIds.has(e.end))
      }))
    })));
    
    if (deletedIds.has(selectedMarkerId)) setSelectedMarkerId(null);
    if (deletedIds.has(selectedWaypointId)) setSelectedWaypointId(null);
    if (deletedIds.has(pathStartNodeId)) { setPathStartNodeId(null); setHoverPos(null); }
    setIsConfirmingDelete(false);
  };

  const addBuilding = () => {
    setPromptModal({
      isOpen: true, title: '新增建築物', placeholder: '請輸入新建築物名稱 (例如: 行政大樓)', defaultValue: '新建築物',
      onSubmit: (name) => {
        if (!name) return;
        const newBId = `b_${Date.now()}`;
        const newFId = `f_${Date.now()}`;
        setBuildings(prev => [...prev, { id: newBId, name, floors: [{ id: newFId, name: '1F', imageUrl: null, markers: [], waypoints: [], edges: [], bounds: { blX: 0, blY: 0, trX: 100, trY: 100 } }] }]);
        setActiveBuildingId(newBId); setActiveFloorId(newFId);
      }
    });
  };

  const addFloor = () => {
    if (!currentBuilding) return;
    setPromptModal({
      isOpen: true, title: `新增 ${currentBuilding.name} 的樓層`, placeholder: '請輸入新樓層名稱 (例如: 2F)', defaultValue: '新樓層',
      onSubmit: (name) => {
        if (!name) return;
        const newFId = `f_${Date.now()}`;
        const inheritBounds = currentFloor ? { ...getFloorBounds(currentFloor) } : { blX: 0, blY: 0, trX: 100, trY: 100 };
        setBuildings(prev => prev.map(b => b.id === activeBuildingId ? {
          ...b, floors: [...b.floors, { id: newFId, name, imageUrl: null, markers: [], waypoints: [], edges: [], bounds: inheritBounds }]
        } : b));
        setActiveFloorId(newFId);
      }
    });
  };

  const handleFloorPlanUpload = (e) => {
    const file = e.target.files[0];
    const target = e.target; 
    if (file && activeBuildingId && activeFloorId) {
      const currentBId = activeBuildingId; const currentFId = activeFloorId;
      const reader = new FileReader();
      reader.onload = (event) => {
        compressImage(event.target.result, 1600, (compressedDataUrl) => {
          setBuildings(prev => prev.map(b => b.id === currentBId ? {
            ...b, floors: b.floors.map(f => f.id === currentFId ? { ...f, imageUrl: compressedDataUrl } : f)
          } : b));
          setIsAddMode(false);
        });
      };
      reader.readAsDataURL(file);
    }
    target.value = ''; 
  };

  // ==========================================
  // 連續路徑連線核心功能 
  // ==========================================
  const addWaypointAndEdge = (x, y) => {
    const wpId = `wp_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    const newWp = { id: wpId, x, y, isVerticalShaft: false, shaftId: null, linkedFloorIds: [], sourceFloorId: activeFloorId };
    setBuildings(prev => prev.map(b => b.id === activeBuildingId ? {
      ...b, floors: b.floors.map(f => {
        if (f.id !== activeFloorId) return f;
        const newEdges = pathStartNodeId ? [...(f.edges || []), { id: `edge_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`, start: pathStartNodeId, end: wpId }] : (f.edges || []);
        return { ...f, waypoints: [...(f.waypoints || []), newWp], edges: newEdges };
      })
    } : b));
    setPathStartNodeId(wpId);
  };

  const connectToNode = (nodeId) => {
    if (pathStartNodeId === nodeId) {
      setPathStartNodeId(null);
      setHoverPos(null);
      return;
    }
    if (pathStartNodeId && pathStartNodeId !== nodeId) {
      const edgeExists = currentEdges.some(e => (e.start === pathStartNodeId && e.end === nodeId) || (e.end === pathStartNodeId && e.start === nodeId));
      if (!edgeExists) {
        setBuildings(prev => prev.map(b => b.id === activeBuildingId ? {
          ...b, floors: b.floors.map(f => f.id === activeFloorId ? {
            ...f, edges: [...(f.edges || []), { id: `edge_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`, start: pathStartNodeId, end: nodeId }]
          } : f)
        } : b));
      }
    }
    setPathStartNodeId(nodeId); 
  };

  const findNodeNear = (x, y) => {
    const threshold = 0.03; 
    for (let m of currentMarkers) { if (Math.hypot(m.x - x, m.y - y) < threshold) return m.id; }
    for (let w of currentWaypoints) { if (Math.hypot(w.x - x, w.y - y) < threshold) return w.id; }
    return null;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isPathMode) {
        setPathStartNodeId(null);
        setHoverPos(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPathMode]);

  // ==========================================
  // 【新版】全棟跨樓層路網分析測試核心邏輯
  // ==========================================
  const calculateTestPath = (startPt, endPt) => {
    const nodes = {};
    const edges = [];
    const shaftGroups = {};

    // 展開所有樓層節點與邊
    buildings.forEach(b => {
      b.floors.forEach(f => {
        const bounds = f.bounds || { blX: 0, blY: 0, trX: 100, trY: 100 };
        const toPhys = (x, y) => ({
          physX: bounds.blX + x * (bounds.trX - bounds.blX),
          physY: bounds.trY - y * (bounds.trY - bounds.blY)
        });

        f.markers.forEach(m => {
          nodes[m.id] = { ...m, ...toPhys(m.x, m.y), fId: f.id, fName: f.name };
          if (m.isVerticalShaft && m.shaftId) {
            if (!shaftGroups[m.shaftId]) shaftGroups[m.shaftId] = [];
            shaftGroups[m.shaftId].push(m.id);
          }
        });
        f.waypoints?.forEach(w => {
          nodes[w.id] = { ...w, ...toPhys(w.x, w.y), fId: f.id, fName: f.name };
          if (w.isVerticalShaft && w.shaftId) {
            if (!shaftGroups[w.shaftId]) shaftGroups[w.shaftId] = [];
            shaftGroups[w.shaftId].push(w.id);
          }
        });
        f.edges?.forEach(e => edges.push(e));
      });
    });

    const graph = {};
    Object.keys(nodes).forEach(id => { graph[id] = {}; });

    // 實體平面連線
    edges.forEach(e => {
      if (nodes[e.start] && nodes[e.end]) {
        const d = Math.hypot(nodes[e.start].physX - nodes[e.end].physX, nodes[e.start].physY - nodes[e.end].physY);
        graph[e.start][e.end] = d;
        graph[e.end][e.start] = d;
      }
    });

    // 虛擬跨樓層連線 (5m 切換成本)
    Object.values(shaftGroups).forEach(group => {
      for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
          graph[group[i]][group[j]] = 5;
          graph[group[j]][group[i]] = 5;
        }
      }
    });

    const isNetworkNode = (id) => Object.keys(graph[id]).length > 0;

    // 自動尋找最近的路網節點 (吸附)
    let startNodeId = null; let minStartD = Infinity;
    let endNodeId = null; let minEndD = Infinity;

    Object.values(nodes).forEach(n => {
      if (!isNetworkNode(n.id)) return;
      
      if (n.fId === startPt.fId) {
        const dStart = Math.hypot(n.x - startPt.x, n.y - startPt.y); 
        if (dStart < minStartD) { minStartD = dStart; startNodeId = n.id; }
      }
      if (n.fId === endPt.fId) {
        const dEnd = Math.hypot(n.x - endPt.x, n.y - endPt.y);
        if (dEnd < minEndD) { minEndD = dEnd; endNodeId = n.id; }
      }
    });

    if (!startNodeId || !endNodeId) {
      setAlertModal({ isOpen: true, message: '無法找到鄰近的路網節點。請確認起點與終點的樓層皆有繪製路網路線！' });
      setNavTestPoints([]); setNavTestPath([]); return;
    }

    // Dijkstra
    const distances = {}; const prev = {}; const pq = new Set(Object.keys(nodes));
    Object.keys(nodes).forEach(id => { distances[id] = Infinity; prev[id] = null; });
    distances[startNodeId] = 0;

    while (pq.size > 0) {
      let minNode = null;
      pq.forEach(node => { if (minNode === null || distances[node] < distances[minNode]) minNode = node; });
      if (distances[minNode] === Infinity || minNode === endNodeId) break;
      pq.delete(minNode);

      Object.entries(graph[minNode]).forEach(([neighbor, weight]) => {
        if (pq.has(neighbor)) {
          const alt = distances[minNode] + weight;
          if (alt < distances[neighbor]) { distances[neighbor] = alt; prev[neighbor] = minNode; }
        }
      });
    }

    const pathIds = [];
    let curr = endNodeId;
    while (curr) { pathIds.unshift(curr); curr = prev[curr]; }

    if (pathIds.length === 0 || pathIds[0] !== startNodeId) {
      setAlertModal({ isOpen: true, message: '無法計算跨樓層路徑，請確認上下樓的電梯/樓梯節點有正確連接到路網！' });
      setNavTestPoints([]); setNavTestPath([]); return;
    }

    const finalPathCoords = [
      { x: startPt.x, y: startPt.y, fId: startPt.fId, fName: startPt.fName, isVirtual: true },
      ...pathIds.map(id => nodes[id]),
      { x: endPt.x, y: endPt.y, fId: endPt.fId, fName: endPt.fName, isVirtual: true }
    ];
    
    setNavTestPath(finalPathCoords);
  };


  // ==========================================
  // 地圖互動與事件
  // ==========================================
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || activeTab !== 'map') return;
    const onWheel = (e) => {
      e.preventDefault();
      const wrapperRect = wrapper.getBoundingClientRect();
      const mouseX = e.clientX - wrapperRect.left;
      const mouseY = e.clientY - wrapperRect.top;
      const delta = e.deltaY < 0 ? 1.1 : 0.9;
      setMapTransform(prev => {
        const newScale = Math.max(0.1, Math.min(10, prev.scale * delta));
        const ratio = newScale / prev.scale;
        return { x: mouseX - (mouseX - prev.x) * ratio, y: mouseY - (mouseY - prev.y) * ratio, scale: newScale };
      });
    };
    wrapper.addEventListener('wheel', onWheel, { passive: false });
    return () => wrapper.removeEventListener('wheel', onWheel);
  }, [activeTab]);

  const handleMapPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    if (e.target.closest('.marker-pin') || e.target.closest('.waypoint-pin')) return;
    setIsPanning(true);
    setPanStart({ x: e.clientX - mapTransform.x, y: e.clientY - mapTransform.y });
    setPanStartClient({ x: e.clientX, y: e.clientY });
    e.target.setPointerCapture(e.pointerId);
  };

  const handleMapPointerMove = (e) => {
    if (isPanning) {
        setMapTransform(prev => ({ ...prev, x: e.clientX - panStart.x, y: e.clientY - panStart.y }));
    } else if (isPathMode && pathStartNodeId && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        let x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        let y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        setHoverPos({x, y});
    } else if (draggingId && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        let x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        let y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        if (draggingId.startsWith('marker_')) {
            handleMarkerUpdate(draggingId, 'x', x);
            handleMarkerUpdate(draggingId, 'y', y);
        } else if (draggingId.startsWith('wp_')) {
            handleWaypointUpdate(draggingId, 'x', x);
            handleWaypointUpdate(draggingId, 'y', y);
        }
    }
  };

  const handleMapPointerUp = (e) => {
    if (isPanning) {
      setIsPanning(false); e.target.releasePointerCapture(e.pointerId);
      const dist = Math.hypot(e.clientX - panStartClient.x, e.clientY - panStartClient.y);
      if (dist < 5) {
        if (!currentFloor?.imageUrl || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        let x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        let y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

        if (isNavTestMode) {
          const newPt = { x, y, fId: activeFloorId, fName: currentFloor?.name };
          const newPoints = navTestPoints.length >= 2 ? [newPt] : [...navTestPoints, newPt];
          setNavTestPoints(newPoints);
          if (newPoints.length === 1) setNavTestPath([]); 
          if (newPoints.length === 2) calculateTestPath(newPoints[0], newPoints[1]);
        } else if (isPathMode) {
          const nearNodeId = findNodeNear(x, y);
          if (nearNodeId) connectToNode(nearNodeId); else addWaypointAndEdge(x, y);
        } else if (isAddMode) {
          const totalMarkersCount = buildings.reduce((acc, b) => acc + b.floors.reduce((acc2, f) => acc2 + f.markers.length, 0), 0);
          const newMarker = {
            id: `marker_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`, code: `N${totalMarkersCount + 1}`, title: '新增辨識點', description: '', arrowDirection: 'none', 
            isVerticalShaft: false, shaftId: null, linkedFloorIds: [], x, y, imageUrl: null, enabled: true, recognitionStatus: 'untested'
          };
          setBuildings(prev => prev.map(b => b.id === activeBuildingId ? { ...b, floors: b.floors.map(f => f.id === activeFloorId ? { ...f, markers: [...f.markers, newMarker] } : f) } : b));
          setSelectedMarkerId(newMarker.id); setSelectedWaypointId(null); setIsAddMode(false);
        } else if (isMeasuring) {
          setMeasurePoints(prev => prev.length >= 2 ? [{x, y}] : [...prev, {x, y}]);
        } else {
          setSelectedMarkerId(null);
          setSelectedWaypointId(null);
        }
      }
    }
  };

  const handleMarkerImageUpload = (e) => {
    const file = e.target.files[0]; const target = e.target; 
    if (file && selectedMarkerId) {
      const currentMarkerId = selectedMarkerId;
      const reader = new FileReader();
      reader.onload = (event) => {
        compressImage(event.target.result, 800, (compressedDataUrl) => {
          handleMarkerUpdate(currentMarkerId, 'imageUrl', compressedDataUrl);
          handleMarkerUpdate(currentMarkerId, 'recognitionStatus', 'untested');
        });
      };
      reader.readAsDataURL(file);
    }
    target.value = '';
  };

  const handleEditFromList = (bId, fId, mId) => {
    setActiveBuildingId(bId); setActiveFloorId(fId); setSelectedMarkerId(mId); setSelectedWaypointId(null); setActiveTab('map'); 
  };

  const saveActiveProject = async () => {
    const payload = {
      version: '7.0',
      project: {
        id: activeProjectId,
        name: systemConfig.projectName || activeProject?.name || 'AR導覽',
        description: activeProject?.description || '',
        updatedAt: new Date().toISOString()
      },
      systemConfig: cloneData(systemConfig),
      buildings: cloneData(buildings)
    };

    setProjects(prev => prev.map(project => project.id === activeProjectId ? {
      ...project,
      name: payload.project.name,
      systemConfig: payload.systemConfig,
      buildings: payload.buildings,
      updatedAt: payload.project.updatedAt
    } : project));

    try {
      const response = await fetch('/api/save-ar-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || `Save failed: ${response.status}`);
      }

      setAlertModal({ isOpen: true, message: `「${payload.project.name}」已儲存到 Web 端。民眾端會透過 /api/ar-content 讀取最新平面圖、AR 點位與路網資料。` });
    } catch (error) {
      setAlertModal({ isOpen: true, message: `已儲存在後台暫存，但發布到網站失敗：${error.message}` });
    }
  };

  const addProject = () => {
    setPromptModal({
      isOpen: true,
      title: '新增 AR 導引專案',
      placeholder: '請輸入場域或導引服務名稱',
      defaultValue: `導引專案 ${projects.length + 1}`,
      onSubmit: (name) => {
        if (!name) return;
        const project = createProject(name);
        setProjects(prev => [...prev, project]);
        setActiveProjectId(project.id);
        setActiveTab('map');
      }
    });
  };

  const editProject = () => {
    setPromptModal({
      isOpen: true,
      title: '編輯專案名稱',
      placeholder: '請輸入專案名稱',
      defaultValue: activeProject?.name || systemConfig.projectName || '',
      onSubmit: (name) => {
        if (!name) return;
        setSystemConfig(prev => ({ ...prev, projectName: name }));
        setProjects(prev => prev.map(project => project.id === activeProjectId ? {
          ...project,
          name,
          systemConfig: { ...project.systemConfig, projectName: name },
          updatedAt: new Date().toISOString()
        } : project));
      }
    });
  };

  const deleteProject = () => {
    if (projects.length <= 1) {
      setAlertModal({ isOpen: true, message: '\u81f3\u5c11\u9700\u8981\u4fdd\u7559\u4e00\u500b AR \u5c0e\u5f15\u5c08\u6848\u3002' });
      return;
    }

    setConfirmModal({
      isOpen: true,
      title: '\u522a\u9664 AR \u5c0e\u5f15\u5c08\u6848',
      message: `\u78ba\u5b9a\u8981\u522a\u9664\u300c${activeProject?.name || systemConfig.projectName}\u300d\u55ce\uff1f\u6b64\u5c08\u6848\u5167\u7684\u5e73\u9762\u5716\u3001\u8def\u5f91\u8207 AR \u9ede\u4f4d\u90fd\u6703\u4e00\u4f75\u79fb\u9664\u3002`,
      onConfirm: () => {
        setProjects(prev => {
          const remaining = prev.filter(project => project.id !== activeProjectId);
          setActiveProjectId(remaining[0]?.id);
          return remaining;
        });
      }
    });
  };

  const handleClearAllData = () => {
    setBuildings(createDefaultBuildings());
    setSelectedMarkerId(null);
    setSelectedWaypointId(null);
    setMapTransform({ x: 0, y: 0, scale: 1 });
    setIsAddMode(false);
    setIsPathMode(false);
    setIsToggleShaftMode(false);
    setPathStartNodeId(null);
    setHoverPos(null);
    setIsNavTestMode(false);
    setNavTestPoints([]);
    setNavTestPath([]);
    setAlertModal({ isOpen: true, message: '\u76ee\u524d\u5c08\u6848\u7684 AR \u8cc7\u6599\u5df2\u6e05\u9664\u3002' });
  };

  const exportJSON = () => {
    const exportName = (systemConfig.projectName || activeProject?.name || 'ar_project').replace(/[^\w\u4e00-\u9fff-]+/g, '_');
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      version: '7.0',
      project: {
        id: activeProjectId,
        name: systemConfig.projectName || activeProject?.name,
        description: activeProject?.description || '',
        updatedAt: activeProject?.updatedAt
      },
      systemConfig,
      buildings
    }, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${exportName}_ar_config_v7.json`);
    document.body.appendChild(downloadAnchorNode); 
    downloadAnchorNode.click(); downloadAnchorNode.remove();
  };

  const resetMapView = () => {
    if (!currentFloor?.imageUrl || !wrapperRef.current || !containerRef.current) {
      setMapTransform({ x: 0, y: 0, scale: 1 }); return;
    }
    const wrapper = wrapperRef.current;
    const img = containerRef.current.querySelector('img');
    if (!img || img.naturalWidth === 0) return;
    const { width: wrapperWidth, height: wrapperHeight } = wrapper.getBoundingClientRect();
    const scale = Math.min(wrapperWidth / img.naturalWidth, wrapperHeight / img.naturalHeight, 1) * 0.9;
    setMapTransform({ x: (wrapperWidth - img.naturalWidth * scale) / 2, y: (wrapperHeight - img.naturalHeight * scale) / 2, scale });
  };

  const switchTab = (tab) => { 
    setActiveTab(tab); setIsMobileMenuOpen(false); 
    setIsAddMode(false); setIsMeasuring(false); setIsPathMode(false); setIsToggleShaftMode(false); setPathStartNodeId(null); setHoverPos(null);
    setIsNavTestMode(false); setNavTestPoints([]); setNavTestPath([]);
  };
  
  let selectedMarker = null; let selectedWaypoint = null; let selectedMarkerLocation = null;
  buildings.forEach(b => b.floors.forEach(f => {
    f.markers.forEach(m => {
      if (m.id === selectedMarkerId) { selectedMarker = m; selectedMarkerLocation = { buildingName: b.name, floorName: f.name }; }
    });
    f.waypoints?.forEach(w => {
      if (w.id === selectedWaypointId) { selectedWaypoint = w; selectedMarkerLocation = { buildingName: b.name, floorName: f.name }; }
    });
  }));

  // UI 計算與輔助
  let scaleBarMeters = 0; let scaleBarWidthPx = 0; const imgEl = document.getElementById('current-map-image');
  const mapWidthMeters = currentBounds.trX - currentBounds.blX; const mapHeightMeters = currentBounds.trY - currentBounds.blY;

  if (imgEl && mapWidthMeters > 0) {
      const mapRectWidth = imgEl.offsetWidth * mapTransform.scale;
      if (mapRectWidth > 0) {
          const metersPerPixel = mapWidthMeters / mapRectWidth;
          const targetMeters = 100 * metersPerPixel; 
          const niceNumbers = [0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000];
          scaleBarMeters = niceNumbers.slice().reverse().find(n => n <= targetMeters) || 0.5;
          scaleBarWidthPx = scaleBarMeters / metersPerPixel;
      }
  }

  const totalProjectMarkers = buildings.reduce((sum, b) => sum + b.floors.reduce((floorSum, f) => floorSum + (f.markers || []).length, 0), 0);
  const totalProjectFloors = buildings.reduce((sum, b) => sum + b.floors.length, 0);

  const renderProjectManager = () => (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-5 shadow-lg mb-5">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1">AR 導引專案</div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <select
              value={activeProjectId}
              onChange={(e) => setActiveProjectId(e.target.value)}
              className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 min-w-[220px]"
            >
              {projects.map(project => (
                <option key={project.id} value={project.id} className="bg-slate-950">{project.name}</option>
              ))}
            </select>
            <div className="text-xs text-slate-500">
              共 {projects.length} 個專案 · {buildings.length} 棟建築 · {totalProjectFloors} 個樓層 · {totalProjectMarkers} 個 AR 點位
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full xl:w-auto">
          <button onClick={addProject} className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs transition-colors">
            <Plus className="w-4 h-4" />新增專案
          </button>
          <button onClick={editProject} className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg text-xs transition-colors">
            <Edit className="w-4 h-4" />編輯
          </button>
          <button onClick={saveActiveProject} className="inline-flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-2 rounded-lg text-xs transition-colors">
            <CheckCircle2 className="w-4 h-4" />儲存
          </button>
          <button onClick={deleteProject} className="inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2 rounded-lg text-xs transition-colors">
            <Trash2 className="w-4 h-4" />刪除
          </button>
        </div>
      </div>
      <div className="mt-3 text-xs text-slate-500">
        每個專案都會獨立保存平面圖、路徑節點、AR 導引點與系統設定。切換專案後，下方維護區會載入該場域自己的資料。
      </div>
    </div>
  );

  const renderListView = () => {
    const seenShafts = new Set();
    const allFlatMarkers = buildings.flatMap(b => b.floors.flatMap(f => (f.markers||[]).reduce((acc, m) => {
      if (m.isVerticalShaft && m.shaftId) { if (seenShafts.has(m.shaftId)) return acc; seenShafts.add(m.shaftId); }
      acc.push({ ...m, bId: b.id, fId: f.id, buildingName: b.name, floorName: f.name }); return acc;
    }, [])));

    return (
      <div className="flex-1 p-4 md:p-8 overflow-auto bg-slate-950">
      <div className="max-w-7xl mx-auto">
          {renderProjectManager()}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center">
              <button className="md:hidden mr-3 text-slate-400 hover:text-white shrink-0" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
              <h2 className="text-xl md:text-2xl font-bold text-slate-200 flex items-center">
                <MapPin className="mr-2 md:mr-3 text-cyan-400" /> 點位總覽
              </h2>
            </div>
            <span className="bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-cyan-500/30">共 {allFlatMarkers.length} 組節點</span>
          </div>

          {allFlatMarkers.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 text-center text-slate-500 flex flex-col items-center">
              <MapPin className="w-12 h-12 md:w-16 md:h-16 mb-4 opacity-30" />
              <p className="text-base md:text-lg mb-2">目前沒有任何點位資料</p>
              <button onClick={() => switchTab('map')} className="mt-6 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-6 py-2 rounded-lg transition-all text-sm">前往平面圖</button>
            </div>
          ) : (
            <>
            <div className="md:hidden space-y-3">
              {allFlatMarkers.map(marker => (
                <div key={marker.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
                  <div className="flex items-start gap-3">
                    {marker.imageUrl ? (
                      <img src={marker.imageUrl} alt={marker.code} className="w-12 h-12 object-cover rounded-lg bg-slate-950 border border-slate-700 shrink-0" />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0"><ImageIcon className="w-5 h-5" /></div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-mono text-cyan-400 font-bold text-sm">{marker.code}</div>
                        <StatusBadge status={marker.recognitionStatus} />
                      </div>
                      <div className="font-bold text-slate-100 mt-1 truncate">{marker.title || '未命名點位'}</div>
                      <div className="text-xs text-slate-500 mt-1 truncate">{marker.buildingName} · {marker.floorName}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className={`px-2.5 py-1 rounded text-xs font-medium ${marker.enabled ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                      {marker.enabled ? '已啟用' : '未啟用'}
                    </span>
                    <button onClick={() => handleEditFromList(marker.bId, marker.fId, marker.id)} className="inline-flex items-center gap-2 px-3 py-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-lg transition-colors text-sm">
                      <Edit className="w-4 h-4" />編輯
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:block bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300 min-w-[900px]">
                  <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 whitespace-nowrap">
                    <tr>
                      <th className="px-4 py-4 font-semibold w-24">所在位置</th>
                      <th className="px-4 py-4 font-semibold w-20">縮圖</th>
                      <th className="px-4 py-4 font-semibold w-28">代號 & 類型</th>
                      <th className="px-4 py-4 font-semibold">標題 & 描述</th>
                      <th className="px-4 py-4 font-semibold w-28">啟用狀態</th>
                      <th className="px-4 py-4 font-semibold w-36">測試狀態</th>
                      <th className="px-4 py-4 font-semibold w-24 text-right">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {allFlatMarkers.map(marker => {
                      const linkedFloorNames = marker.isVerticalShaft 
                        ? buildings.find(b => b.id === marker.bId)?.floors.filter(f => marker.linkedFloorIds?.includes(f.id)).sort((a,b) => getFloorLevel(b.name) - getFloorLevel(a.name)).map(f => f.name).join(', ')
                        : marker.floorName;

                      return (
                        <tr key={marker.id} className={`hover:bg-slate-800/50 transition-colors ${marker.isVerticalShaft ? 'bg-purple-900/5' : ''}`}>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-xs font-bold text-slate-300">{marker.buildingName}</div>
                            <div className={`text-[10px] mt-0.5 ${marker.isVerticalShaft ? 'text-purple-400 font-bold' : 'text-cyan-400'}`}>{linkedFloorNames}</div>
                          </td>
                          <td className="px-4 py-4">
                            {marker.imageUrl ? ( <img src={marker.imageUrl} alt={marker.code} className="w-10 h-10 object-cover rounded bg-slate-950 border border-slate-700" /> ) : ( <div className="w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600"><ImageIcon className="w-4 h-4" /></div> )}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="font-mono text-cyan-400 font-bold mb-1">{marker.code}</div>
                            {marker.isVerticalShaft ? ( <div className="inline-flex items-center bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded text-[10px]"><ArrowUpDown className="w-3 h-3 mr-1"/> 垂直貫穿</div> ) : ( marker.arrowDirection !== 'none' && <div className="inline-flex items-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]"><ArrowIcon direction={marker.arrowDirection} className="w-3 h-3 mr-1" /> 方向</div> )}
                          </td>
                          <td className="px-4 py-4">
                            <div className="font-bold text-slate-200 mb-1 line-clamp-1 max-w-[200px]">{marker.title || '未命名'}</div>
                            <div className="text-xs text-slate-500 line-clamp-1 max-w-[200px]">{marker.description || '無描述'}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            {marker.enabled ? <span className="px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs font-medium">已啟用</span> : <span className="px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded text-xs font-medium">已停用</span>}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap"><StatusBadge status={marker.recognitionStatus} /></td>
                          <td className="px-4 py-4 text-right">
                            <button onClick={() => handleEditFromList(marker.bId, marker.fId, marker.id)} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors" title="前往此樓層編輯"><Edit className="w-4 h-4" /></button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderSettingsView = () => (
    <div className="flex-1 p-4 md:p-8 overflow-auto bg-slate-950">
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
        {renderProjectManager()}
        <div>
          <div className="flex items-center mb-2">
            <button className="md:hidden mr-3 text-slate-400 hover:text-white shrink-0" onClick={() => setIsMobileMenuOpen(true)}><Menu className="w-6 h-6" /></button>
            <h2 className="text-xl md:text-2xl font-bold text-slate-200 flex items-center"><Settings className="mr-2 md:mr-3 text-cyan-400" /> 系統設定</h2>
          </div>
          <p className="text-slate-500 text-xs md:text-sm">匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 shadow-lg">
          <h3 className="text-base md:text-lg font-bold text-slate-300 mb-4 md:mb-6 flex items-center"><HardDrive className="w-5 h-5 mr-2 text-blue-400" /> 基礎環境參數</h3>
          <div className="space-y-4 md:space-y-5">
            <div>
              <label className="block text-xs md:text-sm font-medium text-slate-400 mb-1.5">系統專案名稱</label>
              <input type="text" value={systemConfig.projectName} onChange={(e) => setSystemConfig({...systemConfig, projectName: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" />
            </div>
            <div className="pt-2 border-t border-slate-800">
              <label className="block text-xs md:text-sm font-medium text-slate-400 mb-1.5 mt-2">防抖強度預設值 (Lerp Factor)</label>
              <input type="range" min="5" max="50" value={systemConfig.lerpFactor} onChange={(e) => setSystemConfig({...systemConfig, lerpFactor: parseInt(e.target.value)})} className="w-full accent-cyan-500" />
            </div>
          </div>
        </div>
        <div className="bg-slate-900 border border-red-900/30 rounded-xl p-4 md:p-6 shadow-lg">
          <h3 className="text-base md:text-lg font-bold text-red-400 mb-2 flex items-center"><Database className="w-5 h-5 mr-2" /> 資料庫管理</h3>
          <p className="text-xs md:text-sm text-slate-500 mb-4 md:mb-6">這些操作將會對目前的配置造成不可逆的影響，請謹慎操作。</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950 rounded-lg border border-red-900/50 gap-4">
            <div><div className="font-bold text-slate-300 text-sm md:text-base">清空所有系統資料</div><div className="text-xs text-slate-500 mt-1">刪除所有建築物、樓層平面圖與點位。</div></div>
            <button onClick={() => { 
              setConfirmModal({
                isOpen: true,
                title: '清空所有資料',
                message: '確定要清空所有資料嗎？此操作無法復原。',
                onConfirm: () => handleClearAllData()
              });
            }} className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap">清空資料</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExportView = () => (
    <div className="flex-1 p-4 md:p-8 overflow-auto bg-slate-950">
      <div className="max-w-4xl mx-auto space-y-6">
        {renderProjectManager()}
        <div>
          <div className="flex items-center mb-2">
            <button className="md:hidden mr-3 text-slate-400 hover:text-white shrink-0" onClick={() => setIsMobileMenuOpen(true)}><Menu className="w-6 h-6" /></button>
            <h2 className="text-xl md:text-2xl font-bold text-slate-200 flex items-center"><Download className="mr-2 md:mr-3 text-cyan-400" /> 匯出JSON</h2>
          </div>
          <p className="text-slate-500 text-xs md:text-sm">匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="text-2xl font-bold text-cyan-400">{buildings.length}</div>
            <div className="text-xs text-slate-400 mt-1">大樓數量</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="text-2xl font-bold text-cyan-400">{buildings.reduce((sum, b) => sum + b.floors.length, 0)}</div>
            <div className="text-xs text-slate-400 mt-1">樓層數量</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="text-2xl font-bold text-cyan-400">{buildings.reduce((sum, b) => sum + b.floors.reduce((floorSum, f) => floorSum + (f.markers || []).length, 0), 0)}</div>
            <div className="text-xs text-slate-400 mt-1">AR 點位數量</div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-lg">
          <h3 className="text-base md:text-lg font-bold text-slate-200 mb-3 flex items-center"><Database className="w-5 h-5 mr-2 text-cyan-400" /> JSON 配置檔</h3>
          <p className="text-sm text-slate-400 mb-5">按下按鈕後會下載一份目前專案的 <span className="text-cyan-300 font-mono">AR JSON v7</span>，可供後續系統串接、備份或移轉使用。</p>
          <button onClick={exportJSON} className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_18px_rgba(6,182,212,0.28)]">
            <Download className="w-5 h-5" />
            <span>下載 JSON 配置</span>
          </button>
        </div>
      </div>
    </div>
  );

  if (publicOnly) {
    return (
      <div className="flex h-[100dvh] w-full bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative">
        <FrontendUserView buildings={buildings} systemConfig={systemConfig} onMenuClick={() => {}} />
      </div>
    );
  }

  return (
    <div className={`${embedded ? 'flex min-h-[760px] w-full' : 'flex h-[100dvh] w-full'} bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative`}>
      {!embedded && isMobileMenuOpen && ( <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} /> )}
      
      {!embedded && <div className={`fixed inset-y-0 left-0 z-50 w-[82vw] max-w-xs md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 transition-transform duration-300 shadow-2xl md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div>
          <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50 justify-between md:justify-start">
            <div className="flex items-center">
              <Target className="w-7 h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <span className="ml-3 font-bold text-base md:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AR導引功能</span>
            </div>
            <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          <nav className="p-4 space-y-2">
            <NavItem icon={<Map />} label="平面圖管理" active={activeTab === 'map'} onClick={() => switchTab('map')} />
            <NavItem icon={<MapPin />} label="點位列表" active={activeTab === 'list'} onClick={() => switchTab('list')} />
            <NavItem icon={<Settings />} label="系統設定" active={activeTab === 'settings'} onClick={() => switchTab('settings')} />
            <NavItem icon={<Download />} label="匯出JSON" active={activeTab === 'export'} onClick={() => switchTab('export')} />
          </nav>
        </div>
        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          <div className="text-[11px] leading-relaxed text-slate-500">管理平面圖、點位、系統參數，並匯出 AR 導引 JSON。</div>
        </div>
      </div>}

      {activeTab === 'frontend' && (
        <FrontendUserView buildings={buildings} systemConfig={systemConfig} onMenuClick={() => setIsMobileMenuOpen(true)} />
      )}

      {activeTab === 'list' && renderListView()}

      {activeTab === 'settings' && renderSettingsView()}

      {activeTab === 'export' && renderExportView()}

      {activeTab === 'map' && (
        <div className="flex-1 flex flex-col relative overflow-hidden bg-slate-950 w-full">
          
          <div className="absolute top-3 left-2 right-2 md:top-4 md:left-4 md:right-auto z-40 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2 rounded-xl shadow-lg overflow-x-auto md:overflow-visible whitespace-nowrap">
            {!embedded && <button className="md:hidden text-slate-400 hover:text-white mr-1" onClick={() => setIsMobileMenuOpen(true)}><Menu className="w-5 h-5" /></button>}
            <div className="flex items-center">
              <Target className="w-4 h-4 text-cyan-400 ml-1 mr-2"/>
              <select className="bg-transparent text-cyan-300 text-sm font-bold focus:outline-none max-w-[120px] md:max-w-[150px] truncate" value={activeProjectId} onChange={(e) => setActiveProjectId(e.target.value)}>
                {projects.map(project => <option key={project.id} value={project.id} className="bg-slate-900">{project.name}</option>)}
              </select>
              <button onClick={addProject} className="ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors" title="新增專案"><Plus className="w-4 h-4"/></button>
              <button onClick={saveActiveProject} className="px-1 text-green-400 hover:text-green-300 transition-colors" title="儲存專案"><CheckCircle2 className="w-4 h-4"/></button>
            </div>
            <div className="w-px h-5 bg-slate-700 mx-1"></div>
            <div className="flex items-center">
              <Building className="w-4 h-4 text-slate-500 ml-1 mr-2"/>
              <select className="bg-transparent text-slate-200 text-sm font-medium focus:outline-none max-w-[110px] md:max-w-[120px] truncate" value={activeBuildingId} onChange={(e) => setActiveBuildingId(e.target.value)}>
                {buildings.map(b => <option key={b.id} value={b.id} className="bg-slate-900">{b.name}</option>)}
              </select>
              <button onClick={addBuilding} className="ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors"><Plus className="w-4 h-4"/></button>
            </div>
            <div className="w-px h-5 bg-slate-700 mx-1"></div>
            {currentBuilding && (
              <div className="flex items-center">
                <Layers className="w-4 h-4 text-slate-500 mr-2"/>
                <select className="bg-transparent text-cyan-400 font-bold text-sm focus:outline-none max-w-[100px] truncate" value={activeFloorId} onChange={(e) => setActiveFloorId(e.target.value)}>
                  {currentBuilding.floors.slice().sort((a,b) => getFloorLevel(b.name) - getFloorLevel(a.name)).map(f => <option key={f.id} value={f.id} className="bg-slate-900">{f.name}</option>)}
                </select>
                <button onClick={addFloor} className="ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors"><Plus className="w-4 h-4"/></button>
              </div>
            )}
            <div className="w-px h-5 bg-slate-700 mx-1 hidden md:block"></div>
            <div className="hidden md:flex items-center" title="透視其他樓層">
              <Eye className="w-4 h-4 text-slate-500 mr-1"/>
              <select className="bg-transparent text-slate-400 text-xs focus:outline-none max-w-[90px] truncate" value={referenceFloorId} onChange={(e) => setReferenceFloorId(e.target.value)}>
                <option value="" className="bg-slate-900">-- 關閉透視 --</option>
                {buildings.flatMap(b => b.floors.filter(f => f.id !== activeFloorId).sort((a,b) => getFloorLevel(b.name) - getFloorLevel(a.name)).map(f => (
                  <option key={f.id} value={f.id} className="bg-slate-900">{b.name}-{f.name}</option>
                )))}
              </select>
            </div>
          </div>

          <div className="absolute left-2 right-2 bottom-3 md:left-auto md:right-4 md:bottom-auto md:top-4 z-40 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible bg-slate-950/60 md:bg-transparent backdrop-blur md:backdrop-blur-0 p-2 md:p-0 rounded-xl md:rounded-none border border-slate-800/70 md:border-0">
            <button
              onClick={() => { if (!currentFloor?.imageUrl) return; setIsNavTestMode(!isNavTestMode); setIsPathMode(false); setIsToggleShaftMode(false); setIsAddMode(false); setIsMeasuring(false); setPathStartNodeId(null); setSelectedMarkerId(null); setSelectedWaypointId(null); setHoverPos(null); setNavTestPoints([]); setNavTestPath([]); }}
              disabled={!currentFloor?.imageUrl}
              className={`flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs ${isNavTestMode ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed'}`}
              title="路網分析測試"
            >
              {isNavTestMode ? <X className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
              <span>路網測試</span>
            </button>
            {currentFloor?.imageUrl && (
              <>
                <div className="hidden md:block w-6 h-px bg-slate-700 mx-auto my-0.5"></div>
                <button onClick={() => { setIsToggleShaftMode(!isToggleShaftMode); setIsPathMode(false); setIsNavTestMode(false); setIsAddMode(false); setIsMeasuring(false); setPathStartNodeId(null); setSelectedMarkerId(null); setSelectedWaypointId(null); setHoverPos(null); }} className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${isToggleShaftMode ? 'bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]' : 'bg-slate-900/90 backdrop-blur border border-slate-700 text-green-400 hover:bg-slate-800'}`} title="指定跨樓層轉折點 (點擊節點切換)">
                  {isToggleShaftMode ? <X className="w-5 h-5" /> : <ArrowUpDown className="w-5 h-5" />}
                </button>
                <button onClick={() => { setIsPathMode(!isPathMode); setIsToggleShaftMode(false); setIsNavTestMode(false); setIsAddMode(false); setIsMeasuring(false); setPathStartNodeId(null); setSelectedMarkerId(null); setSelectedWaypointId(null); setHoverPos(null); }} className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${isPathMode ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]' : 'bg-slate-900/90 backdrop-blur border border-slate-700 text-orange-400 hover:bg-slate-800'}`} title="路徑建置 (一般轉折點與連線)">
                  {isPathMode ? <X className="w-5 h-5" /> : <Route className="w-5 h-5" />}
                </button>
                <button onClick={() => { setIsMeasuring(!isMeasuring); setIsToggleShaftMode(false); setIsNavTestMode(false); setIsAddMode(false); setIsPathMode(false); setMeasurePoints([]); setHoverPos(null); }} className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${isMeasuring ? 'bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]' : 'bg-slate-900/90 backdrop-blur border border-slate-700 text-purple-400 hover:bg-slate-800'}`} title="尺規量測">
                  {isMeasuring ? <X className="w-5 h-5" /> : <Ruler className="w-5 h-5" />}
                </button>
                <button onClick={() => { setIsAddMode(!isAddMode); setIsToggleShaftMode(false); setIsNavTestMode(false); setIsMeasuring(false); setIsPathMode(false); setHoverPos(null); }} className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${isAddMode ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]' : 'bg-slate-900/90 backdrop-blur border border-slate-700 text-cyan-400 hover:bg-slate-800'}`} title="新增 AR 點位">
                  {isAddMode ? <X className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
                </button>
                <button onClick={() => setBoundsModal({ isOpen: true, blX: currentBounds.blX, blY: currentBounds.blY, trX: currentBounds.trX, trY: currentBounds.trY })} className="flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 rounded-xl transition-all shadow-lg" title="座標與比例尺設定">
                  <Target className="w-5 h-5" />
                </button>
              </>
            )}
            <input type="file" ref={fileInputRef} onChange={handleFloorPlanUpload} className="hidden" accept="image/*" />
            <button onClick={() => fileInputRef.current.click()} className="flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all shadow-lg" title="上傳底圖">
              <Upload className="w-5 h-5" />
            </button>
          </div>

          <div ref={wrapperRef} className={`flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 touch-none select-none ${isPathMode ? 'cursor-crosshair' : (isToggleShaftMode ? 'cursor-pointer' : (isAddMode ? 'cursor-crosshair' : (isMeasuring ? 'cursor-crosshair' : (isNavTestMode ? 'cursor-crosshair' : (isPanning ? 'cursor-grabbing' : 'cursor-grab')))))}`} onPointerDown={handleMapPointerDown} onPointerMove={handleMapPointerMove} onPointerUp={handleMapPointerUp} onPointerCancel={handleMapPointerUp}>
            <div ref={containerRef} className="absolute top-0 left-0 origin-top-left will-change-transform" style={{ transform: `translate(${mapTransform.x}px, ${mapTransform.y}px) scale(${mapTransform.scale})` }}>
              
              {referenceFloorId && (() => {
                let refF = null;
                buildings.forEach(b => b.floors.forEach(f => { if (f.id === referenceFloorId) refF = f; }));
                if (!refF) return null;

                const rBounds = getFloorBounds(refF);
                const wRatio = mapWidthMeters !== 0 ? (rBounds.trX - rBounds.blX) / mapWidthMeters : 1;
                const hRatio = mapHeightMeters !== 0 ? (rBounds.trY - rBounds.blY) / mapHeightMeters : 1;
                const leftRatio = mapWidthMeters !== 0 ? (rBounds.blX - currentBounds.blX) / mapWidthMeters : 0;
                const topRatio = mapHeightMeters !== 0 ? (currentBounds.trY - rBounds.trY) / mapHeightMeters : 0;

                return (
                  <div className="absolute z-0 pointer-events-none" style={{ left: `${leftRatio * 100}%`, top: `${topRatio * 100}%`, width: `${wRatio * 100}%`, height: `${hRatio * 100}%`, opacity: 0.4 }}>
                    {refF.imageUrl && <img src={refF.imageUrl} className="w-full h-full object-cover rounded-lg filter grayscale sepia" alt="reference" />}
                    {refF.markers.map(m => (
                      <div key={m.id} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: `${m.x * 100}%`, top: `${m.y * 100}%` }}>
                        <div className="w-6 h-6 rounded-full border-2 border-dashed border-cyan-400 bg-cyan-400/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                          <span className="text-[8px] text-cyan-200" style={{ transform: `scale(${1 / Math.max(0.5, mapTransform.scale)})` }}>{m.code}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}

              {currentFloor?.imageUrl && ( <img id="current-map-image" src={currentFloor.imageUrl} alt="Floor Plan" onLoad={resetMapView} className={`select-none pointer-events-none block max-w-none rounded-lg relative z-10 transition-opacity ${referenceFloorId ? 'opacity-70 mix-blend-screen' : 'opacity-100'}`} /> )}
              
              <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" style={{ overflow: 'visible' }}>
                <defs>
                  <marker id="arrowhead-test" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                    <polygon points="0 0, 6 2, 0 4" fill="#3b82f6" />
                  </marker>
                </defs>

                {currentEdges.map(edge => {
                  const p1 = currentMarkers.find(m => m.id === edge.start) || currentWaypoints.find(w => w.id === edge.start);
                  const p2 = currentMarkers.find(m => m.id === edge.end) || currentWaypoints.find(w => w.id === edge.end);
                  if (p1 && p2) return <line key={edge.id} x1={`${p1.x*100}%`} y1={`${p1.y*100}%`} x2={`${p2.x*100}%`} y2={`${p2.y*100}%`} stroke="#f97316" strokeWidth={3 / Math.max(0.2, mapTransform.scale)} strokeOpacity="0.7" />;
                  return null;
                })}
                {isPathMode && pathStartNodeId && hoverPos && (() => {
                  const p1 = currentMarkers.find(m => m.id === pathStartNodeId) || currentWaypoints.find(w => w.id === pathStartNodeId);
                  if (p1) return <line x1={`${p1.x*100}%`} y1={`${p1.y*100}%`} x2={`${hoverPos.x*100}%`} y2={`${hoverPos.y*100}%`} stroke="#f97316" strokeWidth={3 / Math.max(0.2, mapTransform.scale)} strokeDasharray="6,6" opacity="0.8" className="animate-[dash_0.5s_linear_infinite]" />;
                  return null;
                })()}
                
                {isNavTestMode && navTestPath.length > 0 && navTestPath.map((p, i) => {
                  if (i === navTestPath.length - 1) return null;
                  const nextP = navTestPath[i+1];
                  const elements = [];

                  if (p.fId === activeFloorId && nextP.fId === activeFloorId) {
                    elements.push(<line key={`testline_${i}`} x1={`${p.x*100}%`} y1={`${p.y*100}%`} x2={`${nextP.x*100}%`} y2={`${nextP.y*100}%`} stroke="#3b82f6" strokeWidth={5 / Math.max(0.2, mapTransform.scale)} strokeDasharray="15, 10" markerEnd="url(#arrowhead-test)" className="animate-[dash_1s_linear_infinite] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />);
                  } else if (p.fId === activeFloorId && nextP.fId !== activeFloorId) {
                    elements.push(
                      <g key={`leave_${i}`}>
                        <circle cx={`${p.x*100}%`} cy={`${p.y*100}%`} r={12 / Math.max(0.5, mapTransform.scale)} fill="none" stroke="#ef4444" strokeWidth={3 / Math.max(0.5, mapTransform.scale)}>
                          <animate attributeName="r" from={12 / Math.max(0.5, mapTransform.scale)} to={35 / Math.max(0.5, mapTransform.scale)} dur="1.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx={`${p.x*100}%`} cy={`${p.y*100}%`} r={6 / Math.max(0.5, mapTransform.scale)} fill="#ef4444" />
                        <text x={`${p.x*100}%`} y={`${p.y*100}%`} dy="-20" fill="#ef4444" fontSize={12 / Math.max(0.5, mapTransform.scale)} textAnchor="middle" fontWeight="bold">搭乘至 {nextP.fName}</text>
                      </g>
                    );
                  } else if (p.fId !== activeFloorId && nextP.fId === activeFloorId) {
                    elements.push(
                      <g key={`enter_${i}`}>
                        <circle cx={`${nextP.x*100}%`} cy={`${nextP.y*100}%`} r={12 / Math.max(0.5, mapTransform.scale)} fill="none" stroke="#22c55e" strokeWidth={3 / Math.max(0.5, mapTransform.scale)}>
                          <animate attributeName="r" from={12 / Math.max(0.5, mapTransform.scale)} to={35 / Math.max(0.5, mapTransform.scale)} dur="1.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx={`${nextP.x*100}%`} cy={`${nextP.y*100}%`} r={6 / Math.max(0.5, mapTransform.scale)} fill="#22c55e" />
                        <text x={`${nextP.x*100}%`} y={`${nextP.y*100}%`} dy="-20" fill="#22c55e" fontSize={12 / Math.max(0.5, mapTransform.scale)} textAnchor="middle" fontWeight="bold">來自 {p.fName}</text>
                      </g>
                    );
                  }
                  
                  return <React.Fragment key={`testfrag_${i}`}>{elements}</React.Fragment>;
                })}
              </svg>

              {currentWaypoints.map(wp => {
                const isSelected = selectedWaypointId === wp.id;
                const isPathStart = pathStartNodeId === wp.id;
                const isForeignShaft = wp.isVerticalShaft && wp.sourceFloorId && wp.sourceFloorId !== activeFloorId;
                let bgColor = 'bg-orange-500'; let borderColor = 'border-white'; let shadow = '';
                
                if (wp.isVerticalShaft) bgColor = 'bg-green-500';
                
                if (isPathStart) { bgColor = 'bg-white'; borderColor = isForeignShaft ? 'border-green-500' : 'border-orange-500'; shadow = isForeignShaft ? 'shadow-[0_0_10px_green]' : 'shadow-[0_0_10px_orange]'; } 
                else if (isSelected) { borderColor = 'border-cyan-400 border-2'; shadow = 'shadow-[0_0_10px_cyan]'; }

                return (
                  <div key={wp.id} className={`waypoint-pin absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer ${isSelected ? 'z-40' : ''}`} style={{ left: `${wp.x*100}%`, top: `${wp.y*100}%` }}
                       onPointerDown={(e) => { 
                         e.stopPropagation(); 
                         if (e.button !== 0) return; 
                         if (isPathMode) connectToNode(wp.id); 
                         else if (isToggleShaftMode) {
                           if (!wp.isVerticalShaft) handleToggleVerticalShaft(wp, true, false);
                           setSelectedMarkerId(null); setSelectedWaypointId(wp.id);
                         }
                         else if (!isNavTestMode && !isMeasuring && !isPanning && !isAddMode) {
                           setSelectedMarkerId(null); setSelectedWaypointId(wp.id); setDraggingId(wp.id); e.target.setPointerCapture(e.pointerId);
                         }
                       }} 
                       onPointerUp={(e) => { e.stopPropagation(); e.target.releasePointerCapture(e.pointerId); }}
                       onContextMenu={(e) => { 
                         e.preventDefault(); 
                         if (isPathMode) { deleteNode(wp.id); } 
                         else if (isToggleShaftMode) { if(wp.isVerticalShaft) handleToggleVerticalShaft(wp, false, false); }
                         else if (!isNavTestMode && !isMeasuring && !isAddMode) { setSelectedMarkerId(null); setSelectedWaypointId(wp.id); }
                       }}>
                    <div className={`rounded-full transition-all flex items-center justify-center ${bgColor} ${borderColor} ${shadow}`} style={{ width: `${(isPathStart ? 14 : 10) / Math.max(0.5, mapTransform.scale)}px`, height: `${(isPathStart ? 14 : 10) / Math.max(0.5, mapTransform.scale)}px`, borderWidth: isSelected ? '2px' : '1px' }}>
                        {wp.isVerticalShaft && <ArrowUpDown className={isPathStart ? "text-slate-800" : "text-white"} style={{ width: `${6 / Math.max(0.5, mapTransform.scale)}px`, height: `${6 / Math.max(0.5, mapTransform.scale)}px` }} />}
                    </div>
                  </div>
                );
              })}

              {isNavTestMode && navTestPoints.map((p, i) => {
                if (p.fId !== activeFloorId) return null;
                return (
                  <div key={`testpt_${i}`} className="absolute -translate-x-1/2 -translate-y-1/2 z-[35] pointer-events-none" style={{ left: `${p.x * 100}%`, top: `${p.y * 100}%` }}>
                     <div className="rounded-full bg-blue-500 border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center text-[8px] font-bold text-white" style={{ width: `${16 / Math.max(0.5, mapTransform.scale)}px`, height: `${16 / Math.max(0.5, mapTransform.scale)}px` }}>{i === 0 ? '起' : '終'}</div>
                  </div>
                );
              })}

              {isMeasuring && measurePoints.length > 0 && (
                <div className="absolute inset-0 z-40 pointer-events-none">
                  <svg className="w-full h-full" style={{ overflow: 'visible' }}>
                    {measurePoints.length === 2 && ( <line x1={`${measurePoints[0].x * 100}%`} y1={`${measurePoints[0].y * 100}%`} x2={`${measurePoints[1].x * 100}%`} y2={`${measurePoints[1].y * 100}%`} stroke="#a855f7" strokeWidth={3 / Math.max(0.1, mapTransform.scale)} strokeDasharray="5,5" /> )}
                    {measurePoints.map((p, i) => ( <circle key={i} cx={`${p.x * 100}%`} cy={`${p.y * 100}%`} r={6 / Math.max(0.1, mapTransform.scale)} fill="#a855f7" stroke="#fff" strokeWidth={2 / Math.max(0.1, mapTransform.scale)} /> ))}
                  </svg>
                  {measurePoints.length === 2 && (
                    <div className="absolute bg-purple-900/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-purple-400 shadow-xl whitespace-nowrap" style={{ left: `${(measurePoints[0].x + measurePoints[1].x) * 50}%`, top: `${(measurePoints[0].y + measurePoints[1].y) * 50}%`, transform: `translate(-50%, -150%) scale(${1 / Math.max(0.5, mapTransform.scale)})` }}>
                      {Math.hypot((measurePoints[1].x - measurePoints[0].x) * mapWidthMeters, (measurePoints[1].y - measurePoints[0].y) * mapHeightMeters).toFixed(1)} m
                    </div>
                  )}
                </div>
              )}

              {currentMarkers.map(marker => {
                const linkedFloorNames = marker.isVerticalShaft ? currentBuilding?.floors.filter(f => marker.linkedFloorIds?.includes(f.id)).sort((a,b) => getFloorLevel(b.name) - getFloorLevel(a.name)).map(f => f.name).join(', ') : '';

                return (
                <div key={marker.id} className={`marker-pin absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group z-50 ${selectedMarkerId === marker.id ? 'z-[60]' : ''} ${pathStartNodeId === marker.id ? 'scale-125' : ''}`} style={{ left: `${marker.x * 100}%`, top: `${marker.y * 100}%` }} 
                     onPointerDown={(e) => { 
                       e.stopPropagation(); 
                       if (e.button !== 0) return; 
                       if(isPathMode) { connectToNode(marker.id); } 
                       else if(isToggleShaftMode) {
                         if (!marker.isVerticalShaft) handleToggleVerticalShaft(marker, true, true);
                         setSelectedWaypointId(null); setSelectedMarkerId(marker.id);
                       }
                       else if(!isNavTestMode && !isAddMode && !isMeasuring && !isPanning) { 
                         setSelectedWaypointId(null); setDraggingId(marker.id); setSelectedMarkerId(marker.id); e.target.setPointerCapture(e.pointerId); 
                       } 
                     }} 
                     onPointerUp={(e) => { e.stopPropagation(); e.target.releasePointerCapture(e.pointerId); }}
                     onContextMenu={(e) => { 
                       e.preventDefault(); 
                       if (isPathMode) { deleteNode(marker.id); } 
                       else if (isToggleShaftMode) { if(marker.isVerticalShaft) handleToggleVerticalShaft(marker, false, true); }
                       else if (!isNavTestMode && !isMeasuring && !isAddMode) { setSelectedWaypointId(null); setSelectedMarkerId(marker.id); }
                     }}>
                  <div className="relative pointer-events-none">
                    <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${selectedMarkerId === marker.id ? 'bg-cyan-500 border-white text-slate-950 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.8)]' : marker.enabled ? (marker.isVerticalShaft ? 'bg-purple-600 border-purple-400 text-white' : 'bg-slate-800 border-cyan-500/50 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400') : 'bg-slate-900 border-slate-700 text-slate-600 opacity-70'} ${pathStartNodeId === marker.id ? 'border-orange-500 shadow-[0_0_15px_orange]' : ''}`}>
                      {marker.isVerticalShaft ? <ArrowUpDown className="w-3.5 h-3.5" style={{ transform: `scale(${1 / Math.max(0.5, mapTransform.scale)})` }}/> : <span className="text-[10px] md:text-xs font-bold" style={{ transform: `scale(${1 / Math.max(0.5, mapTransform.scale)})` }}>{marker.code}</span>}
                    </div>
                    <div className={`absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] md:border-l-[6px] md:border-r-[6px] md:border-t-[8px] border-l-transparent border-r-transparent transition-all ${selectedMarkerId === marker.id ? 'border-t-white' : marker.enabled ? (marker.isVerticalShaft ? 'border-t-purple-400' : 'border-t-cyan-500/50 group-hover:border-t-cyan-400') : 'border-t-slate-700 opacity-70'} ${pathStartNodeId === marker.id ? 'border-t-orange-500' : ''}`} />
                  </div>
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-3 whitespace-nowrap px-1.5 py-0.5 md:px-2 md:py-1 bg-slate-900 border text-[10px] md:text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg ${selectedMarkerId === marker.id ? 'opacity-100 border-cyan-500 text-cyan-400' : marker.enabled ? 'border-slate-700 text-slate-300' : 'border-slate-800 text-slate-500'}`} style={{ transform: `scale(${1 / Math.max(0.5, mapTransform.scale)})`, transformOrigin: 'top center' }}>
                    {marker.title || '未命名'} {marker.isVerticalShaft && <span className="text-purple-400 block mt-0.5">(貫通: {linkedFloorNames})</span>}
                  </div>
                </div>
              )})}
            </div>

            {isToggleShaftMode && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-green-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center pointer-events-auto z-50">
                <ArrowUpDown className="w-5 h-5 mr-3 shrink-0" /> 
                <div className="flex flex-col">
                  <span>點擊既有節點指定為「跨樓層轉折點」，右鍵取消。</span>
                  <span className="text-green-200 font-normal">指定後將自動開啟右側面板，請勾選要連通的樓層。</span>
                </div>
              </div>
            )}

            {isPathMode && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-orange-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(249,115,22,0.5)] flex items-center pointer-events-auto z-50">
                <MousePointer2 className="w-5 h-5 mr-3 shrink-0" /> 
                <div className="flex flex-col">
                  <span>點擊空處建立轉折點與連線路網 (AR 標籤不須強迫連線)。</span>
                  <span className="text-orange-200 font-normal">點擊「目前發光點」或按 ESC 中斷畫線。右鍵刪除節點。</span>
                </div>
              </div>
            )}

            {isNavTestMode && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-blue-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center pointer-events-auto z-50">
                <Activity className="w-5 h-5 mr-3 shrink-0 animate-pulse" /> 
                <div className="flex flex-col">
                  <span>路網分析測試模式：已啟用自動吸附演算</span>
                  <span className="text-blue-200 font-normal">請在地圖上任意點擊兩處，系統將模擬導航並畫出藍色最佳路徑。</span>
                </div>
              </div>
            )}

            {!currentFloor?.imageUrl && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-slate-500 pointer-events-none px-4"><Map className="w-12 h-12 mx-auto mb-3 opacity-50 text-cyan-500/30" /><p className="text-base md:text-lg mb-1">尚未載入 {currentBuilding?.name} - {currentFloor?.name} 的平面圖</p><p className="text-xs">點擊右側工具列「上傳底圖」</p></div>
            )}
            
            {currentFloor?.imageUrl && scaleBarWidthPx > 0 && (
              <div onClick={() => setBoundsModal({ isOpen: true, blX: currentBounds.blX, blY: currentBounds.blY, trX: currentBounds.trX, trY: currentBounds.trY })} className="absolute top-20 right-3 md:top-4 md:right-20 z-40 bg-slate-900/80 backdrop-blur-sm border border-slate-700 p-2.5 rounded-lg shadow-lg cursor-pointer hover:bg-slate-800 transition-colors" title="點擊校正全域座標">
                <span className="text-[10px] text-cyan-400 font-bold mb-1.5 flex items-center"><Target className="w-3 h-3 mr-1"/> 比例尺: {scaleBarMeters} m</span>
                <div className="h-1.5 bg-cyan-500/50 border-x-2 border-cyan-400" style={{ width: `${scaleBarWidthPx}px` }}></div>
              </div>
            )}

            {currentFloor?.imageUrl && (
              <div className="absolute bottom-28 right-3 md:bottom-4 md:right-4 flex flex-col space-y-2 z-40">
                <button onClick={() => setMapTransform(prev => ({...prev, scale: Math.min(10, prev.scale * 1.2)}))} className="p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors"><ZoomIn className="w-5 h-5"/></button>
                <button onClick={() => setMapTransform(prev => ({...prev, scale: Math.max(0.1, prev.scale / 1.2)}))} className="p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors"><ZoomOut className="w-5 h-5"/></button>
                <button onClick={resetMapView} className="p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors mt-1"><Maximize className="w-5 h-5"/></button>
              </div>
            )}
          </div>
        </div>
      )}

      {boundsModal.isOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-blue-900/50 rounded-xl w-full max-w-md p-6">
            <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center"><Target className="w-5 h-5 mr-2" /> 樓層實體座標與比例尺設定</h3>
            <p className="text-slate-400 text-xs mb-4 leading-relaxed">設定此樓層對應的真實物理座標 (公尺)。<br/>修改差值即等同設定這張圖片在真實空間的總寬度與總長度。</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-3 p-3 bg-slate-950 rounded border border-slate-800">
                <h4 className="text-xs font-bold text-slate-300">↙️ 左下角 (Bottom-Left)</h4>
                <div><label className="text-[10px] text-slate-500">X 座標 (m)</label><input type="number" value={boundsModal.blX} onChange={e => setBoundsModal({...boundsModal, blX: parseFloat(e.target.value)||0})} className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1" /></div>
                <div><label className="text-[10px] text-slate-500">Y 座標 (m)</label><input type="number" value={boundsModal.blY} onChange={e => setBoundsModal({...boundsModal, blY: parseFloat(e.target.value)||0})} className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1" /></div>
              </div>
              <div className="space-y-3 p-3 bg-slate-950 rounded border border-slate-800">
                <h4 className="text-xs font-bold text-slate-300">↗️ 右上角 (Top-Right)</h4>
                <div><label className="text-[10px] text-slate-500">X 座標 (m)</label><input type="number" value={boundsModal.trX} onChange={e => setBoundsModal({...boundsModal, trX: parseFloat(e.target.value)||0})} className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1" /></div>
                <div><label className="text-[10px] text-slate-500">Y 座標 (m)</label><input type="number" value={boundsModal.trY} onChange={e => setBoundsModal({...boundsModal, trY: parseFloat(e.target.value)||0})} className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1" /></div>
              </div>
            </div>
            <button onClick={() => {
              setBuildings(prev => prev.map(b => b.id === activeBuildingId ? { ...b, floors: b.floors.map(f => f.id === activeFloorId ? { ...f, bounds: { blX: boundsModal.blX, blY: boundsModal.blY, trX: boundsModal.trX, trY: boundsModal.trY } } : f) } : b));
              setBoundsModal({ isOpen: false }); setAlertModal({ isOpen: true, message: '樓層座標已更新！' });
            }} className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg">儲存套用</button>
          </div>
        </div>
      )}

      {promptModal.isOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4">{promptModal.title}</h3>
            <input autoFocus type="text" placeholder={promptModal.placeholder} defaultValue={promptModal.defaultValue} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 mb-6" onKeyDown={(e) => { if (e.key === 'Enter') { promptModal.onSubmit(e.target.value); setPromptModal({ isOpen: false }); } }} />
            <div className="flex space-x-3 justify-end">
              <button onClick={() => setPromptModal({ isOpen: false })} className="px-5 py-2 bg-slate-800 text-slate-300 rounded-lg">取消</button>
              <button onClick={(e) => { promptModal.onSubmit(e.target.parentElement.previousElementSibling.value); setPromptModal({ isOpen: false }); }} className="px-5 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg">確定</button>
            </div>
          </div>
        </div>
      )}

      {confirmModal.isOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-red-900/50 rounded-xl w-full max-w-sm p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-red-400 mb-2">{confirmModal.title}</h3>
            <p className="text-slate-300 text-sm mb-6">{confirmModal.message}</p>
            <div className="flex space-x-3 justify-end">
              <button onClick={() => setConfirmModal({ isOpen: false })} className="px-5 py-2 bg-slate-800 text-slate-300 rounded-lg">取消</button>
              <button onClick={() => { confirmModal.onConfirm(); setConfirmModal({ isOpen: false }); }} className="px-5 py-2 bg-red-500 text-white font-bold rounded-lg">確定執行</button>
            </div>
          </div>
        </div>
      )}

      {alertModal.isOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-yellow-500/50 rounded-xl w-full max-w-sm p-6 shadow-2xl text-center">
            <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">系統提示</h3>
            <p className="text-slate-300 text-sm mb-6">{alertModal.message}</p>
            <button onClick={() => setAlertModal({ isOpen: false })} className="w-full px-5 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg">我知道了</button>
          </div>
        </div>
      )}

      {permissionsModal && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[200] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md p-8 shadow-2xl text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <div className="bg-cyan-500/20 p-4 rounded-full border border-cyan-500/30"><Camera className="w-10 h-10 text-cyan-400" /></div>
              <div className="bg-purple-500/20 p-4 rounded-full border border-purple-500/30"><Smartphone className="w-10 h-10 text-purple-400" /></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">歡迎使用 AR 導覽</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">為了提供最佳的空間定位體驗，本系統需要使用您的<b>「相機」</b>進行掃描，以及<b>「陀螺儀」</b>來偵測手機方位。請在下一步允許存取。</p>
            <button onClick={requestPermissions} className="w-full px-6 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl text-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <CheckCircle2 className="w-5 h-5 mr-2" /> 允許權限並開始
            </button>
          </div>
        </div>
      )}
      
      <div className={`fixed inset-x-0 bottom-0 z-50 max-h-[86dvh] rounded-t-2xl border-t border-slate-800 bg-slate-900 shadow-2xl md:inset-x-auto md:inset-y-0 md:right-0 md:max-h-none md:w-80 md:rounded-none md:border-t-0 md:border-l lg:w-96 flex flex-col shrink-0 transition-transform duration-300 ${activeTab === 'map' && (selectedMarkerId || selectedWaypointId) ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-y-0 md:translate-x-full absolute invisible'}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur shrink-0">
          <h2 className="font-bold text-slate-200">
            {selectedMarkerId ? 'AR 點位設定' : '轉折點 (Waypoint) 設定'}
          </h2>
          <button onClick={() => { setSelectedMarkerId(null); setSelectedWaypointId(null); }} className="text-slate-400 hover:text-white p-2"><X/></button>
        </div>
        
        {selectedMarker && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-5 pb-8">
              <div className="space-y-3">
                <div className="flex space-x-3">
                  <div className="flex-1"><label className="block text-[11px] text-slate-400 mb-1">代號</label><input type="text" value={selectedMarker.code} onChange={(e) => handleMarkerUpdate(selectedMarker.id, 'code', e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200" /></div>
                  <div className="flex-[2]"><label className="block text-[11px] text-slate-400 mb-1">標題</label><input type="text" value={selectedMarker.title} onChange={(e) => handleMarkerUpdate(selectedMarker.id, 'title', e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200" /></div>
                </div>
                <div><label className="block text-[11px] text-slate-400 mb-1">描述說明</label><textarea value={selectedMarker.description || ''} onChange={(e) => handleMarkerUpdate(selectedMarker.id, 'description', e.target.value)} rows={2} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 resize-none" /></div>
                <div className="flex space-x-3">
                  <div className="flex-1"><label className="block text-[11px] text-slate-400 mb-1">相對 X (%)</label><input type="number" step="0.1" value={+(selectedMarker.x * 100).toFixed(1)} onChange={(e) => handleMarkerUpdate(selectedMarker.id, 'x', Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)) / 100)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200" /></div>
                  <div className="flex-1"><label className="block text-[11px] text-slate-400 mb-1">相對 Y (%)</label><input type="number" step="0.1" value={+(selectedMarker.y * 100).toFixed(1)} onChange={(e) => handleMarkerUpdate(selectedMarker.id, 'y', Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)) / 100)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200" /></div>
                </div>
                
                <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-purple-400 cursor-pointer flex items-center" htmlFor="toggle-shaft-m"><ArrowUpDown className="w-4 h-4 mr-1.5"/> 設為垂直貫通節點</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" id="toggle-shaft-m" checked={selectedMarker.isVerticalShaft || false} onChange={(e) => handleToggleVerticalShaft(selectedMarker, e.target.checked, true)} className="sr-only peer" />
                      <div className="w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-500 peer-checked:after:bg-white shadow-inner"></div>
                    </label>
                  </div>
                  {selectedMarker.isVerticalShaft ? (
                    <div className="pt-2 border-t border-slate-800/50">
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {currentBuilding?.floors.slice().sort((a,b) => getFloorLevel(b.name) - getFloorLevel(a.name)).map(f => {
                          const isLinked = selectedMarker.linkedFloorIds?.includes(f.id); const isCurrent = f.id === activeFloorId;
                          return (
                            <label key={f.id} className={`flex items-center p-2 rounded-lg border transition-colors ${isLinked ? 'bg-purple-500/20 border-purple-500/50 text-purple-300' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer'}`}>
                              <input type="checkbox" className="mr-2 accent-purple-500 rounded" disabled={isCurrent} checked={isLinked || isCurrent} onChange={(e) => handleToggleShaftFloor(selectedMarker, f.id, e.target.checked, true)} />
                              <span className="text-xs font-bold">{f.name} {isCurrent && '(目前)'}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="pt-2 border-t border-slate-800/50">
                      <label className="block text-[11px] text-slate-400 mb-1">強制導引方向 (一般節點用)</label>
                      <select value={selectedMarker.arrowDirection || 'none'} onChange={(e) => handleMarkerUpdate(selectedMarker.id, 'arrowDirection', e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200 focus:border-cyan-500">
                        <option value="none">無/自動計算方向 (Auto)</option><option value="up">上 (Up)</option><option value="down">下 (Down)</option><option value="left">左 (Left)</option><option value="right">右 (Right)</option>
                      </select>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between pt-1">
                  <label className="text-xs font-medium text-slate-300 cursor-pointer" htmlFor="toggle-enable-m">啟用此點位辨識</label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="toggle-enable-m" checked={selectedMarker.enabled} onChange={(e) => handleMarkerUpdate(selectedMarker.id, 'enabled', e.target.checked)} className="sr-only peer" />
                    <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-white shadow-inner"></div>
                  </label>
                </div>
              </div>
              
              <hr className="border-slate-800" />
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-cyan-400">Target Image 辨識圖</h3>
                  <input type="file" ref={markerImageInputRef} onChange={handleMarkerImageUpload} className="hidden" accept="image/*" />
                  <button onClick={() => markerImageInputRef.current.click()} className="text-[10px] text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors border border-slate-700">上傳/更換</button>
                </div>
                <div className="border border-slate-800 bg-slate-950 rounded-xl p-2 flex items-center justify-center min-h-[140px]">
                  {selectedMarker.imageUrl ? ( <img src={selectedMarker.imageUrl} alt="Target" className="max-w-full max-h-40 object-contain rounded" /> ) : ( <div className="text-center text-slate-600"><Camera className="w-8 h-8 mx-auto mb-2 opacity-50" /><span className="text-xs">未上傳辨識圖</span></div> )}
                </div>
              </div>
              <ARTestIntegration marker={selectedMarker} onUpdateStatus={(status) => handleMarkerUpdate(selectedMarker.id, 'recognitionStatus', status)} showAlert={(msg) => setAlertModal({ isOpen: true, message: msg })} />
            </div>
            
            <div className="p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe">
              {isConfirmingDelete ? (
                <div className="flex space-x-2 animate-in fade-in slide-in-from-bottom-2">
                  <button onClick={() => setIsConfirmingDelete(false)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm">取消</button>
                  <button onClick={() => deleteNode(selectedMarker.id)} className="flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm">確定刪除</button>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <button onClick={() => setIsConfirmingDelete(true)} className="flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20"><Trash2 className="w-5 h-5" /></button>
                  <button onClick={() => setSelectedMarkerId(null)} className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm">完成設定</button>
                </div>
              )}
            </div>
          </>
        )}

        {selectedWaypoint && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-5 pb-8">
              <div className="space-y-3">
                <div className="flex space-x-3">
                  <div className="flex-1"><label className="block text-[11px] text-slate-400 mb-1">相對 X (%)</label><input type="number" step="0.1" value={+(selectedWaypoint.x * 100).toFixed(1)} onChange={(e) => handleWaypointUpdate(selectedWaypoint.id, 'x', Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)) / 100)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200" /></div>
                  <div className="flex-1"><label className="block text-[11px] text-slate-400 mb-1">相對 Y (%)</label><input type="number" step="0.1" value={+(selectedWaypoint.y * 100).toFixed(1)} onChange={(e) => handleWaypointUpdate(selectedWaypoint.id, 'y', Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)) / 100)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200" /></div>
                </div>
                
                <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3 mt-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-green-400 cursor-pointer flex items-center" htmlFor="toggle-shaft-wp">
                      <ArrowUpDown className="w-4 h-4 mr-1.5"/> 設為垂直貫通轉折點
                    </label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" id="toggle-shaft-wp" checked={selectedWaypoint.isVerticalShaft || false} onChange={(e) => handleToggleVerticalShaft(selectedWaypoint, e.target.checked, false)} className="sr-only peer" />
                      <div className="w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white shadow-inner"></div>
                    </label>
                  </div>
                  {selectedWaypoint.isVerticalShaft && (
                    <div className="pt-2 border-t border-slate-800/50">
                      <p className="text-[10px] text-slate-400 mb-2 leading-relaxed">勾選後，此點位將會以綠色顯示於其他樓層，您可以在該樓層直接將其與路網連線，系統將自動支援跨樓層導航。</p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {currentBuilding?.floors.slice().sort((a,b) => getFloorLevel(b.name) - getFloorLevel(a.name)).map(f => {
                          const isLinked = selectedWaypoint.linkedFloorIds?.includes(f.id); const isCurrent = f.id === activeFloorId;
                          return (
                            <label key={f.id} className={`flex items-center p-2 rounded-lg border transition-colors ${isLinked ? 'bg-green-500/20 border-green-500/50 text-green-300' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer'}`}>
                              <input type="checkbox" className="mr-2 accent-green-500 rounded" disabled={isCurrent} checked={isLinked || isCurrent} onChange={(e) => handleToggleShaftFloor(selectedWaypoint, f.id, e.target.checked, false)} />
                              <span className="text-xs font-bold">{f.name} {isCurrent && '(目前)'}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe">
              {isConfirmingDelete ? (
                <div className="flex space-x-2 animate-in fade-in slide-in-from-bottom-2">
                  <button onClick={() => setIsConfirmingDelete(false)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm">取消</button>
                  <button onClick={() => deleteNode(selectedWaypoint.id)} className="flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm">確定刪除</button>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <button onClick={() => setIsConfirmingDelete(true)} className="flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20"><Trash2 className="w-5 h-5" /></button>
                  <button onClick={() => setSelectedWaypointId(null)} className="flex-1 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] text-sm">完成設定</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <div onClick={onClick} className={`flex items-center p-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-cyan-500/10 text-cyan-400 font-bold shadow-inner' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
      <div className={`w-5 h-5 shrink-0 ${active ? 'scale-110' : ''}`}>{icon}</div><span className="ml-3 text-sm md:text-base flex-1">{label}</span>
    </div>
  );
}

function StatusBadge({ status }) {
  const statusConfig = {
    untested: { color: 'text-slate-400', border: 'border-slate-700', bg: 'bg-slate-800/50', text: '尚未測試', icon: null },
    testing: { color: 'text-yellow-400', border: 'border-yellow-500/50', bg: 'bg-yellow-500/10', text: '測試中...', icon: <span className="animate-spin mr-1 w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full inline-block"></span> },
    success: { color: 'text-green-400', border: 'border-green-500/50', bg: 'bg-green-500/10', text: '高辨識度', icon: <CheckCircle2 className="w-3 h-3 mr-1 inline" /> },
    unstable: { color: 'text-orange-400', border: 'border-orange-500/50', bg: 'bg-orange-500/10', text: '不穩定', icon: <AlertTriangle className="w-3 h-3 mr-1 inline" /> },
  };
  const c = statusConfig[status] || statusConfig.untested;
  return <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${c.bg} ${c.border} ${c.color}`}>{c.icon} {c.text}</span>;
}

function ARTestIntegration({ marker, onUpdateStatus, showAlert }) {
  const [engineState, setEngineState] = useState('idle'); 
  const [stats, setStats] = useState({ fps: 0, matches: 0, inliers: 0, status: 'OFFLINE' });
  const videoRef = useRef(null); const canvasRef = useRef(null); const refImgRef = useRef(null); const streamRef = useRef(null); const animFrameRef = useRef(null);
  const cvPointers = useRef({ refGray: null, refKeypoints: null, refDescriptors: null, orbDetector: null, matcher: null });
  const evaluationRef = useRef({ frames: 0, lockedFrames: 0 });

  useEffect(() => {
    if (window.cv && window.cv.Mat) { setEngineState('ready'); return; }
    setEngineState('loading'); window.Module = { onRuntimeInitialized: () => { setEngineState('ready'); } };
    if (!document.getElementById('opencv-script')) {
      const script = document.createElement('script'); script.id = 'opencv-script'; script.src = 'https://docs.opencv.org/3.4.16/opencv.js'; script.async = true; document.body.appendChild(script);
    }
  }, []);

  const initReferenceFeatures = () => {
    if (!window.cv || !refImgRef.current || !marker.imageUrl) return false;
    try {
      const cv = window.cv; const pointers = cvPointers.current;
      if (pointers.refGray) pointers.refGray.delete(); if (pointers.refKeypoints) pointers.refKeypoints.delete(); if (pointers.refDescriptors) pointers.refDescriptors.delete(); if (pointers.orbDetector) pointers.orbDetector.delete(); if (pointers.matcher) pointers.matcher.delete();
      const tempCanvas = document.createElement('canvas'); const tempCtx = tempCanvas.getContext('2d'); const img = refImgRef.current; const maxDim = 320; let w = img.naturalWidth || img.width, h = img.naturalHeight || img.height;
      if (w > maxDim || h > maxDim) { if (w > h) { h = Math.round((h * maxDim) / w); w = maxDim; } else { w = Math.round((w * maxDim) / h); h = maxDim; } }
      tempCanvas.width = w; tempCanvas.height = h; tempCtx.drawImage(img, 0, 0, w, h);
      const srcMat = cv.imread(tempCanvas); const grayMat = new cv.Mat(); cv.cvtColor(srcMat, grayMat, cv.COLOR_RGBA2GRAY);
      const orb = new cv.ORB(); const kp = new cv.KeyPointVector(); const des = new cv.Mat(); orb.detectAndCompute(grayMat, new cv.Mat(), kp, des); const matcher = new cv.BFMatcher(cv.NORM_HAMMING, true);
      cvPointers.current = { refGray: grayMat, refKeypoints: kp, refDescriptors: des, orbDetector: orb, matcher: matcher }; srcMat.delete();
      return true;
    } catch (err) { return false; }
  };

  const checkConvexity = (pts) => {
    if (pts.length < 4) return false;
    let signs = [];
    for (let i = 0; i < 4; i++) {
      let dx1 = pts[(i+1)%4].x - pts[i].x, dy1 = pts[(i+1)%4].y - pts[i].y; let dx2 = pts[(i+2)%4].x - pts[(i+1)%4].x, dy2 = pts[(i+2)%4].y - pts[(i+1)%4].y; signs.push((dx1*dy2 - dy1*dx2) > 0);
    }
    return signs.every(s => s === signs[0]);
  };

  const startTest = async () => {
    if (!marker.imageUrl) { showAlert("請先上傳辨識圖片！"); return; }
    if (engineState !== 'ready') return;
    setEngineState('testing'); onUpdateStatus('testing'); evaluationRef.current = { frames: 0, lockedFrames: 0 };
    if (!initReferenceFeatures()) { showAlert("特徵提取失敗，請嘗試更換辨識圖片。"); setEngineState('ready'); return; }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showAlert("⚠️ 無法啟動相機！請確認環境是否支援。"); setEngineState('ready'); return;
    }

    try {
      if (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function') {
        try {
          await window.DeviceOrientationEvent.requestPermission();
        } catch (permissionError) {
          console.warn('Device orientation permission was not granted.', permissionError);
        }
      }
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment', width: { ideal: 640 } }, audio: false });
      streamRef.current = stream; videoRef.current.srcObject = stream; videoRef.current.play();
      videoRef.current.onloadedmetadata = () => { canvasRef.current.width = videoRef.current.videoWidth; canvasRef.current.height = videoRef.current.videoHeight; startProcessingLoop(); };
    } catch (err) { showAlert("無法存取相機。"); setEngineState('ready'); }
  };

  const stopTest = () => {
    if (animFrameRef.current) { cancelAnimationFrame(animFrameRef.current); animFrameRef.current = null; }
    if (streamRef.current) { streamRef.current.getTracks().forEach(track => track.stop()); streamRef.current = null; }
    if (videoRef.current) videoRef.current.srcObject = null;
    if (evaluationRef.current.frames > 30) {
      const successRate = evaluationRef.current.lockedFrames / evaluationRef.current.frames;
      if (successRate > 0.2) onUpdateStatus('success'); else onUpdateStatus('unstable');
    } else if (evaluationRef.current.frames > 0) { onUpdateStatus('untested'); }
    setEngineState('ready');
    if (canvasRef.current) { const ctx = canvasRef.current.getContext('2d'); ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); }
  };

  useEffect(() => {
    return () => { stopTest(); const p = cvPointers.current; if (p.refGray) { p.refGray.delete(); p.refKeypoints.delete(); p.refDescriptors.delete(); p.orbDetector.delete(); p.matcher.delete(); } };
  }, []);

  const startProcessingLoop = () => {
    const cv = window.cv; const pointers = cvPointers.current; const video = videoRef.current; const canvas = canvasRef.current; const ctx = canvas.getContext('2d');
    let lastTime = performance.now(); let smoothedCorners = null; const lerpFactor = 0.15; let cvProcessThrottle = 0; const THROTTLE_RATE = 3; let detectionGraceCounter = 0; const GRACE_MAX = 10; let lastCVTargetCorners = null;

    const loop = () => {
      if (!video || !video.srcObject || !pointers.refDescriptors) return;
      const currentTime = performance.now(); const fps = Math.round(1000 / (currentTime - lastTime)); lastTime = currentTime;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      let currentMatches = 0, currentInliers = 0, frameTargetFound = false, frameTargetCorners = null;
      let shouldRunCV = (cvProcessThrottle % THROTTLE_RATE === 0); cvProcessThrottle++;

      if (shouldRunCV) {
        try {
          const srcMat = cv.imread(canvas); const grayMat = new cv.Mat(); cv.cvtColor(srcMat, grayMat, cv.COLOR_RGBA2GRAY);
          const frameKp = new cv.KeyPointVector(), frameDes = new cv.Mat(); pointers.orbDetector.detectAndCompute(grayMat, new cv.Mat(), frameKp, frameDes);

          if (!frameDes.empty() && frameDes.rows > 0) {
            const matches = new cv.DMatchVector(); pointers.matcher.match(pointers.refDescriptors, frameDes, matches);
            let matchesList = []; for (let i = 0; i < matches.size(); i++) matchesList.push(matches.get(i));
            matchesList.sort((a, b) => a.distance - b.distance); let goodMatches = matchesList.filter(m => m.distance <= 50).slice(0, 60); currentMatches = goodMatches.length;

            if (goodMatches.length >= 12) {
              const srcPts = [], dstPts = [];
              for (let i = 0; i < goodMatches.length; i++) {
                let m = goodMatches[i]; srcPts.push(pointers.refKeypoints.get(m.queryIdx).pt.x, pointers.refKeypoints.get(m.queryIdx).pt.y); dstPts.push(frameKp.get(m.trainIdx).pt.x, frameKp.get(m.trainIdx).pt.y);
              }
              const srcPtsMat = cv.matFromArray(srcPts.length / 2, 1, cv.CV_32FC2, srcPts); const dstPtsMat = cv.matFromArray(dstPts.length / 2, 1, cv.CV_32FC2, dstPts); const mask = new cv.Mat();
              const homography = cv.findHomography(srcPtsMat, dstPtsMat, cv.RANSAC, 4.0, mask);
              for (let i = 0; i < mask.rows; i++) { if (mask.data[i] === 1) currentInliers++; }
              
              if (!homography.empty() && currentInliers >= 10 && (currentInliers / goodMatches.length) >= 0.35) {
                const refW = pointers.refGray.cols, refH = pointers.refGray.rows; const objCorners = [0, 0, 1, refW, 0, 1, refW, refH, 1, 0, refH, 1]; let pts = [];
                for (let i = 0; i < 4; i++) {
                  let x = objCorners[i * 3], y = objCorners[i * 3 + 1];
                  let h0 = homography.data64F[0]*x + homography.data64F[1]*y + homography.data64F[2], h1 = homography.data64F[3]*x + homography.data64F[4]*y + homography.data64F[5], h2 = homography.data64F[6]*x + homography.data64F[7]*y + homography.data64F[8];
                  pts.push({ x: h0 / h2, y: h1 / h2 });
                }
                if (checkConvexity(pts)) { frameTargetCorners = pts; frameTargetFound = true; }
              }
              srcPtsMat.delete(); dstPtsMat.delete(); mask.delete(); homography.delete();
            }
            matches.delete();
          }
          srcMat.delete(); grayMat.delete(); frameKp.delete(); frameDes.delete();
        } catch (err) {}

        if (frameTargetFound) { lastCVTargetCorners = frameTargetCorners; detectionGraceCounter = GRACE_MAX; } 
        else { if (detectionGraceCounter > 0) detectionGraceCounter--; else lastCVTargetCorners = null; }
      }

      const isLocked = (lastCVTargetCorners !== null);
      if (isLocked) {
        if (!smoothedCorners) { smoothedCorners = JSON.parse(JSON.stringify(lastCVTargetCorners)); } 
        else {
          for (let i = 0; i < 4; i++) { smoothedCorners[i].x = smoothedCorners[i].x * (1 - lerpFactor) + lastCVTargetCorners[i].x * lerpFactor; smoothedCorners[i].y = smoothedCorners[i].y * (1 - lerpFactor) + lastCVTargetCorners[i].y * lerpFactor; }
        }
        ctx.strokeStyle = '#00ffcc'; ctx.lineWidth = 3; ctx.shadowBlur = 10; ctx.shadowColor = '#00ffcc';
        ctx.beginPath(); ctx.moveTo(smoothedCorners[0].x, smoothedCorners[0].y); ctx.lineTo(smoothedCorners[1].x, smoothedCorners[1].y); ctx.lineTo(smoothedCorners[2].x, smoothedCorners[2].y); ctx.lineTo(smoothedCorners[3].x, smoothedCorners[3].y); ctx.closePath(); ctx.stroke();
        ctx.shadowBlur = 0;
      } else {
        smoothedCorners = null;
        const boxSize = Math.min(canvas.width, canvas.height) * 0.5; const x = (canvas.width - boxSize) / 2, y = (canvas.height - boxSize) / 2;
        ctx.strokeStyle = 'rgba(255, 70, 70, 0.5)'; ctx.lineWidth = 2; ctx.strokeRect(x, y, boxSize, boxSize);
      }

      setStats(prev => ({ fps, matches: shouldRunCV ? currentMatches : prev.matches, inliers: shouldRunCV ? currentInliers : prev.inliers, status: isLocked ? 'LOCKED' : 'SEARCHING' }));
      evaluationRef.current.frames++; if (isLocked) evaluationRef.current.lockedFrames++;
      animFrameRef.current = requestAnimationFrame(loop);
    };

    loop();
  };

  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-md">
      {marker.imageUrl && <img ref={refImgRef} src={marker.imageUrl} alt="ref" className="hidden" />}
      <div className="bg-slate-900/80 px-3 py-2 border-b border-slate-800 flex justify-between items-center">
        <h3 className="text-[10px] font-bold text-slate-300 tracking-wider">AR ENGINE TESTER</h3>
        <StatusBadge status={marker.recognitionStatus} />
      </div>
      <div className="p-3 space-y-3">
        <div className="relative bg-[#05070f] border border-slate-800 rounded-lg aspect-video w-full min-h-[160px] flex flex-col items-center justify-center font-mono text-[10px] text-cyan-500/70 overflow-hidden shadow-inner">
          <video ref={videoRef} playsInline muted className="hidden"></video>
          <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full object-cover ${engineState !== 'testing' && 'hidden'}`}></canvas>
          {engineState === 'testing' && (<><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,24,48,0.1)_0%,rgba(10,13,20,0.7)_100%)] pointer-events-none z-10" /><div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#00ffcc] animate-[scan_2s_linear_infinite] z-10" /></>)}
          {(engineState === 'idle' || engineState === 'ready' || engineState === 'loading') && (
            <div className="text-center z-20">
              {engineState === 'loading' ? (<div className="animate-pulse text-yellow-500"><span className="animate-spin inline-block w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full mr-2"></span>載入中...</div>) : (<><Camera className="w-8 h-8 mx-auto mb-2 opacity-30" /><p className="text-xs">READY</p></>)}
            </div>
          )}
          {engineState === 'testing' && (
             <div className="absolute top-2 left-3 z-20 flex flex-col space-y-1 text-[10px] text-slate-300 drop-shadow-md">
               <span className={stats.status === 'LOCKED' ? 'text-cyan-400 font-bold' : 'text-red-400 font-bold'}>STATE: {stats.status}</span>
               <span>INLIERS: {stats.inliers}</span>
               <span>FPS: {stats.fps}</span>
             </div>
          )}
        </div>
        {engineState === 'testing' ? ( <button onClick={stopTest} className="w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold transition-colors">停止測試</button> ) : ( <button onClick={startTest} disabled={engineState === 'loading' || !marker.imageUrl} className="w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 transition-colors flex items-center justify-center"><Play className="w-4 h-4 mr-2 text-cyan-400" /> {engineState === 'loading' ? '準備中...' : '實測相機'}</button> )}
      </div>
      <style dangerouslySetInnerHTML={{__html: `@keyframes scan { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(240px); opacity: 0; } }`}} />
    </div>
  );
}

// ==========================================
// 前台導覽引擎 (AR 路徑投影 + Dijkstra)
// ==========================================
function FrontendUserView({ buildings, systemConfig, onMenuClick }) {
  const [engineState, setEngineState] = useState('idle'); 
  const [destinationId, setDestinationId] = useState(null); 
  const [currentLocationId, setCurrentLocationId] = useState(null); 
  const [calculatedPath, setCalculatedPath] = useState([]); 
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [deviceHeading, setDeviceHeading] = useState(0);
  const [arLockStatus, setArLockStatus] = useState('idle');
  const [xrSupport, setXrSupport] = useState('checking');
  const [xrStatus, setXrStatus] = useState('idle');
  const [hasGyro, setHasGyro] = useState(false); // 新增：偵測陀螺儀是否成功作動
  
  const videoRef = useRef(null); const canvasRef = useRef(null); const streamRef = useRef(null); const animFrameRef = useRef(null);
  const xrHostRef = useRef(null);
  const xrSessionRef = useRef(null);
  const xrRendererRef = useRef(null);
  const xrRouteGroupRef = useRef(null);
  const xrHitTestSourceRef = useRef(null);
  const xrReferenceSpaceRef = useRef(null);
  const xrPlacedRef = useRef(false);
  const targetFeaturesRef = useRef([]); const cvPointers = useRef({ matcher: null });
  const headingRef = useRef(0); // 暫存陀螺儀高頻率數值
  const hasGyroRef = useRef(false);
  const calculatedPathRef = useRef([]);
  const graphDataRef = useRef({ nodes: {}, edges: [] });
  const lockedPathOverlayRef = useRef(null);
  const arLockStatusRef = useRef('idle');
  const orientationRef = useRef({ heading: 0, pitch: 0, roll: 0 });

  const graphData = React.useMemo(() => {
    const nodes = {}; const edges = [];
    buildings.forEach(b => b.floors.forEach(f => {
      const bounds = f.bounds || { blX:0, blY:0, trX:100, trY:100 };
      const toPhys = (x, y) => ({ physX: bounds.blX + x * (bounds.trX - bounds.blX), physY: bounds.trY - y * (bounds.trY - bounds.blY) });
      
      f.markers.forEach(m => { if(m.enabled) nodes[m.id] = { ...m, ...toPhys(m.x, m.y), isMarker: true, bId: b.id, fId: f.id, bName: b.name, fName: f.name, bounds }; });
      f.waypoints?.forEach(w => { nodes[w.id] = { ...w, ...toPhys(w.x, w.y), isMarker: false, fId: f.id, bounds }; });
      f.edges?.forEach(e => { edges.push({ ...e, fId: f.id }); });
    }));
    return { nodes, edges };
  }, [buildings]);

  useEffect(() => {
    graphDataRef.current = graphData;
  }, [graphData]);

  useEffect(() => {
    calculatedPathRef.current = calculatedPath;
  }, [calculatedPath]);

  useEffect(() => {
    lockedPathOverlayRef.current = null;
    updateArLockStatus('idle');
  }, [destinationId]);

  const updateArLockStatus = (status) => {
    if (arLockStatusRef.current === status) return;
    arLockStatusRef.current = status;
    setArLockStatus(status);
  };

  useEffect(() => {
    let mounted = true;

    const checkXrSupport = async () => {
      if (!navigator.xr || !window.isSecureContext) {
        if (mounted) setXrSupport('unsupported');
        return;
      }

      try {
        const supported = await navigator.xr.isSessionSupported('immersive-ar');
        if (mounted) setXrSupport(supported ? 'supported' : 'unsupported');
      } catch (error) {
        if (mounted) setXrSupport('unsupported');
      }
    };

    checkXrSupport();
    return () => { mounted = false; };
  }, []);

  const calculateShortestPath = (startId, endId) => {
    const { nodes, edges } = graphData;
    const graph = {}; Object.keys(nodes).forEach(id => { graph[id] = {}; });

    edges.forEach(e => {
      if (nodes[e.start] && nodes[e.end]) {
        const dist = Math.hypot(nodes[e.start].physX - nodes[e.end].physX, nodes[e.start].physY - nodes[e.end].physY);
        graph[e.start][e.end] = dist; graph[e.end][e.start] = dist;
      }
    });

    const shaftGroups = {};
    Object.values(nodes).forEach(n => { if (n.isVerticalShaft && n.shaftId) { if(!shaftGroups[n.shaftId]) shaftGroups[n.shaftId] = []; shaftGroups[n.shaftId].push(n.id); } });
    Object.values(shaftGroups).forEach(group => {
      for(let i=0; i<group.length; i++) { for(let j=i+1; j<group.length; j++) { graph[group[i]][group[j]] = 5; graph[group[j]][group[i]] = 5; } }
    });

    const isNetworkNode = (id) => Object.keys(graph[id]).length > 0;

    const getSnapNode = (nodeId) => {
      if (isNetworkNode(nodeId)) return nodeId;
      const node = nodes[nodeId];
      let minDist = Infinity;
      let snapId = nodeId;
      Object.keys(nodes).forEach(nid => {
        if (nodes[nid].fId === node.fId && isNetworkNode(nid)) {
          const d = Math.hypot(nodes[nid].physX - node.physX, nodes[nid].physY - node.physY);
          if (d < minDist) { minDist = d; snapId = nid; }
        }
      });
      return snapId;
    };

    const snapStartId = getSnapNode(startId);
    const snapEndId = getSnapNode(endId);

    const distances = {}; const prev = {}; const pq = new Set(Object.keys(nodes));
    Object.keys(nodes).forEach(id => { distances[id] = Infinity; prev[id] = null; }); distances[snapStartId] = 0;

    while (pq.size > 0) {
      let minNode = null; pq.forEach(node => { if (minNode === null || distances[node] < distances[minNode]) minNode = node; });
      if (distances[minNode] === Infinity || minNode === snapEndId) break;
      pq.delete(minNode);
      Object.entries(graph[minNode]).forEach(([neighbor, weight]) => {
        if (pq.has(neighbor)) { const alt = distances[minNode] + weight; if (alt < distances[neighbor]) { distances[neighbor] = alt; prev[neighbor] = minNode; } }
      });
    }

    const path = []; let curr = snapEndId;
    while (curr) { path.unshift(curr); curr = prev[curr]; }
    
    if (path.length === 0 || path[0] !== snapStartId) return [];

    if (snapStartId !== startId) path.unshift(startId);
    if (snapEndId !== endId) path.push(endId);

    return path; 
  };

  useEffect(() => {
    if (currentLocationId && destinationId && currentLocationId !== destinationId) setCalculatedPath(calculateShortestPath(currentLocationId, destinationId));
    else setCalculatedPath([]);
  }, [currentLocationId, destinationId, graphData]);

  useEffect(() => {
    if (!window.cv || !window.cv.Mat) {
      setEngineState('loading'); window.Module = { onRuntimeInitialized: () => setEngineState('idle') };
      if (!document.getElementById('opencv-script')) { const s = document.createElement('script'); s.id = 'opencv-script'; s.src = 'https://docs.opencv.org/3.4.16/opencv.js'; s.async = true; document.body.appendChild(s); }
    } else { setEngineState('idle'); }

    let currentDisplayHeading = 0; // 紀錄當前的累積角度，避免 359 -> 1 發生逆轉

    // 監聽手機陀螺儀方向 (高頻觸發)
    const handleOrientation = (e) => {
      let heading = null;
      if (e.webkitCompassHeading !== undefined && e.webkitCompassHeading !== null) { // iOS 專用真實羅盤
        heading = e.webkitCompassHeading;
      } else if (e.alpha !== null && e.alpha !== undefined) { // Android / 其他裝置相對陀螺儀
        heading = 360 - e.alpha;
      }
      
      if (heading !== null) {
        orientationRef.current = {
          heading,
          pitch: e.beta || 0,
          roll: e.gamma || 0
        };
        headingRef.current = heading;
        if (!hasGyroRef.current) {
          hasGyroRef.current = true;
          setHasGyro(true); // 一旦成功抓到第一次數據，就解除等待狀態
        }
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
      // Android Chrome 專用絕對方向
      if ('ondeviceorientationabsolute' in window) {
        window.addEventListener('deviceorientationabsolute', handleOrientation, true);
      }
    }

    // 使用計時器每 200 毫秒 (一秒 5 次) 更新方向，確保畫面平滑且不卡死
    const headingInterval = setInterval(() => {
      if (!hasGyroRef.current) return; // 如果沒抓到數據就不做無謂的計算
      
      let targetHeading = headingRef.current;
      
      // 處理 360度 <-> 0度 的跨界問題，將差值補回到累積角度上
      let delta = targetHeading - ((currentDisplayHeading % 360 + 360) % 360);
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      
      currentDisplayHeading += delta;
      setDeviceHeading(currentDisplayHeading);
    }, 200);

    return () => {
      stopScanning();
      clearInterval(headingInterval);
      window.removeEventListener('deviceorientation', handleOrientation, true);
      if ('ondeviceorientationabsolute' in window) {
        window.removeEventListener('deviceorientationabsolute', handleOrientation, true);
      }
    };
  }, []);

  const precomputeFeatures = async () => {
    const cv = window.cv; if (!cv) return false;
    targetFeaturesRef.current = []; cvPointers.current.matcher = new cv.BFMatcher(cv.NORM_HAMMING, true);
    const markers = Object.values(graphData.nodes).filter(n => n.isMarker && n.imageUrl);
    const promises = markers.map(m => new Promise(resolve => {
      const img = new Image(); img.onload = () => {
        try {
          const c = document.createElement('canvas'); const ctx = c.getContext('2d'); c.width = 320; c.height = Math.round(320 * (img.height/img.width)); ctx.drawImage(img, 0, 0, c.width, c.height);
          const src = cv.imread(c); const gray = new cv.Mat(); cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
          const orb = new cv.ORB(); const kp = new cv.KeyPointVector(); const des = new cv.Mat(); orb.detectAndCompute(gray, new cv.Mat(), kp, des);
          targetFeaturesRef.current.push({ markerId: m.id, gray, kp, des, orb, width: gray.cols, height: gray.rows });
          src.delete(); resolve(true);
        } catch(e) { resolve(false); }
      }; img.onerror = () => resolve(false); img.src = m.imageUrl;
    }));
    await Promise.all(promises); return targetFeaturesRef.current.length > 0;
  };

  const startScanning = async () => {
    if(engineState!=='idle') return; setEngineState('loading');
    const hasF = await precomputeFeatures(); if(!hasF) { setEngineState('idle'); alert("無法提取特徵"); return; }
    try {
      if (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function') {
        try {
          await window.DeviceOrientationEvent.requestPermission();
        } catch (permissionError) {
          console.warn('Device orientation permission was not granted.', permissionError);
        }
      }
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment', width: { ideal: 640 } }, audio: false });
      streamRef.current = stream; videoRef.current.srcObject = stream; videoRef.current.play();
      videoRef.current.onloadedmetadata = () => { canvasRef.current.width = videoRef.current.videoWidth; canvasRef.current.height = videoRef.current.videoHeight; setEngineState('scanning'); startCameraLoop(); };
    } catch (e) { alert("無相機權限"); setEngineState('idle'); }
  };

  const stopScanning = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
    lockedPathOverlayRef.current = null;
    updateArLockStatus('idle');
    setEngineState('idle');
  };

  const drawArRoute = (ctx, points, isLockedFallback = false) => {
    if (!points || points.length < 2) return false;
    const routeLength = getPolylineLength(points);

    ctx.save();
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });

    ctx.strokeStyle = isLockedFallback ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.24)';
    ctx.lineWidth = isLockedFallback ? 8 : 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = isLockedFallback ? 8 : 12;
    ctx.shadowColor = '#ffffff';
    ctx.stroke();

    if (routeLength > 8) {
      const arrowSpacing = isLockedFallback ? 74 : 62;
      const arrowSize = isLockedFallback ? 28 : 32;
      const flowOffset = ((Date.now() / 10) % arrowSpacing);

      ctx.shadowBlur = isLockedFallback ? 10 : 16;
      ctx.shadowColor = '#ffffff';
      ctx.fillStyle = 'rgba(255,255,255,0.98)';
      ctx.strokeStyle = 'rgba(0,0,0,0.34)';
      ctx.lineWidth = 2.5;

      for (let distance = flowOffset; distance < routeLength; distance += arrowSpacing) {
        const sample = getPointAtPolylineDistance(points, distance);
        if (!sample) continue;

        ctx.save();
        ctx.translate(sample.x, sample.y);
        ctx.rotate(sample.angle);
        ctx.beginPath();
        ctx.moveTo(arrowSize * 0.55, 0);
        ctx.lineTo(-arrowSize * 0.35, -arrowSize * 0.32);
        ctx.lineTo(-arrowSize * 0.15, 0);
        ctx.lineTo(-arrowSize * 0.35, arrowSize * 0.32);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.restore();
      }
    }

    ctx.restore();
    return true;
  };

  const drawLockedRouteOverlay = (ctx) => {
    const overlay = lockedPathOverlayRef.current;
    if (!overlay || !overlay.points || overlay.points.length < 2) return false;

    const currentOrientation = orientationRef.current;
    const headingDelta = hasGyroRef.current ? ((((currentOrientation.heading - overlay.orientation.heading) + 540) % 360) - 180) : 0;
    const pitchDelta = hasGyroRef.current ? (currentOrientation.pitch - overlay.orientation.pitch) : 0;
    const rollDelta = hasGyroRef.current ? (currentOrientation.roll - overlay.orientation.roll) : 0;
    const rollAngle = rollDelta * Math.PI / 180;
    const cos = Math.cos(rollAngle);
    const sin = Math.sin(rollAngle);
    const cx = ctx.canvas.width / 2;
    const cy = ctx.canvas.height / 2;
    const focalLength = Math.max(ctx.canvas.width, ctx.canvas.height) * 0.95;
    const maxOffsetX = ctx.canvas.width * 1.8;
    const maxOffsetY = ctx.canvas.height * 1.2;
    const yawOffset = Math.max(-maxOffsetX, Math.min(maxOffsetX, Math.tan(headingDelta * Math.PI / 180) * focalLength));
    const pitchOffset = Math.max(-maxOffsetY, Math.min(maxOffsetY, Math.tan(pitchDelta * Math.PI / 180) * focalLength * 0.75));

    const points = overlay.points.map(point => {
      const x = point.x * ctx.canvas.width;
      const y = point.y * ctx.canvas.height;
      const dx = x - cx;
      const dy = y - cy;
      return {
        x: cx + dx * cos - dy * sin - yawOffset,
        y: cy + dx * sin + dy * cos + pitchOffset
      };
    });

    return drawArRoute(ctx, points, true);
  };

  const getXrRouteNodeIds = () => {
    if (calculatedPathRef.current.length > 1) return calculatedPathRef.current;
    const markerIds = Object.values(graphDataRef.current.nodes).filter(n => n.isMarker && n.id !== destinationId).map(n => n.id);
    const fallbackStartId = currentLocationId || markerIds[0];
    if (!fallbackStartId || !destinationId || fallbackStartId === destinationId) return [];
    return calculateShortestPath(fallbackStartId, destinationId);
  };

  const createXrRouteGroup = () => {
    const routeIds = getXrRouteNodeIds();
    const nodes = graphDataRef.current.nodes;
    const routeNodes = routeIds.map(id => nodes[id]).filter(Boolean);
    if (routeNodes.length < 2) return null;

    const origin = routeNodes[0];
    const routeScale = 0.08;
    const points = routeNodes.map(node => new THREE.Vector3(
      (node.physX - origin.physX) * routeScale,
      0.03,
      -(node.physY - origin.physY) * routeScale
    ));

    const group = new THREE.Group();
    const glow = buildTubeFromPoints(points, 0.045, 0xffffff, 0.18);
    const core = buildTubeFromPoints(points, 0.016, 0xffffff, 0.36);
    if (glow) group.add(glow);
    if (core) group.add(core);

    const flowArrows = createFlowArrowGroup(points);
    if (flowArrows) group.add(flowArrows);

    const startMarker = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee })
    );
    startMarker.position.copy(points[0]);
    startMarker.position.y += 0.08;
    group.add(startMarker);

    const endMarker = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0xff4d4f })
    );
    endMarker.position.copy(points[points.length - 1]);
    endMarker.position.y += 0.1;
    group.add(endMarker);

    return group;
  };

  const stopWebXr = async () => {
    const session = xrSessionRef.current;
    if (session) {
      try { await session.end(); } catch (error) {}
    } else {
      cleanupWebXr();
    }
  };

  const cleanupWebXr = () => {
    if (xrRouteGroupRef.current) {
      xrRouteGroupRef.current.traverse(object => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) object.material.dispose();
      });
    }
    if (xrRendererRef.current) {
      xrRendererRef.current.setAnimationLoop(null);
      xrRendererRef.current.dispose();
      xrRendererRef.current.domElement.remove();
    }
    xrSessionRef.current = null;
    xrRendererRef.current = null;
    xrRouteGroupRef.current = null;
    xrHitTestSourceRef.current = null;
    xrReferenceSpaceRef.current = null;
    xrPlacedRef.current = false;
    setXrStatus('idle');
  };

  const startWebXr = async () => {
    if (xrSupport !== 'supported' || !navigator.xr || xrSessionRef.current) return;

    setXrStatus('starting');
    stopScanning();

    try {
      const sessionOptions = {
        requiredFeatures: ['hit-test'],
        optionalFeatures: xrHostRef.current ? ['local-floor', 'dom-overlay', 'anchors'] : ['local-floor', 'anchors']
      };
      if (xrHostRef.current) sessionOptions.domOverlay = { root: xrHostRef.current };

      const session = await navigator.xr.requestSession('immersive-ar', sessionOptions);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.xr.enabled = true;
      renderer.setPixelRatio(window.devicePixelRatio || 1);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.className = 'absolute inset-0 h-full w-full';
      xrHostRef.current?.appendChild(renderer.domElement);
      await renderer.xr.setSession(session);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera();
      const reticle = new THREE.Mesh(
        new THREE.RingGeometry(0.18, 0.22, 32).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0x00ffcc, transparent: true, opacity: 0.85 })
      );
      reticle.matrixAutoUpdate = false;
      reticle.visible = false;
      scene.add(reticle);

      const referenceSpace = await session.requestReferenceSpace('local-floor').catch(() => session.requestReferenceSpace('local'));
      const viewerSpace = await session.requestReferenceSpace('viewer');
      const hitTestSource = await session.requestHitTestSource({ space: viewerSpace });

      xrSessionRef.current = session;
      xrRendererRef.current = renderer;
      xrHitTestSourceRef.current = hitTestSource;
      xrReferenceSpaceRef.current = referenceSpace;
      setXrStatus('placing');

      const placeRoute = (matrix) => {
        if (xrPlacedRef.current) return;
        const routeGroup = createXrRouteGroup();
        if (!routeGroup) {
          setXrStatus('no-route');
          return;
        }
        routeGroup.matrix.fromArray(matrix);
        routeGroup.matrix.decompose(routeGroup.position, routeGroup.quaternion, routeGroup.scale);
        scene.add(routeGroup);
        xrRouteGroupRef.current = routeGroup;
        xrPlacedRef.current = true;
        setXrStatus('anchored');
      };

      session.addEventListener('select', () => {
        if (reticle.visible) placeRoute(reticle.matrix.elements);
      });

      session.addEventListener('end', cleanupWebXr);

      renderer.setAnimationLoop((timestamp, frame) => {
        if (xrRouteGroupRef.current) {
          xrRouteGroupRef.current.traverse(object => updateFlowArrowGroup(object, timestamp));
        }

        if (frame && !xrPlacedRef.current) {
          const hitResults = frame.getHitTestResults(hitTestSource);
          if (hitResults.length) {
            const pose = hitResults[0].getPose(referenceSpace);
            if (pose) {
              reticle.visible = true;
              reticle.matrix.fromArray(pose.transform.matrix);
            }
          } else {
            reticle.visible = false;
          }
        } else {
          reticle.visible = false;
        }

        renderer.render(scene, camera);
      });
    } catch (error) {
      console.warn('Unable to start WebXR AR mode.', error);
      cleanupWebXr();
      setXrStatus('failed');
    }
  };

  const startCameraLoop = () => {
    const cv = window.cv; const video = videoRef.current; const canvas = canvasRef.current; const ctx = canvas.getContext('2d');
    const matcher = cvPointers.current.matcher; let cvThrottle = 0; let homographyMat = null; let lockedMarkerId = null;
    let graceFrames = 0; // 新增：辨識容錯幀數，避免畫面閃爍或丟失就永久卡死

    const loop = () => {
      if (!video || !video.srcObject) return;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      let frameFound = false;

      if (cvThrottle % 4 === 0) {
        try {
          const srcMat = cv.imread(canvas); const grayMat = new cv.Mat(); cv.cvtColor(srcMat, grayMat, cv.COLOR_RGBA2GRAY);
          const frameKp = new cv.KeyPointVector(), frameDes = new cv.Mat();
          targetFeaturesRef.current[0].orb.detectAndCompute(grayMat, new cv.Mat(), frameKp, frameDes);

          if (!frameDes.empty()) {
            for (let target of targetFeaturesRef.current) {
              const matches = new cv.DMatchVector(); matcher.match(target.des, frameDes, matches);
              let mList = []; for (let i = 0; i < matches.size(); i++) mList.push(matches.get(i));
              mList.sort((a,b) => a.distance - b.distance); const good = mList.filter(m => m.distance <= 50).slice(0, 60);

              if (good.length >= 12) { // 稍微放寬連續特徵限制
                const srcPts = [], dstPts = [];
                for (let m of good) { srcPts.push(target.kp.get(m.queryIdx).pt.x, target.kp.get(m.queryIdx).pt.y); dstPts.push(frameKp.get(m.trainIdx).pt.x, frameKp.get(m.trainIdx).pt.y); }
                const srcMatPts = cv.matFromArray(srcPts.length/2, 1, cv.CV_32FC2, srcPts); const dstMatPts = cv.matFromArray(dstPts.length/2, 1, cv.CV_32FC2, dstPts); const mask = new cv.Mat();
                const H = cv.findHomography(srcMatPts, dstMatPts, cv.RANSAC, 4.0, mask);
                
                let inliers = 0; for(let i=0; i<mask.rows; i++) if(mask.data[i]===1) inliers++;
                if (!H.empty() && inliers >= 10) { // 放寬內點容許值以增加移動時的流暢度
                  if (homographyMat) homographyMat.delete();
                  homographyMat = H.clone(); lockedMarkerId = target.markerId; setCurrentLocationId(lockedMarkerId);
                  frameFound = true;
                }
                srcMatPts.delete(); dstMatPts.delete(); mask.delete(); H.delete();
              }
              matches.delete(); if(frameFound) break;
            }
          }
          srcMat.delete(); grayMat.delete(); frameKp.delete(); frameDes.delete();
        } catch(e) {}

        // 更新容錯幀數：連續追蹤機制
        if (frameFound) {
          graceFrames = 8; // 大約維持 1 秒的 AR 顯示
        } else {
          if (graceFrames > 0) graceFrames--;
          else {
            if (homographyMat) { homographyMat.delete(); homographyMat = null; }
            lockedMarkerId = null;
          }
        }
      }
      cvThrottle++;

      const currentGraphData = graphDataRef.current;
      const currentCalculatedPath = calculatedPathRef.current;

      if (homographyMat && lockedMarkerId && currentCalculatedPath.length > 1) {
        const currMarker = currentGraphData.nodes[lockedMarkerId];
        const targetFeature = targetFeaturesRef.current.find(t => t.markerId === lockedMarkerId);
        
        if (currMarker && targetFeature) {
          const pixelsPerMeter = targetFeature.width / 0.3; 
          const projectedPoints = [];

          for (let i = 0; i < currentCalculatedPath.length; i++) {
            const nodeId = currentCalculatedPath[i];
            const node = currentGraphData.nodes[nodeId];
            if (!node || node.fId !== currMarker.fId) break;

            const deltaPhysX = node.physX - currMarker.physX;
            const deltaPhysY = -(node.physY - currMarker.physY); 
            
            const templateX = (targetFeature.width / 2) + (deltaPhysX * pixelsPerMeter);
            const templateY = (targetFeature.height / 2) + (deltaPhysY * pixelsPerMeter);

            const H = homographyMat.data64F;
            const w = H[6]*templateX + H[7]*templateY + H[8];
            if (w > 0) {
              const screenX = (H[0]*templateX + H[1]*templateY + H[2]) / w;
              const screenY = (H[3]*templateX + H[4]*templateY + H[5]) / w;
              projectedPoints.push({ x: screenX, y: screenY });
            }
          }

          if (drawArRoute(ctx, projectedPoints, false)) {
            lockedPathOverlayRef.current = {
              markerId: lockedMarkerId,
              orientation: { ...orientationRef.current },
              updatedAt: Date.now(),
              points: projectedPoints.map(point => ({
                x: point.x / canvas.width,
                y: point.y / canvas.height
              }))
            };
            updateArLockStatus('locked');
          }
        }
      } else {
        const didDrawLockedRoute = currentCalculatedPath.length > 1 && drawLockedRouteOverlay(ctx);
        updateArLockStatus(didDrawLockedRoute ? 'holding' : 'searching');

        if (!didDrawLockedRoute) {
          const scanBox = Math.min(canvas.width, canvas.height) * 0.6;
          ctx.strokeStyle = 'rgba(0, 255, 204, 0.4)'; ctx.lineWidth = 2;
          ctx.strokeRect((canvas.width - scanBox)/2, (canvas.height - scanBox)/2, scanBox, scanBox);
        }
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };
    loop();
  };

  if (!destinationId) {
    const destList = Object.values(graphData.nodes).filter(n => n.isMarker).reduce((acc, n) => {
      const group = `${n.bName} - ${n.fName}`; if(!acc[group]) acc[group] = []; acc[group].push(n); return acc;
    }, {});

    return (
      <div className="flex-1 flex flex-col relative overflow-hidden bg-slate-950">
        {/* 行動版防卡死選單按鈕 */}
        <div className="absolute top-4 left-4 z-40 md:hidden">
          <button onClick={onMenuClick} className="bg-slate-800 text-slate-300 p-2.5 rounded-lg border border-slate-700 hover:text-white shadow-lg transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 pt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center md:mt-0 mt-2">
            <MapPin className="mr-3 text-cyan-400"/> 請選擇目的地
          </h2>
          
          {Object.keys(destList).length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50 mt-10">
              <Target className="w-16 h-16 text-slate-700 mb-4" />
              <h3 className="text-lg font-bold text-slate-400 mb-2">目前尚無可用目的地</h3>
              <p className="text-sm text-slate-500 max-w-sm">系統中尚未建立任何啟用中的 AR 點位。<br/>請點擊左上角選單，切換至「平面圖管理」進行新增。</p>
            </div>
          ) : (
            Object.entries(destList).map(([group, nodes]) => (
              <div key={group} className="mb-6">
                <h3 className="text-slate-400 font-bold mb-3">{group}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {nodes.map(m => (
                    <button key={m.id} onClick={() => setDestinationId(m.id)} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex text-left hover:border-cyan-500 hover:bg-slate-800 transition-colors group">
                      <span className="font-mono text-cyan-400 font-bold mr-3 group-hover:scale-110 transition-transform">{m.code}</span>
                      <div className="flex-1"><div className="text-white font-bold">{m.title}</div></div>
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  const destNode = graphData.nodes[destinationId];
  const currNode = currentLocationId ? graphData.nodes[currentLocationId] : null;
  const nextNodeId = calculatedPath.length > 1 ? calculatedPath[1] : null;
  const nextNode = nextNodeId ? graphData.nodes[nextNodeId] : null;

  let minimapFloorId = currNode ? currNode.fId : destNode.fId;
  let minimapImage = null;
  let minimapBounds = { blX: 0, blY: 0, trX: 100, trY: 100 };
  buildings.forEach(b => b.floors.forEach(f => {
    if (f.id === minimapFloorId) { minimapImage = f.imageUrl; minimapBounds = getFloorBounds(f); }
  }));

  const toMinimapPct = (physX, physY) => {
    const w = minimapBounds.trX - minimapBounds.blX;
    const h = minimapBounds.trY - minimapBounds.blY;
    const pctX = w !== 0 ? ((physX - minimapBounds.blX) / w) * 100 : 50;
    const pctY = h !== 0 ? ((minimapBounds.trY - physY) / h) * 100 : 50;
    return { x: pctX, y: pctY };
  };

  return (
    <div className="flex-1 bg-black flex flex-col relative overflow-hidden">
      <div className="absolute top-4 left-4 z-40">
        <button onClick={() => { stopScanning(); setDestinationId(null); setCurrentLocationId(null); }} className="bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors">重新選擇目的地</button>
      </div>
      
      <div className="flex-1 relative flex items-center justify-center">
        <div ref={xrHostRef} className={`absolute inset-0 z-10 ${xrStatus === 'idle' ? 'pointer-events-none' : ''}`}></div>
        <video ref={videoRef} playsInline muted className="hidden"></video>
        <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full object-cover ${engineState !== 'scanning' && 'hidden'}`}></canvas>

        {engineState === 'scanning' && (
          <div className="absolute top-4 right-4 z-40 rounded-full border border-cyan-400/30 bg-slate-950/75 px-3 py-2 text-xs font-bold text-cyan-100 shadow-lg backdrop-blur-md">
            {arLockStatus === 'locked' && 'AR 路徑已鎖定'}
            {arLockStatus === 'holding' && '陀螺儀空間錨點'}
            {arLockStatus === 'searching' && '搜尋定位標記'}
            {arLockStatus === 'idle' && '準備定位'}
          </div>
        )}
        
        {engineState === 'scanning' && minimapImage && (
          <div 
            onClick={() => setIsMapExpanded(!isMapExpanded)}
            className={`absolute transition-all duration-300 z-30 bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer ${
              isMapExpanded 
                ? 'top-16 left-4 right-4 bottom-32 rounded-2xl' // 放大狀態
                : 'top-20 right-4 w-32 h-32 md:w-48 md:h-48 rounded-xl' // 縮小狀態
            }`}
          >
            <div className="relative w-full h-full">
              {/* 強制延展地圖確保 SVG 路徑百分比精準對齊 */}
              <img src={minimapImage} className="absolute inset-0 w-full h-full opacity-50" style={{ objectFit: 'fill' }} />
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                <defs>
                  <marker id="minimap-arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                    <polygon points="0 0, 6 2, 0 4" fill="#00ffcc" />
                  </marker>
                </defs>
                {calculatedPath.map((id, index) => {
                  if (index === calculatedPath.length - 1) return null;
                  const p1 = graphData.nodes[id];
                  const p2 = graphData.nodes[calculatedPath[index + 1]];
                  if (p1.fId === minimapFloorId && p2.fId === minimapFloorId) {
                    const pt1 = toMinimapPct(p1.physX, p1.physY);
                    const pt2 = toMinimapPct(p2.physX, p2.physY);
                    return <line key={index} x1={`${pt1.x}%`} y1={`${pt1.y}%`} x2={`${pt2.x}%`} y2={`${pt2.y}%`} stroke="#00ffcc" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#minimap-arrow)" className="animate-[dash_1s_linear_infinite]" />;
                  }
                  return null;
                })}
              </svg>

              {/* HTML 節點標示 (利用 absolute div 處理陀螺儀旋轉，保持縮放時比例不變) */}
              {currNode && currNode.fId === minimapFloorId && ( 
                <div 
                  className="absolute z-20 pointer-events-none"
                  style={{
                    left: `${toMinimapPct(currNode.physX, currNode.physY).x}%`,
                    top: `${toMinimapPct(currNode.physX, currNode.physY).y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    {/* 雷達發射動畫 */}
                    <div className="absolute w-full h-full border-2 border-cyan-400 rounded-full animate-ping opacity-75"></div>
                    
                    {/* 視角錐形 (手電筒光束) - 置中旋轉並配合同步 200ms 的過場動畫 */}
                    <div 
                      className="absolute w-[60px] h-[60px] origin-center transition-transform duration-200 ease-linear flex items-center justify-center"
                      style={{ transform: `rotate(${deviceHeading}deg)` }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full opacity-70">
                        {/* 繪製從中心(50,50)向上的扇形光束 */}
                        <path d="M50 50 L20 0 A 50 50 0 0 1 80 0 Z" fill="url(#viewConeGrad)" />
                        <defs>
                          <linearGradient id="viewConeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* 銳利的導航箭頭 (疊加在扇形光束上) */}
                    <div 
                      className="absolute w-full h-full origin-center transition-transform duration-200 ease-linear flex items-center justify-center"
                      style={{ transform: `rotate(${deviceHeading}deg)` }}
                    >
                      <Navigation className="w-4 h-4 text-white fill-cyan-400 absolute -top-1 drop-shadow-[0_0_3px_rgba(34,211,238,0.8)]" />
                    </div>

                    {/* 當前位置實心圓點 */}
                    <div className="w-3 h-3 bg-white border-2 border-cyan-500 rounded-full z-10 shadow-[0_0_8px_#22d3ee]"></div>
                  </div>
                </div>
              )}
              {destNode && destNode.fId === minimapFloorId && ( 
                <div 
                  className="absolute z-20 pointer-events-none"
                  style={{
                    left: `${toMinimapPct(destNode.physX, destNode.physY).x}%`,
                    top: `${toMinimapPct(destNode.physX, destNode.physY).y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute w-full h-full border-2 border-red-500 rounded-full animate-ping opacity-75"></div>
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full z-10"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute bottom-1.5 right-1.5 bg-black/60 p-1.5 rounded-lg text-white pointer-events-none">
              {isMapExpanded ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </div>
            <div className="absolute bottom-0 left-0 w-full text-center bg-black/70 text-[10px] text-white py-1 backdrop-blur-sm pointer-events-none">
              {isMapExpanded ? '縮小' : '放大'} - {currNode ? currNode.fName : destNode.fName} {hasGyro ? `(${Math.round(((deviceHeading % 360) + 360) % 360)}°)` : '(等待羅盤訊號...)'}
            </div>
          </div>
        )}

        {engineState !== 'scanning' && xrStatus === 'idle' && (
          <div className="z-20 w-full max-w-md px-6 text-center">
            <Scan className="w-20 h-20 text-cyan-500/50 mb-6 mx-auto" />
            <h2 className="text-2xl font-bold text-white mb-3">開啟 AR 導引</h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-300">
              真 AR 模式會把路徑建立成 3D 物件並鎖定在空間；不支援 WebXR 的裝置可使用相機疊圖備援。
            </p>
            <div className="space-y-3">
              <button
                onClick={startWebXr}
                disabled={xrSupport !== 'supported'}
                className="w-full rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-45"
              >
                {xrSupport === 'checking' ? '檢查真 AR 支援中...' : xrSupport === 'supported' ? '開啟真 AR 空間模式' : '此裝置不支援真 AR 模式'}
              </button>
              <button
                onClick={startScanning}
                disabled={engineState === 'loading'}
                className="w-full rounded-full border border-slate-600 bg-slate-900/80 px-8 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-800 disabled:opacity-50"
              >
                {engineState === 'loading' ? '系統準備中...' : '使用相機疊圖備援'}
              </button>
            </div>
            {xrSupport === 'unsupported' && (
              <div className="mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-left text-xs leading-relaxed text-yellow-100">
                iPhone Safari 或未支援 WebXR 的瀏覽器無法做真正空間錨定，只能使用備援模式。Android Chrome 支援時會優先使用真 AR。
              </div>
            )}
          </div>
        )}

        {false && engineState !== 'scanning' && xrStatus === 'idle' && (
          <div className="text-center z-20 px-6">
            <Scan className="w-20 h-20 text-cyan-500/50 mb-6 mx-auto" />
            <h2 className="text-2xl font-bold text-white mb-4">掃描起點以投影路徑</h2>
            <button onClick={startScanning} disabled={engineState === 'loading'} className="bg-cyan-500 px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 hover:bg-cyan-400 transition-colors">
              {engineState === 'loading' ? '系統準備中...' : '開啟 AR 實境相機'}
            </button>
          </div>
        )}
      </div>

      {xrStatus !== 'idle' && (
        <div className="absolute inset-x-4 bottom-6 z-40 rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-4 text-center text-sm text-cyan-50 shadow-2xl backdrop-blur-md">
          {xrStatus === 'starting' && '正在啟動真 AR 空間模式...'}
          {xrStatus === 'placing' && '請對準地面，點一下畫面放置 AR 路徑。'}
          {xrStatus === 'anchored' && 'AR 路徑已鎖定在空間中。'}
          {xrStatus === 'no-route' && '目前找不到可用路徑，請先確認後台路網與目的地。'}
          {xrStatus === 'failed' && '真 AR 啟動失敗，請改用相機疊圖備援。'}
          <button onClick={stopWebXr} className="mt-3 rounded-full border border-slate-500 px-4 py-2 text-xs font-bold text-slate-100">
            關閉真 AR
          </button>
        </div>
      )}

      <div className={`absolute bottom-0 left-0 w-full p-4 z-40 transition-transform duration-500 ease-out flex justify-center ${currNode ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <div className="flex items-start">
            <div className="bg-cyan-500/20 text-cyan-400 p-3 rounded-xl mr-4 shrink-0"><Info className="w-6 h-6" /></div>
            <div className="flex-1 w-full min-w-0">
              <div className="text-xs font-bold text-slate-400 mb-1">
                📍 定位成功：{currNode?.bName} {currNode?.fName} ({currNode?.code})
              </div>
              
              {currentLocationId === destinationId ? (
                <div className="mt-2 flex items-center bg-green-500/20 p-3 rounded-xl border border-green-500/50 shadow-inner">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 shrink-0" />
                  <span className="text-green-400 font-bold text-sm tracking-wide">🎉 您已抵達目的地！</span>
                </div>
              ) : nextNode ? (
                nextNode.fId !== currNode?.fId ? (
                  <div className="mt-2 flex items-center bg-purple-500/20 p-3 rounded-xl border border-purple-500/50 shadow-inner">
                    <ArrowUpDown className="w-6 h-6 text-purple-400 mr-3 shrink-0 animate-bounce" />
                    <div className="flex flex-col">
                      <span className="text-purple-400 font-bold text-sm">請換樓層</span>
                      <span className="text-purple-300/70 text-xs mt-0.5">搭乘至 {nextNode.fName} 後重新掃描</span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 flex items-center bg-slate-800/80 p-3 rounded-xl border border-slate-700 shadow-inner">
                    <div className="bg-yellow-500/20 text-yellow-400 p-2 rounded-lg mr-3 shadow-[0_0_10px_rgba(234,179,8,0.2)] shrink-0">
                      <Route className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-yellow-400 font-bold text-sm tracking-wide">請依循 AR 畫面上的發光路徑前往下一站</span>
                    </div>
                  </div>
                )
              ) : (
                <div className="text-red-400 text-sm font-bold mt-2">⚠️ 無法計算路線，請確認點位連線設定。</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan { 0% { transform: translateY(-300px); opacity: 1; } 100% { transform: translateY(300px); opacity: 0; } }
        @keyframes dash { to { stroke-dashoffset: -20; } }
      `}} />
    </div>
  );
}
