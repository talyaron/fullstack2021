async function handleNewGame() {

    await axios.get('/new-game')
        .then(({ data }) => {
            renderNewGame(data);            
        })
}

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function renderNewGame(data) {

    const grid = document.querySelector('.grid');

    for (let i = 0; i < data.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'img/fruits.PNG');
        card.setAttribute('data-id', `${i}`);

        card.addEventListener('click', flipCard(){
        });
        grid.appendChild(card);

    }

}

function flipCard(data, card){

}
    


function checkForMatch({ cardsChosen, cardsChosenId }) {
    const cards = document.querySelectorAll('img');  
        
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionTwoId].setAttribute('src', 'img/white.PNG')
        cards[optionTwoId].setAttribute('src', 'img/white.PNG')
        cardsWon.push(cardsChosen)
        console.log(cardsChosen, cardsChosenId);

    } else {
        cards[optionOneId].setAttribute('src', 'img/fruits.PNG')
        cards[optionTwoId].setAttribute('src', 'img/fruits.PNG')        

    }
    cardsChosen = []
    cardsChosenId = []





}












