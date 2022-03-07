import express from "express";
const app = express();
const port: number = 3000;
app.use(express.json());
app.use(express.static("public"));

const cards = [
  {src: './images/1776' ,id: 1, pairId: 0},
  {src: './images/Bye', id: 2 , pairId: 1},
  {src: './images/cook', id: 3 , pairId: 2},
  {src: './images/cuisades', id: 4, pairId: 3},
  {src: './images/Harry Potter 2', id: 5, pairId: 4},
  {src: './images/Harry Potter', id: 6, pairId: 5},
  {src: './images/Star Wars', id: 7, pairId: 6},
  {src: './images/the good surgeon', id: 8, pairId: 7},
  {src: './images/1776' ,id: 15, pairId: 0},
  {src: './images/Bye', id: 16, pairId: 1},
  {src: './images/cook', id: 13 , pairId: 2},
  {src: './images/cuisades', id: 12, pairId: 3},
  {src: './images/Harry Potter 2', id: 11, pairId: 4},
  {src: './images/Harry Potter', id: 9, pairId: 5},
  {src: './images/Star Wars', id: 14, pairId: 6},
  {src: './images/the good surgeon', id: 10, pairId: 7},
];


app.get('/new-game', (req, res) => {
  try {
    res.send(cards);
  } catch (error) {
    res.send({error:error.message});
  }
});

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
  });
  