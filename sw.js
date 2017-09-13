
// Wed Sep 13 08:12:46 2017

const CACHE_VERSION = "v3";
const CACHE_FILES = [
	"/",
	"/index.html",
	"/js/index.js",
	"/js/parse.min.js",
	"/message/message.js",
	"/message/message.css",
	"/css/style.css",
	"/css/w3.css",
	"/images/favicon-32x32.png",
	"/images/favicon-194x194.png",
	"/images/android-chrome-192x192.png",
	"/images/favicon-16x16.png",
	"/images/safari-pinned-tab.svg",
	"/images/mstile-144x144.png",
	"/favicon.ico",
	"/manifest.json",
	"https://code.jquery.com/jquery-1.12.4.min.js",
	"https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.4/vue.min.js",
	'https://fonts.googleapis.com/icon?family=Material+Icons'
];

self.addEventListener( "install", function(event) {
	event.waitUntil(
		caches.open( CACHE_VERSION ).then(function( cache ) {
			return cache.addAll( CACHE_FILES );
		}).then(function() {
			return self.skipWaiting();
		})
	);
});
self.addEventListener('activate', function (event) {
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
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) {
				return response;
			} else {
				console.log('[fetch] Returning from server: ', event.request.url);
				return fetch(event.request);
			}
		})
	);
	if( event.request.url.startsWith( "https://source.unsplash.com" ) ) {
		event.waitUntil( updateAndCache( event.request ) );
	}
});
function updateAndCache( request ) {
	return new Promise( ( resolve, reject )=>{
		caches.open( CACHE_VERSION ).then(function( cache ) {
			fetch( request ).then(function( response ) {
				if( response.ok )
					cache.put( request, response ).then(function() {
						resolve(`${request.url} Added to cache` );
					}, reject);
				else {
					resolve(`Couldn't fetch ${request.url}`);
				}
			}).catch( reject );
		});
	});
}

