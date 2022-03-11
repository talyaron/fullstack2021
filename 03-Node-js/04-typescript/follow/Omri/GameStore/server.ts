import express from 'express';
const app = express();
const port = process.env.PORT || 3002;
app.use(express.static("public"));
app.use(express.json());

interface gameStore{
    games: Array<game>;
    gameById();
    addGame(category: string,title: string,price: number,img: any);
    updateGame(updCategory: string,updTitle: string,updPrice: number,updImg: any);
}

interface game {
    id:any;
    category: string;
    title: string;
    price: number;
    img: any;
}

const gamer: gameStore = {
    games: [
        {
            id: Math.random().toString(36).slice(-8),
            category:'Action',
            title:' The King Of Fighter XV',
            price: 239,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/capsule_184x69.jpg?t=1645084787'
        },
        {
            id: Math.random().toString(36).slice(-8),
            category:'Action',
            title:' The King Of Fighter XV',
            price: 239,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/capsule_184x69.jpg?t=1645084787'
        },
        {
            id: Math.random().toString(36).slice(-8),
            category:'Action',
            title:' The King Of Fighter XV',
            price: 239,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/capsule_184x69.jpg?t=1645084787'
        },
        {
            id: Math.random().toString(36).slice(-8),
            category:'Action',
            title:' The King Of Fighter XV',
            price: 239,
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/capsule_184x69.jpg?t=1645084787'
        },
    ],

    gameById() {

    },

    addGame(category: string,title: string,price: number,img: any) {
        const id = uid();
        this.games.push({id,category,title,price,img})
    },

    updateGame(updCategory: string,updTitle: string,updPrice: number,updImg: any) {
        return
    }
}



const uid = function(){
    return Math.random().toString(36).slice(-8);
}

app.get("/get-games", (req, res) => {
    const gamer = getGames();
    res.send(gamer);
  });

  app.post("/add-game", (req,res) =>{
      const newTitle = req.body.title
      const newCategory = req.body.category
      const newPrice = req.body.price
      const newImg = req.body.img
     gamer.addGame(newCategory,newTitle,newPrice,newImg);
      res.send(gamer.games)
  })
  
function getGames(){
    return gamer.games
}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

