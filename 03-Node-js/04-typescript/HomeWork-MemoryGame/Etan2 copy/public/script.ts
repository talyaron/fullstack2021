let hasFlippedCard = false;
let firstCard, secondCard;
const game = {
  cards: [],
  getCards: async function () {
    try {
      const { data } = await axios.get("/new-game");


      if (Array.isArray(data)) return data;
    } catch (error) {
      console.error(error);
    }
  },
  shuffleCards: async function () {
    this.cards = await this.getCards();
    let shuffled = this.cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  },
  renderGame: async function () {
    let html = "";
    this.cards = await this.shuffleCards();

    const emptyWrapper = document.querySelector(".wrapper__empty");
    const wrapper = document.querySelector(".wrapper");
    console.dir(this);

    try {
      if (Array.isArray(this.cards)) {
        this.cards.forEach((card) => {
          html += `<div id="${card.id}" onclick='handleFlip(event)' class="card">
          <div class="card__face-back">
          </div>
          <div class="card__face-front">
          <img src="${card.src}.jpg">
          </div>
          </div>`;
          wrapper.innerHTML = "";
          emptyWrapper.innerHTML = html;
        });
        return;
        ///<object id="front" data="./Images/cardBack.svg" type="image/svg+xml">
        // <img src="./Images/cardBack.svg">
        // </object>
      }
      throw new Error("no array of cards found");
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  flipCard: function (card) {
    try {
      if (card.hasAttribute("id")) {
        card.classList.toggle("flipped");
        if (!hasFlippedCard) {
          hasFlippedCard = true;
          firstCard = card;
          
        } else {
          hasFlippedCard = false;
          secondCard = card;
        }


        return handleCardMatching(firstCard, secondCard, hasFlippedCard);
      }
      throw new Error("no card was found");
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

function handleCardMatching(firstCard, secondCard, hasFlippedCard) {
  const pairs = [
    [1, 15], [15, 1],
    [2, 16], [16, 2],
    [3, 13], [13, 3],
    [4, 12], [12, 4],
    [5, 11] ,[11, 5],
    [6, 9], [9, 6],
    [7, 14], [14, 7],
    [8, 10], [10, 8]
  ];
  console.log(firstCard, secondCard, hasFlippedCard)
  if (hasFlippedCard !== true) {
    for (let i of pairs) {
  
      let matchCheck = [firstCard.id, secondCard.id]
      
      
      if(i.toString() === matchCheck.toString()) {

        console.log("its a match");
       return; 
      }

      
    }
    setTimeout(() => {
      firstCard.classList.toggle("flipped");
      secondCard.classList.toggle("flipped");
    }, 2500);
  }
}
function handleNewGame() {
  game.renderGame();
}
function handleFlip(ev) {
  const card = ev.path[1];
  game.flipCard(card);
}
