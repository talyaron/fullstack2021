
let games = [];
let userId = "";

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
function renderGamesUser(gameList) {
    let html = '';
    gameList.forEach(game => {
        html += `<div class="grid__game">
                    <p>${game.name}</p>
                    <img src="${game.pic}">
                    <p>${game.price}$</p>
                    <p>copies available:${game.copiesLeft}</p>
                    <button onclick="handleRent('${game.id}')">Rent Game</button>
                </div>`
    });
    document.querySelector('.grid').innerHTML = html;
}
function renderCart(cart) {
    let html = '';
    cart.forEach(game => {
        html += `<div class="grid__game">
        <p>${game.name}</p>
        <img src="${game.pic}">
        </div>`
    });
    document.querySelector('.cart').innerHTML = html;
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

async function handleCreate(ev) {
    ev.preventDefault();
    if (ev.target.password.value == "" || ev.target.username.value == "") {
        alert("fields must be filled")
    }
    else if (ev.target.password.value != ev.target.passwordRepeat.value) {
        alert("passwords are not the same")
    }
    else {
        const { data } = await axios.post('/CreateAccount', { account: { username: ev.target.username.value, password: ev.target.password.value } })
        alert(data)
    }
}
async function handleLogin(ev) {
    ev.preventDefault();
    const { data } = await axios.post('/logIn', { account: { username: ev.target.logUsername.value, password: ev.target.logPassword.value } })
    renderGamesUser(data.games);
    games = data;
    userId = data.id
    document.querySelector('.menu').classList.add('in-vis')
}

function handleLoginMenu(ev) {
    document.querySelector('.menu__logIn').classList.toggle('in-vis')
    document.querySelector('.menu__create').classList.add('in-vis')
    document.querySelector('.menu__button--create').classList.remove('in-vis')
    ev.target.classList.toggle('in-vis')

}

function handleCreateMenu(ev) {
    document.querySelector('.menu__create').classList.toggle('in-vis')
    document.querySelector('.menu__logIn').classList.add('in-vis')
    document.querySelector('.menu__button--login').classList.remove('in-vis')
    ev.target.classList.toggle('in-vis')
}

async function handleRent(id) {
    const { data } = await axios.post('/rentGame', {id,userId});
    if(typeof data === 'string'){
        alert(data)
    }
    else{
        renderGamesUser(data.store);
        games = data.store;
        renderCart(data.cart);
    }
}

// initPage();