"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 8080;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://OmriAharonov:moIIfkRPSJr5kmM0@cluster0.kv5s6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const GameSechma = new mongoose_1.default.Schema({
    title: String,
    img: String
});
const Game = mongoose_1.default.model('myGames', GameSechma);
app.get('/get-games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield Game.find({});
        res.send({ ok: true, games });
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}));
app.post('/add-game', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { title, img } = req.body;
        if ({ title, img }) {
            const newGame = new Game({ title, img });
            const result = yield newGame.save();
            const games = yield Game.find({});
            res.send({ result, games });
        }
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.patch("/update-game", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gameId, newImg } = req.body;
        if (gameId && newImg) {
            const result = yield Game.updateOne({ _id: gameId }, { img: newImg });
            const games = yield Game.find({});
            res.send({ ok: true, result, games });
        }
        else {
            throw new Error("Something went wrong");
        }
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
