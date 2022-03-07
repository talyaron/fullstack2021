import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());


let MemoryCards = [

  { src: 'img/waterMelon.PNG', name: 'waterMalon', id: 0 },
  { src: 'img/pineapple.PNG', name: 'pineapple', id: 1 },
  { src: 'img/orange.PNG', name: 'orange', id: 2 },
  { src: 'img/date.PNG', name: 'date', id: 3 },
  { src: 'img/bannana.PNG', name: 'bannana', id: 4 },
  { src: 'img/apple.PNG', name: 'apple', id: 5 },

  { src: 'img/waterMelon.PNG', name: 'waterMalon', id: 0 },
  { src: 'img/pineapple.PNG', name: 'pineapple', id: 1 },
  { src: 'img/orange.PNG', name: 'orange', id: 2 },
  { src: 'img/date.PNG', name: 'date', id: 3 },
  { src: 'img/bannana.PNG', name: 'bannana', id: 4 },
  { src: 'img/apple.PNG', name: 'apple', id: 5 },



  // {src: 'https://www.yo-yoo.co.il/memory/uploads/d2749c87adfd70fed3a424cd8e6b68171ba8cfbd.png', name: 'waterMalon'},
  // {src: 'https://www.yo-yoo.co.il/memory/uploads/e1feec075b60430d4f470b0068e61b29d116d0bf.png', id: uid(), pairId: 2, name: 'pineApple'},
  // {src: 'https://www.yo-yoo.co.il/memory/uploads/d79c52c17d3c4fea646ebee7a6f74d1894786f99.png', id: uid(), pairId: 3, name: 'apple'},
  // {src: 'https://www.yo-yoo.co.il/memory/uploads/8dfd21234f799fca674d09fdc0c17154cfa09c7a.png', id: uid(), pairId: 4, name: 'bannana'},
  // {src: 'https://www.yo-yoo.co.il/memory/uploads/8f063d267f909d484a78e5d11a84acef0ed502d3.png', id: uid(), pairId: 5, name: 'orange'},
  // {src: 'https://www.yo-yoo.co.il/memory/uploads/1ea655f6476f48085718acf1e1f0b8f57e0a8a4c.png', id: uid(), pairId: 6, name: 'date'},
  // // {src: 'https://www.yo-yoo.co.il/memory/uploads/9fe4755e4ed9d42424312a3b2a976d1088dd1885.png', id: uid(), pairId: 7, name: 'pear'},
  // // {src: 'https://www.yo-yoo.co.il/memory/uploads/5480845160364c5f6d8541dc01a6b30a08d26c2f.png', id: uid(), pairId: 8, name: 'plum'},

];

// let unFlippedCards = [
//   { src: 'img/fruits.PNG', name: 'fruits' },
//   { src: 'img/white.PNG', name: 'white' },
// ]


app.get('/new-game', (req, res) => {
  const shuffled =  shuffleCards(MemoryCards);
  res.send(shuffled);
});

function shuffleCards(MemoryCards){
  return MemoryCards.sort(()=> .5 - Math.random())
}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
