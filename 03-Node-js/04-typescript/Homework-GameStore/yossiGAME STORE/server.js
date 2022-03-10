const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'))
app.use(express.json());

// function uid() {
//     return Date.now().toString(36) + Math.random().toString(36);
// }
let games = {
    data: [{
            name: 'ONWARD',
            price: 100,
            id: 1,
            img: 'https://i.ytimg.com/vi/BPaeUvZA0Jw/maxresdefault.jpg'
        },
        {
            name: 'Soulash',
            price: 200,
            id: 2,
            img: 'https://img.itch.zone/aW1nLzIxNDkwMTMucG5n/original/vmoKiJ.png'
        },
        {
            name: 'Conan Chop Chop',
            price: 300,
            id: 3,
            img: 'https://www.global-esports.news/wp-content/uploads/2022/02/Conan-Chop-Chop-1.jpg'
        },
        {
            name: 'FAR',
            price: 400,
            id: 4,
            img: 'https://images.gog-statics.com/d27152e79189024693bf67cc04995d80e1a2cad7a6ae232ae285a1b47a1fd815_product_card_v2_mobile_slider_639.jpg'
        },
        {
            name: 'Battle Cry of Freedom',
            price: 500,
            id: 5,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1358710/header.jpg?t=1646262868'
        },
        {
            name: 'ONWARD',
            price: 100,
            id: 1,
            img: 'https://i.ytimg.com/vi/BPaeUvZA0Jw/maxresdefault.jpg'
        }, {
            name: 'Soulash',
            price: 200,
            id: 2,
            img: 'https://img.itch.zone/aW1nLzIxNDkwMTMucG5n/original/vmoKiJ.png'
        }, {
            name: 'Conan Chop Chop',
            price: 300,
            id: 3,
            img: 'https://www.global-esports.news/wp-content/uploads/2022/02/Conan-Chop-Chop-1.jpg'
        }, {
            name: 'FAR',
            price: 400,
            id: 4,
            img: 'https://images.gog-statics.com/d27152e79189024693bf67cc04995d80e1a2cad7a6ae232ae285a1b47a1fd815_product_card_v2_mobile_slider_639.jpg'
        }, {
            name: 'Battle Cry of Freedom',
            price: 500,
            id: 5,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1358710/header.jpg?t=1646262868'
        },
    ],

    addGame(newGame) {

        this.data.push({
            ...newGame
        })
    },

    updateGame(name, price, img, id) {

        const indexId = this.data.filter((game) => game.id == id)

        console.log(indexId)

        indexId.forEach(index => {
            index.name = name
            index.price = price
            index.img = img
        })

        console.log(indexId)
    },
    getGameById(id) {

        const gameById = this.data.filter((game) => game.id == id);
        return gameById
    },
    getGameByPrice(price) {

        const gameByPrice = this.data.filter((game) => game.price == price);
        return gameByPrice
    },
    deleteGame(id) {
        games = this.data.filter((game) => game.id !== id);
        return games
    }

}
app.post('/delete-game', (req, res) => {
    const id = req.body.id;
    games.deleteGame(id)
    res.send(games.data)
})

app.post('/add-game', (req, res) => {
    const addGame = req.body.addGame;
    games.addGame(addGame);
    res.send(games.data)
})

app.get('/get-games', (req, res) => {
    res.send(games.data);
});



app.patch('/update-game', (req, res) => {
    const {
        name,
        price,
        img,
        id
    } = req.body

    games.updateGame(name, price, img, id);
    res.send(games.data)

})

app.get('/get-games-id', function (req, res) {
    const id = req.query.id;

    if (id === '') {
        res.send(games.data)
    }
    const gameById = games.getGameById(id);
    res.send(gameById)
})



app.get('/get-games-price', function (req, res) {
    const price = req.query.price;
    if (price === '') {
        res.send(games.data)
    }
    const gameByPrice = games.getGameByPrice(price)
    res.send(gameByPrice)

})


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})



