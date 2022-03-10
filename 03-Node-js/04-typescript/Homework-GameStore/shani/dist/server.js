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
    { name: "Dread Hunger", id: 1, standardEdition: 110.95 },
    { name: "The Forest", id: 2, standardEdition: 73.95 },
    { name: "ELDEN RING", id: 3, standardEdition: 249.00, deluxeEdition: 329.00 },
    { name: "Dying Light", id: 4, standardEdition: 51.69, deluxeEdition: 63.48, bundleEdition: 122.32 },
    { name: "Project Zomboid", id: 5, standardEdition: 73.95, goldEdition: 224.95 },
    { name: "Sea of Thieves", id: 6, standardEdition: 179.00 },
    { name: "Phasmophobia", id: 7, standardEdition: 51.95 },
    { name: "Assassin's Creed", id: 8, standardEdition: 59.75, deluxeEdition: 74.50, goldEdition: 99.75 },
    { name: "Fall Guys: Ultimate Knockout", id: 9, standardEdition: 29.50, bundleEdition: 122.32 }
];
// let games=addedId(myGames)
// function uid() {
//     return Date.now().toString(36) + Math.random().toString(36);
// }
// function addedId(myGames){
//     let gameArray=[]
//     myGames.forEach((game)=>{
//         const tempObj={name:game.name,standardEdition:game.standardEdition,deluxeEdition:game.deluxeEdition,goldEdition:game.goldEdition,bundleEdition:game.bundleEdition};
//         const theGame:any=Object.assign({},tempObj);
//         theGame.id=uid();
//         gameArray=[...gameArray,theGame];
//     })
//     return gameArray;
// }
app.get('/get-games', (req, res) => {
    res.send(games);
});
app.post('/add-new-game', (req, res) => {
    const newname = req.body.name;
    const newStandardEdition = req.body.standardEdition;
    const newdeluxeEdition = req.body.deluxeEdition;
    const newgoldEdition = req.body.goldEdition;
    const newbundleEdition = req.body.bundleEdition;
    const games = addGame(newname, newStandardEdition, newdeluxeEdition, newgoldEdition, newbundleEdition);
    res.send(games);
});
app.post('/delete-game', (req, res) => {
    //const id = req.body.id
    const nameOfRemovedGame = req.body.deletedGame;
    const games = deleteGame(nameOfRemovedGame);
    res.send(games);
});
app.get('/get-game-by-id', (req, res) => {
    const searchedId = req.query.id;
    const games = getGameById(searchedId);
    res.send(games);
});
app.patch('/update-game', (req, res) => {
    const newStandardEdition = req.body.standardEdition;
    const newdeluxeEdition = req.body.deluxeEdition;
    const newgoldEdition = req.body.goldEdition;
    const newbundleEdition = req.body.bundleEdition;
    const id = req.body.id;
    updateGame(newStandardEdition, newdeluxeEdition, newgoldEdition, newbundleEdition, id);
    res.send(games);
});
function addGame(name, standardEdition, deluxeEdition, goldEdition, bundleEdition) {
    let i = games.length;
    games.push({ name, standardEdition, deluxeEdition, goldEdition, bundleEdition, id: i + 1 });
    return games;
}
function deleteGame(itemName) {
    const index = games.findIndex((item) => item.name === itemName);
    if (index >= 0) {
        games.splice(index, 1);
    }
    return games;
}
function getGameById(searchedId) {
    if (searchedId) {
        const foundGame = games.findIndex((game) => game.id == searchedId);
        return (games[foundGame]);
    }
    else {
        return games;
    }
}
function updateGame(standardEdition, deluxeEdition, goldEdition, bundleEdition, id) {
    const index = games.findIndex((game) => game.id == id);
    if (index > -1) {
        games[index] = { standardEdition, deluxeEdition, goldEdition, bundleEdition, id };
    }
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
