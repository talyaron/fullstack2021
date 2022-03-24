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
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://andrewLSHFY:s3Hz4045sYvAzjRn@cluster0.cybvt.mongodb.net/FS2021?retryWrites=true&w=majority');
const GamesSchema = new mongoose_1.default.Schema({
    name: String,
    type: String,
    img: String
});
const Game = mongoose_1.default.model('games', GamesSchema);
app.get('/get-games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield Game.find();
    res.send(games);
}));
app.patch('/update-game', (req, res) => {
    const { game } = req.body;
    Game.updateOne({ _id: game._id }, { name: game.name, type: game.type });
});
app.put('/add-game', (req, res) => {
    const { game } = req.body;
    const newGame = new Game(game);
    newGame.save();
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
