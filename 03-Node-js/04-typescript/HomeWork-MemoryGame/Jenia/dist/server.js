"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uid_1 = require("uid");
const app = express_1.default();
const port = 4000;
const cards = [
    { frontImg: "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1455528.jpg", id: uid_1.uid(), pairId: "1", },
    { frontImg: "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1455528.jpg", id: uid_1.uid(), pairId: "1", },
    { frontImg: "https://images.saymedia-content.com/.image/t_share/MTc0Mzg2MzUzNTMzMjk4MDI0/yu-gi-ohs-top-6-forbidden-monster-cards.jpg", id: uid_1.uid(), pairId: "2", },
    { frontImg: "https://images.saymedia-content.com/.image/t_share/MTc0Mzg2MzUzNTMzMjk4MDI0/yu-gi-ohs-top-6-forbidden-monster-cards.jpg", id: uid_1.uid(), pairId: "2", },
    { frontImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6K13gE52liz6b0Ju5hHN7JudULWYolp5XQ&usqp=CAU", id: uid_1.uid(), pairId: "3", },
    { frontImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6K13gE52liz6b0Ju5hHN7JudULWYolp5XQ&usqp=CAU", id: uid_1.uid(), pairId: "3", },
    { frontImg: "https://pbs.twimg.com/media/FMF-bGzagAQEgNv?format=jpg&name=medium", id: uid_1.uid(), pairId: "4", },
    { frontImg: "https://pbs.twimg.com/media/FMF-bGzagAQEgNv?format=jpg&name=medium", id: uid_1.uid(), pairId: "4", },
    { frontImg: "https://qph.fs.quoracdn.net/main-qimg-c39a0c50da1e677c062d1cae7f34d8bf-lq", id: uid_1.uid(), pairId: "5", },
    { frontImg: "https://qph.fs.quoracdn.net/main-qimg-c39a0c50da1e677c062d1cae7f34d8bf-lq", id: uid_1.uid(), pairId: "5", },
    { frontImg: "https://static.fandomspot.com/images/05/15002/20-mystic-tomato-ygo-card.jpg", id: uid_1.uid(), pairId: "6", },
    { frontImg: "https://static.fandomspot.com/images/05/15002/20-mystic-tomato-ygo-card.jpg", id: uid_1.uid(), pairId: "6", },
    { frontImg: "https://i.pinimg.com/736x/e0/16/9f/e0169fa7373ea5616e6aec392a64b7c2.jpg", id: uid_1.uid(), pairId: "7", },
    { frontImg: "https://i.pinimg.com/736x/e0/16/9f/e0169fa7373ea5616e6aec392a64b7c2.jpg", id: uid_1.uid(), pairId: "7", },
    { frontImg: "https://unicorncards.co.uk/images/thumbs/0037050_dama-en007-dramaturge-of-despia-ultra-rare-1st-edition-mint-yugioh-card_960.jpeg", id: uid_1.uid(), pairId: "8", },
    { frontImg: "https://unicorncards.co.uk/images/thumbs/0037050_dama-en007-dramaturge-of-despia-ultra-rare-1st-edition-mint-yugioh-card_960.jpeg", id: uid_1.uid(), pairId: "8", },
    { frontImg: "https://i.pinimg.com/736x/e0/16/9f/e0169fa7373ea5616e6aec392a64b7c2.jpg", id: uid_1.uid(), pairId: "9", },
    { frontImg: "https://i.pinimg.com/736x/e0/16/9f/e0169fa7373ea5616e6aec392a64b7c2.jpg", id: uid_1.uid(), pairId: "9", },
];
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.get('/new-game', (req, res) => {
    const newGame = ShuffleCards(cards);
    res.send(newGame);
});
function ShuffleCards(cards) {
    let currentIndex = cards.length, randomIndex;
    while (currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }
    return cards;
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
