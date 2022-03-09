import express from 'express';
const app = express();
const port = 3000;

const games = [
    {name: 'The Sims', price: '60$'},
    {name: 'Counter Strike', price: '60$'},
    {name: 'Fifa', price: '60$'},
    {name: 'Quake', price: '60$'},
    {name: 'Portal', price: '60$'},
    {name: 'Elden Ring', price: '60$'},
    {name: 'Dying Light', price: '60$'},
    {name: 'Fall Guys', price: '60$'},
]
app.get('/get-games', (req, res) => {
  res.send(games);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

