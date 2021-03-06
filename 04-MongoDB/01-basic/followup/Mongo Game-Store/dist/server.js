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
const app = express_1.default();
const port = process.env.PORT || 3007;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb+srv://leon93:ym965874632541@cluster0.umet4.mongodb.net/myFirstDatabase?retryWrites=true');
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const GameSchema = new mongoose_1.default.Schema({
    name: String,
    type: String,
    img: String
});
const Game = mongoose_1.default.model('gamesDb', GameSchema);
app.post('/game', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, type, img } = req.body;
        const newGame = new Game({ name, type, img });
        const games = yield newGame.save();
        console.log(games);
        res.send({ games });
        if (!name || !type)
            throw new Error("No name or type in app.post game");
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.get('/get-games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield Game.find({});
        res.send({ games });
    }
    catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
}));
app.patch('/update-games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { gameId, type } = req.body;
    const games = yield Game.updateOne({ _id: gameId }, { type: type });
    res.send(games);
}));
app.delete('/delete-games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gameId } = req.body;
        const games = yield Game.deleteOne({ _id: gameId });
        res.send(games);
    }
    catch (err) {
        console.log(err);
        res.send({ error: err.message });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
