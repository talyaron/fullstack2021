import express from "express";
import mongoose from 'mongoose';
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());


mongoose.connect('mongodb+srv://rasheedj966:rashj050880@cluster0.vtqmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// 

const GamesSchema = new mongoose.Schema({
  title:String,
  type:String,
  price:Number

})
const Game = mongoose.model('GamesStore', GamesSchema);



app.post("/add-game", async (req, res) => {
  try {
    let { title, price,type } = req.body;

    const newGame = new Game({title, price,type})
    const result = await newGame.save()

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
