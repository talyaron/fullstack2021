import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://andrewLSHFY:s3Hz4045sYvAzjRn@cluster0.cybvt.mongodb.net/FS2021?retryWrites=true&w=majority');
const GamesSchema = new mongoose.Schema({
    name: String,
    type: String,
    img: String
})

const Game = mongoose.model('games', GamesSchema);

app.get('/get-games', async (req, res) => {
    const games = await Game.find();
    res.send(games);
})

app.patch('/update-game', (req, res) => {
    const { game } = req.body;
    Game.updateOne({ _id: game._id }, { name: game.name, type: game.type });
})

app.put('/add-game', (req, res) => {
    const { game } = req.body;
    const newGame = new Game(game);
    newGame.save();
})


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
