const main = document.querySelector('main');

window.addEventListener('load', e => {
    updateYWC();

    if('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('sw.js');
            console.log('SW registered');
        } catch (error) {
            console.log('SW regis fail');
        }
    }
});

async function updateYWC() {
    const res = await fetch(`https://ywc15.ywc.in.th/api/interview`);
    const json = await res.json();

    main.innerHTML = json.map(createList).join("");
}

function createList(list) {
    return `<p>${list.firstName} ${list.lastName}</p>`
}