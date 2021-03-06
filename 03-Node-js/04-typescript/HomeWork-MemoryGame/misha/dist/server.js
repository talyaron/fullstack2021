"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
function uid() {
    return Date.now().toString(36) + Math.random().toString(36);
}
const cardUrls = [
    { name: 'Kurt Cubain', url: 'https://api.time.com/wp-content/uploads/2014/03/3220062.jpg' },
    { name: 'Janis Joplin', url: 'https://static.wixstatic.com/media/3655b5_131d8f0442c643f683fb57b36a2da944~mv2.jpg/v1/fill/w_635,h_617,al_c,q_90/3655b5_131d8f0442c643f683fb57b36a2da944~mv2.jpg' },
    { name: 'Amy Winehouse', url: 'https://cdn.artphotolimited.com/images/60229b05bd40b857475a9987/1000x1000/amy-winehouse-9.jpg' },
    { name: 'Jim Morrison', url: 'https://rockcelebrities.net/wp-content/uploads/2021/06/jim-morrison-3-1200x900.jpg' },
    { name: 'Jimi Hendrix', url: 'https://i.guim.co.uk/img/media/bdcb6fedd21de7122fb541b95749b4543254035a/0_204_2572_1543/master/2572.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=11aeffd16b0d57ac0dda0cfb4cd22bf9' },
    { name: 'Brian Jones', url: 'https://m.media-amazon.com/images/M/MV5BZmJhNGRmODYtODE4ZC00NjkzLTk1NTItYWFmMzZmMDgxNzM0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg' },
    { name: 'Kim Jong-hyun', url: 'https://0.soompi.io/wp-content/uploads/2017/12/18140428/Jonghyun.jpg?s=900x600&e=t' },
    { name: 'Avril Lavigne', url: 'https://i.pinimg.com/originals/63/07/78/6307783e8b8068692c84a4e276aedf8f.jpg' },
];
const cardsDeck = doubleCards(cardUrls);
function doubleCards(cardUrls) {
    let doubleArray = [];
    cardUrls.forEach((card) => {
        const tempObj = { name: card.name, url: card.url, pairID: uid() };
        const card1 = Object.assign({}, tempObj);
        const card2 = Object.assign({}, tempObj);
        card1.uniqueID = uid();
        card2.uniqueID = uid();
        doubleArray = [...doubleArray, card1, card2];
    });
    return doubleArray;
}
app.get('/get-cards', (req, res) => {
    shuffleCards(cardsDeck);
    res.send(cardsDeck);
});
function shuffleCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
