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
}
const games: Array<Game> = [
  {
    src: "./images/Atelier Sophie",
    title: "Atelier Sophie 2: The Alchemist of the Mysterious Dream",
    ref: "https://store.steampowered.com/app/1621310/Atelier_Sophie_2_The_Alchemist_of_the_Mysterious_Dream/",
  },
  {
    src: "./images/Battle Cry of Freedom",
    title: "Battle Cry of Freedom",
    ref: "https://store.steampowered.com/app/1358710/Battle_Cry_of_Freedom/",
  },
  {
    src: "./images/Conan",
    title: "Conan Chop Chop",
    ref: "https://store.steampowered.com/app/1061880/Conan_Chop_Chop/",
  },
  {
    src: "./images/Far",
    title: "FAR: Changing Tides",
    ref: "https://store.steampowered.com/app/1570010/FAR_Changing_Tides/",
  },
  {
    src: "./images/Heros hour",
    title: `Hero's Hour`,
    ref: "https://store.steampowered.com/app/1656780/Heros_Hour/",
  },
  {
    src: "./images/Desk job",
    title: "Aperture Desk Job",
    ref: "https://store.steampowered.com/app/1902490/Aperture_Desk_Job/",
  },
  {
    src: "./images/Elex",
    title: "Elex Ⅱ",
    ref: "https://store.steampowered.com/app/900040/ELEX_II/",
  },
  {
    src: "./images/Soulash",
    title: "Soulash",
    ref: "https://store.steampowered.com/app/1623210/Soulash/",
  },
  {
    src: "./images/Godsbane",
    title: "Godsbane",
    ref: "https://store.steampowered.com/app/1480960/Godsbane/",
  },
  {
    src: "./images/Elden ring",
    title: "Elden ring",
    ref: "https://store.steampowered.com/agecheck/app/1245620/",
  },
];

  function renderAll(gameArray: Array<Game>) {
    let html;
    try {
    gameArray.forEach(
      (game) =>
        (html += `<div class="game">
  <div class="game_image">
  <img src="${game.src}.jpeg">
  </div>
  <div class="game_title"></div>
  <div class="game_link"></div>
  <div class="game_id"></div>
</div>`),
    );
  }
  catch (error) {
    console.error(error)
    
  }
} 

app.get("/all-games", (req, res) => {
  try {
    res.send(games);
    res.send(renderAll(games));
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
  try {
    res.send(games);
  } catch (error) {
    res.send({ error: error.message });
  }
});
app.patch("/update-game", (req, res) => {
  try {
    res.send(games);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
