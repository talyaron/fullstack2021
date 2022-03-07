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
const deckCards = [
    "AB.png", "AB.png", "S.png", "S.png",
    "COD.png", "COD.png", "DL.png", "DL.png", "DS.png",
    "DS.png", "NFH.png", "NFH.png", "NFS.png",
    "NFS.png", "POP.png", "POP.png"
];
app.get('/get-cards', (req, res) => {
    const shuffledDeck = shuffle(deckCards);
    res.send(shuffledDeck);
});
function shuffle(arr) {
    let currentIndex = arr.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
