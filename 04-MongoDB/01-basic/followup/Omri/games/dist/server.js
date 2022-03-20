"use strict";
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
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
