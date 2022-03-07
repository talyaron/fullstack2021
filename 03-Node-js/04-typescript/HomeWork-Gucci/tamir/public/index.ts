async function handlenewgame() {
    const { data } = await axios.get('/newgame')
    renderitem(data)
}
// async function handleflip(ev) {
//     const { data } = await axios.get('/newgame')
//     const clas = (ev.path[2])
     

// }
function renderitem(data) {
    const root = document.getElementById('root')
    let html = '';
    data.forEach(data => {
        html += `<div class="card" onclick="handleflip(event)"  >
        <div class="back__img"><img src ="${data.back}" ></div>
        
        </div>`
    })
    root.innerHTML = html;
}


// <div class="front__img"><img src ="${data.front}" ></div>


