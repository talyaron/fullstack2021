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
const port = 3002;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://asnafy:AS8oeaVFbMLK3Wop@cluster0.xgv3d.mongodb.net/yossi-test?retryWrites=true&w=majority');
//create a schema (interface)
const UserSchema = new mongoose_1.default.Schema({
    username: String,
    password: String,
    role: String,
    img: String
});
//create a collection
const User = mongoose_1.default.model('user', UserSchema);
app.post("/add-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, password, role, img } = req.body;
        if (username && password && role && img) {
            const newUser = new User({ username, password, role, img });
            const result = yield newUser.save();
            res.send({ result });
        }
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.get('/get-all-users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User.find({});
    res.send(users);
}));
app.get('/get-user-by-role', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User.find({ role: 'privet' });
    res.send(users);
}));
app.patch('/update-user-role', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, role } = req.body;
    const users = yield User.updateOne({ _id: userId }, { role: role });
    res.send(users);
}));
app.patch('/update-user-name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, username } = req.body;
    const users = yield User.updateOne({ _id: userId }, { username: username });
    res.send(users);
}));
app.delete('/delete-user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    const users = yield User.deleteOne({ _id: userId });
    res.send(users);
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
