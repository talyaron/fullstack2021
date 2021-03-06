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
const port = 5000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//create a schema (interface)
const UserSchema = new mongoose_1.default.Schema({
    guitarname: String,
    price: String,
    brand: String,
    file: String,
});
//create a collection
const Guitar = mongoose_1.default.model('myGuitars', UserSchema);
app.post("/add-guitar", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { guitarname, price, brand, file } = req.body;
        console.log(req.body);
        const newGuitar = new Guitar({ guitarname, price, brand, file });
        const result = yield newGuitar.save();
        res.send({ result });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.get("/get-guitars", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const guitars = yield Guitar.find({});
        res.send(guitars);
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}));
app.patch("/update-guitar", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { guitarId, price } = req.body;
        if (guitarId && price) {
            const users = yield Guitar.updateOne({ _id: guitarId }, { price: price });
        }
        else {
            throw new Error("guitarId or price is missing");
        }
    }
    catch (error) {
        res.send({ error: error.massage });
    }
}));
app.delete("/delete-guitar", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { guitarId } = req.body;
        if (guitarId) {
            const result = yield Guitar.deleteOne({ _id: guitarId });
            res.send({ ok: true, result });
        }
        else {
            throw new Error("guitarId or price is missing");
        }
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
