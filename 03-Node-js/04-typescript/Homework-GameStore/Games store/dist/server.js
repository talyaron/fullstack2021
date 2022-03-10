"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 4000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
;
// const uid = function () {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2);
// }
let games = {
    gamesData: [
        { name: 'Airborne Kingdom', price: 74.5, id: 1 },
        { name: 'Paint Warfare', price: 'Free', id: 2 },
        { name: 'REBEL', price: 2.5, id: 3 },
        { name: 'A Musical Story', price: 50.35, id: 4 },
        { name: 'Automon', price: 29.5, id: 5 },
    ],
    getGameById(id) {
        const specificGame = this.gamesData.findIndex((game) => game.id == id);
        return [this.gamesData[specificGame], this.gamesData.length];
    },
    addGame(newGame) {
        let i = this.gamesData.length;
        this.gamesData.push(Object.assign(Object.assign({}, newGame), { id: i + 1 }));
    },
    updateGame(name, price, id) {
        const index = this.gamesData.findIndex((game) => game.id == id);
        if (index > -1) {
            this.gamesData[index] = { name, price, id };
        }
    }
};
app.get('/all-games', (req, res) => {
    res.send(games.gamesData);
});
app.get('/get-game-by-id', (req, res) => {
    const search = req.query.search;
    // res.send(specificGame)
});
app.post('/add-game', (req, res) => {
    const addGame = req.body.addGame;
    games.addGame(addGame);
    // console.log(games.gamesData);
    res.send(games.gamesData);
    // console.log(addGame.game);
    // const {price} = addGame;
    // console.log(price);
});
app.patch('/update-game', (req, res) => {
    const { name, price, id } = req.body;
    // console.log(name,price,id);
    games.updateGame(name, price, id);
    res.send(games.gamesData);
});
let users = {
    userData: [
        { username: 'michael', email: 'miki.frankel@gmail.com', password: 'a' },
        { username: 'neta', email: 'neta.frankel@gmail.com', password: 'Blibli2' },
    ],
    checkIfUserLogedAlready(email) {
        const index = this.userData.findIndex(user => user.email === email);
        if (index === -1) {
            return true;
        }
        else {
            return false;
        }
    },
    addUser(username, email, password) {
        this.userData.push({ username, email, password });
    },
    checkNameAndPassword(name, password) {
        const index = this.userData.findIndex((user) => user.username === name && user.password === password);
        if (index !== -1) {
            return true;
        }
        else {
            return false;
        }
    },
};
app.post('/add-user', (req, res) => {
    const { username, email, password } = req.body;
    const userInsideOrNot = users.checkIfUserLogedAlready(email);
    if (userInsideOrNot === true) {
        users.addUser(username, email, password);
        res.send(Object.assign(Object.assign({}, users.userData), { username, userInsideOrNot }));
    }
    else {
        res.send(`Hello ${username}, you are alreay registered. Please log in!`);
    }
});
app.get('/get-password-and-username', (req, res) => {
    const loginName = req.query.loginName;
    const loginPassword = req.query.loginPassword;
    const checkUserLogin = users.checkNameAndPassword(loginName, loginPassword);
    res.send({ name: loginName, check: checkUserLogin });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
