"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
require('dotenv').config();
console.log(process.env.ENV);
const uri = process.env.MONGODB_URI;
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(cookie_parser_1.default());
mongoose_1.default.connect(uri).then(res => {
    console.log('connected to DB');
}).catch(err => {
    console.log('At mongoose.connect: ');
    console.error(err.message);
});
const employeeRout_1 = __importDefault(require("./routes/employeeRout"));
app.use('/company', employeeRout_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
