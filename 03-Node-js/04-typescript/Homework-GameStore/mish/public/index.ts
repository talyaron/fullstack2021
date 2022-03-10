async function getGames() {
    const { data } = await axios.get('/get-games')
    renderGames(data)
}

getGames();

function renderGames(data) {

    const rootHTML = document.querySelector('.root')

    let html = '';

    data.forEach(game => {
        html += `<div class="card">
        
        <p>${game.name} : ${game.price}$</p>
        <button onclick="handleDelete(event)" id="${game.name}">delete</button>
        <form onsubmit="handleUpdate(event)" id="${game.name}">
        <input type="text" id="name" placeholder="name">
        <input type="price" id="price" placeholder="price">
        <input type="submit" value="update">
        </form>
        </div>`
    });

    rootHTML.innerHTML = html;

}


async function handleDelete(ev) {
    const name = ev.target.id
    const { data } = await axios.post('/delete-game', { name });
    renderGames(data)
}

async function handleUpdate(ev) {

    ev.preventDefault();

    console.log(ev)

    const newName = ev.target.elements.name.value
    const newPrice = ev.target.elements.price.value
    const gameName = ev.target.id

    const { data } = await axios.patch('/update-game', { gameName, newName, newPrice });
    renderGames(data)

}
