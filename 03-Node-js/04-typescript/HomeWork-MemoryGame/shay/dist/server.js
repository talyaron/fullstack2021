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
const games = [{ photo: "https://publish.one37pm.net/wp-content/uploads/2020/05/spiderman-mobile.jpg", pairdId: 1, id: "" },
    { photo: "https://publish.one37pm.net/wp-content/uploads/2020/05/spiderman-mobile.jpg", pairdId: 1, id: "" },
    { photo: "https://cdn.vox-cdn.com/thumbor/ymxjRNyfsvewCNWNTwWL0KyX8O8=/0x389:2732x1819/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22802887/IMG_DE272BF718E8_1.jpeg", pairdId: 2, id: "" },
    { photo: "https://cdn.vox-cdn.com/thumbor/ymxjRNyfsvewCNWNTwWL0KyX8O8=/0x389:2732x1819/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22802887/IMG_DE272BF718E8_1.jpeg", pairdId: 2, id: "" },
    { photo: "https://www.dccomics.com/sites/default/files/Char_Gallery_Flash_758_6055049612af35.61135649.jpg", pairdId: 3, id: "" },
    { photo: "https://www.dccomics.com/sites/default/files/Char_Gallery_Flash_758_6055049612af35.61135649.jpg", pairdId: 3, id: "" },
    { photo: "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", pairdId: 4, id: "" },
    { photo: "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", pairdId: 4, id: "" },
    { photo: "https://www.entertainmentearth.com/news/wp-content/uploads/2014/10/iron-man-wrap.jpg", pairdId: 5, id: "" },
    { photo: "https://www.entertainmentearth.com/news/wp-content/uploads/2014/10/iron-man-wrap.jpg", pairdId: 5, id: "" },
    { photo: "https://www.pinkvilla.com/imageresize/mark-ruffalo-hulk.jpg?width=752&format=webp&t=pvorg", pairdId: 6, id: "" },
    { photo: "https://www.pinkvilla.com/imageresize/mark-ruffalo-hulk.jpg?width=752&format=webp&t=pvorg", pairdId: 6, id: "" }];
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get("/newGame", (req, res) => {
    const cards = shuffleCards();
    res.send(cards);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
app.post("/add-card", (req, res) => {
    console.log(req.body);
    const newCard = req.body.name;
    const newPairedId = req.body.name;
    const cards = addPhoto(newCard, newPairedId);
    res.send(cards);
});
function addPhoto(photo, pairdId) {
    const id = Math.random().toString(36);
    games.push({ photo, pairdId, id });
    return games;
}
function shuffleCards() {
    for (let i = games.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = games[i];
        games[i] = games[j];
        games[j] = temp;
    }
    return games;
}
