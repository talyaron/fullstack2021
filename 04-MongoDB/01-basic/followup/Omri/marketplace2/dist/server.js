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
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://ohad2001:o2vQgwWe8chVrWAW@cluster0.q1pcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//create a schema (interface)
const UserSchema = new mongoose_1.default.Schema({
    pic: String,
    title: String,
    description: String,
    price: Number,
    category: String,
});
//create a collection
const Product = mongoose_1.default.model('products', UserSchema);
app.post("/add-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { pic, title, description, price, category } = req.body;
        const newProduct = new Product({ pic, title, description, price, category });
        const result = yield newProduct.save();
        res.send({ result });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.get("/get-products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product.find({});
        res.send({ products });
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}));
app.post("/add-cart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.body;
    if (productId) {
        const result = yield Product.deleteOne({ _id: productId });
        res.send({ ok: true, result, });
    }
}));
app.patch("/update-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.body.gameId;
        const newImg = req.body.newImg;
        const newTitle = req.body.newTitle;
        if ({ productId }) {
            const result = yield Product.updateOne({ _id: productId }, { pic: newImg }, { title: newTitle });
            const products = yield Product.find({});
            res.send({ ok: true, result, products });
        }
        else {
            throw new Error("Something went wrong");
        }
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.delete('/delete-product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.body;
        if (productId) {
            const result = yield Product.deleteOne({ _id: productId });
            const products = yield Product.find({});
            res.send({ ok: true, result, products });
        }
        else {
            throw new Error('product ID is missing');
        }
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
