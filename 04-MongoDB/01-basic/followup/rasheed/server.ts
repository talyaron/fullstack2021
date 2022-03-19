import express from "express";
import mongoose from 'mongoose';
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());


mongoose.connect('mongodb+srv://rasheedj966:rashj050880@cluster0.vtqmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// 

const GamesSchema = new mongoose.Schema({
  title: String,
  img: String,
  type: String,
  price: Number

})
const Game = mongoose.model('GamesStore', GamesSchema);

app.get("/get-game", async (req, res) => {
  try {
    const games = await Game.find({})
    res.send({ ok: true, games });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});

app.post("/add-game", async (req, res) => {
  try {
    let { title, img, price, type } = req.body;

    const newGame = new Game({ title, img, price, type })
    const result = await newGame.save()

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});

app.delete("/delete-game", async (req, res) => {
  try {
    const { gameId } = req.body;
if (gameId){
  const games = await Game.deleteOne({_id:gameId})
  res.send({ ok:true, games });
}else{
  throw new Error ("gameId not found");
}
    
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});


app.patch("/update-game", async (req, res) => {
  try {
    const { gameId,newPrice} = req.body;
    if (gameId && newPrice) {
      const games = await Game.updateOne({_id: gameId }, { price: newPrice })
      res.send({ ok: true, games });
    }else{
      throw new Error ("gameId or price not found");
    }

  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
