// Poetreel — cache hors ligne. Change VERSION à chaque mise à jour pour forcer le rafraîchissement.
const VERSION="poetreel-v3";
const FILES=["./","./index.html","./manifest.webmanifest","./icon-180.png","./icon-192.png","./icon-512.png","./fonts/inter-latin-400-normal.woff2","./fonts/inter-latin-500-normal.woff2","./fonts/inter-latin-600-normal.woff2","./fonts/inter-latin-700-normal.woff2","./fonts/inter-latin-ext-400-normal.woff2","./fonts/inter-latin-ext-500-normal.woff2","./fonts/inter-latin-ext-600-normal.woff2","./fonts/inter-latin-ext-700-normal.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  // réseau d'abord pour la page (mises à jour), cache sinon ; cache d'abord pour le reste
  if(e.request.mode==="navigate"){e.respondWith(fetch(e.request).then(r=>{caches.open(VERSION).then(c=>c.put("./index.html",r.clone()));return r}).catch(()=>caches.match("./index.html")));return}
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
