"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
mongoose_1.default.connect('mongodb+srv://leon93:ym965874632541@cluster0.umet4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(res => {
    console.log('connected to database');
}).catch(err => {
    console.log('at mongoose connection error', err);
});
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
app.use('/users', usersRoutes_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
