"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3007;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const gamer = {
    games: [
        {
            id: Math.random().toString(36).slice(-8),
            category: 'Action',
            title: ' The King Of Fighter XV',
            price: 239,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/capsule_184x69.jpg?t=1645084787'
        },
        {
            id: Math.random().toString(36).slice(-8),
            category: 'Action',
            title: ' The King Of Fighter XV',
            price: 239,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/capsule_184x69.jpg?t=1645084787'
        },
        {
            id: Math.random().toString(36).slice(-8),
            category: 'Action',
            title: ' The King Of Fighter XV',
            price: 239,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/capsule_184x69.jpg?t=1645084787'
        },
        {
            id: Math.random().toString(36).slice(-8),
            category: 'Action',
            title: ' The King Of Fighter XV',
            price: 239,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/capsule_184x69.jpg?t=1645084787'
        },
    ],
    gameById() {
    },
    addGame(category, title, price, img) {
        const id = uid();
        this.games.push({ id, category, title, price, img });
    },
    updateGame() {
    }
};
const uid = function () {
    return Math.random().toString(36).slice(-8);
};
app.get("/get-games", (req, res) => {
    const gamer = getGames();
    res.send(gamer);
});
function getGames() {
    return gamer.games;
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
