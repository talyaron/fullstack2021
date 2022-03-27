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
const port = process.env.PORT || 3005;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const imageSchema = new mongoose_1.default.Schema({
    url: [String],
    email: String,
    password: String,
});
const userSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    birthday: String,
    country: String,
    password: String,
    email: String,
    gender: String,
});
const User = mongoose_1.default.model('Users', userSchema);
const Images = mongoose_1.default.model('images', imageSchema);
mongoose_1.default.connect('mongodb+srv://igino11:kktgqbLMCE3mtTN6@cluster0.zfewx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.post('/get-addNewUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { newUser } = req.body;
    const newImgs = { email: newUser.email, password: newUser.password, url: ['https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'] };
    const user = new User(newUser);
    const userImgs = new Images(newImgs);
    const addNewUser = yield user.save();
    const addNewUserImgs = yield userImgs.save();
    console.log(userImgs);
    console.log(user);
    res.send(userImgs);
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
