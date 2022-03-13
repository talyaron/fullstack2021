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
let games = [
    { name: "Dread Hunger", id: 1, standardEdition: 110.95, frontImg: "https://cdn.akamai.steamstatic.com/steam/apps/1418630/header.jpg?t=1646709871", backImg: "https://cdn.akamai.steamstatic.com/steam/apps/1418630/extras/N0PNEWK_-_Imgur.gif?t=1646709871" },
    { name: "The Forest", id: 2, standardEdition: 73.95, frontImg: "https://cdn.akamai.steamstatic.com/steam/apps/242760/header.jpg?t=1590522045", backImg: "https://thumbs.gfycat.com/DenseQuaintGerenuk-size_restricted.gif" },
    { name: "ELDEN RING", id: 3, standardEdition: 249.00, deluxeEdition: 329.00, frontImg: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1646817776", backImg: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/extras/ER_Steam_Gif_616x260.gif?t=1646817776" },
    { name: "Dying Light", id: 4, standardEdition: 51.69, deluxeEdition: 63.48, bundleEdition: 122.32, frontImg: "https://cdn.akamai.steamstatic.com/steam/apps/239140/header.jpg?t=1644831730", backImg: "https://c.tenor.com/2uDhGM___TAAAAAd/dying-light-video-game.gif" },
    { name: "Project Zomboid", id: 5, standardEdition: 73.95, goldEdition: 224.95, frontImg: "https://cdn.akamai.steamstatic.com/steam/apps/108600/header.jpg?t=1644611871", backImg: "https://c.tenor.com/0FCL9c7B40sAAAAd/project-zomboid-zomboid.backImg" },
    { name: "Sea of Thieves", id: 6, standardEdition: 179.00, frontImg: "https://cdn.akamai.steamstatic.com/steam/apps/1172620/header.jpg?t=1647004467", backImg: "https://c.tenor.com/P_XClV6p7QwAAAAd/sea-of-thieves.gif" },
    { name: "Phasmophobia", id: 7, standardEdition: 51.95, frontImg: "https://cdn.akamai.steamstatic.com/steam/apps/739630/header.jpg?t=1638041534", backImg: "https://thumbs.gfycat.com/AdvancedNearHawaiianmonkseal-size_restricted.gif" },
    { name: "Assassin's Creed", id: 8, standardEdition: 59.75, deluxeEdition: 74.50, goldEdition: 99.75, frontImg: "https://cdn.akamai.steamstatic.com/steam/apps/812140/header.jpg?t=1646425720", backImg: "https://media1.giphy.com/media/XCSWNvBuymycw/giphy.gif" },
    { name: "Fall Guys: Ultimate Knockout", id: 9, standardEdition: 29.50, bundleEdition: 122.32, frontImg: "https://cdn.akamai.steamstatic.com/steam/apps/1097150/header.jpg?t=1646934357", backImg: "https://i.pinimg.com/originals/e2/20/da/e220da77235f0c68f1a3c766e3f9c521.gif" }
];
app.get('/get-games', (req, res) => {
    res.send(games);
});
app.post('/add-new-game', (req, res) => {
    const newname = req.body.name;
    const newfrontImg = req.body.frontImg;
    const newbackImg = req.body.backImg;
    const newStandardEdition = req.body.standardEdition;
    const newdeluxeEdition = req.body.deluxeEdition;
    const newgoldEdition = req.body.goldEdition;
    const newbundleEdition = req.body.bundleEdition;
    const games = addGame(newname, newfrontImg, newbackImg, newStandardEdition, newdeluxeEdition, newgoldEdition, newbundleEdition);
    res.send(games);
});
app.post('/delete-game', (req, res) => {
    const nameOfRemovedGame = req.body.deletedGame;
    const games = deleteGame(nameOfRemovedGame);
    res.send(games);
});
app.get('/get-game-by-id', (req, res) => {
    const { id, x } = req.query;
    const games = getGameById(id);
    res.send(games);
});
app.patch('/update-game', (req, res) => {
    const { name, frontImg, backImg, standardEdition, deluxeEdition, goldEdition, bundleEdition, id } = req.body;
    const games = updateGame(name, frontImg, backImg, standardEdition, deluxeEdition, goldEdition, bundleEdition, id);
    res.send(games);
});
app.get('/search-game', (req, res) => {
    const search = req.query.search;
    const filteredGame = filteredGameSearch(search);
    res.send(filteredGame);
    res.send(games);
});
function filteredGameSearch(search) {
    if (search) {
        const regex = new RegExp(search, "i");
        return games.filter((searchedTerm) => regex.test(searchedTerm.name));
    }
    else {
        return games;
    }
}
function addGame(name, frontImg, backImg, standardEdition, deluxeEdition, goldEdition, bundleEdition) {
    let i = games.length;
    games.push({ name, frontImg, backImg, standardEdition, deluxeEdition, goldEdition, bundleEdition, id: i + 1 });
    return games;
}
function deleteGame(itemName) {
    const index = games.findIndex((item) => item.name === itemName);
    if (index >= 0) {
        games.splice(index, 1);
    }
    else if (index == -1) {
        console.log('there is no game with that name');
    }
    else {
        return games;
    }
}
function getGameById(id) {
    try {
        if (id > 0) {
            const foundGame = games.findIndex((game) => game.id == id);
            if (foundGame === -1)
                throw new Error(`there is no id like ${id} `);
            return [games[foundGame]];
        }
        else {
            return [games];
        }
    }
    catch (error) {
        console.error(error.message);
    }
}
function updateGame(name, frontImg, backImg, standardEdition, deluxeEdition, goldEdition, bundleEdition, id) {
    const index = games.findIndex((game) => game.id == id);
    if (index > -1) {
        games[index] = { name, frontImg, backImg, standardEdition, deluxeEdition, goldEdition, bundleEdition, id };
    }
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
