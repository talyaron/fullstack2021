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
    { src: './images/1776', id: 1, pairId: 0 },
    { src: './images/Bye', id: 2, pairId: 1 },
    { src: './images/cook', id: 3, pairId: 2 },
    { src: './images/cuisades', id: 4, pairId: 3 },
    { src: './images/Harry Potter 2', id: 5, pairId: 4 },
    { src: './images/Harry Potter', id: 6, pairId: 5 },
    { src: './images/Star Wars', id: 7, pairId: 6 },
    { src: './images/the good surgeon', id: 8, pairId: 7 },
    { src: './images/1776', id: 15, pairId: 0 },
    { src: './images/Bye', id: 16, pairId: 1 },
    { src: './images/cook', id: 13, pairId: 2 },
    { src: './images/cuisades', id: 12, pairId: 3 },
    { src: './images/Harry Potter 2', id: 11, pairId: 4 },
    { src: './images/Harry Potter', id: 9, pairId: 5 },
    { src: './images/Star Wars', id: 14, pairId: 6 },
    { src: './images/the good surgeon', id: 10, pairId: 7 },
];
const pairs = [
    [1, 15], [15, 1],
    [2, 16], [16, 2],
    [3, 13], [13, 3],
    [4, 12], [12, 4],
    [5, 11], [11, 5],
    [6, 9], [9, 6],
    [7, 14], [14, 7],
    [8, 10], [10, 8],
];
app.get('/isPair', (req, res) => {
    try {
        res.send(pairs);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/new-game', (req, res) => {
    try {
        res.send(cards);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
});
