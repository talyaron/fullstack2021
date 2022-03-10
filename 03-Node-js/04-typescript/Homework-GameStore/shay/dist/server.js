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
;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const games = [
    {
        photo: "https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg",
        title: "fortnite",
        price: 50,
        id: uid()
    },
    {
        photo: "https://images.indianexpress.com/2022/01/Roblox-all-you-need-to-know.jpg",
        title: "roblox",
        price: 30,
        id: uid()
    },
    {
        photo: "https://solitaired.com/images/favicons/card-tableau.png",
        title: "soliter",
        price: 8,
        id: uid()
    },
    {
        photo: "https://s1.gaming-cdn.com/images/products/10059/orig/fifa-22-pc-game-steam-cover.jpg",
        title: "fifa",
        price: 20,
        id: uid()
    },
    {
        photo: "https://images.ctfassets.net/vfkpgemp7ek3/1431040860/7ff591a96c3bae4e9d11f0bc6854ccde/candy-crush-soda-saga-header.jpg",
        title: "candy crush",
        price: 10,
        id: uid()
    },
    {
        photo: "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/5f/fe/67/5ffe67ed-cd11-fda7-71b4-e3244335cdfe/PlayerIcon.png/1200x630bb.png",
        title: "aurora hex",
        price: 4,
        id: uid()
    },
    {
        photo: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg",
        title: "gta",
        price: 60,
        id: uid()
    },
    {
        photo: "https://www.allkeyshop.com/blog/wp-content/uploads/buy-gin-rummy-online-card-game-cd-key-compare-prices.jpg",
        title: "gin rummy",
        price: 30,
        id: uid()
    },
];
app.get('/newGames', (req, res) => {
    getGames(games);
    res.send(games);
});
app.post('/updateGames', (req, res) => {
    const updatedGame = req.body.game;
    const i = games.findIndex(game => game.id == updatedGame.id);
    games[i].title = updatedGame.title;
    games[i].photo = updatedGame.photo;
    games[i].price = updatedGame.price;
    games[i].id = updatedGame.id;
    res.send(games);
});
app.delete('/deleteGame', (req, res) => {
    let gamesStore = games.filter(game => game.id != req.body.id);
    res.send(gamesStore);
});
function getGames(games) {
    return games;
}
app.post("/add-games", (req, res) => {
    console.log(req.body);
    const newGameName = req.body.name;
    const newPhoto = req.body.name;
    const newPriceGame = req.body.name;
    const games = addGames(newPhoto, newGameName, newPriceGame, uid());
    res.send(games);
});
function addGames(photo, title, price, id) {
    // let i = games.length;
    // console.log(games.length);
    games.push({ photo, title, price, id });
    return games;
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
