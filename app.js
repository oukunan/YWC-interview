const main = document.querySelector('main');

window.addEventListener('load', e => {
    var data;

    updateYWC();

    // if ('serviceWorker' in navigator) {
    //     try {
    //         navigator.serviceWorker.register('sw.js');
    //         console.log('SW registered');
    //     } catch (error) {
    //         console.log('SW regis fail');
    //     }
    // }
});

async function updateYWC() {
    const res = await fetch(`https://ywc15.ywc.in.th/api/interview`);
    const json = await res.json();
    data = json;
    for (var i = 0; i < json.length; i++) {
        if (json[i].major === 'programming') {
            document.getElementById("programming").innerHTML += `<li>${json[i].firstName} ${json[i].lastName}</li>`;
        }
        if (json[i].major === 'design') {
            document.getElementById("Design").innerHTML += `<li>${json[i].firstName} ${json[i].lastName}</li>`;
        }
        if (json[i].major === 'content') {
            document.getElementById("Content").innerHTML += `<li>${json[i].firstName} ${json[i].lastName}</li>`;
        }
        if (json[i].major === 'marketing') {
            document.getElementById("Marketing").innerHTML += `<li>${json[i].firstName} ${json[i].lastName}</li>`;
        }

    }
}

function verify() {
    var text = document.getElementById('name').value;
    if (text.length > 0) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}

function search() {
    var correct = [];
    var input = document.getElementById("name").value;
    for (var i = 0; i < data.length; i++) {
        if (data[i].firstName === input) {
            correct.push(data[i])
        }
    }
    if (correct.length == 0) {
        swal({
            title: 'ขอแสดงความเสียใจ',
            text: 'ไม่มีชื่อของคุณ ลองใหม่ปีหน้านะ',
            type: 'error',
            confirmButtonText: 'Close'
        })
    }
    swal({
        title: 'แสดงความยินดีด้วย',
        text: `คุณ ${correct[0].firstName} `,
        type: 'success',
        confirmButtonText: 'Close'
    })
};

