"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const images = [
    { image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71zNWbTHzxL._SL1500_.jpg&imgrefurl=https%3A%2F%2Fwww.zipy.co.il%2Fp%2Famazon%2Froses-50-red-long-stems-flowers-next-day-delivery-by-tuesday%2FB076PSYDG5%2F&tbnid=VJHRZxwUeUnhqM&vet=12ahUKEwi5gtPXp7v2AhUM3BoKHQKqBAcQMygBegUIARC4AQ..i&docid=TuvYPwKiFb-AyM&w=1500&h=1500&q=flowers&ved=2ahUKEwi5gtPXp7v2AhUM3BoKHQKqBAcQMygBegUIARC4AQ" },
    { image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71zNWbTHzxL._SL1500_.jpg&imgrefurl=https%3A%2F%2Fwww.zipy.co.il%2Fp%2Famazon%2Froses-50-red-long-stems-flowers-next-day-delivery-by-tuesday%2FB076PSYDG5%2F&tbnid=VJHRZxwUeUnhqM&vet=12ahUKEwi5gtPXp7v2AhUM3BoKHQKqBAcQMygBegUIARC4AQ..i&docid=TuvYPwKiFb-AyM&w=1500&h=1500&q=flowers&ved=2ahUKEwi5gtPXp7v2AhUM3BoKHQKqBAcQMygBegUIARC4AQ#imgrc=VJHRZxwUeUnhqM&imgdii=k97x8MVqCsesgM" },
    { image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71zNWbTHzxL._SL1500_.jpg&imgrefurl=https%3A%2F%2Fwww.zipy.co.il%2Fp%2Famazon%2Froses-50-red-long-stems-flowers-next-day-delivery-by-tuesday%2FB076PSYDG5%2F&tbnid=VJHRZxwUeUnhqM&vet=12ahUKEwi5gtPXp7v2AhUM3BoKHQKqBAcQMygBegUIARC4AQ..i&docid=TuvYPwKiFb-AyM&w=1500&h=1500&q=flowers&ved=2ahUKEwi5gtPXp7v2AhUM3BoKHQKqBAcQMygBegUIARC4AQ#imgrc=k97x8MVqCsesgM&imgdii=P-rh-58NOyN7PM" },
    { image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71zNWbTHzxL._SL1500_.jpg&imgrefurl=https%3A%2F%2Fwww.zipy.co.il%2Fp%2Famazon%2Froses-50-red-long-stems-flowers-next-day-delivery-by-tuesday%2FB076PSYDG5%2F&tbnid=VJHRZxwUeUnhqM&vet=12ahUKEwi5gtPXp7v2AhUM3BoKHQKqBAcQMygBegUIARC4AQ..i&docid=TuvYPwKiFb-AyM&w=1500&h=1500&q=flowers&ved=2ahUKEwi5gtPXp7v2AhUM3BoKHQKqBAcQMygBegUIARC4AQ#imgrc=P-rh-58NOyN7PM&imgdii=s0a65YMhDhGFkM" }
];
app.get('/get-picture', (req, res) => {
    res.send(images);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
