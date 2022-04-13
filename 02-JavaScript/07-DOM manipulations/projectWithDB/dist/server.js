"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose")); // I change this because it's Ts and not a JS .. before it was const mongoose = require('mongoose');
const app = express_1.default();
const port = process.env.PORT || 3057;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://yoelkraitman:6XETjeOW2tqNIMHU@cluster0.vidf6.mongodb.net/DB-first-work?retryWrites=true')
    .then(() => console.log('connected to data base'))
    .catch(err => console.log("error in the dataBase", err.message));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
// async function getBooks(){
//   let result = User
// } 
