function appInit() {
    getGames()
}

async function getGames() {
    const { data } = await axios.get("/get-games");
    const { ok, games } = data
    if (games) {
        renderGames(games);
    }
}

async function handleAddGame(ev) {
    ev.preventDefault()
    let { title, img } = ev.target.elements;
    title = title.value;
    img = img.value;
    const { data } = await axios.post('/add-game', { title, img })
    const {games} = data;
    renderGames(games)
}

function renderGames(games) {
    let html = '';
    const rootGames = document.querySelector('.myGames__list');
    if (games) {
        games.forEach(game => {
            html += `<h4>${game.title}</h4>
                <img src = ${game.img}>
                <form onsubmit = "handleUpdate(event, "${game._id}")">
                <input type = 'text' name = 'newImg' placeholder = 'Update Image'>
                <input type="submit" value="UPDATE">
                </form>`
        })

        rootGames.innerHTML = html;
    }
}

async function handleUpdate(ev, gameId) {
    const newImg = ev.target.value;
    const { data } = await axios.patch('/update-game', { gameId, newImg });
    const {games} = data;
    renderGames(games);
    
}