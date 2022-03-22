import express from "express";
const app = express();
const port: number = 3000;
app.use(express.json());

app.use(express.static("public"));

interface game{
    name: string;
    price: number;
    id:number;
}
let game: Array<game> = [
{name: 'shachmat', price: 50, id:12345 },
{name: 'playmobil', price: 200, id:1357 },
]
app.use(express.json());
app.use(express.static("public"));






app.get("/get-all-game", (req, res) => {
  res.send({ game });
});
app.get("/get-game-by-price", (req, res) => {
    try {
      console.log(req.query)
      let { maxPrice } = req.query;
      if (maxPrice) {
        
        maxPrice = parseFloat(maxPrice);
  
        const filteredGames: Array<game> = game.filter(
          (game) => game.price < maxPrice
        );
        
      res.send({ games: filteredGames });
    } else {
      throw new Error("No maxPrice in query");
    }
  } catch (err) {
    console.error(err);
    res.send({ error: err.message });
  }
});


