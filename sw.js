importScripts('./node_modules/workbox-sw/build/importScripts/workbox-sw.dev.v2.1.2.js')

const staticAssets = [
    './',
    './css/style.css',
    './css/animate.css',
    './images/bg.jpeg',
    './images/scroll.png',
    './images/ywc.png',
    './images/preload.gif',
    './font/Athiti-Regular.ttf',
    './js/sweetalert2.all.min.js',
    './js/push.min.js',
    './app.js'
]


const wb = new WorkboxSW();

wb.precache(staticAssets);
wb.router.registerRoute('https://ywc15.ywc.in.th/api/interview', wb.strategies.networkFirst());


