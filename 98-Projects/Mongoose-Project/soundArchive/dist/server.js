"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
require('dotenv').config();
console.log(process.env.JWT_SECRET, process.env.ENV);
const uri = process.env.MONGODB_URI;
const app = express_1.default();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
// const http = require("http")
// console.log(http.STATUS_CODES);
mongoose_1.default.connect(uri).then(() => {
    console.log("connected to Mongoose");
})
    .catch((err) => {
    console.log("Failed to connect to Mongoose:");
    console.log(err.message);
});
const userRoute_1 = __importDefault(require("./routes/userRoute"));
app.use("/soundUser", userRoute_1.default);
const soundRoute_1 = __importDefault(require("./routes/soundRoute"));
app.use("/sounds", soundRoute_1.default);
app.listen(port, () => {
    return console.log(colors_1.default.bgYellow.black(`Express is listening at http://localhost:${port}`));
});
