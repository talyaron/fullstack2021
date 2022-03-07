function appInit() {
    // getCards();
}

async function handleNewGame(ev){
    const {data} = await axios.get("/newGame");
    renderNewGame(data)
}

function renderNewGame(data) {
    const root = document.querySelector("#root")
    let html = ''
    if (Array.isArray(data)){
        data.forEach(card => {
            html += `    <div class="card">
            <div class="card__inner" onclick="handleFlip(event)">
                <div class="card__face card__face--front">
                    <img src="./img/${card.beforeFlipImg}">
                </div>
                <div class="card__face card__face--back">
                    <img src="./img/${card.afterFlipImg}">
                </div>
            </div>
        </div>`
        })
        root.innerHTML = html
       
    }

}

function handleFlip(ev){
    console.log(ev.target)
// const card = document.querySelector(".card__inner");
// card.addEventListener("click", function (e) {
//     card.classList.toggle('is-flipped');
//   });
}
