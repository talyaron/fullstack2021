function appInit() {
    // getCards();
}

async function handleNewGame(ev){
    const {data} = await axios.get("/newGame");
    renderNewGame(data)
}

function renderNewGame(data) {
    const root = document.querySelector("#root")
    let html = ''
    if (Array.isArray(data)){
        data.forEach(card => {
            html += `<img src = "./img/${card.afterFlipImg}">`
        })
        root.innerHTML = html
    }

}

