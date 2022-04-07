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
mongoose_1.default
    .connect("mongodb+srv://rasheedj966:rashj050880@cluster0.vtqmf.mongodb.net/Books?retryWrites=true&w=majority")
    .then((res) => {
    console.log("connected to DB");
})
    .catch((err) => {
    console.log("At mongoose.connect:");
    console.error(err.message);
});
const BooksSchema = new mongoose_1.default.Schema({
    coverImg: String,
    firstPageImg: String,
    firstPageChapter: String,
    firstPageHeadLine: String,
    firstPageContent: String,
    secendPageImg: String,
    secendPageChapter: String,
    secendPageHeadLine: String,
    secendPageContent: String,
    thirdPageImg: String,
    thirdPageChapter: String,
    thirdPageHeadLine: String,
    thirdPageContent: String,
    fourthPageImg: String,
    fourthPageChapter: String,
    fourthPageHeadLine: String,
    fourthPageContent: String,
    backCoverImg: String,
});
const Book = mongoose_1.default.model("BookStore", BooksSchema);
app.get("/get-books", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book.find({});
        res.send(books);
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
