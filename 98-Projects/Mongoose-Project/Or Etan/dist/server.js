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
mongoose_1.default.connect('mongodb+srv://OrA99:134679852Or@cluster0.r0go0.mongodb.net/OrEtan?retryWrites=true&w=majority')
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
app.post("/add-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { firstName, lastName, email, password, role } = req.body;
        const newUser = new user({ firstName, lastName, email, password, role });
        const result = yield newUser.save();
        res.send({ result });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
const TaskSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    urgency: String,
    location: String,
    date: Date
});
const task = mongoose_1.default.model("tasks", TaskSchema);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
