
function initApp() {
    console.log("start");
    getAllCards();
    console.log("end");
}

function handleNewGame(ev: Event) {
    shuffleCards(ev);
    console.log('trying');
}

const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', handleNewGame);
}


async function shuffleCards(ev) {
    const { data } = await axios.get("/get-cards");
    const shuffle = data.sort((ev) => 0.5 - Math.random());
    console.log(shuffle);
    renderCards(shuffle)
}

async function getAllCards() {
    const { data } = await axios.get("/get-cards");
    console.log(data);
    renderCards(data);
}

function renderCards(data: Array<any>) {
    let html = "";
    data.forEach((card) => {
        html += `
        <div class="cardPack_cards"> 
        <img src="${card.img}"> 
        </div>`
        const root = document.querySelector(".cardPack");
        root.innerHTML = html;
    })
}