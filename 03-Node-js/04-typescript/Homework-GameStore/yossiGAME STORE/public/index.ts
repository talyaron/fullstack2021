
async function handleLoad(ev) {
    await axios.get('/get-games').then(({ data }) => {

        console.log(data)

        const root = document.querySelector('#root')

        renderAll(root, data)
    })
}


function renderAll(root, games) {
    let html = '';
    games.forEach(game => {
        html += `<div class="game">
            <div class="image-wrapper shine"><img src="${game.img}" alt=""></div>
            <div class="gameText">
            <div style="color: brown;"><span style="color: #bbb8b8;">Id:</span>${game.id}</div>
            <div style="color: #69a130;"><span style="color: #bbb8b8;">Name:</span>${game.name}</div>
            <div style="color: #ea9a9a;"><span style="color: #bbb8b8;">Price:</span>${game.price}$</div>

            <form id="${game.id}" onsubmit="handleUpdateGame(event)">
            <input type="text" name="name" placeholder="Name" value="${game.name}">
            <input type="number" name="price" placeholder="Price" value="${game.price}">
            <input type="text" name="img" placeholder="Img" value="${game.img}">
            <input class="updateBtn" type="submit" value="Update">
            <button onclick="handleDelete('${game.id}')">delete</button>
            </form>

            </div>
            </div>
            `
    });
    root.innerHTML = html;
}

async function handleDelete(ev) {
    const id = ev.target.value
    console.log(id)
    const { data } = await axios.post('/delete-game',  id)
    const root = document.querySelector('#root')
    renderAll(root, data)
}

async function handleAddGame(ev) {
    ev.preventDefault()
    const addGame = { id: ev.target.elements.id.valueAsNumber, name: ev.target.elements.name.value, price: ev.target.elements.price.valueAsNumber, img: ev.target.elements.img.value }
    const { data } = await axios.post('/add-game', { addGame })
    const root = document.querySelector('#root')
    renderAll(root, data)
    ev.target.reset();
}


async function handleUpdateGame(ev) {
    ev.preventDefault();
    const id = ev.target.id;
    const updateGame = { name: ev.target.elements.name.value, price: ev.target.elements.price.valueAsNumber, img: ev.target.elements.img.value };
    const { data } = await axios.patch('/update-game', { ...updateGame, id });
    const root = document.querySelector('#root');
    renderAll(root, data)
    ev.target.reset();
}


function handleSearchId(ev) {
    const id = ev.target.value;
    axios.get(`/get-games-id?id=${id}`).then(({ data }) => {
        console.log(data);
        const root = document.querySelector('#root')
        renderAll(root, data)
    })
}


function handleSearchPrice(ev) {
    const price = ev.target.value;
    axios
        .get(`/get-games-price?price=${price}`)
        .then(({ data }) => {
            console.log(data);
            const root = document.querySelector('#root')
            renderAll(root, data)
        })
}




