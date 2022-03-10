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
                <div class = "store__gamesList--img"><img src =" ${game.img}"></div>
                <div class = "store__gamesList--title">Title: ${game.title}</div>
                <div class = "store__gamesList--price">price: ${game.price}</div>
                <div class = "store__gamesList--category">Category: ${game.category}</div>
            </div>`
        })
        root.innerHTML = html;
    }
}

async function handleAddGame(ev){
    ev.preventDefault();
    const rootGames = document.querySelector(".store__gamesList")
    const title = ev.target.elements.title.value;
    const category = ev.target.elements.category.value;
    const price = ev.target.elements.price.value;
    const img = ev.target.elements.img.value;
    const {data} = await axios.post("/add-game", {title:title, category:category, price:price, img:img});
    renderGames(data,rootGames);
    console.log(data)
    console.log(ev)
}