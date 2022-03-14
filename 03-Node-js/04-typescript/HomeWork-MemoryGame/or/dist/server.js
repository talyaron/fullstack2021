"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
let uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const cards = [
    { picSrc: `http://chabadpedia.co.il/images/d/da/%D7%9C%D7%90_%D7%94%D7%91%D7%A2%D7%A9%27%27%D7%98.jpg`, name: `הבעל שם טוב - מייסד תורת החסידות`, pairId: '1', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/d/da/%D7%9C%D7%90_%D7%94%D7%91%D7%A2%D7%A9%27%27%D7%98.jpg`, name: `הבעל שם טוב - מייסד תורת החסידות`, pairId: '1', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/a/a8/%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg/300px-%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg`, name: `אדמור הזקן - מייסד חסידות חבד`, pairId: '2', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/a/a8/%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg/300px-%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg`, name: `אדמור הזקן - מייסד חסידות חבד`, pairId: '2', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/f/f6/%D7%90%D7%93%D7%9E%D7%95%22%D7%A8_%D7%94%D7%90%D7%9E%D7%A6%D7%A2%D7%99.jpg/375px-%D7%90%D7%93%D7%9E%D7%95%22%D7%A8_%D7%94%D7%90%D7%9E%D7%A6%D7%A2%D7%99.jpg`, name: `אדמו"ר האמצעי - אין אף תמונה או ציור שלו`, pairId: '3', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/f/f6/%D7%90%D7%93%D7%9E%D7%95%22%D7%A8_%D7%94%D7%90%D7%9E%D7%A6%D7%A2%D7%99.jpg/375px-%D7%90%D7%93%D7%9E%D7%95%22%D7%A8_%D7%94%D7%90%D7%9E%D7%A6%D7%A2%D7%99.jpg`, name: `אדמו"ר האמצעי - אין אף תמונה או ציור שלו`, pairId: '3', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/6/6b/%D7%A6%D7%9E%D7%97_%D7%A6%D7%93%D7%A7.jpg/270px-%D7%A6%D7%9E%D7%97_%D7%A6%D7%93%D7%A7.jpg`, name: `אדמור הצמח צדק`, pairId: '4', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/6/6b/%D7%A6%D7%9E%D7%97_%D7%A6%D7%93%D7%A7.jpg/270px-%D7%A6%D7%9E%D7%97_%D7%A6%D7%93%D7%A7.jpg`, name: `אדמור הצמח צדק`, pairId: '4', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/8/84/%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%9E%D7%94%D7%A8%D7%A9.jpg/165px-%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%9E%D7%94%D7%A8%D7%A9.jpg`, name: `אדמור המהרש`, pairId: '5', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/8/84/%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%9E%D7%94%D7%A8%D7%A9.jpg/165px-%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%9E%D7%94%D7%A8%D7%A9.jpg`, name: `אדמור המהרש`, pairId: '5', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/7/7e/%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%27%27%D7%91.png/300px-%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%27%27%D7%91.png`, name: `אדמור הרשב`, pairId: '6', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/7/7e/%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%27%27%D7%91.png/300px-%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%27%27%D7%91.png`, name: `אדמור הרשב`, pairId: '6', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/b/b8/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%90%D7%93%D7%9E%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%D7%91.png/300px-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%90%D7%93%D7%9E%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%D7%91.png`, name: `הרבי הרייצ`, pairId: '7', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/b/b8/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%90%D7%93%D7%9E%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%D7%91.png/300px-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%90%D7%93%D7%9E%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%D7%91.png`, name: `הרבי הרייצ`, pairId: '7', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/d/d3/%D7%A2%D7%99%D7%93%D7%95%D7%93.jpg/450px-%D7%A2%D7%99%D7%93%D7%95%D7%93.jpg`, name: `הרבי מליובוויטש`, pairId: '8', id: uid() },
    { picSrc: `http://chabadpedia.co.il/images/thumb/d/d3/%D7%A2%D7%99%D7%93%D7%95%D7%93.jpg/450px-%D7%A2%D7%99%D7%93%D7%95%D7%93.jpg`, name: `הרבי מליובוויטש`, pairId: '8', id: uid() }
];
app.get('/get-cards', (req, res) => {
    res.send(cards);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
