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
mongoose_1.default.connect("mongodb+srv://EtanHey:Sjg1mUp0viKZJN4r@cluster0.gedel.mongodb.net/EtansUserDB?retryWrites=true&w=majority");
//create a schema (interface)
const UserSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    birthDate: String,
    role: String,
    username: String,
    password: String,
});
//create a collection
const User = mongoose_1.default.model("userList", UserSchema);
app.get("/get-users", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { logInUsername } = req.query;
            const { logInPassword } = req.query;
            console.log({ logInUsername, logInPassword });
            console.log('hi');
            const userList = yield User.find({ username: logInUsername, password: logInPassword });
            res.send({ ok: true, userList });
        }
        catch (error) {
            console.error(error);
            res.send({ error: error.message });
        }
    });
});
app.post("/add-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let admin = "EtanHey";
        let { firstName, lastName, birthDate, role, username, password } = req.body;
        console.log(birthDate);
        console.log(role);
        if (role === admin) {
            role = "admin";
        }
        else {
            role = "public";
        }
        const newUser = new User({
            firstName,
            lastName,
            birthDate,
            role,
            username,
            password,
        });
        const result = yield newUser.save();
        res.send({ result });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
function logIn(logInUsername, logInPassword) { }
