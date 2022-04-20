"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3000;
console.log(process.env.ENV);
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const swimerMid_1 = require("./middleWare/swimerMid");
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(swimerMid_1.userInputEvent);
app.use(cookie_parser_1.default());
const uri = process.env.URI;
mongoose_1.default.connect(uri).then(res => {
    console.log('connected to DB');
}).catch(err => {
    console.log('At mongoose.connect: ');
    console.error(err.message);
});
const swimRout_1 = __importDefault(require("./routers/swimRout"));
app.use("/pool", swimRout_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
