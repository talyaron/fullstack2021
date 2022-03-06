async function handlenewgame() {
    const { data } = await axios.get('/newgame')
    renderitem(data)
}

function renderitem(data) {
    const root = document.getElementById('root')
    let html = '';
    data.forEach(data => {
        html += `<div class="card" onclick="handleflip(event)"  >
        <div class="back__img"><img src ="${data.back}" ></div>
        <div class="front__img"><img src ="${data.front}" ></div>
        </div>`
    })
    root.innerHTML = html;
}

function handleflip(ev){

console.log('hry');

}



