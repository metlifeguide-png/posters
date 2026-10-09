// 뚝섬유원지: 서비스워커 안 씀 · 예전에 등록된 것은 스스로 해제
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister()));
