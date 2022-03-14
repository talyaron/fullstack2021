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
let gameBoy = [
    {
        id: 1,
        Img: './images/tony',
        Name: 'Tony Hawks Pro Skater 2',
        Release: 2000,
        Description: 'Tony Hawks Pro Skater 2 is a skateboarding video game developed by Neversoft and published by Activision.'
    },
    {
        id: 2,
        Img: './images/mario',
        Name: 'Super Mario Land',
        Release: 1989,
        Description: 'Super Mario Land is a 1989 side-scrolling platform video game developed and published by Nintendo as a launch game for its Game Boy handheld game console.'
    },
];
app.get('/get-games', (req, res) => {
    const games = getAllGames();
    // const search = req.query.searchGame;
    // const filtered = filterGamesSearch(search)
    // res.send(filtered);
    res.send(games);
});
// function filterGamesSearch(ev){
//   if (ev) { 
//     const regex = new RegExp(ev, 'i');
//     return gameBoy.filter((game)=> regex.test(game.Name) || regex.test(game.Description));
//   }
// }
function getAllGames() {
    return gameBoy;
}
// const uid = function () {
//   return Date.now().toString(36) + Math.random().toString(36).substring(2);
// }
// function updateGames(id) {
//   id.forEach((game)=> {
//     id = uid();
//   })
// }
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
