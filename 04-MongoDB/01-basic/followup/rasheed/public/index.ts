let axios;
async function hanleGetGames() {
    const { data } = await axios.get('/get-game');
    const { ok, games } = data;
    renderGames(games)
}


async function handleAddGames(ev) {
    ev.preventDefault();
    let { title, img, price, type } = ev.target.elements;
    console.log(title, img, price, type)
    title = title.value;
    img = img.value;
    price = price.value;
    type = type.value;
    const { data } = await axios.post('/add-game', { title, img, price, type });
    ev.target.reset();
}

async function handleDelete(gameId) {
    const { data } = await axios.delete('/delete-game', { data: { gameId } });
}

async function handleUpdate(ev, gameId) {
    ev.preventDefault()
    const newTitle = ev.target.elements[0].value;
    const newPrice = ev.target.elements[1].value;
    const newImg = ev.target.elements[2].value;
    const newType = ev.target.elements[3].value;
    const { data } = await axios.patch('/update-game', { gameId, newTitle, newPrice });
}

function renderGames(games) {
    const html = games.map(game => {
        return `<div>
        <form onsubmit='handleUpdate(event, "${game._id}")'>
        <input type="text" name="newTitle" value="${game.title}">
        <input type="number" name="newPrice" value="${game.price}">
        <input type="text" name="newImg" value="${game.img}">
        <input type="text" name="newType" value="${game.type}">
        <input type="submit" value="Update">
    </form>
        <button onclick='handleDelete("${game._id}")'>DELETE</button>
        </div>`
    }).join('');
    document.getElementById('games').innerHTML = html;
}
