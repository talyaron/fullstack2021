"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const images = [
    { img: "https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg" },
    { img: "https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg" },
    { img: "https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg" },
    { img: "https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg" }
];
app.post('/get-picture', (req, res) => {
    res.send(images);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
