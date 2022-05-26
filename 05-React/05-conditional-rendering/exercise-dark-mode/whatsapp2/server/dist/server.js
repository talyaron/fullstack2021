"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 4001;
app.use(express_1.default.static('public/build'));
app.use(express_1.default.json());
const usersRout_1 = __importDefault(require("./routers/usersRout"));
mongoose_1.default
    .connect(`${'mongodb+srv://Michael:zoUbeZ1vL87UxOup@cluster0.ctwuo.mongodb.net/bymySelf?retryWrites=true&w=majority'}`)
    .then(() => {
    console.log("connected to Mongoose");
})
    .catch((err) => {
    console.log("Failed to connect to Mongoose:");
    console.log(err.message);
});
const UserSchema = new mongoose_1.default.Schema({
    name: String,
    password: String
});
const User = mongoose_1.default.model('usersDb', UserSchema);
app.use('/users', usersRout_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
