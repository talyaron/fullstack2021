"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
// החיבור לבסיס הנתונים 
mongoose_1.default.connect("mongodb+srv://tamirdadon:NipajRxgNw7Lb5M2@cluster0.ldffz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
// הסכמה שלפיה יהיה בנוי האובייקט
const UserSchema = new mongoose_1.default.Schema({
    username: String,
    age: String
});
// מפנה את המידע לזיכרון לפי השם של הזיכרון והסכמה
const User = mongoose_1.default.model('users', UserSchema);
let data = [
    { name: 'tamir', age: 22, id: uid() }
];
app.get('/get-data', (req, res) => {
    res.send(data);
});
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, age } = req.body;
        const newUser = new User({ username, age });
        const results = yield newUser.save();
        res.send({ results });
    }
    catch (error) {
    }
}));
app.delete("/delete-data", (req, res) => {
    const { id } = req.body;
    if (id) {
        data = data.filter((data) => data.id !== id);
    }
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
