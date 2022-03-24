import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

let uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}; let games = [
  { name: 'tamir', id: uid() },
  { name: 'aviel', id: uid() },
  { name: 'yosi', id: uid() },
  { name: 'yair', id: uid() },
  { name: 'tamtam', id: uid() },
]




app.get('/getall', (req, res) => {
  res.send(games);
});

app.delete('/delete-game', (req, res) => {
  const { id } = req.body  
  if (id) {
    const index = games.findIndex((game) => game.id === id)
    console.log(index);

    games = games.filter((game) => game.id !== id)

  }
  res.send({})

})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
