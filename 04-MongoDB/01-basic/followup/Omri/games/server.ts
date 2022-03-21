import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://OmriAharonov:moIIfkRPSJr5kmM0@cluster0.kv5s6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const GameSechma = new mongoose.Schema({
    title: String,
    img: String
})

const Game = mongoose.model('myGames', GameSechma);

app.get('/get-games', async (req, res) => {
    try {
        const games = await Game.find({})
        res.send({ ok: true, games })
    } catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
})

app.post('/add-game', async (req, res) => {
    try {
        let { title, img } = req.body;
        if ({ title, img }) {
            const newGame = new Game({ title, img });
            const result = await newGame.save()
            const games = await Game.find({})
            res.send({result,games});
        }
    } catch (error) {
        console.error(error)
        res.send({ error: error.message })
    }
})

app.patch("/update-game", async (req, res) =>{
    try {
        const {gameId, newImg} = req.body;
        if(gameId && newImg){
            const result = await Game.updateOne({_id:gameId},{img:newImg});
            const games = await Game.find({})
            res.send({ok: true, result, games});
        } else{
            throw new Error("Something went wrong");
        }
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
});


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});