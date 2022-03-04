import express from 'express';
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

const a = "6";
app.post('/page', (req, res) => {
    console.log(req.body.id);
    res.send(a);

})

function uid() {
    return (Math.random().toString(36).slice(-10));
}

class CardPair {
    constructor(id1stHalf, id2ndHalf, CardPictures) {

    }
}

const cards = {
    deck: [],
    idKeys: [],
    picUrls: [
        "https://i.imgur.com/Ihkz0Ky.jpeg",
        "https://i.imgur.com/ekUCuCO.jpeg",
        "https://i.imgur.com/sJnuj7r.jpeg",
        "https://i.imgur.com/dBwvFJZ.jpeg",
        "https://i.imgur.com/6y7R7dJ.jpeg",
        "https://i.imgur.com/eX9ck5H.jpeg",
        "https://i.imgur.com/otslb5L.jpeg",
        "https://i.imgur.com/Qe1y4n0.jpeg",
        "https://i.imgur.com/oV0RFkF.jpeg",
        "https://i.imgur.com/KkSGNs5.jpeg",
        "https://i.imgur.com/Za8RSRK.jpeg",
        "https://i.imgur.com/kNInETD.jpeg",
        "https://i.imgur.com/Y5QkKlG.jpeg",
        "https://i.imgur.com/vs1Bq98.jpeg",
        "https://i.imgur.com/zwGyrTb.jpeg",
        "https://i.imgur.com/gA9gA0C.jpeg",
        "https://i.imgur.com/DT7PArI.jpeg",
        "https://i.imgur.com/t4NWx4E.jpeg",
        "https://i.imgur.com/j5NQ94P.jpeg",
        "https://i.imgur.com/9VgDgJe.jpeg",
        "https://i.imgur.com/FZDEbj5.jpeg",
        "https://i.imgur.com/0oCCX5m.jpeg",
        "https://i.imgur.com/TH20Y5F.jpeg"
        // "https://i.imgur.com/ETlethM.jpeg"
    ],
    createDeck(numOfCards) {
        [this.idKeys, this.deck] = [[], []];

        for (let i = 0; i < numOfCards / 2; i++) {
            this.idKeys.push(uid()); // creates an id pair for later verification
            const pair = [this.idKeys[i].substring(0, 5), this.idKeys[i].substring(5, 10)]; // splits the id pair into separated ids for adding a pair of cards to the deck
            this.deck.push({ id: pair[0], picSRC: this.picUrls[i] }, { id: pair[1], picSRC: this.picUrls[i] });
        };
        this.shuffleDeck();
    },
    shuffleDeck() {
        for (let i = 0; i < this.deck.length; i++) {
            const j = Math.floor(Math.random() * this.deck.length);
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]
        }
    }


}

app.post('/initGame', (req, res) => {
    switch (req.body.difficulty) {
        case "easy":
            cards.createDeck(8);
            break;
        case "normal":
            cards.createDeck(12);
            break;
        case "hard":
            cards.createDeck(16);
            break;
    }
    const cardIds = cards.deck.map(obj => obj.id);
    res.send(cardIds);
});

app.get('/getCard', (req, res) => {
    const i = cards.deck.findIndex((card) => card.id == req.query.id);
    res.send(cards.deck[i].picSRC);
})

app.get('/checkPair', (req, res) =>{
    console.log(req.query.firstId , req.query.secondId);
    const pair1 = req.query.firstId + "" + req.query.secondId
    const pair2 = req.query.secondId + "" + req.query.firstId
    if(cards.idKeys.some((key) => key == pair1 || key == pair2)){
        console.log("Pair!");
        res.send(true);
    }
    else{
        res.send(false);
    }
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});