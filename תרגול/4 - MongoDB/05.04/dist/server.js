"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const PORT = process.env.PORT || 4561;
//EJS
app.set('view engine', 'ejs'); //connecting ejs
console.log(app.get('view engine'));
app.set('views', path_1.default.resolve(__dirname, 'pages'));
app.use(express_1.default.static(path_1.default.resolve(__dirname, 'public'))); //static folder
app.use(express_1.default.json());
//DATA CONNECT
try {
    mongoose_1.default.connect("mongodb+srv://KaKa:WO3sm2Hl7eXTMN0Y@cluster0.mfqlq.mongodb.net/fullStackOct2021", () => {
        console.log(`DATA CONNECTED`);
    });
}
catch (err) {
    console.log(err);
}
app.get('/', (req, res) => {
    res.render('index', {
        name: "Shay"
    });
});
// app.use(/*....*/)
//LISTEN TO
app.listen(PORT, () => {
    return console.log(`Listening at http://localhost:${PORT}`);
});
