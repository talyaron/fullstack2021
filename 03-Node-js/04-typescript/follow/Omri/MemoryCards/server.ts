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
        img:"ace of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
         img:"ace of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"Joker.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"Joker.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"8 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"8 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"9 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"9 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"10 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"10 of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"jack of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"jack of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"queen of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"queen of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"king of hearts.png"
    },
    {
        id: Math.random().toString(36).slice(-8),
        // pairId:
        img:"king of hearts.png"
    }
]

app.get("/newGame", (req,res) => {
    res.send(cards)
})

