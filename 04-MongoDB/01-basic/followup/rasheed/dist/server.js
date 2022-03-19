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
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://rasheedj966:rashj050880@cluster0.vtqmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// 
const GamesSchema = new mongoose_1.default.Schema({
    title: String,
    img: String,
    type: String,
    price: Number
});
const Game = mongoose_1.default.model('GamesStore', GamesSchema);
app.get("/get-game", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield Game.find({});
        res.send({ ok: true, games });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.post("/add-game", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { title, img, price, type } = req.body;
        const newGame = new Game({ title, img, price, type });
        const result = yield newGame.save();
        res.send({ result });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.delete("/delete-game", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gameId } = req.body;
        if (gameId) {
            const games = yield Game.deleteOne({ _id: gameId });
            res.send({ ok: true, games });
        }
        else {
            throw new Error("gameId not found");
        }
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.patch("/update-game", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gameId, newPrice } = req.body;
        if (gameId && newPrice) {
            const games = yield Game.updateOne({ _id: gameId }, { price: newPrice });
            res.send({ ok: true, games });
        }
        else {
            throw new Error("gameId or price not found");
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
