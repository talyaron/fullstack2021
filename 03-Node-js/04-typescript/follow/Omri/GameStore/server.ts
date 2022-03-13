import express from 'express';
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(express.json());

interface gameStore {
    tempGames: Array<game>;
    games: Array<game>;
    gameById(searchTerm);
    addGame(category: string, title: string, price: number, img: any);
    updateGame(oldTitle: string, updCategory: string, updTitle: string, updPrice: number, updImg: any);
}

interface game {
    id: any;
    category: string;
    title: string;
    price: number;
    img: any;
}

const gamer: gameStore = {
     tempGames: [],
    games: [
        {
            id: Math.random().toString(36).slice(-8),
            category: 'Action',
            title: 'The King Of Fighter XV',
            price: 239,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/capsule_184x69.jpg?t=1645084787'
        },
        {
            id: Math.random().toString(36).slice(-8),
            category: 'Action',
            title: 'Vermintide 2',
            price: 110,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/552500/capsule_231x87.jpg?t=1646836065'
        },
        {
            id: Math.random().toString(36).slice(-8),
            category: 'Sport',
            title: 'Grand Mountain Adventure: Wonderlands',
            price: 80,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1247360/capsule_184x69.jpg?t=1646927968'
        },
        {
            id: Math.random().toString(36).slice(-8),
            category: 'Adventure',
            title: 'Hood: Outlaws & Legends',
            price: 69,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/927350/capsule_sm_120.jpg?t=1643817161'
        },
    ],

    gameById(searchTerm) {
        const regex = new RegExp(searchTerm, 'i')
        if (searchTerm.length > 0){
            this.tempGames = this.games.filter((game) => game.id.match(regex))
            return this.tempGames;
        } 
        else{
            this.tempGames = []
        }
    },

    addGame(category: string, title: string, price: number, img: any) {
        const id = uid();
        this.games.push({ id, category, title, price, img })
    },

    updateGame(oldTitle: string, updCategory: string, updTitle: string, updPrice: number, updImg: any) {
        this.games.forEach(game => {
            if (oldTitle === game.title) {
                if (updCategory !== '') {
                    game.category = updCategory;
                }

                if (updTitle !== '') {
                    game.title = updTitle;
                }

                if (updPrice > 0) {
                    game.price = updPrice;
                }

                if (updImg !== '') {
                    game.img = updImg
                }
            }
        })

    }
}



const uid = function () {
    return Math.random().toString(36).slice(-8);
}

app.get("/get-games", (req, res) => {
    const gamer = getGames();
    res.send(gamer);
});

app.post("/add-game", (req, res) => {
    const newTitle = req.body.title
    const newCategory = req.body.category
    const newPrice = req.body.price
    const newImg = req.body.img
    gamer.addGame(newCategory, newTitle, newPrice, newImg);
    res.send(gamer.games)
})

app.patch("/update-game", (req, res) => {
    const oldTitle = req.body.oldTitle;
    const title = req.body.title;
    const category = req.body.category;
    const price = req.body.price;
    const img = req.body.img;
    gamer.updateGame(oldTitle, category, title, price, img)
    res.send(gamer.games)
})

app.patch("/getGame-by-id", (req, res) => {
    const searchTerm = req.body.searchTerm
    gamer.gameById(searchTerm);
    if(gamer.tempGames.length > 0){
        res.send(gamer.tempGames)
    } else{
        res.send(gamer.games)
    }
    
})

function getGames() {
    return gamer.games
}

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});



