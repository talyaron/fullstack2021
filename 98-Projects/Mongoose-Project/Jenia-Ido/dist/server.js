"use strict";
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
    url: Array,
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
const Users = mongoose_1.default.model('Users', userSchema);
app.patch('/get-addNewUser', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
