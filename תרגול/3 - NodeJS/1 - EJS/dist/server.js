"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.set('view engine', 'ejs'); //connecting ejs
console.log(app.get('view engine'));
const users = [
    { name: "aaa", age: 15 },
    { name: "bbb", age: 23 },
    { name: "ccc", age: 43 },
    { name: "ddd", age: 56 },
    { name: "eee", age: 78 }
];
app.get('/', (req, res) => {
    res.render('index', {
        title: "Home Page",
        users
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: "ABOUT"
    });
});
app.listen(port, () => {
    console.log(`Server listen on port http://localhost:${port}`);
});
