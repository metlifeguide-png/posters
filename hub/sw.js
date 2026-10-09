// 뚝섬유원지 홈화면 설치용 · 캐시 없음 (항상 최신 화면)
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{});
