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
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://Michael:rrrpos32.14!@cluster0.ctwuo.mongodb.net/tzofimSynagogue?retryWrites=true&w=majority');
const PrayerSchema = new mongoose_1.default.Schema({
    name: String,
    family: String,
    role: String,
    kids: Number,
    birth: Date
});
const Prayer = mongoose_1.default.model('newPrayer', PrayerSchema);
app.post('/add-prayer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, family, role, kids, birth } = req.body;
        const newPrayer = new Prayer({ name, family, role, kids, birth });
        const prayers = yield newPrayer.save();
        res.send({ ok: true, prayers });
        if (!name || !family || !role || !kids || !birth)
            throw new Error("no name, family, role, kids, birth in app.post/add-prayer");
    }
    catch (error) {
        console.error(error.message);
        res.send({ error: error.message });
    }
}));
app.get('/get-prayers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prayers = yield Prayer.find({});
        res.send({ ok: true, prayers });
    }
    catch (error) {
        console.error(error);
        res.send({ error: 'error in app.get/get-prayers' });
    }
}));
app.get('/get-gabaim', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gabaim = yield Prayer.find({ role: 'gabai' });
        res.send({ ok: true, gabaim });
    }
    catch (error) {
        console.error(error);
        res.send({ error: 'error in app.get/get-gabaim' });
    }
}));
app.delete('/delete-prayer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const prayers = yield Prayer.deleteOne({ _id: id });
        res.send({ ok: true, prayers });
        if (!id)
            throw new Error("no id in delete-prayer");
    }
    catch (error) {
        console.error(error.message);
        res.send({ error: error.message });
    }
}));
app.patch('/update-gabaim', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, family, kids, birth, id } = req.body;
        const gabaim = yield Prayer.updateOne({ _id: id }, { name, family, kids, birth });
        res.send({ ok: true, gabaim });
        if (!req.body)
            throw new Error("no req.body in app.patch/update-gabaim");
    }
    catch (error) {
        console.error(error.message);
        res.send({ error: error.message });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
