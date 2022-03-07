let gameStats = {
    count: 0,

}
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

    const rootHTML = getRootElement();

    let html = '<section class="cardsgrid">';


    let uniqueId = function () {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

    cards.forEach(card => {
        html += `<div class="card" onclick="handleCardClick(event)" id="${uniqueId()}">

        <div class="card--back">
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

    else{
        
        ev.path[1].children[0].style.display = 'none'
        ev.path[1].children[1].style.display = 'flex'

        checkFlipped();

        if (checkFlipped()) {
            resetCards(ev.path[1])
        }
    }


}

function checkFlipped() {

    gameStats.count++

    if (gameStats.count === 2) {
        gameStats.count = 0;
        return true;
    }
}

function resetCards(cards) {

    try {
        for (let i = 1; i < cards.length; i++) {
            cards.children[0].style.display = 'flex'
            cards.children[1].style.display = 'none'
        }
    }
    catch (err) {
        console.error(err.message);
    }
}