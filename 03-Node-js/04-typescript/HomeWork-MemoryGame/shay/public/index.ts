// function initApp() {
//   console.log("start");

//   console.log("end");
// }

function uniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

async function handleNewGame() {
  const { data } = await axios.get("/newGame");


  renderGame(data);
}

function getRootElement() {
  const rootHTML = <HTMLElement>document.querySelector(".root");
  return rootHTML;
}
function renderGame(data: Array<any>) {
  console.log(data);
 
  const rootHTML = getRootElement();
  
  let html = '<section class="cardsgrid">';

  data.forEach((game) => {
    html += `<div class="color" id="${game.pairID}">
     <img class="frontCard" src="${game.photo}"  id="${game.uniqueID}">
        <img class="backCard" onclick="handleFlipedCard()"  src="https://www.cinemascomics.com/wp-content/uploads/2021/05/Un-actor-de-Marvel-Studios-se-quiere-pasar-a-DC-Comics.jpg">
        
        </div>
      `;
  });
  html += "</section>";

  rootHTML.innerHTML = html;
}  let hasFlipped =false;
  let firstCard, secondCard;
 
  let lockBoard = false;
async function handleFlipedCard(){




  const cards = document.querySelectorAll('.color')
  cards.forEach(card=>card.addEventListener('click',flipCard))
 
}
async function flipCard(){
  //const { data } = await axios.get("/newGame");
 this.classList.add('flip')
 
  if(!hasFlipped){
    hasFlipped = true;
    firstCard =this;
    
  }
  else{
   
    secondCard = this;

    checkForMatch()
  }
  
}
async function checkForMatch(){


  let isMatch = firstCard.id === secondCard.id;
console.log(firstCard, secondCard);

  
console.log(isMatch);

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}


function resetBoard() {
  [hasFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

