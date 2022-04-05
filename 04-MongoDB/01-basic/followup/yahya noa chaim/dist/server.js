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
const port = process.env.PORT || 8080;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://chaim14:82148214cc@cluster0.ar8tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log("conected to database"))
    .catch(err => console.log(err.message));
const UserSchema = new mongoose_1.default.Schema({
    username: String,
    password: String,
});
const User = mongoose_1.default.model("users", UserSchema);
app.post('/add-users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let { username, password } = req.body; אתה שולח מהקליינט name
        let { name, password } = req.body;
        console.log(name, password); //כאן זה לוודא שאתה מקבל משתנים נכונים
        const newUser = new User({ username: name, password });
        const result = yield newUser.save();
        res.send({ result });
    }
    catch (error) {
        console.error(error.message);
        res.send({ error: error.message });
    }
}));
app.get('/get-users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // if (!req.body) throw new Error('no req'); //אין צורך הבדיקה הזאת
        const users = yield User.find({});
        // if (!req.body) throw new Error('no req');
        res.send({ ok: true, users });
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}));
// app.patch("/delete-user", async (req, res) => {
//   try {
//     const { userId } = req.body;
//     if (userId) {
//       const users = await User.deleteOne({_id:userId})
//       res.send({ ok: true, users });
//     } else {
//       throw new Error("userId or role is missing");
//     }
//   } catch (error) {
//     console.log(error.error);
//     res.send({ error: error.message });
//   }
// });
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
