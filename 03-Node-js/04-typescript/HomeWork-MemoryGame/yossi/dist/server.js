"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
const cards = [
    { img: "images/Batman.png", id: "1" },
    { img: "images/Batman.png", id: "1" },
    { img: "images/BlackWidow.png", id: "2" },
    { img: "images/BlackWidow.png", id: "2" },
    { img: "images/CaptainAmerica.png", id: "3" },
    { img: "images/CaptainAmerica.png", id: "3" },
    { img: "images/Colossus.png", id: "4" },
    { img: "images/Colossus.png", id: "4" },
    { img: "images/Zelensky.png", id: "5" },
    { img: "images/Zelensky.png", id: "5" },
    { img: "images/AntMan.png", id: "6" },
    { img: "images/AntMan.png", id: "6" },
];
app.get("/get-cards", (req, res) => {
    const shuffledArray = cards.sort((a, b) => 0.5 - Math.random());
    res.send(cards);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
