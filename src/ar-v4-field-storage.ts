import type { FieldObservation } from './ar-v4-field-core';

// Site photographs remain on this device until the operator explicitly uploads.
const DATABASE = 'ar-v4-field-drafts';
export function draftStore(key: string, value?: FieldObservation | null): Promise<FieldObservation | null> {
  return new Promise((resolve, reject) => {
    const open = indexedDB.open(DATABASE, 1);
    open.onupgradeneeded = () => open.result.createObjectStore('drafts');
    open.onerror = () => reject(open.error);
    open.onsuccess = () => {
      const db = open.result;
      const tx = db.transaction('drafts', value === undefined ? 'readonly' : 'readwrite');
      const store = tx.objectStore('drafts');
      const request = value === undefined ? store.get(key) : value === null ? store.delete(key) : store.put(value, key);
      let result: FieldObservation | null = null;
      request.onsuccess = () => { result = value === undefined ? request.result || null : value; };
      tx.oncomplete = () => { db.close(); resolve(result); };
      tx.onerror = () => { db.close(); reject(tx.error); };
      tx.onabort = () => { db.close(); reject(tx.error || new Error('草稿儲存中斷')); };
    };
  });
}

export async function readJson(url: string, init?: RequestInit) {
  const response = await fetch(url, { cache: 'no-store', credentials: 'same-origin', ...init });
  if (!(response.headers.get('content-type') || '').includes('application/json')) {
    throw new Error('後台未提供 JSON 回應，請確認登入狀態及 API 是否已啟用。');
  }
  const body = await response.json();
  if (!response.ok) {
    const messages: Record<string, string> = {
      SYNC_CONFLICT: '後台資料已被更新。草稿已保留；請重新讀取後台、核對節點後再上傳。',
      AUTH_REQUIRED: '請先登入後台，再重新上傳；本機草稿不會被清除。',
      ADMIN_ROLE_REQUIRED: '此帳號沒有 ar_admin 現場作業權限。',
      SYNC_WRITE_DISABLED: '後台寫入尚未啟用。照片仍可留在本機草稿。',
      SYNC_CONFIGURATION_ERROR: '後台同步設定尚未完成，未寫入 GitHub。',
      SYNC_TARGET_NOT_FOUND: '這個節點已不存在，請重新讀取後台並核對節點。',
      SYNC_CONTRACT_REQUIRED: '後台尚未支援 V4 現場資料，需先部署相容的 API。',
    };
    throw new Error(messages[body.code] || `後台拒絕儲存 (${response.status})：${body.error || body.code || '請稍後重試'}`);
  }
  return { body, revision: response.headers.get('x-ar-source-blob-sha') || '', storage: response.headers.get('x-ar-storage') || 'cloud' };
}

export function downloadJson(filename: string, data: unknown) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
