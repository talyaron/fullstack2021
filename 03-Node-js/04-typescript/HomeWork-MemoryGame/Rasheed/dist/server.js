"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const deckCards = [
    "AB.png", "AB.png", "S.png", "S.png",
    "COD.png", "COD.png", "DL.png", "DL.png", "DS.png",
    "DS.png", "NFH.png", "NFH.png", "NFS.png",
    "NFS.png", "POP.png", "POP.png"
];
app.get('/get-cards', (req, res) => {
    res.send(deckCards);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
