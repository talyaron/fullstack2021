import express from 'express';
const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(express.json());


const games = [
  { name: 'The Sims', price: 60 },
  { name: 'Counter Strike', price: 60 },
  { name: 'Fifa', price: 60 },
  { name: 'Quake', price: 60 },
  { name: 'Portal', price: 60 },
  { name: 'Elden Ring', price: 60 },
  { name: 'Dying Light', price: 60 },
  { name: 'Fall Guys', price: 60 },
]

app.get('/get-games', (req, res) => {
  res.send(games);
});

app.post('/delete-game', (req, res) => {

  const deleteName = req.body
  const afterDelete = deleteGame(deleteName)
  res.send(afterDelete)

})

app.patch('/update-game', (req, res) => {

  const newName = req.body.newName
  const newPrice = req.body.newPrice
  const gameName = req.body.gameName

  const afterUpdate = updateGame(gameName, newName, newPrice)
  res.send(afterUpdate)

})

function deleteGame(game) {

  const index = games.findIndex(x => x.name === `${game.name}`)
  games.splice(index, 1)
  return games;

}

function updateGame(gameName, newName, newPrice) {

  const index = games.findIndex(x => x.name === gameName)
  games[index].name = newName;
  games[index].price = newPrice;

  return games;

}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

