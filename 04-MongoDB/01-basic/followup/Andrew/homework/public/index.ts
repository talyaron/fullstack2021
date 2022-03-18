const site = {
    games: [],
    renderGames(list) {
        let html = "";
        list.forEach(game => {
            html += `<div class="games-grid__card">
                        <h1 class="name">${game.name}</h1>
                        <img src="${game.img}">
                        <h3 class ="type">${game.type}</h3>
                        <button onclick="handleEdit('${game._id}',event)">Edit</button>
                    </div>`
        });
        html += `<form class="games-grid__card" onsubmit="handleSubmitAdd(event)">
                    <input type="text" name="name" placeholder="Name"></input>
                    <img src="https://m.media-amazon.com/images/I/41BhB5jra2L._AC_.jpg">
                    <input type="text" name="img" placeHolder="image link"></input>
                    <input type="text" name="type" placeHolder="Type"></input>
                    <input type="submit" name="submit"></input>
                </form>`
        document.querySelector('.games-grid').innerHTML = html;
    }
}

function handleEdit(id, ev) {
    let html = '';
    const gameToEdit = site.games.filter(game => game._id == id)

    gameToEdit.forEach(game => {
        html += `<form class="games-grid__card" onsubmit="handleSubmit('${game._id}',event)">
                    <input type="text" class="name" name="name" value="${game.name}"></input>
                    <img src="${game.img}">
                    <input type="text" class="type" name="type" value ="${game.type}"></input>
                    <input type="submit" name="submit"></input>
                </form>`
    });


    ev.target.parentElement.outerHTML = html;
}

function handleSubmitAdd(ev) {
    const {name, img, type} = ev.target.elements;
    const game = {name:name.value, img:img.value, type:type.value}
    axios.put('/add-game', {game});
}

function handleSubmit(id, ev) {
    // ev.preventDefault();
    const game: any = site.games.filter(game => game._id == id)[0]
    game.name = ev.target.name.value
    game.type = ev.target.type.value
    axios.patch('/update-game', { game })
}

async function getAllGames() {
    const { data } = await axios.get('/get-games')
    console.log(data);
    site.games = data;
    site.renderGames(data);
}

getAllGames();
