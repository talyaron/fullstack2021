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
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb+srv://tal1:rbBnTtoiIia3ddKK@tal-test1.m39if.mongodb.net/fs-2021-oct?retryWrites=true&w=majority");
//create a schema (interface)
const UserSchema = new mongoose_1.default.Schema({
    username: String,
    password: String,
    role: String,
    phone: String,
});
//create a collection
const User = mongoose_1.default.model("users", UserSchema);
app.post("/add-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, password } = req.body;
        const newUser = new User({ username, password });
        const result = yield newUser.save();
        res.send({ result });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.get("/get-users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send({ ok: true });
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}));
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
