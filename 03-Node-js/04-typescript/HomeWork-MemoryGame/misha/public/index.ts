let gameStats = {
    count: 0,
    flipped: 0,
    flippedIDs: [],

}

function uniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function log(log) {
    console.log(log)
    // console.dir(log)
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

    const rootHTML = getRootElement();

    let html = '<section class="cardsgrid">';

    cards.forEach(card => {

        html += `<div class="card" id="${card.pairID}">

        <div class="card--back"  onclick="handleCardClick(event)" id="${card.pairID}">
        ?
        </div>

        <div class="card--front">
          <div class="img" style="background:url(${card.url}); background-size:cover; background-position:center;"></div>
          <div class="card__footer">${card.name}</div>
        </div>


        </div>`
    });

    html += '</section>'

    rootHTML.innerHTML = html;
}

function handleCardClick(ev) {

    if (ev.path[1].children[0].style.display === 'none') {
        return 0;
    }

    else {

        ev.path[1].children[0].style.display = 'none'
        gameStats.flippedIDs.push(ev.path[1].children[0].id);

        ev.path[1].children[1].style.display = 'flex'

        gameStats.flipped++;

        if (gameStats.flipped === 2) {
            checkFlipped(gameStats.flippedIDs)
            gameStats.flipped = 0;
            gameStats.flippedIDs = [];
        }
    }

}

function checkFlipped(flipped) {

if(flipped[0]===flipped[1]){
    let cardDelete = <HTMLElement>document.querySelector(`#${flipped[0]}`)
    cardDelete.style.visibility = 'hidden'
}
else{
    return false;
}
}
