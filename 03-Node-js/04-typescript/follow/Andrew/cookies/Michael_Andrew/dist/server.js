"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require("dotenv/config");
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookie_parser_1.default());
mongoose_1.default.connect(process.env.MDB_URI).then(res => {
    console.log('connected to DB');
}).catch(err => {
    console.log('At mongoose.connect: ');
    console.error(err.message);
});
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use('/users', userRoutes_1.default);
const artRoutes_1 = __importDefault(require("./routes/artRoutes"));
app.use('/arts', artRoutes_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
