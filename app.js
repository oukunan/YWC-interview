const main = document.querySelector('main');

window.addEventListener('load', e => {
    var data;

    updateYWC();

    if ('serviceWorker' in navigator) {
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
    data = json;
    for (var i = 0; i < json.length; i++) {
        if (json[i].major === 'programming') {
            document.getElementById("programming").innerHTML += `${json[i].firstName}<br>`;
        }
        if (json[i].major === 'design') {
            document.getElementById("Design").innerHTML += `${json[i].firstName}<br>`;
        }
        if (json[i].major === 'content') {
            document.getElementById("Content").innerHTML += `${json[i].firstName}<br>`;
        }
        if (json[i].major === 'marketing') {
            document.getElementById("Marketing").innerHTML += `${json[i].firstName}<br>`;
        }

    }
}

// function createList(list) {
//     return `< p > ${ list.firstName } ${ list.lastName }</p > `
// }


function search() {
    var correct = [];
    var input = document.getElementById("name").value;
    for (var i = 0; i < data.length; i++) {
        if (data[i].firstName === input) {
            correct.push(data[i])
        }
    }
    if (correct.length == 0) {
        alert('Not found!');
    }
    alert(`Found user ${correct[0].firstName} `);
}