importScripts('./node_modules/workbox-sw/build/importScripts/workbox-sw.dev.v2.1.2.js')

const staticAssets = [
    './',
    './css/style.css',
    './css/animate.css',
    './css/sweetalert2.min.css',
    './font/Athiti-Regular.ttf',
    './js/sweetalert2.all.min.js',
    './app.js'
]


const wb = new WorkboxSW();

wb.precache(staticAssets);
wb.router.registerRoute('https://ywc15.ywc.in.th/api/interview', wb.strategies.networkFirst());

