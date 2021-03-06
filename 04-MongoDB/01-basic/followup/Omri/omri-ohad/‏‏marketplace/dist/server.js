"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express_1.default();
const port = process.env.PORT || 3002;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
const uri = process.env.MONGO_URI;
mongoose_1.default.connect(uri)
    .then(() => console.log("conect to DB"))
    .catch(err => console.log(err.message));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
app.use("/products", productRoute_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
