function appInit(){
    getGames()
}

async function getGames() {
    const { data } = await axios.get("/get-games");
    const rootGames = document.querySelector(".rootGames")
    if (data) {
        renderGames(data,rootGames);
    }
}

<<<<<<< HEAD
function renderGames(data: Array<any>,root) {
=======
function renderGames(data: Array<any>, root) {
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
    let html = '';
    if (Array.isArray(data)) {
        data.forEach(game => {
            html += `
        <div class = "store">
            <div class = "store__header"><h2>Inventory List</h2></div>
            <div class = "store__gamesList">
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
}