import express from "express";
import mongoose from 'mongoose';
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://rasheedj966:rashj050880@cluster0.vtqmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const GamesSchema = new mongoose.Schema({
  title: String,
  img: String,
  type: String,
  price: Number
})
const Game = mongoose.model('GamesStore', GamesSchema);

app.get("/get-game", async (req, res) => {
  const games = await Game.find({})
  res.send({ ok: true, games });
});

app.post("/add-game", async (req, res) => {
  let { title, img, price, type } = req.body;
  const newGame = new Game({ title, img, price, type })
  const result = await newGame.save()
  res.send({ result });
});

app.delete("/delete-game", async (req, res) => {
  const { gameId } = req.body;
  const games = await Game.deleteOne({ _id: gameId })
  res.send({ ok: true, games });
});

app.patch("/update-game", async (req, res) => {
  const { gameId, newTitle, newPrice } = req.body;
  const games = await Game.updateOne({ _id: gameId }, { title: newTitle }, { price: newPrice })
  res.send({ ok: true, games });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
