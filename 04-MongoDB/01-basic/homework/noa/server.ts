import express from 'express';
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect("mongodb+srv://noachash:noach315323@cluster0.uvigw.mongodb.net/games?retryWrites=true&w=majority")

const GameSchema = new mongoose.Schema({
  title: String,
  img: String,
  price: Number
});

const Game = mongoose.model("games", GameSchema)

app.post('/get-games', async (req, res) => {

 const game= req.body.game;
 console.log(game);
  const games = new Game(game)
  const allGames = await games.save();
  console.log(allGames);
  res.send(allGames)
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
