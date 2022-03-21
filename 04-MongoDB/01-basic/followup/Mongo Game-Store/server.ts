import express from 'express';
const app = express();
const port = process.env.PORT || 4000;

import  mongoose from 'mongoose'

mongoose.connect('mongodb+srv://leon93:ym965874632541@cluster0.umet4.mongodb.net/myFirstDatabase?retryWrites=true&w=majorit');

app.use(express.static("public"));
app.use(express.json());

const GameSchema = new mongoose.Schema({
    name: String,
    type: String,
    img: String
  })

  const Game = mongoose.model('gamesDb', GameSchema)

  app.post('/game', async (req, res) => {

    try {
        const {name, type,img} = req.body
        const newGame = new Game({name, type,img})
        const games = await newGame.save()
        console.log(games);
        
        res.send({games})
  
        if (!name || !type) throw new Error("No name or type in app.post game");
        
    } catch (error) {
        console.error(error)
        res.send({error: error.message})
    }
  
  });

  app.get('/get-games',async(req,res)=>{
    try{
      const games=await Game.find({})
      console.log(games);
      
      res.send({games})
    }
    catch (error){
      console.log(error);
      res.send({error:error.message})
    }
  })

  app.patch('/update-games',async (req,res)=>{
    
      const {gameId,type}= req.body;
      const games= await Game.updateOne({_id:gameId},{type:type})
      res.send(games) 
    
    })
  
    app.delete('/delete-games',async(req,res)=>{
     const{gameId}=req.body;
     const Games=await Game.deleteOne({_id:gameId})
     res.send(Games)
    })


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
