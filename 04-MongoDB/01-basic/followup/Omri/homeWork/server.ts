import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://OmriAharonov:hYYFfWDZwNqMjKAe@cluster0.kv5s6.mongodb.net/MarketPlaceData?retryWrites=true&w=majority');

const marketSechma = new mongoose.Schema({
    name: String,
    description: String,
    Price: Number,
    img: String
});

const Market = mongoose.model('marketPlace', marketSechma);
const User = mongoose.model('userItems', marketSechma);

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });