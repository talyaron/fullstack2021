"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3007;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.listen(port, () => {
    console.log(`server listen on port ${port}`);
});
const cards = [
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "ace of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "ace of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "Joker.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "Joker.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "8 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "8 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "9 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "9 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "10 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "10 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "jack of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "jack of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "queen of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "queen of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "king of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img: "king of hearts.png"
    }
];
app.get("/newGame", (req, res) => {
    res.send(cards);
});
