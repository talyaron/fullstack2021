"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://tamirdadon:aImYDjM4c6xZdXad@cluster0.ldffz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// מייבא את כל הראוטרים מהתייקיה של הראוטרים
const userRout_1 = __importDefault(require("./routes/userRout"));
app.use('/users', userRout_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
