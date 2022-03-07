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
        afterFlipImg: "ace of hearts.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "ace of hearts.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "Joker.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "Joker.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "8 of hearts.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "8 of hearts.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "9 of hearts.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "9 of hearts.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "10 of hearts.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "10 of hearts.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "jack of hearts.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "jack of hearts.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "queen of hearts.jpg",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "queen of hearts.jpg",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "king of hearts.png",
        beforeFlipImg: "backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg: "king of hearts.png",
        beforeFlipImg: "backSide.png"
    }
];
app.get("/newGame", (req, res) => {
    shuffleCards(cards);
    res.send(cards);
});
function shuffleCards(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
