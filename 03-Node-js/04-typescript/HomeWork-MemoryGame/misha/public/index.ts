function log(log){
    console.log(log)
    console.dir(log)
}

async function getCards() {
    const {cards} = await axios.get('/get-cards')
    log(cards)
}

function handleStart(){

    const startButton = <HTMLElement>document.querySelector(".startButton");
    const rootHTML = <HTMLElement>document.querySelector(".root");
    startButton.style.display = 'none';
    rootHTML.style.display = 'grid';

    getCards();


}