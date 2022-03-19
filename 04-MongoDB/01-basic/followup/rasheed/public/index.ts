let axios;

async function hanleGetGames() {
    const { data } = await axios.get('/get-game');
    console.log(data);
    const { ok, games } = data;
    console.log(games);
    if (games) {
        renderGames(games)
    }
}


async function handleAddGames(ev) {
    ev.preventDefault();
    let { title, img, price, type } = ev.target.elements;
    console.log(title, img, price, type)
    title = title.value;
    img = img.value;
    price = price.value;
    type = type.value

    console.log(title, img, price, type)

    const { data } = await axios.post('/add-game', { title, img, price, type });
    console.log(data)
    ev.target.reset();
}

async function handleDelete(gameId) {
    const { data } = await axios.delete('/delete-game', {data:{gameId}});
    console.log(data)
}

async function handleUpdate(ev, gameId) {

     const newPrice = ev.target.value;

    const { data } = await axios.patch('/update-game', { gameId, newPrice});
    console.log(data)
  
}

function renderGames(games) {
    const html = games.map(game => {
        return `<div> ${game.title}
        <input type="number" name="newPrice" placeholder="price" value="${game.price}" onblur='handleUpdate(event, "${game._id}")'>
        <button onclick='handleDelete("${game._id}")'>DELETE</button>
        </div>`
    }).join('');
    document.getElementById('games').innerHTML = html;
}
