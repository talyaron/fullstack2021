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
mongoose_1.default.connect('mongodb+srv://OmriAharonov:hYYFfWDZwNqMjKAe@cluster0.kv5s6.mongodb.net/MarketPlaceData?retryWrites=true&w=majority');
const marketSechma = new mongoose_1.default.Schema({
    name: String,
    description: String,
    Price: Number,
    img: String
});
const Market = mongoose_1.default.model('marketPlace', marketSechma);
const User = mongoose_1.default.model('userItems', marketSechma);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
