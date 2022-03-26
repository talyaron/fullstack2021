"use strict";
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
mongoose_1.default.connect('mongodb+srv://EtanHey:NI2nXMDwLdTiRScP@cluster0.gedel.mongodb.net/OrEtan?retryWrites=true')
    .then(() => { console.log('connect to Mongoose'); })
    .catch(err => { console.log(err.message); });
const UserSchema = new mongoose_1.default.Schema({
    email: String,
    password: String,
    role: String,
    firstName: String,
    lastName: String,
    img: String,
});
const user = mongoose_1.default.model("users", UserSchema);
const TaskSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    urgency: String,
    location: String,
    date: Date,
});
const task = mongoose_1.default.model("tasks", TaskSchema);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
