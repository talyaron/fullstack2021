import express from "express";
const app = express();
const port = 3007;
app.use(express.json());
app.use(express.static("public"));


 
app.listen(port, () => {
    console.log(`server listen on port ${port}`)
})

const cards = [
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"ace of hearts.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
         afterFlipImg:"ace of hearts.png",
         beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"Joker.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"Joker.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"8 of hearts.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"8 of hearts.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"9 of hearts.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"9 of hearts.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"10 of hearts.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"10 of hearts.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"jack of hearts.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"jack of hearts.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"queen of hearts.jpg",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"queen of hearts.jpg",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"king of hearts.png",
        beforeFlipImg:"backSide.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        afterFlipImg:"king of hearts.png",
        beforeFlipImg:"backSide.png"
    }
]

app.get("/newGame", (req,res) => {
    shuffleCards(cards);
    res.send(cards)
})


function shuffleCards(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
