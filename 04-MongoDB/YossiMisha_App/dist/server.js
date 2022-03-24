"use strict";
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
mongoose_1.default.connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//create a schema (interface)
const UserSchema = new mongoose_1.default.Schema({
    username: String,
    password: String,
    email: String,
    wins: String,
    loses: String,
    attempts: String,
});
//create a collection
const BSUser = mongoose_1.default.model('battleShipUsers', UserSchema);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
