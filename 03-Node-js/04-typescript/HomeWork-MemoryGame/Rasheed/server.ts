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
    
    res.send(deckCards);
  });
  
  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });