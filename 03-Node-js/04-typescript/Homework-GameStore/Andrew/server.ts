import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

function uid() {
    return Math.random().toString(36).slice(-6);
}

let store = {
    games: [],
    users: [],

}


store.games.push({ id: uid(), name: "Ghostrunner", price: 25, pic: "https://store-images.s-microsoft.com/image/apps.6690.14150012495483667.3dab4f1e-a4bc-43a2-92e3-c7b3b9a91dc2.b0d032b6-40af-4d34-93b5-462d9108f8bc?w=400&h=600", copiesLeft: 3 })
store.games.push({ id: uid(), name: "Cyberpunk 2077", price: 55, pic: "https://www.mobygames.com/images/covers/l/567922-cyberpunk-2077-xbox-one-front-cover.jpg", copiesLeft: 3 })
store.games.push({ id: uid(), name: "Classic Doom", price: 5, pic: "https://doomwiki.org/w/images/8/85/Doom.jpg", copiesLeft: 3 })
store.games.push({ id: uid(), name: "Doom", price: 50, pic: "https://www.mobygames.com/images/covers/l/330930-doom-collector-s-edition-windows-front-cover.jpg", copiesLeft: 3 })
store.games.push({ id: uid(), name: "Doom Eternal", price: 60, pic: "https://images-na.ssl-images-amazon.com/images/I/91qm95y+rZL.jpg", copiesLeft: 3 })
store.games.push({ id: uid(), name: "Hades", price: 20, pic: "https://images.ctfassets.net/5owu3y35gz1g/221gU3J0H5urRoHsNbYDpf/910e01518b59323f8624c1a5a2001ff5/Hades_Rating_Cover__1_.png?w=225&q=100", copiesLeft: 3 })

app.get('/getAllGames', (req, res) => {
    res.send(store.games);
})

app.delete('/deleteGame', (req, res) => {
    store.games = store.games.filter( game => game.id != req.body.id)
    res.send(store.games);
})

app.post('/editGame', (req,res) =>{
    const updatedGame = req.body.game
    const i = store.games.findIndex(game => game.id == updatedGame.id)
    store.games[i].name = updatedGame.name;
    store.games[i].pic = updatedGame.pic;
    store.games[i].price = updatedGame.price;
    res.send(store.games);
})

app.post('/addGame', (req,res) =>{
    
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
