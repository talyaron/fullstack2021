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
mongoose_1.default.connect("mongodb+srv://Artur:Aya211296@cluster0.vbho2.mongodb.net/Learning?retryWrites=true&w=majority").then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
const UsersSchema = new mongoose_1.default.Schema({
    userName: String,
    password: String,
    age: String
});
const User = mongoose_1.default.model("users", UsersSchema);
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password } = req.body;
    console.log(user);
    const userFound = yield User.find({ userName: user, password: password });
    console.log(userFound);
    res.send(userFound);
}));
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password, age } = req.body;
    console.log(user);
    const result = yield User.create({ userName: user, password: password, age: age });
    console.log(result);
    res.send(result);
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
