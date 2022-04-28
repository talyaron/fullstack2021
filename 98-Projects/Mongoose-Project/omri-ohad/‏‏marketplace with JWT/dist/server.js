"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
// console.log(process.env.ENV)
// console.log(process.env.JWT_SECRET)
const app = express_1.default();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3003;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
mongoose_1.default.connect('mongodb+srv://ohad2001:GosiaW9nu935YRgg@cluster0.q1pcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log("conect to DB"))
    .catch(err => console.log(err.message));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
app.use("/products", productRoute_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
