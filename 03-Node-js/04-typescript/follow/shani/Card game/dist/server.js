"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
const cards = [
    { name: "Harry Potter", imgUrl: "" },
    { name: "Hermione Granger", imgUrl: "" },
    { name: "Ron Weasley", imgUrl: "https://c.tenor.com/SEqy2-RaIxcAAAAC/harry-potter-chocolate-frog-card.gif" },
    { name: "Severus Snape", imgUrl: "" },
    { name: "Lord Voldemort", imgUrl: "" },
    { name: "Albus Dumbledore", imgUrl: "" },
    { name: "Dobby", imgUrl: "" },
    { name: "Rubeus Hagrid", imgUrl: "" },
];
app.get("/new-game", (req, res) => {
    res.send(cards);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
