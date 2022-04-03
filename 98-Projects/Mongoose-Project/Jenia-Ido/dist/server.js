"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3006;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://igino11:kktgqbLMCE3mtTN6@cluster0.zfewx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
;
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const imagesRoute_1 = __importDefault(require("./routes/imagesRoute"));
app.use('/user', userRoute_1.default);
app.use('/images', imagesRoute_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
