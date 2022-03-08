import express from 'express';
const app = express();
const port = process.env.PORT || 3002;
app.use(express.static("public"));
app.use(express.json());

interface gameStore{
    games: Array<game>;
    gameById();
    addGame();
    updateGame();
}

interface game {
    id: any;
    category: string;
    title: string;
    price: number;
    img: any;
}

const gamer: gameStore = {
    games: [

    ],
    gameById() {

    },
    addGame() {

    },
    updateGame() {

    },
}
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


