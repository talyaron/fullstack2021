"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
let games = [
    { title: "Potato Flowers in Full Bloom", img: "https://cdn.akamai.steamstatic.com/steam/apps/1601280/capsule_184x69.jpg?t=1646902448", price: 60.25 },
    { title: "The Last Cube", img: "https://cdn.akamai.steamstatic.com/steam/apps/903630/capsule_184x69.jpg?t=1646899317", price: 66.55 },
    { title: "Divinity Chronicles: Journey to the West", img: "https://cdn.akamai.steamstatic.com/steam/apps/1449070/capsule_184x69.jpg?t=1646899087", price: 50.35 },
    { title: "Iron Lung", img: "https://cdn.akamai.steamstatic.com/steam/apps/1846170/capsule_184x69.jpg?t=1646889949", price: 19.75 }
];
let uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
app.get('/get-all-games', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
