import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://OmriAharonov:moIIfkRPSJr5kmM0@cluster0.kv5s6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const GameSechma = new mongoose.Schema({
    title: String,
    img: String
})

const Game = mongoose.model('myGames',GameSechma);



app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});