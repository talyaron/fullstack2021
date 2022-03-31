"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
let games = [
    { id: "sdfsdfg", title: "far cry", price: 18, rate: 3 },
    { id: "rtert", title: "GTA 5", price: 21, rate: 4 },
];
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.get("/get-all-games", (req, res) => {
    res.send({ games });
});
app.get("/get-games-by-price", (req, res) => {
    try {
        console.log(req.query);
        let { maxPrice } = req.query;
        if (maxPrice) {
            //filter by max price
            maxPrice = parseFloat(maxPrice);
            const filteredGames = games.filter((game) => game.price < maxPrice);
            res.send({ games: filteredGames });
        }
        else {
            throw new Error("No maxPrice in query");
        }
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message });
    }
});
app.delete("/delete-game", (req, res) => {
    try {
        console.log(req.body);
        const { id } = req.body;
        if (id) {
            const index = games.findIndex((game) => game.id === id);
            if (index === -1)
                throw new Error("Didnt find games with such an id");
            games = games.filter((game) => game.id !== id);
            console.log(games);
            res.send({ results: "Game deleted" });
        }
        else {
            throw new Error("Id was not found in request");
        }
    }
    catch (err) {
        console.error(`In delete-game: ${err.message}`);
        res.send({ error: err.message });
    }
});
app.patch("/update-game", (req, res) => {
    try {
        const { id, title } = req.body;
        if (!id || !title)
            throw new Error("No id or title in body");
        //update
        //find
        const index = games.findIndex((game) => game.id === id);
        //update
        if (index !== -1) {
            games[index].title = title;
        }
        else {
            throw new Error(`Didnt find any game with id ${id}`);
        }
        res.send({ results: games });
    }
    catch (err) {
        res.send({ error: err.message });
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
