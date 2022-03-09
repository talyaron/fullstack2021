// import axios from "axios";
let games = [];

async function initPage() {
    const { data } = await axios.get('/getAllGames');
    renderGames(data);
    games = data;
}

function renderGames(gameList) {
    let html = '';
    gameList.forEach(game => {
        html += `<div class="grid__game">
                    <p>${game.name}</p>
                    <img src="${game.pic}">
                    <p>${game.price}$</p>
                    <p>copies available:${game.copiesLeft}</p>
                    <button onclick="handleEdit('${game.id}')">Update Game</button>
                    <button onclick="handleDelete('${game.id}')">Delete Game</button>
                </div>`
    });
    html += `<div class="grid__add">
                <form onsubmit="handleAdd(event)">
                    <label for="name"> Name</label>
                    <input type="text" name="name" id="name">
                    <label for="pic"> Image</label>
                    <input type="text" name="pic" id="pic">
                    <label for="price"> Price</label>
                    <input type="number" name="price" id="price">
                    <input type="submit" value="Add">
                </form>
            </div>`
    document.querySelector('.grid').innerHTML = html;
}

function handleEdit(id) {
    const form = document.querySelector('.edit-form');
    form.classList.toggle('in-vis');
    let game: any = games.filter(game => game.id == id)[0];
    form[0].value = game.name
    form[1].value = game.pic
    form[2].value = game.price
    form[3].value = game.id
}
async function handleDelete(id) {
    const { data } = await axios.delete('/deleteGame', { data: { id } });
    renderGames(data);
    games = data;
}

async function handleSubmit(ev) {
    ev.preventDefault();
    const game = {};
    game["name"] = ev.target.name.value;
    game["pic"] = ev.target.pic.value;
    game["price"] = ev.target.price.value;
    game["id"] = ev.target.id.value;
    const { data } = await axios.post('/editGame', { game });
    renderGames(data);
    games = data;
    document.querySelector('.edit-form').classList.toggle('in-vis');
}

async function handleAdd(ev) {
    ev.preventDefault();
    const game = {};
    game["name"] = ev.target.name.value;
    game["pic"] = ev.target.pic.value;
    game["price"] = ev.target.price.value;
    const { data } = await axios.post('/addGame', { game });
    renderGames(data);
    games = data;
    
}

initPage();