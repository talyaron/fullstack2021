
function log(log) {
    console.log(log)
    console.dir(log)
}

function getRootElement() {
    const rootHTML = <HTMLElement>document.querySelector(".root");
    return rootHTML;
}

async function getCards() {
    const { data } = await axios.get('/get-cards')
    renderCards(data);
}

function handleStart() {

    const startButton = <HTMLElement>document.querySelector(".startButton");
    const rootHTML = getRootElement();
    startButton.style.display = 'none';
    rootHTML.style.display = 'flex';

    getCards();

}

function renderCards(cards) {

    for (let i = 0; i < cards.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }

    const rootHTML = getRootElement();

    let html = '<section class="cardsgrid">';


    let uniqueId = function () {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

    cards.forEach(card => {
        html += `<div class="card" onclick="handleCardClick(event)" id="${uniqueId}">

        <div class="card--front">
          <div class="img" style="background:url(${card.url}); background-size:cover; background-position:center;"></div>
          <div class="card__footer">${card.name}</div>
        </div>

        <div class="card--back">
        ?
        </div>

        </div>`
    });

    html += '</section>'

    rootHTML.innerHTML = html;
}

function handleCardClick(ev) {

    log(ev.path[1].id)

}