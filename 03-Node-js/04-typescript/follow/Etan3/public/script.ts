if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', ready());
}else{
  ready();
}
function ready() {
  const cards = Ar
}
  async function renderGame () {
    let html = "";
    const shuffledCards = await this.shuffleCards();
    const emptyWrapper = document.querySelector(".wrapper__empty");
    const wrapper = document.querySelector(".wrapper");
    console.log(this);
    
    this.cards = shuffledCards
    

    try {
      if (Array.isArray(shuffledCards)) {
        shuffledCards.forEach((card) => {
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
  }