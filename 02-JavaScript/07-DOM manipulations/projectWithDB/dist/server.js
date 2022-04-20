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
const books = [
    {
        name: "harry poter",
        year: 1997,
        athor: "	J. K. Rowling"
    },
    {
        name: "The Expendables",
        year: 2010,
        athor: "David Callaham"
    },
    {
        name: "the last kingdom",
        year: 2015,
        athor: "Bernard Cornwell"
    },
    function sortAsc() {
        this.sort((a, b) => a.year - b.year);
    },
    function sortDes() {
        this.sort((a, b) => b.year - a.year);
    },
];
app.get('/get-books', (req, res) => {
    res.send(books);
});
app.post('/sort-books', (req, res) => {
    let { value } = req.body;
    try {
        if (value) {
            if (value === "descent") {
                books.sortDes();
                res.send(books);
            }
        }
    }
    catch (error) {
    }
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
