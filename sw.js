importScripts('./node_modules/workbox-sw/build/importScripts/workbox-sw.dev.v2.1.2.js')

const staticAssets = [
    './',
    './style.css',
    './app.js'
]


const wb = new WorkboxSW();

wb.precache(staticAssets);
wb.router.registerRoute('https://ywc15.ywc.in.th/api/interview', wb.strategies.networkFirst());
