"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const usersMid_1 = require("./middlewares/usersMid");
console.log(process.env.ENV);
console.log(process.env.JWT_SECRET);
const app = express_1.default();
const cookieParser = require('cookie-parser');
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
app.use(usersMid_1.getId);
//ert
const uri = process.env.MONGODB_URI;
mongoose_1.default.connect(uri).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
app.use("/users", usersRoute_1.default);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
//j%3A%7B%22username%22%3A%22tal%40gmail.com%22%2C%22id%22%3A%226230a78a00d953d3f4050585%22%2C%22role%22%3A%22public%22%7D
