"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3005;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
let uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
let games = {
    gamesArr: [
        { name: `Fifa`, price: 50, id: "sad21" },
        { name: `Gta`, price: 50, id: "jhbjh2" },
        { name: `God Of War`, price: 50, id: "hv21" },
        { name: `Nfs`, price: 50, id: "bhj23" }
    ],
    addGame(newGame) {
        // const id = uid();
        let uid = function () {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
        };
        const id = uid();
        this.gamesArr.push(Object.assign(Object.assign({}, newGame), { id }));
        console.log(games);
    },
    updateGame(name, price, id) {
        const index = this.gamesArr.findIndex((game) => game.id == id);
        if (index > -1) {
            this.gamesArr[index] = { name, price, id };
        }
    },
    deleteGame(id) {
        this.gamesArr = this.gamesArr.filter((game) => game.id !== id);
        console.log(this.gamesArr);
    }
};
app.get('/get-games', (req, res) => {
    res.send(games.gamesArr);
});
app.post('/add-games', (req, res) => {
    const addGame = req.body.addGame;
    games.addGame(addGame);
    res.send(games.gamesArr);
});
app.patch('/update-games', (req, res) => {
    const { name, price, id } = req.body;
    games.updateGame(name, price, id);
    res.send(games.gamesArr);
});
app.delete('/delete-games', (req, res) => {
    const id = req.body.id;
    games.deleteGame(id);
    res.send(games.gamesArr);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
