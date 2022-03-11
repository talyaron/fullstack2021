let gameStats = {
    count: 0,
    flipped: 0,
    flippedIDs: [],
    flippedpairIDs: [],
    matches: 0,
}

function uniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function log(log) {
    // console.log(log)
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

    const rootHTML = getRootElement();

    let html = '<section class="cardsgrid">';

    cards.forEach(card => {

        html += `<div class="card" id="${card.uniqueID}">

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
        gameStats.flippedIDs.push(ev.path[1].id);
        gameStats.flippedpairIDs.push(ev.path[1].children[0].id);

        ev.path[1].children[1].style.display = 'flex'

        gameStats.flipped++;

        if (gameStats.flipped === 2) {
            checkFlipped(gameStats.flippedIDs, gameStats.flippedpairIDs)
            gameStats.flipped = 0;
            gameStats.flippedIDs = [];
            gameStats.flippedpairIDs = [];
        }
    }

}

function checkFlipped(flipped, flippedPair) {

    let cardDelete1: any = document.getElementById(flipped[0])
    let cardDelete2: any = document.getElementById(flipped[1])

    if (flippedPair[0] === flippedPair[1]) {

        setTimeout(() => {
            cardDelete1.classList.add('card-matched')
            cardDelete2.classList.add('card-matched')
        }, 1000);

        gameStats.matches++;

        if (gameStats.matches === 8) {
            setTimeout(() => {
                const cake: any = document.querySelector(".cake")
                cake.style.visibility = 'visible'
            }, 1050)

        }

    }
    else {

        setTimeout(() => {

            cardDelete1.children[0].style.display = 'flex'
            cardDelete1.children[1].style.display = 'none'
            cardDelete2.children[0].style.display = 'flex'
            cardDelete2.children[1].style.display = 'none'


        }, 1000)

    }
}

