function appInit() {
    getGames()
}

async function getGames() {
    const { data } = await axios.get("/get-games");
    const rootGames = document.querySelector(".store__gamesList")
    if (data) {
        renderGames(data, rootGames);
    }
}



function renderGames(data: Array<any>, root) {
    let html = '';
    if (Array.isArray(data)) {
        data.forEach(game => {
            html += `
            <div class = "store__gamesList">
                <img src = ${game.img}>
                <div>
                    <p>Title: ${game.title}</p>
                    <p>price: ${game.price}</p>
                    <p>Category: ${game.category}</p>
                </div>
            </div>`
        })
        root.innerHTML = html;
    }
}