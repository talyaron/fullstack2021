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
let uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
let gamesArr = [
    { name: 'FIFA 22', price: 75, id: uid() },
    { name: 'NBA 2K22', price: 65, id: uid() },
    { name: 'Call Of Duty', price: 40, id: uid() },
    { name: 'GTA 5', price: 63, id: uid() },
    { name: 'Need For Speed', price: 53, id: uid() },
    { name: 'Super Mario', price: 25, id: uid() }
];
app.get('/get-games', (req, res) => {
    res.send(gamesArr);
});
app.post('/add-game', (req, res) => {
    const newName = req.body.newName;
    const newPrice = req.body.newPrice;
    const games = addNewGame(newName, newPrice, uid());
    res.send(games);
});
function addNewGame(gameName, gamePrice, uid) {
    gamesArr.push({ name: gameName, price: gamePrice, id: uid });
    return gamesArr;
}
app.post("/delete-game", (req, res) => {
    const id = req.body.id;
    gamesArr = deleteGame(id);
    res.send(gamesArr);
});
function deleteGame(gameID) {
    console.log(gameID);
    const arr = gamesArr.filter((game) => game.id !== gameID);
    return arr;
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
