"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3001;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://ohad2001:GosiaW9nu935YRgg@cluster0.q1pcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log("conect to DB"))
    .catch(err => console.log(err.message));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
app.use("/products", productRoute_1.default);
app.post("/add-product");
app.get("/get-products");
app.patch("/update-picture");
app.patch("/update-title");
app.patch("/update-price");
app.delete('/delete-product');
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
