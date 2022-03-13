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
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
let games = [
    { photo: "https://publish.one37pm.net/wp-content/uploads/2020/05/spiderman-mobile.jpg" },
    { photo: "https://cdn.vox-cdn.com/thumbor/ymxjRNyfsvewCNWNTwWL0KyX8O8=/0x389:2732x1819/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22802887/IMG_DE272BF718E8_1.jpeg" },
    { photo: "https://www.dccomics.com/sites/default/files/Char_Gallery_Flash_758_6055049612af35.61135649.jpg" },
    { photo: "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
    { photo: "https://upload.wikimedia.org/wikipedia/he/7/77/Iron_Man_Bleeding_Edge_Armor.jpg" },
    { photo: "https://www.pinkvilla.com/imageresize/mark-ruffalo-hulk.jpg?width=752&format=webp&t=pvorg" },
];
function doubleCards(games) {
    let doubleArray = [];
    games.forEach((card) => {
        const tempObj = { photo: card.photo, pairID: uid() };
        const card1 = Object.assign({}, tempObj);
        const card2 = Object.assign({}, tempObj);
        card1.uniqueID = uid();
        card2.uniqueID = uid();
        doubleArray = [...doubleArray, card1, card2];
    });
    return doubleArray;
}
const deck = doubleCards(games);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get("/newGame", (req, res) => {
    shuffleCards(deck);
    console.log(deck);
    res.send(deck);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
function shuffleCards(games) {
    for (let i = 0; i < games.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = games[i];
        games[i] = games[j];
        games[j] = temp;
    }
}
app.post("/isPair", (req, res) => {
    const pairId = req.body.name;
    res.send(pairId);
});
