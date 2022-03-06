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
    { name: "Harry Potter", imgUrl: "" },
    { name: "Hermione Granger", imgUrl: "" },
    { name: "Hermione Granger", imgUrl: "" },
    { name: "Ron Weasley", imgUrl: "https://c.tenor.com/SEqy2-RaIxcAAAAC/harry-potter-chocolate-frog-card.gif" },
    { name: "Ron Weasley", imgUrl: "https://c.tenor.com/SEqy2-RaIxcAAAAC/harry-potter-chocolate-frog-card.gif" },
    { name: "Severus Snape", imgUrl: "https://thumbs.gfycat.com/HatefulConsiderateGreatwhiteshark-max-1mb.gif" },
    { name: "Severus Snape", imgUrl: "https://thumbs.gfycat.com/HatefulConsiderateGreatwhiteshark-max-1mb.gif" },
    { name: "Lord Voldemort", imgUrl: "" },
    { name: "Lord Voldemort", imgUrl: "" },
    { name: "Albus Dumbledore", imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/534a6acf-c249-43d2-8a80-7b26e4fc1e71/da2kcva-e51c37f5-b642-4410-b2a6-4c4d07322353.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNGE2YWNmLWMyNDktNDNkMi04YTgwLTdiMjZlNGZjMWU3MVwvZGEya2N2YS1lNTFjMzdmNS1iNjQyLTQ0MTAtYjJhNi00YzRkMDczMjIzNTMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UIiN24feUr4YMIEfzSaX4FoWa7iClX6zETL-5OpvRCA" },
    { name: "Albus Dumbledore", imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/534a6acf-c249-43d2-8a80-7b26e4fc1e71/da2kcva-e51c37f5-b642-4410-b2a6-4c4d07322353.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNGE2YWNmLWMyNDktNDNkMi04YTgwLTdiMjZlNGZjMWU3MVwvZGEya2N2YS1lNTFjMzdmNS1iNjQyLTQ0MTAtYjJhNi00YzRkMDczMjIzNTMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UIiN24feUr4YMIEfzSaX4FoWa7iClX6zETL-5OpvRCA" },
    { name: "Dobby", imgUrl: "" },
    { name: "Dobby", imgUrl: "" },
    { name: "Rubeus Hagrid", imgUrl: "" },
    { name: "Rubeus Hagrid", imgUrl: "" },
];
app.get("/new-game", (req, res) => {
    res.send(cards);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
