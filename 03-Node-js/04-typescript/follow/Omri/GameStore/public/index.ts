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

async function handleUpdatGame(ev){
    ev.preventDefault();
    const rootGames = document.querySelector(".store__gamesList");
    const oldTitle = ev.document.elements.oldTitle.value;
    const title = ev.target.elements.title.value;
    const category = ev.target.elements.category.value;
    const price = ev.target.elements.price.value;
    const img = ev.target.elements.img.value;
    
}