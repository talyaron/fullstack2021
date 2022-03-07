
const game = {

    cards: [],
    pair: [],

    getcards: async function () {
        const { data } = await axios.get("/get-cards");
        console.log(data);
        return data
    },

    loadgame: async function () {
        const cards = await this.getcards()
        this.rendergame(cards)

    },

    flipBackUnPairedCards() {
        Array.from(document.querySelectorAll(".card"))
            .forEach(function (val) {
                val.style.transform = "rotateY(0deg)";
            });
    },

    rendergame(cards) {
        const root = document.querySelector('#root')
        let html = ''
        cards.forEach(card => {
            html += `
            <div class="container">
            <div class="card" onclick="flip(event)">
              <div class="front">
                <h1>Flip Card</h1>
              </div>
              <div class="back">
                <h1><img src="${card.img}" alt=""></h1>
              </div>
            </div>
            </div>`
        });
        root.innerHTML = html
    },
};


function handleNewGame() {
    game.loadgame()
}


let NumberOfClicks = 0
function flip(event) {
    NumberOfClicks++
    console.log(NumberOfClicks)
    const element = event.currentTarget;

    if (NumberOfClicks <= 2) {
        if (element.className === "card") {
            if (element.style.transform === "rotateY(180deg)") {
                element.style.transform = "rotateY(0deg)";
            }
            else {
                element.style.transform = "rotateY(180deg)";
            }
        }
    }
    else {
        game.flipBackUnPairedCards()
        NumberOfClicks = 0
    }
};

