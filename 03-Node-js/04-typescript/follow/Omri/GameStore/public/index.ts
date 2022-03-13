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

<<<<<<< HEAD
<<<<<<< HEAD
function renderGames(data: Array<any>,root) {
=======
function renderGames(data: Array<any>, root) {
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
=======


function renderGames(data: Array<any>, root) {
>>>>>>> parent of d2fdcf04 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
    let html = '';
    if (Array.isArray(data)) {
        data.forEach(game => {
            html += `
            <div class = "store__gamesList">
<<<<<<< HEAD
<<<<<<< HEAD
                <div class = "store__gamesList--img"><img src = "${game.img}"><div>
                <div class = "store__gamesList--title">Title: "${game.title}"<div>
                <div class = "store__gamesList--price">price: ${game.price}<div>
                <div class = "store__gamesList--category">Category: "${game.category}"<div>
            <div>
        </div>`
        })
        root.innerHTML = html;
    }
    
=======
                <div class = "store__gamesList--img"><img src = ${game.img}></div>
                <div class = "store__gamesList--title">Title: ${game.title}</div>
                <div class = "store__gamesList--price">price: ${game.price}</div>
                <div class = "store__gamesList--category">Category: ${game.category}</div>
            </div>`
        })
        root.innerHTML = html;
    }

>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
=======
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
}

async function handleUpdatGame(ev){
    ev.preventDefault();
    const rootGames = document.querySelector(".store__gamesList");
    const oldTitle = ev.target.elements.oldTitle.value;
    const title = ev.target.elements.title.value;
    const category = ev.target.elements.category.value;
    const price = ev.target.elements.price.value;
    const img = ev.target.elements.img.value;
    const {data} = await axios.patch("/update-game", {oldTitle,title,category,price,img});
    renderGames(data,rootGames);
>>>>>>> parent of d2fdcf04 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
}