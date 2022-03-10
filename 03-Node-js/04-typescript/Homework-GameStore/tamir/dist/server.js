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
let uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const games = [
    { name: 'tamir', id: uid() },
    { name: 'aviel', id: uid() },
    { name: 'yosi', id: uid() },
    { name: 'yair', id: uid() },
    { name: 'tamtam', id: uid() },
];
app.get('/getall', (req, res) => {
    res.send(games);
});
// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });
//   app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });
//   app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
