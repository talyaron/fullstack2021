"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose")); // I change this because it's Ts and not a JS .. before it was const mongoose = require('mongoose');
const app = express_1.default();
const port = process.env.PORT || 3001;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://yoelkraitman:6XETjeOW2tqNIMHU@cluster0.vidf6.mongodb.net/DB-first-work?retryWrites=true')
    .then(() => console.log('connected to data base'))
    .catch(err => console.log("error in the dataBase", err.message));
const userSchema = new mongoose_1.default.Schema({
    username: String,
    password: String,
});
const User = mongoose_1.default.model('users', userSchema);
//create a collection 
const bookSchema = new mongoose_1.default.Schema({
    name: String,
    year: Number,
    author: String,
    ownerId: String
});
const Book = mongoose_1.default.model('books', bookSchema);
const booksSite = {
    user: {},
    books: [],
    sortAsc() {
        this.books.sort((a, b) => a.year - b.year);
    },
    sortDes() {
        this.books.sort((a, b) => b.year - a.year);
    },
};
app.post('/add-book', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { book } = req.body;
        if (book) {
            console.log('before', book);
            const newBook = new Book(book); //missing something here
            const result = yield newBook.save();
            console.log('after');
            res.send(result); //N render it 
        }
        else {
            throw new Error("book is und");
        }
    }
    catch (error) {
        console.error(res.send(error.message));
        res.send(error.message);
    }
}));
app.post('/add-user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, password } = req.body; // if we want to get the element by the body we need app.use(express.json());
        if (username && password) {
            booksSite.user.push(username, password); //add user everytime you add user
            const newUser = new User({ username, password }); //here we crate a new user (like a object we use a "User")
            const result = yield newUser.save(); //important%%% if you want that this variables will save in the DB you to write exactly like a Schema if won't it won't be save;
            res.send({ result, ok: true });
        }
        else {
            throw new Error("username or password are unfedined");
        }
    }
    catch (error) {
        console.error(res.send(error.message));
    }
}));
app.get('/get-books', (req, res) => {
    res.send(booksSite);
});
app.get('/get-users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let name = req.query;
    //const users = await User.find({username:'q'});// it will return me the data that contain key:username, value:q
    const users = yield User.find({});
    res.send({ users, name });
}));
app.post('/sort-books', (req, res) => {
    try {
        let { value } = req.body;
        if (value) {
            if (value === "descent") {
                booksSite.sortDes();
                res.send({ ok: true, booksSite });
            }
            else {
                booksSite.sortAsc();
                res.send({ ok: true, booksSite });
            }
        }
    }
    catch (error) {
        res.send({ error });
    }
});
app.patch('/update-username', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { value, userId } = req.body;
        if (value && userId) {
            const users = yield User.updateOne({ id: userId }, { username: value }); // {who you want to change},{with what you want to change}
            //  const newUser = new User({username , password})
            // const result = await newUser.save()
            res.send({ ok: true, users });
        }
        else {
            throw new Error('id or value is missing');
        }
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
