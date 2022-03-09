
import express from 'express';
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());

let uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const games = [
    {name:'FIFA 22', price:75, id: uid()},
    {name:'NBA 2K22', price:65, id: uid()},
    {name:'Call Of Duty', price:40, id: uid()},
    {name:'GTA 5', price:63, id: uid()},
    {name:'Need For Speed', price:53, id: uid()},
    {name:'Super Mario', price:25, id: uid()}
]

app.get('/get-games', (req, res) => {
  res.send(games);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
