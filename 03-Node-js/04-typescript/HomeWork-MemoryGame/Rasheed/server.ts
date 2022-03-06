import express from 'express';
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

const deckCards = [
    "AB.png","AB.png","S.png","S.png",
    "COD.png","COD.png","DL.png","DL.png","DS.png",
    "DS.png","NFH.png","NFH.png","NFS.png",
    "NFS.png","POP.png","POP.png"
];


app.get('/get-cards', (req, res) => {
  const shuffledDeck = shuffle(deckCards)
    
    res.send(shuffledDeck);
  });

  function shuffle(arr:Array<string>) {
    let currentIndex = arr.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;

    }
    return arr
}



  
  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });