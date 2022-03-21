import express from "express";
const app = express();
const port: number = 3000;
app.use(express.json());
app.use(express.static("public"));

interface Game {
  src: string;
  title: string;
  ref: string;
  id?: any;
  price?: number;
}
let games: Array<Game> = [
  {
    src: "Atelier Sophie.jpeg",
    title: "Atelier Sophie 2: The Alchemist of the Mysterious Dream",
    ref: "https://store.steampowered.com/app/1621310/Atelier_Sophie_2_The_Alchemist_of_the_Mysterious_Dream/",
  },
  {
    src: "Battle Cry of Freedom.jpeg",
    title: "Battle Cry of Freedom",
    ref: "https://store.steampowered.com/app/1358710/Battle_Cry_of_Freedom/",
  },
  {
    src: "Conan.jpeg",
    title: "Conan Chop Chop",
    ref: "https://store.steampowered.com/app/1061880/Conan_Chop_Chop/",
  },
  {
    src: "Far.jpeg",
    title: "FAR: Changing Tides",
    ref: "https://store.steampowered.com/app/1570010/FAR_Changing_Tides/",
  },
  {
    src: "Heros hour.jpeg",
    title: `Hero's Hour`,
    ref: "https://store.steampowered.com/app/1656780/Heros_Hour/",
  },
  {
    src: "Desk job.jpeg",
    title: "Aperture Desk Job",
    ref: "https://store.steampowered.com/app/1902490/Aperture_Desk_Job/",
  },
  {
    src: "Elex.jpeg",
    title: "Elex Ⅱ",
    ref: "https://store.steampowered.com/app/900040/ELEX_II/",
  },
  {
    src: "Soulash.jpeg",
    title: "Soulash",
    ref: "https://store.steampowered.com/app/1623210/Soulash/",
  },
  {
    src: "Godsbane.jpeg",
    title: "Godsbane",
    ref: "https://store.steampowered.com/app/1480960/Godsbane/",
  },
  {
    src: "Elden ring.jpeg",
    title: "Elden ring",
    ref: "https://store.steampowered.com/agecheck/app/1245620/",
  },
];

  

app.get("/all-games", (req, res) => {
  // console.log(req.query);
  try {
    const error = "No request was received"
    games.forEach((game => {
      game.id = uid()
    }))
    generatePrice(games)
    if(!req) throw new Error(error);
    res.send(games);
    
  } catch (error) {
    res.send({ error: error.message });
  }
});
app.get("/games-byId", (req, res) => {
  try {
    res.send(games);
  } catch (error) {
    res.send({ error: error.message });
  }
});
app.post("/new-game", (req, res) => {
const {title, price, ref, src, id } = req.body;
const games = makeNewGame(title, price, ref, src,id);
res.send(games);
  try {


  } catch (error) {
    res.send({ error: error.message });
  }
});
app.patch("/update-gameRef", (req, res) => {
  const {id} = req.body;
  console.log(id);
  
  try {
    res.send({ok:true, games});
  } catch (error) {
    res.send({ error: error.message });
  }
});
app.patch("/update-gameTitle", (req, res) => {
  try {
    res.send(games);
  } catch (error) {
    res.send({ error: error.message });
  }
});
app.patch("/update-gamePrice", (req, res) => {
  try {
    res.send(games);
  } catch (error) {
    res.send({ error: error.message });
  }
});
app.delete("/delete-game", (req, res) => {
  const {id} = req.body;

  if(!id) throw new Error("no id")
  try {
    console.log(id);
    deleteGame(id)
    res.send({games, ok: true});
  } catch (error) {
    res.send({ error: error.message });
  }
});

function deleteGame(id){
  console.log(id);

 games = games.filter(game => game.id != id)
games.forEach(game =>
   console.log(`${game.id}`)
  )

  return games
}
function makeNewGame(title, price, ref, src, id){
  games.push({title, price, ref, src, id})
  console.log(games);
  
  return games
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function generatePrice(gameArray:Array<Game>){
let price;
gameArray.forEach(game =>{
  price = Math.floor(Math.random() * (60 - 20 + 1)) + 20;
  game.price = price;
})
}
app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
