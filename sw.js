
// Sat Jan 13 16:02:56 2018

const CACHE_VERSION = "v1.2.2";
const CACHE_FILES = [
	"/",
	"/?launcher=true",
	"/index.html",
	"/index.html?launcher=true",
	"/icons/icon-72x72.png",
	"/icons/icon-96x96.png",
	"/icons/icon-128x128.png",
	"/icons/icon-144x144.png",
	"/icons/icon-152x152.png",
	"/icons/icon-192x192.png",
	"/icons/icon-384x384.png",
	"/icons/icon-512x512.png",
	"/favicon.ico",
	"/logo.jpg",
	"/cover.jpg",
	"/w3.css",
	"/w3-theme-orange.css",
	"https://use.fontawesome.com/releases/v5.0.4/js/all.js",
	"/manifest.json"
];

self.addEventListener( "install", function(event) {
	console.log( "install event" );
	event.waitUntil(
		caches.open( CACHE_VERSION ).then(function( cache ) {
			return cache.addAll( CACHE_FILES );
		}).then(function() {
			return self.skipWaiting();
		})
	);
});
self.addEventListener('activate', function (event) {
	console.log( "activate event" );
	event.waitUntil(
		caches.keys().then(function(keys){
			keys.map(function( key, i ) {
				if(key !== CACHE_VERSION) return caches.delete(keys[i]);
			});
			return self.clients.claim();
		})
	)
});
self.addEventListener('fetch', function(event) {
	console.log( "fetch event" );
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) {
				console.log( event.request.url );
				return response;
			} else {
				console.log('[fetch] Returning from server: ', event.request.url);
				return fetch(event.request);
			}
		})
	);
});

