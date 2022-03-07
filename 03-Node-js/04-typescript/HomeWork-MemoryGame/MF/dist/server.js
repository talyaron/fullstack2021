"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
let MemoryCards = [
    { src: 'img/waterMelon.PNG', name: 'waterMalon', id: 0 },
    { src: 'img/pineapple.PNG', name: 'pineapple', id: 1 },
    { src: 'img/orange.PNG', name: 'orange', id: 2 },
    { src: 'img/date.PNG', name: 'date', id: 3 },
    { src: 'img/bannana.PNG', name: 'bannana', id: 4 },
    { src: 'img/apple.PNG', name: 'apple', id: 5 },
    { src: 'img/waterMelon.PNG', name: 'waterMalon', id: 0 },
    { src: 'img/pineapple.PNG', name: 'pineapple', id: 1 },
    { src: 'img/orange.PNG', name: 'orange', id: 2 },
    { src: 'img/date.PNG', name: 'date', id: 3 },
    { src: 'img/bannana.PNG', name: 'bannana', id: 4 },
    { src: 'img/apple.PNG', name: 'apple', id: 5 },
];
// let unFlippedCards = [
//   { src: 'img/fruits.PNG', name: 'fruits' },
//   { src: 'img/white.PNG', name: 'white' },
// ]
app.get('/new-game', (req, res) => {
    const shuffled = shuffleCards(MemoryCards);
    res.send(shuffled);
});
function shuffleCards(MemoryCards) {
    return MemoryCards.sort(() => .5 - Math.random());
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
