import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

const cards=[
    {name:"Harry Potter",imgUrl:""},
    {name:"Hermione Granger",imgUrl:""},
    {name:"Ron Weasley",imgUrl:"https://c.tenor.com/SEqy2-RaIxcAAAAC/harry-potter-chocolate-frog-card.gif"},
    {name:"Severus Snape",imgUrl:""},
    {name:"Lord Voldemort",imgUrl:""},
    {name:"Albus Dumbledore",imgUrl:""},
    {name:"Dobby",imgUrl:""},
    {name:"Rubeus Hagrid",imgUrl:""},
]

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
