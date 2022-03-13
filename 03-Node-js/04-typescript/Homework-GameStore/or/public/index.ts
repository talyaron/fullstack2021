async function handleLoad() {
    const { data } = await axios.get('/get-games')
    renderGames(data)
}

async function handleDelete(ev){
    console.log(ev.target.id)
}

function renderGames(games) {
    const root = document.querySelector('#root');
    let html = `<div class = "games-grid">`;
    games.forEach(game => {
        html += `
        <div class = "game">
          <div class = "game__name">${game.name}</div>
          <div class = "game__price">${game.price}$</div>
          <div class = "game__delete" onclick = "handleDelete(event)" id = "${game.id}">X</div>
        </div>`
    })
    html += `</div>`
    root.innerHTML=html
}